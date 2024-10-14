import { login } from '../../src/js/api/auth/login.js';
import { save } from '../../src/js/storage/';
import * as mocks from '../mocks/index.js';

jest.mock('../../src/js/storage', () => ({
  save: jest.fn(),
}));

jest.mock('../../src/js/api/headers.js', () => ({
  headers: jest.fn(),
}));

const email = 'test@stud.noroff.no';
const password = 'testPasswordForJest';
const accessToken = 'mockAccessTokenForTesting';

const mockUserProfile = {
  email: email,
  password: password,
  accessToken: accessToken,
};

const mockLoginFetchSuccess = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue(mockUserProfile),
});

describe('login', () => {
  beforeEach(() => {
    global.localStorage = mocks.localStorageMock();
    global.fetch = mockLoginFetchSuccess;
    jest.clearAllMocks();
  });

  afterEach(() => {
    // localStorage.clear();
    fetch.mockClear();
  });

  it('stores a token when provided with valid credentials', async () => {
    console.log(mockUserProfile);

    await login(email, password);
    console.log('After login, token: ', accessToken);
    console.log(mockUserProfile);

    expect(save).toHaveBeenCalledWith('token', accessToken);
    expect(save).toHaveBeenCalledWith('profile', mockUserProfile);
  });
});

// const user = () => ({
//   ...mocks.mockUserProfile,
// });

// // create a mock file:
// const mockLoginFetchSuccess = jest.fn().mockResolvedValue({
//   ok: true,
//   json: jest.fn().mockResolvedValue(user),
// });

// describe("login function", () => {
//   beforeEach(() => {
//     global.fetch = mockLoginFetchSuccess;
//     global.localStorage = mocks.localStorageMock();
//     jest.clearAllMocks();
//     // add global.fetch here with imported mock fetch
//   });

//   afterEach(() => {
//     localStorage.clear();
//     fetch.mockClear();
//   });

//   it("Stores a token when provided with valid credentials", async () => {
//     console.log("Before login, token:", localStorage.getItem("token"));

//     await login(user.email, user.password);

//     console.log("After login, token:", localStorage.getItem("token"));
//     console.log(user.accessToken);

//     // expect(save).toHaveBeenCalledWith("token", user.accessToken);
//     expect(load("token")).toBe(mocks.accessToken);
//   });
// });

//console.log("Before login, token:", localStorage.getItem("token")); // this must be correct because user is not logged in yet
//console.log(user()); // mock user with accessToken: tokenTest
//console.log(profile);

//console.log("After login, token:", localStorage.getItem("token")); // should this be null because token is deleted in the login function?
