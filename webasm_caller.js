const fs = require('fs')
const wasmBuffer = fs.readFileSync('./add.wasm');

const importObject = {
    console: {
      log(arg) {
        console.log(arg);
      },
    },
  };
  
  WebAssembly.instantiate(wasmBuffer, importObject).then(
    (obj) => {
      const res = obj.instance.exports.add(10, 100);
      console.log('Javascipt Output:' + res);
    }
  );