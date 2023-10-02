// const container = document.querySelector("#container");
// const baseUrl =
// "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
// for (let i = 1; i <= 1010; i++) {
//   const pokemon = document.createElement('div');
//   pokemon.classList.add("pokemon");
//   const newImg = document.createElement('img');
//   newImg.src = `${baseUrl}${i}.png`;
//   const label = document.createElement('span');
//   label.innerText = `#${i}`;

//   pokemon.appendChild(newImg);
//   pokemon.appendChild(label)
//   container.appendChild(pokemon);

// }

//Select the section container using querySelector and save it in a variable container
const container = document.querySelector("#container");
//Add the pokemon sprites url in a variable called baseUrl
const baseUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
//Create a for loop
for (let i = 1; i <= 1010; i++) {
  //Create a div element and save it in the variable pokemon
  const pokemon = document.createElement("div");
  //Add a class pokemon to the div
  pokemon.classList.add("pokemon");
  //Create an image element and save it in a variable called newImg
  const newImg = document.createElement("img");
  //Add the source of the image using newImg.src, add the url using string
  //template literal  ${baseUrl}${i}.png
  newImg.src = `${baseUrl}${i}.png`;
  //Create a span element and save it in the variable label
  const label = document.createElement("span");
  //Add the number of the current pokemon by using label.innerText and string template literal
  label.innerText = `#${i}`;
  //Append the image to the div
  pokemon.appendChild(newImg);
  //Append the span to the div
  pokemon.appendChild(label);
  //Append the div to the section
  container.appendChild(pokemon);
}
