function clicou(x) {
    var c = "computador";
    var l = "livros";
    var p = "poemas";
    if (x == c) {
        lixo(1, x);
    }
    if (x == l) {
        lixo(2, x);
    }
    if (x == p) {
        lixo(3, x);
    }
}

function lixo(aux, a) {
    if (document.getElementById(a).hasAttribute("style")) {
        document.getElementById(a).removeAttribute("style");
    } else {
        document.getElementById(a).style.backgroundImage = "url('imagem/mds" + aux + ".png')";
    }
}