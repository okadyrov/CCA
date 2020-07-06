const general = require ('../data/selectors.json').general;
describe('Complex Counter App', function () {
    describe('Getting to the page', function () {
        it('TC-001 Page title is Complex Counter App', function () {
            browser.url('');
            const title = browser.getTitle();
            expect(title).toEqual('Complex Counter App');
        })
    });
    describe('Elements exist', function () {
        it('TC-002 Header', function () {
            const actual = $(general.header).isDisplayed();
            expect(actual).toEqual(true);
        })
        it('TC-003 Total Result', function () {
            const actual = $(general.totalResult).isDisplayed();
            expect(actual).toEqual(true);
        })
        it('TC-004 Add Name Field', function () {
            const actual = $(general.addNameField).isDisplayed();
            expect(actual).toEqual(true);
        })
        it('TC-005 Label for Add Name Field', function () {
            const actual = $$(general.addNameFieldLabel)[$$(general.addNameFieldLabel).length-2].isDisplayed();
            //$$('label')[$$('label').length-2]
            expect(actual).toEqual(true);
        })
        /*it('TC-004 Counter Name', function () {
            const header = $$('h3')[1].isDisplayed();
            expect(header).toEqual(true);
        })*/
    });
});