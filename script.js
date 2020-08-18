var city = "Houston";
var lastIndex = 0;
			
function randomImage() {
    var theImage = document.getElementById('myimage');
    var imgDir = 'C:/Users/Yayan/Documents/wholesomememes/';
    var imgArray = new Array('6cc.jpg','070.png','aup.jpg','c99.jpg','ckt.png','d7i.jpg','etg.jpg','iu7.png','iyp.jpg','jop.jpg','kgl.jpg','khg.jpg','kir.jpg','kop.jpg','lkj.jpg','lu0.jpg','lyh.jpg','m78.jpg','mio.jpg','o9h.png','ocu.jpg','ofp.jpg','puh.png','qjm.png','Scr.png','sed.png','slt.jpg','tdu.png','tfh.jpg','vjl.jpg','vll.jpg','vwm.jpg','w6o.jpg','xef.jpg','xgt.jpg','yfj.jpg','zjk.jpg');
    var imgIndex = 0;
    
    if(imgArray.length > 1) {
        while(imgIndex == lastIndex) {
            imgIndex = Math.floor(Math.random() * imgArray.length);
        }
        lastIndex = imgIndex;
    
        var imgPath = imgDir + imgArray[imgIndex];
        
        theImage.src = imgPath;
        theImage.alt = imgArray[imgIndex];
    }
    else {
        return false;
    }
}


$.getJSON
    ("http://api.openweathermap.org/data/2.5/weather?q="+ city + "&units=imperial&appid=be41eca01f2f1e33911430290784f706", 
    function(data){
        console.log(data);

        var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        var temp = Math.floor(data.main.temp);
        var weather = data.weather[0].main;


        $('.icon').attr('src', icon);
        $('.weather').append(weather);
        $('.temp').append(temp);
    }
);