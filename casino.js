(function (){	// обернем все в безымянную функцию, чтобы не создавать глобальных переменных - просто хороший тон
const obs = new OBSWebSocket();
var lastbal_save = null;

setTimeout(()=>{

// Connect to Websocket OBS
 obs.connect({address: 'localhost:4444'});

 obs.on('ConnectionOpened', () => 
 {
 		if(window.location.host === "izzicasino1000.com") setInterval(()=>{updbalance("izzi")},1000);
 		if(window.location.host === "drgn3.casino")setInterval(()=>{updbalance("dragon")},1000);
 		if(window.location.host === "stake.com")setInterval(()=>{updbalance("stake")},1000);
 		if(window.location.host === "vavada.com")setInterval(()=>{updbalance("vavada")},1000);

  });
},2000);


function updbalance(domain=null)
{
	if(domain)
	{
		if(domain === "izzi") var lastbal = parseFloat(document.getElementsByClassName('user-top-balance__balans')[0]['textContent'].replace(" ",""));
		if(domain === "dragon") var lastbal = parseFloat(document.getElementsByClassName('money')[0]['textContent'].replace(" ",""))/10;
		if(domain === "stake") var lastbal = parseFloat(document.getElementsByClassName('content-or-loader svelte-1uofbko')[11]['textContent'].replace(" ","").replace(",","."));
		if(domain === "vavada") var lastbal = parseFloat(document.getElementsByClassName('view_money_count')[0]['textContent'].replace(" ","").replace(",","."));

		var text = "Баланс: "+lastbal+ " РУБ";

		if(lastbal_save != lastbal){
			lastbal_save = lastbal;
			console.log(text);
			obs.send('SetTextGDIPlusProperties', {'source':'Баланс','text':text});
		}		  

	}
}


})();