'use strict';

const uuid = require('uuid/v4');
const fs = require('fs');
const util = require('util')

let file = `${__dirname}/data/categories.db`;

let readFilePromise = util.promisify(fs.readFile)



class Model {

  constructor() {
    this.database = [];
  }

  get(id) {
    readFilePromise(file)
    .then(data => {
      // console.log('Promise data', data.toString().trim())
      let product= JSON.parse(data.toString().trim());
      console.log('product : ', product);
      return product;
    })
    .catch(err => { throw err; });
  }

  create(record) {
    record.id = uuid();
    this.database.push(record);
    return Promise.resolve(record);
  }

  update(id, record) {
    this.database = this.database.map((item) => (item.id === id) ? record : item);
    return Promise.resolve(record);
  }

  delete(id) {
    this.database = this.database.filter((record) => record.id !== id);
    return Promise.resolve();
  }

}
 
let a=new Model;

// console.log('a.get() : ', a.get());
// a.get().then(thing=>console.log('thing : ', thing))
module.exports = Model;