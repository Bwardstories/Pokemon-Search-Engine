


let picture = ""


let submitButton = document.getElementById("submitButton")

let card =  document.querySelector(".image")
let name1 = document.querySelector(".name")
let hp = document.querySelector(".hp")
let ability1 = document.querySelector(".ability1")
let ability2 = document.querySelector(".ability2")

let ability1Text




submitButton.addEventListener("click", function () {
  let pokemonName = document.getElementById("pokemonName").value.toLowerCase()
  let cardName = pokemonName
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((res) => res.json())
    .then((formattedData) => {
        fetch(formattedData.abilities[0].ability.url)
            .then((ability1Res) => ability1Res.json())
            .then((ability1Format) => {
               document.querySelector(".ability1Text").innerHTML = ability1Format.flavor_text_entries[0].flavor_text
            })
        fetch(formattedData.abilities[1].ability.url)
            .then((ability2Res) => ability2Res.json())
            .then((ability2Format) => {
               document.querySelector(".ability2Text").innerHTML = ability2Format.flavor_text_entries[0].flavor_text
            })
        name1.innerHTML = cardName.charAt(0).toUpperCase() + cardName.slice(1)
        hp.innerHTML= "hp" + " " + formattedData.stats[0].base_stat;
        document.querySelector(".ability1Name").innerHTML = formattedData.abilities[0].ability.name.toUpperCase()
        document.querySelector(".ability2Name").innerHTML = formattedData.abilities[1].ability.name.toUpperCase()
        card.style.backgroundImage= "url("+`${formattedData.sprites.front_default}`+ ")"})
    .catch((e) => {
        alert("That pokemon was not in our database, try again!")
    })    
})

