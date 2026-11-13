# CONTEXTO MAESTRO DEL PROYECTO DE AUDITORÍA EXTERNA — TELECOM ARGENTINA S.A. (EECC 2025)

> **Instrucción para cualquier agente / nuevo chat de Antigravity:**
> Al leer este archivo (`@CONTEXTO_AUDITORIA.md`), debes adoptar inmediatamente todas las reglas, cifras, marcos normativos y decisiones de diseño acordadas con el usuario para este proyecto universitario. **Todas las respuestas y la interfaz deben estar siempre 100% en español.**

---

## 1. Datos Generales de la Cátedra y del Proyecto
- **Universidad y Cátedra:** Universidad de la Cuenca del Plata (U.C.P.) — Trabajo Práctico Integral de Auditoría Externa.
- **Autores / Equipo de Auditoría:** **Grebe — Pisonero De Biase**.
- **Ente Auditado:** **Telecom Argentina S.A.** (`CUIT N° 30-63945373-8` — **Domicilio Legal oficial:** `Gral. Hornos 690, Ciudad Autónoma de Buenos Aires`). *Nota: no usar `Av. Alicia Moreau de Justo 50`.*
- **Estados Contables Auditados:** **Estados Financieros Consolidados** correspondientes al ejercicio finalizado el **31 de diciembre de 2025** (comparativos con **2024** y **2023**), expresados en **millones de pesos constantes** (Nota 1.d). **IMPORTANTE:** Siempre se utilizan los **Estados Contables Consolidados**, nunca los individuales.
- **Archivos Fuente Locales en el Proyecto (`docs/` y carpeta AE 4):**
  - `docs/Estados Financieros 2025 Telecom-Original.pdf` y `Estados Financieros 2025 Telecom - Anotaciones OCR.pdf` (EECC Consolidados al 31/12/2025 e Informe real de los Auditores Independientes en pp. 174–179).
  - `docs/PLANIFICACION PRELIMINAR DE AUDITORIA TELECOM 2026.docx` (Documento Word original de la Etapa 1.1 Preliminar).
  - `C:\Users\jelim\Desktop\AUD 2026\AE 4\AE 4 - Planificación Detallada - copia (2) - Actualizado.docx` (**Documento Maestro Activo oficial de la AE 4**; incluye Etapa 1, Programas PT-A, PT-E, PT-B y Planilla PAE al cierre). **REGLA:** No editar el `.docx` directamente salvo indicación expresa del usuario; cuando solicite texto para Word, entregarlo listo para copiar/pegar.
- **Repositorio GitHub y Despliegue Automático en Vercel:**
  - Repositorio remoto (`origin`): `https://github.com/Jelimer/auditoria-telecom-2025.git` (rama `main`).
  - Cada vez que se realicen cambios confirmados en el código de la app, verificar con `npm run build`, hacer `git add`, `git commit` y `git push origin main` para que **Vercel** despliegue automáticamente la última versión web.

---

