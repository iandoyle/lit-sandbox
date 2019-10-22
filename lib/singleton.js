"use strict";
class MySingleton {
    constructor() { }
    static getInstance() {
        if (!MySingleton.instance) {
            MySingleton.instance = new MySingleton();
        }
        return MySingleton.instance;
    }
    greet() {
        return "Hello from Singleton!";
    }
}
const singleton11 = MySingleton.getInstance();
const singleton2 = MySingleton.getInstance();
// tslint:disable-next-line: no-console
console.log(singleton11 === singleton2);
//# sourceMappingURL=singleton.js.map