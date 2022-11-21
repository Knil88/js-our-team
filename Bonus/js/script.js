//creare una lista di oggetti
const teamMembers = [
    {
        "name": "Wayne",
        "surname":"Barnet",
        "role":"Founder CEO",
        "photo":"img\wayne-barnett-founder-ceo.jpg"
    },
    {
        "name": "Angelica",
        "surname":"Caroll",
        "role":"Chief Editor",
        "photo":"img\angela-caroll-chief-editor.jpg"
    },
    {
        "name": "Walter",
        "surname":"Gordon",
        "role":"Office Manager",
        "photo":"img\walter-gordon-office-manager.jpg"
    },
    {
        "name": "Angela",
        "surname":"Lopez",
        "role":"Social Media Manager",
        "photo":"img\angela-lopez-social-media-manager.jpg"
    },
    {
        "name": "Scott",
        "surname":"Estrada",
        "role":"Developer",
        "photo":"img\scott-estrada-developer.jpg"
    },
    {
        "name": "Barbara",
        "surname":"Ramos",
        "role":"Graphic Designer",
        "photo":"img\barbara-ramos-graphic-designer.jpg"
    },
]
// let container = document.getElementById("container");

// console.log(teamMembers);
// for(let i=0; i < teamMembers.length; i++){
//     let teamIesimo = teamMembers[i];
//     let container = document.getElementById("container");
//     let element = document.createElement("div");
//     let bottomCards = document.querySelector(".bottom-cards");
//     // element.classList.add("box");
//     element.innerHTML = `Name:${teamIesimo.name}   Surname:${teamIesimo.surname}   Role:${teamIesimo.role}    Photo:${teamIesimo.photo}`;
   
    
//     // container.append(element);

   
    
   
// }
const ctnCardMembro = document.querySelector("section.row");

// creo il ciclo for con cui inserire le informazioni degli oggetti
for (let k = 0; k < teamMembers.length; k++) {
    
    let membroDom = teamMembers[k];

    let ctnInfoMembro = createElement("div", "slot");

    let fotoMember = createElement("img", "img_member");
    fotoMember.src = membroDom.foto;
    ctnInfoMembro.append(fotoMember);

    let nameMember = createElement("div", "name_member");
    nameMember.innerHTML = membroDom.nome;
    ctnInfoMembro.append(nameMember);

    let roleMember = createElement("div", "role_member");
    roleMember.innerHTML = membroDom.ruolo;
    ctnInfoMembro.append(roleMember);

    ctnCardMembro.append(ctnInfoMembro);
}

// FUNZIONI
// Creo la funzione per generare vari elementi con classi o id
function createElement (typeElement, idClassElement) {
    // creo l'elemento
    const element = document.createElement(typeElement);
    element.classList.add(idClassElement);

    // ritorno l'elemento
    return element;
} 