# CONTEXTO MAESTRO DEL PROYECTO DE AUDITORÍA EXTERNA — TELECOM ARGENTINA S.A. (EECC 2025)

> **Instrucción para cualquier agente / nuevo chat de Antigravity:**
> Al leer este archivo (`@CONTEXTO_AUDITORIA.md`), debes adoptar inmediatamente todas las reglas, cifras, marcos normativos y decisiones de diseño acordadas con el usuario para este proyecto universitario. **Todas las respuestas y la interfaz deben estar siempre 100% en español.**

---

## 1. Datos Generales de la Cátedra y del Proyecto
- **Universidad y Cátedra:** Universidad de la Cuenca del Plata (U.C.P.) — Trabajo Práctico Integral de Auditoría Externa.
- **Autores / Equipo de Auditoría:** **Grebe — Pisonero De Biase**.
- **Ente Auditado:** **Telecom Argentina S.A.**
- **Estados Contables Auditados:** **Estados Contables Consolidados** correspondientes al ejercicio finalizado el **31 de diciembre de 2025** (comparativos con **2024** y **2023**), expresados en **millones de pesos constantes** (Nota 1.d). **IMPORTANTE:** Siempre se utilizan los **Estados Contables Consolidados**, nunca los individuales.
- **Archivos Fuente Locales en el Proyecto (`docs/`):**
  - `docs/Estados Financieros 2025 Telecom-Original.pdf` (PDF oficial completo de los Estados Financieros Consolidados al 31/12/2025 de Telecom Argentina S.A.).
  - `docs/PLANIFICACION PRELIMINAR DE AUDITORIA TELECOM 2026.docx` (Documento Word original elaborado por los alumnos para la Etapa 1.1 Preliminar).
  - `docs/AE 4 - Planificación Detallada - copia (2).docx` (y `docs/AE 4 - Desarrollo v1.docx`): **Documento Maestro Activo oficial de la Actividad de Extensión 4 (AE 4)**. Contiene la Planificación Detallada, Cuestionarios CCI, Matriz de Riesgo, Matriz de Afirmaciones, Programas de Trabajo (foco principal en Bienes de Uso, Intangibles y Créditos) y Cédulas de Ejecución (PT-A). Se mantiene sincronizado y actualizado de forma continua junto con la plataforma web.
- **Repositorio GitHub y Despliegue Automático en Vercel:**
  - Repositorio remoto (`origin`): `https://github.com/Jelimer/auditoria-telecom-2025.git` (rama `main`).
  - Cada vez que se realicen cambios en el código de la app, se debe verificar con `npm run build`, hacer `git add .`, `git commit` y `git push origin main` para que **Vercel** actualice automáticamente la versión web que el usuario lee desde su navegador o celular.

---

## 2. Separación Estricta de Marcos Normativos (¡Regla Crítica!)
1. **Marco Contable aplicado por Telecom Argentina S.A. (preparación de sus EECC):**
   - Telecom cotiza en la **CNV (Argentina)** y en la **SEC / NYSE (EE.UU.)**, por lo que confecciona sus Estados Contables Consolidados **exclusivamente bajo Normas Internacionales de Información Financiera (`NIIF` / `NIC` emitidas por el IASB)**.
   - **PROHIBIDO mencionar `RT 54 (NUA)` como norma contable de Telecom.**
   - Normas NIIF/NIC clave del caso:
     - **`NIC 29`:** Reexpresión en moneda homogénea (ajuste por inflación por IPC).
     - **`NIIF 3`:** Combinaciones de negocios — Adquisición del 100% de **Telefónica Móviles Argentina S.A. (TMA)** el **24/02/2025** (alocación del precio de compra / PPA).
     - **`NIIF 9`:** Instrumentos financieros y modelo de **Pérdida Crediticia Esperada (ECL)** para la Previsión de Deudores Incobrables.
     - **`NIIF 15`:** Ingresos de actividades ordinarias procedentes de contratos con clientes (evaluación de Principal vs. Agente en servicios de terceros en Flow y corte B2B).
     - **`NIIF 16`:** Arrendamientos (Activos por derechos de uso en Nota 11: `$727.288M` y Pasivos por arrendamientos en Nota 18).
     - **`NIC 16`:** Propiedad, Planta y Equipo (`PP&E` en Nota 9: `$6.789.118M`).
     - **`NIC 36`:** Deterioro del valor de los activos (*Test de Impairment* de la Llave de Negocio en Nota 8: `$4.443.998M` y UGE Redes Personal: `$12.774.695M`).
     - **`NIC 38`:** Activos Intangibles (Nota 10: `$2.671.525M` — licencias de espectro 4G/5G ENACOM, marcas y software).