## 2. Separación Estricta de Marcos Normativos (¡Regla Crítica!)
1. **Marco Contable aplicado por Telecom Argentina S.A. (preparación de sus EECC):**
   - Telecom cotiza en la **CNV (Argentina)** y en la **SEC / NYSE (EE.UU.)**, por lo que confecciona sus Estados Financieros Consolidados **exclusivamente bajo Normas de contabilidad NIIF emitidas por el IASB** (en Argentina por `RT N° 26` FACPCE).
   - **PROHIBIDO mencionar `RT 54 (NUA)` como norma contable de Telecom.**
   - Normas NIIF/NIC clave del caso:
     - **`NIC 29`:** Reexpresión en moneda homogénea (ajuste por inflación por IPC).
     - **`NIIF 3`:** Combinaciones de negocios — Adquisición del `99,999625%` de **Telefónica Móviles Argentina S.A. (TMA)** el **24/02/2025** por `US$ 1.245M` (`$1.660.045M` ctes.: `$167.887M` deuda asumida + `$1.492.158M` en efectivo). `PPA` a valor razonable en Nota 29: activos netos identificados **`$1.479.318M`** (`+$1.332.961M` PP&E, `+$274.183M` Intangibles, `+$421.919M` Créditos por ventas, `+$161.061M` Derechos de uso, `+$71.209M` Propiedades de inversión, entre otros activos y pasivos asumidos) + **Llave de negocio residual TMA `+$12.840M`** (Nota 8 y 29).
     - **`NIIF 9`:** Instrumentos financieros y modelo de **Pérdida Crediticia Esperada (ECL)** para la Previsión de Deudores Incobrables.
     - **`NIIF 15`:** Ingresos de actividades ordinarias procedentes de contratos con clientes (evaluación de Principal vs. Agente en servicios de terceros en Flow y corte B2B).
     - **`NIIF 16`:** Arrendamientos (Activos por derechos de uso en Nota 11: `$727.288M` y Pasivos por arrendamientos en Nota 18).
     - **`NIC 16`:** Propiedad, Planta y Equipo (`PP&E` en Nota 9: `$6.789.118M` netos).
     - **`NIC 36`:** Deterioro del valor de los activos (*Test de Impairment* de la Llave de Negocio en Nota 8: `$4.443.998M` y UGE Redes Personal: `$12.774.695M` con headroom `+$334.966M`).
     - **`NIC 37`:** Provisiones y Contingencias (Nota 20: `$563.085M` totales).
     - **`NIC 38`:** Activos Intangibles (Nota 10: `$2.671.525M` — licencias de espectro 4G/5G ENACOM, marcas y software).
2. **Marco Doctrinario y Profesional de Auditoría (aplicado por los auditores externos):**
   - **Doctrina Base de la Cátedra:** **Carlos A. Slosse** (*Auditoría: Un Nuevo Enfoque Empresarial*, 4ta Ed.). Estructura la auditoría en **3 Etapas**:
     1. **Etapa 1: Planificación** (1A Conocimiento del Ente, 1B Control Interno `CCI-01..05`, 1C Revisión Analítica H/V y Ratios, 1D Planificación Detallada y Materialidad).
     2. **Etapa 2: Ejecución** (obtención de elementos de juicio válidos y suficientes mediante Cédulas Sumarias / Analíticas `PT-A` a `PT-F` y Planilla PAE).
     3. **Etapa 3: Conclusión e Informe** (secuencia cronológica de cierre: `1. Carta de Control Interno (NIA 265)` → `2. Memorando Resumen (NIA 450/560/570)` → `3. Carta de Representación (NIA 580)` → `4. Informe de Auditoría Independiente`).
   - **Normas de Auditoría aplicables al Informe Final de Telecom Argentina S.A.:**
     - Al tratarse de una entidad sujeta al régimen de **oferta pública de la CNV** bajo NIIF completas (`RT N° 26`), el **Informe de Auditoría Emitido por los Auditores Independientes** se rige obligatoriamente por las **Normas Internacionales de Auditoría (`NIAs`) adoptadas en Argentina mediante la Resolución Técnica N° 32 de la FACPCE** (aprobadas por el IAASB), articuladas en el TP con el enfoque metodológico de Carlos Slosse (y diferenciadas en clase de la `RT N° 37 / RT N° 53` aplicable a entes locales).
     - **Elementos obligatorios del Informe real Telecom 2025 bajo `NIAs / RT N° 32`:** (I.1) Opinión sobre EECC consolidados bajo NIIF del IASB; (I.2) Fundamento citando `NIAs / RT N° 32` IAASB; (I.3) Sección autónoma **Independencia** (**Código del IESBA** para entidades de interés público + Código Local CABA); (I.4) **Cuestiones Clave de Auditoría (`KAM — NIA 701`)**; (I.5) **Otra Información (`NIA 720`: *Memoria Anual Integrada y Reseña Informativa*)**; (I.6) Responsabilidades del Directorio y del **Comité de Auditoría**; (I.7) Responsabilidades de los auditores incl. empresa en funcionamiento (`NIA 570`) y **Auditoría de Grupos (`NIA 600`)**; (II) Otros requerimientos legales (`Inventarios y Balances`, LGS 19.550, ERP SAP CNV, **deuda devengada SIPA al 31/12/2025: `$33.699.737.311`**, **art. 21° inc. b, Cap. III, Secc. VI, Tít. II Normas CNV** s/ relación honorarios 100% auditoría, y PLA/FT UIF Res. 420/11).
