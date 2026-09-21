// Tab Switching Function
function switchTab(type) {
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  const tabLogin = document.getElementById('tab-login');
  const tabRegister = document.getElementById('tab-register');
  const alertBox = document.getElementById('auth-alert');

  // Clear alert state on tab switch
  if (alertBox) {
    alertBox.className = 'auth-alert';
    alertBox.style.display = 'none';
  }

  if (type === 'login') {
    loginForm.classList.add('active');
    registerForm.classList.remove('active');
    tabLogin.classList.add('active');
    tabRegister.classList.remove('active');
  } else if (type === 'register') {
    registerForm.classList.add('active');
    loginForm.classList.remove('active');
    tabRegister.classList.add('active');
    tabLogin.classList.remove('active');
  }
}

// Authentication Handling with Redirection
function handleAuth(event, type) {
  event.preventDefault();

  if (type === 'login') {
    const user = document.getElementById('login-user').value;
    
    // Show success alert
    showAlert(`សូមស្វាគមន៍! កំពុងបញ្ជូនទៅ Imperial POS - ភោជនីយដ្ឋាន ហួ កាំង...`, 'success');

    // Redirect to Imperial POS page after 1.2 seconds
    setTimeout(() => {
      // Replace 'pos.html' with your target POS dashboard page file name or URL
      window.location.href = 'pos.html'; 
    }, 1200);

  } else if (type === 'register') {
    const pass = document.getElementById('reg-pass').value;
    const confirmPass = document.getElementById('reg-confirm-pass').value;

    // Password Validation
    if (pass !== confirmPass) {
      showAlert('ពាក្យសម្ងាត់ និងការបញ្ជាក់ពាក្យសម្ងាត់មិនត្រូវគ្នាទេ!', 'error');
      return;
    }

    // Show registration success notification
    showAlert('ការចុះឈ្មោះជោគជ័យ! កំពុងបញ្ជូនទៅកាន់ទំព័រចូលប្រព័ន្ធ...', 'success');

    // Reset register form fields
    document.getElementById('register-form').reset();

    // Redirect to Login tab automatically after 1.5 seconds
    setTimeout(() => {
      switchTab('login');
      showAlert('សូមបញ្ចូលគណនីរបស់អ្នកដើម្បីចូលប្រព័ន្ធ', 'success');
    }, 1500);
  }
}

// Helper Function for HUD Alert Messaging
function showAlert(message, styleClass) {
  const alertBox = document.getElementById('auth-alert');
  if (alertBox) {
    alertBox.textContent = message;
    alertBox.className = `auth-alert ${styleClass}`;
  }
}
