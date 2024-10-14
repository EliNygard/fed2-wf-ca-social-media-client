import { login } from "../../src/js/api/auth/login.js";
import { save } from "../../src/js/storage/";

jest.mock("../../storage", () => ({
  save: jest.fn(),
}));

jest.mock("../headers.js", () => ({
  headers: jest.fn(),
}));

const email = "test@stud.noroff.no";
const password = "testPasswordForJest";
const accessToken = "mockAccessTokenForTesting";

const mockUserProfile = {
  email: email,
  password: password,
  accessToken: accessToken,
};

const mockLoginFetchSuccess = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue(mockUserProfile),
});

global.fetch = mockLoginFetchSuccess;

describe("login", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("stores a token when provided with valid credentials", async () => {
    console.log();

    await login(email, password);

    expect(save).toHaveBeenCalledWith("token", accessToken);
    expect(save).toHaveBeenCalledWith("profile", mockUserProfile);
  });
});
