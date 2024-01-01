const { query } = require("./query.controller.js");

async function getProdInfo(product){
    let p = await query(`SELECT products.id as prodid, products.quantity,products.availability,products.description, products.name as pname, products.specifications as pspecs,JSON_EXTRACT(products.conditions, '$') AS conditions,products.images as pimgs, products.orders as porders, categories.name as catname, subcategories.name as subcatname, brands.name as brandname,families.name as famname,   usedin.name as usedinname FROM (((((products inner join brands on products.brand = brands.name)inner join families on products.family = families.name)inner join categories on products.category = categories.name)inner join subcategories on  products.subcategory = subcategories.name)inner join usedin on products.usedin = usedin.name)  where products.id = '${product}'`);
    if (p && p.length) {
        const product = JSON.parse(JSON.stringify(p))[0]
        product.conditions = JSON.parse(product.conditions)
        product.pspecs = JSON.parse(product.pspecs)
        product.pimgs = JSON.parse(product.pimgs)
        return product
    }
}
module.exports.getProdInfo = getProdInfo