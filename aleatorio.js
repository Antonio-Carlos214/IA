const nomes = [
    "Fernanda",
    "Giuliana",
    "Maria Eduarda",
    "Marcelo",
    "Amanda",
    "Gustavo",
    "Gabriel"
];

export function aleatorio(lista) {
    if (!lista || lista.length === 0) {
        return "";
    }

    const posicao = Math.floor(Math.random() * lista.length);

    return lista[posicao];
}

export const nome = aleatorio(nomes);