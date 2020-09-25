const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {

    console.log('============================='.green);
    console.log(`Tabla del ${base} `.green);
    console.log('============================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i} `);
    }
}

// vamos a crear una funcion que retorne una promesa
//una promesa tiene dos parametros,resolve ; reject 

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        // verifivcamos si el parametro es un numero

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }
        let data = ''
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }

        fs.writeFile(`tablas/text-${base}-al-${limite}`, data, (err) => {
            if (err)
                reject(err)
            else

                resolve(`text-${base}-al-${limite}.txt`)
        })
    });
}


// exportamos la funcion porr medio del udo del modulo
//podemos pasar por medi e d eun objeto los metodos

module.exports = {
    crearArchivo,
    listarTabla
}