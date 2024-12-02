//Chatbox
function sendMessage() {
    const chatbox = document.getElementById('chatbox');
    const messageInput = document.getElementById('messageInput');
    const userMessage = messageInput.value;

    if (userMessage.trim()) {
        // Create user message bubble
        const userBubble = document.createElement("div");
        userBubble.classList.add("message", "user");
        userBubble.textContent = userMessage;
        chatbox.appendChild(userBubble);

        // Clear input field
        messageInput.value = "";

        // Simulate bot response
        setTimeout(() => {
            const botBubble = document.createElement("div");
            botBubble.classList.add("message", "bot");
            botBubble.textContent = "For breakfast have some greek yogurt with mixed berries and a sprinkle of Chia seeds.";
            chatbox.appendChild(botBubble);

            // Scroll to the bottom of the chatbox
            chatbox.scrollTop = chatbox.scrollHeight;
        }, 1000);
    }
}
