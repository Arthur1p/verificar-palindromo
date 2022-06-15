function verificarPalindromo(string) {
    if (!string) return "string inexistente";

    return string.split("").reverse().join("") === string;
}

//Digite a palavra no lugar para verificar se é palindromo
console.log(verificarPalindromo("palavra"));