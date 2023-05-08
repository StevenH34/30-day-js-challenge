/*
https://leetcode.com/problems/create-hello-world-function/description/?utm_campaign=PostD1&utm_medium=Post&utm_source=Post&gio_link_id=QPDw0kJR

2667. Create Hello World Function
Write a function createHelloWorld. It should return a new function that always returns "Hello World".
*/

/**
 * @return {Function}
 */
const createHelloWorld = function() {
    return function(...args) {
        return "Hello World"
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */

