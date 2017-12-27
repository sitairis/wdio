
class FilterPanel {

    constructor() {
        this._root = browser.element(`#schema-filter`);
    }

    get root() {
        return this._root;
    }

    findByClassName(className) {
        let array = [];
        let i = 1;
        let element = browser.element(`//div[@id='schema-filter']/div[1]/div[@class='schema-filter__fieldset'][1]`);
        while (element.isExisting()) {
            element = browser.element(`//div[@id='schema-filter']/div[1]/div[@class='schema-filter__fieldset'][${i}]`);
            array.push(element);
            i++;
        }

        return array;
    }

    setCheckboxFilter(type, ...values) {

        let filtersByType = this.findByClassName(`schema-filter__fieldset`);
        for (let filter of filtersByType) {
            if (filter.element('span').getText() === type) {
                // console.log(`${filter.getText()}`);
                let rootFilter = filter.element(`ul`);

                values.forEach((value) => {
                    rootFilter.element(`span=${value}`).click();
                });
            }
        }
    }
}


module.exports = FilterPanel;
