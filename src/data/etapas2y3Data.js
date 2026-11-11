// Datos de la Etapa 2 (Ejecución, Papeles de Trabajo, Hallazgos, PAE) y Etapa 3 (Conclusión, Memorando, Carta CI e Informe del Auditor RT 37/53)

export const marcasAuditoria = [
  { simbolo: "✓", significado: "Cotejado con documentación respaldatoria original (factura CAE/ARCA, acta de recepción B2B, escritura RPI, títulos INPI o resolución ENACOM)." },
  { simbolo: "∑", significado: "Suma vertical y horizontal verificada sin diferencias mediante recálculo independiente." },
  { simbolo: "©", significado: "Saldo o registro confirmado directamente por tercero u organismo independiente (circularización bancaria, Caja de Valores S.A., cliente B2B, Boletín Oficial o INPI)." },
  { simbolo: "⊗", significado: "Observación / Desvío de control interno o diferencia de auditoría trasladada a la Planilla de Ajustes Propuestos (PAE)." },
  { simbolo: "§", significado: "Cotejado con el Libro Mayor General y Balance de Sumas y Saldos del sistema ERP SAP al 31/12/2025." },
  { simbolo: "t", significado: "Tarifas y costos de personal validados contra nómina de sueldos (SAP HR) y contratos de consultoría técnica externa." },
  { simbolo: "h", significado: "Horas de desarrollo imputadas en SAP PS (Project System) y Jira validadas en fase de desarrollo bajo NIC 38.57." }
];

export const marcasPorRubro = {
  "pt-a": [
    { simbolo: "✓", significado: "Cotejado con documentación respaldatoria original (facturas CAE de proveedores de fibra/antenas, actas de recepción técnica provisoria y definitiva, certificados de obra en curso)." },
    { simbolo: "§", significado: "Cotejado con el Libro Mayor General y Balance de Sumas y Saldos del sistema ERP SAP al 31/12/2025." },
    { simbolo: "∑", significado: "Suma vertical y horizontal verificada sin diferencias mediante recálculo independiente." },
    { simbolo: "⊗", significado: "Observación / Desvío de control interno o diferencia de auditoría trasladada a la Planilla de Ajustes Propuestos (PAE)." },
    { simbolo: "©", significado: "Saldo o registro confirmado directamente por tercero u organismo independiente (Registro de la Propiedad Inmueble y peritajes técnicos externos)." }
  ],
  "pt-b": [
    { simbolo: "✓", significado: "Cotejado con documentación respaldatoria original (facturas de venta electrónicas CAE/ARCA, remitos conformados B2B y recibos oficiales de cobranza)." },
    { simbolo: "§", significado: "Cotejado con el Libro Mayor General y Balance de Sumas y Saldos del sistema ERP SAP al 31/12/2025." },
    { simbolo: "∑", significado: "Suma vertical y horizontal verificada sin diferencias mediante recálculo independiente." },
    { simbolo: "⊗", significado: "Observación / Desvío de control interno o diferencia de auditoría trasladada a la Planilla de Ajustes Propuestos (PAE)." },
    { simbolo: "©", significado: "Saldo o registro confirmado directamente por tercero u organismo independiente (circularización externa directa a clientes corporativos B2B y confirmaciones bancarias)." }
  ],
  "pt-c": [
    { simbolo: "✓", significado: "Cotejado con documentación respaldatoria original (contratos de financiamiento con organismos multilaterales IFC/BID, prospectos de emisión de ONs y liquidaciones de intereses)." },
    { simbolo: "§", significado: "Cotejado con el Libro Mayor General y Balance de Sumas y Saldos del sistema ERP SAP al 31/12/2025." },
    { simbolo: "∑", significado: "Suma vertical y horizontal verificada sin diferencias mediante recálculo independiente." },
    { simbolo: "©", significado: "Saldo o registro confirmado directamente por tercero u organismo independiente (circularización bancaria directa a entidades financieras locales/internacionales y Caja de Valores S.A.)." },
    { simbolo: "⊗", significado: "Observación / Desvío de control interno o diferencia de auditoría trasladada a la Planilla de Ajustes Propuestos (PAE)." }
  ],
  "pt-d": [
    { simbolo: "✓", significado: "Cotejado con documentación respaldatoria original (lotes de facturación electrónica masiva en SAP Convergent Invoicing, contratos de abono y reportes de mediación de red)." },
    { simbolo: "§", significado: "Cotejado con el Libro Mayor General y Balance de Sumas y Saldos del sistema ERP SAP al 31/12/2025." },
    { simbolo: "∑", significado: "Suma vertical y horizontal verificada sin diferencias mediante recálculo independiente." },
    { simbolo: "⊗", significado: "Observación / Desvío de control interno o diferencia de auditoría trasladada a la Planilla de Ajustes Propuestos (PAE)." },
    { simbolo: "©", significado: "Saldo o registro confirmado directamente por tercero u organismo independiente (confirmaciones externas de distribuidores y pasarelas de cobro)." }
  ],
  "pt-e": [
    { simbolo: "✓", significado: "Cotejado con documentación respaldatoria original (resolución de adjudicación ENACOM, títulos del INPI, contratos de software y facturas CAE/ARCA)." },
    { simbolo: "©", significado: "Saldo o registro confirmado directamente por tercero u organismo independiente (Boletín Oficial de la República Argentina y registros públicos del INPI)." },
    { simbolo: "§", significado: "Cotejado con el Libro Mayor General y Balance de Sumas y Saldos del sistema ERP SAP al 31/12/2025." },
    { simbolo: "∑", significado: "Suma vertical y horizontal verificada sin diferencias mediante recálculo independiente." },
    { simbolo: "t", significado: "Tarifas y costos de personal validados contra nómina de sueldos (SAP HR) y contratos de consultoría técnica externa." },
    { simbolo: "h", significado: "Horas de desarrollo imputadas en SAP PS (Project System) y Jira validadas en fase de desarrollo bajo NIC 38.57." },
    { simbolo: "⊗", significado: "Observación / Desvío de control interno o diferencia de auditoría trasladada a la Planilla de Ajustes Propuestos (PAE)." }
  ],
  "pt-f": [
    { simbolo: "✓", significado: "Cotejado con documentación respaldatoria original (informes de valuación y modelos de flujos de fondos descontados del experto independiente)." },
    { simbolo: "§", significado: "Cotejado con el Libro Mayor General y Balance de Sumas y Saldos del sistema ERP SAP al 31/12/2025." },
    { simbolo: "∑", significado: "Suma vertical y horizontal verificada sin diferencias mediante recálculo independiente." },
    { simbolo: "©", significado: "Saldo o registro confirmado directamente por tercero u organismo independiente (fuentes de mercado de tasas WACC y proyecciones macroeconómicas validadas)." },
    { simbolo: "⊗", significado: "Observación / Desvío de control interno o diferencia de auditoría trasladada a la Planilla de Ajustes Propuestos (PAE)." }
  ]
};

export const getMarcasPorRubro = (ptId) => {
  return marcasPorRubro[ptId] || marcasAuditoria;
};

export const equipoTrabajoInicial = [
  {
    id: "eq-1",
    solicitud: "Relevamiento CCI (5 Componentes) y Matriz de Riesgos",
    rubro: "Planificación Preliminar",
    etapa: "Planeación",
    responsable: "Grebe",
    rol: "Auditor Senior / Co-Encargado",
    fecha: "20/10/2025",
    estado: "Aprobado",
    colorEstado: "green",
    avance: "5/5",
    porcentaje: 100
  },
  {
    id: "eq-2",
    solicitud: "Cálculo de Materialidad (PM, ET, PAE) y Programas A-E",
    rubro: "Planificación Detallada",
    etapa: "Planeación",
    responsable: "Pisonero De Biase",
    rol: "Auditor Senior / Co-Encargado",
    fecha: "28/10/2025",
    estado: "Aprobado",
    colorEstado: "green",
    avance: "5/5",
    porcentaje: 100
  },
  {
    id: "eq-3",
    solicitud: "PT-A: Inspección Nodos/Data Centers y Baja Centrales Analógicas",
    rubro: "Bienes de Uso",
    etapa: "Ejecución",
    responsable: "Grebe",
    rol: "Auditor Senior / Co-Encargado",
    fecha: "12/01/2026",
    estado: "Observado",
    colorEstado: "red",
    avance: "4/4",
    porcentaje: 100
  },
  {
    id: "eq-4",
    solicitud: "PT-B: Circularización B2B, Corte Ventas y Previsión Mora >180d",
    rubro: "Créditos por Ventas",
    etapa: "Ejecución",
    responsable: "Pisonero De Biase",
    rol: "Auditor Senior / Co-Encargado",
    fecha: "18/01/2026",
    estado: "Observado",
    colorEstado: "red",
    avance: "3/3",
    porcentaje: 100
  },
  {
    id: "eq-5",
    solicitud: "PT-C: Circularización Bancos/ONs, Recálculo USD ($1.455) y Covenants",
    rubro: "Préstamos",
    etapa: "Ejecución",
    responsable: "Grebe",
    rol: "Auditor Senior / Co-Encargado",
    fecha: "22/01/2026",
    estado: "Aprobado",
    colorEstado: "green",
    avance: "4/4",
    porcentaje: 100
  },
  {
    id: "eq-6",
    solicitud: "PT-D: Prueba Global ARPU, Interfaces Legacy/SAP y Neteo Flow",
    rubro: "Ventas",
    etapa: "Ejecución",
    responsable: "Ing. M. Valdés (Esp. CGTI / Sistemas)",
    rol: "Especialista Auditoría TI",
    fecha: "25/01/2026",
    estado: "En revisión",
    colorEstado: "yellow",
    avance: "3/3",
    porcentaje: 90
  },
  {
    id: "eq-7",
    solicitud: "PT-E: Licencias 5G ENACOM, Marcas y Software NIC 38",
    rubro: "Activos Intangibles",
    etapa: "Ejecución",
    responsable: "Lic. R. Moretti (Esp. Valuaciones)",
    rol: "Especialista Finanzas & WACC",
    fecha: "02/02/2026",
    estado: "Aprobado",
    colorEstado: "blue",
    avance: "2/2",
    porcentaje: 100
  },
  {
    id: "eq-7b",
    solicitud: "PT-F: Test de Deterioro de Llaves de Negocio ($12.774.695M)",
    rubro: "Llaves de Negocio",
    etapa: "Ejecución",
    responsable: "Lic. R. Moretti / Grebe",
    rol: "Especialista Finanzas & Co-Encargado",
    fecha: "04/02/2026",
    estado: "Aprobado",
    colorEstado: "green",
    avance: "1/1",
    porcentaje: 100
  },
  {
    id: "eq-8",
    solicitud: "Memorando Conclusión, Carta Control Interno e Informe RT 37/53",
    rubro: "Conclusión e Informe",
    etapa: "Finalización",
    responsable: "Grebe - Pisonero De Biase",
    rol: "Equipo de Dirección de Auditoría",
    fecha: "20/02/2026",
    estado: "En proceso",
    colorEstado: "purple",
    avance: "4/4",
    porcentaje: 95
  }
];

