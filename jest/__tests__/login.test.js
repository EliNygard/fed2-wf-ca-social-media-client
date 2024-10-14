import { login } from '../../src/js/api/auth/login.js';
import { load } from '../../src/js/storage/';
import * as mocks from '../mocks/index.js';

jest.mock('../../src/js/storage', () => ({
  save: jest.fn(),
  load: jest.fn(),
}));

jest.mock('../../src/js/api/headers.js', () => ({
  headers: jest.fn(),
}));

const mockLoginFetchSuccess = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue(mocks.userData),
});

describe('login function', () => {
  beforeEach(() => {
    global.localStorage = mocks.localStorageMock();
    global.fetch = mockLoginFetchSuccess;
    jest.clearAllMocks();
  });

  afterEach(() => {
    localStorage.clear();
    fetch.mockClear();
  });

  it('stores a token when provided with valid credentials', async () => {
    await login(mocks.userData.email, mocks.userData.password);
    expect(load('token')).toBe(mocks.userData.accessToken);
  });
});
