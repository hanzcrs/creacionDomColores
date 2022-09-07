const Selector_color = document.querySelector('#Selector_color')
const btnVisualizar = document.querySelector('#btnVisualizar')
const parrafoExa = document.querySelector('#parrafoExa')
const cardColor = document.querySelector('#cardColor')

//siempre probar con un console log
//console.log(Selector_color)
//console.log(btnVisualizar)
//console.log(parrafoExa)
//console.log(cardColor)



btnVisualizar.addEventListener("click", () => 
{console.log("me diste click");
console.log(Selector_color.value);
parrafoExa.textContent = Selector_color.value;
cardColor.style.backgroundColor = Selector_color.value;
});