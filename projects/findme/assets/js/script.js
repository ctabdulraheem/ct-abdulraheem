(function ($) {

    $.fn.findMe = function () {

        let fineMeElement = $(this);
        function findMeData(codeFm, countryFm, regionFm, region, cityFm, zipFm, timeZoneFm) {
            let countryImg = `<div class="country-img"><img src="https://countryflagsapi.com/png/${codeFm}" alt="" loading="lazy"/> </div>`;

            let countryName = `<div class="country-name">
            <h1>${countryFm} <span id="country-code">${codeFm}</span></h1></div>`;
            let regionName = `<div class="region-name"><p>${regionFm} <span id="region">${region}</span></p></div>`;
            let countryCity = `<div class="city"><h2>${cityFm}</h2></div>`;
            let countryZip = `<div class="zip"><p>${zipFm}</p></div>`;
            let countryTimeZone = `<div class="timezone"><p>${timeZoneFm}</p></div>`;

            let fineMe = `${countryImg} ${countryName} ${regionName} ${countryCity} ${countryZip} ${countryTimeZone}`;
            fineMeElement.html(fineMe);
        }

        let methodType = "GET";
        let url = `http://ip-api.com/json`;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {

            if (this.readyState == 4 && this.status == 200) {
                let findmeResult = JSON.parse(this.responseText);
                if (findmeResult.status == 'success') {
                    findMeData(findmeResult.countryCode, findmeResult.country, findmeResult.regionName, findmeResult.region, findmeResult.city, findmeResult.zip, findmeResult.timezone);
                    
                } else {
                    let errorMsg = '<p class="errormsg">Some thing went wrong</p>'
                    fineMeElement.html(errorMsg);
                }
            }
           
        }
        
        xhr.open(methodType,url,true);
        xhr.send();



    }

}($));




var endpoint = 'http://ip-api.com/json/?fields=status,message,countryCode';

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		let response = JSON.parse(this.responseText);
        console.log(response)
		if(response.status == 'success') {
            console.log(response.countryCode)
		}
		
	}
};
xhr.open('GET', endpoint, true);
xhr.send();