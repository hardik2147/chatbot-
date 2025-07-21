document.getElementById("prompt").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  });
  
  async function sendMessage() {
    const input = document.getElementById("prompt");
    const prompt = input.value.trim();
    if (!prompt) return;
  
    const chatbox = document.getElementById("chatbox");
    chatbox.innerHTML += `<div class="user">${prompt}</div>`;
  
    const res = await fetch("http://127.0.0.1:5000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });
  
    const data = await res.json();
    const markdown = marked.parse(data.response); // Convert Markdown to HTML
    const markdown = marked.parse(data.response); // Convert Markdown to HTML
    chatbox.innerHTML += `<div class="bot">Bot: ${markdown}</div>`;
  
    
  
    input.value = "";
    chatbox.scrollTop = chatbox.scrollHeight;
  }
  