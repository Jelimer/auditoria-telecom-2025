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
  ArrowUpRight,
  Mic,
  MessageSquareQuote,
  Compass,
  ArrowRight,
  ShieldCheck,
  Pencil,
  Check,
  RotateCcw
} from 'lucide-react';
import {
  proyectoMeta,
  conocimientoEnte,
  materialidadData,
  rubrosSignificativos,
  cronogramaAuditoria,
  sintesisExposicionCCI
} from '../data/etapa1Data';
import {
  papelesTrabajo,
  documentosEtapa3
} from '../data/etapas2y3Data';
import { RichTextBox, sanitizeRichHtml } from './RichTextBox';
import { NormaTooltip } from './NormaTooltip';

const GUION_STORAGE_KEY = 'audiia_guion_oral_v1';

const GUION_ESLABONES_BASE = [
  {
    id: 'eslabon-1',
    paso: 'ESLABÓN 1 • ETAPA 1A',
    titulo: 'Conocimiento del Ente, Negocio y Marco Normativo',
    navView: 'etapa1-ente',
    navSub: null,
    navLabel: 'Abrir 1A. Conocimiento del Ente',
    queHicimos:
      'Relevamos la estructura societaria y regulatoria de Telecom Argentina S.A. al 31/12/2025 (EECC consolidados bajo NIIF en moneda homogénea NIC 29, Activo Total $16.622.552M y Ventas $8.328.814M), incluyendo la compra de Telefónica Móviles Argentina S.A. (TMA) el 24/02/2025 bajo NIIF 3 (PPA Nota 29: PP&E +$1.332.961M, Intangibles +$274.183M, Créditos $421.919M y Llave residual $12.840M) y la regulación CNV / ENACOM.',
    porQueConecta:
      'Porque nadie puede evaluar riesgos ni diseñar pruebas sin entender primero cómo genera valor el cliente: el 88,97% de su activo es No Corriente (PP&E, Espectro 5G y Llave de Negocio) y cotiza en CNV/SEC bajo normas NIIF, lo que exige auditar bajo NIAs (RT N° 32 FACPCE).',
    fraseOral:
      '«Empezamos entendiendo el negocio de Telecom: es una empresa capital-intensiva con casi el 89% de su activo inmovilizado en redes, espectro y llaves tras adquirir TMA el 24/02/2025 a valor razonable (NIIF 3), que aplica NIIF y se audita bajo NIAs (RT N° 32) con plazo perentorio de 70 días corridos ante la CNV.»'
  },
  {
    id: 'eslabon-2',
    paso: 'ESLABÓN 2 • ETAPA 1B',
    titulo: 'Evaluación del Control Interno (5 CCI — 129 Preguntas)',
    navView: 'etapa1-cci',
    navSub: 'sec-sintesis-exposicion',
    navLabel: 'Abrir Cuadro Síntesis (Fortalezas y Debilidades)',
    queHicimos:
      'Aplicamos 5 Cuestionarios de Control Interno (129 preguntas): CCI-01 Archivo Documental (38,46% NC / RC ALTO), CCI-02 Sistema Contable (72,00% NC / RC MEDIO), CCI-03 Presupuestos (77,78% NC / RC BAJO), CCI-04 Operativo (80,00% NC / RC BAJO) y CCI-05 Tecnológico/CGTI (47,62% NC / RC ALTO). Resumimos sus fortalezas y debilidades para exponer sin recitar las 129 preguntas.',
    porQueConecta:
      'Determina en qué sistemas podemos apoyarnos y en cuáles no. Las fallas en CCI-01 (legajos de obras/ISO 15.489), CCI-05 (interfaces y parches TIC) y la falla puntual de CCI-02 Preg. 22–23 (bajas de red no comunicadas a SAP FI-AA) fijan un Enfoque Predominantemente Sustantivo en Bienes de Uso e Intangibles, y mixto en Créditos.',
    fraseOral:
      '«Al medir los 5 sistemas vimos un contraste claro: Presupuestos (77,78%) y Operativo (80,00%) son sólidos, Contable es medio (72,00% pero con falla en bajas de activos fijos), mientras que Archivo (38,46%) y Tecnología (47,62%) dieron Riesgo de Control ALTO. Eso nos impide confiar en los controles para reducir pruebas y define un enfoque sustantivo.»'
  },
  {
    id: 'eslabon-3',
    paso: 'ESLABÓN 3 • ETAPA 1C',
    titulo: 'Revisión Analítica Preliminar: Análisis Horizontal, Vertical y Ratios',
    navView: 'etapa1-analisis-eecc',
    navSub: null,
    navLabel: 'Abrir 1C. Análisis H/V y Ratios',
    queHicimos:
      'Comparando EECC 2025 vs 2024 detectamos alertas cuantitativas clave: PP&E representa el 40,84% del Activo (+19,18% por TMA y CAPEX), Intangibles el 16,07% (+7,09%), Créditos por Ventas creció +105,25% mientras Ventas subió +53,02% (porque el Balance suma el 100% del stock de créditos de TMA al cierre —$421.919M— frente a ~10 meses de ventas de TMA mar–dic en Resultados, llevando el DSO de 26,11 a 35,02 días con Liquidez 0,48x) y el Resultado antes de IG pasó a pérdida ($(191.736)M).',
    porQueConecta:
      'Valida con números dónde está el riesgo de error material y explica dos decisiones técnicas inmediatas del paso siguiente: elegir qué rubros auditar prioritariamente y qué base usar para la Materialidad.',
    fraseOral:
      '«El análisis H/V y los ratios nos mostraron exactamente dónde mirar: Bienes de Uso concentra el 40,84% del activo, Créditos se duplicó (+105,25% vs +53,02% Ventas por consolidar el 100% del saldo al cierre contra 10 meses de ingresos de TMA más mayor mora) tensionando la liquidez (0,48x), y la pérdida antes de impuestos ($(191.736)M) invalida usar el resultado para la materialidad.»'
  },
  {
    id: 'eslabon-4',
    paso: 'ESLABÓN 4 • ETAPA 1D',
    titulo: 'Planificación Detallada: Materialidad (NIA 320), Presupuesto y Programas',
    navView: 'etapa1-plan-detallada',
    navSub: null,
    navLabel: 'Abrir 1D. Planificación Detallada',
    queHicimos:
      'Fijamos la Significatividad Global (PM) sobre el Activo Total: 1% = $166.225M. Por el RC ALTO en Archivo y TIC bajamos el Error Tolerable (ET) al límite prudente del 50% de PM ($83.112M) y definimos el umbral PAE en el 5% de PM ($8.311M). Armamos los programas sustantivos y el presupuesto de 1.220 horas en 3 meses (420 hs PT-A, 120 hs PT-B, 50 hs PT-E).',
    porQueConecta:
      'Traduce el diagnóstico estratégico en reglas matemáticas concretas para la Etapa 2: cuánto tamaño debe tener la muestra y a partir de qué monto ($8.311M) una diferencia debe proponerse como ajuste.',
    fraseOral:
      '«Como hubo pérdida contable y Telecom es capital-intensiva, calculamos la Materialidad sobre el Activo Total: $166.225M. Como el control interno en Archivo y TIC dio riesgo alto, fuimos al piso prudente del 50% para Error Tolerable ($83.112M) y fijamos el piso PAE en $8.311M. Con esa vara salimos al campo.»'
  },
  {
    id: 'eslabon-5',
    paso: 'ESLABÓN 5 • ETAPA 2',
    titulo: 'Ejecución de Papeles de Trabajo Sustantivos (PT-A, PT-E y PT-B)',
    navView: 'etapa2-ejecucion',
    navSub: 'pt-a',
    navLabel: 'Abrir Etapa 2 (PT-A / PT-E / PT-B)',
    queHicimos:
      'Ejecutamos los 3 programas priorizados: en PT-A (PP&E $6.789.118M) las pruebas globales de amortización ($1.533.091M) y valor residual cerraron a $0, pero la inspección física y de bajas vinculada a CCI-02 Preg. 22–23 halló centrales analógicas en desuso ($21.450M) y fibra vandalizada ($6.890M) sin dar de baja en SAP ⇒ AJ-01 por $28.340M. En PT-E (Intangibles $2.671.525M, Nota 10/25 $234.722M amort.) y PT-B (Créditos $800.128M netos, circularización 65 B2B y recálculo Previsión NIIF 9) no hubo desvíos ($0).',
    porQueConecta:
      'Cierra el círculo causal con la Etapa 1: justamente en los rubros donde CCI-01 y CCI-02 habían alertado debilidades aparecieron los $28.340M sin bajar (AJ-01); donde CCI-02/03/04 dieron mayor resguardo y pruebas analíticas globales, los saldos cerraron conformes.',
    fraseOral:
      '«En el campo ejecutamos PT-A, PT-E y PT-B. Aunque las pruebas globales matemáticas de amortizaciones cerraron a cero, al inspeccionar bajas físicas —guiados por la falla 22-23 de CCI-02— encontramos $28.340M en centrales analógicas apagadas y fibra vandalizada que seguían en el activo. Intangibles y Créditos validaron conformes.»'
  },
  {
    id: 'eslabon-6',
    paso: 'ESLABÓN 6 • ETAPA 2 (CIERRE)',
    titulo: 'Planilla PAE de Ajustes Acumulados vs. Significatividad (NIA 450)',
    navView: 'etapa2-ejecucion',
    navSub: 'sec-pae',
    navLabel: 'Abrir Planilla PAE Unificada',
    queHicimos:
      'Evaluamos las diferencias acumuladas contra nuestros umbrales: AJ-01 ($28.340M en Bienes de Uso) supera el PAE ($8.311M) y se propone formalmente a la Gerencia; en el alcance ampliado web se agrega AJ-04 ($11.240M de reclasificación neutra en Flow NIIF 15) y la partida menor PAE-NC-01 (< $8.311M), que no requiere ajuste.',
    porQueConecta:
      'Define técnicamente el sentido de la opinión del auditor. AJ-01 representa solo el 17,05% de PM ($166.225M) y el 34,10% de ET ($83.112M). Si la Dirección lo acepta, el saldo queda corregido ($6.760.778M); e incluso si no lo registrara, el desvío no supera la Materialidad Global ni es generalizado.',
    fraseOral:
      '«Acumulamos AJ-01 ($28.340M) en la planilla PAE porque supera los $8.311M. Con la aceptación de la Gerencia se corrige el balance; y aun en el escenario hipotético de no ajuste, representa el 17,05% de nuestra materialidad global ($166.225M), sin generar distorsión significativa ni generalizada.»'
  },
  {
    id: 'eslabon-7',
    paso: 'ESLABÓN 7 • ETAPA 3',
    titulo: 'Culminación: 4 Documentos Finales del Auditor',
    navView: 'etapa3-informe',
    navSub: 'informe',
    navLabel: 'Abrir Etapa 3 (Conclusión e Informe)',
    queHicimos:
      'Emitimos los 4 entregables de cierre al 20/02/2026: (1) Carta única de Recomendaciones de Control Interno (NIA 265) reportando las debilidades CCI-01..05; (2) Memorando Final de Auditoría documentando PAE y estimaciones (DCF UGE, PPA TMA, NIIF 9); (3) Carta de Representación / Manifestaciones Escritas firmada por la Dirección (NIA 580); e (4) Informe de Auditoría Independiente bajo NIAs (RT N° 32 FACPCE) con Opinión Favorable Sin Salvedades, 3 KAM (NIA 701) e Información Especial SIPA/CNV.',
    porQueConecta:
      'Completa el circuito profesional: lo que no modifica la opinión igualmente vuelve a la empresa como valor agregado (Carta de Recomendaciones NIA 265), la Gerencia respalda sus afirmaciones por escrito (Carta de Representación NIA 580) y los usuarios externos reciben el Dictamen limpio bajo NIIF/NIAs.',
    fraseOral:
      '«Cerramos el encargo con cuatro documentos bien diferenciados: una sola Carta de Recomendaciones (NIA 265) para corregir fallas de control interno, el Memorando de Conclusión, la Carta de Representación firmada por la Dirección (NIA 580), y el Informe del Auditor bajo NIAs (RT N° 32) con Opinión Favorable Sin Salvedades y 3 Cuestiones Clave.»'
  }
];

