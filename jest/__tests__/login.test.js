import { login } from "../../src/js/api/auth/login.js";
import { load } from "../../src/js/storage/index.js";
import * as mocks from "../../src/js/mocks/index.js";

jest.mock("../../src/js/storage", () => ({
  save: jest.fn(),
  load: jest.fn(),
}));

describe("login function", () => {
  beforeEach(() => {
    global.localStorage = mocks.localStorageMock();
    jest.clearAllMocks();
  });

  afterEach(() => {
    localStorage.clear();
    fetch.mockClear();
  });

  it("stores a token when provided with valid credentials", async () => {
    global.fetch = mocks.createMockFetch(mocks.userData, 200);

    await login(mocks.userData.email, mocks.userData.password);

    expect(load("token")).toBe(mocks.userData.accessToken);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
