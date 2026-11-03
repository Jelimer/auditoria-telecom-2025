// Datos completos de la Etapa 1: Planificación Preliminar y Detallada
// Caso: Telecom Argentina S.A. - Auditoría Externa de Estados Contables 2025
// Elaborado por: Grebe - Pisonero De Biase | Marco: Carlos Slosse & RT 37 / RT 53 (Auditoría) / NIIF y NIC (IASB - Normas CNV)

export const proyectoMeta = {
  cliente: "Telecom Argentina S.A.",
  cuit: "30-63945373-8",
  proyecto: "Auditoría Externa de Estados Contables Consolidados y Separados",
  ejercicio: "01/01/2025 al 31/12/2025",
  moneda: "Millones de Pesos ($ constantes al 31/12/2025 - NIC 29)",
  tipoCambioCierre: "BNA Vendedor $/US$ 1.455,00 al 31/12/2025",
  encargados: "Grebe - Pisonero De Biase",
  firmaAuditora: "Estudio Contable & Auditoría Externa (Ref. PwC / Equipo Académico)",
  fechaElaboracion: "20 de octubre de 2026",
  marcoNormativoContable: "Normas Internacionales de Información Financiera (NIIF / NIC - IASB) exigidas por CNV y SEC",
  marcoNormativoAuditoria: "Resolución Técnica N° 37 (modificada por RT N° 53 - FACPCE) y doctrina de Carlos Slosse",
  enfoqueGeneral: "Predominantemente Sustantivo (Nivel de Confianza Global BAJO 20,00% / Riesgo de Control ALTO 80,00%)"
};

export const marcoTeoricoSlosse = {
  autor: "Carlos A. Slosse — 'Auditoría: Un Nuevo Enfoque Empresarial' & RT 37 / RT 53 (FACPCE)",
  etapas: [
    {
      id: "etapa-1",
      numero: 1,
      titulo: "Etapa 1: Planificación",
      subtitulo: "Planificación Preliminar (Estratégica) y Planificación Detallada",
      progresoBase: 100,
      objetivo: "Obtener un conocimiento integral del negocio de Telecom Argentina S.A., comprender su ambiente de control y sistemas (SAP, facturación convergente), evaluar el Riesgo Inherente y de Control por componente, fijar la Materialidad (PM, ET, PAE) y diseñar los Programas de Trabajo a medida para validar las 5 afirmaciones.",
      subetapas: [
        "1.1. Conocimiento del Ente, Industria Tech-Co, Macroentorno (PESTEL) y Microentorno (Porter)",
        "1.2. Relevamiento y Evaluación del Control Interno (5 Cuestionarios CCI - 129 preguntas)",
        "1.3. Matriz de Niveles de Confianza (NC) y Riesgo de Control (RC) + Matriz de Ponderación Preliminar",
        "1.4. Determinación de la Materialidad Global ($166.225M), Error Tolerable ($83.112M) y PAE ($8.311M)",
        "1.5. Selección de 5 Rubros Críticos, Matriz de Afirmaciones (E, I, P, M, X) y Programas de Trabajo A-E"
      ],
      entregables: ["Memorando de Planificación Preliminar", "5 Cuestionarios CCI y Matrices NC/RC", "Matriz de Afirmaciones y Riesgos", "Programas de Trabajo A-E y Cronograma"]
    },
    {
      id: "etapa-2",
      numero: 2,
      titulo: "Etapa 2: Ejecución",
      subtitulo: "Obtención de Elementos de Juicio Válidos y Suficientes (RT 37)",
      progresoBase: 85,
      objetivo: "Ejecutar los procedimientos planificados (pruebas de cumplimiento de controles CGTI/SAP y pruebas sustantivas analíticas y de detalle: circularizaciones, inspecciones oculares de nodos/Data Centers, pruebas de corte B2B, recálculos de previsión NIIF 9, deuda en USD y test de deterioro UGE Personal), documentando todo en Papeles de Trabajo.",
      subetapas: [
        "2.1. Visita Interina (Oct-Nov 2025): Pruebas CGTI, interfaces heredadas, inspección física de nodos y títulos RPI/INPI/ENACOM",
        "2.2. Pre-Cierre (Dic 2025): Circularización bancaria/Caja de Valores (100%) y clientes corporativos B2B Personal Tech",
        "2.3. Visita Final (Ene-Feb 2026): Corte de facturación, cobros posteriores, recálculo moneda extranjera ($1.455) y Test Impairment Llave",
        "2.4. Documentación en Cédulas Sumarias y Analíticas (PT-A a PT-E) y Planilla de Ajustes Propuestos (PAE)"
      ],
      entregables: ["Cédulas Sumarias por Rubro", "Papeles de Trabajo Analíticos (PT-A a PT-E)", "Resumen de Hallazgos (H-01 a H-05)", "Planilla de Ajustes y Reclasificaciones (PAE)"]
    },
    {
      id: "etapa-3",
      numero: 3,
      titulo: "Etapa 3: Conclusión e Informe",
      subtitulo: "Evaluación Final de Evidencia, Control de Calidad y Emisión del Informe",
      progresoBase: 75,
      objetivo: "Evaluar el efecto acumulado de los hallazgos y ajustes sobre los Estados Contables en relación con la Materialidad, revisar hechos posteriores al cierre y condición de empresa en marcha, obtener la Carta de Representación de la Gerencia y emitir el Informe del Auditor Independiente y la Carta de Control Interno.",
      subetapas: [
        "3.1. Evaluación cuantitativa y cualitativa de ajustes propuestos frente a PM ($166.225M) y ET ($83.112M)",
        "3.2. Revisión de Hechos Posteriores al 31/12/2025 y obtención de la Carta de Gerencia (RT 37 / RT 53)",
        "3.3. Redacción del Memorando Resumen de Auditoría y Carta de Recomendaciones de Control Interno",
        "3.4. Emisión del Informe del Auditor Independiente (con Cuestiones Clave de Auditoría - KAM)"
      ],
      entregables: ["Memorando Resumen de Auditoría", "Carta de Recomendaciones a la Gerencia", "Carta de Representación de la Dirección", "Informe del Auditor Independiente (RT 37 / RT 53)"]
    }
  ],
  afirmacionesDefinicion: [
    { codigo: "E", nombre: "Existencia", descripcion: "Los activos, pasivos y transacciones registrados existen físicamente o han ocurrido realmente a la fecha de cierre (Veracidad / Ocurrencia)." },
    { codigo: "I", nombre: "Integridad", descripcion: "Todas las transacciones, activos y pasivos que debieron registrarse están íntegramente contabilizados en el período correcto sin omisiones (Totalidad / Corte)." },
    { codigo: "P", nombre: "Propiedad", descripcion: "Los activos registrados son propiedad legal o están bajo el control económico de Telecom Argentina S.A. (derechos) y los pasivos representan obligaciones reales de la entidad." },
    { codigo: "M", nombre: "Medición", descripcion: "Los activos, pasivos, ingresos y costos están correctamente valuados y medidos conforme a las Normas Internacionales de Información Financiera (NIIF / NIC) en moneda homogénea (NIC 29)." },
    { codigo: "X", nombre: "Exposición", descripcion: "Los rubros están adecuadamente clasificados (corriente/no corriente), descritos y revelados con todas las notas y anexos exigidos por las normas contables." }
  ]
};

