import React, { useState, useEffect } from 'react';
import {
  TrendingUp,
  TrendingDown,
  Scale,
  Calculator,
  AlertTriangle,
  CheckCircle2,
  BarChart3,
  PieChart,
  ArrowUpRight,
  FileSearch,
  Layers,
  ShieldAlert,
  Info,
  Printer
} from 'lucide-react';

// ============================================================================
// 1. ESTADOS DE SITUACIÓN FINANCIERA CONSOLIDADOS (FUENTE ORIGINAL EECC TELECOM S.A.)
// En millones de pesos constantes al 31 de diciembre de 2025 y 2024 (Nota 1.d)
// ============================================================================
const ACTIVO_TOTAL_2025 = 16622552;
const ACTIVO_TOTAL_2024 = 14393744;

const espFilas = [
  // ACTIVO CORRIENTE
  {
    id: 'ac-header',
    rubro: 'ACTIVO CORRIENTE',
    nota: '',
    esEncabezadoSeccion: true
  },
  {
    id: 'ac-efectivo',
    rubro: 'Efectivo y equivalentes de efectivo',
    nota: '4',
    s2025: 469050,
    s2024: 418745,
    alerta: 'Normal',
    lectura: 'Crecimiento real del +12,01% (+$50.305M) en disponibilidades inmediatas.'
  },
  {
    id: 'ac-inversiones',
    rubro: 'Inversiones corrientes',
    nota: '4',
    s2025: 323064,
    s2024: 44179,
    alerta: 'Media',
    lectura: 'Fuerte incremento del +631,26% (+$278.885M) por colocación de excedentes transitorios en FCI y títulos líquidos para cubrir vencimientos de deuda en USD.'
  },
  {
    id: 'ac-creditos-ventas',
    rubro: 'Créditos por ventas',
    nota: '5',
    s2025: 799188,
    s2024: 389375,
    alerta: 'Crítica',
    programaVinculado: 'PROGRAMA B (PT-B)',
    lectura: 'ALERTA ROJA ANALÍTICA: Los Créditos por Ventas se duplican (+105,25%, +$409.813M; brutos $1.070.107M con $1.067.130M comunes menos Previsión $(270.919)M) mientras las Ventas crecen +53,02%. Se explica por la consolidación del 100% del stock de cartera de TMA adquirida el 24/02/2025 ($421.919M bajo NIIF 3 vs. solo 10 meses de ventas mar-dic en el ER), efecto NIC 29 y alargamiento de mora (exige auditar Previsión NIIF 9 y corte B2B en PT-B).'
  },
  {
    id: 'ac-otros-creditos',
    rubro: 'Otros créditos',
    nota: '6',
    s2025: 159969,
    s2024: 58875,
    alerta: 'Media',
    lectura: 'Aumento del +171,71% (+$101.094M) por saldos a favor impositivos, anticipos y gastos pagados por adelantado.'
  },
  {
    id: 'ac-inventarios',
    rubro: 'Inventarios',
    nota: '7',
    s2025: 79530,
    s2024: 79513,
    alerta: 'Normal',
    lectura: 'Estabilidad real (+0,02%, +$17M) en stocks de terminales móviles, módems FTTH y decodificadores Flow.'
  },
  {
    id: 'ac-disp-venta',
    rubro: 'Activos disponibles para la venta',
    nota: '3.j',
    s2025: 3011,
    s2024: 2322,
    alerta: 'Normal',
    lectura: 'Variación menor (+29,67%, +$689M); representa solo el 0,02% del Activo Total.'
  },
  {
    id: 'ac-total',
    rubro: 'Total del activo corriente',
    nota: '',
    s2025: 1833812,
    s2024: 993009,
    esSubtotal: true,
    lectura: 'El Activo Corriente pasa del 6,90% al 11,03% del Activo Total (+84,67%, +$840.803M), impulsado por Créditos por Ventas (+$409.813M) e Inversiones (+$278.885M).'
  },

  // ACTIVO NO CORRIENTE
  {
    id: 'anc-header',
    rubro: 'ACTIVO NO CORRIENTE',
    nota: '',
    esEncabezadoSeccion: true
  },
  {
    id: 'anc-creditos-ventas',
    rubro: 'Créditos por ventas no corrientes',
    nota: '5',
    s2025: 940,
    s2024: 568,
    alerta: 'Normal',
    programaVinculado: 'PROGRAMA B (PT-B)',
    lectura: 'Incremento del +65,49% (+$372M) en planes de financiación a largo plazo. Sumado al tramo corriente, Créditos por Ventas totaliza $800.128M (+105,19%).'
  },
  {
    id: 'anc-otros-creditos',
    rubro: 'Otros créditos no corrientes',
    nota: '6',
    s2025: 28870,
    s2024: 64417,
    alerta: 'Normal',
    lectura: 'Disminución del -55,18% (-$35.547M) por reclasificación al tramo corriente e imputación de anticipos.'
  },
  {
    id: 'anc-imp-diferido',
    rubro: 'Activo por impuesto a las ganancias diferido',
    nota: '16',
    s2025: 48434,
    s2024: 43398,
    alerta: 'Normal',
    lectura: 'Variación del +11,60% (+$5.036M) en créditos fiscales diferidos de subsidiarias.'
  },
  {
    id: 'anc-inversiones',
    rubro: 'Inversiones no corrientes',
    nota: '4',
    s2025: 14701,
    s2024: 17902,
    alerta: 'Normal',
    lectura: 'Reducción del -17,88% (-$3.201M) por resultado de participaciones en asociadas (Nota 4).'
  },
  {
    id: 'anc-llaves',
    rubro: 'Llaves de negocio',
    nota: '8',
    s2025: 4443998,
    s2024: 4436736,
    alerta: 'Crítica',
    programaVinculado: 'PROGRAMA E (PT-E)',
    lectura: 'Representa el 26,73% del Activo Total ($4.443.998M, +0,16%). Al no amortizarse, exige auditoría anual obligatoria del Test de Deterioro (NIC 36) sobre la UGE Redes Personal ($12.774.695M).'
  },
  {
    id: 'anc-ppe',
    rubro: 'PP&E (Propiedad, Planta y Equipo / Bienes de Uso)',
    nota: '9',
    s2025: 6789118,
    s2024: 5696731,
    alerta: 'Crítica',
    programaVinculado: 'PROGRAMA A (PT-A)',
    lectura: 'Rubro individual más grande del Balance (40,84% del Activo). Crece +19,18% (+$1.092.387M) por fuerte CAPEX en redes 5G, fibra FTTH e incorporación de operaciones. Exige auditar altas, depreciaciones y baja de centrales analógicas obsoletas.'
  },
  {
    id: 'anc-intangibles',
    rubro: 'Activos intangibles',
    nota: '10',
    s2025: 2671525,
    s2024: 2494659,
    alerta: 'Alta',
    programaVinculado: 'PROGRAMA E (PT-E)',
    lectura: 'Representa el 16,07% del Activo Total y crece +7,09% (+$176.866M) por licencias de espectro 5G (ENACOM) y activación de software evolutivo (NIC 38).'
  },
  {
    id: 'anc-derechos-uso',
    rubro: 'Activos por derechos de uso',
    nota: '11',
    s2025: 727288,
    s2024: 646324,
    alerta: 'Media',
    programaVinculado: 'PROGRAMA A (PT-A)',
    lectura: 'Crece +12,53% (+$80.964M, 4,38% del Activo) por arrendamientos de sitios para torres de telefonía móvil y nodos (NIIF 16).'
  },
  {
    id: 'anc-prop-inversion',
    rubro: 'Propiedades de inversión',
    nota: '12',
    s2025: 63866,
    s2024: 0,
    alerta: 'Media',
    programaVinculado: 'PROGRAMA A (PT-A)',
    lectura: 'Alta neta de $63.866M (0,38% del Activo) por reclasificación de inmuebles desafectados de la operación (ej. ex edificios de centrales telefónicas) destinados a renta/inversión.'
  },
  {
    id: 'anc-total',
    rubro: 'Total del activo no corriente',
    nota: '',
    s2025: 14788740,
    s2024: 13400735,
    esSubtotal: true,
    lectura: 'Concentra el 88,97% del Activo Total ($14.788.740M) con un crecimiento del +10,36% (+$1.388.005M), confirmando la estructura altamente capital-intensiva.'
  },
  {
    id: 'activo-total',
    rubro: 'TOTAL DEL ACTIVO',
    nota: '',
    s2025: 16622552,
    s2024: 14393744,
    esTotalPrincipal: true,
    lectura: 'Base de referencia para el cálculo de la Materialidad Global (PM = 1% = $166.225M). Expansión patrimonial real del +15,48% (+$2.228.808M).'
  },

  // PASIVO CORRIENTE
  {
    id: 'pc-header',
    rubro: 'PASIVO CORRIENTE',
    nota: '',
    esEncabezadoSeccion: true
  },
  {
    id: 'pc-cuentas-pagar',
    rubro: 'Cuentas por pagar comerciales',
    nota: '13',
    s2025: 1108820,
    s2024: 584980,
    alerta: 'Alta',
    lectura: 'Salto del +89,55% (+$523.840M, 6,67% del Activo) por mayor financiación comercial de proveedores de equipamiento CAPEX 5G, licencias y contenidos.'
  },
  {
    id: 'pc-prestamos',
    rubro: 'Préstamos corrientes',
    nota: '14',
    s2025: 1616544,
    s2024: 1411178,
    alerta: 'Crítica',
    programaVinculado: 'PROGRAMA C (PT-C)',
    lectura: 'Representa el 9,73% del Activo Total (+14,55%, +$205.366M). Vencimientos de corto plazo de ONs y préstamos bancarios valuados al TC BNA $/US$ 1.455,00.'
  },
  {
    id: 'pc-remuneraciones',
    rubro: 'Remuneraciones y cargas sociales',
    nota: '15',
    s2025: 435044,
    s2024: 297645,
    alerta: 'Media',
    lectura: 'Incremento del +46,16% (+$137.399M) en línea con paritarias del sector (+16.200 empleados) y provisiones por desvinculaciones/gratificaciones.'
  },
  {
    id: 'pc-imp-ganancias',
    rubro: 'Deudas por impuesto a las ganancias',
    nota: '16',
    s2025: 66741,
    s2024: 5999,
    alerta: 'Media',
    lectura: 'Aumento del +1.012,54% (+$60.742M) por provisión corriente de impuesto a las ganancias en sociedades del grupo.'
  },
  {
    id: 'pc-cargas-fiscales',
    rubro: 'Otras cargas fiscales',
    nota: '17',
    s2025: 243086,
    s2024: 119264,
    alerta: 'Media',
    lectura: 'Sube +103,82% (+$123.822M) por mayores devengamientos de IVA, Ingresos Brutos, Tasa ENACOM (0,5%) y Aporte FSU (1%) sobre el mayor volumen de facturación.'
  },
  {
    id: 'pc-dividendos',
    rubro: 'Dividendos a pagar',
    nota: '',
    s2025: 87,
    s2024: 902,
    alerta: 'Normal',
    lectura: 'Cancelación del -90,35% (-$815M) de saldos remanentes.'
  },
  {
    id: 'pc-arrendamientos',
    rubro: 'Pasivos por arrendamientos corrientes',
    nota: '18',
    s2025: 149030,
    s2024: 98045,
    alerta: 'Normal',
    lectura: 'Aumento del +52,00% (+$50.985M) por contratos de alquiler de sitios de antenas bajo NIIF 16.'
  },
  {
    id: 'pc-otros-pasivos',
    rubro: 'Otros pasivos corrientes',
    nota: '19',
    s2025: 85165,
    s2024: 53144,
    alerta: 'Normal',
    lectura: 'Crecimiento del +60,25% (+$32.021M), incluye ingresos diferidos por abonos facturados por adelantado.'
  },
  {
    id: 'pc-provisiones',
    rubro: 'Provisiones corrientes',
    nota: '20',
    s2025: 133783,
    s2024: 5109,
    alerta: 'Alta',
    lectura: 'Salto extraordinario del +2.518,57% (+$128.674M) por reclasificación al corto plazo y actualización de contingencias judiciales, laborales y regulatorias.'
  },
  {
    id: 'pc-total',
    rubro: 'Total del pasivo corriente',
    nota: '',
    s2025: 3838300,
    s2024: 2576266,
    esSubtotal: true,
    lectura: 'El Pasivo Corriente representa el 23,09% del Activo Total y crece +48,99% (+$1.262.034M).'
  },

  // PASIVO NO CORRIENTE
  {
    id: 'pnc-header',
    rubro: 'PASIVO NO CORRIENTE',
    nota: '',
    esEncabezadoSeccion: true
  },
  {
    id: 'pnc-cuentas-pagar',
    rubro: 'Cuentas por pagar no corrientes',
    nota: '13',
    s2025: 20314,
    s2024: 21674,
    alerta: 'Normal',
    lectura: 'Disminución del -6,27% (-$1.360M).'
  },
  {
    id: 'pnc-prestamos',
    rubro: 'Préstamos no corrientes',
    nota: '14',
    s2025: 3820071,
    s2024: 2374802,
    alerta: 'Crítica',
    programaVinculado: 'PROGRAMA C (PT-C)',
    lectura: 'Representa el 22,98% del Activo y sube +60,86% (+$1.445.269M) por emisiones de ONs internacionales y préstamos multilaterales para financiar CAPEX y adquisiciones. Préstamos Totales (Cte+No Cte) = $5.436.615M (+43,60%).'
  },
  {
    id: 'pnc-remuneraciones',
    rubro: 'Remuneraciones y cargas sociales no corrientes',
    nota: '15',
    s2025: 59034,
    s2024: 12455,
    alerta: 'Media',
    lectura: 'Aumento del +373,98% (+$46.579M) en planes de retiro y beneficios laborales de largo plazo.'
  },
  {
    id: 'pnc-imp-diferido',
    rubro: 'Pasivo por impuesto a las ganancias diferido',
    nota: '16',
    s2025: 1179974,
    s2024: 1855808,
    alerta: 'Media',
    lectura: 'Reducción del -36,42% (-$675.834M, 7,10% del Activo) por reversión de diferencias temporarias de ajuste por inflación impositivo vs. contable.'
  },
  {
    id: 'pnc-cargas-fiscales',
    rubro: 'Otras cargas fiscales no corrientes',
    nota: '17',
    s2025: 0,
    s2024: 3,
    alerta: 'Normal',
    lectura: 'Cancelación total (-100%).'
  },
  {
    id: 'pnc-arrendamientos',
    rubro: 'Pasivos por arrendamientos no corrientes',
    nota: '18',
    s2025: 239266,
    s2024: 182123,
    alerta: 'Normal',
    lectura: 'Sube +31,38% (+$57.143M) en correspondencia con los Activos por Derechos de Uso (Nota 11).'
  },
  {
    id: 'pnc-otros-pasivos',
    rubro: 'Otros pasivos no corrientes',
    nota: '19',
    s2025: 52983,
    s2024: 20162,
    alerta: 'Normal',
    lectura: 'Incremento del +162,79% (+$32.821M).'
  },
  {
    id: 'pnc-provisiones',
    rubro: 'Provisiones no corrientes',
    nota: '20',
    s2025: 429302,
    s2024: 69524,
    alerta: 'Alta',
    lectura: 'Salto del +517,49% (+$359.778M, 2,58% del Activo). Junto a las corrientes, las Provisiones Totales alcanzan $563.085M (+654,47%), requiriendo circularización a asesores legales internos y externos.'
  },
  {
    id: 'pnc-total',
    rubro: 'Total del pasivo no corriente',
    nota: '',
    s2025: 5800944,
    s2024: 4536551,
    esSubtotal: true,
    lectura: 'Representa el 34,90% del Activo Total y aumenta +27,87% (+$1.264.393M).'
  },
  {
    id: 'pasivo-total',
    rubro: 'TOTAL DEL PASIVO',
    nota: '',
    s2025: 9639244,
    s2024: 7112817,
    esTotalPrincipal: true,
    lectura: 'El Pasivo Total pasa del 49,42% del Activo en 2024 al 57,99% en 2025, con un aumento interanual del +35,52% (+$2.526.427M).'
  },

  // PATRIMONIO
  {
    id: 'pn-header',
    rubro: 'PATRIMONIO',
    nota: '',
    esEncabezadoSeccion: true
  },
  {
    id: 'pn-controlante',
    rubro: 'Atribuible a la Sociedad Controlante',
    nota: '',
    s2025: 6863861,
    s2024: 7136514,
    alerta: 'Normal',
    lectura: 'Representa el 41,29% del Activo Total y disminuye -3,82% (-$272.653M) por el resultado neto negativo del ejercicio (-$170.006M) y distribución de dividendos.'
  },
  {
    id: 'pn-no-controlante',
    rubro: 'Atribuible a los accionistas no controlantes',
    nota: '',
    s2025: 119447,
    s2024: 144413,
    alerta: 'Normal',
    lectura: 'Representa el 0,72% del Activo Total (-17,29%, -$24.966M).'
  },
  {
    id: 'pn-total',
    rubro: 'TOTAL PATRIMONIO',
    nota: 'ECP',
    s2025: 6983308,
    s2024: 7280927,
    esTotalPrincipal: true,
    lectura: 'El Patrimonio Neto financia el 42,01% del Activo en 2025 (vs. 50,58% en 2024), disminuyendo un -4,09% (-$297.619M).'
  },
  {
    id: 'pasivo-pn-total',
    rubro: 'TOTAL PASIVO Y PATRIMONIO',
    nota: '',
    s2025: 16622552,
    s2024: 14393744,
    esTotalPrincipal: true,
    lectura: 'Cuadre exacto de partida doble: $9.639.244M (57,99% Pasivo) + $6.983.308M (42,01% Patrimonio) = $16.622.552M (100,00%).'
  }
];

// ============================================================================
// 2. ESTADOS DE RESULTADOS CONSOLIDADOS (FUENTE ORIGINAL EECC TELECOM S.A.)
// Ejercicios finalizados el 31/12/2025, 31/12/2024 y 31/12/2023 (Nota 1.d)
// ============================================================================
const VENTAS_2025 = 8328814;
const VENTAS_2024 = 5442958;
const VENTAS_2023 = 5898611;

