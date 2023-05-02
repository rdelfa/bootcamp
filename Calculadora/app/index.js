const express = require('express');
const app = express();

// EJERCICIO 1

/*
app.get('/calcular/:operacion/:num1/:num2', (req, res) => {
  let operacion = req.params.operacion;
  let num1 = Number(req.params.num1);
  let num2 = Number(req.params.num2);

  let resultado;
  let mensaje;

  if (isNaN(num1) || isNaN(num2)) {
    mensaje = 'Por favor, introduce dos números válidos';
  } else {
    switch (operacion) {
      case 'suma':
        resultado = num1 + num2;
        break;
      case 'resta':
        resultado = num1 - num2;
        break;
      case 'multiplicacion':
        resultado = num1 * num2;
        break;
      case 'division':
        if (num2 === 0) {
          mensaje = 'No se puede dividir entre cero';
        } else {
          resultado = num1 / num2;
        }
        break;
      default:
        mensaje = 'Operación no válida';
    }
  }

  if (mensaje) {
    res.send(mensaje);
  } else {
    res.send(`El resultado es ${resultado}`);
  }
});

app.get('/calcular', (req, res) => {
  res.send('Por favor, introduce una operación y dos números en la ruta /calcular/operacion/num1/num2');
});

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
*/


// EJERCICIO 2


app.get('/calcular', function(req, res) {
  let resultado;
  let mensaje;
  let operacion;
  let num1;
  let num2;
  operacion = req.query.operacion;
  num1 = Number(req.query.num1);
  num2 = Number(req.query.num2);

  if (req.query.operacion && req.query.num1 && req.query.num2) {
    if (isNaN(num1) || isNaN(num2)) {
      mensaje = 'Por favor, introduce dos números válidos';
    } else {
      switch (operacion) {
        case 'suma':
          resultado = num1 + num2;
          break;
        case 'resta':
          resultado = num1 - num2;
          break;
        case 'multiplicacion':
          resultado = num1 * num2;
          break;
        case 'division':
          if (num2 === 0) {
            mensaje = 'No se puede dividir entre cero';
          } else {
            resultado = num1 / num2;
          }
          break;
        default:
          mensaje = 'Operación no válida';
      }
    }
  } else {
    mensaje = 'Por favor, introduce todos los campos (operacion, num1 y num2)';
  }

  if (mensaje) {
    res.send(mensaje);
  } else {
    res.send(`El resultado es ${resultado}`);
  }
});

app.get('/calcular', (req, res) => {
  res.send('Por favor, introduce una operación y dos números en la ruta /calcular/operacion/num1/num2');
});

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});