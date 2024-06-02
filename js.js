var jsselect = NaN

function fermer() {
    var div = document.getElementById("Card");

    var Button1 = document.getElementById("ButtonOnglet1");
    var Button2 = document.getElementById("ButtonOnglet2");
    var Button3 = document.getElementById("ButtonOnglet3");
    var Button4 = document.getElementById("ButtonOnglet4");
    Button1.style.backgroundColor ="rgb(255, 255, 255)";
    Button2.style.backgroundColor ="rgb(255, 255, 255)";
    Button3.style.backgroundColor ="rgb(255, 255, 255)";
    Button4.style.backgroundColor ="rgb(255, 255, 255)";
    div.style.transform = "translate(750px, 0px)"
}

function ouvrir(json) {
    var div = document.getElementById("Card");
    jsselect = json
    fetch('onglet.json')
    .then(response => response.json())
    .then(data => {
        const Onglet1 = data[json][1][0];  
        var Onglet1Div = document.getElementById("DivOnglet1");
        Onglet1Div.innerHTML= Onglet1;
        var img = document.getElementById("Ongletimg");
        const imgcontent = data[json][2][1];  
        img.innerHTML= imgcontent;
        var title = document.getElementById("title");
        const titlecontent = data[json][2][0];  
        title.innerHTML= titlecontent;
        const onglettitle1 = data[json][0][0]
        const onglettitle2 = data[json][0][1]
        const onglettitle3 = data[json][0][2]
        const onglettitle4 = data[json][0][3]
        var Button1 = document.getElementById("ButtonOnglet1");
        var Button2 = document.getElementById("ButtonOnglet2");
        var Button3 = document.getElementById("ButtonOnglet3");
        var Button4 = document.getElementById("ButtonOnglet4");
        Button1.innerText=onglettitle1;
        Button1.style.backgroundColor ="rgb(197, 193, 193)";
        Button2.innerText=onglettitle2;
        Button3.innerText=onglettitle3;
        Button4.innerText=onglettitle4;
        

    })
    div.style.transform = "translate(-750px, 0px)"
}

function ouvrironglet(a) {
    var Button1 = document.getElementById("ButtonOnglet1");
    var Button2 = document.getElementById("ButtonOnglet2");
    var Button3 = document.getElementById("ButtonOnglet3");
    var Button4 = document.getElementById("ButtonOnglet4");
    Button1.style.backgroundColor ="rgb(255, 255, 255)";
    Button2.style.backgroundColor ="rgb(255, 255, 255)";
    Button3.style.backgroundColor ="rgb(255, 255, 255)";
    Button4.style.backgroundColor ="rgb(255, 255, 255)";


    var Onglet1 = document.getElementById("DivOnglet1");
    var Onglet2 = document.getElementById("DivOnglet2");
    var Onglet3 = document.getElementById("DivOnglet3");
    var Onglet4 = document.getElementById("DivOnglet4");
    
    Onglet1.style.display ="none"
    Onglet2.style.display ="none"
    Onglet3.style.display ="none"
    Onglet4.style.display ="none"
    
    var div = document.getElementById("DivOnglet"+a);
    var Button1 = document.getElementById("ButtonOnglet"+a);
    Button1.style.backgroundColor ="rgb(197, 193, 193)";

    fetch('onglet.json')
    .then(response => response.json())
    .then(data => {
        const content = data[jsselect][1][a-1];  
        div.innerHTML= content;
    })
    div.style.display ="flex"
}