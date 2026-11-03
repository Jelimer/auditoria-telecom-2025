import React, { useState, useEffect } from 'react';
import {
  Calculator,
  Layers,
  CheckCircle2,
  Calendar,
  FileText,
  ShieldAlert,
  ArrowRight,
  Filter
} from 'lucide-react';
import {
  materialidadData,
  rubrosSignificativos,
  cronogramaAuditoria,
  marcoTeoricoSlosse
} from '../data/etapa1Data';

export default function Etapa1PlanDetalladaView({ onNavigate, subTarget, subTargetTick }) {
  const [selectedRubroId, setSelectedRubroId] = useState('rubro-1');
  const [filtroAfirmacion, setFiltroAfirmacion] = useState('TODAS'); // 'TODAS' | 'Existencia' | 'Integridad' | 'Propiedad' | 'Medición' | 'Exposición'
  const [modoVista, setModoVista] = useState('por-rubro'); // 'por-rubro' | 'transversal-afirmacion'

  useEffect(() => {
    if (!subTarget) return;
    if (subTarget === 'sec-1c-rubros') {
      setModoVista('por-rubro');
    }
    setTimeout(() => {
      const el = document.getElementById(subTarget);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 60);
  }, [subTarget, subTargetTick]);

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
            <span className="px-2.5 py-1 rounded-md text-xs font-extrabold bg-teal-600 text-white">
              ETAPA 1.4 Y 1.5 — PLANIFICACIÓN DETALLADA (MATERIALIDAD, AFIRMACIONES Y PROGRAMAS A-E)
            </span>
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

        {/* Tarjetas de Materialidad (PM, ET, PAE) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-5">
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
            <span className="text-[11px] font-extrabold uppercase text-slate-500">
              Base de Referencia Patrimonial
            </span>
            <p className="text-xl font-extrabold text-slate-900 mt-1 font-mono">
              ${materialidadData.activoTotal.toLocaleString('es-AR')} M
            </p>
            <p className="text-xs font-semibold text-slate-700 mt-0.5">Activo Total Consolidado</p>
            <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
              {materialidadData.criterioBase}
            </p>
          </div>

          <div className="p-4 rounded-xl border border-teal-200 bg-teal-50/40">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-extrabold uppercase text-teal-800">
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

          <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/40">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-extrabold uppercase text-amber-800">
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

          <div className="p-4 rounded-xl border border-rose-200 bg-rose-50/40">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-extrabold uppercase text-rose-800">
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
              Ver por Rubro (Programas A-E)
            </button>
            <button
              onClick={() => setModoVista('transversal-afirmacion')}
              className={`px-3 py-1 rounded-lg text-xs font-bold cursor-pointer ${
                modoVista === 'transversal-afirmacion'
                  ? 'bg-teal-700 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Comparar Afirmación en los 5 Rubros
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {marcoTeoricoSlosse.afirmacionesDefinicion.map((af) => {
            const isSelected = filtroAfirmacion === af.nombre;
            return (
              <div
                key={af.codigo}
                onClick={() =>
                  setFiltroAfirmacion(filtroAfirmacion === af.nombre ? 'TODAS' : af.nombre)
                }
                className={`p-3 rounded-xl border transition-all cursor-pointer ${
                  isSelected
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
          {/* Selector de los 5 Rubros Significativos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {rubrosSignificativos.map((rubro) => {
              const active = rubro.id === selectedRubroId;
              return (
                <button
                  key={rubro.id}
                  onClick={() => setSelectedRubroId(rubro.id)}
                  className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                    active
                      ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                      : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-white hover:border-teal-400'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[10px] font-extrabold px-2 py-0.5 rounded ${
                        active ? 'bg-teal-500 text-white' : 'bg-teal-100 text-teal-800'
                      }`}
                    >
                      {rubro.codigoPrograma}
                    </span>
                    <span className="text-[10px] font-mono opacity-80">
                      RC: {rubro.riesgoControl}
                    </span>
                  </div>
                  <p className="text-xs font-extrabold mt-2 line-clamp-2">{rubro.nombre}</p>
                  <p className="text-xs font-mono font-bold mt-1.5 text-teal-400">
                    ${rubro.saldoContable.toLocaleString('es-AR')} M
                  </p>
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
                      <td className="py-4 px-4 align-top font-medium text-slate-800 leading-relaxed">
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
              <button
                onClick={() =>
                  onNavigate(
                    'etapa2-ejecucion',
                    activeRubro.codigoPrograma.replace('PROGRAMA ', 'pt-').toLowerCase()
                  )
                }
                className="px-3 py-1.5 rounded-lg bg-lime-500 text-slate-950 text-xs font-extrabold hover:bg-lime-400 transition-colors cursor-pointer"
              >
                Ejecutar / Ver Papel de Trabajo {activeRubro.codigoPrograma.replace('PROGRAMA ', 'PT-')} →
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeRubro.programaTrabajo.map((bloque, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-teal-900/70 border border-teal-800 space-y-2"
                >
                  <h5 className="text-xs font-extrabold uppercase text-lime-300">
                    {i + 1}. {bloque.Bloque}
                  </h5>
                  <ul className="space-y-1.5 text-xs text-teal-50 list-disc pl-4 leading-relaxed">
                    {bloque.Pasos.map((paso, j) => (
                      <li key={j}>{paso}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* MODO 2: VISTA TRANSVERSAL POR AFIRMACIÓN EN LOS 5 RUBROS */
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
            <h3 className="text-base font-extrabold text-slate-900">
              Matriz Transversal de Afirmaciones en los 5 Rubros Significativos ({filtroAfirmacion})
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

      {/* CRONOGRAMA DE LOS PROCEDIMIENTOS (3 Momentos: Interino, Pre-Cierre, Cierre Final) */}
      <div id="sec-1c-cronograma" className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs scroll-mt-20">
        <div className="flex items-center gap-2 pb-4 border-b border-slate-100 mb-5">
          <Calendar className="w-5 h-5 text-teal-700" />
          <div>
            <h3 className="text-base font-extrabold text-slate-900">
              3. Cronograma de los Procedimientos de Auditoría (Oportunidad de las Pruebas)
            </h3>
            <p className="text-xs text-slate-500">
              Planificación temporal de las visitas de auditoría externa para el cierre del ejercicio 31/12/2025
            </p>
          </div>
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
                <h4 className="text-sm font-extrabold text-slate-900 mb-2">{item.fase}</h4>
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

      {/* MEMORANDO DE PLANIFICACIÓN DE AUDITORÍA (Documento Formal de Cierre de la Etapa 1 según Carlos Slosse) */}
      <div id="sec-1c-memorando-planificacion" className="bg-white rounded-2xl border border-teal-200 p-6 shadow-xs scroll-mt-20">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-4">
          <div>
            <span className="px-2.5 py-1 rounded-md text-xs font-extrabold bg-teal-700 text-white">
              DOCUMENTO DE CIERRE DE LA ETAPA 1 — MEMORANDO DE PLANIFICACIÓN (CARLOS SLOSSE)
            </span>
            <h3 className="text-lg font-extrabold text-slate-900 mt-2">
              4. Memorando de Planificación Estratégica y Detallada (Aprobado el 28/10/2025)
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
              Emitir una opinión independiente sobre los Estados Contables Consolidados de <strong>Telecom Argentina S.A.</strong> al 31/12/2025 conforme a la RT 37 (modif. RT 53) de la FACPCE, verificando la aplicación de las Normas Internacionales de Información Financiera (NIIF / NIC del IASB - Normas CNV) en moneda homogénea (NIC 29).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
            <h4 className="font-extrabold text-teal-900 uppercase">
              II. Síntesis de Riesgos y Enfoque Determinado
            </h4>
            <p className="text-slate-700 leading-relaxed">
              Habiendo relevado los 5 componentes de Control Interno (Archivo Documental NC 15,38%, Sistema Contable NC 20,00%, Presupuestos NC 22,22%, Operativo NC 23,33% y Tecnológico NC 19,05%), el Riesgo de Control resulta <strong>ALTO</strong>. En consecuencia, se define un <strong>Enfoque Predominantemente Sustantivo</strong> con pruebas de detalle y analíticas de alto alcance.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
            <h4 className="font-extrabold text-teal-900 uppercase">
              III. Parámetros de Materialidad Aprobados
            </h4>
            <p className="text-slate-700 leading-relaxed">
              • <strong>Materialidad Global de Planeación (PM):</strong> $166.225 millones (1% del Activo Total de $16.622.552M).<br />
              • <strong>Error Tolerable (ET):</strong> $83.112 millones (50% de PM).<br />
              • <strong>Monto Mínimo de Ajustes (PAE):</strong> $8.311 millones (5% de ET).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
            <h4 className="font-extrabold text-teal-900 uppercase">
              IV. Asignación de Recursos y Cronograma
            </h4>
            <p className="text-slate-700 leading-relaxed">
              Encargados: <strong>Grebe — Pisonero De Biase (U.C.P.)</strong> con asistencia de especialistas en Auditoría de Sistemas (CGTI / SAP) y Valuaciones Financieras (WACC / Test Deterioro UGE Personal). Ejecución en 3 visitas: Interina (Oct-Nov 2025), Pre-Cierre (Dic 2025) y Cierre Final (Ene-Feb 2026).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