3. **Distinción obligatoria entre las dos Cartas de Etapa 3 (Slosse Cap. 27 Sec. 6 y 8 + NIAs 265 y 580):**
   - **NO son una sola carta:**
     - **Carta de Recomendaciones de Control Interno (`NIA 265` — `LC-01`, `12/02/2026`):** la emite el **Auditor → Directorio / Comité de Auditoría / Gerencia** comunicando debilidades detectadas y sugerencias de mejora (p. ej. falla de circuito `CCI-02 Preg. 22-23` origen de `AJ-01`).
     - **Carta de Representación de la Dirección / Carta de Gerencia (`NIA 580` — `LC-03`, `20/02/2026`):** la emite el **Cliente (CEO/CFO/Presidente) → Auditor** con fecha igual o inmediatamente anterior al dictamen; confirma por escrito integridad de registros/actas, estimaciones (`NIA 540`), contingencias (`NIA 501`), partes relacionadas (`NIA 550`), hechos posteriores (`NIA 560`) y evaluación de incorrecciones no ajustadas (`NIA 450.14`). Su falta obliga a la abstención de opinión (`NIA 580`).

---

## 3. Cifras Oficiales de los EECC Consolidados de Telecom S.A. (31/12/2025 vs. 31/12/2024)
- **Activo Corriente:** `$1.833.812M` (2025) vs. `$993.009M` (2024) (`+84,67%` | AV: `11,03%`).
  - Efectivo y equivalentes (Nota 4): `$469.050M` vs. `$418.745M` (`+12,01%`).
  - Inversiones corrientes (Nota 4): `$323.064M` vs. `$44.179M` (`+631,26%`).
  - **Créditos por ventas corrientes (Nota 5):** **`$799.188M`** vs. `$389.375M` (**`+105,25%`**).
    - *Desglose real Nota 5:* Créditos comunes brutos `$1.067.130M` + Otros corrientes `$2.977M` = `$1.070.107M` brutos corrientes, menos **Previsión para Deudores Incobrables (`NIIF 9`) de `$(270.919)M`** = **`$799.188M`** netos corrientes (más `$940M` no corrientes = **`$800.128M` totales**).
    - *Explicación técnica del salto del `+105,25%` vs. `+53,02%` en Ventas:* El 24/02/2025 Telecom adquirió **Telefónica Móviles Argentina S.A. (TMA)**. Al 31/12/2025 el Balance incorpora el **100% del stock de créditos de TMA (`$421.919M` a valor razonable bajo `NIIF 3`)**, mientras que el Estado de Resultados consolida **10 meses de ventas de TMA** (marzo a diciembre 2025), sumado al efecto `NIC 29`.
  - Otros créditos corrientes (Nota 6): `$159.969M` vs. `$58.875M`.
  - Inventarios (Nota 7): `$79.530M` vs. `$79.513M`.
  - Activos disponibles para la venta (Nota 3.j): `$3.011M` vs. `$2.322M`.
