import { KUTYALISTA } from "./adatok.js";

window.addEventListener("load", init);

const LISTA = {
  nev: "",
  cim: "",
  tel: "",
  email: "",
};

function init() {
  const GOMB = document.getElementById("ok");
  GOMB.addEventListener("click", adatGyujtes);
}

function adatGyujtes() {
  const NEV = document.getElementById("nev");
  const CIM = document.getElementById("cim");
  const TEL = document.getElementById("tel");
  const EMAIL = document.getElementById("email");
  LISTA.nev = NEV.value;
  LISTA.cim = CIM.value;
  LISTA.tel = TEL.value;
  LISTA.email = EMAIL.value;
  console.log(LISTA);
  const SECTION = document.getElementById("resz");
  let txt = osszeAllit(LISTA);
  SECTION.innerHTML = txt;
  return LISTA;
}

function osszeAllit(lista) {
  txt = "<div>";
  for (const key in lista) {
    console.log(lista[key]);
    txt += `<p>${lista[key]}</p>`;
  }
  txt += "</div>";
  return txt;
}
