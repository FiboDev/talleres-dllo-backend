// Punto 1
function desglosarString(cadena, opcion) {

    const vocales = 'aeiouAEIOU';

    if (opcion === 'vocales') {
        let contador = 0;
        for (let i = 0; i < cadena.length; i++) {
            if (vocales.includes(cadena[i])) {
                contador++;
            }
        }
        return contador;
    } else if (opcion === 'consonantes') {
        let contador = 0;

        for (let i = 0; i < cadena.length; i++) {
            if (!vocales.includes(cadena[i])) {
                contador++;
            }
        }
        return contador;
    } else {
        return 0;
    }
}

// Punto 2
function twoSum(numeros, numero) {

    for (let i = 0; i < numeros.length; i++) {

        for (let j = i + 1; j < numeros.length; j++) {

            if (numeros[i] + numeros[j] === numero) {

                return [i, j];
            }
        }
    }
}

// Punto 3
function conversionRomana(numeroRomano) {

    const numerosRomanos = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    let valorPrevio = 0;

    for (let i = numeroRomano.length - 1; i >= 0; i--) {

        const valorActual = numerosRomanos[numeroRomano[i]];


        if (valorActual < valorPrevio) {

            total -= valorActual;

        } else {

            total += valorActual;
        }

        valorPrevio = valorActual;
    }

    return total;
}
