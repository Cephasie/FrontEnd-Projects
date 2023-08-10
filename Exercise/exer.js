let clas = document.getElementsByClassName("first-class");

console.log(window.navigator.appName)
browserN = window.navigator.appName
console.log(clas[0].children[1].textContent += browserN)

console.log(screen.height*screen.width)
area = screen.height*screen.width
console.log(clas[0].children[2].textContent += area)

console.log(window.location.hostname)
hostN = window.location.hostname
console.log(clas[0].children[4].textContent += hostN)