/* =============================================
   THE SETLIST — Admin Panel (admin.js)
   ============================================= */

let services = loadServices();
let orders   = loadOrders();
let currentTab = 'services';

// DOM refs
const loginSection  = document.getElementById('login-section');
const adminSection  = document.getElementById('admin-section');
const loginForm     = document.getElementById('login-form');
const loginError    = document.getElementById('login-error');
const logoutBtn     = document.getElementById('logout-btn');
const tabServices   = document.getElementById('tab-services');
const tabOrders     = document.getElementById('tab-orders');
const servicesTable = document.getElementById('services-table');
const ordersTable   = document.getElementById('orders-table');
const modalOverlay  = document.getElementById('modal-overlay');
const editForm      = document.getElementById('edit-form');
const cancelEditBtn = document.getElementById('cancel-edit');
const clearOrdersBtn = document.getElementById('clear-orders-btn');

let editingService = null;

// ── Auth ──
function checkAuth() {
  sessionStorage.getItem('ts_admin_auth') === 'true' ? showAdmin() : showLogin();
}
function showLogin() {
  loginSection.classList.remove('hidden');
  adminSection.classList.add('hidden');
}
function showAdmin() {
  loginSection.classList.add('hidden');
  adminSection.classList.remove('hidden');
  renderTab();
}

loginForm.addEventListener('submit', e => {
  e.preventDefault();
  const user = document.getElementById('login-user').value;
  const pass = document.getElementById('login-pass').value;
  if (user === ADMIN_CREDENTIALS.user && pass === ADMIN_CREDENTIALS.pass) {
    sessionStorage.setItem('ts_admin_auth', 'true');
    showAdmin();
  } else {
    loginError.textContent = 'Credenciales incorrectas. Intenta de nuevo.';
    loginError.style.display = 'block';
  }
});

logoutBtn.addEventListener('click', () => {
  sessionStorage.removeItem('ts_admin_auth');
  showLogin();
});

// ── Mobile nav (hamburger) ──
const hamburgerBtn     = document.getElementById('hamburger-btn');
const mobileNav        = document.getElementById('mobile-nav');
const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
const logoutBtnMobile  = document.getElementById('logout-btn-mobile');

