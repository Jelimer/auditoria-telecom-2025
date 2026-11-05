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
  - `docs/PLANIFICACION PRELIMINAR DE AUDITORIA TELECOM 2026.docx` (Documento Word original elaborado por los alumnos para la Etapa 1).
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
