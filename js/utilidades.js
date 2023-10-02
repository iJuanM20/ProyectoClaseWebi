function crearNodo(tipoNodo) {

    var nodo = document.createElement(tipoNodo);
    return nodo;

}

function crearNodoTexto(tipoNodo, texto) {

    var nodo = crearNodo(tipoNodo);
    var textoNodo = document.createTextNode(texto);
    nodo.appendChild(textoNodo);
    return nodo;

}

function adicionarNodoBody(nodo) {

  document.body.appendChild(nodo);

}