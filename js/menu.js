// remove id content in 650px

// remove propriedades
// el.style.zoom = "";
// el.style.removeProperty('zoom');

//Removendo um nó a partir do pai
// var node = document.getElementById("content");
//     if (node.parentNode) {
//         // node.parentNode.removeChild(node);
//         // element.setAttribute(class.box);
//     }

    // document.getElementById("content").innerHTML = "novo conteudo da div";
//     document.getElementById('conteudo').remove();
// function abrirMenu() {
//     document.getElementById('menu').style.width = '210px';
//     document.getElementById('content').style.marginLeft = '210px';
// }

//resposive menu
function abrirMenu() {
    if(window.matchMedia("(min-width: 700px)").matches)
    {
        document.getElementById('menu').style.width = '210px';
        document.getElementById('content').style.marginLeft = '210px';
    }
    else{
        document.getElementById('menu').style.width = '210px';
    }
}
function fecharMenu() {
    document.getElementById('menu').style.width = '0px';
    document.getElementById('content').style.marginLeft = '0px';
}

// alert on + sobre
function alerta(){
    alert("Sou um profissional empenhado, busco sempre resultados!");
    alert("Aberto à propostas e oportunidades de emprego.");
}
//links redirect new window
function softskill(){
    window.open('https://www.16personalities.com/br/teste-de-personalidade');
}
function project1(){
    window.open('https://github.com/felipesugisawa/Inova-Vagas');
}
function project2(){
    window.open('https://github.com/felipesugisawa/Rocket');
}
function project3(){
    window.open('https://github.com/felipesugisawa/reactFilmes');
}
function project4(){
    window.open('https://github.com/felipesugisawa/2s-2019-t1-role_top');
}
function project5(){
    window.open('https://github.com/felipesugisawa/2s-2019-t1-role_top');
}
//links icons
function linkIn() {
    // window.setTimeout(2000);
    window.open('https://www.linkedin.com/in/felipe-sugisawa-3aa5b217a/');
}
function linkTwt() {
    window.open('https://twitter.com/lipeckz');
}
function linkInsta() {
    window.open('https://www.instagram.com/lipeckz/');
}
function linkGit() {
    window.open('https://github.com/felipesugisawa');
}

function mais(){
    bootbox.alert("Hello World");
    $('#abrir').onclick(function(event){
        bootbox.alert('Oi, eu sou um alert.', function(){
        bootbox.alert('Oi eu sou um alert chamado apartir de um callback de outro alert.');
        });
    });
}

//Change color
    // document.documentElement.style.setProperty('--solid', '#191622',);
    // document.documentElement.style.setProperty('solidp', '#a0a0a0');
    // document.documentElement.style.setProperty('--bg', '#cecece');
    // document.documentElement.style.setProperty('--txt', '#191622');
    // document.documentElement.style.setProperty('--bg-txt', '#8B898F');
    // document.documentElement.style.setProperty('--links', '#ececec');
    // document.documentElement.style.setProperty('--linksh', '#fff');
    // document.documentElement.style.setProperty('--menu', '#191622');

    //add htmml
    const $html = document.querySelector('html')
    //add checkbox id
    const $checkbox = document.querySelector('#aparenciab')
    // div aparenciab
    $checkbox.addEventListener('change', function(){
        $html.classList.toggle('aparenciab') 
    })
