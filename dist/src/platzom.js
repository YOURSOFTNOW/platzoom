'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = platzom;
//Import sin default
////Import {platzom} from platzom
//Con default
////Import platzom from platzom -> No requerimos llaves
function platzom(word) {
    var traslation = word;
    if (word.toLowerCase().endsWith('ar')) {
        traslation = word.slice(0, -2);
    }

    if (word.toLowerCase().startsWith('z')) {
        traslation += 'pe';
    }

    var length = traslation.length;
    if (length >= 10) {
        var half = Math.round(length / 2);
        traslation = traslation.slice(0, half) + '-' + traslation.slice(half);
    }

    var reverse = function reverse() {
        return word.split('').reverse().join('');
    };
    var minMay = function minMay() {
        traslation = '';
        for (var i = 0; i < word.length; i++) {
            var char = word.charAt(i);
            traslation += i % 2 == 0 ? char.toUpperCase() : char.toLowerCase();
        }
        return traslation;
    };
    if (word.toLowerCase() == reverse().toLowerCase()) {
        return minMay();
    }
    return traslation;
}