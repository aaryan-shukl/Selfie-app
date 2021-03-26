var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start() {
    document.getElementById("text-box").innerHTML = "";
    recognition.start();
}
recognition.onresult = function run(event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    document.getElementById("text-box").innerHTML = Content;
    
    if (Content == "take my selfie") {
        speak();
    }
}
function speak() {
    var synth = window.SpeechSynthesis;
    var speechData = "taking your selfie in three seconds";
    var utterthis = new SpeechSynthesisUtterance(speechData);
    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function() {takeselfie();savepic();},3000);
}
Webcam.set({
    width: 360,
    height:250,
    image_format: 'png',
    png_quality: 90
});
var camera = document.getElementById("camera");
function takeselfie() {
    Webcam.snap(function(data_uri) {
        document.getElementById("pic-result").innerHTML = "<img id='result-image' src='" + data_uri + "'>";
    });
}
function savepic() {
    var link = document.getElementById("link");
    var image = document.getElementById("selfie-11").src;
    link.href = image;
    link.click
}