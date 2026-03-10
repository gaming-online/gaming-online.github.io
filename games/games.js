let Grid = document.getElementById('GameGrid')
let Search = document.getElementById('Search')

async function Build(){

let Games = await LoadGames()
let Favorites = GetFavorites()

Games.sort((A,B)=>{
return Favorites.includes(B.title) - Favorites.includes(A.title)
})

Grid.innerHTML=''

Games.forEach(Game=>{

let Card = document.createElement('div')
Card.className='GameCard'

Card.innerHTML = `
<img src='${Game.thumbnail}'>
<h3>${Game.title}</h3>
`

Card.onclick=()=>{
location.href = Game.title.toLowerCase().replaceAll(' ','-')
}

Grid.appendChild(Card)

})

}

Search.oninput = Build

Build()
