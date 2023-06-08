
let video=document.getElementById("backgroundVideo")

let collapse=document.getElementById("icon");
let chatBox=document.getElementById('chatBox');
let chatbot=document.getElementById('chatbot');
let textInput=document.getElementById('textInput');
let input=document.getElementById('input');
let enterButton= document.getElementById('enterButton');
let icon = document.getElementById('icon');
let pauseButton = document.getElementById('pauseButton');
let isOnline = document.getElementById('isOnline');

isOnline.addEventListener('click', appearance);
collapse.addEventListener('click', appearance);
icon.addEventListener('click', appearance);
input.addEventListener('keydown',handleEnterKey)
let collapsed = false;

function handleEnterKey(event) {
    if (event.keyCode === 13) {
       sendMessage();
    }
}
function appearance(){
    if(window.innerWidth<=1000){
        if(collapsed==true){
            chatbot.style.display="none";
            collapsed=false;
        }else{
            chatbot.style.display="flex";
            chatBox.style.display="flex";
            input.style.display="flex";
            enterButton.style.display="flex";
            icon.src="images/icons8-down-48.png"
            collapsed=true;
        }
    }else{
        if(collapsed==true){
            chatBox.style.display="none";
            input.style.display="none";
            chatbot.style.height="5vh"
            icon.src="images/icons8-up-48.png"
            enterButton.style.display="none";
            collapsed=false;
        }else{
            chatBox.style.display="flex";
            input.style.display="flex";
            enterButton.style.display="flex";
            icon.src="images/icons8-down-48.png"
            chatbot.style.height="60vh"
            collapsed=true;
        }
    }
  
}

function pause(){
    if(video.paused){
        video.play();
        pauseButton.src="images/icons8-pause-24.png";
    }else{
        video.pause();
        pauseButton.src="images/icons8-play-24.png";
    }
}


let str=null;
// let content=document.getElementById("content").innerHTML;

let userInput=document.getElementById("input");
let chatLog=document.getElementById("chatBox");

let res='';
let messageArray=[
    {role: 'system', content: 'You are a helpful assistant from a travel agency, your name is Antony, an average 30 year old man leaving in usa .'},
];

function sendMessage(){
    messageArray.push({role:"user",content:userInput.value});
    let userBox = document.createElement("div");
    let userChat = document.createElement("div");
    userChat.classList.add('user');
    userBox.classList.add("userBox");
    userChat.innerText=userInput.value;
    userBox.appendChild(userChat)
    chatLog.appendChild(userBox);

    let assistantChat=document.createElement('div');
    let aiBox = document.createElement('div');
    let apiKey = 'Gerara here mehn';
  
    let url = 'https://api.openai.com/v1/chat/completions';
        fetch (url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apiKey}`,
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo',
                    messages: messageArray,
                    })
                 })

                .then((response) => response.json())
                .then(data =>{
                    res=data.choices[0].message.content
                    assistantChat.innerHTML=res;
                    assistantChat.classList.add('ai')
                    aiBox.classList.add('aiBox');
                    aiBox.appendChild(assistantChat);
                    chatLog.appendChild(aiBox);
                    messageArray.push({role:"assistant",content: res})
                })
               

                scrollToBottom();
}



// Function to scroll the chat container to the bottom
function scrollToBottom() {
  chatBox.scrollTop = chatBox.scrollHeight;
}

setTimeout(pause, 1000);
