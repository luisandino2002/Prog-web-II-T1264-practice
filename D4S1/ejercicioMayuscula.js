let texto = "este es un texto de prueba"
let textoArreglo = texto.split(" ")
let texto2 = ""
let textoResultado =""

textoArreglo.forEach(element => {
    let texto3 = element.substr(0,1)
    let texto4 = texto3.toUpperCase();
    let texto5 = texto4 + element.substr(1,element.length)

    textoResultado += texto5 + " ";

   // texto2 =element.substring( 0,1).toUpperCase() + element.substring(1,element.length);
   // console.log("texto 2" + texto2);

});

console.log(textoResultado);

