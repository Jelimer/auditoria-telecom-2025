import React, { useState, useEffect } from 'react';
import {
  Calculator,
  Layers,
  CheckCircle2,
  Calendar,
  FileText,
  ShieldAlert,
  ArrowRight,
  Filter,
  Lightbulb,
  X,
  RotateCcw
} from 'lucide-react';
import {
  materialidadData,
  rubrosSignificativos,
  cronogramaAuditoria,
  presupuestoHonorarios,
  marcoTeoricoSlosse
} from '../data/etapa1Data';
import { NormaTooltip, renderTextWithNormas } from './NormaTooltip';
import { EditableRichBlock } from './RichTextBox';

const PLAN_DETALLADA_STORAGE_KEY = 'audiia_plan_detallada_custom_v1';

const MAT_BANNER_DEFAULTS = {
  'mat-banner-titulo':
    '¿Qué es la Materialidad (Significatividad) y qué se pretende en este punto 1.4?',
  'mat-banner-intro':
    'En una compañía de la escala de <b>Telecom Argentina S.A.</b> (con un Activo Total de <b>$16.622.552 millones</b>, es decir, más de 16,6 billones de pesos), el auditor externo <b>no busca exactitud matemática al centavo</b>, sino <b>razonabilidad</b>. La <b>Materialidad o Significatividad</b> (según Carlos Slosse y las NIAs / RT N° 32 FACPCE — NIA 320) es el <i>«termómetro o umbral numérico»</i> a partir del cual un error u omisión contable es tan grande que podría cambiar la decisión económica de un usuario que lee el Balance (un accionista en la bolsa, un banco acreedor o la CNV).',
  'mat-card-1-titulo': '1. Materialidad Global (PM = $166.225M — 1% del Activo):',
  'mat-card-1-desc':
    'Es el techo máximo para el Balance en su conjunto. Si al cierre la suma de errores no corregidos iguala o supera <b>$166.225M</b>, los EECC presentan una distorsión <b>material (significativa)</b> y cambia la opinión: <b>Con Salvedades</b> si el efecto es acotado (NIA 705.7), o <b>Adversa</b> únicamente si es generalizado (NIA 705.8).',
  'mat-card-2-titulo': '2. Error Tolerable (ET = $83.112M — 50% de la PM):',
  'mat-card-2-desc':
    'Es el tope <b>operativo</b> dentro de <b>cada rubro individual</b> (por ej., Bienes de Uso o Créditos por Ventas). Se fija en el límite prudente del 50% por el RC Alto (Archivo y TIC) para definir el <b>tamaño de las muestras</b> y contener el riesgo de agregación. Superarlo en un rubro (&lt; PM) obliga a ampliar pruebas y proponer ajuste, sin cambiar por sí solo la opinión.',
  'mat-card-3-titulo': '3. Umbral Mínimo de Ajustes (PAE = $8.311M — 5% de la PM):',
  'mat-card-3-desc':
    'Es el filtro de lo «claramente insignificante» (NIA 450). Todo desvío o grupo homogéneo <b>≥ $8.311M</b> (como <code>AJ-01</code> por $28.340M, que agrupa <code>PT-A4</code> $21.450M + <code>PT-A1</code> $6.890M en Bienes de Uso) se carga en la Planilla PAE para pedir ajuste. Si queda sin ajustar pero &lt; PM (17,05% de PM), va a Carta de Representación (NIA 450.14) y Comité de Auditoría (NIA 260), sin cambiar la opinión limpia.'
};

