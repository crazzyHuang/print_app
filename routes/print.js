var express = require('express');
var router = express.Router();
const puppeteer = require('puppeteer');


router.get('/', async function (req, res, next) {
    const {url, wskey, type, sswsname, token} = req.query;
    const urlString = `${url}?wskey=${wskey}&type=${type}&sswsname=${sswsname}&token=${token}`;
    // const {url} = req.query;
    // console.info("urlString", urlString);
    const buffer = await printHtmlToPDf(urlString);
    console.info("拿到打印文件了");
    res.type('application/pdf');
    res.send(buffer)
});


const printHtmlToPDf = async (url) => {
    console.info("获取的url等于");
    console.info(url);
    console.info("我开始打印了");
    const browser = await puppeteer.launch({headless: true, args: ['--no-sandbox']});
    const page = await browser.newPage();
    // await page.tracing.start({
    //     path: "trace.json"
    // });



    try {

        await page.goto(url, {
            waitUntil: 'networkidle0'
        });

        // // 记录页面日志
        // page.on('console', msg => console.log('PAGE LOG:', ...msg.args));
        //
        // page.on('request', request => {
        //     request.continue(); // pass it through.
        // });
        //
        // page.on('response', response => {
        //     const req = response.request();
        //     console.log(req.method, response.status, req.url);
        // });


    } catch (e) {
        console.info(e);
    }

    // await page.waitForNavigation();
    const buffer = await page.pdf({
        path: 'example.pdf',
        format: 'A4',
        margin: {top: "17mm", right: '17mm', bottom: "17mm", left: '17mm'}
    });
    // await page.tracing.stop();
    await browser.close();
    console.info("我结束打印了");
    return buffer;
};

module.exports = router;
