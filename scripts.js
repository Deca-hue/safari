// DOM Elements
const loaderProgress = document.getElementById('loaderProgress');
const pageLoader = document.getElementById('pageLoader');
const themeToggle = document.getElementById('themeToggle');
const mobileMenuButton = document.getElementById('mobileMenuButton');
const mobileMenu = document.getElementById('mobileMenu');
const chatToggle = document.getElementById('chatToggle');
const chatBox = document.getElementById('chatBox');
const closeChat = document.getElementById('closeChat');
const sendMessage = document.getElementById('sendMessage');
const userMessage = document.getElementById('userMessage');
const chatMessages = document.getElementById('chatMessages');
const supportButton = document.getElementById('supportButton');

// Theme Toggle
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  });
}

// Check for saved theme preference
if (localStorage.getItem('theme') === 'dark' || 
    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
}

// Mobile Menu Toggle
mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Chat Toggle
chatToggle.addEventListener('click', () => {
  chatBox.classList.toggle('hidden');
});

closeChat.addEventListener('click', () => {
  chatBox.classList.add('hidden');
});

// Send Message
sendMessage.addEventListener('click', () => {
  const message = userMessage.value.trim();
  if (message) {
    addMessage(message, 'user');
    userMessage.value = '';
    
    // Simulate response after 1 second
    setTimeout(() => {
      addMessage("Thanks for your message! Our team will get back to you shortly.", 'bot');
    }, 1000);
  }
});

// Support Button
supportButton.addEventListener('click', () => {
  Swal.fire({
    title: 'Coming Soon!',
    text: 'Our enhanced contract support system is currently under development. Please check back later!',
    icon: 'info',
    confirmButtonText: 'Got it!',
    confirmButtonColor: '#3B82F6',
  });
});

// Helper Functions
function addMessage(text, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('mb-4');
  
  if (sender === 'user') {
    messageDiv.classList.add('text-right');
    messageDiv.innerHTML = `
      <div class="bg-blue-600 text-white rounded-lg p-3 inline-block max-w-xs">
        ${text}
      </div>
    `;
  } else {
    messageDiv.innerHTML = `
      <div class="bg-blue-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg p-3 inline-block max-w-xs">
        ${text}
      </div>
    `;
  }
  
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Allow sending message with Enter key
userMessage.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    sendMessage.click();
  }
});

