let userInput=document.getELementById("userInput");
function sendMessag(){
    let userChat = document .createElement("div");
    //position 
    userChat.innerHtml=userInput;
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
                                                                                    
                    model: 'text-davinci-003'
                 }),
                 })
                .then((res) => res.json())
                .then(data =>{
                    let botChat = document .createElement("div")
                    //position 
                    botChat.innerHtml=data.choices[0].text

                    })
                .catch((err) => console.log(err));

    
}