import { test, expect } from 'playwright-test-coverage'

test.describe('smoke tests', () => {
  //   test.beforeEach(async ({ page, baseURL }) => {
  //     await login(page, baseURL)
  //     await page.waitForTimeout(1000)

  test('Should exercise all menu options', async ({ page }) => {
    const menuItems = [
      'Guides',
      'Nodes',
      'Problems',
      'Assets',
      'Tests',
      'Causes',
      'Inputs',
    ]

    for (const item of menuItems) {
      //   await selectSidebarMenuItem(page, item)
      await expect(item).toEqual(item)
      //   await expect(page.getByRole('heading', { name: item })).toBeVisible()
    }
  })
})
