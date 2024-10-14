import { login } from "../../src/js/api/auth/login.js";
import { save } from "../../src/js/storage/index.js";

// Mock global fetch and apiPath
jest.mock("../../src/js/api/constants.js", () => ({
    apiPath: "https://mockapi.example.com",
}));

jest.mock("../../src/js/storage/index.js", () => ({
    save: jest.fn(),
}));

describe("login function", () => {
    const localStorageMock = (() => {
        let store = {};
        return {
            getItem: (key) => store[key] || null,
            setItem: (key, value) => {
                store[key] = value.toString();
            },
            clear: () => {
                store = {};
            },
        };
    })();

    beforeAll(() => {
        Object.defineProperty(global, "localStorage", {
            value: localStorageMock,
        });
    });

    beforeEach(() => {
        localStorage.clear();
        jest.clearAllMocks();
    });

    it("Stores a token and profile when provided with valid credentials", async () => {
        const mockUserData = {
            email: "test@example.com",
            password: "password123",
        };
        const mockResponseData = {
            accessToken: "testToken",
            name: "Test User",
            email: "test@example.com",
        };

        // Mock the fetch response
        global.fetch = jest.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockResponseData),
            }),
        );

        // Call the login function
        const profile = await login(mockUserData.email, mockUserData.password);

        // Assert that fetch was called with the correct URL and options
        expect(fetch).toHaveBeenCalledWith(
            "https://mockapi.example.com/social/auth/login",
            expect.objectContaining({
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(mockUserData),
            }),
        );

        // Assert that the token and profile were saved correctly
        expect(save).toHaveBeenCalledWith(
            "token",
            mockResponseData.accessToken,
        );
        expect(save).toHaveBeenCalledWith("profile", {
            name: "Test User",
            email: "test@example.com",
        });

        // Check that the profile returned from the login function is correct
        expect(profile).toEqual({
            name: "Test User",
            email: "test@example.com",
        });
    });
});