export const conocimientoEnte = {
  recursoHumano: "Telecom Argentina S.A. cuenta con una dotación propia superior a los 16.200 colaboradores altamente especializados en tecnologías de la información, redes e ingeniería de telecomunicaciones (incluyendo más de 286 expertos en Ciberseguridad y 240 en arquitecturas Multicloud).",
  mision: {
    proposito: "“Potencia tu mundo. Te acompañamos”.",
    compromiso: "Conectamos a cada persona con todo lo que le importa, buscando potenciar a las personas para potenciar a las empresas y organizaciones."
  },
  vision: [
    "Posicionarse como un socio estratégico en la transformación digital, conectando personas y empresas mediante soluciones integrales de conectividad, Cloud, ciberseguridad e Internet de las Cosas (IoT).",
    "Consolidar la transformación estructural de la compañía desde un operador de telecomunicaciones tradicional hacia una «Tech-Co» (compañía de tecnología) líder en la región."
  ],
  organigrama: {
    organosSuperiores: [
      { nivel: 1, nombre: "Asamblea de Accionistas", rol: "Máxima autoridad societaria soberana.", color: "slate" },
      { nivel: 2, nombre: "Comisión Fiscalizadora / Sindicatura", rol: "Órgano de fiscalización legal y estatutaria.", color: "sky" },
      { nivel: 3, nombre: "Directorio (Presidente)", rol: "Administración superior y aprobación de estrategias y presupuestos.", color: "blue" },
      { nivel: 4, nombre: "Comité de Auditoría / Riesgos", rol: "Supervisión del control interno, gestión de riesgos, ética y relación con auditores externos.", color: "teal" },
      { nivel: 5, nombre: "Gerencia General (CEO)", rol: "Dirección ejecutiva unipersonal y conducción de las verticales operativas y de soporte.", color: "indigo" }
    ],
    verticales: [
      {
        id: "b2c",
        nombre: "B2C Individuos / Hogares",
        color: "blue",
        descripcion: "Gestión unificada de conectividad móvil y fija bajo la marca Personal y entretenimiento en streaming a través de Flow.",
        subareas: ["Personal Móvil (4G/5G)", "Personal Internet (FTTH/HFC)", "Flow (TV en vivo / VOD / Streaming)"],
        riesgoAsociado: "Morosidad > 180 días en consumo masivo y desfasaje de 24-48 hs en cobranzas externas (Rapipago/Pago Fácil/billeteras)."
      },
      {
        id: "b2b",
        nombre: "B2B Personal Tech",
        color: "emerald",
        descripcion: "Grandes Empresas, Pymes y Sector Público. Soluciones complejas de Cloud, Ciberseguridad, IoT y conectividad dedicada.",
        subareas: ["Conectividad Dedicada / SD-WAN", "Cloud & Datacenter (16 propios)", "Ciberseguridad (SOC) / IoT", "Sustentabilidad"],
        riesgoAsociado: "Demoras de facturación y problemas de corte (cut-off) en contratos corporativos ejecutados en diciembre; falta de auditoría continua en licitaciones públicas."
      },
      {
        id: "legales",
        nombre: "Asuntos Legales & Regulatorios",
        color: "purple",
        descripcion: "Cumplimiento normativo, custodia de títulos, licencias espectrales y relación con entes reguladores.",
        subareas: ["ENACOM (Ley 27.078 / Espectro)", "CNV (Oferta Pública Argentina)", "SEC (EE.UU. / NYSE)"],
        riesgoAsociado: "Variaciones intempestivas en resoluciones tarifarias y tasas ENACOM (0,50% Tasa Control y 1% Fondo Servicio Universal)."
      },
      {
        id: "cto",
        nombre: "Tecnología (CTO)",
        color: "amber",
        descripcion: "Despliegue de infraestructura crítica, mantenimiento de red, sistemas ERP SAP y plataformas comerciales.",
        subareas: ["Redes FTTH / 5G / HFC", "Ciberresiliencia (SOC 24/7)", "Infraestructura IT & ERP SAP"],
        riesgoAsociado: "Interfaces manuales con sistemas heredados (ex Cablevisión/Fibertel), falta de baja de centrales analógicas obsoletas y robos/vandalismo de fibra en vía pública."
      },
      {
        id: "cfo",
        nombre: "Finanzas (CFO)",
        color: "orange",
        descripcion: "Gestión financiera, contabilidad corporativa, presupuesto, planeamiento financiero (FP&A) e impuestos.",
        subareas: ["Contabilidad y Reporte NIIF / NIC (NIC 29)", "Tesorería Corporativa y Deuda ONs", "Impuestos (ARCA) / Auditoría"],
        riesgoAsociado: "Exposición a volatilidad cambiaria en deuda financiera ($5.436.615M), covenants financieros y omisión de aislar ajuste por inflación en reportes de desvíos presupuestarios."
      }
    ]
  },
  industria: {
    sector: "Industria de las telecomunicaciones, conectividad y servicios digitales en Argentina, con operaciones e inversiones regionales en Paraguay y Uruguay.",
    evolucionTechCo: "La compañía ha evolucionado desde el modelo de operador tradicional de telecomunicaciones hacia una «Tech-Co» (compañía de tecnología). Se posiciona como un socio estratégico capaz de integrar servicios de infraestructura crítica, conectividad de ultra-rendimiento y soluciones digitales avanzadas para personas, pymes, grandes empresas e instituciones públicas."
  },
  productos: {
    b2c: [
      { titulo: "1. Telefonía Móvil (Personal)", detalle: "Cobertura nacional e internacional con redes móviles (GSM, WCDMA, 4G/5G). Planes de voz, mensajería, datos móviles (BAM), videollamadas, roaming y el programa de fidelización Club Personal." },
      { titulo: "2. Conectividad a Internet Fija (Personal Internet)", detalle: "Conexión de banda ancha residencial y comercial mediante fibra óptica al hogar (FTTH), cablemódems coaxiales (HFC), VDSL y ADSL. Unificación de las antiguas marcas Arnet y Fibertel bajo la denominación Personal." },
      { titulo: "3. Televisión de Pago y Entretenimiento (Flow)", detalle: "Plataforma integral de TV en vivo, contenidos bajo demanda (VOD) y servicios de streaming accesible desde múltiples dispositivos." },
      { titulo: "4. Telefonía Fija", detalle: "Servicio de telefonía básica residencial y comercial, líneas punto a punto, Discado Directo Entrante (DDE), centrex, telecentros y números especiales (0800/0810)." }
    ],
    b2b: [
      { titulo: "1. Conectividad Empresarial", detalle: "Internet de alta velocidad dedicado para empresas, SD-WAN, Internet Satelital, Comunicaciones Unificadas, enlaces punto a punto y consultoría técnica de red." },
      { titulo: "2. Cloud e Infraestructura", detalle: "Entornos multicloud híbridos, servidores virtuales privados (VPS), soluciones de almacenamiento flexible y la red corporativa de 16 Data Centers propios." },
      { titulo: "3. Ciberseguridad y Ciberresiliencia", detalle: "Centro de Operaciones de Seguridad (SOC), mitigación de ataques informáticos masivos, protección de endpoints y antivirus, Firewall, autenticación multifactor sin contraseña, gestión de dispositivos móviles (MDM) y pruebas de penetración." },
      { titulo: "4. Internet de las Cosas (IoT) y Redes Dedicadas", detalle: "Redes móviles privadas/dedicadas, integración de sensores y plataformas para monitoreo, telemedición, seguimiento de activos, trazabilidad y gestión inteligente de flotas." },
      { titulo: "5. Inteligencia Artificial y Soluciones por Industria", detalle: "Modelos de IA aplicada e integración de datos. Soluciones tecnológicas verticales especializadas para Retail, Agroindustria, Finanzas, Sector Público, Minería y Oil & Gas." }
    ]
  },
  procesoNegocio: {
    procesosDeclarados: [
      "Proceso de conectividad fija residencial y comercial (fibra óptica FTTH y cablemódem HFC).",
      "Proceso de comunicaciones móviles nacionales e internacionales (redes 4G y despliegue de 5G).",
      "Proceso de distribución de entretenimiento y contenidos bajo demanda (plataforma Flow).",
      "Proceso B2B de transformación digital corporativa (Personal Tech: Multicloud, SOC/Ciberseguridad, IoT e Inteligencia Artificial)."
    ],
    procesoSeleccionado: {
      nombre: "Provisión e Integración de Soluciones Tecnológicas y Digitales B2B (Personal Tech)",
      objetivo: "Maximizar el margen operativo y acelerar la diversificación de ingresos más allá de los servicios tradicionales de voz e internet, orientado a Grandes Empresas, Pymes y el Sector Público.",
      clienteVerdadero: "Jefes de Tecnología (CIO/CTO), Directores de Operaciones y Gerentes de Compras/Adjudicaciones de Grandes Empresas, Pymes e Instituciones del Sector Público (Gobernaciones, Ministerios, Universidades).",
      proveedores: "Fabricantes internacionales de equipamiento de red, proveedores de licencias de software, socios de plataformas cloud (Microsoft Azure, Google Cloud) y proveedores de energía sustentable (MSU Green Energy).",
      solicitud: "Requerimientos de propuestas técnicas (RFP), contratos corporativos de nivel de servicio (SLA), pliegos de licitaciones públicas y órdenes de compra con especificaciones de ciberseguridad, ancho de banda dedicado y capacidad de almacenamiento.",
      declaracion: "Adjudicación de licitaciones o firma de contratos marco corporativos que establecen la prestación del servicio tecnológico con facturación recurrente."
    },
    misionProceso: [
      { ambito: "Ámbito de Segmento", situacionActual: "Usuarios individuales y pymes comerciales.", situacionFutura: "Grandes corporaciones, pymes, industrias verticales y sector público." },
      { ambito: "Ámbito de Mercado", situacionActual: "Conectividad a internet, telefonía móvil y TV por cable.", situacionFutura: "Ecosistema digital integral: Conectividad crítica, ciberresiliencia y 20 modelos de IA aplicada." },
      { ambito: "Ámbito Geográfico", situacionActual: "Argentina, Paraguay y Uruguay.", situacionFutura: "Cobertura regional consolidada con conectividad internacional." },
      { ambito: "Modo de conseguir liderazgo contra la Competencia", situacionActual: "Liderazgo por infraestructura física y cobertura de red tradicional.", situacionFutura: "Liderazgo por innovación tecnológica, certificación de ciberseguridad y empaquetamiento de soluciones a medida." }
    ]
  },
  diagnosticoEntorno: {
    macroentorno: [
      { factor: "Macroeconómico", puntos: ["Contexto de alta volatilidad cambiaria e inflación en el mercado local que impacta directamente en las inversiones en bienes de capital (CAPEX), al requerir insumos de red importados en divisas.", "Exigencia de una alta solidez financiera para respaldar planes continuos de inversión en fibra óptica y licencias de espectro radioeléctrico."] },
      { factor: "Tecnológico", puntos: ["Evolución hacia tecnologías disruptivas de alta capacidad como redes Wi-Fi, despliegue de redes móviles 5G y 16 Data Centers propios.", "Creciente demanda empresarial de arquitecturas de ciberresiliencia y la incorporación productiva de Inteligencia Artificial en las operaciones."] },
      { factor: "Social, demográfico y ambiental", puntos: ["Incremento sostenido del consumo de datos y streaming por parte de los hogares y teletrabajadores.", "Estrategia de sustentabilidad centrada en la reducción de la huella de carbono, destacando la adquisición de energía solar para abastecer 100 edificios corporativos por 10 años y programas de inclusión digital (digitalers, Nuestro Lugar Digital)."] },
      { factor: "Ambiente político y legal", puntos: ["Sujeción al marco regulatorio fijado por el Ente Nacional de Comunicaciones (ENACOM), cumplimiento del Reglamento de Clientes de Servicios TIC y leyes de Defensa del Consumidor (Ley N° 24.240).", "Riesgos de variaciones normativas en los pliegos de contratación y licitaciones públicas de conectividad estatal."] }
    ],
    microentorno: [
      { fuerza: "Intensidad de rivalidad entre competidores", nivel: "ALTO", fundamentacion: "El mercado de servicios de conectividad y entretenimiento en Argentina registra una fuerte competencia frente a operadores globales y locales." },
      { fuerza: "Amenaza de nuevos participantes", nivel: "BAJO", fundamentacion: "Existen elevadas barreras de entrada representadas por las ingentes inversiones requeridas para el tendido de infraestructura física (fibra óptica), la adquisición de espectro radioeléctrico para 4G/5G y la obtención de licencias regulatorias ante la autoridad competente." },
      { fuerza: "Amenaza de productos sustitutos", nivel: "MEDIO", fundamentacion: "Avance de tecnologías alternativas como conexiones satelitales directas de baja órbita y plataformas de comunicación independientes que compiten con los servicios tradicionales de voz fija." },
      { fuerza: "Poder negociador de los compradores", nivel: "ALTO (B2B) / MEDIO (B2C)", fundamentacion: "Las grandes empresas y el sector público poseen un elevado poder de negociación, exigiendo licitaciones competitivas, acuerdos de nivel de servicio (SLA) estrictos y precios corporativos ajustados. El mercado masivo cuenta con opciones de cambio de operador, aunque la convergencia de servicios (móvil, internet y TV en un solo paquete) incrementa la fidelidad de los clientes." },
      { fuerza: "Poder negociador de los proveedores", nivel: "MEDIO-ALTO", fundamentacion: "Alta dependencia de un número reducido de proveedores tecnológicos internacionales líderes para la provisión de equipamiento de red especializado, servidores de Data Center y licencias de software." }
    ],
    competidores: [
      {
        nombre: "Telefónica de Argentina S.A. (Movistar)",
        aspectos: [
          "A. Competidor histórico en telefonía fija y móvil en la zona sur del país, expandido a nivel nacional.",
          "B. Fuerte presencia en servicios móviles y avance en el despliegue de redes de fibra óptica.",
          "C. Estrategia diferenciadora de Telecom: Unificación total del ecosistema digital bajo la marca Personal y mayor densidad de infraestructura propia de Data Centers (16) para el segmento corporativo."
        ]
      },
      {
        nombre: "AMX Argentina S.A. (Claro)",
        aspectos: [
          "A. Filial de América Móvil con gran respaldo financiero internacional y amplia cuota en el mercado móvil.",
          "B. Despliegue agresivo de fibra óptica residencial en grandes centros urbanos.",
          "C. Estrategia diferenciadora de Telecom: Integración nativa del contenido a través de Flow e integración vertical de soluciones IoT e IA aplicadas a la industria nacional (Agro, Minería, Oil & Gas)."
        ]
      },
      {
        nombre: "Telecentro S.A.",
        aspectos: [
          "A. Competidor concentrado principalmente en el Área Metropolitana de Buenos Aires (AMBA) con oferta de cable e internet de alta velocidad.",
          "B. Estrategia diferenciadora de Telecom: Cobertura geográfica nacional, conectividad móvil 4G/5G propia y un porfolio B2B de ciberseguridad y servicios administrados de los que carece la competencia regional."
        ]
      }
    ]
  }
};