export default function ResumenIntegralView({
  cciCalculados,
  ajustesState,
  equipoTasks,
  onToggleAjusteAceptado,
  onNavigate,
  subTarget,
  subTargetTick
}) {
  const [filtroSeccion, setFiltroSeccion] = useState('todas'); // 'todas' | 'guion' | 'etapa1' | 'etapa2' | 'etapa3'
  const [guionEdits, setGuionEdits] = useState(() => {
    try {
      const saved = localStorage.getItem(GUION_STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });
  const [editingAllGuion, setEditingAllGuion] = useState(false);
  const [editingSteps, setEditingSteps] = useState({});

  useEffect(() => {
    try {
      localStorage.setItem(GUION_STORAGE_KEY, JSON.stringify(guionEdits));
    } catch {
      // ignore storage errors
    }
  }, [guionEdits]);

  const handleUpdateGuionField = (stepId, field, htmlVal) => {
    setGuionEdits((prev) => ({
      ...prev,
      [stepId]: {
        ...(prev[stepId] || {}),
        [field]: htmlVal
      }
    }));
  };

  const handleResetGuionField = (stepId, field) => {
    setGuionEdits((prev) => {
      const copy = { ...prev };
      if (copy[stepId]) {
        const nextStep = { ...copy[stepId] };
        delete nextStep[field];
        if (Object.keys(nextStep).length === 0) {
          delete copy[stepId];
        } else {
          copy[stepId] = nextStep;
        }
      }
      return copy;
    });
  };

  const handleResetAllGuion = () => {
    setGuionEdits({});
    setEditingAllGuion(false);
    setEditingSteps({});
  };

  const toggleStepEdit = (stepId) => {
    setEditingSteps((prev) => ({
      ...prev,
      [stepId]: !(editingAllGuion || prev[stepId])
    }));
  };

  const hasCustomGuionEdits = Object.keys(guionEdits).length > 0;

  useEffect(() => {
    if (subTarget && ['todas', 'guion', 'etapa1', 'etapa2', 'etapa3'].includes(subTarget)) {
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
  const MATERIALIDAD_GLOBAL = materialidadData.materialidadGlobal.importe; // $166.225M
  const ajustesMateriales = ajustesState.filter((a) => a.superaPAE);
  const totalAjustesPropuestos = ajustesMateriales.reduce((s, a) => s + a.montoMillones, 0);
  const ajustesAceptados = ajustesMateriales.filter((a) => a.aceptado);
  const ajustesRechazados = ajustesMateriales.filter((a) => !a.aceptado);
  const montoAceptado = ajustesAceptados.reduce((s, a) => s + a.montoMillones, 0);
  const montoNoRegistrado = ajustesRechazados.reduce((s, a) => s + a.montoMillones, 0);
  const esLimpiaEstricta = montoNoRegistrado === 0;
  const esOpinionLimpia = montoNoRegistrado < MATERIALIDAD_GLOBAL;

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
              Auditores a Cargo: <strong className="text-slate-800">{proyectoMeta.encargados} (Contadores Públicos — U.C.P.)</strong> • Normativa:{' '}
              <strong className="text-teal-700">Carlos Slosse &amp; NIAs (RT N° 32 FACPCE — CNV) • Marco Contable: NIIF / NIC (IASB)</strong>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 no-print">
            {[
              { id: 'todas', label: 'Ver las 3 Etapas Completas' },
              { id: 'guion', label: 'Guion Hilo Conductor (Clase)', isGuion: true },
              { id: 'etapa1', label: 'Solo Etapa 1' },
              { id: 'etapa2', label: 'Solo Etapa 2' },
              { id: 'etapa3', label: 'Solo Etapa 3' }
            ].map((b) => (
              <button
                key={b.id}
                onClick={() => setFiltroSeccion(b.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-colors inline-flex items-center gap-1.5 ${
                  filtroSeccion === b.id
                    ? b.isGuion
                      ? 'bg-indigo-700 text-white shadow-xs'
                      : 'bg-teal-700 text-white'
                    : b.isGuion
                    ? 'bg-indigo-50 text-indigo-800 border border-indigo-200 hover:bg-indigo-100'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {b.isGuion && <Mic className="w-3.5 h-3.5" />}
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
              {esLimpiaEstricta
                ? 'Favorable sin Salvedades'
                : esOpinionLimpia
                ? 'Favorable s/Salvedades (< PM)'
                : 'Opinión con Salvedades'}
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
          GUION HILO CONDUCTOR PARA EXPOSICIÓN ORAL EN CLASE (7 ESLABONES)
         ===================================================================== */}
      {filtroSeccion === 'guion' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-teal-950 text-white rounded-2xl border border-indigo-500/40 p-6 shadow-md space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-extrabold bg-lime-400 text-slate-950">
                <Mic className="w-3.5 h-3.5" />
                GUION HILO CONDUCTOR — EXPOSICIÓN ORAL PASO A PASO
              </span>
              <div className="flex flex-wrap items-center gap-2 no-print">
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/10 text-teal-200 border border-white/15">
                  Sincronizado con {cciCalculados.length} CCI ({ncPromedio.toFixed(2)}% NC prom.) •{' '}
                  {esOpinionLimpia ? 'Dictamen Favorable Sin Salvedades' : 'Dictamen Modificado'}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    const nextVal = !editingAllGuion;
                    setEditingAllGuion(nextVal);
                    if (!nextVal) setEditingSteps({});
                  }}
                  className={`px-3 py-1 rounded-lg text-xs font-extrabold inline-flex items-center gap-1.5 border transition-colors cursor-pointer ${
                    editingAllGuion
                      ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 border-emerald-300'
                      : 'bg-white/15 hover:bg-white/25 text-white border-white/25'
                  }`}
                >
                  {editingAllGuion ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      Terminar Edición (Guardado)
                    </>
                  ) : (
                    <>
                      <Pencil className="w-3.5 h-3.5" />
                      Editar Guion (Negrita · Cursiva · Subrayado)
                    </>
                  )}
                </button>
                {hasCustomGuionEdits && (
                  <button
                    type="button"
                    onClick={handleResetAllGuion}
                    className="px-2.5 py-1 rounded-lg text-xs font-bold bg-amber-500/20 hover:bg-amber-500/35 text-amber-200 border border-amber-300/40 inline-flex items-center gap-1 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Restaurar Guion
                  </button>
                )}
              </div>
            </div>
            <h3 className="text-xl font-extrabold text-white">
              Cómo se conecta todo el trabajo práctico: del Conocimiento del Ente al Informe del Auditor
            </h3>
            <p className="text-xs text-slate-200 leading-relaxed max-w-4xl">
              Esta hoja ordena la lógica de nuestra auditoría en <strong>7 eslabones secuenciales</strong> (siguiendo a{' '}
              <strong>Carlos A. Slosse</strong> y las <strong>NIAs — RT N° 32 FACPCE</strong>). Podés personalizar cada cuadro con{' '}
              <strong className="text-lime-300">Negrita</strong>, <em className="text-amber-300">Cursiva</em> y{' '}
              <u className="text-teal-300">Subrayado</u> usando el botón <strong className="text-white">«Editar B·I·U»</strong> (se guarda automáticamente en tu navegador).
            </p>
          </div>

          <div className="space-y-4">
            {GUION_ESLABONES_BASE.map((step, idx) => {
              const stepEdits = guionEdits[step.id] || {};
              const isEditingThisStep = editingAllGuion || !!editingSteps[step.id];
              const stepModified = Object.keys(stepEdits).length > 0;
              const valQueHicimos = stepEdits.queHicimos ?? step.queHicimos;
              const valPorQue = stepEdits.porQueConecta ?? step.porQueConecta;
              const valFrase = stepEdits.fraseOral ?? step.fraseOral;

              return (
              <div
                key={step.id}
                className={`bg-white rounded-2xl border p-5 shadow-xs transition-colors ${
                  isEditingThisStep
                    ? 'border-indigo-400 ring-2 ring-indigo-100'
                    : 'border-slate-200 hover:border-indigo-300'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-full bg-indigo-900 text-lime-300 font-extrabold text-xs inline-flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-700">
                          {step.paso}
                        </span>
                        {stepModified && (
                          <span className="px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 font-bold text-[9px] uppercase">
                            Personalizado
                          </span>
                        )}
                      </div>
                      <h4 className="text-sm sm:text-base font-extrabold text-slate-900">
                        {step.titulo}
                      </h4>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 no-print">
                    <button
                      type="button"
                      onClick={() => toggleStepEdit(step.id)}
                      className={`px-2.5 py-1.5 rounded-lg text-xs font-extrabold border inline-flex items-center gap-1 cursor-pointer transition-colors ${
                        isEditingThisStep
                          ? 'bg-emerald-600 text-white border-emerald-700 hover:bg-emerald-700'
                          : 'bg-indigo-50 text-indigo-800 border-indigo-200 hover:bg-indigo-100'
                      }`}
                    >
                      {isEditingThisStep ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          Listo
                        </>
                      ) : (
                        <>
                          <Pencil className="w-3.5 h-3.5" />
                          Editar B·I·U
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => onNavigate && onNavigate(step.navView, step.navSub)}
                      className="px-3 py-1.5 rounded-lg bg-teal-50 hover:bg-teal-100 text-teal-800 border border-teal-200 text-xs font-extrabold inline-flex items-center gap-1 cursor-pointer"
                    >
                      {step.navLabel}
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-3 text-xs leading-relaxed">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <strong className="text-slate-800 uppercase text-[10px] tracking-wider block mb-1">
                      1. ¿Qué hicimos concretamente?
                    </strong>
                    {isEditingThisStep ? (
                      <RichTextBox
                        value={valQueHicimos}
                        baseValue={step.queHicimos}
                        onChange={(html) => handleUpdateGuionField(step.id, 'queHicimos', html)}
                        onReset={() => handleResetGuionField(step.id, 'queHicimos')}
                        boxClassName="text-slate-700"
                        placeholder="Editar Qué hicimos concretamente"
                      />
                    ) : (
                      <div
                        className="text-slate-600 [&_b]:font-bold [&_strong]:font-bold [&_i]:italic [&_em]:italic [&_u]:underline"
                        dangerouslySetInnerHTML={{ __html: sanitizeRichHtml(valQueHicimos) }}
                      />
                    )}
                  </div>
                  <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-200">
                    <strong className="text-amber-900 uppercase text-[10px] tracking-wider flex items-center gap-1 mb-1">
                      <Compass className="w-3.5 h-3.5 text-amber-700" />
                      2. ¿Por qué conecta con el paso siguiente?
                    </strong>
                    {isEditingThisStep ? (
                      <RichTextBox
                        value={valPorQue}
                        baseValue={step.porQueConecta}
                        onChange={(html) => handleUpdateGuionField(step.id, 'porQueConecta', html)}
                        onReset={() => handleResetGuionField(step.id, 'porQueConecta')}
                        boxClassName="text-amber-950"
                        placeholder="Editar Por qué conecta con el paso siguiente"
                      />
                    ) : (
                      <div
                        className="text-amber-950/90 [&_b]:font-bold [&_strong]:font-bold [&_i]:italic [&_em]:italic [&_u]:underline"
                        dangerouslySetInnerHTML={{ __html: sanitizeRichHtml(valPorQue) }}
                      />
                    )}
                  </div>
                  <div className="p-3 rounded-xl bg-indigo-50/70 border border-indigo-200">
                    <strong className="text-indigo-900 uppercase text-[10px] tracking-wider flex items-center gap-1 mb-1">
                      <MessageSquareQuote className="w-3.5 h-3.5 text-indigo-700" />
                      3. Qué decir en voz alta (Guion oral)
                    </strong>
                    {isEditingThisStep ? (
                      <RichTextBox
                        value={valFrase}
                        baseValue={step.fraseOral}
                        onChange={(html) => handleUpdateGuionField(step.id, 'fraseOral', html)}
                        onReset={() => handleResetGuionField(step.id, 'fraseOral')}
                        boxClassName="text-indigo-950 italic"
                        placeholder="Editar Qué decir en voz alta"
                      />
                    ) : (
                      <div
                        className="text-indigo-950 italic [&_b]:font-bold [&_strong]:font-bold [&_i]:italic [&_em]:italic [&_u]:underline"
                        dangerouslySetInnerHTML={{ __html: sanitizeRichHtml(valFrase) }}
                      />
                    )}
                  </div>
                </div>
              </div>
              );
            })}
          </div>

          {/* Mini Cuadro Síntesis Fortalezas y Debilidades dentro del Guion para no cambiar de pestaña si preguntan */}
          <div className="bg-white rounded-2xl border border-teal-200 p-5 shadow-xs space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-teal-700" />
                <h4 className="text-sm font-extrabold text-slate-900">
                  Ayuda-Memoria Rápida: Fortalezas y Debilidades de los 5 CCI (sin abrir las 129 preguntas)
                </h4>
              </div>
              <button
                type="button"
                onClick={() => onNavigate && onNavigate('etapa1-cci', 'sec-sintesis-exposicion')}
                className="no-print text-xs font-bold text-teal-700 hover:underline inline-flex items-center gap-1 cursor-pointer"
              >
                Abrir cuadro completo en 1B <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
              {sintesisExposicionCCI.map((item) => {
                const calc = cciCalculados.find((c) => c.id === item.id);
                return (
                  <div key={item.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-extrabold text-teal-900">
                        {item.codigo}: {item.componente}
                      </span>
                      {calc && (
                        <span
                          className={`px-2 py-0.5 rounded font-extrabold text-[10px] ${
                            calc.rcLabel === 'ALTO'
                              ? 'bg-red-100 text-red-700'
                              : calc.rcLabel === 'MEDIO'
                              ? 'bg-amber-100 text-amber-800'
                              : 'bg-emerald-100 text-emerald-700'
                          }`}
                        >
                          NC {calc.nc.toFixed(2)}% / RC {calc.rcLabel}
                        </span>
                      )}
                    </div>
                    <p className="text-emerald-800">
                      <strong>Fortaleza:</strong> {item.fortalezas[0]}
                    </p>
                    <p className="text-red-700">
                      <strong>Debilidad:</strong> {item.debilidades[0]}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 6 Preguntas Frecuentes del Tribunal */}
          <div className="bg-slate-900 text-white rounded-2xl border border-slate-800 p-5 space-y-3">
            <h4 className="text-sm font-extrabold text-lime-300 uppercase tracking-wider">
              6 Preguntas Clave de Cátedra — Cómo defender cada decisión técnica
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs leading-relaxed">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <strong className="text-amber-300 block mb-1">
                  1. ¿Por qué tomaron 1% del Activo Total como Materialidad y no el Resultado?
                </strong>
                <p className="text-slate-200">
                  Porque en 2025 Telecom arrojó pérdida antes de IG ($(191.736)M) y es una empresa intensiva en capital (88,97% Activo No Corriente). Según Slosse y NIA 320, cuando el resultado es negativo o volátil se toma un benchmark patrimonial estable (0,5%–2% del Activo → punto medio 1% = $166.225M).
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <strong className="text-amber-300 block mb-1">
                  2. ¿Por qué el Error Tolerable es el 50% de la Materialidad ($83.112M) y no 75%?
                </strong>
                <p className="text-slate-200">
                  Porque Slosse y NIA 320 fijan 50% cuando el Riesgo de Control es ALTO. Como CCI-01 Archivo (38,46%) y CCI-05 TIC (47,62%) dieron riesgo alto en los rubros más pesados, reducimos el margen tolerable a la mitad para ampliar muestras.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <strong className="text-amber-300 block mb-1">
                  3. ¿Cambia la opinión si Telecom se niega a registrar AJ-01 ($28.340M)?
                </strong>
                <p className="text-slate-200">
                  No: aun si la Gerencia no registrara AJ-01 ($28.340M), equivale apenas al 17,05% de PM ($166.225M) y al 34,10% de ET ($83.112M). Al no superar la materialidad ni distorsionar los EECC en su conjunto, la opinión sigue siendo Favorable Sin Salvedades y el desvío se informa en la Carta de Recomendaciones / Comité de Auditoría.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <strong className="text-amber-300 block mb-1">
                  4. ¿Hay una o dos cartas en la Etapa 3 y por qué usan RT N° 32 / NIAs?
                </strong>
                <p className="text-slate-200">
                  Son dos cartas distintas dirigidas a la Dirección/Comité: (a) la <strong>Carta de Recomendaciones de Control Interno (NIA 265)</strong>, emitida por el auditor para señalar debilidades CCI; y (b) la <strong>Carta de Representación (NIA 580)</strong>, firmada por el cliente confirmando sus EECC. Además, por cotizar en CNV (régimen NIIF obligatorio), Telecom se audita bajo <strong>NIAs (RT N° 32 FACPCE)</strong>, no solo RT N° 37 local.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <strong className="text-amber-300 block mb-1">
                  5. ¿Qué diferencias hay entre el Informe del TP (Word y Web) y el Dictamen Real de Telecom (CNV)?
                </strong>
                <p className="text-slate-200">
                  Nuestro Informe (idéntico criterio en Word y Web) enfoca sus 3 Cuestiones Clave (KAM) exclusivamente en los <strong>3 rubros auditados (Bienes de Uso, Intangibles y Créditos + TMA)</strong> y omite menciones internas (AJ-01, códigos PT o presupuesto), tal como exige la técnica formal; en tanto el Dictamen real de Telecom trata Llave + TMA y expone honorarios Art. 21 CNV del 91%/71%/64% (vs. 100% auditoría exclusiva en nuestro TP).
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <strong className="text-amber-300 block mb-1">
                  6. ¿Por qué SIPA ($33.699.737.311) dice «no exigible» y qué rol tienen NIA 720 y NIA 600?
                </strong>
                <p className="text-slate-200">
                  La deuda SIPA corresponde a aportes/contribuciones de diciembre 2025 devengados al cierre pero con vencimiento en enero 2026 (Ley 17.250). En el Dictamen real/académico también incluimos <strong>Otra Información (NIA 720)</strong> por la lectura de consistencia de la Memoria Anual y Reseña Informativa, y <strong>Auditoría de Grupo (NIA 600)</strong> por asumir responsabilidad única sobre las subsidiarias consolidadas incluida TMA.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

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
                        <span
                          className={`px-2 py-0.5 rounded font-extrabold text-[11px] ${
                            c.rcLabel === 'ALTO'
                              ? 'bg-red-100 text-red-700'
                              : c.rcLabel === 'MEDIO'
                              ? 'bg-amber-100 text-amber-800'
                              : 'bg-emerald-100 text-emerald-700'
                          }`}
                        >
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
                  Liquidez Corriente: <strong>0,48x</strong> (24: 0,39x) • Prueba Ácida: <strong>0,46x</strong> • Endeudamiento: <strong>1,38x</strong> (24: 0,98x) • Solvencia (A/P): <strong>1,72x</strong> • Solvencia Bruta (PN/P): <strong>0,72</strong> (PN/A: 42,01%) • Deuda/EBITDA: <strong>2,15x</strong> (Neta: 1,84x) • Cobertura EBITDA/Int.: <strong>6,54x</strong> • Plazo Cobro: <strong>35,02 días</strong> (+8,91d) • Margen EBITDA: <strong>30,32%</strong> • ROE: <strong>-2,08%</strong>.
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
                              <strong>{b.Bloque}:</strong> {typeof b.Pasos[0] === 'object' ? b.Pasos[0].texto : b.Pasos[0]}
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
                  <span className="font-mono text-[10px] text-slate-500">
                    LC-01 • <NormaTooltip code="NIA 265" align="left" placement="top" />
                  </span>
                </div>
                <h4 className="font-extrabold text-slate-900 text-sm">
                  Carta de Recomendaciones de Control Interno
                </h4>
                <p className="text-slate-600 mt-1.5 leading-relaxed">
                  Comunica al Directorio y Comité de Auditoría las debilidades de los 5 CCI: archivo de obras interior (ISO 15.489), conciliación API 24-48 hs y bajas en SAP FI-AA (Preg. 22-23 CCI-02 → AJ-01 $28.340M), reserva presupuestaria SAP, licencias clave TI/5G (PAE-NC-01) y migración de interfaces Flow (AJ-04 $11.240M).
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-amber-200/80 flex items-center justify-between font-bold text-amber-900 text-[11px]">
                <span>5 Recomendaciones Formales Emitidas</span>
                <button
                  type="button"
                  onClick={() => onNavigate && onNavigate('etapa3-informe', 'carta-ci')}
                  className="no-print text-indigo-700 hover:underline cursor-pointer"
                >
                  Abrir LC-01 →
                </button>
              </div>
            </div>

            {/* Hito 2 */}
            <div className="p-4 rounded-xl border border-teal-200 bg-teal-50/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 rounded bg-teal-700 text-white font-extrabold text-[10px]">
                    2° REALIZADO • 18/02/2026
                  </span>
                  <span className="font-mono text-[10px] text-slate-500">
                    LC-02 • <NormaTooltip code="NIA 450" align="center" placement="top" />
                  </span>
                </div>
                <h4 className="font-extrabold text-slate-900 text-sm">
                  Memorando Resumen de Auditoría
                </h4>
                <p className="text-slate-600 mt-1.5 leading-relaxed">
                  Documento interno elevado al Socio donde los encargados (Grebe - Pisonero De Biase) evalúan el cumplimiento de los Programas A–F, suficiencia de evidencia, empresa en marcha (NIA 570), covenants (1,84x / 6,54x), hechos posteriores (NIA 560) y resolución de la Planilla PAE.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-teal-200/80 flex items-center justify-between font-bold text-teal-900 text-[11px]">
                <span>Aprobado previo al dictamen</span>
                <button
                  type="button"
                  onClick={() => onNavigate && onNavigate('etapa3-informe', 'memorando')}
                  className="no-print text-indigo-700 hover:underline cursor-pointer"
                >
                  Abrir LC-02 →
                </button>
              </div>
            </div>

            {/* Hito 3 */}
            <div className="p-4 rounded-xl border border-purple-200 bg-purple-50/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 rounded bg-purple-700 text-white font-extrabold text-[10px]">
                    3° REALIZADO • 20/02/2026 (Pre-Firma)
                  </span>
                  <span className="font-mono text-[10px] text-slate-500">
                    LC-03 • <NormaTooltip code="NIA 580" align="center" placement="top" />
                  </span>
                </div>
                <h4 className="font-extrabold text-slate-900 text-sm">
                  Carta de Representación de la Dirección
                </h4>
                <p className="text-slate-600 mt-1.5 leading-relaxed">
                  Manifestaciones escritas del Presidente, CEO y CFO confirmando integridad de SAP, evaluación PAE (NIA 450.14), PPA TMA (NIIF 3 Nota 29), DCF UGE Redes Personal ($12.774.695M), contingencias ($563.085M Nota 20), partes relacionadas (Nota 28) y hechos posteriores (NIA 560).
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-purple-200/80 flex items-center justify-between font-bold text-purple-900 text-[11px]">
                <span>Requisito obligatorio NIA 580</span>
                <button
                  type="button"
                  onClick={() => onNavigate && onNavigate('etapa3-informe', 'carta-gerencia')}
                  className="no-print text-indigo-700 hover:underline cursor-pointer"
                >
                  Abrir LC-03 →
                </button>
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
                  <span className="font-mono text-[10px] text-slate-500">
                    NIAs / <NormaTooltip code="RT 32" align="right" placement="top" />
                  </span>
                </div>
                <h4 className="font-extrabold text-slate-900 text-sm">
                  Informe de Auditoría Independiente
                </h4>
                <p className="text-slate-700 mt-1.5 leading-relaxed">
                  Emitido bajo NIAs (RT N° 32 FACPCE): Opinión NIIF, Fundamento IAASB, Independencia IESBA, 3 Cuestiones Clave (KAM NIA 701: Bienes de Uso/TMA, Intangibles/TMA y Créditos/NIIF 9), Otra Información (NIA 720), Comité de Auditoría, SIPA ($33.699.737.311) y Art. 21 CNV.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-300 flex items-center justify-between gap-2 font-extrabold text-xs">
                <div>
                  Dictamen:{' '}
                  <span className={esOpinionLimpia ? 'text-emerald-800' : 'text-red-700'}>
                    {esLimpiaEstricta
                      ? 'FAVORABLE SIN SALVEDADES'
                      : esOpinionLimpia
                      ? `FAVORABLE S/SALVEDADES ($${montoNoRegistrado.toLocaleString('es-AR')}M < PM)`
                      : `CON SALVEDADES ($${montoNoRegistrado.toLocaleString('es-AR')}M)`}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate && onNavigate('etapa3-informe', 'informe')}
                  className="no-print text-indigo-700 hover:underline cursor-pointer shrink-0"
                >
                  Abrir Informe →
                </button>
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
                Marco Teórico: Carlos A. Slosse • Normas de Auditoría: NIAs (RT N° 32 FACPCE — CNV) • Normas Contables del Ente: NIIF / NIC (IASB)
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
