/**
 * TULA CIRA — Esthetic & Beauty
 * Main Website Controller
 */

import { SERVICES, SERVICE_CATEGORIES, SALON_INFO } from '../data/services.js';
import { BookingModal } from './booking.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Booking Engine
  const bookingEngine = new BookingModal();
  window.tulaBooking = bookingEngine;

  // 2. Navbar Scroll Behavior
  initNavbarScroll();

  // 3. Mobile Navigation Menu
  initMobileNav();

  // 4. Render Service Explorer
  initServiceExplorer(bookingEngine);

  // 5. Render Signature Services
  initSignatureServices(bookingEngine);

  // 6. Gallery Interactions
  initGalleryModal();

  // 7. Scroll Reveal Animations
  initScrollAnimations();

  // 8. Bind All WhatsApp Direct Links
  initWhatsAppButtons();
});

function initNavbarScroll() {
  const navbar = document.getElementById('mainNavbar');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('bg-[#FFFDFB]/95', 'backdrop-blur-md', 'shadow-sm', 'border-b', 'border-[#E8D5D1]/40', 'py-3.5');
      navbar.classList.remove('bg-transparent', 'py-5');
    } else {
      navbar.classList.remove('bg-[#FFFDFB]/95', 'backdrop-blur-md', 'shadow-sm', 'border-b', 'border-[#E8D5D1]/40', 'py-3.5');
      navbar.classList.add('bg-transparent', 'py-5');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

function initMobileNav() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenuDrawer');
  const closeBtn = document.getElementById('closeMobileMenuBtn');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (!menuBtn || !mobileMenu) return;

  const openMenu = () => {
    mobileMenu.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  };

  const closeMenu = () => {
    mobileMenu.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  };

  menuBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  links.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

function initServiceExplorer(bookingEngine) {
  const tabsContainer = document.getElementById('serviceCategoryTabs');
  const listContainer = document.getElementById('serviceListContainer');
  const searchInput = document.getElementById('serviceSearchInput');
  const countBadge = document.getElementById('serviceCountBadge');

  if (!tabsContainer || !listContainer) return;

  let activeCategory = 'todos';
  let searchTerm = '';

  // Render category buttons
  tabsContainer.innerHTML = SERVICE_CATEGORIES.map(cat => `
    <button 
      type="button" 
      data-category="${cat.id}"
      class="cat-pill whitespace-nowrap px-4 py-2 text-xs uppercase tracking-wider rounded-full border border-[#D7B8B4]/70 transition-all font-medium ${
        cat.id === 'todos' ? 'active' : 'bg-[#FFFDFB] text-[#6E514E]'
      }"
    >
      ${cat.name}
    </button>
  `).join('');

  const renderServices = () => {
    let filtered = SERVICES;

    if (activeCategory !== 'todos') {
      filtered = filtered.filter(s => s.category === activeCategory);
    }

    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(s => 
        s.name.toLowerCase().includes(term) || 
        s.description.toLowerCase().includes(term)
      );
    }

    if (countBadge) {
      countBadge.textContent = `${filtered.length} tratamientos`;
    }

    if (filtered.length === 0) {
      listContainer.innerHTML = `
        <div class="py-12 text-center text-[#6E514E] border border-dashed border-[#E8D5D1] rounded-sm p-8">
          <p class="font-serif text-xl text-[#2D2524]">No se encontraron tratamientos</p>
          <p class="text-xs mt-1">Prueba con otra palabra o selecciona otra categoría.</p>
          <button type="button" id="resetFiltersBtn" class="mt-4 px-4 py-2 text-xs uppercase tracking-wider bg-[#2D2524] text-[#FFFDFB]">
            Ver todos los servicios
          </button>
        </div>
      `;
      document.getElementById('resetFiltersBtn')?.addEventListener('click', () => {
        activeCategory = 'todos';
        if (searchInput) searchInput.value = '';
        searchTerm = '';
        updateActiveTab();
        renderServices();
      });
      return;
    }

    // Group by category if "todos" is selected, otherwise list directly
    let html = '';

    if (activeCategory === 'todos' && !searchTerm) {
      // Grouped view
      SERVICE_CATEGORIES.filter(c => c.id !== 'todos').forEach(cat => {
        const catServices = filtered.filter(s => s.category === cat.id);
        if (catServices.length === 0) return;

        html += `
          <div class="mb-10">
            <div class="flex items-center gap-3 mb-4 pb-2 border-b border-[#E8D5D1]/60">
              <span class="w-2 h-2 rounded-full bg-[#B98F8B]"></span>
              <h3 class="font-serif text-2xl text-[#2D2524] tracking-wide uppercase">${cat.name}</h3>
              <span class="text-xs text-[#B98F8B] font-mono ml-auto">${catServices.length} opciones</span>
            </div>
            <div class="divide-y divide-[#E8D5D1]/40">
              ${catServices.map(s => renderServiceRow(s)).join('')}
            </div>
          </div>
        `;
      });
    } else {
      // Flat list
      html = `
        <div class="divide-y divide-[#E8D5D1]/40">
          ${filtered.map(s => renderServiceRow(s)).join('')}
        </div>
      `;
    }

    listContainer.innerHTML = html;

    // Attach click listeners to all "Reservar" buttons
    listContainer.querySelectorAll('[data-reserve-service]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-reserve-service');
        bookingEngine.open(id);
      });
    });
  };

  const renderServiceRow = (s) => `
    <div class="service-row py-4 px-3 sm:px-4 rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 group">
      <div class="space-y-1 pr-4">
        <div class="flex items-baseline gap-3 flex-wrap">
          <h4 class="font-serif text-lg sm:text-xl text-[#2D2524] group-hover:text-[#6E514E] transition-colors font-medium">${s.name}</h4>
          ${s.featured ? '<span class="text-[10px] uppercase tracking-wider bg-[#E8D5D1] text-[#2D2524] px-2 py-0.5 rounded-xs font-semibold">Destacado</span>' : ''}
        </div>
        <p class="text-xs text-[#6E514E] line-clamp-2 max-w-xl font-normal leading-relaxed">${s.description}</p>
        <div class="flex items-center gap-2 text-xs text-[#B98F8B]">
          <svg class="w-3.5 h-3.5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <span>${s.duration}</span>
        </div>
      </div>
      <div class="flex items-center justify-between sm:justify-end gap-5 pt-2 sm:pt-0 border-t border-[#FAF7F4] sm:border-0">
        <div class="text-right">
          <span class="font-serif text-xl sm:text-2xl font-medium text-[#2D2524] tracking-tight">${s.formattedPrice}</span>
          <span class="block text-[10px] text-[#B98F8B] uppercase tracking-wider">Demo tarifa</span>
        </div>
        <button 
          type="button" 
          data-reserve-service="${s.id}"
          class="px-4 py-2 bg-[#2D2524] text-[#FFFDFB] text-xs uppercase tracking-widest hover:bg-[#6E514E] transition-all rounded-xs whitespace-nowrap shadow-xs flex items-center gap-1.5"
        >
          <span>Reservar</span>
          <svg class="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>
  `;

  const updateActiveTab = () => {
    tabsContainer.querySelectorAll('.cat-pill').forEach(btn => {
      if (btn.getAttribute('data-category') === activeCategory) {
        btn.classList.add('active');
        btn.classList.remove('bg-[#FFFDFB]', 'text-[#6E514E]');
      } else {
        btn.classList.remove('active');
        btn.classList.add('bg-[#FFFDFB]', 'text-[#6E514E]');
      }
    });
  };

  tabsContainer.querySelectorAll('.cat-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      activeCategory = btn.getAttribute('data-category');
      updateActiveTab();
      renderServices();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value;
      renderServices();
    });
  }

  // Initial render
  renderServices();
}

