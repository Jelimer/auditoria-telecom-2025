import React, { useState } from 'react';
import { BookOpen, Info, X } from 'lucide-react';

export const NORMAS_DICCIONARIO = {
  'NIA 220': {
    codigo: 'NIA 220',
    titulo: 'Gestión de la Calidad de una Auditoría de Estados Financieros',
    emisor: 'IAASB / FACPCE',
    queTrata:
      'Establece las responsabilidades del Socio del Encargo y del equipo respecto de la supervisión, revisión técnica de papeles de trabajo y control de calidad antes de emitir el dictamen.',
    aplicacion:
      'Sustenta la revisión final del Socio sobre el Legajo de Conclusión LC-02 (18/02/2026) verificando suficiencia de evidencia en PT-A..PT-F y evaluación de la Planilla PAE previa a la firma.'
  },
  'NIA 240': {
    codigo: 'NIA 240',
    titulo: 'Responsabilidades del Auditor en la Auditoría de Estados Financieros con Respecto al Fraude',
    emisor: 'IAASB / FACPCE',
    queTrata:
      'Exige mantener escepticismo profesional durante toda la auditoría y asumir dos presunciones obligatorias de riesgo de fraude: (1) reconocimiento de ingresos y (2) elusión de controles por parte de la gerencia en asientos de cierre y estimaciones.',
    aplicacion:
      'En Telecom fundamenta las pruebas TAACs sobre el 100% de la facturación ($8.328.814M) y la revisión crítica de estimaciones de alto juicio: Test de Deterioro UGE Redes Personal ($12.774.695M), PPA de TMA (NIIF 3) y Previsión NIIF 9.'
  },
  'NIA 250': {
    codigo: 'NIA 250',
    titulo: 'Consideración de las Disposiciones Legales y Reglamentarias en la Auditoría de Estados Financieros',
    emisor: 'IAASB / FACPCE',
    queTrata:
      'Define cómo el auditor debe comprender el marco legal y regulatorio aplicable al ente (leyes sectoriales, fiscales, societarias, defensa del consumidor y privacidad) e indagar posibles incumplimientos con impacto significativo o contingencias en los EECC.',
    aplicacion:
      'En Telecom abarca el escrutinio ante ENACOM (Ley N° 27.078: Tasa de Control 0,50% y Fondo Servicio Universal 1%), AAIP (Ley 25.326 de Datos Personales), CNDC (Ley 27.442 / Defensa Consumidor Ley 24.240), CNV/SEC y ARCA en las 24 jurisdicciones.'
  },
  'NIA 260': {
    codigo: 'NIA 260',
    titulo: 'Comunicación con los Responsables del Gobierno de la Entidad',
    emisor: 'IAASB / FACPCE',
    queTrata:
      'Regula el deber del auditor de comunicar formalmente al Directorio y al Comité de Auditoría el enfoque del encargo, hallazgos significativos, estimaciones sensibles e incorrecciones acumuladas no corregidas.',
    aplicacion:
      'Telecom reporta al Comité de Auditoría (exigido por CNV y SEC) las conclusiones de los 3 KAM, los desvíos del PAE (AJ-01 y AJ-04) y las deficiencias críticas de control interno.'
  },
  'NIA 265': {
    codigo: 'NIA 265',
    titulo: 'Comunicación de las Deficiencias en el Control Interno a los Responsables del Gobierno y a la Dirección',
    emisor: 'IAASB / FACPCE',
    queTrata:
      'Obliga a comunicar oportunamente y por escrito en una Carta única de Recomendaciones las deficiencias significativas identificadas durante la auditoría para que la Dirección adopte medidas correctivas.',
    aplicacion:
      'Respalda el Legajo LC-01 (12/02/2026): Carta única de Recomendaciones de Control Interno reportando las debilidades relevadas en CCI-01 Archivo (38,46% NC), CCI-05 TIC (47,62% NC) y la falla de bajas en CCI-02 Preg. 22–23.'
  },
  'NIA 300': {
    codigo: 'NIA 300',
    titulo: 'Planificación de la Auditoría de Estados Financieros',
    emisor: 'IAASB / FACPCE',
    queTrata:
      'Establece los lineamientos para elaborar la estrategia global y el plan detallado de auditoría: asignación de recursos, equipo multidisciplinario (especialistas TI y valuación), cronograma por visitas y presupuesto de horas.',
    aplicacion:
      'En Telecom estructura el cronograma de 12 semanas (Dic. 2025 – Feb. 2026) con 1.220 horas totales presupuestadas ($80.683.020 s/ Módulo CPCECABA Nov. 2026) para cumplir el plazo CNV de 70 días.'
  },
  'NIA 315': {
    codigo: 'NIA 315',
    titulo: 'Identificación y Valoración de los Riesgos de Incorrección Material',
    emisor: 'IAASB / FACPCE',
    queTrata:
      'Exige conocer en profundidad al ente, su industria, su ambiente de TI y los 5 componentes del Control Interno (Marco COSO) para evaluar el Riesgo Inherente (RI) y el Riesgo de Control (RC) antes de diseñar las pruebas sustantivas.',
    aplicacion:
      'Permitió calificar el entorno informático de Telecom (SAP S/4HANA + facturación de >41,6M accesos) como de ALTA COMPLEJIDAD y detectar RC ALTO en CCI-01 (38,46%) y CCI-05 (47,62%), definiendo un enfoque predominantemente sustantivo.'
  },
  'NIA 320': {
    codigo: 'NIA 320',
    titulo: 'Importancia Relativa o Materialidad en la Planificación y Ejecución de la Auditoría',
    emisor: 'IAASB / FACPCE',
    queTrata:
      'Establece los criterios para determinar la Materialidad Global (PM), la Materialidad de Ejecución o Error Tolerable (ET) y el umbral para desvíos claramente insignificantes (PAE).',
    aplicacion:
      'Como Telecom arrojó pérdida antes de IG ($(191.736)M) y es capital-intensiva (88,97% Activo No Corriente), fijamos PM = $166.225M (1% del Activo Total), ET = $83.112M (50% de PM por RC Alto) y umbral PAE = $8.311M (5% de PM).'
  },
  'NIA 330': {
    codigo: 'NIA 330',
    titulo: 'Respuestas del Auditor a los Riesgos Valorados',
    emisor: 'IAASB / FACPCE',
    queTrata:
      'Determina la naturaleza, momento y extensión de los procedimientos de auditoría posteriores en respuesta a los riesgos identificados en la planificación (pruebas sustantivas y uso de herramientas TAACs).',
    aplicacion:
      'Ante el Riesgo de Control ALTO en CCI-01 y CCI-05, se intensificaron muestras en Bienes de Uso (100% de 16 Data Centers + pruebas globales) y se ejecutaron scripts TAACs sobre el 100% de saldos en SAP.'
  },
  'NIA 450': {
    codigo: 'NIA 450',
    titulo: 'Evaluación de las Incorrecciones Identificadas durante la Auditoría',
    emisor: 'IAASB / FACPCE',
    queTrata:
      'Obliga al auditor a acumular todas las incorrecciones identificadas (excepto las claramente insignificantes), comunicarlas en la Planilla PAE para solicitar su registro y evaluar el efecto acumulado de las no corregidas sobre el dictamen (párrafo 14 sobre manifestación escrita).',
    aplicacion:
      'En Telecom acumula AJ-01 ($28.340M en PP&E: $21.450M centrales + $6.890M fibra) y AJ-04 ($11.240M reclasificación Flow), ambos sobre el umbral PAE ($8.311M). La partida menor PAE-NC-01 ($7.570M) queda bajo el umbral y no afecta el dictamen.'
  },
  'NIA 500': {
    codigo: 'NIA 500',
    titulo: 'Evidencia de Auditoría',
    emisor: 'IAASB / FACPCE',
    queTrata:
      'Exige diseñar y aplicar procedimientos de auditoría de forma que se obtengan elementos de juicio válidos y suficientes (evidencia suficiente y adecuada) para sustentar la opinión del informe.',
    aplicacion:
      'En Telecom se obtiene mediante inspección física in situ (16 Data Centers), confirmación externa directa (RPI, bancos, clientes B2B) y recálculos matemáticos independientes.'
  },
  'NIA 501': {
    codigo: 'NIA 501',
    titulo: 'Evidencia de Auditoría — Consideraciones Específicas para Partidas Seleccionadas',
    emisor: 'IAASB / FACPCE',
    queTrata:
      'Establece procedimientos sustantivos requeridos para existencias físicas, litigios, reclamaciones con asesores legales externos e información por segmentos.',
    aplicacion:
      'Se aplica en la circularización a los estudios jurídicos externos para auditar la integridad y medición de contingencias judiciales y regulatorias por $563.085M en Nota 20.'
  },
  'NIA 505': {
    codigo: 'NIA 505',
    titulo: 'Confirmaciones Externas (Circularización)',
    emisor: 'IAASB / FACPCE',
    queTrata:
      'Regula el diseño y aplicación de procedimientos de confirmación externa directa con terceros independientes para validar existencia y propiedad de saldos por cobrar, pasivos y depósitos.',
    aplicacion:
      'En PT-B1 se circularizaron 65 clientes corporativos de Personal Tech mediante cartas positivas directas, aplicando cobros posteriores en extractos bancarios de enero 2026 para las no contestadas y el segmento masivo B2C.'
  },
  'NIA 520': {
    codigo: 'NIA 520',
    titulo: 'Procedimientos Analíticos Sustantivos',
    emisor: 'IAASB / FACPCE',
    queTrata:
      'Evaluación de la información financiera mediante análisis de relaciones plausibles entre datos financieros y no financieros, pruebas globales y comparaciones de razonabilidad de saldos.',
    aplicacion:
      'En PT-A4 se aplica la Prueba Global de Amortizaciones ($1.312.898M base ant. + $315.840M altas/TMA − $72.450M exting. − $23.197M bajas) validando con desvío $0 el cargo de $1.533.091M de Nota 9 y Nota 25.'
  },
  'NIA 540': {
    codigo: 'NIA 540',
    titulo: 'Auditoría de Estimaciones Contables y de la Información Relacionada a Revelar',
    emisor: 'IAASB / FACPCE',
    queTrata:
      'Establece los requisitos para auditar estimaciones contables complejas sujetas a incertidumbre y juicio de la gerencia (flujos descontados, vidas útiles, valores razonables y previsiones).',
    aplicacion:
      'Rige la revisión de supuestos y sesgo gerencial en la UGE Redes Personal ($12.774.695M DCF), la valuación de activos adquiridos de TMA a valor razonable (PPA NIIF 3 Nota 29) y la Previsión NIIF 9.'
  },
  'NIA 560': {
    codigo: 'NIA 560',
    titulo: 'Hechos Posteriores al Cierre',
    emisor: 'IAASB / FACPCE',
    queTrata:
      'Obliga al auditor a ejecutar procedimientos hasta la fecha del informe de auditoría para identificar eventos ocurridos después del cierre del ejercicio que requieran ajuste o revelación en los EECC.',
    aplicacion:
      'Cubre el período entre el cierre (31/12/2025) y la fecha del dictamen (20/02/2026), verificando cobranzas posteriores, actas societarias y novedades regulatorias o de litigios post-cierre.'
  },
  'NIA 570': {
    codigo: 'NIA 570',
    titulo: 'Empresa en Funcionamiento',
    emisor: 'IAASB / FACPCE',
    queTrata:
      'Exige evaluar la capacidad del ente para continuar operando normalmente al menos 12 meses tras el cierre, analizando indicadores financieros (liquidez, covenants, vencimientos) y flujos operativos.',
    aplicacion:
      'Pese al ratio de Liquidez Corriente de 0,48x (típico del giro telecom con deuda financiera y CAPEX), se confirma holgado cumplimiento de covenants (1,84x deuda neta / EBITDA vs límite y 6,54x cobertura intereses) sin incertidumbre material.'
  },
  'NIA 580': {
    codigo: 'NIA 580',
    titulo: 'Manifestaciones Escritas (Carta de Representación)',
    emisor: 'IAASB / FACPCE',
    queTrata:
      'Obliga a obtener confirmaciones escritas firmadas por la Dirección (CEO/CFO) el mismo día del informe ratificando su responsabilidad sobre los EECC, integridad de la información y validez de estimaciones clave (y anexo NIA 450.14).',
    aplicacion:
      'Corresponde al Legajo LC-03 (20/02/2026): documento firmado por Presidente, CEO y CFO respaldando el PPA TMA (Nota 29), DCF UGE, contingencias ($563.085M) y evaluación de ajustes PAE.'
  },
  'NIA 600': {
    codigo: 'NIA 600',
    titulo: 'Consideraciones Especiales — Auditorías de Estados Financieros de Grupos',
    emisor: 'IAASB / FACPCE',
    queTrata:
      'Regula las responsabilidades del auditor del grupo cuando los EECC consolidados incluyen subsidiarias o adquisiciones relevantes realizadas durante el ejercicio.',
    aplicacion:
      'Aplica a la consolidación de Telecom Argentina S.A. con sus subsidiarias en Argentina/exterior y la incorporación integral de Telefónica Móviles Argentina S.A. (TMA) desde el 24/02/2025.'
  },
  'NIA 620': {
    codigo: 'NIA 620',
    titulo: 'Utilización del Trabajo de un Experto del Auditor',
    emisor: 'IAASB / FACPCE',
    queTrata:
      'Regula la evaluación de competencia, objetividad y suficiencia técnica cuando el auditor incorpora el trabajo de especialistas externos en materias distintas a la contabilidad.',
    aplicacion:
      'Se utiliza con peritos en valuación financiera en el Test de Deterioro NIC 36 de la UGE Redes Personal ($12.774.695M, WACC real 11,85%) y en el Purchase Price Allocation (PPA) de TMA bajo NIIF 3.'
  },
  'NIA 700': {
    codigo: 'NIA 700',
    titulo: 'Formación de la Opinión y Emisión del Informe de Auditoría sobre los Estados Financieros',
    emisor: 'IAASB / FACPCE',
    queTrata:
      'Norma la estructura formal, orden de secciones y redacción del Informe de los Auditores Independientes bajo NIAs cuando corresponde emitir opinión no modificada (Favorable sin Salvedades).',
    aplicacion:
      'Rige el Informe Final de Telecom al 20/02/2026 con Opinión Favorable Sin Salvedades sobre los EECC consolidados NIIF (aceptando AJ-01 y AJ-04, o aun si no superan la Materialidad Global de $166.225M).'
  },
  'NIA 701': {
    codigo: 'NIA 701',
    titulo: 'Comunicación de las Cuestiones Clave de la Auditoría (KAM) en el Informe',
    emisor: 'IAASB / FACPCE',
    queTrata:
      'Obligatoria para entidades cotizantes en oferta pública (CNV): exige detallar los asuntos que requirieron mayor juicio y atención del auditor junto con los procedimientos aplicados para responder a ellos.',
    aplicacion:
      'En el Informe de Telecom se incluyen 3 KAM: (1) Test de Deterioro UGE Redes Personal ($12.774.695M); (2) Combinación de Negocios TMA (NIIF 3) y PP&E ($6.789.118M); y (3) Ingresos convergentes ($8.328.814M) y Previsión NIIF 9.'
  },
  'NIA 705': {
    codigo: 'NIA 705',
    titulo: 'Opinión Modificada en el Informe Emitido por un Auditor Independiente',
    emisor: 'IAASB / FACPCE',
    queTrata:
      'Define cuándo emitir Opinión con Salvedades, Opinión Adversa o Abstención de Opinión si las incorrecciones no corregidas o limitaciones al alcance son materiales o generalizadas.',
    aplicacion:
      'En el simulador de cierre de la Etapa 3 ilustra el umbral crítico: solo correspondería pasar a Opinión con Salvedades si los desvíos sin registrar superaran la Materialidad Global ($166.225M).'
  },
  'NIA 720': {
    codigo: 'NIA 720',
    titulo: 'Responsabilidades del Auditor con Respecto a Otra Información',
    emisor: 'IAASB / FACPCE',
    queTrata:
      'Exige leer la otra información que acompaña los estados financieros (como la Memoria Anual y Reseña Informativa) para detectar inconsistencias materiales respecto de los EECC auditados.',
    aplicacion:
      'Respalda la sección específica «Otra Información» del Informe Independiente sobre la Memoria Anual Integrada y Reseña de Telecom presentada ante la CNV.'
  },
  'NIC 16': {
    codigo: 'NIC 16',
    titulo: 'Propiedades, Planta y Equipo (Bienes de Uso)',
    emisor: 'IASB (NIIF)',
    queTrata:
      'Estipula el reconocimiento inicial al costo, los costos capitalizables (párrafo 16), el inicio de depreciación cuando el bien está disponible para su uso (párrafo 55) y la baja obligatoria en cuentas de activos que no generarán beneficios económicos futuros (párrafo 67).',
    aplicacion:
      'Fundamenta la baja contable de las centrales de cobre obsoletas ($21.450M) y de las redes de fibra siniestradas ($6.890M), dando origen al ajuste AJ-01 por $28.340M.'
  },
  'NIC 29': {
    codigo: 'NIC 29',
    titulo: 'Información Financiera en Economías Hiperinflacionarias',
    emisor: 'IASB (NIIF)',
    queTrata:
      'Exige reexpresar los estados financieros en moneda homogénea de poder adquisitivo al cierre del período sobre el que se informa mediante índices generales de precios (IPC).',
    aplicacion:
      'Se audita que todos los saldos de Bienes de Uso, Intangibles, Resultados y comparativos 2024 estén reexpresados en moneda homogénea al 31/12/2025 antes de calcular amortizaciones y valores recuperables.'
  },
  'NIC 36': {
    codigo: 'NIC 36',
    titulo: 'Deterioro del Valor de los Activos',
    emisor: 'IASB (NIIF)',
    queTrata:
      'Exige realizar anualmente un Test de Deterioro sobre activos con vida útil indefinida y Llaves de Negocio comparando valor contable contra valor recuperable (Flujos Descontados).',
    aplicacion:
      'Verificación del valor recuperable de la UGE Redes Personal ($12.774.695M incluyendo Llave de Negocio de $4.443.998M en Nota 8), confirmando un headroom positivo de $334.966M.'
  },
  'NIC 38': {
    codigo: 'NIC 38',
    titulo: 'Activos Intangibles',
    emisor: 'IASB (NIIF)',
    queTrata:
      'Diferencia los gastos de investigación (a resultados) de los costos de desarrollo (capitalizables), y fija pautas de reconocimiento, vida útil y amortización para licencias e intangibles.',
    aplicacion:
      'Auditoría de licencias de espectro 5G ENACOM ($1.985.420M), relaciones con clientes TMA y software capitalizado en SAP PS en Nota 10 (total Intangibles $2.671.525M).'
  },
  'NIIF 3': {
    codigo: 'NIIF 3',
    titulo: 'Combinaciones de Negocios',
    emisor: 'IASB (NIIF)',
    queTrata:
      'Regula el método de adquisición y la medición a valor razonable (Purchase Price Allocation — PPA) de todos los activos identificables y pasivos asumidos en adquisiciones corporativas.',
    aplicacion:
      'Audita la adquisición de Telefónica Móviles Argentina S.A. (TMA) del 24/02/2025 por US$ 1.245M (Nota 29: PP&E +$1.332.961M, Intangibles +$274.183M, Créditos $421.919M y Llave residual $12.840M).'
  },
  'NIIF 9': {
    codigo: 'NIIF 9',
    titulo: 'Instrumentos Financieros',
    emisor: 'IASB (NIIF)',
    queTrata:
      'Establece el modelo prospectivo de Pérdida Crediticia Esperada (PCE / ECL) para medir la previsión para deudores incobrables desde el reconocimiento inicial.',
    aplicacion:
      'Recálculo con TAACs de la matriz de morosidad y pérdida crediticia esperada en Créditos por Ventas ($800.128M netos), validando la razonabilidad de la previsión de $(270.919)M sin desvíos.'
  },
  'NIIF 15': {
    codigo: 'NIIF 15',
    titulo: 'Ingresos de Actividades Ordinarias Procedentes de Contratos con Clientes',
    emisor: 'IASB (NIIF)',
    queTrata:
      'Establece el principio de devengado y el modelo de 5 pasos para reconocer ingresos cuando la entidad transfiere el control de un bien o servicio comprometido y distingue desempeño principal vs agente.',
    aplicacion:
      'En PT-B2 audita el corte de ingresos B2B al 31/12/2025 y fundamenta la reclasificación neutra AJ-04 ($11.240M) en contenidos Flow de terceros donde Telecom actúa como agente.'
  },
  'NIIF 16': {
    codigo: 'NIIF 16',
    titulo: 'Arrendamientos',
    emisor: 'IASB (NIIF)',
    queTrata:
      'Requiere que el arrendatario reconozca en su balance activos por derecho de uso y pasivos por arrendamientos para la mayoría de los contratos de alquiler.',
    aplicacion:
      'Relevante en Telecom para sitios celulares, antenas, torres y locales comerciales incorporados en Derecho de Uso (Nota 9 / Nota 15).'
  },
  'RT 32': {
    codigo: 'RT 32 (FACPCE)',
    titulo: 'Adopción de las Normas Internacionales de Auditoría (NIAs) del IAASB',
    emisor: 'FACPCE (Argentina)',
    queTrata:
      'Resolución Técnica argentina que adopta obligatoriamente las NIAs emitidas por el IAASB y el Código de Ética IESBA para la auditoría de entidades bajo oferta pública (CNV) que aplican NIIF (RT 26).',
    aplicacion:
      'Como Telecom cotiza en BYMA/CNV y aplica NIIF obligatoriamente, el Informe del Auditor Independiente se emite bajo NIAs (RT N° 32 FACPCE), con secciones de Independencia IESBA y 3 Cuestiones Clave (KAM NIA 701).'
  },
  'RT 37': {
    codigo: 'RT 37 (FACPCE)',
    titulo: 'Normas de Auditoría, Revisión, Otros Encargos de Aseguramiento y Servicios Relacionados',
    emisor: 'FACPCE (Argentina)',
    queTrata:
      'Marco normativo profesional general emitido por los Consejos Profesionales de Argentina, armonizado conceptualmente con las NIAs y con enfoque de auditoría basado en riesgos (Slosse).',
    aplicacion:
      'Es la norma base de cursada articulada con las NIAs (RT N° 32 FACPCE) para nuestro encargo sobre los estados contables consolidados de Telecom Argentina S.A.'
  },
  'RT 53': {
    codigo: 'RT 53 (FACPCE)',
    titulo: 'Modificación de la Resolución Técnica N° 37',
    emisor: 'FACPCE (Argentina)',
    queTrata:
      'Actualiza la RT N° 37 armonizando terminología, estructura del informe de auditoría, énfasis de cuestiones y comunicación con los responsables del gobierno del ente.',
    aplicacion:
      'Complementa la actualización normativa local en paralelo con las NIAs vigentes bajo RT N° 32 FACPCE para emisoras CNV.'
  }
};

