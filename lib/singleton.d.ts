declare class MySingleton {
    static getInstance(): MySingleton;
    private static instance;
    private constructor();
    greet(): string;
}
declare const singleton11: MySingleton;
declare const singleton2: MySingleton;
