/**
 * modal.js — Signature selection modal controller
 */

import { el } from './layout.js';

export function buildSignatureModal(overlayEl, config, viewer) {
  const modal = el('div', ['psdk-modal']);
  
  const header = el('div', ['psdk-modal__header']);
  const title = el('h3', ['psdk-modal__title']);
  title.textContent = 'Select Signature Role';
  
  const btnClose = el('button', ['psdk-modal__close']);
  btnClose.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
  
  header.appendChild(title);
  header.appendChild(btnClose);
  
  const body = el('div', ['psdk-modal__body']);
  const list = el('div', ['psdk-modal__list']);
  body.appendChild(list);
  
  modal.appendChild(header);
  modal.appendChild(body);
  overlayEl.appendChild(modal);

  function open(type = 'signature') {
    const isSig = type === 'signature';
    const options = isSig ? (config.signatureOptions || []) : (config.estampOptions || []);
    
    title.textContent = isSig 
      ? (config.labels?.signatureModalTitle || 'Select Signature Role') 
      : (config.labels?.estampModalTitle || 'Select E-Materai');
    
    if (!options || options.length === 0) {
      // Fallback if no options: directly place default item at center
      if (isSig) viewer.placeSignature();
      else viewer.placeEStamp();
      return;
    }

    list.innerHTML = '';
    options.forEach(opt => {
      const item = el('button', ['psdk-modal__item']);
      
      const iconWrap = el('div', ['psdk-modal__item-icon']);
      if (opt.image) {
        iconWrap.classList.add('psdk-modal__item-icon--image');
        iconWrap.innerHTML = `<img src="${opt.image}" alt="preview" />`;
      } else {
        iconWrap.innerHTML = isSig 
          ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>'
          : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>';
      }
      
      const labelWrap = el('div', ['psdk-modal__item-label']);
      labelWrap.textContent = opt.label || (isSig ? 'Signature' : 'E-Materai');
      
      item.appendChild(iconWrap);
      item.appendChild(labelWrap);
      
      item.addEventListener('click', () => {
        close();
        if (isSig) {
          viewer.placeSignature({ ...opt });
        } else {
          viewer.placeEStamp({ ...opt });
        }
      });
      
      list.appendChild(item);
    });
    
    overlayEl.style.display = 'flex';
    // Add small delay for CSS transition
    setTimeout(() => {
      overlayEl.classList.add('psdk-modal-overlay--active');
      modal.classList.add('psdk-modal--active');
    }, 10);
  }

  function close() {
    overlayEl.classList.remove('psdk-modal-overlay--active');
    modal.classList.remove('psdk-modal--active');
    // Hide overlay after animation completes
    setTimeout(() => {
      overlayEl.style.display = 'none';
    }, 200);
  }

  btnClose.addEventListener('click', close);
  overlayEl.addEventListener('click', (e) => {
    if (e.target === overlayEl) close();
  });

  return { open, close };
}
