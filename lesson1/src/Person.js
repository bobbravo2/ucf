/**
 * Created by robertgregor on 12/22/15.
 */

function Person(name, email) {
	this.name = name;
	//Unicode compatible email regex from: http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
	//TODO validate on server side as well! JS can be disabled.
	var emailRegEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	if (! emailRegEx.test(email)) {
		throw 'Invalid Email';
	}
	this.email = email;
}





