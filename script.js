const people = [{
    "name": "Leo Dominguez",
    "arms": 2,
    "legs": 2,
    "nose": 1,
    "hat": 1,
    "shellColor": "none",
    "img": "https://qph.cf2.quoracdn.net/main-qimg-da2d139bc7a198a835975215ffec7ac5-lq",
},

{
    "name": "Mr. Snail",
    "arms": 0,
    "legs": 0,
    "nose": 0,
    "hat": 1,
    "shellColor": "cyan",
    "img": "https://pbs.twimg.com/media/DeEti6FXkAAIWpD.jpg",
}
];

window.addEventListener('load', ()=> {
    init();
})

const init = function(){

    const container = document.getElementById("container1");

    people.map(function(person){
        const profile = (buildProfile(person));
        container.innerHTML = container.innerHTML + profile;
    })
}

const buildProfile = function(person){
    return `
    <div class="profile">
        <h2>${person.name}</h2>
        <h3>${person.arms}</h3>
        <img src=${person.img}>
    <div>`
}