import { BasePage } from './BasePage'

export class SearchPage extends BasePage {
    constructor(page) {
        super(page);

        this.searchInput = 'input[placeholder="Що шукаємо?"]';
        this.productCards = '.product-tile, .product-card';
        this.productList = '.productList';
        this.productCard = '.productCard';
        this.sortSelect = 'select[name="sort-order"]';
        this.priceLocator = '.prices, .product-price, .price';
        this.searchResultsText = this.page.locator('h3.search-result-text');
    }

    async searchProduct(productName) {
        await this.page.fill(this.searchInput, productName);
        await this.page.keyboard.press('Enter');
    }

    async waitForResults() {
        await this.page.waitForSelector(this.productList, { state: 'visible' });
    }

    async getResultsCount() {
        return await this.page.locator(this.productCards).count();
    }

    async getResultText() {
        return await this.page.locator(this.resultText).innerText();
    }

    async sortBy(value) {
        await this.page.selectOption(this.sortSelect, value);
    }

    async getAllPrices() {
        const priceTexts = await this.page.locator(this.priceLocator).allInnerTexts();

        return priceTexts.map(p =>
            parseFloat(p.replace(/[^\d]/g, ''))
        );
    }
}
