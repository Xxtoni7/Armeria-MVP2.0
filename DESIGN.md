---
name: Armeria EDL
description: Equipamiento elegido y trámites claros, con una experiencia de compra responsable.
colors:
  ink: "#171717"
  ink-soft: "#252525"
  paper: "#f6f5f1"
  white: "#ffffff"
  yellow: "#f3bd16"
  yellow-light: "#fff0b7"
  blue: "#174e68"
  green: "#217557"
  muted: "#686860"
  line: "#d9d7d0"
typography:
  display:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "clamp(2.625rem, 5.4vw, 4.75rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "clamp(1.875rem, 3.1vw, 2.9375rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "11px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.15em"
rounded:
  sharp: "2px"
  circle: "50%"
spacing:
  xs: "8px"
  sm: "16px"
  md: "30px"
  lg: "55px"
  xl: "74px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    typography: "{typography.body}"
    rounded: "{rounded.sharp}"
    padding: "0 20px"
    height: "47px"
  button-accent:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sharp}"
    padding: "0 20px"
    height: "47px"
  product-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sharp}"
    padding: "0"
  search-field:
    backgroundColor: "#f0f0ed"
    textColor: "{colors.ink}"
    rounded: "24px"
    padding: "0 17px"
    height: "46px"
---

# Design System: Armeria EDL

## Overview

**Creative North Star: "La ficha de confianza"**

Armeria EDL usa la lógica visual de una ficha de producto y de un proceso documentado: la compra se ve clara, la información está ordenada y cada paso tiene un lugar. La experiencia combina papel cálido, tinta oscura, amarillo de señalización y azul institucional para comunicar confianza sin caer en una estética militar agresiva.

La interfaz es directa y especializada. El catálogo ocupa el centro de la experiencia, mientras que la gestoría documental aparece como una segunda puerta clara y complementaria. La composición mezcla bandas de navegación, superficies planas, diagonales gráficas y diagramas lineales propios de una ficha técnica.

**Key Characteristics:**
- Tinta oscura y amarillo de señalización usados con intención.
- Tipografía sans de alta legibilidad con etiquetas condensadas.
- Fotografía sustituible por geometría de producto dibujada en SVG hasta contar con assets definitivos.
- Bordes finos, sombras reservadas y tarjetas de catálogo nítidas.

## Colors

La paleta se comporta como señalética de un comercio especializado: el amarillo indica acción o atención, el azul sostiene orientación institucional y la tinta crea contraste estable.

