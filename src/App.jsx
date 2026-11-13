import React, { useState, useMemo, useEffect } from 'react';
import {
  Home,
  Users,
  PanelLeftClose,
  PanelLeftOpen,
  Building2,
  ClipboardCheck,
  Calculator,
  FileSpreadsheet,
  Award,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  BookOpenCheck,
  Sparkles,
  TrendingUp
} from 'lucide-react';

import {
  proyectoMeta,
  cuestionariosControlInterno
} from './data/etapa1Data';
import {
  equipoTrabajoInicial,
  hallazgosYAjustes
} from './data/etapas2y3Data';

import DashboardView from './components/DashboardView';
import Etapa1EnteView from './components/Etapa1EnteView';
import Etapa1ControlInternoView from './components/Etapa1ControlInternoView';
import AnalisisEstadosContablesView from './components/AnalisisEstadosContablesView';
import Etapa1PlanDetalladaView from './components/Etapa1PlanDetalladaView';
import Etapa2EjecucionView from './components/Etapa2EjecucionView';
import Etapa3InformeView from './components/Etapa3InformeView';
import EquipoTrabajoView from './components/EquipoTrabajoView';
import ResumenIntegralView from './components/ResumenIntegralView';

const BRAND_OPTIONS = [
  { id: 'SendaAudita', prefix: 'Senda', suffix: 'Audita', initials: 'SA' },
  { id: 'VérticeAudita', prefix: 'Vértice', suffix: 'Audita', initials: 'VA' },
  { id: 'NexoAudita', prefix: 'Nexo', suffix: 'Audita', initials: 'NA' },
  { id: 'ÁbacoAudita', prefix: 'Ábaco', suffix: 'Audita', initials: 'ÁA' },
  { id: 'TrazaAudita', prefix: 'Traza', suffix: 'Audita', initials: 'TA' },
  { id: 'PrismaAudita', prefix: 'Prisma', suffix: 'Audita', initials: 'PA' },
  { id: 'PulsoAudita', prefix: 'Pulso', suffix: 'Audita', initials: 'PU' },
  { id: 'CriterioAudita', prefix: 'Criterio', suffix: 'Audita', initials: 'CA' },
  { id: 'FaroAudita', prefix: 'Faro', suffix: 'Audita', initials: 'FA' }
];

