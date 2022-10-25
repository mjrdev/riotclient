<template>
    <div class="login">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
      
      
        <img class="riot-logo" width="100px" src="https://cdn1.dotesports.com/wp-content/uploads/sites/3/2022/02/21162720/riot-games-new-logo.jpg" alt=""/>
        
        <h2 class="title">Sing in</h2>

        <form action="" class="form">
            <input class="i-login" type="text" placeholder="USERNAME">
            <input class="i-login" type="text" placeholder="PASSWORD">
        </form>

        <div class="alt-login">

            <div class="alt-login-container">
                <div class="alt-login-item al-facebook"> 
                    <img class="img-facebook" :src="logosAltLogin.facebook" alt="">
                </div>

                <div class="alt-login-item al-google">
                    <img class="img-google" :src="logosAltLogin.google" alt="">
                </div>

                <div class="alt-login-item al-apple">
                    <img class="img-apple" :src="logosAltLogin.apple" alt="">
                </div>
            </div>

            <div class="signedin">
                
                <label class="container-cb">
                    <input class="checkbox" type="checkbox">
                    <span class="checkmark"></span>
                    Stay signed in
                </label>
            </div>
        </div>

        <div class="btn-area">
            <button type="button" href="http://google.com" class="btn-signin">
                <span class="material-icons">arrow_forward</span>
            </button>
        </div>

        <div class="more">
            <a class="help" href="">CAN'T SING IN</a>
            <a class="help" href="http://a.com">CREATE ACCOUNT</a>
        </div>

        <p class="version">{{ version }}</p>
    </div>
</template>
<script>
export default {
    name: 'Login',
    data() {
        return {
            version: 'v01.00.0',
            logosAltLogin: {                
                facebook: 'https://pnggrid.com/wp-content/uploads/2021/04/facebook-white-circle-1024x1024.png',
                google: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png',
                apple: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png'
            }
        }
    }
}


</script>

<style>

/*

login = *AREA ESQUERDA DE LOGIN DO USUARIO*

i-login = inputs do formulario de login

alt-login = metódos de login alternativos

*/





/* <---------- Login ----------> */

.login {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 12vh 16vh 18vh 6.5vh 28.5vh 19vh;
    padding: 0pt 4vw;
    justify-items: center;
    background-color: #fff;
}

.riot-logo {
    width: 170px;
    align-self: flex-end;
}

.title {
    align-self: flex-end;

     /* FONT */
    
    font-size: 23pt;
    color: black
}



/* <---------- Formulário ----------> */


.form {
    width: 100%;
}

.i-login {
    margin: 0;
    border: 0;
    border-radius: 3pt;
    margin-bottom: 2vh;
    height: 6vh;
    width: 100%;
    background-color: rgb(244, 244, 244);

    /* FONT */
    
    font-size: 8pt;
    font-weight: 800;
} .i-login::placeholder {
    padding: 8pt;
}

    .alt-login {
        width: 100%;
    }

    .alt-login-container {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-areas: "f g a"
                             "s s s";
        height: 4rem;
    }

        .alt-login-item {
            border-radius: 4pt;
            display: flex;
            justify-content: center;
            align-content: center;
        }

        .al-facebook {
            background-color: rgb(41, 108, 214);
            grid-area: f;

        } .img-facebook {
            width: 11pt;
            /* filter: contrast(0) brightness(2); */
            align-self: center;

        }



        .al-google {
            background-color: rgb(255, 255, 255);
            grid-area: g;

        } .img-google {
            width: 11pt;
            align-self: center;

        }

        

        .al-apple {      
            background-color: rgb(20, 20, 20);
            grid-area: a;
            
        } .img-apple {
            width: 11pt;
            filter: contrast(0) brightness(2);
            align-self: center;

        }



.signedin {
    align-self: flex-start;
    justify-self: self-start;
    grid-area: s
}











/* <---------- Login alternativa ----------> */


.container-cb {
  display: flex;
  position: relative;
  cursor: pointer;
  font-size: 11.5pt;
  font-weight: 200;
  color: rgb(131, 131, 131);
  align-items: center

}

.container-cb input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  background-color: rgb(237, 237, 237);
}

.checkmark {
  top: 0;
  left: 0;
  height: 1.4rem;
  width: 1.4rem;
  background-color: rgb(236, 236, 236);
  border-radius: 3pt;
  margin-right: 0.5rem;
}

.container-cb:hover input ~ .checkmark {
    background-color: rgb(221, 221, 221);
}

.container-cb input:checked ~ .checkmark {
    background-color: rgb(49, 128, 218);
}










/* <---------- Botão de login ----------> */

.btn-area {
    justify-content: center;
    align-content: center;
    display: flex;
}

.btn-signin {
    width: 60pt;
    height: 60pt;
    border-radius: 30%;
    border: 1px solid rgb(231, 231, 231);
    align-self: center;
    background-color: rgb(242, 242, 242);
    cursor: pointer;
    transition: 300ms;
} .btn-signin span {

    color: rgb(231, 231, 231);;
}

    .btn-signin:hover {
        background-color: rgb(246, 246, 246);
        padding: 1px;
  
    }




/* <---------- Mais ----------> */

.more {
    display: grid;
    justify-items: center;
    align-content: flex-end;


    flex-direction: row;

    align-self: center;
} .help {
     /* FONT */
    
    font-size: 8pt;
    font-weight: 800;
    text-decoration: none;
    color: rgb(187, 187, 187)
}

.version {
    display: block;
    position: absolute;
    justify-self: flex-end;
    top: 90vh;
}

</style>