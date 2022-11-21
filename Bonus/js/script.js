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
let container = document.getElementById("container");

// console.log(teamMembers);
for(let i=0; i < teamMembers.length; i++){
    let teamIesimo = teamMembers[i];
    let container = document.getElementById("container");
    let element = document.createElement("div");
    element.classList.add("box");
    element.innerHTML = `Name:${teamIesimo.name}   Surname:${teamIesimo.surname}   Role:${teamIesimo.role}    Photo:${teamIesimo.photo}`;
    container.append(element);

    // for(let key in teamIesimo)
   
        
    
    
   
}