export default function Etapa1PlanDetalladaView({ onNavigate, subTarget, subTargetTick }) {
  const [selectedRubroId, setSelectedRubroId] = useState('rubro-1');
  const [filtroAfirmacion, setFiltroAfirmacion] = useState('TODAS'); // 'TODAS' | 'Existencia' | 'Integridad' | 'Propiedad' | 'Medición' | 'Exposición'
  const [modoVista, setModoVista] = useState('por-rubro'); // 'por-rubro' | 'transversal-afirmacion'
  const [modalTeorico, setModalTeorico] = useState(null); // null | materialidadData.materialidadGlobal.fundamentoTeorico | etc.
  const [expandedProcedimientos, setExpandedProcedimientos] = useState({});
  const [expandAllProcedimientos, setExpandAllProcedimientos] = useState(false);
  const [customTexts, setCustomTexts] = useState(() => {
    try {
      const saved = localStorage.getItem(PLAN_DETALLADA_STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const handleSaveCustomText = (key, newVal) => {
    setCustomTexts((prev) => {
      const updated = { ...prev, [key]: newVal };
      try {
        localStorage.setItem(PLAN_DETALLADA_STORAGE_KEY, JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
  };

  const handleResetCustomText = (key) => {
    if (!window.confirm('¿Deseas restablecer este texto a su redacción original?')) return;
    setCustomTexts((prev) => {
      const updated = { ...prev };
      delete updated[key];
      try {
        localStorage.setItem(PLAN_DETALLADA_STORAGE_KEY, JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
  };

  const handleResetAllMaterialidadTexts = () => {
    if (
      !window.confirm(
        '¿Estás seguro de que deseas restablecer todos los textos editados de Materialidad (1.4) a su versión original?'
      )
    ) {
      return;
    }
    setCustomTexts({});
    try {
      localStorage.removeItem(PLAN_DETALLADA_STORAGE_KEY);
    } catch (e) {
      console.error(e);
    }
  };

  const totalCustomCount = Object.keys(customTexts).length;

  const [highlightedAfirmacion, setHighlightedAfirmacion] = useState(null);

  useEffect(() => {
    if (!highlightedAfirmacion) return;
    const timer = setTimeout(() => setHighlightedAfirmacion(null), 3800);
    return () => clearTimeout(timer);
  }, [highlightedAfirmacion]);

  useEffect(() => {
    // Solo reaccionar ante una navegación intencional (disparada por subTargetTick)
    // para evitar que el ScrollSpy de App.jsx dispare scrollIntoView involuntarios durante el scroll manual
    if (!subTargetTick || !subTarget) return;

    if (subTarget === 'sec-1c-afirmaciones' || subTarget.startsWith('sec-1c-afirmaciones:')) {
      const afParam = subTarget.includes(':') ? decodeURIComponent(subTarget.split(':')[1] || '') : '';
      if (afParam) {
        const matched = marcoTeoricoSlosse.afirmacionesDefinicion.find(
          (a) => a.nombre.toLowerCase() === afParam.toLowerCase()
        );
        if (matched) {
          setFiltroAfirmacion(matched.nombre);
          setHighlightedAfirmacion(matched.nombre);
        }
      }
      setTimeout(() => {
        const el = document.getElementById('sec-1c-afirmaciones');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 140);
      return;
    }

    if (subTarget.startsWith('afirmacion:')) {
      const parts = subTarget.split(':');
      const rubroId = parts[1];
      const afNombre = parts[2];
      if (rubroId) setSelectedRubroId(rubroId);
      if (afNombre) setFiltroAfirmacion(afNombre);
      setModoVista('por-rubro');
      setTimeout(() => {
        const el = document.getElementById('sec-1c-rubros');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 80);
      return;
    }

    if (subTarget === 'sec-1c-rubros') {
      setModoVista('por-rubro');
      setTimeout(() => {
        const el = document.getElementById('sec-1c-rubros');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 140);
    }
  }, [subTargetTick]);

  const activeRubro =
    rubrosSignificativos.find((r) => r.id === selectedRubroId) || rubrosSignificativos[0];

  const afirmacionColors = {
    Existencia: 'bg-blue-100 text-blue-800 border-blue-200',
    Integridad: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    Propiedad: 'bg-purple-100 text-purple-800 border-purple-200',
    Medición: 'bg-amber-100 text-amber-900 border-amber-200',
    Exposición: 'bg-rose-100 text-rose-800 border-rose-200'
  };

  return (
    <div className="space-y-6">
      {/* Encabezado y Niveles de Materialidad */}
      <div id="sec-1c-materialidad" className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs scroll-mt-20">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <NormaTooltip
                code="NIA 320"
                variant="pill"
                pillClassName="bg-teal-800 text-lime-300 hover:bg-teal-900"
                align="left"
                placement="bottom"
              />
              <span className="px-2.5 py-1 rounded-md text-xs font-extrabold bg-teal-600 text-white">
                ETAPA 1.4 Y 1.5 — PLANIFICACIÓN DETALLADA (MATERIALIDAD, AFIRMACIONES Y PROGRAMAS A-F)
              </span>
            </div>
            <h2 className="text-xl font-extrabold text-slate-900 mt-2">
              Materialidad, Selección de Rubros Significativos, Matriz de Afirmaciones y Programas de Trabajo
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Cifras expresadas en millones de pesos constantes al 31/12/2025 (NIIF / NIC 29) • Enfoque General:{' '}
              <strong className="text-red-600">Predominantemente Sustantivo (NC Bajo / RC Alto)</strong>
            </p>
          </div>
          <button
            onClick={() => onNavigate('etapa2-ejecucion')}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-teal-700 text-white text-xs font-bold hover:bg-teal-800 transition-colors cursor-pointer"
          >
            Ir a Etapa 2: Ejecución de Papeles de Trabajo <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Tarjetas de Significatividad / Materialidad (Slosse / RT N° 32 / NIA 320 y 450) con Lamparita Flotante */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-5">
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-extrabold uppercase text-slate-500">
                Base de Referencia Patrimonial (Benchmark)
              </span>
              <p className="text-xl font-extrabold text-slate-900 mt-1 font-mono">
                ${materialidadData.activoTotal.toLocaleString('es-AR')} M
              </p>
              <p className="text-xs font-semibold text-slate-700 mt-0.5">Activo Total Consolidado</p>
              <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                {materialidadData.criterioBase}
              </p>
            </div>
            <button
              onClick={() => setModalTeorico(materialidadData.materialidadGlobal.fundamentoTeorico)}
              className="mt-3 inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 text-[11px] font-extrabold transition-colors cursor-pointer"
            >
              <Lightbulb className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              ¿Por qué el Activo y no el Resultado?
            </button>
          </div>

          <div className="p-4 rounded-xl border border-teal-200 bg-teal-50/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-1">
                <span className="text-[10px] font-extrabold uppercase text-teal-800">
                  {materialidadData.materialidadGlobal.sigla}
                </span>
                <span className="px-2 py-0.5 rounded bg-teal-100 text-teal-800 font-mono text-[10px] font-bold">
                  {materialidadData.materialidadGlobal.formula}
                </span>
              </div>
              <p className="text-xl font-extrabold text-teal-950 mt-1 font-mono">
                ${materialidadData.materialidadGlobal.importe.toLocaleString('es-AR')} M
              </p>
              <p className="text-xs font-bold text-teal-800 mt-0.5">
                {materialidadData.materialidadGlobal.nombre}
              </p>
              <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                {materialidadData.materialidadGlobal.explicacion}
              </p>
            </div>
            <button
              onClick={() => setModalTeorico(materialidadData.materialidadGlobal.fundamentoTeorico)}
              className="mt-3 inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 text-[11px] font-extrabold transition-colors cursor-pointer"
            >
              <Lightbulb className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              Fundamento del 1% e Impacto en Informe
            </button>
          </div>

          <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-1">
                <span className="text-[10px] font-extrabold uppercase text-amber-800">
                  {materialidadData.errorTolerable.sigla}
                </span>
                <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-mono text-[10px] font-bold">
                  {materialidadData.errorTolerable.formula}
                </span>
              </div>
              <p className="text-xl font-extrabold text-amber-950 mt-1 font-mono">
                ${materialidadData.errorTolerable.importe.toLocaleString('es-AR')} M
              </p>
              <p className="text-xs font-bold text-amber-900 mt-0.5">
                {materialidadData.errorTolerable.nombre}
              </p>
              <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                {materialidadData.errorTolerable.explicacion}
              </p>
            </div>
            <button
              onClick={() => setModalTeorico(materialidadData.errorTolerable.fundamentoTeorico)}
              className="mt-3 inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 text-[11px] font-extrabold transition-colors cursor-pointer"
            >
              <Lightbulb className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              ¿Por qué se aplica el 50% (ET)?
            </button>
          </div>

          <div className="p-4 rounded-xl border border-rose-200 bg-rose-50/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-1">
                <span className="text-[10px] font-extrabold uppercase text-rose-800">
                  {materialidadData.montoMinimoAjuste.sigla}
                </span>
                <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-800 font-mono text-[10px] font-bold">
                  {materialidadData.montoMinimoAjuste.formula}
                </span>
              </div>
              <p className="text-xl font-extrabold text-rose-950 mt-1 font-mono">
                ${materialidadData.montoMinimoAjuste.importe.toLocaleString('es-AR')} M
              </p>
              <p className="text-xs font-bold text-rose-900 mt-0.5">
                {materialidadData.montoMinimoAjuste.nombre}
              </p>
              <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                {materialidadData.montoMinimoAjuste.explicacion}
              </p>
            </div>
            <button
              onClick={() => setModalTeorico(materialidadData.montoMinimoAjuste.fundamentoTeorico)}
              className="mt-3 inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 text-[11px] font-extrabold transition-colors cursor-pointer"
            >
              <Lightbulb className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              ¿Por qué el 5% y el caso PT-A1 ($6.890M)?
            </button>
          </div>
        </div>

        {/* Ventana Flotante (Modal Teórico de la Lamparita 💡) */}
        {/* Ventana Flotante Ampliada (Modal Teórico de la Lamparita 💡) */}
        {modalTeorico && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-sm"
            onClick={() => setModalTeorico(null)}
          >
            <div
              className="bg-slate-900 border border-amber-400/60 text-white rounded-2xl max-w-4xl w-full p-6 sm:p-8 shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-700/80">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-amber-400/20 border border-amber-400/40 text-amber-300 shrink-0">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-amber-300 block mb-0.5">
                      Fundamento Doctrinario y Normativo — {modalTeorico.normativa}
                    </span>
                    <h4 className="text-lg sm:text-xl font-extrabold text-white leading-tight">
                      {modalTeorico.titulo}
                    </h4>
                  </div>
                </div>
                <button
                  onClick={() => setModalTeorico(null)}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0"
                  title="Cerrar ventana"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 text-xs sm:text-sm leading-relaxed">
                {modalTeorico.puntos.map((pt, idx) => (
                  <div key={idx} className="p-4 sm:p-5 rounded-xl bg-slate-800/90 border border-slate-700/80 space-y-2">
                    <strong className="text-lime-300 block text-sm sm:text-base font-bold">{pt.subtitulo}</strong>
                    <p className="text-slate-200 whitespace-pre-line leading-relaxed">{pt.texto}</p>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-800 flex justify-end">
                <button
                  onClick={() => setModalTeorico(null)}
                  className="px-6 py-2.5 rounded-xl bg-amber-400 text-slate-950 text-xs sm:text-sm font-extrabold hover:bg-amber-300 transition-colors shadow-sm cursor-pointer"
                >
                  Entendido — Cerrar ventana
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Explicación Didáctica de qué es la Materialidad y qué se pretende en el punto 1.4 (Editable) */}
        <div className="mt-5 p-4 rounded-xl bg-slate-900 text-white border border-teal-500/40 space-y-2.5 text-xs">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-start gap-2 text-lime-400 font-extrabold uppercase tracking-wider text-[11px] flex-1 min-w-0">
              <Calculator className="w-4 h-4 shrink-0 mt-0.5" />
              <div className="flex-1 min-w-0">
                <EditableRichBlock
                  value={customTexts['mat-banner-titulo']}
                  defaultValue={MAT_BANNER_DEFAULTS['mat-banner-titulo']}
                  onSave={(val) => handleSaveCustomText('mat-banner-titulo', val)}
                  onReset={() => handleResetCustomText('mat-banner-titulo')}
                  label="Título de Materialidad (1.4)"
                  isDark={true}
                  textClassName="text-lime-400 font-extrabold uppercase tracking-wider text-[11px]"
                  minHeightClass="min-h-[38px]"
                  showModifiedBadge={false}
                />
              </div>
            </div>
            {totalCustomCount > 0 && (
              <button
                type="button"
                onClick={handleResetAllMaterialidadTexts}
                className="no-print inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500/35 border border-amber-400/40 text-amber-200 text-[10px] font-bold cursor-pointer transition-colors"
                title="Restablecer todos los textos editados de este bloque"
              >
                <RotateCcw className="w-3 h-3" /> Restablecer textos ({totalCustomCount})
              </button>
            )}
          </div>

          <EditableRichBlock
            value={customTexts['mat-banner-intro']}
            defaultValue={MAT_BANNER_DEFAULTS['mat-banner-intro']}
            onSave={(val) => handleSaveCustomText('mat-banner-intro', val)}
            onReset={() => handleResetCustomText('mat-banner-intro')}
            label="Explicación general de Materialidad (1.4)"
            isDark={true}
            textClassName="text-slate-200 leading-relaxed text-xs"
            minHeightClass="min-h-[76px]"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
            <div className="p-3 rounded-lg bg-white/5 border border-white/10 space-y-1">
              <EditableRichBlock
                value={customTexts['mat-card-1-titulo']}
                defaultValue={MAT_BANNER_DEFAULTS['mat-card-1-titulo']}
                onSave={(val) => handleSaveCustomText('mat-card-1-titulo', val)}
                onReset={() => handleResetCustomText('mat-card-1-titulo')}
                label="Título Tarjeta 1 (PM)"
                isDark={true}
                textClassName="font-bold text-teal-300 text-xs"
                minHeightClass="min-h-[36px]"
                showModifiedBadge={false}
              />
              <EditableRichBlock
                value={customTexts['mat-card-1-desc']}
                defaultValue={MAT_BANNER_DEFAULTS['mat-card-1-desc']}
                onSave={(val) => handleSaveCustomText('mat-card-1-desc', val)}
                onReset={() => handleResetCustomText('mat-card-1-desc')}
                label="Descripción Materialidad Global (PM)"
                isDark={true}
                textClassName="text-slate-300 text-xs leading-relaxed"
                minHeightClass="min-h-[72px]"
              />
            </div>
            <div className="p-3 rounded-lg bg-white/5 border border-white/10 space-y-1">
              <EditableRichBlock
                value={customTexts['mat-card-2-titulo']}
                defaultValue={MAT_BANNER_DEFAULTS['mat-card-2-titulo']}
                onSave={(val) => handleSaveCustomText('mat-card-2-titulo', val)}
                onReset={() => handleResetCustomText('mat-card-2-titulo')}
                label="Título Tarjeta 2 (ET)"
                isDark={true}
                textClassName="font-bold text-amber-300 text-xs"
                minHeightClass="min-h-[36px]"
                showModifiedBadge={false}
              />
              <EditableRichBlock
                value={customTexts['mat-card-2-desc']}
                defaultValue={MAT_BANNER_DEFAULTS['mat-card-2-desc']}
                onSave={(val) => handleSaveCustomText('mat-card-2-desc', val)}
                onReset={() => handleResetCustomText('mat-card-2-desc')}
                label="Descripción Error Tolerable (ET)"
                isDark={true}
                textClassName="text-slate-300 text-xs leading-relaxed"
                minHeightClass="min-h-[72px]"
              />
            </div>
            <div className="p-3 rounded-lg bg-white/5 border border-white/10 space-y-1">
              <EditableRichBlock
                value={customTexts['mat-card-3-titulo']}
                defaultValue={MAT_BANNER_DEFAULTS['mat-card-3-titulo']}
                onSave={(val) => handleSaveCustomText('mat-card-3-titulo', val)}
                onReset={() => handleResetCustomText('mat-card-3-titulo')}
                label="Título Tarjeta 3 (PAE)"
                isDark={true}
                textClassName="font-bold text-rose-300 text-xs"
                minHeightClass="min-h-[36px]"
                showModifiedBadge={false}
              />
              <EditableRichBlock
                value={customTexts['mat-card-3-desc']}
                defaultValue={MAT_BANNER_DEFAULTS['mat-card-3-desc']}
                onSave={(val) => handleSaveCustomText('mat-card-3-desc', val)}
                onReset={() => handleResetCustomText('mat-card-3-desc')}
                label="Descripción Umbral PAE"
                isDark={true}
                textClassName="text-slate-300 text-xs leading-relaxed"
                minHeightClass="min-h-[72px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Guía de las 5 Afirmaciones de Auditoría (Doctrina Carlos Slosse / RT 37) */}
      <div id="sec-1c-afirmaciones" className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs scroll-mt-20">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100 mb-3">
          <h3 className="text-sm font-extrabold text-slate-900 uppercase">
            Marco Conceptual de Afirmaciones (Objetivos de Auditoría — Carlos Slosse)
          </h3>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setModoVista('por-rubro')}
              className={`px-3 py-1 rounded-lg text-xs font-bold cursor-pointer ${
                modoVista === 'por-rubro'
                  ? 'bg-teal-700 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Ver por Rubro (Programas A-F)
            </button>
            <button
              onClick={() => setModoVista('transversal-afirmacion')}
              className={`px-3 py-1 rounded-lg text-xs font-bold cursor-pointer ${
                modoVista === 'transversal-afirmacion'
                  ? 'bg-teal-700 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Comparar Afirmación en los 6 Rubros
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {marcoTeoricoSlosse.afirmacionesDefinicion.map((af) => {
            const isSelected = filtroAfirmacion === af.nombre;
            const isHighlighted = highlightedAfirmacion === af.nombre;
            return (
              <div
                key={af.codigo}
                onClick={() =>
                  setFiltroAfirmacion(filtroAfirmacion === af.nombre ? 'TODAS' : af.nombre)
                }
                className={`p-3 rounded-xl border transition-all cursor-pointer ${
                  isHighlighted
                    ? 'border-amber-500 bg-amber-50/90 ring-4 ring-amber-300 shadow-md scale-[1.02]'
                    : isSelected
                    ? 'border-teal-600 bg-teal-50/70 ring-2 ring-teal-500'
                    : 'border-slate-200 bg-slate-50/60 hover:bg-white hover:border-teal-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`px-2 py-0.5 rounded text-xs font-extrabold border ${
                      afirmacionColors[af.nombre] || 'bg-slate-100'
                    }`}
                  >
                    {af.nombre}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400">
                    {isSelected ? 'Filtro Activo ✓' : 'Clic para filtrar'}
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 mt-1.5 leading-relaxed">{af.descripcion}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* MODO 1: EXPLORACIÓN POR RUBRO SIGNIFICATIVO Y SU PROGRAMA DE TRABAJO */}
      {modoVista === 'por-rubro' ? (
        <div id="sec-1c-rubros" className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5 scroll-mt-20">
          {/* Selector de los Rubros Significativos (Destacando los 3 de Enfoque Principal) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
            {rubrosSignificativos.map((rubro) => {
              const active = rubro.id === selectedRubroId;
              return (
                <button
                  key={rubro.id}
                  onClick={() => setSelectedRubroId(rubro.id)}
                  className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                    active
                      ? 'bg-slate-900 text-white border-slate-900 shadow-sm ring-2 ring-teal-500'
                      : rubro.esPrioritario
                      ? 'bg-amber-50/50 text-slate-800 border-amber-300 hover:bg-white hover:border-amber-400'
                      : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-white hover:border-teal-400'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-1">
                      <span
                        className={`text-[10px] font-extrabold px-2 py-0.5 rounded ${
                          active ? 'bg-teal-500 text-white' : 'bg-teal-100 text-teal-800'
                        }`}
                      >
                        {rubro.codigoPrograma}
                      </span>
                      {rubro.esPrioritario && (
                        <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-amber-400 text-slate-950">
                          ⭐ Prioritario
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-extrabold mt-2 line-clamp-2">{rubro.nombre}</p>
                  </div>
                  <div className="mt-2 pt-1 border-t border-slate-200/50 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-teal-600">
                      ${rubro.saldoContable.toLocaleString('es-AR')} M
                    </span>
                    <span className="text-[10px] font-mono opacity-70">
                      RC: {rubro.riesgoControl}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Ficha de Importancia Cuantitativa y Cualitativa del Rubro Activo */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-teal-700 text-white text-xs font-extrabold">
                  {activeRubro.codigoPrograma} — Rubro {activeRubro.numero}
                </span>
                <h3 className="text-lg font-extrabold text-slate-900">{activeRubro.nombre}</h3>
                {activeRubro.esPrioritario && (
                  <span className="px-2 py-0.5 rounded bg-amber-400 text-slate-950 font-extrabold text-xs flex items-center gap-1 shadow-2xs">
                    ⭐ Rubro de Enfoque Principal (Cátedra)
                  </span>
                )}
                {activeRubro.vinculadoCon && (
                  <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold text-xs">
                    🔗 {activeRubro.vinculadoCon}
                  </span>
                )}
                <span className="px-2 py-0.5 rounded bg-red-100 text-red-700 text-xs font-extrabold">
                  Riesgo de Control: {activeRubro.riesgoControl}
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                <strong>Importancia Cuantitativa y Cualitativa:</strong> {activeRubro.importancia}
              </p>
            </div>
            <div className="bg-white p-3.5 rounded-xl border border-slate-200 shrink-0 lg:w-72">
              <p className="text-[10px] font-bold uppercase text-slate-400">Composición del Saldo</p>
              <p className="text-base font-extrabold text-slate-900 font-mono mt-0.5">
                ${activeRubro.saldoContable.toLocaleString('es-AR')} Millones
              </p>
              <p className="text-[11px] text-slate-600 mt-1">{activeRubro.composicionSaldo}</p>
            </div>
          </div>

          {/* Banner de filtrado activo cuando viene de Cédula Analítica */}
          {filtroAfirmacion !== 'TODAS' && (
            <div className="p-3 rounded-xl bg-teal-50 border border-teal-200 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-teal-900">
                  🎯 Afirmación Seleccionada:
                </span>
                <span className="px-2.5 py-0.5 rounded font-extrabold bg-teal-700 text-white text-xs shadow-2xs">
                  {filtroAfirmacion}
                </span>
                <span className="text-slate-600 font-medium">
                  en {activeRubro.nombre} ({activeRubro.codigoPrograma})
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setFiltroAfirmacion('TODAS')}
                  className="px-2.5 py-1 rounded-lg bg-white border border-slate-300 text-slate-700 font-bold hover:bg-slate-50 transition-colors cursor-pointer text-xs"
                >
                  Ver Todas las Afirmaciones
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate && onNavigate('etapa2-ejecucion')}
                  className="px-2.5 py-1 rounded-lg bg-teal-800 text-lime-300 font-bold hover:bg-teal-700 hover:text-white transition-colors cursor-pointer text-xs inline-flex items-center gap-1 shadow-2xs"
                >
                  Volver a Ejecución (Papeles de Trabajo) ➔
                </button>
              </div>
            </div>
          )}

          {/* Tabla de Vinculación Directa: Afirmación | Objetivo | Riesgo y Control Clave | Instrumento de Validación */}
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-100 text-slate-700 font-bold uppercase border-b border-slate-200">
                  <th className="py-3 px-4 w-32">Afirmación</th>
                  <th className="py-3 px-4 min-w-[210px]">Objetivo de la Afirmación</th>
                  <th className="py-3 px-4 min-w-[250px]">Riesgo Detectado y Control Clave</th>
                  <th className="py-3 px-4 min-w-[300px]">
                    Instrumento de Validación (Naturaleza, Alcance y Oportunidad)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {activeRubro.afirmaciones
                  .filter(
                    (af) => filtroAfirmacion === 'TODAS' || af.afirmacion === filtroAfirmacion
                  )
                  .map((af, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80">
                      <td className="py-4 px-4 align-top">
                        <span
                          className={`inline-block px-2.5 py-1 rounded-md font-extrabold text-xs border ${
                            afirmacionColors[af.afirmacion] || 'bg-slate-100'
                          }`}
                        >
                          {af.afirmacion}
                        </span>
                      </td>
                      <td className="py-4 px-4 align-top font-medium text-slate-800 leading-relaxed whitespace-pre-line">
                        {af.objetivo}
                      </td>
                      <td className="py-4 px-4 align-top space-y-2 leading-relaxed">
                        <div className="p-2.5 rounded-lg bg-red-50/70 border border-red-100 text-slate-700">
                          <strong className="text-red-700">Riesgo:</strong> {af.riesgo}
                        </div>
                        <div className="p-2.5 rounded-lg bg-teal-50/70 border border-teal-100 text-slate-700">
                          <strong className="text-teal-800">Control Clave:</strong> {af.controlClave}
                        </div>
                      </td>
                      <td className="py-4 px-4 align-top space-y-1.5 text-slate-700 leading-relaxed">
                        <p>
                          <strong className="text-slate-900">• Naturaleza:</strong> {af.naturalezaProc}
                        </p>
                        <p>
                          <strong className="text-slate-900">• Instrumento / Procedimiento:</strong>{' '}
                          {af.instrumento}
                        </p>
                        <div className="flex flex-wrap gap-2 pt-1">
                          <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold text-[11px]">
                            <strong>Oportunidad:</strong> {af.oportunidad}
                          </span>
                          <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-800 font-semibold text-[11px]">
                            <strong>Alcance:</strong> {af.alcance}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          {/* Programa de Trabajo del Rubro Activo */}
          <div className="p-5 rounded-xl bg-teal-950 text-white">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-teal-800 mb-4">
              <div>
                <span className="text-xs font-extrabold uppercase text-lime-400">
                  Programa de Trabajo Formalizado
                </span>
                <h4 className="text-base font-extrabold">
                  {activeRubro.codigoPrograma}: {activeRubro.nombre}
                </h4>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => setExpandAllProcedimientos((prev) => !prev)}
                  className="px-3 py-1.5 rounded-lg bg-teal-800 hover:bg-teal-700 text-lime-300 text-xs font-extrabold transition-colors cursor-pointer border border-teal-600/60 shadow-xs"
                >
                  {expandAllProcedimientos ? '▲ Ocultar Explicaciones Detalladas' : '▼ Expandir Explicación de Cada Procedimiento'}
                </button>
                <button
                  onClick={() =>
                    onNavigate(
                      'etapa2-ejecucion',
                      activeRubro.codigoPrograma.replace('PROGRAMA ', 'pt-').toLowerCase()
                    )
                  }
                  className="px-3 py-1.5 rounded-lg bg-lime-500 text-slate-950 text-xs font-extrabold hover:bg-lime-400 transition-colors cursor-pointer shadow-xs"
                >
                  Ejecutar / Ver Papel de Trabajo {activeRubro.codigoPrograma.replace('PROGRAMA ', 'PT-')} →
                </button>
              </div>
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
                        : `Saldo contable auditado en el rubro ${activeRubro.nombre}.`;
                      const isExpanded = expandAllProcedimientos || !!expandedProcedimientos[`${activeRubro.id}-${i}-${j}`];

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
                                  [`${activeRubro.id}-${i}-${j}`]: !prev[`${activeRubro.id}-${i}-${j}`],
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
        </div>
      ) : (
        /* MODO 2: VISTA TRANSVERSAL POR AFIRMACIÓN EN LOS 6 RUBROS */
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
            <h3 className="text-base font-extrabold text-slate-900">
              Matriz Transversal de Afirmaciones en los 6 Rubros Significativos ({filtroAfirmacion})
            </h3>
            {filtroAfirmacion !== 'TODAS' && (
              <button
                onClick={() => setFiltroAfirmacion('TODAS')}
                className="text-xs font-bold text-teal-700 hover:underline cursor-pointer"
              >
                Mostrar todas las afirmaciones
              </button>
            )}
          </div>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-100 text-slate-700 font-bold uppercase border-b border-slate-200">
                  <th className="py-3 px-3">Rubro Significativo</th>
                  <th className="py-3 px-3">Afirmación</th>
                  <th className="py-3 px-3">Riesgo y Control Clave</th>
                  <th className="py-3 px-3">Instrumento de Validación</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {rubrosSignificativos.flatMap((r) =>
                  r.afirmaciones
                    .filter(
                      (a) => filtroAfirmacion === 'TODAS' || a.afirmacion === filtroAfirmacion
                    )
                    .map((a, i) => (
                      <tr key={`${r.id}-${i}`} className="hover:bg-slate-50">
                        <td className="py-3 px-3 font-bold text-slate-900">{r.nombre}</td>
                        <td className="py-3 px-3">
                          <span
                            className={`px-2 py-0.5 rounded font-bold text-[11px] border ${
                              afirmacionColors[a.afirmacion]
                            }`}
                          >
                            {a.afirmacion}
                          </span>
                        </td>
                        <td className="py-3 px-3 text-slate-600">
                          <strong>Riesgo:</strong> {a.riesgo}
                        </td>
                        <td className="py-3 px-3 text-slate-700">{a.instrumento}</td>
                      </tr>
                    ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* CRONOGRAMA DE LOS PROCEDIMIENTOS (3 Meses / 12 Semanas: Diciembre 2025 a Febrero 2026) */}
      <div id="sec-1c-cronograma" className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs scroll-mt-20">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-teal-700" />
            <div>
              <h3 className="text-base font-extrabold text-slate-900">
                3. Cronograma de los Procedimientos de Auditoría (3 Meses / 12 Semanas)
              </h3>
              <p className="text-xs text-slate-500">
                Planificación temporal concentrada en 12 semanas (Diciembre 2025 a Febrero 2026) conforme al plazo legal de la CNV (70 días post-cierre)
              </p>
            </div>
          </div>
          <button
            onClick={() => setModalTeorico(presupuestoHonorarios.fundamentosTeoricos.cronograma3Meses)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 text-xs font-extrabold transition-colors cursor-pointer"
          >
            <Lightbulb className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            ¿Por qué el cronograma dura 3 meses y no 5 meses? (Normas CNV)
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cronogramaAuditoria.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-slate-200 p-4 bg-slate-50/60 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="px-2.5 py-1 rounded-md bg-teal-700 text-white text-xs font-extrabold">
                    [{item.periodo}]
                  </span>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {item.estado}
                  </span>
                </div>
                <h4 className="text-sm font-extrabold text-slate-900 mb-1">{item.fase}</h4>
                <p className="text-[11px] font-bold text-teal-800 mb-2">{item.semanas}</p>
                <ul className="space-y-2 text-xs text-slate-600 leading-relaxed">
                  {item.tareas.map((t, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 pt-2.5 border-t border-slate-200 text-[11px] font-semibold text-slate-400">
                Vinculado con: {item.etapaVinculada}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PRESUPUESTO DE TIEMPO Y HONORARIOS PROFESIONALES (Carlos Slosse / Aranceles CPCECABA Noviembre 2026) */}
      <div id="sec-1c-presupuesto-honorarios" className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs scroll-mt-20">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
          <div className="flex items-center gap-2.5">
            <Calculator className="w-5 h-5 text-teal-700 shrink-0" />
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-700 block">
                Etapa 1.5.C — Presupuesto de Honorarios y Recursos (Slosse / <NormaTooltip code="NIA 300" />)
              </span>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                4. Presupuesto de Tiempo y Costos de Auditoría (Honorarios Profesionales — Noviembre 2026)
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Valores vigentes a <strong>Noviembre de 2026</strong> • Módulo Oficial CPCECABA: <strong>$15.980</strong> • TC Cierre BNA: <strong>$1.455 / USD</strong>
              </p>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-extrabold">
            12 Semanas (3 Meses) • 1.220 Horas
          </span>
        </div>

        {/* Botones de Consulta Teórica (Las 3 Lamparitas Didácticas solicitadas) */}
        <div className="flex flex-wrap items-center gap-2 mb-5">
          <button
            onClick={() => setModalTeorico(presupuestoHonorarios.fundamentosTeoricos.modulosCPCECABA)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 text-xs font-bold transition-colors cursor-pointer"
          >
            <Lightbulb className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            1. ¿Qué son los Módulos del CPCECABA y cómo se calcula el valor hora?
          </button>
          <button
            onClick={() => setModalTeorico(presupuestoHonorarios.fundamentosTeoricos.presupuestoTiempo)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 text-xs font-bold transition-colors cursor-pointer"
          >
            <Lightbulb className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            2. ¿Cómo suman 1.220 hs (820 hs PT + 400 hs Planif./Cierre)?
          </button>
          <button
            onClick={() => setModalTeorico(presupuestoHonorarios.fundamentosTeoricos.rentabilidadYSocio)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 text-xs font-bold transition-colors cursor-pointer"
          >
            <Lightbulb className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            3. ¿El Socio gana menos? y ¿Por qué $80M no es excesivo?
          </button>
        </div>

        {/* Tarjetas KPI de Síntesis */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
          <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50">
            <span className="text-[11px] font-bold text-slate-500 uppercase block">Horas Totales Equipo</span>
            <span className="text-xl font-extrabold text-slate-900 font-mono mt-0.5 block">{presupuestoHonorarios.totalHoras} hs</span>
            <span className="text-[10px] text-slate-500">12 semanas (5 profesionales)</span>
          </div>
          <div className="p-3.5 rounded-xl border border-teal-200 bg-teal-50/50">
            <span className="text-[11px] font-bold text-teal-700 uppercase block">Subtotal Horas Labor</span>
            <span className="text-xl font-extrabold text-teal-950 font-mono mt-0.5 block">${(presupuestoHonorarios.subtotalHorasPesos / 1000000).toFixed(2)} M</span>
            <span className="text-[10px] text-teal-700">${presupuestoHonorarios.subtotalHorasPesos.toLocaleString('es-AR')}</span>
          </div>
          <div className="p-3.5 rounded-xl border border-emerald-200 bg-emerald-50/60">
            <span className="text-[11px] font-bold text-emerald-800 uppercase block">Honorario Total c/Gastos</span>
            <span className="text-xl font-extrabold text-emerald-950 font-mono mt-0.5 block">${(presupuestoHonorarios.honorarioTotalPesos / 1000000).toFixed(2)} M</span>
            <span className="text-[10px] text-emerald-700">Incluye 10% gastos directos</span>
          </div>
          <div className="p-3.5 rounded-xl border border-blue-200 bg-blue-50/50">
            <span className="text-[11px] font-bold text-blue-700 uppercase block">Equivalente USD Oficial</span>
            <span className="text-xl font-extrabold text-blue-950 font-mono mt-0.5 block">USD {presupuestoHonorarios.honorarioTotalUSD.toLocaleString('es-AR')}</span>
            <span className="text-[10px] text-blue-700">{presupuestoHonorarios.relacionSobreVentas}</span>
          </div>
        </div>

        {/* Tabla Detallada por Categoría de Auditor */}
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left border-collapse text-xs">
            <thead className="bg-slate-100 text-slate-700 font-bold uppercase border-b border-slate-200">
              <tr>
                <th className="py-3 px-3">Categoría y Rol</th>
                <th className="py-3 px-2 text-center">Cant.</th>
                <th className="py-3 px-2 text-center">Módulos/h</th>
                <th className="py-3 px-3 text-right">
                  Valor Hora ($)
                  <span className="text-[9px] text-slate-500 font-normal block normal-case">(módulos × $15.980)</span>
                </th>
                <th className="py-3 px-3 text-center">Dedicación Semanal</th>
                <th className="py-3 px-3 text-center">Horas Totales</th>
                <th className="py-3 px-3 text-right">Subtotal ($)</th>
                <th className="py-3 px-2 text-center">% Incid.</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 font-medium">
              {presupuestoHonorarios.categorias.map((cat, idx) => (
                <tr key={idx} className="hover:bg-slate-50">
                  <td className="py-3 px-3">
                    <strong className="text-slate-900 block">{cat.categoria}</strong>
                    <span className="text-[11px] text-slate-500 leading-tight block mt-0.5">{cat.rol}</span>
                  </td>
                  <td className="py-3 px-2 text-center font-bold text-slate-700">{cat.cantidadMiembros}</td>
                  <td className="py-3 px-2 text-center font-mono font-bold text-teal-700">{cat.modulosHora.toFixed(1)} mód.</td>
                  <td className="py-3 px-3 text-right">
                    <span className="font-mono font-bold text-slate-900 block">${cat.valorHora.toLocaleString('es-AR')}</span>
                    <span className="text-[10px] font-mono text-slate-400 block">({cat.modulosHora} × $15.980)</span>
                  </td>
                  <td className="py-3 px-3 text-center text-slate-600">{cat.horasSemanalesPorMiembro}</td>
                  <td className="py-3 px-3 text-center font-mono font-bold text-slate-900">{cat.horasTotales} hs</td>
                  <td className="py-3 px-3 text-right font-mono font-bold text-slate-950">${cat.subtotalPesos.toLocaleString('es-AR')}</td>
                  <td className="py-3 px-2 text-center font-mono text-slate-600">{cat.porcentajeDelTotal.toFixed(1)}%</td>
                </tr>
              ))}
              <tr className="bg-slate-50/80 font-bold border-t border-slate-200">
                <td colSpan={5} className="py-2.5 px-3 text-right text-slate-700 uppercase text-[11px]">Subtotal Horas Profesionales (1.220 hs):</td>
                <td className="py-2.5 px-3 text-center font-mono text-slate-900">{presupuestoHonorarios.totalHoras} hs</td>
                <td className="py-2.5 px-3 text-right font-mono text-teal-900 text-sm">${presupuestoHonorarios.subtotalHorasPesos.toLocaleString('es-AR')}</td>
                <td className="py-2.5 px-2 text-center font-mono text-slate-600">90,9%</td>
              </tr>
              <tr className="bg-slate-50/80 font-medium">
                <td colSpan={6} className="py-2 px-3 text-slate-600 text-[11px]">
                  <strong>+ Gastos Directos de Auditoría (10% out-of-pocket):</strong> {presupuestoHonorarios.gastosDirectosConcepto}
                </td>
                <td className="py-2 px-3 text-right font-mono font-bold text-slate-800">${presupuestoHonorarios.gastosDirectosPesos.toLocaleString('es-AR')}</td>
                <td className="py-2 px-2 text-center font-mono text-slate-600">9,1%</td>
              </tr>
              <tr className="bg-teal-900 text-white font-extrabold text-xs">
                <td colSpan={6} className="py-3 px-3 uppercase tracking-wider text-right text-teal-100">
                  HONORARIO TOTAL PROPUESTO (CARLOS A. SLOSSE / CPCECABA NOV. 2026):
                </td>
                <td className="py-3 px-3 text-right font-mono text-base text-lime-300">
                  ${presupuestoHonorarios.honorarioTotalPesos.toLocaleString('es-AR')}
                </td>
                <td className="py-3 px-2 text-center font-mono text-teal-200">100%</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Conciliación clara para explicar en clase: Horas cargadas en los 3 PT (820 hs) -> Presupuesto Total (1.220 hs) y Honorarios ($80,68M) */}
        <div className="mt-4 p-4 sm:p-5 rounded-xl bg-teal-50/80 border border-teal-300 text-xs leading-relaxed space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-teal-900 font-extrabold uppercase tracking-wider text-[11px] flex items-center gap-1.5">
              🎓 Para explicar claro en clase: ¿Cómo se conectan las 820 hs de los 3 PT con las 1.220 hs y los $80.683.020?
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-teal-700 text-white font-mono text-[10px] font-bold">
              420 + 280 + 120 = 820 hs PT (+ 400 hs) = 1.220 hs
            </span>
          </div>

          <p className="text-slate-800 text-xs sm:text-[13px] leading-relaxed text-justify">
            Para que en clase se entienda fácil de dónde salen los honorarios: en nuestras <strong>3 cédulas sumarias de ejecución</strong> cargamos exactamente <strong>820 horas de trabajo de campo</strong> repartidas según la complejidad y el riesgo de cada rubro —<strong>420 hs en Bienes de Uso (<code>PT-A</code>)</strong> por ser el 40,84% del Activo y exigir recorridas físicas en Data Centers y radiobases 5G, títulos en RPI/DNRPA, altas CAPEX y detección de bajas (<code>AJ-01</code>); <strong>280 hs en Activos Intangibles (<code>PT-E</code>)</strong> por licencias de espectro ENACOM, marcas INPI y la revisión técnica de 18 proyectos de software en SAP PS/Jira bajo NIC 38; y <strong>120 hs en Créditos por Ventas (<code>PT-B</code>)</strong> porque el uso de software TAACs permitió recalcular al 100% la previsión NIIF 9 ahorrando horas manuales. A esas <strong>820 hs de campo (67,2%)</strong> les sumamos <strong>400 hs adicionales (32,8%)</strong> que exige toda auditoría completa bajo Carlos Slosse y las NIAs —<strong>140 hs</strong> de Planificación Estratégica y 5 CCIs, <strong>90 hs</strong> de revisiones analíticas en los demás rubros (deuda, ventas, llaves y RECPAM), <strong>80 hs</strong> de supervisión/control de calidad y <strong>90 hs</strong> de Etapa 3 para hechos posteriores, Carta de Control Interno, Memorando, Carta de Representación e Informe—, completando <strong>1.220 horas totales</strong> en 12 semanas (para cumplir el tope legal de 70 días de la CNV). Esas 1.220 hs no las cobra todas el Socio al valor máximo: se distribuyen en una <strong>pirámide de 5 profesionales</strong> según los <strong>Módulos oficiales del CPCECABA ($15.980/módulo a Nov. 2026)</strong>, siendo completamente normal y legal facturar el encargo completo (~67% campo y ~33% planificación, supervisión y cierre).
          </p>

          {/* Desglose aritmético paso a paso: qué se multiplica con qué */}
          <div className="p-3.5 rounded-xl bg-white border border-teal-200 space-y-2 text-[11px] sm:text-xs text-slate-800">
            <strong className="text-teal-900 uppercase tracking-wide block text-[11px]">
              🧮 Cálculo paso a paso (¿qué se multiplica con qué para llegar a $80.683.020?)
            </strong>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 space-y-1 font-mono text-[11px]">
                <span className="font-sans font-bold text-slate-700 block">
                  1) De las horas de los 3 PT al total del equipo (12 semanas):
                </span>
                <div>• Campo 3 PT: 420 (PT-A) + 280 (PT-E) + 120 (PT-B) = <strong>820 hs</strong></div>
                <div>• Planif. + Analít. + Calidad + Cierre: <strong>+ 400 hs</strong> = <strong>1.220 hs</strong></div>
                <div className="pt-1 border-t border-slate-200 text-slate-700">
                  • 2 Juniors (~29 hs/sem × 2 × 12 sem): <strong>700 hs</strong>
                </div>
                <div>• 2 Seniors (~17 hs/sem × 2 × 12 sem): <strong>400 hs</strong></div>
                <div>• 1 Socio (10 hs/sem × 1 × 12 sem): <strong>120 hs</strong></div>
                <div className="font-extrabold text-teal-900">→ 700 + 400 + 120 = 1.220 hs exactas</div>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 space-y-1 font-mono text-[11px]">
                <span className="font-sans font-bold text-slate-700 block">
                  2) Valor Hora (Módulo $15.980) × Horas + 10% Gastos Directos:
                </span>
                <div>• Junior: 2,5 mód × $15.980 = $39.950/h → × 700 hs = <strong>$27.965.000</strong></div>
                <div>• Senior: 5,0 mód × $15.980 = $79.900/h → × 400 hs = <strong>$31.960.000</strong></div>
                <div>• Socio: 7,0 mód × $15.980 = $111.860/h → × 120 hs = <strong>$13.423.200</strong></div>
                <div className="pt-1 border-t border-slate-200">
                  • Subtotal Labor: $27.965.000 + $31.960.000 + $13.423.200 = <strong>$73.348.200</strong>
                </div>
                <div>• + 10% Gastos Directos (TAACs / viáticos / circ.): $73.348.200 × 10% = <strong>$7.334.820</strong></div>
                <div className="font-extrabold text-emerald-900">
                  → TOTAL = $80.683.020 (÷ $1.455 BNA = USD 55.452)
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-2 pt-1 text-[11px]">
            <div className="p-2 rounded-lg bg-white border border-teal-200 text-center">
              <span className="font-bold text-slate-600 block">PT-A (Bienes de Uso)</span>
              <strong className="font-mono text-teal-900 text-xs">420 hs</strong>
            </div>
            <div className="p-2 rounded-lg bg-white border border-teal-200 text-center">
              <span className="font-bold text-slate-600 block">PT-E (Intangibles)</span>
              <strong className="font-mono text-teal-900 text-xs">280 hs</strong>
            </div>
            <div className="p-2 rounded-lg bg-white border border-teal-200 text-center">
              <span className="font-bold text-slate-600 block">PT-B (Créditos)</span>
              <strong className="font-mono text-teal-900 text-xs">120 hs</strong>
            </div>
            <div className="p-2 rounded-lg bg-emerald-100/70 border border-emerald-300 text-center">
              <span className="font-bold text-emerald-900 block">Subtotal 3 PT Campo</span>
              <strong className="font-mono text-emerald-950 text-xs">820 hs (67,2%)</strong>
            </div>
            <div className="p-2 rounded-lg bg-white border border-slate-200 text-center">
              <span className="font-bold text-slate-600 block">Planif. + Analít. + Cierre</span>
              <strong className="font-mono text-slate-900 text-xs">400 hs (32,8%)</strong>
            </div>
            <div className="p-2 rounded-lg bg-teal-900 text-white text-center">
              <span className="font-bold text-lime-300 block">Total Encargo</span>
              <strong className="font-mono text-white text-xs">1.220 hs • $80,68M</strong>
            </div>
          </div>
        </div>

        {/* Nota Técnica de Escala y Coherencia para la Cátedra */}
        <div className="mt-4 p-4 rounded-xl bg-slate-900 text-white border border-teal-500/30 text-xs leading-relaxed space-y-3">
          <div className="flex items-center gap-2 text-lime-400 font-extrabold text-[11px] uppercase tracking-wide">
            <CheckCircle2 className="w-4 h-4 text-lime-400" />
            Coherencia Económica y Arancelaria frente a la Escala de Telecom Argentina S.A.
          </div>
          <p className="text-slate-200">
            Telecom Argentina S.A. registra un <strong>Activo Total de $16,6 billones</strong> ($16.622.552M) y <strong>Ventas por $8,3 billones</strong> ($8.328.814M). El honorario integral de <strong>$80.683.020 (USD ~55.450)</strong> representa apenas el <strong>0,00096% de la facturación</strong>. En la práctica real, firmas internacionales como PwC perciben entre USD 1,5 y 2,5 millones por una cotizante en NYSE; para este Trabajo Práctico de cátedra, presupuestar $80M con base en las tarifas oficiales del CPCECABA demuestra rigurosidad técnica, realismo profesional y una justificación matemática inexpugnable.
          </p>

          {/* Guión Guiado de Exposición Oral para Defensa ante el Tribunal */}
          <div className="pt-3 border-t border-slate-700/80 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-lime-300 font-extrabold text-[11px] uppercase tracking-wider flex items-center gap-1.5">
                🗣️ Guión de Exposición Oral: ¿Cómo explicar y defender este cálculo paso a paso?
              </span>
              <span className="text-[10px] text-slate-300 bg-slate-800 px-2 py-0.5 rounded border border-slate-700 font-medium">
                Lectura recomendada para el coloquio
              </span>
            </div>

            <div className="space-y-2 text-slate-300 text-[11px]">
              <p>
                <strong className="text-white">1. Conexión directa con los 3 PT (820 hs) + Planificación y Cierre (400 hs):</strong>{' '}
                <em>«En nuestras 3 cédulas sustantivas de campo cargamos 820 horas reales: 420 hs en Bienes de Uso (PT-A), 280 hs en Activos Intangibles (PT-E) y 120 hs en Créditos por Ventas (PT-B). A eso sumamos 400 hs para Etapa 1 (Planificación y 5 CCIs), procedimientos analíticos del resto del balance, supervisión y Etapa 3 de Cierre e Informe, completando las 1.220 horas totales del encargo.»</em>
              </p>
              <p>
                <strong className="text-white">2. El porqué de las 12 semanas (3 meses):</strong>{' '}
                <em>«Planificamos un cronograma de 12 semanas corridas (Diciembre a Febrero) porque Telecom cotiza en la CNV y en la Bolsa de Nueva York (SEC), lo que le impone un plazo legal perentorio de 70 días corridos post-cierre para presentar sus estados contables auditados. Extender el encargo a 5 meses significaría caer en incumplimiento normativo con suspensión de cotización.»</em>
              </p>
              <p>
                <strong className="text-white">3. La estructura del equipo (5 profesionales):</strong>{' '}
                <em>«Repartimos las 1.220 horas en un equipo piramidal de 5 miembros: 1 Socio a cargo de la dirección estratégica y firma del dictamen (120 hs, 10 hs/sem), 2 Seniors —Grebe y Pisonero— a cargo del trabajo de campo, programas complejos y supervisión (400 hs en total, 17 hs/sem cada uno), y 2 Juniors dedicados a relevamientos físicos y cotejos operativos (700 hs en total, 29 hs/sem cada uno).»</em>
              </p>
              <p>
                <strong className="text-white">4. La aplicación del arancel oficial del CPCECABA:</strong>{' '}
                <em>«No inventamos tarifas arbitrarias: adoptamos la tabla arancelaria oficial del CPCECABA a Noviembre de 2026 (1 Módulo = $15.980). Cada rol cobra según su responsabilidad: 2,5 módulos el Junior ($39.950/h), 5,0 módulos el Senior ($79.900/h) y 7,0 módulos el Socio ($111.860/h), arrojando $73.348.200 de labor profesional.»</em>
              </p>
              <p>
                <strong className="text-white">5. Los gastos directos (10%) y conclusión de escala:</strong>{' '}
                <em>«Sumamos un 10% de gastos directos ($7.334.820) por licencias TAACs, viáticos a los 16 Data Centers y radiobases 5G del interior, y circularizaciones. El honorario total de $80.683.020 (~USD 55.452) equivale apenas al 0,00096% de las ventas de Telecom ($8,3 billones), demostrando máxima prudencia y respaldo técnico.»</em>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MEMORANDO DE PLANIFICACIÓN DE AUDITORÍA (Documento Formal de Cierre de la Etapa 1 según Carlos Slosse) */}
      <div id="sec-1c-memorando-planificacion" className="bg-white rounded-2xl border border-teal-200 p-6 shadow-xs scroll-mt-20">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-4">
          <div>
            <span className="px-2.5 py-1 rounded-md text-xs font-extrabold bg-teal-700 text-white">
              DOCUMENTO DE CIERRE DE LA ETAPA 1 — MEMORANDO DE PLANIFICACIÓN (CARLOS SLOSSE)
            </span>
            <h3 className="text-lg font-extrabold text-slate-900 mt-2">
              5. Memorando de Planificación Estratégica y Detallada (Aprobado el 28/10/2025)
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Nota Metodológica (Slosse): Este <strong>Memorando de Planificación</strong> cierra la Etapa 1 antes de iniciar las pruebas de campo (no confundir con el <em>Memorando de Conclusión y Revisión Final</em> de la Etapa 3 que resume los resultados obtenidos tras la ejecución).
            </p>
          </div>
          <span className="px-3 py-1 rounded-full bg-teal-50 text-teal-800 border border-teal-200 text-xs font-bold">
            Ref. Legajo Planificación: LP-01
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
            <h4 className="font-extrabold text-teal-900 uppercase">
              I. Objetivo y Marco Normativo del Encargo
            </h4>
            <p className="text-slate-700 leading-relaxed">
              {renderTextWithNormas(
                'Emitir una opinión independiente sobre los Estados Contables Consolidados de '
              )}
              <strong>Telecom Argentina S.A.</strong> al 31/12/2025 conforme a la{' '}
              <NormaTooltip code="RT 37" /> (modif. <NormaTooltip code="RT 53" />) y{' '}
              <NormaTooltip code="RT 32" /> de la FACPCE, verificando la aplicación de las Normas Internacionales de Información Financiera (NIIF / NIC del IASB - Normas CNV) en moneda homogénea (<NormaTooltip code="NIC 29" />).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
            <h4 className="font-extrabold text-teal-900 uppercase">
              II. Síntesis de Riesgos y Enfoque Determinado
            </h4>
            <p className="text-slate-700 leading-relaxed">
              Habiendo relevado los 5 componentes de Control Interno (Archivo Documental NC 38,46% - RC ALTO; Sistema Tecnológico NC 47,62% - RC ALTO; Sistema Contable NC 72,00% - RC MEDIO; Presupuestos NC 77,78% - RC BAJO y Operativo NC 80,00% - RC BAJO), el Riesgo de Control resulta <strong>ALTO</strong> en los rubros críticos de infraestructura y tecnología. En consecuencia, se define un <strong>Enfoque Predominantemente Sustantivo</strong> con pruebas de detalle exhaustivas focalizadas en 1° Bienes de Uso (PT-A), 2° Créditos por Ventas (PT-B) y 3° Activos Intangibles (PT-E), aplicando procedimientos analíticos sustantivos sobre los restantes.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
            <h4 className="font-extrabold text-teal-900 uppercase">
              III. Parámetros de Materialidad Aprobados
            </h4>
            <p className="text-slate-700 leading-relaxed">
              • <strong>Materialidad Global de Planeación (PM):</strong> $166.225 millones (1% del Activo Total de $16.622.552M).<br />
              • <strong>Error Tolerable (ET):</strong> $83.112 millones (50% de PM).<br />
              • <strong>Monto Mínimo de Ajustes (PAE):</strong> $8.311 millones (5% de PM).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
            <h4 className="font-extrabold text-teal-900 uppercase">
              IV. Asignación de Recursos, Presupuesto y Cronograma
            </h4>
            <p className="text-slate-700 leading-relaxed">
              Encargados: <strong>Grebe — Pisonero De Biase (U.C.P.)</strong> con asistencia de 2 auditores Junior y dirección de Socio Firmante. Total presupuestado: <strong>1.220 horas</strong> profesionales por un honorario integral de <strong>$80.683.020</strong> (Módulo CPCECABA Nov. 2026: $15.980). Cronograma intensivo de <strong>3 meses (12 semanas: Diciembre 2025 a Febrero 2026)</strong> para cumplir con la presentación ante la CNV (plazo legal perentorio de 70 días) con dictamen final emitido el 20/02/2026.
            </p>
          </div>
        </div>
      </div>

      {/* GUÍA DE LECTURA Y EXPOSICIÓN ORAL — CIERRE DE LA SUBETAPA 1.2: PLANIFICACIÓN DETALLADA */}
      <div className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 rounded-2xl border border-teal-500/40 p-6 text-white shadow-lg space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-lime-400 shrink-0" />
            <span className="text-xs font-extrabold uppercase tracking-wider text-lime-400">
              Guía de Lectura y Exposición Oral — Cierre de la Subetapa 1.2: Planificación Detallada
            </span>
          </div>
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-white/10 text-teal-200 border border-white/15">
            Fin de la Etapa 1 (Planificación) → Paso a Etapa 2 (Ejecución)
          </span>
        </div>

        <h3 className="text-base sm:text-lg font-extrabold text-white">
          Resumen de la Planificación Detallada: ¿Qué empezamos haciendo acá, qué hicimos y por qué?
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs leading-relaxed">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
            <strong className="text-lime-300 block uppercase text-[11px] tracking-wider">
              1. ¿Qué se empieza haciendo en la Planificación Detallada?
            </strong>
            <p className="text-slate-200">
              Una vez que en la <em>Planificación Preliminar (1A, 1B y 1C)</em> definimos que el Riesgo de Control de Telecom es ALTO y que aplicaremos un enfoque sustantivo, en la <strong>Planificación Detallada (1D)</strong> bajamos de la visión global a las <strong>cuentas individuales del Balance</strong>. Empezamos fijando los umbrales numéricos de <strong>Materialidad ($166.225M de PM, $83.112M de ET y $8.311M de PAE)</strong> y seleccionando los <strong>rubros más significativos y riesgosos</strong>: <em>PP&amp;E (Nota 9), Créditos por Ventas (Nota 5), Préstamos (Nota 14), Ventas (Nota 24), Activos Intangibles (Nota 10) y Llaves de Negocio (Nota 8)</em>, priorizando el enfoque de la cátedra en <strong>1° Bienes de Uso (PT-A), 2° Créditos por Ventas (PT-B) y 3° Activos Intangibles (PT-E)</strong>.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
            <strong className="text-amber-300 block uppercase text-[11px] tracking-wider">
              2. ¿Qué se hace concretamente acá?
            </strong>
            <p className="text-slate-200">
              Para cada uno de esos rubros críticos identificamos qué <strong>Afirmaciones u Objetivos de Auditoría de Slosse</strong> están en peligro (<em>Existencia, Integridad, Propiedad, Medición y Exposición</em>) y redactamos a medida los <strong>6 Programas de Trabajo (Programas A a F)</strong>. En cada Programa dejamos escrito exactamente <strong>qué procedimiento sustantivo</strong> se va a aplicar, <strong>con qué alcance (muestra)</strong> y <strong>en qué momento del año</strong> (Visita Interina, Pre-Cierre o Visita Final), cerrando todo en el <strong>Memorando de Planificación (LP-01)</strong>.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
            <strong className="text-teal-300 block uppercase text-[11px] tracking-wider">
              3. ¿Por qué y para qué lo hacemos?
            </strong>
            <p className="text-slate-200">
              Porque según <strong>Carlos Slosse y la RT 37</strong>, el equipo de auditoría no puede salir a hacer el trabajo de campo improvisando qué pedirle al cliente. La Planificación Detallada transforma el diagnóstico de riesgos en una <strong>«hoja de ruta operativa paso a paso» (el Programa de Trabajo)</strong>. Con este documento aprobado termina la <strong>Etapa 1 (Planificación)</strong> y los auditores salen al terreno a cumplir cada procedimiento en la <strong>Etapa 2 (Ejecución)</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
