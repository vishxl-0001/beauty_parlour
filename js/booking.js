/**
 * TULA CIRA — Esthetic & Beauty
 * Booking Engine & Interactive Drawer Flow
 */

import { SERVICES, SERVICE_CATEGORIES, SALON_INFO } from '../data/services.js';

export class BookingModal {
  constructor() {
    this.currentStep = 1;
    this.selectedCategory = 'faciales';
    this.selectedService = null;
    this.selectedDate = null;
    this.selectedTime = null;
    this.contactData = {
      name: '',
      phone: '',
      email: '',
      notes: ''
    };

    // Calendar state
    this.viewDate = new Date();
    // Default time slots
    this.availableTimeSlots = ['10:00', '11:30', '13:00', '16:00', '17:30', '19:00'];

    this.initElements();
    this.bindEvents();
  }

  initElements() {
    this.drawer = document.getElementById('bookingDrawer');
    this.backdrop = document.getElementById('bookingBackdrop');
    this.panel = document.getElementById('bookingPanel');
    this.closeBtn = document.getElementById('closeBookingBtn');
    this.contentContainer = document.getElementById('bookingStepContent');
    this.stepIndicator = document.getElementById('bookingStepIndicator');
    this.drawerTitle = document.getElementById('bookingDrawerTitle');
    this.drawerSubtitle = document.getElementById('bookingDrawerSubtitle');
  }

  bindEvents() {
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }
    if (this.backdrop) {
      this.backdrop.addEventListener('click', () => this.close());
    }

