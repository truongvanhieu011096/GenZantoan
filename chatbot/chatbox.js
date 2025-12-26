const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", function(e){
    if(e.key === "Enter") sendMessage();
});

function sendMessage() {
    const text = userInput.value.trim();
    if(!text) return;

    addMessage("Bạn: " + text);
    userInput.value = "";

    let reply = "Chatbot: Mình chưa hiểu rõ, bạn có thể nói rõ hơn không?";
    if(text.includes("buồn")) reply = "Chatbot: Hãy thử thở sâu và viết ra cảm xúc của bạn nhé!";
    if(text.includes("áp lực")) reply = "Chatbot: Áp lực là bình thường, hãy chia nhỏ nhiệm vụ và nghỉ ngơi hợp lý!";
    if(text.includes("vui")) reply = "Chatbot: Tuyệt quá, hãy giữ cảm giác vui vẻ này nhé!";

    setTimeout(() => addMessage(reply), 500);
}

function addMessage(message) {
    const p = document.createElement("p");
    p.innerText = message;
    chatBox.appendChild(p);
    chatBox.scrollTop = chatBox.scrollHeight;
}
