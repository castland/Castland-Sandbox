/* =============================================
   THE SETLIST — Checkout (checkout.js)
   ============================================= */

const selectedServices = JSON.parse(sessionStorage.getItem('ts_selected') || '[]');

// DOM refs
const summaryList    = document.getElementById('summary-list');
const summaryTotal   = document.getElementById('summary-total');
const summaryReserve = document.getElementById('summary-reserve');
const dropzone       = document.getElementById('dropzone');
const fileInput      = document.getElementById('file-input');
const previewGrid    = document.getElementById('preview-grid');
const quoteForm      = document.getElementById('quote-form');
const formSection    = document.getElementById('form-section');
const confirmSection = document.getElementById('confirm-section');
const confirmTotal   = document.getElementById('confirm-total');
const confirmReserve = document.getElementById('confirm-reserve');

let uploadedFiles = [];

// ── Redirect if empty ──
if (selectedServices.length === 0) {
  window.location.href = 'index.html';
}

// ── Render summary ──
function renderSummary() {
  summaryList.innerHTML = '';
  let total = 0;
  selectedServices.forEach(s => {
    total += s.price;
    const row = document.createElement('div');
    row.className = 'summary-item';
    row.innerHTML = `<span>${s.icon} ${s.name}</span><span>${formatCurrency(s.price)}</span>`;
    summaryList.appendChild(row);
  });
  summaryTotal.textContent = formatCurrency(total);
  summaryReserve.textContent = formatCurrency(total * 0.5);
  return total;
}

// ── Dropzone ──
dropzone.addEventListener('click', () => fileInput.click());

dropzone.addEventListener('dragover', e => {
  e.preventDefault();
  dropzone.classList.add('dragover');
});
dropzone.addEventListener('dragleave', () => dropzone.classList.remove('dragover'));
dropzone.addEventListener('drop', e => {
  e.preventDefault();
  dropzone.classList.remove('dragover');
  handleFiles(e.dataTransfer.files);
});

fileInput.addEventListener('change', () => handleFiles(fileInput.files));

function handleFiles(files) {
  Array.from(files).forEach(file => {
    if (!file.type.startsWith('image/')) return;
    uploadedFiles.push(file);
    const reader = new FileReader();
    reader.onload = e => {
      const img = document.createElement('img');
      img.src = e.target.result;
      img.alt = file.name;
      previewGrid.appendChild(img);
    };
    reader.readAsDataURL(file);
  });
}

// ── Form submit ──
quoteForm.addEventListener('submit', e => {
  e.preventDefault();

  const data = {
    id: 'ORD-' + Date.now(),
    date: new Date().toISOString(),
    client: {
      name:     document.getElementById('client-name').value,
      email:    document.getElementById('client-email').value,
      phone:    document.getElementById('client-phone').value,
    },
    event: {
      date:     document.getElementById('event-date').value,
      location: document.getElementById('event-location').value,
      guests:   document.getElementById('event-guests').value,
      notes:    document.getElementById('event-notes').value,
    },
    services: selectedServices,
    total:    selectedServices.reduce((a, s) => a + s.price, 0),
    status:   'pending',
    images:   uploadedFiles.length,
  };

  // Guardar orden
  const orders = loadOrders();
  orders.push(data);
  saveOrders(orders);

  // Mostrar confirmación
  confirmTotal.textContent   = formatCurrency(data.total);
  confirmReserve.textContent = formatCurrency(data.total * 0.5);
  document.getElementById('confirm-id').textContent = data.id;

  formSection.classList.add('hidden');
  confirmSection.classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

renderSummary();
