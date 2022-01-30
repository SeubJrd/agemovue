var delay = 200

setTimeout(function() {

    var element = document.getElementsByClassName("modale");

    console.log(element)

    Array.prototype.forEach.call(element, child => {

        console.log(child)

        child.addEventListener("click", function(e){

           var modal = document.getElementById(e.srcElement.id)
           
           console.log(modal)

        })

    });

}, delay);