export const TERMINOS_AUDITORIA_DICCIONARIO = {
  CIRCULARIZACION: {
    termino: 'Circularización de Clientes (Confirmación Externa)',
    doctrina: 'Carlos A. Slosse • NIA 505',
    icono: '✉️',
    afirmaciones: 'Existencia y Propiedad',
    queEs: 'Procedimiento sustantivo de auditoría mediante el cual el auditor solicita a un tercero independiente (cliente corporativo) confirmación escrita directa del saldo que adeuda a Telecom al 31/12/2025.',
    utilidadMesa:
      'Slosse la clasifica en Positiva Directa (se incluye el saldo en la carta y se pide confirmación) o Ciega (el cliente completa el saldo). Valida que el deudor sea real y no ficticio.'
  },
  CARTAS_CONFIRMACION: {
    termino: 'Cartas de Confirmación Escrita Directa',
    doctrina: 'NIA 505 • Carlos A. Slosse',
    icono: '📝',
    afirmaciones: 'Existencia y Propiedad',
    queEs: 'Es el instrumento formal (físico o digital) redactado en papel membretado de Telecom pero bajo control del auditor, donde la empresa autoriza al cliente a responder directamente al equipo de auditoría.',
    utilidadMesa:
      'El auditor debe mantener el control absoluto del envío y recepción de las respuestas para evitar manipulaciones de la empresa auditada.'
  },
  PROCEDIMIENTO_ALTERNATIVO: {
    termino: 'Procedimientos Alternativos de Auditoría',
    doctrina: 'NIA 505 (Párr. 12) • Carlos A. Slosse',
    icono: '🔄',
    afirmaciones: 'Existencia y Propiedad',
    queEs: 'Procedimiento supletorio que el auditor aplica cuando un cliente no responde a la circularización o para la cartera masiva residencial (B2C) de millones de líneas.',
    utilidadMesa:
      'Consiste en verificar la efectiva cobranza posterior en los extractos bancarios oficiales de enero 2026. Si el cliente pagó en enero, se prueba que la deuda al 31/12 existía legalmente.'
  },
  PRUEBA_CORTE: {
    termino: 'Prueba de Corte de Facturación (Cut-off)',
    doctrina: 'Carlos A. Slosse • NIIF 15 / Devengado',
    icono: '✂️',
    afirmaciones: 'Integridad y Medición',
    queEs: 'Procedimiento que verifica que todas las operaciones y servicios prestados queden imputados exactamente en el ejercicio contable que corresponde (antes o después del 31/12/2025).',
    utilidadMesa:
      'En Telecom se revisan actas de recepción de servicios corporativos entre el 15/12/2025 y el 15/01/2026 para asegurar que no se anticipen ventas de 2026 ni se posterguen ventas devengadas en 2025.'
  },
  AGING: {
    termino: 'Aging (Antigüedad de la Deuda)',
    doctrina: 'Término Técnico Anglosajón • NIIF 7 / NIIF 9',
    icono: '⏳',
    afirmaciones: 'Medición (Valuación)',
    queEs: 'Aging significa literalmente "envejecimiento". Es el informe del sistema contable (SAP) que estratifica las facturas impagas por rangos de días de mora (corrientes, 1-30d, 31-90d, 91-180d, >180d).',
    utilidadMesa:
      'Es la materia prima fundamental para calcular la Previsión NIIF 9: a mayor antigüedad y mora, mayor es el porcentaje de pérdida crediticia esperada que debe provisionarse.'
  },
  MATRIZ_ANTIGUEDAD: {
    termino: 'Matriz de Antigüedad de Saldos',
    doctrina: 'NIIF 7 • Módulos SAP FI-AR / FSCM',
    icono: '📊',
    afirmaciones: 'Medición y Exposición',
    queEs: 'Reporte emitido por el ERP SAP que clasifica el 100% de la cartera de clientes según los días transcurridos desde el vencimiento de cada factura comercial.',
    utilidadMesa:
      'Permite verificar que todos los deudores con morosidad superior a 180 días ($85.684M) estén contemplados y cubiertos al 100% en la previsión contable.'
  },
  PREVISION_NIIF_9: {
    termino: 'Previsión para Deudores Incobrables (ECL)',
    doctrina: 'NIIF 9 (Párrafo 5.5)',
    icono: '🛡️',
    afirmaciones: 'Medición (Valuación)',
    queEs: 'Cuenta regularizadora del activo que descuenta del total de créditos el monto que razonablemente se espera perder por falta de pago.',
    utilidadMesa:
      'Bajo NIIF 9 se calcula con un modelo prospectivo de pérdida esperada (no incurrida), combinando tasas históricas de morosidad con pronósticos económicos (inflación y riesgo país). Saldo en Telecom: $(270.919)M.'
  },
  TAACS: {
    termino: 'TAACs (Técnicas de Auditoría Asistidas por Computadora)',
    doctrina: 'Carlos A. Slosse • NIA 330',
    icono: '💻',
    afirmaciones: 'Integridad y Medición',
    queEs: 'Scripts de software (ej. Python, ACL, SQL) que permiten al auditor reprocesar de forma automática y masiva el 100% de los datos de un sistema contable como SAP.',
    utilidadMesa:
      'Frente a 18 millones de abonados y millones de documentos abiertos, permite al auditor recalcular toda la cartera en segundos sin recurrir a muestreos manuales.'
  },
  PERSONAL_TECH: {
    termino: 'Personal Tech (Unidad B2B de Telecom)',
    doctrina: 'Segmento Corporativo y Gobierno',
    icono: '🏢',
    afirmaciones: 'Existencia e Integridad',
    queEs: 'División de negocios de Telecom que provee servicios de telecomunicaciones y TI a grandes empresas y entes públicos (enlaces de fibra óptica, Data Center, nube y ciberseguridad).',
    utilidadMesa:
      'Concentra clientes de alto valor (YPF, Santander, Mercado Libre), por lo que se audita mediante circularización individual a diferencia del segmento residencial masivo (B2C).'
  }
};

