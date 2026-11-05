import React, { useState, useEffect } from 'react';
import {
  Printer,
  CheckCircle2,
  AlertTriangle,
  Building2,
  ClipboardCheck,
  Calculator,
  FileSpreadsheet,
  Award,
  Layers,
  Calendar,
  Users,
  ArrowUpRight
} from 'lucide-react';
import {
  proyectoMeta,
  conocimientoEnte,
  materialidadData,
  rubrosSignificativos,
  cronogramaAuditoria
} from '../data/etapa1Data';
import {
  papelesTrabajo,
  documentosEtapa3
} from '../data/etapas2y3Data';

export default function ResumenIntegralView({
  cciCalculados,
  ajustesState,
  equipoTasks,
  onToggleAjusteAceptado,
  onNavigate,
  subTarget,
  subTargetTick
}) {
  const [filtroSeccion, setFiltroSeccion] = useState('todas'); // 'todas' | 'etapa1' | 'etapa2' | 'etapa3'

  useEffect(() => {
    if (subTarget && ['todas', 'etapa1', 'etapa2', 'etapa3'].includes(subTarget)) {
      setFiltroSeccion(subTarget);
    }
  }, [subTarget, subTargetTick]);

  // Promedio global dinámico de los 5 Cuestionarios de Control Interno
  const totalPreguntasCCI = cciCalculados.reduce((acc, c) => acc + c.total, 0);
  const totalPositivasCCI = cciCalculados.reduce((acc, c) => acc + c.positivas, 0);
  const totalNegativasCCI = cciCalculados.reduce((acc, c) => acc + c.negativas, 0);
  const riPromedio =
    cciCalculados.reduce((acc, c) => acc + c.ri, 0) / Math.max(1, cciCalculados.length);
  const ncPromedio = 100 - riPromedio;

  // Cálculos dinámicos de Ajustes PAE (Etapa 2 -> Etapa 3)
  const ajustesMateriales = ajustesState.filter((a) => a.superaPAE);
  const totalAjustesPropuestos = ajustesMateriales.reduce((s, a) => s + a.montoMillones, 0);
  const ajustesAceptados = ajustesMateriales.filter((a) => a.aceptado);
  const ajustesRechazados = ajustesMateriales.filter((a) => !a.aceptado);
  const montoAceptado = ajustesAceptados.reduce((s, a) => s + a.montoMillones, 0);
  const montoNoRegistrado = ajustesRechazados.reduce((s, a) => s + a.montoMillones, 0);
  const esOpinionLimpia = ajustesRechazados.length === 0;

  // Avance promedio del equipo
  const avanceEquipo = Math.round(
    equipoTasks.reduce((s, t) => s + (t.porcentaje || 0), 0) / Math.max(1, equipoTasks.length)
  );

  return (
    <div className="space-y-6">
      {/* Cabecera Ejecutiva de la Hoja Final de Resumen Integral */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded-md text-xs font-extrabold bg-gradient-to-r from-teal-700 to-indigo-700 text-white">
                HOJA FINAL CONSOLIDADA — RESUMEN INTEGRAL Y DINÁMICO DE LAS 3 ETAPAS
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-lime-100 text-lime-800 border border-lime-300">
                Sincronizada en Tiempo Real
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-2">
              Expediente Ejecutivo de Auditoría Externa — {proyectoMeta.cliente} (EECC 2025)
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Auditores a Cargo: <strong className="text-slate-800">{proyectoMeta.encargados} (Contadores Públicos — U.C.P.)</strong> • Doctrina:{' '}
              <strong className="text-teal-700">Carlos Slosse & RT 37 (modif. RT 53) • Marco Contable: NIIF / NIC (CNV)</strong>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 no-print">
            {[
              { id: 'todas', label: 'Ver las 3 Etapas Completas' },
              { id: 'etapa1', label: 'Solo Etapa 1' },
              { id: 'etapa2', label: 'Solo Etapa 2' },
              { id: 'etapa3', label: 'Solo Etapa 3' }
            ].map((b) => (
              <button
                key={b.id}
                onClick={() => setFiltroSeccion(b.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-colors ${
                  filtroSeccion === b.id
                    ? 'bg-teal-700 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {b.label}
              </button>
            ))}
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 cursor-pointer"
            >
              <Printer className="w-4 h-4" /> Imprimir Resumen Completo
            </button>
          </div>
        </div>

        {/* Cinta de Estado Global Sincronizado */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-4">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-[10px] font-bold uppercase text-slate-400 block">
              Preguntas CCI Evaluadas
            </span>
            <span className="text-base font-extrabold text-slate-900 font-mono">
              {totalPositivasCCI} SI / {totalNegativasCCI} NO
            </span>
            <span className="text-[10px] text-slate-500 block">Total: {totalPreguntasCCI} puntos</span>
          </div>

          <div className="p-3 rounded-xl bg-red-50/60 border border-red-200">
            <span className="text-[10px] font-bold uppercase text-red-700 block">
              Confianza / Riesgo Promedio
            </span>
            <span className="text-base font-extrabold text-red-900 font-mono">
              NC {ncPromedio.toFixed(1)}% | RC {riPromedio.toFixed(1)}%
            </span>
            <span className="text-[10px] text-red-700 font-semibold block">
              Enfoque Sustantivo
            </span>
          </div>

          <div className="p-3 rounded-xl bg-teal-50/60 border border-teal-200">
            <span className="text-[10px] font-bold uppercase text-teal-700 block">
              Materialidad (PM / ET / PAE)
            </span>
            <span className="text-sm font-extrabold text-teal-950 font-mono">
              $166.225M / $83.112M
            </span>
            <span className="text-[10px] text-teal-700 block">PAE Mínimo: $8.311M</span>
          </div>

          <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-200">
            <span className="text-[10px] font-bold uppercase text-amber-800 block">
              Ajustes Propuestos (&gt; PAE)
            </span>
            <span className="text-base font-extrabold text-amber-950 font-mono">
              ${totalAjustesPropuestos.toLocaleString('es-AR')} M
            </span>
            <span className="text-[10px] text-amber-800 block">
              Aceptados: ${montoAceptado.toLocaleString('es-AR')}M
            </span>
          </div>

          <div className="p-3 rounded-xl bg-indigo-50/60 border border-indigo-200">
            <span className="text-[10px] font-bold uppercase text-indigo-700 block">
              Dictamen Final (20/02/26)
            </span>
            <span className="text-xs font-extrabold text-indigo-950 block mt-0.5">
              {esOpinionLimpia ? 'Favorable sin Salvedades' : 'Opinión con Salvedades'}
            </span>
            <span className="text-[10px] text-indigo-600 block">
              No ajustado: ${montoNoRegistrado.toLocaleString('es-AR')}M
            </span>
          </div>

          <div className="p-3 rounded-xl bg-lime-50/70 border border-lime-300">
            <span className="text-[10px] font-bold uppercase text-lime-800 block">
              Avance Equipo ({equipoTasks.length} Tareas)
            </span>
            <span className="text-base font-extrabold text-lime-950 font-mono">
              {avanceEquipo}% Completado
            </span>
            <span className="text-[10px] text-lime-700 block">Grebe - Pisonero De Biase</span>
          </div>
        </div>
      </div>

      {/* =====================================================================
          SECCIÓN 1: RESUMEN COMPLETO DE LA ETAPA 1 (PLANIFICACIÓN)
         ===================================================================== */}
      {(filtroSeccion === 'todas' || filtroSeccion === 'etapa1') && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b-2 border-teal-600">
            <div>
              <span className="px-2.5 py-0.5 rounded bg-teal-600 text-white text-xs font-extrabold">
                ETAPA 1 — PLANIFICACIÓN PRELIMINAR Y DETALLADA
              </span>
              <h3 className="text-lg font-extrabold text-slate-900 mt-1">
                1. Síntesis de Conocimiento del Ente, Evaluación de Control Interno (5 CCI), Materialidad y Matriz de Afirmaciones
              </h3>
            </div>
            <button
              onClick={() => onNavigate('etapa1-cci')}
              className="no-print text-xs font-bold text-teal-700 hover:underline inline-flex items-center gap-1 cursor-pointer"
            >
              Editar Cuestionarios CCI <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 1.1 Síntesis Estratégica y Proceso de Negocio */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <h4 className="font-extrabold text-slate-900 uppercase text-[11px] text-teal-800">
                1.1. Perfil Institucional y Evolución «Tech-Co»
              </h4>
              <p className="text-slate-700 leading-relaxed">
                <strong>Dotación:</strong> +16.200 colaboradores (286 en Ciberseguridad SOC y 240 en Multicloud).
              </p>
              <p className="text-slate-700 leading-relaxed">
                <strong>Misión:</strong> {conocimientoEnte.mision.proposito}
              </p>
              <p className="text-slate-700 leading-relaxed">
                <strong>Estructura:</strong> Asamblea → Comisión Fiscalizadora → Directorio / Comité de Auditoría → CEO → 5 Direcciones (B2C Personal/Flow, B2B Personal Tech, Legales ENACOM/CNV/SEC, CTO 16 Data Centers y CFO SAP).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <h4 className="font-extrabold text-slate-900 uppercase text-[11px] text-teal-800">
                1.2. Proceso de Negocio Crítico Seleccionado
              </h4>
              <p className="font-bold text-slate-900">
                {conocimientoEnte.procesoNegocio.procesoSeleccionado.nombre}
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>Clientes:</strong> CIO/CTO de Grandes Empresas, Pymes y Sector Público.
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>Proveedores:</strong> Fabricantes internacionales de red, licencias Cloud (Azure/GCP) y energía sustentable (MSU Green Energy).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <h4 className="font-extrabold text-slate-900 uppercase text-[11px] text-teal-800">
                1.3. Diagnóstico PESTEL, Porter y Competencia
              </h4>
              <p className="text-slate-600 leading-relaxed">
                <strong>Macroentorno:</strong> Volatilidad cambiaria e inflación (impacto en CAPEX importado y deuda USD), regulación ENACOM (Ley 27.078: Tasa 0,5% y FSU 1%).
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>Microentorno (Porter):</strong> Rivalidad ALTA (Movistar, Claro, Telecentro), Amenaza Entrantes BAJA, Sustitutos MEDIA, Poder Compradores ALTO en B2B, Proveedores MEDIO-ALTO.
              </p>
            </div>
          </div>

          {/* 1.2 Tabla Resumen Dinámica de los 5 Cuestionarios de Control Interno */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2">
              1.4. Resultado Consolidado de los 5 Cuestionarios de Control Interno (Actualizado en Vivo)
            </h4>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 font-bold uppercase border-b border-slate-200">
                    <th className="py-2.5 px-3">Código / Componente</th>
                    <th className="py-2.5 px-3 text-center">Total (C.P)</th>
                    <th className="py-2.5 px-3 text-center text-emerald-700">SI (C.P.P)</th>
                    <th className="py-2.5 px-3 text-center text-red-600">NO (Fallas)</th>
                    <th className="py-2.5 px-3 text-center">Riesgo (RI %)</th>
                    <th className="py-2.5 px-3 text-center">Confianza (NC %)</th>
                    <th className="py-2.5 px-3 text-center">Calificación NC / RC</th>
                    <th className="py-2.5 px-3">Principales Deficiencias y Enfoque Preliminar</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {cciCalculados.map((c) => (
                    <tr key={c.id} className="hover:bg-slate-50">
                      <td className="py-2.5 px-3 font-bold text-slate-900">
                        {c.codigo} — {c.componente}
                      </td>
                      <td className="py-2.5 px-3 text-center font-mono font-bold">{c.total}</td>
                      <td className="py-2.5 px-3 text-center font-mono font-bold text-emerald-700">
                        {c.positivas}
                      </td>
                      <td className="py-2.5 px-3 text-center font-mono font-bold text-red-600">
                        {c.negativas}
                      </td>
                      <td className="py-2.5 px-3 text-center font-mono font-bold text-amber-800">
                        {c.ri.toFixed(2)}%
                      </td>
                      <td className="py-2.5 px-3 text-center font-mono font-bold text-teal-800">
                        {c.nc.toFixed(2)}%
                      </td>
                      <td className="py-2.5 px-3 text-center">
                        <span className="px-2 py-0.5 rounded bg-red-100 text-red-700 font-extrabold text-[11px]">
                          NC {c.ncLabel} / RC {c.rcLabel}
                        </span>
                      </td>
                      <td className="py-2.5 px-3 text-slate-600 leading-relaxed">
                        {c.enfoquePlanificacion}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 1.4.B Síntesis de Revisión Analítica (Análisis Horizontal, Vertical y Ratios Financieros) */}
          <div className="p-4 rounded-xl bg-teal-50/40 border border-teal-200 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-teal-950">
                1.5. Síntesis de Revisión Analítica Preliminar: Análisis Horizontal, Vertical y Ratios Financieros (2025 vs. 2024)
              </h4>
              <button
                onClick={() => onNavigate('etapa1-analisis-eecc')}
                className="no-print text-xs font-bold text-teal-700 hover:underline inline-flex items-center gap-1 cursor-pointer"
              >
                Abrir Hoja Completa de Análisis H/V, Gráficas y Ratios <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-white border border-teal-100">
                <span className="font-extrabold text-teal-800 block mb-1">
                  Análisis Vertical (Estructura Patrimonial PDF)
                </span>
                <p className="text-slate-600 leading-relaxed">
                  <strong>Activo No Corriente (88,97% = $14.788.740M):</strong> PP&E Nota 9 (<strong>40,84%</strong> = $6.789.118M), Llaves Nota 8 (<strong>26,73%</strong> = $4.443.998M) e Intangibles Nota 10 (<strong>16,07%</strong> = $2.671.525M). Financiado con <strong>57,99% Pasivo</strong> ($9.639.244M) y <strong>42,01% Patrimonio</strong> ($6.983.308M).
                </p>
              </div>
              <div className="p-3 rounded-lg bg-white border border-teal-100">
                <span className="font-extrabold text-amber-800 block mb-1">
                  Análisis Horizontal (Alertas 2025 vs. 2024)
                </span>
                <p className="text-slate-600 leading-relaxed">
                  Las Ventas crecen <strong>+53,02%</strong> ($8.328.814M vs. $5.442.958M) y el EBITDA <strong>+64,81%</strong> ($2.525.535M), pero los Créditos por Ventas se duplican <strong>+105,25%</strong> ($799.188M vs. $389.375M en Nota 5) y las Provisiones suben <strong>+654,47%</strong> ($563.085M en Nota 20).
                </p>
              </div>
              <div className="p-3 rounded-lg bg-white border border-teal-100">
                <span className="font-extrabold text-indigo-800 block mb-1">
                  Ratios Financieros Clave (2025 vs. 2024)
                </span>
                <p className="text-slate-600 leading-relaxed">
                  Liquidez Corriente: <strong>0,48x</strong> (24: 0,39x) • Prueba Ácida: <strong>0,46x</strong> • Endeudamiento: <strong>1,38x</strong> (24: 0,98x) • Solvencia: <strong>1,72x</strong> • Deuda/EBITDA: <strong>2,15x</strong> • Plazo Cobro: <strong>35,1 días</strong> (+8,9d) • Margen EBITDA: <strong>30,32%</strong> • ROE: <strong>-2,08%</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* 1.6 Resumen de los 5 Rubros Significativos, las 5 Afirmaciones y Programas A-E */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2">
              1.6. Matriz Sintética de los 5 Rubros Críticos, Afirmaciones (E, I, P, M, X) y Programas de Trabajo (A-E)
            </h4>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 font-bold uppercase border-b border-slate-200">
                    <th className="py-2.5 px-3">Programa / Rubro</th>
                    <th className="py-2.5 px-3 text-right">Saldo Libros ($M)</th>
                    <th className="py-2.5 px-3">Riesgo Crítico por Afirmación (E, I, P, M, X)</th>
                    <th className="py-2.5 px-3">Procedimientos Clave del Programa de Trabajo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {rubrosSignificativos.map((r) => (
                    <tr key={r.id} className="hover:bg-slate-50">
                      <td className="py-3 px-3 font-bold text-slate-900">
                        <span className="text-teal-700 block font-mono text-[11px]">
                          {r.codigoPrograma}
                        </span>
                        {r.nombre}
                      </td>
                      <td className="py-3 px-3 text-right font-mono font-bold text-slate-800">
                        ${r.saldoContable.toLocaleString('es-AR')} M
                      </td>
                      <td className="py-3 px-3 text-slate-600 leading-relaxed">
                        {r.importancia}
                      </td>
                      <td className="py-3 px-3 text-slate-700">
                        <ul className="list-disc pl-4 space-y-0.5">
                          {r.programaTrabajo.map((b, i) => (
                            <li key={i}>
                              <strong>{b.Bloque}:</strong> {b.Pasos[0]}
                            </li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          SECCIÓN 2: RESUMEN COMPLETO DE LA ETAPA 2 (EJECUCIÓN Y PAPELES DE TRABAJO)
         ===================================================================== */}
      {(filtroSeccion === 'todas' || filtroSeccion === 'etapa2') && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b-2 border-amber-500">
            <div>
              <span className="px-2.5 py-0.5 rounded bg-amber-500 text-white text-xs font-extrabold">
                ETAPA 2 — EJECUCIÓN DE PROCEDIMIENTOS, PAPELES DE TRABAJO Y PLANILLA PAE
              </span>
              <h3 className="text-lg font-extrabold text-slate-900 mt-1">
                2. Síntesis de Papeles de Trabajo (PT-A a PT-F), Hallazgos y Estado Dinámico de Ajustes Propuestos
              </h3>
            </div>
            <button
              onClick={() => onNavigate('etapa2-ejecucion')}
              className="no-print text-xs font-bold text-amber-700 hover:underline inline-flex items-center gap-1 cursor-pointer"
            >
              Ver Cédulas Sumarias y Analíticas <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Tabla Consolidada de Papeles de Trabajo PT-A a PT-F */}
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-100 text-slate-700 font-bold uppercase border-b border-slate-200">
                  <th className="py-2.5 px-3">Ref. PT</th>
                  <th className="py-2.5 px-3">Rubro Auditado</th>
                  <th className="py-2.5 px-3 text-right">Saldo Libros SAP ($M)</th>
                  <th className="py-2.5 px-3 text-right">Ajuste Propuesto ($M)</th>
                  <th className="py-2.5 px-3 text-right">Saldo Auditado ($M)</th>
                  <th className="py-2.5 px-3">Conclusión Técnica del Papel de Trabajo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {papelesTrabajo.map((pt) => (
                  <tr key={pt.id} className="hover:bg-slate-50">
                    <td className="py-3 px-3 font-mono font-extrabold text-teal-800">
                      <button
                        type="button"
                        onClick={() => onNavigate('etapa2-ejecucion', pt.id)}
                        className="underline hover:text-teal-600 cursor-pointer inline-flex items-center gap-0.5"
                        title={`Ir al Papel de Trabajo ${pt.codigo}`}
                      >
                        <span>{pt.codigo}</span>
                        <span className="text-[9px]">↗</span>
                      </button>
                      {pt.esPrioritario && (
                        <span className="block text-[9px] font-sans font-extrabold text-amber-600">
                          ⭐ Prioritario
                        </span>
                      )}
                      <span className="block text-[10px] font-sans text-slate-400">
                        {pt.fecha}
                      </span>
                    </td>
                    <td className="py-3 px-3 font-bold text-slate-900">{pt.rubro}</td>
                    <td className="py-3 px-3 text-right font-mono text-slate-700">
                      ${pt.saldoSegunLibros.toLocaleString('es-AR')}
                    </td>
                    <td
                      className={`py-3 px-3 text-right font-mono font-bold ${
                        pt.ajustePropuestoNeto < 0
                          ? 'text-red-600'
                          : pt.ajustePropuestoNeto > 0
                          ? 'text-amber-700'
                          : 'text-emerald-700'
                      }`}
                    >
                      {pt.ajustePropuestoNeto === 0
                        ? '0'
                        : `${pt.ajustePropuestoNeto > 0 ? '+' : ''}$${pt.ajustePropuestoNeto.toLocaleString('es-AR')}`}
                    </td>
                    <td className="py-3 px-3 text-right font-mono font-extrabold text-slate-900 bg-teal-50/30">
                      ${pt.saldoAuditado.toLocaleString('es-AR')}
                    </td>
                    <td className="py-3 px-3 text-slate-600 leading-relaxed">
                      {pt.conclusionRubro}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Tabla Resumen Interactiva de Hallazgos y Ajustes (PAE) */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                Planilla Consolidada de Hallazgos y Ajustes Propuestos (Cambiá el estado para actualizar la Etapa 3)
              </h4>
              <span className="text-xs font-bold text-rose-700">
                Umbral Mínimo PAE: $8.311M • Error Tolerable: $83.112M • Materialidad Global: $166.225M
              </span>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 font-bold uppercase border-b border-slate-200">
                    <th className="py-2.5 px-3">Hallazgo / Ajuste</th>
                    <th className="py-2.5 px-3">Rubro y Afirmación</th>
                    <th className="py-2.5 px-3">Origen en Control Interno (Etapa 1)</th>
                    <th className="py-2.5 px-3 text-right">Monto ($M)</th>
                    <th className="py-2.5 px-3 text-center">¿Supera PAE?</th>
                    <th className="py-2.5 px-3 text-center">Decisión Gerencia (Interactivo)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {ajustesState.map((aj) => (
                    <tr key={aj.id} className="hover:bg-slate-50">
                      <td className="py-2.5 px-3 font-mono font-extrabold text-slate-900">
                        {aj.codigoHallazgo} / {aj.codigoAjuste}
                        <span className="block text-[10px] text-teal-700">{aj.refPT}</span>
                      </td>
                      <td className="py-2.5 px-3">
                        <strong className="text-slate-800 block">{aj.rubro}</strong>
                        <span className="text-[11px] text-slate-500">{aj.afirmacionAfectada}</span>
                      </td>
                      <td className="py-2.5 px-3 text-slate-600">{aj.origenCCI}</td>
                      <td className="py-2.5 px-3 text-right font-mono font-extrabold text-slate-900">
                        ${aj.montoMillones.toLocaleString('es-AR')} M
                      </td>
                      <td className="py-2.5 px-3 text-center">
                        <span
                          className={`px-2 py-0.5 rounded font-bold text-[10px] ${
                            aj.superaPAE
                              ? 'bg-red-100 text-red-700'
                              : 'bg-slate-200 text-slate-600'
                          }`}
                        >
                          {aj.superaPAE ? 'SÍ (> $8.311M)' : 'NO (< $8.311M)'}
                        </span>
                      </td>
                      <td className="py-2.5 px-3 text-center">
                        {aj.superaPAE ? (
                          <button
                            onClick={() => onToggleAjusteAceptado(aj.id)}
                            className={`px-2.5 py-1 rounded-lg font-extrabold text-[11px] cursor-pointer transition-colors ${
                              aj.aceptado
                                ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                                : 'bg-red-100 text-red-700 border border-red-300'
                            }`}
                          >
                            {aj.aceptado ? '✓ Aceptado y Registrado' : '✗ No Registrado'}
                          </button>
                        ) : (
                          <span className="text-[11px] text-slate-400 italic">
                            No exigible (Trivial)
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          SECCIÓN 3: RESUMEN COMPLETO DE LA ETAPA 3 (CONCLUSIÓN E INFORME POR ORDEN DE REALIZACIÓN)
         ===================================================================== */}
      {(filtroSeccion === 'todas' || filtroSeccion === 'etapa3') && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b-2 border-indigo-600">
            <div>
              <span className="px-2.5 py-0.5 rounded bg-indigo-600 text-white text-xs font-extrabold">
                ETAPA 3 — CONCLUSIÓN Y EMISIÓN DEL INFORME (ORDEN CRONOLÓGICO DE REALIZACIÓN)
              </span>
              <h3 className="text-lg font-extrabold text-slate-900 mt-1">
                3. Secuencia de Cierre: 1° Carta Control Interno → 2° Memorando de Conclusión → 3° Carta de Gerencia → 4° Informe del Auditor Independiente
              </h3>
            </div>
            <button
              onClick={() => onNavigate('etapa3-informe')}
              className="no-print text-xs font-bold text-indigo-700 hover:underline inline-flex items-center gap-1 cursor-pointer"
            >
              Abrir Documentos Completos Etapa 3 <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            {/* Hito 1 */}
            <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 rounded bg-amber-500 text-white font-extrabold text-[10px]">
                    1° REALIZADO • 12/02/2026
                  </span>
                  <span className="font-mono text-[10px] text-slate-500">LC-01</span>
                </div>
                <h4 className="font-extrabold text-slate-900 text-sm">
                  Carta de Recomendaciones de Control Interno
                </h4>
                <p className="text-slate-600 mt-1.5 leading-relaxed">
                  Comunica al Directorio y Comité de Auditoría las debilidades detectadas en los 5 CCI (ISO 15489, archivo de obras interior, conciliación API 24-48 hs cobranzas externas, corte B2B Personal Tech, previsión mora &gt; 180 días, bajas centrales analógicas, reserva presupuestaria SAP y rotación en Compras).
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-amber-200/80 font-bold text-amber-900 text-[11px]">
                5 Recomendaciones Formales Emitidas
              </div>
            </div>

            {/* Hito 2 */}
            <div className="p-4 rounded-xl border border-teal-200 bg-teal-50/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 rounded bg-teal-700 text-white font-extrabold text-[10px]">
                    2° REALIZADO • 18/02/2026
                  </span>
                  <span className="font-mono text-[10px] text-slate-500">LC-02</span>
                </div>
                <h4 className="font-extrabold text-slate-900 text-sm">
                  Memorando Resumen de Auditoría
                </h4>
                <p className="text-slate-600 mt-1.5 leading-relaxed">
                  Documento interno elevado al Socio donde los encargados (Grebe - Pisonero De Biase) evalúan el cumplimiento de los Programas A-E, la suficiencia de la evidencia obtenida, la condición de empresa en marcha, el cumplimiento de covenants y la resolución de la Planilla PAE.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-teal-200/80 font-bold text-teal-900 text-[11px]">
                Aprobado previo a emitir el dictamen
              </div>
            </div>

            {/* Hito 3 */}
            <div className="p-4 rounded-xl border border-purple-200 bg-purple-50/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 rounded bg-purple-700 text-white font-extrabold text-[10px]">
                    3° REALIZADO • 20/02/2026 (Pre-Firma)
                  </span>
                  <span className="font-mono text-[10px] text-slate-500">LC-03</span>
                </div>
                <h4 className="font-extrabold text-slate-900 text-sm">
                  Carta de Representación de la Dirección
                </h4>
                <p className="text-slate-600 mt-1.5 leading-relaxed">
                  Manifestaciones escritas firmadas por el Presidente, CEO y CFO confirmando la integridad de la información suministrada en SAP, la razonabilidad de los supuestos del Test de Deterioro UGE Personal ($12.774.695M) y la inexistencia de hechos posteriores no revelados.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-purple-200/80 font-bold text-purple-900 text-[11px]">
                Requisito obligatorio RT 37 / RT 53
              </div>
            </div>

            {/* Hito 4 Final */}
            <div
              className={`p-4 rounded-xl border flex flex-col justify-between ${
                esOpinionLimpia
                  ? 'border-emerald-300 bg-emerald-50/40'
                  : 'border-red-300 bg-red-50/40'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 rounded bg-slate-900 text-white font-extrabold text-[10px]">
                    4° ÚLTIMO • 20/02/2026 (Emisión)
                  </span>
                  <span className="font-mono text-[10px] text-slate-500">RT 37 / 53</span>
                </div>
                <h4 className="font-extrabold text-slate-900 text-sm">
                  Informe del Auditor Independiente
                </h4>
                <p className="text-slate-700 mt-1.5 leading-relaxed">
                  Culminación del proceso secuencial. Incluye sección de Opinión, Fundamento, Cuestiones Clave de la Auditoría (KAM: Recuperabilidad UGE Personal $12.774.695M e Ingresos Convergentes IT) e Informe sobre Requerimientos Legales (ARCA / CNV).
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-300 font-extrabold text-xs">
                Dictamen Emitido:{' '}
                <span className={esOpinionLimpia ? 'text-emerald-800' : 'text-red-700'}>
                  {esOpinionLimpia
                    ? 'OPINIÓN FAVORABLE SIN SALVEDADES'
                    : `OPINIÓN CON SALVEDADES ($${montoNoRegistrado.toLocaleString('es-AR')}M)`}
                </span>
              </div>
            </div>
          </div>

          {/* Pie de Firma Académica y Profesional */}
          <div className="p-4 rounded-xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div>
              <p className="font-extrabold text-lime-400 uppercase">
                TRABAJO PRÁCTICO INTEGRAL DE AUDITORÍA EXTERNA — TELECOM ARGENTINA S.A. (EECC 2025)
              </p>
              <p className="text-slate-300 mt-0.5">
                Marco Teórico: Carlos A. Slosse • Normas de Auditoría: RT 37 (modif. RT 53) • Normas Contables del Ente: NIIF / NIC (IASB - Normas CNV)
              </p>
            </div>
            <div className="text-right shrink-0">
              <p className="font-extrabold text-white">GREBE — PISONERO DE BIASE</p>
              <p className="text-teal-300 text-[11px]">Universidad de la Cuenca del Plata (U.C.P.)</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
