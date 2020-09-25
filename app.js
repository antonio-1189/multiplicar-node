//requireds

// funciones callbacks: son funciones que se pasan como parametros de otras funciones  
// y que se ejecutan dentro de esta  

// nombre_carpeta/
// ./ desde la raiz ;  ../ regresar a un carpeta anterior

// importamos el archivo/ aplicamos deestructuracion 

//para emplear solo un metodo especifico
const argv = require('./configure/yargs').argv
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');



//comandos independientes

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`El archivo creado ${archivo.green}`))
            .catch((err) => console.log(err));
        break;

    default:
        console.log('comando no reconocido');
}

// let base = 10;
// console.log(process);
// obtendremos los parametros desde la terminal


// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];


// console.log(argv);
// // imprimir el vlaor dle limite
// console.log('Limite', argv.limite);


// let data = ''
// for (let i = 1; i <= 10; i++) {
//     data += `${base} * ${i} = ${base * i} \n`;
// }

// fs.writeFile(`tablas/text-${base}`, data, (err) => {
//     if (err) throw err;
//     console.log(`El archivo text-${base} ha sido creado`)
// })

// crearArchivo(base)
//     .then(archivo => console.log(`El archivo text-${base} ha sido creado`))
//     .catch((err) => console.log(err));