export class InventoryPage {
  constructor(public page) {}

  async addFirstProductToCart() {
    await this.page.click('.inventory_item button');
  }
}
