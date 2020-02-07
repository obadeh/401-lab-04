

const DataModel = require('../file-data-model.js');

class Products extends DataModel {
  constructor() {
    super();
    this.schema = {
      category_id: { required: true },
      price:{required: true },
      weight: { },
      quantity_in_stock:{required: true},

    };
  }
}



module.exports = Products;


