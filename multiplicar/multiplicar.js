// Requires
const fs = require('fs');
const colors = require('colors');



let i;

let listarTabla = (base, limite) => {

  if(!Number(base)){
    console.log(`${base} no es un numero`);
  }else {
    for (i = 1; i <= limite ; i++) {
      console.log(`${base} * ${i} = ${base*i}`.green);
    }
  }
}


let crearArchivo = async(base, limite) =>{

  if (!Number(base)){
    throw new Error(`${base} no es un numero`.bold.red);
  }
  else {
    let data = '';

    for(i=1; i<=limite;i++){
      resul = i* base;
      data += `${base} * ${i} = ${resul}\n`;
    }


    fs.writeFile(`tablas/tabla-${base}-hasta-${limite}.txt`, data, (err) => {
      if (err)
      throw new Error;
      else
      return `Tabla-${base}.txt`;
    });
  }

  return `Tabla-${base}.txt`.bold.yellow;
}


module.exports = {
  crearArchivo,
  listarTabla
}
