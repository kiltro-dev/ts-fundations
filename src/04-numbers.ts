(() => {
  let productPrice = 100;
  productPrice = 12;
  console.log({ productPrice });

  let customerAge = 28;
  customerAge = customerAge + 1;
  console.log({ customerAge });

  let productInStock: number;

  console.log({ productInStock });

  if (productInStock > 10) {
    console.log('is greater');
  }

  let discount = parseInt('123');

  console.log({ discount });
})();
