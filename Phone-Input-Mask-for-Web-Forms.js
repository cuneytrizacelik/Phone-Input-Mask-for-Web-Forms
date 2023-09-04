/**
 * Phone Input Mask for Web Forms
 * 
 * To use this script:
 * 1. Include the script on your webpage.
 * 2. Update the `phoneInputSelectors` array to include the IDs or classes of the input fields you want to apply the mask to.
 */

var phoneInputSelectors = ['#Mobile', '#telefon', '#billing_phone', 'input[type="tel"]']; // Update this array as needed
var phoneInputs = document.querySelectorAll(phoneInputSelectors.join(','));

phoneInputs.forEach(function(phoneInput) {
    phoneInput.addEventListener('keydown', function(event) {
        if (!(event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace' || event.key == 'Tab')) {
            event.preventDefault();
        }
        
        var mask = '0111 111 11 11';

        if (/[0-9+ -()]/.test(event.key)) {
            var currentString = this.value;
            var currentLength = currentString.length;
            if (/[0-9]/.test(event.key)) {
                if (mask[currentLength] == '1') {
                    this.value = currentString + event.key;
                } else {
                    for (var i = currentLength; i < mask.length; i++) {
                        if (mask[i] == '1') {
                            this.value = currentString + event.key;
                            break;
                        }
                        currentString += mask[i];
                    }
                }
            }
        }
    });
});