const erFilas = [
  {
    id: 'er-ventas',
    rubro: 'Ventas',
    nota: '24',
    s2025: 8328814,
    s2024: 5442958,
    s2023: 5898611,
    esTotalPrincipal: true,
    programaVinculado: 'PROGRAMA D (PT-D)',
    lectura: 'Base 100% del Análisis Vertical. Crecimiento real interanual del +53,02% (+$2.885.856M) por consolidación de 10 meses de ventas de TMA desde su adquisición el 24/02/2025 (mar-dic 2025 bajo NIIF 3), recomposición de ARPU convergente (Personal/Flow) y expansión B2B.'
  },
  {
    id: 'er-costos-laborales',
    rubro: 'Costos laborales e indemnizaciones por despidos',
    nota: '25',
    s2025: -1961097,
    s2024: -1346737,
    s2023: -1473756,
    lectura: 'Principal costo operativo: absorbe el 23,55% de las Ventas en 2025 (mejora de +1,19 p.p. respecto al 24,74% de 2024). Aumenta +45,62% interanual.'
  },
  {
    id: 'er-interconexion',
    rubro: 'Costos por interconexión y transmisión',
    nota: '',
    s2025: -243797,
    s2024: -155918,
    s2023: -174151,
    lectura: 'Representa el 2,93% de las Ventas (+56,36% interanual) por enlaces internacionales y roaming.'
  },
  {
    id: 'er-honorarios-mant',
    rubro: 'Honorarios por servicios, mantenimiento y materiales',
    nota: '25',
    s2025: -1064393,
    s2024: -724120,
    s2023: -741134,
    lectura: 'Segundo mayor costo operativo: 12,78% de las Ventas (vs. 13,30% en 2024). Crece +46,99% por mantenimiento de red externa FTTH, sitios móviles y licencias de soporte.'
  },
  {
    id: 'er-impuestos-tasas',
    rubro: 'Impuestos, tasas y derechos del ente regulador',
    nota: '25',
    s2025: -720488,
    s2024: -428352,
    s2023: -453157,
    lectura: 'Representa el 8,65% de las Ventas (+68,20% interanual). Incluye Tasa de Control ENACOM (0,5%), Aporte al Fondo del Servicio Universal (1% Ley 27.078), IIBB y tasas municipales.'
  },
  {
    id: 'er-comisiones-pub',
    rubro: 'Comisiones y publicidad',
    nota: '',
    s2025: -437205,
    s2024: -305491,
    s2023: -345483,
    lectura: 'Incidencia del 5,25% sobre Ventas (vs. 5,61% en 2024; +43,12% interanual) por comisiones a agentes de venta y campañas de posicionamiento 5G/Flow.'
  },
  {
    id: 'er-costo-equipos',
    rubro: 'Costo de equipos vendidos',
    nota: '25',
    s2025: -288668,
    s2024: -259216,
    s2023: -318199,
    lectura: 'Baja su peso vertical del 4,76% al 3,47% de las Ventas (+11,36% interanual).'
  },
  {
    id: 'er-programacion',
    rubro: 'Costos de programación y de contenido',
    nota: '',
    s2025: -450698,
    s2024: -314423,
    s2023: -332792,
    programaVinculado: 'PROGRAMA D (PT-D)',
    lectura: 'Representa el 5,41% de las Ventas (+43,34%). En PT-D3 se detectó que $11.240M correspondían a contenidos de streaming de terceros registrados por el bruto (Ajuste de Reclasificación AJ-04).'
  },
  {
    id: 'er-incobrables',
    rubro: 'Deudores incobrables',
    nota: '',
    s2025: -143722,
    s2024: -112102,
    s2023: -127913,
    programaVinculado: 'PROGRAMA B (PT-B)',
    lectura: 'ALERTA DE AUDITORÍA: El cargo a resultados por incobrables creció +28,21% (1,73% de las Ventas), mientras la Previsión acumulada en el Balance subió a $(270.919)M sobre $1.067.130M de créditos comunes (+105,25% neto por incorporación de la cartera de TMA por $421.919M y mayor mora). Confirma la necesidad del reproceso NIIF 9 en PT-B3 (Ajuste AJ-03 por $19.850M).'
  },
  {
    id: 'er-otros-costos',
    rubro: 'Otros costos operativos, netos',
    nota: '25',
    s2025: -493211,
    s2024: -264218,
    s2023: -272257,
    lectura: 'Pasa del 4,85% al 5,92% de las Ventas (+86,67% interanual) por cargos de reestructuración y contingencias operativas.'
  },
  {
    id: 'er-ebitda',
    rubro: 'Utilidad de la explotación antes de D, A & D (EBITDA)',
    nota: '',
    s2025: 2525535,
    s2024: 1532381,
    s2023: 1659769,
    esSubtotal: true,
    lectura: 'El Margen EBITDA mejora de 28,15% en 2024 a 30,32% en 2025, con un salto real del +64,81% (+$993.154M) en generación de caja operativa.'
  },
  {
    id: 'er-dad',
    rubro: 'D, A & D de Activos Fijos e Intangibles',
    nota: '25',
    s2025: -2075488,
    s2024: -1725057,
    s2023: -2018038,
    programaVinculado: 'PROGRAMA A y E (PT-A / PT-E)',
    lectura: 'Depreciaciones, Amortizaciones y Deterioro absorben el 24,92% de las Ventas ($2.075.488M, +20,31% interanual). En PT-A4 se propuso adicionar $28.340M por baja de centrales analógicas obsoletas y nodos siniestrados.'
  },
  {
    id: 'er-ebit',
    rubro: 'Utilidad / (pérdida) de la explotación (EBIT)',
    nota: '',
    s2025: 450047,
    s2024: -192676,
    s2023: -358269,
    esSubtotal: true,
    lectura: 'HITO OPERATIVO: Telecom revierte dos años de pérdidas operativas (-$358.269M en 2023 y -$192.676M en 2024) y alcanza una Utilidad de la Explotación positiva de +$450.047M (+5,40% sobre Ventas).'
  },
  {
    id: 'er-asociadas',
    rubro: 'Resultados por participación en asociadas y negocios conjuntos',
    nota: '4',
    s2025: -3742,
    s2024: -15094,
    s2023: -5408,
    lectura: 'Incidencia marginal del -0,04% sobre Ventas (reducción de pérdida del -75,21%).'
  },
  {
    id: 'er-costos-financieros',
    rubro: 'Costos financieros',
    nota: '26',
    s2025: -748840,
    s2024: 1914786,
    s2023: -1817071,
    programaVinculado: 'PROGRAMA C (PT-C)',
    lectura: 'FACTOR DETERMINANTE DEL RESULTADO NETO: En 2024 hubo una ganancia financiera extraordinaria de +$1.914.786M (+35,18% s/Ventas) porque la inflación superó ampliamente la devaluación del dólar licuando en moneda constante los Préstamos en USD. En 2025 se normaliza la pauta cambiaria y los Costos Financieros representan un cargo negativo de -$748.840M (-8,99% s/Ventas).'
  },
  {
    id: 'er-otros-financieros',
    rubro: 'Otros resultados financieros, netos',
    nota: '26',
    s2025: 110799,
    s2024: 190451,
    s2023: 496492,
    lectura: 'Representa +1,33% sobre Ventas (-41,82% interanual) por rendimientos de inversiones y RECPAM neto.'
  },
  {
    id: 'er-antes-impuestos',
    rubro: 'Utilidad / (pérdida) ordinaria antes de impuesto a las ganancias',
    nota: '',
    s2025: -191736,
    s2024: 1897467,
    s2023: -1684256,
    esSubtotal: true,
    lectura: 'Pérdida antes de impuestos de -$191.736M (-2,30% sobre Ventas), explicada íntegramente por el costo financiero neto (-$638.041M) que supera la utilidad operativa (+$450.047M).'
  },
  {
    id: 'er-impuesto-ganancias',
    rubro: 'Impuesto a las ganancias',
    nota: '16',
    s2025: 46432,
    s2024: -538237,
    s2023: 968990,
    lectura: 'Ingreso positivo de +$46.432M (+0,56% s/Ventas) originado en la reversión neta del Pasivo por Impuesto Diferido (que bajó de $1.855.808M a $1.179.974M en Nota 16).'
  },
  {
    id: 'er-neto',
    rubro: 'Utilidad / (pérdida) neta del ejercicio',
    nota: '',
    s2025: -145304,
    s2024: 1359230,
    s2023: -715266,
    esTotalPrincipal: true,
    lectura: 'El ejercicio 2025 cierra con una pérdida neta consolidada de $(145.304)M (-1,74% sobre Ventas): $(170.006)M atribuible a la Sociedad Controlante (EPS $(78,94)/acción) y +$24.702M a accionistas no controlantes.'
  }
];

// ============================================================================
// 3. LOS 27 RATIOS FINANCIEROS E INDICADORES TÉCNICOS (MATRIZ DE CÁTEDRA + FÓRMULAS)
// Calculados con las cifras exactas de los EECC Consolidados de Telecom S.A. (2025 y 2024)
// ============================================================================
const PREGUNTAS_CLAVE = {
  GANAMOS: '¿Ganamos o perdimos? (¿Cuánto es el resultado del período?)',
  DINERO: '¿Hay suficiente dinero? (¿Cuánto dinero genera el negocio?)',
  INVERSION_FINANC: '¿Cuál es la inversión y la financiación? (¿Con qué recursos cuenta el negocio y de dónde los obtuvo?)',
  RENTABILIDAD: '¿Cuál es la rentabilidad? (¿Cuál es el rendimiento del negocio?)'
};

