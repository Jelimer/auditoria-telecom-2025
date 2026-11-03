import React, { useState } from 'react';
import { UserPlus, Search, Filter, RotateCcw } from 'lucide-react';

export default function EquipoTrabajoView({
  equipoTasks,
  onCycleTaskStatus,
  onAddTask,
  onResetTasks
}) {
  const [busqueda, setBusqueda] = useState('');
  const [filtroEtapa, setFiltroEtapa] = useState('TODAS');
  const [showModal, setShowModal] = useState(false);

  const [nuevaTarea, setNuevaTarea] = useState({
    solicitud: '',
    rubro: 'Bienes de Uso',
    etapa: 'Ejecución',
    responsable: 'Grebe',
    fecha: '15/02/2026',
    avance: '1/1'
  });

  const colorDotStyles = {
    red: 'bg-red-500 ring-red-200',
    blue: 'bg-blue-600 ring-blue-200',
    green: 'bg-emerald-500 ring-emerald-200',
    yellow: 'bg-yellow-400 ring-yellow-200',
    purple: 'bg-purple-600 ring-purple-200'
  };

  const tasksFiltradas = equipoTasks.filter((t) => {
    const matchEtapa = filtroEtapa === 'TODAS' || t.etapa === filtroEtapa;
    const matchSearch =
      !busqueda.trim() ||
      t.solicitud.toLowerCase().includes(busqueda.toLowerCase()) ||
      t.responsable.toLowerCase().includes(busqueda.toLowerCase()) ||
      t.rubro.toLowerCase().includes(busqueda.toLowerCase());
    return matchEtapa && matchSearch;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nuevaTarea.solicitud.trim()) return;
    onAddTask(nuevaTarea);
    setNuevaTarea({
      solicitud: '',
      rubro: 'Bienes de Uso',
      etapa: 'Ejecución',
      responsable: 'Grebe',
      fecha: '15/02/2026',
      avance: '1/1'
    });
    setShowModal(false);
  };

  return (
    <div className="space-y-6">
      {/* Contenedor Principal estilo AuditBrain "Equipo de Trabajo" (Imagen 4) */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-lime-600">
              Módulo FaroAudita 04 — Gestión Colaborativa del Encargo
            </span>
            <h2 className="text-2xl font-extrabold text-lime-600 tracking-tight">
              Equipo de Trabajo
            </h2>
          </div>
          <button
            onClick={onResetTasks}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-100 text-slate-600 hover:bg-slate-200 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Restaurar Asignaciones
          </button>
        </div>

        {/* Barra "Proyecto" */}
        <div className="mt-4 py-3 px-4 rounded-xl border border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-2">
          <span className="text-sm font-bold text-slate-800">
            Proyecto:{' '}
            <strong className="text-teal-800">
              Telecom Argentina S.A. — Auditoría Externa EECC al 31/12/2025
            </strong>
          </span>
          <span className="text-xs font-semibold text-slate-500">
            Responsables Principales: <strong>Grebe — Pisonero De Biase</strong> + Especialistas TI / Valuaciones
          </span>
        </div>

        {/* Controles: + Agregar Miembro | Buscador central | Botón Filtros (Exacto a Imagen 4) */}
        <div className="mt-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <button
            onClick={() => setShowModal(!showModal)}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-lime-500 hover:bg-lime-600 text-white font-extrabold text-xs shadow-xs transition-colors cursor-pointer"
          >
            <UserPlus className="w-4 h-4" /> + Agregar Miembro / Solicitud
          </button>

          <div className="relative flex-1 max-w-md mx-auto w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-2.5" />
            <input
              type="text"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Buscar por solicitud, papel de trabajo o miembro (ej. Grebe, Pisonero, PT-A)..."
              className="w-full pl-9 pr-4 py-2 rounded-full bg-slate-200/70 text-xs text-slate-800 placeholder:text-slate-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="flex items-center gap-2">
            {['TODAS', 'Planeación', 'Ejecución', 'Finalización'].map((et) => (
              <button
                key={et}
                onClick={() => setFiltroEtapa(et)}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                  filtroEtapa === et
                    ? 'bg-teal-700 text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {et === 'TODAS' ? 'Filtros: Todas' : et}
              </button>
            ))}
          </div>
        </div>

        {/* Formulario desplegable para agregar nueva solicitud / miembro */}
        {showModal && (
          <form
            onSubmit={handleSubmit}
            className="mt-4 p-4 rounded-xl bg-lime-50/60 border border-lime-300 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-end"
          >
            <div className="lg:col-span-2">
              <label className="text-[11px] font-bold text-slate-700 block mb-1">
                Solicitud / Procedimiento de Auditoría
              </label>
              <input
                type="text"
                required
                value={nuevaTarea.solicitud}
                onChange={(e) => setNuevaTarea({ ...nuevaTarea, solicitud: e.target.value })}
                placeholder="Ej. Arqueo valores en custodia Caja de Valores..."
                className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white text-xs"
              />
            </div>
            <div>
              <label className="text-[11px] font-bold text-slate-700 block mb-1">
                Responsable Asignado
              </label>
              <input
                type="text"
                required
                value={nuevaTarea.responsable}
                onChange={(e) => setNuevaTarea({ ...nuevaTarea, responsable: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white text-xs"
              />
            </div>
            <div>
              <label className="text-[11px] font-bold text-slate-700 block mb-1">
                Etapa del Proceso
              </label>
              <select
                value={nuevaTarea.etapa}
                onChange={(e) => setNuevaTarea({ ...nuevaTarea, etapa: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white text-xs"
              >
                <option value="Planeación">Planeación</option>
                <option value="Ejecución">Ejecución</option>
                <option value="Finalización">Finalización</option>
              </select>
            </div>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-teal-700 text-white font-extrabold text-xs hover:bg-teal-800 cursor-pointer"
            >
              Guardar en Tablero
            </button>
          </form>
        )}

        {/* Tabla de Solicitudes y Responsables con Semáforo Interactivo (Exacta a Imagen 4) */}
        <div className="mt-5 overflow-x-auto rounded-xl border border-slate-300">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-white text-slate-800 font-bold border-b border-slate-300 text-sm">
                <th className="py-3.5 px-4">Solicitud / Procedimiento</th>
                <th className="py-3.5 px-4">Rubro / Etapa</th>
                <th className="py-3.5 px-4">Responsable</th>
                <th className="py-3.5 px-4 text-center">Fecha</th>
                <th className="py-3.5 px-4 text-center">Estado (Clic para cambiar)</th>
                <th className="py-3.5 px-4 text-center">Avance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-300">
              {tasksFiltradas.map((t, idx) => (
                <tr
                  key={t.id}
                  className={idx % 2 === 0 ? 'bg-slate-200/60 hover:bg-slate-200' : 'bg-slate-100/60 hover:bg-slate-200/80'}
                >
                  <td className="py-3.5 px-4 font-bold text-slate-900">{t.solicitud}</td>
                  <td className="py-3.5 px-4">
                    <span className="font-semibold text-slate-700">{t.rubro}</span>
                    <span className="ml-2 px-2 py-0.5 rounded bg-white text-teal-800 font-bold text-[10px] border border-slate-200">
                      {t.etapa}
                    </span>
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="font-bold text-slate-800">{t.responsable}</div>
                    <div className="text-[10px] text-slate-500">{t.rol}</div>
                  </td>
                  <td className="py-3.5 px-4 text-center font-mono text-slate-700">{t.fecha}</td>
                  <td className="py-3.5 px-4 text-center">
                    <button
                      onClick={() => onCycleTaskStatus(t.id)}
                      title="Hacé clic para rotar el estado del semáforo"
                      className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-300 shadow-2xs hover:scale-105 transition-transform cursor-pointer"
                    >
                      <span
                        className={`w-4 h-4 rounded-full ring-2 border border-slate-700/30 ${
                          colorDotStyles[t.colorEstado] || colorDotStyles.green
                        }`}
                      />
                      <span className="text-[11px] font-bold text-slate-700">{t.estado}</span>
                    </button>
                  </td>
                  <td className="py-3.5 px-4 text-center font-mono font-extrabold text-slate-900">
                    {t.avance}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Leyenda de Semáforo AuditBrain */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5">
              <i className="w-3 h-3 rounded-full bg-red-500 inline-block border border-slate-600/30" /> Observado / Con Hallazgo PAE
            </span>
            <span className="flex items-center gap-1.5">
              <i className="w-3 h-3 rounded-full bg-blue-600 inline-block border border-slate-600/30" /> Validado por Especialista
            </span>
            <span className="flex items-center gap-1.5">
              <i className="w-3 h-3 rounded-full bg-emerald-500 inline-block border border-slate-600/30" /> Aprobado / Sin Salvedad
            </span>
            <span className="flex items-center gap-1.5">
              <i className="w-3 h-3 rounded-full bg-yellow-400 inline-block border border-slate-600/30" /> En Revisión de Supervisión
            </span>
            <span className="flex items-center gap-1.5">
              <i className="w-3 h-3 rounded-full bg-purple-600 inline-block border border-slate-600/30" /> En Cierre Final de Informe
            </span>
          </div>
          <span>Hacé clic en cualquier círculo de estado para actualizar en vivo el dashboard</span>
        </div>
      </div>
    </div>
  );
}
