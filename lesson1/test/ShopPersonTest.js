/**
 * Created by robertgregor on 12/22/15.
 */
TestCase("ShopPersonTest", {
    "test valid constructor": function() {
        //A sanity test to make sure we've extended the right prototype
        var name = 'Bob', email = 'over40email@aol.com', Bob = new ShopPerson(name, email);
        assertEquals('Error setting name', name, Bob.name);
        assertEquals('Error setting email', email, Bob.email);
    }
});