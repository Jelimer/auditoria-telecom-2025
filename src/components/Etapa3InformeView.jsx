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
  CalendarClock
} from 'lucide-react';
import { documentosEtapa3 } from '../data/etapas2y3Data';
import { proyectoMeta } from '../data/etapa1Data';

export default function Etapa3InformeView({
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

  const MATERIALIDAD_GLOBAL = 166225; // PM ($166.225M según Planificación)
  const ajustesPendientes = ajustesState.filter((a) => a.superaPAE && !a.aceptado);
  const totalNoAjustado = ajustesPendientes.reduce((s, a) => s + a.montoMillones, 0);
  const esLimpiaEstricta = totalNoAjustado === 0;
  const esFavorableSinSalvedades = totalNoAjustado < MATERIALIDAD_GLOBAL;

  const cronologiaDocumentos = [
    {
      id: 'carta-ci',
      orden: 'Paso 1 • 12/02/2026',
      titulo: '1. Carta de Control Interno a la Gerencia',
      sub: 'Recomendaciones sobre los 5 CCI',
      badge: '5 Componentes'
    },
    {
      id: 'memorando',
      orden: 'Paso 2 • 18/02/2026',
      titulo: '2. Memorando Resumen de Auditoría',
      sub: 'Evaluación Técnica y Conclusión para el Socio',
      badge: 'Cierre de Papeles'
    },
    {
      id: 'carta-gerencia',
      orden: 'Paso 3 • 20/02/2026 (Pre-Firma)',
      titulo: '3. Carta de Representación de la Dirección',
      sub: 'Manifestaciones Escritas (CEO/CFO — RT 37)',
      badge: 'Requisito Previo'
    },
    {
      id: 'informe',
      orden: 'Paso 4 Final • 20/02/2026',
      titulo: '4. Informe del Auditor Independiente',
      sub: 'RT 37 (modif. RT 53) y Normas CNV — Emisión Final',
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
            <span className="px-2.5 py-1 rounded-md text-xs font-extrabold bg-indigo-600 text-white">
              ETAPA 3 — CONCLUSIÓN, CIERRE TÉCNICO Y EMISIÓN DEL INFORME DEL AUDITOR (RT 37 / RT 53)
            </span>
            <h2 className="text-xl font-extrabold text-slate-900 mt-2">
              Secuencia Cronológica de Cierre: Carta de Control Interno, Memorando, Carta de Gerencia e Informe Final
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Ordenados secuencialmente por fecha de realización conforme a la doctrina de Carlos Slosse y la Resolución Técnica N° 37 (modificada por RT N° 53 - FACPCE).
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

      {/* Barra interactiva de simulación de Ajustes (para demostrar en vivo en la exposición cómo impacta en el Informe) */}
      <div className="no-print bg-gradient-to-r from-slate-900 to-teal-950 text-white rounded-2xl p-4 shadow-xs flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-lime-400">
            Simulador Pedagógico para Exposición (Efecto de Ajustes PAE en el Dictamen RT 37 / RT 53)
          </span>
          <p className="text-xs text-slate-200 mt-0.5">
            Tildá o destildá los ajustes propuestos en la Etapa 2 para ver cómo se actualizan tanto el Memorando, el Informe del Auditor y la Hoja Resumen Final:
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {ajustesState
            .filter((a) => a.superaPAE)
            .map((aj) => (
              <button
                key={aj.id}
                onClick={() => onToggleAjusteAceptado(aj.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                  aj.aceptado
                    ? 'bg-emerald-500/20 border-emerald-400 text-emerald-200'
                    : 'bg-red-500/30 border-red-400 text-red-100'
                }`}
              >
                {aj.codigoAjuste} (${aj.montoMillones.toLocaleString('es-AR')}M):{' '}
                {aj.aceptado ? 'Registrado ✓' : 'No Registrado ✗'}
              </button>
            ))}
        </div>
      </div>

      {/* PASO 1 (12/02/2026): CARTA DE RECOMENDACIONES DE CONTROL INTERNO A LA GERENCIA */}
      {docActivo === 'carta-ci' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs max-w-4xl mx-auto space-y-5">
          <div className="border-b border-slate-200 pb-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="px-2.5 py-0.5 rounded bg-amber-100 text-amber-900 text-xs font-extrabold">
                PASO 1 DE CIERRE • REALIZADO EL 12/02/2026 — CARTA A LA GERENCIA (SLOSSE)
              </span>
              <span className="text-xs font-mono font-bold text-slate-500">
                Ref: Legajo Conclusión LC-01
              </span>
            </div>
            <h3 className="text-xl font-extrabold text-slate-950 mt-2">
              Carta con Recomendaciones sobre el Sistema de Control Interno
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              <strong>Destinatario:</strong> {documentosEtapa3.cartaControlInterno.destinatario} •{' '}
              <strong>Fecha de Emisión:</strong> {documentosEtapa3.cartaControlInterno.fecha}
            </p>
            <p className="text-xs text-slate-700 mt-2 leading-relaxed">
              {documentosEtapa3.cartaControlInterno.introduccion}
            </p>
          </div>

          <div className="space-y-3.5">
            {documentosEtapa3.cartaControlInterno.recomendaciones.map((rec, i) => (
              <div key={i} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                <h4 className="text-xs font-extrabold text-slate-900 uppercase bg-white px-3 py-1.5 rounded-lg border border-slate-200 inline-block">
                  {rec.componente}
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed">
                  <strong className="text-red-700">Debilidad / Observación Detectada:</strong>{' '}
                  {rec.observacion}
                </p>
                <p className="text-xs text-teal-950 bg-teal-50/70 p-2.5 rounded-lg border border-teal-200 leading-relaxed">
                  <strong className="text-teal-800">Recomendación de Auditoría Externa:</strong>{' '}
                  {rec.recomendacion}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-200 flex justify-between items-center text-xs text-slate-600">
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
              <span className="px-2.5 py-0.5 rounded bg-teal-100 text-teal-800 text-xs font-extrabold">
                PASO 2 DE CIERRE • REALIZADO EL 18/02/2026 — ANTES DE EMITIR EL DICTAMEN (SLOSSE)
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
            </div>
          </div>

          <div className="space-y-4">
            {documentosEtapa3.memorandoConclusion.secciones.map((sec, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50/70 border border-slate-200">
                <h4 className="text-sm font-extrabold text-teal-900 mb-1.5">{sec.subtitulo}</h4>
                <p className="text-xs text-slate-700 leading-relaxed">{sec.contenido}</p>
              </div>
            ))}

            {/* Cuadro Dinámico de Conclusión sobre Ajustes en el Memorando */}
            <div
              className={`p-4 rounded-xl border ${
                esFavorableSinSalvedades ? 'bg-emerald-50 border-emerald-200' : 'bg-rose-50 border-rose-300'
              }`}
            >
              <h4 className="text-xs font-extrabold uppercase text-slate-900 mb-1">
                4. Conclusión de los Encargados y Propuesta de Dictamen al Socio (Estado en Vivo)
              </h4>
              <p className="text-xs text-slate-800 leading-relaxed">
                {esLimpiaEstricta
                  ? 'Habiendo la Gerencia de Telecom Argentina S.A. aceptado y contabilizado la totalidad de los asientos de ajuste y reclasificación que superan el umbral PAE ($8.311M), concluimos que los Estados Contables al 31/12/2025 no contienen incorrecciones materiales y recomendamos emitir una OPINIÓN FAVORABLE SIN SALVEDADES el día 20/02/2026, previa recepción de la Carta de Representación de la Dirección.'
                  : esFavorableSinSalvedades
                  ? `Atento a que los ajustes propuestos no registrados por la Gerencia suman $${totalNoAjustado.toLocaleString('es-AR')} millones, dicho importe NO supera la Significatividad / Materialidad Global ($166.225M) ni el Error Tolerable ($83.112M). Conforme la RT 37 / RT 53 y NIA 700/450, no altera la razonabilidad de los estados contables consolidados en su conjunto, por lo que se concluye emitir una OPINIÓN FAVORABLE SIN SALVEDADES (dejando constancia de los desvíos no materiales en la Carta de Representación y Memorando de Cierre).`
                  : `Atento a que los ajustes no registrados suman $${totalNoAjustado.toLocaleString('es-AR')} millones y SUPERAN la Materialidad Global ($166.225M), se recomienda emitir una OPINIÓN CON SALVEDADES por desvío en las normas contables profesionales (valuación/medición).`}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 flex justify-between items-center text-xs text-slate-600">
            <span>Elaborado por: <strong>GREBE — PISONERO DE BIASE</strong> (U.C.P.)</span>
            <button
              onClick={() => setDocActivo('carta-gerencia')}
              className="no-print text-indigo-700 font-extrabold hover:underline cursor-pointer"
            >
              Continuar al Paso 3: Carta de Representación de la Dirección (20/02/2026) →
            </button>
          </div>
        </div>
      )}

      {/* PASO 3 (20/02/2026 PRE-FIRMA): CARTA DE REPRESENTACIÓN DE LA GERENCIA */}
      {docActivo === 'carta-gerencia' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs max-w-4xl mx-auto space-y-5">
          <div className="border-b border-slate-200 pb-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="px-2.5 py-0.5 rounded bg-purple-100 text-purple-800 text-xs font-extrabold">
                PASO 3 DE CIERRE • REALIZADO EL 20/02/2026 (PREVIO A LA FIRMA DEL DICTAMEN — RT 37)
              </span>
              <span className="text-xs font-mono font-bold text-slate-500">
                Ref: Legajo Conclusión LC-03
              </span>
            </div>
            <h3 className="text-xl font-extrabold text-slate-950 mt-2">
              Carta de Representación de la Gerencia de Telecom Argentina S.A.
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              <strong>Firmantes:</strong> {documentosEtapa3.cartaRepresentacion.firmantes} •{' '}
              <strong>Fecha:</strong> {documentosEtapa3.cartaRepresentacion.fecha}
            </p>
          </div>

          <div className="space-y-3">
            {documentosEtapa3.cartaRepresentacion.puntosClave.map((punto, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs text-slate-700"
              >
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{punto}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-200 flex justify-between items-center text-xs text-slate-600">
            <span>Recibida conforme por: <strong>GREBE — PISONERO DE BIASE</strong> (U.C.P.)</span>
            <button
              onClick={() => setDocActivo('informe')}
              className="no-print text-indigo-700 font-extrabold hover:underline cursor-pointer"
            >
              Continuar al Paso 4 (Último): Informe del Auditor Independiente →
            </button>
          </div>
        </div>
      )}

      {/* PASO 4 FINAL (20/02/2026): INFORME DEL AUDITOR INDEPENDIENTE (RT 37 / RT 53) */}
      {docActivo === 'informe' && (
        <div className="bg-white rounded-2xl border border-slate-300 p-8 sm:p-10 shadow-sm max-w-4xl mx-auto space-y-5 text-slate-800 leading-relaxed">
          <div className="text-center border-b-2 border-slate-800 pb-5">
            <p className="text-xs font-extrabold uppercase tracking-widest text-teal-800">
              PASO 4 FINAL (CULMINACIÓN DE LA AUDITORÍA) • RESOLUCIÓN TÉCNICA N° 37 (MODIF. RT N° 53 — FACPCE)
            </p>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 mt-1">
              INFORME DE LOS AUDITORES INDEPENDIENTES
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Sobre los Estados Contables de Telecom Argentina S.A. correspondientes al ejercicio finalizado el 31 de diciembre de 2025
            </p>
          </div>

          <div className="text-xs sm:text-sm space-y-4">
            <p className="font-bold text-slate-900">
              Señores Presidente y Directores y Accionistas de
              <br />
              TELECOM ARGENTINA S.A.
              <br />
              CUIT N° 30-63945373-8
              <br />
              Domicilio Legal: Av. Alicia Moreau de Justo 50 — Ciudad Autónoma de Buenos Aires
            </p>

            <h4 className="text-sm font-extrabold uppercase text-slate-950 border-b border-slate-200 pb-1 pt-2">
              I. Informe sobre la Auditoría de los Estados Contables
            </h4>

            {/* 1. OPINIÓN (Dinámica según el simulador PAE y Materialidad Global RT 37) */}
            <div
              className={`p-4 rounded-xl border ${
                esFavorableSinSalvedades ? 'bg-emerald-50/50 border-emerald-200' : 'bg-rose-50/70 border-rose-300'
              }`}
            >
              <h5 className="font-extrabold text-slate-950 uppercase text-xs mb-2">
                1. {esFavorableSinSalvedades ? 'Opinión (Favorable sin Salvedades)' : 'Opinión con Salvedades'}
              </h5>
              <p className="text-slate-800">
                Hemos auditado los estados contables de <strong>TELECOM ARGENTINA S.A.</strong> (en adelante «la Sociedad»), que comprenden el estado de situación patrimonial al <strong>31 de diciembre de 2025</strong>, los estados de resultados, de otros resultados integrales, de evolución del patrimonio neto y de flujo de efectivo correspondientes al ejercicio finalizado en dicha fecha, así como las notas explicativas a los estados contables que incluyen un resumen de las políticas contables significativas y los anexos complementarios.
              </p>
              {esFavorableSinSalvedades ? (
                <div className="mt-2 space-y-2">
                  <p className="font-medium text-emerald-950">
                    En nuestra opinión, los estados contables consolidados adjuntos presentan razonablemente, en todos sus aspectos significativos, la situación financiera consolidada de <strong>Telecom Argentina S.A.</strong> al 31 de diciembre de 2025, así como sus resultados consolidados, la evolución de su patrimonio y el flujo de su efectivo correspondientes al ejercicio finalizado en esa fecha, de conformidad con las Normas Internacionales de Información Financiera (NIIF / NIC) emitidas por el IASB y adoptadas por la FACPCE y las normas de la Comisión Nacional de Valores (CNV).
                  </p>
                  {!esLimpiaEstricta && (
                    <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-900">
                      <strong>Evaluación NIA 450 / RT 37 sobre desvíos no ajustados:</strong> Los desvíos propuestos no registrados suman <strong>${totalNoAjustado.toLocaleString('es-AR')} millones</strong>. Al situarse por debajo de la Materialidad Global ($166.225M) y del Error Tolerable ($83.112M), no distorsionan significativamente la razonabilidad de los estados contables tomados en su conjunto, permitiendo emitir una opinión favorable sin salvedades (quedando asentados en la Carta de Representación y en el Memorando de Cierre).
                    </div>
                  )}
                </div>
              ) : (
                <p className="mt-2 font-medium text-rose-950">
                  En nuestra opinión, <strong>excepto por los efectos de las cuestiones descritas en la sección «Fundamento de la opinión con salvedades»</strong> (ajustes propuestos no registrados por un total de ${totalNoAjustado.toLocaleString('es-AR')} millones que superan la materialidad global de $166.225M), los estados contables adjuntos presentan razonablemente, en todos sus aspectos significativos, la situación patrimonial de <strong>Telecom Argentina S.A.</strong> al 31 de diciembre de 2025, así como sus resultados y el flujo de su efectivo correspondientes al ejercicio finalizado en esa fecha, de conformidad con las normas contables profesionales vigentes.
                </p>
              )}
            </div>

            {/* 2. FUNDAMENTO DE LA OPINIÓN */}
            <div>
              <h5 className="font-extrabold text-slate-950 uppercase text-xs mb-1.5">
                2. {esFavorableSinSalvedades ? 'Fundamento de la Opinión' : 'Fundamento de la Opinión con Salvedades'}
              </h5>
              {!esFavorableSinSalvedades && (
                <div className="mb-2 p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-900 space-y-1">
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
              <p>
                Hemos llevado a cabo nuestra auditoría de conformidad con las normas de auditoría vigentes en la República Argentina establecidas en la <strong>Resolución Técnica N° 37 de la FACPCE (modificada por la Resolución Técnica N° 53)</strong>. Nuestras responsabilidades de acuerdo con dichas normas se describen más adelante en la sección <em>«Responsabilidades de los auditores en relación con la auditoría de los estados contables»</em>. Somos independientes de Telecom Argentina S.A. y hemos cumplido las demás responsabilidades de ética de conformidad con el Código de Ética vigente y las regulaciones de la CNV. Consideramos que los elementos de juicio que hemos obtenido proporcionan una base suficiente y adecuada para nuestra opinión.
              </p>
            </div>

            {/* 3. CUESTIONES CLAVE DE LA AUDITORÍA (KAM - Nuevo requisito RT 53 para entidades cotizantes) */}
            <div>
              <h5 className="font-extrabold text-slate-950 uppercase text-xs mb-1.5">
                3. Cuestiones Clave de la Auditoría (Key Audit Matters — RT 37 / RT 53)
              </h5>
              <p className="mb-2">
                Las cuestiones clave de la auditoría son aquellas cuestiones que, según nuestro juicio profesional, han sido de la mayor significatividad en nuestra auditoría de los estados contables del período actual:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="font-extrabold text-teal-900">
                    a) Evaluación de Recuperabilidad de Bienes de Uso ($14.085.143M), Espectro 5G y Llave de Negocio (UGE Redes Personal $12.774.695M)
                  </p>
                  <p className="text-slate-600 mt-1">
                    <strong>Respuesta de auditoría:</strong> Con la asistencia de nuestros especialistas en valuaciones verificamos el modelo de flujos de fondos descontados (DCF), la razonabilidad de la tasa WACC, las proyecciones operativas de fibra óptica FTTH/5G, la inspección física de los 16 Data Centers propios y las bajas por obsolescencia de centrales analógicas.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="font-extrabold text-teal-900">
                    b) Reconocimiento de Ventas Convergentes ($8.328.814M), Corte B2B Personal Tech y Previsión NIIF 9
                  </p>
                  <p className="text-slate-600 mt-1">
                    <strong>Respuesta de auditoría:</strong> Evaluamos los Controles Generales de TI (CGTI) y las interfaces entre los facturadores heredados y el ERP SAP, ejecutamos pruebas globales analíticas (Parque × ARPU), pruebas de corte sobre contratos B2B en diciembre y reprocesamos el 100% del padrón de morosidad superior a 180 días mediante TAACs.
                  </p>
                </div>
              </div>
            </div>

            {/* 4 y 5. Responsabilidades de la Dirección y de los Auditores */}
            <div>
              <h5 className="font-extrabold text-slate-950 uppercase text-xs mb-1">
                4. Responsabilidades del Directorio en relación con los Estados Contables
              </h5>
              <p className="text-xs text-slate-700">
                El Directorio de la Sociedad es responsable de la preparación y presentación razonable de los estados contables consolidados de conformidad con las Normas Internacionales de Información Financiera (NIIF / NIC) en moneda homogénea (NIC 29), y del control interno que considere necesario para permitir la preparación de estados contables libres de incorrección significativa, debida a fraude o error, así como de la valoración de la capacidad de la Sociedad para continuar como empresa en funcionamiento.
              </p>
            </div>

            <div>
              <h5 className="font-extrabold text-slate-950 uppercase text-xs mb-1">
                5. Responsabilidades de los Auditores en relación con la Auditoría de los Estados Contables
              </h5>
              <p className="text-xs text-slate-700">
                Nuestros objetivos son obtener una seguridad razonable de que los estados contables en su conjunto están libres de incorrección significativa y emitir un informe de auditoría que contenga nuestra opinión, aplicando juicio y escepticismo profesional durante la Planificación, Ejecución y Conclusión conforme a la RT 37 (modif. RT 53).
              </p>
            </div>

            {/* II. Informe sobre otros requerimientos legales y reglamentarios */}
            <h4 className="text-sm font-extrabold uppercase text-slate-950 border-b border-slate-200 pb-1 pt-2">
              II. Informe sobre Otros Requerimientos Legales y Reglamentarios
            </h4>
            <ul className="list-disc pl-5 text-xs text-slate-700 space-y-1.5">
              <li>
                Los estados contables adjuntos surgen de registros contables llevados en sus aspectos formales de conformidad con las disposiciones legales vigentes y las autorizaciones de medios ópticos/digitales de la CNV (Sistema ERP SAP).
              </li>
              <li>
                Según surge de los registros contables de la Sociedad al <strong>31 de diciembre de 2025</strong>, la deuda devengada a favor del Sistema Integrado Previsional Argentino (SIPA / ARCA) en concepto de aportes y contribuciones previsionales ascendía a $38.420.115.400, no siendo exigible a esa fecha.
              </li>
              <li>
                Hemos aplicado los procedimientos sobre prevención de lavado de activos y financiación del terrorismo previstos en las normas profesionales emitidas por la FACPCE.
              </li>
            </ul>

            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-xs">
              <div>
                <p className="font-bold text-slate-800">
                  Fecha de Emisión del Informe: 20 de febrero de 2026
                </p>
                <p className="text-slate-500 mt-0.5">
                  Papeles de Trabajo referenciados: PT-A, PT-B, PT-C, PT-D, PT-E y PT-F
                </p>
              </div>
              <div className="text-right border-t-2 border-slate-800 pt-2 px-4">
                <p className="font-extrabold text-slate-950 uppercase">GREBE — PISONERO DE BIASE</p>
                <p className="text-slate-600 font-semibold">Contadores Públicos (U.C.P. / Cátedra de Auditoría)</p>
                <p className="text-[11px] text-teal-700 font-bold">Auditores Externos Independientes</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