const TERMINOS_EXACTOS = {
  'CIRCULARIZACIÓN': 'CIRCULARIZACION',
  'CIRCULARIZACION': 'CIRCULARIZACION',
  'CARTA DE CONFIRMACIÓN': 'CARTAS_CONFIRMACION',
  'CARTAS DE CONFIRMACIÓN': 'CARTAS_CONFIRMACION',
  'CARTA DE CONFIRMACION': 'CARTAS_CONFIRMACION',
  'CARTAS DE CONFIRMACION': 'CARTAS_CONFIRMACION',
  'PROCEDIMIENTO ALTERNATIVO': 'PROCEDIMIENTO_ALTERNATIVO',
  'PROCEDIMIENTOS ALTERNATIVOS': 'PROCEDIMIENTO_ALTERNATIVO',
  'PRUEBA DE CORTE': 'PRUEBA_CORTE',
  'CORTE DE FACTURACIÓN': 'PRUEBA_CORTE',
  'CORTE DE FACTURACION': 'PRUEBA_CORTE',
  'CORTE DE OPERACIONES': 'PRUEBA_CORTE',
  AGING: 'AGING',
  'MATRIZ DE ANTIGÜEDAD': 'MATRIZ_ANTIGUEDAD',
  'MATRIZ DE ANTIGUEDAD': 'MATRIZ_ANTIGUEDAD',
  'MATRIZ DE ANTIGÜEDAD DE DEUDA': 'MATRIZ_ANTIGUEDAD',
  'MATRIZ DE ANTIGUEDAD DE DEUDA': 'MATRIZ_ANTIGUEDAD',
  'PREVISIÓN NIIF 9': 'PREVISION_NIIF_9',
  'PREVISION NIIF 9': 'PREVISION_NIIF_9',
  TAAC: 'TAACS',
  TAACS: 'TAACS',
  'PERSONAL TECH': 'PERSONAL_TECH'
};