    // Global triggers for opening booking
    document.querySelectorAll('[data-open-booking]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const serviceId = btn.getAttribute('data-service-id');
        this.open(serviceId);
      });
    });

    // Close on Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !this.drawer.classList.contains('hidden')) {
        this.close();
      }
    });
  }

  open(preselectedServiceId = null) {
    document.body.classList.add('overflow-hidden');
    this.drawer.classList.remove('hidden');

    // Trigger animation
    setTimeout(() => {
      this.backdrop.classList.remove('opacity-0');
      this.backdrop.classList.add('opacity-100');
      this.panel.classList.remove('translate-x-full');
      this.panel.classList.add('translate-x-0');
    }, 10);

    if (preselectedServiceId) {
      const s = SERVICES.find(item => item.id === preselectedServiceId);
      if (s) {
        this.selectedService = s;
        this.selectedCategory = s.category;
        this.currentStep = 3; // jump directly to calendar date selection
        this.render();
        return;
      }
    }

    if (!this.selectedService) {
      this.currentStep = 1;
    }
    this.render();
  }

  close() {
    this.backdrop.classList.remove('opacity-100');
    this.backdrop.classList.add('opacity-0');
    this.panel.classList.remove('translate-x-0');
    this.panel.classList.add('translate-x-full');

    setTimeout(() => {
      this.drawer.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }, 350);
  }

  goToStep(step) {
    this.currentStep = step;
    this.render();
    this.panel.scrollTop = 0;
  }

  render() {
    this.updateHeaderAndProgress();

    switch (this.currentStep) {
      case 1:
        this.renderStep1Categories();
        break;
      case 2:
        this.renderStep2Services();
        break;
      case 3:
        this.renderStep3Date();
        break;
      case 4:
        this.renderStep4Time();
        break;
      case 5:
        this.renderStep5Contact();
        break;
      case 6:
        this.renderStep6Confirmation();
        break;
      default:
        this.renderStep1Categories();
    }
  }

  updateHeaderAndProgress() {
    const titles = {
      1: { title: 'Elige tu tratamiento', sub: 'Paso 1 de 5 · Selecciona la categoría' },
      2: { title: 'Selecciona el servicio', sub: 'Paso 2 de 5 · Tratamientos disponibles' },
      3: { title: 'Selecciona una fecha', sub: 'Paso 3 de 5 · Disponibilidad en Sevilla' },
      4: { title: 'Elige una hora', sub: 'Paso 4 de 5 · Horarios disponibles' },
      5: { title: 'Tus datos de contacto', sub: 'Paso 5 de 5 · Confirmación personalizada' },
      6: { title: 'Solicitud lista', sub: 'TULA CIRA Esthetic & Beauty' }
    };

    const info = titles[this.currentStep] || titles[1];
    if (this.drawerTitle) this.drawerTitle.textContent = info.title;
    if (this.drawerSubtitle) this.drawerSubtitle.textContent = info.sub;

    if (this.stepIndicator) {
      if (this.currentStep === 6) {
        this.stepIndicator.innerHTML = `
          <div class="w-full bg-[#B98F8B] h-1 rounded-full"></div>
        `;
      } else {
        const percent = ((this.currentStep - 1) / 4) * 100;
        this.stepIndicator.innerHTML = `
          <div class="w-full bg-[#E8D5D1] h-1 rounded-full overflow-hidden">
            <div class="bg-[#2D2524] h-full transition-all duration-300" style="width: ${Math.max(15, percent)}%"></div>
          </div>
        `;
      }
    }
  }

  // STEP 1: Categories
  renderStep1Categories() {
    const categories = SERVICE_CATEGORIES.filter(c => c.id !== 'todos');
    
    let html = `
      <div class="space-y-4">
        <p class="text-xs uppercase tracking-widest text-[#6E514E] font-medium">Categorías de belleza y estética</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
    `;

    categories.forEach(cat => {
      const count = SERVICES.filter(s => s.category === cat.id).length;
      const isSelected = this.selectedCategory === cat.id;
      html += `
        <button 
          type="button" 
          data-cat-id="${cat.id}"
          class="step1-cat-btn text-left p-4 rounded-sm border transition-all duration-200 flex flex-col justify-between ${
            isSelected 
              ? 'border-[#2D2524] bg-[#2D2524] text-[#FFFDFB]' 
              : 'border-[#E8D5D1]/60 bg-[#FFFDFB] text-[#2D2524] hover:border-[#B98F8B] hover:bg-[#F8F3F0]'
          }"
        >
          <div class="font-serif text-lg tracking-wide ${isSelected ? 'text-[#FFFDFB]' : 'text-[#2D2524]'}">${cat.name}</div>
          <div class="text-xs mt-2 ${isSelected ? 'text-[#D7B8B4]' : 'text-[#6E514E]'} font-normal">${count} servicios disponibles</div>
        </button>
      `;
    });

    html += `
        </div>
      </div>
    `;

    this.contentContainer.innerHTML = html;

    this.contentContainer.querySelectorAll('.step1-cat-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.selectedCategory = btn.getAttribute('data-cat-id');
        this.goToStep(2);
      });
    });
  }

  // STEP 2: Specific Services in category
  renderStep2Services() {
    const categoryObj = SERVICE_CATEGORIES.find(c => c.id === this.selectedCategory);
    const categoryServices = SERVICES.filter(s => s.category === this.selectedCategory);

    let html = `
      <div class="space-y-4">
        <div class="flex items-center justify-between pb-2 border-b border-[#E8D5D1]/50">
          <button type="button" id="backToStep1Btn" class="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#6E514E] hover:text-[#2D2524] transition-colors">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
            Cambiar categoría
          </button>
          <span class="text-xs uppercase tracking-wider text-[#B98F8B] font-semibold">${categoryObj ? categoryObj.name : ''}</span>
        </div>

        <div class="space-y-2.5">
    `;

    categoryServices.forEach(s => {
      const isSelected = this.selectedService && this.selectedService.id === s.id;
      html += `
        <div class="p-4 bg-[#FFFDFB] rounded-sm border ${isSelected ? 'border-[#2D2524] ring-1 ring-[#2D2524]' : 'border-[#E8D5D1]/60 hover:border-[#B98F8B]'} transition-all flex flex-col justify-between gap-3">
          <div>
            <div class="flex items-start justify-between gap-3">
              <h4 class="font-serif text-lg text-[#2D2524] leading-snug">${s.name}</h4>
              <div class="font-serif text-lg font-medium text-[#2D2524] whitespace-nowrap">${s.formattedPrice}</div>
            </div>
            <p class="text-xs text-[#6E514E] mt-1 line-clamp-2 leading-relaxed">${s.description}</p>
            <div class="flex items-center gap-1 text-[11px] text-[#B98F8B] mt-2 font-medium">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span>${s.duration}</span>
            </div>
          </div>
          <div class="pt-2 border-t border-[#FAF7F4] flex justify-end">
            <button 
              type="button" 
              data-choose-service="${s.id}" 
              class="px-4 py-2 text-xs uppercase tracking-widest font-medium transition-all ${
                isSelected 
                  ? 'bg-[#2D2524] text-[#FFFDFB]' 
                  : 'bg-[#FAF7F4] text-[#2D2524] border border-[#D7B8B4] hover:bg-[#2D2524] hover:text-[#FFFDFB]'
              }"
            >
              ${isSelected ? 'Seleccionado ✓' : 'Elegir tratamiento'}
            </button>
          </div>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;

    this.contentContainer.innerHTML = html;

    const backBtn = document.getElementById('backToStep1Btn');
    if (backBtn) {
      backBtn.addEventListener('click', () => this.goToStep(1));
    }

    this.contentContainer.querySelectorAll('[data-choose-service]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-choose-service');
        this.selectedService = SERVICES.find(s => s.id === id);
        this.goToStep(3);
      });
    });
  }

  // STEP 3: Premium Calendar
  renderStep3Date() {
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const daysWeek = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];

    const year = this.viewDate.getFullYear();
    const month = this.viewDate.getMonth();
    const monthName = months[month];

    // Build days of month
    const firstDay = new Date(year, month, 1);
    // getDay returns 0 for Sunday, so 0->6, 1->0, etc.
    let startDayOffset = firstDay.getDay() - 1;
    if (startDayOffset === -1) startDayOffset = 6;

    const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let html = `
      <div class="space-y-4">
        <!-- Service summary bar -->
        <div class="p-3 bg-[#FAF7F4] border border-[#E8D5D1] rounded-sm flex items-center justify-between">
          <div>
            <div class="text-[11px] uppercase tracking-wider text-[#6E514E]">Servicio seleccionado</div>
            <div class="font-serif text-base text-[#2D2524] font-medium leading-tight">${this.selectedService ? this.selectedService.name : 'Tratamiento'}</div>
            <div class="text-xs text-[#B98F8B] font-medium mt-0.5">${this.selectedService ? this.selectedService.formattedPrice : ''} · ${this.selectedService ? this.selectedService.duration : ''}</div>
          </div>
          <button type="button" id="changeServiceBtn" class="text-xs underline text-[#6E514E] hover:text-[#2D2524]">Cambiar</button>
        </div>

        <div class="bg-[#FFFDFB] p-4 rounded-sm border border-[#E8D5D1]/70">
          <!-- Calendar Header -->
          <div class="flex items-center justify-between mb-4 pb-2 border-b border-[#FAF7F4]">
            <h4 class="font-serif text-xl text-[#2D2524] font-medium tracking-wide">${monthName} ${year}</h4>
            <div class="flex items-center gap-1">
              <button type="button" id="prevMonthBtn" class="p-1.5 rounded text-[#6E514E] hover:bg-[#FAF7F4] hover:text-[#2D2524] transition-colors">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
              </button>
              <button type="button" id="nextMonthBtn" class="p-1.5 rounded text-[#6E514E] hover:bg-[#FAF7F4] hover:text-[#2D2524] transition-colors">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>

          <!-- Weekdays Row -->
          <div class="grid grid-cols-7 gap-1 text-center text-[11px] uppercase tracking-wider text-[#6E514E] font-medium mb-2">
            ${daysWeek.map(d => `<div>${d}</div>`).join('')}
          </div>

          <!-- Days Grid -->
          <div class="grid grid-cols-7 gap-1.5 text-center">
    `;

    // Empty spaces before first day
    for (let i = 0; i < startDayOffset; i++) {
      html += `<div class="h-9"></div>`;
    }

    // Days numbers
    for (let day = 1; day <= lastDayOfMonth; day++) {
      const currentDate = new Date(year, month, day);
      currentDate.setHours(0, 0, 0, 0);

      const dayOfWeek = currentDate.getDay(); // 0 is Sunday
      const isPast = currentDate < today;
      const isSunday = dayOfWeek === 0;
      const isDisabled = isPast || isSunday;

      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const isSelected = this.selectedDate === dateStr;

      html += `
        <button 
          type="button"
          data-date-str="${dateStr}"
          ${isDisabled ? 'disabled' : ''}
          class="calendar-day-btn h-9 w-full flex items-center justify-center text-xs font-medium rounded-sm transition-all ${
            isSelected 
              ? 'selected bg-[#2D2524] text-[#FFFDFB]' 
              : isDisabled
                ? 'text-[#C7A29E]/40 cursor-not-allowed bg-transparent'
                : 'text-[#2D2524] hover:bg-[#E8D5D1]/50 bg-[#FAF7F4]/60'
          }"
        >
          ${day}
        </button>
      `;
    }

    html += `
          </div>
        </div>

        <div class="flex items-center justify-between pt-2">
          <button type="button" id="backToStep2Btn" class="text-xs uppercase tracking-wider text-[#6E514E] hover:text-[#2D2524] flex items-center gap-1">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
            Volver a servicios
          </button>
          <button 
            type="button" 
            id="continueToStep4Btn" 
            ${!this.selectedDate ? 'disabled' : ''} 
            class="btn-luxury-primary text-xs ${!this.selectedDate ? 'opacity-40 cursor-not-allowed' : ''}"
          >
            Continuar a Horas
          </button>
        </div>
      </div>
    `;

    this.contentContainer.innerHTML = html;

    // Events
    document.getElementById('changeServiceBtn')?.addEventListener('click', () => this.goToStep(2));
    document.getElementById('backToStep2Btn')?.addEventListener('click', () => this.goToStep(2));

    document.getElementById('prevMonthBtn')?.addEventListener('click', () => {
      this.viewDate.setMonth(this.viewDate.getMonth() - 1);
      this.renderStep3Date();
    });

    document.getElementById('nextMonthBtn')?.addEventListener('click', () => {
      this.viewDate.setMonth(this.viewDate.getMonth() + 1);
      this.renderStep3Date();
    });

    this.contentContainer.querySelectorAll('[data-date-str]').forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.disabled) return;
        this.selectedDate = btn.getAttribute('data-date-str');
        this.goToStep(4);
      });
    });

    document.getElementById('continueToStep4Btn')?.addEventListener('click', () => {
      if (this.selectedDate) {
        this.goToStep(4);
      }
    });
  }

  // STEP 4: Choose Time Slot
  renderStep4Time() {
    const formattedDatePretty = this.formatDatePretty(this.selectedDate);

    let html = `
      <div class="space-y-5">
        <div class="p-3.5 bg-[#FAF7F4] border border-[#E8D5D1] rounded-sm flex items-center justify-between">
          <div>
            <div class="text-[11px] uppercase tracking-wider text-[#6E514E]">Cita seleccionada</div>
            <div class="font-serif text-lg text-[#2D2524] font-medium leading-tight">${this.selectedService ? this.selectedService.name : ''}</div>
            <div class="text-xs text-[#B98F8B] font-medium mt-1 flex items-center gap-1.5">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
              <span>${formattedDatePretty}</span>
            </div>
          </div>
          <button type="button" id="changeDateBtn" class="text-xs underline text-[#6E514E] hover:text-[#2D2524]">Cambiar fecha</button>
        </div>

        <div>
          <p class="text-xs uppercase tracking-widest text-[#6E514E] font-medium mb-3">Horas disponibles para este día</p>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
    `;

    this.availableTimeSlots.forEach(time => {
      const isSelected = this.selectedTime === time;
      html += `
        <button 
          type="button" 
          data-time-slot="${time}"
          class="time-slot-btn py-3 px-4 border rounded-sm text-center font-medium text-sm transition-all ${
            isSelected 
              ? 'selected bg-[#2D2524] text-[#FFFDFB] border-[#2D2524]' 
              : 'border-[#E8D5D1] bg-[#FFFDFB] text-[#2D2524] hover:border-[#B98F8B] hover:bg-[#FAF7F4]'
          }"
        >
          <span class="block">${time}</span>
          <span class="block text-[10px] text-[#B98F8B] uppercase tracking-wider mt-0.5">Disponible</span>
        </button>
      `;
    });

    html += `
          </div>
          <p class="text-[11px] text-[#6E514E] mt-3 italic text-center">Horario continuo con cita previa en C. Juan Antonio Cavestany, 6</p>
        </div>

        <div class="flex items-center justify-between pt-3 border-t border-[#FAF7F4]">
          <button type="button" id="backToStep3Btn" class="text-xs uppercase tracking-wider text-[#6E514E] hover:text-[#2D2524] flex items-center gap-1">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
            Volver a fecha
          </button>
          <button 
            type="button" 
            id="continueToStep5Btn" 
            ${!this.selectedTime ? 'disabled' : ''} 
            class="btn-luxury-primary text-xs ${!this.selectedTime ? 'opacity-40 cursor-not-allowed' : ''}"
          >
            Continuar a tus datos
          </button>
        </div>
      </div>
    `;

    this.contentContainer.innerHTML = html;

    document.getElementById('changeDateBtn')?.addEventListener('click', () => this.goToStep(3));
    document.getElementById('backToStep3Btn')?.addEventListener('click', () => this.goToStep(3));

    this.contentContainer.querySelectorAll('[data-time-slot]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.selectedTime = btn.getAttribute('data-time-slot');
        this.goToStep(5);
      });
    });

    document.getElementById('continueToStep5Btn')?.addEventListener('click', () => {
      if (this.selectedTime) {
        this.goToStep(5);
      }
    });
  }

  // STEP 5: Contact Details Form
  renderStep5Contact() {
    const formattedDatePretty = this.formatDatePretty(this.selectedDate);

    let html = `
      <form id="bookingContactForm" class="space-y-4">
        <!-- Summary Box -->
        <div class="p-4 bg-[#FAF7F4] border border-[#E8D5D1] rounded-sm space-y-2">
          <div class="text-[11px] uppercase tracking-widest text-[#B98F8B] font-semibold">Resumen de tu reserva</div>
          <div class="flex items-start justify-between">
            <div class="font-serif text-lg text-[#2D2524]">${this.selectedService ? this.selectedService.name : ''}</div>
            <div class="font-serif text-lg font-medium text-[#2D2524]">${this.selectedService ? this.selectedService.formattedPrice : ''}</div>
          </div>
          <div class="text-xs text-[#6E514E] flex flex-wrap gap-x-4 gap-y-1 pt-1 border-t border-[#E8D5D1]/40">
            <span>📅 ${formattedDatePretty}</span>
            <span>⏰ ${this.selectedTime} h</span>
            <span>⏳ ${this.selectedService ? this.selectedService.duration : ''}</span>
          </div>
        </div>

        <div class="space-y-3 pt-1">
          <div>
            <label class="block text-xs uppercase tracking-wider text-[#2D2524] font-medium mb-1">Nombre completo *</label>
            <input 
              type="text" 
              id="clientNameInput" 
              required
              value="${this.contactData.name}"
              placeholder="Ej. Carmen Sánchez" 
              class="w-full px-3.5 py-2.5 bg-[#FFFDFB] border border-[#E8D5D1] text-sm text-[#2D2524] focus:outline-none focus:border-[#2D2524] transition-colors rounded-sm"
            />
          </div>

          <div>
            <label class="block text-xs uppercase tracking-wider text-[#2D2524] font-medium mb-1">Teléfono móvil *</label>
            <input 
              type="tel" 
              id="clientPhoneInput" 
              required
              value="${this.contactData.phone}"
              placeholder="Ej. +34 600 00 00 00" 
              class="w-full px-3.5 py-2.5 bg-[#FFFDFB] border border-[#E8D5D1] text-sm text-[#2D2524] focus:outline-none focus:border-[#2D2524] transition-colors rounded-sm"
            />
          </div>

          <div>
            <label class="block text-xs uppercase tracking-wider text-[#2D2524] font-medium mb-1">Correo electrónico</label>
            <input 
              type="email" 
              id="clientEmailInput" 
              value="${this.contactData.email}"
              placeholder="tu.email@ejemplo.com" 
              class="w-full px-3.5 py-2.5 bg-[#FFFDFB] border border-[#E8D5D1] text-sm text-[#2D2524] focus:outline-none focus:border-[#2D2524] transition-colors rounded-sm"
            />
          </div>

          <div>
            <label class="block text-xs uppercase tracking-wider text-[#2D2524] font-medium mb-1">Observaciones o preferencias</label>
            <textarea 
              id="clientNotesInput" 
              rows="2" 
              placeholder="¿Alguna necesidad específica o diseño especial?" 
              class="w-full px-3.5 py-2 bg-[#FFFDFB] border border-[#E8D5D1] text-sm text-[#2D2524] focus:outline-none focus:border-[#2D2524] transition-colors rounded-sm"
            >${this.contactData.notes}</textarea>
          </div>
        </div>

        <div class="flex items-center justify-between pt-4 border-t border-[#FAF7F4]">
          <button type="button" id="backToStep4Btn" class="text-xs uppercase tracking-wider text-[#6E514E] hover:text-[#2D2524] flex items-center gap-1">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
            Volver a hora
          </button>
          <button 
            type="submit" 
            class="btn-luxury-primary text-xs"
          >
            Confirmar solicitud
          </button>
        </div>
      </form>
    `;

    this.contentContainer.innerHTML = html;

    document.getElementById('backToStep4Btn')?.addEventListener('click', () => this.goToStep(4));

    const form = document.getElementById('bookingContactForm');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('clientNameInput').value.trim();
      const phone = document.getElementById('clientPhoneInput').value.trim();
      const email = document.getElementById('clientEmailInput').value.trim();
      const notes = document.getElementById('clientNotesInput').value.trim();

      if (!name || !phone) {
        alert('Por favor, indica tu nombre y teléfono de contacto.');
        return;
      }

      this.contactData = { name, phone, email, notes };
      this.goToStep(6);
    });
  }

  // STEP 6: Confirmation Screen & WhatsApp Bridge
  renderStep6Confirmation() {
    const formattedDatePretty = this.formatDatePretty(this.selectedDate);
    const serviceName = this.selectedService ? this.selectedService.name : 'Tratamiento';
    const clientName = this.contactData.name || 'Cliente';

    // Build prefilled WhatsApp message
    const waText = encodeURIComponent(
      `Hola, soy ${clientName}. Me gustaría reservar una cita en TULA CIRA para el servicio de *${serviceName}* (${this.selectedService ? this.selectedService.formattedPrice : ''}) el día *${formattedDatePretty}* a las *${this.selectedTime} h*. ¿Tenéis disponibilidad? Muchas gracias.`
    );
    const waUrl = `https://wa.me/${SALON_INFO.phoneRaw}?text=${waText}`;

    let html = `
      <div class="space-y-6 text-center py-4 animate-fade-in">
        <div class="w-16 h-16 mx-auto bg-[#E8D5D1]/60 rounded-full flex items-center justify-center text-[#2D2524]">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M5 13l4 4L19 7"/></svg>
        </div>

        <div>
          <span class="inline-block px-3 py-1 bg-[#FAF7F4] border border-[#B98F8B] text-[#6E514E] text-[11px] uppercase tracking-widest font-semibold mb-2">
            SOLICITUD ENVIADA
          </span>
          <h3 class="font-serif text-3xl text-[#2D2524] tracking-wide">Tu cita está en preparación</h3>
          <p class="text-xs text-[#6E514E] mt-2 max-w-xs mx-auto leading-relaxed">
            Gracias por elegir <span class="font-semibold text-[#2D2524]">TULA CIRA Esthetic & Beauty</span>. Te esperamos en nuestro estudio en Sevilla.
          </p>
        </div>

        <!-- Appointment Card -->
        <div class="bg-[#FFFDFB] p-5 border border-[#E8D5D1] rounded-sm text-left max-w-sm mx-auto shadow-sm space-y-3">
          <div class="flex items-center justify-between pb-2 border-b border-[#FAF7F4]">
            <span class="text-[11px] uppercase tracking-widest text-[#B98F8B]">Detalle de reserva</span>
            <span class="font-serif text-lg font-medium text-[#2D2524]">${this.selectedService ? this.selectedService.formattedPrice : ''}</span>
          </div>
          <div>
            <div class="font-serif text-xl text-[#2D2524] leading-snug">${serviceName}</div>
            <div class="text-xs text-[#6E514E] mt-1">Duración estimada: ${this.selectedService ? this.selectedService.duration : ''}</div>
          </div>
          <div class="pt-2 border-t border-[#FAF7F4] text-xs space-y-1 text-[#2D2524]">
            <div><strong>Fecha:</strong> ${formattedDatePretty}</div>
            <div><strong>Hora:</strong> ${this.selectedTime} h</div>
            <div><strong>Nombre:</strong> ${clientName}</div>
            <div><strong>Teléfono:</strong> ${this.contactData.phone}</div>
            <div><strong>Ubicación:</strong> ${SALON_INFO.addressShort}</div>
          </div>
        </div>

        <!-- WhatsApp Instant Action -->
        <div class="space-y-3 max-w-sm mx-auto">
          <a 
            href="${waUrl}" 
            target="_blank" 
            rel="noopener noreferrer"
            class="btn-luxury-rose w-full text-xs py-3.5 tracking-wider font-semibold"
          >
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.149.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.588-5.771-5.768-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.074-1.127-.066-.271-.088-.619-.202-1.069-.398-1.895-.824-3.125-2.748-3.219-2.875-.095-.127-.777-1.033-.777-1.969 0-.937.49-1.398.664-1.589.174-.19.38-.238.507-.238.127 0 .253.001.364.007.119.006.277-.045.433.329.163.392.556 1.356.604 1.455.048.099.08.214.016.341-.063.127-.095.206-.19.317-.095.111-.2.248-.286.333-.095.095-.194.198-.083.389.111.19.493.813 1.058 1.316.727.647 1.34.848 1.531.943.19.095.301.079.412-.048.111-.127.476-.555.603-.745.127-.19.254-.159.428-.095.175.063 1.111.524 1.301.619.19.095.317.143.365.222.047.079.047.46-.096.865z"/></svg>
            CONTINUAR POR WHATSAPP
          </a>

          <button 
            type="button" 
            id="finishBookingBtn"
            class="btn-luxury-outline w-full text-xs py-3"
          >
            Cerrar ventana
          </button>
        </div>
      </div>
    `;

    this.contentContainer.innerHTML = html;

    document.getElementById('finishBookingBtn')?.addEventListener('click', () => {
      this.close();
      // Reset state after a delay
      setTimeout(() => {
        this.currentStep = 1;
        this.selectedService = null;
        this.selectedDate = null;
        this.selectedTime = null;
      }, 500);
    });
  }

  formatDatePretty(dateStr) {
    if (!dateStr) return '';
    const parts = dateStr.split('-');
    const date = new Date(parts[0], parseInt(parts[1]) - 1, parts[2]);
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    return `${days[date.getDay()]}, ${date.getDate()} de ${months[date.getMonth()]}`;
  }
}
