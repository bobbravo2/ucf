/**
 * Created by robertgregor on 12/22/15.
 */
//Case - We have a 3rd party Javascript Library: Person.js
//We need to extend the prototype here to add shopping functionality
//Add item to 'basket'
//Delete item from basket
//View items -> Return an array of JSON items

function ShopPerson(name, email) {
    Person.call(this, name, email);
}
ShopPerson.prototype.items = [];
ShopPerson.prototype.addItem = function(item) {
    this.items.push(item);
};
ShopPerson.prototype.getItems = function() {
    return this.items;
};
//Item - a new JavaScript prototype to create, with properties:
// - Price
// - Title
function ShopItem(title, price) {
    this.title = title;
    this.price = price;
}