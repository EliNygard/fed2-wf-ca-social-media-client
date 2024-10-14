const fetchMock = jest.fn();

export const createMockFetch = (response = {}, status = 200) => {
  fetchMock.mockImplementation(() => {
    Promise.resolve({
      ok: status < 400,
      status,
      json: () => Promise.resolve(response),
    });
  });
  return fetchMock;
};
