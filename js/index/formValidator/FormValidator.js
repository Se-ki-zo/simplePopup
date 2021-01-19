import {
    // signup popup
    popupSignupBtnLogin,
} from '../constants/constants.js';

export default class FormValidator {
    constructor(elem) {
        this.elem = elem; // err
    }

    checkFormSignup(formSignup, formSignupName, formSignupNumber, formSignupEmail) { // popup signup
        if (formSignupName.checkValidity() && formSignupNumber.checkValidity() && formSignupEmail.checkValidity() && formSignupName.value !== '' && formSignupNumber.value !== '' && formSignupEmail.value !== '') {
            popupSignupBtnLogin.removeAttribute('disabled', '');
            popupSignupBtnLogin.classList.add('button_active');
            return true;
        }
        popupSignupBtnLogin.setAttribute('disabled', '');
        popupSignupBtnLogin.classList.remove('button_active');
        return false;
    }


    checkPopupInput(el) { // [any]inputs validation
        const element = el;

        if (!element.checkValidity() && element.value) {
            if (element.type === 'text') {
                element.nextElementSibling.textContent = 'Имя должно содержать от 2 до 10 символов';
            } else if (element.type === 'tel') {
                element.nextElementSibling.textContent = 'Невалидный номер телефона';
            } else if (element.type === 'email') {
                element.nextElementSibling.textContent = 'Невалидный Email';
            } else {
                console.log('Something going wrong with validator, please ask administrator for help'); // test
            }
        } else {
            this.resetErrors(element);
        }
    }

    resetErrors(el) { // reseting [any]errors
        const element = el;
        if (element.type === 'text') {
          element.nextElementSibling.textContent = '';
        } else if (element.type === 'tel') {
          element.nextElementSibling.textContent = '';
        } else if (element.type === 'email') {
          element.nextElementSibling.textContent = '';
        } else {
          console.log('validation err'); // test
        }
        return true;
      }
}