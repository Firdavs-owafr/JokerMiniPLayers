// function upper(a){
//     let uppercase = a.split()
//     uppercase.forEach(el => {
//         if(el == el.toUpperCase()){
//             el.toLowerCase();
//         }
//         console.log(el);
//     })
// }
// upper('saSSa212')    
let jok = document.getElementById('joker'),
    btn = document.getElementById('btn'),
    url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';

let getJoke = () => {
    // jok.classList.remove('active')
    fetch(url)
    .then(data => data.json())
    .then(item => {
        jok.textContent = `${item.joke}`
        // jok.classList.add('active')
        // if(item.joke == 'undefined') {
        //     item.joke == 'Loading'
        // }
    })    
} 
btn.addEventListener('click', getJoke)
getJoke()