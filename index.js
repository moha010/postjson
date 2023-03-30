async function getdate(){
    let r = await fetch("https://jsonplaceholder.typicode.com/posts");
    let e = await r.json();
    console.log(e[0].title)
    console.log(e[0].body)
    e.forEach(ele => {
        addelemant(ele.title , ele.body)
    });
}

getdate()
let all = document.querySelector(".all")
function addelemant (h , p){
    let div = document.createElement("div");
    div.className = "count" ;
    let h2 = document.createElement("h2");
    h2.appendChild(document.createTextNode(h));
    div.appendChild(h2);
    let prgraph = document.createElement("p");
    prgraph.appendChild(document.createTextNode(p));
    div.appendChild(prgraph);
    all.appendChild(div);
}