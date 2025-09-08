// console.log("DOM");

// const h1 = document.getElementsByTagName("h1");

// console.log(h1);
// console.dir(h1);


// const h1 = document.getElementById("heading1");

// console.log(h1);
// console.dir(h1);



// const h1s = document.getElementsByClassName("heading");

// console.log(h1s);
// console.dir(h1s);

// const h1 = document.querySelector("h1");
// console.log(h1);
// console.dir(h1);

// const h1s = document.querySelectorAll("h1");
// console.log(h1s);
// console.dir(h1s);


const h1 = document.querySelector("#heading1");
// console.log(h1);
// console.dir(h1);
h1.innerHTML = "JavaScript";



const h11 = document.querySelector("#heading2");
// console.log(h11);
// console.dir(h11);
h11.innerText = "TypeScript";



const h1s = document.querySelectorAll(".heading");
// console.log(h1s.length);
// console.dir(h1s);

// for(let i = 0; i < h1s.length; i++){
//     const el = document.querySelector(`#heading${i+1}`);
//     console.dir(el);
// }

// h1s.forEach((el)=>{
//     console.dir(el);
// });

h1s[0].textContent = "JavaScript DOM Manipulation";

h1s[1].innerHTML = "<i>TypeScript</i>"

h1s[2].innerHTML = "<u>Python</u>"



const anc = document.querySelector("a");
console.dir(anc);

// anc.href = "https://www.google.com";
// anc.innerText = "Go to Google"

// anc.setAttribute("href", "https://www.google.com");

// anc.target = "_blank"
// anc.setAttribute("target", "_blank");

const href = anc.getAttribute("href");
console.log(href);

anc.removeAttribute("target");



const elH1 = document.createElement("h1");
elH1.innerText = "Add h1 element";
const body = document.querySelector("body");

body.appendChild(elH1);



const para = document.createElement("p");
para.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";


document.querySelector("#box").appendChild(para);

