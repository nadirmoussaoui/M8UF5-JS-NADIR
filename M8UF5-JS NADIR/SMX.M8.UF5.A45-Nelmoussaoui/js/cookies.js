function validar() {
    var Usuari = document.form.login.value;
    var a = document.form.a.value;
    var b = document.form.b.value;
    if (a == b) {
        alert("Les Contrasenyas concideixen");
    } else {
        alert("Les Contrasenyas no coincideixen");
    }
}
function guardar() {
    localStorage.setItem ("nombre", document.querySelector("#nombre").value);
    localStorage.setItem ("apellido", document.querySelector("#apellido").value);
    }
    
    function recuperar() {
    document.querySelector("#nombre").value = localStorage.getItem("nombre");
    document.querySelector("#apellido").value = localStorage.getItem("apellido");
    }
    
    function esborrar() {
    document.querySelector("#nombre").value = null;
    document.querySelector("#apellido").value = null;
    localStorage.setItem ("nombre", "");
    localStorage.setItem ("apellido", "");
    }
