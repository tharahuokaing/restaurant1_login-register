document.addEventListener('DOMContentLoaded', () => {
  // UI Elements
  const authModal = document.getElementById('auth-modal');
  const openLoginBtn = document.getElementById('open-login-btn');
  const openRegisterBtn = document.getElementById('open-register-btn');
  const closeAuthModalBtn = document.getElementById('close-auth-modal');

  const loginView = document.getElementById('login-view');
  const registerView = document.getElementById('register-view');

  const switchToRegister = document.getElementById('switch-to-register');
  const switchToLogin = document.getElementById('switch-to-login');

  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');

  // Open Modal Functions
  const showLogin = () => {
    loginView.style.display = 'block';
    registerView.style.display = 'none';
    authModal.classList.add('active');
  };

  const showRegister = () => {
    loginView.style.display = 'none';
    registerView.style.display = 'block';
    authModal.classList.add('active');
  };

  const closeModal = () => {
    authModal.classList.remove('active');
  };

  // Event Listeners
  openLoginBtn.addEventListener('click', showLogin);
  openRegisterBtn.addEventListener('click', showRegister);
  closeAuthModalBtn.addEventListener('click', closeModal);

  switchToRegister.addEventListener('click', (e) => {
    e.preventDefault();
    showRegister();
  });

  switchToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    showLogin();
  });

  // Close modal when clicking outside of the content container
  authModal.addEventListener('click', (e) => {
    if (e.target === authModal) {
      closeModal();
    }
  });

  // Handle Form Submissions
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    alert(`ជោគជ័យ: បានចូលប្រព័ន្ធដោយឈ្មោះ ${username} (Branch 1)`);
    closeModal();
  });

  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const fullname = document.getElementById('reg-fullname').value;
    alert(`ជោគជ័យ: បានបង្កើតគណនីជូន ${fullname} (Branch 1)`);
    closeModal();
  });
});
