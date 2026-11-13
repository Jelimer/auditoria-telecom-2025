import React, { useState, useEffect, useRef } from 'react';
import {
  Bold,
  Italic,
  Underline,
  Eraser,
  RotateCcw,
  Pencil,
  Check,
  X
} from 'lucide-react';
import { renderFormattedRichText } from './NormaTooltip';

export function sanitizeRichHtml(raw) {
  if (!raw || typeof raw !== 'string') return '';
  return raw
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '')
    .replace(/\son\w+="[^"]*"/gi, '')
    .replace(/\son\w+='[^']*'/gi, '')
    .replace(/javascript:/gi, '');
}

export function toEditableHtml(raw) {
  if (!raw || typeof raw !== 'string') return '';
  return sanitizeRichHtml(raw)
    .replace(/\*\*([\s\S]+?)\*\*/g, '<b>$1</b>')
    .replace(/(^|[^*])\*([^*\n\r]+?)\*(?!\*)/g, '$1<i>$2</i>')
    .replace(/\n/g, '<br>');
}

export function normalizeRichHtmlForDisplay(raw) {
  if (!raw || typeof raw !== 'string') return '';
  const clean = sanitizeRichHtml(raw);
  const hadLeadingBr = /^<br\s*\/?>/i.test(clean);
  const normalized = clean
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/div>\s*<div[^>]*>/gi, '\n')
    .replace(/<\/p>\s*<p[^>]*>/gi, '\n')
    .replace(/<div[^>]*>/gi, '\n')
    .replace(/<\/div>/gi, '')
    .replace(/<p[^>]*>/gi, '\n')
    .replace(/<\/p>/gi, '')
    .replace(/<\/?span[^>]*>/gi, '')
    .replace(/&nbsp;/gi, ' ');
  return hadLeadingBr ? normalized : normalized.replace(/^\n+/, '');
}

