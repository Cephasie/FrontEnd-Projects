// // fetch("https://api.kanye.rest/").then((Response)=>{
// //     console.log(Response.json);
// // });

// function getData(url){
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", url);
//     xhr.send();
//     xhr.onload = function(){
//         console.log(xhr.response);
//     };
// }

// var count = 0;
// function nextHandler(){
//     count += 1;
//     console.log(count);
// }
// document.getElementById("getButton").onclick = nextHandler;


let pagePortion = document.getElementsByClassName("hrL");
let createElement = document.createElement("p")
console.log(pagePortion[0].prepend(createElement));
let button = document.getElementById('getButton');

button.addEventListener('click', () => {
    fetch("https://api.kanye.rest/")
    .then(Response => {
        if (!Response.ok) {
            throw new Error('Network Not Ok');
        }
        return Response.json();
    })
    .then(data => {
        createElement.textContent=JSON.stringify(data.quote)
        console.log(data);
    })
    .catch(error =>{
        console.error('Error:', error);
    });
});