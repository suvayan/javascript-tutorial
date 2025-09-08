const h1 = document.querySelector("h1");



const ch1 = document.createElement("h1");
ch1.innerText = "Hello Aisa!";
// console.dir(ch1);
ch1.style.color = "red";
// ch1.classList.add("abc");

document.querySelector("body").append(ch1);





function elementCreation (tag, options={}) {
    const element = document.createElement(tag);

    // text content
    if (options.text) {
        element.textContent = options.text;
    }

    // innerHTML
    if (options.html) {
        element.innerHTML = options.html;
    }

    // id
    if (options.id) {
        element.setAttribute("id", options.id);
    }

    // classes
    if (options.class) {
        // element.className = options.class;
        element.setAttribute("class", options.class);
    }


    // attributes
    if (options.attrs) {
        for (let [k, v] of Object.entries(options.attrs)) {
            element.setAttribute(k, v);
        }
    }

    // styles
    if (options.styles) {
        Object.assign(element.style, options.styles);
    }


    // children
    if (options.children) {
        options.children.forEach(child => element.appendChild(child));
    }

    // events
    if (options.events) {
        for (let [event, handler] of Object.entries(options.events)) {
            element.addEventListener(event, handler);
        }
    }

    return element;
}

const h2 = elementCreation("h2", {
    text: "I am created from JavaScript!",
    // html: "<i>Hello</i>"
    // id: "heading-2",
    // class: "xyz",
    // attrs: {
    //     id: "heading-2",
    //     class: "xyz",
    //     title: "Heading 2"
    // }
    styles:{
        color: "green",
        textTransform: "capitalize"
    }

});

console.dir(h2);

// h2.classList.add("xyz-txt");

document.querySelector("body").append(h2);