2. **Marco Doctrinario y Profesional de Auditoría (aplicado por los auditores externos):**
   - **Doctrina Base de la Cátedra:** **Carlos A. Slosse** (*Auditoría: Un Nuevo Enfoque Empresarial*). Estructura la auditoría en **3 Etapas**:
     1. **Etapa 1: Planificación** (dividida en **1.1 Planificación Preliminar / Estratégica** y **1.2 Planificación Detallada**).
     2. **Etapa 2: Ejecución** (obtención de elementos de juicio válidos y suficientes mediante Cédulas Sumarias / Hojas Llave y Cédulas Analíticas con marcas de auditoría).
     3. **Etapa 3: Conclusión e Informe** (evaluación de diferencias de auditoría frente a la Significatividad, revisión de hechos posteriores, Carta de Gerencia, Memorando Resumen y emisión del Informe del Auditor Independiente).
   - **Normas de Auditoría:** **Resolución Técnica N° 37 de la FACPCE (modificada por la RT 53)** y **NIA 315 / NIA 320 / NIA 450 / NIA 520 / NIA 701 (KAM)**.

---

## 3. Cifras Oficiales de los EECC Consolidados de Telecom S.A. (31/12/2025 vs. 31/12/2024)
- **Activo Corriente:** `$1.833.812M` (2025) vs. `$993.009M` (2024) (`+84,67%` | AV: `11,03%`).
  - Efectivo y equivalentes (Nota 4): `$469.050M` vs. `$418.745M` (`+12,01%`).
  - Inversiones corrientes (Nota 4): `$323.064M` vs. `$44.179M` (`+631,26%`).
  - **Créditos por ventas corrientes (Nota 5):** **`$799.188M`** vs. `$389.375M` (**`+105,25%`**).
    - *Desglose real Nota 5:* Créditos comunes brutos `$1.067.130M` + Otros corrientes `$2.977M` = `$1.070.107M` brutos corrientes, menos **Previsión para Deudores Incobrables (`NIIF 9`) de `$(270.919)M`** = **`$799.188M`** netos corrientes (más `$940M` no corrientes = **`$800.128M` totales**).
    - *Explicación técnica del salto del `+105,25%` vs. `+53,02%` en Ventas:* El 24/02/2025 Telecom adquirió **Telefónica Móviles Argentina S.A. (TMA)**. Al 31/12/2025 el Balance incorpora el **100% del stock de créditos de TMA (`$421.919M` a valor razonable bajo `NIIF 3`)**, mientras que el Estado de Resultados solo consolida **10 meses de ventas de TMA** (marzo a diciembre 2025), sumado al incremento de mora y al efecto `NIC 29`.
  - Otros créditos corrientes (Nota 6): `$159.969M` vs. `$58.875M`.
  - Inventarios (Nota 7): `$79.530M` vs. `$79.513M`.
  - Activos disponibles para la venta (Nota 3.j): `$3.011M` vs. `$2.322M`.
