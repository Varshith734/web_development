let a=document.getElementsByTagName("p");
console.log(a)
a[1].style.color="red"

a[0].style.color="green"

let b=document.getElementById("c")
console.log(b)
b.style.color="orange"
b.style.backgroundColor="black"

let d=document.getElementsByClassName("p1")
d[0].style.color="blue"
d[1].style.color="pink"
d[0].style.backgroundColor="black"

// d.forEach(element => {
    
// });

console.log(Array.isArray(d))
let f=Array.from(d);
console.log(Array.isArray(f))

f.forEach(Element => {
    Element.style.color="blue"
    Element.style.backgroundColor="black"
    
});


let a1=()=>{
    console.log("hi")
}

a1()

let p2=document.querySelectorAll(".p1")
p2.forEach(element => {
   element.style.color="red"
});

