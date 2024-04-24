import { faker } from "@faker-js/faker";

export const generatebungalowData = (): propertyData => {
  // Generate random property data
  const generatedpropertyData = {
    type: 'bungalow',
    buyingprice: faker.number.int({ min: 50000, max: 5000000 }),
    sellingprice: faker.number.int({ min: 60000, max: 10000000 }),
    rentprice: faker.number.int({ min: 500, max: 10000 }),
  };

  // Return property data
  return generatedpropertyData;
};

export const generatecottageData = (): propertyData => {
    // Generate random property data
    const generatedpropertyData = {
        type: 'cottage',
      buyingprice: faker.number.int({ min: 50000, max: 5000000 }),
      sellingprice: faker.number.int({ min: 60000, max: 10000000 }),
      rentprice: faker.number.int({ min: 500, max: 10000 }),
    };
  
    // Return property data
    return generatedpropertyData;
  };


  export const generateterracedData = (): propertyData => {
    // Generate random property data
    const generatedpropertyData = {
        type: 'terraced',
        buyingprice: faker.number.int({ min: 50000, max: 5000000 }),
        sellingprice: faker.number.int({ min: 60000, max: 10000000 }),
        rentprice: faker.number.int({ min: 500, max: 10000 }),
    };
  
    // Return property data
    return generatedpropertyData;
  };


  export const generateflatData = (): propertyData => {
    // Generate random property data
    const generatedpropertyData = {
        type: 'flat',
        buyingprice: faker.number.int({ min: 50000, max: 5000000 }),
        sellingprice: faker.number.int({ min: 60000, max: 10000000 }),
        rentprice: faker.number.int({ min: 500, max: 10000 }),
    };
  
    // Return property data
    return generatedpropertyData;
  };
