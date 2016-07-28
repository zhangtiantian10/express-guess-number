'use strict';

class JudeInput {
    static jude(input) {
        if(input.trim().length != 4) {
            return false;
        }

        return input.split('').every((digit, index, array) => {
            return array.lastIndexOf(digit) === index;
        });
    }
}

module.exports = JudeInput;