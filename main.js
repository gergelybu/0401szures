import { KUTYALISTA } from "./adatok.js";

window.addEventListener("load", init);

function init() {
  const inputElem = document.getElementById("szurnev");
  inputElem.addEventListener("keyup", function () {
    let szurFeltetel = inputElem.value;
    let szurtLista = szuresNevSzerint(KUTYALISTA, szurFeltetel);
    console.log(szurtLista);
  });
}

function szuresNevSzerint(lista, keresett) {
  let szurtLista = lista.filter(function (elem) {
    return elem.nev.toUpperCase().includes(keresett.toUpperCase());
  });
  return szurtLista;
}
