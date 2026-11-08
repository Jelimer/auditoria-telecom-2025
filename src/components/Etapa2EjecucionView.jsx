import React, { useState, useEffect } from 'react';
import {
  FileSpreadsheet,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  BookmarkCheck,
  Calculator,
  Scale
} from 'lucide-react';
import { papelesTrabajo, marcasAuditoria } from '../data/etapas2y3Data';
import { materialidadData, rubrosSignificativos } from '../data/etapa1Data';

export const NORMAS_DICCIONARIO = {
  'NIA 450': {
    codigo: 'NIA 450',
    titulo: 'Evaluación de las Incorrecciones Identificadas durante la Auditoría',
    emisor: 'IAASB / FACPCE',
    queTrata: 'Obliga al auditor a acumular todas las incorrecciones identificadas durante la auditoría (excepto las que sean claramente insignificantes o triviales). Exige evaluar el efecto acumulado de las incorrecciones no corregidas sobre los estados contables.',
    aplicacion: 'Regla de acumulación: si un desvío individual (como los $6.890M de fibra destruida en PT-A1) está por debajo del umbral mínimo PAE ($8.311M), debe sumarse con las demás incorrecciones del mismo rubro ($21.450M de centrales obsoletas en PT-A4). Al totalizar $28.340M, supera ampliamente el PAE y exige obligatoriamente proponer el ajuste contable AJ-01.'
  },
  'NIA 320': {
    codigo: 'NIA 320',
    titulo: 'Importancia Relativa o Materialidad en la Planificación y Ejecución de la Auditoría',
    emisor: 'IAASB / FACPCE',
    queTrata: 'Establece los criterios para determinar la Materialidad Global, la Materialidad de Ejecución (Error Tolerable) y el umbral para desvíos claramente no triviales (PAE).',
    aplicacion: 'En Telecom fijamos: Materialidad Global $166.225M (1% del Activo Total), Error Tolerable $83.112M (50% de MG) y Umbral PAE $8.311M (5% de MG).'
  },
  'NIA 500': {
    codigo: 'NIA 500',
    titulo: 'Evidencia de Auditoría',
    emisor: 'IAASB / FACPCE',
    queTrata: 'Exige diseñar y aplicar procedimientos de auditoría de forma que se obtengan elementos de juicio válidos y suficientes (evidencia suficiente y adecuada) para sustentar la opinión del informe.',
    aplicacion: 'En Telecom se obtienen mediante inspección física in situ (16 Data Centers), confirmación externa directa (RPI, bancos) y recálculos matemáticos independientes.'
  },
  'NIA 520': {
    codigo: 'NIA 520',
    titulo: 'Procedimientos Analíticos Sustantivos',
    emisor: 'IAASB / FACPCE',
    queTrata: 'Evaluación de la información financiera mediante análisis de relaciones plausibles entre datos financieros y no financieros, y comparaciones globales de saldos.',
    aplicacion: 'En PT-A4 se aplica la Prueba Global de Amortizaciones: se multiplica el valor de origen reexpresado por la vida útil teórica para validar la razonabilidad del cargo contable de $854.120M.'
  },
  'NIA 700': {
    codigo: 'NIA 700',
    titulo: 'Formación de la Opinión y Emisión del Informe de Auditoría sobre los Estados Contables',
    emisor: 'IAASB / FACPCE',
    queTrata: 'Norma la redacción y estructura del dictamen profesional del auditor independiente (opinión favorable sin salvedades, opinión con salvedades, opinión adversa o abstención).',
    aplicacion: 'Si la Gerencia de Telecom acepta registrar los ajustes que superan el PAE (AJ-01 a AJ-04), el auditor puede emitir una Opinión Limpia sin salvedades.'
  },
  'NIA 501': {
    codigo: 'NIA 501',
    titulo: 'Evidencia de Auditoría - Consideraciones Específicas para Partidas Seleccionadas',
    emisor: 'IAASB / FACPCE',
    queTrata: 'Procedimientos sustantivos requeridos para inventarios físicos, litigios, reclamaciones de asesoría jurídica externa e información por segmentos.',
    aplicacion: 'Se utiliza en la circularización a los asesores legales externos para auditar las contingencias de $563.085M en Nota 20.'
  },
  'NIA 620': {
    codigo: 'NIA 620',
    titulo: 'Utilización del Trabajo de un Experto del Auditor',
    emisor: 'IAASB / FACPCE',
    queTrata: 'Regula las condiciones y evaluación de competencia cuando el auditor recurre al informe de un especialista o perito externo independiente.',
    aplicacion: 'Se utiliza en el Test de Deterioro de la UGE Redes Personal ($12.774.695M) auditando el informe de peritos en valuación financiera (WACC).'
  },
  'NIC 16': {
    codigo: 'NIC 16',
    titulo: 'Propiedades, Planta y Equipo (Bienes de Uso)',
    emisor: 'IASB (NIIF)',
    queTrata: 'Estipula el reconocimiento inicial al costo, los aranceles capitalizables (párrafo 16), el inicio de depreciación cuando el bien está disponible para su uso (párrafo 55) y la baja obligatoria en cuentas de activos que no generarán beneficios económicos futuros (párrafo 67).',
    aplicacion: 'Fundamenta la baja contable de las centrales de cobre obsoletas ($21.450M) y de las redes de fibra siniestradas ($6.890M), ya que no producirán beneficios económicos.'
  },
  'NIC 29': {
    codigo: 'NIC 29',
    titulo: 'Información Financiera en Economías Hiperinflacionarias',
    emisor: 'IASB (NIIF)',
    queTrata: 'Exige reexpresar los estados financieros en moneda homogénea de poder adquisitivo al cierre del período sobre el que se informa mediante índices generales de precios (IPC).',
    aplicacion: 'Se audita que todos los saldos de Bienes de Uso estén reexpresados por inflación antes de calcular la amortización anual y el valor recuperable.'
  },
  'NIC 36': {
    codigo: 'NIC 36',
    titulo: 'Deterioro del Valor de los Activos',
    emisor: 'IASB (NIIF)',
    queTrata: 'Exige realizar anualmente un Test de Deterioro sobre activos con vida útil indefinida (como la Llave de Negocio Redes Personal de $4.443.998M en Nota 8).',
    aplicacion: 'Verificación del valor recuperable por Flujos de Fondos Descontados (DCF), confirmando un margen de cobertura positivo (headroom) de $334.966M.'
  },
  'NIC 38': {
    codigo: 'NIC 38',
    titulo: 'Activos Intangibles',
    emisor: 'IASB (NIIF)',
    queTrata: 'Diferencia los gastos de investigación (a resultados) de los costos de desarrollo (capitalizables), y fija pautas para licencias de espectro radioeléctrico.',
    aplicacion: 'Auditoría de licencias de espectro 5G ENACOM ($1.985.420M) y software capitalizado en SAP PS ($686.105M) en Nota 10.'
  },
  'NIIF 3': {
    codigo: 'NIIF 3',
    titulo: 'Combinaciones de Negocios',
    emisor: 'IASB (NIIF)',
    queTrata: 'Regula el método de adquisición y la medición a valor razonable (PPA) de todos los activos incorporados en fusiones o adquisiciones corporativas.',
    aplicacion: 'Explica la incorporación de la cartera de Telefónica Móviles Argentina S.A. (TMA) por $421.919M al 24/02/2025.'
  },
  'NIIF 9': {
    codigo: 'NIIF 9',
    titulo: 'Instrumentos Financieros',
    emisor: 'IASB (NIIF)',
    queTrata: 'Establece el modelo prospectivo de Pérdida Crediticia Esperada (PCE) para medir la previsión para deudores incobrables.',
    aplicacion: 'Recálculo de la matriz de morosidad >180 días en Créditos por Ventas, determinando el refuerzo de previsión por $19.850M en AJ-03.'
  },
  'RT 37': {
    codigo: 'RT 37 (FACPCE)',
    titulo: 'Normas de Auditoría, Revisión, Otros Encargos de Aseguramiento y Servicios Relacionados',
    emisor: 'FACPCE (Argentina)',
    queTrata: 'Marco normativo profesional emitido por los Consejos Profesionales en Ciencias Económicas de Argentina, armonizado con las Normas Internacionales de Auditoría (NIAs).',
    aplicacion: 'Es la norma que regula nuestro encargo de auditoría independiente sobre los estados contables consolidados de Telecom Argentina S.A.'
  }
};

