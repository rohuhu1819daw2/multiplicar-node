
//requires
const fs = require('fs'); //require de node propio
//const fs = require('express'); //require externo fuera de node
//const fs = require('./fs'); //require de archivos creados en proyecto
const colors = require('colors');


let listarTabla = (base,limite=10) =>{
    console.log('==============================='.green);
    console.log(`=======tabla de ${base}==============`.green);
    console.log('==============================='.green);
    let linea = '';
    for(let i=1;i<=limite;i++){
        let resultado = base*i;
        linea += `${base} * ${i} = ${resultado}\n`;
    }  console.log(linea);
}

let crearArchivo = (base,limite = 10) =>{ //tmb es valido module.exports.crearArchivo = 
    return new Promise((resolve,reject)=>{

        if(!Number(base)) { // si no es un numero ejecute ese error y con return sale 
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let data = '';

        for(let i=1;i<=limite;i++){
            let resultado = base*i;
            data += `${base} * ${i} = ${resultado}\n`;
        }

        let archivo = `tablas/tabla-${base}.txt`;

        fs.writeFile(archivo, data, (err) => {
            if (err) 
                reject(err)
            else 
                resolve(`${archivo}`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}



