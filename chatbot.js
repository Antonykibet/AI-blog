// let userInput=document.getElementById("userInput");
let chatLog=document.getElementById("chatlog");

// let messageArray=[];

function sendMessage(){
    // messageArray.push({role:"assistant",content:"hello"});
    // let userChat = document.createElement("div");
    // //position 
    // userChat.innerText=userInput.value;
    // chatLog.appendChild(userChat);

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
                    messages:[
                        {role: 'system', content: 'You are a helpful assistant from a travel agency.'},
                        {role:'assistant',content:'hello'}
                    ],
                    })
                 })

                .then((response) => response.json())
                .then(data =>{chatLog.innerHTML=data.choices[0].message.content})

    
}

