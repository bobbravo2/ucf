JavaScript Prototypes
=========

You are tasked with creating a JavaScript component to manage a user's identity, as well as a shopping cart.

## Process Overview
* Write Failing Tests:
  1. Use JSTestDriver to automatically run unit tests
  1. validate assertions
  1. debug & inspect code
* Fix the failures by implementing code
* repeat until all features are complete
* *bonus* test edge cases

## Section 1 - Define the Person
* Start with a basic user, in our case, call it a "Person"
* This person should have a name and email address
* The name should not be blank, and the email should be a valid email address.
  * *Bonus* Refactor the Person to encapsulate the validation logic for both email and name
    
## Section 2 - Extend the Person into a ShopPerson
* Extend the Person into a new Object, a ShopPerson
* Perfect example of extending a third party library, useful for keeping code lean and DRY.
* ShopPerson Attributes:
  * Items - an array of ShopItems
* ShopPerson Methods:
  * AddItem - Add an item to the cart
  * GetItems - Gets an array of items in the cart for display, processing server side, etc. 
  * EmptyCart - Delete all items from the cart
  * DeleteItem - Remove an item from the cart
* *Bonus* Validate number of items added / removed from cart with tests