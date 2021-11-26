const {By,Key,Builder} = require('selenium-webdriver')
require('chromedriver')

async function test(){
    var count=0;
    while(true){
    let driver=await new Builder().forBrowser('chrome').build();

    await driver.get("http://localhost:3000/login")

    await driver.findElement(By.id("userName")).sendKeys('touhidpasha552@gmail.com')
    await driver.findElement(By.id("password")).sendKeys('Abcd@1234')
    await driver.findElement(By.id("login-button")).click();

    
    var title=await driver.getTitle();
    console.log("title is "+title+" and count is "+count++);
    await driver.quit();
    }
    

}
test()
// node src/test/test.js