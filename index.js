let video=document.getElementById("backgroundVideo")

function pause(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}



let str=null;
let content=document.getElementById("content").innerHTML;

function submit(){
    let input=document.getElementById("searchBox").value;

    const apiKey = "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";
    const prompt = `Give me a 1000 word essay on the  Amazing places to visit in ${input}`;
    const url = "https://api.openai.com/v1/completions";

    fetch(url, {
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
    .then(data => str=data.choices[0].text)
    .catch((err) => console.log(err));

}




let i=0;
function output(){
    content += str[i];
    document.getElementById("content").innerHTML = content;
    i++;
}
if(str.length==i){clearInterval(output)}
// setInterval(output,50)