- **Activo No Corriente:** `$14.788.740M` (2025) vs. `$13.400.735M` (2024) (`+10,36%` | AV: `88,97%`).
  - Llaves de negocio (Nota 8): `$4.443.998M` vs. `$4.436.736M` (`26,73%` del Activo).
  - **PP&E / Bienes de Uso (Nota 9):** **`$6.789.118M`** netos de previsiones (`$6.859.618M` valor residual antes de previsiones, menos `$(42.217)M` prev. materiales y `$(28.283)M` prev. desvalorización PP&E) vs. `$5.696.731M` (`+19,18%` | `40,84%` del Activo).
    - *Desglose Nota 9 (mayor a menor sobre `$6.859.618M`):* Red fija y transporte (`$2.856.173M` — `41,64%`; cables/fibra óptica troncal), Inmuebles (`$1.193.638M` — `17,40%`), Materiales (`$640.820M` — `9,34%`), Equipos de computación (`$432.689M` — `6,31%`), Acceso Red celular (`$425.219M` — `6,20%`), Obras en curso (`$337.494M` — `4,92%`), Equipos de conmutación (`$251.564M` — `3,67%`), Equipos de fuerza e inst. (`$221.402M` — `3,23%`), Infraestructura Soporte de Antenas (`$215.643M` — `3,14%`), Bienes en comodato (`$158.898M` — `2,32%`), Rodados (`$76.639M` — `1,12%`), Diversos (`$31.762M` — `0,46%`) y Maquinarias/herramientas (`$17.677M` — `0,26%`).
  - Activos intangibles (Nota 10): `$2.671.525M` vs. `$2.494.659M` (`+7,09%` | `16,07%` del Activo).
  - Activos por derechos de uso (Nota 11): `$727.288M` vs. `$646.324M`.
  - Propiedades de inversión (Nota 12): `$63.866M` vs. `$0`.
- **TOTAL DEL ACTIVO:** **`$16.622.552M`** (2025) vs. **`$14.393.744M`** (2024) (`+15,48%`).
- **Pasivo Corriente:** `$3.838.300M` vs. `$2.576.266M` (`+48,99%` | AV: `23,09%`). Incluye Cuentas por pagar Nota 13 (`$1.108.820M`), Préstamos corrientes Nota 14 (`$1.616.544M`), Remuneraciones Nota 15 (`$435.044M`), Provisiones corrientes Nota 20 (`$133.783M`).
- **Pasivo No Corriente:** `$5.800.944M` vs. `$4.536.551M` (`+27,87%` | AV: `34,90%`). Incluye Préstamos no corrientes Nota 14 (`$3.820.071M`; **Préstamos Totales = `$5.436.615M`**), Pasivo por Impuesto Diferido Nota 16 (`$1.179.974M`), Provisiones no corrientes Nota 20 (`$429.302M`; **Provisiones totales Nota 20 = `$563.085M`**).
- **TOTAL DEL PASIVO:** **`$9.639.244M`** (`57,99%` del Activo) vs. `$7.112.817M` (`49,42%`).
- **TOTAL PATRIMONIO NETO (ECP):** **`$6.983.308M`** (`42,01%` del Activo) vs. `$7.280.927M` (`50,58%`).
- **Estado de Resultados Consolidado (2025 vs. 2024 vs. 2023):**
  - **Ventas (Nota 24):** `$8.328.814M` (2025) vs. `$5.442.958M` (2024) (`+53,02%`) vs. `$5.898.611M` (2023).
  - **EBITDA (Utilidad antes de D, A & D):** `$2.525.535M` (`30,32%` s/Ventas) vs. `$1.532.381M` (`28,15%`). Covenants: Repago neto `1,84x` EBITDA (`2,15x` bruto) y Cobertura EBITDA / Intereses puros Nota 26 (`$386.126M`) = `6,54x` (`1,17x` s/EBIT).
  - **D, A & D de Activos Fijos e Intangibles (Nota 25 pág. 80):** `$(2.075.488)M` vs. `$(1.725.057)M` (incluye PP&E `$1.533.091M`, Intangibles `$234.722M` y Derechos de Uso).
  - **Utilidad / (Pérdida) de la Explotación (EBIT):** `+$450.047M` (`+5,40%` s/Ventas) vs. `$(192.676)M` (`-3,54%`).
  - **Costos Financieros (Nota 26):** `$(748.840)M` en 2025 vs. `+$1.914.786M` en 2024.
  - **Resultado antes de Impuesto a las Ganancias:** `$(191.736)M` vs. `+$1.897.467M`.
  - **Impuesto a las Ganancias (Nota 16):** beneficio de `+$46.432M` vs. cargo de `$(538.237)M`.
  - **Utilidad / (Pérdida) Neta del Ejercicio:** **`$(145.304)M`** (`-1,74%` s/Ventas) vs. `+$1.359.230M` (`+24,97%`).

---

