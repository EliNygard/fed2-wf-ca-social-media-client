export const createMockFetch = (response = {}, status = 200) => {
  return jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: status < 400,
      status,
      json: () => Promise.resolve(response),
    }),
  );
};
