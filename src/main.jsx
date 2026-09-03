import { StrictMode, useEffect, useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import logo from './assets/logo.png'
import oferta1 from './assets/ofertas/oferta1.png'
import oferta2 from './assets/ofertas/oferta2.png'
import oferta3 from './assets/ofertas/oferta3.png'
import pistoCorta from './assets/home/pistoCorta.png'
import opticasHome from './assets/home/opticas.png'
import equipamientoHome from './assets/home/equipamiento.png'
import armaLargaHome from './assets/home/armaLarga.png'
import accesoriosHome from './assets/home/Accesorios.png'
import pistola9mm1 from './assets/catalogo/pistola9mm-1.jpg'
import pistola9mm2 from './assets/catalogo/pistola9mm-2.jpg'
import carabina1 from './assets/catalogo/carabina-1.jpg'
import carabina2 from './assets/catalogo/carabina2.jpg'
import carabina3 from './assets/catalogo/carabina-3.jpg'
import miraShilba1 from './assets/catalogo/miraShilba-1.webp'
import miraShilba2 from './assets/catalogo/miraShilba-2.webp'
import funda1 from './assets/catalogo/funda-1.jpg'
import funda2 from './assets/catalogo/funda-2.jpg'
import kitdeLimpieza1 from './assets/catalogo/kitdeLimpieza-1.jpg'
import kitdeLimpieza2 from './assets/catalogo/kitdeLimpieza-2.jpg'

const categories = [
  { id: 'armas-cortas', label: 'Armas cortas', art: 'pistol' },
  { id: 'armas-largas', label: 'Armas largas', art: 'rifle' },
  { id: 'opticas', label: 'Ópticas', art: 'optic' },
  { id: 'accesorios', label: 'Accesorios', art: 'case' },
  { id: 'equipamiento', label: 'Equipamiento', art: 'safe' },
]

const products = [
  {
    id: 'edl-compact-9',
    name: 'Pistola EDL Compact 9',
    brand: 'EDL SELECT',
    category: 'Armas cortas',
    categoryId: 'armas-cortas',
    price: 1290000,
    art: 'pistol',
    gallery: [pistola9mm1, pistola9mm2],
    regulated: true,
    available: true,
    badge: 'Selección EDL',
    description: 'Plataforma compacta de demostración para el catálogo MVP. La operación queda sujeta a verificación documental previa.',
    specs: [['Calibre', '9 × 19 mm'], ['Sistema', 'Semiautomática'], ['Terminación', 'Negro mate'], ['Estado', 'Nueva']],
  },
  {
    id: 'edl-ranger-22',
    name: 'Carabina EDL Ranger .22',
    brand: 'EDL SELECT',
    category: 'Armas largas',
    categoryId: 'armas-largas',
    price: 1680000,
    art: 'rifle',
    gallery: [carabina1, carabina2, carabina3],
    regulated: true,
    available: true,
    badge: 'Destacado',
    description: 'Producto de muestra para tiro deportivo y uso recreativo responsable. Consultá condiciones de adquisición.',
    specs: [['Calibre', '.22 LR'], ['Plataforma', 'Carabina'], ['Terminación', 'Negro / madera'], ['Estado', 'Nueva']],
  },
  {
    id: 'edl-vector-1-6',
    name: 'Óptica EDL Vector 1–6×24',
    brand: 'EDL EQUIPMENT',
    category: 'Ópticas',
    categoryId: 'opticas',
    price: 485000,
    art: 'optic',
    gallery: [miraShilba1, miraShilba2],
    regulated: false,
    available: true,
    badge: 'Más elegido',
    description: 'Óptica de demostración con retícula iluminada y ajuste rápido para plataformas compatibles.',
    specs: [['Aumento', '1–6×'], ['Objetivo', '24 mm'], ['Retícula', 'Iluminada'], ['Incluye', 'Anillas de montaje']],
  },
  {
    id: 'edl-guard-pro',
    name: 'Funda EDL Guard Pro',
    brand: 'EDL EQUIPMENT',
    category: 'Accesorios',
    categoryId: 'accesorios',
    price: 89000,
    art: 'case',
    gallery: [funda1, funda2],
    regulated: false,
    available: true,
    badge: 'Nuevo',
    description: 'Funda rígida de demostración para transporte seguro y ordenado del equipamiento.',
    specs: [['Material', 'Polímero rígido'], ['Interior', 'Espuma modular'], ['Cierres', 'Doble traba'], ['Formato', 'Compacto']],
  },
  {
    id: 'edl-safe-12',
    name: 'Caja de seguridad EDL Safe 12',
    brand: 'EDL EQUIPMENT',
    category: 'Equipamiento',
    categoryId: 'equipamiento',
    price: 245000,
    art: 'safe',
    regulated: false,
    available: false,
    badge: 'Agotado',
    description: 'Modelo de demostración para guarda responsable. Consultá por reposición.',
    specs: [['Capacidad', '12 L'], ['Cierre', 'Mecánico'], ['Interior', 'Protegido'], ['Estado', 'Sin stock']],
  },
  {
    id: 'edl-clean-kit',
    name: 'Kit de limpieza EDL Pro',
    brand: 'EDL CARE',
    category: 'Mantenimiento',
    categoryId: 'equipamiento',
    price: 62000,
    art: 'clean',
    gallery: [kitdeLimpieza1, kitdeLimpieza2],
    regulated: false,
    available: true,
    badge: 'Práctico',
    description: 'Set de mantenimiento de muestra para conservar el equipamiento en condiciones.',
    specs: [['Contenido', '7 piezas'], ['Uso', 'Mantenimiento'], ['Estuche', 'Textil'], ['Estado', 'Nuevo']],
  },
]

const money = (value) => new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(value)

function Icon({ name, size = 20 }) {
  const paths = {
    search: <><circle cx="11" cy="11" r="6.5" /><path d="m16 16 5 5" /></>,
    cart: <><path d="M3 4h2l2.1 10.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L20 8H6" /><circle cx="9" cy="20" r="1" /><circle cx="17" cy="20" r="1" /></>,
    user: <><circle cx="12" cy="8" r="3.3" /><path d="M5.5 20c.7-3.3 2.8-5 6.5-5s5.8 1.7 6.5 5" /></>,
    arrow: <><path d="M4 12h16" /><path d="m14 6 6 6-6 6" /></>,
    chevron: <path d="m6 9 6 6 6-6" />,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    close: <><path d="m5 5 14 14M19 5 5 19" /></>,
    check: <path d="m5 12 4.5 4.5L19 7" />,
    shield: <><path d="M12 3 19 6v5c0 4.6-2.7 8-7 10-4.3-2-7-5.4-7-10V6l7-3Z" /><path d="m9 12 2 2 4-4" /></>,
    headset: <><path d="M4 13a8 8 0 0 1 16 0" /><path d="M4 13v4h3v-5H5M20 13v4h-3v-5h2" /><path d="M17 19c-1 .8-2.7 1-4 1" /></>,
    instagram: <><rect x="4" y="4" width="16" height="16" rx="4" /><circle cx="12" cy="12" r="3.5" /><circle cx="17.2" cy="6.8" r=".7" fill="currentColor" stroke="none" /></>,
    whatsapp: <><path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z" /><path d="M9 8.5c.2 2.2 1.7 3.8 4 4.5l1.2-1.2 1.8.9c-.2 1.2-1 1.8-2.2 1.7-3.7-.5-6.3-3-6.5-5.4-.1-1.1.6-1.8 1.7-1.8Z" /></>,
    pin: <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2.2" /></>,
  }
  return <svg className="icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}

function ProductArt({ type, image, compact = false }) {
  return <div className={`product-art product-art-${type} ${compact ? 'product-art-compact' : ''} ${image ? 'product-art-photo' : ''}`} aria-hidden="true">
    <div className="art-slash art-slash-one" /><div className="art-slash art-slash-two" />

    {image ? <img className="product-photo" src={image} alt="" /> : <svg viewBox="0 0 420 260" className="art-svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      {type === 'pistol' && <><path d="M102 130h190c14 0 25 9 25 20v10H214l-16 42h-45l10-42h-42l-18-10Z" /><path d="M176 160h35l-7 52h-38Z" /><path d="M250 130V91h58v39M310 97h34" /><path d="M110 130V96h72v34" /><path d="M114 118H77" /><circle cx="271" cy="146" r="9" /></>}
      {type === 'rifle' && <><path d="M55 122h208l31 18-31 18H55l-24-18Z" /><path d="M236 122V91h70v31M302 104h55" /><path d="M112 158l-18 42h36l24-42M219 158l20 42h36l-18-42" /><path d="M52 123V95h66v27M62 112H34" /><circle cx="164" cy="141" r="9" /></>}
      {type === 'optic' && <><path d="M103 107h185c21 0 38 17 38 38s-17 38-38 38H103c-21 0-38-17-38-38s17-38 38-38Z" /><path d="M103 107v76M288 107v76M119 107V88h44v19M229 107V88h44v19" /><circle cx="101" cy="145" r="18" /><circle cx="288" cy="145" r="18" /><path d="M92 145h18M101 136v18" /></>}
      {type === 'case' && <><rect x="96" y="75" width="228" height="126" rx="9" /><path d="M96 111h228M179 75V55h62v20M191 145h38M210 126v38" /><path d="M119 128h34v44h-34zM267 128h34v44h-34z" /></>}
      {type === 'safe' && <><rect x="120" y="56" width="166" height="150" rx="7" /><rect x="145" y="81" width="116" height="100" rx="3" /><circle cx="237" cy="132" r="10" /><path d="M237 132v-5M155 67h18M253 67h18M135 206h28M243 206h28" /></>}
      {type === 'clean' && <><path d="M92 190 147 65l22 10-55 125Z" /><path d="m148 63 20-18 19 8-18 22Z" /><path d="M209 83h96l14 14-14 14h-96c-8-8-8-20 0-28Z" /><path d="M213 112h85l11 14-11 14h-85c-7-7-7-21 0-28Z" /><path d="M205 142h72l11 14-11 14h-72c-7-7-7-21 0-28Z" /></>}
    </svg>}

    <span className="art-caption">EDL / DEMO</span>
  </div>
}

function CategoryArt({ type }) {
  return <div className="category-art"><ProductArt type={type} compact /></div>
}

const homeCategoryPhotos = [
  { id: 'armas-cortas', label: 'Armas cortas', image: pistoCorta },
  { id: 'armas-largas', label: 'Armas largas', image: armaLargaHome },
  { id: 'opticas', label: 'Ópticas', image: opticasHome },
  { id: 'accesorios', label: 'Accesorios', image: accesoriosHome },
  { id: 'equipamiento', label: 'Equipamiento', image: equipamientoHome },
]

function PhotoCategoryTile({ category, onNavigate, variant = '' }) {
  return <button className={`photo-category-tile ${variant}`} onClick={() => onNavigate(`/productos?category=${category.id}`)}>
    <span className="photo-category-image-wrap photo-fill-edge variant-cover"><img className="photo-category-image" src={category.image} alt="" /><span className="photo-category-index">{String(homeCategoryPhotos.findIndex((item) => item.id === category.id) + 1).padStart(2, '0')}</span></span>
    <span className="photo-category-copy"><strong>{category.label}</strong><small>Explorar categoría</small></span><Icon name="arrow" size={16} />
  </button>
}

function TopBar({ onNavigate }) {
  return <div className="topbar"><div className="topbar-inner">
    <div className="social-links"><a href="#instagram" aria-label="Instagram"><Icon name="instagram" size={15} /></a><a href="#whatsapp" aria-label="WhatsApp"><Icon name="whatsapp" size={15} /></a><span className="topbar-note">Atención personalizada · Catálogo demo</span></div>
    <nav className="utility-links" aria-label="Enlaces rápidos"><button onClick={() => onNavigate('/productos')}>Productos</button><button onClick={() => onNavigate('/legal')}>Gestoría documental</button><button onClick={() => onNavigate('/contacto')}>Contacto</button><button className="utility-login"><Icon name="user" size={15} /> Ingresar</button></nav>
  </div></div>
}

function Header({ onNavigate, search, setSearch, cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const go = (path) => { setMenuOpen(false); onNavigate(path) }
  return <>
    <TopBar onNavigate={onNavigate} />
    <header className="main-header">
      <div className="header-inner">
        <button className="mobile-menu" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}><Icon name={menuOpen ? 'close' : 'menu'} /></button>
        <button className="brand" onClick={() => go('/')} aria-label="Ir al inicio"><span className="brand-mark">EDL</span><span className="brand-copy"><strong>ARMERIA</strong><small>EDL · confianza que acompaña</small></span></button>
        <div className="header-search"><Icon name="search" size={21} /><input value={search} onChange={(event) => setSearch(event.target.value)} onKeyDown={(event) => event.key === 'Enter' && go('/productos')} placeholder="¿Qué estás buscando?" aria-label="Buscar productos" /></div>
        <button className="cart-trigger" onClick={() => go('/carrito')} aria-label={`Abrir carrito, ${cartCount} productos`}><Icon name="cart" size={23} />{cartCount > 0 && <span>{cartCount}</span>}</button>
      </div>
      <nav className={`category-nav ${menuOpen ? 'category-nav-open' : ''}`} aria-label="Categorías principales">
        <button onClick={() => go('/productos?category=armas-cortas')}>ARMAS CORTAS <Icon name="chevron" size={14} /></button>
        <button onClick={() => go('/productos?category=armas-largas')}>ARMAS LARGAS <Icon name="chevron" size={14} /></button>
        <button onClick={() => go('/productos?category=opticas')}>ÓPTICAS</button>
        <button onClick={() => go('/productos?category=accesorios')}>ACCESORIOS <Icon name="chevron" size={14} /></button>
        <button onClick={() => go('/productos?category=equipamiento')}>EQUIPAMIENTO <Icon name="chevron" size={14} /></button>
        <button onClick={() => go('/legal')}>GESTORÍA EDL</button>
      </nav>
    </header>
  </>
}

function ProductCard({ product, onOpen, onAdd }) {
  return <article className={`product-card ${!product.available ? 'is-unavailable' : ''}`}>
    <button className="product-card-main" onClick={() => onOpen(product.id)} aria-label={`Ver ${product.name}`}>
      <div className="product-image-wrap"><ProductArt type={product.art} image={product.gallery?.[0]} />{product.badge && <span className="product-badge">{product.badge}</span>}</div>
      <div className="product-info"><span className="product-brand">{product.brand}</span><h3>{product.name}</h3><strong className="product-price">{money(product.price)}</strong></div>
    </button>
    <div className="product-card-footer">{product.available ? <button className="add-button" onClick={() => onAdd(product)}><Icon name="cart" size={17} /> Comprar</button> : <span className="out-of-stock">Sin stock</span>}<button className="detail-link" onClick={() => onOpen(product.id)}>Ver detalle <Icon name="arrow" size={16} /></button></div>
  </article>
}

function Home({ onNavigate, onOpenProduct, onAdd, search }) {
  const featured = products.filter((product) => product.available).slice(0, 4)
  return <main>
    <section className="hero container">
      <div className="hero-copy"><p className="eyebrow">ARMERIA EDL</p><h1>Equipamiento elegido.<br /><em>Trámites claros.</em></h1><p className="hero-lead">Encontrá productos habilitados, accesorios y equipamiento con el respaldo de una atención que te explica qué sigue.</p><div className="hero-actions"><button className="button button-dark" onClick={() => onNavigate('/productos')}>Explorar catálogo <Icon name="arrow" size={18} /></button><button className="text-button" onClick={() => onNavigate('/legal')}>Conocer gestoría <Icon name="arrow" size={16} /></button></div><div className="hero-proof"><span><Icon name="shield" size={19} /> Compra responsable</span><span><Icon name="headset" size={19} /> Acompañamiento real</span></div></div>

      <div className="hero-stage-image-fit">
        <img
          className="hero-stage-logo"
          src={logo}
          alt="Armería Esteban de Luca"
        />
      </div>

    </section>
    <section className="section container live-category-fit"><div className="section-heading"><div><p className="eyebrow">NAVEGÁ POR ÁREA</p><h2>Encontrá lo que buscás</h2></div><button className="text-button" onClick={() => onNavigate('/productos')}>Ver todo <Icon name="arrow" size={16} /></button></div><div className="photo-category-grid">{homeCategoryPhotos.map((category) => <PhotoCategoryTile key={category.id} category={category} onNavigate={onNavigate} variant="photo-category-fit" />)}</div></section>
    <section className="section feature-strip"><div className="container feature-strip-inner"><div><p className="eyebrow">UN PROCESO MÁS SIMPLE</p><h2>Comprá con el acompañamiento que esperás.</h2></div><div className="feature-points"><div><span className="feature-index">01</span><strong>Catálogo claro</strong><p>Precios visibles, fichas simples y productos de demostración identificados.</p></div><div><span className="feature-index">02</span><strong>Gestoría documental</strong><p>Te explicamos requisitos y próximos pasos sin letra chica.</p></div><div><span className="feature-index">03</span><strong>Seguimiento EDL</strong><p>Después de la compra, coordinamos la verificación de tus papeles.</p></div></div></div></section>
    <section className="section container product-rail"><div className="section-heading"><div><p className="eyebrow">SELECCIÓN EDL</p><h2>Los más consultados</h2></div><button className="text-button" onClick={() => onNavigate('/productos')}>Ver catálogo <Icon name="arrow" size={16} /></button></div><div className="product-grid product-grid-four">{featured.map((product) => <ProductCard key={product.id} product={product} onOpen={onOpenProduct} onAdd={onAdd} />)}</div></section>
    <section className="legal-callout container"><div className="legal-callout-mark"><Icon name="shield" size={43} /></div><div className="legal-callout-copy"><p className="eyebrow">GESTORÍA DOCUMENTAL EDL</p><h2>Tu compra también necesita orientación.</h2><p>Si todavía no contás con la documentación, podemos ayudarte a ordenar el trámite. La estimación de hasta 72 h es orientativa y depende de la recepción y validación de la documentación.</p><button className="button button-light" onClick={() => onNavigate('/legal')}>Ver cómo trabajamos <Icon name="arrow" size={18} /></button></div><div className="legal-callout-list"><span><Icon name="check" size={17} /> Requisitos explicados</span><span><Icon name="check" size={17} /> Seguimiento personalizado</span><span><Icon name="check" size={17} /> Confirmación antes de avanzar</span></div></section>
    <section className="section container trust-section"><div className="trust-panel"><p className="eyebrow">ARMERIA EDL</p><h2>Seriedad para elegir.<br />Claridad para avanzar.</h2><p>Somos una armería especializada con una experiencia pensada para que encuentres lo que necesitás y entiendas qué hacer después.</p><button className="text-button" onClick={() => onNavigate('/contacto')}>Hablemos <Icon name="arrow" size={16} /></button></div><div className="trust-visual"><div className="visual-lines" /><span className="visual-caption">PRODUCT / PROCESS / PEOPLE</span><strong>EDL</strong></div></section>
  </main>
}

function Catalog({ onNavigate, onOpenProduct, onAdd, initialCategory, search, setSearch }) {
  const [category, setCategory] = useState(initialCategory || 'all')
  const [sort, setSort] = useState('featured')
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [activeOffer, setActiveOffer] = useState(0)
  const offerImages = [oferta1, oferta2, oferta3]
  useEffect(() => setCategory(initialCategory || 'all'), [initialCategory])
  useEffect(() => {
    const timer = window.setInterval(() => setActiveOffer((current) => (current + 1) % offerImages.length), 7000)
    return () => window.clearInterval(timer)
  }, [offerImages.length])
  const visible = useMemo(() => {
    const result = products.filter((product) => (category === 'all' || product.categoryId === category) && `${product.name} ${product.brand}`.toLowerCase().includes(search.toLowerCase()))
    if (sort === 'low') return [...result].sort((a, b) => a.price - b.price)
    if (sort === 'high') return [...result].sort((a, b) => b.price - a.price)
    return result
  }, [category, search, sort])
  return <main className="catalog-page container">
    <div className="breadcrumb"><button onClick={() => onNavigate('/')}>Inicio</button><span>/</span><strong>Productos</strong></div>


    <div className="catalog-title-row catalog-title-row-offers">
      <div className="catalog-offer-frame" data-offer-slot="catalog" data-offer-rotation-seconds="7" data-offer-size="1200x270" aria-label="Carrusel de ofertas">
        <div className="catalog-offer-motion offer-motion-direct" key={`direct-${offerImages[activeOffer]}`}>
          <img className="catalog-offer-image offer-image-previous" src={offerImages[(activeOffer + offerImages.length - 1) % offerImages.length]} alt="" aria-hidden="true" />
          <img className="catalog-offer-image offer-image-current" src={offerImages[activeOffer]} alt={`Oferta destacada ${activeOffer + 1} de ${offerImages.length}`} />
        </div>
      </div>
      <button className="mobile-filter-button" onClick={() => setFiltersOpen(true)}>Filtros <Icon name="filter" size={15} /></button>
    </div>

    <div className="catalog-layout"><aside className={`catalog-sidebar ${filtersOpen ? 'catalog-sidebar-open' : ''}`}><div className="sidebar-heading"><strong>Filtrar catálogo</strong><button onClick={() => setFiltersOpen(false)} aria-label="Cerrar filtros"><Icon name="close" size={18} /></button></div><label className="filter-label">Categoría</label><div className="filter-list"><button className={category === 'all' ? 'active' : ''} onClick={() => setCategory('all')}>Todos los productos <span>{products.length}</span></button>{categories.map((item) => <button key={item.id} className={category === item.id ? 'active' : ''} onClick={() => setCategory(item.id)}>{item.label} <span>{products.filter((product) => product.categoryId === item.id).length}</span></button>)}</div><div className="sidebar-help"><Icon name="headset" size={22} /><strong>¿No sabés por dónde empezar?</strong><p>Escribinos y te orientamos según tu necesidad.</p><button onClick={() => onNavigate('/contacto')}>Consultar <Icon name="arrow" size={15} /></button></div></aside><section className="catalog-results"><div className="catalog-toolbar"><span><strong>{visible.length}</strong> resultados</span><div className="toolbar-actions"><div className="catalog-search"><Icon name="search" size={17} /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Buscar" aria-label="Buscar en catálogo" /></div><label className="sort-select">Ordenar<select value={sort} onChange={(event) => setSort(event.target.value)}><option value="featured">Destacados</option><option value="low">Precio menor</option><option value="high">Precio mayor</option></select><Icon name="chevron" size={14} /></label></div></div>{visible.length ? <div className="product-grid">{visible.map((product) => <ProductCard key={product.id} product={product} onOpen={onOpenProduct} onAdd={onAdd} />)}</div> : <div className="empty-state"><h2>No encontramos ese producto.</h2><p>Probá con otro término o limpiá los filtros.</p><button className="button button-dark" onClick={() => { setSearch(''); setCategory('all') }}>Ver todo</button></div>}</section></div>
  </main>
}

function ProductDetail({ product, onNavigate, onAdd }) {
  const [activeImage, setActiveImage] = useState(0)
  if (!product) return <div className="container empty-state"><h1>Producto no encontrado</h1><button className="button button-dark" onClick={() => onNavigate('/productos')}>Volver al catálogo</button></div>
  const gallery = product.gallery?.length ? product.gallery : [null]
  return <main className="detail-page container"><div className="breadcrumb"><button onClick={() => onNavigate('/')}>Inicio</button><span>/</span><button onClick={() => onNavigate('/productos')}>Productos</button><span>/</span><strong>{product.name}</strong></div><div className="detail-layout"><div className="detail-gallery"><div className="detail-main-image"><ProductArt type={product.art} image={gallery[activeImage]} /><span className="gallery-count">{String(activeImage + 1).padStart(2, '0')} / {String(gallery.length).padStart(2, '0')}</span></div><div className="thumbnail-row">{gallery.map((image, index) => <button className={activeImage === index ? 'active' : ''} key={image || index} onClick={() => setActiveImage(index)}><ProductArt type={product.art} image={image} compact /><span>Vista {index + 1}</span></button>)}</div></div><section className="detail-info"><span className="product-brand">{product.brand}</span><h1>{product.name}</h1><p className="detail-description">{product.description}</p><div className="detail-price">{money(product.price)} <small>Precio demo</small></div>{product.regulated && <div className="regulated-note"><Icon name="shield" size={20} /><div><strong>Producto sujeto a verificación</strong><p>Para avanzar, confirmaremos la documentación requerida antes de coordinar la entrega.</p></div></div>}<div className="detail-action-row">{product.available ? <button className="button button-dark" onClick={() => onAdd(product)}>Agregar al carrito <Icon name="cart" size={18} /></button> : <button className="button button-disabled" disabled>Producto agotado</button>}<button className="text-button" onClick={() => onNavigate('/contacto')}>Dejanos tu consulta <Icon name="arrow" size={16} /></button></div><div className="detail-tabs"><strong>Ficha técnica</strong>{product.specs.map(([label, value]) => <div className="spec-row" key={label}><span>{label}</span><b>{value}</b></div>)}</div></section></div><section className="detail-bottom"><div><p className="eyebrow">ANTES DE COMPRAR</p><h2>La información también es parte del producto.</h2></div><p>Consultá compatibilidad, requisitos y próximos pasos. Si el producto requiere documentación, el checkout te va a guiar.</p></section></main>
}

function Cart({ cart, onNavigate, onRemove, onDocsChange, docsState, assistance, setAssistance }) {
  const hasRegulated = cart.some((product) => product.regulated)
  const productsTotal = cart.reduce((sum, item) => sum + item.price, 0)
  const assistanceCost = assistance ? 20000 : 0
  const total = productsTotal + assistanceCost
  const blocked = hasRegulated && (docsState !== 'yes' && !assistance)
  return <main className="cart-page container"><div className="breadcrumb"><button onClick={() => onNavigate('/')}>Inicio</button><span>/</span><strong>Mi carrito</strong></div><div className="page-intro"><p className="eyebrow">RESUMEN DE COMPRA</p><h1>Tu carrito</h1><p>Revisá tus productos y confirmá la documentación antes de continuar.</p></div>{!cart.length ? <div className="empty-state empty-cart"><div className="empty-cart-icon"><Icon name="cart" size={34} /></div><h2>Tu carrito está vacío.</h2><p>Explorá la selección demo y agregá un producto para comenzar.</p><button className="button button-dark" onClick={() => onNavigate('/productos')}>Explorar catálogo <Icon name="arrow" size={17} /></button></div> : <div className="cart-layout"><section className="cart-lines"><div className="cart-lines-head"><span>{cart.length} {cart.length === 1 ? 'producto' : 'productos'}</span><button onClick={() => onNavigate('/productos')}>Seguir comprando <Icon name="arrow" size={15} /></button></div>{cart.map((product) => <div className="cart-line" key={product.id}><div className="cart-thumb"><ProductArt type={product.art} image={product.gallery?.[0]} compact /></div><div className="cart-line-copy"><span className="product-brand">{product.brand}</span><h2>{product.name}</h2><small>{product.regulated ? 'Sujeto a verificación documental' : product.category}</small></div><strong>{money(product.price)}</strong><button className="remove-line" onClick={() => onRemove(product.id)} aria-label={`Quitar ${product.name}`}><Icon name="close" size={18} /></button></div>)}{hasRegulated && <fieldset className="doc-gate"><legend>Documentación para adquirir armas</legend><p>Para productos regulados necesitamos saber si ya contás con la documentación necesaria para poseerlos.</p><div className="radio-options"><label className={docsState === 'yes' ? 'selected' : ''}><input type="radio" name="docs" checked={docsState === 'yes'} onChange={() => { onDocsChange('yes'); setAssistance(false) }} /> <span><strong>Sí, ya la tengo</strong><small>Podés continuar con la compra demo.</small></span></label><label className={docsState === 'no' ? 'selected' : ''}><input type="radio" name="docs" checked={docsState === 'no'} onChange={() => onDocsChange('no')} /> <span><strong>No, necesito ayuda</strong><small>Te acompañamos a gestionar los papeles.</small></span></label></div>{docsState === 'no' && <div className="assistance-option"><div><strong>Agregar gestoría documental demo</strong><small>Valor demostración: {money(20000)} · luego se reemplazará por el valor real.</small></div><label className="switch-label"><input type="checkbox" checked={assistance} onChange={(event) => setAssistance(event.target.checked)} /><span className="switch" />{assistance ? 'Agregada' : 'Agregar'}</label><p className="gate-warning"><Icon name="shield" size={17} /> Si no necesitás esta ayuda, no podremos venderte armas hasta validar la documentación.</p></div>}{docsState === 'yes' && <p className="gate-success"><Icon name="check" size={17} /> Luego de comprar, contactate con Armeria EDL para verificar tus papeles.</p>}</fieldset>}</section><aside className="order-summary"><h2>Resumen</h2><div><span>Productos</span><strong>{money(productsTotal)}</strong></div>{assistance && <div><span>Gestoría demo</span><strong>{money(assistanceCost)}</strong></div>}<div className="summary-total"><span>Total demo</span><strong>{money(total)}</strong></div>{blocked && <div className="summary-alert"><Icon name="shield" size={18} /><span>Elegí una opción documental para habilitar el checkout.</span></div>}<button className="button button-dark checkout-button" disabled={blocked} onClick={() => onNavigate('/checkout')}>{blocked ? 'Checkout bloqueado' : 'Continuar al checkout'} <Icon name="arrow" size={17} /></button><small className="demo-legal">Pago y datos de ejemplo. No se procesa ninguna operación real.</small></aside></div>}</main>
}

function Checkout({ cart, assistance, onNavigate, onReset }) {
  const [done, setDone] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', card: '' })
  const total = cart.reduce((sum, item) => sum + item.price, 0) + (assistance ? 20000 : 0)
  const update = (key, value) => setForm((current) => ({ ...current, [key]: value }))
  if (done) return <main className="container checkout-page"><div className="success-panel"><div className="success-icon"><Icon name="check" size={34} /></div><p className="eyebrow">PEDIDO DEMO CONFIRMADO</p><h1>Recibimos tu solicitud.</h1><p>Este MVP no realiza cobros. En una implementación real, Armeria EDL se contactaría para verificar la documentación y coordinar los próximos pasos.</p><div className="success-reference"><span>Referencia</span><strong>EDL-2026-0042</strong></div><button className="button button-dark" onClick={() => { onReset(); onNavigate('/') }}>Volver al inicio <Icon name="arrow" size={17} /></button></div></main>
  return <main className="container checkout-page"><div className="breadcrumb"><button onClick={() => onNavigate('/carrito')}>Carrito</button><span>/</span><strong>Checkout demo</strong></div><div className="checkout-heading"><div><p className="eyebrow">ÚLTIMO PASO</p><h1>Confirmá tu solicitud.</h1><p>Completá datos de ejemplo para recorrer el flujo. No se realizará ningún cobro.</p></div><div className="demo-badge">MODO DEMO</div></div><div className="checkout-layout"><form className="checkout-form" onSubmit={(event) => { event.preventDefault(); setDone(true) }}><fieldset><legend>Datos de contacto</legend><label>Nombre y apellido<input required value={form.name} onChange={(event) => update('name', event.target.value)} placeholder="Ej. María González" /></label><div className="form-row"><label>Email<input required type="email" value={form.email} onChange={(event) => update('email', event.target.value)} placeholder="nombre@email.com" /></label><label>Teléfono<input required value={form.phone} onChange={(event) => update('phone', event.target.value)} placeholder="11 5555 5555" /></label></div></fieldset><fieldset><legend>Medio de pago demo</legend><label>Número de tarjeta de prueba<input required value={form.card} onChange={(event) => update('card', event.target.value)} placeholder="0000 0000 0000 0000" /></label><div className="payment-note"><Icon name="shield" size={18} /><span>Este formulario es ilustrativo. Más adelante se conectará con el medio de pago elegido.</span></div></fieldset><button className="button button-dark" type="submit">Confirmar pedido demo <Icon name="arrow" size={17} /></button></form><aside className="order-summary checkout-summary"><h2>Tu pedido</h2>{cart.map((product) => <div className="summary-product" key={product.id}><span>{product.name}</span><strong>{money(product.price)}</strong></div>)}{assistance && <div className="summary-product"><span>Gestoría documental demo</span><strong>{money(20000)}</strong></div>}<div className="summary-total"><span>Total demo</span><strong>{money(total)}</strong></div><p className="demo-legal">Al confirmar aceptás que el equipo se contacte para verificar la documentación correspondiente. Condiciones finales a definir.</p></aside></div></main>
}

function Legal({ onNavigate }) {
  return <main className="legal-page"><section className="legal-hero container"><div><p className="eyebrow">GESTORÍA DOCUMENTAL EDL</p><h1>El trámite no tiene por qué ser confuso.</h1><p>Te ayudamos a entender requisitos, ordenar la documentación y saber qué sigue antes de avanzar con una compra regulada.</p><button className="button button-dark" onClick={() => onNavigate('/contacto')}>Quiero asesorarme <Icon name="arrow" size={17} /></button></div><div className="legal-hero-board"><div className="board-top"><span>EDL / PROCESO</span><span>STATUS: ACOMPAÑADO</span></div><div className="board-line"><span className="board-dot done" /><div><strong>Relevamiento inicial</strong><small>Entendemos tu situación</small></div><b>01</b></div><div className="board-line"><span className="board-dot done" /><div><strong>Orden documental</strong><small>Revisamos qué falta</small></div><b>02</b></div><div className="board-line"><span className="board-dot current" /><div><strong>Gestión y seguimiento</strong><small>Te mantenemos informado</small></div><b>03</b></div><div className="board-line"><span className="board-dot" /><div><strong>Resultado</strong><small>Según validación del organismo</small></div><b>04</b></div></div></section><section className="legal-explain container"><div className="section-heading"><div><p className="eyebrow">CÓMO TRABAJAMOS</p><h2>Información concreta en cada etapa.</h2></div></div><div className="process-grid"><div><span>01</span><Icon name="headset" size={27} /><h3>Te escuchamos</h3><p>Nos contás qué necesitás y te indicamos qué documentación corresponde revisar.</p></div><div><span>02</span><Icon name="check" size={27} /><h3>Ordenamos</h3><p>Reunimos los datos necesarios y te ayudamos a detectar faltantes antes de presentar.</p></div><div><span>03</span><Icon name="shield" size={27} /><h3>Seguimos</h3><p>Te acompañamos durante el proceso y te avisamos qué paso continúa.</p></div></div></section><section className="legal-time"><div className="container legal-time-inner"><div><p className="eyebrow">PLAZO ESTIMADO · CONDICIONAL</p><h2>Hasta 72 h</h2><p>Es una referencia orientativa para la gestión demo, sujeta a la recepción completa, consistencia y validación de la documentación, además de los tiempos del organismo correspondiente.</p></div><div className="time-conditions"><span><Icon name="check" size={17} /> Documentación completa</span><span><Icon name="check" size={17} /> Datos consistentes</span><span><Icon name="check" size={17} /> Validación del organismo</span></div></div></section><section className="legal-faq container"><div><p className="eyebrow">PREGUNTAS FRECUENTES</p><h2>Lo importante, explicado simple.</h2></div><div className="faq-list"><details open><summary>¿Puedo comprar un arma sin tener la documentación?</summary><p>No. El checkout demo te ofrece sumar el acompañamiento documental. Si no aceptás esa ayuda, la compra de armas queda bloqueada hasta validar la documentación.</p></details><details><summary>¿El plazo de 72 h está garantizado?</summary><p>No. Es un plazo estimado orientativo y depende de que la documentación esté completa y de la validación del organismo correspondiente.</p></details><details><summary>¿Qué pasa después de comprar?</summary><p>Debés comunicarte con Armeria EDL para que el equipo verifique tus papeles y te indique los próximos pasos.</p></details></div></section></main>
}

function Contact({ onNavigate }) {
  return <main className="contact-page container"><div className="breadcrumb"><button onClick={() => onNavigate('/')}>Inicio</button><span>/</span><strong>Contacto</strong></div><section className="contact-grid"><div><p className="eyebrow">HABLEMOS</p><h1>¿Tenés una consulta?</h1><p>Si no sabés qué producto elegir o querés entender un trámite, escribinos. Esta pantalla queda lista para conectar con el canal real de atención.</p><div className="contact-details"><a href="tel:+540000000000"><Icon name="headset" size={20} /><span><small>Teléfono</small>+54 11 0000 0000</span></a><a href="mailto:hola@armeriaedl.demo"><Icon name="search" size={20} /><span><small>Email demo</small>hola@armeriaedl.demo</span></a><a href="#ubicacion"><Icon name="pin" size={20} /><span><small>Atención</small>Con coordinación previa</span></a></div></div><form className="contact-form" onSubmit={(event) => event.preventDefault()}><h2>Dejanos tu consulta</h2><label>Nombre y apellido<input required placeholder="Tu nombre" /></label><label>Email<input required type="email" placeholder="nombre@email.com" /></label><label>Mensaje<textarea required rows="5" placeholder="¿En qué podemos ayudarte?" /></label><button className="button button-dark" type="submit">Enviar consulta <Icon name="arrow" size={17} /></button><small>Formulario demo. Los datos reales se conectarán en la próxima etapa.</small></form></section></main>
}

function Footer({ onNavigate }) {
  return <footer className="footer"><div className="container footer-grid"><div className="footer-brand"><button className="brand brand-footer" onClick={() => onNavigate('/')}><span className="brand-mark">EDL</span><span className="brand-copy"><strong>ARMERIA</strong><small>confianza que acompaña</small></span></button><p>Productos, equipamiento y orientación documental en un mismo lugar.</p></div><div><strong>Ayuda</strong><button onClick={() => onNavigate('/productos')}>Cómo comprar</button><button onClick={() => onNavigate('/legal')}>Gestoría documental</button><button onClick={() => onNavigate('/contacto')}>Contacto</button></div><div><strong>Catálogo</strong><button onClick={() => onNavigate('/productos?category=armas-cortas')}>Armas cortas</button><button onClick={() => onNavigate('/productos?category=accesorios')}>Accesorios</button><button onClick={() => onNavigate('/productos?category=equipamiento')}>Equipamiento</button></div><div><strong>Seguinos</strong><div className="footer-social"><a href="#instagram" aria-label="Instagram"><Icon name="instagram" /></a><a href="#whatsapp" aria-label="WhatsApp"><Icon name="whatsapp" /></a></div><small>© 2026 Armeria EDL · MVP demo</small></div></div></footer>
}

function App() {
  const [route, setRoute] = useState(`${window.location.pathname}${window.location.search}`)
  const [search, setSearch] = useState('')
  const [cart, setCart] = useState([])
  const [docsState, setDocsState] = useState(null)
  const [assistance, setAssistance] = useState(false)
  const navigate = (path) => { window.history.pushState({}, '', path); setRoute(path); window.scrollTo({ top: 0, behavior: 'smooth' }) }
  useEffect(() => { const onPop = () => setRoute(`${window.location.pathname}${window.location.search}`); window.addEventListener('popstate', onPop); return () => window.removeEventListener('popstate', onPop) }, [])
  const addToCart = (product) => { if (!product.available) return; setCart((current) => current.some((item) => item.id === product.id) ? current : [...current, product]); navigate('/carrito') }
  const removeFromCart = (id) => setCart((current) => current.filter((product) => product.id !== id))
  const params = new URLSearchParams(route.split('?')[1] || '')
  const detailMatch = route.match(/^\/producto\/([^/?]+)/)
  const product = detailMatch ? products.find((item) => item.id === detailMatch[1]) : null
  let page
  if (route === '/' || route === '') page = <Home onNavigate={navigate} onOpenProduct={(id) => navigate(`/producto/${id}`)} onAdd={addToCart} search={search} />
  else if (route.startsWith('/productos')) page = <Catalog onNavigate={navigate} onOpenProduct={(id) => navigate(`/producto/${id}`)} onAdd={addToCart} initialCategory={params.get('category') || 'all'} search={search} setSearch={setSearch} />
  else if (detailMatch) page = <ProductDetail product={product} onNavigate={navigate} onAdd={addToCart} />
  else if (route.startsWith('/carrito')) page = <Cart cart={cart} onNavigate={navigate} onRemove={removeFromCart} onDocsChange={setDocsState} docsState={docsState} assistance={assistance} setAssistance={setAssistance} />
  else if (route.startsWith('/checkout')) page = <Checkout cart={cart} assistance={assistance} onNavigate={navigate} onReset={() => { setCart([]); setDocsState(null); setAssistance(false) }} />
  else if (route.startsWith('/legal')) page = <Legal onNavigate={navigate} />
  else page = <Contact onNavigate={navigate} />
  return <><Header onNavigate={navigate} search={search} setSearch={setSearch} cartCount={cart.length} />{page}<Footer onNavigate={navigate} /><a className="whatsapp-float" href="#whatsapp" aria-label="Contactar por WhatsApp"><Icon name="whatsapp" size={24} /></a></>
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
