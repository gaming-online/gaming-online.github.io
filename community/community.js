let Button = document.getElementById('Request')

Button.onclick = async ()=>{

let Name = document.getElementById('GameName').value
let Link = document.getElementById('GameLink').value
let Desc = document.getElementById('GameDesc').value

let Requested = JSON.parse(localStorage.getItem('RequestedGames')||'[]')

if(Requested.includes(Name)){
alert('You already requested this game')
return
}

await fetch('https://discord.com/api/webhooks/1481011364662214703/-ASSNHvq_DcYuVPX_BL3_RKuzBIo-MG7Ek8EvkE09ldKu1gQbsc-WU5fOMorgLkQsch8',{
method:'POST',
headers:{'Content-Type':'application/json'},
body:JSON.stringify({
content:`Game Request

Name: ${Name}
Link: ${Link}
Description: ${Desc}`
})
})

Requested.push(Name)

localStorage.setItem('RequestedGames',JSON.stringify(Requested))

}
