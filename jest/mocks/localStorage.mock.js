export const localStorageMock = () => {
    let storage = {};

    return {
        getItem: jest.fn((key) => storage[key] || null),
        setItem: jest.fn((key, value) => {
            (storage[key] = value.toString()), console.log("key", key);
            console.log("value", value);
        }),
        removeItem: jest.fn((key) => {
            delete storage[key];
        }),
        clear: jest.fn(() => {
            storage = {};
        }),
    };
};
