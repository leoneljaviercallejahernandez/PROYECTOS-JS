function listoTodo(){document.getElementById("botonIr").onclick = Ir_a_pagina_wed
cuantosElementosquerySelector()
cuantosElementosgetElement()
}
function Ir_a_pagina_wed() {
    location.href = ""
}
window.onload = listoTodo


function operacion(porcentaje, numeroDeNotas) {
    var solucion = numeroDeNotas*(porcentaje/100)
    return solucion
}
alert(operacion(50,3))

//2.ACTUALIZAR Elementos getElement y EL querySelector

//querySelector
function cuantosElementosquerySelector() {
    let cantidad_querySelector=document.querySelectorAll(".caja1");
    alert("esta es la cantidad de class con nombre .caja1 "+cantidad_querySelector.length + " 👈 con el querySelector no se actualizan los elementos recien creados");
    document.querySelector("body").innerHTML += '<div class="caja1">caja 1</div>' 
    alert(cantidad_querySelector.length);
}

//getElement
function cuantosElementosgetElement() {
    let cantidad=document.getElementsByClassName("caja2");
    alert("esta es la cantidad de class con nombre .caja2 "+cantidad.length+" 👈 con getElement si se actualiza los elementos recien creados");
    document.querySelector("body").innerHTML += '<div class="caja2">caja 2</div>' 
    alert(cantidad.length);
}