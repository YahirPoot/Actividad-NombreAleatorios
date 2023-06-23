function generarNombre (){
    var nombres = ['Jesus', 'Angel', 'Alejandro', 'Alejandra', 'Gustavo', 'Yahir', 'Noe', 'Jose'];
    var apellido1 = ['Cauich', 'Poot', 'Canul', 'May', 'Xool', 'Campos'];  
    var apellido2 = ['Sosa', 'Ucan', 'Mena', 'Couho', 'Canche', 'Castillo'];

    var indice1 = Math.floor(Math.random() *nombres.length);
    var indice2 = Math.floor(Math.random() *apellido1.length);
    var indice3 = Math.floor(Math.random() *apellido2.length);

    var nombres = nombres[indice1];
    var apellido1 = apellido1[indice2];
    var apellido2 = apellido2[indice3];

    var nombreCompleto = (nombres +" "+ apellido1 +" "+ apellido2);  
    document.getElementById("resultado").textContent = nombreCompleto;
}