## 4. Parámetros de Significatividad / Materialidad y Planilla PAE Unificada (`NIA 320` y `NIA 450`)
1. **Materialidad / Significatividad Global de Planeación (`PM`):** **`$166.225 millones`** (`1,00%` sobre el Activo Total de `$16.622.552M`).
2. **Error Tolerable (`ET`) / Significatividad de Ejecución:** **`$83.112 millones`** (`50%` de `PM`, adoptado con prudencia por Riesgo de Control ALTO en los componentes críticos `CCI-01 Archivo Documental 38,46%` [10/26] y `CCI-05 Sistema Tecnológico 47,62%` [10/21], frente a `CCI-02 Sistema Contable 72,00% RC Medio` [18/25 según Matriz Word y PT-B], `CCI-03 Presupuestos 77,78% RC Bajo` [21/27] y `CCI-04 Operativo 80,00% RC Bajo` [24/30]).
3. **Umbral Mínimo para Acumular Ajustes (`PAE` — NIA 450):** **`$8.311 millones`** (`5%` de `PM`).
4. **Planilla de Ajustes Propuestos (PAE — Únicas partidas vigentes, sin `AJ-02` ni `AJ-03`):**
   - **`AJ-01` (`$28.340M` — `PT-A1 / PT-A4`, Bienes de Uso):** único ajuste patrimonial relevante dentro de los 3 rubros prioritarios de la cátedra (`$21.450M` centrales analógicas de cobre obsoletas en `PT-A4` + `$6.890M` fibra óptica/nodos vandalizados en `PT-A1`), acumulable bajo NIA 450; lleva el saldo de `$6.789.118M` a **`$6.760.778M`**. Representa el **`17,05%` de PM (`$166.225M`)** y el **`34,10%` de ET (`$83.112M`)**.
   - **`AJ-04` (`$11.240M` — `PT-D3`, Ventas/Costos Flow — alcance ampliado web):** reclasificación por exposición NIIF 15 Agente vs. Principal en suscripciones de terceros en Flow (efecto neto `$0` en Patrimonio Neto y Resultado del Ejercicio). Sumado bruto con `AJ-01` da `$39.580M` (`23,81%` de PM).
   - **`PAE-NC-01` (`$7.570M` — `PT-C3 / PT-O1`, por debajo del umbral PAE `$8.311M`):** partidas menores no computables (`$4.450M` vacaciones acumuladas TI 5G + `$3.120M` diferencia menor TIE Préstamos).
   - **Impacto en la Opinión:** Con la registración de `AJ-01` (y `AJ-04`), la opinión es **Favorable sin Salvedades (Limpia)**. Aun si la Dirección no los registrara, el desvío residual (`$28.340M` patrimonial / `$39.580M` bruto) permanece por debajo de `ET` y `PM`, por lo que la opinión sigue siendo **Favorable sin Salvedades** (dejando constancia en **Carta de Representación — NIA 450.14** y comunicación en **Carta de Control Interno — `CCI-02` / `NIA 265`**).

---

## 5. Priorización de Rubros de Enfoque y Estructura de Programas (A a F)
1. **Los 3 Rubros de Enfoque Principal de la Cátedra (Prioridad Absoluta):**
   - **Bienes de Uso (PP&E — Nota 9):** `$6.789.118M` (`40,84%` del Activo). Programa A (`PT-A`).
   - **Activos Intangibles (Nota 10):** `$2.671.525M` (`16,07%` del Activo). Licencias ENACOM 5G/4G, Marcas INPI y Software NIC 38. Programa E (`PT-E`).
   - **Créditos por Ventas (Nota 5):** `$800.128M` (`+105,25%` interanual). Programa B (`PT-B`).
2. **Alcance Ampliado Web y Separación de Llaves de Negocio:**
   - **Préstamos (`PT-C`, Nota 14):** `$5.436.615M`.
   - **Ventas (`PT-D`, Nota 24):** `$8.328.814M` (incluye reclasificación `AJ-04` en `PT-D3`).
   - **Llaves de Negocio (`PT-F`, Nota 8):** `$4.443.998M` (`PT-F1` Test de Deterioro NIC 36 en UGE Redes Personal `$12.774.695M`). *Nota:* en Etapa 1D y Web se usa la denominación uniforme **«Ventas»**.
