(function($){
	"use strict"
	
	let isFormValid = true;
	
	let messages = {
		required: 'This field is required.',
		email: 'Please enter a valid email',
	};

	function addError(elem, message){
		elem.parent().removeClass("has-error");
		elem.parent().find(".help-block").remove();
		let error = '<span class="help-block">' +message+ '</span>';
		elem.parent().addClass("has-error");
		elem.parent().append(error);
		isFormValid = false;
	};

	function onSubmitValidate(elements) {
		let allFieldsFilled = true;
		for(var i = 0; i < elements.length; i++){
			var elem = $(elements[i]);
			if(elem.attr("type") == 'email')
				continue;
			if(elem.val() == ""){
				allFieldsFilled = false;
				if(!elem.parent().hasClass("has-error")){
					addError(elem, messages.required)
					isFormValid = false;
				}
			}else{
				elem.parent().removeClass("has-error");
				elem.parent().find(".help-block").remove();
			}
		}
		isFormValid = allFieldsFilled;
	}

	function validateElem(e) {
		let isFieldValid = true;
		let elem = $(this);
		let required = elem.attr('required');
		if((required && elem.val() == "")){
			isFormValid = isFieldValid = false;;
			addError(elem, messages.required);
		} else if(elem.val() !== ""){
			let type = elem.attr("type");
			if(type == "email"){
				let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(elem.val());
				if(!valid){
					addError(elem, messages.email);
					isFieldValid = false;
				}else{
					isFieldValid = true;
				}
			}
		}

		if(isFieldValid){
			isFormValid = true;
			elem.parent().removeClass("has-error");
			elem.parent().find(".help-block").remove();
		}
	}

	$.fn.bootstrapValidator = function(obj) {
		if(!obj) return;
		let scope = obj.scope;
		let form = this;
		if(obj.class){
			let selector = "." +  obj.class;
			var elements = $(this).find(selector);
			if(obj.onBlur)
			    elements.on('blur', validateElem);
			$(this).on('submit', function(e){
				onSubmitValidate(elements);
				if(!isFormValid){
					e.preventDefault();
					if(obj.onInvalid){
						obj.onInvalid();
					}
					return false;
				}
				return true;
			});
			let self = {
				reValidate: function () {
					onSubmitValidate(elements)
				},
				isValid: function() {
					onSubmitValidate(elements);
					return isFormValid;
				}
			};
			return self; 
		}
	}
})(jQuery);