### Primary
- **Amarillo señal EDL** (#f3bd16): llamadas a la acción, etiquetas, estados seleccionados y momentos de atención.
- **Azul acompañamiento** (#174e68): orientación, enlaces activos y mensajes asociados a documentación.

### Secondary
- **Verde confirmación** (#217557): estados de éxito y confirmaciones del proceso.

### Neutral
- **Tinta EDL** (#171717): encabezados, navegación, fondos de contraste y acciones primarias.
- **Tinta suave** (#252525): superficies oscuras y gráficos de producto.
- **Papel cálido** (#f6f5f1): fondo principal de lectura.
- **Blanco de ficha** (#ffffff): tarjetas, formularios y superficies de interacción.
- **Gris de línea** (#d9d7d0): divisores, bordes y estructura.
- **Gris de apoyo** (#686860): texto secundario y descripciones.

**The Signal Color Rule.** El amarillo se reserva para decisiones, estados y orientación; no se usa como relleno indiscriminado de toda la interfaz.

## Typography

**Display Font:** Archivo (with Arial sans-serif fallback)
**Body Font:** Archivo (with Arial sans-serif fallback)
**Label Font:** Barlow Condensed (with Arial Narrow fallback)

**Character:** Archivo mantiene una voz comercial firme y accesible, mientras Barlow Condensed sirve para códigos, etiquetas y metadatos de catálogo. Los títulos son compactos y los párrafos respiran para facilitar la lectura en usuarios no expertos.

### Hierarchy
- **Display** (800, clamp 42–76px, 1.05): tesis de home, páginas y gestoría.
- **Title** (700, clamp 30–47px, 1.05): encabezados de sección y bloques de decisión.
- **Product title** (700, 18–20px, 1.05): nombres de producto en catálogo.
- **Body** (400, 15px, 1.5): descripciones y orientación, con medida controlada.
- **Label** (700, 11px, uppercase, 0.15em): sistema, categoría, marca y estado.

**The Clear Label Rule.** Una etiqueta debe identificar el contexto o el estado; nunca reemplazar el título principal.

## Layout

El contenedor de escritorio llega hasta 1240px y mantiene márgenes de 32px fuera de ese límite. El home abre con una composición asimétrica de copy y ficha gráfica; el catálogo usa una barra lateral de filtros junto a una grilla de productos; la gestoría usa un bloque editorial junto a un tablero de proceso.

La navegación superior mantiene una barra negra de utilidad, una franja blanca de marca y búsqueda, y una segunda línea de categorías. En mobile se conserva la jerarquía con menú plegable, búsqueda apilada y categorías desplazables horizontalmente. Las grillas pasan a dos columnas y los procesos a una columna.

## Elevation & Depth

El sistema es predominantemente plano y tonal. Las superficies se separan por cambios de papel, tinta y gris de línea; la profundidad está reservada para el botón flotante de contacto y el menú móvil abierto. No se usa una sombra como sustituto de jerarquía.

## Shapes

La forma base es nítida y casi cuadrada: botones y tarjetas usan 2px, los campos de búsqueda usan una curva amplia y los estados circulares se reservan para el carrito, confirmación y contacto. Las divisiones internas se resuelven con líneas de 1px o bandas de color.

## Components

### Buttons
- **Shape:** casi recto (2px).
- **Primary:** tinta EDL con texto blanco, 47px de alto y padding horizontal de 20px.
- **Hover / Focus:** el primario migra a azul; el focus usa un anillo amarillo visible.
- **Secondary:** texto con línea inferior y flecha, sin contenedor adicional.

### Cards / Containers
- **Corner Style:** 2px en tarjetas de producto; sin redondeo decorativo.
- **Background:** blanco para catálogo, papel o tinta para bloques de contenido.
- **Shadow Strategy:** sin sombra en reposo; el estado móvil abierto puede elevarse.
- **Border:** 1px gris de línea cuando la superficie necesita separación.
- **Internal Padding:** 13–18px para producto y 24–48px para bloques editoriales.

### Inputs / Fields
- **Style:** campos blancos con línea gris, búsqueda en píldora gris muy claro.
- **Focus:** línea azul y anillo amarillo accesible.
- **Error / Disabled:** disabled usa gris neutro y cursor bloqueado; los errores deben explicar recuperación.

### Navigation
- **Style:** barra de utilidad negra, marca en blanco y categorías en mayúsculas sobre fondo blanco.
- **Default / Hover:** tinta estable, azul en hover, amarillo para el carrito y estados activos.
- **Mobile:** búsqueda debajo de la marca y categorías en scroll; el menú abre una lista vertical.

### Product Art
Las ilustraciones SVG de producto usan geometría precisa, diagonales negras y amarillas y el sello EDL / DEMO. Son un puente visual hasta que se incorporen fotografías de catálogo definitivas.

## Do's and Don'ts

### Do:
- **Do** mantener el catálogo como acción principal y la gestoría como segunda ruta evidente.
- **Do** explicar cada estado documental en lenguaje directo y visible.
- **Do** usar precios visibles y estados de disponibilidad sin revelar cantidades internas de stock.
- **Do** preservar el contraste fuerte entre papel, tinta, azul y amarillo.
- **Do** mantener el foco visible y los controles nombrados con acciones concretas.

### Don't:
- **Don't** convertir la interfaz en un marketplace genérico lleno de badges o filtros sin jerarquía.
- **Don't** usar una estética militar agresiva, camuflaje o metáforas intimidantes.
- **Don't** ocultar requisitos documentales dentro del checkout.
- **Don't** inventar garantías legales o plazos absolutos; los tiempos deben figurar como estimados y condicionados.
- **Don't** sumar gradientes, sombras duras o iconos Unicode como decoración.
