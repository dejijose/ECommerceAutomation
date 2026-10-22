import { test, expect } from '@playwright/test';
import accountData from '../test-data/createAccount.json' assert { type: 'json' };
import { PageManager } from '../pages/pageManager';

let pageManager;

test.describe('Create account API', { tag: '@signup' }, () => {
  test.beforeEach(async ({ page }) => {
    pageManager = new PageManager(page);
   
  });

  test('creates an account with a POST request', async ({ request }) => {
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