- **Activo No Corriente:** `$14.788.740M` (2025) vs. `$13.400.735M` (2024) (`+10,36%` | AV: `88,97%`).
  - Llaves de negocio (Nota 8): `$4.443.998M` vs. `$4.436.736M` (`26,73%` del Activo).
  - **PP&E / Bienes de Uso (Nota 9):** **`$6.789.118M`** vs. `$5.696.731M` (`+19,18%` | `40,84%` del Activo).
  - Activos intangibles (Nota 10): `$2.671.525M` vs. `$2.494.659M` (`+7,09%` | `16,07%` del Activo).
  - Activos por derechos de uso (Nota 11): `$727.288M` vs. `$646.324M`.
  - Propiedades de inversión (Nota 12): `$63.866M` vs. `$0`.
- **TOTAL DEL ACTIVO:** **`$16.622.552M`** (2025) vs. **`$14.393.744M`** (2024) (`+15,48%`).
- **Pasivo Corriente:** `$3.838.300M` vs. `$2.576.266M` (`+48,99%` | AV: `23,09%`). Incluye Cuentas por pagar Nota 13 (`$1.108.820M`), Préstamos corrientes Nota 14 (`$1.616.544M`), Remuneraciones Nota 15 (`$435.044M`), Provisiones corrientes Nota 20 (`$133.783M`).
- **Pasivo No Corriente:** `$5.800.944M` vs. `$4.536.551M` (`+27,87%` | AV: `34,90%`). Incluye Préstamos no corrientes Nota 14 (`$3.820.071M`; **Préstamos Totales = `$5.436.615M`**), Pasivo por Impuesto Diferido Nota 16 (`$1.179.974M`), Provisiones no corrientes Nota 20 (`$429.302M`).
- **TOTAL DEL PASIVO:** **`$9.639.244M`** (`57,99%` del Activo) vs. `$7.112.817M` (`49,42%`).
- **TOTAL PATRIMONIO NETO (ECP):** **`$6.983.308M`** (`42,01%` del Activo) vs. `$7.280.927M` (`50,58%`).
- **Estado de Resultados Consolidado (2025 vs. 2024 vs. 2023):**
  - **Ventas (Nota 24):** `$8.328.814M` (2025) vs. `$5.442.958M` (2024) (`+53,02%`) vs. `$5.898.611M` (2023).
  - **EBITDA (Utilidad antes de D, A & D):** `$2.525.535M` (`30,32%` s/Ventas) vs. `$1.532.381M` (`28,15%`).
  - **D, A & D de Activos Fijos e Intangibles (Nota 25):** `$(2.075.488)M` vs. `$(1.725.057)M`.
  - **Utilidad / (Pérdida) de la Explotación (EBIT):** `+$450.047M` (`+5,40%` s/Ventas) vs. `$(192.676)M` (`-3,54%`).
  - **Costos Financieros (Nota 26):** `$(748.840)M` en 2025 vs. `+$1.914.786M` en 2024 (más Otros resultados financieros netos `+$110.799M` vs. `+$190.451M`).
  - **Resultado antes de Impuesto a las Ganancias:** `$(191.736)M` vs. `+$1.897.467M`.
  - **Impuesto a las Ganancias (Nota 16):** beneficio de `+$46.432M` vs. cargo de `$(538.237)M`.
  - **Utilidad / (Pérdida) Neta del Ejercicio:** **`$(145.304)M`** (`-1,74%` s/Ventas) vs. `+$1.359.230M` (`+24,97%`).

---

