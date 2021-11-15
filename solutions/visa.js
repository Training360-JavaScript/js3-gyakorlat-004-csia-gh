const checkVisa = (cardNumber) => {
  const pattern = /^4(\d{12}|\d{15})$/;
  return cardNumber.match(pattern) ? true : false;
};

export default checkVisa;