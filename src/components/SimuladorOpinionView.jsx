import React, { useState } from 'react';
import {
  Scale,
  Sliders,
  CheckCircle2,
  AlertTriangle,
  ShieldAlert,
  RotateCcw,
  FileText,
  Info,
  ArrowRight,
  BookOpen,
  Calculator
} from 'lucide-react';
import { materialidadData } from '../data/etapa1Data';
import { NormaTooltip } from './NormaTooltip';

const PM_GLOBAL = materialidadData.materialidadGlobal.importe; // 166225
const ET_RUBRO = materialidadData.errorTolerable.importe; // 83112
const PAE_UMBRAL = materialidadData.montoMinimoAjuste.importe; // 8311

const ITEMS_SIMULACION_BASE = [
  {
    id: 'sim-pta1',
    codigo: 'PT-A1',
    rubro: 'Bienes de Uso (Nota 9)',
    titulo: 'Fibra óptica y nodos vandalizados sin baja contable en SAP FI-AA',
    monto: 6890,
    esRealTP: true,
    notaRegla:
      'Individualmente ($6.890M) es menor al PAE ($8.311M), pero por NIA 450 se acumula con PT-A4 (misma naturaleza/rubro) formando AJ-01.',
    activo: true,
    aceptado: true
  },
  {
    id: 'sim-pta4',
    codigo: 'PT-A4',
    rubro: 'Bienes de Uso (Nota 9)',
    titulo: 'Centrales analógicas obsoletas sin previsión por desvalorización',
    monto: 21450,
    esRealTP: true,
    notaRegla:
      'Supera por sí solo al PAE ($8.311M). Junto con PT-A1 integra el asiento propuesto AJ-01 por $28.340M (17,05% de PM).',
    activo: true,
    aceptado: true
  },
  {
    id: 'sim-pte-hip',
    codigo: 'PT-E (Hipótesis)',
    rubro: 'Activos Intangibles (Nota 10)',
    titulo: 'Activación hipotética de gastos de investigación sin cumplir NIC 38.57',
    monto: 95000,
    esRealTP: false,
    notaRegla:
      'Escenario simulado (> ET $83.112M pero < PM $166.225M): obliga a ampliar muestreo/pruebas en el rubro, pero si es el único desvío no altera la opinión.',
    activo: false,
    aceptado: false
  },
  {
    id: 'sim-ptb-hip',
    codigo: 'PT-B / Otros (Hipótesis)',
    rubro: 'Créditos por Ventas / Varios',
    titulo: 'Insuficiencia hipotética masiva de Previsión NIIF 9 o activos sin respaldo',
    monto: 175000,
    esRealTP: false,
    notaRegla:
      'Escenario simulado (≥ PM $166.225M): si la Gerencia no ajusta, la distorsión se vuelve material y modifica la Opinión (NIA 705).',
    activo: false,
    aceptado: false
  }
];

const ESCENARIOS_RAPIDOS = [
  {
    id: 'real-aceptado',
    etiqueta: 'Caso Real TP (AJ-01 Registrado)',
    resumen: '$0 sin ajustar',
    badgeClass: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    aplicar: () => ({
      items: ITEMS_SIMULACION_BASE.map((i) => ({ ...i })),
      extraManual: 0,
      esGeneralizado: false,
      esLimitacionAlcance: false,
      factorCualitativoGrave: false,
      tieneAsuntoEnfasisNota: false
    })
  },
  {
    id: 'real-rechazado',
    etiqueta: 'Caso Real si NO Ajustan AJ-01',
    resumen: '$28.340M (< PM)',
    badgeClass: 'bg-teal-100 text-teal-900 border-teal-300',
    aplicar: () => ({
      items: ITEMS_SIMULACION_BASE.map((i) => ({
        ...i,
        activo: i.id === 'sim-pta1' || i.id === 'sim-pta4',
        aceptado: false
      })),
      extraManual: 0,
      esGeneralizado: false,
      esLimitacionAlcance: false,
      factorCualitativoGrave: false,
      tieneAsuntoEnfasisNota: false
    })
  },
  {
    id: 'menor-pae',
    etiqueta: 'Solo < PAE ($6.890M aislado)',
    resumen: 'Trivial (NIA 450.5)',
    badgeClass: 'bg-slate-100 text-slate-800 border-slate-300',
    aplicar: () => ({
      items: ITEMS_SIMULACION_BASE.map((i) => ({
        ...i,
        activo: i.id === 'sim-pta1',
        aceptado: false
      })),
      extraManual: 0,
      esGeneralizado: false,
      esLimitacionAlcance: false,
      factorCualitativoGrave: false,
      tieneAsuntoEnfasisNota: false
    })
  },
  {
    id: 'supera-et',
    etiqueta: 'Supera ET ($95.000M < PM)',
    resumen: '> ET y < PM',
    badgeClass: 'bg-amber-100 text-amber-900 border-amber-300',
    aplicar: () => ({
      items: ITEMS_SIMULACION_BASE.map((i) => ({
        ...i,
        activo: i.id === 'sim-pte-hip',
        aceptado: false
      })),
      extraManual: 0,
      esGeneralizado: false,
      esLimitacionAlcance: false,
      factorCualitativoGrave: false,
      tieneAsuntoEnfasisNota: false
    })
  },
  {
    id: 'salvedad',
    etiqueta: '≥ PM Acotado (No Generalizado)',
    resumen: 'Con Salvedades',
    badgeClass: 'bg-orange-100 text-orange-900 border-orange-300',
    aplicar: () => ({
      items: ITEMS_SIMULACION_BASE.map((i) => ({
        ...i,
        activo: i.id === 'sim-ptb-hip',
        aceptado: false
      })),
      extraManual: 0,
      esGeneralizado: false,
      esLimitacionAlcance: false,
      factorCualitativoGrave: false,
      tieneAsuntoEnfasisNota: false
    })
  },
  {
    id: 'adversa',
    etiqueta: '≥ PM Generalizado (Múltiples Rubros)',
    resumen: 'Opinión Adversa',
    badgeClass: 'bg-rose-100 text-rose-900 border-rose-300',
    aplicar: () => ({
      items: ITEMS_SIMULACION_BASE.map((i) => ({
        ...i,
        activo: true,
        aceptado: false
      })),
      extraManual: 0,
      esGeneralizado: true,
      esLimitacionAlcance: false,
      factorCualitativoGrave: false,
      tieneAsuntoEnfasisNota: false
    })
  },
  {
    id: 'limitacion',
    etiqueta: 'Limitación al Alcance ≥ PM',
    resumen: 'Salvedad / Abstención',
    badgeClass: 'bg-purple-100 text-purple-900 border-purple-300',
    aplicar: () => ({
      items: ITEMS_SIMULACION_BASE.map((i) => ({
        ...i,
        activo: i.id === 'sim-ptb-hip',
        aceptado: false
      })),
      extraManual: 0,
      esGeneralizado: true,
      esLimitacionAlcance: true,
      factorCualitativoGrave: false,
      tieneAsuntoEnfasisNota: false
    })
  }
];