## 4. Parámetros de Significatividad / Materialidad (Slosse / RT 37 / NIA 320 y 450)
1. **Significatividad (Importancia Relativa) Global de Planeación (`PM`):** **`$166.225 millones`** (`1,00%` sobre el Activo Total de `$16.622.552M`). Se utiliza el Activo Total (rango bibliográfico `0,5% a 2%`) porque Telecom es una industria capital-intensiva (`88,97%` Activo No Corriente) y porque el Resultado antes de Impuestos de 2025 fue negativo (`-$191.736M`), descartando la base de resultados (`5% a 10%`).
2. **Error Tolerable (`ET`) / Significatividad de Ejecución:** **`$83.112 millones`** (`50%` de la Significatividad Global). Se fija en el límite estricto del `50%` (rango bibliográfico `50% a 75%`) debido a que los **5 Cuestionarios de Control Interno** arrojaron **Nivel de Confianza BAJO (`15,38% a 23,33%`)** y **Riesgo de Control ALTO**, exigiendo mayor prudencia y muestras más amplias por rubro.
3. **Monto Mínimo para Acumular Ajustes / Umbral de Incorrecciones Claramente Insignificantes (`PAE` — NIA 450):** **`$8.311 millones`** (`5%` de la Significatividad Global). Todo desvío mayor a `$8.311M` se vuelca como asiento de ajuste obligatorio en la **Planilla de Diferencias de Auditoría / Ajustes Propuestos (`PAE`)** (`AJ-01` por `$28.340M`, `AJ-02` por `$18.800M`, `AJ-03` por `$19.850M` y `AJ-04` por `$11.240M`). La diferencia de tasa efectiva en Préstamos por `$3.120M` (`0,018%` del Activo) queda como partida menor no ajustada (`PAE-NC-01`).

---

## 5. Priorización de Rubros de Enfoque y Estructura de Programas (A a F)
1. **Los 3 Rubros de Enfoque Principal de la Cátedra (Prioridad Absoluta):**
   - **Bienes de Uso (PP&E — Nota 9):** `$6.789.118M` (`40,84%` del Activo). Programa A (PT-A).
   - **Activos Intangibles (Nota 10):** `$2.671.525M` (`16,07%` del Activo). Licencias ENACOM 5G/4G, Marcas INPI y Software NIC 38. Programa E (PT-E).
   - **Créditos por Ventas (Nota 5):** `$800.128M` (`+105,25%` interanual). Programa B (PT-B), íntimamente vinculado con **Ventas** (Programa D).
2. **Separación Estricta entre Intangibles y Llaves de Negocio:**
   - **Activos Intangibles (Nota 10):** Programa E / PT-E (`$2.671.525M`, con PT-E1 y PT-E2). ⭐ Prioritario.
   - **Llaves de Negocio (Nota 8):** Programa F / PT-F (`$4.443.998M`, con PT-F1 para el Test de Deterioro NIC 36 en la UGE Redes Personal `$12.774.695M`).
3. **Denominación Uniforme:**
   - Se utiliza **«Ventas»** (o «Ventas (Nota 24)») en reemplazo de «Ingresos por Servicios (Ventas Netas)».
4. **Navegación e Hipervínculos Cruzados:**
   - Todas las referencias a Programas o Papeles de Trabajo (ej. `PROGRAMA B (PT-B)`, `PT-C4`, `PT-B2`, `AJ-01`) en tablas, textos analíticos y ratios son botones interactivos que navegan directamente a la cédula sumaria o analítica correspondiente en la Etapa 2 con resaltado visual.

---

## 6. Duración del Encargo (3 Meses / 12 Semanas) y Presupuesto de Honorarios (Noviembre 2026)
1. **Duración Normalizada del Encargo:**
   - **3 Meses / 12 Semanas corridas (Diciembre 2025 a Febrero 2026)**.
   - **Fundamento Legal:** La Comisión Nacional de Valores (CNV) y la Ley General de Sociedades 19.550 fijan un plazo perentorio de presentación de balances auditados de **70 días corridos post-cierre** (vence entre el 10 y 12 de marzo). Un cronograma de 5 meses generaría incumplimiento normativo. Fecha de emisión del informe: **20 de febrero de 2026**.
   - **Mes 1 (Diciembre 2025):** Planificación, Trabajo Interino, relevamiento de controles (CCI), inventario físico al 31/12 y circularizaciones preliminares.
   - **Mes 2 (Enero 2026):** Ejecución sustantiva a fondo en campo, recepción de circularizaciones, corte B2B, recálculo de previsión NIIF 9 con TAACs.
   - **Mes 3 (Febrero 2026):** Cierre final, Test de Deterioro NIC 36 Llave UGE Personal, hechos posteriores, discusión PAE con Directorio y dictamen.
