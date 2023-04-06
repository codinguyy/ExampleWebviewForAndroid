
function myFunction() {
   let copyText = document.getElementById("text");
   copyText.select();
   copyText.setSelectionRange(0, 99999);
   


   try {
    var retVal = document.execCommand("copy");
    console.log('Copy to clipboard returns: ' + retVal);
    alert("Copied the text: " + copyText.value); 
} catch (err) { console.log('Error while copying to clipboard: ' + err); }    
      


}
