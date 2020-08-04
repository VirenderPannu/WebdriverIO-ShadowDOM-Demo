const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class TodaysListPage extends Page {
    /**
     * define selectors using getter methods
     */
    get todaysList () { return browser.$('#todo-app').shadow$('#list-items').shadow$('.lists').shadow$$('.list-item .item'); }
    get todaysListDeleteOptions () { return browser.$('#todo-app').shadow$('#list-items').shadow$('.lists').shadow$$('.list-item .delete'); }

}

module.exports = new TodaysListPage();