function closeMobileNav() {
  mobileNav.classList.remove('open');
  hamburgerBtn.classList.remove('open');
  mobileNavOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

hamburgerBtn.addEventListener('click', () => {
  const open = mobileNav.classList.toggle('open');
  hamburgerBtn.classList.toggle('open', open);
  mobileNavOverlay.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
});
mobileNavOverlay.addEventListener('click', closeMobileNav);

logoutBtnMobile.addEventListener('click', () => {
  closeMobileNav();
  sessionStorage.removeItem('ts_admin_auth');
  showLogin();
});

// ── Tabs ──
tabServices.addEventListener('click', () => switchTab('services'));
tabOrders.addEventListener('click', () => switchTab('orders'));

function switchTab(tab) {
  currentTab = tab;
  renderTab();
}

function renderTab() {
  if (currentTab === 'services') {
    tabServices.classList.add('active');
    tabOrders.classList.remove('active');
    servicesTable.classList.remove('hidden');
    ordersTable.classList.add('hidden');
    renderServicesTable();
  } else {
    tabOrders.classList.add('active');
    tabServices.classList.remove('active');
    ordersTable.classList.remove('hidden');
    servicesTable.classList.add('hidden');
    renderOrdersTable();
  }
}

// ── Services Table ──
function renderServicesTable() {
  const tbody = servicesTable.querySelector('tbody');
  tbody.innerHTML = '';
  services.forEach(s => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td data-label="Servicio">${s.name}</td>
      <td data-label="Categoría">${s.category}</td>
      <td data-label="Precio">${formatCurrency(s.price)}</td>
      <td data-label="Activo">
        <label class="toggle-switch">
          <input type="checkbox" ${s.active ? 'checked' : ''} data-id="${s.id}">
          <span class="toggle-slider"></span>
        </label>
      </td>
      <td data-label="Acciones">
        <button class="btn btn--sm btn--outline edit-btn" data-id="${s.id}">Editar</button>
      </td>`;
    tbody.appendChild(tr);
  });

  tbody.querySelectorAll('.toggle-switch input').forEach(input => {
    input.addEventListener('change', e => {
      const id = Number(e.target.dataset.id);
      const service = services.find(s => s.id === id);
      if (service) {
        service.active = e.target.checked;
        saveServices(services);
        showToast(`${service.name} ${service.active ? 'activado' : 'desactivado'}`);
      }
    });
  });

  tbody.querySelectorAll('.edit-btn').forEach(btn => {
    btn.addEventListener('click', e => openEditModal(Number(e.target.dataset.id)));
  });
}

// ── Orders Table ──
function renderOrdersTable() {
  orders = loadOrders(); // refresh from storage
  const tbody = ordersTable.querySelector('tbody');
  const countEl = document.getElementById('orders-count');
  tbody.innerHTML = '';

  if (countEl) countEl.textContent = `${orders.length} orden${orders.length !== 1 ? 'es' : ''}`;

  if (orders.length === 0) {
    tbody.innerHTML = '<tr><td colspan="8" style="text-align:center;color:var(--text-secondary);padding:32px;">No hay órdenes registradas.</td></tr>';
    return;
  }

  orders.forEach((o, idx) => {
    const statusBadge = o.status === 'completed' ? 'badge--active' : 'badge--pending';
    const statusLabel = o.status === 'completed' ? 'Completada' : 'Pendiente';
    const eventDate   = o.event.date ? new Date(o.event.date + 'T12:00:00').toLocaleDateString('es-CR') : '—';

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="td-expand">
        <button class="order-expand-btn" data-idx="${idx}" title="Ver detalles">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg>
        </button>
      </td>
      <td data-label="ID Orden" style="font-weight:600;color:var(--accent)">${o.id}</td>
      <td data-label="Cliente">${o.client.name}</td>
      <td data-label="Email">${o.client.email}</td>
      <td data-label="Fecha">${eventDate}</td>
      <td data-label="Total">${formatCurrency(o.total)}</td>
      <td data-label="Estado"><span class="badge ${statusBadge}">${statusLabel}</span></td>
      <td data-label="Acciones">
        <button class="btn btn--danger btn--sm delete-order-btn" data-idx="${idx}" title="Eliminar orden">✕</button>
      </td>`;
    tbody.appendChild(tr);

    // Detail row
    const detailTr = document.createElement('tr');
    detailTr.className = 'order-detail-row hidden';
    detailTr.id = `order-detail-${idx}`;
    const servicesList = (o.services || []).map(s => `<li>${s.name} — ${formatCurrency(s.price)}</li>`).join('');
    detailTr.innerHTML = `
      <td colspan="8">
        <div class="order-detail-inner">
          <div>
            <h4>Datos del cliente</h4>
            <p><strong>Nombre:</strong> ${o.client.name}</p>
            <p><strong>Email:</strong> ${o.client.email}</p>
            <p><strong>Teléfono:</strong> ${o.client.phone || '—'}</p>
          </div>
          <div>
            <h4>Detalles del evento</h4>
            <p><strong>Fecha:</strong> ${eventDate}</p>
            <p><strong>Ubicación:</strong> ${o.event.location || '—'}</p>
            <p><strong>Personas:</strong> ${o.event.guests || '—'}</p>
            ${o.event.notes ? `<p><strong>Notas:</strong> ${o.event.notes}</p>` : ''}
          </div>
          <div>
            <h4>Servicios contratados</h4>
            <ul>${servicesList || '<li>Sin detalle</li>'}</ul>
          </div>
          <div>
            <h4>Resumen financiero</h4>
            <p><strong>Total:</strong> ${formatCurrency(o.total)}</p>
            <p><strong>Reserva (50%):</strong> ${formatCurrency(o.total * 0.5)}</p>
            <p><strong>Saldo pendiente:</strong> ${formatCurrency(o.total * 0.5)}</p>
            <p><strong>Imágenes adjuntas:</strong> ${o.images || 0}</p>
            <div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap;">
              ${o.status !== 'completed'
                ? `<button class="btn btn--primary btn--sm complete-btn" data-idx="${idx}">Marcar como completada</button>`
                : `<span style="color:var(--success);font-size:13px;font-weight:600;">✓ Orden completada</span>`
              }
              <button class="btn btn--danger btn--sm delete-order-btn" data-idx="${idx}">Eliminar orden</button>
            </div>
          </div>
        </div>
      </td>`;
    tbody.appendChild(detailTr);
  });

  // Expand toggle
  tbody.querySelectorAll('.order-expand-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      const idx = e.currentTarget.dataset.idx;
      const detail = document.getElementById(`order-detail-${idx}`);
      const isOpen = !detail.classList.contains('hidden');
      detail.classList.toggle('hidden', isOpen);
      e.currentTarget.classList.toggle('open', !isOpen);
    });
  });

  // Complete button
  tbody.querySelectorAll('.complete-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      const idx = Number(e.target.dataset.idx);
      orders[idx].status = 'completed';
      saveOrders(orders);
      renderOrdersTable();
      showToast('Orden marcada como completada');
    });
  });

  // Delete single order
  tbody.querySelectorAll('.delete-order-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      const idx = Number(e.target.closest('button').dataset.idx);
      if (!confirm(`¿Eliminar la orden ${orders[idx].id}? Esta acción no se puede deshacer.`)) return;
      orders.splice(idx, 1);
      saveOrders(orders);
      renderOrdersTable();
      showToast('Orden eliminada');
    });
  });
}

// ── Clear all orders ──
clearOrdersBtn.addEventListener('click', () => {
  if (orders.length === 0) return;
  if (!confirm('¿Eliminar TODAS las órdenes? Esta acción no se puede deshacer.')) return;
  orders = [];
  saveOrders(orders);
  renderOrdersTable();
  showToast('Todas las órdenes eliminadas');
});

// ── Edit Modal ──
function openEditModal(id) {
  editingService = services.find(s => s.id === id);
  if (!editingService) return;
  document.getElementById('edit-name').value  = editingService.name;
  document.getElementById('edit-price').value = editingService.price;
  document.getElementById('edit-desc').value  = editingService.desc;
  modalOverlay.classList.add('open');
}

function closeEditModal() {
  modalOverlay.classList.remove('open');
  editingService = null;
}

cancelEditBtn.addEventListener('click', closeEditModal);
modalOverlay.addEventListener('click', e => {
  if (e.target === modalOverlay) closeEditModal();
});

editForm.addEventListener('submit', e => {
  e.preventDefault();
  if (!editingService) return;
  editingService.name  = document.getElementById('edit-name').value;
  editingService.price = Number(document.getElementById('edit-price').value);
  editingService.desc  = document.getElementById('edit-desc').value;
  saveServices(services);
  renderServicesTable();
  closeEditModal();
  showToast('Servicio actualizado correctamente');
});

// ── Toast ──
function showToast(msg) {
  const toast = document.createElement('div');
  toast.className = 'toast success';
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 100);
  setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 300); }, 2500);
}

checkAuth();
