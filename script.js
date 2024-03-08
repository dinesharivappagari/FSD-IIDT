let bgcolor=document.getElementById("temp")
bgcolor.innerText="#FFFFFF"
let body=document.querySelector("body")
let button=document.querySelector("button")
const colors=["#FFFFFF", "#000000", "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF", "#808080", "#800000", 
"#008000", "#000080", "#808000", "#800080", "#008080", "#C0C0C0", "#FFA500", "#800000", "#800080","#008080"]
body.style.backgroundColor="white"
button.addEventListener('click', function(){
    let colorIndex=parseInt(Math.random()*colors.length);
    body.style.backgroundColor=colors[colorIndex];
    temp.innerText=colors[colorIndex];
})