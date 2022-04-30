// Code your solutions in this file
const thankYous = ["Guadalupe", "Ollie", "Aki"];

function writeCards(thankYous) {
  for (let i = 0; i < thankYous.length; i++) {
    console.log(`Thank you, ${thankYous[i]}, for the wonderful surprise gift!`);
  }

  return thankYous;
}

writeCards(thankYous);


  const address = {
    street1: '11 Broadway',
    street2: '2nd Floor',
    city: 'New York',
    state: 'NY',
    zipCode: "10004"
  };
  
  for (const key in address) {
    console.log(address[key]);
  }

  const addressOne = {
    street1: '11 Broadway',
    street2: '2nd Floor',
    city: 'New York',
    state: 'NY',
    zipCode: '10004'
  };
  
  for (const key in addressOne) {
    console.log(addressOne.street1);
  }