export const cuestionariosControlInterno = [
  {
    id: "cci-1",
    codigo: "CCI-01",
    componente: "Archivo de la Documentación Sustentable",
    periodo: "Del 01 de enero al 31 de diciembre del 2025",
    elaboradoPor: "GREBE - PISONERO DE BIASE",
    fecha: "20 de octubre del 2026",
    totalPreguntas: 26,
    positivasBase: 22,
    negativasBase: 4,
    riPorcentaje: 84.62,
    ncPorcentaje: 15.38,
    nivelConfianza: "BAJO",
    riesgoInherente: "ALTO",
    riesgoControl: "ALTO",
    cuentasAfectadas: "Bienes de Uso (Legajos de Obras e Infraestructura), Impuestos (ARCA) y Licencias Regulatorias (ENACOM)",
    comentario: "Telecom Argentina S.A. cuenta con una infraestructura documental altamente digitalizada respaldada en sus Data Centers y el ERP SAP. Sin embargo, se identifican falencias por la falta de auditorías formales específicas sobre la Norma ISO 15.489, la falta de estandarización en el archivo digital de legajos de obras e infraestructura en el interior y la inadecuada comunicación por escrito de los procedimientos al personal operativo de campo, lo que determina un Nivel de Confianza BAJO (15,38%) y un Riesgo de Control ALTO.",
    enfoquePlanificacion: "Pruebas sustantivas sobre la documentación respaldatoria de obras físicas de red e infraestructura. Inspección de cumplimiento legal de retención impositiva (ARCA) y licencias del ENACOM.",
    preguntas: [
      { n: 1, texto: "¿La máxima autoridad aplica políticas y procedimientos de archivo para la conservación y mantenimiento de archivos físicos y magnéticos/digitales?", respuesta: "SI", observacion: "Se cumple. El Directorio y la Gerencia General han formalizado políticas de resguardo digital apoyadas en la infraestructura corporativa de sus 16 Data Centers propios y el sistema ERP SAP." },
      { n: 2, texto: "¿La entidad cuenta con la evidencia documental suficiente, pertinente y legal de sus operaciones?", respuesta: "SI", observacion: "Se cumple. Todas las transacciones masivas B2C (Personal/Flow) y corporativas B2B (Personal Tech) cuentan con facturas electrónicas con CAE autorizadas por ARCA y logs de tráfico." },
      { n: 3, texto: "¿Las operaciones financieras están respaldadas con la documentación de soporte suficiente y pertinente?", respuesta: "SI", observacion: "Se cumple. Los desembolsos, giros y transferencias de la Tesorería Corporativa requieren validación digital cruzada con órdenes de compra e informes de recepción." },
      { n: 4, texto: "¿La documentación sustentatoria de transacciones financieras, operaciones administrativas o decisiones institucionales está disponible para las acciones de verificación o auditoría?", respuesta: "SI", observacion: "Se cumple. La documentación se halla centralizada y accesible mediante el módulo de auditoría de los sistemas centrales ERP y el Portal de Gestión Online." },
      { n: 5, texto: "¿La administración financiera cuenta con procedimientos que aseguren la existencia de un archivo adecuado para la conservación y custodia de la documentación sustentatoria?", respuesta: "SI", observacion: "Se cumple. Dispone de almacenamiento seguro en la nube multicloud híbrida y custodia física tercerizada para legajos históricos en papel." },
      { n: 6, texto: "¿Los documentos de uso permanente y eventual son clasificados y conservados según su vigencia?", respuesta: "SI", observacion: "Se cumple. Existe clasificación sistemática por tipo documental (contratos marco, licencias espectrales del ENACOM, escrituras y actas de Directorio)." },
      { n: 7, texto: "¿Los documentos de carácter administrativo están organizados de conformidad al sistema de archivo adoptado por la entidad?", respuesta: "NO", observacion: "No se cumple a cabalidad. Se registran demoras y falta de estandarización en la homologación del archivo digital de certificados de obra y legajos de infraestructura de red en sucursales provinciales." },
      { n: 8, texto: "¿La entidad dispone de documentos para llevar a cabo de forma eficaz sus procesos de negocio y actividades?", respuesta: "SI", observacion: "Se cumple. Se opera bajo flujos documentales digitales y manuales de procedimientos aprobados que respaldan la comercialización de servicios convergentes." },
      { n: 9, texto: "¿La organización cuenta con documentos que muestren que se está cumpliendo con el marco legal y reglamentario?", respuesta: "SI", observacion: "Se cumple. Conserva comprobantes del pago mensual de la Tasa de Control (0,50%) y aportes al Fondo del Servicio Universal (1%) exigidos por el ENACOM (Ley N° 27.078)." },
      { n: 10, texto: "¿El sistema de gestión de documentos garantiza la autenticidad, fiabilidad, integridad y disponibilidad de los documentos?", respuesta: "SI", observacion: "Se cumple. Cumple con los principios de la norma ISO 15489, aplicando firmas digitales/electrónicas certificadas sobre documentos corporativos." },
      { n: 11, texto: "¿La entidad cuenta con políticas formales de gestión de documentos?", respuesta: "SI", observacion: "Se cumple. Existen políticas de gestión documental aprobadas por el Comité de Auditoría y de Gobierno Corporativo." },
      { n: 12, texto: "¿Las políticas de gestión de documentos cubren las necesidades de información, evidencia y rendición de cuentas?", respuesta: "SI", observacion: "Se cumple. Cubre las exigencias de información financiera ante la CNV (Argentina), la SEC (EE.UU.) y la Comisión Fiscalizadora/Sindicatura." },
      { n: 13, texto: "¿La organización identifica los documentos que implican una acción proporcionando evidencia de las decisiones tomadas?", respuesta: "SI", observacion: "Se cumple. Se mantiene registro riguroso de Actas de Asambleas de Accionistas, reuniones de Directorio y Comités Ejecutivos." },
      { n: 14, texto: "¿Se examinan periódicamente los procesos, las actividades y las operaciones que se llevan a cabo en la documentación relevante?", respuesta: "NO", observacion: "No se cumple totalmente. La revisión periódica sobre el archivo de licitaciones públicas del segmento B2B (Personal Tech) carece de auditorías continuas en todas las filiales." },
      { n: 15, texto: "¿Se determinan los plazos para la conservación de los documentos conforme a las leyes fiscales y comerciales?", respuesta: "SI", observacion: "Se cumple. Se programa la retención por el plazo legal mínimo de 10 años para libros contables y respaldos impositivos (ARCA)." },
      { n: 16, texto: "¿Usted define los procesos y elabora los instrumentos de gestión de documentos?", respuesta: "SI", observacion: "Se cumple. La Dirección de Sistemas y la Gerencia de Procesos diseñan las herramientas e instructivos documentales corporativos." },
      { n: 17, texto: "¿El sistema de gestión de documentos representa en forma jerárquica las actividades de la entidad?", respuesta: "SI", observacion: "Se cumple. Los accesos y perfiles dentro del ERP SAP responden a la estructura jerárquica de cargos y niveles de responsabilidad." },
      { n: 18, texto: "¿La empresa cuenta con un calendario que especifique el tiempo de conservación y disposición legal de los documentos?", respuesta: "SI", observacion: "Se cumple. La tabla de retención y purga documental se encuentra parametrizada en los servidores de la empresa." },
      { n: 19, texto: "¿La entidad comunica por escrito a toda la organización el funcionamiento del sistema de gestión de documentos?", respuesta: "NO", observacion: "No se cumple. Las comunicaciones formales escritas se concentran en el personal administrativo y de sistemas, detectándose desconocimiento en personal técnico operativo de campo." },
      { n: 20, texto: "¿Mediante el sistema de gestión de documentos se llevan a cabo las actividades de supervisión y control?", respuesta: "SI", observacion: "Se cumple. Permite la trazabilidad y revisión remota por parte de la Auditoría Interna, el Comité de Riesgos y los auditores externos (PwC)." },
      { n: 21, texto: "¿La entidad realiza seguimientos que muestren la eficacia y eficiencia del sistema de gestión de documentos?", respuesta: "SI", observacion: "Se cumple. Se monitorean métricas de digitalización, tiempos de procesamiento de contratos y tasas de error." },
      { n: 22, texto: "¿Utiliza controles periódicos para comprobar que los procesos documentales se ajustan a las políticas institucionales?", respuesta: "SI", observacion: "Se cumple. El área de Ciberseguridad y Calidad ejecuta pruebas sobre la integridad y seguridad de las bases documentales." },
      { n: 23, texto: "¿La entidad cuenta con profesionales especializados en la gestión de documentos y archivos digitales?", respuesta: "SI", observacion: "Se cumple. Dispone de ingenieros de datos, administradores de bases de datos (DBA) y especialistas en ciberresiliencia (SOC)." },
      { n: 24, texto: "¿Estos profesionales diseñan, implementan y administran el sistema de gestión de documentos?", respuesta: "SI", observacion: "Se cumple. El personal de TI administra los Data Centers y la seguridad de las plataformas documentales." },
      { n: 25, texto: "¿Coordinan sus actividades con otros profesionales de la organización (Asuntos Legales, Finanzas, Auditoría)?", respuesta: "SI", observacion: "Se cumple. Existe interacción constante entre la Dirección de Tecnología (CTO), Finanzas (CFO) y la Gerencia de Asuntos Legales." },
      { n: 26, texto: "¿Se realizan auditorías de cumplimiento periódicas sobre la gestión documental según la Norma ISO 15489?", respuesta: "NO", observacion: "No se cumple. Si bien se ejecutan auditorías de ciberseguridad y financieras, no se realizan auditorías formales específicas sobre la Norma ISO 15489 de archivo." }
    ]
  },
  {
    id: "cci-2",
    codigo: "CCI-02",
    componente: "Evaluación del Sistema Contable",
    periodo: "Del 01 de enero al 31 de diciembre del 2025",
    elaboradoPor: "GREBE - PISONERO DE BIASE",
    fecha: "20 de octubre del 2026",
    totalPreguntas: 25,
    positivasBase: 20,
    negativasBase: 5,
    riPorcentaje: 80.00,
    ncPorcentaje: 20.00,
    nivelConfianza: "BAJO",
    riesgoInherente: "ALTO",
    riesgoControl: "ALTO",
    cuentasAfectadas: "Créditos por Ventas (Deudores por Servicios), Caja y Bancos, Ingresos por Servicios y Bienes de Uso",
    comentario: "El sistema contable presenta solidez técnica apoyado en el ERP SAP. No obstante, se detectan fallas relevantes en el control interno: desfasajes temporales de 24 a 48 hs. en la acreditación de cobranzas de agentes externos, demoras en la facturación de contratos corporativos B2B (Personal Tech), subestimación de la previsión de incobrables al omitir mora mayor a 180 días y la falta de baja contable oportuna sobre centrales analógicas obsoletas, generando un Nivel de Confianza BAJO (20,00%) y un Riesgo de Control ALTO.",
    enfoquePlanificacion: "Pruebas de corte de facturación al cierre B2B, recálculo de la previsión para deudores de dudoso cobro, arqueos e inspección física de bienes de uso/red dados de baja y conciliaciones bancarias de cobros externos.",
    preguntas: [
      { n: 1, texto: "¿Se efectúan arqueos de caja y fondos sobre base sorpresiva, cuidando que no se mezcle o disponga de efectivo de otros fondos o de los ingresos entrantes para evitar faltantes?", respuesta: "SI", observacion: "Se cumple. Se ejecutan arqueos periódicos y sorpresivos sobre los fondos fijos operativos de las sucursales comerciales de atención al cliente y cajas chicas administrativas." },
      { n: 2, texto: "¿Se cancelan los comprobantes con sello/registro de 'PAGADO' o imputación definitiva en el momento de ser cubiertos con recursos de fondo fijo?", respuesta: "SI", observacion: "Se cumple. Todas las rendiciones de gastos menores se rinden digitalmente en el módulo de Tesorería del ERP SAP, invalidando automáticamente el comprobante respaldatorio." },
      { n: 3, texto: "¿Se depositan intactos los ingresos recaudados en ventanilla y canales digitales sin disponer de ellos para efectuar gastos?", respuesta: "SI", observacion: "Se cumple. La política corporativa exige la acreditación íntegra e inalterada de las recaudaciones masivas en las cuentas bancarias recaudadoras de la sociedad." },
      { n: 4, texto: "¿Se vigila que no se mezclen los ingresos cobrados con los fondos fijos o de caja chica de la empresa?", respuesta: "SI", observacion: "Se cumple. Existe estricta separación física y contable entre los fondos fijos operativos y las recaudaciones por facturación." },
      { n: 5, texto: "¿Se depositan y registran diariamente los ingresos provenientes de canales masivos, billeteras virtuales y agentes de cobro externos?", respuesta: "NO", observacion: "No se cumple a cabalidad. Se verifican desfasajes temporales de 24 a 48 horas en la rendición, acreditación y conciliación de cobranzas procesadas por agentes externos (Rapipago, Pago Fácil) e interfaces de billeteras virtuales." },
      { n: 6, texto: "¿Se ha responsabilizado a personal designado el manejo de cuentas bancarias y la autorización de instrumentos de pago?", respuesta: "SI", observacion: "Se cumple. La Tesorería Corporativa centraliza el manejo de cuentas bancarias y poderes de firma bajo la supervisión de la Dirección Financiera (CFO)." },
      { n: 7, texto: "¿Se mantiene permanentemente actualizado en las entidades bancarias el registro y autorización de firmas y apoderados para operar?", respuesta: "SI", observacion: "Se cumple. La Gerencia de Asuntos Legales y Tesorería gestionan en tiempo y forma las altas, bajas y modificaciones de poderes bancarios." },
      { n: 8, texto: "¿Se mantienen en un lugar seguro (caja fuerte corporativa / infraestructura con tokens criptográficos) los instrumentos y claves de pago?", respuesta: "SI", observacion: "Se cumple. La aprobación de transferencias corporativas exige la utilización de infraestructura de seguridad criptográfica con doble factor de autenticación (MFA) e imputación mediante ERP." },
      { n: 9, texto: "¿Se ejerce control sobre los cheques devueltos o débitos automáticos rechazados para evitar inconsistencias en los saldos?", respuesta: "SI", observacion: "Se cumple. El sistema contable ejecuta procesos automatizados de re-imputación de deuda al cliente e identificación de partidas rechazadas." },
      { n: 10, texto: "¿Se muestran en el Estado de Situación Patrimonial las inversiones y títulos valores a su costo o valor razonable / VPP según la norma vigente?", respuesta: "SI", observacion: "Se cumple. Las inversiones financieras y las participaciones en asociadas y negocios conjuntos se valúan y exponen según los criterios de las NIIF / NIC (NIIF 9 / NIC 28) y normas de la CNV." },
      { n: 11, texto: "¿Se recuentan o confirman periódicamente y por sorpresa las inversiones y títulos en custodia por parte de un funcionario autorizado?", respuesta: "SI", observacion: "Se cumple. Tesorería realiza conciliaciones y arqueos de saldos en custodia emitidos directamente por la Caja de Valores S.A. y entidades depositarias." },
      { n: 12, texto: "¿Existe la política de evaluar periódicamente al personal que maneja inversiones, valores y tesorería corporativa?", respuesta: "SI", observacion: "Se cumple. El personal de Tesorería e Inversiones está sujeto a evaluaciones anuales de desempeño y controles de ética y cumplimiento profesional." },
      { n: 13, texto: "¿Se explican claramente en las Notas a los Estados Contables las restricciones o gravámenes que pesen sobre cuentas por cobrar o activos?", respuesta: "SI", observacion: "Se cumple. Las Notas explicativas exponen detalladamente las garantías, restricciones de covenants financieros e hipotecas sobre activos." },
      { n: 14, texto: "¿Se vigila que el IVA trasladado y las tasas sectoriales del ENACOM estén perfectamente identificados en la facturación expedida?", respuesta: "SI", observacion: "Se cumple. El sistema de facturación parametriza en cada comprobante el IVA y la discriminación de la Tasa de Control (0,50%) y el Fondo del Servicio Universal (1%) conforme a la Ley N° 27.078." },
      { n: 15, texto: "¿Se vigila adecuadamente el tratamiento contable e impositivo de las notas de crédito, ajustes y devoluciones a clientes o proveedores?", respuesta: "SI", observacion: "Se cumple. Los ajustes y notas de crédito requieren autorización jerárquica en el sistema comercial antes de impactar en la contabilidad." },
      { n: 16, texto: "¿Se facturan los servicios prestados o instalaciones en el mismo período/día en que se efectúa la transacción o hito de cumplimiento?", respuesta: "NO", observacion: "No se cumple a cabalidad. Se han detectado demoras de facturación e inconsistencias de corte en contratos de integración tecnológica B2B (Personal Tech), registrándose servicios corporativos ejecutados en diciembre sin facturación oportuna al cierre." },
      { n: 17, texto: "¿Se utilizan todos los recursos legítimos y legales para asegurar la recuperación de cuentas y créditos morosos?", respuesta: "SI", observacion: "Se cumple. Se aplican intimaciones automáticas, cortes de servicio temporales y derivación de carteras en mora a agencias de cobro y a la Gerencia de Legales." },
      { n: 18, texto: "¿Se tienen establecidos sistemas ágiles de cobranza e integración con medios de pago digitales para recolectar fondos rápidamente?", respuesta: "SI", observacion: "Se cumple. Dispone de canales de autogestión integrados en la app Personal/Flow, débito automático y pasarelas de pago electrónico." },
      { n: 19, texto: "¿Se prepara mensualmente un reporte de antigüedad de saldos que muestre el comportamiento de clientes, en especial los morosos?", respuesta: "NO", observacion: "No se cumple totalmente. La matriz de incobrabilidad no contempla oportunamente los créditos con mora superior a 180 días en ciertos segmentos de consumo masivo, generando riesgo de subestimación de la previsión para deudores de dudoso cobro." },
      { n: 20, texto: "¿Todos los comprobantes y formatos que intervienen en ventas y créditos están prenumerados o cuentan con autorización CAE/CAEA de AFIP/ARCA?", respuesta: "SI", observacion: "Se cumple. Emisión 100% electrónica con autorización en línea (CAE/CAEA) parametrizada en el módulo comercial del ERP SAP." },
      { n: 21, texto: "¿Son adecuadas las medidas de ciberseguridad, respaldo e integridad contra robos, incendios o ataques informáticos sobre los sistemas contables?", respuesta: "SI", observacion: "Se cumple. La infraestructura contable opera sobre una red de 16 Data Centers propios, monitoreada las 24 horas por el Centro de Operaciones de Seguridad (SOC)." },
      { n: 22, texto: "¿Están adecuadamente protegidos los bienes de cambio e infraestructura de red contra contingencias, robos y condiciones climatológicas?", respuesta: "NO", observacion: "No se cumple. Existen nodos de red, tendidos de fibra óptica y equipamiento expuestos de forma recurrente a robos, actos de vandalismo o inclemencias climáticas en la vía pública." },
      { n: 23, texto: "¿Existe control contable sistemático sobre centrales o equipos tecnológicos obsoletos dados de baja en libros pero físicamente en depósito/red?", respuesta: "NO", observacion: "No se cumple. Se han detectado centrales telefónicas analógicas fuera de servicio que continúan registradas en el activo fijo sin haber procesado oportunamente su baja contable por obsolescencia." },
      { n: 24, texto: "¿Se determina la rotación de materiales e insumos de red para decidir su correcta ubicación y movimiento dentro de los almacenes?", respuesta: "SI", observacion: "Se cumple. El módulo de logística del ERP administra los inventarios de repuestos y materiales de red bajo normas de rotación." },
      { n: 25, texto: "¿Están todos los inmuebles, licencias y activos de infraestructura titulados e inscriptos formalmente a nombre de la entidad?", respuesta: "SI", observacion: "Se cumple. Los títulos dominiales de propiedades, licencias de espectro radioeléctrico del ENACOM y marcas están debidamente registrados." }
    ]
  },
  {
    id: "cci-3",
    codigo: "CCI-03",
    componente: "Sistema de Presupuestos",
    periodo: "Del 01 de enero al 31 de diciembre del 2025",
    elaboradoPor: "GREBE - PISONERO DE BIASE",
    fecha: "20 de octubre del 2026",
    totalPreguntas: 27,
    positivasBase: 21,
    negativasBase: 6,
    riPorcentaje: 77.78,
    ncPorcentaje: 22.22,
    nivelConfianza: "BAJO",
    riesgoInherente: "ALTO",
    riesgoControl: "ALTO",
    cuentasAfectadas: "Bienes de Uso / Obras en Curso (CAPEX 5G/FTTH - NIC 16), Costos Operativos y Posición Monetaria Neta / RECPAM (NIC 29)",
    comentario: "A pesar de contar con herramientas avanzadas de gestión, la empresa evidencia ineficiencias en el control estricto de variaciones: desvíos no controlados por cambio de los precios (inflación) sobre insumos importados, emisión de órdenes de trabajo e hitos de obra sin partida presupuestaria previa, falta de seguimiento automatizado en proyectos plurianuales (5G) y la omisión del ajuste por inflación en los reportes de desvíos, resultando en un Nivel de Confianza BAJO (22,22%) y un Riesgo de Control ALTO.",
    enfoquePlanificacion: "Verificación de la trazabilidad presupuestaria en SAP entre la orden de compra y el devengado. Análisis de variaciones reales vs. presupuestadas ajustadas por inflación y revisión del CAPEX ejecutado en proyectos plurianuales.",
    preguntas: [
      { n: 1, texto: "¿La entidad cuenta con un presupuesto que promueve el desarrollo y crecimiento de la misma?", respuesta: "SI", observacion: "Se cumple. Telecom elabora anualmente el Presupuesto General de Operaciones y el Plan de Inversiones en Bienes de Capital orientado al despliegue de fibra óptica FTTH, redes 5G e infraestructura de sus 16 Data Centers propios." },
      { n: 2, texto: "¿Al elaborar el presupuesto, se aplican correctamente las disposiciones legales y estatutarias aplicables a la entidad?", respuesta: "SI", observacion: "Se cumple. La formulación presupuestaria respeta las normas de la Ley General de Sociedades, estatutos sociales y las reglamentaciones de oferta pública impuestas por la CNV (Argentina) y la SEC (EE.UU.)." },
      { n: 3, texto: "¿El manejo de los recursos financieros tiene un control estricto de los desvíos presupuestarios?", respuesta: "NO", observacion: "No se cumple a cabalidad. Debido a la alta volatilidad cambiaria e inflación en el mercado local, se registran desvíos no previstos en los costos operativos en pesos frente a compromisos en divisas de insumos de red importados." },
      { n: 4, texto: "¿Los ingresos recaudados por ventas y servicios son depositados e ingresados en las cuentas corrientes autorizadas de la sociedad?", respuesta: "SI", observacion: "Se cumple. Todas las cobranzas masivas B2C (Personal/Flow) y corporativas B2B (Personal Tech) se centralizan en la Tesorería Corporativa mediante cuentas bancarias y agentes de cobro habilitados." },
      { n: 5, texto: "¿Conoce el personal responsable las implicancias del mal uso o desvío no autorizado de los recursos financieros de la entidad?", respuesta: "SI", observacion: "Se cumple. La empresa difunde un Código de Ética y Conducta que establece sanciones disciplinarias y administrativas ante el mal uso de fondos corporativos o compras no presupuestadas." },
      { n: 6, texto: "¿Se realiza el seguimiento presupuestario observando las regulaciones tarifarias y normas dictadas por la autoridad sectorial (ENACOM)?", respuesta: "NO", observacion: "No se cumple totalmente. Se presentan dificultades para adaptar el presupuesto operativo en tiempo real ante variaciones intempestivas en las resoluciones regulatorias y tasas del ENACOM (Ley 27.078)." },
      { n: 7, texto: "¿Comprende el presupuesto establecido la totalidad de las áreas operativas, proyectos tecnológicos e inversiones del ente?", respuesta: "SI", observacion: "Se cumple. El presupuesto abarca el desglose consolidado de la Dirección B2C (Mercado Masivo), Dirección B2B (Personal Tech) y Direcciones de Soporte." },
      { n: 8, texto: "¿Se realiza el presupuesto fundamentándose en los recursos disponibles y los objetivos estratégicos a alcanzar?", respuesta: "SI", observacion: "Se cumple. La planificación financiera alinea el flujo de caja operativo con la estrategia corporativa de transformación hacia una 'Tech-Co'." },
      { n: 9, texto: "¿Se elabora el presupuesto anualmente con revisiones periódicas?", respuesta: "SI", observacion: "Se cumple. Se formula con periodicidad anual e incluye re-proyecciones trimestrales a cargo de la Gerencia de Planeamiento Financiero." },
      { n: 10, texto: "¿Cumplen con las directivas y lineamientos aprobados por el Directorio y la Alta Gerencia?", respuesta: "SI", observacion: "Se cumple. La aprobación del presupuesto anual es atribución indelegable del Directorio de la sociedad encabezado por su Presidente y el CEO." },
      { n: 11, texto: "¿Existen proyectos de inversión corporativa cuyo plazo de ejecución excede a un ejercicio fiscal y cuentan con seguimiento específico?", respuesta: "NO", observacion: "No se cumple a cabalidad. Si bien existen proyectos plurianuales clave (despliegue de red 5G y contratos de energía solar a 10 años con MSU Green Energy), el control presupuestario no siempre vincula el devengamiento diferido entre cierres de ejercicio de forma automatizada." },
      { n: 12, texto: "¿La elaboración del presupuesto se inicia y concluye en concordancia con el ejercicio económico de la sociedad?", respuesta: "SI", observacion: "Se cumple. El ciclo presupuestario coincide de forma estricta con el año fiscal del 1 de enero al 31 de diciembre." },
      { n: 13, texto: "¿Elaboran la proforma presupuestaria considerando las previsiones en la recaudación de ingresos como los requerimientos de gastos operativos e inversión?", respuesta: "SI", observacion: "Se cumple. Se pondera el volumen de facturación masiva y abonos recurrentes frente a los costos de operación, mantenimiento de red e impuestos." },
      { n: 14, texto: "¿La institución cuenta con los instrumentos informáticos y herramientas tecnológicas necesarias para la ejecución y control presupuestario?", respuesta: "SI", observacion: "Se cumple. Telecom opera con el módulo de Control de Gestión y Presupuesto parametrizado en su sistema ERP SAP." },
      { n: 15, texto: "¿Los compromisos, contratación de proveedores y autorización de gastos cuentan con la respectiva asignación presupuestaria previa?", respuesta: "NO", observacion: "No se cumple. En contrataciones de emergencia de red o servicios B2B urgentes de Personal Tech, se han emitido órdenes de trabajo e hitos de obra sin contar con la partida presupuestaria aprobada en el sistema ERP." },
      { n: 16, texto: "¿Se efectúan los cobros y pagos presupuestados a través del sistema bancario mediante canales electrónicos autorizados?", respuesta: "SI", observacion: "Se cumple. Los pagos corporativos a proveedores e inversiones se efectúan 100% mediante transferencias bancarias y bancarización oficial." },
      { n: 17, texto: "¿La entidad cuenta con una gestión de tesorería y cuentas bancarias centralizadas?", respuesta: "SI", observacion: "Se cumple. Dispone de una estructura de Tesorería Corporativa centralizada en Buenos Aires que administra las posiciones de liquidez de la matriz y sus subsidiarias." },
      { n: 18, texto: "¿La ejecución del presupuesto cumple con las fases de formulación, aprobación, compromiso, devengado y pago?", respuesta: "SI", observacion: "Se cumple. El flujo presupuestario dentro del sistema ERP SAP exige la validación secuencial de cada fase del gasto." },
      { n: 19, texto: "¿El presupuesto es evaluado mediante informes periódicos de variaciones enviados oportunamente a las jefaturas correspondientes?", respuesta: "NO", observacion: "No se cumple totalmente. La emisión de los reportes de desvíos presupuestarios mensuales registra demoras, lo que impide que los responsables de área ejecuten acciones correctivas inmediatas." },
      { n: 20, texto: "¿El personal a cargo de la programación y control presupuestario está sujeto a constante capacitación?", respuesta: "SI", observacion: "Se cumple. La Gerencia de Control de Gestión capacita continuamente a sus analistas en modelado financiero y herramientas de analítica avanzada." },
      { n: 21, texto: "¿La empresa cuenta con un manual general de políticas y procedimientos del sistema de presupuestos?", respuesta: "SI", observacion: "Se cumple. Dispone de normativas internas formalizadas que regulan el circuito de elaboración y aprobación presupuestaria." },
      { n: 22, texto: "¿La unidad a cargo del planeamiento financiero prepara el proyecto de presupuesto y lo presenta formalmente a las autoridades competentes?", respuesta: "SI", observacion: "Se cumple. La Gerencia de Planeamiento Financiero (FP&A) consolida la proforma y la eleva al Directorio y al Comité de Auditoría." },
      { n: 23, texto: "¿Se verifica el cumplimiento de las metas e indicadores financieros aprobados por la junta directiva?", respuesta: "SI", observacion: "Se cumple. Se realiza el monitoreo mensual de metas operativas, nivel de EBITDA, margen de ventas y ejecución del programa CAPEX." },
      { n: 24, texto: "¿La entidad presenta a los organismos de fiscalización (CNV, SEC, ENACOM) la información sobre las previsiones financieras y de inversión cuando lo determinan?", respuesta: "SI", observacion: "Se cumple. Rinde estados financieros y proyecciones requeridas en los prospectos de emisión de deuda y presentaciones regulatorias." },
      { n: 25, texto: "¿El personal técnico y financiero recibe formación en las actualizaciones normativas y de gestión presupuestaria?", respuesta: "SI", observacion: "Se cumple. Se brindan capacitaciones periódicas en materia de normas internacionales NIIF / NIC (IASB) y finanzas corporativas." },
      { n: 26, texto: "¿Para la evaluación y control presupuestario la entidad aísla el efecto de la inflación homogénea de acuerdo con las normas contables?", respuesta: "NO", observacion: "No se cumple. En el análisis de variaciones presupuestarias no se aísla de forma uniforme el impacto del Ajuste por Inflación en moneda homogénea (NIC 29) sobre la ejecución de partidas en pesos, distorsionando la comparación real vs. presupuestado." },
      { n: 27, texto: "¿La máxima autoridad y los funcionarios responsables del manejo presupuestario poseen la idoneidad técnica apta para dicha responsabilidad?", respuesta: "SI", observacion: "Se cumple. El equipo directivo y los profesionales a cargo del área financiera cuentan con títulos profesionales y vasta experiencia en el sector de telecomunicaciones." }
    ]
  },
  {
    id: "cci-4",
    codigo: "CCI-04",
    componente: "Sistema Operativo",
    periodo: "Del 01 de enero al 31 de diciembre del 2025",
    elaboradoPor: "GREBE - PISONERO DE BIASE",
    fecha: "20 de octubre del 2026",
    totalPreguntas: 30,
    positivasBase: 23,
    negativasBase: 7,
    riPorcentaje: 76.67,
    ncPorcentaje: 23.33,
    nivelConfianza: "BAJO",
    riesgoInherente: "ALTO",
    riesgoControl: "ALTO",
    cuentasAfectadas: "Pasivos Laborales (Provisión para Vacaciones y Cargas Sociales), Costos Operativos y Compras/Inventarios de Red",
    comentario: "La empresa dispone de un plantel calificado de más de 16.200 colaboradores. No obstante, el control interno operativo se ve debilitado por la existencia de legajos de personal incompletos en el interior, la acumulación de vacaciones no gozadas en personal clave de ingeniería por alta carga de trabajo, demoras en actualizar organigramas/centros de costo tras reestructuraciones y la ausencia de rotación obligatoria en puestos que administran compras e inventarios, configurando un Nivel de Confianza BAJO (23,33%) y un Riesgo de Control ALTO.",
    enfoquePlanificacion: "Muestreo y verificación física de legajos del personal, recálculo del pasivo por vacaciones/licencias acumuladas y revisión de segregación de funciones/rotación en el proceso de compras e inventarios.",
    preguntas: [
      { n: 1, texto: "¿En la selección del Talento Humano se observan estrictamente los requisitos y perfiles exigidos para el ingreso del personal?", respuesta: "SI", observacion: "Se cumple. Telecom aplica procesos formalizados de selección y reclutamiento para evaluar perfiles de ingeniería, tecnología y ciberseguridad." },
      { n: 2, texto: "¿Garantiza el proceso de selección la alineación con los procedimientos, valores y políticas internas de la entidad?", respuesta: "SI", observacion: "Se cumple. El proceso de incorporación cumple con los protocolos de selección, equidad de género e inclusión laboral corporativa." },
      { n: 3, texto: "¿La honestidad y la ética prevalecen en las políticas establecidas de la entidad para el trato con el personal y terceros?", respuesta: "SI", observacion: "Se cumple. Dispone de un Código de Ética y Conducta obligatorio y un Canal de Denuncias supervisado por el Comité de Auditoría." },
      { n: 4, texto: "¿Todos los contratos laborales están debidamente registrados dentro del lapso establecido ante la autoridad de aplicación?", respuesta: "SI", observacion: "Se cumple. Las contrataciones se formalizan conforme a la Ley de Contrato de Trabajo y los Convenios Colectivos de Telecomunicaciones (FOETRA, entre otros)." },
      { n: 5, texto: "¿Se cumplen con todos los requisitos y cláusulas establecidos en los contratos individuales y colectivos de trabajo?", respuesta: "SI", observacion: "Se cumple. La sociedad liquida salarios y beneficios cumpliendo con los acuerdos paritarios sectoriales y normativos." },
      { n: 6, texto: "¿Se lleva un registro ordenado y actualizado donde consten todos los datos y legajos de los trabajadores?", respuesta: "NO", observacion: "No se cumple a cabalidad. Se registran legajos físicos desactualizados y con documentación incompleta en personal técnico operativo de campo de sucursales del interior." },
      { n: 7, texto: "¿Existen colaboradores contratados que poseen alguna discapacidad (cumplimiento de programas de inclusión laboral)?", respuesta: "SI", observacion: "Se cumple. La compañía desarrolla iniciativas de inclusión laboral e integración de personas con discapacidad en diversas áreas operativas." },
      { n: 8, texto: "¿Se cancelan oportunamente las remuneraciones y cargas sociales que correspondan al trabajador según la ley?", respuesta: "SI", observacion: "Se cumple. Los haberes y cargas sociales de la nómina (más de 16.200 empleados) se abonan puntualmente mediante liquidación centralizada." },
      { n: 9, texto: "¿Se cumple con la jornada y el horario de trabajo establecido según las normas legales y convencionales vigentes?", respuesta: "SI", observacion: "Se cumple. Existe control de presentismo e interfaces de marcación digital para la gestión de turnos y jornadas laborales." },
      { n: 10, texto: "¿Previo a la realización de horas suplementarias/extras se cumple con las autorizaciones dispuestas en la ley?", respuesta: "SI", observacion: "Se cumple. Las horas extras requeridas para guardias de mantenimiento de red requieren autorización previa de las jefaturas en el sistema." },
      { n: 11, texto: "¿Los trabajadores gozan de los días de descanso obligatorio y feriados legalmente establecidos?", respuesta: "SI", observacion: "Se cumple. Se respetan estrictamente los esquemas de francos, descansos dominicales y feriados nacionales." },
      { n: 12, texto: "¿Los trabajadores gozan anualmente de sus licencias ordinarias/vacaciones dentro del período legal?", respuesta: "NO", observacion: "No se cumple. Se observa una acumulación imprevista de periodos de licencias no gozadas en personal clave de TI e ingeniería de redes, derivado de la alta carga operativa por el despliegue de 5G y fibra óptica." },
      { n: 13, texto: "¿La liquidación y pago de vacaciones se realiza en el tiempo oportuno fijado por la legislación laboral?", respuesta: "SI", observacion: "Se cumple. El módulo de nómina del ERP efectúa la liquidación de las vacaciones con la antelación fijada por norma." },
      { n: 14, texto: "¿Se cumple con el principio de igual remuneración por igual tarea de acuerdo con las normativas aplicables?", respuesta: "SI", observacion: "Se cumple. Las escalas salariales responden a los convenios colectivos de trabajo y a bandas salariales corporativas homologadas." },
      { n: 15, texto: "¿Se pagan los incentivos, bonos por desempeño o utilidades conforme a las políticas aprobadas?", respuesta: "SI", observacion: "Se cumple. Se liquidan bonos por cumplimiento de metas operativas y financieras evaluados anualmente por la Dirección." },
      { n: 16, texto: "¿Todos los trabajadores están debidamente afiliados y dados de alta en la seguridad social (ARCA)?", respuesta: "SI", observacion: "Se cumple. Se gestionan las altas tempranas en la seguridad social antes del inicio de la prestación efectiva del servicio." },
      { n: 17, texto: "¿A los trabajadores con antigüedad se les reconoce la liquidación de sus adicionales de reserva o indemnizatorios?", respuesta: "SI", observacion: "Se cumple. Se calculan los adicionales por antigüedad e indemnizaciones conforme a la legislación laboral argentina." },
      { n: 18, texto: "¿La estructura organizativa es apropiada y tiene capacidad de suministrar información para gestionar sus actividades?", respuesta: "SI", observacion: "Se cumple. La sociedad cuenta con una estructura formalizada en tres verticales: Dirección B2C, Dirección B2B (Personal Tech) y Direcciones Corporativas." },
      { n: 19, texto: "¿Se modifica y actualiza la estructura organizativa en los sistemas informáticos cuando existen reestructuraciones corporativas?", respuesta: "NO", observacion: "No se cumple a cabalidad. Se presentan demoras en la reasignación de centros de costos y organigramas dentro del ERP tras la unificación de marcas y reestructuración del área B2B." },
      { n: 20, texto: "¿Se han implementado políticas y procedimientos para la contratación, formación y promoción del personal?", respuesta: "SI", observacion: "Se cumple. Se aplican políticas de atracción de talento, programas de desarrollo técnico y la academia de capacitación digital." },
      { n: 21, texto: "¿La entidad dispone del personal necesario en número, conocimientos y experiencia para llevar a cabo su misión de 'Tech-Co'?", respuesta: "SI", observacion: "Se cumple. Cuenta con un plantel técnico calificado de más de 16.200 colaboradores, incluyendo más de 286 expertos en Ciberseguridad y 240 en Multicloud." },
      { n: 22, texto: "¿Están claramente definidas las funciones y responsabilidades de cada puesto de trabajo en manuales de organización?", respuesta: "SI", observacion: "Se cumple. Las responsabilidades operativas se estructuran mediante descripciones de puestos e indicadores clave de desempeño." },
      { n: 23, texto: "¿Existe una política de rotación periódica del personal en las tareas y puestos clave que manejan compras o activos?", respuesta: "NO", observacion: "No se cumple. No existe una política formal de rotación obligatoria para los puestos clave encargados de la adquisición de insumos tecnológicos e inventarios de red." },
      { n: 24, texto: "¿Están establecidos canales de comunicación internos para que los trabajadores puedan informar sobre irregularidades?", respuesta: "SI", observacion: "Se cumple. Dispone de canales confidenciales de denuncias coordinados por el área de Ética y Cumplimiento." },
      { n: 25, texto: "¿Tiene conocimiento todo el personal sobre la misión, visión estratégica y objetivos corporativos de la empresa?", respuesta: "NO", observacion: "No se cumple. Existe una brecha de comunicación donde parte del personal técnico operativo de campo del interior desconoce la visión estratégica de transformación a 'Tech-Co'." },
      { n: 26, texto: "¿El entorno de trabajo diario promueve el desarrollo profesional y la aplicación de competencias técnicas?", respuesta: "SI", observacion: "Se cumple. La empresa incentiva el aprendizaje mediante programas de formación continua y evaluación de desempeño." },
      { n: 27, texto: "¿El capital humano recibe capacitaciones técnicas y normativas de forma constante?", respuesta: "SI", observacion: "Se cumple. Se dictan capacitaciones permanentes en nuevas tecnologías." },
      { n: 28, texto: "¿Existe un clima laboral de confianza y comunicación efectiva entre la dirección y los colaboradores?", respuesta: "SI", observacion: "Se cumple. Se ejecutan encuestas periódicas de clima organizacional y mesas de diálogo con las representaciones gremiales." },
      { n: 29, texto: "¿Se cuenta con un plan integral de Seguridad, Higiene y Prevención de Riesgos del Trabajo en campo y antenas?", respuesta: "SI", observacion: "Se cumple. Se cumplen los protocolos de la Superintendencia de Riesgos del Trabajo (SRT) y la provisión de elementos de protección personal (EPP)." },
      { n: 30, texto: "¿La formación del personal está orientada al logro de las metas y objetivos estratégicos planteados por el ente?", respuesta: "NO", observacion: "Observación de control: Si bien existen capacitaciones, en el relevamiento cuantitativo global se registraron 7 desvíos operativos sobre 30 puntos evaluados (incluyendo falta de homologación en cuadrillas tercerizadas/interior y seguimiento de metas de rotación)." }
    ]
  },
  {
    id: "cci-5",
    codigo: "CCI-05",
    componente: "Sistema Tecnológico",
    periodo: "Del 01 de enero al 31 de diciembre del 2025",
    elaboradoPor: "GREBE - PISONERO DE BIASE",
    fecha: "20 de octubre del 2026",
    totalPreguntas: 21,
    positivasBase: 17,
    negativasBase: 4,
    riPorcentaje: 80.95,
    ncPorcentaje: 19.05,
    nivelConfianza: "BAJO",
    riesgoInherente: "ALTO",
    riesgoControl: "ALTO",
    cuentasAfectadas: "Ingresos por Servicios (Ventas Netas), Créditos por Ventas, Bienes de Uso y Activos Intangibles (Software/Licencias)",
    comentario: "Aunque la Dirección de Tecnología opera 16 Data Centers propios y un SOC de ciberseguridad, persisten vulnerabilidades clave: dependencia de equipos importados sin garantía local inmediata por restricciones de comercio exterior, ausencia de pruebas integrales del Plan de Continuidad (BCP) ante cortes físicos de fibra en la vía pública e inconsistencias en las interfaces entre sistemas comerciales heredados y el ERP contable, concluyendo en un Nivel de Confianza BAJO (19,05%) y un Riesgo de Control ALTO.",
    enfoquePlanificacion: "Pruebas de validación de interfaces automáticas entre sistemas comerciales y el ERP SAP. Auditoría de ciberseguridad sobre accesos/privilegios y revisión del plan de mantenimiento/contingencia de red.",
    preguntas: [
      { n: 1, texto: "¿Existe en la empresa un departamento encargado de las actividades y procesos de los temas tecnológicos?", respuesta: "SI", observacion: "Se cumple. Telecom opera mediante la Dirección de Tecnología y la Gerencia de Infraestructura IT, responsables de la red y plataformas digitales." },
      { n: 2, texto: "¿La empresa cuenta con un departamento de sistemas?", respuesta: "SI", observacion: "Se cumple. Dispone de la Gerencia de Sistemas y Desarrollo, encargada del mantenimiento del ERP SAP, plataformas comerciales e interfaces de red." },
      { n: 3, texto: "¿Existe una persona encargada de la administración de los equipos informáticos?", respuesta: "SI", observacion: "Se cumple. La dirección ejecutiva de IT y administradores de bases de datos gestionan los servidores y equipos de la sociedad." },
      { n: 4, texto: "¿Actualizan constantemente los niveles de seguridad de la información?", respuesta: "SI", observacion: "Se cumple. La ciberseguridad opera con un Centro de Operaciones de Seguridad (SOC) activo las 24 horas, protección contra ataques DDoS, Firewalls y esquemas de autenticación sin contraseña." },
      { n: 5, texto: "¿Existe un departamento encargado de administrar los proyectos informáticos?", respuesta: "SI", observacion: "Se cumple. La Gerencia de Proyectos e Innovación Tecnológica coordina la migración a arquitecturas Multicloud y proyectos de Inteligencia Artificial." },
      { n: 6, texto: "¿Evalúan los procesos de desarrollo y adquisición de los software aplicativos?", respuesta: "SI", observacion: "Se cumple. Se aplican pruebas de homologación e integración sobre aplicaciones comerciales (app Personal/Flow) y módulos del ERP SAP." },
      { n: 7, texto: "¿Cumplen con los requisitos necesarios para la adquisición de infraestructura tecnológica expuesta en el plan anual de inversiones?", respuesta: "SI", observacion: "Se cumple. Las compras de equipamiento de red y tecnología responden al presupuesto de inversiones en bienes de capital aprobado por el Directorio." },
      { n: 8, texto: "¿Realizan mantenimiento preventivo y correctivo a los equipos, sistemas, manuales y programas?", respuesta: "SI", observacion: "Se cumple. Se ejecutan planes continuos de mantenimiento en la red de 16 Data Centers propios, centrales digitales y tendidos de fibra óptica." },
      { n: 9, texto: "¿Hacen uso de las garantías que le otorgan los proveedores al realizar el mantenimiento a los equipos?", respuesta: "NO", observacion: "No se cumple a cabalidad. Existe una alta dependencia de un número reducido de proveedores internacionales de equipamiento especializado, cuyos contratos de soporte y garantía sufren demoras por restricciones de importación y repuestos críticos en el país." },
      { n: 10, texto: "¿Cuentan con un plan de contingencias tecnológicas que describa las acciones a tomar en caso de una emergencia?", respuesta: "SI", observacion: "Se cumple. Dispone de Planes de Recuperación ante Desastres (DRP) en sus Data Centers con respaldo automático de bases de datos contables y comerciales." },
      { n: 11, texto: "¿Incluyen en el plan de contingencias un plan de continuidad de las operaciones para toda la red?", respuesta: "NO", observacion: "No se cumple totalmente. Si bien existe un DRP en los Data Centers, no está plenamente implementado ni probado un Plan de Continuidad de Negocio ante interrupciones masivas de red causadas por vandalismo o robos físicos de fibra óptica en la vía pública." },
      { n: 12, texto: "¿Capacitaron al personal sobre estos planes y realizaron pruebas y evaluaciones de seguridad periódicas?", respuesta: "SI", observacion: "Se cumple. El equipo de más de 286 expertos en Ciberseguridad realiza pruebas de penetración y simulacros de ataques." },
      { n: 13, texto: "¿Revisaron la capacidad de respuesta y desempeño de los recursos tecnológicos?", respuesta: "SI", observacion: "Se cumple. Se monitorean continuamente los niveles de latencia, ancho de banda y tráfico en las redes móviles (4G/5G) y fijas." },
      { n: 14, texto: "¿Controlan las cuentas y privilegios otorgados a cada uno de los administradores y usuarios de los sistemas de información?", respuesta: "SI", observacion: "Se cumple. La asignación de accesos en el ERP SAP y servidores se gestiona mediante perfiles jerárquicos con autenticación de doble factor." },
      { n: 15, texto: "¿Elabora la unidad tecnológica normas e instructivos de instalación y utilización de los servicios de internet, intranet y sitios web de la entidad?", respuesta: "SI", observacion: "Se cumple. Se difunden políticas de seguridad de la información e instructivos para el uso de la intranet y del Portal de Gestión Online corporativo." },
      { n: 16, texto: "¿Cuentan los funcionarios y apoderados de la entidad con la firma electrónica / digital respaldada legalmente?", respuesta: "SI", observacion: "Se cumple. Los apoderados legales y funcionarios firman contratos, balances y presentaciones regulatorias mediante firma digital certificada." },
      { n: 17, texto: "¿Tienen estos certificados emitidos por una entidad de certificación acreditada?", respuesta: "SI", observacion: "Se cumple. Los certificados digitales utilizados cuentan con el aval de Autoridades Certificantes licenciadas en el país." },
      { n: 18, texto: "¿Monitorean constantemente la vigencia de cada uno de los certificados de firma digital?", respuesta: "SI", observacion: "Se cumple. La Gerencia de Sistemas administra la renovación programada de las claves públicas/privadas y licencias." },
      { n: 19, texto: "¿Cumplen las interfaces entre sistemas informáticos con los formatos estandarizados coordinados por la unidad de sistemas?", respuesta: "NO", observacion: "No se cumple a cabalidad. Tras la fusión con Cablevisión/Fibertel, persisten interfaces con sistemas comerciales heredados que requieren validaciones manuales para conciliar con el ERP contable." },
      { n: 20, texto: "¿Existen políticas internas de manejo, resguardo y archivo de información digital?", respuesta: "SI", observacion: "Se cumple. Se aplican protocolos de copia de seguridad, encriptación de datos y custodia en la nube multicloud híbrida." },
      { n: 21, texto: "¿Capacitan a los colaboradores sobre el uso y manejo de la firma electrónica y herramientas digitales?", respuesta: "NO", observacion: "No se cumple. La instrucción formal sobre el valor legal de la firma digital está concentrada en áreas administrativas y de sistemas, registrándose falta de capacitación en personal técnico operativo de campo del interior." }
    ]
  }
];

