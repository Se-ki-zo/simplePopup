// main const
const popupSection = document.querySelector('.popup-section');

// signup popup
const popupSignup = popupSection.querySelector('.popup-section__signup'); // Signup popup
const popupSignupBtnClose = popupSignup.querySelector('.popup-section__close');
const popupSignupBtnLogin = popupSignup.querySelector('.popup-section__button');

// signup popup forms
const formSignup = document.forms.signup;
const formSignupName = formSignup.elements.name;
const formSignupNumber = formSignup.elements.tel;
const formSignupEmail = formSignup.elements.email;

export {
    // main const
    popupSection,
    // signup popup
    popupSignupBtnClose,
    popupSignupBtnLogin,
    // signup popup forms
    formSignup,
    formSignupName,
    formSignupNumber,
    formSignupEmail,
};