var aud=new Audio();
console.log(aud);
aud.src="./Assets/Audios/Alarm.mp3"
function ply(){
    aud.play();
}
function stopAlm(){
    aud.pause();
}