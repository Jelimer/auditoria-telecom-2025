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
import { materialidadData } from '../data/etapa1Data';

export default function Etapa2EjecucionView({
  ajustesState,
  onToggleAjusteAceptado,
  onNavigate,
  subTarget,
  subTargetTick
}) {
  const [selectedPTId, setSelectedPTId] = useState('pt-a');

  useEffect(() => {
    if (!subTarget) return;
    if (subTarget.startsWith('pt-')) {
      setSelectedPTId(subTarget);
    } else if (subTarget === 'sec-pae') {
      setTimeout(() => {
        const el = document.getElementById('sec-pae');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 60);
    }
  }, [subTarget, subTargetTick]);

  const activePT = papelesTrabajo.find((pt) => pt.id === selectedPTId) || papelesTrabajo[0];

  // Cálculo del efecto acumulado de ajustes NO aceptados por la Gerencia
  const ajustesSuperanPAE = ajustesState.filter((a) => a.superaPAE);
  const montoAjustesNoRegistrados = ajustesSuperanPAE
    .filter((a) => !a.aceptado)
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
              Legajo Corriente de Papeles de Trabajo (PT-A a PT-E) y Planilla de Ajustes Propuestos
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Ejecución secuencial de los Programas A, B, C, D y E sobre los EECC de Telecom Argentina S.A. al 31/12/2025 • Obtención de elementos de juicio válidos y suficientes (RT 37 / RT 53).
            </p>
          </div>
          <button
            onClick={() => onNavigate('etapa3-informe')}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 transition-colors cursor-pointer"
          >
            Ir a Etapa 3: Conclusión e Informe del Auditor <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Selector de los 5 Papeles de Trabajo (PT-A a PT-E) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mt-4">
          {papelesTrabajo.map((pt) => {
            const isSelected = pt.id === selectedPTId;
            const tieneAjuste = pt.ajustePropuestoNeto !== 0;
            return (
              <button
                key={pt.id}
                onClick={() => setSelectedPTId(pt.id)}
                className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                    : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-white hover:border-teal-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-extrabold font-mono ${
                      isSelected ? 'bg-amber-500 text-white' : 'bg-amber-100 text-amber-900'
                    }`}
                  >
                    {pt.codigo} ({pt.programa})
                  </span>
                  <span
                    className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                      tieneAjuste
                        ? isSelected
                          ? 'bg-red-500 text-white'
                          : 'bg-red-100 text-red-700'
                        : isSelected
                        ? 'bg-emerald-500 text-white'
                        : 'bg-emerald-100 text-emerald-800'
                    }`}
                  >
                    {tieneAjuste ? 'Con Ajuste' : 'Conforme'}
                  </span>
                </div>
                <p className="text-xs font-extrabold mt-2 line-clamp-2">{pt.rubro}</p>
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
                    <td className="py-2.5 px-4 font-sans font-semibold text-slate-800">
                      {row.subcuenta}
                    </td>
                    <td className="py-2.5 px-4 text-right text-slate-700">
                      ${row.saldoLibros.toLocaleString('es-AR')}
                    </td>
                    <td className="py-2.5 px-4 text-right text-emerald-700 font-bold">
                      {row.debe > 0 ? `$${row.debe.toLocaleString('es-AR')}` : '-'}
                    </td>
                    <td className="py-2.5 px-4 text-right text-red-600 font-bold">
                      {row.haber > 0 ? `$${row.haber.toLocaleString('es-AR')}` : '-'}
                    </td>
                    <td className="py-2.5 px-4 text-right font-extrabold text-slate-900 bg-teal-50/30">
                      ${row.saldoAuditado.toLocaleString('es-AR')}
                    </td>
                    <td className="py-2.5 px-4 text-center font-bold text-teal-700 text-sm">
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
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-600 mb-2">
            2. Cédulas Analíticas y Pruebas Sustantivas Ejecutadas
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activePT.procedimientosEjecutados.map((proc) => {
              const hasIssue = proc.marca.includes('⊗');
              return (
                <div
                  key={proc.ref}
                  className={`p-4 rounded-xl border ${
                    hasIssue
                      ? 'border-red-200 bg-red-50/30'
                      : 'border-slate-200 bg-slate-50/50'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-white font-mono text-xs font-bold">
                      {proc.ref}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {proc.afirmaciones.map((af, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded bg-teal-100 text-teal-800 font-bold text-[10px]"
                        >
                          {af}
                        </span>
                      ))}
                      <span className="px-2 py-0.5 rounded bg-white border border-slate-300 font-mono font-extrabold text-xs text-teal-800">
                        {proc.marca}
                      </span>
                    </div>
                  </div>
                  <h5 className="text-xs font-extrabold text-slate-900 mb-1.5">{proc.nombre}</h5>
                  <p className="text-[11px] text-slate-500 mb-2">
                    <strong>Muestra examinada:</strong> {proc.muestra}
                  </p>
                  <p className="text-xs text-slate-700 leading-relaxed bg-white p-2.5 rounded-lg border border-slate-200/80">
                    {proc.resultado}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Conclusión Técnica del Papel de Trabajo + Leyenda de Marcas */}
        <div className="p-4 rounded-xl bg-teal-50/60 border border-teal-200 space-y-3">
          <div>
            <span className="text-xs font-extrabold uppercase text-teal-900 block">
              Conclusión del Auditor sobre {activePT.rubro}:
            </span>
            <p className="text-xs text-slate-800 mt-1 font-medium leading-relaxed">
              {activePT.conclusionRubro}
            </p>
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
                Desvíos Materiales No Registrados
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
                  ? 'Opinión Favorable Limpia'
                  : 'Con Salvedades por Valuación/Corte'}
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {ajustesState.map((item) => (
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
          ))}
        </div>
      </div>
    </div>
  );
}
