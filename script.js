const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatBox = document.querySelector(".chatbox");
const chatbotToggler =document.querySelector(".chatbot-toggler");

let userMessage;

// Custom messages for the chatbot
const customResponses = {
    "hello": "Hi there! How can I assist you today?",
    "how are you?": "I'm just a program, but thanks for asking! How can I help you?",
    "what is your name?": "I'm your friendly chatbot. You can call me ChatBot!",
    "help": "Sure! What do you need help with?",
    "bye": "Goodbye! Have a great day!"
};

// Function to create chat list items
const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    
    let chatContent = className === "outgoing" 
        ? `<p>${message}</p>` 
        : `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;

    chatLi.innerHTML = chatContent;
    return chatLi;
}

// Function to generate a response based on user input
const generateResponse = () => {
    let botResponse = "I'm sorry, I didn't understand that.";
    
    // Check if the user message matches any custom responses
    botResponse = customResponses[userMessage.toLowerCase()] || botResponse;

    // Simulate a delay before showing the bot response
    setTimeout(() => {
        chatBox.appendChild(createChatLi(botResponse, "incoming"));
    }, 600);
};

const handleChat = () => {
    userMessage = chatInput.value.trim();
    if (!userMessage) return;

    chatBox.appendChild(createChatLi(userMessage, "outgoing"));
    chatBox.appendChild(createChatLi("Thinking ... ", "incoming"));

    setTimeout(() => {
        chatBox.removeChild(chatBox.lastChild);
        generateResponse(); // Call the response function here
    }, 600);

    chatInput.value = "";
    chatInput.focus(); // Auto-focus input field
}

sendChatBtn.addEventListener("click", handleChat);
chatbotToggler. addEventListener("click", () => document.body.classList.toggle("show-chatbot"));