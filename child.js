const puppeteer = require('puppeteer');

(async()=>{
    const broser = await puppeteer.launch({headless:false,devtools:false});
    let page = await broser.newPage()
    await page.goto('http://202.204.74.178/jwglxt/xtgl/login_slogin.html?language=zh_CN&_t=1542472061291')
    page.waitForSelector('yhm')
    await page.type('#yhm','1161220120')
    await page.type('#mm','pangyunhe123')
    await page.click('#dl')
    // page.waitForSelector('#index_wdyy > li:nth-child(8) > a')
    // await page.click('#index_wdyy > li:nth-child(8) > a')
    // await page.goto('http://202.204.74.178/jwglxt/xtgl/login_slogin.html?language=zh_CN&_t=1542472061291')
    console.log('finish')
    await page.waitFor(3000)
    await broser.close();
})()