2. **Presupuesto de Tiempo y Costos (Aranceles CPCECABA Noviembre 2026 — Módulo $15.980):**
   - **1 Socio / Auditor Firmante:** 120 horas × 7 mód. ($111.860/h) = **$13.423.200** (16,64% del total).
   - **2 Auditores Senior (Grebe — Pisonero De Biase):** 400 horas × 5 mód. ($79.900/h) = **$31.960.000** (39,61% del total).
   - **2 Auditores Junior / Asistentes:** 700 horas × 2,5 mód. ($39.950/h) = **$27.965.000** (34,66% del total).
   - **Subtotal Horas Labor (1.220 hs):** **$73.348.200**.
   - **Gastos Directos de Auditoría (10% out-of-pocket):** **$7.334.820** (licencias TAACs, traslados a nodos y circularizaciones postales).
   - **HONORARIO TOTAL PROPUESTO:** **`$80.683.020`** (aprox. **USD 55.452** al TC BNA $1.455).
   - **Razonabilidad:** Representa apenas el **0,00096% de las Ventas Consolidadas** ($8.328.814M) y el **0,00048% del Activo Total** ($16.622.552M). Prudentemente austero en comparación con los USD 1,5M a 2,5M que factura una Big Four real para Telecom en NYSE.
---

## 7. Estado de Avance de los Papeles de Trabajo (Word y Plataforma Web)

1. **Bienes de Uso (PP&E — Programa A / PT-A):**
   - **Completado al 100% en Word y Web.**
   - Cédula Sumaria (Tabla 28 en Word): Saldo s/ Libros `$6.789.118M`, Ajuste Haber `$28.340M`, Saldo Auditado `$6.760.778M`.
   - Hallazgo Material: **Ajuste AJ-01 por `$28.340M`** (baja de centrales analógicas de cobre obsoletas `$21.450M` y nodos vandalizados `$6.890M` bajo NIC 16 y NIC 36).
   - Pruebas Globales: Depreciación oficial del ejercicio `$1.533.091M` (Nota 9 y Nota 25 página 78).

2. **Activos Intangibles (Programa E / PT-E):**
   - **Completado al 100% en Word y Web.**
   - Cédula Sumaria (Tabla 29 en Word): `$2.671.525M` (1.3.01 Espectro `$1.985.420M` y 1.3.02 Software `$686.105M`), Ajustes `$0`, Saldo Auditado `$2.671.525M`.
   - Cédula Analítica PT-E1 (Tabla 30): 100% de licencias de espectro 4G/5G con resoluciones ENACOM y títulos marcarios INPI. Sin litigios ni desvíos.
   - Cédula Analítica PT-E2:
     - Parte 1 (Tabla 31): 6 criterios de activación de NIC 38.57 para proyectos de software capitalizados en SAP PS y Jira (`$285.355M` / 158.800 hs).
     - Parte 2 (Tabla 32): Prueba de corte de gastos de mantenimiento de TI (`$42.500M` en subcuentas 5.1.04.12 y 5.1.04.18) imputados correctamente a resultados.
     - Parte 3: Prueba Global de Amortizaciones (Nota 25 pág. 78: `$234.722M` de amortización oficial).
     - Parte 4: Prueba Global de Valor Residual (`$2.671.525M` conciliado con Nota 10).
   - **Resultado del Rubro:** Conforme y validado, sin ajustes propuestos.

