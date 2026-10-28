import { test, expect } from '../utils/customFixture';
import accountData from '../test-data/createAccount.json' assert { type: 'json' };


test.describe('Create account API', { tag: '@signup' }, () => {
  test.beforeEach(async ({ page }) => {
   
  });

  test('creates an account with a POST request', async ({pageManager, request}) => {
    const requestBody = {
      ...accountData,
      email: `signup-${Date.now()}@example.com`,
    };

    const response = await pageManager.getApiUtil.createAccount(request, requestBody);
    const responseBody = await response.json();
    console.log(responseBody);
    expect(response.ok()).toBe(true);
    expect(responseBody).toEqual({
      responseCode: 201,
      message: 'User created!',
    });
  });
});