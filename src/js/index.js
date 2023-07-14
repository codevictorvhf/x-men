const characters = document.querySelectorAll(".character");

characters.forEach((character) => {
  character.addEventListener("mouseenter", () => {
    removeCharacterSelection();

    character.classList.add("selected");

    changeSelectedCharacterImage(character);

    changeSelectedCharacterName(character);

    changeCharacterDescription(character);
  });

  if (window.innerWidth < 450) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

function changeCharacterDescription(character) {
  const characterDescription = document.getElementById("character-description");
  characterDescription.innerText = character.getAttribute("data-description");
}

function changeSelectedCharacterName(character) {
  const characterName = document.getElementById("character-name");
  characterName.innerText = character.getAttribute("data-name");
}

function changeSelectedCharacterImage(character) {
  const bigCharacterImage = document.querySelector(".big-character");

  const idCharacter = character.attributes.id.value;
  bigCharacterImage.src = `./src/images/card-${idCharacter}.png`;
}

function removeCharacterSelection() {
  const characterSelected = document.querySelector(".selected");
  characterSelected.classList.remove("selected");
}
