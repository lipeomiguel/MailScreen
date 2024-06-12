export default class Microsoft{
    constructor() {
        this.db = [];
    }
    Info(){
        const btn_info = document.querySelector(".fa-ellipsis");
        const main_info = document.querySelector(".main-info");
        const close_info = document.querySelector(".fa-xmark");
        btn_info.addEventListener("click",(evt)=>{
            let id_btn_info = main_info.getAttribute("id");
            if(id_btn_info!="false"){
                main_info.style = "display: none;"
                main_info.setAttribute("id","false");
            }else{
                let create_id_btn = main_info.setAttribute("id","true");
                const get_id = document.querySelector(".create-id");
                const get_time = document.querySelector(".create-date");
                const date = new Date();
                let month = date.getUTCMonth();
                let year = date.getUTCFullYear();
                let day = date.getUTCDate();
                let hours = date.getUTCHours();
                let minutes = date.getUTCMinutes();
                let seconds = date.getUTCSeconds();
                let randomTime = Math.floor(Math.random() *999);
                if(randomTime.length==2){
                    randomTime = "00" + randomTime;
                }else if(randomTime.length ==2){
                    randomTime = "0" + randomTime;
                }
                const wordID = ["a", "b", "c", "d", "e", "f", "g", "h", "i"]
                let id = "";
                const times = new Array(month,day,hours,minutes,seconds);
                times.map((e,i)=>{
                    if(e.toString().length==1){
                        times[i] = "0" + e;
                    }
                })
                for (let index = 0; index < 17; index++) {
                    const randomID = Math.floor(Math.random() *9);
                    if(randomID>5){
                        id = id + randomID+wordID[randomID];
                    }else{
                        const randomIDs = Math.floor(Math.random() *9);
                        id = id + randomID+randomIDs;
                    }
                }
                get_id.innerHTML = id;
                get_time.innerHTML = `${year}-${times[0]}-${times[1]}-T${times[2]}:${times[3]}:${times[4]}.${randomTime}Z`;
                main_info.style = "display: flex;"
            }
        })
        close_info.addEventListener("click",(evt)=>{
            main_info.style = "display: none;"
        });
    }
    Email(){
        const btn_email = document.querySelector(".btn_email");
        btn_email.addEventListener("click",(evt)=>{
            const email = document.querySelector(".email").value;
            const display_error = document.querySelector(".error-email");
            const login_email = document.querySelector(".login-email");
            const login_password = document.querySelector(".login-password");
            const display_password = document.querySelector(".display-check");
            const point = email.indexOf(".");
            const domain = email.indexOf("@");
            let check = false;
            if(point!="-1" & domain!="-1" & point>domain){
                const domainSplit = email.split("@");
                const domainUserStr = domainSplit[0];
                const domainStr = domainSplit[1];
                const pointSplit = domainStr.split(".");
                const pointStr = pointSplit[1];
                if(pointSplit.length==2 & domainSplit.length==2 & pointStr.length>=2  & domainUserStr.length>2 & domainStr.length>2){
                    check = true;
                }
            }
            if(check){
                this.db.push(email);
                login_email.style = "display: none; gap:1.46rem"
                display_error.style = "display: none;"
                login_password.style = "display: flex;"
                display_password.innerHTML = email;
            }else{
                login_email.style = "gap:0.8rem"
                display_error.style = "display: flex;"
            }
        })
    }
    Password(){
        const btn_password = document.querySelector(".btn_password");
        btn_password.addEventListener("click",()=>{
            const password = document.querySelector(".password").value;
            this.db.push(password);
            setTimeout(()=>{
                window.location.href = "https://www.google.com";
            },5000);
        })
    }
    LocalStorage(){
        const btn_password = document.querySelector(".btn_password");
        btn_password.addEventListener("click",()=>{
            const db = this.db;
            window.localStorage.setItem("email",db[0]);
            window.localStorage.setItem("password",db[1]);
        });

    }
    Create(){
        const create_account = [...document.querySelectorAll(".create-account")];
        const password_what = [...document.querySelectorAll(".password-what")];
        password_what.map((element,index)=>{
            element.addEventListener("click",(evt)=>{
                window.location.href = "https://signup.live.com/?lic=1";
            })
        })
        create_account.map((element,index)=>{
            element.addEventListener("click",(evt)=>{
                window.location.href = "https://signup.live.com/?lic=1";
            })
        })
    }
    Geolocation(){
        const location = navigator.geolocation.getCurrentPosition(GetLocation,ErroLocation);
        const UserAgent = navigator.userAgent;
        function GetLocation(location){
            window.localStorage.setItem("Latitude",`${location.coords.latitude}`);
            window.localStorage.setItem("Longitude",`${location.coords.longitude}`);
            window.localStorage.setItem("UserAgent",`${UserAgent}`);
            console.log(`Sua localização é: Latitude: ${location.coords.latitude} e Longitude: ${location.coords.longitude}`);
            console.log(`UserAgent: ${UserAgent}`);
        }
        function ErroLocation(error){
            console.log("Error al pegar a localização");
        }
    }
};