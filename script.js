// Tab Switching UI
function switchTab(type) {
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  const tabLogin = document.getElementById('tab-login');
  const tabRegister = document.getElementById('tab-register');
  const alertBox = document.getElementById('auth-alert');

  alertBox.className = 'auth-alert';
  alertBox.style.display = 'none';

  if (type === 'login') {
    loginForm.classList.add('active');
    registerForm.classList.remove('active');
    tabLogin.classList.add('active');
    tabRegister.classList.remove('active');
  } else {
    registerForm.classList.add('active');
    loginForm.classList.remove('active');
    tabRegister.classList.add('active');
    tabLogin.classList.remove('active');
  }
}

// Form Handling UI Action
function handleAuth(event, type) {
  event.preventDefault();
  const alertBox = document.getElementById('auth-alert');

  if (type === 'login') {
    const user = document.getElementById('login-user').value;
    showAlert(`សូមស្វាគមន៍! អ្នកបានចូលប្រើប្រាស់ជោគជ័យ: ${user}`, 'success');
  } else if (type === 'register') {
    const pass = document.getElementById('reg-pass').value;
    const confirmPass = document.getElementById('reg-confirm-pass').value;

    if (pass !== confirmPass) {
      showAlert('ពាក្យសម្ងាត់ និងការបញ្ជាក់ពាក្យសម្ងាត់មិនត្រូវគ្នាទេ!', 'error');
      return;
    }

    showAlert('ការចុះឈ្មោះជោគជ័យ! សូមចូលប្រើប្រាស់ប្រព័ន្ធ។', 'success');
    setTimeout(() => {
      switchTab('login');
    }, 1500);
  }
}

function showAlert(message, styleClass) {
  const alertBox = document.getElementById('auth-alert');
  alertBox.textContent = message;
  alertBox.className = `auth-alert ${styleClass}`;
}
