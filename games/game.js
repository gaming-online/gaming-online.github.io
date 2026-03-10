async function Init(){

let Name = location.pathname.split('/').pop()

let Games = await LoadGames()

let Game = Games.find(G =>
G.title.toLowerCase().replaceAll(' ','-') === Name
)

document.title = Game.title

let Frame = document.getElementById('GameFrame')
Frame.src = Game.iframe

let Info = document.getElementById('GameInfo')
Info.innerHTML = `
<h2>${Game.title}</h2>
<p>${Game.description}</p>
`

document.getElementById('Fullscreen').onclick=()=>{
Frame.requestFullscreen()
}

document.getElementById('Favorite').onclick=()=>{
ToggleFavorite(Game.title)
}

document.getElementById('Share').onclick=()=>{
let Box = document.createElement('div')

Box.innerHTML=`
<input value='${location.href}' id='ShareLink'>
<button onclick='navigator.clipboard.writeText(document.getElementById("ShareLink").value)'>Copy</button>
`

document.body.appendChild(Box)
}

}

Init()
