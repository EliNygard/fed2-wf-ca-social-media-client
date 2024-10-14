import { logout } from '../../src/js/api/auth/logout';
import * as mocks from '../mocks/index.js';

describe('logout function', () => {
  beforeEach(() => {
    global.localStorage = mocks.localStorageMock();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('Clears the token from browser storage', () => {
    localStorage.setItem('token', mocks.userData.accessToken);
    console.log('Before logout, token:', localStorage.getItem('token'));

    logout();
    console.log('After logout, token:', localStorage.getItem('token'));

    expect(localStorage.getItem('token')).toBe(null);
  });
});
