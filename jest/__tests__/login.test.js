import { login } from "../../src/js/api/auth/login.js";
import { save } from "../../src/js/storage/index.js";
import * as mocks from "../mocks/index.js";

jest.mock("../../src/js/storage/index.js", () => ({
    save: jest.fn(),
    clear: jest.fn(),
}));

jest.mock("../../src/js/api/headers.js", () => ({
    headers: jest.fn(),
}));

const user = () => ({
    ...mocks.mockUserProfile,
});

// create a mock:
const mockLoginFetchSuccess = jest.fn().mockResolvedValue({
    ok: true,
    json: jest.fn().mockResolvedValue(user),
});

// move to before each?

describe("login function", () => {
    beforeEach(() => {
        global.fetch = mockLoginFetchSuccess;
        global.localStorage = mocks.localStorageMock();
        jest.clearAllMocks();
        // add global.fetch here with imported mock fetch
    });

    afterEach(() => {
        localStorage.clear();
        // global.fetch.mockClear()
    });

    it("Stores a token when provided with valid credentials", async () => {
        await login(user.email, user.password);

        expect(save).toHaveBeenCalledWith("token", user.accessToken);
        // expect(save("token")).toBe(mockUserProfile.accessToken)
    });
});
