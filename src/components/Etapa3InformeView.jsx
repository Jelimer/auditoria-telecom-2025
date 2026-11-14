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
                <p className="text-xs mb-3 text-slate-700 leading-relaxed">
                  Las cuestiones clave de la auditoría representan aquellos asuntos que, conforme a nuestro criterio profesional, revistieron la mayor significatividad dentro del examen de los estados financieros consolidados del ejercicio 2025. Estas áreas fueron abordadas en el marco global de la auditoría y sirvieron de base para formar nuestra opinión sobre el conjunto de los estados financieros, sin que emitamos un pronunciamiento independiente sobre cada partida en particular.
                </p>
                <div className="overflow-x-auto rounded-xl border border-slate-300">
                  <table className="w-full text-xs text-left border-collapse">
                    <thead>
                      <tr className="bg-teal-900 text-white">
                        <th className="py-2.5 px-3.5 font-extrabold w-1/2 border-r border-teal-800">
                          Cuestiones clave de la auditoría
                        </th>
                        <th className="py-2.5 px-3.5 font-extrabold w-1/2">
                          Respuesta de auditoría
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white text-slate-700 align-top">
                      <tr>
                        <td className="p-3.5 border-r border-slate-200 space-y-2 leading-relaxed">
                          <p className="font-extrabold text-slate-950">
                            1. Medición, existencia física y bajas por obsolescencia de Bienes de Uso — Incorporación de TMA (Notas 9 y 29)
                          </p>
                          <p>
                            Al cierre del ejercicio 2025, Propiedad, Planta y Equipo totaliza $6.789.118 millones contables (40,84% del Activo Consolidado), comprendiendo $1.332.961 millones incorporados a su valor razonable bajo NIIF 3 tras la adquisición de Telefónica Móviles Argentina S.A. (TMA) concretada el 24 de febrero de 2025, además de inversiones en red de fibra óptica (FTTH) y despliegue 5G por $1.351.105 millones. La relevancia del área obedece al peso patrimonial del rubro, la extensión geográfica de la infraestructura técnica, los criterios de asignación del precio de compra (PPA) y las estimaciones sobre bajas por siniestros y obsolescencia de antiguas centrales de cobre en proceso de apagado.
                          </p>
                        </td>
                        <td className="p-3.5 space-y-1.5 leading-relaxed">
                          <p className="font-semibold text-slate-900">Aplicamos, entre otros procedimientos sustantivos y de control:</p>
                          <ul className="list-disc pl-4 space-y-1">
                            <li>relevamiento y evaluación de los circuitos de activación de obras en curso, baja de activos y conciliación dentro del módulo de activo fijo del ERP SAP;</li>
                            <li>verificación física presencial sobre Data Centers, radiobases y nodos estratégicos, cruzando los registros contables contra reportes operativos de siniestros y vandalismo;</li>
                            <li>inspección documental de obras en curso activadas y solicitud de informes oficiales de dominio ante registros inmobiliarios y automotores;</li>
                            <li>revisión del criterio técnico aplicado en la valuación a valor razonable de la combinación de negocios de TMA bajo NIIF 3; y</li>
                            <li>recálculo global independiente de la depreciación anual ($1.533.091 millones) y del valor residual reexpresado (NIC 29), junto al análisis de informes técnicos de desuso y deterioro bajo NIC 16 y NIC 36.</li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3.5 border-r border-slate-200 space-y-2 leading-relaxed">
                          <p className="font-extrabold text-slate-950">
                            2. Titularidad legal, capitalización de software y amortización de Activos Intangibles — Incorporación de TMA (Notas 10, 25 y 29)
                          </p>
                          <p>
                            Los Activos Intangibles alcanzan $2.671.525 millones al 31 de diciembre de 2025 (16,07% del Activo Consolidado), integrados por licencias de espectro radioeléctrico 4G/5G adjudicadas por ENACOM ($1.985.420 millones), marcas comerciales ($400.750 millones), activos incorporados por la adquisición de TMA ($274.183 millones bajo NIIF 3) y desarrollos internos de software activados según NIC 38. El asunto resultó prioritario por su magnitud financiera, la verificación jurídica de las concesiones habilitantes y el juicio exigido para separar gastos corrientes de TI respecto de desarrollos capitalizables.
                          </p>
                        </td>
                        <td className="p-3.5 space-y-1.5 leading-relaxed">
                          <p className="font-semibold text-slate-900">Ejecutamos, entre otras tareas:</p>
                          <ul className="list-disc pl-4 space-y-1">
                            <li>cotejo de resoluciones vigentes emitidas por ENACOM (incluido el lote 5G en banda 3.400–3.500 MHz) y compulsa pública de títulos marcarios en el INPI complementada con confirmaciones de asesores legales;</li>
                            <li>examen de los seis requisitos acumulativos del párrafo 57 de la NIC 38 sobre una muestra de proyectos internos de software en SAP PS y Jira ($285.355 millones y 158.800 horas);</li>
                            <li>pruebas de corte e integridad sobre gastos de mantenimiento y soporte informático ($42.500 millones) para corroborar su correcta imputación a resultados; y</li>
                            <li>recálculo global del cargo anual por amortizaciones ($234.722 millones) y conciliación de la evolución del valor residual al cierre.</li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3.5 border-r border-slate-200 space-y-2 leading-relaxed">
                          <p className="font-extrabold text-slate-950">
                            3. Integridad de Créditos por Ventas y estimación de la Previsión para incobrables bajo NIIF 9 (Notas 5 y 29)
                          </p>
                          <p>
                            Al 31 de diciembre de 2025, el rubro Créditos por Ventas se expone en $800.128 millones netos ($1.071.047 millones de cartera bruta deducidos por una previsión por deterioro de $(270.919) millones), exhibiendo una suba interanual del 105,25% originada principalmente por la consolidación de la cartera de TMA ($421.919 millones valuados según NIIF 3). La determinación de pérdidas crediticias esperadas conforme a la NIIF 9 exige juzgar parámetros de morosidad histórica y supuestos macroeconómicos prospectivos sobre millones de cuentas de clientes.
                          </p>
                        </td>
                        <td className="p-3.5 space-y-1.5 leading-relaxed">
                          <p className="font-semibold text-slate-900">Nuestras pruebas abarcaron, entre otros procedimientos:</p>
                          <ul className="list-disc pl-4 space-y-1">
                            <li>circularización externa bajo modalidad positiva directa a 65 clientes corporativos B2B relevantes y verificación alternativa mediante cobranzas posteriores de enero de 2026;</li>
                            <li>prueba de corte de facturación B2B al cierre de ejercicio y conciliación de recaudadores externos y billeteras virtuales al 31 de diciembre de 2025 ($36.890 millones) contra acreditaciones bancarias del primer día hábil posterior; y</li>
                            <li>reproceso integral del 100% de la matriz de antigüedad de saldos mediante técnicas de auditoría asistidas por computadora (TAACs), validando la razonabilidad del modelo NIIF 9 y la cobertura íntegra de créditos con mora superior a 180 días.</li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
                  En cumplimiento del <strong>art. 21°, inc. b), Capítulo III, Sección VI, Título II de las Normas de la CNV (T.O. 2013 y modif.)</strong>, informamos que el total de honorarios facturados en concepto de servicios de auditoría externa correspondientes al ejercicio finalizado el 31 de diciembre de 2025 representa: <strong>d.1) el 100%</strong> sobre el total de honorarios facturados a Telecom Argentina S.A. por todo concepto en dicho ejercicio; <strong>d.2) el 100%</strong> sobre el total de honorarios por servicios de auditoría y relacionados facturados a Telecom Argentina S.A., su sociedad controlante, controladas y vinculadas; y <strong>d.3) el 100%</strong> sobre el total de honorarios facturados por todo concepto al referido grupo económico en dicho ejercicio.
                </li>
                <li>
                  Hemos aplicado los procedimientos sobre prevención de lavado de activos y financiación del terrorismo previstos en las normas profesionales vigentes emitidas por la FACPCE (Resolución N° 420/11 y normativa UIF concordante), sin observaciones significativas que informar al cierre.
                </li>
              </ol>

              {/* Pie de Firma Limpio (sin códigos internos dentro del dictamen formal) */}
              <div className="pt-6 border-t border-slate-300 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-xs">
                <div className="space-y-1">
                  <p className="font-bold text-slate-900">
                    Ciudad Autónoma de Buenos Aires, 20 de febrero de 2026.
                  </p>
                </div>
                <div className="text-right border-t-2 border-slate-800 pt-2 px-4 shrink-0">
                  <p className="font-extrabold text-slate-950 uppercase">GREBE — PISONERO DE BIASE</p>
                  <p className="text-slate-600 font-semibold">Contadores Públicos (U.C.P.)</p>
                  <p className="text-[11px] text-teal-700 font-bold">Auditores Externos Independientes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Barra No-Imprimible de Navegación Rápida a Papeles de Trabajo (fuera del dictamen formal) */}
          <div className="no-print bg-slate-100 rounded-xl border border-slate-200 px-4 py-2.5 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-bold text-slate-700">
              Trazabilidad rápida en el tablero (no integra el texto formal del dictamen):
            </span>
            <div className="flex flex-wrap gap-1.5">
              <RefPill label="PT-A (Bienes de Uso)" view="etapa2-ejecucion" sub="pt-a" tone="teal" />
              <RefPill label="PT-E (Intangibles)" view="etapa2-ejecucion" sub="pt-e" tone="teal" />
              <RefPill label="PT-B (Créditos)" view="etapa2-ejecucion" sub="pt-b" tone="teal" />
              <RefPill label="Planilla PAE" view="etapa2-ejecucion" sub="sec-pae" tone="amber" />
              <RefPill label="Carta CI (LC-01)" view="etapa3-informe" sub="carta-ci" tone="slate" />
            </div>
          </div>

          {/* Nota Pedagógica Completa para Defensa Oral: NIAs RT 32, Diferencias Word vs. Web vs. EECC Real y Preguntas de Cátedra */}
          <div className="no-print bg-indigo-950 text-white rounded-2xl p-5 sm:p-6 shadow-xs space-y-5">
            <div className="space-y-2.5">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-lime-400 shrink-0" />
                <h4 className="text-sm sm:text-base font-extrabold text-lime-300">
                  Guía de Defensa Oral del Informe Final: Alineación Word/Web vs. Dictamen Real de Telecom (CNV)
                </h4>
              </div>
              <p className="text-xs text-indigo-100 leading-relaxed">
                Aunque en la cursada se estudia el proceso general de Slosse y la <strong>RT N° 37 (modif. RT N° 53)</strong> para entes locales, <strong>Telecom Argentina S.A.</strong> es una emisora bajo oferta pública de la <strong>CNV</strong> que aplica <strong>NIIF completas (RT N° 26)</strong>. Por ello, tanto este Informe web como el de tu Word se rigen obligatoriamente por las <strong>Normas Internacionales de Auditoría (<NormaTooltip code="RT 32" />)</strong>, presentando 5 rasgos distintivos:
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

            {/* Cuadro Comparativo: Informe del TP (Word & Web Unificados) vs. Dictamen Real Telecom */}
            <div className="space-y-2 pt-2 border-t border-indigo-800/80">
              <h5 className="text-xs font-extrabold uppercase tracking-wider text-amber-300">
                ¿Por qué el Informe del Trabajo Práctico (Word y Web unificados) difiere en 4 puntos del PDF real de Telecom CNV?
              </h5>
              <div className="overflow-x-auto rounded-xl border border-indigo-800 bg-indigo-900/40">
                <table className="w-full text-[11px] sm:text-xs text-left border-collapse">
                  <thead>
                    <tr className="bg-indigo-900 text-lime-300 border-b border-indigo-700">
                      <th className="py-2 px-3 font-extrabold">Aspecto</th>
                      <th className="py-2 px-3 font-extrabold">Informe del TP (Word AE 4 y Web)</th>
                      <th className="py-2 px-3 font-extrabold">Dictamen Real Telecom (PDF p. 174–179)</th>
                      <th className="py-2 px-3 font-extrabold">Por qué la cátedra valida nuestro criterio</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-indigo-800/70 text-indigo-100">
                    <tr>
                      <td className="py-2 px-3 font-bold text-white">Cuestiones Clave (KAM — NIA 701)</td>
                      <td className="py-2 px-3">3 KAM dedicadas a los <strong>3 rubros auditados (Bienes de Uso + TMA, Intangibles + TMA, Créditos + TMA/NIIF 9)</strong>, en tabla de 2 columnas.</td>
                      <td className="py-2 px-3">2 KAM: 1) Recuperabilidad de Llave de negocio ($4.443.998M), y 2) Adquisición TMA (Red Fija y Transporte + Licencias y espectros).</td>
                      <td className="py-2 px-3">Un auditor sólo informa como KAM lo que efectivamente auditó en profundidad dentro de sus programas prioritarios (el Word AE 4 y este dictamen enfocan los 3 rubros ejecutados, sin incluir Llave de negocio).</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-bold text-white">Datos internos (AJ-01, PT, presupuesto)</td>
                      <td className="py-2 px-3"><strong>Omitidos en el dictamen público</strong> tanto en Word como en Web (sin citar AJ-01, códigos PT/LC ni monto $80.683.020).</td>
                      <td className="py-2 px-3">Tampoco menciona diferencias inmateriales ni papeles internos ni cifras de honorarios en pesos.</td>
                      <td className="py-2 px-3">Los desvíos debajo de ET/PM y fallas de CCI van a la <em>Carta NIA 265</em> y <em>Carta NIA 580</em>, nunca al Informe al mercado.</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-bold text-white">Honorarios CNV Art. 21° inc. b)</td>
                      <td className="py-2 px-3"><strong>100%</strong> en los tres incisos (exclusividad de auditoría externa).</td>
                      <td className="py-2 px-3"><strong>91% / 71% / 64%</strong> porque la firma real también facturó servicios fiscales y asesoría al Grupo.</td>
                      <td className="py-2 px-3">Nuestro estudio fue contratado exclusivamente para la auditoría contable del ejercicio 2025, sin otros servicios facturados.</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-bold text-white">Estados, Fecha y Cláusula UIF</td>
                      <td className="py-2 px-3">Estados <strong>consolidados</strong> al 31/12/2025; fecha <strong>20/02/2026</strong> + inciso Res. FACPCE 420/11 (UIF).</td>
                      <td className="py-2 px-3">Estados <strong>consolidados e individuales</strong>; fecha <strong>10/03/2026</strong>; finaliza en Art. 21 CNV sin inciso UIF expreso.</td>
                      <td className="py-2 px-3">Mantiene coherencia exacta con todo el TP (trabajado s/ Balance Consolidado, cierre de 12 semanas y pauta académica UIF Res. 420/11).</td>
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
                    2. ¿Por qué en el Informe del Auditor NO se mencionan el ajuste AJ-01 ($28.340M), los códigos PT ni el monto de honorarios?
                  </strong>
                  <p>
                    Porque en un Informe de Auditoría público bajo <NormaTooltip code="NIA 700" /> jamás se revelan umbrales internos (PM/ET/PAE), nomenclatura interna de legajos ni ajustes no materiales debajo de ET. La constancia escrita de partidas no ajustadas corresponde a la <strong>Carta de Representación (<NormaTooltip code="NIA 580" /> / NIA 450.14)</strong> y las fallas de circuito (CCI-02) van a la <strong>Carta de Recomendaciones (<NormaTooltip code="NIA 265" />)</strong>.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-indigo-900/50 border border-indigo-700/80">
                  <strong className="text-amber-300 block mb-1">
                    3. ¿Por qué las Cuestiones Clave (KAM) cubren Bienes de Uso, Intangibles y Créditos (y no Llave de Negocio como el PDF real)?
                  </strong>
                  <p>
                    Según <NormaTooltip code="NIA 701" />, las KAM surgen exclusivamente de las áreas de mayor significatividad y juicio efectivamente auditadas durante el encargo. En nuestro trabajo práctico ejecutamos programas completos sobre <strong>Bienes de Uso, Activos Intangibles y Créditos por Ventas</strong> (integrando la compra de TMA bajo <NormaTooltip code="NIIF 3" /> en los tres), manteniendo coherencia total entre los papeles de trabajo y el dictamen.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-indigo-900/50 border border-indigo-700/80">
                  <strong className="text-amber-300 block mb-1">
                    4. ¿Por qué opinan sólo sobre «consolidados» y qué implican NIA 720, NIA 570 y NIA 600?
                  </strong>
                  <p>
                    Todo el análisis horizontal/vertical y la Materialidad (1% s/ $16.622.552M) se calcularon sobre el <strong>Balance Consolidado</strong>. Además: <strong>Otra Información (<NormaTooltip code="NIA 720" />)</strong> valida consistencia con la Memoria Anual Integrada; <strong>Empresa en Marcha (<NormaTooltip code="NIA 570" />)</strong> se respalda con EBITDA $2.525.535M; y <strong>Grupo (<NormaTooltip code="NIA 600" />)</strong> asume responsabilidad única sobre todas las subsidiarias incluida TMA.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-indigo-900/50 border border-indigo-700/80">
                  <strong className="text-amber-300 block mb-1">
                    5. ¿De dónde sale la cifra de deuda SIPA ($33.699.737.311) y por qué aclara «no exigible al cierre»?
                  </strong>
                  <p>
                    Es la cifra literal del cierre real de Telecom al 31/12/2025 (Sección II — apartado SIPA). Corresponde a aportes y contribuciones previsionales devengados sobre los sueldos de diciembre 2025 cuyo vencimiento legal de pago ante ARCA opera recién en enero de 2026: por Ley N° 17.250 (art. 10) debe discriminarse el monto devengado y aclararse que aún no había vencido (no era exigible).
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-indigo-900/50 border border-indigo-700/80">
                  <strong className="text-amber-300 block mb-1">
                    6. ¿Por qué informaron 100% en Art. 21 CNV y agregaron la cláusula UIF (Res. FACPCE 420/11)?
                  </strong>
                  <p>
                    El Art. 21° inc. b) CNV exige revelar qué porcentaje representan los honorarios de auditoría respecto del total facturado al ente y grupo: nuestro equipo únicamente prestó auditoría externa (100% en los 3 incisos), mientras que en el real fue 91%/71%/64% por otros servicios impositivos/consultoría. Además, mantenemos el inciso de Res. 420/11 FACPCE (PLA/FT) exigido habitualmente por la cátedra en la Sección II.
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