const NAV_ITEMS = [
  {
    id: 'dashboard',
    shortLabel: 'Dashboard General',
    label: 'Dashboard General (Reporte / Control / Proyectos)',
    etapaTag: 'Visión 360°',
    icon: Home,
    subItems: [
      { id: 'todas', label: '0.1. Vista Integral (3 Paneles)', type: 'tab' },
      { id: 'reporte', label: '0.2. Panel Reporte y Avance', type: 'tab' },
      { id: 'control', label: '0.3. Panel Control y Riesgos', type: 'tab' },
      { id: 'proyectos', label: '0.4. Panel Proyectos y Rubros', type: 'tab' }
    ]
  },
  {
    id: 'etapa1-ente',
    shortLabel: '1A. Conocimiento Ente',
    label: 'Etapa 1A: Conocimiento del Ente y Diagnóstico (AE2)',
    etapaTag: 'Etapa 1: Planificación',
    icon: Building2,
    subItems: [
      { id: 'sec-1a-ti', label: '1.1.A. Entorno TI Masivo (NIA 315)', type: 'scroll' },
      { id: 'sec-1a-reuniones', label: '1.1.B. Agenda Reuniones Clave', type: 'scroll' },
      { id: 'sec-1a-legal', label: '1.1.C. Marco Legal y Fiscal (NIA 250)', type: 'scroll' },
      { id: 'sec-1a-negocio', label: '1.1.D. Negocio, Misión y Visión', type: 'scroll' },
      { id: 'sec-1a-organigrama', label: '1.1.E. Organigrama Interactivo', type: 'scroll' },
      { id: 'sec-1a-productos', label: '1.1.F. Productos B2C y B2B', type: 'scroll' },
      { id: 'sec-1a-proceso', label: '1.1.G. Proceso B2B Personal Tech', type: 'scroll' },
      { id: 'sec-1a-entorno', label: '1.1.H. Macro (PESTEL) y Porter', type: 'scroll' },
      { id: 'sec-1a-fraude', label: '1.1.I. Riesgo Fraude (NIA 240) & COSO', type: 'scroll' }
    ]
  },
  {
    id: 'etapa1-cci',
    shortLabel: '1B. Control Interno (CCI)',
    label: 'Etapa 1B: Control Interno (5 CCI) y Matriz de Riesgos',
    etapaTag: 'Etapa 1: Planificación',
    icon: ClipboardCheck,
    subItems: [
      { id: 'sec-sintesis-exposicion', label: '1.2.0. Síntesis: Fortalezas y Debilidades', type: 'scroll' },
      { id: 'cci-1', label: '1.2.A. CCI-01: Archivo Documental', type: 'tab' },
      { id: 'cci-2', label: '1.2.B. CCI-02: Sistema Contable', type: 'tab' },
      { id: 'cci-3', label: '1.2.C. CCI-03: Presupuestos', type: 'tab' },
      { id: 'cci-4', label: '1.2.D. CCI-04: Sistema Operativo', type: 'tab' },
      { id: 'cci-5', label: '1.2.E. CCI-05: Sistema Tecnológico', type: 'tab' },
      { id: 'sec-ponderacion', label: '1.2.F. Matriz Ponderación Preliminar', type: 'scroll' }
    ]
  },
  {
    id: 'etapa1-analisis-eecc',
    shortLabel: '1C. Análisis H/V y Ratios',
    label: 'Etapa 1C: Análisis Horizontal, Vertical, Gráficas y Ratios Financieros',
    etapaTag: 'Etapa 1: Planificación',
    icon: TrendingUp,
    subItems: [
      { id: 'esp', label: '1.3.A. Estado Situación Financiera (H/V)', type: 'tab' },
      { id: 'er', label: '1.3.B. Estado de Resultados (H/V)', type: 'tab' },
      { id: 'graficas', label: '1.3.C. Gráficas de Variación y Estructura', type: 'tab' },
      { id: 'ratios', label: '1.3.D. Ratios Financieros y Matriz (27)', type: 'tab' },
      { id: 'vinculacion', label: '1.3.E. Relación con Pruebas (A-F)', type: 'tab' },
      { id: 'sec-conclusion-final', label: '1.3.F. Conclusión Técnica Final', type: 'scroll' }
    ]
  },
  {
    id: 'etapa1-detallada',
    shortLabel: '1D. Planificación Detallada',
    label: 'Etapa 1D: Materialidad, Rubros Significativos, Afirmaciones y Programas',
    etapaTag: 'Etapa 1: Planificación',
    icon: Calculator,
    subItems: [
      { id: 'sec-1c-materialidad', label: '1.4.A. Materialidad (PM, ET, PAE)', type: 'scroll' },
      { id: 'sec-1c-afirmaciones', label: '1.4.B. Afirmaciones (E, I, P, M, X)', type: 'scroll' },
      { id: 'sec-1c-rubros', label: '1.5.A. Rubros Críticos y Programas A-F', type: 'scroll' },
      { id: 'sec-1c-cronograma', label: '1.5.B. Cronograma (3 Meses / 12 Sem.)', type: 'scroll' },
      { id: 'sec-1c-presupuesto-honorarios', label: '1.5.C. Presupuesto Honorarios ($80M)', type: 'scroll' },
      { id: 'sec-1c-memorando-planificacion', label: '1.5.D. Memorando de Planificación', type: 'scroll' }
    ]
  },
  {
    id: 'etapa2-ejecucion',
    shortLabel: '2. Ejecución & PT (A-F)',
    label: 'Etapa 2: Ejecución, Papeles de Trabajo y Planilla PAE',
    etapaTag: 'Etapa 2: Ejecución',
    icon: FileSpreadsheet,
    subItems: [
      { id: 'pt-a', label: '2.1. PT-A: Bienes de Uso ⭐', type: 'tab' },
      { id: 'pt-b', label: '2.2. PT-B: Créditos por Ventas ⭐', type: 'tab' },
      { id: 'pt-c', label: '2.3. PT-C: Préstamos', type: 'tab' },
      { id: 'pt-d', label: '2.4. PT-D: Ventas', type: 'tab' },
      { id: 'pt-e', label: '2.5. PT-E: Activos Intangibles ⭐', type: 'tab' },
      { id: 'pt-f', label: '2.6. PT-F: Llaves de Negocio', type: 'tab' },
      { id: 'sec-pae', label: '2.7. Planilla de Ajustes (PAE)', type: 'scroll' }
    ]
  },
  {
    id: 'etapa3-informe',
    shortLabel: '3. Conclusión e Informe',
    label: 'Etapa 3: Carta CI, Memorando, Carta Gerencia e Informe (NIAs / RT N° 32)',
    etapaTag: 'Etapa 3: Conclusión',
    icon: Award,
    subItems: [
      { id: 'carta-ci', label: '3.1. Carta Control Interno (12/02)', type: 'tab' },
      { id: 'memorando', label: '3.2. Memorando Conclusión (18/02)', type: 'tab' },
      { id: 'carta-gerencia', label: '3.3. Carta de Gerencia (20/02)', type: 'tab' },
      { id: 'informe', label: '3.4. Informe del Auditor (20/02 Final)', type: 'tab' }
    ]
  },
  {
    id: 'equipo',
    shortLabel: 'Equipo de Trabajo',
    label: 'Equipo de Trabajo y Seguimiento de Solicitudes',
    etapaTag: 'Gestión Colaborativa',
    icon: Users,
    subItems: []
  },
  {
    id: 'resumen-integral',
    shortLabel: 'Hoja Resumen (3 Etapas)',
    label: 'Hoja Final: Resumen Integral Dinámico de las 3 Etapas',
    etapaTag: 'Síntesis Consolidada',
    icon: BookOpenCheck,
    subItems: [
      { id: 'guion', label: '4.0. Guion e Hilo Conductor (Clase)', type: 'tab' },
      { id: 'todas', label: '4.1. Expediente Completo (3 Etapas)', type: 'tab' },
      { id: 'etapa1', label: '4.2. Síntesis Etapa 1 (Planificación)', type: 'tab' },
      { id: 'etapa2', label: '4.3. Síntesis Etapa 2 (Ejecución)', type: 'tab' },
      { id: 'etapa3', label: '4.4. Síntesis Etapa 3 (Conclusión)', type: 'tab' }
    ]
  }
];

