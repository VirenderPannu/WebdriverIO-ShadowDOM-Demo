const Page = require('./page');

/* sub page containing specific selectors and methods for a specific page */
class LetsPlanPage extends Page {
    
    //define selectors using getter methods
    get inputTaskName () { return browser.$('#todo-app').shadow$('#adds-item').shadow$('#enter-text-area'); }
    get enterButton () { return browser.$('#todo-app').shadow$('#adds-item').shadow$('.btn-enter'); }
    get todayTab () { return browser.$('#todo-app').shadow$('#adds-item').shadow$('#today'); }
    get laterTab () { return browser.$('#todo-app').shadow$('#adds-item').shadow$('#later'); }


    enterTodayTaskName (todayTaskName) {
        browser.pause(3000)
        this.todayTab.click();
        this.inputTaskName.setValue(todayTaskName);
        this.enterButton.click(); 
    }

    enterLaterTaskName (laterTaskName) {
        browser.pause(3000)
        this.laterTab.click();
        this.inputTaskName.setValue(laterTaskName);
        this.enterButton.click(); 
    }

    open () {
        return super.open();
    }
}

module.exports = new LetsPlanPage();