const ratiosFinancieros = [
  // ==========================================================================
  // BLOQUE 1: ¿GANAMOS O PERDIMOS? (4 RATIOS)
  // ==========================================================================
  {
    id: 'rat-1',
    bloqueId: 'ganamos',
    preguntaClave: PREGUNTAS_CLAVE.GANAMOS,
    categoria: '1. ¿Ganamos o perdimos? — Resultado del Período',
    nombre: 'Margen bruto',
    formula: 'Resultado Bruto / ventas',
    calculo2025: '($8.328.814M - $983.163M costos directos) / $8.328.814M  [ó s/Equipos: 96,53% | s/EBITDA: 30,32%]',
    calculo2024: '($5.442.958M - $729.557M costos directos) / $5.442.958M  [ó s/Equipos: 95,24% | s/EBITDA: 28,15%]',
    valor2025: '88,20%',
    valor2024: '86,60%',
    notaAlternativaMatriz: '88,20% (s/Costos Directos) | 96,53% (s/Costo Equipos) | 30,32% (s/Costos Operativos Erogables)',
    variacion: '+1,60 p.p.',
    semaforo: 'emerald',
    queRepresenta:
      'Mide qué porcentaje de las ventas queda disponible tras cubrir los costos directos de prestación del servicio y venta de terminales (Costo de equipos vendidos $288.668M + Interconexión y transmisión $243.797M + Programación y contenido $450.698M = $983.163M en 2025). En 2025 mejora al 88,20% (vs. 86,60% en 2024). Nota técnica: Como Telecom expone su Estado de Resultados por naturaleza y no incluye un subtotal llamado "Resultado Bruto", si en tu planilla restás únicamente "Costo de equipos vendidos" ($288.668M) da 96,53% (2025) y 95,24% (2024); y si restás todos los costos operativos erogables equivale al Margen EBITDA (30,32% en 2025 y 28,15% en 2024).',
    impactoAuditoria:
      'Dirige la atención al Programa D (PT-D3): auditoría del reconocimiento de ingresos y neteo de costos de programación y contenidos de terceros en Flow (Ajuste de Reclasificación AJ-04 por $11.240M bajo NIIF 15).'
  },
  {
    id: 'rat-2',
    bloqueId: 'ganamos',
    preguntaClave: PREGUNTAS_CLAVE.GANAMOS,
    categoria: '1. ¿Ganamos o perdimos? — Resultado del Período',
    nombre: 'Margen operativo (o EBIT)',
    formula: 'Resultado Operativo / ventas',
    calculo2025: '$450.047 M / $8.328.814 M',
    calculo2024: '-$192.676 M / $5.442.958 M',
    valor2025: '5,40%',
    valor2024: '-3,54%',
    variacion: '+8,94 p.p. (Revierte pérdida)',
    semaforo: 'emerald',
    queRepresenta:
      'Indica que por cada $100 de facturación en 2025, Telecom generó una ganancia operativa pura (después de absorber $2.075.488M de Depreciaciones, Amortizaciones y Deterioro) de $5,40, revirtiendo el margen operativo negativo de -3,54% sufrido en 2024 (-$192.676M).',
    impactoAuditoria:
      'Exige validar la integridad de las Ventas (PT-D1/PT-D2) y la exactitud del cargo por D, A & D (Nota 25) e inexistencia de sub-amortización o falta de baja de bienes de uso obsoletos (PT-A4: Ajuste AJ-01 por $28.340M).'
  },
  {
    id: 'rat-3',
    bloqueId: 'ganamos',
    preguntaClave: PREGUNTAS_CLAVE.GANAMOS,
    categoria: '1. ¿Ganamos o perdimos? — Resultado del Período',
    nombre: 'Margen neto',
    formula: 'Resultado Neto / ventas',
    calculo2025: '-$145.304 M / $8.328.814 M',
    calculo2024: '$1.359.230 M / $5.442.958 M',
    valor2025: '-1,74%',
    valor2024: '24,97%',
    variacion: '-26,71 p.p.',
    semaforo: 'amber',
    queRepresenta:
      'Expresa el resultado final que queda para los accionistas por cada $100 vendidos. En 2025 arroja un margen negativo de -1,74% (pérdida neta de -$145.304M) frente al +24,97% de 2024 (+$1.359.230M). Este contraste con el buen desempeño operativo (EBIT +5,40%) se explica exclusivamente por el giro en Costos Financieros (Nota 26: de +$1.914.786M en 2024 a -$748.840M en 2025).',
    impactoAuditoria:
      'Obliga a auditar en detalle la Nota 26 (Costos Financieros, diferencias de cambio y RECPAM NIC 29 en PT-C3) y el devengamiento del beneficio por Impuesto a las Ganancias Diferido (+$46.432M en Nota 16).'
  },
  {
    id: 'rat-4',
    bloqueId: 'ganamos',
    preguntaClave: PREGUNTAS_CLAVE.GANAMOS,
    categoria: '1. ¿Ganamos o perdimos? — Resultado del Período',
    nombre: 'Margen de EBITDA',
    formula: 'EBITDA / ventas',
    calculo2025: '$2.525.535 M / $8.328.814 M',
    calculo2024: '$1.532.381 M / $5.442.958 M',
    valor2025: '30,32%',
    valor2024: '28,15%',
    variacion: '+2,17 p.p. (+64,81% en $)',
    semaforo: 'emerald',
    queRepresenta:
      'Mide la generación de caja operativa bruta antes de depreciaciones, amortizaciones, intereses e impuestos sobre las ventas. Telecom eleva su margen de 28,15% a 30,32% (+2,17 puntos porcentuales) gracias a la recomposición del ARPU real y a la dilución relativa de los costos laborales (que bajaron de 24,74% a 23,55% sobre ventas).',
    impactoAuditoria:
      'Es el indicador clave utilizado en los modelos de valuación DCF de la UGE Redes Personal (PT-E2) y en el cálculo de los covenants de deuda financiera (PT-C4).'
  },

  // ==========================================================================
  // BLOQUE 2: ¿HAY SUFICIENTE DINERO? (4 RATIOS)
  // ==========================================================================
  {
    id: 'rat-5',
    bloqueId: 'dinero',
    preguntaClave: PREGUNTAS_CLAVE.DINERO,
    categoria: '2. ¿Hay suficiente dinero? — Generación de Caja',
    nombre: 'Monetización del resultado operativo',
    formula: 'efectivo generado por las operaciones / EBIAT',
    calculo2025: '$2.525.535 M (Flujo Op. / EBITDA) / $292.531 M (EBIAT = EBIT × 0,65)  [Con EBIAT contable $496.479M: 5,09x]',
    calculo2024: '$1.532.381 M / -$125.239 M (EBIAT 2024)  [Con EBIAT contable -$730.913M: -2,10x]',
    valor2025: '8,63x (863,3%)',
    valor2024: '-12,24x (-1223,6%)',
    notaAlternativaMatriz: 'Con EBIAT = EBIT×(1-0,35): 8,63x (2025) y -12,24x (2024) | Con EBIAT = EBIT+Imp.Gan.: 5,09x (2025) y -2,10x (2024)',
    variacion: 'Positivización por EBIT > 0',
    semaforo: 'emerald',
    queRepresenta:
      'Mide cuántas veces el resultado operativo después de impuestos (EBIAT) se convierte en flujo de efectivo operativo real. En una telco capital-intensiva, como las Depreciaciones y Amortizaciones ($2.075.488M) son un gasto contable NO erogable muy elevado, el efectivo generado por las operaciones ($2.525.535M de flujo operativo antes de capital de trabajo, o $2.184.920M neto de WK) multiplica por 8,63x (ó 5,09x tomando EBIAT contable = EBIT $450.047M + Impuesto $46.432M = $496.479M) al EBIAT.',
    impactoAuditoria:
      'Valida la capacidad real de generación de fondos operativos frente al alto cargo contable por amortizaciones, pero exige verificar en PT-B2 y PT-B3 que el aumento de Créditos por Ventas (+$409.813M) no erosione la cobranza efectiva.'
  },
  {
    id: 'rat-6',
    bloqueId: 'dinero',
    preguntaClave: PREGUNTAS_CLAVE.DINERO,
    categoria: '2. ¿Hay suficiente dinero? — Generación de Caja',
    nombre: 'Relación flujo libre (free cash-flow) / EBIAT',
    formula: '(efectivo generado por las operaciones - efectivo aplicado a las inversiones) / EBIAT',
    calculo2025: '($2.525.535 M - $1.269.253 M Inv. Neta) / $292.531 M  [Con EBIAT contable $496.479M: 2,53x]',
    calculo2024: '($1.532.381 M - $1.725.057 M) / -$125.239 M',
    valor2025: '4,29x (429,5%)',
    valor2024: '1,54x (c/EBIAT < 0)',
    notaAlternativaMatriz: 'Flujo Libre = Flujo Operativo ($2.525.535M) - Variación CAPEX/Intang. ($1.269.253M) = $1.256.282M',
    variacion: 'Generación FCF positiva',
    semaforo: 'emerald',
    queRepresenta:
      'Relaciona el Flujo de Caja Libre (Free Cash Flow = Efectivo operativo menos efectivo aplicado a inversiones en bienes de uso e intangibles) con el EBIAT. Demuestra que luego de financiar la expansión de red 5G y fibra FTTH, Telecom conserva excedente de caja libre para atender el servicio de su deuda financiera.',
    impactoAuditoria:
      'Se cruza directamente con las proyecciones de Free Cash Flow (FCF) utilizadas por la Gerencia en el Test de Deterioro de la Llave de Negocio (PT-E2, UGE Redes Personal).'
  },
  {
    id: 'rat-7',
    bloqueId: 'dinero',
    preguntaClave: PREGUNTAS_CLAVE.DINERO,
    categoria: '2. ¿Hay suficiente dinero? — Generación de Caja',
    nombre: 'Reinversión de amortizaciones',
    formula: 'inversión en activos fijos / amortizaciones y depreciaciones',
    calculo2025: 'Altas Brutas PP&E ($3.167.875M) / D,A&D ($2.075.488M)  [Con Δ Neta PP&E $1.092.387M / $2.075.488M = 52,63%]',
    calculo2024: 'Altas Brutas PP&E ($1.725.057M) / D,A&D ($1.725.057M)',
    valor2025: '152,63% (ó 52,63% Neta)',
    valor2024: '100,00%',
    notaAlternativaMatriz: '152,63% (1,53x) tomando Altas Brutas (ΔPP&E + D,A&D) | 52,63% (0,53x) tomando solo ΔPP&E del Balance ($1.092.387M / $2.075.488M)',
    variacion: '+52,63 p.p. (Expansión CAPEX)',
    semaforo: 'emerald',
    queRepresenta:
      'Compara el esfuerzo de inversión en bienes de uso (CAPEX) con el desgaste anual por depreciaciones y amortizaciones ($2.075.488M en Nota 25). Como el saldo neto de PP&E creció en +$1.092.387M (de $5.696.731M a $6.789.118M) después de absorber las depreciaciones del año, la inversión bruta superó en un 52,63% a las amortizaciones (ratio bruto 152,63% = 1,53x; o si se divide únicamente la variación neta patrimonial de PP&E $1.092.387M sobre D,A&D $2.075.488M arroja 52,63% = 0,53x).',
    impactoAuditoria:
      'Fundamenta el alcance sustantivo del Programa A (PT-A2): revisión documental de las adiciones de CAPEX 5G/FTTH y corte de obras en curso habilitadas en diciembre 2025.'
  },
  {
    id: 'rat-8',
    bloqueId: 'dinero',
    preguntaClave: PREGUNTAS_CLAVE.DINERO,
    categoria: '2. ¿Hay suficiente dinero? — Generación de Caja',
    nombre: 'Cash out resultados',
    formula: 'dividendos / resultado neto',
    calculo2025: '$87 M (Div. a pagar ESP) / -$145.304 M  [ó s/Div. distribuidos ECP $127.615M / -$145.304M = -87,83%]',
    calculo2024: '$902 M (Div. a pagar ESP) / $1.359.230 M',
    valor2025: '-0,06%',
    valor2024: '0,07%',
    notaAlternativaMatriz: 'Usando línea "Dividendos a pagar" del ESP ($87M en 2025 y $902M en 2024)',
    variacion: '-0,13 p.p.',
    semaforo: 'amber',
    queRepresenta:
      'Mide la proporción del resultado neto que sale de la compañía en concepto de dividendos. Tomando el saldo de "Dividendos a pagar" expuesto en el Pasivo Corriente ($87M en 2025 vs. $902M en 2024) sobre el Resultado Neto ($(145.304)M en 2025 y $1.359.230M en 2024), la relación es marginal (-0,06% y 0,07%). El signo negativo en 2025 obedece a la pérdida neta contable del período.',
    impactoAuditoria:
      'Requiere verificar en Actas de Asamblea de Accionistas (PT-C2) las distribuciones aprobadas y el cumplimiento de restricciones contractuales (covenants) para el pago de dividendos.'
  },

  // ==========================================================================
  // BLOQUE 3A: ¿CUÁL ES LA INVERSIÓN Y LA FINANCIACIÓN? — INVERSIÓN Y GIRO (9 RATIOS)
  // ==========================================================================
  {
    id: 'rat-9',
    bloqueId: 'inversion',
    subBloqueMatriz: '3A',
    preguntaClave: PREGUNTAS_CLAVE.INVERSION_FINANC,
    categoria: '3A. Inversión y Capital de Trabajo Operativo',
    nombre: 'Días de caja',
    formula: 'saldo de efectivo y equivalentes / venta promedio diaria',
    calculo2025: '$469.050 M / ($8.328.814 M / 365 = $22.818,67 M/día)',
    calculo2024: '$418.745 M / ($5.442.958 M / 365 = $14.912,21 M/día)',
    valor2025: '20,56 días',
    valor2024: '28,08 días',
    notaAlternativaMatriz: 'Base 365 días: 20,56 d (2025) y 28,08 d (2024) | Base 360 días: 20,27 d (2025) y 27,70 d (2024)',
    variacion: '-7,52 días (-26,80%)',
    semaforo: 'emerald',
    queRepresenta:
      'Expresa cuántos días de facturación mantiene la empresa en disponibilidades líquidas inmediatas (Efectivo y equivalentes Nota 4: $469.050M). La reducción de 28,08 a 20,56 días refleja una gestión eficiente de tesorería para no inmovilizar pesos ante la inflación, canalizando los excedentes hacia Inversiones Corrientes ($323.064M, +631,26%, que suman otros 14,16 días de venta).',
    impactoAuditoria:
      'Se vincula con los procedimientos de conciliación de cuentas bancarias recaudadoras y arqueo de inversiones en Caja de Valores S.A. (CCI-02 y PT-B2).'
  },
  {
    id: 'rat-10',
    bloqueId: 'inversion',
    subBloqueMatriz: '3A',
    preguntaClave: PREGUNTAS_CLAVE.INVERSION_FINANC,
    categoria: '3A. Inversión y Capital de Trabajo Operativo',
    nombre: 'Días de clientes',
    formula: 'saldo de cuentas a cobrar clientes / venta promedio diaria',
    calculo2025: '$799.188 M / ($8.328.814 M / 365 = $22.818,67 M/día)',
    calculo2024: '$389.375 M / ($5.442.958 M / 365 = $14.912,21 M/día)',
    valor2025: '35,02 días',
    valor2024: '26,11 días',
    notaAlternativaMatriz: 'Con Créditos Ctes ($799.188M): 35,02 d vs 26,11 d | Con Totales Cte+NC ($800.128M): 35,06 d vs 26,15 d (Base 360d: 34,54 d vs 25,75 d)',
    variacion: '+8,91 días (+34,13%)',
    semaforo: 'red',
    queRepresenta:
      'Mide el plazo promedio de cobranza (calle). Es la principal señal de alerta de los ratios operativos: el plazo aparente se alarga casi 9 días (de 26,11 a 35,02 días) porque los Créditos por Ventas se duplicaron (+105,25%, de $389.375M a $799.188M netos de una Previsión de $(270.919)M) mientras las Ventas crecieron un +53,02%. Esto combina tres efectos: (1) la adquisición de Telefónica Móviles Argentina S.A. (TMA) el 24/02/2025, cuyo stock total de créditos al cierre ($421.919M) se consolida al 100% en el Balance mientras el Estado de Resultados solo incluye 10 meses de ventas de TMA (mar-dic 2025); (2) la mayor mora acumulada de clientes ($1.067.130M de créditos comunes); y (3) la asimetría NIC 29 entre flujos mensuales reexpresados y saldos nominales de cierre.',
    impactoAuditoria:
      'Dispara directamente el Programa B (PT-B1, PT-B2 y PT-B3) para auditar la cartera migrada de TMA y de Telecom, donde se detectaron los Ajustes Materiales AJ-03 (defecto de Previsión NIIF 9 por mora > 180 días por $19.850M) y AJ-02 (corte de facturación B2B $14.620M y cobranzas en tránsito $4.180M).'
  },
  {
    id: 'rat-11',
    bloqueId: 'inversion',
    subBloqueMatriz: '3A',
    preguntaClave: PREGUNTAS_CLAVE.INVERSION_FINANC,
    categoria: '3A. Inversión y Capital de Trabajo Operativo',
    nombre: 'Días de stock (inventario)',
    formula: 'saldo de bienes de cambio / costo de venta promedio diario',
    calculo2025: '$79.530 M / ($288.668 M Costo Equipos / 365)  [ó s/Costos Operativos Erogables $5.803.279M: 5,00 días]',
    calculo2024: '$79.513 M / ($259.216 M Costo Equipos / 365)  [ó s/Costos Operativos Erogables $3.910.577M: 7,42 días]',
    valor2025: '100,56 días (ó 5,00 d)',
    valor2024: '111,96 días (ó 7,42 d)',
    notaAlternativaMatriz: '100,56 d vs 111,96 d (dividiendo por Costo de equipos vendidos Nota 25) | 5,00 d vs 7,42 d (dividiendo por Costos Operativos Erogables totales)',
    variacion: '-11,40 días (Mejora rotación)',
    semaforo: 'emerald',
    queRepresenta:
      'Mide la rotación de los Inventarios (Nota 7: $79.530M en 2025 vs. $79.513M en 2024, compuestos por teléfonos móviles para venta, módems FTTH y decodificadores). Si se relaciona específicamente con el "Costo de equipos vendidos" (Nota 25: $288.668M en 2025 y $259.216M en 2024), el stock equivale a 100,56 días de venta de equipos (mejorando desde 111,96 días en 2024). Si en cambio se divide por el total de costos operativos erogables ($5.803.279M), representa apenas 5,00 días en 2025 vs. 7,42 días en 2024.',
    impactoAuditoria:
      'Baja materialidad relativa (los inventarios representan solo el 0,48% del Activo Total), validándose mediante recuentos selectivos y test de valor neto de realización.'
  },
  {
    id: 'rat-12',
    bloqueId: 'inversion',
    subBloqueMatriz: '3A',
    preguntaClave: PREGUNTAS_CLAVE.INVERSION_FINANC,
    categoria: '3A. Inversión y Capital de Trabajo Operativo',
    nombre: 'Días de proveedores',
    formula: 'saldo de cuentas a pagar proveedores / (compra promedio diaria + gastos erogables promedio diario)',
    calculo2025: '$1.108.820 M / ($5.803.279 M Costos Erogables / 365 = $15.899,39 M/día)',
    calculo2024: '$584.980 M / ($3.910.577 M Costos Erogables / 365 = $10.713,91 M/día)',
    valor2025: '69,74 días',
    valor2024: '54,60 días',
    notaAlternativaMatriz: 'Con Total Costos Erogables (Ventas - EBITDA = $5.803.279M): 69,74 d vs 54,60 d | Con Cuentas x Pagar Cte+NC ($1.129.134M): 71,02 d vs 56,62 d',
    variacion: '+15,14 días (+27,73%)',
    semaforo: 'amber',
    queRepresenta:
      'Mide el plazo promedio de pago a proveedores comerciales (Cuentas por pagar corrientes Nota 13: $1.108.820M en 2025 vs. $584.980M en 2024) en relación con los costos y gastos operativos erogables diarios ($5.803.279M / 365). El estiramiento de 54,60 a 69,74 días (+15,14 días, con una suba del +89,55% en el saldo de Cuentas por pagar) evidencia que Telecom financió parte de su fuerte CAPEX y operatoria alargando los plazos con sus proveedores comerciales.',
    impactoAuditoria:
      'Exige realizar pruebas de pasivos comerciales omitidos al cierre y corte de recepción de insumos/servicios en diciembre 2025 (CCI-04 y PT-A2).'
  },
  {
    id: 'rat-13',
    bloqueId: 'inversion',
    subBloqueMatriz: '3A',
    preguntaClave: PREGUNTAS_CLAVE.INVERSION_FINANC,
    categoria: '3A. Inversión y Capital de Trabajo Operativo',
    nombre: 'Ciclo de conversión a caja (en días)',
    formula: 'días de clientes + días de stock - días de proveedores',
    calculo2025: '35,02 d + 5,00 d - 69,74 d = -29,72 d  [ó usando Stock s/Costo Equipos (100,56 d): +65,84 días]',
    calculo2024: '26,11 d + 7,42 d - 54,60 d = -21,07 d  [ó usando Stock s/Costo Equipos (111,96 d): +83,47 días]',
    valor2025: '-29,72 d (ó 65,84 d)',
    valor2024: '-21,07 d (ó 83,47 d)',
    notaAlternativaMatriz: '-29,72 d vs -21,07 d (con Stock s/Costos Erogables) | +65,84 d vs +83,47 d (con Stock s/Costo de Equipos 100,56 d)',
    variacion: '-8,65 días (Mayor financiación comercial)',
    semaforo: 'emerald',
    queRepresenta:
      'Refleja el plazo neto entre el cobro a los abonados y el pago a los proveedores. Tomando la base homogénea de costos operativos erogables, el ciclo es negativo (-29,72 días en 2025 vs. -21,07 días en 2024), típico de la industria de telecomunicaciones donde se cobra mensualmente por abono y se paga a proveedores a 70 días (si en tu Excel sumás los 100,56 días específicos del rubro equipos, el resultado aritmético de las 3 celdas es +65,84 días en 2025 vs. +83,47 días en 2024).',
    impactoAuditoria:
      'Explica por qué Telecom puede operar de forma sostenida con ratios de Liquidez Corriente inferiores a 1,00x sin entrar en cesación de pagos operativa.'
  },
  {
    id: 'rat-14',
    bloqueId: 'inversion',
    subBloqueMatriz: '3A',
    preguntaClave: PREGUNTAS_CLAVE.INVERSION_FINANC,
    categoria: '3A. Inversión y Capital de Trabajo Operativo',
    nombre: 'Liquidez',
    formula: 'activo corriente / pasivo corriente',
    calculo2025: '$1.833.812 M / $3.838.300 M',
    calculo2024: '$993.009 M / $2.576.266 M',
    valor2025: '0,48',
    valor2024: '0,39',
    notaAlternativaMatriz: '0,48 (47,78%) en 2025 vs. 0,39 (38,54%) en 2024',
    variacion: '+0,09 (+23,96%)',
    semaforo: 'amber',
    queRepresenta:
      'Indica que por cada $1,00 de deuda exigible en los próximos 12 meses, Telecom cuenta con $0,48 en activos corrientes (mejorando desde $0,39 en 2024). Aunque presenta un capital de trabajo negativo de -$2.004.488M, casi la mitad de la mejora proviene del incremento del +105,25% en Créditos por Ventas ($799.188M).',
    impactoAuditoria:
      'Obliga a auditar la cobrabilidad real y valuación de los Créditos por Ventas (Programa B: Ajustes AJ-02 y AJ-03) y la capacidad de refinanciación de los Préstamos Corrientes ($1.616.544M en Programa C).'
  },
  {
    id: 'rat-15',
    bloqueId: 'inversion',
    subBloqueMatriz: '3A',
    preguntaClave: PREGUNTAS_CLAVE.INVERSION_FINANC,
    categoria: '3A. Inversión y Capital de Trabajo Operativo',
    nombre: 'Liquidez ácida',
    formula: '(activo corriente - inventarios) / pasivo corriente',
    calculo2025: '($1.833.812 M - $79.530 M) / $3.838.300 M = $1.754.282 M / $3.838.300 M',
    calculo2024: '($993.009 M - $79.513 M) / $2.576.266 M = $913.496 M / $2.576.266 M',
    valor2025: '0,46',
    valor2024: '0,35',
    notaAlternativaMatriz: '0,46 (45,70%) en 2025 vs. 0,35 (35,46%) en 2024',
    variacion: '+0,10 (+28,89%)',
    semaforo: 'amber',
    queRepresenta:
      'Mide la liquidez de corto plazo detrayendo los bienes de cambio (Inventarios Nota 7: $79.530M). La mínima diferencia entre la Liquidez general (0,48) y la Liquidez ácida (0,46) confirma que el stock físico tiene un peso marginal en el giro de corto plazo, recayendo toda la exigencia sobre Créditos por Ventas ($799.188M), Efectivo ($469.050M) e Inversiones ($323.064M).',
    impactoAuditoria:
      'Concentra los procedimientos sustantivos sobre la existencia de Inversiones Corrientes y la depuración de saldos incobrables en Deudores por Servicios (PT-B3).'
  },
  {
    id: 'rat-16',
    bloqueId: 'inversion',
    subBloqueMatriz: '3A',
    preguntaClave: PREGUNTAS_CLAVE.INVERSION_FINANC,
    categoria: '3A. Inversión y Capital de Trabajo Operativo',
    nombre: 'Inmovilización',
    formula: 'activo no corriente / activo total',
    calculo2025: '$14.788.740 M / $16.622.552 M',
    calculo2024: '$13.400.735 M / $14.393.744 M',
    valor2025: '88,97%',
    valor2024: '93,10%',
    notaAlternativaMatriz: '0,89 (88,97%) en 2025 vs. 0,93 (93,10%) en 2024',
    variacion: '-4,13 p.p.',
    semaforo: 'amber',
    queRepresenta:
      'Mide qué proporción de los recursos totales está invertida a largo plazo. Demuestra la altísima rigidez estructural de una Tech-Co de infraestructura: el 88,97% del Activo es No Corriente, dominado por PP&E (40,84% = $6.789.118M), Llaves de negocio (26,73% = $4.443.998M) y Activos intangibles (16,07% = $2.671.525M).',
    impactoAuditoria:
      'Justifica plenamente que 2 de los 5 Programas de Trabajo críticos (Programa A para PP&E y Programa E para Llaves e Intangibles) se destinen a auditar el Activo No Corriente.'
  },
  {
    id: 'rat-17',
    bloqueId: 'inversion',
    subBloqueMatriz: '3A',
    preguntaClave: PREGUNTAS_CLAVE.INVERSION_FINANC,
    categoria: '3A. Inversión y Capital de Trabajo Operativo',
    nombre: 'Rotación del activo',
    formula: 'ventas / activo total',
    calculo2025: '$8.328.814 M / $16.622.552 M',
    calculo2024: '$5.442.958 M / $14.393.744 M',
    valor2025: '0,50x',
    valor2024: '0,38x',
    notaAlternativaMatriz: '0,50 (50,11%) en 2025 vs. 0,38 (37,81%) en 2024',
    variacion: '+0,12x (+32,51%)',
    semaforo: 'emerald',
    queRepresenta:
      'Indica cuántos pesos de ventas genera la empresa por cada peso invertido en el Activo Total. En 2025 sube de $0,38 a $0,50 por cada $1,00 de activo (el Activo Total da media vuelta al año, tardando ~2 años en rotar por su alta carga de infraestructura pesada), mostrando una importante ganancia de eficiencia comercial.',
    impactoAuditoria:
      'Respalda la razonabilidad del crecimiento real de ingresos (+53,02%) frente al crecimiento del Activo (+15,48%) validado en la Prueba Global de ARPU (PT-D1).'
  },

  // ==========================================================================
  // BLOQUE 3B: ¿CUÁL ES LA INVERSIÓN Y LA FINANCIACIÓN? — FINANCIACIÓN Y SOLVENCIA (8 RATIOS)
  // ==========================================================================
  {
    id: 'rat-18',
    bloqueId: 'financiacion',
    subBloqueMatriz: '3B',
    preguntaClave: PREGUNTAS_CLAVE.INVERSION_FINANC,
    categoria: '3B. Financiación, Endeudamiento y Solvencia',
    nombre: 'Endeudamiento total',
    formula: 'pasivo / patrimonio neto',
    calculo2025: '$9.639.244 M / $6.983.308 M',
    calculo2024: '$7.112.817 M / $7.280.927 M',
    valor2025: '1,38',
    valor2024: '0,98',
    notaAlternativaMatriz: '1,38x (138,03%) en 2025 vs. 0,98x (97,69%) en 2024',
    variacion: '+0,40 (+41,29%)',
    semaforo: 'red',
    queRepresenta:
      'Mide cuántos pesos de deuda total (comercial, financiera, fiscal y previsional) tiene la compañía por cada $1,00 de capital propio. En 2024 era inferior a 1 ($0,98), pero en 2025 salta a $1,38 (138,03%) debido al incremento del +35,52% en el Pasivo Total y la reducción del -4,09% en el Patrimonio Neto.',
    impactoAuditoria:
      'Eleva el riesgo sobre las afirmaciones de Integridad y Medición de pasivos: Préstamos (Nota 14), Cuentas por Pagar (Nota 13) y Provisiones para Contingencias (Nota 20: $563.085M).'
  },
  {
    id: 'rat-19',
    bloqueId: 'financiacion',
    subBloqueMatriz: '3B',
    preguntaClave: PREGUNTAS_CLAVE.INVERSION_FINANC,
    categoria: '3B. Financiación, Endeudamiento y Solvencia',
    nombre: 'Endeudamiento financiero',
    formula: '(deudas financieras/negociadas corrientes + deudas financieras/negociadas no corrientes) / patrimonio neto',
    calculo2025: '($1.616.544 M + $3.820.071 M = $5.436.615 M) / $6.983.308 M',
    calculo2024: '($1.411.178 M + $2.374.802 M = $3.785.980 M) / $7.280.927 M',
    valor2025: '0,78',
    valor2024: '0,52',
    notaAlternativaMatriz: '0,78x (77,85%) vs. 0,52x (52,00%) tomando Préstamos Nota 14 | 0,83x vs. 0,56x si se suman Arrendamientos Nota 18',
    variacion: '+0,26 (+49,72%)',
    semaforo: 'amber',
    queRepresenta:
      'Aísla exclusivamente la deuda financiera onerosa (Préstamos Corrientes $1.616.544M + Préstamos No Corrientes $3.820.071M = $5.436.615M en Nota 14) frente al Patrimonio Neto ($6.983.308M). Pasa de 0,52 (52,00%) en 2024 a 0,78 (77,85%) en 2025 por la toma de préstamos y emisión de ONs para financiar redes 5G y adquisiciones.',
    impactoAuditoria:
      'Es el eje central del Programa C (PT-C1 a PT-C4): circularización al 100% de bancos y Caja de Valores S.A., y recálculo de valuación al TC BNA $/US$ 1.455,00.'
  },
  {
    id: 'rat-20',
    bloqueId: 'financiacion',
    subBloqueMatriz: '3B',
    preguntaClave: PREGUNTAS_CLAVE.INVERSION_FINANC,
    categoria: '3B. Financiación, Endeudamiento y Solvencia',
    nombre: 'Solvencia Bruta',
    formula: 'patrimonio neto / pasivo total',
    calculo2025: '$6.983.308 M / $9.639.244 M',
    calculo2024: '$7.280.927 M / $7.112.817 M',
    valor2025: '0,72',
    valor2024: '1,02',
    notaAlternativaMatriz: '0,72x (72,45%) en 2025 vs. 1,02x (102,36%) en 2024 (Inversa del Endeudamiento Total)',
    variacion: '-0,30 (-29,22%)',
    semaforo: 'amber',
    queRepresenta:
      'Es la inversa del Endeudamiento Total y mide cuántos pesos de Patrimonio Neto respaldan cada $1,00 de Pasivo Total. Mientras en 2024 el capital propio superaba a las deudas totales (1,02x = 102,36%), en 2025 cubre el 72,45% del Pasivo Total ($0,72 por cada $1,00 de deuda).',
    impactoAuditoria:
      'Demuestra que la garantía de los acreedores descansa en la correcta valuación y recuperabilidad de los activos no corrientes (PP&E, Llaves e Intangibles).'
  },
  {
    id: 'rat-21',
    bloqueId: 'financiacion',
    subBloqueMatriz: '3B',
    preguntaClave: PREGUNTAS_CLAVE.INVERSION_FINANC,
    categoria: '3B. Financiación, Endeudamiento y Solvencia',
    nombre: 'Solvencia',
    formula: 'patrimonio neto / (deudas financieras/negociadas corrientes + deudas financieras/negociadas no corrientes + patrimonio neto)',
    calculo2025: '$6.983.308 M / ($1.616.544 M + $3.820.071 M + $6.983.308 M = $12.419.923 M)',
    calculo2024: '$7.280.927 M / ($1.411.178 M + $2.374.802 M + $7.280.927 M = $11.066.907 M)',
    valor2025: '0,56 (56,23%)',
    valor2024: '0,66 (65,79%)',
    notaAlternativaMatriz: '0,56 (56,23%) en 2025 vs. 0,66 (65,79%) en 2024 (Participación del PN en la Capitalización Financiera Total)',
    variacion: '-0,10 (-9,56 p.p.)',
    semaforo: 'emerald',
    queRepresenta:
      'Mide la autonomía financiera sobre el Capital Invertido Neto (Deuda Financiera Total + Patrimonio Neto = $12.419.923M en 2025). Indica que, aislando los pasivos espontáneos (comerciales, fiscales e impuesto diferido), el 56,23% de la financiación negociada sigue siendo capital propio de los accionistas (frente al 65,79% en 2024) y el 43,77% es deuda financiera.',
    impactoAuditoria:
      'Se utiliza para ponderar la estructura de capital (We = 56,23% y Wd = 43,77%) en el recálculo de la tasa de descuento WACC del Test de Deterioro en PT-E2.'
  },
  {
    id: 'rat-22',
    bloqueId: 'financiacion',
    subBloqueMatriz: '3B',
    preguntaClave: PREGUNTAS_CLAVE.INVERSION_FINANC,
    categoria: '3B. Financiación, Endeudamiento y Solvencia',
    nombre: 'Repago en EBITDA',
    formula: '(deudas financieras/negociadas corrientes + deudas financieras/negociadas no corrientes) / EBITDA',
    calculo2025: '($1.616.544 M + $3.820.071 M = $5.436.615 M) / $2.525.535 M',
    calculo2024: '($1.411.178 M + $2.374.802 M = $3.785.980 M) / $1.532.381 M',
    valor2025: '2,15x',
    valor2024: '2,47x',
    notaAlternativaMatriz: '2,15 años de EBITDA en 2025 vs. 2,47 años en 2024 (Deuda Neta/EBITDA = 1,83x vs. 2,16x)',
    variacion: '-0,32x (Mejora capacidad de repago)',
    semaforo: 'emerald',
    queRepresenta:
      'Indica cuántos años de generación operativa bruta (EBITDA) necesitaría Telecom para cancelar íntegramente su deuda financiera total. A pesar de que los Préstamos subieron +43,60%, como el EBITDA creció aún más rápido (+64,81%), el tiempo de repago mejoró bajando de 2,47 años en 2024 a 2,15 años en 2025, cumpliendo holgadamente los covenants internacionales (< 3,00x).',
    impactoAuditoria:
      'Confirma en PT-C4 la inexistencia de incumplimientos contractuales (defaults técnicos) que obligasen a reclasificar los Préstamos No Corrientes ($3.820.071M) al Pasivo Corriente.'
  },
  {
    id: 'rat-23',
    bloqueId: 'financiacion',
    subBloqueMatriz: '3B',
    preguntaClave: PREGUNTAS_CLAVE.INVERSION_FINANC,
    categoria: '3B. Financiación, Endeudamiento y Solvencia',
    nombre: 'Cobertura de intereses (EBITDA)',
    formula: 'EBIT (o EBITDA)/ Intereses por financiación negociada',
    calculo2025: 'Con EBITDA: $2.525.535M / $748.840M = 3,37x  |  Con EBIT: $450.047M / $748.840M = 0,60x',
    calculo2024: 'Con EBITDA: $1.532.381M / $1.914.786M = 0,80x  |  Con EBIT: -$192.676M / $1.914.786M = -0,10x',
    valor2025: '3,37x (c/EBIT: 0,60x)',
    valor2024: '0,80x (c/EBIT: -0,10x)',
    notaAlternativaMatriz: 'Usando Costos financieros Nota 26 ($748.840M en 2025): con EBITDA da 3,37x (-3,37x con signo) y con EBIT da 0,60x (-0,60x con signo)',
    variacion: 'Cobertura EBITDA 3,37 veces',
    semaforo: 'emerald',
    queRepresenta:
      'Mide cuántas veces el resultado operativo cubre los Costos Financieros (Nota 26: -$748.840M en 2025). Medido con EBITDA ($2.525.535M / $748.840M), Telecom cubre 3,37 veces sus costos financieros totales; medido con EBIT ($450.047M / $748.840M), cubre 0,60 veces (lo que explica por qué el resultado antes de impuestos es negativo en -$191.736M). En 2024 la línea de Costos Financieros fue una ganancia contable de +$1.914.786M por licuación inflacionaria de la deuda en USD.',
    impactoAuditoria:
      'Vincula el análisis de solvencia con la auditoría del devengamiento de intereses por Tasa Efectiva (TIE) y diferencias de cambio en PT-C3.'
  },
  {
    id: 'rat-24',
    bloqueId: 'financiacion',
    subBloqueMatriz: '3B',
    preguntaClave: PREGUNTAS_CLAVE.INVERSION_FINANC,
    categoria: '3B. Financiación, Endeudamiento y Solvencia',
    nombre: 'Apalancamiento financiero',
    formula: 'activo total / patrimonio neto',
    calculo2025: '$16.622.552 M / $6.983.308 M',
    calculo2024: '$14.393.744 M / $7.280.927 M',
    valor2025: '2,38',
    valor2024: '1,98',
    notaAlternativaMatriz: '2,38x (238,03%) en 2025 vs. 1,98x (197,69%) en 2024 (Igual a 1 + Endeudamiento Total)',
    variacion: '+0,40 (+20,41%)',
    semaforo: 'amber',
    queRepresenta:
      'Multiplicador patrimonial (Equity Multiplier): indica que por cada $1,00 de Patrimonio Neto aportado por los accionistas, Telecom controla y gestiona $2,38 de Activo Total (subiendo desde $1,98 en 2024). Matemáticamente es igual a 1 + Endeudamiento Total (1 + 1,38 = 2,38).',
    impactoAuditoria:
      'Muestra el mayor efecto palanca en 2025: un ajuste de auditoría sobre el Activo impacta 2,38 veces más en términos porcentuales sobre el Patrimonio Neto que sobre el Activo.'
  },
  {
    id: 'rat-25',
    bloqueId: 'financiacion',
    subBloqueMatriz: '3B',
    preguntaClave: PREGUNTAS_CLAVE.INVERSION_FINANC,
    categoria: '3B. Financiación, Endeudamiento y Solvencia',
    nombre: 'Apalancamiento financiero neto',
    formula: 'activo neto (activo total - Pasivos Espontáneos (no financieras)) / patrimonio neto',
    calculo2025: '($16.622.552 M - $4.202.629 M Pas. Espontáneos = $12.419.923 M) / $6.983.308 M',
    calculo2024: '($14.393.744 M - $3.326.837 M Pas. Espontáneos = $11.066.907 M) / $7.280.927 M',
    valor2025: '1,78',
    valor2024: '1,52',
    notaAlternativaMatriz: '1,78x (177,85%) en 2025 vs. 1,52x (152,00%) en 2024 (Donde Activo Neto = Deuda Financiera + PN = $12.419.923M)',
    variacion: '+0,26 (+17,01%)',
    semaforo: 'amber',
    queRepresenta:
      'Mide el apalancamiento depurando los Pasivos Espontáneos sin costo financiero explícito (Pasivo Total $9.639.244M menos Préstamos Totales $5.436.615M = $4.202.629M de pasivos comerciales, fiscales, laborales, diferidos y provisiones). El Activo Neto resultante ($12.419.923M en 2025 y $11.066.907M en 2024) dividido por el Patrimonio Neto arroja 1,78x en 2025 vs. 1,52x en 2024 (exactamente igual a 1 + Endeudamiento Financiero: 1 + 0,78 = 1,78).',
    impactoAuditoria:
      'Permite separar el riesgo de financiación comercial/fiscal espontánea ($4.202.629M) del riesgo de endeudamiento bancario y bursátil negociado ($5.436.615M).'
  },

  // ==========================================================================
  // BLOQUE 4: ¿CUÁL ES LA RENTABILIDAD? (2 RATIOS)
  // ==========================================================================
  {
    id: 'rat-26',
    bloqueId: 'rentabilidad',
    preguntaClave: PREGUNTAS_CLAVE.RENTABILIDAD,
    categoria: '4. ¿Cuál es la rentabilidad? — Rendimiento del Negocio',
    nombre: 'RONA',
    formula: 'EBIAT / activo neto (activo total - pasivos espontáneos)',
    calculo2025: '$292.531 M (EBIT × 0,65) / $12.419.923 M Activo Neto  [Con EBIAT contable $496.479M: 4,00% | Con EBIT directo: 3,62%]',
    calculo2024: '-$125.239 M (EBIT × 0,65) / $11.066.907 M Activo Neto  [Con EBIAT contable -$730.913M: -6,60% | Con EBIT directo: -1,74%]',
    valor2025: '2,36% (ó 4,00%)',
    valor2024: '-1,13% (ó -6,60%)',
    notaAlternativaMatriz: '2,36% vs -1,13% (con EBIAT = EBIT×0,65) | 4,00% vs -6,60% (con EBIAT = EBIT + Imp. Ganancias ER) | 3,62% vs -1,74% (con EBIT directo)',
    variacion: '+3,49 p.p. (Vuelve a terreno positivo)',
    semaforo: 'emerald',
    queRepresenta:
      'El RONA (Return on Net Assets) mide la rentabilidad operativa después de impuestos generada sobre el Activo Neto ($12.419.923M = Activo Total $16.622.552M menos Pasivos Espontáneos $4.202.629M). Pasa de ser negativo en 2024 (-1,13%) a positivo en 2025 (+2,36% aplicando tasa fiscal del 35% al EBIT, o +4,00% sumando al EBIT de $450.047M el beneficio contable por Impuesto a las Ganancias de +$46.432M). Sin embargo, al ser inferior a la tasa WACC real en dólares (11,85%), exige monitorear de cerca el deterioro de activos de larga duración.',
    impactoAuditoria:
      'Justifica por qué el Test de Deterioro de la Llave de Negocio ($4.443.998M) en PT-E2 presenta un margen de cobertura (headroom) ajustado de $334.966M (2,7% del valor contable de la UGE) y es reportado como Cuestión Clave de Auditoría (KAM) en el Informe del Auditor.'
  },
  {
    id: 'rat-27',
    bloqueId: 'rentabilidad',
    preguntaClave: PREGUNTAS_CLAVE.RENTABILIDAD,
    categoria: '4. ¿Cuál es la rentabilidad? — Rendimiento del Negocio',
    nombre: 'ROE',
    formula: 'resultado neto / patrimonio neto',
    calculo2025: '-$145.304 M / $6.983.308 M  [Controlante: -$170.006M / $6.863.861M = -2,48%]',
    calculo2024: '$1.359.230 M / $7.280.927 M  [Controlante: $1.331.805M / $7.136.514M = +18,66%]',
    valor2025: '-2,08%',
    valor2024: '18,67%',
    notaAlternativaMatriz: '-2,08% en 2025 vs. +18,67% en 2024 (Sobre Total Patrimonio ECP)',
    variacion: '-20,75 p.p.',
    semaforo: 'amber',
    queRepresenta:
      'Mide el rendimiento neto final sobre el capital propio de los accionistas (Return on Equity). En 2025 arroja -2,08% (pérdida de -$145.304M sobre un Patrimonio de $6.983.308M) frente al +18,67% de 2024. La comparación entre RONA positivo (+2,36% / +4,00%) y ROE negativo (-2,08%) demuestra que el apalancamiento financiero jugó en contra del accionista en 2025 debido al peso de los Costos Financieros (-$748.840M).',
    impactoAuditoria:
      'Cierra el circuito analítico del Estado de Cambios en el Patrimonio (ECP) y fundamenta la evaluación global de empresa en marcha y exposición en el Informe Final (Etapa 3).'
  }
];

