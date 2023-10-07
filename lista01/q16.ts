//16. Construa uma função que receba uma string como parâmetro e devolva outra string com  os carateres embaralhados. Padronize em sua função que todos os caracteres serão devolvidos em caixa alta ou caixa baixa, independentemente de como foram digitados.

function shuffle(str) {
    const chars = str.split('');
    for (let i = chars.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = chars[i];
        chars[i] = chars[j];
        chars[j] = temp;
    }
    return chars.join('');
}

console.log(shuffle('abcdefghIJLMnopq'));