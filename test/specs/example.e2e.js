const LetsPlanPage = require('../pageobjects/letsplan.page');
const TodaysListPage = require('../pageobjects/todayslist.page');
const LaterListPage = require('../pageobjects/laterlist.page');

describe('My Lets Plan and Todays List application', () => {
    
    it('should open home page', () => {
        LetsPlanPage.open();
        LetsPlanPage.enterTodayTaskName('Webdriver Conf Today@2020');
        LetsPlanPage.enterTodayTaskName('Webdriver Conf Today@Bengaluru');
        LetsPlanPage.enterLaterTaskName('Webdriver Conf Later@2020');
        LetsPlanPage.enterLaterTaskName('Webdriver Conf Later@Bengaluru');

    });
});


