let video=document.getElementById("backgroundVideo")

let collapse=document.getElementById("icon");
let chatBox=document.getElementById('chatBox');
let chatbot=document.getElementById('chatbot');
let textInput=document.getElementById('textInput');
let input=document.getElementById('input');
collapse.addEventListener('click', appearance);
let collapsed = true;

function appearance(){
    if(collapsed==true){
        chatBox.style.display="none";
        input.style.display="none";
        chatbot.style.height="5vh"
        collapsed=false;
    }else{
        chatBox.style.display="flex";
        input.style.display="flex";
        chatbot.style.height="50vh"
        collapsed=true;
    }
}

function pause(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}


let str=null;
// let content=document.getElementById("content").innerHTML;

let userInput=document.getElementById("input");
let chatLog=document.getElementById("chatBox");

let res='';
let messageArray=[
    {role: 'system', content: 'You are a helpful assistant from a travel agency.'},
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

    let apiKey = "";
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
               

    
}

