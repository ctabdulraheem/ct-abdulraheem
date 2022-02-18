let methodType = "GET";
let url = `https://emojihub.herokuapp.com/api/all`;

let emojis_card = document.getElementsByClassName("emoji-card")[0];

function requestemoji() {
    let data = JSON.parse(this.responseText);
    let dataLength = data.length; //This is for calculate array length
    
    for (i = 0; i < dataLength; i++) {

        //For emoji icon and htmlcode
        let emojiIcon = data[i].htmlCode[0]; 

        //Getting Htmlcode for emoji
        let store_htmlCode = emojiIcon;
        let trim_htmlcode = store_htmlCode.substring(1);

        //Getting Unicode
        let store_unicode = data[i].unicode;
        console.log(`${store_unicode}`)

        //Creating Dynamic HTML Elements

        // Creating emojis Div
        let emojis_div = document.createElement("div");
        emojis_div.classList.add("emojis"); //Adding Class to emojis_div

        //Creating Main icon span tag
        let spanIcon = document.createElement('span');
        spanIcon.classList.add("icon"); //Adding class to span tag
        spanIcon.innerHTML = emojiIcon;
        emojis_div.appendChild(spanIcon)

        let create_ul = document.createElement("ul"); //Creating UL

        //Creating htmlcode li
        let htmlcode_li = document.createElement("li");

        //Creating Unicode li
        let unicode_li = document.createElement("li");

        //Creating HTMLCODE elements
        let htmlCode_name = document.createElement("span");
        let htmlCode_code = document.createElement("span");
        htmlCode_name.innerHTML = `htmlCode:`;
        htmlCode_code.innerHTML = `&amp; ${trim_htmlcode}`;
        

        //Creating Unicode Elements
        let unicode_name = document.createElement("span");
        let unicode_code = document.createElement("span");
        unicode_name.innerHTML = "unicode:";
        unicode_code.innerHTML = store_unicode;



        //Appending HTMLCODE elements
        htmlcode_li.append(htmlCode_name);
        htmlcode_li.append(htmlCode_code);

        //Appending Unicode elements
        unicode_li.append(unicode_name);
        unicode_li.append(unicode_code);

        
        create_ul.append(htmlcode_li); //Appending htmlcode li to ul
        create_ul.append(unicode_li); //Appending unicode li to ul

        //Appending ul(child) into div.emojis_div(parent)
        emojis_div.appendChild(create_ul); 

        //Appending emojis_div(child div) into emojis_card(parent div)
        emojis_card.appendChild(emojis_div);
    }
}

let xhr = new XMLHttpRequest();
xhr.open(methodType, url);
xhr.onload = requestemoji;
xhr.send();