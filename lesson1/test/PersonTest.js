/**
 * Created by robertgregor on 12/22/15.
 */
TestCase("PersonTest", {
	"test construct" : function() {
		var name = 'Bob',
				email = 'over40email@aol.com';
		var Bob = new Person(name, email);
		assertEquals('Error setting name', name, Bob.name);
	}
});