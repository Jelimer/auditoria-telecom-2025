import React, { useState, useEffect, useRef } from 'react';
import {
  FileSpreadsheet,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  BookmarkCheck,
  Calculator,
  Scale,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Pencil,
  Check,
  X,
  RotateCcw
} from 'lucide-react';
import { papelesTrabajo, marcasAuditoria, getMarcasPorRubro } from '../data/etapas2y3Data';
import { materialidadData, rubrosSignificativos } from '../data/etapa1Data';
import {
  NORMAS_DICCIONARIO,
  TERMINOS_AUDITORIA_DICCIONARIO,
  NormaTooltip,
  TerminoAuditoriaTooltip,
  renderTextWithNormas,
  renderFormattedRichText
} from './NormaTooltip';

export {
  NORMAS_DICCIONARIO,
  TERMINOS_AUDITORIA_DICCIONARIO,
  NormaTooltip,
  TerminoAuditoriaTooltip,
  renderTextWithNormas,
  renderFormattedRichText
};

export function FormattingToolbar({ onFormat, isDark = false, compact = false }) {
  const btnBase = isDark
    ? 'px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-200 text-xs cursor-pointer flex items-center gap-1 transition-colors shadow-2xs'
    : 'px-2 py-0.5 rounded bg-white hover:bg-teal-50 border border-slate-300 hover:border-teal-400 text-slate-800 text-xs cursor-pointer flex items-center gap-1 transition-colors shadow-2xs';

  return (
    <div
      className={`flex flex-wrap items-center gap-1.5 p-1.5 rounded-lg mb-1.5 ${
        isDark ? 'bg-slate-900 border border-slate-700' : 'bg-slate-100 border border-slate-200'
      }`}
    >
      <span
        className={`text-[10px] font-bold uppercase tracking-wider ${
          isDark ? 'text-teal-400' : 'text-teal-800'
        }`}
      >
        Formato:
      </span>

      {/* Negrita */}
      <button
        type="button"
        onClick={() => onFormat('**', '**')}
        title="Añadir negrita (**texto**)"
        className={btnBase}
      >
        <span className="font-mono font-black text-sm leading-none">B</span>
        <span className="text-[11px] font-bold">Negrita</span>
      </button>

      {/* Cursiva */}
      <button
        type="button"
        onClick={() => onFormat('*', '*')}
        title="Añadir cursiva (*texto*)"
        className={btnBase}
      >
        <span className="italic font-serif font-black text-sm leading-none">C</span>
        <span className="text-[11px] font-semibold italic">Cursiva</span>
      </button>

      {/* Subrayado */}
      <button
        type="button"
        onClick={() => onFormat('<u>', '</u>')}
        title="Añadir subrayado (<u>texto</u>)"
        className={btnBase}
      >
        <span className="underline font-mono font-black text-sm leading-none">S</span>
        <span className="text-[11px] font-semibold underline">Subrayado</span>
      </button>

      {/* Lista */}
      <button
        type="button"
        onClick={() => onFormat('• ', '')}
        title="Insertar viñeta de lista (• )"
        className={btnBase}
      >
        <span className="text-teal-500 font-black">•</span>
        <span className="text-[11px] font-medium">Lista</span>
      </button>

      {/* Salto de línea */}
      <button
        type="button"
        onClick={() => onFormat('\n', '')}
        title="Insertar salto de línea"
        className={btnBase}
      >
        <span className="text-[11px] font-medium">↵ Salto</span>
      </button>

      {!compact && (
        <span
          className={`text-[10px] ml-auto hidden sm:inline ${
            isDark ? 'text-slate-400' : 'text-slate-500'
          } italic`}
        >
          **negrita** | *cursiva* | &lt;u&gt;subrayado&lt;/u&gt;
        </span>
      )}
    </div>
  );
}

