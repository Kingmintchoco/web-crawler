var Crawler = require("crawler");

var c = new Crawler({
    maxConnections: 10,
    // This will be called for each crawled page
    callback: function(err, res, done){
        if(err) console.log(err);
        else{
            var $ = res.$;
            // $ is Cheerio by default.
            // a lean implementation of core jQuery designed specifically for the server.
            console.log($('title').text());

            /***************************************************
            이부분에서 jQuery를 이용해 데이터를 파싱하고 출력할 것입니다.
            ****************************************************/
            const $bodyList = $("div#competitions").children("ul.list-competitions");

            let competitionsTitle = [];
            $bodyList.each(function(i, elem){
                competitionsTitle[i] = $(this).find('a');
            });
            
            console.log(competitionsTitle);
        }

        done();
    }
});

// Queue just one URL, with default callback
c.queue("https://programmers.co.kr/competitions");

