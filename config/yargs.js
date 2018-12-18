const opts = {
    base: {  //para poner --base 
        demand: true, //le digo que es obligatorio
        alias: 'b' //alias para acortar -b
   },
   limite: {
       alias: 'l',
       default: 10
   }
}


const argv = require('yargs') //cuando no lleva / no es un path si no un paquete
                            .command('listar','Imprime en consola la tabla de Multiplicar',opts)
                            .command('crear','crea un txt con la tabla de Multiplicar',opts)
                            .help()
                            .argv;

module.exports = {
    argv
}