function NormaTooltip({ code, info }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <span
      className="relative inline-block my-0.5"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <span
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen((prev) => !prev);
        }}
        className="inline-flex items-center gap-1 mx-1 px-1.5 py-0.5 rounded font-extrabold text-[11px] bg-teal-950 text-lime-300 border border-teal-500/70 hover:border-lime-400 hover:bg-slate-900 cursor-help transition-all shadow-xs underline decoration-dotted decoration-lime-400 underline-offset-2 not-italic"
        title={`Pasa el mouse para ver qué trata la ${info.codigo}`}
      >
        <span>📘 {code}</span>
        <span className="text-[9px] text-lime-400 opacity-80">ℹ️</span>
      </span>

      {isOpen && (
        <span
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 sm:w-92 p-3.5 bg-slate-950 text-slate-100 text-[11px] rounded-xl shadow-2xl border-2 border-teal-400 z-50 block text-left not-italic font-normal normal-case pointer-events-auto leading-normal animate-in fade-in zoom-in-95 duration-150"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Encabezado */}
          <span className="flex items-center justify-between gap-1 pb-1.5 border-b border-slate-800 mb-2">
            <span className="font-mono font-extrabold text-lime-300 text-xs flex items-center gap-1">
              📘 {info.codigo}
            </span>
            <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-teal-900 text-teal-200 uppercase tracking-wider">
              {info.emisor}
            </span>
          </span>

          {/* Título de la norma */}
          <span className="font-bold text-white text-xs block mb-1.5 leading-snug">
            {info.titulo}
          </span>

          {/* ¿De qué trata? */}
          <span className="block text-slate-300 text-[11px] mb-2 leading-relaxed">
            <strong className="text-teal-400 font-bold">📜 ¿De qué trata?: </strong>
            {info.queTrata}
          </span>

          {/* Aplicación en Telecom */}
          {info.aplicacion && (
            <span className="block p-2 rounded-lg bg-teal-950/90 border border-teal-500/50 text-teal-100 text-[10.5px] leading-relaxed">
              <strong className="text-amber-300 font-extrabold block mb-0.5">
                🎯 Aplicación en Telecom:
              </strong>
              {info.aplicacion}
            </span>
          )}

          {/* Flechita decorativa apuntando hacia abajo */}
          <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-teal-400" />
        </span>
      )}
    </span>
  );
}

