const Categories = require('../categories/categories.js');

const Products = require('../products/products.js');

describe('Categories Model', () => {

  let categories;

  beforeEach(() => {
    categories = new Categories();
  });

  it('can post() a new category', () => {
    let obj = { name: 'Test Category' };
    return categories.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      })
      .catch(e => console.error('ERR', e));
  });

  it('can get() a category', () => {
    let obj = { name: 'Test Category' };
    return categories.create(obj)
      .then(record => {
        return categories.get(record._id)
          .then(category => {
            Object.keys(obj).forEach(key => {
              expect(category[0][key]).toEqual(obj[key]);
            });
          });
      });
  });


  it('can update() a new category', () => {

    let obj = { name: 'Test Category' };
    let obj2 = { name: 'Test Category updated' };
    categories.create(obj)
      .then(record => {
        let id = record.id;
        return id;
      }).then((id) => {
        return categories.update(id, obj2);
      }).then((result) => {
        expect(result.name).toEqual(obj2.name);

      })
      .catch(e => console.error('ERR', e));
  });

  it('can delete() a category', () => {

    let obj = { name: 'Test Category' };

    categories.create(obj)
      .then(record => {
        let id = record.id;
        return id;
      }).then((id) => {
        return categories.delete(id);
      }).then((result) => {
        expect(result).toBeUndefined();

      })
      .catch(e => console.error('ERR', e));
  });

});



describe('Products Model', () => {

  let products;

  beforeEach(() => {
    products = new Products();
  });

  it('can post() a new Product', () => {
    let obj = {
      // category_id:'555',
      price: '55588',
      weight: '8',
      quantity_in_stock: '5686',
    };
    return products.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      })
      .catch(e => console.error('ERR', e));
  });

  // it('can get() a product', () => {
  //   let obj = {
  //     // category_id:'555',
  //     price: '55588',
  //     weight: '8',
  //     quantity_in_stock: '5686'
  //   }
  //   return products.create(obj)
  //     .then(record => {
  //       return products.get(record._id)
  //         .then(product => {
  //           console.log('product : ', product);
  //           // Object.keys(obj).forEach(key => {
  //           //   expect(product[0][key]).toEqual(obj[key]);
  //           // });
  //         });
  //     });
  // });

});