export const papelesTrabajo = [
  {
    id: "pt-a",
    codigo: "PT-A",
    programa: "PROGRAMA A",
    rubro: "Bienes de Uso (PP&E — Nota 9)",
    esPrioritario: true,
    refLegajo: "Legajo Corriente — Sección A (Cédula Sumaria A-1 y Analíticas A-2 a A-5)",
    elaboradoPor: "Grebe",
    revisadoPor: "Pisonero De Biase",
    fecha: "12/01/2026",
    saldoSegunLibros: 6789118,
    ajustePropuestoNeto: -28340,
    saldoAuditado: 6760778,
    estadoPT: "Con Hallazgo Material (> PAE)",
    cedulaSumaria: [
      { subcuenta: "1.1.01 - PP&E Redes e Infraestructura Personal (FTTH / 4G / 5G / Nodos - Nota 9)", saldoLibros: 5995980, debe: 0, haber: 28340, saldoAuditado: 5967640, marca: "§ ⊗", refPT: "PT-A1 / PT-A4" },
      { subcuenta: "1.1.02 - PP&E Redes TMA, Edificios, Equipos y Obras en Curso (Nota 9)", saldoLibros: 793138, debe: 0, haber: 0, saldoAuditado: 793138, marca: "§ ✓ ∑", refPT: "PT-A2 / PT-A3" }
    ],
    procedimientosEjecutados: [
      {
        ref: "PT-A1",
        bloquePrograma: "1. Inspección Física (Existencia e Integridad)",
        nombre: "Inspección Física de Nodos, Sitios 5G y 16 Data Centers + Siniestros de Fibra",
        afirmaciones: ["Existencia", "Medición"],
        marca: "✓ ⊗",
        muestra: "Seleccionada desde el auxiliar contable de SAP (FI-AA): 16 Data Centers propios (Pacheco, Barracas, Córdoba, Rosario, etc.) + 85 nodos ópticos/radiobases 5G.",
        pasosConResultado: [
          {
            paso: "Seleccionar del auxiliar contable de Activo Fijo (SAP FI-AA) una muestra de nodos de red, sitios 5G y servidores en los Data Centers principales de AMBA e interior.",
            comoSeEjecuta: "El auditor extrae del módulo contable SAP FI-AA (Subdiario de Activos Fijos) el maestro de bienes con sus códigos de inventario y geolocalización. Se seleccionan los 16 Data Centers principales (Pacheco, Barracas, Córdoba, Rosario, etc.) y una muestra de 85 radiobases 5G desplegadas en el año. El equipo auditor inspecciona in situ verificando que la chapa o código de inventario coincida con el registro contable.",
            fuentes: "Módulo SAP FI-AA (Subdiario de Activos Fijos), inventario técnico georreferenciado y actas de visita de auditoría.",
            valores: "Muestra sobre un total de Bienes de Uso de $6.789.118 millones (Nota 9).",
            resultado: "Se extrajo la población completa desde el auxiliar contable de SAP FI-AA y se estratificó seleccionando el 100% de los 16 Data Centers principales y 85 radiobases 5G desplegadas en el año (✓)."
          },
          {
            paso: "Verificar in situ la existencia física y el estado de operatividad de los activos seleccionados.",
            comoSeEjecuta: "Durante la visita al Data Center o torre de telecomunicaciones, se comprueba que el equipo esté energizado, conectado a la red de fibra y operando tráfico real. Se documenta la inspección con fotografías, planillas de campo y firma conjunta con el jefe de nodo de Telecom.",
            fuentes: "Planilla de relevamiento físico de campo y actas de visita técnica.",
            valores: "Validación de bienes operativos vs. bienes en desuso sobre la muestra de 16 Data Centers y 85 sitios 5G.",
            resultado: "Verificación técnica satisfactoria en terreno; el equipo auditor constató in situ la existencia física, conexión a fibra óptica y operatividad de todos los sitios inspeccionados (✓)."
          },
          {
            paso: "Cruzar el auxiliar contable de activos vigentes contra los informes operativos de siniestros, robo de cableado y vandalismo de fibra para comprobar que los bienes destruidos hayan sido dados de baja.",
            comoSeEjecuta: "Se solicita a la Gerencia de Seguridad Patrimonial el registro de incidentes de robo de cobre, vandalismo de tendidos de fibra óptica y siniestros del ejercicio. Se cruzan los tramos afectados contra las bajas registradas en SAP FI-AA para verificar que ningún activo destruido siga figurando en el balance. Al detectarse redes destruidas sin dar de baja, se originó el ajuste propuesto AJ-01 por $6.890 millones.",
            fuentes: "Libro de siniestros de Seguridad Patrimonial, denuncias policiales y asientos de baja contable en SAP FI.",
            valores: "Ajuste propuesto AJ-01 (Baja de activos siniestrados): $6.890 millones (supera el PAE de $8.311M en conjunto con obsolescencia).",
            resultado: "Al cruzar los registros contables contra las denuncias policiales y reportes de Seguridad Patrimonial, se hallaron tendidos de fibra óptica y nodos vandalizados/robados en el 4° trimestre por $6.890 millones que continuaban activados sin haberse dado de baja en el balance (⊗ — Requiere Ajuste AJ-01)."
          }
        ],
        procedimientoDetalle: "1) Población y Terreno: Se extrae del Subdiario de Activos Fijos (SAP FI-AA) el maestro de bienes con geolocalización. Se inspeccionan in situ 16 Data Centers (Pacheco, Barracas, etc.) y 85 sitios 5G verificando que el hardware esté instalado, conectado a la red y con su chapa de inventario coincidente. 2) Cruce con siniestros: Se solicita a la Gerencia de Seguridad Patrimonial el libro de siniestros y denuncias policiales de robo de cables de cobre y vandalismo de fibra del 4° trimestre. Al cruzarlo contra el subdiario contable, se detectaron redes destruidas por $6.890 millones que continuaban figurando activadas como bienes operativos.",
        fuentes: "Módulo contable SAP FI-AA (Subdiario de Activos Fijos), inventario técnico georreferenciado, actas de visita de campo, libro de siniestros de Seguridad Patrimonial y denuncias policiales.",
        valores: "Total rubro Bienes de Uso: $6.789.118 millones (Nota 9). Muestra estratificada: 16 Data Centers + 85 radiobases 5G. Ajuste propuesto AJ-01: $6.890 millones (baja de activos siniestrados).",
        defensaOral: "Profesor, en PT-A1 partimos del subdiario contable de SAP FI-AA hacia el terreno para validar Existencia física. Luego, para validar Medición, cruzamos los activos vigentes contra las denuncias policiales y reportes de siniestros de Seguridad Patrimonial, detectando $6.890 millones de fibra y nodos destruidos sin dar de baja. Aunque $6.890M por sí solo está por debajo del umbral mínimo del PAE ($8.311M), aplicamos la regla de acumulación de la NIA 450 y Slosse, que exige que el auditor sume todas las incorrecciones del mismo rubro: al acumularse con los $21.450M de obsolescencia de PT-A4, totalizan $28.340 millones, superando ampliamente el PAE y obligando a Telecom a registrar el ajuste contable AJ-01. La naturaleza contable es idéntica según la NIC 16: en ambos casos se trata de activos que dejaron de generar beneficios económicos futuros y deben ser desincorporados del balance afectando los resultados del ejercicio.",
        afirmacionesDetalle: "Valida Existencia (inspección in situ de bienes operativos) y Medición (corrección de saldos por bienes destruidos mediante baja contable según NIC 16)."
      },
      {
        ref: "PT-A2",
        bloquePrograma: "2. Prueba de Altas y Obras en Curso (Integridad y Medición)",
        nombre: "Prueba de Altas del Ejercicio (CAPEX) y Corte de Obras en Curso",
        afirmaciones: ["Integridad", "Medición"],
        marca: "✓ ∑",
        muestra: "42 adiciones superiores a $8.311M (equipos Nokia/Huawei 5G, fibra óptica y contratos de obra civil).",
        pasosConResultado: [
          {
            paso: "Cotejar las altas del ejercicio (CAPEX) contra órdenes de compra en SAP MM, facturas comerciales, despachos aduaneros y actas de recepción de obra.",
            comoSeEjecuta: "Circuito de Cotejo Documental de Altas (6 pasos): 1) Población: Se seleccionan de SAP FI-AA las incorporaciones > PAE ($8.311M). 2) Trazabilidad a Compras: En SAP MM se verifica la Orden de Compra aprobada con firmas facultadas. 3) Factura comercial: Se coteja la factura del fabricante tecnológico (Nokia, Huawei, Ericsson) y su conversión de moneda extranjera (NIC 21). 4) Despacho aduanero: Se constata el pago de aranceles y fletes aduaneros capitalizados al costo (NIC 16.16). 5) Entrada a depósito: Se verifica el remito de recepción física en almacén (MIGO en SAP). 6) Acta PAC: Se exige el Acta de Puesta en Servicio de Obra firmada por ingenieros de campo.",
            fuentes: "Subdiario SAP FI-AA (Activos Fijos), módulo SAP MM (Compras y Almacenes), despachos aduaneros oficiales de importación y Actas PAC de ingeniería de red.",
            valores: "Altas anuales de Bienes de Uso por más de $1,3 billones en Nota 9. Umbral de selección PAE: $8.311 millones.",
            resultado: "Las incorporaciones de equipamiento importado cuentan con Orden de Compra aprobada en SAP MM, factura comercial del fabricante (Nokia/Huawei/Ericsson), despacho aduanero con aranceles capitalizados (NIC 16.16) y Acta PAC de puesta en servicio (✓)."
          },
          {
            paso: "Ejecutar prueba de corte sobre las obras en curso habilitadas en diciembre de 2025 para comprobar la oportuna activación e inicio de depreciación.",
            comoSeEjecuta: "Procedimiento de corte sobre obras en curso: Según la NIC 16 (párrafo 55), la depreciación comienza cuando el activo está en condiciones de operar. Se audita que no existan obras terminadas que continúen expuestas indebidamente como 'Obras en Curso' al cierre del ejercicio: 1) Se extrae el listado de proyectos en curso de SAP PS (Módulo de Proyectos y Obras) al 31/12/2025. 2) Se cruzan las fechas de habilitación técnica contra los registros de tráfico del centro de monitoreo de red (NOC). 3) Si el nodo o tendido ya operaba tráfico comercial en diciembre, se constata su traspaso a Bienes en Servicio y el registro del cargo de amortización en el ejercicio 2025.",
            fuentes: "Módulo SAP PS (Obras en Curso), Subdiario SAP FI-AA y registros de tráfico de red del NOC (Centro de Monitoreo).",
            valores: "Obras en curso acumuladas al cierre: $1.285.410 millones en Nota 9.",
            resultado: "El cruce contra los logs de tráfico del NOC confirmó que las obras habilitadas y operativas al 31/12/2025 fueron oportunamente transferidas a bienes en servicio y comenzaron su depreciación en 2025 según NIC 16.55 (✓ ∑)."
          }
        ],
        procedimientoDetalle: "Circuito de Cotejo Documental de Altas (6 pasos): 1) Población: Se seleccionan de SAP FI-AA las incorporaciones > PAE ($8.311M). 2) Trazabilidad a Compras: En SAP MM se verifica la Orden de Compra aprobada con firmas facultadas. 3) Factura comercial: Se coteja la factura del fabricante tecnológico (Nokia, Huawei, Ericsson) y su conversión de moneda extranjera (NIC 21). 4) Despacho aduanero: Se constata el pago de aranceles y fletes aduaneros capitalizados al costo (NIC 16.16). 5) Entrada a depósito: Se verifica el remito de recepción física en almacén (MIGO en SAP). 6) Acta PAC: Se exige el Acta de Puesta en Servicio de Obra firmada por ingenieros de campo. Prueba de corte: Se cruza el listado de Obras en Curso de SAP PS con los registros de tráfico del Centro de Monitoreo de Red (NOC), verificando que ninguna antena operativa en diciembre postergue su amortización.",
        fuentes: "Subdiario SAP FI-AA (Activos Fijos), módulo SAP MM (Compras y Almacenes), despachos aduaneros oficiales de importación y registros de tráfico de red del NOC.",
        valores: "Altas anuales de Bienes de Uso por más de $1,3 billones en Nota 9. Umbral de selección PAE: $8.311 millones. Obras en curso al cierre: $1.285.410 millones.",
        defensaOral: "Profesor, en PT-A2 auditamos el ciclo documental completo de altas: desde la Orden de Compra en SAP MM y la factura del fabricante internacional, pasando por el despacho aduanero con aranceles activados según NIC 16, hasta el Acta PAC de puesta en servicio. Además, con los registros de tráfico del NOC verificamos el corte de obras en curso, asegurando que ninguna red que ya estuviera funcionando en diciembre postergue indebidamente su amortización.",
        afirmacionesDetalle: "Valida Integridad (todas las altas legítimas incorporadas) y Medición (costo de incorporación exacto bajo NIC 16 y corte oportuno de amortizaciones)."
      },
      {
        ref: "PT-A3",
        bloquePrograma: "3. Validación de Titularidad Dominial (Propiedad)",
        nombre: "Validación de Titularidad Dominial en Registro de la Propiedad Inmueble (RPI)",
        afirmaciones: ["Propiedad", "Exposición"],
        marca: "© ✓",
        muestra: "100% de los edificios técnicos, predios de Data Centers y muestra de 60 vehículos de flota técnica.",
        pasosConResultado: [
          {
            paso: "Solicitar al Registro de la Propiedad Inmueble (RPI) los informes de dominio e inhibición para los inmuebles de la Sociedad.",
            comoSeEjecuta: "Inmuebles propios: Para edificios técnicos, Data Centers y predios de radiobases, se solicitan informes de dominio e inhibición ante el RPI (Registro de la Propiedad Inmueble) para comprobar la inscripción registral a nombre de Telecom Argentina S.A. y la inexistencia de gravámenes o hipotecas no reveladas.",
            fuentes: "Informes de dominio del Registro de la Propiedad Inmueble (RPI), títulos dominiales y contratos de locación de predios técnicos.",
            valores: "Terrenos y edificios propios por más de $450.000 millones.",
            resultado: "Confirmación registral directa con el RPI (©); títulos dominiales de Data Centers y edificios corporativos inscriptos a nombre de Telecom Argentina S.A. libre de gravámenes o hipotecas no reveladas en Notas (✓)."
          },
          {
            paso: "Solicitar a la Dirección Nacional del Registro Automotor (DNRPA) los informes de dominio de la flota vehicular técnica.",
            comoSeEjecuta: "Flota Vehicular: Para camionetas y utilitarios técnicos de cuadrilla de guardia, se solicitan informes de dominio ante la DNRPA (Dirección Nacional del Registro de la Propiedad Automotor) constatando la titularidad jurídica y libre de prendas.",
            fuentes: "Títulos, cédulas y constancias registrales de la DNRPA (Dirección Nacional del Registro del Automotor).",
            valores: "Flota vehicular técnica operativa de más de 3.500 unidades.",
            resultado: "Se constató la titularidad registral y libre prenda de las camionetas y utilitarios técnicos de cuadrilla ante la DNRPA (✓)."
          }
        ],
        procedimientoDetalle: "1) Inmuebles propios: Para los predios de Data Centers y edificios corporativos de AMBA e interior, se solicitan informes de dominio e inhibición ante el Registro de la Propiedad Inmueble (RPI) para comprobar la inscripción registral a nombre de Telecom Argentina S.A. y la inexistencia de gravámenes o hipotecas ocultas. 2) Flota vehicular: Para camionetas y utilitarios técnicos de cuadrilla, se solicitan informes ante la Dirección Nacional del Registro de la Propiedad Automotor (DNRPA) constatando titularidad y libre prenda.",
        fuentes: "Informes de dominio del Registro de la Propiedad Inmueble (RPI), títulos y cédulas de la DNRPA (Rodados) y contratos de locación de predios técnicos.",
        valores: "Terrenos y edificios propios por más de $450.000 millones y flota vehicular técnica de más de 3.500 unidades.",
        defensaOral: "En PT-A3 validamos la afirmación de Propiedad mediante confirmación externa directa: solicitamos informes de dominio al Registro de la Propiedad Inmueble (RPI) para predios y edificios corporativos, e informes a la DNRPA para los vehículos técnicos, comprobando que todos los bienes pertenezcan legalmente a Telecom y estén libres de gravámenes no revelados en Notas.",
        afirmacionesDetalle: "Valida Propiedad (titularidad jurídica exclusiva de Telecom) y Exposición (ausencia de gravámenes o prendas no reveladas en Nota 9)."
      },
      {
        ref: "PT-A4",
        bloquePrograma: "4. Prueba de Depreciaciones, Valor Residual y Obsolescencia (Medición y Existencia)",
        nombre: "Prueba Global de Amortizaciones, Valor Residual y Obsolescencia de Centrales Analógicas",
        afirmaciones: ["Medición", "Existencia"],
        marca: "∑ ⊗",
        muestra: "100% de la base de activos fijos en SAP + Subdiario FI-AA + Informe Técnico de Ingeniería de Red al 31/12/2025.",
        pasosConResultado: [
          {
            paso: "Prueba Global de Amortizaciones del Ejercicio (Cálculo del cargo anual que impacta en el Estado de Resultados).",
            comoSeEjecuta: "Cálculo analítico sustantivo según Carlos A. Slosse y RT 37: Se valida la razonabilidad del cargo por depreciación del ejercicio en función de la evolución del parque de activos fijos de la Nota 9:\n• a) Depreciación ejercicio anterior (2024 reexpresada en pág. 51): $1.312.898M.\n• b) (+) Depreciación anual de incorporaciones de red TMA ($1.332.961M) y altas de CAPEX ($1.351.105M auditadas en PT-A2): +$315.840M.\n• c) (-) Depreciación de activos totalmente amortizados en 2024: -$72.450M.\n• d) (-) Depreciación de bienes dados de baja en el ejercicio (bajas brutas de $1.296.787M en pág. 49): -$23.197M.\n• e) (=) Depreciación Teórica del Ejercicio 2025: $1.533.091M ($1.312.898 + $315.840 - $72.450 - $23.197).",
            fuentes: "Estados Financieros Consolidados 2025 — Nota 9 (Págs. 49-51: Cuadros de Depreciaciones acumuladas 2024 y 2025) y Libro Mayor de SAP FI-AA.",
            valores: "Depreciación Teórica Calculada: $1.533.091 millones vs. Depreciación Registrada por Telecom en Nota 9 (Pág. 50): $1.533.091 millones. Diferencia de Auditoría: $0 (< Error Tolerable $83.112M).",
            resultado: "La Prueba Global de Amortizaciones arrojó coincidencia matemática exacta con la contabilidad oficial ($1.533.091M vs $1.533.091M en Nota 9 pág. 50, desvío $0 < ET $83.112M), validando que el cargo por depreciación de Bienes de Uso resulta razonable en medición y exactitud (✓ ∑).",
            tabla: {
              cabeceras: ["Concepto", "Importe ($M)", "Fuente / Origen del Dato", "Explicación Técnica"],
              filas: [
                { valores: ["a) Depreciación del período anterior (2024)", "$1.312.898", "EECC 2025 - Nota 9 (Pág. 51)", "Depreciación del ejercicio 2024 expresada en moneda de cierre de 2025 (NIC 29)."] },
                { valores: ["b) (+) Depreciación de altas y redes TMA", "+$315.840", "Nota 9 / Subdiario SAP / PT-A2", "Alícuotas devengadas sobre CAPEX ($1.351.105M) e infraestructura TMA ($1.332.961M)."] },
                { valores: ["c) (-) Depreciación de bienes extinguidos", "-$72.450", "Reporte Activos Amortizados SAP", "Bienes al 100% de vida útil al 31/12/2024 que ya no amortizan en 2025."] },
                { valores: ["d) (-) Depreciación de bienes dados de baja", "-$23.197", "Nota 9 (Pág. 50) / SAP FI-AA", "Cuota de amortización correspondiente a bienes desincorporados en 2025."] },
                { destacado: true, valores: ["e) (=) Depreciación Teórica del Ejercicio 2025", "$1.533.091", "Cálculo de Auditoría (a+b-c-d)", "Coincide exacto con la columna 'Del ejercicio' de Nota 9 pág. 50 ($1.533.091M). Diferencia $0."] }
              ]
            }
          },
          {
            paso: "Prueba Global de Valor Residual (Verificación del saldo patrimonial neto expuesto en el Activo No Corriente).",
            comoSeEjecuta: "Se realiza en segundo término cotejando los movimientos del cuadro oficial de la Nota 9 (Págs. 49-50):\n• a) Valor Residual al inicio (31/12/2024): $5.757.248M (Pág. 49).\n• b) (+) Incorporación de infraestructura física por compra de TMA (Nota 29): +$1.332.961M (Pág. 49).\n• c) (+) Altas del ejercicio en infraestructura de red y tecnología (CAPEX): +$1.351.105M (Pág. 49 / PT-A2).\n• d) (±) Conversión monetaria y reclasificaciones netas: +$73.691M (+$69.642M y -$3.661M en origen; +$7.060M y +$650M en amortizaciones).\n• e) (-) Valor Residual de las Bajas del Ejercicio: -$122.296M ($1.296.787M en origen menos $1.174.491M en amortizaciones).\n• f) (-) Cargos por Depreciación del Ejercicio: -$1.533.091M (Pág. 50 / validada en el Paso 1).\n• g) (=) Valor Residual al Cierre (31/12/2025): $6.859.618M.\n\nNota de conciliación con el Balance: El valor residual resultante de la prueba analítica ($6.859.618M) coincide de forma exacta con el total de PP&E de la Nota 9 pág. 49. Para conciliar con el saldo neto del Estado de Situación Financiera ($6.789.118M), se deducen las previsiones para obsolescencia de materiales ($42.217M) y para desvalorización de PP&E ($28.283M), las cuales no forman parte de la depreciación acumulada y se auditan por separado.",
            fuentes: "Estados Financieros Consolidados 2025 — Nota 9 (Páginas 49 y 50 oficiales), Subdiario SAP FI-AA y cédula de altas PT-A2.",
            valores: "Valor Residual Teórico según Prueba Global: $6.859.618 millones vs. Nota 9 (Pág. 49): $6.859.618 millones. Saldo Neto en Balance: $6.789.118 millones. Diferencia de Auditoría: $0.",
            resultado: "La Prueba Global de Valor Residual cerró con exactitud matemática plena ($6.859.618M teóricos vs $6.859.618M en Nota 9, desvío $0), acreditando que la evolución patrimonial de Bienes de Uso es íntegra y consistente con los registros contables oficiales (✓ ∑).",
            tabla: {
              cabeceras: ["Concepto", "Importe ($M)", "Fuente / Origen del Dato", "Explicación Técnica"],
              filas: [
                { valores: ["a) Valor Residual al inicio (31/12/2024)", "$5.757.248", "Nota 9 - PP&E (Pág. 49)", "Saldo de apertura neto de amortizaciones al 31/12/2024 antes de previsiones."] },
                { valores: ["b) (+) Incorporación por adquisición (TMA)", "+$1.332.961", "Nota 9 (1) / Nota 29 (Pág. 49)", "Infraestructura física de red celular, torres y fibra de TMA incorporada bajo NIIF 3."] },
                { valores: ["c) (+) Altas del Ejercicio (CAPEX)", "+$1.351.105", "Nota 9 / Cédula PT-A2 (Pág. 49)", "Inversiones del ejercicio en redes 5G, tendidos FTTH y tecnología."] },
                { valores: ["d) (±) Conversión monetaria y reclasificaciones", "+$73.691", "Nota 9 (2) (Págs. 49 y 50)", "Efecto neto de conversión de filiales extranjeras y reclasificación a venta/inversión."] },
                { valores: ["e) (-) Valor Residual de las Bajas del ejercicio", "-$122.296", "Nota 9 (Págs. 49 y 50)", "Costo de origen ($1.296.787M) menos amortización acumulada dada de baja ($1.174.491M)."] },
                { valores: ["f) (-) Depreciación del Ejercicio", "-$1.533.091", "Nota 9 (Pág. 50) / Paso 1", "Cargo por depreciación del ejercicio auditado en la Prueba Global de Amortizaciones."] },
                { destacado: true, valores: ["g) (=) Valor Residual al Cierre (31/12/2025)", "$6.859.618", "Nota 9 (Págs. 49 y 50)", "Total resultante del cuadro de evolución oficial al 31/12/2025. Coincide de forma exacta ($0 desvío)."] }
              ]
            }
          },
          {
            paso: "Inspección del Informe Técnico de Operaciones de Red y Validación de Obsolescencia en Centrales Analógicas de Cobre (El broche de oro en PT-A4).",
            comoSeEjecuta: "Procedimiento de Obsolescencia y Ajuste Propuesto:\nA pesar de que la evolución aritmética del rubro resulta exacta, al solicitar e inspeccionar el Informe Técnico de la Gerencia de Operaciones de Red, el auditor constató que la empresa mantiene activadas centrales telefónicas de cobre analógicas fuera de servicio por un valor residual en libros de $21.450 millones.\n\nDado que dichos activos han sido sustituidos operativamente por el despliegue de fibra óptica y no generarán beneficios económicos futuros (NIC 16), se propone el Ajuste AJ-01 (que sumado a los $6.890M de nodos vandalizados de PT-A1 conforma un ajuste total de $28.340 millones) para registrar la baja contable y dejar el saldo auditado en $6.760.778 millones.\n\nPreguntas Clave de Auditoría y Fundamentación Teórica (Carlos A. Slosse / RT 37):\n• ¿Qué pasa con las centrales analógicas de cobre?\nTelecom apagó físicamente las centrales de cobre porque los clientes fueron migrados a fibra óptica (FTTH). Los equipos están desenchufados en los edificios técnicos, pero la empresa NO cargó el asiento contable de baja en SAP.\n• ¿Por qué no salta en la fórmula matemática?\nPorque en el sistema SAP la central sigue figurando como un activo activo más. El sistema le sigue calculando su amortización programada o mantiene su valor residual en el mayor contable. Matemáticamente, el balance «cuadra perfecto». La fórmula matemática no sabe que el aparato físico está desconectado y obsoleto juntando polvo.\n• Por eso Carlos A. Slosse y la RT 37 enseñan:\nLas pruebas analíticas globales nunca son suficientes por sí solas. Solo demuestran que los libros suman bien. Para validar la Existencia y la Valuación/Medición real, el auditor está obligado a hacer pruebas sustantivas de detalle:\n  1. Inspección física in situ (PT-A1).\n  2. Cruce con informes técnicos de los ingenieros (PT-A4).\n\nEn resumen:\n• Antes del ajuste: La empresa expone $6.789.118M (matemáticamente cierra, pero económicamente está sobrevaluado).\n• El hallazgo: Mediante el informe técnico de los ingenieros de red, el auditor descubre que hay $21.450M de centrales apagadas que ya no generan ingresos futuros (NIC 16).\n• El resultado: Se propone el Ajuste AJ-01 para darles de baja y llevar el saldo a su valor real auditado de $6.760.778M.",
            fuentes: "Informe Técnico del Director de Tecnología y Gerencia de Operaciones de Red, Plan de Apagado de Red de Cobre y Subdiario SAP FI-AA.",
            valores: "Centrales analógicas apagadas sin desincorporar: $21.450 millones. Nodos vandalizados (PT-A1): $6.890 millones. Total Ajuste propuesto AJ-01: $28.340 millones (> PAE $8.311M).",
            resultado: "Se confirmó la existencia de centrales telefónicas de cobre analógicas fuera de servicio por $21.450 millones no dadas de baja contablemente. Al no generar beneficios económicos futuros (NIC 16), se ratifica la propuesta de Ajuste AJ-01 por $28.340M acumulados bajo NIA 450 (⊗ — Requiere Ajuste AJ-01)."
          }
        ],
        procedimientoDetalle: "1) Prueba Global de Amortizaciones: Se determina la depreciación teórica del ejercicio considerando la depreciación del año anterior ($1.312.898M), más depreciación de altas e infraestructura TMA ($315.840M), menos activos extinguidos ($72.450M), menos bajas del ejercicio ($23.197M). Coincide en $1.533.091M con Nota 9 pág. 50 (desvío $0 < ET $83.112M). 2) Prueba Global de Valor Residual: Valor residual inicial ($5.757.248M) + Incorporación TMA ($1.332.961M) + CAPEX ($1.351.105M) + Conversión/Reclasificaciones ($73.691M) - Bajas netas ($122.296M) - Depreciación ($1.533.091M) = PP&E antes de previsiones de $6.859.618M, que tras deducir previsiones de obsolescencia ($70.500M) cierra exacto en $6.789.118M neto en Balance. 3) Obsolescencia técnica (El broche de oro): Cruce del informe técnico de apagado de cobre contra SAP FI-AA: se detectan $21.450M en centrales analógicas obsoletas que Telecom no dio de baja. Se propone el ajuste AJ-01 por $28.340M acumulados con PT-A1.",
        fuentes: "Estados Financieros 2025 — Nota 9 (Págs. 49-51 oficiales), Subdiario SAP FI-AA (Activos Fijos) y plan técnico de migración a fibra de la Gerencia de Operaciones.",
        valores: "Depreciación anual del ejercicio: $1.533.091 millones en Nota 9. Error Tolerable: $83.112 millones. Saldo Neto PP&E en Balance: $6.789.118 millones. Ajuste propuesto AJ-01 por obsolescencia: $21.450 millones (total unificado AJ-01: $28.340M).",
        defensaOral: "Profesor, en PT-A4 aplicamos primero la Prueba Global de Amortizaciones y luego la Prueba Global de Valor Residual cotejando directamente contra los cuadros oficiales de la Nota 9 (págs. 49 a 51). Validamos que la depreciación anual de $1.533.091M y el saldo patrimonial de $6.859.618M ($6.789.118M neto de previsiones) son matemáticamente exactos. Sin embargo, como la prueba analítica solo valida lo ya registrado en SAP, no detecta bienes apagados que siguen en libros. Por eso hicimos la prueba de detalle solicitando el informe técnico de ingeniería: descubrimos $21.450 millones en centrales de cobre apagadas tras la migración a fibra que no tenían asiento de baja. Sumado al siniestro de fibra de PT-A1 ($6.890M), conformamos el ajuste AJ-01 por $28.340 millones bajo NIA 450, ajustando el activo a su valor económico real según NIC 16.",
        afirmacionesDetalle: "Valida Medición (adecuada alícuota de amortización, consistencia del valor residual y ajuste por obsolescencia tecnológica) y Existencia (baja de bienes fuera de servicio)."
      }
    ],
    conclusionRubro: "Salvo por la falta de desincorporación contable de las centrales analógicas obsoletas ($21.450M en PT-A4) y nodos vandalizados ($6.890M en PT-A1) por un total acumulado de $28.340M (acumulados bajo NIA 450 y propuestos en Ajuste AJ-01 según NIC 16), el rubro Bienes de Uso expone razonablemente su saldo al 31/12/2025.",
    resumenMetodologicoRubro: {
      titulo: "Exposición Metodológica Integral: Auditoría de Bienes de Uso (Nota 9)",
      subtitulo: "Fundamentación técnica secuencial de los 4 Papeles de Trabajo (PT-A1 a PT-A4): procedimientos aplicados, evidencia obtenida, hallazgos determinados y tratamiento normativo de los desvíos.",
      introduccion: "El rubro Bienes de Uso representa $6.789.118 millones netos al 31/12/2025 (40,84% del activo total consolidado de Telecom Argentina S.A.). En la etapa de planificación, la evaluación del control interno en el cuestionario CCI-01 arrojó un Riesgo de Control Alto (Nivel de Confianza: 38,46%) debido a deficiencias en recuentos físicos periódicos en vía pública y demoras en la comunicación de siniestros. En estricto cumplimiento de las Normas Internacionales de Auditoría (NIA 315, 330, 500 y 520) y la Resolución Técnica N° 37 / 53 de la FACPCE, estructuramos una respuesta de auditoría sustantiva en cuatro etapas que combinó inspección física directa, cotejo documental de adquisiciones, confirmación registral externa y pruebas analíticas globales con validación técnica de obsolescencia.",
      pasosNarrativos: [
        {
          pt: "PT-A1",
          etiqueta: "Paso 1 • Trabajo de Campo",
          titulo: "Inspección Física Ocular de Infraestructura Crítica y Verificación de Siniestros No Contabilizados",
          afirmacion: "Afirmación Auditada: Existencia e Integridad Física (NIA 500 / Carlos Slosse)",
          relato: "Para validar la afirmación de Existencia en un rubro que concentra más del 40% del activo de la entidad, las normas profesionales (NIA 500 y RT 37) exigen obtener evidencia física directa mediante inspección ocular in situ. En respuesta al Riesgo de Control Alto determinado en la etapa de planificación (CCI-01), nos constituimos físicamente en los 16 Data Centers principales del país (Pacheco, Barracas, Córdoba, Rosario, entre otros) y en una muestra de 85 nodos ópticos y radiobases 5G. Se constató la existencia real, operatividad y custodia de los servidores troncales, sistemas de energía ininterrumpida y equipamiento de transmisión. Complementariamente, a fin de validar la integridad física de la red desplegada en vía pública, solicitamos al departamento de Seguridad Patrimonial de la compañía —área interna encargada de la custodia física de instalaciones, denuncias policiales y liquidación de siniestros con aseguradoras— el legajo de denuncias y partes por robo de cables y vandalismo ocurridos durante el cuarto trimestre de 2025. Al cruzar esos partes oficiales contra el subdiario de activos fijos en el módulo SAP FI-AA, detectamos que tramos de fibra óptica y equipos de conmutación siniestrados por un valor residual neto de $6.890 millones continuaban indebidamente activados en el balance general. Indagada la Gerencia de Administración y Finanzas, se constató un desfasaje operativo interno en la comunicación entre Seguridad Patrimonial y Contabilidad, impidiendo la registración oportuna de la baja contable (transacción ABAVN en SAP). Si bien de forma individual este importe no superaba el umbral mínimo PAE ($8.311 millones), conforme a la regla de agregación de la NIA 450 se documentó el hallazgo en la cédula analítica PT-A1 con marca de desvío (⊗), concluyendo la existencia satisfactoria del resto de los activos verificados (✓) y reservando el desvío para su acumulación con los demás hallazgos del rubro."
        },
        {
          pt: "PT-A2",
          etiqueta: "Paso 2 • Auditoría de Incorporaciones",
          titulo: "Trazabilidad Documental del CAPEX y Combinación de Negocios de Telefónica Móviles Argentina (TMA)",
          afirmacion: "Afirmaciones Auditadas: Integridad y Medición al Costo Histórico (NIC 16 / NIIF 3)",
          relato: "El segundo procedimiento consistió en auditar la integridad y medición de las altas del ejercicio, que totalizaron $1.351.105 millones de adiciones de capital (CAPEX) y la incorporación por combinación de negocios de la red de Telefónica Móviles Argentina S.A. (TMA) por $1.332.961 millones según Nota 9. Aplicando un criterio de selección basado en materialidad (NIA 530), examinamos el 100% de las adiciones individuales que superaron el umbral PAE ($8.311 millones), abarcando 42 proyectos de inversión que concentran más del 82% del total de incorporaciones del año. Ejecutamos el circuito completo de cotejo documental de seis pasos: verificación de la Orden de Compra aprobada en SAP MM con niveles de autorización vigentes; examen de facturas comerciales de proveedores internacionales (Nokia, Huawei, Ericsson); despacho aduanero con verificación de aranceles y fletes capitalizados al costo de adquisición conforme a la NIC 16 (párrafo 16); remitos de recepción en almacén (MIGO en SAP); y Actas de Recepción Provisoria y Definitiva (PAC/FAC) firmadas por ingenieros de red que acreditan la puesta en funcionamiento técnico. Asimismo, auditamos el informe de asignación de precio de compra (PPA) bajo NIIF 3 elaborado por tasadores independientes para la adquisición de TMA, constatando que los bienes fueron reconocidos a su valor razonable de entrada. Se concluyó la cédula analítica PT-A2 con resultado satisfactorio y sin desvíos, validando que las obras habilitadas se activaron oportunamente y que comenzaron a depreciarse conforme a su vida útil técnica."
        },
        {
          pt: "PT-A3",
          etiqueta: "Paso 3 • Seguridad Dominial",
          titulo: "Verificación Registral de Títulos de Propiedad y Gravámenes sobre Activos Estratégicos",
          afirmacion: "Afirmación Auditada: Derechos y Obligaciones / Propiedad Legal (RT 37)",
          relato: "Conforme a la doctrina de auditoría (Carlos Slosse y RT 37), el auditor debe validar no solo la existencia física del activo, sino la titularidad jurídica y la inexistencia de restricciones legales no reveladas. En este procedimiento obtuvimos evidencia documental externa e independiente solicitando informes de dominio y certificados de gravámenes al Registro de la Propiedad Inmueble (RPI) sobre el 100% de los predios y edificios centrales donde operan los Data Centers y nodos de conmutación troncales, complementado con el cotejo de títulos de dominio de una muestra de 60 vehículos de la flota técnica ante el Registro Nacional de la Propiedad Automotor. Se verificó que la totalidad de los inmuebles y rodados examinados se encuentran inscriptos a nombre de Telecom Argentina S.A. y que sobre ellos no pesan hipotecas, embargos judiciales, prendas ni afectaciones cautelares que debieran ser expuestas como garantías o contingencias en las Notas 9 y 14 de los estados contables consolidados. Se concluyó la cédula analítica PT-A3 con resultado favorable y sin observaciones."
        },
        {
          pt: "PT-A4",
          etiqueta: "Paso 4 • Cierre Analítico y Técnico",
          titulo: "Recálculo Global de Amortizaciones y Determinación de Obsolescencia en Redes de Cobre",
          afirmacion: "Afirmaciones Auditadas: Medición (NIC 16 / NIC 36) y Exposición Contable",
          relato: "En gabinete ejecutamos una Prueba Global Analítica Sustantiva (NIA 520) sobre el 100% de la base de activos fijos de SAP FI-AA. Recalculamos de manera independiente la depreciación teórica anual ($1.533.091 millones) y la evolución del valor residual al cierre ($6.859.618 millones antes de previsiones), comprobando concordancia matemática exacta con los cuadros oficiales de evolución de la Nota 9 de Telecom. Sin embargo, dado que las pruebas analíticas procesan exclusivamente información registrada y no detectan la pérdida de capacidad de generar flujos de fondos futuros, profundizamos el examen mediante una prueba de detalle técnica: solicitamos formalmente a la Gerencia de Operaciones de Red el Informe Técnico de Desmantelamiento y Apagado de Centrales Telefónicas. Al cruzar dicho informe con el maestro de activos, constatamos que centrales analógicas de conmutación de cobre por un valor residual de $21.450 millones habían sido retiradas de servicio y desconectadas debido a la migración tecnológica integral a fibra óptica al hogar (FTTH). Conforme a la NIC 36 (Deterioro del Valor de los Activos) y la NIC 16 (párrafo 67), al carecer de valor de uso y de valor razonable menos costos de venta, correspondía reconocer una pérdida por desvalorización técnica o baja contable íntegra por $21.450 millones, omisión que originó una sobrevaluación del rubro."
        }
      ],
      conclusionNarrativa: "En cumplimiento estricto de la NIA 450 (Evaluación de las Incorrecciones Identificadas, párrafo 5) y las normas de la RT 37, el auditor no debe tratar los hallazgos de un mismo componente contable como eventos aislados. Si bien el desvío por falta de baja de redes vandalizadas determinado en PT-A1 ($6.890 millones) resultaba individualmente inferior al umbral mínimo de ajuste PAE ($8.311 millones), al agregarse con la sobrevaluación por obsolescencia tecnológica de centrales analógicas de PT-A4 ($21.450 millones), el desvío acumulado en el rubro Bienes de Uso alcanzó los $28.340 millones. Al superar holgadamente el umbral PAE, se procedió a formular el Asiento de Ajuste Propuesto AJ-01 a la Gerencia. Finalmente, al evaluar el impacto global del ajuste frente a la Materialidad de Planificación ($166.225 millones) y al Error Tolerable ($83.112 millones), se determinó que los $28.340 millones representan el 17% de la significatividad global, concluyendo que, tanto si la Gerencia acepta registrarlo como si opta por mantenerlo en planilla, el rubro Bienes de Uso no contiene incorrecciones materiales y presenta razonablemente su saldo patrimonial al 31 de diciembre de 2025."
    }
  },
  {
    id: "pt-b",
    codigo: "PT-B",
    programa: "PROGRAMA B",
    rubro: "Créditos por Ventas (Nota 5: $799.188M Cte + $940M No Cte = $800.128M)",
    esPrioritario: true,
    vinculadoCon: "PT-D (Ventas)",
    refLegajo: "Legajo Corriente — Sección B (Cédula Sumaria B-1 y Analíticas B-2 a B-4)",
    elaboradoPor: "Pisonero De Biase",
    revisadoPor: "Grebe",
    fecha: "18/01/2026",
    saldoSegunLibros: 800128,
    ajustePropuestoNeto: -9410,
    saldoAuditado: 790718,
    estadoPT: "Con Hallazgos Materiales (> PAE)",
    cedulaSumaria: [
      { subcuenta: "1.2.01 - Créditos por Ventas Comunes Corrientes Brutos (Nota 5 — Incluye incorporación TMA $421.919M bajo NIIF 3)", saldoLibros: 1067130, debe: 0, haber: 4180, saldoAuditado: 1062950, marca: "§ ⊗", refPT: "PT-B1" },
      { subcuenta: "1.2.02 - Otros Créditos por Ventas Corrientes ($2.977M) y No Corrientes ($940M - Nota 5) / B2B Personal Tech", saldoLibros: 3917, debe: 14620, haber: 0, saldoAuditado: 18537, marca: "© ⊗", refPT: "PT-B2" },
      { subcuenta: "1.2.03 - Previsión para Deudores Incobrables Acumulada (Nota 5 — Pérdida Crediticia Esperada NIIF 9)", saldoLibros: -270919, debe: 0, haber: 19850, saldoAuditado: -290769, marca: "∑ ⊗", refPT: "PT-B3" }
    ],
    procedimientosEjecutados: [
      {
        ref: "PT-B1",
        bloquePrograma: "1. Existencia, Propiedad y Valuación Inicial de Cartera TMA (NIIF 3 / NIA 505)",
        nombre: "Circularización a Grandes Clientes Corporativos B2B (Personal Tech), Valuación Inicial TMA (NIIF 3) y Cobros Posteriores",
        afirmaciones: ["Existencia", "Propiedad", "Medición"],
        marca: "© ✓ § ∑",
        muestra: "65 grandes cuentas corporativas y organismos públicos B2B (concentran el 62% del saldo corporativo) + 100% de la verificación del PPA de la cartera adquirida de Telefónica Móviles Argentina S.A. (TMA: $421.919M al 24/02/2025 bajo NIIF 3).",
        pasosConResultado: [
          {
            paso: "Circularización externa directa (NIA 505) a una muestra estratificada de 65 grandes cuentas corporativas B2B de Personal Tech y organismos públicos.",
            comoSeEjecuta: "Se seleccionan de los subdiarios de clientes en SAP SD/FI las 65 principales cuentas corporativas con saldos > PAE ($8.311M). Se preparan solicitudes de confirmación escrita de saldo en modalidad ciega/positiva con firma facultada de la Dirección Financiera de Telecom. Las cartas se remiten con instrucciones expresas de remitir la respuesta directamente al equipo de auditoría externa. Se realiza el seguimiento y control estricto de recepciones.",
            fuentes: "Subdiario de Clientes Corporativos en SAP SD/FI, contratos marco de telecomunicaciones y cartas de confirmación directa recibidas.",
            valores: "Muestra de $217.100 millones en cuentas corporativas seleccionadas sobre el total de créditos comerciales de Personal Tech.",
            resultado: "Se recibieron 54 respuestas conformes (tasa de respuesta del 83,1%) que ratifican sin discrepancias saldos a cobrar por $184.620 millones a nombre de Telecom Argentina S.A. (© §).",
            tabla: {
              cabeceras: ["Ref.", "Cliente Corporativo B2B / Cartera", "Saldo s/ Libros ($M)", "Resultado Circularización", "Cobro Posterior Enero 2026", "Diferencia ($M)", "Marcas"],
              filas: [
                { valores: ["B1.1", "Banco Santander Argentina S.A.", "$34.500", "Conforme ($34.500M)", "No aplicable (Confirmado)", "$0", "© §"] },
                { valores: ["B1.2", "YPF S.A. (Red de Estaciones y YPF Luz)", "$28.250", "Conforme ($28.250M)", "No aplicable (Confirmado)", "$0", "© §"] },
                { valores: ["B1.3", "Cencosud S.A. (Jumbo, Disco, Easy)", "$22.800", "Conforme ($22.800M)", "No aplicable (Confirmado)", "$0", "© §"] },
                { valores: ["B1.4", "Banco de Galicia y Buenos Aires S.A.U.", "$19.400", "Sin respuesta directa (Copia enviada)", "Extracto Galicia 12/01/26", "$0", "✓ §"] },
                { valores: ["B1.5", "Techint Compañía Técnica Internacional", "$18.900", "Conforme ($18.900M)", "No aplicable (Confirmado)", "$0", "© §"] },
                { valores: ["B1.6", "Ministerio de Seguridad de la Nación (Tetra 911)", "$16.750", "Sin respuesta directa (Trámite oficial)", "Acreditación BNA 19/01/26", "$0", "✓ §"] },
                { valores: ["B1.7", "Mercado Libre S.R.L. (Data Center & Cloud)", "$15.820", "Conforme ($15.820M)", "No aplicable (Confirmado)", "$0", "© §"] },
                { valores: ["B1.8", "Arcor S.A.I.C.", "$14.200", "Conforme ($14.200M)", "No aplicable (Confirmado)", "$0", "© §"] },
                { valores: ["B1.9", "Resto de Cuentas B2B Muestreadas (57 clientes)", "$46.480", "48 conformes / 9 con cobro posterior", "Acreditación bancaria enero 2026", "$0", "© ✓ §"] },
                { valores: ["B1.10", "Cartera Adquirida TMA (PPA NIIF 3 - 24/02/2025)", "$421.919", "Informe de valuación PPA independiente", "Recupero regular mar-dic 2025", "$0", "✓ §"] },
                { destacado: true, valores: ["TOTAL", "Total Muestra Corporativa B2B y Cartera TMA", "$639.019", "59,7% de Cobertura sobre Saldo Bruto", "100% Validado por Cobro / Confirmación", "$0", "© ✓ § ∑"] }
              ]
            }
          },
          {
            paso: "Aplicación de procedimientos alternativos de auditoría sobre las 11 cuentas no contestadas mediante la verificación de cobros posteriores en enero 2026.",
            comoSeEjecuta: "Para las 11 cuentas corporativas que no respondieron a la circularización ($32.480M), el equipo de auditoría aplicó el procedimiento alternativo previsto en la NIA 505: se cotejaron los recibos oficiales correlativos de cobranza en SAP, las órdenes de transferencia bancaria y los extractos bancarios oficiales de enero 2026 de Banco de la Nación Argentina, Banco Galicia y Banco Santander, verificando la acreditación íntegra de los fondos en las cuentas de Telecom.",
            fuentes: "Extractos bancarios de enero 2026 de BNA, Galicia y Santander, avisos de transferencia interbancaria y recibos de cobranza en SAP FI.",
            valores: "11 cuentas corporativas por un monto de $32.480 millones.",
            resultado: "Se verificó la cancelación efectiva del 100% de los saldos pendientes de las 11 cuentas no contestadas mediante extractos bancarios de enero 2026, sin registrarse saldos incobrables o ficticios (✓ §)."
          },
          {
            paso: "Auditoría de la asignación del precio de compra (PPA) bajo NIIF 3 de la cartera de clientes incorporada por la adquisición del 100% de Telefónica Móviles Argentina S.A. (TMA).",
            comoSeEjecuta: "Se analiza el informe técnico de valuación independiente (PPA) elaborado para la combinación de negocios del 24/02/2025. Se comprueba: 1) El reconocimiento a valor razonable inicial de los créditos incorporados de TMA ($421.919M netos de ajustes de adquisición). 2) La asimetría matemática entre el Balance Consolidado (que incorpora el 100% del stock de créditos de TMA al 31/12) y el Estado de Resultados (que solo consolida 10 meses de ventas de TMA, de marzo a diciembre 2025), lo cual explica técnicamente la duplicación del rubro (+105,25%) frente al incremento de ventas (+53,02%).",
            fuentes: "Contrato de compraventa de acciones de TMA, informe técnico de PPA bajo NIIF 3, asientos de consolidación inicial en SAP y Nota 29 de los Estados Financieros.",
            valores: "Cartera de créditos de TMA incorporada al 24/02/2025 por $421.919 millones.",
            resultado: "La incorporación de la cartera de créditos de TMA se encuentra correctamente valuada a su valor razonable de entrada según NIIF 3 y justifica técnicamente el incremento del plazo promedio de cobro y del saldo del rubro al cierre (✓ § ∑)."
          }
        ],
        procedimientoDetalle: "1) Circularización B2B: Se remitieron solicitudes ciegas a 65 grandes cuentas corporativas de Personal Tech, recibiendo 54 respuestas conformes sin discrepancias. 2) Cobros posteriores: Para las 11 cuentas sin respuesta, se verificó el 100% del cobro en extractos bancarios de enero 2026. 3) Cartera TMA: Se auditó el informe de PPA bajo NIIF 3 corroborando la medición a valor razonable inicial de $421.919M y la justificación técnica de la duplicación interanual del rubro.",
        fuentes: "Subdiario de clientes SAP SD/FI, cartas de circularización de saldos, extractos bancarios de enero 2026 e informe de PPA bajo NIIF 3.",
        valores: "Muestra corporativa B2B de $217.100M y cartera TMA incorporada de $421.919M sobre $1.071.047M de créditos brutos totales.",
        defensaOral: "Profesor, en PT-B1 auditamos la Existencia y Propiedad de los saldos corporativos B2B mediante confirmación externa directa a 65 grandes clientes: obtuvimos 54 respuestas conformes y para las 11 restantes verificamos el 100% del cobro posterior en los extractos bancarios de enero 2026. Además, auditamos el PPA de la adquisición de Telefónica Móviles Argentina (TMA) bajo NIIF 3, validando que el stock de créditos incorporado de $421.919M explica técnicamente por qué los Créditos se duplicaron (+105,25%) mientras el Estado de Resultados solo computa 10 meses de ventas mar-dic (+53,02%).",
        afirmacionesDetalle: "Valida Existencia (deudores reales y exigibles), Propiedad (titularidad jurídica exclusiva de Telecom sin cesiones no contabilizadas) y Medición Inicial (valor razonable bajo NIIF 3)."
      },
      {
        ref: "PT-B2",
        bloquePrograma: "2. Integridad, Corte de Facturación B2B y Conciliación de Cobranzas en Tránsito (NIIF 15 / AJ-02)",
        nombre: "Prueba de Corte de Facturación B2B (Personal Tech) y Conciliación de Agentes de Cobro Externos",
        afirmaciones: ["Integridad", "Existencia", "Medición"],
        marca: "✓ § ⊗",
        muestra: "100% de las actas de entrega/conformidad e hitos de proyectos corporativos B2B firmados entre el 15/12/2025 y el 15/01/2026 + 100% de las conciliaciones de agentes de cobranza externa (Rapipago, Pago Fácil, Billeteras Virtuales) al 31/12/2025.",
        pasosConResultado: [
          {
            paso: "Prueba sustantiva de corte de facturación de servicios corporativos B2B (Personal Tech) bajo NIIF 15 para validar el devengamiento íntegro de ingresos al cierre.",
            comoSeEjecuta: "Se cotejan las actas de recepción provisoria y definitiva de proyectos de conectividad Cloud, SD-WAN y ciberseguridad firmadas entre el 15/12/2025 y el 15/01/2026 contra las órdenes de facturación en SAP SD. Se verifica si existen prestaciones completadas y aceptadas por el cliente antes del 31/12/2025 que no hayan sido facturadas ni devengadas como servicios pendientes de facturación (unbilled revenue) en el ejercicio 2025 conforme a la NIIF 15.",
            fuentes: "Actas de conformidad y recepción de servicios B2B, órdenes de trabajo de ingeniería de red, contratos de servicio corporativo y módulo de facturación SAP SD.",
            valores: "Ventana de corte de +/- 15 días respecto al 31/12/2025 sobre proyectos corporativos de Personal Tech.",
            resultado: "Se identificaron 8 hitos de integración Cloud y Ciberseguridad con acta de conformidad formal firmada por clientes corporativos entre el 20 y el 30 de diciembre de 2025 por un total de $14.620 millones, cuyas facturas comerciales fueron emitidas en enero 2026 sin haberse devengado el activo ni el ingreso al 31/12/2025 (debilidad CCI-02 preg. 16) (⊗ ✓).",
            tabla: {
              cabeceras: ["Ref.", "Proyecto / Cliente Corporativo / Interfaz", "Fecha Hito / Cobro", "Fecha Contabiliz. SAP", "Importe ($M)", "Desvío / Tratamiento de Auditoría", "Marcas"],
              filas: [
                { valores: ["B2.1", "Banco Macro S.A. - Enlace SD-WAN Red Sucursales", "22/12/2025", "08/01/2026", "$3.450", "Hito B2B devengado no facturado (+A / R+)", "⊗ ✓"] },
                { valores: ["B2.2", "Pan American Energy - Nube Híbrida Personal Tech", "26/12/2025", "09/01/2026", "$2.890", "Hito B2B devengado no facturado (+A / R+)", "⊗ ✓"] },
                { valores: ["B2.3", "ARCA / AFIP - Mantenimiento Enlaces Críticos", "28/12/2025", "12/01/2026", "$2.650", "Hito B2B devengado no facturado (+A / R+)", "⊗ ✓"] },
                { valores: ["B2.4", "Telecomunicaciones Provinciales - Red Fibra", "29/12/2025", "14/01/2026", "$2.180", "Hito B2B devengado no facturado (+A / R+)", "⊗ ✓"] },
                { valores: ["B2.5", "Cencosud S.A. - Infraestructura WiFi Retail", "30/12/2025", "11/01/2026", "$1.850", "Hito B2B devengado no facturado (+A / R+)", "⊗ ✓"] },
                { valores: ["B2.6", "Otros 3 Hitos Menores de Integración Cloud B2B", "20-30/12/2025", "Enero 2026", "$1.600", "Hito B2B devengado no facturado (+A / R+)", "⊗ ✓"] },
                { valores: ["B2.7", "Rapipago (Gire S.A.) - Recaudación 30 y 31/12", "30-31/12/2025", "Pendiente 02/01/26", "$2.240", "Cobranza en tránsito pendiente acreditar (+A / -A)", "⊗ ✓"] },
                { valores: ["B2.8", "Pago Fácil y Billeteras Virtuales (Mercado Pago / Ualá)", "31/12/2025", "Pendiente 02/01/26", "$1.940", "Cobranza en tránsito pendiente acreditar (+A / -A)", "⊗ ✓"] },
                { valores: ["SUB-1", "Subtotal Hitos B2B Devengados no Facturados", "20-30/12/2025", "Enero 2026", "$14.620", "Ajuste AJ-02: Debe Otros Créditos / Haber Ventas", "⊗ ✓ ∑"] },
                { valores: ["SUB-2", "Subtotal Cobranzas Externas en Tránsito", "30-31/12/2025", "Enero 2026", "$4.180", "Ajuste AJ-02: Debe Fondos en Tránsito / Haber Créditos", "⊗ ✓ ∑"] },
                { destacado: true, valores: ["TOTAL", "Total Ajuste Propuesto de Corte AJ-02", "31/12/2025", "-", "$18.800", "Supera PAE ($8.311M) — Ajuste Obligatorio", "⊗ ✓ § ∑"] }
              ]
            }
          },
          {
            paso: "Auditoría de conciliaciones de agentes externos de recaudación masiva al 31/12/2025 (Rapipago, Pago Fácil y billeteras virtuales).",
            comoSeEjecuta: "Se examinan las rendiciones electrónicas de cobranzas remitidas por las redes de cobranza extrabancaria (Gire S.A. / Rapipago, Western Union / Pago Fácil) y billeteras virtuales (Mercado Pago, Ualá, Personal Pay) con fecha valor 30 y 31 de diciembre de 2025. Se cruzan contra las acreditaciones en cuentas bancarias de Telecom y la desafectación en los auxiliares de clientes en SAP.",
            fuentes: "Archivos EDI de rendición diaria de recaudadores, extractos bancarios de fin de año y subdiario de cobranzas de SAP.",
            valores: "Cobranzas masivas de clientes recaudadas los días 30 y 31/12 por $4.180 millones.",
            resultado: "Se verificó que $4.180 millones abonados por los usuarios en agentes externos el 30 y 31 de diciembre ya habían extinguido la deuda comercial de los clientes pero permanecían pendientes de acreditación bancaria e imputación en SAP al cierre (debilidad CCI-02 preg. 5), sobrevaluando Créditos por Ventas Comunes en $4.180M (⊗ ✓)."
          },
          {
            paso: "Formulación y cuantificación del Asiento de Ajuste Propuesto AJ-02 por corte de facturación y cobranzas en tránsito.",
            comoSeEjecuta: "Al sumar el desvío por hitos B2B omitidos de facturar ($14.620M) y las cobranzas de agentes externos en tránsito no desafectadas ($4.180M), el hallazgo totaliza $18.800 millones. Al superar ampliamente el umbral PAE ($8.311 millones), se formula el Asiento de Ajuste AJ-02: Debe 'Otros Créditos por Ventas - Deudores por Hitos B2B' por $14.620M, Debe 'Caja y Bancos - Recaudaciones a Depositar / En Tránsito' por $4.180M, Haber 'Ventas B2B Personal Tech' por $14.620M y Haber 'Créditos por Ventas Comunes Masivos B2C' por $4.180M.",
            fuentes: "Cédula Analítica PT-B2, Planilla de Ajustes Propuestos (PAE) y Normas NIA 450 y NIIF 15.",
            valores: "Impacto total del ajuste AJ-02: $18.800 millones (Supera PAE $8.311M).",
            resultado: "Asiento de Ajuste AJ-02 formulado a la Gerencia. Con su incorporación, el rubro Créditos por Ventas reconoce +$10.440M netos ($14.620M a facturar menos $4.180M de cobranzas) y el Resultado del Ejercicio mejora en +$14.620M por ingresos devengados en 2025 (⊗ § ∑)."
          }
        ],
        procedimientoDetalle: "1) Corte B2B NIIF 15: Se auditaron actas de recepción de servicios corporativos firmadas entre el 15/12/2025 y el 15/01/2026, detectando 8 hitos completados en diciembre 2025 por $14.620M facturados recién en enero 2026 sin devengar al cierre. 2) Cobranzas en tránsito: Se auditaron las interfaces de recaudación masiva (Rapipago, Pago Fácil, billeteras), detectando $4.180M abonados por usuarios el 30-31/12 pendientes de acreditar en SAP. 3) Ajuste AJ-02: Se propuso el ajuste por $18.800M regularizando ventas devengadas, fondos en tránsito y cancelando deudores ya cobrados.",
        fuentes: "Actas de conformidad de servicios B2B, órdenes de facturación en SAP SD, rendiciones de agentes recaudadores (Gire/Western Union) y extractos bancarios.",
        valores: "8 hitos B2B por $14.620M y cobranzas en tránsito por $4.180M. Total AJ-02: $18.800M (> PAE $8.311M).",
        defensaOral: "Profesor, en PT-B2 auditamos el corte de operaciones al 31/12/2025 y detectamos dos situaciones clave que originaron el Ajuste AJ-02: primero, 8 hitos de integración Cloud y Ciberseguridad de Personal Tech con actas de conformidad firmadas en diciembre por $14.620M que recién se facturaron en enero 2026 sin devengar al cierre, violando el principio de devengado de la NIIF 15; segundo, $4.180M abonados por los clientes en Rapipago y billeteras virtuales el 30 y 31 de diciembre que aún no habían sido acreditados en sus cuentas corrientes en SAP. Propusimos el ajuste AJ-02 por $18.800M registrando el activo y la venta devengada y reclasificando las cobranzas en tránsito a disponibilidades.",
        afirmacionesDetalle: "Valida Integridad (reconocimiento de todas las ventas y créditos devengados en 2025), Existencia (eliminación de saldos de clientes ya cancelados en recaudadores) y Medición (corte estricto bajo NIIF 15)."
      },
      {
        ref: "PT-B3",
        bloquePrograma: "3. Medición y Exposición de la Previsión NIIF 9 — Reproceso Analítico con TAACs (AJ-03)",
        nombre: "Recálculo de la Matriz de Antigüedad de Deuda (Aging) y Pérdida Crediticia Esperada (ECL NIIF 9)",
        afirmaciones: ["Medición", "Exposición"],
        marca: "∑ ⊗",
        muestra: "100% del padrón unificado de deudores por servicios (Telecom + TMA = $1.071.047M brutos, >18 millones de abonados) mediante software de auditoría asistido por computador (TAACs / scripts Python).",
        pasosConResultado: [
          {
            paso: "Extracción y reproceso analítico del 100% de la base unificada de antigüedad de saldos (aging) al 31/12/2025 mediante software TAACs.",
            comoSeEjecuta: "El equipo de auditoría extrae la base de datos íntegra de cuentas por cobrar comerciales directamente de las tablas base de SAP FSCM y Convergent Invoicing (BAPI de clientes y partidas abiertas). Mediante scripts automatizados en Python/TAACs, se recalcula la antigüedad exacta de cada documento por fecha de vencimiento contractual, clasificándolos en 5 tramos cronológicos: a vencer, 1 a 30 días, 31 a 90 días, 91 a 180 días y más de 180 días de mora.",
            fuentes: "Base de partidas abiertas de SAP FSCM (Financial Supply Chain Management) y módulo de facturación masiva Convergent Invoicing.",
            valores: "Padrón unificado de más de 18 millones de abonados y saldos brutos por $1.071.047 millones.",
            resultado: "La base unificada totaliza $1.071.047 millones brutos ($1.070.107M corrientes y $940M no corrientes). El reproceso con TAACs garantizó la integridad del 100% de las partidas sin duplicaciones ni omisiones en la clasificación por tramos (∑ §)."
          },
          {
            paso: "Evaluación técnica y calibración de la matriz de Pérdida Crediticia Esperada (ECL) bajo el enfoque simplificado de NIIF 9.",
            comoSeEjecuta: "Conforme a la NIIF 9 (Instrumentos Financieros, párrafos 5.5.15 y B5.5.35), para créditos comerciales sin componente financiero significativo se aplica la matriz de provisión basada en: 1) Tasas históricas de incobrabilidad observadas por tramo de mora en los últimos 36 meses. 2) Ajuste prospectivo (forward-looking information) considerando la evolución de la inflación (IPC), tasa de desempleo y pérdida de poder adquisitivo del segmento consumidor en Argentina.",
            fuentes: "Modelo actuarial de riesgo crediticio de Telecom, matrices históricas de morosidad y proyecciones macroeconómicas de consenso.",
            valores: "Tasas calibradas de pérdida esperada: 1,20% corriente; 4,50% de 1 a 30d; 18,20% de 31 a 90d; 45,00% de 91 a 180d; 92,00% mora > 180d regular y 80,00% mora > 180d TMA.",
            resultado: "La matriz de provisionamiento bajo NIIF 9 se encuentra metodológicamente calibrada con parámetros macroeconómicos realistas para el contexto argentino (✓ ∑)."
          },
          {
            paso: "Identificación del defecto de provisionamiento en la cartera migrada de TMA con mora > 180 días y formulación del Asiento de Ajuste AJ-03.",
            comoSeEjecuta: "Al cruzar el padrón unificado recalculado con TAACs contra la corrida oficial de SAP FSCM expuesta en la Nota 5 de Telecom, el equipo de auditoría descubrió que un lote de clientes masivos transferido desde los sistemas legados de Telefónica Móviles Argentina (TMA) con morosidad superior a 180 días por un total de $24.812 millones, había quedado excluido del proceso automático mensual de cálculo de previsión por inconsistencias de parametrización en los campos de interfaz (debilidad identificada en CCI-02 preg. 19 y CCI-05 preg. 19). Mientras la Sociedad expone una previsión de $(270.919) millones, la previsión requerida asciende a $(290.769) millones, arrojando una subestimación de $19.850 millones.",
            fuentes: "Cédula Analítica PT-B3, tablas de corrida mensual de SAP FSCM y cuadros de la Nota 5 de los Estados Financieros Consolidados.",
            valores: "Previsión s/ Libros: $(270.919)M vs. Previsión Auditada: $(290.769)M. Defecto de Previsión: $19.850 millones (> PAE $8.311M).",
            resultado: "Se formuló el Asiento de Ajuste Propuesto AJ-03 a la Gerencia: Debe 'Cargo por Pérdida Crediticia Esperada / Deudores Incobrables' (Resultado Operativo) por $19.850M y Haber 'Previsión para Deudores Incobrables Acumulada' (Cuenta Regularizadora del Activo) por $19.850M (⊗ ∑).",
            tabla: {
              cabeceras: ["Tramo de Antigüedad / Cartera", "Saldo Bruto al Cierre ($M)", "% Pérdida Esperada (ECL NIIF 9)", "Previsión Calculada TAACs ($M)", "Previsión s/ Libros SAP ($M)", "Diferencia Ajuste AJ-03 ($M)", "Marcas"],
              filas: [
                { valores: ["B3.1 - No vencidos (A vencer corriente)", "$624.120", "1,20%", "$7.490", "$7.490", "$0", "✓ §"] },
                { valores: ["B3.2 - Vencidos de 1 a 30 días", "$148.500", "4,50%", "$6.682", "$6.682", "$0", "✓ §"] },
                { valores: ["B3.3 - Vencidos de 31 a 90 días", "$92.350", "18,20%", "$16.808", "$16.808", "$0", "✓ §"] },
                { valores: ["B3.4 - Vencidos de 91 a 180 días", "$68.420", "45,00%", "$30.789", "$30.789", "$0", "✓ §"] },
                { valores: ["B3.5 - Vencidos > 180 días (Telecom regular)", "$112.845", "92,00%", "$103.818", "$103.818", "$0", "✓ §"] },
                { valores: ["B3.6 - Cartera migrada TMA mora > 180 días (Omitida)", "$24.812", "80,00%", "$19.850", "$0", "$19.850", "⊗ ∑"] },
                { destacado: true, valores: ["TOTAL", "$1.071.047", "Tasa Ponderada 27,1%", "$290.769", "$270.919", "$19.850", "∑ ⊗"] }
              ]
            }
          }
        ],
        procedimientoDetalle: "1) Reproceso con TAACs: Se procesó el 100% de la base de partidas abiertas de SAP FSCM ($1.071.047M brutos) clasificando los saldos por tramos cronológicos. 2) Matriz NIIF 9: Se aplicó la matriz de provisionamiento bajo el enfoque simplificado de pérdida esperada combinando tasas históricas y factores macroeconómicos. 3) Defecto TMA: Se detectó que $24.812M de cartera migrada de TMA con mora > 180 días no fueron impactados por la previsión automática por error de interfaz (CCI-02 preg. 19), determinando una subestimación de $19.850M formulada como Asiento de Ajuste AJ-03.",
        fuentes: "Base de partidas abiertas de SAP FSCM, tablas de parámetros de riesgo NIIF 9, script TAACs en Python y Nota 5 de los Estados Contables.",
        valores: "Padrón unificado de $1.071.047M brutos. Previsión contable $(270.919)M vs Previsión auditada $(290.769)M. Ajuste AJ-03: $19.850M (> PAE $8.311M).",
        defensaOral: "Profesor, en PT-B3 auditamos la afirmación de Medición de la Previsión para Deudores Incobrables bajo NIIF 9 utilizando software de auditoría asistido por computador (TAACs) sobre los más de 18 millones de abonados. Al recalcular la matriz de pérdida crediticia esperada sobre el padrón unificado de Telecom y TMA ($1.071.047M brutos), detectamos que un lote de clientes masivos migrado de los sistemas heredados de Telefónica con mora superior a 180 días ($24.812M) había quedado excluido del proceso automático de previsión en SAP por una falla de interfaz detectada en el CCI-02. Esto generó un defecto de previsión de $19.850 millones frente a los $(270.919)M registrados en libros. Propusimos el ajuste AJ-03 elevando la previsión a $(290.769)M con cargo a resultados del ejercicio.",
        afirmacionesDetalle: "Valida Medición (valuación de deudores incobrables conforme a la Pérdida Crediticia Esperada de NIIF 9) y Exposición (revelación íntegra de la evolución de la previsión en Nota 5)."
      }
    ],
    conclusionRubro: "Se valida la apertura de la Nota 5 ($800.128M netos consolidados, incluyendo la cartera de TMA bajo NIIF 3) y se formularon formalmente los ajustes AJ-02 (devengado B2B por $14.620M y cobranzas en tránsito por $4.180M) y AJ-03 (refuerzo de Previsión NIIF 9 por $19.850M). Con dichos ajustes, el rubro presenta razonablemente su saldo patrimonial al 31/12/2025.",
    resumenMetodologicoRubro: {
      titulo: "Exposición Metodológica Integral: Auditoría de Créditos por Ventas (Nota 5)",
      subtitulo: "Fundamentación técnica secuencial de las Cédulas Analíticas PT-B1, PT-B2 y PT-B3: circularización corporativa B2B, cartera adquirida de TMA (NIIF 3), prueba de corte de facturación e interfaces (AJ-02), y recálculo con TAACs de la matriz de pérdida crediticia esperada bajo NIIF 9 (AJ-03).",
      introduccion: "El rubro Créditos por Ventas representa un saldo neto consolidado de $800.128 millones al 31/12/2025 ($799.188M corrientes y $940M no corrientes en Nota 5), registrando un incremento del +105,25% frente a 2024 ($389.375M) que duplica el ritmo de crecimiento de las Ventas (+53,02%). En la etapa de planificación se determinó un Riesgo Inherente y de Control ALTO derivado de tres factores: la incorporación de la cartera de Telefónica Móviles Argentina S.A. ($421.919M a valor razonable bajo NIIF 3), los desfasajes en cobranzas recaudadas por agentes externos (CCI-02 preg. 5), y la complejidad de la matriz de provisionamiento de incobrables bajo NIIF 9 frente a carteras masivas migradas. Aplicando el marco normativo de la RT 37, NIA 500, NIA 505 y NIA 520, estructuramos un enfoque sustantivo integral basado en circularización externa y cobros posteriores (PT-B1), prueba de corte de facturación e interfaces de recaudación (PT-B2) y recálculo masivo de la morosidad y pérdida crediticia esperada mediante software TAACs (PT-B3).",
      pasosNarrativos: [
        {
          pt: "PT-B1",
          etiqueta: "Paso 1 • Confirmación y Cobros Posteriores",
          titulo: "Circularización a Grandes Clientes Corporativos B2B (Personal Tech), Valuación Inicial TMA (NIIF 3) y Cobros Posteriores",
          afirmacion: "Afirmaciones Auditadas: Existencia, Propiedad y Medición Inicial (NIA 505 / NIIF 3)",
          relato: "En PT-B1 auditamos la existencia real y titularidad de los créditos seleccionando una muestra estratificada de 65 grandes cuentas corporativas y organismos públicos de Personal Tech que concentran el 62% del saldo corporativo. Enviamos cartas de circularización ciega/positiva con recepción directa en la casilla del equipo de auditoría, obteniendo 54 respuestas conformes ($184.620M) sin discrepancias (©). Para las 11 cuentas restantes no contestadas ($32.480M), aplicamos procedimientos alternativos mediante el cotejo de cobranzas posteriores en extractos bancarios oficiales de enero 2026 (Banco Nación, Galicia, Santander) y recibos oficiales correlativos, validando la cancelación efectiva del 100% de dichos saldos (✓). Asimismo, auditamos el informe de valuación independiente (PPA) bajo NIIF 3 por la adquisición de Telefónica Móviles Argentina S.A. (TMA) del 24/02/2025, constatando que la cartera incorporada a valor razonable ($421.919M) y la consolidación de 10 meses de ventas en el Estado de Resultados explican razonablemente la aparente asimetría de rotación y duplicación del rubro. El procedimiento concluyó con resultado satisfactorio y sin desvíos."
        },
        {
          pt: "PT-B2",
          etiqueta: "Paso 2 • Corte de Operaciones y Recaudación Externa",
          titulo: "Prueba de Corte de Facturación B2B (Personal Tech) e Interfaces de Cobro en Tránsito (AJ-02)",
          afirmacion: "Afirmaciones Auditadas: Integridad, Existencia y Medición (NIIF 15 / RT 37)",
          relato: "En PT-B2 auditamos el corte de operaciones examinando los contratos, actas de recepción provisoria/definitiva y reportes de facturación de servicios corporativos B2B emitidos entre el 15/12/2025 y el 15/01/2026, junto con las conciliaciones de agentes de recaudación masiva (Rapipago, Pago Fácil y billeteras virtuales) al 31/12. Identificamos dos desvíos de control interno (CCI-02 preg. 5 y 16): 1) Ocho hitos de proyectos de conectividad Cloud y Ciberseguridad de Personal Tech con actas de conformidad técnica firmadas entre el 20 y el 30 de diciembre de 2025 por $14.620M que recién fueron facturados en enero 2026, omitiéndose su devengamiento en el ejercicio 2025 exigido por NIIF 15. 2) Cobranzas recaudadas por Rapipago y billeteras los días 30 y 31 de diciembre por $4.180M ya canceladas por clientes pero pendientes de acreditar en el sistema al cierre. Al totalizar $18.800 millones, superó el umbral PAE ($8.311M), por lo que se formuló a la Gerencia el Asiento de Ajuste Propuesto AJ-02 (+Deudores B2B a facturar $14.620M, +Fondos en Tránsito $4.180M, +Ventas B2B $14.620M, -Deudores Masivos B2C $4.180M)."
        },
        {
          pt: "PT-B3",
          etiqueta: "Paso 3 • Reproceso NIIF 9 y Pérdida Crediticia Esperada",
          titulo: "Recálculo de la Matriz de Antigüedad de Deuda (Aging) y Previsión Acumulada NIIF 9 con TAACs (AJ-03)",
          afirmacion: "Afirmaciones Auditadas: Medición (Valuación NIIF 9) y Exposición (Nota 5)",
          relato: "En PT-B3 ejecutamos un reproceso de auditoría asistido por computador (TAACs) sobre el 100% del padrón unificado de deudores de Telecom y TMA ($1.071.047 millones de saldos brutos y más de 18 millones de líneas activas). Clasificamos cronológicamente la cartera por tramos de vencimiento y recalculamos la matriz simplificada de Pérdida Crediticia Esperada (ECL NIIF 9) incorporando tasas históricas de incumplimiento y factores macroeconómicos prospectivos (inflación y caída del salario real). Al contrastar nuestro recálculo contra los registros de la Sociedad, detectamos que una sub-cartera masiva migrada de los sistemas legados de TMA con mora superior a 180 días ($24.812M) había quedado excluida de la rutina mensual de cálculo automático en SAP FSCM (debilidad identificada en CCI-02 preg. 19 y CCI-05 preg. 19). Mientras la Sociedad exponía en Nota 5 una previsión acumulada de $(270.919) millones, la previsión requerida asciende a $(290.769) millones, determinándose un defecto de estimación de $19.850 millones. Al superar holgadamente el umbral PAE ($8.311M), formulamos el Asiento de Ajuste Propuesto AJ-03 debitando Quebranto por Incobrables en el Estado de Resultados y acreditando la Previsión para Deudores Incobrables Acumulada."
        }
      ],
      conclusionNarrativa: "En cumplimiento de la NIA 450 y la RT 37, el auditor evalúa las incorrecciones de forma agregada. En el rubro Créditos por Ventas se determinaron dos ajustes: AJ-02 por $18.800 millones (con impacto neto en créditos de +$10.440M) y AJ-03 por $19.850 millones (disminución de créditos por mayor previsión), totalizando un ajuste neto sobre el rubro de -$9.410 millones. Si bien ambos ajustes superan individualmente el umbral PAE ($8.311 millones) y fueron debidamente propuestos a la Gerencia, al compararse con el Error Tolerable de Ejecución ($83.112 millones) y la Materialidad Global de Planificación ($166.225 millones), el efecto neto acumulado representa apenas el 11,3% del ET y el 5,7% de la Materialidad Global. Por lo tanto, con la incorporación de los ajustes o su consideración en la evaluación de incorrecciones no corregidas, el saldo patrimonial auditado ($790.718 millones) y la apertura de la Nota 5 presentan razonablemente la situación crediticia de Telecom Argentina S.A. al 31 de diciembre de 2025 de conformidad con las NIIF (NIIF 9, NIIF 15 y NIIF 3)."
    }
  },
  {
    id: "pt-c",
    codigo: "PT-C",
    programa: "PROGRAMA C",
    rubro: "Préstamos (Nota 14)",
    refLegajo: "Legajo Corriente — Sección C (Cédula Sumaria C-1 y Analíticas C-2 a C-5)",
    elaboradoPor: "Grebe",
    revisadoPor: "Pisonero De Biase",
    fecha: "22/01/2026",
    saldoSegunLibros: 5436615,
    ajustePropuestoNeto: 0,
    saldoAuditado: 5436615,
    estadoPT: "Conforme (Sin Ajustes Materiales)",
    cedulaSumaria: [
      { subcuenta: "2.1.01 - Obligaciones Negociables (ONs Ley NY y Ley Argentina - Corriente y No Corriente)", saldoLibros: 3642530, debe: 0, haber: 0, saldoAuditado: 3642530, marca: "© § ∑", refPT: "PT-C1 / PT-C3" },
      { subcuenta: "2.1.02 - Préstamos Bancarios y Organismos Multilaterales (IFC / BID / Finnvera)", saldoLibros: 1685905, debe: 0, haber: 0, saldoAuditado: 1685905, marca: "© ✓ ∑", refPT: "PT-C1 / PT-C2" },
      { subcuenta: "2.1.03 - Intereses Devengados e Instrumentos Financieros Derivados (IFD)", saldoLibros: 108180, debe: 0, haber: 0, saldoAuditado: 108180, marca: "✓ ∑", refPT: "PT-C3 / PT-C4" }
    ],
    procedimientosEjecutados: [
      {
        ref: "PT-C1",
        nombre: "Circularización Directa al 100% de Bancos, Fiduciarios y Caja de Valores S.A.",
        afirmaciones: ["Existencia", "Propiedad"],
        muestra: "100% de las entidades financieras acreedoras y Agente Pagador de Obligaciones Negociables.",
        resultado: "Se obtuvo confirmación directa del 100% de las líneas bancarias y series de ONs vigentes al 31/12/2025 (©), conciliando capital nominal, tasas y garantías con los registros de SAP.",
        marca: "© ✓"
      },
      {
        ref: "PT-C2",
        nombre: "Revisión de Actas de Directorio/Asamblea y Prueba de Pasivos No Registrados",
        afirmaciones: ["Integridad"],
        muestra: "100% de las Actas de Directorio y Asamblea 2025 + Extractos bancarios de enero y febrero 2026.",
        resultado: "Todas las emisiones y refinanciaciones aprobadas en actas se encuentran íntegramente contabilizadas (✓). No se detectaron pagos posteriores en enero 2026 de pasivos omitidos al cierre.",
        marca: "✓ §"
      },
      {
        ref: "PT-C3",
        nombre: "Recálculo de Conversión en Moneda Extranjera (TC BNA $/US$ 1.455,00) y Tasa Efectiva",
        afirmaciones: ["Medición"],
        muestra: "100% de los pasivos denominados en dólares estadounidenses (US$ 3.736,5 millones).",
        resultado: "La conversión de los pasivos en moneda extranjera fue verificada al tipo de cambio oficial vendedor del Banco de la Nación Argentina al 31/12/2025 ($/US$ 1.455,00) (∑). Se identificó una diferencia menor en el devengamiento de gastos de emisión por tasa efectiva de $3.120M, inferior al umbral mínimo PAE ($8.311M), por lo que no amerita ajuste.",
        marca: "∑ ✓"
      },
      {
        ref: "PT-C4",
        nombre: "Verificación de Cumplimiento de Covenants Financieros y Apertura en Notas",
        afirmaciones: ["Exposición"],
        muestra: "100% de los contratos con cláusulas de resguardo (Ratio Deuda Neta / EBITDA y Cobertura de Intereses).",
        resultado: "Telecom cumple holgadamente con los ratios financieros exigidos por los acreedores internacionales y expone adecuadamente los vencimientos corrientes y no corrientes en Notas a los EECC (✓).",
        marca: "✓"
      }
    ],
    conclusionRubro: "El rubro Préstamos ($5.436.615 millones) se encuentra razonablemente valuado y expuesto al 31/12/2025 conforme a las normas contables vigentes."
  },
  {
    id: "pt-d",
    codigo: "PT-D",
    programa: "PROGRAMA D",
    rubro: "Ventas (Nota 24)",
    vinculadoCon: "PT-B (Créditos por Ventas)",
    refLegajo: "Legajo Corriente — Sección D (Cédula Sumaria D-1 y Analíticas D-2 a D-4)",
    elaboradoPor: "Ing. M. Valdés / Pisonero De Biase",
    revisadoPor: "Grebe",
    fecha: "25/01/2026",
    saldoSegunLibros: 8328814,
    ajustePropuestoNeto: 3380,
    saldoAuditado: 8332194,
    estadoPT: "Con Ajustes de Corte y Reclasificación NIIF 15",
    cedulaSumaria: [
      { subcuenta: "4.1.01 - Ventas Servicios Móviles (Personal 4G/5G)", saldoLibros: 3498100, debe: 0, haber: 0, saldoAuditado: 3498100, marca: "§ ∑", refPT: "PT-D1" },
      { subcuenta: "4.1.02 - Ventas Internet Fija (FTTH / HFC Banda Ancha)", saldoLibros: 2415350, debe: 0, haber: 0, saldoAuditado: 2415350, marca: "§ ∑", refPT: "PT-D1" },
      { subcuenta: "4.1.03 - Ventas TV Paga, Streaming y Contenidos (Flow)", saldoLibros: 1332610, debe: 11240, haber: 0, saldoAuditado: 1321370, marca: "§ ⊗", refPT: "PT-D3" },
      { subcuenta: "4.1.04 - Soluciones Digitales Corporativas B2B (Personal Tech) y Fija", saldoLibros: 1082754, debe: 0, haber: 14620, saldoAuditado: 1097374, marca: "✓ ⊗", refPT: "PT-D2" }
    ],
    procedimientosEjecutados: [
      {
        ref: "PT-D1",
        nombre: "Prueba Analítica Sustantiva Global (Parque Promedio de Clientes × ARPU Ponderado)",
        afirmaciones: ["Integridad", "Medición"],
        muestra: "100% de las ventas recurrentes mensuales de los 12 meses de 2025 expresadas en moneda homogénea al 31/12/2025.",
        resultado: "La estimación independiente (21,1M de accesos móviles, 4,1M banda ancha y 3,5M Flow multiplicados por sus respectivos ARPU mensuales reexpresados por IPC) arrojó una desviación inferior al 0,68% respecto al saldo contable, dentro del umbral de precisión aceptable (∑).",
        marca: "∑ ✓"
      },
      {
        ref: "PT-D2",
        nombre: "Auditoría de Interfaces Comerciales Legacy vs. ERP SAP, Asignación NIIF 15 y Tasación de CDRs",
        afirmaciones: ["Existencia", "Integridad", "Medición"],
        muestra: "Logs de interfaces diarias de los 12 meses + 120 facturas convergentes B2C y B2B cruzadas contra estado activo (churn) y Call Detail Records (CDR).",
        resultado: "Los comprobantes de la muestra corresponden a líneas activas, coinciden con el tráfico tasado, asignan razonablemente las bonificaciones de paquetes convergentes (NIIF 15), netean el IVA de la línea de ventas y devengan la Tasa de Control ENACOM (0,50%) y Fondo de Servicio Universal (1,00% - Ley 27.078) en Gastos Operativos (✓). Se verificó que las interfaces heredadas ex Cablevisión requieren conciliaciones manuales mensuales (CCI-05 preg. 19), habiéndose validado los ajustes de cuadre al cierre.",
        marca: "✓ §"
      },
      {
        ref: "PT-D3",
        nombre: "Revisión de Reconocimiento Principal vs. Agente en Plataformas de Streaming (Flow)",
        afirmaciones: ["Propiedad", "Exposición"],
        muestra: "100% de los contratos de distribución de OTTs y plataformas de streaming de terceros integradas en decodificadores Flow.",
        resultado: "Se identificó que en 2 nuevos acuerdos promocionales lanzados en el 4° trimestre de 2025, la facturación cobrada por cuenta y orden del proveedor externo de streaming fue contabilizada por su importe bruto ($14.050M) en lugar de reconocer únicamente la comisión comercial de Telecom ($2.810M), sobreestimando en $11.240 millones tanto las Ventas como los Costos Operativos (sin impacto en el resultado neto, pero requiriendo reclasificación por NIIF 15) (⊗).",
        marca: "✓ ⊗"
      }
    ],
    conclusionRubro: "Incorporando el ajuste de corte B2B (+$14.620M de PT-B2) y la reclasificación por neteo de cobros de terceros en Flow (-$11.240M en Ventas contra Costos Operativos, AJ-04), las Ventas quedan expuestas razonablemente conforme a NIIF 15 y NIIF 8."
  },
  {
    id: "pt-e",
    codigo: "PT-E",
    programa: "PROGRAMA E",
    rubro: "Activos Intangibles (Nota 10)",
    esPrioritario: true,
    refLegajo: "Legajo Corriente — Sección E (Cédula Sumaria E y Cédulas Analíticas E-1 y E-2)",
    elaboradoPor: "Lic. R. Moretti / Grebe",
    revisadoPor: "Pisonero De Biase",
    fecha: "02/02/2026",
    saldoSegunLibros: 2671525,
    ajustePropuestoNeto: 0,
    saldoAuditado: 2671525,
    estadoPT: "Conforme (Validación Regulatoria y NIC 38)",
    cedulaSumaria: [
      { subcuenta: "1.3.01 - Licencias de Espectro 4G/5G (Banda 3.400-3.500 MHz) y Concesiones (Nota 10)", saldoLibros: 1985420, debe: 0, haber: 0, saldoAuditado: 1985420, marca: "© ✓ § ∑", refPT: "PT-E1" },
      { subcuenta: "1.3.02 - Desarrollos de Software Capitalizados (NIC 38), Marcas y Otros Intangibles (Nota 10)", saldoLibros: 686105, debe: 0, haber: 0, saldoAuditado: 686105, marca: "✓ t h ∑", refPT: "PT-E2" }
    ],
    procedimientosEjecutados: [
      {
        ref: "PT-E1",
        bloquePrograma: "1. Existencia, Titularidad Legal y Vigencia (ENACOM e INPI)",
        nombre: "Verificación Legal de Concesiones de Espectro ENACOM (Lote 5G) y Marcas Registradas INPI",
        afirmaciones: ["Existencia", "Propiedad", "Exposición"],
        marca: "✓ © § ∑",
        muestra: "100% de las resoluciones de adjudicación de espectro de ENACOM (Lotes 4G y 5G) y muestra del 100% de marcas comerciales estratégicas en el INPI.",
        pasosConResultado: [
          {
            paso: "Inspeccionar las resoluciones de adjudicación de espectro radioeléctrico de ENACOM (Lotes 5G y 4G), verificando vigencia jurídica, titularidad y cumplimiento de garantías.",
            comoSeEjecuta: "El auditor solicita a la Dirección de Asuntos Legales y Regulatorios copia certificada de las resoluciones de adjudicación de frecuencias. Se cotejan con la publicación oficial en el Boletín Oficial de la República Argentina (Resolución ENACOM 1285/2023 por el Lote 5G de 100 MHz en la banda 3.400-3.500 MHz y Resoluciones previas de 4G). Se verifica: 1) Titularidad formal a nombre de Telecom Argentina S.A. (CUIT 30-63945373-8). 2) Vigencia de la concesión (plazo contractual de 20 años hasta 2043). 3) Pólizas de seguro de caución y cumplimiento de metas de despliegue de radiobases comprometidas ante el Estado Nacional. 4) Pago al día del gravamen y tasa de control regulatorio.",
            fuentes: "Expedientes y Resoluciones ENACOM, Boletín Oficial de la República Argentina, Pólizas de Caución vigentes y Dictamen de Asesores Legales Regulatorios.",
            valores: "Saldo de Concesiones y Licencias de Espectro en Nota 10: $1.985.420 millones.",
            resultado: "Resoluciones de adjudicación 4G y 5G verificadas al 100% a nombre de Telecom Argentina S.A., plenamente vigentes por 20 años y con pólizas de caución y cronogramas de despliegue al día sin sanciones ni intimaciones regulatorias (✓ © §).",
            tabla: {
              cabeceras: ["Ref.", "Activo / Frecuencia / Marca", "Ente Emisor", "Título / Resolución Legal", "Vigencia", "Titular Registral", "Valor Libros ($M)", "Marca"],
              filas: [
                { valores: ["E1.1", "Espectro 5G - Banda 3.400 - 3.500 MHz (Lote 100 MHz)", "ENACOM", "Res. ENACOM N° 1285/2023", "20 años (hasta 2043)", "Telecom Argentina S.A.", "$1.240.350", "✓ © §"] },
                { valores: ["E1.2", "Espectro 4G - Banda 700 MHz / AWS (Lotes Nacionales)", "SC / ENACOM", "Res. SC N° 38/2014 y conc.", "15 años (renov. 2030)", "Telecom Argentina S.A.", "$745.070", "✓ © §"] },
                { valores: ["E1.3", "Marca Comercial 'Personal' (Clases 9, 38 y conc.)", "INPI", "Acta INPI N° 3.148.920 / Renov.", "10 años (hasta 2032)", "Telecom Argentina S.A.", "$185.200", "✓ ©"] },
                { valores: ["E1.4", "Marca Comercial 'Flow' (Plataforma y Contenidos)", "INPI", "Acta INPI N° 3.654.112 / Reg.", "10 años (hasta 2034)", "Telecom Argentina S.A.", "$120.450", "✓ ©"] },
                { valores: ["E1.5", "Marca 'Telecom' y 'Personal Pay' (Fintech y B2B)", "INPI", "Actas INPI 3.890.114 / 3.912.440", "10 años (hasta 2034)", "Telecom Argentina S.A.", "$95.100", "✓ ©"] },
                { valores: ["E1.6", "Software Capitalizado y Otros Intangibles", "Interno / SAP", "Proyectos de desarrollo (PT-E2)", "3 a 5 años", "Telecom Argentina S.A.", "$285.355", "✓ ∑"] },
                { destacado: true, valores: ["TOTAL", "Total Activos Intangibles (Nota 10)", "ENACOM / INPI", "Auditado al 100% s/ Libros", "Conforme", "Telecom Argentina S.A.", "$2.671.525", "✓ © § ∑"] }
              ]
            }
          },
          {
            paso: "Compulsa registral pública ante el INPI y confirmación de litigios marcarios con asesores legales.",
            comoSeEjecuta: "Se realiza una búsqueda registral directa en la base de datos pública del Instituto Nacional de la Propiedad Industrial (INPI) sobre las marcas insignias (Personal, Flow, Telecom, Personal Pay). Se verifica el estado 'Concedida', clase marcaria (Clase 38 telecomunicaciones, Clase 9 hardware/software, Clase 36 servicios financieros), titularidad formal de Telecom y fecha de vencimiento decenal. Se cruza con la respuesta a la carta de circularización de abogados externos (NIA 501 / Slosse) para constatar la inexistencia de litigios por oposición de marcas o medidas cautelares.",
            fuentes: "Portal público de marcas del INPI, títulos de registro marcario y carta de confirmación de asesores legales externos.",
            valores: "Marcas comerciales y derechos intangibles valorizados en $400.750 millones dentro de la Nota 10.",
            resultado: "Búsqueda registral en el INPI satisfactoria (©); titularidad de marcas clave a nombre de Telecom Argentina S.A., con renovación periódica vigente y confirmación de asesores legales sin litigios ni gravámenes sobre la cartera de marcas (✓ §)."
          }
        ],
        procedimientoDetalle: "1) Licencias de espectro: Se solicitan copias certificadas de las resoluciones de ENACOM (ej. adjudicación Lote 5G en Banda 3.400-3.500 MHz) cotejadas contra el Boletín Oficial, verificando vigencia (20 años), titularidad legal a nombre de Telecom y cumplimiento de garantías de despliegue. 2) Marcas comerciales: Búsqueda registral pública ante el INPI confirmando titularidad vigente de marcas clave (Personal, Flow, Telecom, Personal Pay) sin litigios ni prendas.",
        defensaOral: "Profesor, en PT-E1 auditamos la Existencia real y la Propiedad jurídica del espectro radioeléctrico y de las marcas comerciales. Para el espectro, inspeccionamos las resoluciones de ENACOM (como la Res. 1285/2023 de 5G) y las publicaciones en el Boletín Oficial, verificando que la concesión esté otorgada formalmente a Telecom por 20 años y que las pólizas de caución y compromisos de despliegue estén al día. Para las marcas (Personal, Flow, Personal Pay), realizamos la compulsa registral directa en el INPI confirmando su titularidad y vigencia, y cruzamos con las confirmaciones de los abogados externos para descartar oposiciones o litigios. No se detectaron desvíos ni gravámenes.",
        afirmacionesDetalle: "Valida Existencia (concesiones y marcas legalmente activas) y Propiedad (titularidad registral exclusiva de Telecom en ENACOM e INPI sin gravámenes)."
      },
      {
        ref: "PT-E2",
        bloquePrograma: "2. Evaluación de Proyectos de Software (NIC 38) y Pruebas Globales de Amortización y Valor Residual",
        nombre: "Prueba de Proyectos de Software (NIC 38.57) y Pruebas Globales de Amortización y Valor Residual",
        afirmaciones: ["Existencia", "Integridad", "Medición", "Exposición"],
        marca: "✓ t h ∑",
        muestra: "100% de los proyectos de IT en SAP PS activados en 2025 (18 proyectos clave) + Muestra de cuentas de gastos de investigación/mantenimiento tecnológico + 100% del cuadro de amortizaciones de la Nota 10.",
        pasosConResultado: [
          {
            paso: "Prueba Sustantiva de Cumplimiento de los 6 Criterios de Activación de la NIC 38 (Párrafo 57 - Fase de Desarrollo) en SAP PS.",
            comoSeEjecuta: "Para los proyectos de software desarrollados internamente por Telecom y capitalizados en el ejercicio, el auditor audita en el módulo SAP PS (Project System) y en Jira que se cumplan estrictamente y de forma cumulativa los 6 requisitos de la NIC 38.57: 1) Factibilidad técnica demostrada con actas de prueba de concepto. 2) Intención de la Dirección de completar el software (aprobación formal del Comité de Tecnología). 3) Capacidad de utilización interna o puesta a disposición de clientes. 4) Demostración fehaciente de beneficios económicos futuros (ahorro de costos operativos, mayor fidelización o incremento de ARPU). 5) Disponibilidad de recursos técnicos y financieros para concluirlo. 6) Confiabilidad en la medición de costos: se auditan las imputaciones de horas de programadores (timesheets) y facturas de desarrolladores externos.",
            fuentes: "Módulo SAP PS, sistema Jira de gestión de proyectos ágiles, timesheets de horas técnicas, presupuestos aprobados y reportes de rentabilidad proyectada.",
            valores: "Desarrollos de software activados en el ejercicio 2025 por $285.355 millones (18 proyectos de Flow, App Mi Personal, Algoritmos IA y Migración Cloud).",
            resultado: "Los proyectos de software activados cumplen rigurosamente los 6 criterios de la NIC 38.57: la asignación de horas de desarrollo en SAP PS y compras de licencias directas se encuentran respaldadas documentalmente, sin observarse activación indebida de costos de investigación preliminar (✓ t h).",
            tabla: {
              cabeceras: ["Código Proyecto SAP", "Nombre del Desarrollo Tecnológico", "Horas Imputadas", "Costo Personal ($M)", "Licencias / Ext. ($M)", "Total Activado ($M)", "6 Criterios NIC 38.57", "Marca"],
              filas: [
                { valores: ["PRJ-2025-FLOW-AI", "Flow Plataforma Next-Gen & Motor IA de Recomendación", "48.200 hs", "$52.400", "$34.150", "$86.550", "Cumple 6/6 (Aprobado)", "✓ t h"] },
                { valores: ["PRJ-2025-APP-PERS", "App Mi Personal V3 Transaccional y Autogestión", "36.800 hs", "$41.100", "$23.400", "$64.500", "Cumple 6/6 (Aprobado)", "✓ t h"] },
                { valores: ["PRJ-2025-B2B-CLOUD", "Portal Clientes Corporativos Personal Tech (B2B)", "29.400 hs", "$33.200", "$21.650", "$54.850", "Cumple 6/6 (Aprobado)", "✓ t h"] },
                { valores: ["PRJ-2025-CORE-BILL", "Módulo Facturación Convergente SAP S/4HANA", "25.100 hs", "$28.900", "$18.755", "$47.655", "Cumple 6/6 (Aprobado)", "✓ t h"] },
                { valores: ["PRJ-2025-CYBERSEC", "Plataforma de Ciberseguridad y Detección de Fraude", "19.300 hs", "$20.300", "$11.500", "$31.800", "Cumple 6/6 (Aprobado)", "✓ t h"] },
                { destacado: true, valores: ["TOTAL ACTIVADO", "Muestra de Proyectos de Desarrollo Capitalizados", "158.800 hs", "$175.900", "$109.455", "$285.355", "100% Conforme NIC 38", "✓ t h ∑"] }
              ]
            }
          },
          {
            paso: "Prueba de Integridad y Corte de Gastos Tecnológicos (Investigación vs. Desarrollo).",
            comoSeEjecuta: "Se audita una muestra de las cuentas de resultados operativos: 'Gastos de Mantenimiento de Software y Soporte Informático' y 'Servicios Profesionales de TI'. Se verifica que Telecom no haya mandado a pérdidas desembolsos que cumplían con las condiciones de capitalización de la NIC 38 (subvaluando el activo), ni haya activado gastos de mantenimiento correctivo rutinario, parches o soporte que deben imputarse a resultados (sobrevaluando el activo).",
            fuentes: "Libro Mayor de Gastos Operativos de IT, órdenes de compra de servicios de software y contratos de mantenimiento anual de proveedores tecnológicos.",
            valores: "Muestra de $42.500 millones en gastos operativos de mantenimiento y soporte de software.",
            tabla: {
              cabeceras: ["Cuenta Contable de Resultados (SAP)", "Saldo Mayor ($M)", "Muestra Auditada ($M)", "Conclusión del Examen de Corte", "Marcas"],
              filas: [
                { valores: ["5.1.04.12 Mantenimiento de Software y Soporte", "$28.150", "$28.150", "Soporte y parches imputados a pérdida (Gasto del mes)", "✓ §"] },
                { valores: ["5.1.04.18 Servicios Profesionales de TI", "$14.350", "$14.350", "Consultoría operativa rutinaria, no capitalizable", "✓ §"] },
                { destacado: true, valores: ["TOTAL MUESTRA DE GASTOS TECNOLÓGICOS", "$42.500", "$42.500", "Corte e Integridad Conformes (NIC 38 / NIC 1)", "✓ § ∑"] }
              ]
            },
            resultado: "El corte e integridad entre gastos de mantenimiento tecnológico y proyectos capitalizables es correcto: los gastos operativos de soporte ($42.500M) se registraron adecuadamente en pérdidas operativas y no se identificaron costos de investigación activados indebidamente (✓ § ∑)."
          },
          {
            paso: "Prueba Global de Amortizaciones de Activos Intangibles (Recálculo Matemático Independiente).",
            comoSeEjecuta: "Procedimiento analítico sustantivo para verificar el cargo del ejercicio devengado por amortización de intangibles: 1) Se parte de la amortización del ejercicio anterior reexpresada en moneda de cierre (NIC 29). 2) Se suma la amortización devengada por las altas de software y licencias de 2025 (prorrateo lineal mensual según fecha de puesta en producción). 3) Se suma la amortización de activos intangibles incorporados por la adquisición de TMA (NIIF 3). 4) Se deduce la amortización de intangibles totalmente amortizados al cierre del año anterior. 5) Se compara el resultado teórico contra la columna 'Del ejercicio' de la Nota 10.",
            fuentes: "Estados Financieros Consolidados 2025 — Nota 10 (Activos Intangibles), Subdiario de Activo Fijo SAP FI-AA y políticas contables de vida útil (Nota 3.k).",
            valores: "Amortización Teórica Calculada: $274.320 millones vs. Amortización Registrada en Nota 10: $274.320 millones. Diferencia de Auditoría: $0 (< ET $83.112M).",
            resultado: "La Prueba Global de Amortizaciones de Intangibles arrojó coincidencia exacta ($274.320M teóricos vs $274.320M contables, desvío $0 < ET $83.112M), validando que la medición y alícuotas lineales aplicadas (Espectro: 15-20 años, Software: 3-5 años) son razonables (✓ ∑).",
            tabla: {
              cabeceras: ["Concepto de la Prueba Global", "Importe ($M)", "Fuente / Papel de Trabajo", "Explicación Técnica"],
              filas: [
                { valores: ["a) Amortización de Intangibles del período anterior (2024)", "$228.450", "EECC 2025 - Nota 10", "Amortización 2024 expresada en moneda de poder adquisitivo del 31/12/2025 (NIC 29)."] },
                { valores: ["b) (+) Amortización de altas de software y licencias 2025", "+$48.210", "Subdiario SAP / PT-E2", "Alícuotas devengadas prorrateadas mes de puesta en marcha sobre $285.355M."] },
                { valores: ["c) (+) Amortización de intangibles incorporados por TMA", "+$18.420", "Nota 10 / Nota 29 (NIIF 3)", "Amortización devengada sobre concesiones y carteras incorporadas de TMA."] },
                { valores: ["d) (-) Amortización de activos extinguidos / 100% amortizados", "-$20.760", "Reporte SAP FI-AA", "Intangibles que completaron su vida útil en 2024 y ya no amortizan en 2025."] },
                { destacado: true, valores: ["e) (=) Amortización Teórica Calculada del Ejercicio 2025", "$274.320", "Cálculo de Auditoría (a+b+c-d)", "Coincide exactamente con la Nota 10 ($274.320M). Diferencia $0."] }
              ]
            }
          },
          {
            paso: "Prueba Global de Valor Residual de Activos Intangibles (Evolución Patrimonial Neta al Cierre).",
            comoSeEjecuta: "Se verifica la consistencia patrimonial de la Nota 10 mediante la conciliación integral de movimientos netos del ejercicio: Valor Residual al Inicio ($2.494.659M) + Altas de desarrollos de software y licencias ($382.450M) + Incorporación de intangibles identificados en combinación de negocios TMA bajo NIIF 3 ($335.790M) - Bajas / Desincorporaciones ($0M) - Cargo por Amortización del Ejercicio y Efecto Neto ($541.374M total amortización o cargo específico con conversión) = Valor Residual al Cierre Calculado ($2.671.525M).",
            fuentes: "Cuadro de Evolución de Activos Intangibles de la Nota 10, Asientos de Combinación de Negocios TMA (Nota 29) y Mayor General SAP.",
            valores: "Valor Residual Teórico: $2.671.525 millones vs. Balance General al 31/12/2025: $2.671.525 millones. Diferencia: $0.",
            resultado: "La Prueba Global de Valor Residual cerró con exactitud matemática plena ($2.671.525M calculados vs $2.671.525M en Nota 10, desvío $0), acreditando que el saldo neto de Activos Intangibles expuesto en el Activo No Corriente es íntegro y exacto (✓ ∑).",
            tabla: {
              cabeceras: ["Movimiento Patrimonial", "Importe ($M)", "Fuente / Referencia", "Explicación Técnica"],
              filas: [
                { valores: ["a) Valor Residual al inicio (31/12/2024)", "$2.494.659", "Nota 10 - Activos Intangibles", "Saldo de apertura neto de amortizaciones al 31/12/2024 reexpresado a moneda de cierre."] },
                { valores: ["b) (+) Incorporación por combinación de negocios (TMA)", "+$335.790", "Nota 10 / Nota 29 (NIIF 3)", "Licencias, cartera de clientes y relaciones contractuales identificadas a valor razonable."] },
                { valores: ["c) (+) Altas del Ejercicio (Software y Concesiones)", "+$382.450", "Nota 10 / PT-E2 Paso 1", "Desarrollos de software en SAP PS ($285.355M) y licencias adicionales capitalizadas."] },
                { valores: ["d) (-) Bajas del Ejercicio", "$0", "Nota 10 / SAP FI-AA", "No se registraron desincorporaciones ni caducidades de licencias de espectro en 2025."] },
                { valores: ["e) (-) Amortización del Ejercicio y Efecto Neto", "-$541.374", "Nota 10 / Cuadro Anexo", "Amortización acumulada devengada en el ejercicio y ajustes netos de conversión."] },
                { destacado: true, valores: ["f) (=) Valor Residual al Cierre (31/12/2025)", "$2.671.525", "Nota 10 / Balance General", "Coincide exactamente con el saldo expuesto en el Activo No Corriente. Diferencia $0."] }
              ]
            }
          }
        ],
        procedimientoDetalle: "1) Proyectos de software en SAP PS: Se audita que los costos activados correspondan exclusivamente a la Fase de Desarrollo (arquitectura, programación y pruebas UAT) y no a investigación o mantenimiento rutinario (NIC 38.57). 2) Prueba de Integridad y Corte: Se auditan cuentas de gastos de IT para verificar que no se hayan mandado a pérdidas desarrollos que debían capitalizarse. 3) Recálculo de Amortizaciones: Recálculo independiente aplicando alícuotas lineales (licencias 15-20 años, software 3-5 años) sobre valores reexpresados (NIC 29), comparando con el cargo del ejercicio sin desvíos significativos.",
        defensaOral: "Profesor, en PT-E2 auditamos los desarrollos de software bajo NIC 38: verificamos en SAP PS que solo se activen costos de la etapa de desarrollo de proyectos con beneficio económico futuro comprobable, descartando gastos de mantenimiento. Asimismo, ejecutamos un recálculo matemático global de las amortizaciones según sus vidas útiles, resultando satisfactorio.",
        afirmacionesDetalle: "Valida Existencia e Integridad (activación rigurosa bajo NIC 38 sin omisiones ni sobrevaluaciones) y Medición (amortizaciones lineales según vida útil remanente)."
      }
    ],
    conclusionRubro: "Los Activos Intangibles ($2.671.525 millones) se encuentran debidamente respaldados por títulos de concesión ENACOM, registros marcarios INPI y proyectos de software bajo NIC 38 con amortizaciones recalculadas conforme a sus vidas útiles.",
    resumenMetodologicoRubro: {
      titulo: "Exposición Metodológica Integral: Auditoría de Activos Intangibles (Nota 10)",
      subtitulo: "Fundamentación técnica secuencial de las Cédulas Analíticas PT-E1 y PT-E2: concesiones de espectro 4G/5G, marcas comerciales, proyectos de software bajo NIC 38 y pruebas analíticas globales.",
      introduccion: "El rubro Activos Intangibles representa $2.671.525 millones al 31/12/2025 (16,07% del activo total consolidado de Telecom Argentina S.A.). En la etapa de planificación se determinó un Riesgo de Control Alto en la activación de horas internas en SAP PS y en el cumplimiento de los cronogramas regulatorios de despliegue comprometidos ante el ENACOM. En estricto cumplimiento de las Normas Internacionales de Auditoría (NIA 315, 500 y 520) y la doctrina de Carlos A. Slosse, estructuramos una auditoría sustantiva orientada a validar la titularidad legal y vigencia del espectro radioeléctrico y marcas registradas (PT-E1), el cumplimiento cumulativo de los 6 requisitos de la NIC 38.57 para proyectos de software, y las pruebas analíticas globales de amortización y valor residual (PT-E2).",
      pasosNarrativos: [
        {
          pt: "PT-E1",
          etiqueta: "Paso 1 • Validación Regulatoria y Marcaria",
          titulo: "Inspección de Concesiones de Espectro ENACOM (Lote 5G) y Búsqueda Registral en INPI",
          afirmacion: "Afirmaciones Auditadas: Existencia y Propiedad Legal (NIA 500 / RT 37)",
          relato: "Para auditar las concesiones de espectro 4G y 5G ($1.985.420M), obtuvimos copias certificadas de las resoluciones de adjudicación de ENACOM (Res. 1285/2023 por el Lote 5G en la banda 3.400-3.500 MHz) cotejadas contra el Boletín Oficial de la República Argentina. Se verificó: 1) Titularidad formal a nombre de Telecom Argentina S.A. (CUIT 30-63945373-8). 2) Plena vigencia por 20 años hasta 2043. 3) Pólizas de seguro de caución vigentes y cumplimiento de metas de despliegue de radiobases comprometidas ante el Estado. Complementariamente, realizamos la compulsa pública online ante el INPI confirmando el registro concedido de las marcas comerciales clave (Personal, Flow, Telecom y Personal Pay), cruzando con la confirmación de asesores legales externos (NIA 501) para constatar la inexistencia de litigios marcarios ni gravámenes restrictivos."
        },
        {
          pt: "PT-E2",
          etiqueta: "Paso 2 • Cédula Analítica de Software y Pruebas Globales",
          titulo: "Evaluación de Proyectos de Software (NIC 38.57) y Pruebas Globales de Amortización y Valor Residual",
          afirmacion: "Afirmaciones Auditadas: Integridad, Medición (NIC 38) y Exposición (Nota 10)",
          relato: "Para los desarrollos de software interno capitalizados en el ejercicio ($285.355M), auditamos en SAP PS y Jira el cumplimiento estricto y cumulativo de los 6 requisitos de la NIC 38.57 (factibilidad técnica, intención, capacidad de uso, beneficios económicos probables, disponibilidad de recursos y medición confiable de desembolsos). Verificamos que sólo se activen horas de desarrollo directo de programadores ($175.900M) y licencias directas ($109.455M), descartando gastos de investigación preliminar. En la prueba de corte de gastos tecnológicos ($42.500M) comprobamos que los costos de soporte y mantenimiento rutinario fueron debidamente imputados a pérdidas en resultados. Por último, recalculamos analíticamente la amortización del ejercicio ($274.320M) y la evolución patrimonial del valor residual ($2.671.525M), verificando coincidencia matemática plena con la Nota 10 (desvío $0 < ET $83.112M). Por lo tanto, el rubro se concluye validado y conforme sin ajustes."
        }
      ],
      conclusionNarrativa: "A diferencia de Bienes de Uso donde se identificaron desvíos por obsolescencia de centrales de cobre no desincorporadas, en Activos Intangibles la compañía mantuvo un control documental y regulatorio riguroso: las concesiones de espectro y marcas comerciales están 100% vigentes y regularizadas en los registros públicos, los proyectos de software capitalizados satisfacen íntegramente los estándares de la NIC 38.57, y las dos Pruebas Globales sustantivas cerraron con diferencia de $0 frente al balance general. Por ende, conforme a la NIA 700 y la RT 37, se concluye que el rubro Activos Intangibles se encuentra razonablemente presentado en todos sus aspectos significativos al 31 de diciembre de 2025."
    }
  },
  {
    id: "pt-f",
    codigo: "PT-F",
    programa: "PROGRAMA F",
    rubro: "Llaves de Negocio (Nota 8)",
    esPrioritario: false,
    refLegajo: "Legajo Corriente — Sección F (Cédula Sumaria F-1 y Analítica F-2)",
    elaboradoPor: "Lic. R. Moretti / Grebe",
    revisadoPor: "Pisonero De Biase",
    fecha: "04/02/2026",
    saldoSegunLibros: 4443998,
    ajustePropuestoNeto: 0,
    saldoAuditado: 4443998,
    estadoPT: "Conforme (Con Énfasis en Revelación de Sensibilidad NIC 36)",
    cedulaSumaria: [
      { subcuenta: "1.4.01 - Llaves de Negocio (Nota 8 — Fusión Cablevisión / UGE Redes Personal y TMA)", saldoLibros: 4443998, debe: 0, haber: 0, saldoAuditado: 4443998, marca: "§ ∑", refPT: "PT-F1" }
    ],
    procedimientosEjecutados: [
      {
        ref: "PT-F1",
        nombre: "Evaluación con Especialistas del Test de Deterioro (Impairment NIC 36) — UGE Redes Personal",
        afirmaciones: ["Medición", "Exposición"],
        muestra: "100% del modelo de Flujos de Fondos Descontados (DCF) de la UGE Redes Personal (Valor Recuperable: $12.774.695 millones).",
        resultado: "Nuestro equipo de especialistas en valuación auditó las premisas clave: WACC en términos reales después de impuestos (11,85%), crecimiento a perpetuidad (1,5%) y evolución del margen EBITDA y CAPEX 5G. El Valor Recuperable estimado de la UGE Redes Personal ($12.774.695M) supera el valor en libros de los activos netos asignados a la UGE ($12.439.729M de red fija/móvil más intangibles asignados), determinando un margen de cobertura positivo (headroom) de $334.966M (∑). Se solicitó ampliar en la Nota 8 la matriz de sensibilidad ante incrementos de +100 bps en la tasa WACC.",
        marca: "∑ ✓"
      }
    ],
    conclusionRubro: "La Llave de Negocio ($4.443.998 millones) no presenta indicios de deterioro al 31/12/2025 conforme a la NIC 36, confirmándose un margen de cobertura positivo (headroom) de $334.966M en la UGE Redes Personal y revelándose la matriz de sensibilidad en Notas (Cuestión Clave de Auditoría - KAM)."
  }
];

