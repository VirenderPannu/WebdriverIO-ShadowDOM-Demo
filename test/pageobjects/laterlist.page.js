const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LaterListPage extends Page {
    /**
     * define selectors using getter methods
     */
    get laterList () { return browser.$('#todo-app').shadow$('#list-items').shadow$('.lists').shadow$$('.list-item .item'); }
    get laterListDeleteOptions () { return browser.$('#todo-app').shadow$('#list-items').shadow$('.lists').shadow$$('.list-item .delete'); }

}

module.exports = new LaterListPage();
