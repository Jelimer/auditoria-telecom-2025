import React, { useState, useEffect } from 'react';
import {
  ShieldAlert,
  CheckCircle2,
  FileSpreadsheet,
  TrendingUp,
  Layers,
  Award,
  ArrowRight,
  Building2,
  Calculator,
  ClipboardCheck,
  AlertTriangle,
  Users
} from 'lucide-react';
import { SemiGaugeChart, DonutStatusChart, NivelesLineChart } from './AuditBrainCharts';
import { proyectoMeta, marcoTeoricoSlosse, materialidadData, rubrosSignificativos } from '../data/etapa1Data';

export default function DashboardView({
  cciCalculados,
  equipoTasks,
  ajustesState,
  onNavigate,
  subTarget,
  subTargetTick,
  brandName = 'SendaAudita'
}) {
  const [riskTab, setRiskTab] = useState('inherente'); // 'inherente' | 'control' | 'residual'
  const [subVista, setSubVista] = useState('todas'); // 'todas' | 'reporte' | 'control' | 'proyectos'

  useEffect(() => {
    if (subTarget && ['todas', 'reporte', 'control', 'proyectos'].includes(subTarget)) {
      setSubVista(subTarget);
    }
  }, [subTarget, subTargetTick]);

  // Cálculo dinámico de avance general basado en tareas del equipo
  const totalTasks = equipoTasks.length;
  const avgProgress = Math.round(
    equipoTasks.reduce((acc, t) => acc + (t.porcentaje || 0), 0) / Math.max(1, totalTasks)
  );

  // Conteo de estados para los gráficos de Dona ("Proyectos" de AuditBrain)
  const countByEstado = (estado) => equipoTasks.filter((t) => t.estado === estado).length;
  const donutProyecto1 = [
    { label: 'Aprobado', value: countByEstado('Aprobado'), color: '#7c3aed' },
    { label: 'Observado (Hallazgo)', value: countByEstado('Observado'), color: '#f97316' },
    { label: 'En revisión', value: countByEstado('En revisión'), color: '#ec4899' },
    { label: 'En proceso', value: countByEstado('En proceso'), color: '#14b8a6' },
    { label: 'Pendiente', value: countByEstado('Pendiente'), color: '#eab308' }
  ];

  const donutRubros = [
    { label: 'Con Ajuste > PAE', value: 3, color: '#3b82f6' },
    { label: 'Conforme / Limpio', value: 2, color: '#22c55e' },
    { label: 'En revisión NIIF 15', value: 1, color: '#eab308' },
    { label: 'Revelación NIC 36', value: 1, color: '#a855f7' }
  ];

  // Cálculo de ajustes aceptados vs pendientes
  const ajustesMateriales = ajustesState.filter((a) => a.superaPAE);
  const totalAjustesMillones = ajustesMateriales.reduce((s, a) => s + a.montoMillones, 0);
  const ajustesNoRegistrados = ajustesMateriales
    .filter((a) => !a.aceptado)
    .reduce((s, a) => s + Math.abs(a.impactoPatrimonial.resultadoEjercicio || a.montoMillones), 0);

  return (
    <div className="space-y-6">
      {/* Banner Superior: Proceso Secuencial de las 3 Etapas (Carlos Slosse + RT 37/53) */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-teal-50 text-teal-700 border border-teal-200">
                Auditoría Externa Secuencial — NIAs (RT N° 32) / RT 37 &amp; Carlos Slosse
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-lime-50 text-lime-700 border border-lime-200">
                EECC 31/12/2025
              </span>
            </div>
            <h2 className="text-xl font-extrabold text-slate-900 mt-1.5">
              {proyectoMeta.cliente} — Panel Integral de Seguimiento ({brandName})
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Equipo Auditor: <strong className="text-slate-700">{proyectoMeta.encargados} (U.C.P.)</strong> • Enfoque:{' '}
              <strong className="text-red-600">Predominantemente Sustantivo (NC Bajo / RC Alto)</strong> • Normas NIIF / NIC (Moneda Homogénea NIC 29)
            </p>
          </div>

          {/* Selector de Píldoras estilo barra superior de AuditBrain */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'todas', label: 'Vista Integral' },
              { id: 'reporte', label: '1. Panel Reporte' },
              { id: 'control', label: '2. Panel Control & Riesgos' },
              { id: 'proyectos', label: '3. Panel Proyectos' }
            ].map((pill) => (
              <button
                key={pill.id}
                onClick={() => setSubVista(pill.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                  subVista === pill.id
                    ? 'bg-lime-500 text-white border-lime-600 shadow-xs'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-lime-400'
                }`}
              >
                {pill.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tarjetas Secuenciales de las 3 Etapas de Auditoría */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {marcoTeoricoSlosse.etapas.map((etapa, index) => {
            const navTarget =
              index === 0 ? 'etapa1-cci' : index === 1 ? 'etapa2-ejecucion' : 'etapa3-informe';
            const badgeColors = [
              'from-teal-600 to-emerald-600',
              'from-amber-500 to-orange-600',
              'from-indigo-600 to-purple-600'
            ];
            return (
              <div
                key={etapa.id}
                onClick={() => onNavigate(navTarget)}
                className="group relative rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white p-4 transition-all hover:shadow-md hover:border-teal-400 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span
                      className={`px-2.5 py-1 rounded-lg text-xs font-extrabold text-white bg-gradient-to-r ${badgeColors[index]}`}
                    >
                      ETAPA {etapa.numero}
                    </span>
                    <span className="text-xs font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md border border-teal-200">
                      Avance: {etapa.progresoBase}%
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                    {etapa.titulo}
                  </h3>
                  <p className="text-[11px] font-semibold text-slate-500 mb-2">{etapa.subtitulo}</p>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">{etapa.objetivo}</p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-200/80 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-500">
                    {etapa.entregables.length} entregables clave
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-teal-700 group-hover:translate-x-0.5 transition-transform">
                    Abrir Etapa {etapa.numero} <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Cinta de KPIs Financieros y Materialidad de Telecom S.A. */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3.5">
        <div className="bg-white rounded-xl border border-slate-200 p-3.5 shadow-xs">
          <p className="text-[11px] font-bold uppercase text-slate-400">Activo Total (31/12/25)</p>
          <p className="text-lg font-extrabold text-slate-900 mt-0.5">$16.622.552 M</p>
          <p className="text-[11px] text-slate-500 mt-0.5">Moneda constante NIC 29 (NIIF)</p>
        </div>
        <div className="bg-white rounded-xl border border-teal-200 p-3.5 shadow-xs bg-gradient-to-br from-white to-teal-50/30">
          <p className="text-[11px] font-bold uppercase text-teal-700">Materialidad Global (PM)</p>
          <p className="text-lg font-extrabold text-teal-900 mt-0.5">${materialidadData.materialidadGlobal.importe.toLocaleString('es-AR')} M</p>
          <p className="text-[11px] text-teal-600 mt-0.5">1,00% s/ Activo Total</p>
        </div>
        <div className="bg-white rounded-xl border border-amber-200 p-3.5 shadow-xs bg-gradient-to-br from-white to-amber-50/30">
          <p className="text-[11px] font-bold uppercase text-amber-700">Error Tolerable (ET)</p>
          <p className="text-lg font-extrabold text-amber-900 mt-0.5">${materialidadData.errorTolerable.importe.toLocaleString('es-AR')} M</p>
          <p className="text-[11px] text-amber-700 mt-0.5">50% de PM (Riesgo Alto)</p>
        </div>
        <div className="bg-white rounded-xl border border-rose-200 p-3.5 shadow-xs bg-gradient-to-br from-white to-rose-50/30">
          <p className="text-[11px] font-bold uppercase text-rose-700">Umbral Mínimo (PAE)</p>
          <p className="text-lg font-extrabold text-rose-900 mt-0.5">${materialidadData.montoMinimoAjuste.importe.toLocaleString('es-AR')} M</p>
          <p className="text-[11px] text-rose-600 mt-0.5">5% de ET (Ajuste Mínimo)</p>
        </div>
        <div className="bg-white rounded-xl border border-indigo-200 p-3.5 shadow-xs bg-gradient-to-br from-white to-indigo-50/30 col-span-2 lg:col-span-1">
          <p className="text-[11px] font-bold uppercase text-indigo-700">Opinión Proyectada</p>
          <p className="text-sm font-extrabold text-indigo-900 mt-1">
            {ajustesNoRegistrados >= materialidadData.materialidadGlobal.importe
              ? 'Con Salvedades (NIA / RT 32)'
              : 'Favorable sin Salvedades'}
          </p>
          <p className="text-[11px] text-indigo-600 mt-0.5">
            Ajustes propuestos: ${totalAjustesMillones.toLocaleString('es-AR')} M
          </p>
        </div>
      </div>

      {/* PANEL 1: REPORTE (Inspirado fielmente en Imagen 1 de AuditBrain) */}
      {(subVista === 'todas' || subVista === 'reporte') && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-lime-600">Módulo FaroAudita 01</span>
              <h3 className="text-2xl font-extrabold text-lime-600 tracking-tight">Reporte</h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-teal-600"></span>
              Monitoreo en tiempo real de las 3 Etapas
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Velocímetro 1: Avance */}
            <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/40">
              <div className="border-b border-slate-200 pb-2 mb-3 flex items-center justify-between">
                <span className="text-sm font-bold text-slate-700">Avance</span>
                <span className="text-xs font-semibold text-teal-700">Ejecución Secuencial</span>
              </div>
              <SemiGaugeChart
                value={avgProgress}
                label="Avance General de la Auditoría"
                subtitle="Planificación (100%) • Ejecución (90%) • Conclusión (85%)"
                mode="avance"
              />
            </div>

            {/* Velocímetro 2: Hallazgos */}
            <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/40">
              <div className="border-b border-slate-200 pb-2 mb-3 flex items-center justify-between">
                <span className="text-sm font-bold text-slate-700 border-b-2 border-teal-500 pb-1">
                  Hallazgos
                </span>
                <span className="text-xs font-semibold text-red-600">
                  5 Hallazgos (4 superan PAE $8.311M)
                </span>
              </div>
              <SemiGaugeChart
                value={93}
                label="Composición de Hallazgos Detectados"
                subtitle="50% Observaciones Control / Corte • 43% Valuación Activos y Previsión"
                mode="hallazgos"
              />
            </div>

            {/* Estatus por Etapa (Barras apiladas horizontales exactas a Imagen 1) */}
            <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/40">
              <div className="border-b border-slate-200 pb-2 mb-4 flex items-center justify-between">
                <span className="text-sm font-bold text-slate-700">Estatus</span>
                <div className="flex items-center gap-2 text-[10px] font-semibold">
                  <span className="flex items-center gap-1"><i className="w-2 h-2 rounded-full bg-red-500 inline-block" /> Riesgo Alto</span>
                  <span className="flex items-center gap-1"><i className="w-2 h-2 rounded-full bg-amber-500 inline-block" /> En Revisión</span>
                  <span className="flex items-center gap-1"><i className="w-2 h-2 rounded-full bg-yellow-400 inline-block" /> Sustantivo</span>
                  <span className="flex items-center gap-1"><i className="w-2 h-2 rounded-full bg-lime-500 inline-block" /> Validado</span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                    <span>Planeación (Preliminar y Detallada)</span>
                    <span className="text-teal-700 font-bold">100% Completada</span>
                  </div>
                  <div className="w-full h-3.5 bg-slate-200 rounded-full overflow-hidden flex">
                    <div className="bg-red-500 h-full" style={{ width: '40%' }} title="Riesgo Inherente y Control Alto (5 CCI)" />
                    <div className="bg-amber-500 h-full" style={{ width: '28%' }} title="Materialidad PM/ET/PAE" />
                    <div className="bg-yellow-400 h-full" style={{ width: '32%' }} title="Programas A, B, C, D y E" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                    <span>Ejecución (Programas A-F y Papeles de Trabajo)</span>
                    <span className="text-teal-700 font-bold">92% Ejecutada</span>
                  </div>
                  <div className="w-full h-3.5 bg-slate-200 rounded-full overflow-hidden flex">
                    <div className="bg-red-500 h-full" style={{ width: '18%' }} title="Hallazgos H-01 / H-04 / PAE" />
                    <div className="bg-amber-500 h-full" style={{ width: '24%' }} title="Pruebas de Corte B2B" />
                    <div className="bg-yellow-400 h-full" style={{ width: '22%' }} title="Circularizaciones Bancos y Clientes" />
                    <div className="bg-lime-500 h-full" style={{ width: '20%' }} title="Pruebas Globales PP&E e Intangibles" />
                    <div className="bg-blue-500 h-full" style={{ width: '16%' }} title="Test Deterioro UGE Personal" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                    <span>Finalización (Carta CI, Memorando, Carta Gerencia e Informe NIA / RT 32)</span>
                    <span className="text-purple-700 font-bold">88% En Cierre</span>
                  </div>
                  <div className="w-full h-3.5 bg-slate-200 rounded-full overflow-hidden flex">
                    <div className="bg-red-500 h-full" style={{ width: '38%' }} title="Evaluación de Ajustes PAE" />
                    <div className="bg-amber-500 h-full" style={{ width: '20%' }} title="Carta de Control Interno" />
                    <div className="bg-yellow-400 h-full" style={{ width: '18%' }} title="Memorando Resumen" />
                    <div className="bg-purple-600 h-full" style={{ width: '24%' }} title="Emisión Informe del Auditor Independiente" />
                  </div>
                </div>
              </div>
            </div>

            {/* KPIs (Eficiencia y Presupuesto de Horas - Exacto a Imagen 1) */}
            <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/40 flex flex-col justify-between">
              <div>
                <div className="border-b border-slate-200 pb-2 mb-4 flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-700">KPIs</span>
                  <span className="text-xs text-slate-500">Indicadores de Gestión del Encargo</span>
                </div>

                <div className="flex items-center justify-around mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full border-2 border-purple-500 bg-purple-100 inline-block" />
                    <span className="text-xs font-bold text-slate-700">Eficiencia (Cobertura Sustantiva)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full border-2 border-indigo-900 bg-indigo-100 inline-block" />
                    <span className="text-xs font-bold text-slate-700">Presupuesto (Horas Hombres)</span>
                  </div>
                </div>

                <div className="space-y-4 px-2">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-semibold text-purple-700">Eficiencia de Pruebas Sustantivas (Programas A-E)</span>
                      <span className="font-bold text-slate-800">84%</span>
                    </div>
                    <div className="w-full h-4 bg-slate-300 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500 rounded-full transition-all duration-500" style={{ width: '84%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-semibold text-indigo-950">Ejecución Presupuesto Horas (Oct 2025 - Feb 2026)</span>
                      <span className="font-bold text-slate-800">89% (428 / 480 hs)</span>
                    </div>
                    <div className="w-full h-4 bg-slate-300 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-950 rounded-full transition-all duration-500" style={{ width: '89%' }} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/70 flex items-center justify-between text-xs text-slate-500">
                <span>Uso intensivo de TAACs en SAP (100% padrón deudores)</span>
                <button
                  onClick={() => onNavigate('etapa2-ejecucion')}
                  className="text-teal-700 font-bold hover:underline cursor-pointer"
                >
                  Ver Papeles de Trabajo →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PANEL 2: CONTROL (Inspirado fielmente en Imagen 2 de AuditBrain) */}
      {(subVista === 'todas' || subVista === 'control') && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-lime-600">Módulo FaroAudita 02</span>
              <h3 className="text-2xl font-extrabold text-lime-600 tracking-tight">Control</h3>
            </div>
            <button
              onClick={() => onNavigate('etapa1-cci')}
              className="px-3 py-1.5 rounded-lg bg-teal-50 text-teal-700 border border-teal-200 text-xs font-bold hover:bg-teal-100 transition-colors cursor-pointer"
            >
              Abrir los 5 Cuestionarios CCI (129 preguntas) →
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Tarjeta "Información" (Exacta a Imagen 2) */}
            <div className="lg:col-span-5 rounded-xl border border-slate-200 p-4 bg-slate-50/40">
              <div className="border-b border-slate-200 pb-2 mb-3">
                <span className="text-sm font-bold text-slate-700">Información</span>
              </div>
              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="font-semibold text-slate-500">Cliente:</span>
                  <span className="font-bold text-slate-900">{proyectoMeta.cliente}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="font-semibold text-slate-500">Proyecto:</span>
                  <span className="font-bold text-slate-900">Auditoría Externa EECC 2025</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="font-semibold text-slate-500">Período Auditado:</span>
                  <span className="font-bold text-slate-900">01/01/2025 al 31/12/2025</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="font-semibold text-slate-500">Fecha Evaluación:</span>
                  <span className="font-bold text-slate-900">{proyectoMeta.fechaElaboracion}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="font-semibold text-slate-500">Encargado:</span>
                  <span className="font-bold text-teal-800">{proyectoMeta.encargados}</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="font-semibold text-slate-500">Resultado Global CCI:</span>
                  <span className="px-2 py-0.5 rounded bg-red-100 text-red-700 font-extrabold">
                    NC Promedio: 20,00% (BAJO) / RC: ALTO
                  </span>
                </div>
              </div>
            </div>

            {/* Tarjeta "Riesgo Inherente | Riesgo Residual / Control" (Exacta a Imagen 2) */}
            <div className="lg:col-span-7 rounded-xl border border-slate-200 p-4 bg-slate-50/40">
              <div className="border-b border-slate-200 pb-2 mb-4 flex items-center gap-6">
                <button
                  onClick={() => setRiskTab('inherente')}
                  className={`text-sm font-bold pb-1 cursor-pointer transition-colors ${
                    riskTab === 'inherente'
                      ? 'text-slate-900 border-b-2 border-teal-500'
                      : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  Riesgo Inherente & Control (CCI)
                </button>
                <button
                  onClick={() => setRiskTab('residual')}
                  className={`text-sm font-bold pb-1 cursor-pointer transition-colors ${
                    riskTab === 'residual'
                      ? 'text-slate-900 border-b-2 border-teal-500'
                      : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  Riesgo Residual (Post-Pruebas Sustantivas)
                </button>
              </div>

              {/* Gráfico de barras con cuadrícula estilo Imagen 2 */}
              <div className="grid grid-cols-5 gap-3 items-end h-40 pt-6 px-3 bg-white rounded-lg border border-slate-200 relative">
                {cciCalculados.map((cci, idx) => {
                  const barColors = [
                    'bg-slate-600 border-slate-700',
                    'bg-lime-500 border-lime-600',
                    'bg-yellow-400 border-yellow-500',
                    'bg-red-500 border-red-600',
                    'bg-teal-600 border-teal-700'
                  ];
                  const val = riskTab === 'inherente' ? cci.ri : Math.max(12, 100 - cci.ri);
                  return (
                    <div key={cci.id} className="flex flex-col items-center h-full justify-end group">
                      <span className="text-[11px] font-extrabold text-slate-700 mb-1">
                        {val.toFixed(1)}%
                      </span>
                      <div
                        className={`w-12 sm:w-14 rounded-t-md border transition-all duration-500 ${barColors[idx % barColors.length]}`}
                        style={{ height: `${Math.max(18, val)}%` }}
                        title={`${cci.componente}: ${val.toFixed(2)}%`}
                      />
                      <span className="text-[10px] font-bold text-slate-600 mt-1.5 text-center truncate w-full">
                        {cci.codigo}
                      </span>
                    </div>
                  );
                })}
              </div>
              <p className="text-[11px] text-slate-500 mt-2 text-center">
                {riskTab === 'inherente'
                  ? `Riesgo de Control (RC %) ponderado por componente según Cuestionarios de Control Interno (Calibrado de ${Math.min(...(cciCalculados || []).map(c => c.rc)).toFixed(1)}% a ${Math.max(...(cciCalculados || []).map(c => c.rc)).toFixed(1)}%)`
                  : `Nivel de Confianza (NC %) obtenido de las respuestas afirmativas de control interno (${Math.min(...(cciCalculados || []).map(c => c.nc)).toFixed(1)}% a ${Math.max(...(cciCalculados || []).map(c => c.nc)).toFixed(1)}%)`}
              </p>
            </div>

            {/* Tarjeta Inferior "Niveles" (Gráfico de líneas exacto a Imagen 2) */}
            <div className="lg:col-span-12 rounded-xl border border-slate-200 p-4 bg-slate-50/40">
              <div className="border-b border-slate-200 pb-2 mb-3 flex flex-wrap items-center justify-between gap-2">
                <span className="text-sm font-bold text-slate-700">
                  Niveles — Comparativa Nivel de Confianza (NC %) vs. Nivel de Riesgo (RI/RC %)
                </span>
                <div className="flex items-center gap-4 text-xs font-semibold">
                  <span className="flex items-center gap-1.5 text-lime-700">
                    <i className="w-3 h-1 bg-lime-500 inline-block rounded" /> Nivel de Riesgo de Control (RC %)
                  </span>
                  <span className="flex items-center gap-1.5 text-teal-800">
                    <i className="w-3 h-1 bg-teal-700 inline-block rounded" /> Nivel de Confianza (NC %)
                  </span>
                </div>
              </div>
              <NivelesLineChart cciStats={cciCalculados} />
            </div>
          </div>
        </div>
      )}

      {/* PANEL 3: PROYECTOS Y AVANCE POR RUBRO (Inspirado fielmente en Imagen 3 de AuditBrain) */}
      {(subVista === 'todas' || subVista === 'proyectos') && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-lime-600">Módulo FaroAudita 03</span>
              <h3 className="text-2xl font-extrabold text-lime-600 tracking-tight">Proyectos & Programas por Rubro</h3>
            </div>
            <button
              onClick={() => onNavigate('etapa1-detallada')}
              className="px-3 py-1.5 rounded-lg bg-lime-50 text-lime-700 border border-lime-200 text-xs font-bold hover:bg-lime-100 transition-colors cursor-pointer"
            >
              Ver Matriz de Afirmaciones y Programas A-E →
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Tabla de Programas / Proyectos */}
            <div className="lg:col-span-8 overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 text-xs font-bold uppercase border-b border-slate-200">
                    <th className="py-3 px-4">Cliente / Programa</th>
                    <th className="py-3 px-4">Rubro Auditado (EECC 2025)</th>
                    <th className="py-3 px-4 text-right">Saldo Libros ($M)</th>
                    <th className="py-3 px-4 text-center">Progreso</th>
                    <th className="py-3 px-4 text-center">Fecha Cierre PT</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs">
                  {rubrosSignificativos.map((rubro, idx) => {
                    const fechas = ['12/01/26', '18/01/26', '22/01/26', '25/01/26', '02/02/26'];
                    const prog = [100, 100, 100, 95, 100];
                    return (
                      <tr
                        key={rubro.id}
                        onClick={() =>
                          onNavigate(
                            'etapa2-ejecucion',
                            rubro.codigoPrograma.replace('PROGRAMA ', 'pt-').toLowerCase()
                          )
                        }
                        className="hover:bg-teal-50/40 transition-colors cursor-pointer"
                      >
                        <td className="py-3 px-4 font-bold text-teal-800">
                          Telecom S.A. — {rubro.codigoPrograma}
                        </td>
                        <td className="py-3 px-4 font-medium text-slate-800">{rubro.nombre}</td>
                        <td className="py-3 px-4 text-right font-mono font-bold text-slate-700">
                          ${rubro.saldoContable.toLocaleString('es-AR')} M
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                            {prog[idx]}%
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center text-slate-500 font-mono">
                          {fechas[idx]}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Dos Gráficos de Dona a la derecha (Exacto a Imagen 3) */}
            <div className="lg:col-span-4 space-y-4">
              <DonutStatusChart
                title="Avance Proyecto — Solicitudes Equipo"
                data={donutProyecto1}
                centerValue={`${equipoTasks.length} Tareas`}
                centerLabel="Total Encargo"
              />
              <DonutStatusChart
                title="Resultado Papeles de Trabajo (PT A-E)"
                data={donutRubros}
                centerValue="5 Rubros"
                centerLabel="25 Afirmaciones"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
