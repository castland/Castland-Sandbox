/* =============================================
   THE SETLIST — Home / Catálogo (app.js)
   ============================================= */

let services = loadServices();
let selected = {};
let activeCategory = 'Todos';

const CATEGORIES = ['Todos', 'Catering', 'Decoración', 'Música', 'Postres', 'Photobooth'];

const catContainer  = document.getElementById('cat-container');
const servicesGrid  = document.getElementById('services-grid');
const budgetItems   = document.getElementById('budget-items');
const budgetTotal   = document.getElementById('budget-total');
const budgetReserve = document.getElementById('budget-reserve');
const checkoutBtn   = document.getElementById('checkout-btn');
const packagesGrid  = document.getElementById('packages-grid');

// Mobile drawer elements
const budgetFab          = document.getElementById('budget-fab');
const budgetDrawer       = document.getElementById('budget-drawer');
const budgetDrawerClose  = document.getElementById('budget-drawer-close');
const budgetDrawerOverlay= document.getElementById('budget-drawer-overlay');
const budgetItemsMobile  = document.getElementById('budget-items-mobile');
const budgetTotalMobile  = document.getElementById('budget-total-mobile');
const budgetReserveMobile= document.getElementById('budget-reserve-mobile');
const checkoutBtnMobile  = document.getElementById('checkout-btn-mobile');
const fabCount           = document.getElementById('fab-count');

// Hamburger menu
const hamburgerBtn      = document.getElementById('hamburger-btn');
const mobileNav         = document.getElementById('mobile-nav');
const mobileNavOverlay  = document.getElementById('mobile-nav-overlay');

const SVG_CHECK = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" width="18" height="18"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>';
const SVG_PLUS  = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" width="18" height="18"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/></svg>';

function init() {
  renderCategories();
  renderServices();
  renderBudget();
  renderPackages();
  initHamburger();
  initBudgetDrawer();
}

// ── Hamburger menu ──
function initHamburger() {
  if (!hamburgerBtn) return;
  hamburgerBtn.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    hamburgerBtn.classList.toggle('open', open);
    mobileNavOverlay.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  mobileNavOverlay.addEventListener('click', closeMobileNav);
  mobileNav.querySelectorAll('.mobile-nav__link').forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });
}

