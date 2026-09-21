function handleAuth(event, type) {
  event.preventDefault(); // Prevent default form submission page reload

  if (type === 'register') {
    // 1. Password confirmation check
    const pass = document.getElementById('reg-pass').value;
    const confirmPass = document.getElementById('reg-confirm-pass').value;

    if (pass !== confirmPass) {
      alert('ពាក្យសម្ងាត់មិនត្រូវគ្នាទេ! (Passwords do not match)');
      return;
    }

    // 2. Perform registration logic/API call here...

    alert('ចុះឈ្មោះជោគជ័យ! សូមចូលប្រព័ន្ធ។ (Registration successful! Please log in.)');

    // 3. Switch active form to login form
    document.getElementById('register-form').classList.remove('active');
    document.getElementById('login-form').classList.add('active');

    // Optional: Reset register form inputs
    event.target.reset();

  } else if (type === 'login') {
    const user = document.getElementById('login-user').value;
    const pass = document.getElementById('login-pass').value;

    // 1. Perform login validation/API call here...

    // 2. Redirect to main POS page
    // Change 'pos.html' to your actual file path or page URL
    window.location.href = 'pos.html'; 
  }
}
