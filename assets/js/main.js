document.addEventListener("DOMContentLoaded", function () {const sweetScroll = new SweetScroll({/* some options */});}, false);

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgs = document.getElementsByClassName("zoomImg")
var modalImg = document.getElementById("modalImg");
for(var i = 0; i < imgs.length; i++)
{
    var img = imgs.item(i)
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}