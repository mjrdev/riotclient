<template>
    <div class="l">
        <img class="riot-logo" width="100px" src="https://cdn1.dotesports.com/wp-content/uploads/sites/3/2022/02/21162720/riot-games-new-logo.jpg" alt=""/>
        <h2 class="title">Sing in</h2>

        <input class="i-login" type="text" placeholder="USERNAME">
        <input class="i-login" type="text" placeholder="PASSWORD">
        <div class="alt-login">
            <div class="alt-login-item al-facebook">f</div>
            <div class="alt-login-item al-google">g</div>
            <div class="alt-login-item al-apple">a</div>

            <div class="signedin">
                <span>
                    <input type="checkbox"> Stay signed in
                </span>
            </div>
        </div>
        <button class="btn-signin"> --> </button>

        <div class="more">
            <a class="help" href="http://a.com">CAN'T SING IN</a>
            <a class="help" href="http://a.com">CREATE ACCOUNT</a>
        </div>
        <p class="version">version</p>
    </div>
</template>
<script>
export default {
    name: "Login"
}
</script>

<style>
body {
    font-family: Arial, Helvetica, sans-serif;
}

.l {
    display: grid;
    grid-template-columns: 1fr;
    padding: 0pt 4vw;
    justify-items: center;
}

.riot-logo {
    width: 170px;
    align-self: center;
}

.title {
    align-self: flex-end;

     /* FONT */
    
    font-size: 23pt;
}

.i-login {
    padding: 0 10pt;
    margin: 0;
    border: 0;
    border-radius: 3pt;
    background-color: rgb(231, 231, 231);
    margin-bottom: 2vh;
    width: 100%;

    /* FONT */
    
    font-size: 8pt;
    font-weight: 800;
}

    .alt-login {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-areas: "f g a"
                             "s s s";
    }

        .alt-login-item {
            border-radius: 6pt;
        }

        .al-facebook {
            background-color: rgb(41, 108, 214);
            grid-area: f;
        }
        .al-google {
            background-color: rgb(255, 255, 255);
            grid-area: g;
        }
        .al-apple {
            background-color: rgb(23, 23, 23);
            grid-area: a;
            
        }

.signedin {
    align-self: flex-start;
    justify-self: self-start;
    grid-area: s;

} .btn-signin {
    width: 60pt;
    height: 60pt;
    border-radius: 30%;
    border: 1px solid rgb(231, 231, 231);
}

.more {
    display: grid;
    justify-items: center;
    align-content: flex-end;


    flex-direction: row;

    align-items: flex-end;
    justify-content: end;
} .help, .version {
     /* FONT */
    
    font-size: 8pt;
    font-weight: 800;
    text-decoration: none;
    color: rgb(187, 187, 187)
}

</style>