import React, { useState, useRef } from 'react';
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
  Award,
  Radio,
  Database,
  Briefcase,
  DollarSign,
  ShieldCheck,
  TrendingUp,
  AlertTriangle,
  FileText,
  CheckCircle2,
  ArrowRight,
  Check,
  BookOpen,
  Lock,
  Landmark,
  HardDrive,
  Sliders,
  Pencil,
  RotateCcw,
  X
} from 'lucide-react';
import { conocimientoEnte } from '../data/etapa1Data';
import { renderFormattedRichText } from './Etapa2EjecucionView';

export default function Etapa1EnteView({ onNavigate }) {
  const [selectedVertical, setSelectedVertical] = useState(
    conocimientoEnte.organigrama?.verticales?.[1] || null
  ); // B2B Personal Tech por defecto
  const [activeEjeLegalIndex, setActiveEjeLegalIndex] = useState(0);

  // Estados para textos editables de Etapa 1A con persistencia en localStorage
  const [customTexts, setCustomTexts] = useState(() => {
    try {
      const saved = localStorage.getItem('audiia_ente_custom_v1');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [editingKey, setEditingKey] = useState(null);
  const [tempEditText, setTempEditText] = useState('');
  const textareaRef = useRef(null);

  const handleStartEdit = (key, defaultText) => {
    setEditingKey(key);
    setTempEditText(customTexts[key] !== undefined ? customTexts[key] : defaultText);
  };

  const handleCancelEdit = () => {
    setEditingKey(null);
    setTempEditText('');
  };

  const handleSaveEdit = (key) => {
    const updated = { ...customTexts, [key]: tempEditText };
    setCustomTexts(updated);
    try {
      localStorage.setItem('audiia_ente_custom_v1', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
    setEditingKey(null);
  };

  const handleResetEdit = (key) => {
    const ok = window.confirm('¿Deseas restablecer este texto a su redacción original?');
    if (!ok) return;
    const updated = { ...customTexts };
    delete updated[key];
    setCustomTexts(updated);
    try {
      localStorage.setItem('audiia_ente_custom_v1', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
    setEditingKey(null);
  };

  const handleResetAllTexts = () => {
    const ok = window.confirm('¿Estás seguro de que deseas restablecer TODOS los textos modificados de la Etapa 1A a su versión original?');
    if (!ok) return;
    setCustomTexts({});
    try {
      localStorage.removeItem('audiia_ente_custom_v1');
    } catch (e) {
      console.error(e);
    }
    setEditingKey(null);
  };

  const applyFormat = (prefix, suffix) => {
    if (!textareaRef.current) return;
    const el = textareaRef.current;
    const start = el.selectionStart;
    const end = el.selectionEnd;
    const text = tempEditText || '';
    const selected = text.substring(start, end);

    const replacement = selected.length > 0 ? `${prefix}${selected}${suffix}` : `${prefix}texto${suffix}`;
    const newText = text.substring(0, start) + replacement + text.substring(end);
    setTempEditText(newText);

    setTimeout(() => {
      if (el) {
        el.focus();
        const cursorStart = start + prefix.length;
        const cursorEnd = cursorStart + (selected.length || 5);
        el.setSelectionRange(cursorStart, cursorEnd);
      }
    }, 15);
  };

  // Helper para renderizar un bloque editable con botón de lápiz y formato enriquecido
  const renderEditableBlock = ({
    fieldKey,
    defaultText,
    label = 'Editar texto',
    rows = 3,
    textClassName = 'text-xs text-slate-700 leading-relaxed',
    containerClassName = ''
  }) => {
    const isEditing = editingKey === fieldKey;
    const currentText = customTexts[fieldKey] !== undefined ? customTexts[fieldKey] : defaultText;
    const isCustom = customTexts[fieldKey] !== undefined;

    if (isEditing) {
      return (
        <div className="mt-2 space-y-2 p-3 rounded-xl bg-teal-50/70 border border-teal-300 animate-in fade-in duration-150">
          <div className="flex flex-wrap items-center justify-between gap-1.5 pb-1 border-b border-teal-200 text-xs">
            <span className="text-[10px] font-extrabold text-teal-900 uppercase tracking-wide">
              {label}
            </span>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => applyFormat('**', '**')}
                className="px-2 py-0.5 rounded bg-white hover:bg-teal-100 border border-teal-300 font-extrabold text-slate-800 text-xs shadow-2xs cursor-pointer"
                title="Añadir negrita (**texto**)"
              >
                B
              </button>
              <button
                type="button"
                onClick={() => applyFormat('<u>', '</u>')}
                className="px-2 py-0.5 rounded bg-white hover:bg-teal-100 border border-teal-300 text-slate-800 text-xs underline shadow-2xs cursor-pointer"
                title="Añadir subrayado"
              >
                U
              </button>
              <button
                type="button"
                onClick={() => applyFormat('\n', '')}
                className="px-2 py-0.5 rounded bg-white hover:bg-teal-100 border border-teal-300 text-slate-700 text-xs shadow-2xs cursor-pointer"
                title="Salto de línea"
              >
                ↵ Salto
              </button>
            </div>
          </div>
          <textarea
            ref={textareaRef}
            value={tempEditText}
            onChange={(e) => setTempEditText(e.target.value)}
            rows={rows}
            className="w-full p-2.5 rounded-lg border border-teal-400 bg-white text-slate-800 text-xs focus:ring-2 focus:ring-teal-500 focus:outline-none leading-relaxed"
          />
          <div className="flex items-center justify-between gap-2 pt-1">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleSaveEdit(fieldKey)}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold transition-colors cursor-pointer"
              >
                <Check className="w-3.5 h-3.5" /> Guardar cambios
              </button>
              <button
                type="button"
                onClick={handleCancelEdit}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold cursor-pointer"
              >
                <X className="w-3.5 h-3.5" /> Cancelar
              </button>
            </div>
            {isCustom && (
              <button
                type="button"
                onClick={() => handleResetEdit(fieldKey)}
                className="text-[11px] font-bold text-amber-700 hover:underline cursor-pointer"
              >
                Restablecer original
              </button>
            )}
          </div>
        </div>
      );
    }

    return (
      <div className={`group relative ${containerClassName}`}>
        <div className="flex items-start justify-between gap-2">
          <div className={`${textClassName} whitespace-pre-line flex-1`}>
            {renderFormattedRichText(currentText)}
          </div>
          <button
            type="button"
            onClick={() => handleStartEdit(fieldKey, defaultText)}
            className="opacity-50 group-hover:opacity-100 p-1 rounded-md text-teal-700 hover:text-teal-900 hover:bg-teal-100/70 transition-all shrink-0 cursor-pointer"
            title="Editar este texto / agregar notas"
          >
            <Pencil className="w-3.5 h-3.5" />
          </button>
        </div>
        {isCustom && (
          <span className="inline-block mt-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-200">
            Modificado
          </span>
        )}
      </div>
    );
  };

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

  const reunionColorMap = {
    teal: 'border-teal-200 bg-teal-50/40 text-teal-800',
    blue: 'border-blue-200 bg-blue-50/40 text-blue-800',
    emerald: 'border-emerald-200 bg-emerald-50/40 text-emerald-800',
    indigo: 'border-indigo-200 bg-indigo-50/40 text-indigo-800',
    purple: 'border-purple-200 bg-purple-50/40 text-purple-800',
    rose: 'border-rose-200 bg-rose-50/40 text-rose-800',
    amber: 'border-amber-200 bg-amber-50/40 text-amber-800'
  };

  const getReunionIcon = (icono) => {
    switch (icono) {
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-teal-700" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-blue-700" />;
      case 'DollarSign': return <DollarSign className="w-5 h-5 text-emerald-700" />;
      case 'Server': return <Server className="w-5 h-5 text-indigo-700" />;
      case 'Scale': return <Scale className="w-5 h-5 text-purple-700" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-rose-700" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-amber-700" />;
      default: return <Users className="w-5 h-5 text-slate-700" />;
    }
  };

  const totalCustomCount = Object.keys(customTexts).length;

  return (
    <div className="space-y-8">
      {/* Barra de control superior para textos editables */}
      {totalCustomCount > 0 && (
        <div className="bg-amber-50 border border-amber-300 rounded-xl p-3 flex flex-wrap items-center justify-between gap-2 shadow-2xs">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-900">
            <Pencil className="w-4 h-4 text-amber-700" />
            <span>
              Tenés <strong>{totalCustomCount}</strong> texto(s) personalizado(s) guardado(s) en tu navegador para la Etapa 1A.
            </span>
          </div>
          <button
            type="button"
            onClick={handleResetAllTexts}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-amber-400 hover:bg-amber-100 text-amber-900 text-xs font-bold cursor-pointer transition-colors shadow-2xs"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Restablecer todos al original
          </button>
        </div>
      )}

      {/* ========================================================= */}
      {/* 1.1.A. COMPLEJIDAD DEL ENTORNO DE TI (NIA 315)             */}
      {/* ========================================================= */}
      <div id="sec-1a-ti" className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs scroll-mt-20">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md text-xs font-extrabold bg-indigo-600 text-white">
                NIA 315
              </span>
              <span className="text-xs font-extrabold uppercase tracking-wide text-indigo-900 bg-indigo-50 px-2.5 py-0.5 rounded-md border border-indigo-200">
                Complejidad del Entorno de Tecnología de la Información
              </span>
            </div>
            <h2 className="text-xl font-extrabold text-slate-900 mt-2">
              Telecom Argentina S.A. — Ambiente de TI Masivo y Enfoque de Auditoría de Sistemas
            </h2>
            <div className="mt-1">
              {renderEditableBlock({
                fieldKey: 'ente-ti-necesidad',
                defaultText: conocimientoEnte.ambienteTI?.necesidadEspecialistas ||
                  'El entorno informático de Telecom se clasifica como de alta complejidad y volumen masivo de datos, lo que exige la participación de especialistas en auditoría de sistemas dentro del equipo de trabajo.',
                label: 'Necesidad de Especialistas de TI',
                rows: 2,
                textClassName: 'text-xs text-slate-600 font-medium'
              })}
            </div>
          </div>
          <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-slate-900 text-white shadow-2xs">
            Clasificación: ALTA COMPLEJIDAD
          </span>
        </div>

        {/* Tarjetas de Métricas de Volumen Masivo de Accesos y Datos */}
        <div className="mt-5">
          <div className="text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
            <Radio className="w-4 h-4 text-indigo-600" />
            Volumen de Accesos y Datos Masivos Administrados a Nivel Nacional
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {conocimientoEnte.ambienteTI?.metricasVolumen?.map((m, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 flex flex-col justify-between hover:border-indigo-300 transition-all">
                <div>
                  <span className="text-[11px] font-extrabold uppercase text-slate-500 tracking-wider">
                    {m.etiqueta}
                  </span>
                  <p className="text-2xl font-extrabold text-indigo-950 font-mono mt-1">
                    {m.cifra}
                  </p>
                </div>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed border-t border-slate-200/80 pt-2">
                  {m.detalle}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Arquitectura de Sistemas y Desafío de Integración TMA */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div className="lg:col-span-7 rounded-xl border border-slate-200 p-5 bg-white space-y-3">
            <div className="text-xs font-extrabold text-slate-800 uppercase tracking-wide flex items-center gap-2 pb-2 border-b border-slate-100">
              <Database className="w-4 h-4 text-indigo-600" />
              Arquitectura de Sistemas Centrales y Plataformas Digitales
            </div>
            <div className="space-y-2.5">
              {conocimientoEnte.ambienteTI?.arquitecturaSistemas?.map((sist, i) => (
                <div key={i} className="p-3 rounded-lg border border-slate-100 bg-slate-50/60 hover:bg-slate-50 transition-colors">
                  <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                    {sist.nombre}
                  </h4>
                  <div className="pl-5 mt-1">
                    {renderEditableBlock({
                      fieldKey: `ente-ti-sist-${i}`,
                      defaultText: sist.detalle,
                      label: `Detalle de ${sist.nombre}`,
                      rows: 2,
                      textClassName: 'text-xs text-slate-600 leading-relaxed'
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enfoque de Auditoría de TI: ITGC vs ITAC */}
          <div className="lg:col-span-5 rounded-xl border border-indigo-200 bg-indigo-50/30 p-5 space-y-4 flex flex-col justify-between">
            <div>
              <div className="text-xs font-extrabold text-indigo-950 uppercase tracking-wide flex items-center gap-2 pb-2 border-b border-indigo-200/70">
                <Sliders className="w-4 h-4 text-indigo-700" />
                Enfoque de Auditoría de TI (Especialistas de Sistemas)
              </div>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Debido a la magnitud transaccional, el examen sobre la información contable se apoya en dos grandes categorías de controles informáticos:
              </p>

              <div className="mt-4 space-y-3">
                <div className="p-3 rounded-xl bg-white border border-indigo-200 shadow-2xs">
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-xs font-extrabold text-indigo-900">
                      {conocimientoEnte.ambienteTI?.enfoqueAuditoriaTI?.itgc?.nombre}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-indigo-100 text-indigo-800">
                      {conocimientoEnte.ambienteTI?.enfoqueAuditoriaTI?.itgc?.sigla}
                    </span>
                  </div>
                  {renderEditableBlock({
                    fieldKey: 'ente-ti-itgc',
                    defaultText: conocimientoEnte.ambienteTI?.enfoqueAuditoriaTI?.itgc?.alcance || '',
                    label: 'Alcance de los ITGC',
                    rows: 2,
                    textClassName: 'text-xs text-slate-600 leading-relaxed'
                  })}
                </div>

                <div className="p-3 rounded-xl bg-white border border-teal-200 shadow-2xs">
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-xs font-extrabold text-teal-900">
                      {conocimientoEnte.ambienteTI?.enfoqueAuditoriaTI?.itac?.nombre}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-teal-100 text-teal-800">
                      {conocimientoEnte.ambienteTI?.enfoqueAuditoriaTI?.itac?.sigla}
                    </span>
                  </div>
                  {renderEditableBlock({
                    fieldKey: 'ente-ti-itac',
                    defaultText: conocimientoEnte.ambienteTI?.enfoqueAuditoriaTI?.itac?.alcance || '',
                    label: 'Alcance de los ITAC',
                    rows: 2,
                    textClassName: 'text-xs text-slate-600 leading-relaxed'
                  })}
                </div>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-[11px] text-amber-900 flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span>
                <strong>Impacto en la Planificación:</strong> Si los controles automáticos de aplicación (ITAC) entre las plataformas de tráfico masivo y SAP fallan, se incrementa el riesgo de corte de ventas y sobre/subestimación en el reconocimiento de ingresos (NIIF 15).
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 1.1.B. REUNIONES CON MIEMBROS CLAVES DEL CLIENTE           */}
      {/* ========================================================= */}
      <div id="sec-1a-reuniones" className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs scroll-mt-20">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md text-xs font-extrabold bg-teal-600 text-white">
                GOBIERNO CORPORATIVO
              </span>
              <span className="text-xs font-extrabold uppercase tracking-wide text-teal-900 bg-teal-50 px-2.5 py-0.5 rounded-md border border-teal-200">
                Coordinación de la Planeación — Entrevistas Formales
              </span>
            </div>
            <h3 className="text-lg font-extrabold text-slate-900 mt-2">
              Reuniones con Miembros Claves del Cliente e Indagaciones Ejecutivas
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              La coordinación de la auditoría externa exige un cronograma formal de reuniones con los niveles ejecutivos e independientes de la entidad:
            </p>
          </div>
          <span className="text-xs text-slate-500 font-medium">
            7 Estamentos Directivos Entrevistados (Editables con lápiz)
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {conocimientoEnte.reunionesClave?.map((r) => (
            <div
              key={r.id}
              className={`p-4 rounded-xl border flex flex-col justify-between transition-all hover:shadow-xs ${reunionColorMap[r.color] || 'border-slate-200 bg-slate-50'}`}
            >
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-2 rounded-lg bg-white border border-slate-200/80 shadow-2xs">
                    {getReunionIcon(r.icono)}
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold text-slate-900 leading-tight">
                      {r.estamento}
                    </h4>
                    <span className="text-[10px] font-bold text-slate-500 block mt-0.5">
                      {r.rol}
                    </span>
                  </div>
                </div>
                <div className="mt-2 pt-2 border-t border-slate-200/70">
                  {renderEditableBlock({
                    fieldKey: `ente-reunion-${r.id}`,
                    defaultText: r.temasTratados,
                    label: `Temas: ${r.estamento}`,
                    rows: 3,
                    textClassName: 'text-xs text-slate-700 leading-relaxed'
                  })}
                </div>
              </div>
              <div className="mt-3 pt-2 text-[10px] font-extrabold text-teal-900 uppercase tracking-wider flex items-center justify-between">
                <span>Indagación Clave</span>
                <span>✓ Relevado</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================= */}
      {/* 1.1.C. MARCO LEGAL, REGULATORIO Y MATRIZ IMPOSITIVA (NIA 250) */}
      {/* ========================================================= */}
      <div id="sec-1a-legal" className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs scroll-mt-20">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md text-xs font-extrabold bg-purple-700 text-white">
                NIA 250
              </span>
              <span className="text-xs font-extrabold uppercase tracking-wide text-purple-900 bg-purple-50 px-2.5 py-0.5 rounded-md border border-purple-200">
                Leyes y Regulaciones en la Auditoría de Estados Financieros
              </span>
            </div>
            <h3 className="text-lg font-extrabold text-slate-900 mt-2">
              Marco Regulatorio de Telecomunicaciones, Privacidad, Competencia y Régimen Impositivo
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              {conocimientoEnte.marcoRegulatorio?.resumen ||
                'Comprensión del marco legal y regulatorio que afecta de manera directa las cifras contables y las contingencias.'}
            </p>
          </div>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-100 text-purple-800 border border-purple-200">
            Sector Convergente TIC
          </span>
        </div>

        {/* Ejes Regulatorios: Selector y Detalle */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Menú de los 5 Ejes */}
          <div className="lg:col-span-4 space-y-2">
            {conocimientoEnte.marcoRegulatorio?.ejes?.map((eje, idx) => {
              const isSelected = activeEjeLegalIndex === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveEjeLegalIndex(idx)}
                  className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all ${
                    isSelected
                      ? 'border-purple-600 bg-purple-50/80 ring-2 ring-purple-500 shadow-2xs'
                      : 'border-slate-200 bg-slate-50/60 hover:bg-slate-100/70'
                  }`}
                >
                  <h4 className="text-xs font-extrabold text-slate-900">
                    {eje.titulo}
                  </h4>
                  <p className="text-[11px] font-semibold text-purple-800 mt-0.5">
                    {eje.ley}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Panel con los puntos clave del Eje Seleccionado */}
          <div className="lg:col-span-8 rounded-xl border border-slate-200 p-5 bg-white space-y-3">
            {conocimientoEnte.marcoRegulatorio?.ejes?.[activeEjeLegalIndex] && (
              <>
                <div className="pb-2 border-b border-slate-100 flex items-center justify-between gap-2">
                  <div>
                    <h4 className="text-sm font-extrabold text-slate-900">
                      {conocimientoEnte.marcoRegulatorio.ejes[activeEjeLegalIndex].titulo}
                    </h4>
                    <span className="text-xs font-bold text-purple-700">
                      {conocimientoEnte.marcoRegulatorio.ejes[activeEjeLegalIndex].ley}
                    </span>
                  </div>
                  <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-purple-100 text-purple-800">
                    Eje {activeEjeLegalIndex + 1} de {conocimientoEnte.marcoRegulatorio.ejes.length}
                  </span>
                </div>

                <ul className="space-y-2.5 mt-3 text-xs text-slate-700 leading-relaxed">
                  {conocimientoEnte.marcoRegulatorio.ejes[activeEjeLegalIndex].puntos.map((pt, pIdx) => (
                    <li key={pIdx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                      {renderEditableBlock({
                        fieldKey: `ente-eje-${activeEjeLegalIndex}-pt-${pIdx}`,
                        defaultText: pt,
                        label: `Punto ${pIdx + 1}`,
                        rows: 2,
                        textClassName: 'text-xs text-slate-700 leading-relaxed'
                      })}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>

        {/* Tabla Matriz Impositiva Completa (4 Niveles) */}
        <div className="mt-6">
          <div className="text-xs font-extrabold text-slate-900 uppercase tracking-wide mb-2.5 flex items-center gap-2">
            <Landmark className="w-4 h-4 text-purple-700" />
            Matriz Tributaria Aplicada a Telecom Argentina S.A.
          </div>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-100 text-slate-700 font-bold uppercase border-b border-slate-200">
                  <th className="py-2.5 px-4 w-40">Nivel Tributario</th>
                  <th className="py-2.5 px-4 w-72">Impuestos / Tasas Aplicables</th>
                  <th className="py-2.5 px-4">Impacto Operativo y Contable en Telecom</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {conocimientoEnte.marcoRegulatorio?.matrizImpositiva?.map((tax, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="py-3 px-4 font-extrabold text-slate-900">
                      <span className="px-2 py-1 rounded bg-slate-100 border border-slate-200 font-bold text-[11px]">
                        {tax.nivel}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-bold text-slate-800">
                      {tax.tributos}
                    </td>
                    <td className="py-3 px-4 text-slate-600 leading-relaxed">
                      {renderEditableBlock({
                        fieldKey: `ente-tax-impacto-${i}`,
                        defaultText: tax.impacto,
                        label: `Impacto ${tax.nivel}`,
                        rows: 2,
                        textClassName: 'text-xs text-slate-600 leading-relaxed'
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-3 p-3 rounded-lg bg-purple-50/60 border border-purple-200 text-xs text-slate-700">
            <span className="font-extrabold text-purple-900 block text-[11px] uppercase mb-1">
              Procedimientos de Planeación (NIA 250):
            </span>
            {renderEditableBlock({
              fieldKey: 'ente-procedimientos-nia250',
              defaultText: conocimientoEnte.marcoRegulatorio?.procedimientosNIA250 || '',
              label: 'Procedimientos NIA 250',
              rows: 2,
              textClassName: 'text-xs text-slate-700'
            })}
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 1.1.D. NEGOCIO, MISIÓN Y VISIÓN (AE2)                     */}
      {/* ========================================================= */}
      <div id="sec-1a-negocio" className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs scroll-mt-20">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
          <div>
            <span className="px-2.5 py-1 rounded-md text-xs font-extrabold bg-teal-600 text-white">
              CONOCIMIENTO DEL NEGOCIO (AE2)
            </span>
            <h2 className="text-xl font-extrabold text-slate-900 mt-2">
              Propósito Institucional, Identidad Tech-Co y Capital Humano
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Según Carlos Slosse y RT 37, el proceso de auditoría requiere comprender el propósito estratégico del ente y el perfil técnico de su dotación.
            </p>
          </div>
        </div>

        {/* Misión, Visión y Recurso Humano */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
          <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/60 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-teal-700 font-bold text-sm mb-2">
                <Users className="w-4 h-4" /> Recurso Humano e Identidad Tech-Co
              </div>
              {renderEditableBlock({
                fieldKey: 'ente-negocio-recursoHumano',
                defaultText: conocimientoEnte.recursoHumano,
                label: 'Recurso Humano',
                rows: 3,
                textClassName: 'text-xs text-slate-700 leading-relaxed'
              })}
            </div>
            <div className="mt-3 pt-2.5 border-t border-slate-200/80 text-[11px] font-semibold text-slate-500">
              Operaciones en Argentina, Paraguay y Uruguay • 16 Data Centers propios
            </div>
          </div>

          <div className="rounded-xl border border-blue-200 p-4 bg-blue-50/30">
            <div className="flex items-center gap-2 text-blue-800 font-bold text-sm mb-2">
              <Target className="w-4 h-4" /> Misión Telecom
            </div>
            <div className="mb-2">
              {renderEditableBlock({
                fieldKey: 'ente-negocio-proposito',
                defaultText: conocimientoEnte.mision.proposito,
                label: 'Propósito Institucional',
                rows: 2,
                textClassName: 'text-sm font-extrabold text-blue-950'
              })}
            </div>
            {renderEditableBlock({
              fieldKey: 'ente-negocio-compromiso',
              defaultText: conocimientoEnte.mision.compromiso,
              label: 'Compromiso Institucional',
              rows: 3,
              textClassName: 'text-xs text-slate-700 leading-relaxed'
            })}
          </div>

          <div className="rounded-xl border border-emerald-200 p-4 bg-emerald-50/30">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm mb-2">
              <Compass className="w-4 h-4" /> Visión Estratégica («Tech-Co»)
            </div>
            <ul className="space-y-2 text-xs text-slate-700 leading-relaxed">
              {conocimientoEnte.vision.map((v, i) => (
                <li key={i} className="p-1 rounded bg-white/60 border border-emerald-100">
                  {renderEditableBlock({
                    fieldKey: `ente-negocio-vision-${i}`,
                    defaultText: v,
                    label: `Eje de Visión ${i + 1}`,
                    rows: 2,
                    textClassName: 'text-xs text-slate-700 leading-relaxed'
                  })}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 1.1.E. ORGANIGRAMA INTERACTIVO DE TELECOM ARGENTINA S.A.  */}
      {/* ========================================================= */}
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
          {conocimientoEnte.organigrama?.verticales?.map((vert) => {
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

      {/* ========================================================= */}
      {/* 1.1.F. PRODUCTOS B2C Y B2B                                 */}
      {/* ========================================================= */}
      <div id="sec-1a-productos" className="grid grid-cols-1 lg:grid-cols-2 gap-6 scroll-mt-20">
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
          <div className="flex items-center gap-2 pb-3 mb-4 border-b border-slate-100">
            <span className="px-2.5 py-1 rounded-md bg-blue-600 text-white text-xs font-extrabold">SEGMENTO A</span>
            <h3 className="text-base font-extrabold text-slate-900">
              Mercado Masivo e Individual (B2C — Personal y Flow)
            </h3>
          </div>
          <div className="space-y-3">
            {conocimientoEnte.productos?.b2c?.map((prod, idx) => (
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
            {conocimientoEnte.productos?.b2b?.map((prod, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-emerald-50/30 border border-emerald-200/70">
                <h4 className="text-xs font-bold text-emerald-950">{prod.titulo}</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">{prod.detalle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 1.1.G. PROCESO B2B PERSONAL TECH Y MISIÓN DEL PROCESO      */}
      {/* ========================================================= */}
      <div id="sec-1a-proceso" className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs scroll-mt-20">
        <h3 className="text-base font-extrabold text-slate-900 pb-3 border-b border-slate-100">
          Proceso de Negocio Seleccionado: {conocimientoEnte.procesoNegocio?.procesoSeleccionado?.nombre}
        </h3>
        <p className="text-xs text-slate-600 mt-2">
          {conocimientoEnte.procesoNegocio?.procesoSeleccionado?.objetivo}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 mt-4">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-[11px] font-extrabold uppercase text-teal-700">Cliente Verdadero</span>
            <p className="text-xs text-slate-700 mt-1 leading-relaxed">
              {conocimientoEnte.procesoNegocio?.procesoSeleccionado?.clienteVerdadero}
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-[11px] font-extrabold uppercase text-teal-700">Proveedores Clave</span>
            <p className="text-xs text-slate-700 mt-1 leading-relaxed">
              {conocimientoEnte.procesoNegocio?.procesoSeleccionado?.proveedores}
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-[11px] font-extrabold uppercase text-teal-700">Solicitud (Disparador)</span>
            <p className="text-xs text-slate-700 mt-1 leading-relaxed">
              {conocimientoEnte.procesoNegocio?.procesoSeleccionado?.solicitud}
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-[11px] font-extrabold uppercase text-teal-700">Declaración (Compromiso)</span>
            <p className="text-xs text-slate-700 mt-1 leading-relaxed">
              {conocimientoEnte.procesoNegocio?.procesoSeleccionado?.declaracion}
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
              {conocimientoEnte.procesoNegocio?.misionProceso?.map((row, i) => (
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

      {/* ========================================================= */}
      {/* 1.1.H. DIAGNÓSTICO: MACRO (PESTEL) Y PORTER               */}
      {/* ========================================================= */}
      <div id="sec-1a-entorno" className="grid grid-cols-1 lg:grid-cols-12 gap-6 scroll-mt-20">
        {/* Macroentorno */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
          <h3 className="text-base font-extrabold text-slate-900 pb-3 border-b border-slate-100 mb-3">
            Análisis del Macroentorno (PESTEL)
          </h3>
          <div className="space-y-3">
            {conocimientoEnte.diagnosticoEntorno?.macroentorno?.map((mac, i) => (
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
                {conocimientoEnte.diagnosticoEntorno?.microentorno?.map((f, i) => (
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
            {conocimientoEnte.diagnosticoEntorno?.competidores?.map((comp, i) => (
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

      {/* ========================================================= */}
      {/* 1.1.I. RIESGO DE FRAUDE (NIA 240) Y MARCO COSO (NIA 315)   */}
      {/* ========================================================= */}
      <div id="sec-1a-fraude" className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs scroll-mt-20">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-5">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md text-xs font-extrabold bg-red-600 text-white">
                NIA 240 / NIA 315
              </span>
              <span className="text-xs font-extrabold uppercase tracking-wide text-red-900 bg-red-50 px-2.5 py-0.5 rounded-md border border-red-200">
                Valoración del Riesgo de Fraude &amp; Componentes COSO
              </span>
            </div>
            <h3 className="text-lg font-extrabold text-slate-900 mt-2">
              Presunciones Obligatorias de Fraude y Componentes del Control Interno
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              La NIA 240 exige mantener escepticismo profesional y asumir dos presunciones obligatorias de riesgo de fraude durante la planificación:
            </p>
          </div>
          {onNavigate && (
            <button
              onClick={() => onNavigate('etapa1-cci')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-teal-700 text-white text-xs font-bold hover:bg-teal-800 transition-colors cursor-pointer"
            >
              Ir a Cuestionarios CCI (Etapa 1B) <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* 2 Presunciones Obligatorias de Fraude */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-4 rounded-xl border border-red-200 bg-red-50/40 space-y-2.5">
            <div className="flex items-center gap-2 text-red-900 font-extrabold text-xs uppercase">
              <AlertTriangle className="w-4 h-4 text-red-600" />
              {conocimientoEnte.riesgoFraudeYControl?.presuncionesFraude?.[0]?.titulo}
            </div>
            {renderEditableBlock({
              fieldKey: 'ente-fraude-ingresos',
              defaultText: conocimientoEnte.riesgoFraudeYControl?.presuncionesFraude?.[0]?.explicacion || '',
              label: 'Presunción de Ingresos',
              rows: 4,
              textClassName: 'text-xs text-slate-700 leading-relaxed'
            })}
          </div>

          <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/40 space-y-2.5">
            <div className="flex items-center gap-2 text-amber-950 font-extrabold text-xs uppercase">
              <ShieldAlert className="w-4 h-4 text-amber-600" />
              {conocimientoEnte.riesgoFraudeYControl?.presuncionesFraude?.[1]?.titulo}
            </div>
            {renderEditableBlock({
              fieldKey: 'ente-fraude-elusion',
              defaultText: conocimientoEnte.riesgoFraudeYControl?.presuncionesFraude?.[1]?.explicacion || '',
              label: 'Presunción de Elusión de Controles',
              rows: 3,
              textClassName: 'text-xs text-slate-700 leading-relaxed'
            })}
            <div className="space-y-1.5 pt-1">
              {conocimientoEnte.riesgoFraudeYControl?.presuncionesFraude?.[1]?.estimaciones?.map((est, eIdx) => (
                <div key={eIdx} className="p-2 rounded-lg bg-white/90 border border-amber-200/80 text-[11px]">
                  <strong className="text-amber-950 block">{est.titulo}</strong>
                  <span className="text-slate-600">{est.detalle}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MARCO TEÓRICO DOCTRINARIO: ¿QUÉ ES EL INFORME COSO Y PARA QUÉ SE UTILIZA? */}
        <div className="mt-7 pt-6 border-t border-slate-200/80 space-y-4">
          <div className="rounded-xl border border-teal-200 bg-gradient-to-br from-teal-50/70 via-white to-teal-50/40 p-5 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-teal-200/80">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-teal-800 shrink-0" />
                <h4 className="text-sm font-extrabold text-teal-950 uppercase tracking-wide">
                  {conocimientoEnte.riesgoFraudeYControl?.teoriaCOSO?.titulo ||
                    '¿Qué es el Marco COSO y para qué se utiliza en Auditoría?'}
                </h4>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-teal-100 text-teal-800 border border-teal-300">
                Marco Integrado COSO 2013 &amp; SOX 404 (NYSE)
              </span>
            </div>

            {renderEditableBlock({
              fieldKey: 'ente-coso-origen',
              defaultText: conocimientoEnte.riesgoFraudeYControl?.teoriaCOSO?.origenYDefinicion || '',
              label: 'Origen y Definición de COSO',
              rows: 3,
              textClassName: 'text-xs text-slate-700 leading-relaxed'
            })}

            {/* Los 3 Objetivos del Control Interno según COSO */}
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-teal-900 block mb-2">
                Los 3 Objetivos Fundamentales del Control Interno (Marco COSO)
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {conocimientoEnte.riesgoFraudeYControl?.teoriaCOSO?.los3Objetivos?.map((obj, oIdx) => (
                  <div key={oIdx} className="p-3 rounded-xl bg-white border border-teal-200/90 shadow-2xs">
                    <strong className="text-xs font-bold text-teal-950 block mb-1">
                      {obj.categoria}
                    </strong>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      {obj.foco}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Doble panel: Utilidad en Auditoría Externa vs Relevancia en Telecom (SOX 404) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 pt-1">
              <div className="p-3.5 rounded-xl bg-blue-50/50 border border-blue-200">
                <span className="text-xs font-extrabold text-blue-950 uppercase tracking-wide flex items-center gap-1.5 mb-1.5">
                  <Calculator className="w-4 h-4 text-blue-700" />
                  ¿Para qué lo utiliza el Auditor Externo? (NIA 315 &amp; Slosse)
                </span>
                {renderEditableBlock({
                  fieldKey: 'ente-coso-utilidad',
                  defaultText: conocimientoEnte.riesgoFraudeYControl?.teoriaCOSO?.utilidadEnAuditoria || '',
                  label: 'Utilidad en Auditoría Externa',
                  rows: 3,
                  textClassName: 'text-xs text-slate-700 leading-relaxed'
                })}
              </div>

              <div className="p-3.5 rounded-xl bg-purple-50/50 border border-purple-200">
                <span className="text-xs font-extrabold text-purple-950 uppercase tracking-wide flex items-center gap-1.5 mb-1.5">
                  <ShieldCheck className="w-4 h-4 text-purple-700" />
                  ¿Por qué es Crítico para Telecom? (Ley Sarbanes-Oxley SOX 404)
                </span>
                {renderEditableBlock({
                  fieldKey: 'ente-coso-sox',
                  defaultText: conocimientoEnte.riesgoFraudeYControl?.teoriaCOSO?.relevanciaSOX404 || '',
                  label: 'Relevancia SOX 404 en Telecom',
                  rows: 3,
                  textClassName: 'text-xs text-slate-700 leading-relaxed'
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Los 5 Componentes del Control Interno (COSO) */}
        <div className="mt-6 pt-5 border-t border-slate-100">
          <div className="text-xs font-extrabold text-slate-900 uppercase tracking-wide mb-3 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-teal-700" />
              Los 5 Componentes Interrelacionados del Control Interno
            </span>
            <span className="text-[11px] text-slate-500 font-medium">
              Base doctrinaria de los 5 Cuestionarios CCI evaluados en la Etapa 1B
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {conocimientoEnte.riesgoFraudeYControl?.componentesCOSO?.map((comp, cIdx) => (
              <div key={cIdx} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 flex flex-col justify-between hover:border-teal-300 transition-colors">
                <div>
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <h5 className="text-xs font-extrabold text-slate-900">
                      {comp.nombre}
                    </h5>
                  </div>
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-extrabold bg-teal-100 text-teal-800 mb-2">
                    {comp.estado}
                  </span>
                  
                  {/* Definición teórica del componente */}
                  <div className="text-[11px] text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200/90 leading-relaxed mb-2.5 shadow-2xs">
                    <strong className="text-teal-900 block text-[10px] uppercase tracking-wider mb-0.5">
                      Definición Teórica:
                    </strong>
                    {comp.definicionTeorica || comp.descripcion}
                  </div>

                  {/* Aplicación en Telecom con editor */}
                  <div className="text-[11px] text-slate-600 leading-relaxed">
                    <strong className="text-slate-800 font-bold block mb-1">En Telecom: </strong>
                    {renderEditableBlock({
                      fieldKey: `ente-coso-comp-${cIdx}`,
                      defaultText: comp.descripcion,
                      label: `En Telecom: ${comp.nombre}`,
                      rows: 3,
                      textClassName: 'text-[11px] text-slate-600 leading-relaxed'
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* GUÍA DE LECTURA Y EXPOSICIÓN ORAL (CIERRE DE LA ETAPA 1.1) */}
      {/* ========================================================= */}
      <div className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 rounded-2xl border border-teal-500/40 p-6 text-white shadow-lg space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-lime-400 shrink-0" />
            <span className="text-xs font-extrabold uppercase tracking-wider text-lime-400">
              Guía de Lectura y Exposición Oral — Etapa 1.1: Conocimiento del Ente, Estrategia y Riesgos
            </span>
          </div>
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-white/10 text-teal-200 border border-white/15">
            Doctrina: Carlos A. Slosse (Enfoque «De Arriba hacia Abajo»)
          </span>
        </div>

        <h3 className="text-base sm:text-lg font-extrabold text-white">
          ¿Cómo explicar y defender esta etapa ante la cátedra con tus palabras?
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs leading-relaxed">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
            <strong className="text-lime-300 block uppercase text-[11px] tracking-wider">
              1. ¿Qué se empieza haciendo?
            </strong>
            {renderEditableBlock({
              fieldKey: 'ente-guia-1',
              defaultText: 'Según **Carlos Slosse**, una auditoría nunca empieza mirando facturas ni sumando recibos: empieza **«de arriba hacia abajo» (Top-Down)** conociendo a fondo quién es el cliente. En este primer paso relevamos su **ambiente tecnológico masivo (NIA 315)** con más de 41,6 millones de líneas móviles y ERP SAP, planificamos las **entrevistas con los 7 estamentos directivos** (Comité, CEO, CFO, CISO), y relevamos su **marco regulatorio (NIA 250)** ante ENACOM, CNV, SEC y ARCA.',
              label: 'Paso 1: ¿Qué se empieza haciendo?',
              rows: 4,
              textClassName: 'text-slate-200 leading-relaxed'
            })}
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
            <strong className="text-amber-300 block uppercase text-[11px] tracking-wider">
              2. ¿Qué se hace concretamente?
            </strong>
            {renderEditableBlock({
              fieldKey: 'ente-guia-2',
              defaultText: 'Analizamos la estructura de gobierno corporativo (organigrama formal de 5 direcciones), el porfolio comercial B2C (*Personal* y *Flow*) y B2B (*Personal Tech*), el impacto patrimonial de la compra de **Telefónica Móviles Argentina (TMA)** en febrero de 2025 por US$ 1.245M, las 5 fuerzas de Porter y las **presunciones obligatorias de fraude (NIA 240)** en ingresos ($8,3 billones) y estimaciones de la gerencia (test de deterioro NIC 36 y PPA NIIF 3).',
              label: 'Paso 2: ¿Qué se hace concretamente?',
              rows: 4,
              textClassName: 'text-slate-200 leading-relaxed'
            })}
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
            <strong className="text-teal-300 block uppercase text-[11px] tracking-wider">
              3. ¿Por qué y para qué lo hacemos?
            </strong>
            {renderEditableBlock({
              fieldKey: 'ente-guia-3',
              defaultText: 'Lo hacemos para identificar el **Riesgo Inherente (RI)**, es decir, el riesgo de que los Estados Contables contengan errores significativos por la propia complejidad del negocio de las telecomunicaciones y su tecnología masiva, *antes* de medir la efectividad de sus controles. Con este mapa integral, el siguiente paso de la Planificación Preliminar es **evaluar el Control Interno (1B) mediante los 5 Cuestionarios CCI** y realizar la **Revisión Analítica Preliminar (1C)**.',
              label: 'Paso 3: ¿Por qué y para qué lo hacemos?',
              rows: 4,
              textClassName: 'text-slate-200 leading-relaxed'
            })}
          </div>
        </div>

        {onNavigate && (
          <div className="pt-2 flex justify-end">
            <button
              onClick={() => onNavigate('etapa1-cci')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-lime-400 text-slate-950 font-extrabold text-xs hover:bg-lime-300 transition-colors cursor-pointer shadow-md"
            >
              <span>Pasar a Etapa 1B: Cuestionarios de Control Interno (CCI)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