3. **Navegación e Hipervínculos Cruzados:**
   - Referencias a Cédulas, CCIs, Ratios y Planilla PAE (`pt-a1`, `pt-a4`, `pt-e1`, `pt-e2`, `pt-b1..b3`, `pt-d3`, `pt-f1`, `sec-pae`, `cci-1..cci-5`) funcionan como botones interactivos entre Etapa 1, Etapa 2 y Etapa 3.

---

## 6. Duración del Encargo (3 Meses / 12 Semanas) y Presupuesto de Honorarios (Noviembre 2026)
1. **Duración Normalizada del Encargo:** **3 Meses / 12 Semanas corridas (Diciembre 2025 a Febrero 2026)**, atendiendo el plazo legal CNV de 70 días corridos post-cierre. **Fechas de Cierre Etapa 3:** `12/02/2026` Carta CI (`LC-01`) → `18/02/2026` Memorando (`LC-02`) → `20/02/2026` Carta de Representación (`LC-03`) e Informe Final del Auditor Independiente.
2. **Presupuesto de Tiempo y Costos (1.220 hs — Módulo CPCECABA `$15.980`):**
   - **1 Socio:** 120 hs × 7 mód. (`$111.860/h`) = **`$13.423.200`**.
   - **2 Auditores Senior (Grebe — Pisonero De Biase):** 400 hs × 5 mód. (`$79.900/h`) = **`$31.960.000`**.
   - **2 Auditores Junior:** 700 hs × 2,5 mód. (`$39.950/h`) = **`$27.965.000`**.
   - **Subtotal Labor:** `$73.348.200` + **10% Gastos Directos:** `$7.334.820` = **HONORARIO TOTAL: `$80.683.020`** (`0,00096%` de Ventas; informado al 100% como servicios de auditoría externa en cumplimiento del Art. 21° inc. b CNV).

---

## 7. Estado de Avance de los Papeles de Trabajo (Word y Plataforma Web)
1. **Bienes de Uso (PP&E — Programa A / `PT-A`):**
   - Completado al 100% en Word y Web (`$6.789.118M` s/libros → `AJ-01 $28.340M` → **`$6.760.778M`** auditado).
   - Pruebas Globales `PT-A4`: Amortizaciones `$1.533.091M` (Nota 9 pág. 50) y Valor Residual `$6.859.618M` antes de previsiones (`$6.789.118M` neto), desvío matemático `$0`.
2. **Activos Intangibles (Programa E / `PT-E`):**
   - Completado al 100% en Word y Web (`$2.671.525M` s/libros, Ajustes `$0`, Saldo Auditado `$2.671.525M`).
   - Prueba Global de Amortizaciones `PT-E2`: **`$234.722M`** (Nota 10 pág. 52 y Nota 25 pág. 80), desvío `$0`. Prueba Global de Valor Residual: `$2.671.525M`, desvío `$0`.
3. **Créditos por Ventas (Programa B / `PT-B`):**
   - Completado al 100% en Word y Web — **Enfoque Conforme (`$800.128M` netos, Ajustes `$0`)**.
   - `PT-B1` (circularización 65 clientes B2B + cobranzas posteriores enero 2026), `PT-B2` (corte B2B y conciliación recaudadores externos al 31/12/2025 por `$36.890M`, dif. `$0`), `PT-B3` (reproceso TAACs 100% matriz `$1.071.047M` brutos y Previsión NIIF 9 `$(270.919)M` cubriendo 100% mora > 180 días, dif. `$0`).
4. **Etapa 2 Planilla PAE + Etapa 3 Completa (`NIAs / RT N° 32`):**
   - Completada e integrada en Web (y cierre PAE en Word), con simulador en vivo para `AJ-01` y `AJ-04` que explica en rojo qué cambia en el Informe y legajo cuando no se contabilizan.

---

