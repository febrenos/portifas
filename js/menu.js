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
function abrirMenu() {
    // document.getElementById('conteudo').remove();
    document.getElementById('menu').style.width = '210px';
    document.getElementById('content').style.marginLeft = '210px';
}
function fecharMenu() {
    document.getElementById('menu').style.width = '0px';
    document.getElementById('content').style.marginLeft = '0px';
}