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
        pasosPrograma: [
          "Seleccionar del auxiliar contable de Activo Fijo (SAP FI-AA) una muestra de nodos de red, sitios 5G y servidores en los Data Centers principales de AMBA e interior.",
          "Verificar in situ la existencia física y el estado de operatividad de los activos seleccionados.",
          "Cruzar el auxiliar contable de activos vigentes contra los informes operativos de siniestros, robo de cableado y vandalismo de fibra para comprobar que los bienes destruidos hayan sido dados de baja."
        ],
        muestra: "Seleccionada desde el auxiliar contable de SAP (FI-AA): 16 Data Centers propios (Pacheco, Barracas, Córdoba, Rosario, etc.) + 85 nodos ópticos/radiobases 5G.",
        resultado: "Partiendo del auxiliar contable hacia el terreno, se verificó in situ la existencia y operatividad de los 16 Data Centers y sitios 5G inspeccionados (✓). Sin embargo, al cruzar el listado de activos vigentes en SAP contra los reportes operativos de siniestros del área de Operaciones, se detectaron tendidos de fibra óptica y nodos vandalizados/robados en vía pública en el 4° trimestre por $6.890 millones que permanecían activados sin haberse dado de baja (⊗).",
        procedimientoDetalle: "1) Población y Terreno: Se extrae del Subdiario de Activos Fijos (SAP FI-AA) el maestro de bienes con geolocalización. Se inspeccionan in situ 16 Data Centers (Pacheco, Barracas, etc.) y 85 sitios 5G verificando que el hardware esté instalado, conectado a la red y con su chapa de inventario coincidente. 2) Cruce con siniestros: Se solicita a la Gerencia de Seguridad Patrimonial el libro de siniestros y denuncias policiales de robo de cables de cobre y vandalismo de fibra del 4° trimestre. Al cruzarlo contra el subdiario contable, se detectaron redes destruidas por $6.890 millones que continuaban figurando activadas como bienes operativos.",
        fuentes: "Módulo contable SAP FI-AA (Subdiario de Activos Fijos), inventario técnico georreferenciado, actas de visita de campo, libro de siniestros de Seguridad Patrimonial y denuncias policiales.",
        valores: "Total rubro Bienes de Uso: $6.789.118 millones (Nota 9). Muestra estratificada: 16 Data Centers + 85 radiobases 5G. Ajuste propuesto AJ-01: $6.890 millones (baja de activos siniestrados).",
        defensaOral: "Profesor, en PT-A1 partimos del subdiario contable de SAP FI-AA hacia el terreno para validar Existencia física. Luego, para validar Medición, cruzamos los activos vigentes contra las denuncias policiales y reportes de siniestros de Seguridad Patrimonial. Al detectar $6.890 millones de fibra y nodos destruidos sin dar de baja, exigimos el ajuste contable AJ-01 para evitar sobrevaluar el activo.",
        afirmacionesDetalle: "Valida Existencia (inspección in situ de bienes operativos) y Medición (corrección de saldos por bienes destruidos mediante baja contable según NIC 16)."
      },
      {
        ref: "PT-A2",
        bloquePrograma: "2. Prueba de Altas y Obras en Curso (Integridad y Medición)",
        nombre: "Prueba de Altas del Ejercicio (CAPEX) y Corte de Obras en Curso (Cut-off)",
        afirmaciones: ["Integridad", "Medición"],
        marca: "✓ ∑",
        pasosPrograma: [
          "Cotejar las altas del ejercicio (CAPEX) contra órdenes de compra en SAP MM, facturas comerciales, despachos aduaneros y actas de recepción de obra.",
          "Ejecutar prueba de corte sobre las obras en curso habilitadas en diciembre de 2025 para comprobar la oportuna activación e inicio de depreciación."
        ],
        muestra: "42 adiciones superiores a $8.311M (equipos Nokia/Huawei 5G, fibra óptica y contratos de obra civil).",
        resultado: "Las adiciones de equipamiento importado cuentan con despacho de aduana y factura conformada (✓). Se detectó en sucursales provinciales demora en el archivo digital de 6 certificados de obra (debilidad CCI-01 preg. 7 y CCI-03 preg. 15), aunque las obras habilitadas al 31/12/2025 fueron correctamente activadas y depreciadas.",
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
        pasosPrograma: [
          "Solicitar al Registro de la Propiedad Inmueble (RPI) y al DNRPA los informes de dominio para inmuebles y flota vehicular adquiridos en el ejercicio."
        ],
        muestra: "100% de los edificios técnicos, predios de Data Centers y muestra de 60 vehículos de flota técnica.",
        resultado: "Confirmación directa con el RPI (©): títulos dominiales inscriptos a nombre de Telecom Argentina S.A. libre de gravámenes no revelados en Notas.",
        procedimientoDetalle: "1) Inmuebles propios: Para los predios de Data Centers y edificios corporativos de AMBA e interior, se solicitan informes de dominio e inhibición ante el Registro de la Propiedad Inmueble (RPI) para comprobar la inscripción registral a nombre de Telecom Argentina S.A. y la inexistencia de gravámenes o hipotecas ocultas. 2) Flota vehicular: Para camionetas y utilitarios técnicos de cuadrilla, se solicitan informes ante la Dirección Nacional del Registro de la Propiedad Automotor (DNRPA) constatando titularidad y libre prenda.",
        fuentes: "Informes de dominio del Registro de la Propiedad Inmueble (RPI), títulos y cédulas de la DNRPA (Rodados) y contratos de locación de predios técnicos.",
        valores: "Terrenos y edificios propios por más de $450.000 millones y flota vehicular técnica de más de 3.500 unidades.",
        defensaOral: "En PT-A3 validamos la afirmación de Propiedad mediante confirmación externa directa: solicitamos informes de dominio al Registro de la Propiedad Inmueble (RPI) para predios y edificios corporativos, e informes a la DNRPA para los vehículos técnicos, comprobando que todos los bienes pertenezcan legalmente a Telecom y estén libres de gravámenes no revelados en Notas.",
        afirmacionesDetalle: "Valida Propiedad (titularidad jurídica exclusiva de Telecom) y Exposición (ausencia de gravámenes o prendas no reveladas en Nota 9)."
      },
      {
        ref: "PT-A4",
        bloquePrograma: "4. Prueba de Depreciaciones y Obsolescencia (Medición y Existencia)",
        nombre: "Recálculo Global de Depreciaciones y Revisión de Centrales Analógicas Obsoletas",
        afirmaciones: ["Medición", "Existencia"],
        marca: "∑ ⊗",
        pasosPrograma: [
          "Recalcular globalmente el cargo por depreciación del ejercicio en función de las vidas útiles por categoría (Prueba Global de Amortizaciones).",
          "Solicitar el informe técnico del área de Operaciones sobre las centrales analógicas fuera de servicio y verificar la contabilización de la baja por obsolescencia."
        ],
        muestra: "100% de la base de activos fijos en SAP + Informe Técnico de Ingeniería de Red al 31/12/2025.",
        resultado: "El recálculo global de tasas de depreciación resultó satisfactorio (∑). No obstante, se constató la existencia de centrales telefónicas analógicas de conmutación por cobre totalmente fuera de servicio (migradas a FTTH) cuyo valor residual contable en libros asciende a $21.450 millones sin haberse registrado su baja por obsolescencia (CCI-02 preg. 23) (⊗).",
        procedimientoDetalle: "1) Prueba Global de Amortizaciones: Se multiplica el valor de origen reexpresado por inflación (NIC 29) de cada clase de bien por su alícuota de vida útil (redes 10-20 años, computación 3-5 años). Se compara el resultado teórico contra el cargo contable de $854.120 millones en el Estado de Resultados; al diferir en menos del Error Tolerable ($83.112M), el cálculo queda validado. 2) Obsolescencia técnica: Se solicita al Director de Tecnología el informe del plan de apagado de la red de cobre analógica (migrada a fibra óptica FTTH). Se constata que existen centrales analógicas totalmente fuera de servicio que continúan activadas por $21.450 millones. Se propone el ajuste AJ-01 para darlas de baja al 100%.",
        fuentes: "Subdiario SAP FI-AA (Activos Fijos), tablas maestras de vida útil aprobadas por Directorio y plan técnico de migración a fibra de la Gerencia de Operaciones.",
        valores: "Depreciación anual del ejercicio: $854.120 millones en Nota 9. Error Tolerable: $83.112 millones. Ajuste propuesto AJ-01 por obsolescencia: $21.450 millones.",
        defensaOral: "En PT-A4 aplicamos una Prueba Global de Amortizaciones recalculando de forma independiente el cargo del ejercicio según las vidas útiles asignadas, lo cual resultó razonable. Pero además pedimos el informe de ingeniería sobre la red de cobre obsoleta: detectamos $21.450 millones en centrales telefónicas analógicas apagadas y reemplazadas por fibra óptica que la empresa no había dado de baja en sus libros, por lo que exigimos el ajuste contable correspondiente por obsolescencia.",
        afirmacionesDetalle: "Valida Medición (adecuada alícuota de amortización y ajuste por obsolescencia tecnológica) y Existencia (baja de bienes fuera de servicio)."
      }
    ],
    conclusionRubro: "Salvo por la falta de desincorporación contable de las centrales analógicas obsoletas ($21.450M) y nodos vandalizados ($6.890M) por un total de $28.340M (propuesto en Ajuste AJ-01), el rubro Bienes de Uso expone razonablemente su saldo al 31/12/2025."
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
        nombre: "Prueba de Corte de Facturación B2B (Cut-off) y Conciliación de Agentes Externos",
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
    afirmacionAfectada: "Integridad (Corte / Cut-off) y Existencia",
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
        contenido: "Hemos completado la auditoría externa de los Estados Contables de Telecom Argentina S.A. al 31/12/2025 siguiendo las 3 etapas secuenciales del proceso de auditoría (Planificación, Ejecución y Conclusión). En virtud de que la evaluación de los 5 componentes del Control Interno arrojó Niveles de Confianza Bajos (entre 15,38% y 23,33%) y Riesgos de Control Altos, aplicamos un enfoque predominantemente sustantivo, fijando la Materialidad Global en $166.225 millones (1% del Activo Total de $16.622.552 millones), el Error Tolerable en $83.112 millones y el umbral mínimo de ajustes (PAE) en $8.311 millones."
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
        componente: "1. Archivo de la Documentación Sustentable (NC: 15,38% - RC: Alto)",
        observacion: "Ausencia de auditorías internas específicas bajo la Norma ISO 15.489, demoras y falta de estandarización en la digitalización de certificados de obra de red en sucursales del interior y falta de difusión escrita al personal técnico de campo.",
        recomendacion: "Implementar un protocolo obligatorio de carga digital en SAP dentro de las 48 hs. de firmado cada certificado de avance de obra en todas las regionales e incorporar revisiones anuales ISO 15.489 en el plan de Auditoría Interna."
      },
      {
        componente: "2. Evaluación del Sistema Contable (NC: 20,00% - RC: Alto)",
        observacion: "Desfasajes de 24 a 48 hs. en la conciliación de cobranzas externas (Rapipago, Pago Fácil y billeteras), demoras de corte en facturación corporativa B2B (Personal Tech), omisión de mora > 180 días en sub-carteras masivas y permanencia contable de centrales analógicas fuera de servicio.",
        recomendacion: "Automatizar vía API en tiempo real la rendición de recaudadores externos, vincular electrónicamente el acta de recepción técnica B2B con la emisión automática de la factura en SAP, unificar el padrón de morosidad NIIF 9 y establecer un comité trimestral entre Ingeniería y Contabilidad para dar de baja activos obsoletos."
      },
      {
        componente: "3. Sistema de Presupuestos (NC: 22,22% - RC: Alto)",
        observacion: "Emisión de órdenes de trabajo de emergencia sin partida presupuestaria previa, falta de vinculación plurianual automatizada en el despliegue 5G y omisión de aislar el efecto del ajuste por inflación en moneda homogénea (NIC 29) en los reportes mensuales de variaciones.",
        recomendacion: "Bloquear en el módulo SAP FM/CO la emisión de órdenes sin reserva presupuestaria (habilitando un flujo electrónico de aprobación de urgencia en 2 horas) y parametrizar los reportes de gestión FP&A tanto en moneda nominal como en moneda homogénea (NIC 29)."
      },
      {
        componente: "4. Sistema Operativo y Talento Humano (NC: 23,33% - RC: Alto)",
        observacion: "Legajos físicos incompletos en personal técnico del interior, acumulación de licencias/vacaciones no gozadas en personal crítico de TI/5G, demoras en actualizar centros de costo tras fusiones y ausencia de rotación obligatoria en puestos clave de Compras e Inventarios.",
        recomendacion: "Digitalizar el 100% de los legajos del interior, establecer un cronograma escalonado de goce de licencias con back-ups cruzados en Ingeniería y fijar por política de Compliance la rotación cada 3 años de compradores de tecnología."
      },
      {
        componente: "5. Sistema Tecnológico (NC: 19,05% - RC: Alto)",
        observacion: "Persistencia de interfaces manuales entre sistemas comerciales heredados (ex Cablevisión/Fibertel) y el ERP SAP, dependencia de repuestos importados con demoras aduaneras y falta de pruebas integrales del Plan de Continuidad (BCP) ante cortes físicos de fibra por vandalismo.",
        recomendacion: "Culminar la migración definitiva de los facturadores heredados al core convergente único, constituir un stock crítico de seguridad de repuestos ópticos en almacenes locales y ejecutar simulacros semestrales de contingencia física de red."
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
