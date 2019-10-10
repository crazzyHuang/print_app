var express = require('express');
var router = express.Router();

router.get('/', async function (req, res, next) {
    console.info(req.params.wsid);
    console.info(req.params.sswsname);
    res.send('respond with a resource');
});


const formData = {
    qbhslx: '01',
    ajbh: 'A3707035800002013020001',
    itemoflaw: '十一',
    confirmbyperson: '寒亭所长',
    blywqkid: 'PCS37201302190000000000182465',
    transactunit: '370703580000',
    briefreason: '非法存放枪支、弹药',
    workin: '广州市天河区中山大道建中路12号华南资讯',
    writaddspell: 'PCS37201302190000000000182465',
    writetime: '2011-04-06 15:00:00',
    confirmtime: '2017-05-04 08:52:57',
    gafj_1: '潍坊市公安局寒亭分局',
    sswsmc: '撤销案件决定书',
    qbhslx_1: '',
    maxprintnum2: 1,
    maxprintnum3: 1,
    maxprintnum4: 1,
    xzdz: '广东省广州市天河区',
    submittime: '2013-02-19 15:16:00',
    gafj: '潍坊市公安局寒亭分局',
    beginhappentime: '2013-02-19 15:11:00',
    transact: '　　dsfg，案发时间为2013年2月19日15时11分至2013年2月19日15时11分之间。',
    writetime7: '2011年4月6日15时',
    cqdwyz: '',
    is_print_barcode: '1',
    submittime1: '二○一三',
    submittime2: '二',
    submittime3: '十九',
    writetime0: '二○一一年四月六日十五时分',
    writetime1: '二○一一',
    wszh: '字 [] 00000 号',
    writetime2: '四',
    writetime3: '六',
    systemid: 'PCS37201302190000000000182465',
    dwldqm: '',
    jzyz: '',
    reservation04: '撤销案件决定书',
    analysisinlaw: '　\r\n综上所述，犯罪嫌疑人...，根据<程序法及条款>之规定，拟撤销XX。',
    spdwyz: '',
    receiveunit: '汉庭民警',
    submitnote: '　　现根据调查情况，呈请撤销dsfg案件，理由如下：',
    writetimenyr: '二○一一年四月六日',
    lawname: '《中华人民共和国刑事诉讼法》',
    zwxm: '张哈哈',
    ajmc: '测试代码',
    epilog: '妥否，请批示。',
    tiao: '十一',
    departmentcode: '370703580000',
    markofwrit: '0null',
    wscode: 'A006',
    xm2: '情节显著轻微、危害不大，不认为是犯罪',
    reservation02: 'LOAD_B_ASJ_WS_CQBG',
    transactprimarytout: '寒亭民警,寒亭民警3',
    cellofterm: '02',
    transactunit1: '潍坊市公安局寒亭分局央子派出所',
    departmentcodecn: '潍坊市公安局寒亭分局央子派出所',
    sex: '1',
    writid: 'PCS37201302190000000000182465',
    confirmtimenyr: '2017年5月4日',
    spldqm: '',
    endhappentime: '2013-02-19 15:11:00',
    refreshtime: '2013-02-19 15:16:00',
    writefor: 'A',
    cxyy: '情节显著轻微、危害不大，不认为是犯罪',
    birthdayinbegin: '2011-04-06 00:00:00',
    writeby: '寒亭民警',
    transactunitcn: '潍坊市公安局寒亭分局央子派出所',
};


router.get('/b_asj_ws_news/ssws/:wsid', async function (req, res, next) {
    console.info(req.params.wsid);
    console.info(req.query.sswsname);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.type('application/json');
    res.send(formData);
});

module.exports = router;
