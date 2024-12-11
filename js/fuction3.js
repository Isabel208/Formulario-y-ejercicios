function generarLista(limite) {
    let lista = [];
    for (let i = 1; i <= limite; i++) {
        lista.push(i);
    }
    return lista;
}

console.log(generarLista(5)); // Salida: [1, 2, 3, 4, 5]