// ============================================================================
// 4. MATRIZ INTEGRADORA: DEL ANÁLISIS H/V Y RATIOS A LAS PRUEBAS SUSTANTIVAS
// ============================================================================
const matrizVinculacionAuditoria = [
  {
    alertaAnalitica:
      '1. Duplicación de Créditos por Ventas Corrientes (+105,25%, de $389.375M a $799.188M en Nota 5: $1.067.130M comunes brutos menos $(270.919)M de Previsión) frente a un crecimiento de Ventas del +53,02% (asimetría por consolidar 100% del stock de créditos de TMA de $421.919M vs. 10 meses de ventas mar-dic 2025 + aumento de mora), elevando los Días de Clientes de 26,11 a 35,02 días (+8,91 días).',
    rubroYPrograma: 'Créditos por Ventas — PROGRAMA B (PT-B)',
    afirmacionesCriticas: 'Medición (Valuación NIIF 9 / PPA NIIF 3), Integridad (Corte) y Existencia',
    procedimientosAplicados:
      '• Reproceso 100% mediante TAACs de la matriz de antigüedad de saldos ($1.071.047M brutos incluyendo cartera TMA de $421.919M) para detectar carteras en mora > 180 días omitidas del cálculo de Previsión NIIF 9 de $(270.919)M (PT-B3).\n• Prueba de corte (cut-off) de actas de recepción B2B Personal Tech (+/- 15 días del cierre) y conciliación de recaudadores externos Rapipago/Pago Fácil/billeteras (PT-B2).\n• Circularización positiva a 65 clientes corporativos B2B (PT-B1).',
    hallazgoVinculado:
      'Detectados Ajustes Materiales AJ-03 (subestimación de la Previsión para Deudores Incobrables por $19.850M en cartera migrada con mora > 180d) y AJ-02 (servicios B2B devengados en dic-25 sin facturar por $14.620M y cobranzas en tránsito por $4.180M).'
  },
  {
    alertaAnalitica:
      '2. Fuerte expansión de PP&E / Bienes de Uso (+19,18%, de $5.696.731M a $6.789.118M en Nota 9, 40,84% del Activo), Reinversión Bruta de Amortizaciones del 152,63% y cargo por D, A & D de $(2.075.488)M (24,92% de las Ventas en Nota 25).',
    rubroYPrograma: 'PP&E (Bienes de Uso) — PROGRAMA A (PT-A)',
    afirmacionesCriticas: 'Existencia, Medición (Obsolescencia/Depreciación) e Integridad',
    procedimientosAplicados:
      '• Inspección ocular in situ de los 16 Data Centers y 85 nodos ópticos/radiobases 5G, cruzando reportes de siniestros/vandalismo con el módulo SAP AM (PT-A1).\n• Revisión del informe técnico de Ingeniería de Red sobre centrales telefónicas analógicas de cobre desactivadas por migración a FTTH y recálculo global de depreciaciones (PT-A4).\n• Auditoría de altas CAPEX 2025 (despachos aduaneros y certificados de obra) (PT-A2).',
    hallazgoVinculado:
      'Detectado Ajuste Material AJ-01 por $28.340M: baja por obsolescencia de centrales analógicas fuera de servicio ($21.450M) y tramos de red vandalizados no desincorporados ($6.890M).'
  },
  {
    alertaAnalitica:
      '3. Elevada Inmovilización del Activo (88,97%) concentrada en Llaves de Negocio ($4.443.998M, 26,73%) y Activos Intangibles ($2.671.525M, 16,07%), con un RONA de +2,36% (+4,00% contable) y un ROE negativo de -2,08%.',
    rubroYPrograma: 'Llaves de Negocio y Activos Intangibles — PROGRAMA E (PT-E)',
    afirmacionesCriticas: 'Medición (Recuperabilidad NIC 36) y Exposición',
    procedimientosAplicados:
      '• Involucramiento de especialistas en valuación para auditar el modelo de Flujos de Fondos Descontados (DCF) de la UGE Redes Personal ($12.774.695M), estresando la tasa WACC real (11,85%) y crecimiento a perpetuidad (PT-E2).\n• Inspección de resoluciones ENACOM de adjudicación del espectro 5G y prueba de activación de software NIC 38 (PT-E1 y PT-E3).',
    hallazgoVinculado:
      'Confirmado headroom positivo de $334.966M en la UGE Redes Personal y exigida la ampliación en Notas de la tabla de sensibilidad ante +100 bps en WACC (incluido como Cuestión Clave de Auditoría - KAM en el Informe Final).'
  },
  {
    alertaAnalitica:
      '4. Salto del +43,60% en Préstamos Totales ($5.436.615M en Nota 14), suba del Endeudamiento Total a 1,38x y del Endeudamiento Financiero a 0,78x (Apalancamiento Total 2,38x y Neto 1,78x), junto a Costos Financieros de -$748.840M (Nota 26).',
    rubroYPrograma: 'Préstamos y Deuda Financiera — PROGRAMA C (PT-C)',
    afirmacionesCriticas: 'Medición (Valuación Moneda Extranjera y TIE), Integridad y Exposición',
    procedimientosAplicados:
      '• Circularización directa al 100% de los bancos acreedores, organismos multilaterales (IFC/BID/Finnvera) y Caja de Valores S.A. (PT-C1).\n• Recálculo independiente del 100% de la deuda en moneda extranjera (US$ 3.736,5M) al TC vendedor BNA $/US$ 1.455,00 al 31/12/2025 y devengamiento por tasa efectiva (PT-C3).\n• Verificación de ratios de resguardo (Repago en EBITDA = 2,15x; Cobertura EBITDA/Intereses = 3,37x) y apertura de vencimientos (PT-C4).',
    hallazgoVinculado:
      'Valuación en USD conforme; identificada diferencia menor en gastos de emisión por TIE de $3.120M (trasladada como partida no ajustada PAE-NC-01 por ser inferior al umbral PAE de $8.311M).'
  },
  {
    alertaAnalitica:
      '5. Expansión de Ventas del +53,02% ($8.328.814M en Nota 24), mejora de la Rotación del Activo de 0,38x a 0,50x y Margen EBITDA de 30,32%, junto al estiramiento de Días de Proveedores a 69,74 días y aumento de Provisiones (+654,47% en Nota 20).',
    rubroYPrograma: 'Ingresos por Servicios y Costos — PROGRAMA D (PT-D)',
    afirmacionesCriticas: 'Integridad, Propiedad y Exposición (NIIF 15 Principal vs. Agente)',
    procedimientosAplicados:
      '• Prueba analítica sustantiva global cruzando parque activo de abonados (móvil, banda ancha, Flow) por ARPU mensual reexpresado por IPC (PT-D1).\n• Auditoría de logs de interfaces Legacy ex-Cablevisión vs. SAP y tasación de CDRs (PT-D2).\n• Revisión de contratos de plataformas de streaming de terceros facturadas en paquetes Flow bajo NIIF 15 (PT-D3).',
    hallazgoVinculado:
      'Detectado Ajuste de Reclasificación AJ-04 por $11.240M para netear ingresos de streaming cobrados por cuenta y orden de terceros contra Costos de Programación y Contenido.'
  }
];

