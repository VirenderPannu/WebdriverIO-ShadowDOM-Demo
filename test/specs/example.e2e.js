const LetsPlanPage = require('../pageobjects/letsplan.page');
const TodaysListPage = require('../pageobjects/todayslist.page');
const LaterListPage = require('../pageobjects/laterlist.page');

describe('My Lets Plan and Todays List application', () => {
    it('should open home page', () => {
        LetsPlanPage.open();

        LetsPlanPage.enterTodayTaskName('Selenium Plan1');
        LetsPlanPage.enterTodayTaskName('Selenium Plan2');

        //expect(TodaysListPage.todaysList).toBeExisting();

        LetsPlanPage.enterLaterTaskName('WebdriverIO Plan1');
        LetsPlanPage.enterLaterTaskName('WebdriverIO Plan2');

    });
});


