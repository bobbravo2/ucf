/**
 * Created by robertgregor on 12/22/15.
 */
TestCase("PersonTest", {
	"test valid constructor" : function() {
		var name = 'Bob',
				email = 'over40email@aol.com';
		var Bob = new Person(name, email);
		assertEquals('Error setting name', name, Bob.name);
		assertEquals('Error setting email', email, Bob.email);
	}
});