export default function SimuladorOpinionView({ ajustesState = [], onNavigate }) {
  const [items, setItems] = useState(() => ITEMS_SIMULACION_BASE.map((i) => ({ ...i })));
  const [extraManual, setExtraManual] = useState(0);
  const [esGeneralizado, setEsGeneralizado] = useState(false);
  const [esLimitacionAlcance, setEsLimitacionAlcance] = useState(false);
  const [factorCualitativoGrave, setFactorCualitativoGrave] = useState(false);
  const [tieneAsuntoEnfasisNota, setTieneAsuntoEnfasisNota] = useState(false);

  const aj1Real = ajustesState.find((a) => a.id === 'aj-1');

  const aplicarEscenario = (fn) => {
    const res = fn();
    setItems(res.items);
    setExtraManual(res.extraManual);
    setEsGeneralizado(res.esGeneralizado);
    setEsLimitacionAlcance(res.esLimitacionAlcance);
    setFactorCualitativoGrave(res.factorCualitativoGrave);
    setTieneAsuntoEnfasisNota(res.tieneAsuntoEnfasisNota);
  };

  const toggleItemActivo = (id) => {
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, activo: !it.activo } : it))
    );
  };

  const toggleItemAceptado = (id) => {
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, aceptado: !it.aceptado } : it))
    );
  };

  const itemsActivos = items.filter((i) => i.activo);
  const itemsNoAjustados = itemsActivos.filter((i) => !i.aceptado);
  const totalDetectado =
    itemsActivos.reduce((acc, i) => acc + i.monto, 0) + Math.max(0, Number(extraManual) || 0);
  const totalNoAjustado =
    itemsNoAjustados.reduce((acc, i) => acc + i.monto, 0) + Math.max(0, Number(extraManual) || 0);
  const totalAceptado = itemsActivos
    .filter((i) => i.aceptado)
    .reduce((acc, i) => acc + i.monto, 0);

  const pctPM = (totalNoAjustado / PM_GLOBAL) * 100;
  const pctET = (totalNoAjustado / ET_RUBRO) * 100;
  const barraProgresoPct = Math.min(100, (totalNoAjustado / (PM_GLOBAL * 1.6)) * 100);

  const superaPAE = totalNoAjustado >= PAE_UMBRAL;
  const superaET = totalNoAjustado >= ET_RUBRO;
  const superaPM = totalNoAjustado >= PM_GLOBAL;
  const esMaterialPorCualitativo = factorCualitativoGrave && totalNoAjustado > 0;
  const esMaterial = superaPM || esMaterialPorCualitativo;

  // Clasificación técnica estricta bajo NIA 700 / 705 / 706 / 450
  let tipoOpinion = 'LIMPIA';
  let tituloOpinion = 'OPINIÓN FAVORABLE SIN SALVEDADES (LIMPIA)';
  let normaOpinion = 'NIA 700 / RT N° 32 FACPCE';
  let colorHero = 'from-emerald-900 via-teal-900 to-slate-900 border-emerald-400/50';
  let badgeOpinion = 'bg-emerald-500 text-white';

  if (esMaterial && esLimitacionAlcance && esGeneralizado) {
    tipoOpinion = 'ABSTENCION';
    tituloOpinion = 'ABSTENCIÓN (DENEGACIÓN) DE OPINIÓN';
    normaOpinion = 'NIA 705.9 — Limitación al Alcance Material y Generalizada';
    colorHero = 'from-purple-950 via-slate-900 to-slate-950 border-purple-400/60';
    badgeOpinion = 'bg-purple-600 text-white';
  } else if (esMaterial && !esLimitacionAlcance && esGeneralizado) {
    tipoOpinion = 'ADVERSA';
    tituloOpinion = 'OPINIÓN ADVERSA (DESFAVORABLE)';
    normaOpinion = 'NIA 705.8 — Incorrección Material y Generalizada';
    colorHero = 'from-rose-950 via-red-950 to-slate-950 border-rose-500/60';
    badgeOpinion = 'bg-rose-600 text-white';
  } else if (esMaterial) {
    tipoOpinion = 'SALVEDADES';
    tituloOpinion = esLimitacionAlcance
      ? 'OPINIÓN FAVORABLE CON SALVEDADES (Limitación al Alcance)'
      : 'OPINIÓN FAVORABLE CON SALVEDADES («Excepto por...»)';
    normaOpinion = 'NIA 705.7 — Material pero NO Generalizado';
    colorHero = 'from-amber-950 via-orange-950 to-slate-900 border-amber-400/60';
    badgeOpinion = 'bg-amber-600 text-white';
  }

  const rubrosAfectadosSinAjustar = [
    ...new Set(itemsNoAjustados.map((i) => i.rubro)),
    ...(extraManual > 0 ? ['Ajuste / Desvío Adicional Simulado'] : [])
  ];

  return (
    <div className="space-y-6">
      {/* Encabezado Principal */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-extrabold bg-teal-900 text-lime-300">
              <Scale className="w-3.5 h-3.5" />
              SIMULADOR INTERACTIVO DE DEFENSA ORAL (PUNTO 2.1) • NIA 320 / 450 / 700 / 705 / 706
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-2">
              Simulador de Materialidad, Aceptación de Ajustes y Cambio de Opinión
            </h2>
            <p className="text-xs text-slate-600 mt-1 max-w-4xl leading-relaxed">
              Tildá desvíos, simulá montos hipotéticos o alterná si la Gerencia de Telecom acepta/rechaza el ajuste para ver en vivo qué pasa con el{' '}
              <strong>PAE ($8.311M)</strong>, el <strong>Error Tolerable ($83.112M)</strong>, la{' '}
              <strong>Materialidad Global ($166.225M)</strong>, la <strong>Opinión del Auditor</strong> y por qué{' '}
              <strong>no corresponde Párrafo de Énfasis</strong> si queda por debajo de PM. <em>(Laboratorio independiente: no modifica tus respuestas reales de Etapa 2/3).</em>
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {aj1Real && (
              <span
                className={`px-3 py-1.5 rounded-xl text-[11px] font-bold border ${
                  aj1Real.aceptado
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                    : 'bg-amber-50 text-amber-800 border-amber-200'
                }`}
              >
                Estado real en Etapa 3: AJ-01 {aj1Real.aceptado ? 'Registrado ✓' : 'No registrado'}
              </span>
            )}
            <button
              type="button"
              onClick={() => aplicarEscenario(ESCENARIOS_RAPIDOS[0].aplicar)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Restaurar Caso Real TP
            </button>
          </div>
        </div>

        {/* Escenarios en 1 Clic para Exposición Oral */}
        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-2">
            Escenarios rápidos (si la cátedra pregunta «¿Y qué pasaría si...?»):
          </p>
          <div className="flex flex-wrap gap-2">
            {ESCENARIOS_RAPIDOS.map((esc) => (
              <button
                key={esc.id}
                type="button"
                onClick={() => aplicarEscenario(esc.aplicar)}
                className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition-all hover:scale-[1.02] cursor-pointer flex items-center gap-1.5 ${esc.badgeClass}`}
              >
                <span>{esc.etiqueta}</span>
                <span className="opacity-75 text-[10px] font-mono">({esc.resumen})</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* PANEL DE RESULTADO EN VIVO (OPINIÓN RESULTANTE + TERMÓMETRO DE UMBRALES) */}
      <div className={`bg-gradient-to-r ${colorHero} rounded-2xl border p-6 text-white shadow-lg space-y-5`}>
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/15">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-lime-300 block">
              Resultado del Dictamen en Vivo ({normaOpinion})
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-1 flex items-center gap-2">
              {tipoOpinion === 'LIMPIA' ? (
                <CheckCircle2 className="w-6 h-6 text-emerald-300 shrink-0" />
              ) : tipoOpinion === 'SALVEDADES' ? (
                <AlertTriangle className="w-6 h-6 text-amber-300 shrink-0" />
              ) : (
                <ShieldAlert className="w-6 h-6 text-rose-300 shrink-0" />
              )}
              <span>{tituloOpinion}</span>
            </h3>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold shadow-sm ${badgeOpinion}`}>
              Desvío residual s/ajustar: ${totalNoAjustado.toLocaleString('es-AR')}M ({pctPM.toFixed(2).replace('.', ',')}% de PM)
            </span>
            {tieneAsuntoEnfasisNota ? (
              <span className="px-3 py-1.5 rounded-xl text-xs font-extrabold bg-sky-500 text-white">
                + Párrafo de Énfasis (NIA 706)
              </span>
            ) : (
              <span className="px-3 py-1.5 rounded-xl text-xs font-bold bg-white/10 text-slate-200 border border-white/20">
                SIN Párrafo de Énfasis (NIA 706.8)
              </span>
            )}
          </div>
        </div>

        {/* Barra visual de UMBRALES */}
        <div className="bg-black/25 rounded-xl p-4 border border-white/10 space-y-2.5">
          <div className="flex flex-wrap items-center justify-between text-[11px] font-bold text-slate-200 gap-2">
            <span>Desvío total detectado: <strong className="font-mono text-white">${totalDetectado.toLocaleString('es-AR')}M</strong></span>
            <span>Ajustado por Gerencia: <strong className="font-mono text-emerald-300">${totalAceptado.toLocaleString('es-AR')}M</strong></span>
            <span>Sin ajustar (impacto dictamen): <strong className="font-mono text-amber-300">${totalNoAjustado.toLocaleString('es-AR')}M</strong></span>
          </div>

          <div className="relative h-5 rounded-full bg-slate-800 overflow-hidden border border-white/15">
            {/* Marcadores proporcionales hasta 1.6x PM (~$265.960M) */}
            <div
              className="absolute top-0 bottom-0 border-l-2 border-slate-300/70 z-10"
              style={{ left: `${(PAE_UMBRAL / (PM_GLOBAL * 1.6)) * 100}%` }}
              title={`PAE: $${PAE_UMBRAL.toLocaleString('es-AR')}M`}
            />
            <div
              className="absolute top-0 bottom-0 border-l-2 border-amber-300 z-10"
              style={{ left: `${(ET_RUBRO / (PM_GLOBAL * 1.6)) * 100}%` }}
              title={`ET: $${ET_RUBRO.toLocaleString('es-AR')}M`}
            />
            <div
              className="absolute top-0 bottom-0 border-l-2 border-rose-400 z-10"
              style={{ left: `${(PM_GLOBAL / (PM_GLOBAL * 1.6)) * 100}%` }}
              title={`PM: $${PM_GLOBAL.toLocaleString('es-AR')}M`}
            />
            <div
              className={`h-full transition-all duration-300 ${
                superaPM
                  ? 'bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500'
                  : superaET
                  ? 'bg-gradient-to-r from-emerald-400 to-amber-400'
                  : 'bg-gradient-to-r from-emerald-500 to-lime-400'
              }`}
              style={{ width: `${barraProgresoPct}%` }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px]">
            <div className={`px-3 py-2 rounded-lg border ${superaPAE ? 'bg-teal-500/20 border-teal-400/40 text-teal-100' : 'bg-white/5 border-white/10 text-slate-300'}`}>
              <strong>1. Vs. PAE ($8.311M):</strong>{' '}
              {totalNoAjustado === 0
                ? 'Sin desvíos pendientes ($0).'
                : superaPAE
                ? 'SUPERA PAE → Se incluye en Planilla PAE y se propone ajuste. NO cambia la opinión por sí solo.'
                : 'POR DEBAJO de PAE → Trivial/Claramente insignificante (NIA 450.5); no justifica reabrir el cierre.'}
            </div>
            <div className={`px-3 py-2 rounded-lg border ${superaET ? 'bg-amber-500/20 border-amber-400/40 text-amber-100' : 'bg-white/5 border-white/10 text-slate-300'}`}>
              <strong>2. Vs. ET ($83.112M):</strong>{' '}
              {superaET
                ? 'SUPERA ET (' + pctET.toFixed(1).replace('.', ',') + '%) → Obliga a ampliar muestreo/pruebas en el rubro, pero NO cambia la opinión si el total < PM.'
                : 'POR DEBAJO de ET (' + pctET.toFixed(1).replace('.', ',') + '%) → Margen operativo de muestreo contenido.'}
            </div>
            <div className={`px-3 py-2 rounded-lg border ${esMaterial ? 'bg-rose-500/25 border-rose-400/50 text-rose-100' : 'bg-emerald-500/20 border-emerald-400/40 text-emerald-100'}`}>
              <strong>3. Vs. PM ($166.225M):</strong>{' '}
              {superaPM
                ? 'ALCANZA O SUPERA PM → Distorsión material: la Opinión CAMBIA a ' + (esGeneralizado ? (esLimitacionAlcance ? 'Abstención.' : 'Adversa.') : 'Con Salvedades.')
                : esMaterialPorCualitativo
                ? 'MONTO < PM PERO CUALITATIVO GRAVE → Distorsión material por fraude/manipulación: la Opinión CAMBIA.'
                : 'POR DEBAJO de PM → EECC razonables en su conjunto. Opinión sigue Limpia.'}
            </div>
          </div>
        </div>
      </div>

      {/* ZONA INTERACTIVA: IZQUIERDA CONTROLES / DERECHA DICTAMEN Y EFECTOS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Panel Izquierdo: Tildar Desvíos, Monto Extra y Condiciones */}
        <div className="lg:col-span-6 space-y-4">
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
            <div className="flex items-center justify-between gap-2 pb-2 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-teal-700" />
                <h3 className="text-sm font-extrabold text-slate-900">
                  1. Tildá los hallazgos y si la Gerencia los ajusta
                </h3>
              </div>
              <span className="text-[11px] font-bold text-slate-500">En millones de $ (NIC 29)</span>
            </div>

            <div className="space-y-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className={`p-3.5 rounded-xl border transition-all ${
                    !item.activo
                      ? 'bg-slate-50/70 border-slate-200 opacity-75'
                      : item.aceptado
                      ? 'bg-emerald-50/50 border-emerald-200'
                      : 'bg-amber-50/60 border-amber-300'
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <label className="flex items-start gap-2.5 cursor-pointer flex-1 min-w-[220px]">
                      <input
                        type="checkbox"
                        checked={item.activo}
                        onChange={() => toggleItemActivo(item.id)}
                        className="mt-1 w-4 h-4 accent-teal-700 rounded cursor-pointer"
                      />
                      <div>
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="px-2 py-0.5 rounded bg-slate-900 text-white font-mono text-[10px] font-bold">
                            {item.codigo}
                          </span>
                          <span className="text-xs font-extrabold text-slate-900">{item.rubro}</span>
                          {item.esRealTP ? (
                            <span className="px-1.5 py-0.5 rounded bg-teal-100 text-teal-800 text-[10px] font-bold">
                              Dato real TP
                            </span>
                          ) : (
                            <span className="px-1.5 py-0.5 rounded bg-indigo-100 text-indigo-800 text-[10px] font-bold">
                              Simulación oral
                            </span>
                          )}
                        </div>
                        <p className="text-xs font-semibold text-slate-700 mt-1">{item.titulo}</p>
                        <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">{item.notaRegla}</p>
                      </div>
                    </label>

                    <div className="text-right shrink-0 space-y-1.5">
                      <span className="block font-mono text-sm font-black text-slate-900">
                        ${item.monto.toLocaleString('es-AR')}M
                      </span>
                      {item.activo && (
                        <button
                          type="button"
                          onClick={() => toggleItemAceptado(item.id)}
                          className={`px-2.5 py-1 rounded-lg text-[11px] font-extrabold border transition-colors cursor-pointer ${
                            item.aceptado
                              ? 'bg-emerald-600 text-white border-emerald-700 hover:bg-emerald-700'
                              : 'bg-rose-600 text-white border-rose-700 hover:bg-rose-700'
                          }`}
                        >
                          {item.aceptado ? 'Gerencia ACEPTA ✓' : 'Gerencia RECHAZA ✗'}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Slider / monto manual adicional para cualquier pregunta improvisada */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <label className="text-xs font-extrabold text-slate-800 flex items-center gap-1.5">
                  <Calculator className="w-3.5 h-3.5 text-teal-700" />
                  Desvío adicional hipotético sin ajustar ($M):
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min={0}
                    max={500000}
                    step={5000}
                    value={extraManual}
                    onChange={(e) => setExtraManual(Math.max(0, Number(e.target.value) || 0))}
                    className="w-28 px-2.5 py-1 rounded-lg border border-slate-300 bg-white font-mono text-xs font-bold text-slate-900 text-right"
                  />
                  <span className="text-xs font-bold text-slate-500">$M</span>
                </div>
              </div>
              <input
                type="range"
                min={0}
                max={250000}
                step={5000}
                value={Math.min(250000, extraManual)}
                onChange={(e) => setExtraManual(Number(e.target.value))}
                className="w-full accent-teal-700 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>$0M</span>
                <span>PAE $8.311M</span>
                <span>ET $83.112M</span>
                <span>PM $166.225M</span>
                <span>$250.000M</span>
              </div>
            </div>

            {/* Condicionantes de NIA 705 / 450 / 706 */}
            <div className="p-4 rounded-xl bg-slate-900 text-white space-y-2.5">
              <p className="text-[11px] font-extrabold uppercase tracking-wider text-lime-300">
                2. Modificadores de Juicio Profesional (NIA 705 / NIA 450 / NIA 706)
              </p>

              <label className="flex items-start gap-2.5 text-xs cursor-pointer">
                <input
                  type="checkbox"
                  checked={esGeneralizado}
                  onChange={(e) => setEsGeneralizado(e.target.checked)}
                  className="mt-0.5 w-4 h-4 accent-rose-500 cursor-pointer"
                />
                <span>
                  <strong className="text-rose-300">Efecto GENERALIZADO en los EECC</strong>{' '}
                  <span className="text-slate-300">
                    (afecta varios rubros con alto % o elementos esenciales del balance → pasa de <em>Con Salvedades</em> a <em>Adversa</em> / <em>Abstención</em> si ≥ PM).
                  </span>
                </span>
              </label>

              <label className="flex items-start gap-2.5 text-xs cursor-pointer">
                <input
                  type="checkbox"
                  checked={esLimitacionAlcance}
                  onChange={(e) => setEsLimitacionAlcance(e.target.checked)}
                  className="mt-0.5 w-4 h-4 accent-purple-400 cursor-pointer"
                />
                <span>
                  <strong className="text-purple-300">Limitación al Alcance (NIA 705)</strong>{' '}
                  <span className="text-slate-300">
                    (en lugar de incorrección contable, no pudimos obtener evidencia suficiente → Salvedad o Abstención de Opinión).
                  </span>
                </span>
              </label>

              <label className="flex items-start gap-2.5 text-xs cursor-pointer">
                <input
                  type="checkbox"
                  checked={factorCualitativoGrave}
                  onChange={(e) => setFactorCualitativoGrave(e.target.checked)}
                  className="mt-0.5 w-4 h-4 accent-amber-400 cursor-pointer"
                />
                <span>
                  <strong className="text-amber-300">Factor Cualitativo Grave (NIA 450.11 / .A16)</strong>{' '}
                  <span className="text-slate-300">
                    (fraude intencional, ocultamiento ilícito, ruptura de <em>covenant</em> bancario o cambio de signo ganancia→pérdida; vuelve material aun si el monto es &lt; PM).
                  </span>
                </span>
              </label>

              <label className="flex items-start gap-2.5 text-xs cursor-pointer">
                <input
                  type="checkbox"
                  checked={tieneAsuntoEnfasisNota}
                  onChange={(e) => setTieneAsuntoEnfasisNota(e.target.checked)}
                  className="mt-0.5 w-4 h-4 accent-sky-400 cursor-pointer"
                />
                <span>
                  <strong className="text-sky-300">Asunto fundamental BIEN expuesto en Nota (NIA 706)</strong>{' '}
                  <span className="text-slate-300">
                    (ej. litigio excepcional o hecho posterior debidamente revelado; único caso válido para agregar Párrafo de Énfasis).
                  </span>
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* Panel Derecho: Vista en Vivo del Informe + Explicación de Párrafo de Énfasis */}
        <div className="lg:col-span-6 space-y-4">
          {/* Redacción en vivo del Dictamen */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-teal-700" />
                <h3 className="text-sm font-extrabold text-slate-900">
                  3. Cómo queda redactado el Informe y el Legajo
                </h3>
              </div>
              {onNavigate && (
                <button
                  type="button"
                  onClick={() => onNavigate('etapa3-informe', 'informe')}
                  className="inline-flex items-center gap-1 text-[11px] font-extrabold text-teal-700 hover:underline cursor-pointer"
                >
                  Ver Informe completo en Etapa 3 <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="space-y-3 text-xs leading-relaxed">
              {/* Párrafo de Opinión */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-800 block mb-1">
                  Sección 1 — {tipoOpinion === 'LIMPIA' ? 'Opinión (NIA 700)' : `${tituloOpinion} (NIA 705)`}
                </span>
                {tipoOpinion === 'LIMPIA' && (
                  <p className="text-slate-700 text-justify">
                    «En nuestra opinión, los estados financieros consolidados adjuntos{' '}
                    <strong>presentan razonablemente, en todos sus aspectos materiales</strong>, la situación financiera consolidada de Telecom Argentina S.A. al 31 de diciembre de 2025, de conformidad con las NIIF emitidas por el IASB.»
                  </p>
                )}
                {tipoOpinion === 'SALVEDADES' && (
                  <p className="text-slate-700 text-justify">
                    «En nuestra opinión,{' '}
                    <strong>
                      {esLimitacionAlcance
                        ? 'excepto por los posibles efectos de la cuestión descrita en la sección «Fundamento de la opinión con salvedades»'
                        : 'excepto por los efectos de la cuestión descrita en la sección «Fundamento de la opinión con salvedades»'}
                    </strong>
                    , los estados financieros consolidados adjuntos presentan razonablemente, en todos sus aspectos materiales, la situación financiera consolidada de Telecom Argentina S.A. al 31 de diciembre de 2025...»
                  </p>
                )}
                {tipoOpinion === 'ADVERSA' && (
                  <p className="text-rose-950 text-justify font-medium">
                    «En nuestra opinión,{' '}
                    <strong>debido a la significatividad y generalización de los asuntos descritos en la sección «Fundamento de la opinión adversa»</strong>
                    , los estados financieros consolidados adjuntos <strong>no presentan razonablemente</strong> la situación financiera consolidada de Telecom Argentina S.A. al 31 de diciembre de 2025 de conformidad con las NIIF.»
                  </p>
                )}
                {tipoOpinion === 'ABSTENCION' && (
                  <p className="text-purple-950 text-justify font-medium">
                    «<strong>No expresamos una opinión</strong> sobre los estados financieros consolidados adjuntos de Telecom Argentina S.A., debido a la significatividad y generalización de las limitaciones al alcance descritas en la sección «Fundamento de la abstención de opinión».»
                  </p>
                )}
              </div>

              {/* Párrafo de Fundamento + Impacto cuantitativo */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-700 block">
                  Sección 2 — Fundamento de la Opinión y Sustento Normativo
                </span>
                {tipoOpinion === 'LIMPIA' ? (
                  totalNoAjustado === 0 ? (
                    <p className="text-slate-700">
                      Desvío residual sin ajustar: <strong>$0M</strong>. Se ejecutaron las pruebas bajo{' '}
                      NIAs (<NormaTooltip code="RT 32" />) y <NormaTooltip code="NIA 700" />, quedando los saldos 100% depurados conforme a NIIF.
                    </p>
                  ) : (
                    <p className="text-slate-700">
                      Aunque la Gerencia no registró partidas por{' '}
                      <strong>${totalNoAjustado.toLocaleString('es-AR')}M</strong> ({pctPM.toFixed(2).replace('.', ',')}% de PM), el desvío es{' '}
                      <strong>menor a la Materialidad Global ($166.225M)</strong> y sin factores cualitativos adversos. El fundamento permanece estándar sin modificaciones (<NormaTooltip code="NIA 450" /> / <NormaTooltip code="NIA 700" />).
                    </p>
                  )
                ) : (
                  <p className="text-slate-800 font-medium">
                    Se incorpora un párrafo explícito describiendo el desvío no ajustado de{' '}
                    <strong>${totalNoAjustado.toLocaleString('es-AR')}M</strong> ({pctPM.toFixed(2).replace('.', ',')}% de PM) en{' '}
                    <strong>{rubrosAfectadosSinAjustar.join(', ') || 'rubro seleccionado'}</strong> y su impacto cuantitativo sobre el Activo/Patrimonio/Resultados (o la imposibilidad de auditar bajo <NormaTooltip code="NIA 705" />).
                  </p>
                )}
              </div>

              {/* Qué pasa en Papeles de Trabajo / Carta de Rep. / Comité */}
              <div className="p-3.5 rounded-xl bg-teal-50/70 border border-teal-200 space-y-1.5">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-900 block">
                  Impacto en Papeles de Trabajo, Carta de Representación y Comité
                </span>
                <ul className="space-y-1 text-slate-700 list-disc pl-4">
                  <li>
                    <strong>Planilla PAE (<NormaTooltip code="NIA 450" />):</strong>{' '}
                    {totalNoAjustado === 0
                      ? 'Cerrada en $0 sin ajustar.'
                      : superaPAE
                      ? `Partidas ≥ PAE ($${PAE_UMBRAL.toLocaleString('es-AR')}M) volcadas y propuestas formalmente a la Gerencia.`
                      : `Importe < PAE ($${PAE_UMBRAL.toLocaleString('es-AR')}M): no justifica reabrir el cierre por economía de auditoría.`}
                  </li>
                  <li>
                    <strong>Carta de Representación (<NormaTooltip code="NIA 580" /> / NIA 450.14):</strong>{' '}
                    {totalNoAjustado > 0 && superaPAE
                      ? 'OBLIGATORIO adjuntar resumen de incorrecciones no corregidas donde CEO/CFO manifiestan considerarlas inmateriales (o dejan constancia de su rechazo).'
                      : 'Declaración estándar de integridad de los EECC.'}
                  </li>
                  <li>
                    <strong>Comité de Auditoría y Carta CI (<NormaTooltip code="NIA 260" /> / <NormaTooltip code="NIA 265" />):</strong>{' '}
                    {totalNoAjustado > 0
                      ? 'Se informa la diferencia detectada, su impacto y la deficiencia de control que la originó (para evitar que se arrastre y crezca al próximo ejercicio).'
                      : 'Se informan igualmente las debilidades operativas (ej. SAP FI-AA) recomendando mejoras preventivas.'}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* BLOQUE CLAVE: ¿POR QUÉ NO SE AGREGA PÁRRAFO DE ÉNFASIS SI ES < PM? */}
          <div className="bg-gradient-to-br from-sky-950 via-slate-900 to-teal-950 rounded-2xl border border-sky-400/40 p-5 text-white shadow-md space-y-3">
            <div className="flex items-start gap-2.5">
              <BookOpen className="w-5 h-5 text-sky-300 shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-sky-300 block">
                  Duda Clave de Cátedra — NIA 706 (Párrafo de Énfasis) vs. NIA 705
                </span>
                <h4 className="text-sm sm:text-base font-extrabold text-white mt-0.5">
                  ¿Por qué si la empresa NO ajusta menos que PM (ej. $28.340M) NO cambia la Opinión NI se agrega Párrafo de Énfasis?
                </h4>
              </div>
            </div>

            <div className="space-y-2 text-xs text-slate-200 leading-relaxed">
              <p>
                <strong className="text-lime-300">1. Por la regla estricta de la <NormaTooltip code="NIA 706" /> (Párr. 8):</strong>{' '}
                Un <strong>Párrafo de Énfasis</strong> sirve <strong>únicamente</strong> para dirigir la atención del lector hacia una cuestión que{' '}
                <strong>ya está correctamente contabilizada y revelada en las Notas de los EECC por la empresa</strong> (por ejemplo: un litigio relevante o un hecho posterior significativo en Nota) y resulta fundamental para entender el balance.
              </p>
              <p>
                <strong className="text-amber-300">2. Está prohibido usarlo como «salvedad disfrazada» ni para errores menores:</strong>{' '}
                Si hay un desvío contable no ajustado y es <strong>material (≥ PM)</strong>, la <NormaTooltip code="NIA 705" /> exige <strong>Opinión Modificada (Salvedad o Adversa)</strong>, nunca un Énfasis. Si en cambio el desvío es <strong>inmaterial (&lt; PM)</strong> —como `AJ-01 $28.340M` (`0,17%` del Activo Total)—, los EECC en su conjunto ya son razonables: agregar un Párrafo de Énfasis alarmaría al mercado (CNV/SEC) por un importe que no cambia decisiones económicas.
              </p>
              <p className="p-2.5 rounded-lg bg-white/10 border border-white/15 text-sky-100">
                <Info className="w-3.5 h-3.5 inline mr-1 -mt-0.5 text-sky-300" />
                <strong>¿Entonces «queda en la nada»?</strong> No: aunque el Informe público sale <strong>Limpio y sin Párrafo de Énfasis</strong>, queda documentado en la <strong>Planilla PAE</strong>, informado al <strong>Comité de Auditoría (NIA 260)</strong>, firmado por CEO/CFO en anexo a la <strong>Carta de Representación (NIA 450.14)</strong> y monitoreado para que no se acumule en el cierre 2026.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabla Resumen Comparativa Rápida para Defensa Oral */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <h3 className="text-sm font-extrabold text-slate-900 mb-3 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-teal-700" />
          Tabla Rápida de Respuesta ante el Tribunal: ¿Qué pasa según Umbral y Decisión de Gerencia?
        </h3>
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-100 text-slate-700 font-bold uppercase border-b border-slate-200">
                <th className="py-2.5 px-3">Escenario del Desvío Sin Ajustar</th>
                <th className="py-2.5 px-3">Si Gerencia ACEPTA</th>
                <th className="py-2.5 px-3">Si Gerencia NO ACEPTA</th>
                <th className="py-2.5 px-3">¿Párrafo de Énfasis?</th>
                <th className="py-2.5 px-3">Acción en Legajo / Gobierno</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              <tr className="hover:bg-slate-50">
                <td className="py-2.5 px-3 font-bold">Menor al PAE (&lt; $8.311M aislado)</td>
                <td className="py-2.5 px-3 text-emerald-700 font-semibold">Favorable sin Salvedades</td>
                <td className="py-2.5 px-3 text-emerald-700 font-semibold">Favorable sin Salvedades</td>
                <td className="py-2.5 px-3 font-bold text-slate-500">NO</td>
                <td className="py-2.5 px-3">Claramente insignificante (NIA 450.5); no justifica reabrir el cierre.</td>
              </tr>
              <tr className="hover:bg-slate-50 bg-teal-50/30">
                <td className="py-2.5 px-3 font-bold">Entre PAE y ET ($8.311M – $83.111M) — ej. AJ-01 $28.340M</td>
                <td className="py-2.5 px-3 text-emerald-700 font-semibold">Favorable sin Salvedades</td>
                <td className="py-2.5 px-3 text-emerald-700 font-semibold">Favorable sin Salvedades</td>
                <td className="py-2.5 px-3 font-bold text-rose-700">NO (prohibido NIA 706)</td>
                <td className="py-2.5 px-3">Va a Planilla PAE, Anexo Carta de Representación (NIA 450.14) y Comité (NIA 260).</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-2.5 px-3 font-bold">Supera ET pero &lt; PM ($83.112M – $166.224M)</td>
                <td className="py-2.5 px-3 text-emerald-700 font-semibold">Favorable sin Salvedades</td>
                <td className="py-2.5 px-3 text-amber-800 font-semibold">Sigue Limpia (salvo factor cualitativo grave)</td>
                <td className="py-2.5 px-3 font-bold text-rose-700">NO</td>
                <td className="py-2.5 px-3">Exige ampliar muestreo/pruebas en ese rubro y documentar riesgo de agregación.</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-2.5 px-3 font-bold">Igual o Mayor a PM (≥ $166.225M) — ACOTADO</td>
                <td className="py-2.5 px-3 text-emerald-700 font-semibold">Vuelve a Limpia ($0)</td>
                <td className="py-2.5 px-3 text-amber-700 font-extrabold">Favorable CON Salvedades («Excepto por...»)</td>
                <td className="py-2.5 px-3 font-bold text-rose-700">NO (va Fundamento Salvedades)</td>
                <td className="py-2.5 px-3">NIA 705.7: Sección Opinión + Sección Fundamento cuantificando desvío.</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-2.5 px-3 font-bold">Igual o Mayor a PM (≥ $166.225M) — GENERALIZADO</td>
                <td className="py-2.5 px-3 text-emerald-700 font-semibold">Vuelve a Limpia ($0)</td>
                <td className="py-2.5 px-3 text-rose-700 font-extrabold">Opinión Adversa (o Abstención s/Alcance)</td>
                <td className="py-2.5 px-3 font-bold text-rose-700">NO (va Fundamento Adversa)</td>
                <td className="py-2.5 px-3">NIA 705.8 / 705.9: Compromete la razonabilidad integral de los EECC.</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-2.5 px-3 font-bold">Asunto clave SIN error contable, bien expuesto en Nota</td>
                <td className="py-2.5 px-3 text-emerald-700 font-semibold">Favorable sin Salvedades</td>
                <td className="py-2.5 px-3 text-emerald-700 font-semibold">Favorable sin Salvedades</td>
                <td className="py-2.5 px-3 font-extrabold text-sky-700">SÍ (NIA 706)</td>
                <td className="py-2.5 px-3">Único uso lícito del Párrafo de Énfasis: remitir a la Nota de los EECC.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
