//Use the ShopStyle Collective API to get a list of all categories of products
//for each category of product, use API again to get a list of all products and their details under that category
//these details will include pictures

var categories = ['long+evening+dresses',
'cocktail+dresses',
'women+high+heels',
'white+scarf',
'women+sunglasses',
'men+sunglasses',
'men+black+loafers',
'women+pink+running+shoes',
'men+navy+blazer',
'women+black+legging',
'women+black+crossbody+bag',
'men+backpack',
'men+trenchcoat',
'men+wool+scarf',
'women+beanie',
'women+leather+jackets',
'men+leather+jackets',
'women+v-neck+sweater',
'men+v-neck+sweater',
'men+straight+jeans',
'women+skinny+jeans',
'women+short+boots',
'men+black+leather+wallet',
'men+polo+shirt',
'men+plaid+shirt',
'women+tunic',
'women+running+shorts',
'women+running+tops',
'men+black+belt',
'men+brown+belt',
'men+formal+ties',
'men+cufflinks'];


var request = require('request');

// //get all categories
// //api url: http://api.shopstyle.com/api/v2/categories?pid=uid4025-36835155-23
// var categoryURL = 'http://api.shopstyle.com/api/v2/categories?pid=uid4025-36835155-23';
// var getCategories = function(url, callback) {
//   request.get(url, function(err, response, body) {
//     var data = null;
//     if (err) {
//     	callback(err, null);
//     } else {
//       data = JSON.parse(body);
//       callback(null, data);
//     }
//   });
// };

// getCategories(categoryURL, function(err, data) {
  
// }).then()

// var productURL = 'http://api.shopstyle.com/api/v2/products/?pid=uid4025-36835155-23&filters=Retailer&fts=' + blah blah blah;
// var getProducts = function(url, callback) {
//   request.get(url, function(err, response, body) {
//     var data = null;
//     if (err) {
//     	callback(err, null);
//     } else {
//       data = JSON.parse(body);
//       callback(null, data);
//     }
//   });
// };


var countURL = 'http://api.shopstyle.com/api/v2/products/histogram?pid=uid4025-36835155-23&filters=Retailer&fts=red+dress';
var getTotalNum = function(url, callback) {
  request.get(url, function(err, response, body) {
    var data = null;
    if (err) {
    	callback(err, null);
    } else {
      data = JSON.parse(body);
      // console.log(data, 'DATA');
      callback(null, data);
    }
  });
};

getTotalNum(countURL, function(err, response) {
  if (err) console.log(err);
  var total = 0;
  response.retailerHistogram.forEach(function(item) {
  	total += item.count;
  });
  console.log(total);
});


// //call getProducts for each category
// categories.forEach()

//save data 



