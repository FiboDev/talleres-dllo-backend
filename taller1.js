// Punto 1
function convertidorTemp(temp) {

    return temp * 9/5 + 32
}

// Punto 2
function resolvedor(a, b, c, s) {


    let x1 = (-b + (b ** 2 - 4 * a * c) ** 0.5 ) / 2 * a 
    let x2 = (-b - (b ** 2 - 4 * a * c) ** 0.5 ) / 2 * a

    return s ? x1 : x2
}

// Punto 3
function mejorParidad(x) { 

    return x % 2 === 0
}

// Punto 4
async function peorParidad(x) {

    if (x === 0) {

        return true

    }  else if (x === 1) {

        return false

    } else {

        peorParidad(x - 2)

        if (x <= 10) {

            let resultado = peorParidad(x - 2)

            const response = await fetch(`https://api.isevenapi.xyz/api/iseven/${x}`)

            const data = await response.json()
            
            if (data.iseven) {

                return true

            } else {

                return false
            }

        } else {

            while (true) {

                console.log("por gracioso")
            }
        }

    }
}

async function testPeorParidad() {
    console.log(await peorParidad(9))
}

testPeorParidad()