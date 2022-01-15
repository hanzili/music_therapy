var amusement_song = new Array();
var anxiety_song = new Array();
var relaxation_song = new Array();
var sadness_song = new Array();

function amusement(){
    var new_song=document.getElementById("songname").value;
    amusement_song[amusement_song.length] = new_song;
    localStorage.setItem("amusement_song",amusement_song);
    document.getElementById("songname").value="";
}

function anxiety(){
    var new_song=document.getElementById("songname").value;
    anxiety_song[anxiety_song.length] = new_song;
    localStorage.setItem("anxiety_song",anxiety_song);
    document.getElementById("songname").value="";
}

function relaxation(){
    var new_song=document.getElementById("songname").value;
    relaxation_song[relaxation_song.length] = new_song;
    localStorage.setItem("relaxation_song",relaxation_song);
    document.getElementById("songname").value="";
}

function sadness(){
    var new_song=document.getElementById("songname").value;
    sadness_song[sadness_song.length] = new_song;
    localStorage.setItem("sadness_song",sadness_song);
    document.getElementById("songname").value="";
}

function music(){
    amusement_song = localStorage.getItem('amusement_song');
    document.write("<a style='color:sienna;margin-left:20px;font-size:50px;'> These songs are amusing: "+amusement_song+"</a>");
    anxiety_song = localStorage.getItem('anxiety_song');
    document.write("<a style='color:blue;margin-left:20px;font-size:50px;'> These songs are anxious: "+anxiety_song+"</a>");
    relaxation_song = localStorage.getItem('relaxation_song');
    document.write("<a style='color:green;margin-left:20px;font-size:50px;'> These songs are relaxing: "+relaxation_song+"</a>");
    sadness_song = localStorage.getItem('sadness_song');
    document.write("<a style='color:black;margin-left:20px;font-size:50px;'> These songs are sad: "+sadness_song+"</a>");


}