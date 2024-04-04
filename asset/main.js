const chatInput= document.querySelector('#chat-input');
const sendButton= document.querySelector('#send-btn');
let userText = null;
const handleOutgoingChat = () => {
    userText =  chatInput.value.trim(); // Get Chat Input Value and Remove extra Spaces
    console.log(userText);
}
sendButton.addEventListener("click",handleOutgoingChat);

