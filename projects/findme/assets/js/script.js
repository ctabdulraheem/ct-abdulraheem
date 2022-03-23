(function ($) {

    $.fn.findMe = function () {

        let fineMeElement = $(this);
        function findMeData(codeFm, countryFm, regionFm, region, cityFm, stateFm, ipFm) {
            let countryImg = `<div class="country-img"><img src="https://countryflagsapi.com/png/${codeFm}" alt="" loading="lazy"/> </div>`;

            let countryName = `<div class="country-name">
            <h1>${countryFm} <span id="country-code">${codeFm}</span></h1></div>`;
            let regionName = `<div class="continent-name"><p>${regionFm} <span id="region">${region}</span></p></div>`;
            let countryCity = `<div class="city"><h2>${cityFm}</h2></div>`;
            let countrystate = `<div class="state"><p>${stateFm}</p></div>`;
            let countryip = `<div class="ip"><p>${ipFm}</p></div>`;

            let fineMe = `${countryImg} ${countryName} ${regionName} ${countryCity} ${countrystate} ${countryip}`;
            fineMeElement.html(fineMe);
        }

        $.ajax({
            dataType: "json",
            url: "https://api.db-ip.com/v2/free/self",
            success: function (findmeResult) {

                if (findmeResult.countryCode !== undefined && findmeResult.countryName !== undefined && findmeResult.continentCode !== undefined && findmeResult.city !== undefined && findmeResult.stateProv !== undefined && findmeResult.ipAddress !== undefined) {
                    findMeData(findmeResult.countryCode, findmeResult.countryName, findmeResult.continentName, findmeResult.continentCode, findmeResult.city, findmeResult.stateProv, findmeResult.ipAddress);
                } else {
                    let errorMsg = '<p class="errormsg">Some thing went wrong</p>'
                    fineMeElement.html(errorMsg);
                }
            }
        });
    }

}($));



$.ajax({
    dataType: "json",
    url: "https://api.flightapi.io/onewaytrip/623b4e143506281852406ce3/HYD/DEL/2022-05-20/3/2/6/Economy/INR",
    success: function (findmeResult) {
        console.log(findmeResult);
    }
});