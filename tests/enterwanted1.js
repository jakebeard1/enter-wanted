module.exports = {
    beforeEach : browser => {
        browser.url('https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html')
    },
    after : browser => {
        browser.end()
    },
'Enter Wanted' : browser => {
    browser
.setValue('input[name="hdrInput"]', "Frogger")
.setValue('input[name="mkeInput"]', "Man")
.setValue('input[name="oriInput"]', "1234567ar")
.setValue('input[name="namInput"]', "Bojangle")
.setValue('input[name="sexInput"]', "S")
.setValue('input[name="racInput"]', "W")
.setValue('input[name="hgtInput"]', "999")
.setValue('input[name="wgtInput"]', "999")
.setValue('input[name="haiInput"]', "brown")
.setValue('input[name="offInput"]', "toocool")
.setValue('input[name="dowInput"]', "05082018") 
.setValue('input[name="olnInput"]', "@@@@@@@@@@@@")
.setValue('input[name="olsInput"]', "CA")
.setValue('input[name="olyInput"]', "1924")
.setValue('input[name="licInput"]', "$$$$$#@")
.setValue('input[name="lisInput"]', "CA")
.setValue('input[name="liyInput"]', "3000")
.click('button[id="saveBtn"]')
.assert.containsText('p[id="validHeader"]', "Errors Recieved:")
.assert.containsText('li[class=errorMessage"]', "The "Hair" field should be between 3 and 10 characters long.")
// .waitForElementNotPresent('body', 5000)
.waitForElementPresent('body', 5000)


}


}