import { test, expect } from 'playwright-test-coverage'

test.describe('smoke tests', () => {
  test.beforeEach(async ({ page, baseURL }) => {
    await page.goto('http://localhost:8080')
  })

  test('Should show Add Button', async ({ page }) => {
    await expect(page.getByText('Add')).toBeVisible()
  })
})
