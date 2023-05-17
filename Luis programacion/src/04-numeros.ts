(() => {
  let producPrice = 100;
  producPrice     = 12;

  console.log ('producPrice', producPrice);

  let custumerAge: number = 29;
  // error #1 String + Number
  //custumerAge = custumerAge + '1';

  custumerAge = custumerAge + 1;
  console.log('CustomerAge: ', custumerAge);

  // Error #2 No hay dato asignado
  let productInStock: number =20 ;
  console.log('productInStock', productInStock);
  if (productInStock > 10) {
    console.log('is greater');
  }

  // Cambio de String a number
  let discount = parseInt('100');
  console.log('discount', discount);

  if (discount <= 200) {
    console.log('apply');
  } else {
    console.log('not apply');
  }

  // Hexadecimales y Binarios
  let hex = 0xfff;
  console.log('hex', hex);
  let bin = 0b1010; // 10
  console.log('bin', bin);
  const myNumber: number = 10;

}
)();
