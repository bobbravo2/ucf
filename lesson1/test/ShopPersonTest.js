/**
 * Created by robertgregor on 12/22/15.
 */
TestCase("ShopPersonTest", {
    setUp: function() {
        this.name = 'Bob';
        this.email = 'over40email@aol.com';
        this.ShopPerson = new ShopPerson(this.name, this.email);
    },
    "test valid constructor": function() {
        //A sanity test to make sure we've extended the right prototype
        assertEquals('Error setting name', this.name, this.ShopPerson.name);
        assertEquals('Error setting email', this.email, this.ShopPerson.email);
    },
    "test add item": function() {
        var item = new ShopItem('Broom', 9.99);
        this.ShopPerson.addItem(item);
        assertArray('Items should be array', this.ShopPerson.getItems());
        assertEquals('No items added to cart', 1, this.ShopPerson.getItems().length);
        assertEquals('Item is not identical', item, this.ShopPerson.getItems()[0]);
        var item2 = new ShopItem('Door', 99);
        this.ShopPerson.addItem(item);
        assertEquals('2nd item not added to cart', 2, this.ShopPerson.getItems().length);
        assertEquals('Item is not identical', item, this.ShopPerson.getItems()[1]);
    }, "test delete items (empty cart)": function() {
        var initialCount = this.ShopPerson.getItems().length;
        this.ShopPerson.emptyCart();
        assertNotEquals('Error emptying cart', initialCount, this.ShopPerson.getItems().length);
    }
});
TestCase("ShopPersonItemTest", {
    "test item has price & title": function() {
        var title = 'candlestick',
            price = '19.99',
            item = new ShopItem(title, price);
        assertEquals('Invalid item title', title, item.title);
        assertEquals('Invalid price', price, item.price);
    }
});