function closeMobileNav() {
  mobileNav.classList.remove('open');
  hamburgerBtn.classList.remove('open');
  mobileNavOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

// ── Budget drawer (mobile) ──
function initBudgetDrawer() {
  if (!budgetFab) return;
  budgetFab.addEventListener('click', openBudgetDrawer);
  budgetDrawerClose.addEventListener('click', closeBudgetDrawer);
  budgetDrawerOverlay.addEventListener('click', closeBudgetDrawer);
  checkoutBtnMobile.addEventListener('click', function() {
    if (Object.keys(selected).length === 0) return;
    sessionStorage.setItem('ts_selected', JSON.stringify(Object.values(selected)));
    window.location.href = 'checkout.html';
  });
}

function openBudgetDrawer() {
  budgetDrawer.classList.add('open');
  budgetDrawerOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeBudgetDrawer() {
  budgetDrawer.classList.remove('open');
  budgetDrawerOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

// ── Categories ──
function renderCategories() {
  catContainer.innerHTML = '';
  const iconMap = {
    'Todos':      '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="14" height="14"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"/></svg>',
    'Catering':   CATEGORY_ICONS['Catering'],
    'Decoración': CATEGORY_ICONS['Decoración'],
    'Música':     CATEGORY_ICONS['Música'],
    'Postres':    CATEGORY_ICONS['Postres'],
    'Photobooth': CATEGORY_ICONS['Photobooth'],
  };

  CATEGORIES.forEach(function(cat) {
    const btn = document.createElement('button');
    btn.className = 'cat-btn' + (cat === activeCategory ? ' active' : '');
    btn.style.cssText = 'display:flex;align-items:center;gap:6px;';
    btn.innerHTML = (iconMap[cat] || '') + ' ' + cat;
    btn.addEventListener('click', function() {
      activeCategory = cat;
      renderCategories();
      renderServices();
    });
    catContainer.appendChild(btn);
  });
}

// ── Services ──
function renderServices() {
  const filtered = activeCategory === 'Todos'
    ? services
    : services.filter(function(s) { return s.category === activeCategory; });

  servicesGrid.innerHTML = '';

  filtered.forEach(function(s) {
    const isSelected = !!selected[s.id];
    const card = document.createElement('div');
    card.className = 'service-card' + (isSelected ? ' selected' : '') + (!s.active ? ' inactive' : '');

    card.innerHTML =
      '<div class="card-img"></div>' +
      '<div class="card-body">' +
        '<span class="card-category">' + s.category + '</span>' +
        '<h2 class="card-name">' + s.name + '</h2>' +
        '<p class="card-desc">' + s.desc + '</p>' +
      '</div>' +
      '<div class="card-footer">' +
        '<span class="card-price">' + formatCurrency(s.price) + '</span>' +
        '<button class="card-toggle" title="' + (isSelected ? 'Quitar' : 'Agregar') + '">' +
          (isSelected ? SVG_CHECK : SVG_PLUS) +
        '</button>' +
      '</div>';

    const imgWrap = card.querySelector('.card-img');
    const img = new Image();
    img.alt = s.name;
    img.loading = 'lazy';
    img.style.cssText = 'width:100%;height:100%;object-fit:cover;display:block;';
    img.onerror = function() { imgWrap.innerHTML = CATEGORY_ICONS[s.category] || ''; };
    img.src = SERVICE_IMAGES[s.id];
    imgWrap.appendChild(img);

    card.querySelector('.card-toggle').addEventListener('click', function() { toggleService(s); });
    servicesGrid.appendChild(card);
  });
}

// ── Toggle service ──
function toggleService(s) {
  if (selected[s.id]) delete selected[s.id];
  else selected[s.id] = s;
  renderServices();
  renderBudget();
  updateCheckoutBtn();
}

// ── Budget widget (desktop + mobile drawer) ──
function renderBudget() {
  const items = Object.values(selected);
  const empty = '<p class="budget-empty">Aún no has seleccionado servicios.</p>';

  if (items.length === 0) {
    budgetItems.innerHTML = empty;
    budgetTotal.textContent = formatCurrency(0);
    budgetReserve.innerHTML = 'Reserva (50%): <strong>' + formatCurrency(0) + '</strong>';
    if (budgetItemsMobile) {
      budgetItemsMobile.innerHTML = empty;
      budgetTotalMobile.textContent = formatCurrency(0);
      budgetReserveMobile.innerHTML = 'Reserva (50%): <strong>' + formatCurrency(0) + '</strong>';
    }
    return;
  }

  let total = 0;
  budgetItems.innerHTML = '';
  if (budgetItemsMobile) budgetItemsMobile.innerHTML = '';

  items.forEach(function(s) {
    total += s.price;

    // Desktop
    const row = document.createElement('div');
    row.className = 'budget-item';
    row.innerHTML = '<span>' + s.name + '</span><span>' + formatCurrency(s.price) + '</span>';
    budgetItems.appendChild(row);

    // Mobile drawer
    if (budgetItemsMobile) {
      const rowM = row.cloneNode(true);
      budgetItemsMobile.appendChild(rowM);
    }
  });

  budgetTotal.textContent = formatCurrency(total);
  budgetReserve.innerHTML = 'Reserva (50%): <strong>' + formatCurrency(total * 0.5) + '</strong>';

  if (budgetTotalMobile) {
    budgetTotalMobile.textContent = formatCurrency(total);
    budgetReserveMobile.innerHTML = 'Reserva (50%): <strong>' + formatCurrency(total * 0.5) + '</strong>';
  }
}

function updateCheckoutBtn() {
  const count = Object.keys(selected).length;
  const label = count > 0
    ? 'Continuar con ' + count + ' servicio' + (count > 1 ? 's' : '')
    : 'Selecciona servicios';

  checkoutBtn.textContent = label;
  checkoutBtn.disabled = count === 0;

  if (checkoutBtnMobile) {
    checkoutBtnMobile.textContent = label;
    checkoutBtnMobile.disabled = count === 0;
  }

  // FAB badge
  if (fabCount) {
    fabCount.style.display = count > 0 ? 'flex' : 'none';
    fabCount.textContent = count;
  }
}

checkoutBtn.addEventListener('click', function() {
  if (Object.keys(selected).length === 0) return;
  sessionStorage.setItem('ts_selected', JSON.stringify(Object.values(selected)));
  window.location.href = 'checkout.html';
});

// ── Packages ──
function renderPackages() {
  if (!packagesGrid) return;
  packagesGrid.innerHTML = '';

  const SVG_TICK = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" width="14" height="14"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>';

  PACKAGES.forEach(function(pkg) {
    const pkgServices = pkg.serviceIds
      .map(function(id) { return services.find(function(s) { return s.id === id; }); })
      .filter(Boolean);
    const subtotal = pkgServices.reduce(function(a, s) { return a + s.price; }, 0);
    const total    = subtotal * (1 - pkg.discount);

    const serviceItems = pkgServices.map(function(s) {
      return '<div class="package-service-item">' + SVG_TICK + s.name + '</div>';
    }).join('');

    const card = document.createElement('div');
    card.className = 'package-card';
    card.innerHTML =
      '<div class="package-card__header">' +
        '<div class="package-card__icon">' + pkg.icon + '</div>' +
        '<h3 class="package-card__name">' + pkg.name + '</h3>' +
      '</div>' +
      '<p class="package-card__desc">' + pkg.desc + '</p>' +
      '<div class="package-card__services">' + serviceItems + '</div>' +
      '<div class="package-card__footer">' +
        '<span class="package-discount">' + (pkg.discount * 100) + '% descuento</span>' +
        '<div style="text-align:right">' +
          '<div style="font-size:12px;color:var(--text-secondary);text-decoration:line-through;">' + formatCurrency(subtotal) + '</div>' +
          '<div class="package-total">' + formatCurrency(total) + '</div>' +
        '</div>' +
      '</div>' +
      '<button class="btn btn--outline w-full btn--sm" style="margin-top:4px;">Seleccionar paquete</button>';

    card.querySelector('button').addEventListener('click', function() { applyPackage(pkgServices); });
    packagesGrid.appendChild(card);
  });
}

function applyPackage(pkgServices) {
  pkgServices.forEach(function(s) { if (s.active) selected[s.id] = s; });
  renderServices();
  renderBudget();
  updateCheckoutBtn();
  // On desktop scroll to widget; on mobile open drawer
  if (window.innerWidth <= 900) {
    openBudgetDrawer();
  } else {
    document.querySelector('.budget-widget').scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

init();
