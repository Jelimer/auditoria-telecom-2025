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
  X
} from 'lucide-react';
import {
  materialidadData,
  rubrosSignificativos,
  cronogramaAuditoria,
  presupuestoHonorarios,
  marcoTeoricoSlosse
} from '../data/etapa1Data';

export default function Etapa1PlanDetalladaView({ onNavigate, subTarget, subTargetTick }) {
  const [selectedRubroId, setSelectedRubroId] = useState('rubro-1');
  const [filtroAfirmacion, setFiltroAfirmacion] = useState('TODAS'); // 'TODAS' | 'Existencia' | 'Integridad' | 'Propiedad' | 'Medición' | 'Exposición'
  const [modoVista, setModoVista] = useState('por-rubro'); // 'por-rubro' | 'transversal-afirmacion'
  const [modalTeorico, setModalTeorico] = useState(null); // null | materialidadData.materialidadGlobal.fundamentoTeorico | etc.

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

        {/* Tarjetas de Significatividad / Materialidad (Slosse / RT 37 / NIA 320 y 450) con Lamparita Flotante */}
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
              ¿Por qué el 5% y el caso de $3.120M?
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

        {/* Explicación Didáctica de qué es la Materialidad y qué se pretende en el punto 1.4 */}
        <div className="mt-5 p-4 rounded-xl bg-slate-900 text-white border border-teal-500/40 space-y-2.5 text-xs">
          <div className="flex items-center gap-2 text-lime-400 font-extrabold uppercase tracking-wider text-[11px]">
            <Calculator className="w-4 h-4 shrink-0" />
            ¿Qué es la Materialidad (Significatividad) y qué se pretende en este punto 1.4?
          </div>
          <p className="text-slate-200 leading-relaxed">
            En una compañía de la escala de <strong>Telecom Argentina S.A.</strong> (con un Activo Total de <strong>$16.622.552 millones</strong>, es decir, más de 16,6 billones de pesos), el auditor externo <strong>no busca exactitud matemática al centavo</strong>, sino <strong>razonabilidad</strong>. La <strong>Materialidad o Significatividad</strong> (según Carlos Slosse y la RT 37) es el <em>«termómetro o umbral numérico»</em> a partir del cual un error u omisión contable es tan grande que podría cambiar la decisión económica de un usuario que lee el Balance (un accionista en la bolsa, un banco acreedor o la CNV).
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
            <div className="p-3 rounded-lg bg-white/5 border border-white/10">
              <strong className="text-teal-300 block mb-0.5">
                1. Materialidad Global (PM = $166.225M — 1% del Activo):
              </strong>
              <span className="text-slate-300">
                Es el techo máximo para el Balance en su conjunto. Si al terminar la auditoría la suma de errores que la empresa se niega a corregir supera los <strong>$166.225M</strong>, los Estados Contables están distorsionados de forma generalizada.
              </span>
            </div>
            <div className="p-3 rounded-lg bg-white/5 border border-white/10">
              <strong className="text-amber-300 block mb-0.5">
                2. Error Tolerable (ET = $83.112M — 50% de la PM):
              </strong>
              <span className="text-slate-300">
                Es el límite máximo de error que toleramos dentro de <strong>cada rubro individual</strong> (por ejemplo, dentro de Bienes de Uso o dentro de Créditos por Ventas). Se fija a la mitad de la PM por prudencia, para evitar que varios errores medianos en distintas cuentas sumen más que la PM global, y nos sirve para definir el <strong>tamaño de las muestras</strong> a revisar.
              </span>
            </div>
            <div className="p-3 rounded-lg bg-white/5 border border-white/10">
              <strong className="text-rose-300 block mb-0.5">
                3. Umbral Mínimo de Ajustes (PAE = $8.311M — 5% de la PM):
              </strong>
              <span className="text-slate-300">
                Es el filtro de lo «claramente insignificante». Todo desvío que encontremos en la Etapa 2 que sea <strong>mayor a $8.311M</strong> (como los ajustes <code>AJ-01</code> a <code>AJ-04</code>) debe llevarse obligatoriamente a la Planilla de Ajustes Propuestos para exigir su corrección; si es menor a $8.311M (como los $3.120M de <code>PAE-NC-01</code>), se deja constancia pero no afecta la opinión.
              </span>
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
                Etapa 1.5.C — Presupuesto de Honorarios y Recursos (Slosse / NIA 300)
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
            2. ¿De dónde salen las 1.220 horas? (Presupuesto de Tiempo)
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
                <strong className="text-white">1. El porqué de las 12 semanas (3 meses):</strong>{' '}
                <em>«Planificamos un cronograma de 12 semanas corridas (Diciembre a Febrero) porque Telecom cotiza en la CNV y en la Bolsa de Nueva York (SEC), lo que le impone un plazo legal perentorio de 70 días corridos post-cierre para presentar sus estados contables auditados. Extender el encargo a 5 meses significaría caer en incumplimiento normativo con suspensión de cotización.»</em>
              </p>
              <p>
                <strong className="text-white">2. La estructura del equipo (5 profesionales):</strong>{' '}
                <em>«Conformamos un equipo piramidal de 5 miembros: 1 Socio a cargo de la dirección estratégica y firma del dictamen (120 hs, 10 hs/sem), 2 Seniors —Grebe y Pisonero— a cargo del trabajo de campo, programas y supervisión (400 hs en total, 17 hs/sem cada uno), y 2 Juniors dedicados a relevamientos físicos y tareas operativas (700 hs en total, 29 hs/sem cada uno). Esto totaliza exactamente 1.220 horas profesionales.»</em>
              </p>
              <p>
                <strong className="text-white">3. La aplicación del arancel oficial del CPCECABA:</strong>{' '}
                <em>«Para dotar de realismo y rigurosidad técnica al presupuesto, no inventamos valores arbitrarios: adoptamos la tabla arancelaria oficial del Consejo Profesional de Ciencias Económicas (CPCECABA) a Noviembre de 2026, donde 1 Módulo equivale a $15.980. La tarifa horaria surge de multiplicar los módulos de cada jerarquía: 2,5 módulos para el Junior ($39.950/h), 5,0 módulos para el Senior ($79.900/h) y 7,0 módulos para el Socio ($111.860/h). La sumatoria de las 1.220 horas arroja un subtotal de honorarios de $73.348.200.»</em>
              </p>
              <p>
                <strong className="text-white">4. Los gastos directos (10% out-of-pocket):</strong>{' '}
                <em>«Sumamos un 10% de gastos directos de bolsillo ($7.334.820) destinados específicamente a la auditoría: licencias temporales de software TAACs (IDEA/ACL) para procesar millones de registros de facturación masiva, traslados y viáticos para inspeccionar los 16 Data Centers y radiobases 5G en el interior, y circularizaciones postales y notariales. Con esto alcanzamos el Presupuesto Total de $80.683.020 (aprox. USD 55.452).»</em>
              </p>
              <p>
                <strong className="text-white">5. Conclusión de razonabilidad frente a la empresa:</strong>{' '}
                <em>«Frente a una compañía que factura más de $8,3 billones y posee un activo de $16,6 billones, un honorario de $80M representa el 0,00096% de las ventas. Mientras que firmas como PwC cobran más de USD 1,5 millones por un encargo corporativo de esta envergadura, presupuestar $80M con aranceles del Consejo para un equipo de 5 auditores demuestra máxima prudencia, respaldo matemático y excelencia académica.»</em>
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
              Una vez que en la <em>Planificación Preliminar (1A, 1B y 1C)</em> definimos que el Riesgo de Control de Telecom es ALTO y que aplicaremos un enfoque sustantivo, en la <strong>Planificación Detallada (1D)</strong> bajamos de la visión global a las <strong>cuentas individuales del Balance</strong>. Empezamos fijando los umbrales numéricos de <strong>Materialidad ($166.225M de PM, $83.112M de ET y $8.311M de PAE)</strong> y seleccionando los <strong>rubros más significativos y riesgosos</strong>: <em>PP&amp;E (Nota 9), Créditos por Ventas (Nota 5), Préstamos (Nota 14), Ventas (Nota 24), Activos Intangibles (Nota 10) y Llaves de Negocio (Nota 8)</em>, priorizando el enfoque de la cátedra en <strong>Bienes de Uso, Activos Intangibles y Créditos por Ventas</strong>.
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
