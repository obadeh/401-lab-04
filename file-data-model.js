'use strict';

const uuid = require('uuid/v4');
const fs = require('fs');
const util = require('util')

let file = `${__dirname}/data/categories.db`;

let readFilePromise = util.promisify(fs.readFile)
readFilePromise(file)
  .then(data => console.log('Promise', data.toString().trim()))
  .catch(err => { throw err; });

//   reader.readerWithPromise(file)
//   .then(data => console.log('Promise from module', data))
//   .catch(err => { throw err; });

class Model {

  constructor() {
    this.database = [];
  }

  get(id) {
    let response = id ? this.database.filter((record) => record.id === id) : this.database;
    return Promise.resolve(response);
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

module.exports = Model;