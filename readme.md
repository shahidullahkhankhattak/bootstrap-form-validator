# Form validator for jQuery / Bootstrap

[![N|Solid](https://shahidullahkhan.com/images/powered.png)](https://shahidullahkhan.com)

[![Build Status](https://shahidullahkhan.com/images/passing.svg)](https://shahidullahkhan.com)

##### This is an easy to use jQuery form validator package that helps validating multiple inputs / form control with a one liner.

  - Validates multiple form inputs through a single selector
  - Validates multiple form inputs seperately
  - Has capacity to set custom validation messages.
  - has onSuccess & onInvalid callbacks

## Installation

This package requires [jQuery](https://jquery.com/) to work.

Either include script through CDN:
```html
<script src="https://cdn.shahidullahkhan.com/bootstrap-form-validator.js" type="text/javascript"></script>
```

Or download it directly from here.
[https://cdn.shahidullahkhan.com/bootstrap-form-validator.js](https://cdn.shahidullahkhan.com/bootstrap-form-validator.js)

## Usage
Initializing validator object & provider class to the validator
- form validator will automatically run on form submit
- also form validator will run on element blur if set true

```javascript
var formValidator = $("form.validateForm").bootstrapValidator({
				class: "validate",
				onBlur: true,
				onInvalid: function(){
				    // do your stuff
				}
			});	
```

Now you can revalidate any time when you want validator to run validations again.

```javascript
formValidator.reValidate();
```

You can check anytime if validator has passed using the following 
```javascript
let isValid = formValidator.isValid();
if(isvalid){
    // do your stuff here
}
```
