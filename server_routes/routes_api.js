// breadcrum    // OK
// loading ...
// errors
// doc          // OK
// server       // NO

const express = require('express'),
      router  = express.Router(),
      request = require('request')
      app     = express();

function getImageIdToProducts(_products) {
  var products = _products,
      images_id = [];

  products.forEach(function(_product) {
    images_id.push(getImageIdToProduct(_product));
  });

  return images_id;
}
function getImageIdToProduct(_product) {
  var image_id = _product.thumbnail;
      image_id = image_id.substr(0, (image_id.length - 6))
      image_id = image_id.split("/").pop();

  return image_id;
}
function mergeData(_products, _images, _breadcrumb) {

  _products.forEach(function(_product) {
    var image_id = getImageIdToProduct(_product),
        image_url;

    _images.forEach(function(_image) {
      if (_image.id === image_id) {
        _product["fullSizeImage"] = _image.variations[0].url;
      }
    });
  });

  return { "products": _products, "breadcrumb": _breadcrumb };
};
function sortBySize(_a, _b) {
	return _a.size > _b.size;
}
function getBreadcrumb(_filters) {
  var breadcrumb = [];

  _filters.forEach(function(_filter) {

    if (_filter.id === "category") {
      _filter.values[0].path_from_root.forEach(function(_category) {
        breadcrumb.push(_category.name);
      });
    }
  });

  if (breadcrumb.length > 0) {
    return breadcrumb.join(" > ");
  } else {
    return null;
  }
}

router.get('/items/:item_id', (req, res) => {
  var param = (req.params.item_id)?(req.params.item_id):(''),
      product, picture, breadcrumb;

  request.get('https://api.mercadolibre.com/items/' + param, (_err, _res, _data) => {
    picture  = JSON.parse(_data).pictures;
    picture  = picture[0];

    product = JSON.parse(_data);
    product["fullSizeImage"] = picture.url;

    request.get('https://api.mercadolibre.com/items/' + param + '/description', (_err, _res, _data) => {
      var description = JSON.parse(_data);

      if (description.plain_text == "") {
        product["textDescription"] = description.text;
      } else {
        product["textDescription"] = description.plain_text;
      }

      request.get('https://api.mercadolibre.com/categories/' + product.category_id, function(_err, _res, _data) {
        breadcrumb = JSON.parse(_data);
        breadcrumb = breadcrumb.path_from_root.map(function(_category) {
          return _category.name;
        }).join(" > ");

        return res.json({ "product": product, "breadcrumb": breadcrumb});
      });
    });
  });
});

router.get('/items', (req, res) => {
  var param = (req.query.q)?(req.query.q):(''),
      products, pictures, breadcrumb;

  request.get('https://api.mercadolibre.com/sites/MLA/search?limit=4&q=' + param, (_err, _res, _data) => {
    var data = JSON.parse(_data);
    products = data.results;
    pictures = getImageIdToProducts(products);
    breadcrumb = getBreadcrumb(data.filters);

    request.get('https://api.mercadolibre.com/pictures?ids=' + pictures.join(), (_err, _res, _data) => {
      pictures = JSON.parse(_data);

      products = mergeData(products, pictures, breadcrumb);

      return res.json(products);
    });
  });
});

module.exports = router;