export const materialidadData = {
  moneda: "Millones de Pesos constantes al 31/12/2025",
  activoTotal: 16622552,
  criterioBase: "1,00% sobre el Activo Total Consolidado ($16.622.552 millones), dado que Telecom Argentina S.A. es una empresa capital-intensiva en infraestructura de red (FTTH, 5G, 16 Data Centers) y licencias de espectro.",
  materialidadGlobal: {
    sigla: "PM / MG",
    nombre: "Materialidad Global de los Estados Contables (Planeación)",
    importe: 166225,
    formula: "1,00% × $16.622.552M",
    explicacion: "Umbral máximo de distorsiones acumuladas a partir del cual las decisiones económicas de los usuarios de los EECC (accionistas, CNV, SEC, acreedores de ONs) podrían verse afectadas."
  },
  errorTolerable: {
    sigla: "ET / MP",
    nombre: "Error Tolerable (Materialidad de Ejecución / Desempeño)",
    importe: 83112,
    formula: "50,00% × PM ($166.225M)",
    explicacion: "Se aplica un recorte conservador del 50% sobre la PM debido a que el Riesgo de Control en los 5 componentes evaluados resultó ALTO (Nivel de Confianza Bajo entre 15,38% y 23,33%)."
  },
  montoMinimoAjuste: {
    sigla: "PAE / SAD",
    nombre: "Monto Mínimo de Reclasificación / Ajustes (Umbral de Trivialidad)",
    importe: 8311,
    formula: "5,00% × ET ($83.112M)",
    explicacion: "Todo desvío o diferencia de auditoría que supere los $8.311 millones debe acumularse obligatoriamente en la Planilla de Ajustes y Reclasificaciones Propuestos (PAE)."
  }
};

