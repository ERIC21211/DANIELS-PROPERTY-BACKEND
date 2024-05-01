import { faker } from "@faker-js/faker";
import { storepropertyData } from "../helpers/helper.js";

export const generatebungalowData = (): propertyData => {
  // Generate random property data
  const generatedpropertyData = {
    type: 'bungalow',
    buyingprice: faker.number.int({ min: 50000, max: 500000 }),
    sellingprice: faker.number.int({ min: 60000, max: 100000 }),
    rentprice: faker.number.int({ min: 500, max: 10000 })
  };


storepropertyData(generatedpropertyData).catch(console.error);

  // Return property data
  return generatedpropertyData;
};

export const generatecottageData = (): propertyData => {
    // Generate random property data
    const generatedpropertyData = {
        type: 'cottage',
      buyingprice: faker.number.int({ min: 50000, max: 500000 }),
      sellingprice: faker.number.int({ min: 60000, max: 100000 }),
      rentprice: faker.number.int({ min: 500, max: 10000 })
    };
  
    storepropertyData(generatedpropertyData).catch(console.error);
    
    // Return property data
    return generatedpropertyData;
  };



  export const generateterracedData = (): propertyData => {
    // Generate random property data
    const generatedpropertyData = {
        type: 'terraced',
        buyingprice: faker.number.int({ min: 50000, max: 500000 }),
        sellingprice: faker.number.int({ min: 60000, max: 100000 }),
        rentprice: faker.number.int({ min: 500, max: 10000 })
    };
  
    // Return property data
    return generatedpropertyData;
  };


  export const generateflatData = (): propertyData => {
    // Generate random property data
    const generatedpropertyData = {
        type: 'flat',
        buyingprice: faker.number.int({ min: 50000, max: 500000 }),
        sellingprice: faker.number.int({ min: 60000, max: 100000 }),
        rentprice: faker.number.int({ min: 500, max: 10000 })
    };
  
    // Return property data
    return generatedpropertyData;
  };
