<template>

    <div id="header" class="header" onload="headerFixe(window.location.href)">
        <router-link to="/" class="header__image"><img class="header__logo" src="@/assets/img/LogoHeader.svg" alt="logo agemo"></router-link>
        <nav class="header__navigation desktop">
            <router-link class="header__lien -principal || primaryBtn " to="/Modeles">
            <span>Personnalise</span>
            </router-link>
            <router-link class="header__lien" to="/Collaborations">Collaborations</router-link>
            <router-link class="header__lien" to="/Galerie">Communauté</router-link>
            <router-link class="header__lien" to="/Engagement">Engagements</router-link>
        </nav>
        <div class="IconesHeader">
            <router-link class="header__lien -icone" to="/Compte">
                <svg class="header__icone" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 12C12.7614 12 15 9.76142 15 7C15 4.23858 12.7614 2 10 2C7.23858 2 5 4.23858 5 7C5 9.76142 7.23858 12 10 12ZM10 14C13.866 14 17 10.866 17 7C17 3.13401 13.866 0 10 0C6.13401 0 3 3.13401 3 7C3 10.866 6.13401 14 10 14Z"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18 18.9999C18 18.4477 17.5523 18 17 18H10.0083C10.0056 18 10.0028 18 10 18H3.00001C2.44766 18 2.00001 18.4477 2.00001 18.9999V21C2.00001 21.5523 1.55229 22 1 22C0.447717 22 0 21.5523 0 21V18.9999C0 17.343 1.34321 16 3.00001 16H9.99169C9.99445 16 9.99721 16 9.99997 16H17C18.6568 16 20 17.343 20 18.9999V21C20 21.5523 19.5523 22 19 22C18.4477 22 18 21.5523 18 21V18.9999Z"/>
                </svg>
            </router-link>
            <router-link class="header__lien -icone" to="/Panier">
                <svg class="header__icone" width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.44806 1.53606C8.76617 1.1119 8.68021 0.510173 8.25606 0.192057C7.8319 -0.12606 7.23017 -0.0400982 6.91206 0.384057L4.32006 3.84006H2.99048H1.92H0.96C0.429807 3.84006 0 4.26987 0 4.80006C0 5.33025 0.429807 5.76006 0.96 5.76006H1.56952L3.79429 13.0411C4.041 13.8485 4.78621 14.4001 5.63048 14.4001H11.52H18.0281C18.8545 14.4001 19.5882 13.8712 19.8495 13.0872L22.2919 5.76006H23.04C23.5702 5.76006 24 5.33025 24 4.80006C24 4.26987 23.5702 3.84006 23.04 3.84006H22.08H20.9081H19.6801L17.0881 0.384057C16.7699 -0.0400982 16.1682 -0.12606 15.7441 0.192057C15.3199 0.510173 15.2339 1.1119 15.5521 1.53606L17.2801 3.84006H6.72005L8.44806 1.53606ZM4.78906 5.76006C4.7959 5.76013 4.80274 5.76013 4.80958 5.76006H19.1905C19.1974 5.76013 19.2042 5.76013 19.2111 5.76006H20.2681L18.0281 12.4801L11.52 12.4801L5.63048 12.4801L3.57715 5.76006H4.78906Z" />
                </svg>
            </router-link>
            <div class="burgerOpen interactif header__lien -icone" @click="menuBurger('open')">
                <svg class="header__icone" width="29" height="20" viewBox="0 0 29 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 9.828C0 9.37071 0.370708 9 0.828 9H27.324C27.7813 9 28.152 9.37071 28.152 9.828C28.152 10.2853 27.7813 10.656 27.324 10.656H0.828C0.370708 10.656 0 10.2853 0 9.828Z" fill="#170D42"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.828C0 0.370708 0.370708 0 0.828 0H27.324C27.7813 0 28.152 0.370708 28.152 0.828C28.152 1.28529 27.7813 1.656 27.324 1.656H0.828C0.370708 1.656 0 1.28529 0 0.828Z" fill="#170D42"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.171997 18.664C0.171997 18.2067 0.542705 17.836 0.999997 17.836H27.496C27.9533 17.836 28.324 18.2067 28.324 18.664C28.324 19.1213 27.9533 19.492 27.496 19.492H0.999997C0.542705 19.492 0.171997 19.1213 0.171997 18.664Z" fill="#170D42"/>
                </svg>
            </div>
            <div class="croixMenu mobile" @click="menuBurger('close')">
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.28033 0.21967C0.987438 -0.0732233 0.512564 -0.0732233 0.219671 0.21967C-0.0732222 0.512563 -0.0732222 0.987437 0.219671 1.28033L10.1893 11.25L0.21967 21.2197C-0.0732233 21.5126 -0.0732233 21.9874 0.21967 22.2803C0.512563 22.5732 0.987437 22.5732 1.28033 22.2803L11.25 12.3107L20.8436 21.9043C21.1365 22.1972 21.6114 22.1972 21.9043 21.9043C22.1972 21.6114 22.1972 21.1365 21.9043 20.8436L12.3107 11.25L21.9043 1.65639C22.1972 1.3635 22.1972 0.888626 21.9043 0.595732C21.6114 0.302839 21.1365 0.30284 20.8436 0.595732L11.25 10.1893L1.28033 0.21967Z" fill="#fff"/>
                </svg>
            </div>
        </div>
        <nav class="header__navigation header__navigationMobile mobile">
            <router-link class="header__lien -principal || primaryBtn " to="/Modeles">
            <span>Personnalise</span>
            </router-link>
            <router-link class="header__lien" to="/Collaborations">Collaborations</router-link>
            <router-link class="header__lien" to="/Galerie">Communauté</router-link>
            <router-link class="header__lien" to="/Engagement">Engagements</router-link>
        </nav>
    </div>

