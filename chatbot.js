let userInput=document.getElementById("userInput");
let chatLog=document.getElementById("chatlog");
function sendMessage(){
    let userChat = document.createElement("div");
    //position 
    userChat.innerText=userInput.value;
    chatLog.appendChild(userChat);

    const apiKey = "";
    const prompt = userInput.value;
    const url = "https://api.openai.com/v1/chat/completions";
        fetch (url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${apiKey}`,
                },
                body: JSON.stringify({
                    prompt,
                    max_tokens: 3000,
                    temperature: 0.7,
                    n: 1,
                                                                                    
                    model: 'gpt-3.5-turbo-0301'
                 }),
                 })
                .then((res) => res.json())
                .then(data =>{
                    let botChat = document.createElement("div")
                    //position 
                    botChat.innerText=data.choices[0].text;
                    chatLog.appendChild(botChat);

                    })
                .catch((err) => console.log(err));

    
}