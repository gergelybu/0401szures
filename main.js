import { KUTYALISTA } from "./adatok.js";

window.addEventListener("load", init);

function init() {
  const inputElem = document.getElementById("szurnev");
  inputElem.addEventListener("change", function () {
    let szurFeltetel = inputElem.value;
    let szurtLista = szuresKorSzerint(KUTYALISTA, szurFeltetel);
    //szurtLista = szuresNevSzerint(KUTYALISTA, szurFeltetel);
    console.log(szurtLista);
    //osszeAllit(szurtLista);
  });
}

function szuresNevSzerint(lista, keresett) {
  let szurtLista = lista.filter(function (elem) {
    return elem.nev.toUpperCase().includes(keresett.toUpperCase());
  });
  return szurtLista;
}

function szuresKorSzerint(lista, keresett) {
  let szurtLista = lista.filter(function (elem) {
    /* if (keresett.includes("=")) {
      keresett = "=" + keresett;
    } */
    return eval(elem.kor + keresett);
  });
  return szurtLista;
}
