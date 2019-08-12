var express = require('express');
var router = express.Router();
const puppeteer = require('puppeteer');


router.get('/', async function (req, res, next) {
    console.info(req.query);
    const buffer = await printHtmlToPDf(req.query.url);
    console.info("拿到打印文件了");
    res.type('application/pdf');
    res.send(buffer)
});


const printHtmlToPDf = async (url) => {
    console.info("我开始打印了");
    const browser = await puppeteer.launch({headless:true});
    const page = await browser.newPage();
    // await page.tracing.start({
    //     path: "trace.json"
    // });
    await page.goto(url);
    const buffer = await page.pdf({
        path: 'example.pdf',
        format: 'A4',
        margin: {top: "17mm", right: '17mm', bottom: "17mm", left: '17mm'}
    });
    // await page.tracing.stop();
    await browser.close();
    console.info("我结束打印了");
    return  buffer;
};

module.exports = router;