export default function AnalisisEstadosContablesView({ onNavigate, subTarget, subTargetTick }) {
  const [vistaActiva, setVistaActiva] = useState('esp'); // 'esp' | 'er' | 'graficas' | 'ratios' | 'vinculacion'
  const [filtroBloqueRatio, setFiltroBloqueRatio] = useState('todos'); // 'todos' | 'ganamos' | 'dinero' | 'inversion' | 'financiacion' | 'rentabilidad'
  const [mostrarCalculoMatriz, setMostrarCalculoMatriz] = useState(true);

  useEffect(() => {
    if (subTarget && ['esp', 'er', 'graficas', 'ratios', 'vinculacion'].includes(subTarget)) {
      setVistaActiva(subTarget);
    }
  }, [subTarget, subTargetTick]);

  return (
    <div className="space-y-6">
      {/* Cabecera Principal */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded-md text-xs font-extrabold bg-teal-700 text-white">
                ETAPA 1C — REVISIÓN ANALÍTICA PRELIMINAR (FUENTE OFICIAL EECC CONSOLIDADOS TELECOM S.A.)
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-lime-100 text-lime-800 border border-lime-300">
                Cifras Exactas del Balance PDF (Nota 1.d - Millones de $ Constantes)
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-2">
              Análisis Horizontal, Análisis Vertical, Gráficas de Variación y Ratios Financieros
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Elaborado sobre los <strong>Estados de Situación Financiera Consolidados (31/12/2025 vs. 31/12/2024)</strong> y los <strong>Estados de Resultados Consolidados (2025, 2024 y 2023)</strong> de Telecom Argentina S.A.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0 no-print">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 cursor-pointer"
            >
              <Printer className="w-4 h-4" /> Imprimir Análisis Financiero
            </button>
          </div>
        </div>

        {/* Cinta de Indicadores Clave Oficiales del Balance Consolidado */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-4">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-[10px] font-bold uppercase text-slate-400 block">
              Total del Activo (2025 vs 2024)
            </span>
            <span className="text-sm font-extrabold text-slate-900 font-mono">
              $16.622.552 M
            </span>
            <span className="text-[10px] text-teal-700 font-bold block">
              +15,48% (2024: $14.393.744M)
            </span>
          </div>

          <div className="p-3 rounded-xl bg-rose-50/70 border border-rose-200">
            <span className="text-[10px] font-bold uppercase text-rose-700 block">
              Alerta H/V: Créditos x Ventas (N.5)
            </span>
            <span className="text-sm font-extrabold text-rose-900 font-mono">
              +105,25% ($799.188M)
            </span>
            <span className="text-[10px] text-rose-700 font-semibold block">
              2024: $389.375M • DSO: 35,1 días
            </span>
          </div>

          <div className="p-3 rounded-xl bg-teal-50/70 border border-teal-200">
            <span className="text-[10px] font-bold uppercase text-teal-800 block">
              PP&E (N.9) + Llaves (N.8) + Intang. (N.10)
            </span>
            <span className="text-sm font-extrabold text-teal-950 font-mono">
              83,65% del Activo
            </span>
            <span className="text-[10px] text-teal-700 font-semibold block">
              $6.789.118M + $4.443.998M + $2.671.525M
            </span>
          </div>

          <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200">
            <span className="text-[10px] font-bold uppercase text-amber-800 block">
              Total Pasivo vs. Patrimonio
            </span>
            <span className="text-sm font-extrabold text-amber-950 font-mono">
              57,99% vs. 42,01%
            </span>
            <span className="text-[10px] text-amber-800 font-semibold block">
              Endeudamiento: 1,38x (2024: 0,98x)
            </span>
          </div>

          <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200">
            <span className="text-[10px] font-bold uppercase text-emerald-800 block">
              Ventas (+53,0%) y EBITDA (+64,8%)
            </span>
            <span className="text-sm font-extrabold text-emerald-950 font-mono">
              $8.328.814M | $2.525.535M
            </span>
            <span className="text-[10px] text-emerald-700 font-semibold block">
              EBIT 2025: +$450.047M (+5,40%)
            </span>
          </div>

          <div className="p-3 rounded-xl bg-indigo-50/70 border border-indigo-200">
            <span className="text-[10px] font-bold uppercase text-indigo-700 block">
              Resultado Neto 2025 (Nota 26)
            </span>
            <span className="text-sm font-extrabold text-indigo-950 font-mono">
              $(145.304) M (-1,74%)
            </span>
            <span className="text-[10px] text-indigo-700 font-semibold block">
              Por Costos Financieros $(748.840)M
            </span>
          </div>
        </div>

        {/* Sub-pestañas de navegación interna */}
        <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-slate-100 no-print">
          {[
            { id: 'esp', label: '1. Estado de Situación Financiera (H/V)', icon: Scale },
            { id: 'er', label: '2. Estado de Resultados 2025-2024-2023 (H/V)', icon: TrendingUp },
            { id: 'graficas', label: '3. Gráficas de Variación y Estructura', icon: BarChart3 },
            { id: 'ratios', label: '4. Ratios Financieros y Matriz (27)', icon: Calculator },
            { id: 'vinculacion', label: '5. Conclusión y Pruebas a Aplicar (A-E)', icon: FileSearch }
          ].map((tab) => {
            const Icon = tab.icon;
            const active = vistaActiva === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setVistaActiva(tab.id)}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                  active
                    ? 'bg-teal-700 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* =====================================================================
          SECCIÓN 1: ESTADO DE SITUACIÓN FINANCIERA CONSOLIDADO (ESP - H/V)
         ===================================================================== */}
      {vistaActiva === 'esp' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-200">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-teal-700">
                ESTADOS DE SITUACIÓN FINANCIERA CONSOLIDADOS AL 31 DE DICIEMBRE DE 2025 Y 2024
              </span>
              <h3 className="text-lg font-extrabold text-slate-900">
                Análisis Vertical (% sobre Total del Activo) y Análisis Horizontal (Variación $ y % 2025 vs. 2024)
              </h3>
            </div>
            <span className="text-xs font-mono bg-slate-100 px-3 py-1 rounded-lg text-slate-700 font-bold">
              En millones de pesos constantes — Nota 1.d
            </span>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-900 text-white font-bold uppercase">
                  <th className="py-3 px-3">Rubro del Estado de Situación Financiera</th>
                  <th className="py-3 px-2 text-center">Nota</th>
                  <th className="py-3 px-3 text-right bg-teal-950">31/12/2025 ($M)</th>
                  <th className="py-3 px-2.5 text-right bg-teal-900">AV 2025 (%)</th>
                  <th className="py-3 px-3 text-right">31/12/2024 ($M)</th>
                  <th className="py-3 px-2.5 text-right">AV 2024 (%)</th>
                  <th className="py-3 px-3 text-right bg-indigo-950">Var. Abs. ($M)</th>
                  <th className="py-3 px-2.5 text-right bg-indigo-900">Var. Rel. (%)</th>
                  <th className="py-3 px-3">Lectura Analítica y Riesgo de Auditoría</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {espFilas.map((f) => {
                  if (f.esEncabezadoSeccion) {
                    return (
                      <tr key={f.id} className="bg-slate-200/80 text-slate-900 font-extrabold uppercase tracking-wider">
                        <td colSpan={9} className="py-2 px-3 text-[11px]">
                          {f.rubro}
                        </td>
                      </tr>
                    );
                  }

                  const av2025 = (f.s2025 / ACTIVO_TOTAL_2025) * 100;
                  const av2024 = (f.s2024 / ACTIVO_TOTAL_2024) * 100;
                  const varAbs = f.s2025 - f.s2024;
                  const varRel = f.s2024 !== 0 ? ((f.s2025 - f.s2024) / f.s2024) * 100 : null;

                  return (
                    <tr
                      key={f.id}
                      className={
                        f.esTotalPrincipal
                          ? 'bg-slate-900 text-white font-extrabold'
                          : f.esSubtotal
                          ? 'bg-teal-50/80 font-extrabold text-slate-900 border-t-2 border-slate-300'
                          : 'hover:bg-slate-50 text-slate-700'
                      }
                    >
                      <td className="py-2.5 px-3">
                        <div className="flex items-center gap-2">
                          <span>{f.rubro}</span>
                          {f.programaVinculado && (
                            <span className="px-1.5 py-0.5 rounded text-[10px] font-extrabold bg-teal-100 text-teal-800 border border-teal-300 shrink-0">
                              {f.programaVinculado}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-2.5 px-2 text-center font-mono text-[11px] opacity-75">
                        {f.nota}
                      </td>
                      <td className="py-2.5 px-3 text-right font-mono font-bold">
                        {f.s2025 === 0 ? '-' : f.s2025.toLocaleString('es-AR')}
                      </td>
                      <td className="py-2.5 px-2.5 text-right font-mono font-bold text-teal-700">
                        <span className={f.esTotalPrincipal ? 'text-lime-300' : ''}>
                          {av2025.toFixed(2)}%
                        </span>
                      </td>
                      <td className="py-2.5 px-3 text-right font-mono">
                        {f.s2024 === 0 ? '-' : f.s2024.toLocaleString('es-AR')}
                      </td>
                      <td className="py-2.5 px-2.5 text-right font-mono">
                        {av2024.toFixed(2)}%
                      </td>
                      <td
                        className={`py-2.5 px-3 text-right font-mono font-bold ${
                          f.esTotalPrincipal
                            ? 'text-lime-300'
                            : varAbs > 0
                            ? 'text-emerald-700'
                            : varAbs < 0
                            ? 'text-rose-600'
                            : ''
                        }`}
                      >
                        {varAbs > 0 ? '+' : ''}
                        {varAbs.toLocaleString('es-AR')}
                      </td>
                      <td className="py-2.5 px-2.5 text-right font-mono font-extrabold">
                        {varRel === null ? (
                          <span className="px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 text-[10px]">
                            NUEVO
                          </span>
                        ) : (
                          <span
                            className={`px-1.5 py-0.5 rounded ${
                              f.esTotalPrincipal
                                ? 'bg-white/10 text-white'
                                : f.alerta === 'Crítica' && varRel > 40
                                ? 'bg-rose-100 text-rose-800 border border-rose-300'
                                : varRel > 0
                                ? 'bg-emerald-50 text-emerald-800'
                                : 'bg-rose-50 text-rose-700'
                            }`}
                          >
                            {varRel > 0 ? '+' : ''}
                            {varRel.toFixed(2)}%
                          </span>
                        )}
                      </td>
                      <td
                        className={`py-2.5 px-3 text-[11px] leading-relaxed ${
                          f.esTotalPrincipal ? 'text-slate-300' : 'text-slate-600'
                        }`}
                      >
                        {f.lectura}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Conclusión Técnica del Análisis Patrimonial */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-teal-950 to-slate-900 text-white space-y-3">
            <div className="flex items-center gap-2 text-lime-400 font-extrabold text-xs uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" /> Conclusión Técnica del Análisis Horizontal y Vertical Patrimonial (ESP)
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs leading-relaxed text-slate-200">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <strong className="text-white block mb-1">
                  1. Estructura Vertical Capital-Intensiva (88,97% Activo No Corriente):
                </strong>
                Tres rubros tecnológicos concentran el <strong>83,65% del Activo Total ($13.904.641M)</strong>: <strong>PP&E Nota 9 (40,84% = $6.789.118M)</strong>, <strong>Llaves de Negocio Nota 8 (26,73% = $4.443.998M)</strong> y <strong>Activos Intangibles Nota 10 (16,07% = $2.671.525M)</strong> —que sumados a los Derechos de Uso Nota 11 ($727.288M, 4,38%) alcanzan el <strong>88,03%</strong>—. Cualquier omisión de baja por obsolescencia o error en la tasa de descuento WACC del Test de Deterioro distorsiona materialmente el Balance.
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <strong className="text-lime-300 block mb-1">
                  2. Alerta Horizontal en Créditos por Ventas (+105,25%):
                </strong>
                El Activo Corriente pasa de $993.009M (6,90%) a $1.833.812M (11,03%), creciendo un <strong>+84,67%</strong>. El principal motor es el salto del <strong>+105,25% en Créditos por Ventas Corrientes (Nota 5: de $389.375M a $799.188M netos de $(270.919)M de Previsión)</strong> frente al +53,02% de las Ventas. Esta brecha responde a la consolidación del 100% del stock de cartera de <strong>TMA ($421.919M, adquirida el 24/02/2025)</strong> contra solo 10 meses de sus ventas en el ER, sumado al deterioro de cobrabilidad y desfasajes de corte al 31/12/2025.
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <strong className="text-amber-300 block mb-1">
                  3. Desplazamiento hacia Financiación Pasiva (57,99% Pasivo):
                </strong>
                En 2024 el Patrimonio Neto superaba al Pasivo (50,58% vs. 49,42%), pero en 2025 el <strong>Pasivo Total creció +35,52% (hasta $9.639.244M = 57,99% del Activo)</strong> impulsado por los <strong>Préstamos Totales ($5.436.615M, +43,60% en Nota 14)</strong>, las <strong>Cuentas por Pagar Corrientes ($1.108.820M, +89,55% en Nota 13)</strong> y las <strong>Provisiones para Contingencias ($563.085M totales, +654,47% en Nota 20)</strong>.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          SECCIÓN 2: ESTADO DE RESULTADOS CONSOLIDADO (2025 vs. 2024 vs. 2023)
         ===================================================================== */}
      {vistaActiva === 'er' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-200">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-teal-700">
                ESTADOS DE RESULTADOS CONSOLIDADOS (EJERCICIOS 2025, 2024 Y 2023)
              </span>
              <h3 className="text-lg font-extrabold text-slate-900">
                Análisis Vertical (% sobre Ventas = 100%) y Análisis Horizontal (2025 vs. 2024 y Serie 2023)
              </h3>
            </div>
            <span className="text-xs font-mono bg-slate-100 px-3 py-1 rounded-lg text-slate-700 font-bold">
              En millones de pesos constantes — Nota 1.d
            </span>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-900 text-white font-bold uppercase">
                  <th className="py-3 px-3">Concepto del Estado de Resultados</th>
                  <th className="py-3 px-2 text-center">Nota</th>
                  <th className="py-3 px-3 text-right bg-teal-950">2025 ($M)</th>
                  <th className="py-3 px-2.5 text-right bg-teal-900">AV 2025</th>
                  <th className="py-3 px-3 text-right">2024 ($M)</th>
                  <th className="py-3 px-2.5 text-right">AV 2024</th>
                  <th className="py-3 px-3 text-right text-slate-300">2023 ($M)</th>
                  <th className="py-3 px-3 text-right bg-indigo-950">Var. 25/24 ($M)</th>
                  <th className="py-3 px-2.5 text-right bg-indigo-900">Var. 25/24 (%)</th>
                  <th className="py-3 px-3">Interpretación y Foco de Auditoría</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {erFilas.map((f) => {
                  const av2025 = (f.s2025 / VENTAS_2025) * 100;
                  const av2024 = (f.s2024 / VENTAS_2024) * 100;
                  const varAbs = f.s2025 - f.s2024;
                  // Para costos (negativos en ambos años), calculamos la variación porcentual de la magnitud del gasto/ingreso
                  const mismoSignoNegativo = f.s2025 < 0 && f.s2024 < 0;
                  const varRel = mismoSignoNegativo
                    ? ((Math.abs(f.s2025) - Math.abs(f.s2024)) / Math.abs(f.s2024)) * 100
                    : ((f.s2025 - f.s2024) / Math.abs(f.s2024)) * 100;

                  const formatoContable = (n) =>
                    n < 0 ? `(${Math.abs(n).toLocaleString('es-AR')})` : n.toLocaleString('es-AR');

                  return (
                    <tr
                      key={f.id}
                      className={
                        f.esTotalPrincipal
                          ? 'bg-slate-900 text-white font-extrabold'
                          : f.esSubtotal
                          ? 'bg-teal-50/80 font-extrabold text-slate-900 border-t-2 border-slate-300'
                          : 'hover:bg-slate-50 text-slate-700'
                      }
                    >
                      <td className="py-2.5 px-3">
                        <div className="flex items-center gap-2">
                          <span>{f.rubro}</span>
                          {f.programaVinculado && (
                            <span className="px-1.5 py-0.5 rounded text-[10px] font-extrabold bg-teal-100 text-teal-800 border border-teal-300 shrink-0">
                              {f.programaVinculado}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-2.5 px-2 text-center font-mono text-[11px] opacity-75">
                        {f.nota}
                      </td>
                      <td className="py-2.5 px-3 text-right font-mono font-bold">
                        {formatoContable(f.s2025)}
                      </td>
                      <td className="py-2.5 px-2.5 text-right font-mono font-bold text-teal-700">
                        <span className={f.esTotalPrincipal ? 'text-lime-300' : ''}>
                          {av2025 > 0 ? '+' : ''}
                          {av2025.toFixed(2)}%
                        </span>
                      </td>
                      <td className="py-2.5 px-3 text-right font-mono">
                        {formatoContable(f.s2024)}
                      </td>
                      <td className="py-2.5 px-2.5 text-right font-mono">
                        {av2024 > 0 ? '+' : ''}
                        {av2024.toFixed(2)}%
                      </td>
                      <td className="py-2.5 px-3 text-right font-mono opacity-75">
                        {formatoContable(f.s2023)}
                      </td>
                      <td
                        className={`py-2.5 px-3 text-right font-mono font-bold ${
                          f.esTotalPrincipal
                            ? 'text-lime-300'
                            : varAbs > 0
                            ? 'text-emerald-700'
                            : 'text-rose-600'
                        }`}
                      >
                        {varAbs > 0 ? '+' : ''}
                        {varAbs.toLocaleString('es-AR')}
                      </td>
                      <td className="py-2.5 px-2.5 text-right font-mono font-extrabold">
                        <span
                          className={`px-1.5 py-0.5 rounded ${
                            f.esTotalPrincipal
                              ? 'bg-white/10 text-white'
                              : 'bg-slate-100 text-slate-800'
                          }`}
                        >
                          {varRel > 0 ? '+' : ''}
                          {varRel.toFixed(2)}%
                        </span>
                      </td>
                      <td
                        className={`py-2.5 px-3 text-[11px] leading-relaxed ${
                          f.esTotalPrincipal ? 'text-slate-300' : 'text-slate-600'
                        }`}
                      >
                        {f.lectura}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Aperturas Adicionales del Pie del Estado de Resultados Oficial */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-extrabold uppercase text-slate-500 block">
                Resultado Neto Atribuible a Sociedad Controlante
              </span>
              <div className="mt-1 flex items-baseline justify-between">
                <strong className="text-base font-mono text-rose-700">2025: $(170.006) M</strong>
                <span className="font-mono text-slate-600">2024: $1.331.805 M | 2023: $(738.306) M</span>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-extrabold uppercase text-slate-500 block">
                Resultado Neto Atribuible a Accionistas No Controlantes
              </span>
              <div className="mt-1 flex items-baseline justify-between">
                <strong className="text-base font-mono text-emerald-700">2025: $24.702 M</strong>
                <span className="font-mono text-slate-600">2024: $27.425 M | 2023: $23.040 M</span>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-extrabold uppercase text-slate-500 block">
                Utilidad / (Pérdida) Neta por Acción — Básica y Diluida (Nota 3.t)
              </span>
              <div className="mt-1 flex items-baseline justify-between">
                <strong className="text-base font-mono text-rose-700">2025: $(78,94)</strong>
                <span className="font-mono text-slate-600">2024: $618,38 | 2023: $(342,81)</span>
              </div>
            </div>
          </div>

          {/* Conclusión Técnica del Estado de Resultados */}
          <div className="p-5 rounded-2xl bg-indigo-950 text-white space-y-2">
            <div className="flex items-center gap-2 text-lime-400 font-extrabold text-xs uppercase tracking-wider">
              <TrendingUp className="w-4 h-4" /> Conclusión Técnica de los Resultados (2025 vs. 2024 vs. 2023)
            </div>
            <p className="text-xs text-slate-200 leading-relaxed">
              El análisis evolutivo de los tres ejercicios revela que <strong>en 2025 Telecom Argentina S.A. alcanzó su mejor desempeño operativo real del trienio</strong>: las Ventas crecieron un <strong>+53,02% ($8.328.814M)</strong>, el EBITDA subió un <strong>+64,81% ($2.525.535M, margen del 30,32%)</strong> y la compañía logró revertir las pérdidas operativas de 2023 (<code>-$358.269M</code>) y 2024 (<code>-$192.676M</code>) para obtener una <strong>Utilidad de la Explotación (EBIT) positiva de +$450.047M (+5,40% sobre Ventas)</strong>. La razón por la cual la última línea arroja una <strong>pérdida neta de $(145.304)M (-1,74% de las Ventas)</strong> radica exclusivamente en la línea de <strong>Costos Financieros (Nota 26)</strong>, que pasó de una ganancia extraordinaria de <code>+$1.914.786M</code> en 2024 (por apreciación real del peso sobre la deuda en USD) a un costo negativo normalizado de <code>$(748.840)M</code> en 2025.
            </p>
          </div>
        </div>
      )}

      {/* =====================================================================
          SECCIÓN 3: GRÁFICAS INTERACTIVAS DE COMPOSICIÓN VERTICAL Y VARIACIÓN HORIZONTAL
         ===================================================================== */}
      {vistaActiva === 'graficas' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Gráfica 1: Estructura Vertical del Balance 2025 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5">
            <div>
              <span className="text-[11px] font-extrabold uppercase text-teal-700">
                GRÁFICA 1 — ANÁLISIS VERTICAL DEL BALANCE CONSOLIDADO (31/12/2025)
              </span>
              <h3 className="text-base font-extrabold text-slate-900 mt-0.5">
                Estructura Patrimonial: Inversión (Activo) vs. Financiación (Pasivo + Patrimonio)
              </h3>
              <p className="text-xs text-slate-500">
                Base 100% = $16.622.552 millones (Nota 1.d)
              </p>
            </div>

            {/* Barra apilada ACTIVO 2025 */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-800">
                <span>COMPOSICIÓN DEL ACTIVO 2025 ($16.622.552 M)</span>
                <span className="text-teal-700">11,03% Corriente | 88,97% No Corriente</span>
              </div>
              <div className="h-9 w-full rounded-xl overflow-hidden flex shadow-inner border border-slate-200">
                <div
                  style={{ width: '40.84%' }}
                  className="bg-teal-700 text-white text-[10px] font-extrabold flex items-center justify-center"
                  title="PP&E (Nota 9): $6.789.118M (40,84%)"
                >
                  PP&E 40,84%
                </div>
                <div
                  style={{ width: '26.73%' }}
                  className="bg-indigo-600 text-white text-[10px] font-extrabold flex items-center justify-center"
                  title="Llaves de Negocio (Nota 8): $4.443.998M (26,73%)"
                >
                  Llaves 26,73%
                </div>
                <div
                  style={{ width: '16.07%' }}
                  className="bg-cyan-600 text-white text-[10px] font-extrabold flex items-center justify-center"
                  title="Activos Intangibles (Nota 10): $2.671.525M (16,07%)"
                >
                  Intang. 16,07%
                </div>
                <div
                  style={{ width: '5.33%' }}
                  className="bg-slate-500 text-white text-[9px] font-extrabold flex items-center justify-center"
                  title="Derechos de Uso (4,38%) + Otros ANC (0,95%)"
                >
                  5,3%
                </div>
                <div
                  style={{ width: '11.03%' }}
                  className="bg-amber-500 text-white text-[10px] font-extrabold flex items-center justify-center"
                  title="Activo Corriente: $1.833.812M (11,03%)"
                >
                  AC 11,0%
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px] pt-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-xs bg-teal-700 shrink-0" />
                  <span><strong>PP&E (N.9):</strong> 40,84% ($6.789.118M)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-xs bg-indigo-600 shrink-0" />
                  <span><strong>Llaves (N.8):</strong> 26,73% ($4.443.998M)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-xs bg-cyan-600 shrink-0" />
                  <span><strong>Intangibles (N.10):</strong> 16,07% ($2.671.525M)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-xs bg-slate-500 shrink-0" />
                  <span><strong>Der. Uso (N.11) y Otros ANC:</strong> 5,33% ($885.099M)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-xs bg-amber-500 shrink-0" />
                  <span><strong>Activo Corriente:</strong> 11,03% ($1.833.812M)</span>
                </div>
              </div>
            </div>

            {/* Barra apilada PASIVO + PATRIMONIO 2025 */}
            <div className="space-y-2 pt-3 border-t border-slate-100">
              <div className="flex justify-between text-xs font-bold text-slate-800">
                <span>ESTRUCTURA DE FINANCIACIÓN 2025 ($16.622.552 M)</span>
                <span className="text-rose-700">57,99% Pasivo Total | 42,01% Patrimonio</span>
              </div>
              <div className="h-9 w-full rounded-xl overflow-hidden flex shadow-inner border border-slate-200">
                <div
                  style={{ width: '23.09%' }}
                  className="bg-rose-600 text-white text-[10px] font-extrabold flex items-center justify-center"
                  title="Pasivo Corriente: $3.838.300M (23,09%)"
                >
                  Pas. Cte 23,09%
                </div>
                <div
                  style={{ width: '22.98%' }}
                  className="bg-amber-600 text-white text-[10px] font-extrabold flex items-center justify-center"
                  title="Préstamos No Corrientes (Nota 14): $3.820.071M (22,98%)"
                >
                  Prést. NC 22,98%
                </div>
                <div
                  style={{ width: '11.92%' }}
                  className="bg-orange-400 text-white text-[10px] font-extrabold flex items-center justify-center"
                  title="Imp. Diferido NC (7,10%) + Provisiones y Otros PNC (4,82%)"
                >
                  Otros PNC 11,9%
                </div>
                <div
                  style={{ width: '42.01%' }}
                  className="bg-emerald-600 text-white text-[10px] font-extrabold flex items-center justify-center"
                  title="Patrimonio Neto Total: $6.983.308M (42,01%)"
                >
                  Patrimonio Neto 42,01%
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-xs bg-rose-600 shrink-0" />
                  <span><strong>Pasivo Corriente:</strong> 23,09% ($3.838.300M)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-xs bg-amber-600 shrink-0" />
                  <span><strong>Préstamos No Ctes (N.14):</strong> 22,98% ($3.820.071M)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-xs bg-orange-400 shrink-0" />
                  <span><strong>Imp. Diferido y Otros PNC:</strong> 11,92% ($1.980.873M)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-xs bg-emerald-600 shrink-0" />
                  <span><strong>Total Patrimonio (ECP):</strong> 42,01% ($6.983.308M)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Gráfica 2: Tasas de Variación Horizontal 2025 vs 2024 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
            <div>
              <span className="text-[11px] font-extrabold uppercase text-indigo-700">
                GRÁFICA 2 — ANÁLISIS HORIZONTAL DE VARIACIONES CRÍTICAS (2025 vs. 2024)
              </span>
              <h3 className="text-base font-extrabold text-slate-900 mt-0.5">
                Comparativa de Tasas de Variación Real (%) y Detección de Asimetrías
              </h3>
              <p className="text-xs text-slate-500">
                Referencia operativa: Crecimiento real de Ventas = <strong>+53,02%</strong>
              </p>
            </div>

            <div className="space-y-3">
              {[
                {
                  label: 'Provisiones Totales Cte + No Cte (Nota 20: $563.085M vs $74.633M)',
                  pct: '+654,47%',
                  width: 100,
                  color: 'bg-rose-600',
                  badge: 'Alerta Contingencias'
                },
                {
                  label: 'Créditos por Ventas Corrientes (Nota 5: $799.188M vs $389.375M)',
                  pct: '+105,25%',
                  width: 82,
                  color: 'bg-rose-500',
                  badge: 'Duplica ritmo de Ventas'
                },
                {
                  label: 'Cuentas por Pagar Comerciales Ctes (Nota 13: $1.108.820M vs $584.980M)',
                  pct: '+89,55%',
                  width: 72,
                  color: 'bg-amber-500',
                  badge: 'Financiación CAPEX'
                },
                {
                  label: 'Utilidad antes de D, A & D — EBITDA ($2.525.535M vs $1.532.381M)',
                  pct: '+64,81%',
                  width: 60,
                  color: 'bg-emerald-600',
                  badge: 'Mejora Margen Operativo'
                },
                {
                  label: 'Ventas Netas Consolidadas (Nota 24: $8.328.814M vs $5.442.958M)',
                  pct: '+53,02%',
                  width: 52,
                  color: 'bg-teal-600',
                  badge: 'Benchmark Operativo'
                },
                {
                  label: 'Préstamos Financieros Totales Cte+NC (Nota 14: $5.436.615M vs $3.785.980M)',
                  pct: '+43,60%',
                  width: 44,
                  color: 'bg-indigo-600',
                  badge: 'Programa C (PT-C)'
                },
                {
                  label: 'Cargo por Deudores Incobrables en ER ($143.722M vs $112.102M)',
                  pct: '+28,21%',
                  width: 30,
                  color: 'bg-rose-400',
                  badge: 'Rezago vs Créditos (+105%)'
                },
                {
                  label: 'PP&E — Propiedad, Planta y Equipo (Nota 9: $6.789.118M vs $5.696.731M)',
                  pct: '+19,18%',
                  width: 22,
                  color: 'bg-cyan-600',
                  badge: 'Programa A (PT-A)'
                }
              ].map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-700 truncate pr-2">{item.label}</span>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 font-semibold">
                        {item.badge}
                      </span>
                      <span className="font-mono font-extrabold text-slate-900">{item.pct}</span>
                    </div>
                  </div>
                  <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${item.color}`}
                      style={{ width: `${item.width}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gráfica 3: Cascada Comparativa del Estado de Resultados (2025 vs 2024 vs 2023) */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs lg:col-span-2 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <span className="text-[11px] font-extrabold uppercase text-teal-700">
                  GRÁFICA 3 — EVOLUCIÓN TRIANUAL DE MÁRGENES DEL ESTADO DE RESULTADOS (2025 - 2024 - 2023)
                </span>
                <h3 className="text-base font-extrabold text-slate-900">
                  De las Ventas ($8.328.814M) al Resultado Neto ($(145.304)M): El Efecto Tijera Operativo vs. Financiero
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-xs">
              {[
                {
                  etapa: '1. Ventas Netas (Nota 24)',
                  v2025: '$8.328.814 M (100%)',
                  v2024: '$5.442.958 M (100%)',
                  v2023: '$5.898.611 M (100%)',
                  color: 'border-teal-500 bg-teal-50/50',
                  nota: 'Expansión real del +53,02% en 2025.'
                },
                {
                  etapa: '2. EBITDA (Antes de D, A & D)',
                  v2025: '$2.525.535 M (30,32%)',
                  v2024: '$1.532.381 M (28,15%)',
                  v2023: '$1.659.769 M (28,14%)',
                  color: 'border-emerald-500 bg-emerald-50/50',
                  nota: 'Mejora de +2,17 p.p. en margen operativo bruto.'
                },
                {
                  etapa: '3. D, A & D (Nota 25)',
                  v2025: '$(2.075.488) M (-24,92%)',
                  v2024: '$(1.725.057) M (-31,69%)',
                  v2023: '$(2.018.038) M (-34,21%)',
                  color: 'border-amber-500 bg-amber-50/50',
                  nota: 'Se diluye su peso sobre Ventas del 31,69% al 24,92%.'
                },
                {
                  etapa: '4. Resultado Operativo (EBIT)',
                  v2025: '+$450.047 M (+5,40%)',
                  v2024: '$(192.676) M (-3,54%)',
                  v2023: '$(358.269) M (-6,07%)',
                  color: 'border-lime-600 bg-lime-50/60',
                  nota: 'Primer EBIT positivo de los 3 ejercicios (+$642.723M vs 24).'
                },
                {
                  etapa: '5. Resultado Neto Final',
                  v2025: '$(145.304) M (-1,74%)',
                  v2024: '+$1.359.230 M (+24,97%)',
                  v2023: '$(715.266) M (-12,13%)',
                  color: 'border-rose-500 bg-rose-50/50',
                  nota: 'Impactado en 2025 por Costos Financieros de $(748.840)M.'
                }
              ].map((card, i) => (
                <div key={i} className={`p-4 rounded-xl border-l-4 border border-slate-200 ${card.color} space-y-1.5`}>
                  <span className="font-extrabold text-slate-900 block">{card.etapa}</span>
                  <div className="font-mono font-extrabold text-sm text-slate-950">2025: {card.v2025}</div>
                  <div className="font-mono text-[11px] text-slate-600">2024: {card.v2024}</div>
                  <div className="font-mono text-[11px] text-slate-500">2023: {card.v2023}</div>
                  <p className="text-[11px] text-slate-700 pt-1 border-t border-slate-200/80">{card.nota}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          SECCIÓN 4: TABLERO DE LOS 27 RATIOS FINANCIEROS + MATRIZ DE CÁTEDRA AL FINAL
         ===================================================================== */}
      {vistaActiva === 'ratios' && (
        <div className="space-y-6">
          {/* Cabecera y Filtros de los 27 Ratios */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-teal-700">
                  INDICADORES DE RESULTADO, GENERACIÓN DE DINERO, INVERSIÓN, FINANCIACIÓN Y RENTABILIDAD (2025 vs. 2024)
                </span>
                <h3 className="text-lg font-extrabold text-slate-900">
                  27 Ratios Financieros con sus Fórmulas, Interpretación y Matriz Consolidada Final
                </h3>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
                <a
                  href="#matriz-ratios-catedra"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-colors"
                >
                  Ir a la Matriz Consolidada (al final) ↓
                </a>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
                  ● Fortaleza / Mejora
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-100 text-amber-800">
                  ● Monitoreo Técnico
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-100 text-rose-800">
                  ● Alerta de Auditoría
                </span>
              </div>
            </div>

            {/* Filtros por Pregunta Clave del Negocio */}
            <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-100 no-print">
              {[
                { id: 'todos', label: 'Todos los Ratios (27)', color: 'bg-slate-900 text-white' },
                { id: 'ganamos', label: '1. ¿Ganamos o perdimos? (4)', color: 'bg-blue-700 text-white' },
                { id: 'dinero', label: '2. ¿Hay suficiente dinero? (4)', color: 'bg-emerald-700 text-white' },
                { id: 'inversion', label: '3A. Inversión y Giro Operativo (9)', color: 'bg-slate-700 text-white' },
                { id: 'financiacion', label: '3B. Financiación y Solvencia (8)', color: 'bg-indigo-700 text-white' },
                { id: 'rentabilidad', label: '4. ¿Cuál es la rentabilidad? (2)', color: 'bg-orange-700 text-white' }
              ].map((b) => {
                const active = filtroBloqueRatio === b.id;
                return (
                  <button
                    key={b.id}
                    onClick={() => setFiltroBloqueRatio(b.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${
                      active
                        ? b.color
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {b.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grilla de Tarjetas Explicativas de los 27 Ratios */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {ratiosFinancieros
              .filter((r) => filtroBloqueRatio === 'todos' || r.bloqueId === filtroBloqueRatio)
              .map((r, idx) => {
                const badgeStyles =
                  r.semaforo === 'emerald'
                    ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                    : r.semaforo === 'red'
                    ? 'bg-rose-100 text-rose-800 border-rose-300'
                    : 'bg-amber-100 text-amber-800 border-amber-300';

                const bloqueTagColor =
                  r.bloqueId === 'ganamos'
                    ? 'bg-blue-100 text-blue-900 border-blue-300'
                    : r.bloqueId === 'dinero'
                    ? 'bg-emerald-100 text-emerald-900 border-emerald-300'
                    : r.bloqueId === 'rentabilidad'
                    ? 'bg-orange-100 text-orange-900 border-orange-300'
                    : 'bg-slate-200 text-slate-900 border-slate-300';

                return (
                  <div
                    key={r.id}
                    className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <span
                            className={`inline-block px-2 py-0.5 rounded text-[10px] font-extrabold border mb-1 ${bloqueTagColor}`}
                          >
                            {r.preguntaClave}
                          </span>
                          <h4 className="text-base font-extrabold text-slate-900">
                            {ratiosFinancieros.indexOf(r) + 1}. {r.nombre}
                          </h4>
                        </div>
                        <span
                          className={`px-2.5 py-1 rounded-full text-xs font-extrabold border shrink-0 ${badgeStyles}`}
                        >
                          2025: {r.valor2025}
                        </span>
                      </div>

                      {/* Caja de Fórmula y Reemplazo Numérico */}
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 text-xs">
                        <div className="flex flex-wrap items-center justify-between gap-1">
                          <span className="font-bold text-slate-500">Fórmula:</span>
                          <code className="font-mono font-extrabold text-teal-900 bg-teal-100/70 px-2 py-0.5 rounded text-[11px]">
                            {r.formula}
                          </code>
                        </div>
                        <div className="flex flex-wrap items-center justify-between gap-1 pt-1 border-t border-slate-200/60">
                          <span className="font-bold text-slate-500">Cálculo 2025:</span>
                          <span className="font-mono font-bold text-slate-800 text-[11px]">
                            {r.calculo2025}
                          </span>
                        </div>
                        {r.calculo2024 && (
                          <div className="flex flex-wrap items-center justify-between gap-1">
                            <span className="font-bold text-slate-500">Cálculo 2024:</span>
                            <span className="font-mono text-slate-600 text-[11px]">
                              {r.calculo2024}
                            </span>
                          </div>
                        )}
                        <div className="flex items-center justify-between pt-1 border-t border-slate-200/80 text-[11px]">
                          <span className="text-slate-500">
                            Valor 2024: <strong className="font-mono text-slate-900">{r.valor2024}</strong>
                          </span>
                          <span className="font-mono font-extrabold text-indigo-700">
                            Variación: {r.variacion}
                          </span>
                        </div>
                      </div>

                      {/* Qué representa el valor obtenido */}
                      <div className="text-xs text-slate-700 leading-relaxed">
                        <strong className="text-slate-900 block mb-0.5">
                          ¿Qué representa el valor obtenido (2025: {r.valor2025} | 2024: {r.valor2024})?
                        </strong>
                        {r.queRepresenta}
                      </div>
                    </div>

                    {/* Implicancia directa para el Auditor */}
                    <div className="p-3 rounded-xl bg-teal-50/60 border border-teal-200 text-xs text-teal-950">
                      <strong className="text-teal-800 uppercase text-[10px] tracking-wider block mb-0.5">
                        Impacto y Procedimiento de Auditoría Derivado:
                      </strong>
                      {r.impactoAuditoria}
                    </div>
                  </div>
                );
              })}
          </div>

          {/* =================================================================
              MATRIZ CONSOLIDADA AL FINAL DE LOS RATIOS (FORMATO EXACTO CAPTURA)
             ================================================================= */}
          <div
            id="matriz-ratios-catedra"
            className="bg-white rounded-2xl border-2 border-slate-800 p-6 shadow-md space-y-4 scroll-mt-20"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-3 border-b border-slate-200">
              <div>
                <span className="px-2.5 py-1 rounded-md text-xs font-extrabold bg-slate-900 text-white">
                  MATRIZ RESUMEN CONSOLIDADA DE LOS 27 RATIOS FINANCIEROS (TELECOM ARGENTINA S.A. — 2025 vs. 2024)
                </span>
                <h3 className="text-lg font-extrabold text-slate-900 mt-2">
                  Cuadro sinóptico por Pregunta Clave del Negocio, Ratio, Valores 2025 / 2024 y Fórmula
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Estructura idéntica a tu planilla de cátedra, agrupada en los 4 bloques de preguntas de negocio y calculada con las cifras oficiales en millones de pesos constantes.
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0 no-print">
                <button
                  onClick={() => setMostrarCalculoMatriz(!mostrarCalculoMatriz)}
                  className="px-3 py-1.5 rounded-xl bg-teal-50 text-teal-900 border border-teal-300 text-xs font-extrabold hover:bg-teal-100 cursor-pointer"
                >
                  {mostrarCalculoMatriz
                    ? 'Ver solo las 5 columnas de Excel'
                    : 'Mostrar columna con montos y criterios alternativos'}
                </button>
              </div>
            </div>

            <div className="overflow-x-auto rounded-xl border-2 border-slate-900">
              <table className="w-full border-collapse text-xs">
                <thead>
                  <tr className="bg-white text-slate-900 border-b-2 border-slate-900 font-extrabold">
                    <th className="py-2.5 px-3 text-center border-r border-slate-900 w-1/5">
                      Pregunta clave del negocio
                    </th>
                    <th className="py-2.5 px-3 text-left border-r border-slate-900 w-1/5">
                      Ratio
                    </th>
                    <th className="py-2.5 px-3 text-center border-r border-slate-900 w-28">
                      2025
                    </th>
                    <th className="py-2.5 px-3 text-center border-r border-slate-900 w-28">
                      2024
                    </th>
                    <th className="py-2.5 px-3 text-left border-r border-slate-900">
                      Fórmula
                    </th>
                    {mostrarCalculoMatriz && (
                      <th className="py-2.5 px-3 text-left bg-slate-100 text-slate-800">
                        Cifras EECC Usadas y Variantes de Criterio
                      </th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {/* BLOQUE 1: ¿Ganamos o perdimos? (4 filas - Azul claro) */}
                  {ratiosFinancieros.slice(0, 4).map((r, i) => (
                    <tr
                      key={r.id}
                      className={`bg-[#dbeafe] text-slate-900 ${
                        i === 3 ? 'border-b-2 border-slate-900' : 'border-b border-blue-200/80'
                      }`}
                    >
                      {i === 0 && (
                        <td
                          rowSpan={4}
                          className="py-3 px-3 text-center font-extrabold italic align-middle border-r border-slate-900 bg-[#dbeafe]"
                        >
                          ¿Ganamos o perdimos? (¿Cuánto es el resultado del período?)
                        </td>
                      )}
                      <td className="py-1.5 px-3 font-medium border-r border-slate-900">
                        {r.nombre}
                      </td>
                      <td className="py-1.5 px-3 text-center font-mono font-extrabold border-r border-slate-900">
                        {r.valor2025}
                      </td>
                      <td className="py-1.5 px-3 text-center font-mono font-bold border-r border-slate-900">
                        {r.valor2024}
                      </td>
                      <td className="py-1.5 px-3 border-r border-slate-900">
                        {r.formula}
                      </td>
                      {mostrarCalculoMatriz && (
                        <td className="py-1.5 px-3 text-[11px] bg-blue-50/70 text-slate-700 font-mono">
                          {r.notaAlternativaMatriz || r.calculo2025}
                        </td>
                      )}
                    </tr>
                  ))}

                  {/* BLOQUE 2: ¿Hay suficiente dinero? (4 filas - Verde claro) */}
                  {ratiosFinancieros.slice(4, 8).map((r, i) => (
                    <tr
                      key={r.id}
                      className={`bg-[#dcfce7] text-slate-900 ${
                        i === 3 ? 'border-b-2 border-slate-900' : 'border-b border-emerald-200/80'
                      }`}
                    >
                      {i === 0 && (
                        <td
                          rowSpan={4}
                          className="py-3 px-3 text-center font-extrabold italic align-middle border-r border-slate-900 bg-[#dcfce7]"
                        >
                          ¿Hay suficiente dinero? (¿Cuánto dinero genera el negocio?)
                        </td>
                      )}
                      <td className="py-1.5 px-3 font-medium border-r border-slate-900">
                        {r.nombre}
                      </td>
                      <td className="py-1.5 px-3 text-center font-mono font-extrabold border-r border-slate-900">
                        {r.valor2025}
                      </td>
                      <td className="py-1.5 px-3 text-center font-mono font-bold border-r border-slate-900">
                        {r.valor2024}
                      </td>
                      <td className="py-1.5 px-3 border-r border-slate-900">
                        {r.formula}
                      </td>
                      {mostrarCalculoMatriz && (
                        <td className="py-1.5 px-3 text-[11px] bg-emerald-50/70 text-slate-700 font-mono">
                          {r.notaAlternativaMatriz || r.calculo2025}
                        </td>
                      )}
                    </tr>
                  ))}

                  {/* BLOQUE 3: ¿Cuál es la inversión y la financiación? (17 filas - Gris con línea divisoria tras la fila 9) */}
                  {ratiosFinancieros.slice(8, 25).map((r, i) => (
                    <tr
                      key={r.id}
                      className={`bg-[#d4d4d8] text-slate-900 ${
                        i === 8
                          ? 'border-b-2 border-slate-900'
                          : i === 16
                          ? 'border-b-2 border-slate-900'
                          : 'border-b border-slate-300/90'
                      }`}
                    >
                      {i === 0 && (
                        <td
                          rowSpan={17}
                          className="py-3 px-3 text-center font-extrabold italic align-middle border-r border-slate-900 bg-[#d4d4d8]"
                        >
                          ¿Cuál es la inversión y la financiación? (¿Con qué recursos cuenta el negocio y de dónde los obtuvo?)
                        </td>
                      )}
                      <td className="py-1.5 px-3 font-medium border-r border-slate-900">
                        {r.nombre}
                      </td>
                      <td className="py-1.5 px-3 text-center font-mono font-extrabold border-r border-slate-900">
                        {r.valor2025}
                      </td>
                      <td className="py-1.5 px-3 text-center font-mono font-bold border-r border-slate-900">
                        {r.valor2024}
                      </td>
                      <td className="py-1.5 px-3 border-r border-slate-900">
                        {r.formula}
                      </td>
                      {mostrarCalculoMatriz && (
                        <td className="py-1.5 px-3 text-[11px] bg-slate-100 text-slate-700 font-mono">
                          {r.notaAlternativaMatriz || r.calculo2025}
                        </td>
                      )}
                    </tr>
                  ))}

                  {/* BLOQUE 4: ¿Cuál es la rentabilidad? (2 filas - Durazno/Naranja claro) */}
                  {ratiosFinancieros.slice(25, 27).map((r, i) => (
                    <tr
                      key={r.id}
                      className={`bg-[#ffedd5] text-slate-900 ${
                        i === 1 ? 'border-b-2 border-slate-900' : 'border-b border-orange-200/80'
                      }`}
                    >
                      {i === 0 && (
                        <td
                          rowSpan={2}
                          className="py-3 px-3 text-center font-extrabold italic align-middle border-r border-slate-900 bg-[#ffedd5]"
                        >
                          ¿Cuál es la rentabilidad? (¿Cuál es el rendimiento del negocio?)
                        </td>
                      )}
                      <td className="py-1.5 px-3 font-medium border-r border-slate-900">
                        {r.nombre}
                      </td>
                      <td className="py-1.5 px-3 text-center font-mono font-extrabold border-r border-slate-900">
                        {r.valor2025}
                      </td>
                      <td className="py-1.5 px-3 text-center font-mono font-bold border-r border-slate-900">
                        {r.valor2024}
                      </td>
                      <td className="py-1.5 px-3 border-r border-slate-900">
                        {r.formula}
                      </td>
                      {mostrarCalculoMatriz && (
                        <td className="py-1.5 px-3 text-[11px] bg-orange-50/70 text-slate-700 font-mono">
                          {r.notaAlternativaMatriz || r.calculo2025}
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Nota Metodológica de Variables Intermedias para tu Excel */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2">
              <strong className="text-slate-900 block">
                📌 Glosario de Variables Intermedias (2025 vs. 2024) para tus fórmulas de Excel:
              </strong>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-[11px]">
                <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                  <strong className="text-teal-800 block">1. Deuda Financiera y Pasivos Espontáneos:</strong>
                  • <strong>Deudas Financieras (Préstamos Nota 14):</strong> 2025 = <code>$1.616.544 + $3.820.071 = $5.436.615M</code> | 2024 = <code>$1.411.178 + $2.374.802 = $3.785.980M</code>.<br />
                  • <strong>Pasivos Espontáneos (Pasivo Total - Préstamos):</strong> 2025 = <code>$9.639.244 - $5.436.615 = $4.202.629M</code> | 2024 = <code>$7.112.817 - $3.785.980 = $3.326.837M</code>.<br />
                  • <strong>Activo Neto (Activo Total - Pasivos Espontáneos = Deuda Financiera + PN):</strong> 2025 = <code>$12.419.923M</code> | 2024 = <code>$11.066.907M</code>.
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                  <strong className="text-indigo-800 block">2. Promedios Diarios (Base 365 días):</strong>
                  • <strong>Venta promedio diaria (Ventas / 365):</strong> 2025 = <code>$22.818,67M/día</code> | 2024 = <code>$14.912,21M/día</code>.<br />
                  • <strong>Costos y gastos erogables (Ventas - EBITDA):</strong> 2025 = <code>$5.803.279M ($15.899,39M/día)</code> | 2024 = <code>$3.910.577M ($10.713,91M/día)</code>.<br />
                  • <strong>Costo de equipos vendidos diario:</strong> 2025 = <code>$288.668M / 365 = $790,87M/día</code> | 2024 = <code>$259.216M / 365 = $710,18M/día</code>.
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                  <strong className="text-amber-800 block">3. EBIAT (Resultado Operativo después de Impuestos):</strong>
                  • <strong>Criterio Tasa Legal (EBIT × [1 - 0,35]):</strong> 2025 = <code>$450.047M × 0,65 = $292.531M</code> | 2024 = <code>-$192.676M × 0,65 = -$125.239M</code>.<br />
                  • <strong>Criterio Impuesto ER (EBIT + Imp. Ganancias Nota 16):</strong> 2025 = <code>$450.047M + $46.432M = $496.479M</code> | 2024 = <code>-$192.676M - $538.237M = -$730.913M</code>.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          SECCIÓN 5: COMENTARIO FINAL Y VINCULACIÓN CON LAS PRUEBAS (PROGRAMAS A-E)
         ===================================================================== */}
      {vistaActiva === 'vinculacion' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
          <div className="pb-4 border-b border-slate-200">
            <span className="px-2.5 py-1 rounded-md text-xs font-extrabold bg-indigo-700 text-white">
              CONCLUSIÓN INTEGRADORA DE LA REVISIÓN ANALÍTICA (RT 37 / RT 53 y DOCTRINA CARLOS SLOSSE)
            </span>
            <h3 className="text-xl font-extrabold text-slate-900 mt-2">
              Relación entre el Análisis Horizontal/Vertical, los Ratios Financieros y las Pruebas Sustantivas a Aplicar
            </h3>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Conforme a <strong>Carlos A. Slosse</strong>, los procedimientos analíticos en la Etapa de Planificación sirven como un <em>«mapa de calor»</em> para dirigir los esfuerzos de auditoría hacia las áreas donde los saldos contables presentan variaciones inusuales o relaciones financieras atípicas. A continuación se vincula cada hallazgo analítico del Balance de Telecom S.A. con los <strong>Programas de Trabajo (A a E)</strong> y los <strong>Papeles de Trabajo (PT-A a PT-E)</strong>:
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-900 text-white font-bold uppercase">
                  <th className="py-3 px-3 w-1/4">Alerta del Análisis H/V y Ratios (EECC 2025)</th>
                  <th className="py-3 px-3 w-1/6">Rubro y Programa</th>
                  <th className="py-3 px-3 w-1/6">Afirmaciones Afectadas</th>
                  <th className="py-3 px-3 w-1/4">Pruebas y Procedimientos Sustantivos a Aplicar</th>
                  <th className="py-3 px-3 w-1/6">Evidencia y Ajuste en Etapa 2 (PT)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {matrizVinculacionAuditoria.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 align-top">
                    <td className="py-3.5 px-3 font-semibold text-slate-800 leading-relaxed">
                      {item.alertaAnalitica}
                    </td>
                    <td className="py-3.5 px-3">
                      <span className="px-2 py-1 rounded bg-teal-100 text-teal-900 font-extrabold text-[11px] inline-block">
                        {item.rubroYPrograma}
                      </span>
                    </td>
                    <td className="py-3.5 px-3 font-bold text-indigo-900 leading-relaxed">
                      {item.afirmacionesCriticas}
                    </td>
                    <td className="py-3.5 px-3 text-slate-700 whitespace-pre-line leading-relaxed">
                      {item.procedimientosAplicados}
                    </td>
                    <td className="py-3.5 px-3 text-rose-900 bg-rose-50/40 font-medium leading-relaxed">
                      {item.hallazgoVinculado}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Comentario Final de Cierre en Pestaña 5 */}
          <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-950">
            <strong>Articulación Metodológica:</strong> Esta matriz de vinculación alimenta directamente la <strong>Conclusión Técnica Final</strong> expuesta a continuación y fundamenta el alcance de los <strong>Programas de Trabajo A, B, C, D y E</strong> en la Etapa 1D.
          </div>
        </div>
      )}

      {/* =====================================================================
          CONCLUSIÓN TÉCNICA FINAL PERMANENTE: PROCEDIMIENTOS SUSTANTIVOS A APLICAR,
          SOBRE QUÉ RUBROS Y POR QUÉ (BASE PARA EL PROGRAMA DE TRABAJO A-E)
         ===================================================================== */}
      <div id="sec-conclusion-final" className="bg-slate-900 text-white rounded-2xl border border-slate-800 p-6 shadow-md space-y-5 scroll-mt-20">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded-md text-xs font-extrabold bg-lime-400 text-slate-950">
                CONCLUSIÓN TÉCNICA FINAL DE LA REVISIÓN ANALÍTICA (BASE PARA EL PROGRAMA DE TRABAJO)
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-teal-900 text-teal-200 border border-teal-700">
                Articulación Análisis H/V + Ratios → Procedimientos Sustantivos (RT 37 / RT 53 y Slosse)
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-white mt-2">
              Determinación de los Procedimientos Sustantivos Aplicados: ¿Sobre qué Rubros, Por Qué y Con Qué Alcance?
            </h3>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              De acuerdo con la doctrina de <strong>Carlos A. Slosse</strong> y la <strong>RT 37 (modif. RT 53)</strong>, al combinarse un <strong>Riesgo de Control ALTO</strong> (Nivel de Confianza Bajo de <strong>15,38% a 23,33%</strong> en los 5 Cuestionarios de Control Interno) con las <strong>asimetrías críticas detectadas en el Análisis Horizontal, Vertical y de Ratios Financieros</strong> sobre los EECC Consolidados al 31/12/2025 (Activo Total <strong>$16.622.552M</strong>; Materialidad PM <strong>$166.225M</strong>; Error Tolerable <strong>$83.112M</strong>; Umbral PAE <strong>$8.311M</strong>), el auditor no puede descansar en pruebas de cumplimiento y debe estructurar su <strong>Programa de Trabajo</strong> aplicando los siguientes <strong>procedimientos sustantivos focalizados sobre 5 rubros críticos</strong>:
            </p>
          </div>

          {onNavigate && (
            <div className="flex flex-wrap gap-2 shrink-0 no-print">
              <button
                onClick={() => onNavigate('etapa1-detallada', 'sec-1c-rubros')}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-teal-600 text-white text-xs font-extrabold hover:bg-teal-500 cursor-pointer"
              >
                Ver Programas de Trabajo A-E <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('etapa2-ejecucion')}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-500 text-slate-950 text-xs font-extrabold hover:bg-amber-400 cursor-pointer"
              >
                Ver Ejecución en Papeles PT-A a PT-E <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Grilla de los 5 Rubros: Sobre qué rubro, Por qué (H/V + Ratios) y Qué Procedimientos Sustantivos se aplican */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-xs">
          {/* RUBRO 1 - PROGRAMA A */}
          <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700 space-y-2.5">
            <div className="flex items-center justify-between gap-2">
              <span className="px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 border border-teal-500/40 font-extrabold text-[11px]">
                1. RUBRO: PP&E / BIENES DE USO (NOTA 9: $6.789.118M) → PROGRAMA A
              </span>
              <span className="font-mono font-bold text-lime-300 text-[11px]">
                AV: 40,84% | AH: +19,18%
              </span>
            </div>
            <div className="text-slate-300 leading-relaxed">
              <strong className="text-amber-300">¿Por qué se aplica sobre este rubro?</strong> Es el rubro individual de mayor peso vertical del Balance (<strong>40,84% del Activo Total</strong>, y <strong>$14.085.143M</strong> integrando las UGEs en Nota 3.v), registra una expansión real de <strong>+$1.092.387M (+19,18%)</strong> por inversiones CAPEX en redes 5G/FTTH, origina una nueva línea de <em>Propiedades de Inversión</em> (<strong>$63.866M</strong> en Nota 12) y genera un cargo por <em>D, A &amp; D</em> de <strong>$(2.075.488)M (24,92% de las Ventas en Nota 25)</strong>, en un contexto donde el CCI-02 reveló falta de baja de centrales analógicas obsoletas y siniestros en vía pública.
            </div>
            <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-700/80 text-slate-200 space-y-1">
              <strong className="text-teal-300 block uppercase text-[10px] tracking-wider">
                Procedimientos Sustantivos que pasan al Programa de Trabajo A (Existencia, Integridad, Propiedad, Medición):
              </strong>
              <ul className="list-disc pl-4 space-y-1">
                <li><strong>Inspección ocular física in situ</strong> de los 16 Data Centers y muestra de 85 nodos/radiobases 5G, conciliando los partes técnicos de robos/vandalismo de fibra con las bajas en el módulo SAP AM (<em>PT-A1</em>).</li>
                <li><strong>Prueba sustantiva de adiciones CAPEX y corte (cut-off) de obras en curso</strong> habilitadas en diciembre 2025 contra certificados de obra, facturas y despachos de aduana (<em>PT-A2</em>).</li>
                <li><strong>Confirmación dominial externa</strong> ante el Registro de la Propiedad Inmueble (RPI) para inmuebles operativos y desafectados en Nota 12 (<em>PT-A3</em>).</li>
                <li><strong>Recálculo global independiente de depreciaciones</strong> y revisión del informe de Ingeniería sobre <strong>centrales analógicas de cobre fuera de servicio</strong> para cuantificar el ajuste por obsolescencia (<em>PT-A4 → Ajuste AJ-01 por $28.340M</em>).</li>
              </ul>
            </div>
          </div>

          {/* RUBRO 2 - PROGRAMA B */}
          <div className="p-4 rounded-xl bg-slate-800/90 border border-rose-500/40 space-y-2.5">
            <div className="flex items-center justify-between gap-2">
              <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/40 font-extrabold text-[11px]">
                2. RUBRO: CRÉDITOS POR VENTAS (NOTA 5: $800.128M) → PROGRAMA B
              </span>
              <span className="font-mono font-bold text-rose-300 text-[11px]">
                AV: 4,81% | AH: +105,25% | DSO: 35,1d
              </span>
            </div>
            <div className="text-slate-300 leading-relaxed">
              <strong className="text-rose-300">¿Por qué se aplica sobre este rubro?</strong> Constituye la <strong>alerta analítica más severa</strong> del ejercicio: los Créditos por Ventas corrientes se duplicaron (<strong>+105,25%</strong>, pasando de $389.375M a <strong>$799.188M</strong>; compuestos por <strong>$1.067.130M de créditos comunes brutos + $2.977M otros</strong> menos una <strong>Previsión para Deudores Incobrables de $(270.919)M</strong>), superando el crecimiento de las Ventas (+53,02%) y alargando el <strong>Plazo Promedio de Cobranza de 26,11 a 35,02 días (+8,91 días)</strong>. Esta divergencia combina la consolidación del 100% del stock de créditos de <strong>Telefónica Móviles Argentina S.A. (TMA, adquirida el 24/02/2025 por $421.919M bajo NIIF 3)</strong> frente a solo 10 meses de ventas de TMA en el ER (marzo-diciembre), el efecto NIC 29 y la mayor mora acumulada, exigiendo auditar la suficiencia de la previsión NIIF 9 y el corte al cierre.
            </div>
            <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-700/80 text-slate-200 space-y-1">
              <strong className="text-rose-300 block uppercase text-[10px] tracking-wider">
                Procedimientos Sustantivos que pasan al Programa de Trabajo B (Existencia, Integridad, Medición):
              </strong>
              <ul className="list-disc pl-4 space-y-1">
                <li><strong>Circularización directa positiva</strong> a 65 grandes clientes corporativos y organismos públicos del segmento B2B (<em>Personal Tech</em> y corporativos TMA) y verificación alternativa de <strong>cobros posteriores en extractos de enero 2026</strong> (<em>PT-B1</em>).</li>
                <li><strong>Prueba de corte de facturación (cut-off)</strong> sobre actas de recepción B2B firmadas entre el 15/12/2025 y el 15/01/2026, y conciliación de recaudaciones en tránsito de <em>Rapipago, Pago Fácil y billeteras virtuales</em> al 31/12 (<em>PT-B2 → Ajuste AJ-02 por $18.800M</em>).</li>
                <li><strong>Reproceso del 100% del padrón de morosidad ($1.071.047M brutos incluyendo cartera TMA) mediante TAACs</strong> y recálculo de la <strong>Previsión para Deudores Incobrables (NIIF 9, saldo contable $(270.919)M)</strong> para incorporar las carteras con mora &gt; 180 días omitidas en la migración de sistemas (<em>PT-B3 → Ajuste AJ-03 por $19.850M</em>).</li>
              </ul>
            </div>
          </div>

          {/* RUBRO 3 - PROGRAMA C */}
          <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700 space-y-2.5">
            <div className="flex items-center justify-between gap-2">
              <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 font-extrabold text-[11px]">
                3. RUBRO: PRÉSTAMOS Y DEUDA FINANCIERA (NOTA 14: $5.436.615M) → PROGRAMA C
              </span>
              <span className="font-mono font-bold text-amber-300 text-[11px]">
                AV: 32,71% | AH: +43,60% | End.: 1,38x
              </span>
            </div>
            <div className="text-slate-300 leading-relaxed">
              <strong className="text-amber-300">¿Por qué se aplica sobre este rubro?</strong> Explica el cambio estructural en las fuentes de financiamiento: el Pasivo Total trepa al <strong>57,99% del Activo ($9.639.244M)</strong> y el ratio de <strong>Endeudamiento sube de 0,98x a 1,38x</strong>. Los Préstamos Corrientes (<strong>$1.616.544M</strong>, +14,55%) y No Corrientes (<strong>$3.820.071M</strong>, +60,86%) suman <strong>$5.436.615M</strong> en moneda extranjera y generan los <strong>Costos Financieros de $(748.840)M (Nota 26)</strong> que determinan la pérdida neta del ejercicio.
            </div>
            <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-700/80 text-slate-200 space-y-1">
              <strong className="text-amber-300 block uppercase text-[10px] tracking-wider">
                Procedimientos Sustantivos que pasan al Programa de Trabajo C (Existencia, Integridad, Medición, Exposición):
              </strong>
              <ul className="list-disc pl-4 space-y-1">
                <li><strong>Confirmación externa directa (circularización al 100%)</strong> con bancos acreedores, organismos multilaterales (<em>IFC, BID, Finnvera</em>) y <em>Caja de Valores S.A.</em> como Agente Pagador de las Obligaciones Negociables (<em>PT-C1</em>).</li>
                <li><strong>Prueba de pasivos omitidos</strong> revisando el 100% de las Actas de Directorio y Asamblea 2025 y los desembolsos en extractos bancarios de enero/febrero 2026 (<em>PT-C2</em>).</li>
                <li><strong>Recálculo matemático de conversión de moneda extranjera</strong> sobre el 100% de la deuda en dólares (US$ 3.736,5M) aplicando el TC vendedor BNA al 31/12/2025 (<strong>$/US$ 1.455,00</strong>) y recálculo del costo amortizado por Tasa Efectiva (<em>PT-C3</em>).</li>
                <li><strong>Comprobación de cumplimiento de Covenants financieros</strong> (ratio <em>Deuda Financiera / EBITDA = 2,15x bruta / 1,83x neta</em>) y adecuada clasificación entre corriente y no corriente (<em>PT-C4</em>).</li>
              </ul>
            </div>
          </div>

          {/* RUBRO 4 - PROGRAMA D */}
          <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700 space-y-2.5">
            <div className="flex items-center justify-between gap-2">
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-extrabold text-[11px]">
                4. RUBRO: VENTAS / INGRESOS POR SERVICIOS (NOTA 24: $8.328.814M) → PROGRAMA D
              </span>
              <span className="font-mono font-bold text-emerald-300 text-[11px]">
                AV: 100% ER | AH: +53,02% | EBITDA: 30,32%
              </span>
            </div>
            <div className="text-slate-300 leading-relaxed">
              <strong className="text-emerald-300">¿Por qué se aplica sobre este rubro?</strong> Es la base del Estado de Resultados con una expansión real de <strong>+$2.885.856M (+53,02%)</strong> que permitió elevar el <strong>EBITDA a $2.525.535M (+64,81%)</strong> y revertir el <strong>EBIT a +$450.047M (+5,40%)</strong>. Al originarse en millones de micro-transacciones convergentes (<em>Personal, Flow, Internet</em>) procesadas en sistemas heredados con interfaces manuales hacia SAP (CCI-05), presenta alto riesgo de error de integridad, corte y exposición.
            </div>
            <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-700/80 text-slate-200 space-y-1">
              <strong className="text-emerald-300 block uppercase text-[10px] tracking-wider">
                Procedimientos Sustantivos que pasan al Programa de Trabajo D (Existencia, Integridad, Propiedad, Exposición):
              </strong>
              <ul className="list-disc pl-4 space-y-1">
                <li><strong>Prueba analítica sustantiva global de ingresos</strong> multiplicando el parque promedio de clientes activos por línea de negocio (incluyendo los 10 meses de operación consolidada de TMA mar-dic 2025) por el <em>ARPU mensual ponderado</em> reexpresado por IPC (NIC 29), comparando contra el mayor contable (<em>PT-D1</em>).</li>
                <li><strong>Auditoría de reportes de descuadre de interfaces diarias</strong> entre los facturadores comerciales y SAP, y cotejo de una muestra de facturas contra tasaciones de tráfico (<em>CDRs - Call Detail Records</em>) y alícuotas regulatorias ENACOM 0,5% y FSU 1% (<em>PT-D2</em>).</li>
                <li><strong>Inspección de contratos con plataformas de streaming de terceros en Flow</strong> para auditar la condición de <em>Principal vs. Agente (NIIF 15)</em> y netear cobros por cuenta de terceros contra Costos de Programación (<em>PT-D3 → Ajuste AJ-04 por $11.240M</em>).</li>
              </ul>
            </div>
          </div>

          {/* RUBRO 5 - PROGRAMA E (Full width on large screens) */}
          <div className="p-4 rounded-xl bg-slate-800/90 border border-indigo-500/40 lg:col-span-2 space-y-2.5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 font-extrabold text-[11px]">
                5. RUBRO: LLAVES DE NEGOCIO (NOTA 8: $4.443.998M) Y ACTIVOS INTANGIBLES (NOTA 10: $2.671.525M) + PROVISIONES (NOTA 20: $563.085M) → PROGRAMA E
              </span>
              <span className="font-mono font-bold text-indigo-300 text-[11px]">
                AV Conjunto: 42,81% del Activo ($7.115.523M) | ROE: -2,08%
              </span>
            </div>
            <div className="text-slate-300 leading-relaxed">
              <strong className="text-indigo-300">¿Por qué se aplica sobre estos rubros?</strong> Entre <strong>Llaves de Negocio (26,73% del Activo)</strong> y <strong>Activos Intangibles (16,07% del Activo, +7,09% AH)</strong> acumulan <strong>$7.115.523 millones (42,81% del Activo Total)</strong>. El hecho de que la Sociedad haya cerrado el ejercicio 2025 con un <strong>Resultado Neto negativo de $(145.304)M (ROS -1,74% y ROE -2,08%)</strong> y una caída de la Solvencia de 2,02x a <strong>1,72x</strong> obliga por <strong>NIC 36 y NIC 38 (NIIF)</strong> a extremar la validación del <em>Valor Recuperable</em> de las Unidades Generadoras de Efectivo para descartar una sobrevaluación patrimonial masiva, además de verificar el salto del <strong>+654,47% en Provisiones para Contingencias (Nota 20)</strong>.
            </div>
            <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-700/80 text-slate-200 space-y-1">
              <strong className="text-indigo-300 block uppercase text-[10px] tracking-wider">
                Procedimientos Sustantivos que pasan al Programa de Trabajo E (Existencia, Propiedad, Medición, Exposición):
              </strong>
              <ul className="list-disc pl-4 space-y-1 grid grid-cols-1 md:grid-cols-2 gap-x-6">
                <li><strong>Confirmación e inspección legal de licencias ENACOM</strong> (adjudicación de espectro 5G banda 3.400-3.500 MHz y 4G) y vigencia de registros marcarios en el INPI (<em>PT-E1</em>).</li>
                <li><strong>Auditoría con especialistas en valuación del Test de Deterioro (Impairment NIC 36)</strong> de la UGE Redes Personal (Valor Recuperable: <strong>$12.774.695M</strong>), recalculando la tasa de descuento <strong>WACC real post-impuestos (11,85%)</strong>, la tasa de crecimiento a perpetuidad (1,5%) y exigiendo la revelación de sensibilidad en Notas (<em>PT-E2</em>).</li>
                <li><strong>Prueba documental de capitalización de software evolutivo (NIC 38)</strong> sobre desarrollos de Flow/App Mi Personal y recálculo global de amortizaciones (<em>PT-E3</em>).</li>
                <li><strong>Circularización a asesores legales internos y externos</strong> para auditar la integridad y medición de las Provisiones por juicios y reclamos regulatorios en Nota 20 ($133.783M Cte + $429.302M No Cte = $563.085M).</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
