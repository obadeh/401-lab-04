'use strict';

const DataModel = require('../file-data-model.js');

class Products extends DataModel {
  constructor() {
    super();
    this.schema = {
        category_id: { required: true },
        price:{required: true },
        weight: { },
        quantity_in_stock:{required: true}

    };
  }
}

let products=new Products

//   let obj ={name: 'hello'}
// let a=products.create(obj)
// console.log('a : ', a);

// let obj = { name: 'Test Product' };
// products.create(obj)
//   .then(record => {
//     console.log('record : ', record);
//     })
  


module.exports = Products;


