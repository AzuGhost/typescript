"use strict";
(() => {
    let userId;
    userId = 12;
    userId = 'Juan';
    function greeting(myText) {
        if (typeof myText === 'string') {
            console.log(`Bienvenido ${myText.toLowerCase()}`);
        }
        else {
            console.log(`su ID es: ${myText.toFixed(2)}`);
        }
    }
    greeting('Juan');
    greeting(12.1212121212);
})();