3. **Créditos por Ventas (Programa B / PT-B):**
   - **Completado al 100% en Word y Web.**
   - Saldo al 31/12/2025: **`$800.128M`** netos (`$799.188M` corrientes + `$940M` no corrientes en Nota 5).
   - Cédula Sumaria (Tabla 34 en Word): Saldo s/ Libros `$800.128M`, Ajuste Debe `$14.620M`, Ajuste Haber `$24.030M` (Ajuste Neto `-$9.410M`), Saldo Auditado **`$790.718M`**.
   - Cédula Analítica PT-B1 (Tabla 35): Circularización directa (NIA 505) a 65 grandes cuentas corporativas B2B (54 conformes por `$184.620M` sin discrepancias), procedimientos alternativos de cobranzas posteriores en extractos bancarios de enero 2026 sobre las 11 restantes (`$32.480M` 100% cobrados) y validación del PPA bajo NIIF 3 de la cartera incorporada de TMA (`$421.919M` a valor razonable inicial).
   - Cédula Analítica PT-B2 (Tabla 36): Prueba de corte B2B e interfaces de cobro. Hallazgo de 8 hitos completados en diciembre 2025 no facturados (`$14.620M`) y cobranzas en tránsito recaudadas por Rapipago/Pago Fácil el 30-31/12 no acreditadas en clientes (`$4.180M`). **Ajuste AJ-02 por `$18.800M`** formulado a la Gerencia.
   - Cédula Analítica PT-B3 (Tabla 37): Reproceso con TAACs del 100% del padrón unificado de deudores (`$1.071.047M` brutos) y recálculo de la matriz de pérdida crediticia esperada (ECL NIIF 9). Detección de defecto de provisionamiento por exclusión indebida de cartera migrada de TMA con mora > 180 días (`$24.812M` excluida en SAP FSCM). **Ajuste AJ-03 por `$19.850M`** formulado a la Gerencia.
   - Evaluación NIA 450: Desvío acumulado en el rubro de `-$9.410M` supera el umbral PAE (`$8.311M`), pero representa el 11,3% del Error Tolerable (`$83.112M`) y el 5,7% de la Significatividad Global (`$166.225M`), concluyendo el rubro razonable y conforme.

4. **Próximo Rubro a Desarrollar: Ventas (Programa D / PT-D) o Préstamos (Programa C / PT-C):**
   - **Ventas (Programa D / PT-D):** `$8.328.814M` (Nota 24). Vinculado con PT-B2 (devengamiento de ingresos B2B `+$14.620M`) y prueba global de facturación de abonados (Parque × ARPU), más reclasificación AJ-04 de servicios de terceros en Flow (`$11.240M` NIIF 15 agente vs. principal).
   - **Préstamos (Programa C / PT-C):** `$5.436.615M` totales (`$1.616.544M` corrientes + `$3.820.071M` no corrientes en Nota 14). Circularización a bancos y Caja de Valores, covenants de endeudamiento financiero y valuación al tipo de cambio de cierre.

---

## 8. Funcionalidades Interactivas de la Plataforma Web
- **Persistencia en LocalStorage:**
  - `audiia_pasos_narrativos_v1`: notas y personalizaciones de pasos ejecutados, defensas orales y fundamentaciones. Soporta saltos de línea (`whitespace-pre-line`) y formato enriquecido (negrita `**` y subrayado `<u>`).
  - `audiia_conclusiones_v1`: conclusiones editadas del auditor por rubro.
  - `audiia_zoom_level`: zoom configurado por el usuario con retención persistente.
- **Glosario de Marcas Inteligente por Rubro:** Muestra en Cédula Sumaria y en el pie del legajo las marcas específicas del rubro activo, adaptando los ejemplos en paréntesis (ENACOM/INPI para Intangibles, proveedores de fibra para PP&E) y ocultando marcas no aplicables (`t` y `h` exclusivas de Intangibles).
- **Ruta del Documento Word Activo del Usuario:**
  - `C:\Users\jelim\Desktop\AUD 2026\AE 4\AE 4 - Planificación Detallada - copia (2).docx`.
