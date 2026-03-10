document.addEventListener('keydown', function(Event){

if(Event.shiftKey && Event.key === 'P'){
location.href = 'https://docs.google.com/'
}

if(Event.shiftKey && Event.key === 'L'){
document.title = 'Google Documents'
let Icon = document.querySelector('link[rel="icon"]')
Icon.href = 'https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico'
}

})

function GetFavorites(){
return JSON.parse(localStorage.getItem('FavoriteGames') || '[]')
}

function ToggleFavorite(Game){
let Favorites = GetFavorites()

if(Favorites.includes(Game)){
Favorites = Favorites.filter(G => G !== Game)
}else{
Favorites.push(Game)
}

localStorage.setItem('FavoriteGames', JSON.stringify(Favorites))
}

async function LoadGames(){
let Response = await fetch('../assets/games.json')
return await Response.json()
}
