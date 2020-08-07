const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
var colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('comando no encontrado');
        break;
}

//console.log(argv);


//let base = '5';
//informacion del pc
//console.log(process);

//rutas de node actuales
//console.log(process.argv);

//instalar paquetes
//npm install express

//enviar parametros a funcion
//node app --base=5

//let argv = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];


//console.log(multiplicar);




//let argv2 = process.argv;

//console.log(argv.limite);