
     function changeURL() {
            var newURL = "#about";
            document.getElementById("firstone").href = newURL;
        }   
    function confirmhehe(){
        let choice = confirm("Do you want to go another website");
        
        if(choice == false){
         changeURL();
        }
        
    }
    function changeURL2() {
            var newURL = "#button-second";
            document.getElementById("button-second").href = newURL;
        }   
     function confirmhehe1() {
            let choice = confirm("Do you want to go another website");

            if (choice == false) {
                changeURL2();
            }
        }