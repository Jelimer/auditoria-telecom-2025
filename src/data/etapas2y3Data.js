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
  },  {
    id: "pt-b",
    codigo: "PT-B",
    programa: "PROGRAMA B",
    rubro: "Créditos por Ventas (Nota 5: $799.188M Cte + $940M No Cte = $800.128M)",
    esPrioritario: true,
    vinculadoCon: "PT-D (Ventas)",
    refLegajo: "Legajo Corriente — Sección B (Cédula Sumaria B y Analíticas B-1 a B-3)",
    elaboradoPor: "Pisonero De Biase",
    revisadoPor: "Grebe",
    fecha: "06/02/2026",
    saldoSegunLibros: 800128,
    ajustePropuestoNeto: 0,
    saldoAuditado: 800128,
    estadoPT: "Conforme (Sin Ajustes Propuestos)",
    cedulaSumaria: [
      { subcuenta: "1.1.03 - Créditos por Ventas Corrientes (Nota 5)", saldoLibros: 1070107, debe: 0, haber: 0, saldoAuditado: 1070107, marca: "§ ✓ ©", refPT: "PT-B1 / PT-B2" },
      { subcuenta: "1.2.03 - Créditos por Ventas No Corrientes (Nota 5)", saldoLibros: 940, debe: 0, haber: 0, saldoAuditado: 940, marca: "§ ✓ ©", refPT: "PT-B1" },
      { subcuenta: "1.1.03.09 - Previsión para Deudores Incobrables Corriente (Nota 5)", saldoLibros: -270919, debe: 0, haber: 0, saldoAuditado: -270919, marca: "§ ✓ ©", refPT: "PT-B3" }
    ],
    procedimientosEjecutados: [
      {
        ref: "PT-B1",
        bloquePrograma: "1. Circularización de Saldos y Cobranzas Posteriores (Existencia / Propiedad)",
        nombre: "Confirmación Escrita Directa a Grandes Clientes Corporativos B2B (Personal Tech) y Cobranzas Posteriores",
        afirmaciones: ["Existencia", "Propiedad"],
        marca: "§ ✓ © b ∑",
        muestra: "65 grandes cuentas corporativas B2B clave representativas de $385.420 millones (36% del total bruto de créditos) + procedimiento alternativo sobre cuentas no respondidas y segmento B2C masivo en extractos bancarios de enero 2026.",
        pasosConResultado: [
          {
            paso: "Circularización externa directa (positiva) bajo NIA 505 a una muestra estratificada de 65 grandes cuentas corporativas B2B de Personal Tech.",
            comoSeEjecuta: "Se seleccionan de los subdiarios de clientes en SAP SD/FI las 65 principales cuentas corporativas. Se preparan solicitudes de confirmación escrita directa (positiva) con firma facultada de la Dirección Financiera de Telecom, remitiéndose con instrucciones expresas de responder directamente al equipo de auditoría.",
            fuentes: "Subdiario de Clientes Corporativos en SAP SD/FI, contratos marco de telecomunicaciones y cartas de confirmación directa recibidas.",
            valores: "Muestra estratificada de 65 cuentas corporativas B2B por $385.420 millones.",
            resultado: "Se recibieron 59 respuestas conformes directas ($366.620 millones confirmados sin discrepancias por los clientes corporativos) (© §).",
            tabla: {
              cabeceras: ["Ref.", "Cliente Corporativo B2B / Lote Muestral", "Saldo s/ Libros SAP ($M)", "Confirmación Directa Tercero ($M)", "Cobranza Enero 2026 ($M)", "Diferencia ($M)", "Marcas y Estado"],
              filas: [
                { valores: ["1", "YPF S.A. (Servicios Cloud e Interconexión)", "$45.200", "$45.200", "$45.200", "$0", "§ ✓ © Conforme"] },
                { valores: ["2", "Banco Santander Argentina S.A. (Red SD-WAN)", "$38.900", "$38.900", "$38.900", "$0", "§ ✓ © Conforme"] },
                { valores: ["3", "Cencosud S.A. (Enlaces Punto a Punto / Retail)", "$31.400", "$31.400", "$31.400", "$0", "§ ✓ © Conforme"] },
                { valores: ["4", "Mercado Libre S.R.L. (Tráfico Datacenter y Fibra)", "$29.850", "$29.850", "$29.850", "$0", "§ ✓ © Conforme"] },
                { valores: ["5", "Banco Galicia y Buenos Aires S.A.U.", "$27.600", "$27.600", "$27.600", "$0", "§ ✓ © Conforme"] },
                { valores: ["6", "Molinos Río de la Plata S.A. (Telefonía IP B2B)", "$22.150", "$22.150", "$22.150", "$0", "§ ✓ © Conforme"] },
                { valores: ["7", "Techint S.A. (Redes Satelitales y Datos)", "$19.800", "No respondida", "$19.800", "$0", "§ ✓ b Conforme (Extr. Bco Macro)"] },
                { valores: ["8", "Cervecería y Maltería Quilmes S.A.I.C.A.", "$18.420", "$18.420", "$18.420", "$0", "§ ✓ © Conforme"] },
                { valores: ["9", "Resto Muestra B2B (57 cuentas corporativas)", "$152.100", "$144.300", "$152.100", "$0", "§ ✓ © b Conforme (Extr. Enero)"] },
                { valores: ["10", "Lote Muestral B2C Masivo (1.500 cuentas residenciales)", "$48.200", "N/A (Masivo)", "$48.200", "$0", "§ ✓ b Conforme (Extr. Bco Galicia/Nación)"] },
                { destacado: true, valores: ["∑", "Total Muestra Auditada Créditos por Ventas", "$433.620", "$366.620", "$433.620", "$0", "§ ∑ Validado 100% Conforme"] }
              ]
            }
          },
          {
            paso: "Aplicación de procedimientos alternativos de auditoría sobre las cuentas no contestadas y segmento masivo B2C mediante verificación de cobros posteriores en enero 2026.",
            comoSeEjecuta: "Para las 6 cuentas corporativas que no respondieron en término ($18.800M de Techint y cuentas menores por $7.800M) y para una muestra representativa del segmento masivo B2C ($48.200M), el equipo de auditoría aplicó el procedimiento alternativo conforme a la NIA 505 y Carlos A. Slosse: se cotejaron los recibos correlativos de cobranza en SAP contra los extractos bancarios oficiales de enero 2026 de Banco Nación, Galicia, Macro y Santander, verificando la acreditación íntegra de los fondos.",
            fuentes: "Extractos bancarios de enero 2026 de BNA, Galicia, Macro y Santander, avisos de transferencia y recibos de cobranza en SAP FI.",
            valores: "Cobranzas posteriores verificadas por un total de $74.800 millones en enero 2026.",
            resultado: "Se verificó la cancelación efectiva y cobro posterior del 100% de los saldos auditados en extractos bancarios de enero 2026, sin registrarse saldos incobrables o ficticios (✓ b §)."
          },
          {
            paso: "Análisis técnico de contexto patrimonial sobre la evolución interanual y combinación de negocios TMA (NIIF 3).",
            comoSeEjecuta: "Se analizó la evolución del saldo comercial ($800.128M vs $389.375M en 2024), constatando que la incorporación del stock consolidado de créditos de Telefónica Móviles Argentina S.A. ($421.919M medidos a valor razonable bajo NIIF 3) justifica técnicamente el incremento del rubro frente al crecimiento de las ventas, corroborando la plena razonabilidad y exposición de la Nota 5.",
            fuentes: "Nota 5 y Nota 29 de los Estados Financieros, informe de PPA bajo NIIF 3 y balance consolidado en SAP.",
            valores: "Stock de créditos incorporado de TMA por $421.919 millones.",
            resultado: "La composición de saldos de la cartera unificada se encuentra adecuadamente expuesta y respaldada conforme a las NIIF (✓ § ∑)."
          }
        ],
        procedimientoDetalle: "1) Circularización B2B: Se remitieron solicitudes directas a 65 grandes cuentas corporativas de Personal Tech, recibiendo 59 respuestas conformes sin discrepancias. 2) Cobros posteriores: Para las cuentas sin respuesta y el lote muestral B2C masivo, se verificó el 100% del cobro en extractos bancarios de enero 2026. 3) Cartera consolidada: Se constató la razonabilidad patrimonial del saldo incorporado de TMA bajo NIIF 3 sin registrarse desvíos de valuación.",
        fuentes: "Subdiario de clientes SAP SD/FI, cartas de circularización directa de saldos, extractos bancarios de enero 2026 y Nota 5 de los Estados Financieros.",
        valores: "Muestra auditada total de $433.620 millones sobre $1.071.047M de créditos brutos totales.",
        defensaOral: "Profesor, en PT-B1 auditamos la Existencia y Propiedad de los saldos por cobrar comerciales. Aplicamos una confirmación escrita directa (positiva) a 65 grandes clientes corporativos B2B de Personal Tech, obteniendo 59 respuestas conformes directas. Para las 6 cuentas que no respondieron en término y para el segmento de consumo masivo B2C, aplicamos el procedimiento alternativo estándar según Carlos A. Slosse y la NIA 505: cotejamos la efectiva cobranza posterior en los extractos bancarios oficiales de enero 2026 en Banco Nación, Galicia, Macro y Santander. El 100% de la muestra fue verificado sin diferencias ($0). No se proponen ajustes.",
        afirmacionesDetalle: "Valida Existencia (deudores reales y exigibles) y Propiedad (titularidad jurídica exclusiva de Telecom sin cesiones no contabilizadas)."
      },
      {
        ref: "PT-B2",
        bloquePrograma: "2. Prueba de Corte de Facturación e Interfaces de Cobro (Integridad / Medición)",
        nombre: "Prueba de Corte de Facturación B2B (Personal Tech) y Conciliación de Interfaces Recaudadoras Externas",
        afirmaciones: ["Integridad", "Medición"],
        marca: "§ ✓ b ∑",
        muestra: "100% de contratos B2B con hitos y actas de recepción emitidas entre el 15/12/2025 y el 15/01/2026 ($74.250M) y 100% de los lotes de liquidación e interfaces de cobranza externa (Rapipago, Pago Fácil, Billeteras Virtuales) al 31/12/2025 ($36.890M conciliados con extractos bancarios de enero 2026).",
        pasosConResultado: [
          {
            paso: "Prueba sustantiva de corte de facturación de servicios corporativos B2B (Personal Tech) bajo NIIF 15 para validar el devengamiento en el período correspondiente.",
            comoSeEjecuta: "Se cotejan las actas de recepción de servicios corporativos de conectividad Cloud, SD-WAN y ciberseguridad emitidas entre el 15/12/2025 y el 15/01/2026 contra el módulo de facturación SAP SD. Se comprueba que los ingresos por prestaciones concluidas antes del 31/12/2025 se encuentren devengados en el ejercicio 2025 y que los servicios correspondientes a enero 2026 no se hayan anticipado indebidamente.",
            fuentes: "Actas de conformidad de servicios B2B, órdenes de trabajo, contratos marco corporativos y subdiario de facturación SAP SD.",
            valores: "Muestra de contratos corporativos por un monto de $74.250 millones entre el 15/12/2025 y el 15/01/2026.",
            resultado: "Se verificó que los servicios corporativos con hito completado al 31/12/2025 se encontraban devengados en el ejercicio 2025 y los hitos de enero 2026 fueron imputados en el nuevo ejercicio, constatando el correcto corte contable bajo NIIF 15 (✓ §).",
            tabla: {
              cabeceras: ["Ítem / Contrato / Interfaz", "Fecha Acta / Liq.", "Fecha Fac. SAP", "Período Imputado", "Monto ($M)", "Inspección Documental y Bancaria", "Marcas y Estado"],
              filas: [
                { valores: ["Contrato B2B Fibra Óptica - Hito 4", "22/12/2025", "28/12/2025", "Ejercicio 2025", "$14.500", "Acta conforme y devengado en 2025", "§ ✓ Conforme"] },
                { valores: ["Contrato Datacenter Corp. - Abono Dic", "30/12/2025", "31/12/2025", "Ejercicio 2025", "$18.200", "Servicio prestado e imputado en 2025", "§ ✓ Conforme"] },
                { valores: ["Contrato Soluciones Cloud - Hito Enero", "05/01/2026", "08/01/2026", "Ejercicio 2026", "$12.100", "Devengado en 2026; corte correcto sin anticipación", "§ ✓ Conforme"] },
                { valores: ["Contrato Provisión Enlaces 5G - Fase 1", "12/01/2026", "14/01/2026", "Ejercicio 2026", "$9.850", "Hito certificado e imputado en 2026", "§ ✓ Conforme"] },
                { valores: ["Interfaz Rapipago (Cobranzas 29-31/12)", "31/12/2025", "31/12/2025", "Ejercicio 2025", "$16.420", "Acreditación en cuenta Bco Nación 02/01/26", "§ ✓ b Conforme"] },
                { valores: ["Interfaz Pago Fácil (Cobranzas 29-31/12)", "31/12/2025", "31/12/2025", "Ejercicio 2025", "$12.870", "Acreditación en cuenta Bco Galicia 02/01/26", "§ ✓ b Conforme"] },
                { valores: ["Interfaz Billeteras (Mercado Pago / Modo)", "31/12/2025", "31/12/2025", "Ejercicio 2025", "$7.600", "Conciliación de API y extracto bancario 02/01/26", "§ ✓ b Conforme"] },
                { destacado: true, valores: ["Total Procedimiento de Corte e Interfaces", "-", "-", "-", "$91.540", "Verificado 100% en término y debidamente imputado", "§ ∑ Validado Conforme"] }
              ]
            }
          },
          {
            paso: "Auditoría de conciliaciones de interfaces con agentes de cobranza externa al 31/12/2025 (Rapipago, Pago Fácil y Billeteras Virtuales).",
            comoSeEjecuta: "Se examinan las rendiciones de recaudación masiva de agentes externos (Gire S.A. / Rapipago, Western Union / Pago Fácil) y billeteras virtuales (Mercado Pago, Modo) al 31/12/2025 por $36.890 millones en tránsito. Se cotejan contra las acreditaciones bancarias de los primeros días hábiles de enero 2026 y la desafectación en los auxiliares de clientes en SAP FI-CA.",
            fuentes: "Archivos EDI de rendición diaria de recaudadores, extractos bancarios de enero 2026 y subdiario de cobranzas SAP.",
            valores: "Cobranzas masivas en tránsito al cierre por $36.890 millones.",
            resultado: "Se constató que las partidas en tránsito se encontraban adecuadamente conciliadas e impactadas en las cuentas de clientes al 31/12/2025, acreditándose íntegramente en los extractos bancarios del 02/01/2026 sin diferencias ni ingresos omitidos (✓ b §)."
          }
        ],
        procedimientoDetalle: "1) Corte B2B NIIF 15: Se auditaron actas y contratos firmados entre el 15/12/2025 y el 15/01/2026 por $74.250M, constatando su devengamiento en el período correspondiente. 2) Conciliación de interfaces: Se revisaron los lotes de recaudación externa de fin de año por $36.890M, verificando su acreditación bancaria en término en enero 2026 y su correcta imputación contable sin diferencias ($0).",
        fuentes: "Actas de conformidad B2B, contratos marco, órdenes de facturación en SAP SD, rendiciones de agentes recaudadores y extractos bancarios de enero 2026.",
        valores: "Total procedimiento de corte e interfaces de $91.540 millones verificado conforme.",
        defensaOral: "Profesor, en PT-B2 auditamos el corte de operaciones al 31/12/2025 con dos enfoques: primero, seleccionamos las actas de conformidad de servicios corporativos B2B de Personal Tech emitidas entre el 15/12/2025 y el 15/01/2026, comprobando que los ingresos y sus créditos asociados se devengaron en el ejercicio que correspondía bajo NIIF 15; segundo, auditamos las interfaces de cobranza con recaudadores externos (Rapipago, Pago Fácil y billeteras virtuales) con corte al 31/12/2025, corroborando que los fondos en tránsito se acreditaron en los extractos bancarios de los primeros días hábiles de enero 2026 sin desvíos ni omisiones de cobros. Diferencia: $0. Conforme.",
        afirmacionesDetalle: "Valida Integridad (registro íntegro de operaciones devengadas) y Medición (corte estricto de ingresos y créditos bajo NIIF 15)."
      },
      {
        ref: "PT-B3",
        bloquePrograma: "3. Evaluación y Recálculo de la Previsión para Incobrables NIIF 9 con TAACs (Medición)",
        nombre: "Recálculo de la Matriz de Antigüedad de Deuda (Aging) y Pérdida Crediticia Esperada (ECL NIIF 9) con TAACs",
        afirmaciones: ["Medición", "Exposición"],
        marca: "§ ✓ ∑",
        muestra: "100% del padrón unificado de deudores en ERP SAP ($1.071.047M brutos, >18 millones de abonados) mediante software de auditoría asistido por computador (TAACs).",
        pasosConResultado: [
          {
            paso: "Extracción y reproceso analítico del 100% de la base unificada de antigüedad de saldos (aging) al 31/12/2025 mediante TAACs.",
            comoSeEjecuta: "Mediante scripts de auditoría en Python/TAACs sobre la base unificada de partidas abiertas de SAP FI-AR / FI-CA, se recalcula la antigüedad exacta de cada documento por fecha de vencimiento contractual, clasificándolos en 5 tramos cronológicos: corrientes a vencer, 1 a 30 días, 31 a 90 días, 91 a 180 días y más de 180 días de mora.",
            fuentes: "Base de partidas abiertas de SAP FSCM y Convergent Invoicing al 31/12/2025.",
            valores: "Padrón unificado de más de 18 millones de abonados y saldos brutos por $1.071.047 millones ($1.070.107M corrientes y $940M no corrientes).",
            resultado: "El reproceso analítico con TAACs confirmó la integridad matemática y adecuada estratificación de la cartera por tramos de morosidad sin partidas omitidas ni duplicadas (∑ §)."
          },
          {
            paso: "Verificación de la cobertura al 100% de los deudores con morosidad superior a 180 días y recálculo de la matriz de pérdida crediticia esperada (NIIF 9).",
            comoSeEjecuta: "Conforme a la NIIF 9 (enfoque simplificado de pérdidas crediticias esperadas), se valida que la totalidad de los deudores con mora superior a 180 días ($85.684 millones) se encuentren contemplados en la matriz de previsión al 100%. Asimismo, se aplica la matriz de probabilidad de pérdida sobre los tramos restantes incorporando tasas históricas de incobrabilidad y factores macroeconómicos forward-looking (riesgo país e inflación).",
            fuentes: "Modelo actuarial de riesgo crediticio de Telecom, matrices históricas de morosidad y Nota 5 de los Estados Financieros.",
            valores: "Cartera bruta de $1.071.047 millones y previsión registrada en libros de $(270.919) millones.",
            resultado: "El recálculo independiente arrojó una previsión de $(270.919) millones, coincidiendo de forma exacta con el saldo contable registrado por la Sociedad en la Nota 5. Diferencia de auditoría: $0. Conforme (✓ ∑ §).",
            tabla: {
              cabeceras: ["Estrato de Morosidad (SAP)", "Saldo Bruto ($M)", "% Cartera", "Tasa ECL NIIF 9", "Previsión Auditada ($M)", "Previsión Libros ($M)", "Diferencia ($M)", "Marcas y Estado"],
              filas: [
                { valores: ["Corrientes (A vencer / sin mora)", "$728.312", "68,0%", "1,8%", "$13.110", "$13.110", "$0", "§ ✓ Conforme"] },
                { valores: ["Vencidos de 1 a 30 días", "$139.236", "13,0%", "6,5%", "$9.050", "$9.050", "$0", "§ ✓ Conforme"] },
                { valores: ["Vencidos de 31 a 90 días", "$74.973", "7,0%", "22,0%", "$16.494", "$16.494", "$0", "§ ✓ Conforme"] },
                { valores: ["Vencidos de 91 a 180 días", "$42.842", "4,0%", "55,0%", "$23.563", "$23.563", "$0", "§ ✓ Conforme"] },
                { valores: ["Vencidos > 180 días (Gestión Judicial)", "$85.684", "8,0%", "100,0%", "$85.684", "$85.684", "$0", "§ ✓ Conforme (100% Prev.)"] },
                { valores: ["Componente Forward-Looking Macroeconómico", "N/A", "N/A", "Riesgo País / Inflación", "$123.018", "$123.018", "$0", "§ ✓ Conforme NIIF 9"] },
                { destacado: true, valores: ["Total Cartera / Previsión Acumulada", "$1.071.047", "100,0%", "25,3% (Efectiva)", "$(270.919)", "$(270.919)", "$0", "§ ∑ Validado Conforme"] }
              ]
            }
          }
        ],
        procedimientoDetalle: "1) Reproceso con TAACs: Se procesó el 100% de la base de datos de deudores en SAP clasificando los saldos por antigüedad. 2) Mora > 180 días: Se comprobó que el 100% de los deudores con morosidad superior a 180 días ($85.684M) están cubiertos al 100% en la previsión. 3) Recálculo NIIF 9: Se aplicó la matriz de pérdida crediticia esperada incorporando variables históricas y forward-looking, obteniendo una previsión requerida de $(270.919)M coincidente al 100% con los libros.",
        fuentes: "Padrón unificado de partidas abiertas SAP FSCM, tablas de parámetros NIIF 9 y Nota 5 de los Estados Contables.",
        valores: "Padrón de $1.071.047M brutos. Previsión contable $(270.919)M vs Previsión auditada $(270.919)M. Diferencia: $0.",
        defensaOral: "Profesor, en PT-B3 auditamos la afirmación de Medición de la Previsión para Deudores Incobrables bajo NIIF 9 mediante software de auditoría asistido por computador (TAACs) sobre la totalidad de los deudores. Comprobamos dos aspectos centrales: primero, que la totalidad de los clientes con morosidad superior a 180 días ($85.684 millones) se encuentran previsionados al 100%; segundo, recalculamos de forma independiente la matriz de pérdida crediticia esperada integrando factores macroeconómicos de la economía argentina. El recálculo arrojó exactamente $(270.919) millones, igual al saldo contable expuesto en la Nota 5. La previsión es razonable y suficiente. No se requiere ajuste.",
        afirmacionesDetalle: "Valida Medición (valuación de deudores incobrables conforme a la Pérdida Crediticia Esperada de NIIF 9) y Exposición (revelación de la evolución de la previsión en Nota 5)."
      }
    ],
    conclusionRubro: "El rubro Créditos por Ventas ($800.128M netos consolidado) se valida conforme a NIIF 9 y NIIF 15 sin proponer asientos de ajuste al cierre del ejercicio. La confirmación escrita directa B2B, las cobranzas posteriores en extractos bancarios de enero 2026, la prueba de corte e interfaces recaudadoras, y el recálculo con TAACs de la previsión para incobrables ratificaron la razonabilidad y suficiencia de los saldos contables.",
    resumenMetodologicoRubro: {
      titulo: "Exposición Metodológica Integral: Auditoría de Créditos por Ventas (Nota 5)",
      subtitulo: "Fundamentación técnica secuencial de las Cédulas Analíticas PT-B1, PT-B2 y PT-B3: circularización corporativa B2B, cobranzas posteriores en extractos bancarios, corte de facturación e interfaces, y recálculo con TAACs de la previsión bajo NIIF 9.",
      tituloSintesis: "Conclusión del Rubro Créditos por Ventas bajo NIA 500 / RT 37 — Validación Conforme Sin Ajustes",
      introduccion: "El rubro Créditos por Ventas representa un saldo neto consolidado de $800.128 millones al 31/12/2025 ($1.070.107M corrientes y $940M no corrientes menos $(270.919)M de previsión en Nota 5). En concordancia con el Riesgo de Control MEDIO (72%) determinado en la matriz de evaluación del control interno (Tabla 25), estructuramos un enfoque sustantivo integral basado en circularización escrita directa y cobros posteriores (PT-B1), prueba de corte de facturación e interfaces de recaudación al cierre (PT-B2) y recálculo masivo de la morosidad y pérdida crediticia esperada mediante software TAACs (PT-B3). Los procedimientos ejecutados confirmaron que los saldos se encuentran íntegros, válidos y razonablemente medidos sin necesidad de ajustes.",
      pasosNarrativos: [
        {
          pt: "PT-B1",
          etiqueta: "Paso 1 • Confirmación Directa y Cobros Posteriores",
          titulo: "Circularización a Grandes Clientes Corporativos B2B (Personal Tech) y Cobranzas Posteriores",
          afirmacion: "Afirmaciones Auditadas: Existencia y Propiedad (NIA 505 / Slosse)",
          relato: "En PT-B1 auditamos la existencia real y titularidad de los créditos seleccionando una muestra estratificada de 65 grandes cuentas corporativas B2B de Personal Tech ($385.420M). Enviamos cartas de confirmación escrita directa (positiva) bajo control de auditoría, obteniendo 59 respuestas conformes directas ($366.620M) sin discrepancias (©). Para las 6 cuentas corporativas no contestadas en término ($18.800M de Techint y cuentas menores por $7.800M) y para una muestra de 1.500 cuentas del segmento masivo B2C ($48.200M), aplicamos el procedimiento alternativo estándar según la NIA 505 y Carlos A. Slosse: cotejamos la efectiva cobranza posterior en los extractos bancarios oficiales de enero 2026 en Banco Nación, Galicia, Macro y Santander, validando la cancelación efectiva del 100% de dichos saldos (✓ b). Diferencia: $0. Conforme."
        },
        {
          pt: "PT-B2",
          etiqueta: "Paso 2 • Corte de Facturación e Interfaces de Cobro",
          titulo: "Prueba de Corte de Facturación B2B (Personal Tech) y Conciliación de Interfaces Recaudadoras Externas",
          afirmacion: "Afirmaciones Auditadas: Integridad y Medición / Devengado (NIIF 15 / RT 37)",
          relato: "En PT-B2 auditamos el corte de operaciones al cierre examinando los contratos corporativos B2B y actas de recepción técnica emitidas entre el 15/12/2025 y el 15/01/2026 ($74.250M), junto con la totalidad de los lotes de liquidación e interfaces de recaudadores externos (Rapipago, Pago Fácil y billeteras virtuales) al 31/12 ($36.890M en tránsito). Constatamos que los servicios prestados con hito al cierre se encontraban devengados en el ejercicio 2025 y los hitos de enero 2026 se registraron en el ejercicio siguiente de conformidad con la NIIF 15. Asimismo, las cobranzas en tránsito se conciliaron íntegramente contra los extractos bancarios del 02/01/2026 sin diferencias ni ingresos omitidos. Diferencia: $0. Conforme."
        },
        {
          pt: "PT-B3",
          etiqueta: "Paso 3 • Reproceso NIIF 9 y Pérdida Crediticia Esperada con TAACs",
          titulo: "Recálculo de la Matriz de Antigüedad de Deuda (Aging) y Previsión Acumulada NIIF 9 con TAACs",
          afirmacion: "Afirmaciones Auditadas: Medición (Valuación NIIF 9) y Exposición (Nota 5)",
          relato: "En PT-B3 ejecutamos un reproceso de auditoría asistido por computador (TAACs) sobre el 100% del padrón unificado de deudores de Telecom en SAP ($1.071.047 millones de saldos brutos y más de 18 millones de líneas activas). Clasificamos cronológicamente la cartera por tramos de vencimiento, comprobando que la totalidad de los deudores con morosidad superior a 180 días ($85.684M) se encuentran cubiertos al 100%. Al recalcular de forma independiente la matriz simplificada de Pérdida Crediticia Esperada (ECL NIIF 9) incorporando tasas históricas de incumplimiento y factores macroeconómicos forward-looking, obtuvimos una provisión requerida de $(270.919) millones, coincidente de forma exacta con la cifra contabilizada por la Sociedad en la Nota 5. La estimación contable es suficiente y razonable. Diferencia de auditoría: $0. Conforme sin ajustes."
        }
      ],
      conclusionNarrativa: "En base a las pruebas sustantivas realizadas conforme a las Normas Internacionales de Auditoría (NIA 500, NIA 505 y NIA 520) y a la Resolución Técnica N° 37 de la FACPCE, se concluye que el rubro Créditos por Ventas de Telecom Argentina S.A. al 31 de diciembre de 2025 presenta un saldo neto auditado de $800.128 millones que refleja razonablemente los derechos de cobro de la entidad en todos sus aspectos significativos, con saldos existentes, íntegros, de su legítima propiedad y adecuadamente valuados bajo NIIF 9 y NIIF 15. No se identificaron desvíos materiales ni se proponen ajustes contables al cierre del ejercicio auditado."
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
        contenido: "Se identificó como único ajuste patrimonial relevante de auditoría el Asiento AJ-01 en Bienes de Uso (por baja de centrales analógicas obsoletas y vandalismo por $28.340M), mientras que Créditos por Ventas (Programa B) fue validado conforme sin ajustes por comprobarse la razonabilidad de la cartera y la suficiencia de la previsión NIIF 9. Adicionalmente, se formuló la reclasificación AJ-04 en Ventas por suscripciones de terceros en Flow ($11.240M, con efecto neutro en resultado y PN). Asimismo, se verificó el pleno cumplimiento de los covenants financieros y la vigencia del principio contable de empresa en funcionamiento (empresa en marcha)."
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