export const hallazgosYAjustes = [
  {
    id: "aj-1",
    codigoHallazgo: "H-01",
    codigoAjuste: "AJ-01",
    refPT: "PT-A1 / PT-A4",
    rubro: "Bienes de Uso",
    afirmacionAfectada: "Medición y Existencia",
    origenCCI: "CCI-02 (Preg. 22 y 23) — Falta de baja de centrales analógicas obsoletas y robos/vandalismo en vía pública",
    tipo: "Ajuste de Valuación / Baja de Activos",
    descripcionHallazgo: "Se detectaron centrales telefónicas analógicas fuera de servicio por migración tecnológica a FTTH ($21.450M) y tramos de red/nodos siniestrados por vandalismo en el 4° trimestre ($6.890M) que continuaban activados en el rubro Bienes de Uso al 31/12/2025.",
    montoMillones: 28340,
    superaPAE: true,
    impactoPatrimonial: { activo: -28340, pasivo: 0, patrimonioNeto: -28340, resultadoEjercicio: -28340 },
    asientoContable: [
      { cuenta: "Resultado por Desvalorización y Bajas de Bienes de Uso (R-)", debe: 28340, haber: 0 },
      { cuenta: "Depreciación Acumulada / Previsión Obsolescencia Bienes de Uso (-A)", debe: 0, haber: 21450 },
      { cuenta: "Bienes de Uso - Redes e Infraestructura Personal (-A)", debe: 0, haber: 6890 }
    ],
    aceptadoPorGerenciaInicial: true
  },
  {
    id: "aj-2",
    codigoHallazgo: "H-02",
    codigoAjuste: "AJ-02",
    refPT: "PT-B2 / PT-D2",
    rubro: "Créditos por Ventas y Ventas",
    afirmacionAfectada: "Integridad (Corte de Operaciones) y Existencia",
    origenCCI: "CCI-02 (Preg. 5 y 16) — Demoras de facturación B2B al cierre y desfasaje de 24-48 hs en cobranzas externas",
    tipo: "Ajuste de Corte de Operaciones",
    descripcionHallazgo: "1) [Integridad - Corte] Servicios corporativos de integración Cloud/Ciberseguridad (Personal Tech) con acta de conformidad firmada en diciembre de 2025 cuya factura fue emitida en enero 2026 ($14.620M). 2) [Existencia] Cobranzas recaudadas el 30 y 31/12 por Rapipago/Pago Fácil/billeteras pendientes de desafectación en cuentas corrientes de clientes ($4.180M).",
    montoMillones: 18800,
    superaPAE: true,
    impactoPatrimonial: { activo: 14620, pasivo: 0, patrimonioNeto: 14620, resultadoEjercicio: 14620 },
    asientoContable: [
      { cuenta: "Deudores Corporativos B2B - Facturas a Emitir (+A)", debe: 14620, haber: 0 },
      { cuenta: "Caja y Bancos - Recaudaciones a Depositar / En Tránsito (+A)", debe: 4180, haber: 0 },
      { cuenta: "Ventas B2B - Personal Tech (R+)", debe: 0, haber: 14620 },
      { cuenta: "Deudores por Servicios Masivos B2C (-A)", debe: 0, haber: 4180 }
    ],
    aceptadoPorGerenciaInicial: true
  },
  {
    id: "aj-3",
    codigoHallazgo: "H-03",
    codigoAjuste: "AJ-03",
    refPT: "PT-B3",
    rubro: "Créditos por Ventas (Deudores por Servicios)",
    afirmacionAfectada: "Medición (Valuación NIIF 9)",
    origenCCI: "CCI-02 (Preg. 19) y CCI-05 (Preg. 19) — Omisión de mora > 180 días en sub-cartera migrada de sistemas heredados",
    tipo: "Ajuste de Estimación Contable",
    descripcionHallazgo: "En el reproceso mediante TAACs del padrón de antigüedad de saldos se determinó que una porción de créditos del segmento masivo B2C con mora superior a 180 días no había sido impactada por la matriz de pérdidas crediticias esperadas (NIIF 9), subestimando la previsión en $19.850 millones.",
    montoMillones: 19850,
    superaPAE: true,
    impactoPatrimonial: { activo: -19850, pasivo: 0, patrimonioNeto: -19850, resultadoEjercicio: -19850 },
    asientoContable: [
      { cuenta: "Cargo por Deudores Incobrables - Pérdida Crediticia Esperada (R-)", debe: 19850, haber: 0 },
      { cuenta: "Previsión para Deudores de Dudoso Cobro (-A)", debe: 0, haber: 19850 }
    ],
    aceptadoPorGerenciaInicial: true
  },
  {
    id: "aj-4",
    codigoHallazgo: "H-04",
    codigoAjuste: "AJ-04",
    refPT: "PT-D3",
    rubro: "Ventas (Nota 24)",
    afirmacionAfectada: "Propiedad y Exposición (Agente vs. Principal - NIIF 15)",
    origenCCI: "CCI-05 (Preg. 19) — Parametrización de acuerdos comerciales de terceros en plataforma Flow",
    tipo: "Asiento de Reclasificación (Efecto Neutro en PN)",
    descripcionHallazgo: "Suscripciones a plataformas de streaming de terceros cobradas a través de la factura convergente de Flow durante el 4° trimestre que fueron registradas por su valor bruto en lugar de exponer únicamente la comisión o margen neto de Telecom.",
    montoMillones: 11240,
    superaPAE: true,
    impactoPatrimonial: { activo: 0, pasivo: 0, patrimonioNeto: 0, resultadoEjercicio: 0 },
    asientoContable: [
      { cuenta: "Ventas - TV Paga y Streaming Flow (R+)", debe: 11240, haber: 0 },
      { cuenta: "Costos Operativos - Derechos de Contenido y Terceros (R-)", debe: 0, haber: 11240 }
    ],
    aceptadoPorGerenciaInicial: true
  },
  {
    id: "aj-5",
    codigoHallazgo: "H-05",
    codigoAjuste: "PAE-NC-01",
    refPT: "PT-C3 / PT-O1",
    rubro: "Pasivos Laborales y Deuda Financiera (Partidas Menores < PAE)",
    afirmacionAfectada: "Medición e Integridad",
    origenCCI: "CCI-04 (Preg. 12) — Acumulación de licencias no gozadas en personal clave de TI + Diferencia menor TIE Deuda",
    tipo: "Diferencia No Ajustada (< Umbral Mínimo PAE $8.311M)",
    descripcionHallazgo: "Diferencia menor en el recálculo de la provisión por vacaciones acumuladas no gozadas del personal de ingeniería de red 5G ($4.450M) y diferencia de devengamiento de gastos de emisión por tasa efectiva en préstamos ($3.120M). Ambos desvíos son individualmente inferiores al PAE ($8.311M).",
    montoMillones: 7570,
    superaPAE: false,
    impactoPatrimonial: { activo: 0, pasivo: 7570, patrimonioNeto: -7570, resultadoEjercicio: -7570 },
    asientoContable: [
      { cuenta: "Gastos de Personal TI ($4.450M) y Costos Financieros ($3.120M) [No requiere registro por ser < PAE]", debe: 7570, haber: 0 },
      { cuenta: "Provisión Vacaciones ($4.450M) y Préstamos Financieros ($3.120M)", debe: 0, haber: 7570 }
    ],
    aceptadoPorGerenciaInicial: false
  }
];

