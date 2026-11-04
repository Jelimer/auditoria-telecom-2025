import React, { useState } from 'react';
import {
  Building2,
  Users,
  Target,
  Compass,
  Network,
  Smartphone,
  Server,
  Scale,
  Cpu,
  Calculator,
  Globe,
  ShieldAlert,
  Layers,
  Award
} from 'lucide-react';
import { conocimientoEnte } from '../data/etapa1Data';

export default function Etapa1EnteView() {
  const [selectedVertical, setSelectedVertical] = useState(conocimientoEnte.organigrama.verticales[1]); // B2B Personal Tech por defecto

  const colorMap = {
    blue: {
      header: 'bg-blue-600 text-white',
      card: 'border-blue-200 bg-blue-50/40 hover:border-blue-400',
      badge: 'bg-blue-100 text-blue-800',
      activeRing: 'ring-2 ring-blue-500'
    },
    emerald: {
      header: 'bg-emerald-600 text-white',
      card: 'border-emerald-200 bg-emerald-50/40 hover:border-emerald-400',
      badge: 'bg-emerald-100 text-emerald-800',
      activeRing: 'ring-2 ring-emerald-500'
    },
    purple: {
      header: 'bg-purple-700 text-white',
      card: 'border-purple-200 bg-purple-50/40 hover:border-purple-400',
      badge: 'bg-purple-100 text-purple-800',
      activeRing: 'ring-2 ring-purple-500'
    },
    amber: {
      header: 'bg-amber-500 text-white',
      card: 'border-amber-200 bg-amber-50/40 hover:border-amber-400',
      badge: 'bg-amber-100 text-amber-900',
      activeRing: 'ring-2 ring-amber-500'
    },
    orange: {
      header: 'bg-orange-500 text-white',
      card: 'border-orange-200 bg-orange-50/40 hover:border-orange-400',
      badge: 'bg-orange-100 text-orange-900',
      activeRing: 'ring-2 ring-orange-500'
    }
  };

  return (
    <div className="space-y-6">
      {/* Encabezado de Etapa 1.1 */}
      <div id="sec-1a-negocio" className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs scroll-mt-20">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
          <div>
            <span className="px-2.5 py-1 rounded-md text-xs font-extrabold bg-teal-600 text-white">
              ETAPA 1.1 — PLANIFICACIÓN PRELIMINAR (CONOCIMIENTO DEL ENTE - AE2)
            </span>
            <h2 className="text-xl font-extrabold text-slate-900 mt-2">
              Telecom Argentina S.A. — Comprensión del Negocio, Organización y Entorno
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Según Carlos Slosse y RT 37, el proceso de auditoría se inicia con el conocimiento integral del ente, su estructura de gobierno corporativo, sus sistemas y los factores macro y microeconómicos que originan el Riesgo Inherente.
            </p>
          </div>
        </div>

        {/* Misión, Visión y Recurso Humano */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
          <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/60">
            <div className="flex items-center gap-2 text-teal-700 font-bold text-sm mb-2">
              <Users className="w-4 h-4" /> Recurso Humano e Identidad Tech-Co
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              {conocimientoEnte.recursoHumano}
            </p>
            <div className="mt-3 pt-2.5 border-t border-slate-200/80 text-[11px] font-semibold text-slate-500">
              Operaciones en Argentina, Paraguay y Uruguay • 16 Data Centers propios
            </div>
          </div>

          <div className="rounded-xl border border-blue-200 p-4 bg-blue-50/30">
            <div className="flex items-center gap-2 text-blue-800 font-bold text-sm mb-2">
              <Target className="w-4 h-4" /> Misión Telecom
            </div>
            <p className="text-sm font-extrabold text-blue-950 mb-1.5">
              {conocimientoEnte.mision.proposito}
            </p>
            <p className="text-xs text-slate-700 leading-relaxed">
              {conocimientoEnte.mision.compromiso}
            </p>
          </div>

          <div className="rounded-xl border border-emerald-200 p-4 bg-emerald-50/30">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm mb-2">
              <Compass className="w-4 h-4" /> Visión Estratégica («Tech-Co»)
            </div>
            <ul className="space-y-1.5 text-xs text-slate-700 leading-relaxed list-disc pl-4">
              {conocimientoEnte.vision.map((v, i) => (
                <li key={i}>{v}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ORGANIGRAMA INTERACTIVO DE TELECOM ARGENTINA S.A. (Fiel a la imagen subida) */}
      <div id="sec-1a-organigrama" className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs scroll-mt-20">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-100 mb-6">
          <div>
            <h3 className="text-base font-extrabold text-slate-900">
              Estructura Organizacional y Gobierno Corporativo (Organigrama Interactivo)
            </h3>
            <p className="text-xs text-slate-500">
              Hacé clic en cualquiera de las 5 Direcciones Verticales para inspeccionar su alcance operativo y el Riesgo de Auditoría asociado.
            </p>
          </div>
          <span className="text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Formalizado en Manuales de Funciones y Políticas Corporativas
          </span>
        </div>

        {/* Cadena de Gobierno Superior (Vertical) */}
        <div className="flex flex-col items-center space-y-2 max-w-xl mx-auto">
          <div className="w-72 py-2.5 px-4 rounded-xl bg-slate-900 text-white text-center font-extrabold text-xs tracking-wide shadow-xs">
            ASAMBLEA DE ACCIONISTAS
          </div>
          <div className="w-0.5 h-3 bg-slate-400" />
          <div className="w-80 py-2 px-4 rounded-xl bg-sky-50 border-2 border-dashed border-sky-400 text-sky-950 text-center font-bold text-xs">
            COMISIÓN FISCALIZADORA / SINDICATURA
          </div>
          <div className="w-0.5 h-3 bg-slate-400" />
          <div className="w-72 py-2.5 px-4 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 text-white text-center font-extrabold text-xs shadow-xs">
            DIRECTORIO (Presidente)
          </div>
          <div className="w-0.5 h-3 bg-slate-400" />
          <div className="w-72 py-2 px-4 rounded-xl bg-teal-600 text-white text-center font-extrabold text-xs shadow-xs">
            COMITÉ DE AUDITORÍA / RIESGOS
          </div>
          <div className="w-0.5 h-3 bg-slate-400" />
          <div className="w-72 py-2.5 px-4 rounded-xl bg-blue-900 text-white text-center font-extrabold text-xs shadow-sm">
            GERENCIA GENERAL (CEO)
          </div>
          <div className="w-0.5 h-4 bg-slate-400" />
        </div>

        {/* Conector horizontal y las 5 Direcciones Verticales */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 mt-1">
          {conocimientoEnte.organigrama.verticales.map((vert) => {
            const st = colorMap[vert.color] || colorMap.blue;
            const isSelected = selectedVertical?.id === vert.id;
            return (
              <div
                key={vert.id}
                onClick={() => setSelectedVertical(vert)}
                className={`rounded-xl border overflow-hidden transition-all cursor-pointer flex flex-col justify-between ${st.card} ${
                  isSelected ? `${st.activeRing} shadow-md -translate-y-0.5` : ''
                }`}
              >
                <div>
                  <div className={`py-2.5 px-3 text-center font-extrabold text-xs uppercase tracking-wide ${st.header}`}>
                    {vert.nombre}
                  </div>
                  <div className="p-3 space-y-2">
                    {vert.subareas.map((sub, i) => (
                      <div
                        key={i}
                        className="bg-white/90 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-700 border border-slate-200/80 shadow-2xs"
                      >
                        • {sub}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="px-3 pb-2.5 pt-1 text-[10px] font-bold text-right text-slate-500">
                  {isSelected ? '● Seleccionado' : 'Clic para ver riesgo →'}
                </div>
              </div>
            );
          })}
        </div>

        {/* Panel de foco de auditoría sobre la dirección seleccionada */}
        {selectedVertical && (
          <div className="mt-5 rounded-xl border border-teal-200 bg-teal-50/50 p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-extrabold uppercase text-teal-800">
                  Foco de Auditoría en {selectedVertical.nombre}:
                </span>
              </div>
              <p className="text-xs text-slate-700 mt-1">{selectedVertical.descripcion}</p>
            </div>
            <div className="md:max-w-md bg-white rounded-lg border border-red-200 p-3 shrink-0">
              <span className="text-[11px] font-extrabold uppercase text-red-600 flex items-center gap-1">
                <ShieldAlert className="w-3.5 h-3.5" /> Riesgo Crítico Detectado en Planificación:
              </span>
              <p className="text-xs font-medium text-slate-800 mt-1">{selectedVertical.riesgoAsociado}</p>
            </div>
          </div>
        )}
      </div>

      {/* Oferta Comercial B2C y B2B */}
      <div id="sec-1a-productos" className="grid grid-cols-1 lg:grid-cols-2 gap-6 scroll-mt-20">
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
          <div className="flex items-center gap-2 pb-3 mb-4 border-b border-slate-100">
            <span className="px-2.5 py-1 rounded-md bg-blue-600 text-white text-xs font-extrabold">SEGMENTO A</span>
            <h3 className="text-base font-extrabold text-slate-900">
              Mercado Masivo e Individual (B2C — Personal y Flow)
            </h3>
          </div>
          <div className="space-y-3">
            {conocimientoEnte.productos.b2c.map((prod, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <h4 className="text-xs font-bold text-blue-900">{prod.titulo}</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">{prod.detalle}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
          <div className="flex items-center gap-2 pb-3 mb-4 border-b border-slate-100">
            <span className="px-2.5 py-1 rounded-md bg-emerald-600 text-white text-xs font-extrabold">SEGMENTO B</span>
            <h3 className="text-base font-extrabold text-slate-900">
              Mercado Corporativo, Pymes e Industrial (B2B — Personal Tech)
            </h3>
          </div>
          <div className="space-y-2.5">
            {conocimientoEnte.productos.b2b.map((prod, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-emerald-50/30 border border-emerald-200/70">
                <h4 className="text-xs font-bold text-emerald-950">{prod.titulo}</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">{prod.detalle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Caracterización del Proceso de Negocio Seleccionado y Misión del Proceso */}
      <div id="sec-1a-proceso" className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs scroll-mt-20">
        <h3 className="text-base font-extrabold text-slate-900 pb-3 border-b border-slate-100">
          Proceso de Negocio Seleccionado: {conocimientoEnte.procesoNegocio.procesoSeleccionado.nombre}
        </h3>
        <p className="text-xs text-slate-600 mt-2">
          {conocimientoEnte.procesoNegocio.procesoSeleccionado.objetivo}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 mt-4">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-[11px] font-extrabold uppercase text-teal-700">Cliente Verdadero</span>
            <p className="text-xs text-slate-700 mt-1 leading-relaxed">
              {conocimientoEnte.procesoNegocio.procesoSeleccionado.clienteVerdadero}
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-[11px] font-extrabold uppercase text-teal-700">Proveedores Clave</span>
            <p className="text-xs text-slate-700 mt-1 leading-relaxed">
              {conocimientoEnte.procesoNegocio.procesoSeleccionado.proveedores}
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-[11px] font-extrabold uppercase text-teal-700">Solicitud (Disparador)</span>
            <p className="text-xs text-slate-700 mt-1 leading-relaxed">
              {conocimientoEnte.procesoNegocio.procesoSeleccionado.solicitud}
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-[11px] font-extrabold uppercase text-teal-700">Declaración (Compromiso)</span>
            <p className="text-xs text-slate-700 mt-1 leading-relaxed">
              {conocimientoEnte.procesoNegocio.procesoSeleccionado.declaracion}
            </p>
          </div>
        </div>

        {/* Tabla Misión del Proceso */}
        <div className="mt-5 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-100 text-slate-700 font-bold uppercase border-b border-slate-200">
                <th className="py-2.5 px-4">Ámbito Estratégico</th>
                <th className="py-2.5 px-4">Situación Actual</th>
                <th className="py-2.5 px-4">Situación Futura (Visión Tech-Co)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {conocimientoEnte.procesoNegocio.misionProceso.map((row, i) => (
                <tr key={i} className="hover:bg-slate-50">
                  <td className="py-2.5 px-4 font-bold text-slate-900">{row.ambito}</td>
                  <td className="py-2.5 px-4 text-slate-600">{row.situacionActual}</td>
                  <td className="py-2.5 px-4 font-medium text-teal-800 bg-teal-50/20">{row.situacionFutura}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Diagnóstico del Proceso: Macroentorno, Microentorno (Porter) y Competidores */}
      <div id="sec-1a-entorno" className="grid grid-cols-1 lg:grid-cols-12 gap-6 scroll-mt-20">
        {/* Macroentorno */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
          <h3 className="text-base font-extrabold text-slate-900 pb-3 border-b border-slate-100 mb-3">
            Análisis del Macroentorno (PESTEL)
          </h3>
          <div className="space-y-3">
            {conocimientoEnte.diagnosticoEntorno.macroentorno.map((mac, i) => (
              <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-extrabold text-teal-800 uppercase">{mac.factor}</span>
                <ul className="mt-1 space-y-1 text-xs text-slate-600 list-disc pl-4">
                  {mac.puntos.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Microentorno (5 Fuerzas de Porter) */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
          <h3 className="text-base font-extrabold text-slate-900 pb-3 border-b border-slate-100 mb-3">
            Análisis del Microentorno (5 Fuerzas Competitivas)
          </h3>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-100 text-slate-700 font-bold uppercase border-b border-slate-200">
                  <th className="py-2.5 px-3">Fuerza Competitiva</th>
                  <th className="py-2.5 px-3 text-center">Nivel</th>
                  <th className="py-2.5 px-3">Fundamentación e Impacto en la Auditoría</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {conocimientoEnte.diagnosticoEntorno.microentorno.map((f, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="py-3 px-3 font-bold text-slate-800">{f.fuerza}</td>
                    <td className="py-3 px-3 text-center">
                      <span
                        className={`px-2 py-0.5 rounded-full text-[11px] font-extrabold whitespace-nowrap ${
                          f.nivel.includes('ALTO')
                            ? 'bg-red-100 text-red-700'
                            : f.nivel.includes('BAJO')
                            ? 'bg-emerald-100 text-emerald-700'
                            : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        {f.nivel}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-slate-600 leading-relaxed">{f.fundamentacion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Medio Interno y Competidores Directos */}
          <h4 className="text-sm font-extrabold text-slate-800 mt-5 mb-2.5">
            Análisis del Medio Interno y Principales Competidores Monitoreados
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {conocimientoEnte.diagnosticoEntorno.competidores.map((comp, i) => (
              <div key={i} className="p-3 rounded-xl border border-slate-200 bg-slate-50/70">
                <h5 className="text-xs font-extrabold text-slate-900 border-b border-slate-200 pb-1.5 mb-2">
                  {comp.nombre}
                </h5>
                <ul className="space-y-1.5 text-[11px] text-slate-600 leading-relaxed">
                  {comp.aspectos.map((asp, j) => (
                    <li key={j}>{asp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* GUÍA DE LECTURA Y EXPOSICIÓN ORAL — CIERRE DEL PUNTO 1A (PLANIFICACIÓN PRELIMINAR: CONOCIMIENTO DEL ENTE) */}
      <div className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 rounded-2xl border border-teal-500/40 p-6 text-white shadow-lg space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-lime-400 shrink-0" />
            <span className="text-xs font-extrabold uppercase tracking-wider text-lime-400">
              Guía de Lectura y Exposición Oral — Etapa 1 (Parte Preliminar: Conocimiento del Ente)
            </span>
          </div>
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-white/10 text-teal-200 border border-white/15">
            Doctrina: Carlos A. Slosse (Enfoque «De Arriba hacia Abajo»)
          </span>
        </div>

        <h3 className="text-base sm:text-lg font-extrabold text-white">
          ¿Qué empezamos haciendo acá, qué se hace y por qué? (Para explicar con tus palabras)
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs leading-relaxed">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
            <strong className="text-lime-300 block uppercase text-[11px] tracking-wider">
              1. ¿Qué se empieza haciendo?
            </strong>
            <p className="text-slate-200">
              Según <strong>Carlos Slosse</strong>, una auditoría nunca empieza mirando facturas ni sumando recibos: empieza <strong>«de arriba hacia abajo» (Top-Down)</strong> conociendo a fondo quién es el cliente. En este primer paso relevamos qué hace <strong>Telecom Argentina S.A.</strong> (servicios convergentes móviles 4G/5G con <em>Personal</em>, fibra e internet, TV y streaming con <em>Flow</em>, soluciones corporativas <em>B2B Personal Tech</em> y la reciente compra de <em>Telefónica Móviles Argentina - TMA</em> en febrero de 2025), cómo está organizada su cúpula directiva y qué sistemas informáticos utiliza (el ERP <strong>SAP S/4HANA</strong> conectado con facturadores comerciales heredados).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
            <strong className="text-amber-300 block uppercase text-[11px] tracking-wider">
              2. ¿Qué se hace concretamente?
            </strong>
            <p className="text-slate-200">
              Analizamos los <strong>factores internos y externos</strong> que rodean al negocio: el macroentorno económico argentino (inflación que exige aplicar <strong>NIC 29</strong>, devaluación del peso que impacta en su deuda en dólares e importación de equipos de red), las regulaciones del <strong>ENACOM, CNV y SEC</strong>, las 5 fuerzas competitivas (competencia con Claro, Starlink y plataformas OTT) y las vulnerabilidades físicas de sus activos (como el robo de cables y vandalismo en nodos en la vía pública).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
            <strong className="text-teal-300 block uppercase text-[11px] tracking-wider">
              3. ¿Por qué y para qué lo hacemos?
            </strong>
            <p className="text-slate-200">
              Lo hacemos para identificar el <strong>Riesgo Inherente (RI)</strong>, es decir, el riesgo de que los Estados Contables tengan errores significativos por la propia naturaleza compleja del negocio de las telecomunicaciones, <em>antes</em> de mirar siquiera si la empresa tiene buenos controles internos. Con este diagnóstico de negocio ya sabemos dónde están los peligros naturales de Telecom y pasamos al siguiente escalón de la Planificación Preliminar: <strong>evaluar su Control Interno (1B)</strong> y hacer la <strong>Revisión Analítica Preliminar del Balance (1C)</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
