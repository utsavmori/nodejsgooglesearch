var request=require('request');
var cheerio=require('cheerio');
var urls=[];
 var querystr = process.argv.slice(2);
request('https://www.google.co.in/search?q='+querystr,function(err,resp,body){
	if(!err && resp.statusCode==200){
		var  $ =cheerio.load(body);
		
		$('a','h3.r').each(function(){
			
				var url =$(this).attr('href');
			urls.push(url);
		
			
		});
		for(i=0;i<urls.length;i++){
			var str=urls[i];
			var start = str.indexOf('=') + 1;
			var end = str.indexOf('&',start);
			var prin=str.substring(start,end);
			console.log(prin+'\n'+'\n');

		}
	}
});