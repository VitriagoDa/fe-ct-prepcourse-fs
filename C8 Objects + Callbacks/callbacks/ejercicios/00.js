let deporte ={
    conBalon: ["Futbol", "Basketball","Golf"],
    sinBalon: ["deporteUno", "deporteDos", "deporteTres"]
};
let persona ={nombre: "Carlos", edad: 56, estudios:{esProgramador: true}};
console.log(persona.edad);

let atuendos ={manos: ["Guantes", "Anillos"], pies: ["Zapatos", "Medias"]};
atuendo["piernas"] =["Bermudas" , "Pantalones"];

let comidas = {};
let diferenciaDeNotaciones = function(propUno, propDos){
    comidas[propUno] = ["Frutas", "Vegetales"];
    comidas[propDos] = ["hamburguesa", "papas fritas"];
};
diferenciaDeNotaciones("Saludable", "noSaludable");
console.log(comidas);

let humano ={
    nombre:"Maria",
    apellido:"Araujo",
    edad: 31,
    estudios: ["Primaria ", "Secundaria"],
    hijos: false
};
