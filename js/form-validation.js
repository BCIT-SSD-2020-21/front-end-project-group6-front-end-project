// Wait for the DOM to be ready
$(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='registration']").validate({
      // Specify validation rules
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
        inputFirstName: "required",
        inputLastName: "required",
        inputEmail: {
          required: true,
          // Specify that email should be validated
          // by the built-in "email" rule
          email: true
        },
        inputUser: "required",
        inputPassword: {
          required: true,
          minlength: 5,
        },
        inputConfirmPassword: {
            required: true,
            minlength: 5,
            equalTo: "#inputPassword",
          }
      },
      // Specify validation error messages
      messages: {
        inputFirstName: "Please enter your firstname",
        inputLastName: "Please enter your lastname",
        inputUser: "Please enter your username",
        inputPassword: {
          required: "Please provide a password",
          minlength: "Your password must be at least 5 characters long"
        },
        inputConfirmPassword: {
            required: "Please provide a password",
          minlength: "Your password must be at least 5 characters long",
          equalTo: "Your password doesn't match"
        },
        email: "Please enter a valid email address"
        
      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      submitHandler: function(form) {
        form.submit();
      }
    });
  });