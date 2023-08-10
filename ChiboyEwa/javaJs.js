let cls = document.getElementsByClassName("second-div");
let tag = document.getElementsByTagName("p");
let id = document.getElementById("fifteen");

let children = document.body.children;
let parent = document.body.parentElement;
let sibling = document.body.previousElementSibling;

console.log(children);
console.log(parent);
console.log(sibling);
console.log(cls[0].children);
console.log(cls[0].previousElementSibling);

console.log(screen.width, screen.height);
console.log(navigator.language);
console.log(navigator.onLine);
console.log(history.length);
console.log(document.body.firstElementChild.firstChild.textContent);

for(let i of cls){
    console.log(i);
}

let name = document.createElement("p");
let name2 = doucment.createElement("p")
name.innerHTML = "Changed the background color";
name2.textContent = "Changed the button color";
cls[0].append(name);
cls[1].prepend(name2);