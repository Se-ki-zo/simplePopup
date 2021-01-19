  import {
    // signup popup forms
    formSignup,
    formSignupName,
    formSignupNumber,
    formSignupEmail,
  } from './constants/constants.js';

  // importing classes
  import Form from './formValidator/FormValidator.js';

  // call classes
  const form = new Form();
  
  // popup signup VALIDATION
  formSignupEmail.addEventListener('input', (event) => {
    form.checkPopupInput(event.target);
    form.checkFormSignup(formSignup, formSignupName, formSignupNumber, formSignupEmail);
  });
  formSignupNumber.addEventListener('input', (event) => {
    form.checkPopupInput(event.target);
    form.checkFormSignup(formSignup, formSignupName, formSignupNumber, formSignupEmail);
  });
  formSignupName.addEventListener('input', (event) => {
    form.checkPopupInput(event.target);
    form.checkFormSignup(formSignup, formSignupName, formSignupNumber, formSignupEmail);
  });