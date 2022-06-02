// ==================== SHOW POPUP ====================
const popup = document.getElementById('popup'),
  btnPopup = document.getElementById('btn-popup'),
  closePopup = document.getElementById('close-popup');

// ===== POPUP SHOW =====
btnPopup.addEventListener('click', () => {
  popup.showModal();
});

// ===== POPUP HIDDEN =====
closePopup.addEventListener('click', () => {
  popup.close();
});
