import React, { useState, useEffect } from 'react';
import {
  ClipboardCheck,
  AlertCircle,
  CheckCircle2,
  Filter,
  RotateCcw,
  Calculator,
  ShieldAlert,
  Search
} from 'lucide-react';

export default function Etapa1ControlInternoView({
  cuestionariosState,
  cciCalculados,
  onToggleRespuesta,
  onResetCuestionarios,
  subTarget,
  subTargetTick
}) {
  const [selectedId, setSelectedId] = useState(cuestionariosState[0]?.id || 'cci-1');
  const [filtroRespuesta, setFiltroRespuesta] = useState('TODOS'); // 'TODOS' | 'NO' | 'SI'
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    if (!subTarget) return;
    if (subTarget.startsWith('cci-')) {
      setSelectedId(subTarget);
    } else if (subTarget === 'sec-ponderacion') {
      setTimeout(() => {
        const el = document.getElementById('sec-ponderacion');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 60);
    }
  }, [subTarget, subTargetTick]);

  const activeCCI = cuestionariosState.find((c) => c.id === selectedId) || cuestionariosState[0];
  const activeCalc = cciCalculados.find((c) => c.id === selectedId) || cciCalculados[0];

  const preguntasFiltradas = activeCCI.preguntas.filter((p) => {
    const matchResp = filtroRespuesta === 'TODOS' || p.respuesta === filtroRespuesta;
    const matchSearch =
      !busqueda.trim() ||
      p.texto.toLowerCase().includes(busqueda.toLowerCase()) ||
      p.observacion.toLowerCase().includes(busqueda.toLowerCase());
    return matchResp && matchSearch;
  });

  return (
    <div className="space-y-6">
      {/* Encabezado */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <span className="px-2.5 py-1 rounded-md text-xs font-extrabold bg-teal-600 text-white">
              ETAPA 1.2 — RELEVAMIENTO Y EVALUACIÓN DEL CONTROL INTERNO (CCI)
            </span>
            <h2 className="text-xl font-extrabold text-slate-900 mt-2">
              Cuestionarios de Control Interno (5 Componentes) y Matrices de Confianza y Riesgo
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Elaborado por: <strong>GREBE - PISONERO DE BIASE</strong> • Período: 01/01/2025 al 31/12/2025 • Interactuá con las respuestas o filtrá las deficiencias (NO) para exponer cada componente.
            </p>
          </div>
          <button
            onClick={onResetCuestionarios}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Restaurar Valores Originales del TP
          </button>
        </div>

        {/* Pestañas de selección de los 5 Cuestionarios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mt-4">
          {cciCalculados.map((cci) => {
            const isSelected = cci.id === selectedId;
            return (
              <button
                key={cci.id}
                onClick={() => setSelectedId(cci.id)}
                className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-teal-900 text-white border-teal-900 shadow-sm'
                    : 'bg-slate-50 text-slate-800 border-slate-200 hover:border-teal-400 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between gap-1">
                  <span
                    className={`text-[10px] font-extrabold px-2 py-0.5 rounded ${
                      isSelected ? 'bg-teal-700 text-teal-100' : 'bg-teal-100 text-teal-800'
                    }`}
                  >
                    {cci.codigo}
                  </span>
                  <span
                    className={`text-[10px] font-extrabold px-2 py-0.5 rounded ${
                      cci.rcLabel === 'ALTO'
                        ? isSelected
                          ? 'bg-red-500 text-white'
                          : 'bg-red-100 text-red-700'
                        : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    RC: {cci.rcLabel}
                  </span>
                </div>
                <p className="text-xs font-bold mt-2 line-clamp-2">{cci.componente}</p>
                <div className="mt-2 pt-2 border-t border-current/10 flex items-center justify-between text-[11px]">
                  <span>NC: <strong>{cci.nc.toFixed(2)}%</strong></span>
                  <span>SI: {cci.positivas}/{cci.total}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Cuestionario Activo + Su Matriz de Nivel de Confianza y Riesgo de Control */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Tabla de Preguntas del CCI Activo (8 columnas) */}
        <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div>
              <span className="text-xs font-extrabold uppercase text-teal-700">
                {activeCCI.codigo} • {activeCCI.totalPreguntas} Preguntas Evaluadas
              </span>
              <h3 className="text-lg font-extrabold text-slate-900">
                Componente: {activeCCI.componente}
              </h3>
            </div>

            {/* Filtros rápidos (Todos / Solo Deficiencias NO / Solo SI) */}
            <div className="flex flex-wrap items-center gap-1.5">
              {[
                { id: 'TODOS', label: `Todas (${activeCCI.preguntas.length})` },
                { id: 'NO', label: `Deficiencias NO (${activeCalc.negativas})` },
                { id: 'SI', label: `Cumple SI (${activeCalc.positivas})` }
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setFiltroRespuesta(btn.id)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold cursor-pointer transition-colors ${
                    filtroRespuesta === btn.id
                      ? btn.id === 'NO'
                        ? 'bg-red-600 text-white'
                        : 'bg-teal-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          {/* Buscador dentro del cuestionario */}
          <div className="my-3 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Buscar en preguntas o fundamentación técnica (ej. SAP, ENACOM, ISO 15489, B2B, 5G)..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-teal-500"
            />
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200 max-h-[640px] overflow-y-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead className="sticky top-0 z-10 bg-slate-100 text-slate-700 font-bold uppercase border-b border-slate-200">
                <tr>
                  <th className="py-3 px-3 w-10 text-center">N°</th>
                  <th className="py-3 px-3 min-w-[220px]">Pregunta de Control Interno</th>
                  <th className="py-3 px-2 w-12 text-center">SI</th>
                  <th className="py-3 px-2 w-12 text-center">NO</th>
                  <th className="py-3 px-2 w-12 text-center">N/A</th>
                  <th className="py-3 px-3 min-w-[250px]">Observación y Fundamentación Técnica</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {preguntasFiltradas.map((p) => {
                  const isNo = p.respuesta === 'NO';
                  return (
                    <tr
                      key={p.n}
                      className={`transition-colors ${
                        isNo ? 'bg-red-50/50 hover:bg-red-50' : 'hover:bg-slate-50'
                      }`}
                    >
                      <td className="py-3 px-3 text-center font-mono font-bold text-slate-500">
                        {p.n}
                      </td>
                      <td className="py-3 px-3 font-medium text-slate-800 leading-relaxed">
                        {p.texto}
                      </td>
                      {['SI', 'NO', 'N/A'].map((opcion) => {
                        const active = p.respuesta === opcion;
                        return (
                          <td key={opcion} className="py-3 px-2 text-center">
                            <button
                              onClick={() => onToggleRespuesta(activeCCI.id, p.n, opcion)}
                              title={`Cambiar pregunta ${p.n} a ${opcion}`}
                              className={`w-7 h-7 rounded-md font-extrabold text-xs transition-all cursor-pointer ${
                                active
                                  ? opcion === 'SI'
                                    ? 'bg-emerald-600 text-white shadow-2xs'
                                    : opcion === 'NO'
                                    ? 'bg-red-600 text-white shadow-2xs ring-2 ring-red-200'
                                    : 'bg-slate-600 text-white'
                                  : 'bg-slate-100 text-slate-300 hover:bg-slate-200 hover:text-slate-600'
                              }`}
                            >
                              {active ? 'X' : ''}
                            </button>
                          </td>
                        );
                      })}
                      <td className="py-3 px-3 text-slate-600 leading-relaxed">
                        {isNo && (
                          <span className="inline-block px-1.5 py-0.5 rounded bg-red-100 text-red-700 font-bold text-[10px] mr-1.5">
                            DEFICIENCIA
                          </span>
                        )}
                        {p.observacion}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap justify-between text-[11px] text-slate-500 font-medium">
            <span>ELABORADO POR: <strong>{activeCCI.elaboradoPor}</strong></span>
            <span>Fecha: <strong>{activeCCI.fecha}</strong></span>
          </div>
        </div>

        {/* Matriz de Niveles de Confianza y Riesgo de Control del Componente (4 columnas) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-100 mb-4">
              <Calculator className="w-4 h-4 text-teal-700" />
              <h4 className="text-sm font-extrabold text-slate-900 uppercase">
                Matriz de Niveles de Confianza y Riesgo de Control
              </h4>
            </div>

            <div className="space-y-2 text-xs bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              <p className="font-bold text-slate-800 border-b border-slate-200 pb-1.5">
                Datos Obtenidos ({activeCCI.componente}):
              </p>
              <div className="flex justify-between">
                <span className="text-slate-600">Cantidad de Preguntas (C.P):</span>
                <span className="font-mono font-bold text-slate-900">{activeCalc.total}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Preguntas Positivas (C.P.P - Respuestas SI):</span>
                <span className="font-mono font-bold text-emerald-700">{activeCalc.positivas}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Preguntas Negativas (Respuestas NO):</span>
                <span className="font-mono font-bold text-red-600">{activeCalc.negativas}</span>
              </div>
            </div>

            {/* Desarrollo Matemático Exacto del Trabajo Práctico */}
            <div className="mt-3 grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200 text-xs">
                <p className="font-extrabold text-amber-900 text-[11px] uppercase">
                  Nivel del Riesgo Inherente (RI)
                </p>
                <p className="font-mono text-[11px] text-slate-600 mt-1">
                  RI = (C.P.P / C.P) × 100
                </p>
                <p className="font-mono text-[11px] text-slate-600">
                  RI = ({activeCalc.positivas} / {activeCalc.total}) × 100
                </p>
                <p className="text-base font-extrabold text-amber-900 mt-1 font-mono">
                  RI = {activeCalc.ri.toFixed(2)}%
                </p>
              </div>

              <div className="p-3 rounded-xl bg-teal-50/70 border border-teal-200 text-xs">
                <p className="font-extrabold text-teal-900 text-[11px] uppercase">
                  Nivel de Confianza (NC)
                </p>
                <p className="font-mono text-[11px] text-slate-600 mt-1">
                  NC = 100% - RI
                </p>
                <p className="font-mono text-[11px] text-slate-600">
                  NC = 100% - {activeCalc.ri.toFixed(2)}%
                </p>
                <p className="text-base font-extrabold text-teal-900 mt-1 font-mono">
                  NC = {activeCalc.nc.toFixed(2)}%
                </p>
              </div>
            </div>

            {/* Escala / Tabla de Parametrización del TP */}
            <div className="mt-4 overflow-hidden rounded-xl border border-slate-300 text-center text-xs">
              <div className="bg-slate-800 text-white font-extrabold py-1.5 uppercase tracking-wider text-[11px]">
                NIVEL DE CONFIANZA
              </div>
              <div className="grid grid-cols-3 divide-x divide-slate-300 border-b border-slate-300 font-bold">
                <div className={`py-1.5 ${activeCalc.ncLabel === 'BAJO' ? 'bg-red-600 text-white' : 'bg-slate-100 text-slate-700'}`}>
                  BAJO
                </div>
                <div className={`py-1.5 ${activeCalc.ncLabel === 'MEDIO' ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-700'}`}>
                  MEDIO
                </div>
                <div className={`py-1.5 ${activeCalc.ncLabel === 'ALTO' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700'}`}>
                  ALTO
                </div>
              </div>
              <div className="grid grid-cols-3 divide-x divide-slate-300 border-b border-slate-300 font-mono text-[11px] py-1.5 bg-white">
                <div className={activeCalc.ncLabel === 'BAJO' ? 'font-extrabold text-red-700 bg-red-50' : ''}>15% - 50%</div>
                <div className={activeCalc.ncLabel === 'MEDIO' ? 'font-extrabold text-amber-700 bg-amber-50' : ''}>51% - 75%</div>
                <div className={activeCalc.ncLabel === 'ALTO' ? 'font-extrabold text-emerald-700 bg-emerald-50' : ''}>76% - 95%</div>
              </div>
              <div className="grid grid-cols-3 divide-x divide-slate-300 border-b border-slate-300 font-mono text-[11px] py-1.5 bg-white">
                <div className={activeCalc.rcLabel === 'ALTO' ? 'font-extrabold text-red-700 bg-red-50' : ''}>85% - 50%</div>
                <div className={activeCalc.rcLabel === 'MEDIO' ? 'font-extrabold text-amber-700 bg-amber-50' : ''}>49% - 25%</div>
                <div className={activeCalc.rcLabel === 'BAJO' ? 'font-extrabold text-emerald-700 bg-emerald-50' : ''}>24% - 5%</div>
              </div>
              <div className="grid grid-cols-3 divide-x divide-slate-300 font-bold">
                <div className={`py-1.5 ${activeCalc.rcLabel === 'ALTO' ? 'bg-red-600 text-white' : 'bg-slate-100 text-slate-700'}`}>
                  ALTO
                </div>
                <div className={`py-1.5 ${activeCalc.rcLabel === 'MEDIO' ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-700'}`}>
                  MEDIO
                </div>
                <div className={`py-1.5 ${activeCalc.rcLabel === 'BAJO' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700'}`}>
                  BAJO
                </div>
              </div>
              <div className="bg-slate-800 text-white font-extrabold py-1.5 uppercase tracking-wider text-[11px]">
                NIVEL DE RIESGO DE CONTROL
              </div>
            </div>

            {/* Resultado Cuantitativo y Comentario Técnico */}
            <div className="mt-4 p-3.5 rounded-xl bg-red-50 border border-red-200 space-y-1.5 text-xs">
              <p className="font-extrabold text-red-900 uppercase text-[11px]">
                Resultado Cuantitativo Obtenido:
              </p>
              <p className="font-bold text-slate-900">
                • Nivel de Confianza (NC): <span className="text-red-700">{activeCalc.nc.toFixed(2)}% ({activeCalc.ncLabel})</span>
              </p>
              <p className="font-bold text-slate-900">
                • Riesgo de Control (RC): <span className="text-red-700">({activeCalc.rcLabel})</span>
              </p>
            </div>

            <div className="mt-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
              <p className="font-extrabold text-slate-800 uppercase text-[11px] mb-1">
                Comentario y Dictamen Preliminar del Componente:
              </p>
              <p className="text-slate-600 leading-relaxed">{activeCCI.comentario}</p>
            </div>
          </div>
        </div>
      </div>

      {/* MATRIZ DE PONDERACIÓN DE LA PLANIFICACIÓN PRELIMINAR (Consolidada de los 5 Componentes) */}
      <div id="sec-ponderacion" className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs scroll-mt-20">
        <div className="pb-4 border-b border-slate-100 mb-4">
          <span className="px-2.5 py-1 rounded-md text-xs font-extrabold bg-amber-500 text-white">
            ETAPA 1.3 — MATRIZ CONSOLIDADA DE PONDERACIÓN DE LA PLANIFICACIÓN PRELIMINAR
          </span>
          <h3 className="text-lg font-extrabold text-slate-900 mt-2">
            Matriz de Ponderación de la Planificación Preliminar y Cuentas Afectadas — Empresa: TELECOM S.A.
          </h3>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-100 text-slate-700 font-bold uppercase border-b border-slate-200">
                <th className="py-3 px-4">Componente Evaluado</th>
                <th className="py-3 px-3 text-center">Nivel Confianza</th>
                <th className="py-3 px-3 text-center">Riesgo Inherente</th>
                <th className="py-3 px-3 text-center">Riesgo de Control</th>
                <th className="py-3 px-4 min-w-[260px]">Justificación del Riesgo y Cuentas Afectadas</th>
                <th className="py-3 px-4 min-w-[260px]">Enfoque de la Planificación Preliminar</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {cciCalculados.map((cci) => (
                <tr key={cci.id} className="hover:bg-slate-50">
                  <td className="py-3.5 px-4 font-bold text-slate-900">
                    {cci.componente}
                    <div className="text-[11px] font-semibold text-teal-700 mt-1">
                      Rubros: {cci.cuentasAfectadas}
                    </div>
                  </td>
                  <td className="py-3.5 px-3 text-center font-mono font-bold text-slate-800">
                    {cci.nc.toFixed(2)}% ({cci.ncLabel})
                  </td>
                  <td className="py-3.5 px-3 text-center">
                    <span className="px-2.5 py-0.5 rounded-full bg-red-100 text-red-700 font-extrabold">
                      {cci.riesgoInherente}
                    </span>
                  </td>
                  <td className="py-3.5 px-3 text-center">
                    <span className="px-2.5 py-0.5 rounded-full bg-red-600 text-white font-extrabold">
                      {cci.rcLabel}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-600 leading-relaxed">
                    {cci.comentario}
                  </td>
                  <td className="py-3.5 px-4 font-medium text-teal-950 bg-teal-50/30 leading-relaxed">
                    {cci.enfoquePlanificacion}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
