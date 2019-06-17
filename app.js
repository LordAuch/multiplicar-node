// // Requires
const {argv} = require('./config/yargs');
const colors = require('colors');
const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
  case 'listar':
    listarTabla(argv.base, argv.limite)
  break;
  case 'crear':
    crearArchivo(argv.base, argv.limite)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e.message))
  break;
  default:
  console.log(`'${comando}' no es un comando`);

}
