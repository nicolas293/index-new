function onButtonClick() {
  var mainSid1 = document.getElementById("mainSid1");
  var nav = document.getElementById("nav");
  
    if(mainSid1.style.display == "block") {
       mainSid1.style.display = 'block';
       mainSid1.style.display = 'none'; 
    } else {
       mainSid1.style.display = 'none';
       mainSid1.style.display = 'block'; 
    }
  
}