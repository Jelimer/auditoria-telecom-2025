import React from 'react';

// Semicírculo tipo Velocímetro (Gauge) inspirado en la pantalla "Reporte" de AuditBrain
export function SemiGaugeChart({ value = 88, label = "Avance Global", subtitle = "Proceso Secuencial 3 Etapas", mode = "avance" }) {
  const clamped = Math.max(0, Math.min(100, value));
  // Ángulo de -90 a +90 grados para la aguja
  const angle = -90 + (clamped / 100) * 180;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-56 h-32 flex items-end justify-center overflow-hidden">
        <svg viewBox="0 0 200 115" className="w-full h-full">
          {/* Fondo gris claro */}
          <path
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="22"
            strokeLinecap="round"
          />
          {mode === "avance" ? (
            <>
              {/* Tramo Amarillo (Planeación / Inicial) */}
              <path
                d="M 20 100 A 80 80 0 0 1 75 24"
                fill="none"
                stroke="#facc15"
                strokeWidth="22"
              />
              {/* Tramo Rojo/Naranja (Riesgo / Ejecución Crítica) */}
              <path
                d="M 75 24 A 80 80 0 0 1 125 24"
                fill="none"
                stroke="#ef4444"
                strokeWidth="22"
              />
              {/* Tramo Verde Lima (Finalización / Aprobado) */}
              <path
                d="M 125 24 A 80 80 0 0 1 180 100"
                fill="none"
                stroke="#84cc16"
                strokeWidth="22"
              />
            </>
          ) : (
            <>
              {/* Modo Hallazgos: 50% Amarillo (Reclasificación / Control) y 43% Rojo (Ajustes Materiales > PAE) */}
              <path
                d="M 20 100 A 80 80 0 0 1 105 20"
                fill="none"
                stroke="#eab308"
                strokeWidth="22"
              />
              <path
                d="M 105 20 A 80 80 0 0 1 172 78"
                fill="none"
                stroke="#dc2626"
                strokeWidth="22"
              />
              <text x="26" y="42" className="text-[11px] font-bold fill-slate-700">50%</text>
              <text x="155" y="42" className="text-[11px] font-bold fill-red-700">43%</text>
            </>
          )}

          {/* Marcas de graduación */}
          {[-60, -30, 0, 30, 60].map((deg, idx) => {
            const rad = ((deg - 90) * Math.PI) / 180;
            const x1 = 100 + 67 * Math.cos(rad);
            const y1 = 100 + 67 * Math.sin(rad);
            const x2 = 100 + 89 * Math.cos(rad);
            const y2 = 100 + 89 * Math.sin(rad);
            return <line key={idx} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#ffffff" strokeWidth="2" />;
          })}

          {/* Aguja indicadora */}
          <g transform={`translate(100, 100) rotate(${angle})`}>
            <polygon points="-4,0 0,-68 4,0" fill="#1e293b" />
            <circle cx="0" cy="0" r="7" fill="#0f766e" stroke="#ffffff" strokeWidth="2" />
          </g>
        </svg>
      </div>
      <div className="text-center -mt-1">
        <span className="text-2xl font-extrabold text-slate-800">{clamped}%</span>
        <p className="text-xs font-semibold text-slate-600 mt-0.5">{label}</p>
        {subtitle && <p className="text-[11px] text-slate-400">{subtitle}</p>}
      </div>
    </div>
  );
}

