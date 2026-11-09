// Datos de la Etapa 2 (Ejecución, Papeles de Trabajo, Hallazgos, PAE) y Etapa 3 (Conclusión, Memorando, Carta CI e Informe del Auditor RT 37/53)

export const marcasAuditoria = [
  { simbolo: "✓", significado: "Cotejado con documentación respaldatoria original (factura CAE/ARCA, acta de recepción B2B, escritura RPI o resolución ENACOM)." },
  { simbolo: "∑", significado: "Suma vertical y horizontal verificada sin diferencias mediante recálculo independiente." },
  { simbolo: "©", significado: "Saldo confirmado directamente por tercero independiente (circularización bancaria, Caja de Valores S.A. o cliente B2B)." },
  { simbolo: "⊗", significado: "Observación / Desvío de control interno o diferencia de auditoría trasladada a la Planilla de Ajustes Propuestos (PAE)." },
  { simbolo: "§", significado: "Cotejado con el Libro Mayor General y Balance de Sumas y Saldos del sistema ERP SAP al 31/12/2025." }
];

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
      { subcuenta: "1.1.01 - PP&E Redes e Infraestructura Personal (FTTH / 4G / 5G / Nodos - Nota 9)", saldoLibros: 5995980, debe: 0, haber: 28340, saldoAuditado: 5967640, marca: "§ ⊗" },
      { subcuenta: "1.1.02 - PP&E Redes TMA, Edificios, Equipos y Obras en Curso (Nota 9)", saldoLibros: 793138, debe: 0, haber: 0, saldoAuditado: 793138, marca: "§ ✓ ∑" }
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
      titulo: "Relato Metodológico Integral: Cómo auditamos los Bienes de Uso de Telecom paso a paso",
      subtitulo: "Narración continua de la estrategia de auditoría: qué fuimos a buscar en cada procedimiento, qué comprobamos con certeza, qué anomalías descubrimos y por qué se tomaron estas decisiones profesionales.",
      introduccion: "Auditar los Bienes de Uso de Telecom Argentina S.A. representó el desafío sustantivo más importante del encargo: el rubro concentra casi $6,8 billones netos en el balance (el 40,84% del activo total) y acumulaba un año histórico marcado por la compra millonaria de Telefónica Móviles Argentina (TMA) y el despliegue de 5G. Además, en la Etapa 1 el cuestionario de control interno (CCI-01) nos había encendido una luz roja con un Riesgo de Control Alto (NC 38,46%) por falta de recuentos periódicos en la vía pública y atrasos en denuncias de siniestros. Para blindar nuestra opinión bajo la RT 37 y las NIA, diseñamos una secuencia lógica de cuatro pasos que fue desde el trabajo de campo físico hasta el recálculo matemático de gabinete.",
      pasosNarrativos: [
        {
          pt: "PT-A1",
          etiqueta: "Paso 1 • En el Terreno",
          titulo: "Inspección Ocular: Salir a constatar los fierros y cruzar con la realidad de la calle",
          afirmacion: "Afirmación Central: Existencia e Integridad Física",
          relato: "Arrancamos el trabajo directamente en el campo. Cuando una empresa tiene $16 billones en activos fijos brutos, el auditor no puede quedarse sentado en una oficina dando por hecho que las cosas existen. Fuimos en persona a los 16 Data Centers principales del país (como Pacheco, Barracas, Córdoba y Rosario) y a una muestra de 85 nodos ópticos y radiobases 5G. Constatamos con nuestros propios ojos que los servidores troncales, las antenas y los equipos de transmisión existen físicamente, están encendidos y operan con normalidad. Pero como en Argentina el tendido de red en la calle sufre robos constantes, no nos conformamos con mirar los edificios cerrados: solicitamos a Seguridad Patrimonial los partes de siniestros y copias de denuncias policiales por robo de cables y vandalismo en la vía pública. Al cruzar esos partes de bajas físicas contra el sistema contable SAP, descubrimos la primera falla: había $6.890 millones en tramos de fibra óptica y equipos robados durante el último trimestre que ya no estaban en la realidad, pero que Telecom seguía manteniendo activados en su balance como si nada hubiera pasado."
        },
        {
          pt: "PT-A2",
          etiqueta: "Paso 2 • Rastro del Dinero",
          titulo: "Auditoría del CAPEX y la Adquisición Histórica de Telefónica Móviles (TMA)",
          afirmacion: "Afirmaciones Centrales: Integridad y Medición (Costo Histórico / NIIF 3)",
          relato: "Habiendo probado la existencia física, el segundo paso fue seguirle el rastro al dinero de las inversiones del año: más de $1,35 billones en adiciones (CAPEX) y la incorporación colosal de la red de Telefónica Móviles Argentina (TMA). Para ser eficientes y no perder tiempo revisando compras menores, pusimos el foco en todas las adiciones que superaban nuestro umbral de $8.311 millones. Rastreé el circuito comercial y documental de punta a punta: verificamos la orden de compra aprobada con firmas autorizadas en SAP MM, la factura en dólares del fabricante tecnológico (Nokia, Huawei, Ericsson), el despacho de aduana oficial donde se constató el pago de fletes y aranceles de importación (que la NIC 16 permite capitalizar al costo del bien), la entrada física al almacén y el Acta PAC de Puesta en Servicio firmada por los ingenieros de red. ¿Qué logramos validar con esto? Dos cosas fundamentales: primero, que las obras que se activaron durante 2025 realmente se habían terminado y comenzaron a amortizarse en la fecha correcta (sin inflar indebidamente las obras en curso); y segundo, que los $1,33 billones de fierros heredados de TMA quedaron incorporados al valor razonable exigido por la NIIF 3 de combinación de negocios."
        },
        {
          pt: "PT-A3",
          etiqueta: "Paso 3 • Seguridad Jurídica",
          titulo: "Verificación Registral: Confirmar que los bienes realmente le pertenecen a Telecom",
          afirmacion: "Afirmación Central: Derechos y Obligaciones (Propiedad Legal)",
          relato: "Carlos Slosse siempre enfatiza que no alcanza con que un edificio exista y esté lleno de antenas: el auditor tiene que asegurarse de que la empresa sea legalmente la dueña y de que ningún banco pueda ejecutar esos bienes por deudas no reveladas. Por eso, en el tercer paso fuimos a buscar evidencia externa e independiente. Pedimos certificados de dominio al Registro de la Propiedad Inmueble para el 100% de los edificios centrales y predios donde operan los Data Centers, y cotejamos una muestra selectiva de 60 camionetas de las cuadrillas técnicas en los Registros del Automotor. ¿Qué comprobamos? Que todas las escrituras y títulos están en perfecta regla a nombre de Telecom Argentina S.A. y que sobre estos activos no pesan hipotecas, embargos judiciales ni prendas de ningún tipo que hubieran sido omitidas en las Notas 9 y 14 de los estados contables."
        },
        {
          pt: "PT-A4",
          etiqueta: "Paso 4 • Cierre Analítico y Técnico",
          titulo: "Recálculo Global de Amortizaciones y la Detección de Obsolescencia en la Red de Cobre",
          afirmacion: "Afirmaciones Centrales: Medición (NIC 16 / NIC 36) y Exposición",
          relato: "Con los fierros vistos, el dinero rastreado y la propiedad comprobada, nos sentamos en el gabinete a realizar el cierre cuantitativo del rubro. Ejecutamos una Prueba Global Analítica independiente recalculando la amortización teórica del ejercicio ($1.533.091 millones) y el valor residual final ($6.859.618 millones bruto de previsiones), comprobando que ambos cálculos cerraban con exactitud matemática contra los cuadros oficiales de la Nota 9 de Telecom. Pero un recálculo contable solo procesa lo que la máquina tiene registrado; no sabe si la tecnología se volvió obsoleta. Por eso dimos el golpe de gracia: pedimos el informe confidencial de ingeniería de operaciones sobre el plan de desmantelamiento de la red fija histórica. Al cruzarlo con el inventario contable, saltó el gran hallazgo del año: centrales analógicas de conmutación de cobre por $21.450 millones que ya habían sido desconectadas y no tenían ni un solo usuario porque toda la zona se migró a fibra óptica (FTTH). Esos equipos estaban muertos comercialmente, con valor recuperable cero, pero en los libros de Telecom seguían figurando con valor positivo porque la empresa no había registrado el cargo por desvalorización según la NIC 36."
        }
      ],
      conclusionNarrativa: "Aquí es donde la auditoría se vuelve una disciplina apasionante y cobra pleno sentido profesional. Si hubiéramos analizado el faltante de la fibra destruida en la calle ($6.890M de PT-A1) de forma aislada, un auditor descuidado lo habría descartado por estar por debajo del umbral mínimo PAE ($8.311M). Pero la NIA 450 y la RT 37 prohíben mirar los desvíos del mismo rubro como islas separadas: al sumar la inexistencia de la fibra vandalizada con la obsolescencia técnica de las centrales analógicas ($21.450M de PT-A4), el desvío acumulado ascendió a $28.340 millones. Ese importe supera holgadamente el umbral y nos dio el sustento irrefutable para exigirle a la Gerencia el Asiento de Ajuste AJ-01. Como ese monto total no llega a la Materialidad Global ($166.225M), si la empresa acepta registrarlo o no lo hace, el balance no sufre una distorsión significativa y no requiere una opinión con salvedades. Concluimos así un trabajo exhaustivo, donde cada procedimiento respondió a un riesgo real y logramos validar con elementos de juicio válidos y suficientes que los Bienes de Uso de Telecom reflejan razonablemente su realidad económica."
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
    estadoPT: "Con Hallazgo Material (> PAE)",
    cedulaSumaria: [
      { subcuenta: "1.2.01 - Créditos por Ventas Comunes Corrientes Brutos (Nota 5 — Incluye incorporación TMA $421.919M bajo NIIF 3)", saldoLibros: 1067130, debe: 0, haber: 4180, saldoAuditado: 1062950, marca: "§ ⊗" },
      { subcuenta: "1.2.02 - Otros Créditos por Ventas Corrientes ($2.977M) y No Corrientes ($940M - Nota 5) / B2B Personal Tech", saldoLibros: 3917, debe: 14620, haber: 0, saldoAuditado: 18537, marca: "© ⊗" },
      { subcuenta: "1.2.03 - Previsión para Deudores Incobrables Acumulada (Nota 5 — Pérdida Crediticia Esperada NIIF 9)", saldoLibros: -270919, debe: 0, haber: 19850, saldoAuditado: -290769, marca: "∑ ⊗" }
    ],
    procedimientosEjecutados: [
      {
        ref: "PT-B1",
        nombre: "Circularización de Clientes Corporativos B2B (Personal Tech), Verificación Adquisición TMA (NIIF 3) y Cobros Posteriores",
        afirmaciones: ["Existencia", "Propiedad", "Medición"],
        muestra: "65 grandes cuentas corporativas y organismos públicos + Verificación del PPA (NIIF 3) e incorporación de cartera de Telefónica Móviles Argentina S.A. (TMA: $421.919M al 24/02/2025).",
        resultado: "Se recibieron 54 respuestas conformes (©) y sobre las 11 restantes se verificó el cobro posterior en extractos bancarios de enero 2026 (✓). Asimismo, se comprobó la medición a valor razonable inicial de la cartera de créditos adquirida de TMA ($421.919M bajo NIIF 3), lo que explica por qué el stock de Créditos al cierre crece +105,25% mientras el Estado de Resultados consolida solo 10 meses de ventas de TMA (marzo a diciembre 2025).",
        marca: "© ✓"
      },
      {
        ref: "PT-B2",
        nombre: "Prueba de Corte de Facturación B2B y Conciliación de Agentes Externos",
        afirmaciones: ["Integridad", "Existencia"],
        muestra: "Contratos y actas de recepción B2B emitidos entre el 15/12/2025 y el 15/01/2026 + Interfaces de cobro al 31/12.",
        resultado: "1) [Integridad - Corte] Se detectaron 8 hitos de integración Cloud/Ciberseguridad de Personal Tech con acta de conformidad final firmada entre el 20/12 y el 30/12/2025 por $14.620 millones que recién fueron facturados en enero 2026 (CCI-02 preg. 16) (⊗). 2) [Existencia] En las interfaces de Rapipago, Pago Fácil y billeteras virtuales (CCI-02 preg. 5) se verificaron cobranzas del 30 y 31/12 por $4.180 millones ya abonadas por los clientes pero pendientes de desafectación en sus cuentas corrientes al cierre (⊗).",
        marca: "✓ ⊗"
      },
      {
        ref: "PT-B3",
        nombre: "Recálculo de la Matriz de Antigüedad de Saldos y Previsión Acumulada NIIF 9 ($270.919M en Nota 5)",
        afirmaciones: ["Medición", "Exposición"],
        muestra: "100% del padrón unificado de deudores (Telecom + TMA = $1.071.047M brutos) mediante rutinas de auditoría asistida por computador (TAACs).",
        resultado: "La Sociedad expone en Nota 5 una Previsión para Deudores Incobrables acumulada de $(270.919)M (con cargo a resultados del ejercicio de $(143.722)M). Al ejecutar el reproceso íntegro del padrón de morosidad tras la integración de sistemas de TMA y legados, se comprobó que una sub-cartera de consumo masivo migrada con mora > 180 días ($24.812M) había quedado excluida del cálculo automático de pérdida crediticia esperada (CCI-02 preg. 19), determinando un defecto de previsión de $19.850 millones (⊗).",
        marca: "∑ ⊗"
      }
    ],
    conclusionRubro: "Se valida la apertura de la Nota 5 (Créditos brutos $1.071.047M menos Previsión NIIF 9 $(270.919)M = $800.128M netos, incluyendo el efecto de consolidación de TMA bajo NIIF 3) y se proponen los ajustes AJ-02 (devengado B2B $14.620M y cobranzas en tránsito $4.180M) y AJ-03 (refuerzo de Previsión por $19.850M)."
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
      { subcuenta: "2.1.01 - Obligaciones Negociables (ONs Ley NY y Ley Argentina - Corriente y No Corriente)", saldoLibros: 3642530, debe: 0, haber: 0, saldoAuditado: 3642530, marca: "© § ∑" },
      { subcuenta: "2.1.02 - Préstamos Bancarios y Organismos Multilaterales (IFC / BID / Finnvera)", saldoLibros: 1685905, debe: 0, haber: 0, saldoAuditado: 1685905, marca: "© ✓ ∑" },
      { subcuenta: "2.1.03 - Intereses Devengados e Instrumentos Financieros Derivados (IFD)", saldoLibros: 108180, debe: 0, haber: 0, saldoAuditado: 108180, marca: "✓ ∑" }
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
      { subcuenta: "4.1.01 - Ventas Servicios Móviles (Personal 4G/5G)", saldoLibros: 3498100, debe: 0, haber: 0, saldoAuditado: 3498100, marca: "§ ∑" },
      { subcuenta: "4.1.02 - Ventas Internet Fija (FTTH / HFC Banda Ancha)", saldoLibros: 2415350, debe: 0, haber: 0, saldoAuditado: 2415350, marca: "§ ∑" },
      { subcuenta: "4.1.03 - Ventas TV Paga, Streaming y Contenidos (Flow)", saldoLibros: 1332610, debe: 11240, haber: 0, saldoAuditado: 1321370, marca: "§ ⊗" },
      { subcuenta: "4.1.04 - Soluciones Digitales Corporativas B2B (Personal Tech) y Fija", saldoLibros: 1082754, debe: 0, haber: 14620, saldoAuditado: 1097374, marca: "✓ ⊗" }
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
    refLegajo: "Legajo Corriente — Sección E (Cédula Sumaria E-1 y Analíticas E-2 a E-3)",
    elaboradoPor: "Lic. R. Moretti / Grebe",
    revisadoPor: "Pisonero De Biase",
    fecha: "02/02/2026",
    saldoSegunLibros: 2671525,
    ajustePropuestoNeto: 0,
    saldoAuditado: 2671525,
    estadoPT: "Conforme (Validación Regulatoria y NIC 38)",
    cedulaSumaria: [
      { subcuenta: "1.3.01 - Licencias de Espectro 4G/5G (Banda 3.400-3.500 MHz) y Concesiones (Nota 10)", saldoLibros: 1985420, debe: 0, haber: 0, saldoAuditado: 1985420, marca: "© ✓ ∑" },
      { subcuenta: "1.3.02 - Desarrollos de Software Capitalizados, Marcas y Otros Intangibles (Nota 10)", saldoLibros: 686105, debe: 0, haber: 0, saldoAuditado: 686105, marca: "✓ ∑" }
    ],
    procedimientosEjecutados: [
      {
        ref: "PT-E1",
        nombre: "Verificación Legal de Concesiones de Espectro ENACOM (Lote 5G) y Marcas INPI",
        afirmaciones: ["Existencia", "Propiedad"],
        muestra: "100% de las resoluciones de adjudicación del ENACOM y certificados marcarios del INPI.",
        resultado: "Se inspeccionaron las resoluciones del ENACOM que otorgan el espectro 5G (Banda 3.400-3.500 MHz) y 4G, verificando el cumplimiento de las garantías y cronogramas de despliegue comprometidos (✓). Marcas Personal, Flow y Personal Tech vigentes en el INPI a nombre de la Sociedad (©).",
        marca: "© ✓",
        procedimientoDetalle: "1) Licencias de espectro: Se solicitan copias certificadas de las resoluciones de ENACOM (ej. adjudicación Lote 5G en Banda 3.400-3.500 MHz) cotejadas contra el Boletín Oficial, verificando vigencia (20 años), titularidad legal a nombre de Telecom y cumplimiento de garantías de despliegue. 2) Marcas comerciales: Búsqueda registral pública ante el INPI confirmando titularidad vigente de marcas clave (Personal, Flow, Telecom) sin litigios ni prendas.",
        defensaOral: "En PT-E1 validamos Existencia y Propiedad mediante inspección documental directa: cotejamos las resoluciones de adjudicación de espectro 4G/5G otorgadas por el ente regulador (ENACOM) y los títulos marcarios en el INPI, verificando que los derechos pertenezcan legalmente a Telecom y estén vigentes.",
        afirmacionesDetalle: "Valida Existencia (concesiones y marcas legalmente activas) y Propiedad (titularidad exclusiva de Telecom en registros públicos)."
      },
      {
        ref: "PT-E2",
        nombre: "Prueba de Proyectos de Software (NIC 38 — Existencia e Integridad) y Recálculo de Amortizaciones",
        afirmaciones: ["Existencia", "Integridad", "Medición", "Exposición"],
        muestra: "100% del portafolio de proyectos de IT en SAP PS (18 proyectos evolutivos de Flow, App Mi Personal e IA) + Muestra de cuentas de gastos tecnológicos.",
        resultado: "Los 18 proyectos activados cumplen con los requisitos de factibilidad técnica y beneficio económico futuro de la NIC 38, y de la revisión del módulo SAP PS y cuentas de gastos tecnológicos se comprobó que no se omitió la capitalización de desarrollos elegibles (✓). El recálculo global de amortizaciones según la vida útil remanente de las licencias y software no arrojó diferencias significativas (∑).",
        marca: "✓ ∑",
        procedimientoDetalle: "1) Proyectos de software en SAP PS: Se audita que los costos activados correspondan exclusivamente a la Fase de Desarrollo (arquitectura, programación y pruebas UAT) y no a investigación o mantenimiento rutinario (NIC 38.57). 2) Prueba de Integridad y Corte: Se auditan cuentas de gastos de IT para verificar que no se hayan mandado a pérdidas desarrollos que debían capitalizarse. 3) Recálculo de Amortizaciones: Recálculo independiente aplicando alícuotas lineales (licencias 15-20 años, software 3-5 años) sobre valores reexpresados (NIC 29), comparando con el cargo del ejercicio sin desvíos significativos.",
        defensaOral: "En PT-E2 auditamos los desarrollos de software bajo NIC 38: verificamos en SAP PS que solo se activen costos de la etapa de desarrollo de proyectos con beneficio económico futuro comprobable, descartando gastos de mantenimiento. Asimismo, ejecutamos un recálculo matemático global de las amortizaciones según sus vidas útiles, resultando satisfactorio.",
        afirmacionesDetalle: "Valida Existencia e Integridad (activación rigurosa bajo NIC 38 sin omisiones ni sobrevaluaciones) y Medición (amortizaciones lineales según vida útil remanente)."
      }
    ],
    conclusionRubro: "Los Activos Intangibles ($2.671.525 millones) se encuentran debidamente respaldados por títulos de concesión ENACOM, registros marcarios INPI y proyectos de software bajo NIC 38 con amortizaciones recalculadas conforme a sus vidas útiles."
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
      { subcuenta: "1.4.01 - Llaves de Negocio (Nota 8 — Fusión Cablevisión / UGE Redes Personal y TMA)", saldoLibros: 4443998, debe: 0, haber: 0, saldoAuditado: 4443998, marca: "§ ∑" }
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
