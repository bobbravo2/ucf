/**
 * Created by robertgregor on 12/22/15.
 */
TestCase("PersonTest", {
	"test valid constructor":   function () {
		var name  = 'Bob',
            email = 'over40email@aol.com',
            Bob = new Person(name, email);
		assertEquals('Error setting name', name, Bob.name);
		assertEquals('Error setting email', email, Bob.email);
	},
	"test invalid email":       function () {
		var name  = 'Bob2',
				email = 'foobar';
		assertException('Invalid email did not throw exception', function () {
			new Person(name, email)
		});
	},
	"test invalid constructor": function () {
		assertException('Name is required, should throw exception.', function () {
			new Person();
		});
	}
});