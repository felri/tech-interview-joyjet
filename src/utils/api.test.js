import mockApiJson from 'src/utils/mockApiJson'
import { getItems } from 'src/utils/api'

function mockFetch(data) {
  return jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => data
    })
  );
}

test('fetch items from api', async () => {
  fetch = mockFetch(mockApiJson); // or window.fetch

  const result = await getItems();
  expect(result).toEqual(mockApiJson);

  // make sure fetch has been called exactly once
  expect(fetch).toHaveBeenCalledTimes(1);
});