function resolveTerminoKey(text) {
  if (!text || typeof text !== 'string') return null;
  const trimmed = text.trim();
  if (trimmed.length > 35) return null;
  const upper = trimmed.replace(/\s+/g, ' ').toUpperCase();
  return TERMINOS_EXACTOS[upper] || null;
}

export function NormaTooltip({
  code,
  info,
  variant = 'inline',
  pillClassName = 'bg-purple-700 text-white hover:bg-purple-800',
  align = 'center',
  placement = 'top',
  children
}) {
  const [isOpen, setIsOpen] = useState(false);

  const normalizedKey = (code || '').replace(/\s+/g, ' ').toUpperCase().trim();
  const resolvedInfo = info || NORMAS_DICCIONARIO[normalizedKey];

  if (!resolvedInfo) {
    return <span>{children || code}</span>;
  }

  const verticalWrapperClass = placement === 'bottom' ? 'top-full pt-2' : 'bottom-full pb-2';
  const horizontalAlignClass =
    align === 'left'
      ? 'left-0'
      : align === 'right'
      ? 'right-0'
      : 'left-1/2 -translate-x-1/2';
  const arrowPosClass =
    align === 'left'
      ? 'left-4'
      : align === 'right'
      ? 'right-4'
      : 'left-1/2 -translate-x-1/2';

  return (
    <span
      className="relative inline-block my-0.5 align-middle"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {variant === 'pill' ? (
        <span
          role="button"
          tabIndex={0}
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen((prev) => !prev);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              e.stopPropagation();
              setIsOpen((prev) => !prev);
            }
          }}
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-extrabold cursor-help transition-all shadow-xs ring-1 ring-inset ring-white/20 ${pillClassName}`}
          title={`Pasá el mouse o hacé clic para ver qué explica la ${resolvedInfo.codigo}`}
        >
          <span>{children || code}</span>
          <Info className="w-3.5 h-3.5 opacity-85 shrink-0" />
        </span>
      ) : (
        <span
          role="button"
          tabIndex={0}
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen((prev) => !prev);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              e.stopPropagation();
              setIsOpen((prev) => !prev);
            }
          }}
          className="inline-flex items-center gap-1 mx-0.5 px-1.5 py-0.5 rounded font-extrabold text-[11px] bg-teal-950 text-lime-300 border border-teal-500/70 hover:border-lime-400 hover:bg-slate-900 cursor-help transition-all shadow-xs underline decoration-dotted decoration-lime-400 underline-offset-2 not-italic"
          title={`Pasá el mouse o hacé clic para ver qué trata la ${resolvedInfo.codigo}`}
        >
          <BookOpen className="w-3 h-3 text-lime-400 shrink-0" />
          <span>{children || code}</span>
          <span className="text-[9px] text-lime-400 opacity-85">ℹ️</span>
        </span>
      )}

      {isOpen && (
        <span
          className={`absolute ${verticalWrapperClass} ${horizontalAlignClass} w-72 sm:w-92 max-w-[calc(100vw-2rem)] z-50 block pointer-events-auto`}
          onClick={(e) => e.stopPropagation()}
        >
          <span className="relative block p-3.5 bg-slate-950 text-slate-100 text-[11px] rounded-xl shadow-2xl border-2 border-teal-400 text-left not-italic font-normal normal-case leading-normal">
            {/* Flecha decorativa */}
            <span
              className={`absolute ${arrowPosClass} ${
                placement === 'bottom'
                  ? 'bottom-full border-4 border-transparent border-b-teal-400'
                  : 'top-full border-4 border-transparent border-t-teal-400'
              }`}
            />

            {/* Encabezado */}
            <span className="flex items-center justify-between gap-2 pb-1.5 border-b border-slate-800 mb-2">
              <span className="font-mono font-extrabold text-lime-300 text-xs flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 shrink-0" />
                <span>{resolvedInfo.codigo}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-teal-900 text-teal-200 uppercase tracking-wider">
                  {resolvedInfo.emisor}
                </span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(false);
                  }}
                  aria-label="Cerrar explicación"
                  className="p-0.5 rounded text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            </span>

            {/* Título de la norma */}
            <span className="font-bold text-white text-xs block mb-1.5 leading-snug">
              {resolvedInfo.titulo}
            </span>

            {/* ¿De qué trata? */}
            <span className="block text-slate-300 text-[11px] mb-2 leading-relaxed">
              <strong className="text-teal-400 font-bold">📜 ¿De qué trata?: </strong>
              {resolvedInfo.queTrata}
            </span>

            {/* Aplicación en Telecom */}
            {resolvedInfo.aplicacion && (
              <span className="block p-2 rounded-lg bg-teal-950/90 border border-teal-500/50 text-teal-100 text-[10.5px] leading-relaxed">
                <strong className="text-amber-300 font-extrabold block mb-0.5">
                  🎯 Aplicación en Telecom:
                </strong>
                {resolvedInfo.aplicacion}
              </span>
            )}
          </span>
        </span>
      )}
    </span>
  );
}

export function TerminoAuditoriaTooltip({ termKey, matchText, defaultInfo }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [customDefs, setCustomDefs] = useState(() => {
    try {
      const saved = localStorage.getItem('audiia_custom_terminos_glosario_v1');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const termData = customDefs[termKey] || defaultInfo;
  const [editQueEs, setEditQueEs] = useState(termData.queEs);
  const [editUtilidad, setEditUtilidad] = useState(termData.utilidadMesa);
  const isCustomized = !!customDefs[termKey];

  const handleSaveEdit = (e) => {
    e.stopPropagation();
    const updated = {
      ...customDefs,
      [termKey]: {
        ...termData,
        queEs: editQueEs,
        utilidadMesa: editUtilidad
      }
    };
    setCustomDefs(updated);
    try {
      localStorage.setItem('audiia_custom_terminos_glosario_v1', JSON.stringify(updated));
    } catch (err) {
      console.error(err);
    }
    setIsEditing(false);
  };

  const handleResetEdit = (e) => {
    e.stopPropagation();
    const updated = { ...customDefs };
    delete updated[termKey];
    setCustomDefs(updated);
    setEditQueEs(defaultInfo.queEs);
    setEditUtilidad(defaultInfo.utilidadMesa);
    try {
      localStorage.setItem('audiia_custom_terminos_glosario_v1', JSON.stringify(updated));
    } catch (err) {
      console.error(err);
    }
    setIsEditing(false);
  };

  return (
    <span
      className="relative inline"
      onMouseEnter={() => !isEditing && setIsOpen(true)}
      onMouseLeave={() => !isEditing && setIsOpen(false)}
    >
      <span
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen((prev) => !prev);
        }}
        className="inline cursor-help text-teal-800 font-semibold underline decoration-dotted decoration-teal-600 underline-offset-3 hover:text-teal-950 hover:decoration-solid transition-colors not-italic"
        title={`Pasá el mouse para ver la definición de ${termData.termino}`}
      >
        {matchText}
        <span className="text-[10px] text-teal-600 ml-0.5 no-underline">💡</span>
      </span>

      {isOpen && (
        <span
          className="absolute bottom-full left-1/2 -translate-x-1/2 pb-2 w-80 sm:w-96 max-w-[calc(100vw-2rem)] z-50 block pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <span className="relative block p-4 bg-slate-950 text-slate-100 text-[11.5px] rounded-xl shadow-2xl border-2 border-teal-400 text-left not-italic font-normal normal-case leading-normal">
            {/* Encabezado */}
            <span className="flex items-center justify-between gap-1 pb-1.5 border-b border-slate-800 mb-2">
              <span className="font-bold text-teal-300 text-xs flex items-center gap-1">
                {termData.icono} {termData.termino}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-teal-950 text-teal-300 border border-teal-700 uppercase tracking-wider">
                  {termData.afirmaciones}
                </span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsEditing((prev) => !prev);
                  }}
                  className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 hover:bg-white/20 text-slate-200 border border-white/20 cursor-pointer font-bold transition-colors"
                  title="Editar lo que dice esta ventanita"
                >
                  {isEditing ? '✕ Cancelar' : '✏️ Editar'}
                </button>
              </span>
            </span>

            {/* Doctrina / Norma */}
            <span className="text-[10px] text-slate-400 font-mono block mb-1.5">
              📚 {termData.doctrina}
            </span>

            {isEditing ? (
              <div className="space-y-2.5 pt-1">
                <div>
                  <label className="block text-[10px] font-bold text-teal-300 uppercase mb-0.5">
                    ¿Qué es? (Definición):
                  </label>
                  <textarea
                    value={editQueEs}
                    onChange={(e) => setEditQueEs(e.target.value)}
                    rows={3}
                    className="w-full p-2 rounded-lg bg-slate-900 border border-teal-500/50 text-slate-100 text-[11px] leading-relaxed focus:outline-none focus:ring-1 focus:ring-teal-400"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-amber-300 uppercase mb-0.5">
                    Clave para la Defensa Oral:
                  </label>
                  <textarea
                    value={editUtilidad}
                    onChange={(e) => setEditUtilidad(e.target.value)}
                    rows={3}
                    className="w-full p-2 rounded-lg bg-slate-900 border border-amber-500/50 text-amber-100 text-[11px] leading-relaxed focus:outline-none focus:ring-1 focus:ring-amber-400"
                  />
                </div>

                <div className="flex items-center justify-between gap-2 pt-1 border-t border-slate-800">
                  <button
                    type="button"
                    onClick={handleSaveEdit}
                    className="px-3 py-1 rounded-md bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs cursor-pointer"
                  >
                    Guardar nota ✓
                  </button>
                  {isCustomized && (
                    <button
                      type="button"
                      onClick={handleResetEdit}
                      className="text-[10px] text-rose-400 hover:underline cursor-pointer"
                    >
                      Restablecer original
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <>
                <span className="block mb-2 text-slate-200">
                  <strong className="text-white font-semibold">¿Qué es?: </strong>
                  {termData.queEs}
                </span>

                <span className="block p-2 rounded-lg bg-slate-900 border border-teal-500/30 text-teal-100 text-[11px]">
                  <strong className="text-amber-300 font-bold block mb-0.5">
                    🎯 Clave para la Defensa Oral:
                  </strong>
                  {termData.utilidadMesa}
                </span>

                {isCustomized && (
                  <span className="block text-[9.5px] text-amber-400/80 italic mt-1.5 text-right">
                    ✏️ Definición personalizada por el usuario
                  </span>
                )}
              </>
            )}

            <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-teal-400" />
          </span>
        </span>
      )}
    </span>
  );
}

function decodeBasicEntities(str) {
  if (!str || typeof str !== 'string') return str;
  return str
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'");
}

export function renderTextWithNormas(text) {
  if (!text || typeof text !== 'string') return text;

  const decoded = decodeBasicEntities(text);
  const regex =
    /\b(NIA\s*(?:220|240|250|260|265|300|315|320|330|450|500|501|505|520|540|560|570|580|600|620|700|701|705|720)|NIC\s*(?:16|29|36|38)|NIIF\s*(?:3|9|15|16)|RT\s*(?:32|37|53)|Circularización|cartas?\s+de\s+confirmación|procedimientos?\s+alternativos?|Prueba\s+de\s+Corte|corte\s+de\s+facturación|corte\s+de\s+operaciones|Matriz\s+de\s+Antigüedad(?:\s+de\s+Deuda)?|Aging|Previsión\s+NIIF\s*9|TAACs?|Personal\s+Tech)\b/gi;
  const parts = decoded.split(regex);
  if (parts.length <= 1) return decoded;

  return parts.map((part, index) => {
    const normalizedKey = part.replace(/\s+/g, ' ').toUpperCase();
    const infoNorma = NORMAS_DICCIONARIO[normalizedKey];

    if (infoNorma) {
      return <NormaTooltip key={index} code={part} info={infoNorma} />;
    }

    const terminoKey = resolveTerminoKey(part);
    if (terminoKey && TERMINOS_AUDITORIA_DICCIONARIO[terminoKey]) {
      return (
        <TerminoAuditoriaTooltip
          key={index}
          termKey={terminoKey}
          matchText={part}
          defaultInfo={TERMINOS_AUDITORIA_DICCIONARIO[terminoKey]}
        />
      );
    }

    return part;
  });
}

export function renderFormattedRichText(text) {
  if (!text || typeof text !== 'string') return text;

  const tokenRegex =
    /(\*\*[\s\S]+?\*\*|<b>[\s\S]+?<\/b>|<strong>[\s\S]+?<\/strong>|<u>[\s\S]+?<\/u>|<ins>[\s\S]+?<\/ins>|__[\s\S]+?__|<i>[\s\S]+?<\/i>|<em>[\s\S]+?<\/em>|<code>[\s\S]+?<\/code>|\*[^*\n\r]+?\*|_[^_\n\r]+?_)/g;
  const tokens = text.split(tokenRegex);

  return tokens.map((token, idx) => {
    if (!token) return null;

    if (
      (token.startsWith('**') && token.endsWith('**') && token.length >= 4) ||
      (token.startsWith('<b>') && token.endsWith('</b>') && token.length >= 7) ||
      (token.startsWith('<strong>') && token.endsWith('</strong>') && token.length >= 17)
    ) {
      let inner = token;
      if (token.startsWith('**')) inner = token.slice(2, -2);
      else if (token.startsWith('<b>')) inner = token.slice(3, -4);
      else if (token.startsWith('<strong>')) inner = token.slice(8, -9);

      return (
        <strong key={idx} className="font-black text-current">
          {renderFormattedRichText(inner)}
        </strong>
      );
    }

    if (
      (token.startsWith('<u>') && token.endsWith('</u>') && token.length >= 7) ||
      (token.startsWith('<ins>') && token.endsWith('</ins>') && token.length >= 11) ||
      (token.startsWith('__') && token.endsWith('__') && token.length >= 4)
    ) {
      let inner = token;
      if (token.startsWith('<u>')) inner = token.slice(3, -4);
      else if (token.startsWith('<ins>')) inner = token.slice(5, -6);
      else if (token.startsWith('__')) inner = token.slice(2, -2);

      return (
        <span
          key={idx}
          className="underline underline-offset-3 decoration-teal-500 decoration-2 font-semibold text-current"
        >
          {renderFormattedRichText(inner)}
        </span>
      );
    }

    if (
      (token.startsWith('*') && token.endsWith('*') && token.length >= 2 && !token.startsWith('**')) ||
      (token.startsWith('_') && token.endsWith('_') && token.length >= 2 && !token.startsWith('__')) ||
      (token.startsWith('<i>') && token.endsWith('</i>') && token.length >= 7) ||
      (token.startsWith('<em>') && token.endsWith('</em>') && token.length >= 9)
    ) {
      let inner = token;
      if (token.startsWith('*') || token.startsWith('_')) inner = token.slice(1, -1);
      else if (token.startsWith('<i>')) inner = token.slice(3, -4);
      else if (token.startsWith('<em>')) inner = token.slice(4, -5);

      return (
        <em key={idx} className="italic font-medium text-current">
          {renderFormattedRichText(inner)}
        </em>
      );
    }

    if (token.startsWith('<code>') && token.endsWith('</code>') && token.length >= 13) {
      const inner = token.slice(6, -7);
      return (
        <code
          key={idx}
          className="px-1 py-0.5 rounded bg-teal-500/15 border border-teal-500/30 font-mono text-[11px] font-bold text-current"
        >
          {renderFormattedRichText(inner)}
        </code>
      );
    }

    return <React.Fragment key={idx}>{renderTextWithNormas(token)}</React.Fragment>;
  });
}

export default NormaTooltip;
