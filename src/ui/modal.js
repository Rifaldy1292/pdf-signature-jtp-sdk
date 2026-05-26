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

  function createOptionItem(opt, isSig) {
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
    
    return item;
  }

  function renderOptions(isSig, options, useGrouping) {
    list.innerHTML = '';
    
    if (useGrouping) {
      list.classList.remove('psdk-modal__grid');
      
      const groups = {};
      const groupOrder = [];
      options.forEach(opt => {
        const g = opt.group || '';
        if (!groups[g]) {
          groups[g] = [];
          groupOrder.push(g);
        }
        groups[g].push(opt);
      });
      
      groupOrder.forEach(groupName => {
        const section = el('div', ['psdk-modal__group-section']);
        
        const gTitle = el('div', ['psdk-modal__group-title']);
        gTitle.textContent = groupName || (config.labels?.defaultGroup || 'Umum');
        section.appendChild(gTitle);
        
        const grid = el('div', ['psdk-modal__grid']);
        groups[groupName].forEach(opt => {
          grid.appendChild(createOptionItem(opt, isSig));
        });
        
        section.appendChild(grid);
        list.appendChild(section);
      });
    } else {
      list.classList.add('psdk-modal__grid');
      options.forEach(opt => {
        list.appendChild(createOptionItem(opt, isSig));
      });
    }
  }

  function open(type = 'signature') {
    const isSig = type === 'signature';
    const options = isSig ? (config.signatureOptions || []) : (config.estampOptions || []);
    
    title.textContent = isSig 
      ? (config.labels?.signatureModalTitle || 'Select Signature Role') 
      : (config.labels?.estampModalTitle || 'Select E-Materai');
    
    if (!options || options.length === 0) {
      if (isSig) viewer.placeSignature();
      else viewer.placeEStamp();
      return;
    }

    const useGrouping = !!config.groupByCategory;
    renderOptions(isSig, options, useGrouping);
    
    overlayEl.style.display = 'flex';
    setTimeout(() => {
      overlayEl.classList.add('psdk-modal-overlay--active');
      modal.classList.add('psdk-modal--active');
    }, 10);
  }

  function close() {
    overlayEl.classList.remove('psdk-modal-overlay--active');
    modal.classList.remove('psdk-modal--active');
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

export function buildPasswordModal(rootEl, config, viewer) {
  const overlay = el('div', ['psdk-modal-overlay', 'psdk-password-overlay']);
  overlay.style.display = 'none';
  
  const modal = el('div', ['psdk-modal', 'psdk-password-modal']);
  
  const header = el('div', ['psdk-modal__header']);
  const title = el('h3', ['psdk-modal__title']);
  title.textContent = config.labels?.passwordModalTitle || 'Password Protected';
  
  const btnClose = el('button', ['psdk-modal__close']);
  btnClose.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
  
  header.appendChild(title);
  header.appendChild(btnClose);
  
  const body = el('div', ['psdk-modal__body']);
  
  // Icon and description
  const descWrap = el('div', ['psdk-password-modal__desc-wrap']);
  descWrap.style.display = 'flex';
  descWrap.style.flexDirection = 'column';
  descWrap.style.alignItems = 'center';
  descWrap.style.textAlign = 'center';
  descWrap.style.marginBottom = '20px';
  
  const lockIcon = el('div', ['psdk-password-modal__icon']);
  lockIcon.style.width = '48px';
  lockIcon.style.height = '48px';
  lockIcon.style.borderRadius = '50%';
  lockIcon.style.background = 'var(--psdk-danger-subtle)';
  lockIcon.style.color = 'var(--psdk-danger)';
  lockIcon.style.display = 'flex';
  lockIcon.style.alignItems = 'center';
  lockIcon.style.justifyContent = 'center';
  lockIcon.style.marginBottom = '12px';
  lockIcon.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`;
  
  const descText = el('p', ['psdk-password-modal__text']);
  descText.style.margin = '0';
  descText.style.fontSize = '13px';
  descText.style.color = 'var(--psdk-text-secondary)';
  descText.textContent = config.labels?.passwordModalDesc || 'This document is encrypted. Please enter the password to view it.';
  
  descWrap.appendChild(lockIcon);
  descWrap.appendChild(descText);
  body.appendChild(descWrap);
  
  // Form elements
  const form = el('form', ['psdk-password-modal__form']);
  
  const inputWrapper = el('div', ['psdk-modal__input-wrapper']);
  
  const input = el('input', ['psdk-modal__input'], {
    type: 'password',
    placeholder: config.labels?.passwordPlaceholder || 'Enter document password',
    required: 'true',
    autocomplete: 'current-password'
  });
  
  const btnToggle = el('button', ['psdk-modal__input-toggle'], { type: 'button' });
  btnToggle.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`;
  
  inputWrapper.appendChild(input);
  inputWrapper.appendChild(btnToggle);
  form.appendChild(inputWrapper);
  
  // Error message
  const errorMsg = el('div', ['psdk-modal__error']);
  errorMsg.style.display = 'none';
  errorMsg.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg><span>${config.labels?.passwordIncorrect || 'Incorrect password. Please try again.'}</span>`;
  form.appendChild(errorMsg);
  
  // Buttons
  const buttonsWrap = el('div', ['psdk-modal__buttons']);
  
  const btnCancel = el('button', ['psdk-btn', 'psdk-btn--ghost'], { type: 'button' });
  btnCancel.textContent = config.labels?.cancelBtn || 'Cancel';
  
  const btnSubmit = el('button', ['psdk-btn', 'psdk-btn--accent'], { type: 'submit' });
  btnSubmit.textContent = config.labels?.unlockBtn || 'Unlock';
  
  buttonsWrap.appendChild(btnCancel);
  buttonsWrap.appendChild(btnSubmit);
  form.appendChild(buttonsWrap);
  
  body.appendChild(form);
  
  modal.appendChild(header);
  modal.appendChild(body);
  overlay.appendChild(modal);
  rootEl.appendChild(overlay);
  
  let currentUpdatePassword = null;
  let currentCancel = null;
  
  // Toggle password visibility
  btnToggle.addEventListener('click', () => {
    if (input.type === 'password') {
      input.type = 'text';
      btnToggle.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>`;
    } else {
      input.type = 'password';
      btnToggle.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`;
    }
  });
  
  function open(updatePassword, isIncorrect, cancel) {
    currentUpdatePassword = updatePassword;
    currentCancel = cancel;
    
    // Enable fields
    input.disabled = false;
    btnSubmit.disabled = false;
    btnCancel.disabled = false;
    btnClose.disabled = false;
    btnSubmit.textContent = config.labels?.unlockBtn || 'Unlock';
    
    if (isIncorrect) {
      errorMsg.style.display = 'flex';
      input.value = '';
      input.focus();
    } else {
      errorMsg.style.display = 'none';
      input.value = '';
      input.type = 'password';
      btnToggle.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`;
      
      overlay.style.display = 'flex';
      setTimeout(() => {
        overlay.classList.add('psdk-modal-overlay--active');
        modal.classList.add('psdk-modal--active');
        input.focus();
      }, 10);
    }
  }
  
  function close() {
    overlay.classList.remove('psdk-modal-overlay--active');
    modal.classList.remove('psdk-modal--active');
    setTimeout(() => {
      overlay.style.display = 'none';
      errorMsg.style.display = 'none';
      input.value = '';
    }, 200);
  }
  
  function handleCancel() {
    if (currentCancel) {
      currentCancel();
    }
    close();
  }
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value && currentUpdatePassword) {
      // Disable input & buttons to avoid double submit
      input.disabled = true;
      btnSubmit.disabled = true;
      btnCancel.disabled = true;
      btnClose.disabled = true;
      btnSubmit.textContent = config.labels?.unlockingBtn || 'Unlocking...';
      
      currentUpdatePassword(input.value);
    }
  });
  
  btnCancel.addEventListener('click', handleCancel);
  btnClose.addEventListener('click', handleCancel);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) handleCancel();
  });
  
  viewer.on('passwordRequested', ({ updatePassword, isIncorrect, cancel }) => {
    open(updatePassword, isIncorrect, cancel);
  });
  
  viewer.on('documentLoaded', () => {
    close();
  });

  return { open, close };
}