</template>

<script>
export default {
    name: 'Header',

    methods: {
        menuBurger(oc) {
            let open = document.querySelector("#header")
            console.log(open)

            if(oc === "open") {
                open.classList.add("burgerActive")
            }
            else
            {
                open.classList.remove("burgerActive")
            }
        },
    }
}


</script>


<style lang="scss">

.interactif {
    cursor: pointer;
}

@media screen and (min-width: 960px) { 

    a.header__lien.router-link-exact-active {
            text-decoration: $colorText underline;
    }

    a.header__lien:hover {
        text-decoration: $colorText underline;
    }
    
    .header {
        position: fixed;
        width: 100%;
        background: #FFFFFF;
        height: 4.5vw;
        display: flex;
        z-index: 12;
        align-items: center;
    }

    .descendre {
        padding-top: 5%;
    }

    .header__navigation{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 40%;
        margin-left: 10%;
        margin-right: 15%;
    }

    .header__image{
        margin: 9px 32px ;
        display: flex;
    }

    .IconesHeader{
        justify-content: space-between;
        display: flex;
        width: 8%;
    }

    .header__logo{
        height : 5vw;
        width: 80%;
    }

    .header__icone{
        margin: auto;
        margin-left: 5%;
        fill: $colorAction;
    }

    .-icone{
        display: flex;
        padding: 10%;
        border: 2px solid $colorAction;
        border-radius: 10px;
        &:hover {
            background-color: $colorAction;
            transition: 0.5s;
        }
        &:hover .header__icone {
            fill: white;
            transition: 0.5s;
        }
    }

    .header__lien{
        text-decoration: none;
        font-family: $fontFamily; 
        font-weight: 500;
        font-style: normal;
        font-size: 100%;
    }

    .burgerOpen{
        display: none;
    }
}


@media screen and (max-width: 960px) { 

    .header {
        display: flex;
        align-items: center;
        margin: 5%;
    }

    .header__navigation {
        display: none;
    }

    .burgerOpen{
        margin: auto;
        border: none!important;
    }

    .IconesHeader{
        display: flex;
    }

    .header__logo{
        width: 82%;
    }

    .header__icone{
        fill: $colorAction;
        margin: auto;
    }

    .-icone{
        display: flex;
        padding: 10%;
        border: 2px solid $colorAction;
        border-radius: 10px;
        margin-right: 15%;
    }

    .header__lien{
        text-decoration: none;
        font-family: $fontFamily; 
        font-weight: 500;
        font-style: normal;
        font-size: 100%;
    }

    .croixMenu{
        display: none;
    }

    .burgerActive {
        padding-bottom: 50vh;
        padding-top: 5vh;
        background-color: $colorText;
        margin: initial!important;
        display: block;
        .header__image{
            margin-left: 25%;
            display: flex;
            justify-content: center;
            width: 50%;
            position: absolute;
        }
        .IconesHeader {

            margin-left: 5%;

            .header__lien{
            display: none;
            }
        }

        .croixMenu {
            display: flex!important;
            padding-top: 3.5%;
            margin-left: 85%;
        }

        .header__navigationMobile{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            height: 30vh;
            margin-top: 25%;
            & a{
                text-decoration: none;
                color: white;
            }
        }
        
       
    }

}




</style>