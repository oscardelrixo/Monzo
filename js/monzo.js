/* JS para cambiar clases del responsive */ 
function menuResponsive() {
    var menu=document.getElementById("desplegable");
    if (menu.className.match(/(?:^|\s)mostrar(?!\S)/)) {
        menu.className =menu.className.replace( /(?:^|\s)mostrar(?!\S)/g , '' )
        menu.className += " nomostrar";
    } else {
        menu.className =menu.className.replace( /(?:^|\s)nomostrar(?!\S)/g , '' )
        menu.className += " mostrar";
    }
}
/* Fuente: https://www.felipesilva.com/tutoriales/javascript-tutoriales/cambiar-el-el-valor-del-atributo-class-con-javascript */