export default function App() {
  const [activeView, setActiveView] = useState('dashboard');
  const [subTarget, setSubTarget] = useState(null);
  const [subTargetTick, setSubTargetTick] = useState(0);
  const [openMenus, setOpenMenus] = useState({ 'etapa1-analisis-eecc': true });
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  // Nombre de la plataforma configurable en vivo
  const [selectedBrandId, setSelectedBrandId] = useState(() => {
    try {
      return localStorage.getItem('audiia_brand_v1') || 'SendaAudita';
    } catch {
      return 'SendaAudita';
    }
  });

  const activeBrand =
    BRAND_OPTIONS.find((b) => b.id === selectedBrandId) || BRAND_OPTIONS[0];

  useEffect(() => {
    try {
      localStorage.setItem('audiia_brand_v1', selectedBrandId);
      document.title = `${selectedBrandId} | Auditoría Externa — Telecom Argentina S.A. (EECC 2025)`;
    } catch {
      // ignore
    }
  }, [selectedBrandId]);

  // Zoom de lectura configurable (proporcional, accesible y persistente)
  const ZOOM_LEVELS = [90, 100, 105, 110, 120, 130];
  const [fontZoom, setFontZoom] = useState(() => {
    try {
      const saved = localStorage.getItem('audiia_font_zoom');
      return saved ? Number(saved) : 100;
    } catch {
      return 100;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('audiia_font_zoom', fontZoom.toString());
      if (fontZoom === 100) {
        document.documentElement.style.zoom = '';
      } else {
        document.documentElement.style.zoom = `${fontZoom}%`;
      }
    } catch {
      // ignore
    }
  }, [fontZoom]);

  const handleZoomIn = () => {
    const idx = ZOOM_LEVELS.indexOf(fontZoom);
    if (idx < ZOOM_LEVELS.length - 1) setFontZoom(ZOOM_LEVELS[idx + 1]);
    else if (idx === -1) setFontZoom(110);
  };

  const handleZoomOut = () => {
    const idx = ZOOM_LEVELS.indexOf(fontZoom);
    if (idx > 0) setFontZoom(ZOOM_LEVELS[idx - 1]);
    else if (idx === -1) setFontZoom(90);
  };

  const handleResetZoom = () => {
    setFontZoom(100);
  };

  // Estado interactivo de los 5 Cuestionarios de Control Interno
  const [cuestionariosState, setCuestionariosState] = useState(() => {
    try {
      const saved = localStorage.getItem('audiia_cci_v6');
      return saved ? JSON.parse(saved) : cuestionariosControlInterno;
    } catch {
      return cuestionariosControlInterno;
    }
  });

  // Estado interactivo de los Ajustes Propuestos (PAE)
  const [ajustesState, setAjustesState] = useState(() => {
    const mapAceptado = {};
    try {
      const saved = localStorage.getItem('audiia_ajustes_v3');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          parsed.forEach((item) => {
            if (item && item.id) mapAceptado[item.id] = item.aceptado;
          });
        }
      }
    } catch {
      // ignore
    }
    return hallazgosYAjustes.map((a) => ({
      ...a,
      aceptado:
        typeof mapAceptado[a.id] === 'boolean'
          ? mapAceptado[a.id]
          : a.aceptadoPorGerenciaInicial
    }));
  });

  // Estado interactivo del Equipo de Trabajo
  const [equipoTasks, setEquipoTasks] = useState(() => {
    try {
      const saved = localStorage.getItem('audiia_equipo_v2');
      return saved ? JSON.parse(saved) : equipoTrabajoInicial;
    } catch {
      return equipoTrabajoInicial;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('audiia_cci_v6', JSON.stringify(cuestionariosState));
    } catch {
      // ignore
    }
  }, [cuestionariosState]);

  useEffect(() => {
    try {
      localStorage.setItem('audiia_ajustes_v3', JSON.stringify(ajustesState));
    } catch {
      // ignore
    }
  }, [ajustesState]);

  useEffect(() => {
    try {
      localStorage.setItem('audiia_equipo_v2', JSON.stringify(equipoTasks));
    } catch {
      // ignore
    }
  }, [equipoTasks]);

  // Cálculo dinámico de las Matrices de Confianza y Riesgo de cada CCI (Opción A: Lógica Natural de Auditoría)
  const cciCalculados = useMemo(() => {
    return cuestionariosState.map((cci) => {
      const total = cci.preguntas.length;
      const positivas = cci.preguntas.filter((p) => p.respuesta === 'SI').length;
      const negativas = cci.preguntas.filter((p) => p.respuesta === 'NO').length;
      
      // Enfoque natural de auditoría (Opción A):
      // Confianza (NC) = % de controles positivos (respuestas SÍ que funcionan adecuadamente)
      // Riesgo de Control (RC) = complemento de deficiencias (respuestas NO)
      const nc = (positivas / Math.max(1, total)) * 100;
      const rc = 100 - nc;
      const ri = rc; // Riesgo asociado

      let ncLabel = 'BAJO';
      let rcLabel = 'ALTO';
      if (nc > 75) {
        ncLabel = 'ALTO';
        rcLabel = 'BAJO';
      } else if (nc >= 51) {
        ncLabel = 'MEDIO';
        rcLabel = 'MEDIO';
      }

      return {
        ...cci,
        total,
        positivas,
        negativas,
        ri,
        rc,
        nc,
        ncLabel,
        rcLabel
      };
    });
  }, [cuestionariosState]);

  // Navegación centralizada con soporte completo para historial del navegador (botón atrás / botón retroceder del mouse)
  const navigateTo = (targetViewId, optionalSubId = null, options = {}) => {
    const { pushHistory = true, scroll = true } = options;
    const normalizedView =
      targetViewId === 'etapa1-plan-detallada' ? 'etapa1-detallada' : targetViewId;

    if (pushHistory && typeof window !== 'undefined') {
      const currentState = window.history.state;
      const isSame =
        currentState &&
        currentState.view === normalizedView &&
        currentState.subTarget === (optionalSubId || null);

      if (!isSame) {
        window.history.pushState(
          { view: normalizedView, subTarget: optionalSubId || null },
          '',
          `#${normalizedView}${optionalSubId ? `/${optionalSubId}` : ''}`
        );
      }
    }

    setActiveView(normalizedView);
    setOpenMenus((prev) => ({ ...prev, [normalizedView]: true }));
    setSubTarget(optionalSubId || null);
    setSubTargetTick((t) => t + 1);

    if (scroll) {
      if (optionalSubId) {
        setTimeout(() => {
          const el = document.getElementById(optionalSubId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 120);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleNavigate = (targetViewId, optionalSubId = null) => {
    navigateTo(targetViewId, optionalSubId, { pushHistory: true, scroll: true });
  };

  // Handlers de menú principal y subtemas desplegables
  const handleSelectMainItem = (itemId) => {
    const isAlreadyActive = activeView === itemId;
    setOpenMenus((prev) => ({
      ...prev,
      [itemId]: isAlreadyActive ? !prev[itemId] : true
    }));
    navigateTo(itemId, null, { pushHistory: true, scroll: !isAlreadyActive });
  };

  const handleSelectSubItem = (parentId, subItem) => {
    navigateTo(parentId, subItem.id, {
      pushHistory: true,
      scroll: subItem.type === 'scroll'
    });
  };

  // Soporte para botón de retroceso / avance del mouse y del navegador (popstate)
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Al montar, inicializar el estado del historial
    const hash = window.location.hash.replace(/^#/, '');
    let initialView = activeView;
    let initialSub = subTarget;

    if (hash) {
      const [hashView, hashSub] = hash.split('/');
      if (hashView) {
        initialView = hashView === 'etapa1-plan-detallada' ? 'etapa1-detallada' : hashView;
      }
      if (hashSub) {
        initialSub = hashSub;
      }
    }

    if (window.history.state?.view) {
      initialView = window.history.state.view;
      initialSub = window.history.state.subTarget || null;
    } else {
      window.history.replaceState(
        { view: initialView, subTarget: initialSub },
        '',
        `#${initialView}${initialSub ? `/${initialSub}` : ''}`
      );
    }

    if (initialView !== activeView || initialSub !== subTarget) {
      setActiveView(initialView);
      setOpenMenus((prev) => ({ ...prev, [initialView]: true }));
      setSubTarget(initialSub);
      setSubTargetTick((t) => t + 1);
    }

    const handlePopState = (event) => {
      if (event.state && event.state.view) {
        const { view, subTarget: popSub } = event.state;
        navigateTo(view, popSub || null, { pushHistory: false, scroll: true });
      } else {
        const popHash = window.location.hash.replace(/^#/, '');
        if (popHash) {
          const [hView, hSub] = popHash.split('/');
          const norm = hView === 'etapa1-plan-detallada' ? 'etapa1-detallada' : hView;
          navigateTo(norm, hSub || null, { pushHistory: false, scroll: true });
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // ScrollSpy: sincroniza dinámicamente el sub-ítem activo del menú lateral con la posición del scroll en pantalla
  useEffect(() => {
    let scrollTimer;
    const handleScroll = () => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        const currentItem = NAV_ITEMS.find((item) => item.id === activeView);
        if (!currentItem || !currentItem.subItems || currentItem.subItems.length === 0) return;

        // Solo ejecutar ScrollSpy automático si TODOS los subtemas son de tipo 'scroll' (vistas puramente continuas de lectura, ej. 1A y 1D)
        const isPureScrollView = currentItem.subItems.every((s) => s.type === 'scroll');
        if (!isPureScrollView) return;

        const scrollSubs = currentItem.subItems;

        // Si estamos cerca del tope superior de la página, activa el primer sub-ítem
        if (window.scrollY < 140) {
          if (subTarget !== scrollSubs[0].id) {
            setSubTarget(scrollSubs[0].id);
          }
          return;
        }

        // Punto de referencia visual (aprox. 180px por debajo del header sticky)
        const referencePoint = window.scrollY + 180;
        let activeId = null;

        for (const sub of scrollSubs) {
          const el = document.getElementById(sub.id);
          if (el) {
            const top = el.offsetTop;
            if (referencePoint >= top) {
              activeId = sub.id;
            }
          }
        }

        if (activeId && activeId !== subTarget) {
          setSubTarget(activeId);
        }
      }, 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(scrollTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeView, subTarget]);

  const handleToggleRespuesta = (cciId, preguntaNumero, nuevaRespuesta) => {
    setCuestionariosState((prev) =>
      prev.map((cci) => {
        if (cci.id !== cciId) return cci;
        return {
          ...cci,
          preguntas: cci.preguntas.map((p) =>
            p.n === preguntaNumero ? { ...p, respuesta: nuevaRespuesta } : p
          )
        };
      })
    );
  };

  const handleResetCuestionarios = () => {
    try {
      localStorage.removeItem('audiia_cci_v4');
      localStorage.removeItem('audiia_cci_v5');
      localStorage.removeItem('audiia_cci_v6');
    } catch {
      // ignore
    }
    setCuestionariosState(cuestionariosControlInterno);
  };

  const handleToggleAjusteAceptado = (ajusteId) => {
    setAjustesState((prev) =>
      prev.map((a) => (a.id === ajusteId ? { ...a, aceptado: !a.aceptado } : a))
    );
  };

  const handleCycleTaskStatus = (taskId) => {
    const cycle = [
      { estado: 'Aprobado', colorEstado: 'green', porcentaje: 100 },
      { estado: 'Observado', colorEstado: 'red', porcentaje: 100 },
      { estado: 'En revisión', colorEstado: 'yellow', porcentaje: 90 },
      { estado: 'En proceso', colorEstado: 'purple', porcentaje: 75 },
      { estado: 'Validado Esp.', colorEstado: 'blue', porcentaje: 100 }
    ];
    setEquipoTasks((prev) =>
      prev.map((t) => {
        if (t.id !== taskId) return t;
        const idx = cycle.findIndex((c) => c.colorEstado === t.colorEstado);
        const next = cycle[(idx + 1) % cycle.length];
        return { ...t, ...next };
      })
    );
  };

  const handleAddTask = (newTask) => {
    setEquipoTasks((prev) => [
      ...prev,
      {
        id: `eq-${Date.now()}`,
        ...newTask,
        rol: 'Auditor Asignado',
        estado: 'En proceso',
        colorEstado: 'purple',
        porcentaje: 80
      }
    ]);
  };

  const handleResetTasks = () => {
    setEquipoTasks(equipoTrabajoInicial);
  };

  // Navegación secuencial Anterior / Siguiente para Modo Exposición
  const currentIndex = NAV_ITEMS.findIndex((item) => item.id === activeView);
  const goPrev = () => {
    if (currentIndex > 0) {
      const target = NAV_ITEMS[currentIndex - 1].id;
      navigateTo(target, null, { pushHistory: true, scroll: true });
    }
  };
  const goNext = () => {
    if (currentIndex < NAV_ITEMS.length - 1) {
      const target = NAV_ITEMS[currentIndex + 1].id;
      navigateTo(target, null, { pushHistory: true, scroll: true });
    }
  };

  return (
    <div className="min-h-screen flex bg-slate-100 text-slate-800">
      {/* BARRA LATERAL IZQUIERDA CON SUBTEMAS DESPLEGABLES */}
      <aside
        className={`no-print bg-white border-r border-slate-200 flex flex-col justify-between transition-all duration-300 shrink-0 sticky top-0 h-screen z-30 ${
          sidebarExpanded ? 'w-72' : 'w-16'
        }`}
      >
        <div className="flex flex-col flex-1 min-h-0">
          {/* Logo Dinámico */}
          <div className="h-16 px-4 border-b border-slate-100 flex items-center justify-between shrink-0">
            <div
              onClick={() => navigateTo('dashboard', null, { pushHistory: true, scroll: true })}
              className="flex items-center gap-2.5 cursor-pointer overflow-hidden"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-700 to-lime-500 flex items-center justify-center text-white font-extrabold text-sm shrink-0 shadow-xs">
                {activeBrand.initials}
              </div>
              {sidebarExpanded && (
                <div>
                  <span className="font-extrabold text-base tracking-tight text-teal-900">
                    {activeBrand.prefix}
                    <span className="text-lime-600">{activeBrand.suffix}</span>
                  </span>
                  <span className="block text-[10px] font-semibold text-slate-400 -mt-1">
                    Auditoría Externa • NIAs / Slosse
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Árbol de Navegación con Subtemas Desplegables */}
          <nav className="p-2.5 space-y-1 overflow-y-auto flex-1">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeView === item.id;
              const isOpen = !!openMenus[item.id];
              const hasSubItems = item.subItems && item.subItems.length > 0;

              return (
                <div key={item.id} className="space-y-1">
                  <button
                    onClick={() => handleSelectMainItem(item.id)}
                    title={item.label}
                    className={`w-full flex items-center justify-between gap-2 px-3 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-teal-700 text-white shadow-xs'
                        : 'text-slate-700 hover:bg-teal-50 hover:text-teal-800'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Icon
                        className={`w-4 h-4 shrink-0 ${
                          isActive ? 'text-lime-300' : 'text-teal-700'
                        }`}
                      />
                      {sidebarExpanded && (
                        <div className="text-left truncate">
                          <span className="block truncate">{item.shortLabel}</span>
                          <span
                            className={`block text-[10px] font-normal truncate ${
                              isActive ? 'text-teal-100' : 'text-slate-400'
                            }`}
                          >
                            {item.etapaTag}
                          </span>
                        </div>
                      )}
                    </div>

                    {sidebarExpanded && hasSubItems && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        } ${isActive ? 'text-teal-100' : 'text-slate-400'}`}
                      />
                    )}
                  </button>

                  {/* Subtemas desplegables */}
                  {sidebarExpanded && hasSubItems && isOpen && (
                    <div className="ml-4 pl-3 border-l-2 border-teal-200 space-y-0.5 py-1">
                      {item.subItems.map((sub) => {
                        const isSubActive = isActive && subTarget === sub.id;
                        return (
                          <button
                            key={sub.id}
                            onClick={() => handleSelectSubItem(item.id, sub)}
                            className={`w-full text-left px-2.5 py-1.5 rounded-lg text-[11px] font-semibold transition-colors cursor-pointer truncate block ${
                              isSubActive
                                ? 'bg-lime-100 text-teal-950 font-extrabold border border-lime-300'
                                : 'text-slate-600 hover:bg-slate-100 hover:text-teal-800'
                            }`}
                          >
                            {sub.label}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        {/* Botón inferior para colapsar/expandir barra lateral */}
        <div className="p-3 border-t border-slate-100 shrink-0">
          <button
            onClick={() => setSidebarExpanded(!sidebarExpanded)}
            className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-bold text-teal-700 hover:bg-teal-50 transition-colors cursor-pointer"
            title={sidebarExpanded ? 'Contraer menú lateral' : 'Expandir menú lateral'}
          >
            {sidebarExpanded ? (
              <>
                <PanelLeftClose className="w-4 h-4" />
                <span>Contraer Menú</span>
              </>
            ) : (
              <PanelLeftOpen className="w-5 h-5" />
            )}
          </button>
        </div>
      </aside>

      {/* CONTENIDO PRINCIPAL */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Barra Superior con Selector de Nombre y Navegación Secuencial */}
        <header className="no-print bg-white border-b border-slate-200 px-6 py-3 sticky top-0 z-20 shadow-2xs">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-2.5 py-1 rounded-lg bg-lime-100 text-lime-800 text-xs font-extrabold border border-lime-300">
                CASO: TELECOM ARGENTINA S.A. (EECC 2025)
              </span>
              <span className="hidden xl:inline-block text-xs font-semibold text-slate-500">
                Autores: <strong className="text-slate-800">{proyectoMeta.encargados} (U.C.P.)</strong> •{' '}
                <strong className="text-teal-700">Slosse &amp; NIAs / RT N° 32 (Auditoría) • NIIF / NIC (Telecom)</strong>
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {/* Selector rápido de Nombre de la Plataforma */}
              <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1">
                <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                <span className="text-[11px] font-bold text-slate-500">Nombre App:</span>
                <select
                  value={selectedBrandId}
                  onChange={(e) => setSelectedBrandId(e.target.value)}
                  className="text-xs font-extrabold text-teal-900 bg-transparent focus:outline-none cursor-pointer"
                >
                  {BRAND_OPTIONS.map((b) => (
                    <option key={b.id} value={b.id}>
                      {b.id}
                    </option>
                  ))}
                </select>
              </div>

              {/* Barra de Ajuste de Zoom / Tamaño de Texto */}
              <div className="flex items-center gap-1 bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 shadow-2xs">
                <span className="text-[11px] font-bold text-slate-500 mr-0.5 hidden md:inline">Zoom:</span>
                <button
                  onClick={handleZoomOut}
                  disabled={fontZoom <= 90}
                  className="w-6 h-6 flex items-center justify-center rounded text-xs font-bold text-slate-700 hover:bg-slate-200 disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed transition-colors"
                  title="Reducir tamaño de letra (A-)"
                >
                  A-
                </button>
                <button
                  onClick={handleResetZoom}
                  className="px-1.5 py-0.5 rounded text-[11px] font-mono font-extrabold text-teal-800 hover:bg-teal-100 cursor-pointer transition-colors"
                  title="Restablecer tamaño normal (100%)"
                >
                  {fontZoom}%
                </button>
                <button
                  onClick={handleZoomIn}
                  disabled={fontZoom >= 130}
                  className="w-6 h-6 flex items-center justify-center rounded text-xs font-bold text-slate-700 hover:bg-slate-200 disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed transition-colors"
                  title="Aumentar tamaño de letra (A+)"
                >
                  A+
                </button>
              </div>

              {/* Stepper Secuencial */}
              <button
                onClick={goPrev}
                disabled={currentIndex === 0}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-xs font-bold text-slate-700 hover:bg-slate-100 disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" /> Anterior
              </button>
              <span className="text-xs font-bold text-teal-900 bg-teal-50 px-3 py-1.5 rounded-lg border border-teal-200">
                Paso {currentIndex + 1}/{NAV_ITEMS.length}: {NAV_ITEMS[currentIndex]?.shortLabel}
              </span>
              <button
                onClick={goNext}
                disabled={currentIndex === NAV_ITEMS.length - 1}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-teal-700 text-xs font-bold text-white hover:bg-teal-800 disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
              >
                Siguiente <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </header>

        {/* Área de Trabajo Dinámica */}
        <main
          style={fontZoom !== 100 ? { zoom: `${fontZoom}%` } : undefined}
          className="p-4 sm:p-6 lg:p-8 max-w-[1680px] w-full mx-auto flex-1 transition-all"
        >
          {activeView === 'dashboard' && (
            <DashboardView
              cciCalculados={cciCalculados}
              equipoTasks={equipoTasks}
              ajustesState={ajustesState}
              onNavigate={handleNavigate}
              subTarget={subTarget}
              subTargetTick={subTargetTick}
              brandName={selectedBrandId}
            />
          )}

          {activeView === 'etapa1-ente' && <Etapa1EnteView onNavigate={handleNavigate} />}

          {activeView === 'etapa1-cci' && (
            <Etapa1ControlInternoView
              cuestionariosState={cuestionariosState}
              cciCalculados={cciCalculados}
              onToggleRespuesta={handleToggleRespuesta}
              onResetCuestionarios={handleResetCuestionarios}
              onNavigate={handleNavigate}
              subTarget={subTarget}
              subTargetTick={subTargetTick}
            />
          )}

          {activeView === 'etapa1-analisis-eecc' && (
            <AnalisisEstadosContablesView
              onNavigate={handleNavigate}
              subTarget={subTarget}
              subTargetTick={subTargetTick}
            />
          )}

          {activeView === 'etapa1-detallada' && (
            <Etapa1PlanDetalladaView
              onNavigate={handleNavigate}
              subTarget={subTarget}
              subTargetTick={subTargetTick}
            />
          )}

          {activeView === 'etapa2-ejecucion' && (
            <Etapa2EjecucionView
              ajustesState={ajustesState}
              onToggleAjusteAceptado={handleToggleAjusteAceptado}
              onNavigate={handleNavigate}
              subTarget={subTarget}
              subTargetTick={subTargetTick}
            />
          )}

          {activeView === 'etapa3-informe' && (
            <Etapa3InformeView
              cciCalculados={cciCalculados}
              ajustesState={ajustesState}
              onToggleAjusteAceptado={handleToggleAjusteAceptado}
              onNavigate={handleNavigate}
              subTarget={subTarget}
              subTargetTick={subTargetTick}
            />
          )}

          {activeView === 'equipo' && (
            <EquipoTrabajoView
              equipoTasks={equipoTasks}
              onCycleTaskStatus={handleCycleTaskStatus}
              onAddTask={handleAddTask}
              onResetTasks={handleResetTasks}
            />
          )}

          {activeView === 'resumen-integral' && (
            <ResumenIntegralView
              cciCalculados={cciCalculados}
              ajustesState={ajustesState}
              equipoTasks={equipoTasks}
              onToggleAjusteAceptado={handleToggleAjusteAceptado}
              onNavigate={handleNavigate}
              subTarget={subTarget}
              subTargetTick={subTargetTick}
            />
          )}
        </main>
      </div>
    </div>
  );
}
