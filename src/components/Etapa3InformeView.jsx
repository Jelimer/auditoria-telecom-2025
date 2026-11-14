import React, { useState, useEffect } from 'react';
import {
  Award,
  FileText,
  ShieldCheck,
  MailCheck,
  Printer,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  CalendarClock,
  Building2,
  Layers,
  ClipboardCheck,
  Calculator
} from 'lucide-react';
import { documentosEtapa3 } from '../data/etapas2y3Data';
import { proyectoMeta } from '../data/etapa1Data';
import { NormaTooltip } from './NormaTooltip';

export default function Etapa3InformeView({
  cciCalculados = [],
  ajustesState,
  onToggleAjusteAceptado,
  onNavigate,
  subTarget,
  subTargetTick
}) {
  // Orden cronológico de realización: 1) Carta CI -> 2) Memorando Conclusión -> 3) Carta Gerencia -> 4) Informe Final
  const [docActivo, setDocActivo] = useState('carta-ci'); // 'carta-ci' | 'memorando' | 'carta-gerencia' | 'informe'

  useEffect(() => {
    if (subTarget && ['carta-ci', 'memorando', 'carta-gerencia', 'informe'].includes(subTarget)) {
      setDocActivo(subTarget);
    }
  }, [subTarget, subTargetTick]);

  // Parámetros de significatividad establecidos en Etapa 1D (NIA 320 / Slosse)
  const MATERIALIDAD_GLOBAL = 166225; // PM: 1% s/ Activo Total ($16.622.552M)
  const ERROR_TOLERABLE = 83112; // ET: 50% de PM
  const UMBRAL_PAE = 8311; // PAE: 5% de ET

  const ajustesComputables = ajustesState.filter((a) => a.superaPAE);
  const ajustesMenores = ajustesState.filter((a) => !a.superaPAE);
  const ajustesPendientes = ajustesComputables.filter((a) => !a.aceptado);
  const totalAjustesComputables = ajustesComputables.reduce((s, a) => s + a.montoMillones, 0);
  const totalAjustado = ajustesComputables
    .filter((a) => a.aceptado)
    .reduce((s, a) => s + a.montoMillones, 0);
  const totalNoAjustado = ajustesPendientes.reduce((s, a) => s + a.montoMillones, 0);
  const impactoPatrimonialNoAjustado = ajustesPendientes.reduce(
    (s, a) => s + Math.abs(a.impactoPatrimonial?.resultadoEjercicio || 0),
    0
  );

  const esLimpiaEstricta = totalNoAjustado === 0;
  const esFavorableSinSalvedades = totalNoAjustado < MATERIALIDAD_GLOBAL;

  const RefPill = ({ label, view, sub = null, tone = 'slate' }) => {
    if (!onNavigate) return null;
    const tones = {
      slate:
        'bg-slate-100 text-slate-700 border-slate-300 hover:bg-indigo-50 hover:text-indigo-800 hover:border-indigo-300',
      teal: 'bg-teal-50 text-teal-800 border-teal-300 hover:bg-teal-100 hover:border-teal-400',
      amber: 'bg-amber-50 text-amber-900 border-amber-300 hover:bg-amber-100 hover:border-amber-400',
      indigo: 'bg-indigo-50 text-indigo-800 border-indigo-300 hover:bg-indigo-100 hover:border-indigo-400'
    };
    return (
      <button
        type="button"
        onClick={() => onNavigate(view, sub)}
        className={`no-print inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-bold border transition-colors cursor-pointer ${tones[tone] || tones.slate}`}
        title={`Navegar a ${label}`}
      >
        <span>{label}</span>
        <ArrowUpRight className="w-3 h-3 shrink-0" />
      </button>
    );
  };

  const cronologiaDocumentos = [
    {
      id: 'carta-ci',
      orden: 'Paso 1 • 12/02/2026',
      titulo: '1. Carta de Control Interno (NIA 265)',
      sub: 'Recomendaciones s/ los 5 CCI y hallazgos',
      badge: '5 Componentes'
    },
    {
      id: 'memorando',
      orden: 'Paso 2 • 18/02/2026',
      titulo: '2. Memorando Resumen de Auditoría',
      sub: 'Cierre Técnico, PAE (NIA 450) y NIA 560/570',
      badge: 'Cierre de Papeles'
    },
    {
      id: 'carta-gerencia',
      orden: 'Paso 3 • 20/02/2026 (Pre-Firma)',
      titulo: '3. Carta de Representación (NIA 580)',
      sub: 'Manifestaciones CEO/CFO y NIA 450.14',
      badge: 'Requisito Previo'
    },
    {
      id: 'informe',
      orden: 'Paso 4 Final • 20/02/2026',
      titulo: '4. Informe del Auditor Independiente',
      sub: 'NIAs (RT N° 32 FACPCE) • NIIF / CNV',
      badge: esLimpiaEstricta
        ? 'Opinión Favorable Limpia'
        : esFavorableSinSalvedades
        ? 'Favorable s/Salvedades (< PM)'
        : 'Con Salvedades por Desvío (> PM)'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Encabezado Etapa 3 */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <NormaTooltip
                code="RT 32"
                variant="pill"
                pillClassName="bg-indigo-800 text-lime-300 hover:bg-indigo-900"
                align="left"
                placement="bottom"
              />
              <span className="px-2.5 py-1 rounded-md text-xs font-extrabold bg-indigo-600 text-white">
                ETAPA 3 — CONCLUSIÓN, CIERRE TÉCNICO Y EMISIÓN DEL INFORME BAJO NIAs (RT N° 32 FACPCE)
              </span>
              <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-teal-50 text-teal-800 border border-teal-200">
                Emisora CNV bajo NIIF (IASB / RT N° 26)
              </span>
            </div>
            <h2 className="text-xl font-extrabold text-slate-900 mt-2">
              Secuencia Cronológica de Cierre: Carta de Control Interno, Memorando, Carta de Representación e Informe Final
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Ordenados secuencialmente por fecha de realización conforme a la doctrina de Carlos Slosse y las Normas Internacionales de Auditoría (NIAs) adoptadas mediante{' '}
              <strong className="text-slate-700">Resolución Técnica N° 32 de la FACPCE</strong> para entidades bajo oferta pública CNV ({proyectoMeta.cliente}).
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 no-print">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" /> Imprimir Documento Actual
            </button>
            {onNavigate && (
              <button
                onClick={() => onNavigate('resumen-integral')}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-teal-700 text-white text-xs font-bold hover:bg-teal-800 transition-colors cursor-pointer"
              >
                Ir a Hoja Final: Resumen Integral (3 Etapas) <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Selector de los 4 Documentos ordenados por Fecha de Realización */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-4 no-print">
          {cronologiaDocumentos.map((tab) => {
            const active = docActivo === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setDocActivo(tab.id)}
                className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                  active
                    ? 'bg-indigo-950 text-white border-indigo-950 shadow-sm ring-2 ring-indigo-400'
                    : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-white hover:border-indigo-400'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-1.5">
                    <span
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                        active ? 'bg-indigo-800 text-lime-300' : 'bg-slate-200 text-slate-700'
                      }`}
                    >
                      {tab.orden}
                    </span>
                    <span
                      className={`text-[10px] font-extrabold px-2 py-0.5 rounded ${
                        active
                          ? 'bg-indigo-600 text-white'
                          : tab.id === 'informe' && !esLimpiaEstricta
                          ? 'bg-amber-100 text-amber-900'
                          : 'bg-indigo-100 text-indigo-800'
                      }`}
                    >
                      {tab.badge}
                    </span>
                  </div>
                  <p className="text-xs font-extrabold mt-1">{tab.titulo}</p>
                </div>
                <p className={`text-[11px] mt-1.5 ${active ? 'text-indigo-200' : 'text-slate-500'}`}>
                  {tab.sub}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Barra interactiva de simulación de Ajustes (impacto NIA 450 / NIA 700 en vivo) */}
      <div
        className={`no-print rounded-2xl p-5 shadow-xs border-2 transition-colors ${
          esLimpiaEstricta
            ? 'bg-gradient-to-r from-slate-900 to-teal-950 border-teal-800 text-white'
            : 'bg-gradient-to-r from-slate-900 via-red-950 to-rose-950 border-red-500 text-white'
        }`}
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`text-[11px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded ${
                  esLimpiaEstricta ? 'bg-lime-400/20 text-lime-300' : 'bg-red-600 text-white'
                }`}
              >
                {esLimpiaEstricta
                  ? '¿Acepta la Gerencia registrar los ajustes? • Control PAE (NIA 450)'
                  : 'SIMULACIÓN ACTIVA: AJUSTE(S) NO REGISTRADO(S) POR LA GERENCIA'}
              </span>
            </div>
            <p className="text-xs text-slate-200 mt-1.5 leading-relaxed">
              Tildá o destildá si la Dirección acepta contabilizar los <strong>2 únicos ajustes ≥ PAE (${UMBRAL_PAE.toLocaleString('es-AR')}M)</strong> del trabajo: <strong>AJ-01</strong> ($28.340M en Bienes de Uso — único ajuste de los 3 rubros prioritarios) y <strong>AJ-04</strong> ($11.240M reclasificación neutra Flow — alcance ampliado). Destildándolos ves al instante en rojo qué cambia en el Informe y por qué.
            </p>
            <div className="flex flex-wrap items-center gap-3 mt-2 text-[11px] text-slate-300">
              <span>
                Propuesto ≥ PAE: <strong className="text-white font-mono">${totalAjustesComputables.toLocaleString('es-AR')}M</strong>
              </span>
              <span>•</span>
              <span>
                No Registrado Bruto:{' '}
                <strong className={`font-mono ${totalNoAjustado > 0 ? 'text-red-300' : 'text-emerald-300'}`}>
                  ${totalNoAjustado.toLocaleString('es-AR')}M
                </strong>
              </span>
              <span>•</span>
              <span>
                Impacto Neto en PN/Resultado:{' '}
                <strong className={`font-mono ${impactoPatrimonialNoAjustado > 0 ? 'text-red-300' : 'text-lime-300'}`}>
                  ${impactoPatrimonialNoAjustado.toLocaleString('es-AR')}M
                </strong>{' '}
                ({((totalNoAjustado / MATERIALIDAD_GLOBAL) * 100).toFixed(2).replace('.', ',')}% de PM ${MATERIALIDAD_GLOBAL.toLocaleString('es-AR')}M / ET ${ERROR_TOLERABLE.toLocaleString('es-AR')}M)
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            {ajustesComputables.map((aj) => (
              <button
                key={aj.id}
                type="button"
                onClick={() => onToggleAjusteAceptado(aj.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-extrabold border-2 transition-all cursor-pointer flex items-center gap-2 ${
                  aj.aceptado
                    ? 'bg-emerald-500/20 border-emerald-400 text-emerald-100 hover:bg-emerald-500/30'
                    : 'bg-red-600/40 border-red-400 text-red-100 hover:bg-red-600/60 ring-2 ring-red-400/50'
                }`}
                title={`Clic para cambiar si Gerencia acepta o rechaza ${aj.codigoAjuste}`}
              >
                <span
                  className={`inline-flex items-center justify-center w-4 h-4 rounded text-[11px] font-black ${
                    aj.aceptado ? 'bg-emerald-400 text-slate-950' : 'bg-red-500 text-white'
                  }`}
                >
                  {aj.aceptado ? '✓' : '✗'}
                </span>
                <span>
                  {aj.codigoAjuste} (${aj.montoMillones.toLocaleString('es-AR')}M • {aj.id === 'aj-1' ? 'Bienes de Uso' : 'Reclasif. Flow'}):{' '}
                  {aj.aceptado ? 'Aceptado' : 'No Registrado'}
                </span>
              </button>
            ))}
            <RefPill label="Ver #sec-pae" view="etapa2-ejecucion" sub="sec-pae" tone="teal" />
          </div>
        </div>

        {/* Cartel dinámico en rojo cuando hay desvíos sin registrar (o explicación rápida si están registrados) */}
        {!esLimpiaEstricta ? (
          <div className="mt-4 p-4 rounded-xl bg-red-900/70 border border-red-400 text-xs text-red-50 space-y-2">
            <p className="font-extrabold text-red-200 uppercase flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-red-300 shrink-0" />
              Qué cambia en el Informe y Cierre al NO registrarse ${totalNoAjustado.toLocaleString('es-AR')}M ({ajustesPendientes.map((p) => p.codigoAjuste).join(' + ')}) — y por qué:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-red-100 leading-relaxed">
              <li>
                <strong className="text-white">Tipo de Opinión (NO cambia — sigue Favorable sin Salvedades):</strong> El desvío sin ajustar ({((totalNoAjustado / MATERIALIDAD_GLOBAL) * 100).toFixed(2).replace('.', ',')}% de PM; impacto patrimonial neto ${impactoPatrimonialNoAjustado.toLocaleString('es-AR')}M) queda muy por debajo del <strong>Error Tolerable ($83.112M)</strong> y de la <strong>Materialidad Global ($166.225M)</strong>. Según la <NormaTooltip code="NIA 450" /> y <NormaTooltip code="NIA 700" />, no distorsiona significativamente los EECC consolidados en su conjunto (solo pasaría a <em>Opinión con Salvedades — <NormaTooltip code="NIA 705" /></em> si superara los $166.225M).
              </li>
              <li>
                <strong className="text-white">Lo que SÍ cambia en el Informe y Legajo de Cierre:</strong>{' '}
                {ajustesPendientes.some((a) => a.id === 'aj-1') &&
                  'Bienes de Uso queda en libros en $6.789.118M sin depurar los $28.340M obsoletos/siniestrados; '}
                {ajustesPendientes.some((a) => a.id === 'aj-4') &&
                  'Ventas y Costos Flow quedan expuestos en bruto (+$11.240M, efecto $0 en PN y Resultado); '}
                se activa la <strong>constancia <NormaTooltip code="NIA 450" /></strong> dentro del bloque <em>1. Opinión</em>, la <strong>Carta de Representación (<NormaTooltip code="NIA 450" />.14)</strong> incorpora obligatoriamente el anexo firmado por CEO/CFO declarando inmaterial el desvío no corregido, y se refuerza la comunicación al <strong>Directorio / Comité de Auditoría (CCI-02 / <NormaTooltip code="NIA 260" />)</strong>.
              </li>
            </ul>
          </div>
        ) : (
          <div className="mt-3 pt-2.5 border-t border-teal-800/80 text-[11px] text-teal-200 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
            <span>
              <strong>Estado actual (Los 2 aceptados):</strong> Con AJ-01 y AJ-04 registrados ($0 sin ajustar), los EECC quedan depurados y el dictamen es <strong>Favorable sin Salvedades (Limpia)</strong>. Destildá cualquiera arriba para ver el aviso en rojo y el detalle NIA 450.
            </span>
          </div>
        )}
      </div>

      {/* PASO 1 (12/02/2026): CARTA DE RECOMENDACIONES DE CONTROL INTERNO A LA GERENCIA (NIA 265 / SLOSSE) */}
      {docActivo === 'carta-ci' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs max-w-4xl mx-auto space-y-5">
          <div className="border-b border-slate-200 pb-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="px-2.5 py-0.5 rounded bg-amber-100 text-amber-900 text-xs font-extrabold inline-flex flex-wrap items-center gap-1">
                <span>PASO 1 DE CIERRE • 12/02/2026 — CARTA DE CONTROL INTERNO (</span>
                <NormaTooltip code="NIA 265" align="left" placement="bottom" />
                <span>/ SLOSSE)</span>
              </span>
              <span className="text-xs font-mono font-bold text-slate-500">
                Ref: Legajo Conclusión LC-01
              </span>
            </div>
            <h3 className="text-xl font-extrabold text-slate-950 mt-2">
              Carta con Recomendaciones sobre el Sistema de Control Interno
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              <strong>Destinatario:</strong> {documentosEtapa3.cartaControlInterno.destinatario} •{' '}
              <strong>Domicilio:</strong> {documentosEtapa3.cartaControlInterno.domicilio} •{' '}
              <strong>Fecha:</strong> {documentosEtapa3.cartaControlInterno.fecha}
            </p>
            <p className="text-[11px] font-semibold text-teal-800 mt-1">
              Encuadre Normativo: {documentosEtapa3.cartaControlInterno.norma}
            </p>
            <p className="text-xs text-slate-700 mt-2 leading-relaxed">
              {documentosEtapa3.cartaControlInterno.introduccion}
            </p>
          </div>

          <div className="space-y-3.5">
            {documentosEtapa3.cartaControlInterno.recomendaciones.map((rec, i) => {
              const cciLive = cciCalculados.find((c) => c.id === rec.cciId);
              const rcColor =
                cciLive?.rcLabel === 'ALTO'
                  ? 'bg-red-100 text-red-900 border-red-300'
                  : cciLive?.rcLabel === 'MEDIO'
                  ? 'bg-amber-100 text-amber-900 border-amber-300'
                  : cciLive?.rcLabel === 'BAJO'
                  ? 'bg-emerald-100 text-emerald-900 border-emerald-300'
                  : 'bg-slate-100 text-slate-800 border-slate-300';

              return (
                <div key={i} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="text-xs font-extrabold text-slate-900 uppercase bg-white px-3 py-1.5 rounded-lg border border-slate-200">
                      {rec.componenteBase}
                    </h4>
                    <span className={`px-2.5 py-1 rounded-lg text-[11px] font-extrabold border ${rcColor}`}>
                      {cciLive
                        ? `NC: ${cciLive.nc.toFixed(2).replace('.', ',')}% (${cciLive.positivas}/${cciLive.total} SÍ) — RC: ${cciLive.rcLabel}`
                        : rec.fallbackNC}
                    </span>
                  </div>

                  <div className="text-[11px] font-bold text-indigo-800 bg-indigo-50/70 px-2.5 py-1 rounded-md border border-indigo-200 inline-block">
                    Trazabilidad: {rec.preguntasCriticas}
                  </div>

                  <p className="text-xs text-slate-700 leading-relaxed">
                    <strong className="text-red-700">Debilidad / Observación Detectada:</strong>{' '}
                    {rec.observacion}
                  </p>
                  <p className="text-xs text-teal-950 bg-teal-50/70 p-2.5 rounded-lg border border-teal-200 leading-relaxed">
                    <strong className="text-teal-800">Recomendación de Auditoría Externa:</strong>{' '}
                    {rec.recomendacion}
                  </p>

                  {rec.refs && rec.refs.length > 0 && (
                    <div className="flex flex-wrap items-center gap-1.5 pt-1 no-print">
                      <span className="text-[10px] font-bold uppercase text-slate-400 mr-1">
                        Evidencia vinculada:
                      </span>
                      {rec.refs.map((r, j) => (
                        <RefPill key={j} label={r.label} view={r.view} sub={r.sub} tone="indigo" />
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-wrap justify-between items-center gap-3 text-xs text-slate-600">
            <span>Firmado por: <strong>GREBE — PISONERO DE BIASE</strong> (Contadores Públicos — U.C.P.)</span>
            <button
              onClick={() => setDocActivo('memorando')}
              className="no-print text-indigo-700 font-extrabold hover:underline cursor-pointer"
            >
              Continuar al Paso 2: Memorando Resumen de Auditoría (18/02/2026) →
            </button>
          </div>
        </div>
      )}

      {/* PASO 2 (18/02/2026): MEMORANDO RESUMEN DE AUDITORÍA */}
      {docActivo === 'memorando' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs max-w-4xl mx-auto space-y-5">
          <div className="border-b border-slate-200 pb-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="px-2.5 py-0.5 rounded bg-teal-100 text-teal-800 text-xs font-extrabold inline-flex flex-wrap items-center gap-1">
                <span>PASO 2 DE CIERRE • 18/02/2026 — ANTES DE EMITIR EL DICTAMEN (SLOSSE /</span>
                <NormaTooltip code="NIA 220" align="center" placement="bottom" />
                <span>&amp;</span>
                <NormaTooltip code="NIA 450" align="center" placement="bottom" />
                <span>)</span>
              </span>
              <span className="text-xs font-mono font-bold text-slate-500">
                Ref: Legajo Conclusión LC-02
              </span>
            </div>
            <h3 className="text-xl font-extrabold text-slate-950 mt-2">
              {documentosEtapa3.memorandoConclusion.titulo}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 text-xs bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              <p><strong>PARA:</strong> {documentosEtapa3.memorandoConclusion.para}</p>
              <p><strong>DE:</strong> {documentosEtapa3.memorandoConclusion.de}</p>
              <p><strong>CLIENTE:</strong> {documentosEtapa3.memorandoConclusion.cliente}</p>
              <p><strong>FECHA REALIZACIÓN:</strong> {documentosEtapa3.memorandoConclusion.fecha}</p>
              <p className="sm:col-span-2">
                <strong>PERÍODO HECHOS POSTERIORES (NIA 560):</strong>{' '}
                {documentosEtapa3.memorandoConclusion.periodoHechosPosteriores}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {documentosEtapa3.memorandoConclusion.secciones.map((sec, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50/70 border border-slate-200 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="text-sm font-extrabold text-teal-900">{sec.subtitulo}</h4>
                  {sec.normas && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-teal-100 text-teal-800">
                      {sec.normas}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">{sec.contenido}</p>
                {sec.refs && sec.refs.length > 0 && (
                  <div className="flex flex-wrap items-center gap-1.5 pt-1 no-print">
                    <span className="text-[10px] font-bold uppercase text-slate-400 mr-1">
                      Referencias cruzadas:
                    </span>
                    {sec.refs.map((r, j) => (
                      <RefPill key={j} label={r.label} view={r.view} sub={r.sub} tone="teal" />
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* 5. Matriz Comparativa PAE en Vivo (NIA 450) */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-sm font-extrabold text-slate-900 flex items-center gap-1.5">
                  <Calculator className="w-4 h-4 text-teal-700" />
                  5. Cuadro Resumen de Evaluación de Incorrecciones — Planilla PAE en Vivo (NIA 450)
                </h4>
                <RefPill label="Ir a Planilla PAE (#sec-pae)" view="etapa2-ejecucion" sub="sec-pae" tone="amber" />
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 border-b border-slate-200">
                      <th className="py-2 px-2.5 text-left font-extrabold">Código / PT</th>
                      <th className="py-2 px-2.5 text-left font-extrabold">Rubro y Naturaleza</th>
                      <th className="py-2 px-2.5 text-right font-extrabold">Importe ($M)</th>
                      <th className="py-2 px-2.5 text-right font-extrabold">Efecto PN/Res ($M)</th>
                      <th className="py-2 px-2.5 text-right font-extrabold">% s/ PM</th>
                      <th className="py-2 px-2.5 text-center font-extrabold">Estado Gerencia</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {ajustesState.map((aj) => {
                      const pctPM = ((aj.montoMillones / MATERIALIDAD_GLOBAL) * 100).toFixed(2).replace('.', ',');
                      const resImpact = aj.impactoPatrimonial?.resultadoEjercicio || 0;
                      return (
                        <tr key={aj.id} className={aj.superaPAE ? 'bg-white' : 'bg-slate-50/70 text-slate-500'}>
                          <td className="py-2 px-2.5 font-mono font-bold text-slate-900">
                            {aj.codigoAjuste}
                            <span className="block text-[10px] font-normal text-slate-500">{aj.refPT}</span>
                          </td>
                          <td className="py-2 px-2.5">
                            <span className="font-bold text-slate-800">{aj.rubro}</span>
                            <span className="block text-[11px] text-slate-500">{aj.tipo}</span>
                          </td>
                          <td className="py-2 px-2.5 text-right font-mono font-bold">
                            ${aj.montoMillones.toLocaleString('es-AR')}M
                          </td>
                          <td className="py-2 px-2.5 text-right font-mono">
                            {resImpact === 0 ? '$0 (Neutro)' : `$${resImpact.toLocaleString('es-AR')}M`}
                          </td>
                          <td className="py-2 px-2.5 text-right font-mono">{pctPM}%</td>
                          <td className="py-2 px-2.5 text-center">
                            {!aj.superaPAE ? (
                              <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-700 text-[10px] font-bold">
                                &lt; PAE ($8.311M)
                              </span>
                            ) : aj.aceptado ? (
                              <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-extrabold">
                                Registrado ✓
                              </span>
                            ) : (
                              <span className="px-2 py-0.5 rounded bg-red-100 text-red-800 text-[10px] font-extrabold">
                                Pendiente ✗
                              </span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr className="bg-slate-50 border-t-2 border-slate-200 font-extrabold text-slate-900">
                      <td className="py-2 px-2.5" colSpan={2}>
                        Total Incorrecciones No Registradas Computables (&ge; PAE)
                      </td>
                      <td className="py-2 px-2.5 text-right font-mono">
                        ${totalNoAjustado.toLocaleString('es-AR')}M
                      </td>
                      <td className="py-2 px-2.5 text-right font-mono">
                        ${impactoPatrimonialNoAjustado.toLocaleString('es-AR')}M
                      </td>
                      <td className="py-2 px-2.5 text-right font-mono">
                        {((totalNoAjustado / MATERIALIDAD_GLOBAL) * 100).toFixed(2).replace('.', ',')}%
                      </td>
                      <td className="py-2 px-2.5 text-center text-[11px]">
                        {totalNoAjustado < ERROR_TOLERABLE ? '< ET ($83.112M)' : totalNoAjustado < MATERIALIDAD_GLOBAL ? '< PM ($166.225M)' : '> PM'}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <p className="text-[11px] text-slate-500">
                Nota: Los 3 rubros prioritarios evaluados conjuntamente para la cátedra (PT-A, PT-E y PT-B) acumulan únicamente AJ-01 ($28.340M = 17,05% de PM y 34,10% de ET). Las partidas menores en {ajustesMenores.map((m) => m.codigoAjuste).join(', ')} (${ajustesMenores.reduce((s, m) => s + m.montoMillones, 0).toLocaleString('es-AR')}M) no superan el PAE ($8.311M).
              </p>
            </div>

            {/* 6. Cuadro Dinámico de Conclusión sobre Ajustes en el Memorando */}
            <div
              className={`p-4 rounded-xl border ${
                esFavorableSinSalvedades ? 'bg-emerald-50 border-emerald-200' : 'bg-rose-50 border-rose-300'
              }`}
            >
              <h4 className="text-xs font-extrabold uppercase text-slate-900 mb-1">
                6. Conclusión Global de Acumulación y Propuesta de Dictamen al Socio (NIA 450 / NIA 700 — Estado en Vivo)
              </h4>
              <p className="text-xs text-slate-800 leading-relaxed">
                {esLimpiaEstricta
                  ? `Habiendo la Gerencia de Telecom Argentina S.A. aceptado y contabilizado la totalidad de los ajustes ≥ PAE (${ajustesComputables.map((a) => `${a.codigoAjuste} $${a.montoMillones.toLocaleString('es-AR')}M`).join(' + ')}; total $${totalAjustado.toLocaleString('es-AR')}M), los saldos auditados quedan razonablemente expuestos conforme a NIIF. Recomendamos emitir una OPINIÓN FAVORABLE SIN SALVEDADES el día 20/02/2026 bajo NIAs (RT N° 32 FACPCE), previa obtención de la Carta de Representación (NIA 580).`
                  : esFavorableSinSalvedades
                  ? `Aun ante la falta de registración por la Dirección de partidas propuestas por un total bruto de $${totalNoAjustado.toLocaleString('es-AR')} millones (impacto patrimonial neto $${impactoPatrimonialNoAjustado.toLocaleString('es-AR')}M), dicho desvío residual permanece por debajo del Error Tolerable ($${ERROR_TOLERABLE.toLocaleString('es-AR')}M) y representa el ${((totalNoAjustado / MATERIALIDAD_GLOBAL) * 100).toFixed(2).replace('.', ',')}% de la Materialidad Global ($${MATERIALIDAD_GLOBAL.toLocaleString('es-AR')}M), sin generar distorsión significativa generalizada sobre los estados financieros consolidados tomados en su conjunto (NIA 450 / NIA 700 / RT N° 32). Corresponde emitir una OPINIÓN FAVORABLE SIN SALVEDADES dejando constancia expresa en la Carta de Representación (NIA 450.14) y comunicando las deficiencias al Directorio/Comité de Auditoría (CCI-02 / CCI-05).`
                  : `Atento a que los ajustes no registrados suman $${totalNoAjustado.toLocaleString('es-AR')} millones y SUPERAN la Materialidad Global ($${MATERIALIDAD_GLOBAL.toLocaleString('es-AR')}M), se recomienda emitir una OPINIÓN CON SALVEDADES (NIA 705) por incorrección material en medición y exposición bajo NIIF.`}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-wrap justify-between items-center gap-3 text-xs text-slate-600">
            <span>Elaborado por: <strong>GREBE — PISONERO DE BIASE</strong> (U.C.P.)</span>
            <button
              onClick={() => setDocActivo('carta-gerencia')}
              className="no-print text-indigo-700 font-extrabold hover:underline cursor-pointer"
            >
              Continuar al Paso 3: Carta de Representación de la Dirección — NIA 580 (20/02/2026) →
            </button>
          </div>
        </div>
      )}

      {/* PASO 3 (20/02/2026 PRE-FIRMA): CARTA DE REPRESENTACIÓN DE LA DIRECCIÓN (NIA 580) */}
      {docActivo === 'carta-gerencia' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs max-w-4xl mx-auto space-y-5">
          <div className="border-b border-slate-200 pb-4 space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="px-2.5 py-0.5 rounded bg-purple-100 text-purple-800 text-xs font-extrabold inline-flex flex-wrap items-center gap-1">
                <span>PASO 3 DE CIERRE • 20/02/2026 (MISMA FECHA DEL INFORME —</span>
                <NormaTooltip code="NIA 580" align="left" placement="bottom" />
                <span>.14)</span>
              </span>
              <span className="text-xs font-mono font-bold text-slate-500">
                Ref: Legajo Conclusión LC-03
              </span>
            </div>
            <h3 className="text-xl font-extrabold text-slate-950">
              Carta de Representación de la Dirección de Telecom Argentina S.A.
            </h3>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-xs space-y-1">
              <p className="font-bold text-slate-900">{documentosEtapa3.cartaRepresentacion.membreteCliente}</p>
              <p className="text-slate-700">
                <strong>Dirigida a:</strong> {documentosEtapa3.cartaRepresentacion.destinatario}
              </p>
              <p className="text-slate-700">
                <strong>Firmantes:</strong> {documentosEtapa3.cartaRepresentacion.firmantes} •{' '}
                <strong>Fecha:</strong> {documentosEtapa3.cartaRepresentacion.fecha}
              </p>
              <p className="text-[11px] font-semibold text-purple-800">
                Normativa Aplicable: {documentosEtapa3.cartaRepresentacion.norma}
              </p>
            </div>
          </div>

          {/* Banner dinámico NIA 450.14 sobre estado de ajustes PAE */}
          <div
            className={`p-3.5 rounded-xl border text-xs ${
              esLimpiaEstricta ? 'bg-emerald-50 border-emerald-200 text-emerald-950' : 'bg-amber-50 border-amber-200 text-amber-950'
            }`}
          >
            <p className="font-extrabold">
              Anexo de Manifestaciones s/ Planilla de Ajustes Propuestos (<NormaTooltip code="NIA 450" />.14 — Estado en Vivo):
            </p>
            <p className="mt-1 leading-relaxed">
              {esLimpiaEstricta
                ? `La Dirección confirma haber contabilizado al 31/12/2025 la totalidad de los ajustes ≥ PAE (${ajustesComputables.map((a) => `${a.codigoAjuste}: $${a.montoMillones.toLocaleString('es-AR')}M`).join(' y ')}), restando únicamente partidas menores debajo del PAE (${ajustesMenores.map((m) => `${m.codigoAjuste} $${m.montoMillones.toLocaleString('es-AR')}M`).join(', ')}) que declara inmateriales en conjunto.`
                : `La Dirección adjunta a esta Carta el detalle de las diferencias propuestas no contabilizadas por $${totalNoAjustado.toLocaleString('es-AR')}M (${ajustesPendientes.map((a) => `${a.codigoAjuste}: $${a.montoMillones.toLocaleString('es-AR')}M`).join(', ')}), manifestando formalmente que su efecto individual y agregado no distorsiona significativamente los Estados Financieros Consolidados al 31/12/2025.`}
            </p>
          </div>

          <div className="space-y-3">
            {documentosEtapa3.cartaRepresentacion.puntosClave.map((punto, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs text-slate-700"
              >
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <div className="flex-1 space-y-1.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-extrabold text-slate-900">{punto.titulo}</span>
                    <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-900 text-[10px] font-bold">
                      {punto.norma}
                    </span>
                  </div>
                  <p className="leading-relaxed">{punto.texto}</p>
                  {punto.refView && (
                    <div className="no-print pt-0.5">
                      <RefPill label={punto.refLabel} view={punto.refView} sub={punto.refSub} tone="slate" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-wrap justify-between items-center gap-3 text-xs text-slate-600">
            <span>Recibida conforme por: <strong>GREBE — PISONERO DE BIASE</strong> (Contadores Públicos — U.C.P.)</span>
            <button
              onClick={() => setDocActivo('informe')}
              className="no-print text-indigo-700 font-extrabold hover:underline cursor-pointer"
            >
              Continuar al Paso 4 (Último): Informe del Auditor Independiente bajo NIA (RT N° 32) →
            </button>
          </div>
        </div>
      )}

      {/* PASO 4 FINAL (20/02/2026): INFORME DE AUDITORÍA EMITIDO POR LOS AUDITORES INDEPENDIENTES (NIAs / RT N° 32 FACPCE) */}
      {docActivo === 'informe' && (
        <div className="space-y-5 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border border-slate-300 p-8 sm:p-10 shadow-sm space-y-5 text-slate-800 leading-relaxed">
            <div className="text-center border-b-2 border-slate-800 pb-5">
              <p className="text-xs font-extrabold uppercase tracking-widest text-teal-800">
                PASO 4 FINAL (CULMINACIÓN DE LA AUDITORÍA) • NORMAS INTERNACIONALES DE AUDITORÍA (NIAs — RT N° 32 FACPCE)
              </p>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 mt-1">
                INFORME DE AUDITORÍA EMITIDO POR LOS AUDITORES INDEPENDIENTES
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Sobre los Estados Financieros Consolidados de Telecom Argentina S.A. correspondientes al ejercicio finalizado el 31 de diciembre de 2025
              </p>
            </div>

            <div className="text-xs sm:text-sm space-y-5">
              <p className="font-bold text-slate-900 leading-snug">
                A los Señores Accionistas, Presidente y Directores de
                <br />
                TELECOM ARGENTINA S.A.
                <br />
                CUIT N° 30-63945373-8
                <br />
                Domicilio Legal: Gral. Hornos 690 — Ciudad Autónoma de Buenos Aires
              </p>

              <h4 className="text-sm font-extrabold uppercase text-slate-950 border-b border-slate-300 pb-1.5 pt-1">
                I. Informe sobre la auditoría de los estados financieros consolidados
              </h4>

              {/* 1. OPINIÓN (NIA 700 / NIA 705) */}
              <div
                className={`p-4 rounded-xl border ${
                  esFavorableSinSalvedades ? 'bg-emerald-50/50 border-emerald-200' : 'bg-rose-50/70 border-rose-300'
                }`}
              >
                <h5 className="font-extrabold text-slate-950 uppercase text-xs mb-2">
                  1. {esFavorableSinSalvedades ? 'Opinión (Favorable sin Salvedades — NIA 700)' : 'Opinión con Salvedades (NIA 705)'}
                </h5>
                <p className="text-slate-800">
                  Hemos auditado los estados financieros consolidados de <strong>TELECOM ARGENTINA S.A.</strong> y sus sociedades controladas (en adelante, indistintamente, la «Sociedad» o el «Grupo»), los cuales comprenden el estado de situación financiera consolidado al <strong>31 de diciembre de 2025</strong>, los estados consolidados de resultados, del resultado integral, de cambios en el patrimonio y de flujos de efectivo correspondientes al ejercicio finalizado en esa fecha, y las notas explicativas seleccionadas a los estados financieros consolidados que incluyen políticas contables materiales y otra información explicativa.
                </p>
                {esFavorableSinSalvedades ? (
                  <div className="mt-2.5 space-y-2">
                    <p className="font-medium text-emerald-950">
                      En nuestra opinión, los estados financieros consolidados adjuntos presentan razonablemente, en todos sus aspectos significativos, la situación financiera consolidada del Grupo al <strong>31 de diciembre de 2025</strong>, así como su desempeño financiero consolidado y los flujos de efectivo consolidados correspondientes al ejercicio finalizado en esa fecha, de conformidad con las <strong>Normas de contabilidad NIIF emitidas por el Consejo de Normas Internacionales de Contabilidad (IASB)</strong>, en moneda homogénea de cierre (NIC 29) y las normas pertinentes de la Comisión Nacional de Valores (CNV).
                    </p>
                    {!esLimpiaEstricta && (
                      <div className="p-3 rounded-lg bg-red-50 border-2 border-red-300 text-xs text-red-950 space-y-1">
                        <p className="font-extrabold text-red-800 uppercase">
                          Impacto en el Dictamen y Cierre por Incorrecciones NO Registradas ({ajustesPendientes.map((a) => a.codigoAjuste).join(' + ')} — NIA 450):
                        </p>
                        <p className="leading-relaxed">
                          Los desvíos propuestos no registrados suman <strong>${totalNoAjustado.toLocaleString('es-AR')} millones</strong> brutos (impacto patrimonial neto <strong>${impactoPatrimonialNoAjustado.toLocaleString('es-AR')}M</strong>, equivalente al {((totalNoAjustado / MATERIALIDAD_GLOBAL) * 100).toFixed(2).replace('.', ',')}% de la PM de $166.225M). <strong>Por qué no modifica la opinión:</strong> al ubicarse por debajo del Error Tolerable ($83.112M) y de la Materialidad Global ($166.225M), no produce distorsión significativa generalizada en los estados financieros consolidados, por lo que la opinión se mantiene <strong>Favorable sin Salvedades</strong> (requiriendo únicamente constancia anexa en la Carta de Representación — NIA 450.14 y comunicación al Comité de Auditoría).
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="mt-2.5 font-medium text-rose-950">
                    En nuestra opinión, <strong>excepto por los efectos de las cuestiones descritas en la sección «Fundamento de la opinión con salvedades»</strong> (ajustes propuestos no registrados por un total de ${totalNoAjustado.toLocaleString('es-AR')} millones que superan la Materialidad Global de $166.225M), los estados financieros consolidados adjuntos presentan razonablemente, en todos sus aspectos significativos, la situación financiera consolidada de <strong>Telecom Argentina S.A.</strong> al 31 de diciembre de 2025, de conformidad con las Normas de contabilidad NIIF emitidas por el IASB.
                  </p>
                )}
              </div>

              {/* 2. FUNDAMENTO DE LA OPINIÓN (NIA 700 / RT N° 32 FACPCE) */}
              <div>
                <h5 className="font-extrabold text-slate-950 uppercase text-xs mb-1.5">
                  2. {esFavorableSinSalvedades ? 'Fundamento de la opinión' : 'Fundamento de la opinión con salvedades'}
                </h5>
                {!esFavorableSinSalvedades && (
                  <div className="mb-2.5 p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-900 space-y-1">
                    <p className="font-bold">Desvíos detectados pendientes de registración contable al cierre:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      {ajustesPendientes.map((ap) => (
                        <li key={ap.id}>
                          <strong>{ap.rubro} ({ap.codigoAjuste} — ${ap.montoMillones.toLocaleString('es-AR')} millones):</strong>{' '}
                          {ap.descripcionHallazgo}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <p className="text-xs sm:text-[13px]">
                  Hemos llevado a cabo nuestra auditoría de conformidad con las <strong>Normas Internacionales de Auditoría (NIAs)</strong>. Dichas normas fueron adoptadas como normas de auditoría en Argentina mediante la <strong>Resolución Técnica N° 32 de la Federación Argentina de Consejos Profesionales de Ciencias Económicas (FACPCE)</strong>, tal y como fueron aprobadas por el Consejo de Normas Internacionales de Auditoría y Aseguramiento (IAASB por su sigla en inglés). Nuestras responsabilidades de acuerdo con dichas normas se describen más adelante en la sección <em>«Responsabilidades de los auditores en relación con la auditoría de los estados financieros consolidados»</em> de nuestro informe. Consideramos que la evidencia de auditoría que hemos obtenido proporciona una base suficiente y adecuada para nuestra opinión.
                </p>
              </div>

              {/* 3. INDEPENDENCIA (Sección autónoma obligatoria NIA 700.28c / IESBA EIP) */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <h5 className="font-extrabold text-slate-950 uppercase text-xs mb-1">
                  3. Independencia (Código IESBA para Entidades de Interés Público — NIA 700)
                </h5>
                <p className="text-xs text-slate-700">
                  Somos independientes del Grupo de conformidad con el <strong>Código Internacional de Ética para Profesionales de la Contabilidad (incluidas las Normas Internacionales de Independencia)</strong> emitido por el Consejo de Normas Internacionales de Ética para Contadores (<strong>Código del IESBA</strong>) aplicable a las auditorías de estados financieros de <strong>entidades de interés público</strong>, junto con los requerimientos de ética que son aplicables a nuestras auditorías de estados financieros en la Ciudad Autónoma de Buenos Aires (<strong>Código Local</strong>) y las resoluciones de la CNV, y hemos cumplido las demás responsabilidades de ética de conformidad con el Código del IESBA y el Código Local.
                </p>
              </div>

              {/* 4. CUESTIONES CLAVE DE LA AUDITORÍA (KAM - NIA 701) */}
              <div>
                <h5 className="font-extrabold text-slate-950 uppercase text-xs mb-1.5">
                  4. Cuestiones clave de la auditoría (Key Audit Matters — NIA 701)
                </h5>
                <p className="text-xs mb-2.5 text-slate-700">
                  Las cuestiones clave de la auditoría son aquellas cuestiones que, según nuestro juicio profesional, han sido de la mayor significatividad en nuestra auditoría de los estados financieros consolidados del período actual. Estas cuestiones han sido tratadas en el contexto de nuestra auditoría en su conjunto y en la formación de nuestra opinión, sin expresar una opinión por separado sobre ellas:
                </p>
                <div className="space-y-3 text-xs">
                  {/* KAM A */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="font-extrabold text-teal-900">
                        a) Recuperabilidad del valor llave de negocios — UGE Redes Personal ($4.443.998M s/ Nota 8; Valor Recuperable DCF $12.774.695M)
                      </p>
                      <div className="flex flex-wrap gap-1.5 no-print">
                        <RefPill label="PT-F1 (DCF UGE)" view="etapa2-ejecucion" sub="pt-f1" tone="teal" />
                      </div>
                    </div>
                    <p className="text-slate-700">
                      <strong>Descripción del riesgo:</strong> Al 31/12/2025 el valor llave de negocios consolidado asciende a $4.443.998M (26,73% del Activo Total), exigiendo prueba anual de deterioro por NIC 36 mediante flujos de fondos descontados (valor en uso) altamente sensibles a tasas de descuento (WACC), crecimiento a perpetuidad e inflación/tipo de cambio.
                    </p>
                    <p className="text-slate-700">
                      <strong>Cómo se trató en la auditoría:</strong> Con la participación de nuestros especialistas en valuación (NIA 620), evaluamos la integridad matemática del modelo DCF de la UGE Redes Personal ($12.774.695M frente a valor en libros asignado de $12.439.729M; cobertura positiva o <em>headroom</em> de $334.966M), desafiamos la tasa WACC real post-impuestos (11,85%), la perpetuidad (1,5%) y los supuestos de CAPEX 5G, verificando además la revelación de sensibilidad (+100 bps WACC) en Nota 8 y Nota 3.u.1.
                    </p>
                  </div>

                  {/* KAM B */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="font-extrabold text-teal-900">
                        b) Combinación de Negocios TMA (NIIF 3 Nota 29), Bienes de Uso ($6.789.118M Nota 9) y Activos Intangibles ($2.671.525M Nota 10)
                      </p>
                      <div className="flex flex-wrap gap-1.5 no-print">
                        <RefPill label="PT-A1 (Obras)" view="etapa2-ejecucion" sub="pt-a1" tone="teal" />
                        <RefPill label="PT-A4 (Globales)" view="etapa2-ejecucion" sub="pt-a4" tone="teal" />
                        <RefPill label="PT-E1 (ENACOM)" view="etapa2-ejecucion" sub="pt-e1" tone="teal" />
                        <RefPill label="PT-E2 (Globales)" view="etapa2-ejecucion" sub="pt-e2" tone="teal" />
                        <RefPill label="AJ-01 (#sec-pae)" view="etapa2-ejecucion" sub="sec-pae" tone="amber" />
                      </div>
                    </div>
                    <p className="text-slate-700">
                      <strong>Descripción del riesgo:</strong> El Grupo incorporó al 24/02/2025 activos netos de Telefónica Móviles Argentina S.A. (TMA) bajo NIIF 3 ($1.332.961M en PP&E y $274.183M en Intangibles — Nota 29) y gestiona una infraestructura de capital intensivo ($9.460.643M entre PP&E e Intangibles) con Riesgo de Control Alto en archivo de obras y tecnología (CCI-01 38,46% / CCI-05 47,62%).
                    </p>
                    <p className="text-slate-700">
                      <strong>Cómo se trató en la auditoría:</strong> Auditamos el <em>Purchase Price Allocation</em> (PPA) de TMA, inspeccionamos físicamente 16 Data Centers y 85 radiobases 5G (PT-A1), verificamos titularidad dominial en RPI/RNPA (PT-A3) y licencias ENACOM/INPI (PT-E1), y ejecutamos Pruebas Globales de Amortización (PP&E $1.533.091M; Intangibles $234.722M) y Valor Residual con desvío aritmético $0. Complementariamente, pruebas de detalle técnicas detectaron bajas omitidas en SAP FI-AA consolidadas en <strong>AJ-01 por $28.340M</strong> ($21.450M centrales analógicas obsoletas en PT-A4 + $6.890M fibra vandalizada en PT-A1).
                    </p>
                  </div>

                  {/* KAM C */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="font-extrabold text-teal-900">
                        c) Ingresos Convergentes NIIF 15 ($8.328.814M Nota 24) y Recuperabilidad de Créditos por Ventas / Previsión NIIF 9 ($800.128M netos Nota 5)
                      </p>
                      <div className="flex flex-wrap gap-1.5 no-print">
                        <RefPill label="PT-B1/B3 (Créditos)" view="etapa2-ejecucion" sub="pt-b3" tone="teal" />
                        <RefPill label="PT-D3 (Flow AJ-04)" view="etapa2-ejecucion" sub="pt-d3" tone="amber" />
                      </div>
                    </div>
                    <p className="text-slate-700">
                      <strong>Descripción del riesgo:</strong> Alto volumen de facturación convergente con interfaces heredadas post-fusión, juicios de Agente vs. Principal en contenidos Flow (NIIF 15) y crecimiento interanual de créditos (+105,25%, DSO 35,02 días) sujeto al modelo de pérdida crediticia esperada (NIIF 9).
                    </p>
                    <p className="text-slate-700">
                      <strong>Cómo se trató en la auditoría:</strong> Evaluamos CGTI en SAP BRIM/ECC, ejecutamos prueba analítica Parque × ARPU y corte B2B Personal Tech, circularizamos 65 clientes corporativos (PT-B1) y reprocesamos el 100% del padrón de antigüedad via TAACs ($1.071.047M brutos) verificando que la Previsión $(270.919)M cubre íntegramente la mora &gt; 180 días (PT-B3 conforme $0). Se propuso la reclasificación neutra <strong>AJ-04 por $11.240M</strong> en acuerdos de terceros Flow (PT-D3).
                    </p>
                  </div>
                </div>
              </div>

              {/* 5. OTRA INFORMACIÓN (NIA 720) */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <h5 className="font-extrabold text-slate-950 uppercase text-xs mb-1">
                  5. Información que acompaña a los estados financieros consolidados (“otra información” — NIA 720)
                </h5>
                <p className="text-xs text-slate-700">
                  La otra información comprende la <strong>Memoria Anual Integrada y la Reseña Informativa</strong> preparadas por el Directorio, pero no incluye los estados financieros consolidados ni nuestro informe de auditoría correspondiente. Nuestra opinión sobre los estados financieros consolidados no cubre la otra información y no expresamos ninguna forma de conclusión que proporcione un grado de seguridad sobre ésta. En relación con nuestra auditoría, nuestra responsabilidad es leer la otra información y considerar si existe una incongruencia material entre ésta y los estados financieros consolidados o nuestro conocimiento obtenido en la auditoría. Si concluyéramos que existe una incorrección material, estamos obligados a informar de ello. <strong>No tenemos nada que informar al respecto.</strong>
                </p>
              </div>

              {/* 6. RESPONSABILIDADES DEL DIRECTORIO Y DEL COMITÉ DE AUDITORÍA (NIA 700) */}
              <div>
                <h5 className="font-extrabold text-slate-950 uppercase text-xs mb-1">
                  6. Responsabilidades del Directorio y del Comité de Auditoría en relación con los estados financieros consolidados
                </h5>
                <p className="text-xs text-slate-700 leading-relaxed">
                  El Directorio de la Sociedad es responsable de la preparación y presentación razonable de los estados financieros consolidados adjuntos de conformidad con las Normas de contabilidad NIIF emitidas por el IASB, y del control interno que el Directorio considere necesario para permitir la preparación de estados financieros consolidados libres de incorrección material, debida a fraude o error. En la preparación de los estados financieros consolidados, el Directorio es responsable de la evaluación de la capacidad del Grupo para continuar como empresa en funcionamiento, revelando, según corresponda, las cuestiones relacionadas con la empresa en funcionamiento y utilizando el principio contable de empresa en funcionamiento, excepto si el Directorio tiene intención de liquidar el Grupo o de cesar sus operaciones, o bien no exista otra alternativa realista. El <strong>Comité de Auditoría de la Sociedad</strong> es responsable de la supervisión del proceso de información financiera del Grupo.
                </p>
              </div>

              {/* 7. RESPONSABILIDADES DE LOS AUDITORES (NIA 700 / NIA 570 / NIA 600) */}
              <div>
                <h5 className="font-extrabold text-slate-950 uppercase text-xs mb-1.5">
                  7. Responsabilidades de los auditores en relación con la auditoría de los estados financieros consolidados (NIA 700 / NIA 570 / NIA 600)
                </h5>
                <p className="text-xs text-slate-700 mb-2">
                  Nuestros objetivos son obtener una seguridad razonable de que los estados financieros consolidados en su conjunto están libres de incorrección material, debida a fraude o error, y emitir un informe de auditoría que contiene nuestra opinión. Seguridad razonable es un alto grado de seguridad, pero no garantiza que una auditoría realizada de conformidad con las NIAs siempre detecte una incorrección material cuando existe. Como parte de una auditoría de conformidad con las NIAs, aplicamos nuestro juicio profesional y mantenemos una actitud de escepticismo profesional durante toda la auditoría. También:
                </p>
                <ul className="list-disc pl-5 text-xs text-slate-700 space-y-1.5">
                  <li>
                    Identificamos y evaluamos los riesgos de incorrección material en los estados financieros consolidados, debida a fraude o error, diseñamos y aplicamos procedimientos de auditoría para responder a dichos riesgos y obtenemos evidencia de auditoría suficiente y adecuada para proporcionar una base para nuestra opinión.
                  </li>
                  <li>
                    Obtenemos conocimiento del control interno relevante para la auditoría con el fin de diseñar procedimientos de auditoría que sean adecuados en función de las circunstancias y no con la finalidad de expresar una opinión sobre la eficacia del control interno del Grupo.
                  </li>
                  <li>
                    Evaluamos lo adecuado de las políticas contables aplicadas y la razonabilidad de las estimaciones contables y la correspondiente información revelada por el Directorio (<NormaTooltip code="NIA 540" />).
                  </li>
                  <li>
                    Concluimos sobre lo adecuado de la utilización, por el Directorio, del principio contable de <strong>empresa en funcionamiento</strong> y, basándonos en la evidencia obtenida, si existe o no una incertidumbre material relacionada con hechos o con condiciones que puedan generar dudas significativas sobre la capacidad del Grupo para continuar como empresa en funcionamiento (<NormaTooltip code="NIA 570" />).
                  </li>
                  <li>
                    Evaluamos la presentación global, la estructura y el contenido de los estados financieros consolidados, incluida la información revelada, y si representan las transacciones y hechos subyacentes de un modo que logren la presentación razonable.
                  </li>
                  <li>
                    Obtenemos evidencia de auditoría suficiente y adecuada en relación con la información financiera de las entidades o actividades de negocio dentro del Grupo para expresar una opinión sobre los estados financieros consolidados (<strong>Auditoría de Grupos — <NormaTooltip code="NIA 600" /></strong>), siendo los únicos responsables de nuestra opinión de auditoría.
                  </li>
                  <li>
                    Nos comunicamos con el <strong>Comité de Auditoría</strong> en relación con, entre otras cuestiones, el alcance y el momento de realización de la auditoría y los hallazgos significativos, incluida cualquier deficiencia significativa en el control interno (Carta CI LC-01), nuestra declaración de independencia y las cuestiones clave de la auditoría (KAM).
                  </li>
                </ul>
              </div>

              {/* II. INFORME SOBRE OTROS REQUERIMIENTOS LEGALES Y REGLAMENTARIOS */}
              <h4 className="text-sm font-extrabold uppercase text-slate-950 border-b border-slate-300 pb-1.5 pt-2">
                II. Informe sobre otros requerimientos legales y reglamentarios (CNV / LGS N° 19.550 / SIPA / UIF)
              </h4>
              <ol className="list-[lower-alpha] pl-5 text-xs text-slate-700 space-y-2">
                <li>
                  Los estados financieros consolidados adjuntos han sido transcriptos en el libro <em>«Inventarios y Balances»</em> y cumplen, en lo que es materia de nuestra competencia, con lo dispuesto en la <strong>Ley General de Sociedades N° 19.550</strong> y en las resoluciones pertinentes de la Comisión Nacional de Valores (CNV).
                </li>
                <li>
                  Los estados financieros separados y consolidados de <strong>Telecom Argentina S.A.</strong> surgen de registros contables llevados, en sus aspectos formales, de conformidad con las disposiciones legales vigentes y las condiciones de seguridad e integridad autorizadas por la CNV (Sistema ERP SAP).
                </li>
                <li>
                  Según surge de los registros contables de la Sociedad al <strong>31 de diciembre de 2025</strong>, la deuda devengada a favor del <strong>Sistema Integrado Previsional Argentino (SIPA)</strong> en concepto de aportes y contribuciones previsionales ascendía a <strong>$33.699.737.311</strong>, no siendo exigible a esa fecha.
                </li>
                <li>
                  En cumplimiento del <strong>art. 21°, inc. b), Capítulo III, Sección VI, Título II de las Normas de la CNV (T.O. 2013 y modif.)</strong>, informamos que el total de honorarios facturados en concepto de servicios de auditoría externa correspondientes al ejercicio finalizado el 31 de diciembre de 2025 ($80.683.020 s/ presupuesto CPCECABA) representa: <strong>d.1) el 100%</strong> sobre el total de honorarios facturados a Telecom Argentina S.A. por todo concepto; <strong>d.2) el 100%</strong> sobre los honorarios por servicios de auditoría y relacionados facturados al grupo económico; y <strong>d.3) el 100%</strong> sobre el total de honorarios facturados por todo concepto a Telecom Argentina S.A., su sociedad controlante, controladas y vinculadas, sin prestación de servicios distintos que comprometan la independencia bajo el Código del IESBA.
                </li>
                <li>
                  Hemos aplicado los procedimientos sobre prevención de lavado de activos y financiación del terrorismo previstos en las normas profesionales correspondientes emitidas por la FACPCE y resoluciones vigentes de la Unidad de Información Financiera (UIF / Res. 420/11), sin observaciones significativas que informar al cierre.
                </li>
              </ol>

              {/* Pie de Firma + Trazabilidad */}
              <div className="pt-6 border-t border-slate-300 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-xs">
                <div className="space-y-1.5">
                  <p className="font-bold text-slate-900">
                    Ciudad Autónoma de Buenos Aires, 20 de febrero de 2026
                  </p>
                  <p className="text-slate-500">
                    Papeles de Trabajo respaldatorios: PT-A, PT-E, PT-B, PT-C, PT-D, PT-F y Legajo Conclusión LC-01 a LC-03
                  </p>
                  <div className="flex flex-wrap gap-1.5 no-print pt-1">
                    <RefPill label="PT-A (PP&E)" view="etapa2-ejecucion" sub="pt-a" tone="teal" />
                    <RefPill label="PT-E (Intang.)" view="etapa2-ejecucion" sub="pt-e" tone="teal" />
                    <RefPill label="PT-B (Créditos)" view="etapa2-ejecucion" sub="pt-b" tone="teal" />
                    <RefPill label="PT-C (Deuda)" view="etapa2-ejecucion" sub="pt-c" tone="slate" />
                    <RefPill label="PT-D (Ventas)" view="etapa2-ejecucion" sub="pt-d" tone="slate" />
                    <RefPill label="PT-F (Llave)" view="etapa2-ejecucion" sub="pt-f" tone="slate" />
                    <RefPill label="Planilla PAE" view="etapa2-ejecucion" sub="sec-pae" tone="amber" />
                  </div>
                </div>
                <div className="text-right border-t-2 border-slate-800 pt-2 px-4 shrink-0">
                  <p className="font-extrabold text-slate-950 uppercase">GREBE — PISONERO DE BIASE</p>
                  <p className="text-slate-600 font-semibold">Contadores Públicos (U.C.P. / Cátedra de Auditoría)</p>
                  <p className="text-[11px] text-teal-700 font-bold">Auditores Externos Independientes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Nota Pedagógica Completa para Defensa Oral: NIAs RT 32, Diferencias Word vs. Web vs. EECC Real y Preguntas de Cátedra */}
          <div className="no-print bg-indigo-950 text-white rounded-2xl p-5 sm:p-6 shadow-xs space-y-5">
            <div className="space-y-2.5">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-lime-400 shrink-0" />
                <h4 className="text-sm sm:text-base font-extrabold text-lime-300">
                  Guía de Defensa Oral del Informe Final: Qué saber y el porqué de cada diferencia (Word AE 4 vs. Plataforma Web vs. EECC Real CNV)
                </h4>
              </div>
              <p className="text-xs text-indigo-100 leading-relaxed">
                Aunque en la cursada se estudia el proceso general de Slosse y la <strong>RT N° 37 (modif. RT N° 53)</strong> para entes locales, <strong>Telecom Argentina S.A.</strong> es una emisora bajo oferta pública de la <strong>CNV</strong> que aplica <strong>NIIF completas (RT N° 26)</strong>. Por ello, su dictamen se rige obligatoriamente por las <strong>Normas Internacionales de Auditoría (<NormaTooltip code="RT 32" />)</strong>, presentando 5 rasgos distintivos:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2.5 text-xs text-indigo-100">
                <div className="p-2.5 rounded-lg bg-indigo-900/60 border border-indigo-700">
                  <strong className="text-white block mb-0.5">1. Opinión NIIF (IASB):</strong> Opina conforme a «Normas de contabilidad NIIF emitidas por el IASB» (<NormaTooltip code="NIA 700" />).
                </div>
                <div className="p-2.5 rounded-lg bg-indigo-900/60 border border-indigo-700">
                  <strong className="text-white block mb-0.5">2. Fundamento IAASB:</strong> Cita expresamente las NIAs aprobadas por el IAASB y adoptadas en Argentina por <NormaTooltip code="RT 32" />.
                </div>
                <div className="p-2.5 rounded-lg bg-indigo-900/60 border border-indigo-700">
                  <strong className="text-white block mb-0.5">3. Independencia EIP:</strong> Sección autónoma citando el <em>Código del IESBA</em> para entidades de interés público + Código Local CABA.
                </div>
                <div className="p-2.5 rounded-lg bg-indigo-900/60 border border-indigo-700">
                  <strong className="text-white block mb-0.5">4. KAM + Otra Info:</strong> Cuadro obligatorio de Cuestiones Clave (<NormaTooltip code="NIA 701" />) y lectura de Memoria/Reseña (<NormaTooltip code="NIA 720" />).
                </div>
                <div className="p-2.5 rounded-lg bg-indigo-900/60 border border-indigo-700">
                  <strong className="text-white block mb-0.5">5. Gobierno y Grupo:</strong> Rol del Comité de Auditoría (<NormaTooltip code="NIA 260" />), Auditoría de Grupo (<NormaTooltip code="NIA 600" />) y datos CNV/SIPA.
                </div>
              </div>
            </div>

            {/* Cuadro Comparativo: Informe del Word vs. Plataforma Web vs. EECC Real */}
            <div className="space-y-2 pt-2 border-t border-indigo-800/80">
              <h5 className="text-xs font-extrabold uppercase tracking-wider text-amber-300">
                ¿En qué se diferencian el Informe redactado para tu Word, esta Plataforma Web y el PDF real de Telecom CNV?
              </h5>
              <div className="overflow-x-auto rounded-xl border border-indigo-800 bg-indigo-900/40">
                <table className="w-full text-[11px] sm:text-xs text-left border-collapse">
                  <thead>
                    <tr className="bg-indigo-900 text-lime-300 border-b border-indigo-700">
                      <th className="py-2 px-3 font-extrabold">Aspecto</th>
                      <th className="py-2 px-3 font-extrabold">Informe para Word (AE 4)</th>
                      <th className="py-2 px-3 font-extrabold">Informe en la Web (Tablero)</th>
                      <th className="py-2 px-3 font-extrabold">Dictamen Real Telecom (PDF p. 174–179)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-indigo-800/70 text-indigo-100">
                    <tr>
                      <td className="py-2 px-3 font-bold text-white">Cuestiones Clave (KAM — NIA 701)</td>
                      <td className="py-2 px-3">3 KAM dedicadas 1-a-1 a tus <strong>3 rubros auditados del Word</strong> (PT-A Bienes de Uso + TMA, PT-E Intangibles + TMA, PT-B Créditos + TMA/NIIF 9), en tabla formal de 2 columnas.</td>
                      <td className="py-2 px-3">Incluye el <strong>alcance ampliado</strong> (Llave de negocio <code>PT-F1</code> $4.443.998M e Ingresos Flow <code>PT-D3</code>) y agrupa PP&amp;E + Intangibles en una sola KAM.</td>
                      <td className="py-2 px-3">2 KAM: 1) Recuperabilidad de Llave de negocio ($4.443.998M), y 2) Adquisición TMA: Red Fija y Transporte + Licencias y espectros.</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-bold text-white">Mención a AJ-01 / AJ-04 y códigos PT</td>
                      <td className="py-2 px-3"><strong>No se mencionan en el texto público</strong> porque AJ-01 ($28.340M) es inferior a ET/PM y un dictamen formal no expone códigos internos (<code>PT-A</code>, <code>LC-01</code>).</td>
                      <td className="py-2 px-3">Se citan pedagógicamente con botones navegables (<code>RefPill</code>) y monto de presupuesto ($80.683.020) para trazabilidad oral en clase.</td>
                      <td className="py-2 px-3">Tampoco expone umbrales internos ni papeles de trabajo ni cifras de presupuesto de auditoría.</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-bold text-white">Honorarios CNV Art. 21° inc. b)</td>
                      <td className="py-2 px-3">Informa <strong>100% en los 3 incisos (c.1, c.2, c.3)</strong>: encargo académico dedicado exclusivamente a auditoría externa.</td>
                      <td className="py-2 px-3">Informa <strong>100% en d.1, d.2 y d.3</strong> (con referencia interna al presupuesto CPCECABA de $80.683.020).</td>
                      <td className="py-2 px-3">Informa <strong>91% / 71% / 64%</strong> porque la firma real también facturó servicios fiscales y otros al Grupo.</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-bold text-white">Estados, Fecha y Cláusula UIF</td>
                      <td className="py-2 px-3">Estados <strong>consolidados</strong> al 31/12/2025; fecha <strong>20/02/2026</strong> (cierre de 12 semanas AE 4) + inciso FACPCE Res. 420/11 (UIF).</td>
                      <td className="py-2 px-3">Estados <strong>consolidados</strong>; fecha <strong>20/02/2026</strong> (coherente con LC-01 a LC-03) + inciso FACPCE Res. 420/11 (UIF).</td>
                      <td className="py-2 px-3">Estados <strong>consolidados e individuales</strong>; fecha <strong>10/03/2026</strong>; finaliza en Art. 21 CNV sin apartado UIF explícito.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 6 Preguntas Frecuentes del Tribunal sobre el Informe Final */}
            <div className="space-y-2 pt-2 border-t border-indigo-800/80">
              <h5 className="text-xs font-extrabold uppercase tracking-wider text-lime-300">
                6 Preguntas Típicas del Tribunal sobre el Informe Final (y cómo responderlas sin dudas)
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs text-indigo-100 leading-relaxed">
                <div className="p-3 rounded-xl bg-indigo-900/50 border border-indigo-700/80">
                  <strong className="text-amber-300 block mb-1">
                    1. ¿Por qué la Opinión es Limpia (Favorable sin Salvedades) si hallaron AJ-01 ($28.340M) y Riesgo de Control ALTO?
                  </strong>
                  <p>
                    Primero, el Riesgo de Control ALTO en CCI-01 y CCI-05 (<NormaTooltip code="NIA 315" />) determina el <em>enfoque sustantivo</em> y ampliación de muestras, nunca una salvedad por sí solo (<NormaTooltip code="NIA 330" />). Segundo, si Telecom contabiliza <code>AJ-01</code>, Bienes de Uso queda corregido en $6.760.778M; y aun si no lo registrara, $28.340M equivale al <strong>17,05% de PM ($166.225M)</strong> y está por debajo del <strong>ET ($83.112M)</strong>, por lo que no distorsiona significativamente los EECC (<NormaTooltip code="NIA 450" /> / <NormaTooltip code="NIA 700" />).
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-indigo-900/50 border border-indigo-700/80">
                  <strong className="text-amber-300 block mb-1">
                    2. ¿Por qué el Informe formal del Word no nombra a AJ-01 ($28.340M) ni la Llave de Negocio, mientras la Web sí?
                  </strong>
                  <p>
                    Porque en el Dictamen formal destinado al mercado no se exponen ajustes inmateriales ni códigos internos de papeles de trabajo, y el Word enfocó únicamente los <strong>3 rubros auditados en AE 4 (PT-A, PT-E y PT-B)</strong>. La Web suma trazabilidad interactiva hacia todo el análisis completo (incluyendo <code>PT-F1</code> Llave de negocio y <code>PT-D3</code>) para defender la conexión integral en clase.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-indigo-900/50 border border-indigo-700/80">
                  <strong className="text-amber-300 block mb-1">
                    3. ¿Por qué el Dictamen dice sólo «estados financieros consolidados» y no incluye los individuales?
                  </strong>
                  <p>
                    En la realidad bursátil (CNV bajo <NormaTooltip code="RT 32" />) se auditan ambos juegos en conjunto, pero todo el trabajo práctico (Análisis Horizontal/Vertical 1C, Materialidad PM = 1% de $16.622.552M y los programas PT-A, PT-E y PT-B) se ejecutó sobre las cifras del <strong>Balance Consolidado</strong>. Opinar sobre los consolidados mantiene absoluta coherencia entre lo planificado, lo auditado y lo dictaminado.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-indigo-900/50 border border-indigo-700/80">
                  <strong className="text-amber-300 block mb-1">
                    4. ¿Qué significan «Otra Información» (NIA 720), «Empresa en Marcha» (NIA 570) y «Auditoría de Grupo» (NIA 600)?
                  </strong>
                  <p>
                    <strong>Otra Información (<NormaTooltip code="NIA 720" />):</strong> la Memoria Anual Integrada y Reseña Informativa; no se auditan, pero se leen para verificar que no contradigan los EECC. <strong>Empresa en Marcha (<NormaTooltip code="NIA 570" />):</strong> validada con EBITDA $2.525.535M y cumplimiento de covenants sin dudas significativas. <strong>Grupo (<NormaTooltip code="NIA 600" />):</strong> asumimos responsabilidad única por Telecom y sus subsidiarias (incluyendo TMA adquirida el 24/02/2025).
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-indigo-900/50 border border-indigo-700/80">
                  <strong className="text-amber-300 block mb-1">
                    5. ¿De dónde sale la cifra de deuda SIPA ($33.699.737.311) y por qué aclara «no exigible al cierre»?
                  </strong>
                  <p>
                    Es la cifra literal del cierre real de Telecom al 31/12/2025 (Sección II inc. c). Corresponde a aportes y contribuciones previsionales devengados sobre los sueldos de diciembre 2025 cuyo vencimiento legal de pago ante ARCA opera recién en enero de 2026: por Ley N° 17.250 (art. 10) debe discriminarse el monto devengado y aclararse que aún no había vencido (no era exigible).
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-indigo-900/50 border border-indigo-700/80">
                  <strong className="text-amber-300 block mb-1">
                    6. ¿Por qué informaron 100% en Art. 21 CNV y agregaron la cláusula UIF (Res. FACPCE 420/11)?
                  </strong>
                  <p>
                    El Art. 21° inc. b) CNV exige revelar qué porcentaje representan los honorarios de auditoría respecto del total facturado al ente y grupo: nuestro equipo únicamente prestó auditoría externa (100%), mientras que en el real fue 91%/71%/64% por otros servicios impositivos/consultoría. Además, mantenemos el inciso de Res. 420/11 FACPCE (PLA/FT) exigido habitualmente por la cátedra en la Sección II.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
