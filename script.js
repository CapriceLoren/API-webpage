// const url = "https://api.rainviewer.com/public/weather-maps.json"
const url = "https://the-one-api.dev/v2/character"

const frodo = document.querySelector("#frodo")
const gandalf = document.querySelector("#gandalf")
const tom = document.querySelector("#tom")
const content = document.querySelectorAll(".content")
let tabButtons = document.querySelectorAll("button")


function handleClick(e) {
  for (let i = 0; i < content.length; i++){
    content[i].style.display = 'none'
  }
document.querySelector(`#${e.target.classList[0]}`).style.display="block"
}


for (let i = 0; i < tabButtons.length; i++) { 
  tabButtons[i].addEventListener("click", handleClick)
}

  
  fetch(url + `?name=Frodo+Baggins`, {
      headers: {
        'Authorization': 'Bearer 7RFrk35dJxu-iOMmzcsA'
      }
    })
  .then(res => res.json())
    .then(res => displayCharacter(res.docs[0]))
    .catch(err => console.error("something went wrong...", err))
    
fetch(url + `?name=Gandalf`, {
  headers: {
    'Authorization': 'Bearer 7RFrk35dJxu-iOMmzcsA'
  }
})
  .then(res => res.json())
  .then(res => displayCharacter(res.docs[0]))
    .catch(err => console.error("something went wrong...", err))
    
  fetch(url + `?name=Tom+Bombadil`, {
    headers: {
      'Authorization': 'Bearer 7RFrk35dJxu-iOMmzcsA'
    }
  })  
    .then(res => res.json())
    .then(res => displayCharacter(res.docs[0]))
    .catch(err => console.error("something went wrong...", err))


function displayCharacter(character) {
  console.log(character)

    let htmlTemplate = `
    <div>
        <h1>${character.name}</h1>
        <p>Birth Year: ${character.birth}</p>
        <p>Death Year: ${character.death}</p>
        <p>Race: ${character.race}</p>
    `;
  
  const firstName = character.name.split(" ")[0]
  document.querySelector(`#${firstName}`).innerHTML += htmlTemplate;
  };