## 8. Funcionalidades Interactivas de la Plataforma Web
- **Persistencia en LocalStorage:**
  - `audiia_cci_v6`: respuestas editables de los 5 Cuestionarios de Control Interno alineadas al Word AE 4 (conectadas en vivo con Dashboard, Síntesis de Exposición 1B, Etapa 3 Carta CI y Resumen Integral).
  - `audiia_ajustes_v3`: estado de aceptación/rechazo de los 2 ajustes PAE vigentes (`AJ-01` y `AJ-04`) + partida menor `PAE-NC-01`, sincronizado con la barra roja de impacto en Etapa 3, Dashboard y Resumen Integral.
  - `audiia_equipo_v2`, `audiia_pasos_narrativos_v1`, `audiia_conclusiones_v1`, `audiia_guion_oral_v1`, `audiia_ente_custom_v1`, `audiia_plan_detallada_custom_v1` y `audiia_zoom_level`.
- **Menú Lateral (Sidebar):** flecha independiente por pestaña para encoger/desplegar subtemas sin forzar navegación hacia esa vista.
- **Ventanas Flotantes de Normas (`NormaTooltip.jsx`):** diccionario unificado de NIAs/NIIF/NIC/RT (`NIA 220, 240, 250, 260, 265, 300, 315, 320, 330, 450, 500, 501, 505, 520, 540, 560, 570, 580, 600, 620, 700, 701, 705, 720`, `NIC 16/29/36/38`, `NIIF 3/9/15/16`, `RT 32/37/53`) integrado tanto en badges de encabezado (`1A` NIA 315 / NIA 250 / NIA 240, `1D` NIA 320 / NIA 300, `Etapa 3` e `Hoja Resumen`) como en textos enriquecidos (`renderFormattedRichText`).
- **Bloques Editables Enriquecidos (`RichTextBox.jsx`):** editor WYSIWYG compartido con **Negrita (`B`)**, *Cursiva (`I`)*, <u>Subrayado (`U`)</u>, limpiar formato y restaurar original, utilizado en el Guion Oral (`audiia_guion_oral_v1`), el encabezado editable de **Marco Regulatorio NIA 250 (`1.1.C`)** (`audiia_ente_custom_v1`) y el banner + 3 tarjetas de **Materialidad (`1.4`)** (`audiia_plan_detallada_custom_v1`).
- **Distinción Doctrinaria COSO (`1A`) vs. Cuestionarios CCI (`1B`):** los 5 componentes COSO (`Ambiente de Control`, `Evaluación de Riesgos`, `Actividades de Control`, `Sistemas de Información y Comunicación`, `Monitoreo y Supervisión`) son 5 pilares transversales del Control Interno y **no** coinciden 1-a-1 con las 5 encuestas operativas (`CCI-01 Archivo`, `CCI-02 Contable`, `CCI-03 Presupuestos`, `CCI-04 Operativo`, `CCI-05 TIC`), sino que cada cuestionario CCI evalúa controles de varios pilares COSO en simultáneo.
- **Cuadro Síntesis para Exposición Oral (`1B. Control Interno` — `#sec-sintesis-exposicion`):** tabla ejecutiva de Fortalezas, Debilidades e Impacto de los 5 CCI con porcentajes NC/RC en vivo y botón **«Modo Exposición»** para ocultar/expandir las 129 preguntas durante la defensa.
- **Guion Hilo Conductor para Clase (`Hoja Resumen` — pestaña `guion` / sidebar `4.0`):** narrativa didáctica editable en 7 eslabones (`1A → 1B → 1C → 1D → Etapa 2 → PAE → Etapa 3`) con barra de formato (**Negrita**, *Cursiva*, <u>Subrayado</u>, Limpiar formato y Restaurar), persistencia en `audiia_guion_oral_v1`, «Qué hicimos», «Por qué conecta», guion oral y defensa de preguntas frecuentes de cátedra.
- **Glosario de Marcas Inteligente por Rubro:** adapta ejemplos y oculta marcas no aplicables (`t` y `h` exclusivas de Intangibles).
- **Ruta del Documento Word Activo del Usuario:** `C:\Users\jelim\Desktop\AUD 2026\AE 4\AE 4 - Planificación Detallada - copia (2) - Actualizado.docx`.