export const documentosEtapa3 = {
  memorandoConclusion: {
    titulo: "MEMORANDO RESUMEN DE AUDITORÍA (ETAPA DE CONCLUSIÓN)",
    ordenRealizacion: 2,
    para: "Socio a Cargo del Encargo de Auditoría / Comité de Auditoría",
    de: "Equipo de Auditoría Externa: Grebe - Pisonero De Biase (U.C.P.)",
    cliente: "Telecom Argentina S.A.",
    ejercicio: "Estados Contables por el ejercicio finalizado el 31 de diciembre de 2025",
    fecha: "18 de febrero de 2026",
    secciones: [
      {
        subtitulo: "1. Alcance del Trabajo y Enfoque Aplicado (Doctrina Carlos Slosse y RT 37 / RT 53)",
        contenido: "Hemos completado la auditoría externa de los Estados Contables de Telecom Argentina S.A. al 31/12/2025 siguiendo las 3 etapas secuenciales del proceso de auditoría (Planificación, Ejecución y Conclusión). En virtud de que la evaluación del Control Interno arrojó Riesgo de Control ALTO en los componentes clave de infraestructura y tecnología (Archivo Documental NC 38,46% y Sistema Tecnológico NC 47,62%), aplicamos un enfoque predominantemente sustantivo focalizado en los rubros críticos (Bienes de Uso, Activos Intangibles y Créditos por Ventas), fijando la Materialidad Global en $166.225 millones (1% del Activo Total de $16.622.552 millones), el Error Tolerable en $83.112 millones (50% de PM) y el umbral mínimo de ajustes (PAE) en $8.311 millones."
      },
      {
        subtitulo: "2. Resumen de Resultados de los Programas A, B, C, D, E y F",
        contenido: "Se ejecutaron en su totalidad los procedimientos previstos en el Trabajo Interino (Oct-Nov 2025), Pre-Cierre (Dic 2025) y Cierre Final (Ene-Feb 2026). Se validaron las cinco afirmaciones (Existencia, Integridad, Propiedad, Medición y Exposición) en los rubros críticos del Balance Consolidado, con foco prioritario en los 3 rubros principales de la cátedra: Bienes de Uso (PP&E $6.789.118M en Nota 9), Créditos por Ventas ($800.128M en Nota 5) y Activos Intangibles ($2.671.525M en Nota 10), junto a Préstamos ($5.436.615M en Nota 14), Ventas ($8.328.814M en Nota 24) y Llaves de Negocio ($4.443.998M en Nota 8 con Valor Recuperable UGE Redes Personal $12.774.695M verificado en PT-F1)."
      },
      {
        subtitulo: "3. Evaluación de Hallazgos, Ajustes Propuestos y Empresa en Marcha",
        contenido: "Se identificaron cuatro ajustes significativos (AJ-01 por baja de centrales analógicas obsoletas y vandalismo $28.340M; AJ-02 por corte de facturación B2B Personal Tech y cobranzas en tránsito $18.800M; AJ-03 por previsión de incobrables mora >180 días $19.850M; y AJ-04 reclasificación NIIF 15 de contenidos de terceros en Flow por $11.240M). Asimismo, se verificó el pleno cumplimiento de los covenants financieros y la vigencia del principio contable de empresa en funcionamiento (empresa en marcha)."
      }
    ]
  },
  cartaControlInterno: {
    ordenRealizacion: 1,
    destinatario: "Al Directorio y al Comité de Auditoría y Riesgos de Telecom Argentina S.A.",
    fecha: "12 de febrero de 2026",
    introduccion: "Como resultado de nuestra evaluación del sistema de control interno efectuada durante la Etapa de Planificación y corroborada en la Etapa de Ejecución de la auditoría de los Estados Contables al 31/12/2025, exponemos las principales debilidades detectadas y nuestras recomendaciones de mejora:",
    recomendaciones: [
      {
        componente: "1. Archivo de la Documentación Sustentable (NC: 38,46% - RC: Alto)",
        observacion: "Ausencia de auditorías internas específicas bajo la Norma ISO 15.489, demoras y falta de estandarización en la digitalización de certificados de obra de red en sucursales del interior y falta de difusión escrita al personal técnico de campo.",
        recomendacion: "Implementar un protocolo obligatorio de carga digital en SAP dentro de las 48 hs. de firmado cada certificado de avance de obra en todas las regionales e incorporar revisiones anuales ISO 15.489 en el plan de Auditoría Interna."
      },
      {
        componente: "2. Evaluación del Sistema Contable (NC: 80,00% - RC: Bajo)",
        observacion: "Desfasajes operativos de 24 a 48 hs. en la conciliación de cobranzas externas (Rapipago, Pago Fácil y billeteras) y demoras administrativas menores en facturación corporativa B2B (Personal Tech), sin comprometer la eficacia general del ERP SAP.",
        recomendacion: "Automatizar vía API en tiempo real la rendición de recaudadores externos y vincular electrónicamente el acta de recepción técnica B2B con la emisión automática de la factura en SAP."
      },
      {
        componente: "3. Sistema de Presupuestos (NC: 77,78% - RC: Bajo)",
        observacion: "Emisión de órdenes de trabajo de emergencia sin partida presupuestaria previa y falta de vinculación plurianual automatizada en el despliegue 5G.",
        recomendacion: "Bloquear en el módulo SAP FM/CO la emisión de órdenes sin reserva presupuestaria (habilitando un flujo electrónico de aprobación de urgencia en 2 horas) y parametrizar los reportes de gestión FP&A tanto en moneda nominal como en moneda homogénea (NIC 29)."
      },
      {
        componente: "4. Sistema Operativo y Talento Humano (NC: 80,00% - RC: Bajo)",
        observacion: "Legajos físicos incompletos en personal técnico del interior y acumulación de licencias/vacaciones no gozadas en personal clave de TI/5G.",
        recomendacion: "Digitalizar el 100% de los legajos del interior y establecer un cronograma escalonado de goce de licencias con back-ups cruzados en Ingeniería."
      },
      {
        componente: "5. Sistema Tecnológico (NC: 47,62% - RC: Alto)",
        observacion: "Persistencia de interfaces manuales entre sistemas comerciales heredados y el ERP SAP, dependencia de licenciamiento y cronogramas de despliegue de espectro 5G ante el ENACOM, y necesidad de pruebas integrales del Plan de Continuidad (BCP) ante cortes físicos de fibra por vandalismo.",
        recomendacion: "Culminar la migración definitiva de los facturadores heredados al core convergente único, dar seguimiento continuo a las obligaciones del espectro 5G y ejecutar simulacros semestrales de contingencia física de red."
      }
    ]
  },
  cartaRepresentacion: {
    ordenRealizacion: 3,
    fecha: "20 de febrero de 2026 (Previo a la emisión del Informe Final)",
    firmantes: "Presidente del Directorio, Gerente General (CEO) y Director de Administración y Finanzas (CFO) de Telecom Argentina S.A.",
    puntosClave: [
      "Reconocimiento de la responsabilidad de la Dirección por la preparación y presentación razonable de los Estados Contables al 31/12/2025 conforme a las Normas Internacionales de Información Financiera (NIIF / NIC) en moneda homogénea (NIC 29).",
      "Confirmación de que se ha puesto a disposición del equipo de auditoría (Grebe - Pisonero De Biase) la totalidad de los registros contables en SAP, actas de Asamblea, Directorio y Comité de Auditoría, contratos B2B y resoluciones del ENACOM.",
      "Manifestación de que los supuestos utilizados en el Test de Recuperabilidad de la UGE Redes Personal ($12.774.695 millones) reflejan la mejor estimación de la Gerencia sobre flujos futuros y tasas de descuento (WACC).",
      "Inexistencia de hechos posteriores al 31/12/2025 hasta la fecha del informe que requieran ajuste o revelación adicional en las Notas a los Estados Contables."
    ]
  }
};
