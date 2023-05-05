


let chat = document.getElementById("idChat")
let message = document.getElementById("msg")
let button = document.getElementById("btn")
console.log('data:', localStorage.getItem('chat_id'))
chat.value = localStorage.getItem('chat_id')
//change chat_id and text
token = "5780159584:AAFNS7mVi9KlFP0Mp1afF_KRo9oaSDv7kXc"

button.addEventListener("click", function(){ 

localStorage.setItem('chat_id', chat.value)

data = { 
  "chat_id": chat.value, 
  "text": "54665546",
  "disable_notification": true
}

let options = {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(data)
}

let fetchRes = fetch("https://api.telegram.org/bot" + token + "/sendMessage?chat_id="+chat.value+"&text="+message.value, options);
});

