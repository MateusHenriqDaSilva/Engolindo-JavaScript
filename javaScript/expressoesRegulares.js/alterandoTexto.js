let texto = "'I'm the cook,' he said, 'it's my job.'";

console.log(texto.replace(/(^|\W)'|'(\W|$)/g, '$1"$2'));