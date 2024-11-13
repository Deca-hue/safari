let usersDB = []; // Simple in-memory database for demo purposes

// Toggle between login and register forms
function toggleForm(formType) {
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");

  const loginError = document.getElementById("login-error");
  const registerError = document.getElementById("register-error");

  // Reset errors
  loginError.style.display = "none";
  registerError.style.display = "none";

  if (formType === "login") {
    loginForm.style.display = "block";
    registerForm.style.display = "none";
  } else if (formType === "register") {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
  }
}

// Show or hide login form
function toggleLoginForm() {
  const form = document.getElementById("login-form");
  const btn = document.getElementById("show-login-btn");

  if (form.style.display === "none") {
    form.style.display = "block";
    btn.textContent = "Hide Login";
  } else {
    form.style.display = "none";
    btn.textContent = "Login";
  }
}

// Login User
function loginUser() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
    const loginError = document.getElementById("login-error");
  
    // Retrieve the stored user from localStorage
    const storedUser = JSON.parse(localStorage.getItem('loggedInUser'));
  
    // Check if the username exists in the stored data
    if (!storedUser || storedUser.username !== username) {
      loginError.style.display = "block";
      loginError.textContent = "User not found. Would you like to register?";
    } else if (storedUser.password !== password) {
      loginError.style.display = "block";
      loginError.textContent = "Incorrect password.";
    } else {
      loginError.style.display = "none";
      alert("Login successful!");
  
      // Redirect to account dashboard
      window.location.href = "account-dashboard.html"; // Redirect to the dashboard page
    }
  }
  

// Register User
function registerUser() {
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;
    const registerError = document.getElementById("register-error");
  
    // Check if the username is already taken
    const existingUser = usersDB.find(user => user.username === username);
    if (existingUser) {
      registerError.style.display = "block";
      registerError.textContent = "Username already taken. Please choose another one.";
    } else {
      // Add new user to the "database"
      const newUser = { username, password };
      usersDB.push(newUser);
      
      // Store user data in localStorage (this simulates user being logged in after registration)
      localStorage.setItem('loggedInUser', JSON.stringify(newUser));
      
      registerError.style.display = "none";
      alert("Registration successful! Redirecting to your dashboard.");
      window.location.href = "account-dashboard.html"; // Redirect to the account dashboard
    }
  }
  
