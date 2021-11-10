function start(){navigator.mediaDevices.getUserMedia({ audio: true});

    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/8zH9Dv3Jh/model.json',modelloaded);

}
function modelloaded(){
    console.log("modelloaded");
    classifier.classify(gotresult);
}

function gotresult(error,result){
    if(error){
        console.log(error);
    }       
    else{
        console.log(result);
        color = Math.floor(Math.random() * 255) + 1;
        color2 = Math.floor(Math.random() * 255) + 1;
        color3 = Math.floor(Math.random() * 255) + 1;
        document.getElementById("hear").innerHTML="I can hear: "+result[0].label;
        document.getElementById("accuracy").innerHTML="Accuracy is: "+(result[0].confidence*100).toFixed(3)+"%";
     document.getElementById("hear").style.color = "rgb("+color+","+color2+","+color3+")";
     document.getElementById("accuracy").style.color = "rgb("+color+","+color2+","+color3+")";
   Aliens1= document.getElementById("Image1");
   Aliens2= document.getElementById("Image2");
    Aliens3=document.getElementById("Image3");
    Aliens4=document.getElementById("Image4");

    if(result[0].label=="Background Noise"){
      Aliens1.src="aliens-01.gif";
      Aliens2.src="aliens-02.png";
      Aliens3.src="aliens-03.png";
      Aliens4.src="aliens-04.png";
    }    
    else if(result[0].label=="Clapping"){
        Aliens1.src="aliens-01.png";
        Aliens2.src="aliens-02.gif";
        Aliens3.src="aliens-03.png";
        Aliens4.src="aliens-04.png";
    }
    else if(result[0].label=="Tapping"){
        Aliens1.src="aliens-01.png";
        Aliens2.src="aliens-02.png";
        Aliens3.src="aliens-03.png";
        Aliens4.src="aliens-04.gif";
    }
    else {
        Aliens1.src="aliens-01.png";
        Aliens2.src="aliens-02.png";
        Aliens3.src="aliens-03.gif";
        Aliens4.src="aliens-04.png";
    }   
    }
    }
