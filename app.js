
const argv = require('./config/yargs').argv;
const {crearArchivo,listarTabla} = require('./multiplicar/multiplicar'); 

const colors = require('colors');

colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
  });

let comando = argv._[0];

switch(comando){
    case 'listar': listarTabla(argv.base,argv.limite); break;
    case 'crear':crearArchivo(argv.base,argv.limite)
                    .then(archivo=>console.log(`Archivo creado: ${colors.info(archivo)}`))
                    .catch(e=>console.log(e)); break;
    default: console.log('Comando no reconocido'); break; 
}

//console.log(argv.base);



// let parametro =  argv[2];

// let base = parametro.split('=')[1];

//console.log(base);



