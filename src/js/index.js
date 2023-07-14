const characters = document.querySelectorAll(".character");

characters.forEach((character) => {
  character.addEventListener("mouseenter", () => {
    const characterSelected = document.querySelector(".selected");
    characterSelected.classList.remove("selected");

    character.classList.add("selected");

    const bigCharacterImage = document.querySelector(".big-character");

    const idCharacter = character.attributes.id.value;
    bigCharacterImage.src = `./src/images/card-${idCharacter}.png`;

    const characterName = document.getElementById("character-name");
    characterName.innerText = character.getAttribute("data-name");

    const characterDescription = document.getElementById(
      "character-description"
    );
    characterDescription.innerText = character.getAttribute("data-description");
  });
});