export const rubrosSignificativos = [
  {
    id: "rubro-1",
    numero: 1,
    codigoPrograma: "PROGRAMA A",
    nombre: "Bienes de Uso (PP&E — Nota 9)",
    naturaleza: "Activo No Corriente",
    saldoContable: 6789118,
    composicionSaldo: "$6.789.118 millones en PP&E Nota 9 (2024: $5.696.731M, +19,18%). Integrado en UGEs Nota 3.v: $12.439.729M Redes Personal + $1.645.414M Redes TMA",
    participacionActivo: "40,84% directo en PP&E (88,03% sumando Llaves, Intangibles y Der. de Uso)",
    riesgoInherente: "ALTO",
    riesgoControl: "ALTO",
    riesgoDeteccion: "BAJO (Mayor alcance sustantivo)",
    importancia: "Representa el activo individual más relevante del Estado de Situación Financiera ($6.789.118 millones en PP&E Nota 9, y $14.085.143 millones integrando las UGEs Redes Personal y TMA). Presenta un Riesgo de Control ALTO debido a fallas en el seguimiento de obras en curso, obsolescencia de centrales analógicas no dadas de baja, falta de estandarización en legajos digitales en sucursales y vulnerabilidad física por robos/vandalismo en la vía pública.",
    afirmaciones: [
      {
        afirmacion: "Existencia",
        objetivo: "Comprobar que los equipos de red, nodos, radiobases, centrales y Data Centers registrados en el activo fijo existen físicamente.",
        riesgo: "Inexistencia física de nodos, radiobases o centrales dadas de baja contablemente pero no físicamente, o destrucción de tendidos de fibra por vandalismo.",
        controlClave: "Conciliaciones contra el módulo de Activo Fijo del ERP SAP.",
        naturalezaProc: "Inspección física directa y confirmación externa.",
        instrumento: "Seleccionar una muestra representativa de activos de red, Data Centers y equipos tecnológicos y realizar inspección ocular in situ. Solicitar al área de operaciones los informes de siniestros/vandalismo del ejercicio y cotejar su baja física contra el registro contable.",
        oportunidad: "Trabajo de campo interino (octubre-noviembre) y cierre.",
        alcance: "Muestra selectiva de los principales nodos y Data Centers en AMBA y sucursales provinciales."
      },
      {
        afirmacion: "Integridad",
        objetivo: "Verificar que la totalidad de las adiciones de obras en curso, equipamiento importado e instalaciones de red hayan sido activadas e incluidas en los registros contables sin omisiones.",
        riesgo: "Activación incompleta de obras en curso finalizadas o emisión de órdenes de trabajo sin imputación presupuestaria ni activación oportuna.",
        controlClave: "Certificados de obra aprobados por inspección técnica vinculados automáticamente con la orden de compra y el ERP SAP.",
        naturalezaProc: "Prueba sustantiva de detalle de altas e inspección de legajos.",
        instrumento: "Auditar las adiciones del ejercicio (CAPEX) revisando certificados de avance de obra, facturas de proveedores importados y despachos de aduana. Efectuar prueba de cut-off de obras en curso para verificar que las habilitadas antes del 31/12/2025 hayan comenzado a depreciarse.",
        oportunidad: "Cierre de ejercicio.",
        alcance: "100% de las adiciones individuales mayores al monto de significatividad y muestra aleatoria sobre el resto."
      },
      {
        afirmacion: "Propiedad",
        objetivo: "Validar que los inmuebles, vehículos, centrales e infraestructura de red estén legalmente titulados e inscriptos a nombre de Telecom Argentina S.A.",
        riesgo: "Inmuebles, licencias o vehículos no inscriptos formalmente o sin títulos de dominio actualizados a nombre de Telecom Argentina S.A.",
        controlClave: "Custodia y registro en Asuntos Legales de escrituras dominiales y títulos.",
        naturalezaProc: "Confirmación con registros públicos y revisión documental.",
        instrumento: "Solicitar al Registro de la Propiedad Inmueble (RPI) certificados de dominio y gravámenes para una muestra de inmuebles propios. Inspeccionar los títulos de propiedad y cédulas de la flota vehicular y contratos de arrendamiento de terrenos de radiobases.",
        oportunidad: "Interina.",
        alcance: "100% de inmuebles adquiridos/fusionados en el ejercicio y muestra sobre la flota vehicular."
      },
      {
        afirmacion: "Medición",
        objetivo: "Asegurar que los valores de origen, depreciaciones acumuladas, bajas por obsolescencia (ej. centrales analógicas sin servicio) y previsiones por desvalorización/deterioro de activos estén correctamente valuados según normas contables.",
        riesgo: "Sobrevaluación por omisión de bajas por obsolescencia (centrales analógicas fuera de servicio) o aplicación incorrecta de alícuotas de depreciación.",
        controlClave: "Evaluación técnica anual de vida útil remanente y test de deterioro (impairment) por la Gerencia.",
        naturalezaProc: "Recálculo matemático y revisión de estimaciones contables.",
        instrumento: "Recalcular las depreciaciones del ejercicio verificando la vida útil asignada a cada clase de activo. Analizar el informe técnico de obsolescencia sobre centrales telefónicas analógicas y comprobar el registro del cargo a resultados por desincorporación o desvalorización.",
        oportunidad: "Cierre de ejercicio.",
        alcance: "Recálculo global sobre el total del parque de activos depreciables."
      },
      {
        afirmacion: "Exposición",
        objetivo: "Verificar que los bienes de uso y las obras en curso estén adecuadamente clasificados en el activo no corriente y discriminados en las notas complementarias.",
        riesgo: "Clasificación errónea entre bienes de uso operativos y bienes en montaje o falta de revelación de activos gravados/hipotecados.",
        controlClave: "Revisión de la nota explicativa de Bienes de Uso por el Comité de Auditoría.",
        naturalezaProc: "Lista de chequeo de revelación de normas contables.",
        instrumento: "Cotejar el Anexo de Bienes de Uso de los Estados Financieros con el libro mayor, verificando la adecuada separación entre valores de origen, depreciaciones acumuladas, adiciones y bajas. Verificar la revelación en notas de las restricciones de dominio o garantías.",
        oportunidad: "Cierre definitivo de balance.",
        alcance: "100% de la nota explicativa y anexos complementarios."
      }
    ],
    programaTrabajo: [
      { Bloque: "Inspección Física", Pasos: ["Seleccionar una muestra de nodos de red, sitios 5G y servidores en los Data Centers principales de AMBA e interior.", "Verificar la existencia física y el estado de operatividad de los activos.", "Inspeccionar los informes de robo de cableado y fibra para constatar el registro de las bajas correspondientes."] },
      { Bloque: "Prueba de Altas y Obras en Curso", Pasos: ["Cotejar las adiciones del ejercicio (CAPEX) contra certificados de obra aprobados, facturas de proveedores importados y despachos de aduana.", "Ejecutar prueba de corte sobre las obras en curso habilitadas en diciembre de 2025 para comprobar la oportuna activación e inicio de depreciación."] },
      { Bloque: "Validación de Titularidad", Pasos: ["Solicitar al Registro de la Propiedad Inmueble (RPI) los informes de dominio para los inmuebles adquiridos o fusionados en el ejercicio."] },
      { Bloque: "Prueba de Depreciaciones y Obsolescencia", Pasos: ["Recalcular globalmente el cargo por depreciación del ejercicio en función de las vidas útiles por categoría.", "Solicitar el informe técnico del área de Operaciones sobre las centrales analógicas fuera de servicio y verificar la contabilización de la baja por obsolescencia."] }
    ]
  },
  {
    id: "rubro-2",
    numero: 2,
    codigoPrograma: "PROGRAMA B",
    nombre: "Créditos por Ventas (Nota 5)",
    naturaleza: "Activo Corriente / No Corriente",
    saldoContable: 800128,
    composicionSaldo: "$799.188M Corriente (Créditos brutos $1.070.107M —comunes $1.067.130M— menos Previsión NIIF 9 $(270.919)M) + $940M No Corriente = $800.128M (Incluye incorporación TMA $421.919M bajo NIIF 3)",
    participacionActivo: "4,81% del Activo Total (Duplicación interanual +105,25%)",
    riesgoInherente: "ALTO",
    riesgoControl: "ALTO",
    riesgoDeteccion: "BAJO",
    importancia: "Registra un saldo neto consolidado de $800.128 millones ($799.188M corrientes y $940M no corrientes en Nota 5), duplicándose (+105,25%) frente a 2024 ($389.375M) mientras las Ventas crecieron +53,02%. El Riesgo Inherente ALTO proviene de 3 factores bajo NIIF: 1) La adquisición de Telefónica Móviles Argentina S.A. (TMA) el 24/02/2025 (NIIF 3), que incorpora al cierre el 100% del stock de créditos de TMA ($421.919M a valor razonable) mientras el Estado de Resultados consolida solo 10 meses de ventas de TMA (mar-dic 2025); 2) El aumento de la morosidad (créditos comunes brutos por $1.067.130M y Previsión Acumulada NIIF 9 por $(270.919)M en Nota 5); y 3) El Riesgo de Control ALTO por desfasajes en cobranzas externas, corte B2B y carteras migradas con mora > 180 días.",
    afirmaciones: [
      {
        afirmacion: "Existencia",
        objetivo: "Confirmar que los saldos a cobrar de clientes B2C y B2B representen derechos reales de cobro derivados de servicios efectivamente prestados o contratados.",
        riesgo: "Inclusión de saldos ficticios o servicios B2B no ejecutados/facturados con demoras que distorsionen el saldo.",
        controlClave: "Conciliación mensual entre la facturación comercial de la app/sistemas B2C y el libro mayor en SAP.",
        naturalezaProc: "Circularización e inspección de pagos posteriores.",
        instrumento: "Enviar solicitudes de confirmación externa de saldos (circular positiva) a clientes corporativos del segmento B2B (Personal Tech). Para no contestadas y clientes masivos B2C, aplicar procedimiento alternativo verificando la cobranza posterior en extractos bancarios.",
        oportunidad: "Circularización a fecha interina (31/10 ó 30/11) con prueba de rotación al cierre, o directa al 31/12.",
        alcance: "Muestra estratificada: 100% de los clientes B2B con saldos mayores y muestra aleatoria en B2C."
      },
      {
        afirmacion: "Integridad",
        objetivo: "Validar que todas las ventas y servicios prestados antes del cierre hayan sido facturados o devengados, y que no existan omitidos de corte de facturación al cierre del ejercicio.",
        riesgo: "Omisión de facturación o cortes incorrectos en servicios corporativos ejecutados en diciembre sin facturar (corte de ventas) y desfasajes de cobros con terceros.",
        controlClave: "Control automatizado de la interfaz entre los sistemas de facturación comerciales y el sistema contable.",
        naturalezaProc: "Pruebas de corte de documentación (cut-off) y revisión de interfaces.",
        instrumento: "Revisar las actas de recepción de conformidad de servicios corporativos B2B emitidas en los últimos 15 días del ejercicio y primeros 15 días del ejercicio siguiente, verificando su oportuna emisión de factura e imputación al ejercicio correcto. Auditar las partidas pendientes de conciliación en interfaces con Rapipago/Pago Fácil/billeteras al 31/12.",
        oportunidad: "Cierre de ejercicio.",
        alcance: "Transacciones B2B emitidas en la ventana de corte (+/- 15 días del cierre)."
      },
      {
        afirmacion: "Propiedad",
        objetivo: "Garantizar que los derechos de cobro pertenezcan a la sociedad y no hayan sido cedidos o titularizados sin el debido reflejo contable.",
        riesgo: "Cesión o titularización de carteras de morosos o facturas B2B sin baja o registro del pasivo contingente correspondiente.",
        controlClave: "Autorización previa de la Dirección Financiera para operaciones de factoring o cesión de créditos.",
        naturalezaProc: "Confirmaciones bancarias e inspección de contratos legalizados.",
        instrumento: "Analizar las confirmaciones recibidas de bancos e instituciones financieras para identificar la existencia de créditos por ventas cedidos en garantía. Revisar las actas de Directorio para detectar cesiones de cartera no contabilizadas.",
        oportunidad: "Cierre de ejercicio.",
        alcance: "100% de las entidades financieras con las que opera la sociedad."
      },
      {
        afirmacion: "Medición",
        objetivo: "Evaluar la razonabilidad de la estimación de la previsión para deudores de dudoso cobro, asegurando la inclusión adecuada de saldos en mora mayor a 180 días.",
        riesgo: "Subestimación de la previsión para deudores de dudoso cobro por omitir saldos con morosidad superior a 180 días en clientes masivos.",
        controlClave: "Emisión mensual automatizada del reporte de antigüedad de saldos y aplicación del modelo de pérdida esperada.",
        naturalezaProc: "Recálculo mediante TAACs y evaluación de estimaciones NIIF 9.",
        instrumento: "Obtener el reporte maestro de antigüedad de saldos al 31/12/2025. Recalcular la previsión para incobrables aplicando los porcentajes históricos de pérdida ajustados e incluir la totalidad de la mora superior a 180 días no previsionada por la empresa, evaluando el impacto en el Estado de Resultados.",
        oportunidad: "Cierre de ejercicio.",
        alcance: "100% de la base de datos de deudores (mediante herramientas de auditoría asistidas por computadora - TAACs)."
      },
      {
        afirmacion: "Exposición",
        objetivo: "Verificar la correcta apertura en corriente y no corriente, la discriminación por segmento (B2C / B2B) y la exposición de las notas explicativas sobre concentración de riesgo de crédito.",
        riesgo: "Incorrecta separación entre créditos corrientes y no corrientes o falta de desglose por segmento B2B/B2C en notas.",
        controlClave: "Parametrización en SAP de los vencimientos contractuales para la emisión de reportes.",
        naturalezaProc: "Revisión de la presentación en estados financieros.",
        instrumento: "Verificar que las notas explicativas clasifiquen adecuadamente los créditos según su vencimiento (a vencer y vencidos por tramos) y expongan adecuadamente las concentraciones de riesgo e impuestos diferidos/asociados.",
        oportunidad: "Cierre definitivo.",
        alcance: "Muestra de revisión de la nota complementaria de créditos por ventas."
      }
    ],
    programaTrabajo: [
      { Bloque: "Circularización de Saldos", Pasos: ["Enviar solicitudes de confirmación escrita a una muestra de clientes corporativos del segmento B2B (Personal Tech)."] },
      { Bloque: "Prueba de Corte de Facturación", Pasos: ["Seleccionar los contratos y actas de conformidad de servicios B2B emitidas entre el 15/12/2025 y el 15/01/2026.", "Revisar las partidas en conciliación de las interfaces con agentes de cobro al 31/12/2025."] },
      { Bloque: "Evaluación de la Previsión para Incobrables", Pasos: ["Obtener la matriz de antigüedad de saldos al cierre emitida por el ERP SAP.", "Verificar que la totalidad de los deudores con morosidad superior a 180 días se encuentren contemplados en la matriz de previsión.", "Recalcular la estimación de la previsión aplicando el modelo de pérdidas crediticias esperadas según la NIIF 9."] }
    ]
  },
  {
    id: "rubro-3",
    numero: 3,
    codigoPrograma: "PROGRAMA C",
    nombre: "Préstamos y Deuda Financiera (Pasivo Financiero)",
    naturaleza: "Pasivo Corriente / No Corriente",
    saldoContable: 5436615,
    composicionSaldo: "$5.436.615 millones consolidado (Obligaciones Negociables + Préstamos Bancarios en USD, valuados al TC BNA $/US$ 1.455,00)",
    participacionActivo: "32,71% respecto del Activo Total",
    riesgoInherente: "ALTO",
    riesgoControl: "MEDIO-ALTO",
    riesgoDeteccion: "BAJO",
    importancia: "Representa la estructura de financiamiento en moneda extranjera y emisión de ONs ($5.436.615 millones consolidado). Presenta Riesgo de Control MEDIO-ALTO por exposición a volatilidad cambiaria, variaciones en tasas de interés y necesidad de cumplimiento estricto de restricciones financieras (covenants) ante la SEC/CNV.",
    afirmaciones: [
      {
        afirmacion: "Existencia",
        objetivo: "Comprobar que las obligaciones financieras por préstamos bancarios y Obligaciones Negociables representen deudas efectivas y vigentes a la fecha de cierre.",
        riesgo: "Registro de deudas inexistentes o cancelación en libros de préstamos bancarios u ONs no liquidadas efectivamente.",
        controlClave: "Conciliación bancaria y confirmación mensual enviada por Tesorería Corporativa a entidades financieras.",
        naturalezaProc: "Confirmación externa directa (circularización bancaria y agentes pagadores).",
        instrumento: "Enviar pedidos de confirmación directa de saldos a la totalidad de los bancos acreedores, fiduciarios y Agente Pagador de las Obligaciones Negociables (Caja de Valores S.A.). Comprobar el capital adeudado, tasas aplicables, garantías y vencimientos.",
        oportunidad: "Al 31 de diciembre de 2025.",
        alcance: "100% de las entidades financieras y fiduciarias de deuda."
      },
      {
        afirmacion: "Integridad",
        objetivo: "Verificar que la totalidad de las operaciones de endeudamiento financiero, devengamiento de intereses y diferencias de cambio hayan sido registradas en su totalidad.",
        riesgo: "Omisión de registro de endeudamientos nuevos, contratos de arrendamiento financiero o gastos de emisión y devengamiento de intereses diferidos.",
        controlClave: "Aprobación por Asamblea y Directorio de todo endeudamiento y registro en el módulo de Tesorería SAP.",
        naturalezaProc: "Prueba de pasivos no registrados y lectura de actas.",
        instrumento: "Inspeccionar las actas de Directorio y Asamblea de Accionistas del ejercicio para identificar la emisión de nuevas series de ON o toma de préstamos. Revisar los extractos bancarios posteriores al cierre para detectar cancelaciones de pasivos financieros no registrados al 31/12.",
        oportunidad: "Trabajo de cierre.",
        alcance: "100% de las actas de la sociedad e ingresos de fondos en extractos bancarios de enero del año siguiente."
      },
      {
        afirmacion: "Propiedad",
        objetivo: "Asegurar que las deudas corresponden a compromisos asumidos directamente por la entidad (Derechos y Obligaciones).",
        riesgo: "Imputación a Telecom Argentina S.A. de deudas financieras contraídas por subsidiarias sin respaldo de avales o responsabilidad corporativa.",
        controlClave: "Verificación por Asuntos Legales de los contratos de préstamo y estatutos.",
        naturalezaProc: "Revisión de contratos marco de crédito y prospectos de emisión.",
        instrumento: "Examinar los contratos de préstamo e instrumentos de deuda suscritos en el año, validando las cláusulas de responsabilidad, garantías cruzadas (cross-default) y la titularidad del sujeto obligado pasivo.",
        oportunidad: "Interina y cierre.",
        alcance: "100% de las nuevas contrataciones de deuda financiera del año."
      },
      {
        afirmacion: "Medición",
        objetivo: "Validar que los pasivos financieros estén medidos a su costo amortizado, aplicando la tasa de interés efectiva y validados al tipo de cambio de cierre para deudas en moneda extranjera.",
        riesgo: "Error en la conversión de deudas en moneda extranjera al tipo de cambio de cierre (BNA US$/$) o en el cálculo del costo amortizado por tasa efectiva.",
        controlClave: "Verificación automatizada en SAP del tipo de cambio del Banco Nación e intereses devengados.",
        naturalezaProc: "Recálculo financiero y comprobación de variables de mercado.",
        instrumento: "Recalcular de forma independiente la conversión en pesos de las deudas en dólares u otras divisas aplicando el tipo de cambio oficial de cierre (BNA $/US$ 1.455,00 al 31/12/2025). Recalcular costos financieros e instrumentos derivados de cobertura (IFD).",
        oportunidad: "Cierre de balance.",
        alcance: "100% de los préstamos en moneda extranjera y contratos de derivados."
      },
      {
        afirmacion: "Exposición",
        objetivo: "Comprobar la adecuada clasificación entre pasivo corriente y no corriente, detallando en notas las garantías otorgadas, vencimientos y cumplimiento de compromisos financieros (covenants).",
        riesgo: "Clasificación incorrecta del tramo corriente/no corriente de la deuda o falta de revelación del incumplimiento de covenants financieros.",
        controlClave: "Control de vencimientos por la Gerencia de Planeamiento Financiero (FP&A).",
        naturalezaProc: "Revisión de notas y prueba de cumplimiento de resguardos contractuales.",
        instrumento: "Verificar el perfil de vencimientos de la deuda para la correcta apertura corriente/no corriente. Verificar el cumplimiento de los ratios e indicadores financieros exigidos en los contratos financieros y validar su adecuada exposición en Notas.",
        oportunidad: "Cierre definitivo.",
        alcance: "Muestra de la Nota de Préstamos y pasivos financieros de los Estados Financieros."
      }
    ],
    programaTrabajo: [
      { Bloque: "Confirmación Directa", Pasos: ["Circularizar al 100% de los bancos prestamistas, fiduciarios y a la Caja de Valores S.A. (agente pagador de las ONs)."] },
      { Bloque: "Revisión de Pasivos No Registrados", Pasos: ["Revisar las actas de Directorio y Asamblea de Accionistas del ejercicio para identificar la aprobación de nuevos endeudamientos.", "Examinar los extractos de enero de 2026 para detectar cancelaciones de deuda no registradas al cierre."] },
      { Bloque: "Valuación y Conversión de Divisas", Pasos: ["Recalcular los pasivos en moneda extranjera aplicando el tipo de cambio oficial vendedor de cierre (BNA $/US$ 1.455,00 al 31/12/2025).", "Verificar la correcta aplicación de la tasa de interés efectiva y el devengamiento de intereses e instrumentos financieros derivados (IFD)."] },
      { Bloque: "Verificación de Covenants y Exposición", Pasos: ["Revisar los contratos de endeudamiento y verificar el cumplimiento de los resguardos financieros exigidos.", "Comprobar la adecuada división entre el tramo corriente y no corriente de la deuda en los estados financieros."] }
    ]
  },
  {
    id: "rubro-4",
    numero: 4,
    codigoPrograma: "PROGRAMA D",
    nombre: "Ingresos por Servicios (Ventas Netas)",
    naturaleza: "Estado de Resultados (Ingresos Operativos)",
    saldoContable: 8328814,
    composicionSaldo: "$8.328.814 millones consolidados (Servicios Móviles Personal, Internet FTTH/HFC, Flow TV/Streaming y Soluciones B2B Personal Tech)",
    participacionActivo: "100% de los Ingresos Operativos por Servicios",
    riesgoInherente: "ALTO",
    riesgoControl: "ALTO",
    riesgoDeteccion: "BAJO",
    importancia: "Representa la fuente principal de resultados ($8.328.814 millones consolidados). Presenta Riesgo de Control ALTO por la complejidad de la facturación convergente B2C (móvil, internet, Flow) e interfaces manuales entre sistemas heredados y el ERP SAP, así como demoras de facturación B2B.",
    afirmaciones: [
      {
        afirmacion: "Existencia",
        objetivo: "Garantizar que los ingresos reconocidos corresponden a prestaciones de conectividad, tráfico, entretenimiento o soluciones digitales B2B efectivamente brindadas a clientes.",
        riesgo: "Registro de ingresos por servicios no prestados o sobreestimación de abonos masivos sin consumo/tráfico real.",
        controlClave: "Validación cruzada automatizada entre los logs de tráfico de la red (switching/rutado) y los registros del sistema de facturación.",
        naturalezaProc: "Pruebas sustantivas de detalle y conciliación de CDRs (Call Detail Records).",
        instrumento: "Tomar una muestra de facturas de clientes y corporativos B2B contra las tasaciones de tráfico de red y contratos vigentes.",
        oportunidad: "Trabajo interino y cierre.",
        alcance: "Muestra aleatoria de comprobantes B2C y prueba selectiva sobre clientes B2B."
      },
      {
        afirmacion: "Integridad",
        objetivo: "Asegurar que todas las transacciones procesadas por los sistemas comerciales (facturación masiva e interfaces) estén íntegramente contabilizadas en el período.",
        riesgo: "Omisión en la contabilización de facturación masiva mensual o fallas en el traspaso de información desde las plataformas de cobranzas al ERP.",
        controlClave: "Cuadre de interfaces informáticas diarias con informe automático de inconsistencias entre sistemas comerciales y SAP.",
        naturalezaProc: "Prueba analítica sustantiva global y auditoría de logs de interfaces.",
        instrumento: "Desarrollar una prueba global del ingreso multiplicando el parque promedio de clientes activos por el ingreso medio por usuario (ARPU) ponderado por segmento, comparando el valor estimado con el ingreso contabilizado. Validar las bitácoras (logs) de procesamiento de las interfaces comerciales al 31/12.",
        oportunidad: "Cierre de ejercicio.",
        alcance: "100% de la masa de ingresos por abonos recurrentes B2C y B2B."
      },
      {
        afirmacion: "Propiedad",
        objetivo: "Verificar que los ingresos reconocidos otorgan el derecho legal de cobro a Telecom.",
        riesgo: "Inclusión de ingresos cobrados por cuenta y orden de terceros como ventas propias sin netear la obligación correspondiente.",
        controlClave: "Mapeo de cuentas en el plan de cuentas SAP para la segregación de cobros de terceros.",
        naturalezaProc: "Inspección de contratos con terceros y revisión de cuentas de pasivo.",
        instrumento: "Revisar los contratos con proveedores de contenido de terceros (ej. suscripciones a plataformas de streaming facturadas en Flow) para verificar que solo se registre en ventas el margen o comisión neta acordada, deduciendo el costo del tercero.",
        oportunidad: "Interina.",
        alcance: "100% de los contratos de servicios de valor agregado y contenidos bajo demanda."
      },
      {
        afirmacion: "Medición",
        objetivo: "Validar que las tarifas, descuentos, promociones y retenciones hayan sido correctamente calculados e imputados según los contratos y normas vigentes.",
        riesgo: "Mala aplicación de promociones, descuentos, bonificaciones en la facturación o imprecisión en el cómputo de diferimientos por cobros adelantados.",
        controlClave: "Tabla de tarifas y promociones parametrizada e inmodificable en el sistema comercial sin doble autorización.",
        naturalezaProc: "Prueba de cumplimiento del parámetro del sistema (CGTI).",
        instrumento: "Probar los controles generales de TI (CGTI) sobre el módulo de parametrización de tarifas. Inspeccionar una muestra de facturas y verificar que los descuentos y tasas de reguladores (Tasa ENACOM 0,5% y Fondo Servicio Universal 1%) estén discriminados.",
        oportunidad: "Trabajo interino.",
        alcance: "Muestra de facturas emitidas en diferentes ciclos del mes."
      },
      {
        afirmacion: "Exposición",
        objetivo: "Confirmar la presentación neta de impuestos indirectos y la adecuada apertura por líneas de negocio (B2C Personal/Flow y B2B Personal Tech) en el Estado de Resultados y Notas.",
        riesgo: "Falta de apertura por segmentos reportables (Redes Personal, Redes TMA, Otros) exigida por la NIIF 8 en notas de los EECC.",
        controlClave: "Revisión por la Gerencia de Contabilidad de la información por segmentos presentada al Comité Ejecutivo y CEO.",
        naturalezaProc: "Verificación de la nota de información financiera.",
        instrumento: "Cotejar la nota de Información por Segmentos de los EECC con los reportes de gestión recibidos por la Máxima Autoridad Unipersonal (CEO) y el Comité Ejecutivo, validando la reconciliación de ingresos entre segmentos.",
        oportunidad: "Cierre definitivo de balance.",
        alcance: "100% de la nota de segmentos operativos."
      }
    ],
    programaTrabajo: [
      { Bloque: "Prueba Analítica Sustantiva Global", Pasos: ["Estimar el volumen de ingresos teóricos multiplicando el parque promedio de clientes activos por el ARPU (ingreso medio por usuario) ponderado por segmento (Personal, Flow, Internet).", "Comparar la estimación global con el saldo contabilizado."] },
      { Bloque: "Prueba de Procesamiento e Interfaces", Pasos: ["Auditar los reportes de descuadre de las interfaces diarias entre el sistema comercial/convergente y el sistema contable SAP.", "Seleccionar una muestra de facturas emitidas en el período y conciliar los montos facturados contra los registros de tráfico (CDR - Call Detail Records) y tablas de tarifas aprobadas."] },
      { Bloque: "Corte de Ingresos", Pasos: ["Verificar el neteo de ingresos por servicios de streaming y contenidos de terceros facturados en la plataforma Flow, asegurando que solo se reconozca como venta la comisión o margen correspondiente."] }
    ]
  },
  {
    id: "rubro-5",
    numero: 5,
    codigoPrograma: "PROGRAMA E",
    nombre: "Activos Intangibles (Nota 10) y Llaves de Negocio (Nota 8)",
    naturaleza: "Activo No Corriente",
    saldoContable: 7115523,
    composicionSaldo: "$4.443.998M Llaves de Negocio (Nota 8) + $2.671.525M Activos Intangibles (Nota 10: Licencias Espectro 4G/5G, Marcas y Software). Valor Recuperable UGE Redes Personal: $12.774.695M",
    participacionActivo: "42,81% del Activo Total (26,73% Llaves + 16,07% Intangibles)",
    riesgoInherente: "ALTO",
    riesgoControl: "ALTO",
    riesgoDeteccion: "BAJO",
    importancia: "Agrupa las Llaves de Negocio ($4.443.998 millones en Nota 8) y los Activos Intangibles como licencias de espectro 4G/5G adjudicadas por ENACOM ($2.671.525 millones en Nota 10), totalizando $7.115.523 millones (con Valor Recuperable de la UGE Redes Personal de $12.774.695 millones). Presenta un Riesgo de Control ALTO debido al impacto de variables macroeconómicas complejas (WACC, inflación, tipo de cambio) en los tests de recuperabilidad.",
    afirmaciones: [
      {
        afirmacion: "Existencia",
        objetivo: "Verificar la vigencia efectiva de las licencias de espectro radioeléctrico (4G/5G) otorgadas por ENACOM y la existencia del valor llave derivado de combinaciones de negocios.",
        riesgo: "Caducidad o revocación de las licencias de espectro otorgadas por ENACOM o pérdida del valor llave asignado a las Unidades Generadoras de Efectivo (UGE).",
        controlClave: "Seguimiento y control legal periódico del cumplimiento de las obligaciones de despliegue de espectro.",
        naturalezaProc: "Confirmación legal e inspección de actos administrativos.",
        instrumento: "Solicitar confirmación legal al ENACOM o inspeccionar los actos administrativos y resoluciones (ej. Adjudicación Lote 5G Banda 3.400-3.500 MHz) para validar la vigencia de las licencias de radiodifusión y telecomunicaciones.",
        oportunidad: "Cierre de ejercicio.",
        alcance: "100% de las licencias de espectro activas y registradas en el activo intangible."
      },
      {
        afirmacion: "Integridad",
        objetivo: "Comprobar que se hayan incorporado todos los costos capitalizables asociados a la adquisición o desarrollo de licencias y software corporativo.",
        riesgo: "Omisión de capitalización de costos directos asociados a la adquisición o desarrollo de software y licencias.",
        controlClave: "Proceso de validación contable de proyectos de software en el módulo de proyectos de SAP.",
        naturalezaProc: "Prueba de adiciones y desarrollo interno.",
        instrumento: "Auditar los cargos activados en la cuenta de Activos Intangibles durante el ejercicio, comprobando que cumplan de forma estricta los criterios de capitalización fijados por la NIC 38 (viabilidad técnica, intención de completar el activo y generación de beneficios futuros).",
        oportunidad: "Cierre de ejercicio.",
        alcance: "Muestra de proyectos de software finalizados y activados en el año."
      },
      {
        afirmacion: "Propiedad",
        objetivo: "Confirmar que los derechos de uso de espectro y marcas estén formalmente otorgados e inscriptos a nombre de la sociedad.",
        riesgo: "Licencias o marcas registradas a nombre de terceros o filiales sin contratos de cesión o uso intercompañía formalizados.",
        controlClave: "Custodia por la Gerencia de Asuntos Legales de los títulos de concesión y marcas en el INPI.",
        naturalezaProc: "Inspección de registros y títulos de concesión.",
        instrumento: "Verificar la titularidad legal de los certificados de marcas (Personal, Flow, Personal Tech) en el Instituto Nacional de la Propiedad Industrial (INPI) y comprobar que las bandas de frecuencia estén inscriptas formalmente a nombre de la sociedad o consolidadas (ej. TMA).",
        oportunidad: "Interina.",
        alcance: "100% de las marcas y concesiones de espectro significativas."
      },
      {
        afirmacion: "Medición",
        objetivo: "Evaluar la amortización acumulada de las licencias y realizar la prueba de deterioro sobre la llave de negocio y activos de vida útil indefinida.",
        riesgo: "Sobrevaluación de la Llave de Negocio por utilizar premisas irrazonables (tasas de descuento WACC o proyecciones de flujo de fondos desalineadas) en el Test de Deterioro.",
        controlClave: "Aprobación por el Directorio del presupuesto proyectado y revisión del informe técnico de valuación independiente.",
        naturalezaProc: "Evaluación de estimaciones de la gerencia e intervención de especialistas en valuación.",
        instrumento: "Revisar el modelo de flujo de fondos descontados preparado para el Test de Recuperabilidad de la UGE Redes Personal. Involucrar a especialistas de auditoría en valuación para evaluar la razonabilidad de la tasa de descuento WACC, la tasa de crecimiento a largo plazo y las pruebas de sensibilidad.",
        oportunidad: "Trabajo de cierre de balance.",
        alcance: "100% del test de deterioro sobre Llaves de Negocio y licencias."
      },
      {
        afirmacion: "Exposición",
        objetivo: "Verificar la correcta discriminación en el activo no corriente y el detalle de las vidas útiles y criterios de amortización en las notas a los estados contables.",
        riesgo: "Omisión de las revelaciones requeridas sobre la vida útil de las licencias, criterios de amortización o análisis de sensibilidad del test de deterioro en Notas.",
        controlClave: "Lista de chequeo de la Gerencia de Contabilidad sobre revelaciones de NIIF (NIC 36 / NIC 38).",
        naturalezaProc: "Revisión de revelaciones en los Estados Financieros.",
        instrumento: "Verificar que en las Notas a los EECC se expongan con precisión los supuestos clave del test de deterioro de la llave de negocio (WACC, tasa de crecimiento, sensibilidad) y se desglose adecuadamente la amortización acumulada y vida útil del espectro 5G.",
        oportunidad: "Cierre definitivo.",
        alcance: "100% de la nota de Activos Intangibles y Llave de Negocio de los Estados Financieros."
      }
    ],
    programaTrabajo: [
      { Bloque: "Verificación de Titularidad", Pasos: ["Inspeccionar las resoluciones de ENACOM que respaldan las concesiones de espectro radioeléctrico (incluyendo el Lote 5G) y constatar el cumplimiento de los planes de despliegue.", "Confirmar la inscripción de las marcas registradas ante el INPI."] },
      { Bloque: "Evaluación del Test de Deterioro de Llave de Negocio", Pasos: ["Revisar el modelo financiero de flujo de fondos descontados aplicado para determinar el valor recuperable de la UGE Redes Personal.", "Auditar los supuestos macroeconómicos clave: tasa de descuento WACC, tasa de crecimiento a largo plazo y proyecciones de EBITDA.", "Efectuar pruebas de sensibilidad sobre las variables críticas del modelo."] },
      { Bloque: "Amortizaciones y Exposición", Pasos: ["Recalcular las amortizaciones del ejercicio sobre licencias y software en función de las vidas útiles contractuales o estimadas.", "Comprobar la inclusión de las revelaciones requeridas por la NIC 36 y NIC 38 en las notas explicativas de los EECC."] }
    ]
  }
];