export function renderTextWithNormas(text) {
  if (!text || typeof text !== 'string') return text;

  const regex = /\b(NIA\s*(?:450|320|500|520|700|240|501|620)|NIC\s*(?:16|29|36|38)|NIIF\s*(?:3|9|15|16)|RT\s*37)\b/gi;
  const parts = text.split(regex);
  if (parts.length <= 1) return text;

  return parts.map((part, index) => {
    const normalizedKey = part.replace(/\s+/g, ' ').toUpperCase();
    const info = NORMAS_DICCIONARIO[normalizedKey];

    if (info) {
      return <NormaTooltip key={index} code={part} info={info} />;
    }

    return part;
  });
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
  const isPTA = activePT.id === 'pt-a';
  const activeRubro =
    rubrosSignificativos.find(
      (r) => r.codigoPrograma.toLowerCase().replace('programa ', 'pt-') === activePT.id.toLowerCase()
    ) || rubrosSignificativos[0];

  // Filtro de ajustes según el rubro activo (por defecto muestra sólo los ajustes del rubro activo, ej. Bienes de Uso = AJ-01)
  const ajustesDelRubroActivo = ajustesState.filter((a) => {
    if (activePT.id === 'pt-a') {
      return a.rubro.toLowerCase().includes('bienes de uso') || a.refPT.includes('PT-A');
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

  // Cálculo del efecto acumulado de ajustes NO aceptados por la Gerencia (sobre los visibles o sobre el rubro)
  const montoAjustesNoRegistrados = ajustesAMostrar
    .filter((a) => a.superaPAE && !a.aceptado)
    .reduce((acc, a) => acc + a.montoMillones, 0);

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
                onClick={() => setSelectedPTId(pt.id)}
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
                  </tr>
                ))}
              </tbody>
            </table>
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
                      ({proc.ref === 'PT-A1' ? 'Inspección Física' : proc.ref === 'PT-A2' ? 'Altas CAPEX' : proc.ref === 'PT-A3' ? 'Titularidad RPI' : 'Depreciaciones'})
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

                  <h5 className={`${isPTA ? 'text-sm sm:text-base' : 'text-xs'} font-extrabold text-slate-900 mb-2`}>{proc.nombre}</h5>

                  <div className="mb-2.5">
                    <strong className={`${isPTA ? 'text-xs' : 'text-[11px]'} text-slate-800 block mb-1 font-bold`}>
                      Muestra examinada:
                    </strong>
                    <p className={`${isPTA ? 'text-xs sm:text-[13px]' : 'text-[11px]'} text-slate-700 leading-relaxed bg-slate-100/80 p-2.5 rounded-lg border border-slate-200`}>
                      {proc.muestra}
                    </p>
                  </div>

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
                              <div className="flex items-start justify-between gap-2">
                                <div className="flex items-start gap-1.5 flex-1">
                                  <span className={`px-2 py-0.5 rounded bg-teal-900 text-lime-300 font-mono font-bold ${isPTA ? 'text-xs' : 'text-[10px]'} shrink-0`}>
                                    Paso {pIdx + 1}
                                  </span>
                                  <span className={`${isPTA ? 'text-xs sm:text-sm' : 'text-[11px]'} font-bold text-slate-800 leading-snug`}>
                                    {item.paso}
                                  </span>
                                </div>
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

                              {/* 2. [ Desplegable / Detalle técnico ] primero en cada paso, luego Fuentes..., luego valores... */}
                              {hasDetail && isStepExpanded && (
                                <div className={`p-3 rounded-lg bg-slate-900 text-slate-100 border border-teal-500/40 ${isPTA ? 'text-xs sm:text-[13px] leading-relaxed' : 'text-[11px]'} space-y-2`}>
                                  {item.comoSeEjecuta && (
                                    <div>
                                      <strong className={`text-lime-300 flex items-center gap-1 ${isPTA ? 'text-xs' : 'text-[10px]'} uppercase tracking-wide`}>
                                        🛠️ ¿Cómo se ejecuta la prueba en la práctica?
                                      </strong>
                                      <p className={`text-slate-300 mt-0.5 leading-relaxed ${isPTA ? 'text-xs sm:text-[13px]' : 'text-[11px]'}`}>{renderTextWithNormas(item.comoSeEjecuta)}</p>
                                    </div>
                                  )}

                                  {item.fuentes && (
                                    <div>
                                      <strong className={`text-teal-300 flex items-center gap-1 ${isPTA ? 'text-xs' : 'text-[10px]'} uppercase tracking-wide`}>
                                        📂 Fuentes de Información y Sistemas:
                                      </strong>
                                      <p className={`text-slate-300 mt-0.5 leading-relaxed ${isPTA ? 'text-xs sm:text-[13px]' : 'text-[11px]'}`}>{renderTextWithNormas(item.fuentes)}</p>
                                    </div>
                                  )}

                                  {item.valores && (
                                    <div>
                                      <strong className={`text-amber-300 flex items-center gap-1 ${isPTA ? 'text-xs' : 'text-[10px]'} uppercase tracking-wide`}>
                                        🔢 Valores y Bases de Cálculo:
                                      </strong>
                                      <p className={`text-slate-300 mt-0.5 leading-relaxed ${isPTA ? 'text-xs sm:text-[13px]' : 'text-[11px]'}`}>{renderTextWithNormas(item.valores)}</p>
                                    </div>
                                  )}
                                </div>
                              )}

                              {/* 3. y finalmente Resultado y Hallazgos con Marcas de Auditoría */}
                              <div className={`p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-200 ${isPTA ? 'text-xs sm:text-[13px]' : 'text-xs'} text-slate-800 leading-relaxed space-y-1`}>
                                <strong className={`${isPTA ? 'text-xs' : 'text-[10px]'} uppercase text-emerald-900 font-extrabold flex items-center gap-1`}>
                                  📌 Resultado de la Ejecución y Hallazgo (Marcas de Auditoría):
                                </strong>
                                <p className={`text-slate-700 leading-relaxed ${isPTA ? 'text-xs sm:text-sm' : 'text-xs'}`}>{renderTextWithNormas(item.resultado)}</p>
                              </div>
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
                            {!stepsHaveDetail && proc.procedimientoDetalle && (
                              <div>
                                <strong className={`text-lime-300 flex items-center gap-1 ${isPTA ? 'text-xs' : 'text-[10px]'} uppercase tracking-wide`}>
                                  🛠️ ¿Cómo se ejecuta la prueba en la práctica?
                                </strong>
                                <p className={`text-slate-300 mt-0.5 leading-relaxed ${isPTA ? 'text-xs sm:text-[13px]' : 'text-[11px]'}`}>{renderTextWithNormas(proc.procedimientoDetalle)}</p>
                              </div>
                            )}
                            {!stepsHaveDetail && proc.fuentes && (
                              <div>
                                <strong className={`text-teal-300 flex items-center gap-1 ${isPTA ? 'text-xs' : 'text-[10px]'} uppercase tracking-wide`}>
                                  📂 Fuentes de Información y Sistemas:
                                </strong>
                                <p className={`text-slate-300 mt-0.5 leading-relaxed ${isPTA ? 'text-xs sm:text-[13px]' : 'text-[11px]'}`}>{renderTextWithNormas(proc.fuentes)}</p>
                              </div>
                            )}
                            {!stepsHaveDetail && proc.valores && (
                              <div>
                                <strong className={`text-amber-300 flex items-center gap-1 ${isPTA ? 'text-xs' : 'text-[10px]'} uppercase tracking-wide`}>
                                  🔢 Valores y Bases de Cálculo:
                                </strong>
                                <p className={`text-slate-300 mt-0.5 leading-relaxed ${isPTA ? 'text-xs sm:text-[13px]' : 'text-[11px]'}`}>{renderTextWithNormas(proc.valores)}</p>
                              </div>
                            )}
                            {proc.defensaOral && (
                              <div>
                                <strong className={`text-amber-300 flex items-center gap-1 ${isPTA ? 'text-xs' : 'text-[10px]'} uppercase tracking-wide`}>
                                  🎓 Para la Defensa Oral ante el Profesor (Libreto sugerido):
                                </strong>
                                <div className={`text-amber-100/95 mt-0.5 leading-relaxed bg-amber-950/50 p-3 rounded-lg border border-amber-500/30 italic ${isPTA ? 'text-xs sm:text-sm' : 'text-xs'}`}>
                                  "{renderTextWithNormas(proc.defensaOral)}"
                                </div>
                              </div>
                            )}
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
            <span className={`${isPTA ? 'text-sm' : 'text-xs'} font-extrabold uppercase text-teal-900 block`}>
              Conclusión del Auditor sobre {activePT.rubro}:
            </span>
            <div className={`${isPTA ? 'text-xs sm:text-sm font-medium' : 'text-xs'} text-slate-800 mt-1 leading-relaxed`}>
              {renderTextWithNormas(activePT.conclusionRubro)}
            </div>
          </div>

          <div className="pt-3 border-t border-teal-200/80">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-800 block mb-2">
              Referencias de Marcas de Auditoría (Tickmarks):
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
              {marcasAuditoria.map((m, i) => (
                <div
                  key={i}
                  title={m.significado}
                  className="px-2.5 py-1.5 rounded-lg bg-white border border-teal-200 text-[11px] text-slate-700 flex items-start gap-1.5"
                >
                  <strong className="font-mono text-teal-700 text-xs shrink-0">{m.simbolo}</strong>
                  <span className="leading-snug">{m.significado.split('(')[0]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* PLANILLA RESUMEN DE AJUSTES Y RECLASIFICACIONES PROPUESTOS (PAE / SAD) */}
      <div id="sec-pae" className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs scroll-mt-20">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-100 mb-5">
          <div>
            <span className="px-2.5 py-1 rounded-md text-xs font-extrabold bg-rose-600 text-white">
              PLANILLA DE AJUSTES Y RECLASIFICACIONES PROPUESTOS (PAE / SAD)
            </span>
            <h3 className="text-lg font-extrabold text-slate-900 mt-2">
              Evaluación de Hallazgos frente a Umbral Mínimo PAE ($8.311M), Error Tolerable ($83.112M) y Materialidad ($166.225M)
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Podés simular qué sucede si la Gerencia de Telecom Argentina S.A. acepta registrar o no cada asiento propuesto y observar cómo impacta automáticamente en la opinión del Informe del Auditor en la Etapa 3.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900 text-white shrink-0 flex items-center gap-4">
            <div>
              <span className="text-[10px] font-bold uppercase text-slate-400 block">
                {!mostrarTodosAjustes && activePT.id === 'pt-a'
                  ? 'Desvío en Bienes de Uso (AJ-01)'
                  : 'Desvíos Materiales No Registrados'}
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
              <span className="text-xs font-extrabold text-lime-400">
                {montoAjustesNoRegistrados === 0
                  ? 'Opinión Favorable Limpia ✓'
                  : 'Con Salvedades por Valuación'}
              </span>
            </div>
          </div>
        </div>

        {/* Barra de alternancia de visualización de ajustes */}
        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 mb-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-700">
              Visualización de Ajustes:
            </span>
            {!mostrarTodosAjustes ? (
              <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-teal-100 text-teal-800 border border-teal-300">
                🎯 Solo Ajustes de {activePT.rubro} ({ajustesDelRubroActivo.length})
              </span>
            ) : (
              <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-amber-100 text-amber-900 border border-amber-300">
                👁️ Todos los Ajustes de la Auditoría ({ajustesState.length})
              </span>
            )}
            {!mostrarTodosAjustes && activePT.id === 'pt-a' && (
              <span className="text-[11px] text-slate-500 font-medium">
                — Enfoque Cátedra: Bienes de Uso es el único rubro con recomendación de ajuste (AJ-01 por $28.340M).
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={() => setMostrarTodosAjustes((prev) => !prev)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer shadow-xs border bg-white hover:bg-slate-100 text-slate-800 border-slate-300 active:scale-95"
          >
            {mostrarTodosAjustes ? (
              <>
                <span>🎯 Ocultar y ver solo ajustes de {activePT.rubro}</span>
              </>
            ) : (
              <>
                <span>👁️ Desplegar los otros ajustes de la auditoría (AJ-02 a AJ-04)</span>
              </>
            )}
          </button>
        </div>

        <div className="space-y-4">
          {ajustesAMostrar.length === 0 ? (
            <div className="p-8 text-center rounded-xl bg-slate-50 border border-dashed border-slate-300 space-y-2">
              <span className="text-2xl block">✅</span>
              <h4 className="text-sm font-extrabold text-slate-800">
                Sin Ajustes Propuestos para {activePT.rubro}
              </h4>
              <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
                Este rubro no arrojó desvíos materiales ni recomendaciones de ajuste al cierre del ejercicio (saldos validados y conformes).
              </p>
              <button
                type="button"
                onClick={() => setMostrarTodosAjustes(true)}
                className="mt-2 px-3 py-1.5 rounded-lg bg-teal-700 text-white text-xs font-bold hover:bg-teal-800 transition-colors cursor-pointer"
              >
                👁️ Desplegar todos los ajustes de la auditoría
              </button>
            </div>
          ) : (
            ajustesAMostrar.map((item) => (
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
                <div className="lg:col-span-6 space-y-1.5 text-xs">
                  <p className="text-[11px] font-bold text-teal-800">
                    Trazabilidad Control Interno: {item.origenCCI}
                  </p>
                  <p className="text-slate-700 leading-relaxed">{item.descripcionHallazgo}</p>
                </div>

                {/* Asiento Contable Propuesto (Debe / Haber) */}
                <div className="lg:col-span-6 overflow-x-auto rounded-lg border border-slate-200 bg-white">
                  <table className="w-full text-left border-collapse text-xs font-mono">
                    <thead>
                      <tr className="bg-slate-100 text-slate-600 font-sans font-bold text-[10px] uppercase border-b border-slate-200">
                        <th className="py-1.5 px-3">Asiento Contable Propuesto (Cuentas SAP)</th>
                        <th className="py-1.5 px-3 text-right">Debe ($M)</th>
                        <th className="py-1.5 px-3 text-right">Haber ($M)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {item.asientoContable.map((linea, idx) => (
                        <tr key={idx}>
                          <td
                            className={`py-1.5 px-3 font-sans font-medium text-slate-800 ${
                              linea.haber > 0 ? 'pl-7 text-slate-600' : ''
                            }`}
                          >
                            {linea.cuenta}
                          </td>
                          <td className="py-1.5 px-3 text-right font-bold text-slate-800">
                            {linea.debe > 0 ? linea.debe.toLocaleString('es-AR') : ''}
                          </td>
                          <td className="py-1.5 px-3 text-right font-bold text-slate-800">
                            {linea.haber > 0 ? linea.haber.toLocaleString('es-AR') : ''}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )))}
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
              <br />• En <strong>Créditos por Ventas (PT-B)</strong> circularizamos clientes B2B, auditamos el corte de diciembre/enero (<strong>Ajuste AJ-02 por $18.800M</strong>) y reprocesamos con software TAACs el 100% de la mora &gt; 180 días incluyendo la cartera migrada de TMA (<strong>Ajuste AJ-03 por $19.850M</strong>).
              <br />• En <strong>Préstamos (PT-C)</strong> confirmamos el 100% de la deuda con bancos y Caja de Valores y recalculamos su valuación al TC BNA $/US$ 1.455,00.
              <br />• En <strong>Ventas (PT-D)</strong> hicimos la prueba global (Parque × ARPU) y detectamos ingresos de streaming de terceros registrados por el bruto (<strong>Reclasificación AJ-04 por $11.240M</strong>).
              <br />• En <strong>Intangibles y Llave (PT-E)</strong> auditamos con especialistas el Test de Deterioro (NIC 36) de la UGE Personal.
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
