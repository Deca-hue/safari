function showAlert() {
    alert("Our contract support service is currently under progress. Please check back soon for updates!");
  }

  // Toggle Chat Visibility
function toggleChat() {
    const chatBox = document.getElementById("chatBox");
    chatBox.style.display = chatBox.style.display === "none" ? "block" : "none";
  }
  
  // Send Message
  function sendMessage() {
    const userMessage = document.getElementById("userMessage").value;
    const chatMessages = document.getElementById("chatMessages");
    if (userMessage.trim()) {
      chatMessages.innerHTML += `<p>You: ${userMessage}</p>`;
      document.getElementById("userMessage").value = "";
    }
  }

  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
  }