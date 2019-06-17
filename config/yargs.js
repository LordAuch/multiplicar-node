// Optimizacion de yargs

const opts = {
  base: {
    demand: true,
    alias: 'b',
    describe: 'Base a multiplicar'
  },
  limite: {
    default: 10,
    alias: 'l',
    describe: 'Numero Limite'
  }
}

const argv = require('yargs')
          .command('listar','Imprime en consola la tabla de multiplicar', opts)
          .command('crear', 'Crea un archivo con la tabla deseada', opts)
          .help()
          .argv;

module.exports = {
  argv
}
