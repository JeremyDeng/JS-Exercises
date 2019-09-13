// 6. In the object defined below, set each property to its described value using the sample
// response payload provided on the next page:

//Sample Response Payload to Use for Question #6:
var response = {
"cartItems": [{
    "id": "ci186012014536",
    "qty": 3,
    "itemInfo": {
        "model": "UN55NU6950FXZA",
        "itemNo": "980142010",
        "minDeliveryDate": 1561938400000,
        "name": "UN55NU6950FXZA - SAMSUNG 55\" Class 4K (2160p) Ultra HD Smart LED TV",
        "skuId": "sku23018986",
        "itemPageUrl": "/sams/samsung-55in-4k-2160p-uhd-smart-led-tv-6000-series/prod22464496.ip"
    },
    "inventoryInfo": {
        "minQtyLimit": -1,
        "lowStockLevel": 5,
        "maxQtyLimit": -1,
        "itemLowInStockFlag": false,
        "stockLevel": "inStock"
    },
    "priceInfo": {
        "mapPriceInCents": 0,
        "listPriceInCents": 44900,
        "shippingAmountInCents": 0,
        "shippingAmount": 0,
        "originalPrice": 0,
        "itemTotalInCents": 44900,
        "totalMapPrice": 0,
        "originalPriceInCents": 0,
        "salesTax": 3500
    },
"props": {
    "selectedChannel": "ONLINE",
    "shippingChargeIncluded": false,
    "shippingDiscountEligible": true,
    "freeShipEligible": false,
    "specialItem": false,
    "weightedItem": false,
    "onlineChannelMinLimitQty": -1,
    }
}]
};

var newDate = new Date(0);
newDate.setUTCSeconds(response.cartItems[0].itemInfo.minDeliveryDate / 1000)

products = {
    "prod": response.cartItems[0].itemInfo.itemPageUrl.split("/").pop(), // Extract them item's productId from "itemPageUrl" (the substring beginning with "prod2246...")
    "quantity": response.cartItems[0].qty.toString(), // The value of "qty", converted to a string
    "shipdays": newDate, // The value of "minDeliveryDate", converted from an epoch date to a whole number
    "shipvalue": response.cartItems[0].props.shippingDiscountEligible === true ? "free-plus" : "", // If the item is "shippingDiscountEligible", set to "free-plus"
    "subtotal": `$ ${(response.cartItems[0].qty * response.cartItems[0].priceInfo.listPriceInCents / 100).toFixed(2)}`, // The product of "qty" and "listPriceInCents", converted to a readable dollar amount
    "uprice": `$ ${(response.cartItems[0].priceInfo.listPriceInCents / 100).toFixed(2)}` // The value of "listPriceInCents", converted to a readable dollar amount
    };

console.log(products.prod);
console.log(typeof(products.quantity) + products.quantity);
console.log(products.shipdays);
console.log(products.shipvalue);
console.log(products.subtotal);
console.log(products.uprice);