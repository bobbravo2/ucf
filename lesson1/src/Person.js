/**
 * Created by robertgregor on 12/22/15.
 */

function Person(name, email) {
    this.validateName = function (name) {
        if ('undefined' == typeof(name)) {
            throw 'Name is required';
        }
        return name;
    };
    this.validateEmail = function (email) {
        //Unicode compatible email regex from: http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
        var emailRegEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (! emailRegEx.test(email)) {
            //TODO validate on server side as well! JS can be disabled.
            throw 'Invalid Email';
        }
        return email;
    };

    this.name = this.validateName(name);
    this.email = this.validateEmail(email);
}