export default function Etapa2EjecucionView({
  ajustesState,
  onToggleAjusteAceptado,
  onNavigate,
  subTarget,
  subTargetTick
}) {
  const [selectedPTId, setSelectedPTId] = useState('pt-a');
  const [expandedProcedimientos, setExpandedProcedimientos] = useState({});
  const [expandAllProcedimientos, setExpandAllProcedimientos] = useState(false);
  const [expandedCedulas, setExpandedCedulas] = useState({});
  const [expandAllCedulas, setExpandAllCedulas] = useState(false);
  const [expandedSteps, setExpandedSteps] = useState({});
  const [mostrarTodosAjustes, setMostrarTodosAjustes] = useState(false);
  const [expandResumenGeneral, setExpandResumenGeneral] = useState(false);

  // Estados para textos editables de conclusiones y notas personales del usuario (con persistencia en localStorage)
  const [conclusionesCustom, setConclusionesCustom] = useState(() => {
    try {
      const saved = localStorage.getItem('audiia_conclusiones_rubros_v1');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });

  const [pasosNarrativosCustom, setPasosNarrativosCustom] = useState(() => {
    try {
      const saved = localStorage.getItem('audiia_pasos_narrativos_v1');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });

  const [editingField, setEditingField] = useState(null);
  const [tempEditText, setTempEditText] = useState('');
  const textareaRef = useRef(null);

  const applyFormat = (prefix, suffix) => {
    if (!textareaRef.current) return;
    const el = textareaRef.current;
    const start = el.selectionStart;
    const end = el.selectionEnd;
    const text = tempEditText || '';
    const selected = text.substring(start, end);

    const replacement = selected.length > 0 ? `${prefix}${selected}${suffix}` : `${prefix}texto${suffix}`;
    const newText = text.substring(0, start) + replacement + text.substring(end);
    setTempEditText(newText);

    setTimeout(() => {
      if (el) {
        el.focus();
        const cursorStart = start + prefix.length;
        const cursorEnd = cursorStart + (selected.length || 5);
        el.setSelectionRange(cursorStart, cursorEnd);
      }
    }, 15);
  };

  const handleStartEdit = (fieldKey, initialText) => {
    setEditingField(fieldKey);
    setTempEditText(initialText);
  };

  const handleCancelEdit = () => {
    setEditingField(null);
    setTempEditText('');
  };

  const handleSaveConclusion = (ptId) => {
    const updated = { ...conclusionesCustom, [ptId]: tempEditText };
    setConclusionesCustom(updated);
    try {
      localStorage.setItem('audiia_conclusiones_rubros_v1', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
    setEditingField(null);
  };

  const handleResetConclusion = (ptId) => {
    const ok = window.confirm(
      '¿Estás seguro de que deseás restablecer al texto original del informe? Se perderán las modificaciones y anotaciones que hayas guardado en esta conclusión.'
    );
    if (!ok) return;

    const updated = { ...conclusionesCustom };
    delete updated[ptId];
    setConclusionesCustom(updated);
    try {
      localStorage.setItem('audiia_conclusiones_rubros_v1', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
    setEditingField(null);
  };

  const handleSavePaso = (stepKey) => {
    const updated = { ...pasosNarrativosCustom, [stepKey]: tempEditText };
    setPasosNarrativosCustom(updated);
    try {
      localStorage.setItem('audiia_pasos_narrativos_v1', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
    setEditingField(null);
  };

  const handleResetPaso = (stepKey) => {
    const ok = window.confirm(
      '¿Estás seguro de que deseás restablecer al texto original de este paso? Se perderán las notas personalizadas que hayas guardado.'
    );
    if (!ok) return;

    const updated = { ...pasosNarrativosCustom };
    delete updated[stepKey];
    setPasosNarrativosCustom(updated);
    try {
      localStorage.setItem('audiia_pasos_narrativos_v1', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
    setEditingField(null);
  };

  useEffect(() => {
    if (!subTarget) return;
    const lower = subTarget.toLowerCase().trim();
    if (lower === 'sec-pae') {
      setTimeout(() => {
        const el = document.getElementById('sec-pae');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 60);
      return;
    }

    // Soporte para selección de PT (ej: "pt-a", "pt-f") o procedimiento específico (ej: "pt-c4", "pt-b2")
    const match = lower.match(/^pt-([a-f])(\d+)?$/i);
    if (match) {
      const ptLetter = match[1].toLowerCase();
      const targetPT = `pt-${ptLetter}`;
      setSelectedPTId(targetPT);

      if (match[2]) {
        // Scroll y foco visual con animación sobre la cédula analítica específica
        setTimeout(() => {
          const procEl = document.getElementById(lower);
          if (procEl) {
            procEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
            procEl.classList.add('ring-4', 'ring-amber-400', 'bg-amber-50/60');
            setTimeout(() => {
              procEl.classList.remove('ring-4', 'ring-amber-400', 'bg-amber-50/60');
            }, 3000);
          }
        }, 150);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, [subTarget, subTargetTick]);

  const activePT = papelesTrabajo.find((pt) => pt.id === selectedPTId) || papelesTrabajo[0];
  const isPTA = activePT.id === 'pt-a' || activePT.id === 'pt-e' || activePT.id === 'pt-b';
  const activeRubro =
    rubrosSignificativos.find(
      (r) => r.codigoPrograma.toLowerCase().replace('programa ', 'pt-') === activePT.id.toLowerCase()
    ) || rubrosSignificativos[0];

  // Filtro de ajustes según el rubro activo (por defecto muestra sólo los ajustes del rubro activo, ej. Bienes de Uso = AJ-01)
  const ajustesDelRubroActivo = ajustesState.filter((a) => {
    if (activePT.id === 'pt-a') {
      return a.rubro.toLowerCase().includes('bienes de uso') || a.refPT.includes('PT-A');
    }
    if (activePT.id === 'pt-e') {
      return a.refPT.includes('PT-E') || a.rubro.toLowerCase().includes('intangibles');
    }
    if (activePT.id === 'pt-b') {
      return a.refPT.includes('PT-B') || a.rubro.toLowerCase().includes('créditos');
    }
    if (activePT.id === 'pt-d') {
      return a.refPT.includes('PT-D') || a.rubro.toLowerCase().includes('ventas');
    }
    return a.refPT.toLowerCase().includes(activePT.codigo.toLowerCase());
  });

  const ajustesAMostrar = mostrarTodosAjustes
    ? ajustesState
    : ajustesDelRubroActivo;

  // Cálculo del efecto acumulado de ajustes propuestos y NO aceptados por la Gerencia
  const montoAjustesPropuestos = ajustesAMostrar
    .filter((a) => a.superaPAE)
    .reduce((acc, a) => acc + a.montoMillones, 0);

  const montoAjustesNoRegistrados = ajustesAMostrar
    .filter((a) => a.superaPAE && !a.aceptado)
    .reduce((acc, a) => acc + a.montoMillones, 0);

  const aj01Item = ajustesState.find((a) => a.id === 'aj-1');
  const aj01Aceptado = aj01Item ? aj01Item.aceptado : true;

  const totalAjustesGlobalNoRegistrados = ajustesState
    .filter((a) => a.superaPAE && !a.aceptado)
    .reduce((acc, a) => acc + a.montoMillones, 0);

  return (
    <div className="space-y-6">
      {/* Encabezado Etapa 2 */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <span className="px-2.5 py-1 rounded-md text-xs font-extrabold bg-amber-500 text-white">
              ETAPA 2 — EJECUCIÓN (PAPELES DE TRABAJO, EVIDENCIA Y PLANILLA DE AJUSTES PAE)
            </span>
            <h2 className="text-xl font-extrabold text-slate-900 mt-2">
              Legajo Corriente de Papeles de Trabajo (PT-A a PT-F) y Planilla de Ajustes Propuestos
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Ejecución secuencial de los Programas A, B, C, D, E y F sobre los EECC de Telecom Argentina S.A. al 31/12/2025 • Obtención de elementos de juicio válidos y suficientes (RT 37 / RT 53 y Carlos Slosse).
            </p>
          </div>
          <button
            onClick={() => onNavigate('etapa3-informe')}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 transition-colors cursor-pointer"
          >
            Ir a Etapa 3: Conclusión e Informe del Auditor <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Selector de los 6 Papeles de Trabajo (PT-A a PT-F) con badges de prioridad */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 mt-4">
          {papelesTrabajo.map((pt) => {
            const isSelected = pt.id === selectedPTId;
            return (
              <button
                key={pt.id}
                onClick={() => {
                  setSelectedPTId(pt.id);
                  if (onNavigate) {
                    onNavigate('etapa2-ejecucion', pt.id);
                  }
                }}
                className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm ring-2 ring-amber-400'
                    : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-white hover:border-teal-400'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-1">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-extrabold font-mono ${
                        isSelected ? 'bg-amber-500 text-white' : 'bg-amber-100 text-amber-900'
                      }`}
                    >
                      {pt.codigo}
                    </span>
                  </div>
                  <p className="text-xs font-extrabold mt-2 line-clamp-2">{pt.rubro}</p>
                  {pt.vinculadoCon && (
                    <span className="text-[9px] font-bold text-blue-600 block mt-0.5">
                      🔗 {pt.vinculadoCon}
                    </span>
                  )}
                </div>
                <div className="mt-2 pt-2 border-t border-current/10 flex justify-between text-[11px] font-mono">
                  <span>Libros: ${(pt.saldoSegunLibros / 1000).toFixed(0)}k M</span>
                  <span>
                    Aj: {pt.ajustePropuestoNeto >= 0 ? `+${pt.ajustePropuestoNeto}` : pt.ajustePropuestoNeto}M
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* PROGRAMA DE TRABAJO FORMALIZADO Y GUÍA PRÁCTICA DEL PAPEL DE TRABAJO ACTIVO (Oculto en Bienes de Uso porque ya está integrado en cada cédula) */}
      {activeRubro && activeRubro.programaTrabajo && activePT.id !== 'pt-a' && (
        <div className="p-5 rounded-2xl bg-teal-950 text-white shadow-xs border border-teal-900 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-teal-800">
            <div>
              <span className="text-xs font-extrabold uppercase text-lime-400">
                Programa de Auditoría en Ejecución (Carlos A. Slosse)
              </span>
              <h4 className="text-base font-extrabold text-white mt-0.5">
                {activePT.codigo}: {activePT.programa} — {activePT.rubro}
              </h4>
            </div>
            <button
              type="button"
              onClick={() => setExpandAllProcedimientos((prev) => !prev)}
              className="px-3 py-1.5 rounded-lg bg-teal-800 hover:bg-teal-700 text-lime-300 text-xs font-extrabold transition-colors cursor-pointer border border-teal-600/60 shadow-xs"
            >
              {expandAllProcedimientos ? '▲ Ocultar Explicaciones Prácticas' : '▼ Expandir Explicación de Cada Procedimiento'}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeRubro.programaTrabajo.map((bloque, i) => (
              <div
                key={i}
                className="p-3.5 rounded-xl bg-teal-900/70 border border-teal-800 space-y-3"
              >
                <h5 className="text-xs font-extrabold uppercase text-lime-300">
                  {i + 1}. {bloque.Bloque}
                </h5>
                <ul className="space-y-2.5 text-xs text-teal-50 leading-relaxed">
                  {bloque.Pasos.map((paso, j) => {
                    const isObj = typeof paso === 'object' && paso !== null;
                    const texto = isObj ? paso.texto : paso;
                    const comoSeHace = isObj
                      ? paso.comoSeHace
                      : `Procedimiento sustantivo de auditoría: el equipo auditor coteja la documentación de respaldo en SAP, comprobantes físicos e informes técnicos de gerencia para validar las afirmaciones del bloque ${bloque.Bloque}.`;
                    const fuentes = isObj
                      ? paso.fuentes
                      : 'Módulos SAP ERP (FI/CO/AA), legajos de comprobantes e informes operativos de gerencia.';
                    const valores = isObj
                      ? paso.valores
                      : `Saldo contable auditado en el rubro ${activePT.rubro}.`;
                    const isExpanded = expandAllProcedimientos || !!expandedProcedimientos[`${activePT.id}-${i}-${j}`];

                    return (
                      <li key={j} className="space-y-1.5 list-none">
                        <div className="flex items-start justify-between gap-2">
                          <span className="flex items-start gap-1.5">
                            <span className="text-lime-400 font-bold shrink-0">•</span>
                            <span className="font-medium text-slate-100">{texto}</span>
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              setExpandedProcedimientos((prev) => ({
                                ...prev,
                                [`${activePT.id}-${i}-${j}`]: !prev[`${activePT.id}-${i}-${j}`],
                              }))
                            }
                            className="shrink-0 px-2 py-0.5 rounded text-[10px] font-bold bg-teal-800/90 text-lime-300 hover:bg-teal-700 hover:text-white border border-teal-600/50 transition-colors cursor-pointer"
                          >
                            {isExpanded ? '▲ Ocultar' : '▼ ¿Cómo se hace?'}
                          </button>
                        </div>

                        {isExpanded && (
                          <div className="p-3 rounded-xl bg-slate-900/95 border border-lime-400/40 text-[11px] text-slate-200 space-y-2 mt-2 leading-relaxed shadow-md">
                            <div>
                              <strong className="text-lime-300 flex items-center gap-1 text-[10px] uppercase tracking-wide">
                                🛠️ ¿Cómo se ejecuta en la práctica?
                              </strong>
                              <p className="text-slate-300 mt-0.5">{comoSeHace}</p>
                            </div>
                            {fuentes && (
                              <div>
                                <strong className="text-teal-300 text-[10px] uppercase tracking-wide">
                                  📂 Fuentes de Información y Sistemas:
                                </strong>
                                <p className="text-slate-300 mt-0.5">{fuentes}</p>
                              </div>
                            )}
                            {valores && (
                              <div>
                                <strong className="text-amber-300 text-[10px] uppercase tracking-wide">
                                  🔢 Valores y Bases de Cálculo:
                                </strong>
                                <p className="text-slate-300 mt-0.5">{valores}</p>
                              </div>
                            )}
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VISOR DETALLADO DEL PAPEL DE TRABAJO ACTIVO (Cédula Sumaria + Analíticas) */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5">
        {/* Cabecera estilo Hoja de Trabajo de Auditoría */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-slate-900 text-white font-mono text-xs font-extrabold">
                REF: {activePT.codigo}
              </span>
              <span className="text-xs font-bold text-teal-700">{activePT.refLegajo}</span>
            </div>
            <h3 className="text-lg font-extrabold text-slate-900 mt-1">
              {activePT.programa} — {activePT.rubro}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Elaborado por: <strong>{activePT.elaboradoPor}</strong> • Revisado por:{' '}
              <strong>{activePT.revisadoPor}</strong> • Fecha Cierre PT: <strong>{activePT.fecha}</strong>
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 bg-white p-3 rounded-xl border border-slate-200 text-right font-mono">
            <div>
              <span className="text-[10px] font-sans font-bold uppercase text-slate-400 block">
                Saldo s/ Libros SAP
              </span>
              <span className="text-sm font-extrabold text-slate-800">
                ${activePT.saldoSegunLibros.toLocaleString('es-AR')} M
              </span>
            </div>
            <div className="border-x border-slate-100 px-3">
              <span className="text-[10px] font-sans font-bold uppercase text-slate-400 block">
                Ajuste Neto Propuesto
              </span>
              <span
                className={`text-sm font-extrabold ${
                  activePT.ajustePropuestoNeto < 0
                    ? 'text-red-600'
                    : activePT.ajustePropuestoNeto > 0
                    ? 'text-amber-600'
                    : 'text-emerald-600'
                }`}
              >
                {activePT.ajustePropuestoNeto > 0 ? '+' : ''}
                ${activePT.ajustePropuestoNeto.toLocaleString('es-AR')} M
              </span>
            </div>
            <div>
              <span className="text-[10px] font-sans font-bold uppercase text-teal-700 block">
                Saldo Auditado Final
              </span>
              <span className="text-sm font-extrabold text-teal-900">
                ${activePT.saldoAuditado.toLocaleString('es-AR')} M
              </span>
            </div>
          </div>
        </div>

        {/* Cédula Sumaria (Hoja Llave del Rubro) */}
        <div>
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-600 mb-2">
            1. Cédula Sumaria (Hoja Llave — Cifras en Millones de $ constantes al 31/12/2025)
          </h4>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-100 text-slate-700 font-bold uppercase border-b border-slate-200">
                  <th className="py-2.5 px-4">Subcuenta / Componente del Rubro</th>
                  <th className="py-2.5 px-4 text-right">Saldo s/ Libros SAP</th>
                  <th className="py-2.5 px-4 text-right text-emerald-700">Ajustes Debe</th>
                  <th className="py-2.5 px-4 text-right text-red-700">Ajustes Haber</th>
                  <th className="py-2.5 px-4 text-right">Saldo Auditado 31/12/25</th>
                  <th className="py-2.5 px-4 text-center">Marcas (Tickmarks)</th>
                  <th className="py-2.5 px-4 text-center whitespace-nowrap">Ref. PT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-mono">
                {activePT.cedulaSumaria.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className={`py-2.5 px-4 font-sans font-semibold text-slate-800 ${isPTA ? 'text-xs sm:text-sm' : 'text-xs'}`}>
                      {row.subcuenta}
                    </td>
                    <td className={`py-2.5 px-4 text-right text-slate-700 ${isPTA ? 'text-sm' : 'text-xs'}`}>
                      ${row.saldoLibros.toLocaleString('es-AR')}
                    </td>
                    <td className={`py-2.5 px-4 text-right text-emerald-700 font-bold ${isPTA ? 'text-sm' : 'text-xs'}`}>
                      {row.debe > 0 ? `$${row.debe.toLocaleString('es-AR')}` : '-'}
                    </td>
                    <td className={`py-2.5 px-4 text-right text-red-600 font-bold ${isPTA ? 'text-sm' : 'text-xs'}`}>
                      {row.haber > 0 ? `$${row.haber.toLocaleString('es-AR')}` : '-'}
                    </td>
                    <td className={`py-2.5 px-4 text-right font-extrabold text-slate-900 bg-teal-50/30 ${isPTA ? 'text-sm' : 'text-xs'}`}>
                      ${row.saldoAuditado.toLocaleString('es-AR')}
                    </td>
                    <td className={`py-2.5 px-4 text-center font-bold text-teal-700 ${isPTA ? 'text-base' : 'text-sm'}`}>
                      {row.marca}
                    </td>
                    <td className="py-2.5 px-4 text-center font-mono">
                      {row.refPT ? (
                        <span className="px-2 py-0.5 rounded bg-teal-100 text-teal-900 border border-teal-300 font-bold text-xs inline-block">
                          {row.refPT}
                        </span>
                      ) : (
                        <span className="text-slate-400">-</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Glosario de Marcas de Auditoría (Tickmarks) de la Cédula Sumaria */}
          <div className="mt-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
            <span className="text-[11px] font-extrabold uppercase tracking-wide text-slate-700 flex items-center gap-1.5 mb-1.5">
              📌 Glosario de Marcas de Auditoría en Cédula Sumaria:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-slate-600">
              {getMarcasPorRubro(activePT.id)
                .filter((m) => activePT.cedulaSumaria.some((r) => r.marca.includes(m.simbolo)))
                .map((m) => (
                  <div key={m.simbolo} className="flex items-start gap-1.5 bg-white p-1.5 rounded-lg border border-slate-200/80 shadow-2xs">
                    <span className="font-mono font-black text-teal-800 bg-teal-50 px-1.5 py-0.5 rounded border border-teal-200 text-xs shrink-0">
                      {m.simbolo}
                    </span>
                    <span className="text-[11px] leading-tight text-slate-700">
                      {m.significado}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Cédulas Analíticas (Procedimientos Ejecutados en el Papel de Trabajo) */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <h4 className={`${isPTA ? 'text-sm' : 'text-xs'} font-extrabold uppercase tracking-wider text-slate-700`}>
              2. Cédulas Analíticas y Pruebas Sustantivas Ejecutadas
            </h4>
            <button
              type="button"
              onClick={() => setExpandAllCedulas(!expandAllCedulas)}
              className={`self-start sm:self-auto px-2.5 py-1 rounded-lg ${isPTA ? 'text-xs' : 'text-[10px]'} font-bold bg-teal-800 text-lime-300 hover:bg-teal-700 hover:text-white border border-teal-600/50 transition-colors cursor-pointer`}
            >
              {expandAllCedulas ? '▲ Ocultar Todas las Guías Orales' : '▼ Expandir Todas las Guías Orales y Prácticas'}
            </button>
          </div>

          {/* Enlaces de acceso directo a las Cédulas Analíticas de Bienes de Uso */}
          {isPTA && (
            <div className="flex flex-wrap items-center gap-2 mb-4 p-3 rounded-xl bg-teal-50/70 border border-teal-200 shadow-2xs">
              <span className="text-xs font-extrabold text-teal-900 flex items-center gap-1">
                🧭 Acceso directo a cédulas:
              </span>
              {activePT.procedimientosEjecutados.map((proc) => {
                const elementId = proc.ref.toLowerCase().replace(/[^a-z0-9_-]/g, '');
                return (
                  <button
                    key={proc.ref}
                    type="button"
                    onClick={() => {
                      const el = document.getElementById(elementId);
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className="px-2.5 py-1 rounded-lg text-xs font-bold bg-white hover:bg-teal-800 hover:text-lime-300 text-teal-900 border border-teal-300 transition-all cursor-pointer shadow-2xs inline-flex items-center gap-1.5"
                  >
                    <span>📍 {proc.ref}</span>
                    <span className="text-[11px] font-normal opacity-75">
                      ({proc.ref === 'PT-A1'
                        ? 'Inspección Física'
                        : proc.ref === 'PT-A2'
                        ? 'Altas CAPEX'
                        : proc.ref === 'PT-A3'
                        ? 'Titularidad RPI'
                        : proc.ref === 'PT-A4'
                        ? 'Depreciaciones'
                        : proc.ref === 'PT-E1'
                        ? 'Espectro y Marcas'
                        : proc.ref === 'PT-E2'
                        ? 'Software y Amort.'
                        : proc.ref === 'PT-B1'
                        ? 'Circularización y Cobros Post.'
                        : proc.ref === 'PT-B2'
                        ? 'Corte e Interfaces'
                        : proc.ref === 'PT-B3'
                        ? 'Matriz y Previsión NIIF 9'
                        : 'Detalle'})
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activePT.procedimientosEjecutados.map((proc) => {
              const hasIssue = proc.marca.includes('⊗');
              const elementId = proc.ref.toLowerCase().replace(/[^a-z0-9_-]/g, '');
              const isExpanded = expandAllCedulas || !!expandedCedulas[proc.ref];

              return (
                <div
                  key={proc.ref}
                  id={elementId}
                  className={`p-4 rounded-xl border transition-all duration-300 scroll-mt-24 ${
                    hasIssue
                      ? 'border-red-200 bg-red-50/30'
                      : 'border-slate-200 bg-slate-50/50'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className={`px-2 py-0.5 rounded bg-slate-800 text-white font-mono ${isPTA ? 'text-xs sm:text-sm' : 'text-xs'} font-bold`}>
                      {proc.ref}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {proc.afirmaciones.map((af, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() =>
                            onNavigate &&
                            onNavigate('etapa1-detallada', `afirmacion:${activeRubro.id}:${af}`)
                          }
                          title={`Ver objetivo, riesgo y control de la afirmación '${af}' de este rubro en Planificación Detallada`}
                          className={`px-2 py-0.5 rounded bg-teal-100 hover:bg-teal-200 text-teal-800 hover:text-teal-950 font-bold ${isPTA ? 'text-[11px]' : 'text-[10px]'} transition-all cursor-pointer inline-flex items-center gap-1 border border-teal-200/80 shadow-2xs hover:scale-105 active:scale-95`}
                        >
                          <span>{af}</span>
                          <span className="text-[9px] opacity-60 font-mono">↗</span>
                        </button>
                      ))}
                      <span className={`px-2 py-0.5 rounded bg-white border border-slate-300 font-mono font-extrabold ${isPTA ? 'text-sm' : 'text-xs'} text-teal-800`}>
                        {proc.marca}
                      </span>
                    </div>
                  </div>

                  {proc.bloquePrograma && (
                    <div className="mb-1.5">
                      <span className={`${isPTA ? 'text-xs' : 'text-[10px]'} font-extrabold uppercase tracking-wide text-teal-900 bg-teal-100/90 px-2 py-0.5 rounded border border-teal-300 inline-block`}>
                        {proc.bloquePrograma}
                      </span>
                    </div>
                  )}

                  {(() => {
                    const procNombreKey = `${proc.ref}-nombre`;
                    const isEditingNombre = editingField === procNombreKey;
                    const currentProcNombre =
                      pasosNarrativosCustom[procNombreKey] !== undefined
                        ? pasosNarrativosCustom[procNombreKey]
                        : proc.nombre;
                    const isNombreCustom = pasosNarrativosCustom[procNombreKey] !== undefined;

                    return (
                      <div className="mb-2">
                        <div className="flex items-center justify-between gap-2">
                          <h5 className={`${isPTA ? 'text-sm sm:text-base' : 'text-xs'} font-extrabold text-slate-900`}>
                            {renderFormattedRichText(currentProcNombre)}
                            {isNombreCustom && (
                              <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-amber-400 text-slate-900 ml-1.5 align-middle">
                                ✏️ Editado
                              </span>
                            )}
                          </h5>
                          {!isEditingNombre && (
                            <button
                              type="button"
                              onClick={() => handleStartEdit(procNombreKey, currentProcNombre)}
                              title="Editar el título de este procedimiento"
                              className="inline-flex items-center gap-1 text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 cursor-pointer shadow-2xs transition-colors shrink-0"
                            >
                              <Pencil className="w-2.5 h-2.5" /> Editar
                            </button>
                          )}
                        </div>

                        {isEditingNombre && (
                          <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-300 space-y-2 mt-1">
                            <FormattingToolbar onFormat={applyFormat} isDark={false} compact={true} />
                            <input
                              type="text"
                              value={tempEditText}
                              onChange={(e) => setTempEditText(e.target.value)}
                              className="w-full p-2 text-xs font-bold rounded bg-white text-slate-900 border-2 border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-400 font-sans shadow-xs"
                            />
                            <div className="flex items-center justify-between">
                              <div className="flex gap-1.5">
                                <button
                                  type="button"
                                  onClick={() => handleSavePaso(procNombreKey)}
                                  className="px-2.5 py-1 rounded bg-teal-600 text-white font-bold text-xs hover:bg-teal-700 cursor-pointer flex items-center gap-1 shadow-2xs"
                                >
                                  <Check className="w-3.5 h-3.5" /> Guardar
                                </button>
                                <button
                                  type="button"
                                  onClick={handleCancelEdit}
                                  className="px-2.5 py-1 rounded bg-slate-200 text-slate-700 text-xs hover:bg-slate-300 cursor-pointer flex items-center gap-1"
                                >
                                  <X className="w-3.5 h-3.5" /> Cancelar
                                </button>
                              </div>
                              {isNombreCustom && (
                                <button
                                  type="button"
                                  onClick={() => handleResetPaso(procNombreKey)}
                                  className="text-[10px] text-amber-700 hover:underline cursor-pointer flex items-center gap-1"
                                >
                                  <RotateCcw className="w-2.5 h-2.5" /> Restablecer original
                                </button>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })()}

                  {proc.muestra && (() => {
                    const muestraKey = `${proc.ref}-muestra`;
                    const isEditingMuestra = editingField === muestraKey;
                    const currentMuestra =
                      pasosNarrativosCustom[muestraKey] !== undefined
                        ? pasosNarrativosCustom[muestraKey]
                        : proc.muestra;
                    const isCustom = pasosNarrativosCustom[muestraKey] !== undefined;

                    return (
                      <div className="mb-2.5">
                        <div className="flex items-center justify-between gap-1 mb-1">
                          <strong className={`${isPTA ? 'text-xs' : 'text-[11px]'} text-slate-800 flex items-center gap-1 font-bold`}>
                            Muestra examinada:
                            {isCustom && (
                              <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-amber-400 text-slate-900 ml-1">
                                ✏️ Editado
                              </span>
                            )}
                          </strong>
                          {!isEditingMuestra && (
                            <button
                              type="button"
                              onClick={() => handleStartEdit(muestraKey, currentMuestra)}
                              title="Editar la muestra examinada de este procedimiento"
                              className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded bg-slate-200 hover:bg-slate-300 text-slate-800 border border-slate-300 cursor-pointer shadow-2xs transition-colors"
                            >
                              <Pencil className="w-2.5 h-2.5" /> Editar
                            </button>
                          )}
                        </div>

                        {isEditingMuestra ? (
                          <div className="space-y-2 mt-1">
                            <FormattingToolbar onFormat={applyFormat} isDark={false} />
                            <textarea
                              ref={textareaRef}
                              rows={3}
                              value={tempEditText}
                              onChange={(e) => setTempEditText(e.target.value)}
                              className="w-full p-2.5 text-xs rounded-lg bg-white text-slate-900 border-2 border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-400 font-sans leading-relaxed shadow-xs"
                            />
                            <div className="flex items-center justify-between">
                              <div className="flex gap-1.5">
                                <button
                                  type="button"
                                  onClick={() => handleSavePaso(muestraKey)}
                                  className="px-2.5 py-1 rounded bg-teal-600 text-white font-bold text-xs hover:bg-teal-700 cursor-pointer flex items-center gap-1 shadow-2xs"
                                >
                                  <Check className="w-3.5 h-3.5" /> Guardar
                                </button>
                                <button
                                  type="button"
                                  onClick={handleCancelEdit}
                                  className="px-2.5 py-1 rounded bg-slate-200 text-slate-700 text-xs hover:bg-slate-300 cursor-pointer flex items-center gap-1"
                                >
                                  <X className="w-3.5 h-3.5" /> Cancelar
                                </button>
                              </div>
                              {isCustom && (
                                <button
                                  type="button"
                                  onClick={() => handleResetPaso(muestraKey)}
                                  className="text-[10px] text-amber-700 hover:underline cursor-pointer flex items-center gap-1"
                                >
                                  <RotateCcw className="w-2.5 h-2.5" /> Restablecer original
                                </button>
                              )}
                            </div>
                          </div>
                        ) : (
                          <p className={`${isPTA ? 'text-xs sm:text-[13px]' : 'text-[11px]'} text-slate-700 leading-relaxed bg-slate-100/80 p-2.5 rounded-lg border border-slate-200 whitespace-pre-line`}>
                            {renderFormattedRichText(currentMuestra)}
                          </p>
                        )}
                      </div>
                    );
                  })()}

                  {/* Procedimientos emparejados con su detalle técnico y resultado */}
                  {proc.pasosConResultado && proc.pasosConResultado.length > 0 ? (
                    <div className="mb-2.5 space-y-2">
                      <div className="flex items-center justify-between">
                        <strong className={`${isPTA ? 'text-xs sm:text-sm' : 'text-[11px]'} text-slate-800 flex items-center gap-1 font-bold`}>
                          📌 Procedimientos del Programa y Hallazgos (Marcas de Auditoría):
                        </strong>
                      </div>
                      <div className="space-y-3">
                        {proc.pasosConResultado.map((item, pIdx) => {
                          const stepKey = `${proc.ref}-p${pIdx}`;
                          const hasDetail = !!(item.comoSeEjecuta || item.fuentes || item.valores);
                          const isStepExpanded = expandedSteps[stepKey] !== undefined ? expandedSteps[stepKey] : true;

                          return (
                            <div
                              key={pIdx}
                              className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2.5"
                            >
                              {/* 1. Cabecera del Paso */}
                              {(() => {
                                const pasoHeaderKey = `${proc.ref}-paso-header-${pIdx}`;
                                const isEditingHeader = editingField === pasoHeaderKey;
                                const currentPasoHeader =
                                  pasosNarrativosCustom[pasoHeaderKey] !== undefined
                                    ? pasosNarrativosCustom[pasoHeaderKey]
                                    : item.paso;
                                const isHeaderCustom = pasosNarrativosCustom[pasoHeaderKey] !== undefined;

                                return (
                                  <div className="space-y-2">
                                    <div className="flex items-start justify-between gap-2">
                                      <div className="flex items-start gap-1.5 flex-1">
                                        <span className={`px-2 py-0.5 rounded bg-teal-900 text-lime-300 font-mono font-bold ${isPTA ? 'text-xs' : 'text-[10px]'} shrink-0`}>
                                          Paso {pIdx + 1}
                                        </span>
                                        {!isEditingHeader ? (
                                          <div className="flex-1">
                                            <span className={`${isPTA ? 'text-xs sm:text-sm' : 'text-[11px]'} font-bold text-slate-800 leading-snug`}>
                                              {renderFormattedRichText(currentPasoHeader)}
                                            </span>
                                            {isHeaderCustom && (
                                              <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-amber-400 text-slate-900 ml-1.5 inline-block">
                                                ✏️ Editado
                                              </span>
                                            )}
                                          </div>
                                        ) : null}
                                      </div>
                                      <div className="flex items-center gap-1.5 shrink-0">
                                        {!isEditingHeader && (
                                          <button
                                            type="button"
                                            onClick={() => handleStartEdit(pasoHeaderKey, currentPasoHeader)}
                                            title="Editar el encabezado / descripción de este paso"
                                            className="inline-flex items-center gap-1 text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 cursor-pointer shadow-2xs transition-colors"
                                          >
                                            <Pencil className="w-2.5 h-2.5" /> Editar
                                          </button>
                                        )}
                                        {hasDetail && (
                                          <button
                                            type="button"
                                            onClick={() =>
                                              setExpandedSteps((prev) => ({
                                                ...prev,
                                                [stepKey]: prev[stepKey] !== undefined ? !prev[stepKey] : false,
                                              }))
                                            }
                                            className={`px-2 py-0.5 rounded ${isPTA ? 'text-xs' : 'text-[10px]'} font-bold bg-slate-100 text-teal-800 hover:bg-teal-50 border border-slate-200 transition-colors shrink-0 cursor-pointer`}
                                          >
                                            {isStepExpanded ? '▲ Ocultar Detalle' : '▼ Detalle Técnico'}
                                          </button>
                                        )}
                                      </div>
                                    </div>

                                    {isEditingHeader && (
                                      <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-300 space-y-2">
                                        <FormattingToolbar onFormat={applyFormat} isDark={false} compact={true} />
                                        <textarea
                                          ref={textareaRef}
                                          rows={2}
                                          value={tempEditText}
                                          onChange={(e) => setTempEditText(e.target.value)}
                                          className="w-full p-2 text-xs rounded bg-white text-slate-900 border-2 border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-400 font-sans font-bold leading-snug shadow-xs"
                                        />
                                        <div className="flex items-center justify-between">
                                          <div className="flex gap-1.5">
                                            <button
                                              type="button"
                                              onClick={() => handleSavePaso(pasoHeaderKey)}
                                              className="px-2.5 py-1 rounded bg-teal-600 text-white font-bold text-xs hover:bg-teal-700 cursor-pointer flex items-center gap-1 shadow-2xs"
                                            >
                                              <Check className="w-3.5 h-3.5" /> Guardar
                                            </button>
                                            <button
                                              type="button"
                                              onClick={handleCancelEdit}
                                              className="px-2.5 py-1 rounded bg-slate-200 text-slate-700 text-xs hover:bg-slate-300 cursor-pointer flex items-center gap-1"
                                            >
                                              <X className="w-3.5 h-3.5" /> Cancelar
                                            </button>
                                          </div>
                                          {isHeaderCustom && (
                                            <button
                                              type="button"
                                              onClick={() => handleResetPaso(pasoHeaderKey)}
                                              className="text-[10px] text-amber-700 hover:underline cursor-pointer flex items-center gap-1"
                                            >
                                              <RotateCcw className="w-2.5 h-2.5" /> Restablecer original
                                            </button>
                                          )}
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                );
                              })()}

                              {/* 2. [ Desplegable / Detalle técnico ] primero en cada paso, luego Fuentes..., luego valores... */}
                              {hasDetail && isStepExpanded && (
                                <div className={`p-3 rounded-lg bg-slate-900 text-slate-100 border border-teal-500/40 ${isPTA ? 'text-xs sm:text-[13px] leading-relaxed' : 'text-[11px]'} space-y-2`}>
                                  {item.comoSeEjecuta && (() => {
                                    const execKey = `${proc.ref}-exec-${pIdx}`;
                                    const isEditingExec = editingField === execKey;
                                    const currentExec =
                                      pasosNarrativosCustom[execKey] !== undefined
                                        ? pasosNarrativosCustom[execKey]
                                        : item.comoSeEjecuta;
                                    const isCustom = pasosNarrativosCustom[execKey] !== undefined;

                                    return (
                                      <div>
                                        <div className="flex items-center justify-between gap-1 mb-1">
                                          <strong className={`text-lime-300 flex items-center gap-1 ${isPTA ? 'text-xs' : 'text-[10px]'} uppercase tracking-wide`}>
                                            🛠️ ¿Cómo se ejecuta la prueba en la práctica?
                                            {isCustom && (
                                              <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-amber-400 text-slate-900 ml-1">
                                                ✏️ Editado
                                              </span>
                                            )}
                                          </strong>
                                          {!isEditingExec && (
                                            <button
                                              type="button"
                                              onClick={() => handleStartEdit(execKey, currentExec)}
                                              title="Editar la descripción técnica de este procedimiento"
                                              className="inline-flex items-center gap-1 text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-lime-300 border border-teal-500/50 cursor-pointer shadow-2xs"
                                            >
                                              <Pencil className="w-2.5 h-2.5" /> Editar
                                            </button>
                                          )}
                                        </div>

                                        {isEditingExec ? (
                                          <div className="space-y-2 mt-1">
                                            <FormattingToolbar onFormat={applyFormat} isDark={true} />
                                            <textarea
                                              ref={textareaRef}
                                              rows={4}
                                              value={tempEditText}
                                              onChange={(e) => setTempEditText(e.target.value)}
                                              className="w-full p-2 text-xs rounded bg-slate-950 text-slate-100 border border-teal-400 focus:outline-none focus:ring-1 focus:ring-teal-300 font-sans leading-relaxed"
                                            />
                                            <div className="flex items-center justify-between">
                                              <div className="flex gap-1.5">
                                                <button
                                                  type="button"
                                                  onClick={() => handleSavePaso(execKey)}
                                                  className="px-2.5 py-1 rounded bg-lime-400 text-slate-950 font-bold text-xs hover:bg-lime-300 cursor-pointer flex items-center gap-1"
                                                >
                                                  <Check className="w-3.5 h-3.5" /> Guardar
                                                </button>
                                                <button
                                                  type="button"
                                                  onClick={handleCancelEdit}
                                                  className="px-2.5 py-1 rounded bg-slate-700 text-slate-300 text-xs hover:bg-slate-600 cursor-pointer flex items-center gap-1"
                                                >
                                                  <X className="w-3.5 h-3.5" /> Cancelar
                                                </button>
                                              </div>
                                              {isCustom && (
                                                <button
                                                  type="button"
                                                  onClick={() => handleResetPaso(execKey)}
                                                  className="text-[10px] text-amber-300 hover:underline cursor-pointer flex items-center gap-1"
                                                >
                                                  <RotateCcw className="w-2.5 h-2.5" /> Restablecer original
                                                </button>
                                              )}
                                            </div>
                                          </div>
                                        ) : (
                                          <p className={`text-slate-300 mt-0.5 leading-relaxed whitespace-pre-line ${isPTA ? 'text-xs sm:text-[13px]' : 'text-[11px]'}`}>
                                            {renderFormattedRichText(currentExec)}
                                          </p>
                                        )}
                                      </div>
                                    );
                                  })()}

                                  {item.fuentes && (() => {
                                    const fuentesKey = `${proc.ref}-fuentes-${pIdx}`;
                                    const isEditingFuentes = editingField === fuentesKey;
                                    const currentFuentes =
                                      pasosNarrativosCustom[fuentesKey] !== undefined
                                        ? pasosNarrativosCustom[fuentesKey]
                                        : item.fuentes;
                                    const isCustom = pasosNarrativosCustom[fuentesKey] !== undefined;

                                    return (
                                      <div>
                                        <div className="flex items-center justify-between gap-1 mb-0.5">
                                          <strong className={`text-teal-300 flex items-center gap-1 ${isPTA ? 'text-xs' : 'text-[10px]'} uppercase tracking-wide`}>
                                            📂 Fuentes de Información y Sistemas:
                                            {isCustom && (
                                              <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-amber-400 text-slate-900 ml-1">
                                                ✏️ Editado
                                              </span>
                                            )}
                                          </strong>
                                          {!isEditingFuentes && (
                                            <button
                                              type="button"
                                              onClick={() => handleStartEdit(fuentesKey, currentFuentes)}
                                              title="Editar las fuentes de información de este paso"
                                              className="inline-flex items-center gap-1 text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-teal-300 border border-teal-500/50 cursor-pointer shadow-2xs"
                                            >
                                              <Pencil className="w-2.5 h-2.5" /> Editar
                                            </button>
                                          )}
                                        </div>

                                        {isEditingFuentes ? (
                                          <div className="space-y-2 mt-1">
                                            <FormattingToolbar onFormat={applyFormat} isDark={true} />
<textarea
                                              ref={textareaRef}
                                              rows={3}
                                              value={tempEditText}
                                              onChange={(e) => setTempEditText(e.target.value)}
                                              className="w-full p-2 text-xs rounded bg-slate-950 text-slate-100 border border-teal-400 focus:outline-none focus:ring-1 focus:ring-teal-300 font-sans leading-relaxed"
                                            />
                                            <div className="flex items-center justify-between">
                                              <div className="flex gap-1.5">
                                                <button
                                                  type="button"
                                                  onClick={() => handleSavePaso(fuentesKey)}
                                                  className="px-2.5 py-1 rounded bg-teal-400 text-slate-950 font-bold text-xs hover:bg-teal-300 cursor-pointer flex items-center gap-1"
                                                >
                                                  <Check className="w-3.5 h-3.5" /> Guardar
                                                </button>
                                                <button
                                                  type="button"
                                                  onClick={handleCancelEdit}
                                                  className="px-2.5 py-1 rounded bg-slate-700 text-slate-300 text-xs hover:bg-slate-600 cursor-pointer flex items-center gap-1"
                                                >
                                                  <X className="w-3.5 h-3.5" /> Cancelar
                                                </button>
                                              </div>
                                              {isCustom && (
                                                <button
                                                  type="button"
                                                  onClick={() => handleResetPaso(fuentesKey)}
                                                  className="text-[10px] text-amber-300 hover:underline cursor-pointer flex items-center gap-1"
                                                >
                                                  <RotateCcw className="w-2.5 h-2.5" /> Restablecer original
                                                </button>
                                              )}
                                            </div>
                                          </div>
                                        ) : (
                                          <p className={`text-slate-300 mt-0.5 leading-relaxed ${isPTA ? 'text-xs sm:text-[13px]' : 'text-[11px]'}`}>
                                            {renderFormattedRichText(currentFuentes)}
                                          </p>
                                        )}
                                      </div>
                                    );
                                  })()}

                                  {item.valores && (() => {
                                    const valoresKey = `${proc.ref}-valores-${pIdx}`;
                                    const isEditingValores = editingField === valoresKey;
                                    const currentValores =
                                      pasosNarrativosCustom[valoresKey] !== undefined
                                        ? pasosNarrativosCustom[valoresKey]
                                        : item.valores;
                                    const isCustom = pasosNarrativosCustom[valoresKey] !== undefined;

                                    return (
                                      <div>
                                        <div className="flex items-center justify-between gap-1 mb-0.5">
                                          <strong className={`text-amber-300 flex items-center gap-1 ${isPTA ? 'text-xs' : 'text-[10px]'} uppercase tracking-wide`}>
                                            🔢 Valores y Bases de Cálculo:
                                            {isCustom && (
                                              <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-amber-400 text-slate-900 ml-1">
                                                ✏️ Editado
                                              </span>
                                            )}
                                          </strong>
                                          {!isEditingValores && (
                                            <button
                                              type="button"
                                              onClick={() => handleStartEdit(valoresKey, currentValores)}
                                              title="Editar los valores y bases de cálculo de este paso"
                                              className="inline-flex items-center gap-1 text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/50 cursor-pointer shadow-2xs"
                                            >
                                              <Pencil className="w-2.5 h-2.5" /> Editar
                                            </button>
                                          )}
                                        </div>

                                        {isEditingValores ? (
                                          <div className="space-y-2 mt-1">
                                            <FormattingToolbar onFormat={applyFormat} isDark={true} />
<textarea
                                              ref={textareaRef}
                                              rows={3}
                                              value={tempEditText}
                                              onChange={(e) => setTempEditText(e.target.value)}
                                              className="w-full p-2 text-xs rounded bg-slate-950 text-slate-100 border border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-300 font-sans leading-relaxed"
                                            />
                                            <div className="flex items-center justify-between">
                                              <div className="flex gap-1.5">
                                                <button
                                                  type="button"
                                                  onClick={() => handleSavePaso(valoresKey)}
                                                  className="px-2.5 py-1 rounded bg-amber-400 text-slate-950 font-bold text-xs hover:bg-amber-300 cursor-pointer flex items-center gap-1"
                                                >
                                                  <Check className="w-3.5 h-3.5" /> Guardar
                                                </button>
                                                <button
                                                  type="button"
                                                  onClick={handleCancelEdit}
                                                  className="px-2.5 py-1 rounded bg-slate-700 text-slate-300 text-xs hover:bg-slate-600 cursor-pointer flex items-center gap-1"
                                                >
                                                  <X className="w-3.5 h-3.5" /> Cancelar
                                                </button>
                                              </div>
                                              {isCustom && (
                                                <button
                                                  type="button"
                                                  onClick={() => handleResetPaso(valoresKey)}
                                                  className="text-[10px] text-amber-300 hover:underline cursor-pointer flex items-center gap-1"
                                                >
                                                  <RotateCcw className="w-2.5 h-2.5" /> Restablecer original
                                                </button>
                                              )}
                                            </div>
                                          </div>
                                        ) : (
                                          <p className={`text-slate-300 mt-0.5 leading-relaxed whitespace-pre-line ${isPTA ? 'text-xs sm:text-[13px]' : 'text-[11px]'}`}>
                                            {renderFormattedRichText(currentValores)}
                                          </p>
                                        )}
                                      </div>
                                    );
                                  })()}

                                  {item.tabla && (
                                    <div className="mt-3 overflow-x-auto rounded-lg border border-teal-500/30 bg-slate-950 p-2.5">
                                      <table className="w-full text-left border-collapse text-[11px] sm:text-xs">
                                        <thead>
                                          <tr className="border-b border-slate-700 text-teal-300 font-bold bg-slate-900/90">
                                            {item.tabla.cabeceras.map((c, ci) => (
                                              <th key={ci} className="py-1.5 px-2.5 whitespace-nowrap">{c}</th>
                                            ))}
                                          </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-800/80 text-slate-200">
                                          {item.tabla.filas.map((f, fi) => (
                                            <tr key={fi} className={f.destacado ? 'bg-teal-950/80 font-bold text-lime-300' : 'hover:bg-slate-800/40'}>
                                              {f.valores.map((v, vi) => (
                                                <td key={vi} className={`py-1.5 px-2.5 ${vi === 1 ? 'font-mono whitespace-nowrap text-amber-200 font-semibold' : ''}`}>{v}</td>
                                              ))}
                                            </tr>
                                          ))}
                                        </tbody>
                                      </table>
                                    </div>
                                  )}
                                </div>
                              )}

                              {/* 3. y finalmente Resultado y Hallazgos con Marcas de Auditoría */}
                              {(() => {
                                const resKey = `${proc.ref}-res-${pIdx}`;
                                const isEditingRes = editingField === resKey;
                                const currentRes =
                                  pasosNarrativosCustom[resKey] !== undefined
                                    ? pasosNarrativosCustom[resKey]
                                    : item.resultado;
                                const isCustom = pasosNarrativosCustom[resKey] !== undefined;

                                return (
                                  <div className={`p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-200 ${isPTA ? 'text-xs sm:text-[13px]' : 'text-xs'} text-slate-800 leading-relaxed space-y-1`}>
                                    <div className="flex items-center justify-between gap-1">
                                      <strong className={`${isPTA ? 'text-xs' : 'text-[10px]'} uppercase text-emerald-900 font-extrabold flex items-center gap-1`}>
                                        📌 Resultado de la Ejecución y Hallazgo (Marcas de Auditoría):
                                        {isCustom && (
                                          <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-amber-400 text-slate-900 ml-1">
                                            ✏️ Editado
                                          </span>
                                        )}
                                      </strong>
                                      {!isEditingRes && (
                                        <button
                                          type="button"
                                          onClick={() => handleStartEdit(resKey, currentRes)}
                                          title="Editar o agregar notas personales al resultado"
                                          className="inline-flex items-center gap-1 text-[10px] font-bold px-1.5 py-0.5 rounded bg-white hover:bg-emerald-100 text-emerald-900 border border-emerald-300 cursor-pointer shadow-2xs"
                                        >
                                          <Pencil className="w-2.5 h-2.5" /> Editar
                                        </button>
                                      )}
                                    </div>
                                    {isEditingRes ? (
                                      <div className="space-y-2 mt-1">
                                        <FormattingToolbar onFormat={applyFormat} isDark={false} />
                                        <textarea
                                          ref={textareaRef}
                                          rows={3}
                                          value={tempEditText}
                                          onChange={(e) => setTempEditText(e.target.value)}
                                          className="w-full p-2 text-xs rounded bg-white text-slate-800 border border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-500 font-sans leading-relaxed"
                                        />
                                        <div className="flex items-center justify-between">
                                          <div className="flex gap-1.5">
                                            <button
                                              type="button"
                                              onClick={() => handleSavePaso(resKey)}
                                              className="px-2 py-0.5 rounded bg-emerald-700 text-white font-bold text-[11px] hover:bg-emerald-800 cursor-pointer flex items-center gap-1"
                                            >
                                              <Check className="w-3 h-3" /> Guardar
                                            </button>
                                            <button
                                              type="button"
                                              onClick={handleCancelEdit}
                                              className="px-2 py-0.5 rounded bg-slate-300 text-slate-700 text-[11px] hover:bg-slate-400 cursor-pointer flex items-center gap-1"
                                            >
                                              <X className="w-3 h-3" /> Cancelar
                                            </button>
                                          </div>
                                          {isCustom && (
                                            <button
                                              type="button"
                                              onClick={() => handleResetPaso(resKey)}
                                              className="text-[10px] text-emerald-800 hover:underline cursor-pointer flex items-center gap-1"
                                            >
                                              <RotateCcw className="w-2.5 h-2.5" /> Restablecer
                                            </button>
                                          )}
                                        </div>
                                      </div>
                                    ) : (
                                      <div className={`text-slate-700 leading-relaxed whitespace-pre-line ${isPTA ? 'text-xs sm:text-sm' : 'text-xs'}`}>
                                        {renderFormattedRichText(currentRes)}
                                      </div>
                                    )}
                                  </div>
                                );
                              })()}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <>
                      {proc.pasosPrograma && proc.pasosPrograma.length > 0 && (
                        <div className="mb-2.5 p-2.5 rounded-lg bg-teal-950 text-teal-50 border border-teal-800/90 shadow-xs">
                          <span className="text-[10px] font-extrabold uppercase tracking-wide text-lime-400 block mb-1.5 flex items-center gap-1">
                            📋 Procedimientos del Programa Formalizado:
                          </span>
                          <ul className="space-y-1.5 text-[11px] leading-relaxed">
                            {proc.pasosPrograma.map((p, idx) => (
                              <li key={idx} className="flex items-start gap-1.5 text-slate-200">
                                <span className="text-lime-400 font-bold shrink-0">•</span>
                                <span>{p}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="mb-2.5">
                        <strong className="text-[11px] text-slate-800 block mb-1 flex items-center gap-1">
                          📌 Resultado de la Ejecución y Hallazgos por Procedimiento (Marcas de Auditoría):
                        </strong>
                        {Array.isArray(proc.resultado) ? (
                          <ul className="space-y-1.5 text-xs text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200/90 shadow-xs">
                            {proc.resultado.map((r, rIdx) => (
                              <li key={rIdx} className="flex items-start gap-1.5 leading-relaxed">
                                <span className="text-teal-700 font-bold shrink-0">•</span>
                                <span>{r}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-xs text-slate-700 leading-relaxed bg-white p-2.5 rounded-lg border border-slate-200/90 shadow-xs">
                            {proc.resultado}
                          </p>
                        )}
                      </div>
                    </>
                  )}

                  {/* Botón para expandir guía práctica y defensa oral */}
                  {(proc.procedimientoDetalle || proc.defensaOral) && (() => {
                    const stepsHaveDetail = proc.pasosConResultado && proc.pasosConResultado.some((p) => p.comoSeEjecuta);

                    return (
                      <>
                        <div className="mt-3 pt-2.5 border-t border-slate-200/70 flex items-center justify-between">
                          <span className={`${isPTA ? 'text-xs' : 'text-[10px]'} font-bold text-slate-500 uppercase tracking-wide`}>
                            {stepsHaveDetail ? '🎓 Libreto de Defensa Oral y Normas' : 'Guía Técnica y Defensa Oral'}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              setExpandedCedulas((prev) => ({
                                ...prev,
                                [proc.ref]: !prev[proc.ref],
                              }))
                            }
                            className={`px-2 py-0.5 rounded ${isPTA ? 'text-xs' : 'text-[10px]'} font-bold bg-teal-800 text-lime-300 hover:bg-teal-700 hover:text-white border border-teal-600/50 transition-colors cursor-pointer`}
                          >
                            {isExpanded
                              ? '▲ Ocultar'
                              : stepsHaveDetail
                              ? '▼ Libreto de Defensa ante el Profesor'
                              : '▼ ¿Cómo se audita y defiende?'}
                          </button>
                        </div>

                        {isExpanded && (
                          <div className={`mt-2.5 p-3.5 rounded-xl bg-slate-900 text-slate-100 border border-teal-500/40 ${isPTA ? 'text-xs sm:text-[13px] leading-relaxed' : 'text-[11px]'} space-y-2.5 shadow-md`}>
                            {!stepsHaveDetail && proc.procedimientoDetalle && (() => {
                              const procKey = `${proc.ref}-detalle`;
                              const isEditingProc = editingField === procKey;
                              const currentProc =
                                pasosNarrativosCustom[procKey] !== undefined
                                  ? pasosNarrativosCustom[procKey]
                                  : proc.procedimientoDetalle;
                              const isCustom = pasosNarrativosCustom[procKey] !== undefined;

                              return (
                                <div>
                                  <div className="flex items-center justify-between gap-1 mb-1">
                                    <strong className={`text-lime-300 flex items-center gap-1 ${isPTA ? 'text-xs' : 'text-[10px]'} uppercase tracking-wide`}>
                                      🛠️ ¿Cómo se ejecuta la prueba en la práctica?
                                      {isCustom && (
                                        <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-amber-400 text-slate-900 ml-1">
                                          ✏️ Editado
                                        </span>
                                      )}
                                    </strong>
                                    {!isEditingProc && (
                                      <button
                                        type="button"
                                        onClick={() => handleStartEdit(procKey, currentProc)}
                                        title="Editar la descripción técnica del procedimiento"
                                        className="inline-flex items-center gap-1 text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-lime-300 border border-teal-500/50 cursor-pointer shadow-2xs"
                                      >
                                        <Pencil className="w-2.5 h-2.5" /> Editar
                                      </button>
                                    )}
                                  </div>

                                  {isEditingProc ? (
                                    <div className="space-y-2 mt-1">
                                      <FormattingToolbar onFormat={applyFormat} isDark={true} />
                                      <textarea
                                        ref={textareaRef}
                                        rows={4}
                                        value={tempEditText}
                                        onChange={(e) => setTempEditText(e.target.value)}
                                        className="w-full p-2 text-xs rounded bg-slate-950 text-slate-100 border border-teal-400 focus:outline-none focus:ring-1 focus:ring-teal-300 font-sans leading-relaxed"
                                      />
                                      <div className="flex items-center justify-between">
                                        <div className="flex gap-1.5">
                                          <button
                                            type="button"
                                            onClick={() => handleSavePaso(procKey)}
                                            className="px-2.5 py-1 rounded bg-lime-400 text-slate-950 font-bold text-xs hover:bg-lime-300 cursor-pointer flex items-center gap-1"
                                          >
                                            <Check className="w-3.5 h-3.5" /> Guardar
                                          </button>
                                          <button
                                            type="button"
                                            onClick={handleCancelEdit}
                                            className="px-2.5 py-1 rounded bg-slate-700 text-slate-300 text-xs hover:bg-slate-600 cursor-pointer flex items-center gap-1"
                                          >
                                            <X className="w-3.5 h-3.5" /> Cancelar
                                          </button>
                                        </div>
                                        {isCustom && (
                                          <button
                                            type="button"
                                            onClick={() => handleResetPaso(procKey)}
                                            className="text-[10px] text-amber-300 hover:underline cursor-pointer flex items-center gap-1"
                                          >
                                            <RotateCcw className="w-2.5 h-2.5" /> Restablecer original
                                          </button>
                                        )}
                                      </div>
                                    </div>
                                  ) : (
                                    <p className={`text-slate-300 mt-0.5 leading-relaxed whitespace-pre-line ${isPTA ? 'text-xs sm:text-[13px]' : 'text-[11px]'}`}>
                                      {renderFormattedRichText(currentProc)}
                                    </p>
                                  )}
                                </div>
                              );
                            })()}
                            {!stepsHaveDetail && proc.fuentes && (() => {
                              const procFuentesKey = `${proc.ref}-proc-fuentes`;
                              const isEditingProcFuentes = editingField === procFuentesKey;
                              const currentProcFuentes =
                                pasosNarrativosCustom[procFuentesKey] !== undefined
                                  ? pasosNarrativosCustom[procFuentesKey]
                                  : proc.fuentes;
                              const isCustom = pasosNarrativosCustom[procFuentesKey] !== undefined;

                              return (
                                <div>
                                  <div className="flex items-center justify-between gap-1 mb-0.5">
                                    <strong className={`text-teal-300 flex items-center gap-1 ${isPTA ? 'text-xs' : 'text-[10px]'} uppercase tracking-wide`}>
                                      📂 Fuentes de Información y Sistemas:
                                      {isCustom && (
                                        <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-amber-400 text-slate-900 ml-1">
                                          ✏️ Editado
                                        </span>
                                      )}
                                    </strong>
                                    {!isEditingProcFuentes && (
                                      <button
                                        type="button"
                                        onClick={() => handleStartEdit(procFuentesKey, currentProcFuentes)}
                                        title="Editar las fuentes de información de este procedimiento"
                                        className="inline-flex items-center gap-1 text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-teal-300 border border-teal-500/50 cursor-pointer shadow-2xs"
                                      >
                                        <Pencil className="w-2.5 h-2.5" /> Editar
                                      </button>
                                    )}
                                  </div>

                                  {isEditingProcFuentes ? (
                                    <div className="space-y-2 mt-1">
                                      <FormattingToolbar onFormat={applyFormat} isDark={true} />
<textarea
                                        ref={textareaRef}
                                        rows={3}
                                        value={tempEditText}
                                        onChange={(e) => setTempEditText(e.target.value)}
                                        className="w-full p-2 text-xs rounded bg-slate-950 text-slate-100 border border-teal-400 focus:outline-none focus:ring-1 focus:ring-teal-300 font-sans leading-relaxed"
                                      />
                                      <div className="flex items-center justify-between">
                                        <div className="flex gap-1.5">
                                          <button
                                            type="button"
                                            onClick={() => handleSavePaso(procFuentesKey)}
                                            className="px-2.5 py-1 rounded bg-teal-400 text-slate-950 font-bold text-xs hover:bg-teal-300 cursor-pointer flex items-center gap-1"
                                          >
                                            <Check className="w-3.5 h-3.5" /> Guardar
                                          </button>
                                          <button
                                            type="button"
                                            onClick={handleCancelEdit}
                                            className="px-2.5 py-1 rounded bg-slate-700 text-slate-300 text-xs hover:bg-slate-600 cursor-pointer flex items-center gap-1"
                                          >
                                            <X className="w-3.5 h-3.5" /> Cancelar
                                          </button>
                                        </div>
                                        {isCustom && (
                                          <button
                                            type="button"
                                            onClick={() => handleResetPaso(procFuentesKey)}
                                            className="text-[10px] text-amber-300 hover:underline cursor-pointer flex items-center gap-1"
                                          >
                                            <RotateCcw className="w-2.5 h-2.5" /> Restablecer original
                                          </button>
                                        )}
                                      </div>
                                    </div>
                                  ) : (
                                    <p className={`text-slate-300 mt-0.5 leading-relaxed ${isPTA ? 'text-xs sm:text-[13px]' : 'text-[11px]'}`}>
                                      {renderFormattedRichText(currentProcFuentes)}
                                    </p>
                                  )}
                                </div>
                              );
                            })()}

                            {!stepsHaveDetail && proc.valores && (() => {
                              const procValoresKey = `${proc.ref}-proc-valores`;
                              const isEditingProcValores = editingField === procValoresKey;
                              const currentProcValores =
                                pasosNarrativosCustom[procValoresKey] !== undefined
                                  ? pasosNarrativosCustom[procValoresKey]
                                  : proc.valores;
                              const isCustom = pasosNarrativosCustom[procValoresKey] !== undefined;

                              return (
                                <div>
                                  <div className="flex items-center justify-between gap-1 mb-0.5">
                                    <strong className={`text-amber-300 flex items-center gap-1 ${isPTA ? 'text-xs' : 'text-[10px]'} uppercase tracking-wide`}>
                                      🔢 Valores y Bases de Cálculo:
                                      {isCustom && (
                                        <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-amber-400 text-slate-900 ml-1">
                                          ✏️ Editado
                                        </span>
                                      )}
                                    </strong>
                                    {!isEditingProcValores && (
                                      <button
                                        type="button"
                                        onClick={() => handleStartEdit(procValoresKey, currentProcValores)}
                                        title="Editar los valores y bases de cálculo de este procedimiento"
                                        className="inline-flex items-center gap-1 text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/50 cursor-pointer shadow-2xs"
                                      >
                                        <Pencil className="w-2.5 h-2.5" /> Editar
                                      </button>
                                    )}
                                  </div>

                                  {isEditingProcValores ? (
                                    <div className="space-y-2 mt-1">
                                      <FormattingToolbar onFormat={applyFormat} isDark={true} />
<textarea
                                        ref={textareaRef}
                                        rows={3}
                                        value={tempEditText}
                                        onChange={(e) => setTempEditText(e.target.value)}
                                        className="w-full p-2 text-xs rounded bg-slate-950 text-slate-100 border border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-300 font-sans leading-relaxed"
                                      />
                                      <div className="flex items-center justify-between">
                                        <div className="flex gap-1.5">
                                          <button
                                            type="button"
                                            onClick={() => handleSavePaso(procValoresKey)}
                                            className="px-2.5 py-1 rounded bg-amber-400 text-slate-950 font-bold text-xs hover:bg-amber-300 cursor-pointer flex items-center gap-1"
                                          >
                                            <Check className="w-3.5 h-3.5" /> Guardar
                                          </button>
                                          <button
                                            type="button"
                                            onClick={handleCancelEdit}
                                            className="px-2.5 py-1 rounded bg-slate-700 text-slate-300 text-xs hover:bg-slate-600 cursor-pointer flex items-center gap-1"
                                          >
                                            <X className="w-3.5 h-3.5" /> Cancelar
                                          </button>
                                        </div>
                                        {isCustom && (
                                          <button
                                            type="button"
                                            onClick={() => handleResetPaso(procValoresKey)}
                                            className="text-[10px] text-amber-300 hover:underline cursor-pointer flex items-center gap-1"
                                          >
                                            <RotateCcw className="w-2.5 h-2.5" /> Restablecer original
                                          </button>
                                        )}
                                      </div>
                                    </div>
                                  ) : (
                                    <p className={`text-slate-300 mt-0.5 leading-relaxed whitespace-pre-line ${isPTA ? 'text-xs sm:text-[13px]' : 'text-[11px]'}`}>
                                      {renderFormattedRichText(currentProcValores)}
                                    </p>
                                  )}
                                </div>
                              );
                            })()}
                            {proc.defensaOral && (() => {
                              const defensaKey = `defensa-${proc.ref}`;
                              const isEditingDefensa = editingField === defensaKey;
                              const currentDefensa =
                                pasosNarrativosCustom[defensaKey] !== undefined
                                  ? pasosNarrativosCustom[defensaKey]
                                  : proc.defensaOral;
                              const isCustom = pasosNarrativosCustom[defensaKey] !== undefined;

                              return (
                                <div>
                                  <div className="flex items-center justify-between gap-1 mb-1">
                                    <strong className={`text-amber-300 flex items-center gap-1 ${isPTA ? 'text-xs' : 'text-[10px]'} uppercase tracking-wide`}>
                                      🎓 Para la Defensa Oral ante el Profesor (Libreto sugerido):
                                      {isCustom && (
                                        <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-amber-400 text-slate-900 ml-1">
                                          ✏️ Editado
                                        </span>
                                      )}
                                    </strong>
                                    {!isEditingDefensa && (
                                      <button
                                        type="button"
                                        onClick={() => handleStartEdit(defensaKey, currentDefensa)}
                                        title="Personalizar tu libreto oral para la defensa con el profesor"
                                        className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded bg-amber-900/80 hover:bg-amber-800 text-amber-200 border border-amber-500/50 cursor-pointer transition-colors shadow-2xs"
                                      >
                                        <Pencil className="w-3 h-3" /> Editar
                                      </button>
                                    )}
                                  </div>

                                  {isEditingDefensa ? (
                                    <div className="space-y-2 p-2.5 rounded-lg bg-amber-950/70 border border-amber-400">
                                      <FormattingToolbar onFormat={applyFormat} isDark={true} />
                                      <textarea
                                        ref={textareaRef}
                                        rows={4}
                                        value={tempEditText}
                                        onChange={(e) => setTempEditText(e.target.value)}
                                        className="w-full p-2.5 text-xs rounded bg-slate-900 text-amber-100 border border-amber-400/50 focus:outline-none focus:ring-1 focus:ring-amber-300 font-sans leading-relaxed"
                                      />
                                      <div className="flex items-center justify-between">
                                        <div className="flex gap-2">
                                          <button
                                            type="button"
                                            onClick={() => handleSavePaso(defensaKey)}
                                            className="px-2.5 py-1 rounded bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 cursor-pointer flex items-center gap-1"
                                          >
                                            <Check className="w-3.5 h-3.5" /> Guardar
                                          </button>
                                          <button
                                            type="button"
                                            onClick={handleCancelEdit}
                                            className="px-2.5 py-1 rounded bg-slate-700 text-slate-200 text-xs hover:bg-slate-600 cursor-pointer flex items-center gap-1"
                                          >
                                            <X className="w-3.5 h-3.5" /> Cancelar
                                          </button>
                                        </div>
                                        {isCustom && (
                                          <button
                                            type="button"
                                            onClick={() => handleResetPaso(defensaKey)}
                                            className="text-[11px] text-amber-300 hover:underline cursor-pointer flex items-center gap-1"
                                          >
                                            <RotateCcw className="w-3 h-3" /> Restablecer original
                                          </button>
                                        )}
                                      </div>
                                    </div>
                                  ) : (
                                    <div className={`text-amber-100/95 mt-0.5 leading-relaxed bg-amber-950/50 p-3 rounded-lg border border-amber-500/30 italic whitespace-pre-line ${isPTA ? 'text-xs sm:text-sm' : 'text-xs'}`}>
                                      "{renderFormattedRichText(currentDefensa)}"
                                    </div>
                                  )}
                                </div>
                              );
                            })()}
                            {proc.afirmacionesDetalle && (
                              <div>
                                <strong className={`text-teal-300 flex items-center gap-1 ${isPTA ? 'text-xs' : 'text-[10px]'} uppercase tracking-wide`}>
                                  ⚖️ Afirmaciones y Normas Validadas:
                                </strong>
                                <p className={`text-slate-300 mt-0.5 leading-relaxed ${isPTA ? 'text-xs sm:text-[13px]' : 'text-[11px]'}`}>{renderTextWithNormas(proc.afirmacionesDetalle)}</p>
                              </div>
                            )}
                          </div>
                        )}
                      </>
                    );
                  })()}
                </div>
              );
            })}
          </div>
        </div>

        {/* Conclusión Técnica del Papel de Trabajo + Leyenda de Marcas */}
        <div className="p-4 rounded-xl bg-teal-50/60 border border-teal-200 space-y-3">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className={`${isPTA ? 'text-sm' : 'text-xs'} font-extrabold uppercase text-teal-900 block`}>
                  Conclusión del Auditor sobre {activePT.rubro}:
                </span>
                {conclusionesCustom[activePT.id] && (
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300">
                    ✏️ Editado
                  </span>
                )}
              </div>
              {editingField !== `conclusion-${activePT.id}` && (
                <button
                  type="button"
                  onClick={() =>
                    handleStartEdit(
                      `conclusion-${activePT.id}`,
                      conclusionesCustom[activePT.id] || activePT.conclusionRubro
                    )
                  }
                  title="Editar o agregar anotaciones personales a la conclusión"
                  className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-lg bg-teal-100 hover:bg-teal-200 text-teal-900 border border-teal-300 transition-colors cursor-pointer"
                >
                  <Pencil className="w-3.5 h-3.5" />
                  <span>Editar conclusión</span>
                </button>
              )}
            </div>

            {editingField === `conclusion-${activePT.id}` ? (
              <div className="mt-2.5 space-y-2">
                <FormattingToolbar onFormat={applyFormat} isDark={false} />
                <textarea
                  ref={textareaRef}
                  value={tempEditText}
                  onChange={(e) => setTempEditText(e.target.value)}
                  rows={4}
                  className="w-full p-3 rounded-xl border border-teal-400 bg-white text-slate-800 text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none shadow-inner leading-relaxed"
                  placeholder="Escribí aquí tus anotaciones o correcciones sobre la conclusión del rubro..."
                />
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleSaveConclusion(activePT.id)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold transition-colors cursor-pointer"
                    >
                      <Check className="w-3.5 h-3.5" /> Guardar cambios
                    </button>
                    <button
                      type="button"
                      onClick={handleCancelEdit}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" /> Cancelar
                    </button>
                  </div>
                  {conclusionesCustom[activePT.id] && (
                    <button
                      type="button"
                      onClick={() => handleResetConclusion(activePT.id)}
                      title="Restablecer al texto original del modelo"
                      className="inline-flex items-center gap-1 text-xs text-rose-600 hover:text-rose-800 font-bold underline cursor-pointer"
                    >
                      <RotateCcw className="w-3 h-3" /> Restablecer original
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div className={`${isPTA ? 'text-sm sm:text-base font-medium' : 'text-xs sm:text-sm'} text-slate-800 mt-1 leading-relaxed whitespace-pre-line`}>
                {renderFormattedRichText(conclusionesCustom[activePT.id] || activePT.conclusionRubro)}
              </div>
            )}

            {/* Resumen Metodológico General Expandible de los 4 PT y Conclusión */}
            {activePT.resumenMetodologicoRubro && (
              <div className="mt-3 pt-3 border-t border-teal-200/80">
                <button
                  type="button"
                  onClick={() => setExpandResumenGeneral(!expandResumenGeneral)}
                  className="w-full flex items-center justify-between p-3.5 rounded-xl bg-white border border-teal-300 hover:bg-teal-50/80 transition-all text-left shadow-xs cursor-pointer group"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="p-1.5 rounded-lg bg-teal-100 text-teal-800 group-hover:bg-teal-200 transition-colors">
                      <BookOpen className="w-4 h-4" />
                    </span>
                    <div>
                      <span className="text-sm sm:text-base font-extrabold text-teal-950 block">
                        {activePT.resumenMetodologicoRubro.titulo}
                      </span>
                      <span className="text-xs text-slate-500 block">
                        {activePT.resumenMetodologicoRubro.subtitulo}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-teal-800 bg-teal-100/70 hover:bg-teal-200/80 px-2.5 py-1 rounded-lg border border-teal-300 shrink-0 transition-colors">
                    <span>{expandResumenGeneral ? 'Ocultar Exposición Completa' : 'Desplegar Exposición Completa'}</span>
                    {expandResumenGeneral ? (
                      <ChevronUp className="w-4 h-4 text-teal-800" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-teal-800" />
                    )}
                  </div>
                </button>

                {expandResumenGeneral && (
                  <div className="mt-3 p-5 rounded-2xl bg-white border border-teal-200 shadow-md space-y-4 animate-in fade-in duration-200">
                    {/* Encabezado y Contexto Narrativo */}
                    <div className="p-4 rounded-xl bg-gradient-to-r from-teal-50 to-slate-50 border border-teal-200/80">
                      <h4 className="text-base font-extrabold text-teal-950 mb-1">
                        {activePT.resumenMetodologicoRubro.subtitulo}
                      </h4>
                      <p className="text-sm text-slate-700 leading-relaxed text-justify">
                        {activePT.resumenMetodologicoRubro.introduccion}
                      </p>
                    </div>

                    {/* Secuencia Narrativa Continua de los 4 Pasos de Auditoría con Lapicito Editable */}
                    <div className="space-y-3.5">
                      {activePT.resumenMetodologicoRubro.pasosNarrativos.map((paso, idx) => {
                        const stepKey = `${activePT.id}-paso-${idx}`;
                        const isEditingThisStep = editingField === stepKey;
                        const currentRelato = pasosNarrativosCustom[stepKey] || paso.relato;
                        const isCustom = !!pasosNarrativosCustom[stepKey];

                        return (
                          <div
                            key={idx}
                            className="p-4 rounded-xl bg-slate-50/70 border border-slate-200 hover:border-teal-300 transition-colors space-y-2"
                          >
                            <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-200/70">
                              <div className="flex items-center gap-2">
                                <span className="px-2.5 py-1 rounded-md bg-teal-800 text-white font-mono text-xs font-extrabold shadow-xs">
                                  {paso.pt}
                                </span>
                                <span className="text-xs font-bold uppercase tracking-wide text-teal-900 bg-teal-100/90 px-2 py-0.5 rounded border border-teal-300">
                                  {paso.etiqueta}
                                </span>
                                {isCustom && (
                                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300">
                                    ✏️ Editado
                                  </span>
                                )}
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-semibold text-slate-600 italic">
                                  {paso.afirmacion}
                                </span>
                                {!isEditingThisStep && (
                                  <button
                                    type="button"
                                    onClick={() => handleStartEdit(stepKey, currentRelato)}
                                    title="Editar o agregar anotaciones personales a este paso"
                                    className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md bg-white hover:bg-teal-100 text-slate-600 hover:text-teal-900 border border-slate-300 transition-colors cursor-pointer"
                                  >
                                    <Pencil className="w-3.5 h-3.5 text-teal-700" />
                                    <span className="text-[11px] font-bold">Editar</span>
                                  </button>
                                )}
                              </div>
                            </div>

                            <h5 className="text-sm sm:text-base font-extrabold text-slate-900">
                              {renderFormattedRichText(paso.titulo)}
                            </h5>

                            {isEditingThisStep ? (
                              <div className="space-y-2">
                                <FormattingToolbar onFormat={applyFormat} isDark={false} />
                                <textarea
                                  ref={textareaRef}
                                  value={tempEditText}
                                  onChange={(e) => setTempEditText(e.target.value)}
                                  rows={6}
                                  className="w-full p-3 rounded-xl border border-teal-400 bg-white text-slate-800 text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none shadow-inner leading-relaxed"
                                  placeholder="Escribí aquí tus anotaciones o correcciones para este paso..."
                                />
                                <div className="flex flex-wrap items-center justify-between gap-2">
                                  <div className="flex items-center gap-2">
                                    <button
                                      type="button"
                                      onClick={() => handleSavePaso(stepKey)}
                                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold transition-colors cursor-pointer"
                                    >
                                      <Check className="w-3.5 h-3.5" /> Guardar cambios
                                    </button>
                                    <button
                                      type="button"
                                      onClick={handleCancelEdit}
                                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                                    >
                                      <X className="w-3.5 h-3.5" /> Cancelar
                                    </button>
                                  </div>
                                  {isCustom && (
                                    <button
                                      type="button"
                                      onClick={() => handleResetPaso(stepKey)}
                                      title="Restablecer al texto original"
                                      className="inline-flex items-center gap-1 text-xs text-rose-600 hover:text-rose-800 font-bold underline cursor-pointer"
                                    >
                                      <RotateCcw className="w-3 h-3" /> Restablecer original
                                    </button>
                                  )}
                                </div>
                              </div>
                            ) : (
                              <div className="text-sm text-slate-700 leading-relaxed text-justify whitespace-pre-line">
                                {renderFormattedRichText(currentRelato)}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* El Broche de Cierre y Conclusión Integradora con Lapicito Editable */}
                    {(() => {
                      const synthKey = `${activePT.id}-synth`;
                      const isEditingSynth = editingField === synthKey;
                      const currentSynth =
                        pasosNarrativosCustom[synthKey] ||
                        activePT.resumenMetodologicoRubro.conclusionNarrativa;
                      const isCustom = !!pasosNarrativosCustom[synthKey];

                      const hasAjuste = activePT.ajustePropuestoNeto !== 0 || activePT.id === 'pt-a';
                      const synthTitle =
                        activePT.resumenMetodologicoRubro?.tituloSintesis ||
                        (activePT.id === 'pt-a'
                          ? 'Fundamentación del Ajuste AJ-01 por $28.340M bajo la NIA 450 y Evaluación de Materialidad'
                          : activePT.id === 'pt-b'
                          ? 'Conclusión del Rubro Créditos por Ventas bajo NIA 500 / RT 37 — Validación Conforme Sin Ajustes'
                          : `Conclusión General del Rubro ${activePT.rubro.split('(')[0].trim()} (RT 37 / NIA 500) — Validación Conforme`);

                      return (
                        <div className={`p-4 rounded-xl border text-slate-900 space-y-2 shadow-xs ${
                          hasAjuste
                            ? 'bg-gradient-to-br from-amber-50 to-amber-100/60 border-amber-300'
                            : 'bg-gradient-to-br from-emerald-50 to-teal-100/60 border-teal-300'
                        }`}>
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <span className={`px-2.5 py-0.5 rounded text-white text-xs font-extrabold uppercase tracking-wide ${
                                hasAjuste ? 'bg-amber-600' : 'bg-teal-700'
                              }`}>
                                Síntesis Integradora
                              </span>
                              <h5 className={`text-sm sm:text-base font-extrabold ${
                                hasAjuste ? 'text-amber-950' : 'text-teal-950'
                              }`}>
                                {synthTitle}
                              </h5>
                              {isCustom && (
                                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-200 text-amber-900 border border-amber-400">
                                  ✏️ Editado
                                </span>
                              )}
                            </div>
                            {!isEditingSynth && (
                              <button
                                type="button"
                                onClick={() => handleStartEdit(synthKey, currentSynth)}
                                title="Editar o agregar notas a la síntesis integradora"
                                className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md bg-white hover:bg-amber-200 text-amber-950 border border-amber-300 transition-colors cursor-pointer"
                              >
                                <Pencil className="w-3.5 h-3.5 text-amber-800" />
                                <span className="text-[11px] font-bold">Editar</span>
                              </button>
                            )}
                          </div>

                          {isEditingSynth ? (
                            <div className="space-y-2">
                              <FormattingToolbar onFormat={applyFormat} isDark={false} />
                              <textarea
                                ref={textareaRef}
                                value={tempEditText}
                                onChange={(e) => setTempEditText(e.target.value)}
                                rows={5}
                                className="w-full p-3 rounded-xl border border-amber-400 bg-white text-slate-800 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none shadow-inner leading-relaxed"
                                placeholder="Escribí aquí tus anotaciones o correcciones para la síntesis integradora..."
                              />
                              <div className="flex flex-wrap items-center justify-between gap-2">
                                <div className="flex items-center gap-2">
                                  <button
                                    type="button"
                                    onClick={() => handleSavePaso(synthKey)}
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-700 hover:bg-amber-800 text-white text-xs font-bold transition-colors cursor-pointer"
                                  >
                                    <Check className="w-3.5 h-3.5" /> Guardar cambios
                                  </button>
                                  <button
                                    type="button"
                                    onClick={handleCancelEdit}
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                                  >
                                    <X className="w-3.5 h-3.5" /> Cancelar
                                  </button>
                                </div>
                                {isCustom && (
                                  <button
                                    type="button"
                                    onClick={() => handleResetPaso(synthKey)}
                                    title="Restablecer al texto original"
                                    className="inline-flex items-center gap-1 text-xs text-rose-600 hover:text-rose-800 font-bold underline cursor-pointer"
                                  >
                                    <RotateCcw className="w-3 h-3" /> Restablecer original
                                  </button>
                                )}
                              </div>
                            </div>
                          ) : (
                            <div className="text-sm text-slate-800 leading-relaxed text-justify whitespace-pre-line">
                              {renderFormattedRichText(currentSynth)}
                            </div>
                          )}
                        </div>
                      );
                    })()}
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="pt-3 border-t border-teal-200/80">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-800 block mb-2">
              Referencias de Marcas de Auditoría del Papel de Trabajo (Tickmarks):
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {getMarcasPorRubro(activePT.id).map((m, i) => (
                <div
                  key={i}
                  className="px-2.5 py-1.5 rounded-lg bg-white border border-teal-200 text-[11px] text-slate-700 flex items-start gap-1.5 shadow-2xs"
                >
                  <strong className="font-mono text-teal-700 text-xs shrink-0 bg-teal-50 px-1 py-0.5 rounded border border-teal-200">{m.simbolo}</strong>
                  <span className="leading-snug text-slate-700 text-[11px]">{m.significado}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* PLANILLA RESUMEN DE AJUSTES Y RECLASIFICACIONES PROPUESTOS (PAE / SAD) */}
      <div id="sec-pae" className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs scroll-mt-20 space-y-5">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <span className="px-2.5 py-1 rounded-md text-xs font-extrabold bg-rose-600 text-white">
              ETAPA 2 – CIERRE DE EJECUCIÓN: PLANILLA DE AJUSTES Y RECLASIFICACIONES PROPUESTOS (PAE / SAD)
            </span>
            <h3 className="text-lg font-extrabold text-slate-900 mt-2">
              Evaluación de Hallazgos frente a Umbral Mínimo PAE ($8.311M), Error Tolerable ($83.112M) y Materialidad ($166.225M)
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Consolidado bajo NIA 450 y RT 37. Podés simular si la Gerencia de Telecom Argentina S.A. acepta o no cada asiento sugerido y observar su efecto directo en el Saldo Auditado y en el Dictamen de la Etapa 3.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900 text-white shrink-0 flex flex-wrap items-center gap-4">
            <div>
              <span className="text-[10px] font-bold uppercase text-slate-400 block">
                {!mostrarTodosAjustes && activePT.id === 'pt-a'
                  ? 'Ajuste Propuesto (AJ-01)'
                  : !mostrarTodosAjustes && (activePT.id === 'pt-e' || activePT.id === 'pt-b')
                  ? `${activePT.codigo} Validado`
                  : 'Propuestos (> PAE)'}
              </span>
              <span className="text-lg font-extrabold font-mono text-sky-300">
                ${montoAjustesPropuestos.toLocaleString('es-AR')} M
              </span>
            </div>
            <div className="border-l border-slate-700 pl-4">
              <span className="text-[10px] font-bold uppercase text-slate-400 block">
                Pendiente No Registrado
              </span>
              <span
                className={`text-lg font-extrabold font-mono ${
                  montoAjustesNoRegistrados > 0 ? 'text-amber-400' : 'text-emerald-400'
                }`}
              >
                ${montoAjustesNoRegistrados.toLocaleString('es-AR')} M
              </span>
            </div>
            <div className="border-l border-slate-700 pl-4">
              <span className="text-[10px] font-bold uppercase text-slate-400 block">
                Efecto en Dictamen (RT 37)
              </span>
              <span
                className={`text-xs font-extrabold ${
                  montoAjustesNoRegistrados === 0
                    ? 'text-lime-400'
                    : montoAjustesNoRegistrados < 166225
                    ? 'text-amber-300'
                    : 'text-rose-400'
                }`}
              >
                {montoAjustesNoRegistrados === 0
                  ? 'Opinión Favorable Limpia ✓'
                  : montoAjustesNoRegistrados < 166225
                  ? 'Favorable s/Salvedades (< PM $166.225M) ✓'
                  : 'Con Salvedades por Desvío Material (> PM)'}
              </span>
            </div>
          </div>
        </div>

        {/* 1. CUADRO RESUMEN CONSOLIDADO DE LOS 3 RUBROS PRIORITARIOS (ENFOQUE CÁTEDRA) */}
        <div className="rounded-xl border border-slate-200 overflow-hidden bg-slate-50/40">
          <div className="px-4 py-3 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-lime-300 block">
                1. Cuadro Resumen de Hallazgos y Ajustes Acumulados (Programas Ejecutados – PAE / SAD)
              </span>
              <p className="text-[11px] text-slate-300">
                Parámetros de evaluación (NIA 320 / NIA 450): PM $166.225M (1% Activo Total) • ET $83.112M (50% PM) • PAE $8.311M (5% PM)
              </p>
            </div>
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-white/10 text-teal-200 border border-white/15">
              3 Rubros Seleccionados: PT-A, PT-E y PT-B
            </span>
          </div>

          <div className="overflow-x-auto bg-white">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-100 text-slate-700 font-bold text-[11px] uppercase border-b border-slate-200">
                  <th className="py-2.5 px-3">Ref. PT / Cód.</th>
                  <th className="py-2.5 px-3">Rubro y Nota</th>
                  <th className="py-2.5 px-3">Hallazgo / Validación (Origen CCI)</th>
                  <th className="py-2.5 px-3 text-right">Saldo Libros ($M)</th>
                  <th className="py-2.5 px-3 text-right">Ajuste ($M)</th>
                  <th className="py-2.5 px-3 text-right">Saldo Auditado ($M)</th>
                  <th className="py-2.5 px-3">Evaluación PAE / ET</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="bg-amber-50/30 hover:bg-amber-50/60">
                  <td className="py-2.5 px-3 font-mono font-extrabold text-slate-900">
                    PT-A (A1/A4)
                    <span className="block text-[10px] text-rose-700">H-01 / AJ-01</span>
                  </td>
                  <td className="py-2.5 px-3 font-bold text-slate-900">
                    Bienes de Uso
                    <span className="block text-[10px] font-normal text-slate-500">PP&amp;E – Nota 9 (Medición y Exist.)</span>
                  </td>
                  <td className="py-2.5 px-3 text-slate-700 leading-snug">
                    Acumulación de 2 desvíos (<strong className="text-teal-800">CCI-02 Preg. 22-23</strong>): <strong>a)</strong> $21.450M centrales analógicas obsoletas (PT-A4); <strong>b)</strong> $6.890M fibra/nodos vandalizados en SAP FI-AA (PT-A1).
                  </td>
                  <td className="py-2.5 px-3 text-right font-mono text-slate-700">$6.789.118</td>
                  <td className="py-2.5 px-3 text-right font-mono font-extrabold text-rose-700">($28.340)</td>
                  <td className="py-2.5 px-3 text-right font-mono font-extrabold text-slate-900 bg-teal-50/40">
                    {aj01Aceptado ? '$6.760.778' : '$6.789.118*'}
                  </td>
                  <td className="py-2.5 px-3">
                    <span className="inline-block px-2 py-0.5 rounded bg-rose-100 text-rose-800 font-bold text-[10px]">
                      &gt; PAE ($8.311M) / &lt; ET ($83.112M)
                    </span>
                    <span className="block text-[10px] text-slate-600 mt-0.5">
                      {aj01Aceptado ? 'AJ-01 aceptado ✓' : 'AJ-01 pendiente de registro'}
                    </span>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50">
                  <td className="py-2.5 px-3 font-mono font-extrabold text-teal-800">
                    PT-E (E1/E2)
                    <span className="block text-[10px] text-emerald-700">Sin desvíos</span>
                  </td>
                  <td className="py-2.5 px-3 font-bold text-slate-900">
                    Activos Intangibles
                    <span className="block text-[10px] font-normal text-slate-500">Nota 10 (Exist., Prop. y Val.)</span>
                  </td>
                  <td className="py-2.5 px-3 text-slate-700 leading-snug">
                    Validación de espectro ENACOM, marcas INPI, software NIC 38.57, amortizaciones ($234.722M en Nota 10/25) y valor residual sin diferencias.
                  </td>
                  <td className="py-2.5 px-3 text-right font-mono text-slate-700">$2.671.525</td>
                  <td className="py-2.5 px-3 text-right font-mono font-bold text-emerald-700">$0</td>
                  <td className="py-2.5 px-3 text-right font-mono font-extrabold text-slate-900 bg-teal-50/40">$2.671.525</td>
                  <td className="py-2.5 px-3">
                    <span className="inline-block px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                      Conforme (sin ajustes)
                    </span>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50">
                  <td className="py-2.5 px-3 font-mono font-extrabold text-teal-800">
                    PT-B (B1–B3)
                    <span className="block text-[10px] text-emerald-700">Sin desvíos</span>
                  </td>
                  <td className="py-2.5 px-3 font-bold text-slate-900">
                    Créditos por Ventas
                    <span className="block text-[10px] font-normal text-slate-500">Nota 5 – Netos (Exist., Int., Val.)</span>
                  </td>
                  <td className="py-2.5 px-3 text-slate-700 leading-snug">
                    Circularización positiva B2B, cobros posteriores en extractos ene-26, corte NIIF 15 e interfaces y recálculo previsión NIIF 9 ($(270.919)M) sin diferencias.
                  </td>
                  <td className="py-2.5 px-3 text-right font-mono text-slate-700">$800.128</td>
                  <td className="py-2.5 px-3 text-right font-mono font-bold text-emerald-700">$0</td>
                  <td className="py-2.5 px-3 text-right font-mono font-extrabold text-slate-900 bg-teal-50/40">$800.128</td>
                  <td className="py-2.5 px-3">
                    <span className="inline-block px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                      Conforme (sin ajustes)
                    </span>
                  </td>
                </tr>

                <tr className="bg-slate-100 font-extrabold text-slate-900 border-t-2 border-slate-300">
                  <td className="py-2.5 px-3 font-mono">TOTAL CÁTEDRA</td>
                  <td className="py-2.5 px-3">Rubros Seleccionados (PT-A, PT-E, PT-B)</td>
                  <td className="py-2.5 px-3 font-semibold text-slate-700">
                    Efecto neto acumulado sobre Activo y Resultado del Ejercicio 2025 (17,05% de PM $166.225M)
                  </td>
                  <td className="py-2.5 px-3 text-right font-mono">$10.260.771</td>
                  <td className="py-2.5 px-3 text-right font-mono text-rose-700">($28.340)</td>
                  <td className="py-2.5 px-3 text-right font-mono text-teal-900">
                    {aj01Aceptado ? '$10.232.431' : '$10.260.771*'}
                  </td>
                  <td className="py-2.5 px-3 text-rose-800 text-[11px]">
                    &gt; PAE ($8.311M) / &lt; ET ($83.112M)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {!aj01Aceptado && (
            <div className="px-4 py-2 bg-amber-50 border-t border-amber-200 text-[11px] text-amber-900 font-semibold">
              *Nota de simulación: Al estar destildado AJ-01 como «No Registrado por Gerencia», el saldo contable sin corregir permanece en $6.789.118M (Bienes de Uso) / $10.260.771M (subtotal rubros), por debajo del ET ($83.112M).
            </div>
          )}
          <div className="px-4 py-2 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-600 flex flex-wrap items-center justify-between gap-2">
            <span>
              <strong>Alcance ampliado en la web:</strong> además de los 3 rubros principales, en la barra inferior podés desplegar la reclasificación neutra <strong>AJ-04</strong> en Ventas Flow (PT-D3: $11.240M) y la partida no ajustada <strong>PAE-NC-01</strong> (&lt; PAE: $7.570M).
            </span>
          </div>
        </div>

        {/* Barra de alternancia de visualización de Asientos Contables Sugeridos */}
        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-700">
              2. Asientos Contables Sugeridos (Detalle):
            </span>
            {!mostrarTodosAjustes ? (
              <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-teal-100 text-teal-800 border border-teal-300">
                🎯 Solo Asientos de {activePT.rubro} ({ajustesDelRubroActivo.length})
              </span>
            ) : (
              <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-amber-100 text-amber-900 border border-amber-300">
                👁️ Todos los Hallazgos de la Auditoría ({ajustesState.length})
              </span>
            )}
            {!mostrarTodosAjustes && activePT.id === 'pt-a' && (
              <span className="text-[11px] text-slate-600 font-medium">
                — Enfoque Cátedra: 2 desvíos unificados en <strong>AJ-01</strong> por $28.340M (NIA 450).
              </span>
            )}
            {!mostrarTodosAjustes && activePT.id === 'pt-e' && (
              <span className="text-[11px] text-emerald-700 font-semibold">
                — Enfoque Cátedra: Activos Intangibles (Nota 10) validado 100% conforme sin ajustes ($0).
              </span>
            )}
            {!mostrarTodosAjustes && activePT.id === 'pt-b' && (
              <span className="text-[11px] text-emerald-700 font-semibold">
                — Enfoque Cátedra: Créditos por Ventas (Nota 5) validado 100% conforme sin ajustes ($0).
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={() => setMostrarTodosAjustes((prev) => !prev)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer shadow-xs border bg-white hover:bg-slate-100 text-slate-800 border-slate-300 active:scale-95"
          >
            {mostrarTodosAjustes ? (
              <span>🎯 Ocultar y ver solo {activePT.codigo} ({activePT.rubro.split('(')[0].trim()})</span>
            ) : (
              <span>👁️ Desplegar todos los hallazgos de la auditoría (AJ-01, AJ-04 y PAE-NC-01)</span>
            )}
          </button>
        </div>

        <div className="space-y-4">
          {ajustesAMostrar.length === 0 ? (
            <div className="p-6 text-center rounded-xl bg-slate-50 border border-dashed border-slate-300 space-y-2">
              <span className="text-2xl block">✅</span>
              <h4 className="text-sm font-extrabold text-slate-800">
                Sin Asientos de Ajuste Propuestos para {activePT.rubro}
              </h4>
              <p className="text-xs text-slate-600 max-w-lg mx-auto leading-relaxed">
                Este rubro cerró <strong>100% conforme ($0 de ajuste propuesto)</strong> al no arrojar desvíos superiores al PAE ($8.311M). El único ajuste patrimonial de los 3 rubros prioritarios corresponde a <strong>AJ-01 en Bienes de Uso ($28.340M)</strong>.
              </p>
              <button
                type="button"
                onClick={() => setMostrarTodosAjustes(true)}
                className="mt-2 px-3 py-1.5 rounded-lg bg-teal-700 text-white text-xs font-bold hover:bg-teal-800 transition-colors cursor-pointer"
              >
                👁️ Ver todos los hallazgos y asientos de la auditoría
              </button>
            </div>
          ) : (
            ajustesAMostrar.map((item) => {
              const totalDebe = item.asientoContable.reduce((s, l) => s + (l.debe || 0), 0);
              const totalHaber = item.asientoContable.reduce((s, l) => s + (l.haber || 0), 0);
              return (
                <div
                  key={item.id}
                  className={`rounded-xl border p-4 transition-all ${
                    item.superaPAE
                      ? item.aceptado
                        ? 'border-emerald-200 bg-emerald-50/20'
                        : 'border-red-300 bg-red-50/30'
                      : 'border-slate-200 bg-slate-50/60'
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-3 border-b border-slate-200/80">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded bg-slate-900 text-white font-mono text-xs font-extrabold">
                        {item.codigoHallazgo} / {item.codigoAjuste}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-teal-100 text-teal-800 text-xs font-bold">
                        Ref: {item.refPT} — {item.rubro}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 text-xs font-bold">
                        Afirmación: {item.afirmacionAfectada}
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded text-xs font-extrabold font-mono ${
                          item.superaPAE ? 'bg-red-100 text-red-700' : 'bg-slate-200 text-slate-700'
                        }`}
                      >
                        Monto: ${item.montoMillones.toLocaleString('es-AR')} M{' '}
                        {item.superaPAE ? '(> PAE $8.311M)' : '(< PAE $8.311M — No Significativo)'}
                      </span>
                    </div>

                    {item.superaPAE && (
                      <label className="inline-flex items-center gap-2 cursor-pointer select-none bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs">
                        <input
                          type="checkbox"
                          checked={item.aceptado}
                          onChange={() => onToggleAjusteAceptado(item.id)}
                          className="w-4 h-4 accent-teal-600 rounded cursor-pointer"
                        />
                        <span className="text-xs font-bold text-slate-800">
                          {item.aceptado
                            ? 'Registrado / Aceptado por Gerencia ✓'
                            : 'Pendiente / No Registrado por Gerencia'}
                        </span>
                      </label>
                    )}
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-3 items-start">
                    <div className="lg:col-span-6 space-y-2 text-xs">
                      <p className="text-[11px] font-bold text-teal-800">
                        Trazabilidad Control Interno: {item.origenCCI}
                      </p>
                      <p className="text-slate-700 leading-relaxed">{item.descripcionHallazgo}</p>
                      {item.fundamentoNIA450 && (
                        <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-[11px] text-amber-950 leading-relaxed">
                          <strong className="text-amber-900 block mb-0.5">
                            Fundamento de unificación bajo NIA 450:
                          </strong>
                          {item.fundamentoNIA450}
                        </div>
                      )}
                    </div>

                    {/* Asiento Contable Propuesto (Debe / Haber) */}
                    <div className="lg:col-span-6 overflow-x-auto rounded-lg border border-slate-200 bg-white">
                      <table className="w-full text-left border-collapse text-xs font-mono">
                        <thead>
                          <tr className="bg-slate-100 text-slate-600 font-sans font-bold text-[10px] uppercase border-b border-slate-200">
                            <th className="py-1.5 px-3">Asiento Contable Sugerido (Cuentas SAP)</th>
                            <th className="py-1.5 px-3 text-right">Debe ($M)</th>
                            <th className="py-1.5 px-3 text-right">Haber ($M)</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {item.asientoContable.map((linea, idx) => (
                            <tr key={idx}>
                              <td
                                className={`py-1.5 px-3 font-sans font-medium text-slate-800 ${
                                  linea.haber > 0 ? 'pl-6 text-slate-600' : ''
                                }`}
                              >
                                {linea.cuenta}
                              </td>
                              <td className="py-1.5 px-3 text-right font-bold text-slate-800">
                                {linea.debe > 0 ? linea.debe.toLocaleString('es-AR') : '—'}
                              </td>
                              <td className="py-1.5 px-3 text-right font-bold text-slate-800">
                                {linea.haber > 0 ? linea.haber.toLocaleString('es-AR') : '—'}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                        <tfoot>
                          <tr className="bg-slate-50 border-t-2 border-slate-200 font-extrabold text-slate-900">
                            <td className="py-1.5 px-3 font-sans text-[11px]">
                              Totales Asiento {item.codigoAjuste}
                            </td>
                            <td className="py-1.5 px-3 text-right">{totalDebe.toLocaleString('es-AR')}</td>
                            <td className="py-1.5 px-3 text-right">{totalHaber.toLocaleString('es-AR')}</td>
                          </tr>
                        </tfoot>
                      </table>
                      {item.saldoLibros && item.saldoAuditado && (
                        <div className="px-3 py-1.5 bg-teal-50/60 border-t border-teal-100 text-[11px] font-sans text-teal-950 font-semibold">
                          Conciliación del rubro: Saldo s/Libros ${item.saldoLibros.toLocaleString('es-AR')}M − Ajuste ({item.montoMillones.toLocaleString('es-AR')}M) = <strong>Saldo Auditado ${item.saldoAuditado.toLocaleString('es-AR')}M</strong>.
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* 3. CONCLUSIÓN GLOBAL DE ACUMULACIÓN E IMPACTO EN EL INFORME DEL AUDITOR */}
        <div
          className={`p-4 rounded-xl border text-xs space-y-2 ${
            totalAjustesGlobalNoRegistrados === 0
              ? 'bg-emerald-50/60 border-emerald-200 text-emerald-950'
              : totalAjustesGlobalNoRegistrados < 166225
              ? 'bg-amber-50/70 border-amber-300 text-amber-950'
              : 'bg-rose-50 border-rose-300 text-rose-950'
          }`}
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-extrabold uppercase tracking-wide text-[11px]">
              3. Conclusión Global de Acumulación e Impacto en el Informe del Auditor (NIA 450 / RT 37)
            </span>
            <span className="px-2.5 py-0.5 rounded-full font-bold text-[10px] bg-white/80 border border-current/20">
              {totalAjustesGlobalNoRegistrados === 0
                ? 'Todos los ajustes > PAE registrados ✓'
                : `No registrados: $${totalAjustesGlobalNoRegistrados.toLocaleString('es-AR')}M (< PM $166.225M)`}
            </span>
          </div>
          <p className="leading-relaxed">
            Evaluados en forma conjunta los tres programas sustantivos de la cátedra (<strong>PT-A, PT-E y PT-B</strong>), la única diferencia patrimonial identificada asciende a <strong>$28.340 M</strong> en Bienes de Uso (<strong>AJ-01</strong>, acumulación de $21.450M de PT-A4 y $6.890M de PT-A1), superando el umbral <strong>PAE ($8.311 M)</strong> y proponiéndose formalmente a la Gerencia al cierre del 31/12/2025.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
            <div className="p-2.5 rounded-lg bg-white/75 border border-black/5">
              <strong>Con aceptación del ajuste por la Gerencia:</strong> Los saldos quedan debidamente corregidos (Bienes de Uso: $6.789.118M → $6.760.778M; Activos Intangibles: $2.671.525M y Créditos por Ventas: $800.128M conformes sin desvíos), permitiendo emitir una <strong>opinión favorable sin salvedades</strong>.
            </div>
            <div className="p-2.5 rounded-lg bg-white/75 border border-black/5">
              <strong>En caso de no registración:</strong> El desvío residual de AJ-01 ($28.340M) permanece por debajo del <strong>Error Tolerable ($83.112 M)</strong> y equivale al <strong>17,05%</strong> de la <strong>Materialidad Global ($166.225 M)</strong>, sin generar distorsión significativa ni generalizada (RT 37 / NIA 700), sin perjuicio de su comunicación en la <strong>Carta de Recomendaciones de Control Interno (CCI-02)</strong>.
            </div>
          </div>
        </div>
      </div>

      {/* GUÍA DE LECTURA Y EXPOSICIÓN ORAL — CIERRE DE LA ETAPA 2: EJECUCIÓN DEL TRABAJO DE CAMPO */}
      <div className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 rounded-2xl border border-teal-500/40 p-6 text-white shadow-lg space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <BookmarkCheck className="w-5 h-5 text-lime-400 shrink-0" />
            <span className="text-xs font-extrabold uppercase tracking-wider text-lime-400">
              Guía de Lectura y Exposición Oral — Cierre de la Etapa 2: Ejecución (Trabajo de Campo y Papeles de Trabajo)
            </span>
          </div>
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-white/10 text-teal-200 border border-white/15">
            Doctrina: Carlos A. Slosse &amp; RT 37 (Obtención de Elementos de Juicio Válidos y Suficientes)
          </span>
        </div>

        <h3 className="text-base sm:text-lg font-extrabold text-white">
          Resumen de la Etapa 2 (Ejecución): ¿Qué empezamos haciendo acá, qué hicimos y por qué?
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs leading-relaxed">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
            <strong className="text-lime-300 block uppercase text-[11px] tracking-wider">
              1. ¿Qué se empieza haciendo en la Etapa de Ejecución?
            </strong>
            <p className="text-slate-200">
              En la <strong>Etapa 2 (Ejecución)</strong> llevamos a la práctica los <strong>Programas de Trabajo (A a E)</strong> que habíamos diseñado en la Etapa 1. Lo primero que hacemos al abrir el legajo de cada rubro es confeccionar su <strong>Cédula Sumaria (o Hoja Llave: PT-A, PT-B, PT-C, PT-D y PT-E)</strong>: allí volcamos el saldo oficial que muestra el Balance de Telecom al 31/12/2025 junto con su 2024 comparativo y lo desglosamos en las líneas que componen su Nota a los Estados Contables, para saber exactamente qué importe vamos a auditar.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
            <strong className="text-amber-300 block uppercase text-[11px] tracking-wider">
              2. ¿Qué se hace concretamente durante el trabajo de campo?
            </strong>
            <p className="text-slate-200">
              A continuación abrimos las <strong>Cédulas Analíticas (sub-papeles como PT-A1, PT-B3, PT-C3, etc.)</strong> donde ejecutamos las pruebas sustantivas reales y dejamos <strong>marcas de auditoría (✓, ∑, ©, ⊗)</strong>:
              <br />• En <strong>PP&amp;E (PT-A)</strong> inspeccionamos los 16 Data Centers y 85 nodos y detectamos centrales analógicas obsoletas y nodos vandalizados sin dar de baja (<strong>Ajuste AJ-01 por $28.340M</strong>).
              <br />• En <strong>Créditos por Ventas (PT-B)</strong> circularizamos clientes B2B, verificamos cobranzas posteriores en extractos bancarios de enero 2026, auditamos el corte de operaciones e interfaces recaudadoras, y recalculamos con software TAACs la previsión NIIF 9, validando la razonabilidad patrimonial del rubro conforme sin ajustes propuestos.
              <br />• En <strong>Préstamos (PT-C)</strong> confirmamos el 100% de la deuda con bancos y Caja de Valores y recalculamos su valuación al TC BNA $/US$ 1.455,00.
              <br />• En <strong>Ventas (PT-D)</strong> hicimos la prueba global (Parque × ARPU) y detectamos ingresos de streaming de terceros registrados por el bruto (<strong>Reclasificación AJ-04 por $11.240M</strong>).
              <br />• En <strong>Activos Intangibles (PT-E)</strong> auditamos el 100% de licencias de espectro ENACOM y marcas INPI, validamos los 6 criterios de la NIC 38.57 para proyectos de software en SAP PS ($285.355M), corte de gastos de mantenimiento ($42.500M) y pruebas globales de amortizaciones y valor residual ($2.671.525M), concluyendo el rubro conforme y sin ajustes.
              <br />• En <strong>Llave de Negocio (PT-F)</strong> auditamos con especialistas de valuación el Test de Deterioro (NIC 36) sobre la UGE Redes y TMA.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
            <strong className="text-teal-300 block uppercase text-[11px] tracking-wider">
              3. ¿Por qué y para qué lo hacemos?
            </strong>
            <p className="text-slate-200">
              Porque la <strong>RT 37 (modif. RT 53)</strong> y <strong>Carlos Slosse</strong> exigen que el auditor reúna <strong>«elementos de juicio válidos y suficientes» (evidencia documental y matemática en Papeles de Trabajo)</strong> antes de emitir su opinión. Todos los errores detectados en las Cédulas Analíticas que superan el umbral mínimo de ajuste (<strong>PAE de $8.311M</strong>) se vuelcan en la <strong>Planilla de Ajustes Propuestos (PAE)</strong> con sus respectivos asientos contables (Debe/Haber), los cuales pasan a la <strong>Etapa 3 (Conclusión e Informe)</strong> para definir si el dictamen final sale limpio (si la Gerencia los registra) o con salvedades (si no los registra).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
