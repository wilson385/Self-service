  const fotos = ['assets/prato1.jpg', 'assets/prato2.jpg', 'assets/prato3.jpg', 'assets/prato4.jpg'];
   // global
  let indice = 0;

  setInterval( function()  {
    // (indice + 1) → adiciona 1 ao índice atual.
    //% fotos.length → é o operador módulo.
//Garante que o índice volte para 0 quando chegar ao final do array.
//fotos.length é o número total de imagens no array fotos.

//✅ Isso não cria outra variável, apenas altera a global, para que a contagem continue de onde parou na próxima execução.
    indice = (indice + 1) % fotos.length; // altera a global
    //template literal é uma forma de criar strings (textos) que permite inserir variáveis ou expressões dentro da própria string, de forma fácil e legível.
    //Dentro das crases, você coloca ${variavel} para inserir o valor de uma variável
     document.querySelector(".secundario").style.backgroundImage = `url(${fotos[indice]})`
  }, 2000);  // troca a cada 1000 ms (1 segundo)