export const cronogramaAuditoria = [
  {
    fase: "Trabajo Interino",
    periodo: "Octubre - Noviembre 2025",
    etapaVinculada: "Etapa 1 y 2 (Inicial)",
    estado: "Completado",
    tareas: [
      "Pruebas de controles generales de TI (CGTI) e interfaces informáticas (SAP vs. sistemas heredados)",
      "Inspección física de Bienes de Uso (nodos, sitios 5G y Data Centers en AMBA e interior)",
      "Verificación de títulos de propiedad (RPI), marcas (INPI) y licencias legalizadas (ENACOM)"
    ]
  },
  {
    fase: "Pre-Cierre",
    periodo: "Diciembre 2025",
    etapaVinculada: "Etapa 2 (Ejecución)",
    estado: "Completado",
    tareas: [
      "Envío de circularización externa al 100% de entidades financieras, fiduciarios y Caja de Valores S.A.",
      "Envío de circularización positiva a muestra estratificada de clientes corporativos B2B (Personal Tech)",
      "Pruebas de corte de documentos preliminares y relevamiento de siniestros de red"
    ]
  },
  {
    fase: "Cierre Final e Informe",
    periodo: "Enero - Febrero 2026",
    etapaVinculada: "Etapa 2 (Final) y Etapa 3 (Conclusión)",
    estado: "En Cierre Final",
    tareas: [
      "Procedimientos alternativos de cobros posteriores sobre circularización B2B y B2C",
      "Prueba de pasivos no registrados y corte definitivo de facturación (15/12/2025 al 15/01/2026)",
      "Recálculo de valuación de deuda en moneda extranjera (TC BNA $/US$ 1.455,00) y depreciaciones/amortizaciones",
      "Evaluación del Test de Deterioro de Llave de Negocio (UGE Redes Personal $12.774.695M) y emisión del Informe Final"
    ]
  }
];