export function RichTextBox({
  value,
  baseValue,
  onChange,
  onReset,
  isDark = false,
  boxClassName = '',
  placeholder = '',
  minHeightClass = 'min-h-[110px]',
  compact = false
}) {
  const editorRef = useRef(null);

  useEffect(() => {
    if (!editorRef.current) return;
    const clean = sanitizeRichHtml(value);
    if (editorRef.current.innerHTML !== clean) {
      editorRef.current.innerHTML = clean;
    }
  }, [value]);

  const applyFormat = (cmd) => {
    if (!editorRef.current) return;
    editorRef.current.focus();
    try {
      document.execCommand(cmd, false, null);
      onChange(sanitizeRichHtml(editorRef.current.innerHTML));
    } catch {
      // ignore unsupported browser command
    }
  };

  const handleInput = () => {
    if (!editorRef.current) return;
    onChange(sanitizeRichHtml(editorRef.current.innerHTML));
  };

  const isModified = baseValue !== undefined && value !== baseValue;

  const toolbarClass = isDark
    ? 'flex flex-wrap items-center justify-between gap-1 bg-slate-950 border border-slate-700 rounded-lg px-2 py-1 shadow-2xs'
    : 'flex flex-wrap items-center justify-between gap-1 bg-white border border-slate-300 rounded-lg px-2 py-1 shadow-2xs';

  const btnClass = isDark
    ? 'w-7 h-7 rounded hover:bg-slate-800 text-slate-200 inline-flex items-center justify-center border border-transparent hover:border-slate-600 cursor-pointer'
    : 'w-7 h-7 rounded hover:bg-slate-100 text-slate-800 inline-flex items-center justify-center border border-transparent hover:border-slate-300 cursor-pointer';

  const editorBorderClass = isDark
    ? 'bg-slate-950/90 border-2 border-teal-400 text-slate-100 focus:ring-2 focus:ring-teal-500/40'
    : 'bg-white border-2 border-indigo-400 text-slate-800 focus:ring-2 focus:ring-indigo-300';

  return (
    <div className="space-y-1.5">
      <div className={toolbarClass}>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onMouseDown={(e) => {
              e.preventDefault();
              applyFormat('bold');
            }}
            title="Negrita (Ctrl+B)"
            className={btnClass}
          >
            <Bold className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onMouseDown={(e) => {
              e.preventDefault();
              applyFormat('italic');
            }}
            title="Cursiva (Ctrl+I)"
            className={btnClass}
          >
            <Italic className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onMouseDown={(e) => {
              e.preventDefault();
              applyFormat('underline');
            }}
            title="Subrayado (Ctrl+U)"
            className={btnClass}
          >
            <Underline className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onMouseDown={(e) => {
              e.preventDefault();
              applyFormat('removeFormat');
            }}
            title="Quitar formato del texto seleccionado"
            className={btnClass}
          >
            <Eraser className="w-3.5 h-3.5" />
          </button>
          {!compact && (
            <span
              className={`text-[10px] ml-1.5 hidden sm:inline italic ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              Seleccioná texto y aplicá B / I / U
            </span>
          )}
        </div>
        {isModified && onReset && (
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={onReset}
            title="Restaurar texto original"
            className="px-2 py-0.5 rounded text-[10px] font-bold text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-200 inline-flex items-center gap-1 cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            Restaurar
          </button>
        )}
      </div>
      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        onInput={handleInput}
        onBlur={handleInput}
        aria-label={placeholder || 'Editor de texto enriquecido'}
        className={`${minHeightClass} p-2.5 rounded-lg focus:outline-none leading-relaxed [&_b]:font-bold [&_strong]:font-bold [&_i]:italic [&_em]:italic [&_u]:underline [&_code]:font-mono [&_code]:px-1 [&_code]:rounded [&_code]:bg-teal-500/20 ${editorBorderClass} ${boxClassName}`}
      />
    </div>
  );
}

export function EditableRichBlock({
  value,
  defaultValue,
  onSave,
  onReset,
  label = 'Editar texto',
  isDark = false,
  textClassName = 'text-xs text-slate-700 leading-relaxed',
  containerClassName = '',
  minHeightClass = 'min-h-[72px]',
  showModifiedBadge = true
}) {
  const [isEditing, setIsEditing] = useState(false);
  const currentValue = value !== undefined ? value : defaultValue;
  const isCustom = value !== undefined && value !== defaultValue;
  const [draft, setDraft] = useState(() => toEditableHtml(currentValue));

  const startEdit = () => {
    setDraft(toEditableHtml(value !== undefined ? value : defaultValue));
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setDraft(toEditableHtml(currentValue));
  };

  const handleSave = () => {
    onSave(sanitizeRichHtml(draft));
    setIsEditing(false);
  };

  const handleReset = () => {
    if (onReset) onReset();
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div
        className={`mt-1.5 space-y-2 p-3 rounded-xl border ${
          isDark
            ? 'bg-slate-900/95 border-teal-500/60 text-slate-100'
            : 'bg-teal-50/70 border-teal-300 text-slate-800'
        }`}
      >
        <div className="flex items-center justify-between gap-2 pb-1 border-b border-current/15">
          <span
            className={`text-[10px] font-extrabold uppercase tracking-wider ${
              isDark ? 'text-lime-300' : 'text-teal-900'
            }`}
          >
            Editando: {label}
          </span>
        </div>

        <RichTextBox
          value={draft}
          onChange={setDraft}
          isDark={isDark}
          minHeightClass={minHeightClass}
          placeholder={label}
          compact
        />

        <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleSave}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition-colors cursor-pointer"
            >
              <Check className="w-3.5 h-3.5" /> Guardar
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border text-xs font-semibold cursor-pointer ${
                isDark
                  ? 'border-slate-600 bg-slate-800 hover:bg-slate-700 text-slate-200'
                  : 'border-slate-300 bg-white hover:bg-slate-100 text-slate-700'
              }`}
            >
              <X className="w-3.5 h-3.5" /> Cancelar
            </button>
          </div>
          {isCustom && onReset && (
            <button
              type="button"
              onClick={handleReset}
              className={`inline-flex items-center gap-1 text-[11px] font-bold hover:underline cursor-pointer ${
                isDark ? 'text-amber-300' : 'text-amber-700'
              }`}
            >
              <RotateCcw className="w-3 h-3" /> Restablecer original
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`group relative ${containerClassName}`}>
      <div className="flex items-start justify-between gap-2">
        <div className={`${textClassName} whitespace-pre-line flex-1 min-w-0`}>
          {renderFormattedRichText(normalizeRichHtmlForDisplay(currentValue))}
        </div>
        <button
          type="button"
          onClick={startEdit}
          className={`opacity-65 group-hover:opacity-100 p-1 rounded-md transition-all shrink-0 cursor-pointer no-print ${
            isDark
              ? 'text-lime-300 hover:text-white hover:bg-white/10'
              : 'text-teal-700 hover:text-teal-900 hover:bg-teal-100/70'
          }`}
          title={`Editar: ${label}`}
        >
          <Pencil className="w-3.5 h-3.5" />
        </button>
      </div>
      {isCustom && showModifiedBadge && (
        <span
          className={`inline-block mt-1 px-1.5 py-0.5 rounded text-[10px] font-bold border ${
            isDark
              ? 'bg-amber-500/20 text-amber-200 border-amber-400/40'
              : 'bg-amber-100 text-amber-900 border-amber-200'
          }`}
        >
          Editado
        </span>
      )}
    </div>
  );
}

export default RichTextBox;
