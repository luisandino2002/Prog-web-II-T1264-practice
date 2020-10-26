// Dado un set desordenado de pares
// escribir una algoritmo que agrupe por brand
// y agregue un contador de por cada elemento repetido
//
// Ejemplo
let input = [
    {
      id: 1,
      brand: "BMW",
      model: "116i",
    },
    {
      id: 2,
      brand: "BMW",
      model: "X5",
    },
    {
      id: 3,
      brand: "Toyota",
      model: "Corolla",
    },
    {
      id: 3,
      brand: "Nissan",
      model: "Navara",
    },
  ];
  
  let output = [];
  
  function agrupar() {
    let con_bmw = 0;
    let con_toyota = 0;
    let con_nissan = 0;
  
    input.forEach((element) => {
      // console.log(element.brand);
      switch (element.brand) {
        case "BMW":
          con_bmw++;
          break;
        case "Toyota":
          con_toyota++;
          break;
        case "Nissan":
          con_nissan++;
          break;
      }
    });
  
    output.push({ brand: "BMW", count: con_bmw });
    output.push({ brand: "Toyota", count: con_toyota });
    output.push({ brand: "Nissan", count: con_nissan });
    console.log(output);
  }
  agrupar();
  