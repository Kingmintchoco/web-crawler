var Crawler = require("crawler");
 
var c = new Crawler({
    maxConnections : 10,
    // This will be called for each crawled page
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            console.log($("title").text());

            /***************************************************
            이부분에서 jQuery를 이용해 데이터를 파싱하고 출력할 것입니다.
            ****************************************************/

            const $bodyList = $("div.thumb_area").children("div.thumb_box");
            let newsList = [];
            $bodyList.each(function(i, elem) {
            newsList[i] = $(this).find('a.thumb img').attr('alt');
            });

            console.log(newsList);
        }
        done();
    }
});
 
// Queue just one URL, with default callback
c.queue('http://www.naver.com');
// url은 네이버의 주소로 변경해줍니다.
