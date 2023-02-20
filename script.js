/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const form = document.querySelector("form");
const input = document.querySelector("#search");
const output = document.querySelector("#output");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const kg = parseFloat(input.value);

  if (isNaN(kg)) {
    output.innerHTML = "<p>Please enter a valid weight in kilograms.</p>";
    return;
  }

  const lb = kg * 2.2046;
  const g = kg / 0.001;
  const oz = kg * 35.274;

  output.innerHTML = `
    <p>${kg} kilograms is equal to:</p>
    <ul>
      <li>${lb.toFixed(2)} Svarai</li>
      <li>${g.toFixed(2)} Gramai</li>
      <li>${oz.toFixed(2)} Uncijos</li>
    </ul>
  `;
});
