// 1. Texto truncado
// dado una cadena de texto de n caracteres,
// truncar la cadena de texto a determinado número de caracteres
// en base aun argumento pasado en f(n), donde n es un numero natural > 0
// además concatenear la frase "... Leer más"
// Ej.

function concatenar(texto, n) {
    return texto.substring(0, n) + "... leer mas";
  }
  
  console.log(concatenar("estamos haciendo el ejercicio numero uno", 10));
  
  // 2. vocales
  // dado una cadena de texto de n caracteres
  // buscar en cada palabra que compone dicha cadena la última vocal en la
  // presente palabra y reemplazarla por una vocal pasada como argumento
  // Ej.
  /**
   * const input = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`; 
   * vocal pasada como argumento f(a)
     output =  'Loram ipsam dolar sat amat, consectetar adipiscang elat.'
     ** nótese     ^     ^     ^   ^    ^            ^         ^     ^  
   */
  const cadena_vocales = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;
  
  function remplazar_vocal(texto, letras) {
    const cadenavocal2 = texto.split(" ");
    let cambio = "";
    let ordenado = "";
  
    for (let i = 0; i < cadenavocal2.length; i++) {
      let cont = 0;
      let vocal = cadenavocal2[i];
  
      for (let caracter = vocal.length - 1; caracter >= 0; caracter--) {
        if (cont == 0) {
          if (
            vocal[caracter] == "a" ||
            vocal[caracter] == "e" ||
            vocal[caracter] == "i" ||
            vocal[caracter] == "o" ||
            vocal[caracter] == "u"
          ) {
            cambio += vocal[caracter].replace(vocal[caracter], letras);
  
            cont = 1;
          } else {
            cambio += vocal[caracter];
          }
        } else {
          cambio += vocal[caracter];
        }
      }
      cambio += " ";
    }
  
    const array = cambio.split(" ");
  
    for (let i = 0; i < array.length; i++) {
      let word = array[i];
  
      for (let caracter = word.length - 1; caracter >= 0; caracter--) {
        ordenado += word[caracter];
      }
      ordenado += " ";
    }
    return ordenado;
  }
  
  console.log(cadena_vocales);
  console.log(remplazar_vocal(cadena_vocales, "G"));
  
  // 3. Wolfram Alpha
  // https://www.wolframalpha.com/
  // Wolfram Alpha es un sitio que ofrece una herremienta matemática y pedagógica
  // que ayuda a los estudiantes a resolver ecuaciones matemáticas paso a paso
  // y de forma gráfica
  // Ejercicio,
  // Dada una ecuacion de primer grado del tipo, ax + b = c
  // donde a, b y c son valores constantes y 'x' es un valor desconocido o variable
  // escribir ua funcion que tome una ecuación de primer grado
  // y resuelva imprimiendo paso a paso la resolución de la misma
  // Ej.
  //  f('3x+6=0')
  //  (Paso 1) -> 3x = -6
  //  (Paso 2) -> x = -6/3
  //  (Paso 3) -> x = -2
  // fin
  // BONUS (AYUDA)
  // para input = "3x+6=0"
  // donde el patron a buscar (?<ax>[0-9]*x)(?<operador>[\+|-])(?<b>[0-9]+)(?<igual>=)(?<c>[0-9]+)$
  // y
  // ?<ax> -> nombre del grupo
  // * -> busca de cero conicidencias a ilimitadas
  // + -> busca de una conicidencia a ilimitadas
  // [\+|-] -> busca el operador + o el -
  // $ -> estrictamente debe finalizar con un valor
  
  ecuacion("3x+6=0");
  
  function ecuacion(ejercicio3) {
    console.log("Ecuacion lineal: " + ejercicio3);
  
    const pattern = /(?<a>[0-9]+)(?<x>[\x])(?<operador>[\+|-])(?<b>[0-9]+)(?<igual>=)(?<c>[0-9]+)$/m;
  
    const arrayResult = Array.from(ejercicio3.match(pattern));
  
    const pas_1 =
      arrayResult[1] +
      arrayResult[2] +
      " = " +
      (arrayResult[6] > 0 ? arrayResult[6] : "") +
      (arrayResult[3] === "+" ? "-" + arrayResult[4] : "+" + arrayResult[4]);
    console.log("paso 1: " + pas_1);
  
    despejar =
      eval(arrayResult[6]) +
      eval(arrayResult[3] === "+" ? "-" + arrayResult[4] : arrayResult[4]);
  
    const pas_2 = arrayResult[2] + " = " + despejar + "/" + arrayResult[1];
  
    console.log("paso 2: " + pas_2);
  
    div_despejar = despejar / eval(arrayResult[1]);
  
    const pas_3 = arrayResult[2] + " = " + div_despejar;
  
    console.log("paso 3: " + pas_3);
  }