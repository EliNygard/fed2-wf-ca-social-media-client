// before check local storage if token exist/get token from local storage
// The logout function clears the token from browser storage

import { logout } from "../../src/js/api/auth/logout";
import * as mocks from "../mocks/index.js";

describe("logout function", () => {
    beforeEach(() => {
        global.localStorage = mocks.localStorageMock();
    });

    afterEach(() => {
        // clear mocks?
        localStorage.clear();
    });

    it("Clears the token from browser storage", () => {
        localStorage.setItem("token", mocks.mockUserProfile.accessToken);
        console.log("Before logout, token:", localStorage.getItem("token"));

        logout();
        console.log("After logout, token:", localStorage.getItem("token"));

        expect(localStorage.getItem("token")).toBe(null);
    });
});
