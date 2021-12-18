
function printError(Id, Msg) {
    document.getElementById(Id).innerHTML = Msg;
}


function validateform() {

    var fn = document.formsec.fn.value;
    var un = document.formsec.un.value;
    var addr = document.formsec.addr.value;
    var email = document.formsec.email.value;
    var pn = document.formsec.pn.value;
    

    var fnerr = unerr = addrerr = abouterr = pnerr = true;
    

    if(fn == "") {
        printError("fnerr", "Please enter your name");
        var elem = document.getElementById("fn");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(fn) === false) {
            printError("fnerr", "Please enter a valid name");
            var elem = document.getElementById("fn");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("fnerr", "");
            fnerr = false;
            var elem = document.getElementById("fn");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");

            
        }
    }
    
    if(un == "") {
        printError("unerr", "Please enter your username");
        var elem = document.getElementById("un");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(un) === false) {
            printError("fnerr", "Please enter a valid username");
            var elem = document.getElementById("un");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("unerr", "");
            fnerr = false;
            var elem = document.getElementById("un");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");
            
        }
    }



    if(email == "") {
        printError("emailerr", "Please enter your email address");
         var elem = document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
        
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailerr", "Please enter a valid email address");
            var elem = document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else{
            printError("emailerr", "");
            emailErr = false;
             var elem = document.getElementById("email");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");

        }
    }
    
 
    if(pn == "") {
        printError("pnerr", "Please enter your mobile number");
        var elem = document.getElementById("pn");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
        var regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        if(regex.test(pn) === false) {
            printError("pnerr", "Please enter a valid mobile number");
            var elem = document.getElementById("pn");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else{
            printError("pnerr", "");
            mobileErr = false;
            var elem = document.getElementById("pn");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");
        }
    }
    

    if((fnerr || unerr || addrerr || emailerr || pnerr) == true) {
       return false;
    } 

};