function initSignatureServices(bookingEngine) {
  const container = document.getElementById('signatureServicesGrid');
  if (!container) return;

  // The 6 requested signature treatments
  const signatureList = [
    {
      id: 'mani-rusa-corto',
      name: 'Manicura rusa',
      detail: 'Técnica en seco con torno de precisión y esmaltado impecable',
      price: '34 €',
      duration: '1 h 15 min',
      tag: 'Cuidado de Uñas',
      image: './assets/editorial-manicure.jpg'
    },
    {
      id: 'pedi-semi',
      name: 'Pedicura semipermanente',
      detail: 'Limpieza profunda, exfoliación botánica y brillo de larga duración',
      price: '30,95 €',
      duration: '45 min',
      tag: 'Pies & Bienestar',
      image: './assets/authentic-nail-art.jpg'
    },
    {
      id: 'facial-personalizado',
      name: 'Tratamiento facial personalizado',
      detail: 'Diagnóstico estético y principios activos adaptados a tu tipo de piel',
      price: '45 €',
      duration: '1 h',
      tag: 'Estética Facial',
      image: './assets/hero-facial.jpg'
    },
    {
      id: 'lifting-pestanas',
      name: 'Lifting de pestañas',
      detail: 'Curvatura natural elegante, tinte y nutrición intensiva de queratina',
      price: '35 €',
      duration: '1 h',
      tag: 'Mirada Sublime',
      image: './assets/lashes-brows.jpg'
    },
    {
      id: 'corp-maderoterapia',
      name: 'Maderoterapia corporal',
      detail: 'Técnica moldeadora con maderas nobles para tonificar y drenar',
      price: '45 €',
      duration: '1 h',
      tag: 'Remodelación',
      image: './assets/body-maderoterapia.jpg'
    },
    {
      id: 'masaje-relajante',
      name: 'Masaje relajante',
      detail: 'Pausa y desconexión integral con aceites aromáticos templados',
      price: '40 €',
      duration: '50 min',
      tag: 'Bienestar & Spa',
      image: './assets/studio-interior.jpg'
    }
  ];

  container.innerHTML = signatureList.map((item, idx) => `
    <div class="group relative bg-[#FFFDFB] border border-[#E8D5D1]/80 hover:border-[#B98F8B] transition-all duration-300 flex flex-col justify-between overflow-hidden">
      <!-- Image header with editorial aspect -->
      <div class="relative h-56 sm:h-64 overflow-hidden bg-[#FAF7F4]">
        <img 
          src="${item.image}" 
          alt="${item.name}" 
          class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-[#2D2524]/60 via-transparent to-transparent"></div>
        <span class="absolute top-3 left-3 bg-[#FFFDFB]/95 backdrop-blur-xs text-[#2D2524] text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-xs font-semibold">
          ${item.tag}
        </span>
        <div class="absolute bottom-3 right-3 text-right">
          <span class="font-serif text-2xl text-[#FFFDFB] font-semibold tracking-wide drop-shadow-sm">${item.price}</span>
        </div>
      </div>

      <!-- Content body -->
      <div class="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h4 class="font-serif text-2xl text-[#2D2524] leading-snug group-hover:text-[#6E514E] transition-colors">${item.name}</h4>
          <p class="text-xs text-[#6E514E] mt-2 leading-relaxed font-normal">${item.detail}</p>
        </div>

        <div class="pt-4 mt-4 border-t border-[#FAF7F4] flex items-center justify-between">
          <div class="flex items-center gap-1.5 text-xs text-[#B98F8B]">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <span>${item.duration}</span>
          </div>

          <button 
            type="button" 
            data-signature-reserve="${item.id}"
            class="text-xs uppercase tracking-widest font-semibold text-[#2D2524] hover:text-[#B98F8B] flex items-center gap-1 transition-colors"
          >
            <span>Reservar</span>
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('[data-signature-reserve]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-signature-reserve');
      bookingEngine.open(id);
    });
  });
}

function initGalleryModal() {
  const modal = document.getElementById('galleryLightbox');
  const imgEl = document.getElementById('lightboxImg');
  const captionEl = document.getElementById('lightboxCaption');
  const closeBtn = document.getElementById('closeLightboxBtn');

  if (!modal || !imgEl) return;

  document.querySelectorAll('[data-gallery-item]').forEach(item => {
    item.addEventListener('click', () => {
      const src = item.getAttribute('data-gallery-src');
      const caption = item.getAttribute('data-gallery-caption') || 'TULA CIRA Esthetic & Beauty';
      imgEl.src = src;
      if (captionEl) captionEl.textContent = caption;
      modal.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    });
  });

  const closeModal = () => {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('lightbox-backdrop')) {
      closeModal();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0');
        entry.target.classList.remove('opacity-0', 'translate-y-6');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.reveal-on-scroll').forEach(el => {
    el.classList.add('transition-all', 'duration-700', 'ease-out', 'opacity-0', 'translate-y-6');
    observer.observe(el);
  });
}

function initWhatsAppButtons() {
  const defaultMsg = encodeURIComponent(
    'Hola, me gustaría reservar una cita en TULA CIRA Esthetic & Beauty en Sevilla. ¿Qué disponibilidad tenéis esta semana? Muchas gracias.'
  );
  const waUrl = `https://wa.me/${SALON_INFO.phoneRaw}?text=${defaultMsg}`;

  document.querySelectorAll('[data-whatsapp-direct]').forEach(btn => {
    btn.setAttribute('href', waUrl);
    btn.setAttribute('target', '_blank');
    btn.setAttribute('rel', 'noopener noreferrer');
  });
}