// Gráfico de Dona estilo "Proyectos" de AuditBrain
export function DonutStatusChart({ title, data, centerLabel, centerValue }) {
  const total = data.reduce((acc, item) => acc + item.value, 0) || 1;
  let cumulativePercent = 0;

  const getCoordinatesForPercent = (percent) => {
    const x = Math.cos(2 * Math.PI * percent);
    const y = Math.sin(2 * Math.PI * percent);
    return [x, y];
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs">
      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 border-b border-slate-100 pb-2 mb-3">
        {title}
      </h4>
      <div className="flex items-center gap-4">
        <div className="relative w-28 h-28 shrink-0">
          <svg viewBox="-1.2 -1.2 2.4 2.4" className="w-full h-full -rotate-90">
            {data.map((slice, index) => {
              const startPercent = cumulativePercent;
              const slicePercent = slice.value / total;
              cumulativePercent += slicePercent;
              const endPercent = cumulativePercent;

              if (slicePercent === 0) return null;
              if (slicePercent >= 0.999) {
                return <circle key={index} cx="0" cy="0" r="0.85" fill="none" stroke={slice.color} strokeWidth="0.38" />;
              }

              const [startX, startY] = getCoordinatesForPercent(startPercent);
              const [endX, endY] = getCoordinatesForPercent(endPercent);
              const largeArcFlag = slicePercent > 0.5 ? 1 : 0;

              const pathData = [
                `M ${startX * 0.85} ${startY * 0.85}`,
                `A 0.85 0.85 0 ${largeArcFlag} 1 ${endX * 0.85} ${endY * 0.85}`
              ].join(' ');

              return (
                <path
                  key={index}
                  d={pathData}
                  fill="none"
                  stroke={slice.color}
                  strokeWidth="0.38"
                  strokeLinecap="butt"
                />
              );
            })}
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-sm font-extrabold text-slate-800">{centerValue}</span>
            <span className="text-[10px] text-slate-400 leading-tight">{centerLabel}</span>
          </div>
        </div>

        <div className="flex-1 space-y-1.5">
          {data.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                <span className="text-slate-600 font-medium truncate max-w-[115px]">{item.label}</span>
              </div>
              <span className="font-bold text-slate-800">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Gráfico de Líneas "Niveles" (Nivel de Confianza vs Riesgo de Control) inspirado en pantalla "Control" de AuditBrain
export function NivelesLineChart({ cciStats }) {
  // 5 puntos correspondientes a los 5 CCI
  const width = 560;
  const height = 165;
  const padX = 48;
  const padY = 22;
  const usableW = width - padX * 2;
  const usableH = height - padY * 2;

  const getX = (idx) => padX + (idx / Math.max(1, cciStats.length - 1)) * usableW;
  const getY = (val) => padY + usableH - (val / 100) * usableH;

  const ncPoints = cciStats.map((c, i) => `${getX(i)},${getY(c.nc)}`).join(' ');
  const rcPoints = cciStats.map((c, i) => `${getX(i)},${getY(c.ri)}`).join(' ');

  return (
    <div className="w-full overflow-x-auto">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full min-w-[440px] h-44">
        {/* Líneas guía horizontales */}
        {[0, 25, 50, 75, 100].map((tick) => {
          const y = getY(tick);
          return (
            <g key={tick}>
              <line x1={padX} y1={y} x2={width - padX} y2={y} stroke="#e2e8f0" strokeDasharray="3 3" />
              <text x={padX - 10} y={y + 4} textAnchor="end" className="text-[10px] fill-slate-400 font-mono">
                {tick}%
              </text>
            </g>
          );
        })}

        {/* Línea de Riesgo (RC / RI %) - Verde Lima / Ámbar */}
        <polyline
          fill="none"
          stroke="#84cc16"
          strokeWidth="3"
          points={rcPoints}
        />

        {/* Línea de Nivel de Confianza (NC %) - Teal oscuro estilo AuditBrain */}
        <polyline
          fill="none"
          stroke="#0f766e"
          strokeWidth="3"
          points={ncPoints}
        />

        {/* Puntos y etiquetas */}
        {cciStats.map((c, i) => {
          const x = getX(i);
          const yNc = getY(c.nc);
          const yRc = getY(c.ri);
          return (
            <g key={c.codigo}>
              <circle cx={x} cy={yRc} r="5" fill="#84cc16" stroke="#fff" strokeWidth="1.5" />
              <text x={x} y={yRc - 9} textAnchor="middle" className="text-[10px] font-bold fill-lime-700">
                {c.ri.toFixed(1)}%
              </text>

              <circle cx={x} cy={yNc} r="5" fill="#0f766e" stroke="#fff" strokeWidth="1.5" />
              <text x={x} y={yNc + 15} textAnchor="middle" className="text-[10px] font-bold fill-teal-800">
                {c.nc.toFixed(1)}%
              </text>

              <text x={x} y={height - 3} textAnchor="middle" className="text-[10px] font-semibold fill-slate-600">
                {c.codigo}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
