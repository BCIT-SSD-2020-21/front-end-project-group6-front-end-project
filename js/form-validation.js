<<<<<<< HEAD
// Create function to validate registration form.
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
=======
// Wait for the DOM to be ready
$(document).ready(function() 
{
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
>>>>>>> main
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
<<<<<<< HEAD
    });
  });


  // Create Function to validate sign-in form

$(function() {
  $("form[name='login']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      inputUser: "required",
      inputPassword: "required",
      },
      inputUser: "required",
      inputPassword: {
        required: true,
        minlength: 5,
      },
    },
    // Specify validation error messages
    messages: {
      inputUser: "Please enter your username",
      inputPassword: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long"
      },
=======
      email: "Please enter a valid email address"
      
>>>>>>> main
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
<<<<<<< HEAD
});

// Create function to validation check out form

=======
}); 
>>>>>>> main
