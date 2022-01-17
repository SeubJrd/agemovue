<template>

    <div class="header">
        <router-link to="/" class="header__image"><img class="header__logo" src="@/assets/img/LogoHeader.svg" alt="logo agemo"></router-link>
        <nav class="header__navigation">
            <router-link class="header__lien -principal" to="#">Personnaliser</router-link>
            <router-link class="header__lien" to="/Collaborations">Collaborations</router-link>
            <router-link class="header__lien" to="/Galerie">Communauté</router-link>
            <router-link class="header__lien" to="/Engagements">Engagements</router-link>
            <router-link class="header__lien -icone" to="/Compte">
                <svg class="header__icone" width="28" height="31" viewBox="0 0 28 31" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M2.18043 21.5137C3.57653 20.1176 5.47005 19.3333 7.44444 19.3333H20.3333C22.3077 19.3333 24.2012 20.1176 25.5973 21.5137C26.9935 22.9098 27.7778 24.8033 27.7778 26.7777V29.9999C27.7778 30.5522 27.3301 30.9999 26.7778 30.9999C26.2255 30.9999 25.7778 30.5522 25.7778 29.9999V26.7777C25.7778 25.3337 25.2042 23.9489 24.1831 22.9279C23.1621 21.9069 21.7773 21.3333 20.3333 21.3333H7.44444C6.00049 21.3333 4.61567 21.9069 3.59464 22.9279C2.57361 23.9489 2 25.3337 2 26.7777V29.9999C2 30.5522 1.55228 30.9999 1 30.9999C0.447715 30.9999 0 30.5522 0 29.9999V26.7777C0 24.8033 0.784323 22.9098 2.18043 21.5137Z" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M13.889 2C10.8821 2 8.44458 4.43756 8.44458 7.44445C8.44458 10.4513 10.8821 12.8889 13.889 12.8889C16.8959 12.8889 19.3335 10.4513 19.3335 7.44445C19.3335 4.43756 16.8959 2 13.889 2ZM6.44458 7.44445C6.44458 3.33299 9.77757 0 13.889 0C18.0005 0 21.3335 3.33299 21.3335 7.44445C21.3335 11.5559 18.0005 14.8889 13.889 14.8889C9.77757 14.8889 6.44458 11.5559 6.44458 7.44445Z" />
                </svg>
            </router-link>
            <router-link class="header__lien -icone" to="#">
                <svg class="header__icone" width="32" height="30" viewBox="0 0 32 30" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M11.6666 27.3334C11.4825 27.3334 11.3333 27.4826 11.3333 27.6667C11.3333 27.8508 11.4825 28 11.6666 28C11.8507 28 11.9999 27.8508 11.9999 27.6667C11.9999 27.4826 11.8507 27.3334 11.6666 27.3334ZM9.33325 27.6667C9.33325 26.378 10.3779 25.3334 11.6666 25.3334C12.9553 25.3334 13.9999 26.378 13.9999 27.6667C13.9999 28.9554 12.9553 30 11.6666 30C10.3779 30 9.33325 28.9554 9.33325 27.6667Z" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M26.3333 27.3334C26.1492 27.3334 26 27.4826 26 27.6667C26 27.8508 26.1492 28 26.3333 28C26.5174 28 26.6667 27.8508 26.6667 27.6667C26.6667 27.4826 26.5174 27.3334 26.3333 27.3334ZM24 27.6667C24 26.378 25.0447 25.3334 26.3333 25.3334C27.622 25.3334 28.6667 26.378 28.6667 27.6667C28.6667 28.9554 27.622 30 26.3333 30C25.0447 30 24 28.9554 24 27.6667Z" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M0 1C0 0.447715 0.447715 0 1 0H6.33333C6.80996 0 7.22034 0.336385 7.31389 0.803743L8.48735 6.66667H30.3333C30.6314 6.66667 30.9139 6.79959 31.1038 7.02922C31.2938 7.25885 31.3715 7.56124 31.3156 7.85399L29.1809 19.0482C29.0132 19.8922 28.554 20.6504 27.8837 21.19C27.216 21.7275 26.3813 22.014 25.5245 22H12.5822C11.7254 22.014 10.8907 21.7275 10.223 21.19C9.55278 20.6505 9.09365 19.8925 8.92592 19.0486C8.92589 19.0485 8.92595 19.0488 8.92592 19.0486L6.69674 7.91104C6.68896 7.88007 6.68262 7.84851 6.67781 7.81647L5.51365 2H1C0.447715 2 0 1.55228 0 1ZM8.88764 8.66667L10.8875 18.6585C10.9637 19.0422 11.1724 19.3868 11.4771 19.6321C11.7818 19.8774 12.1631 20.0077 12.5542 20.0002L12.5733 20H25.5333L25.5525 20.0002C25.9436 20.0077 26.3248 19.8774 26.6295 19.6321C26.9334 19.3875 27.1418 19.0441 27.2185 18.6618C27.2187 18.6607 27.2189 18.6596 27.2192 18.6585L29.1246 8.66667H8.88764Z" />
                </svg>
            </router-link>
        </nav>
        </div>

</template>

<script>
export default {
    name: 'Header',
}
</script>


<style lang="scss">

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header__navigation{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 80%;
}

.header__image{
    margin: 9px 32px ;
    display: flex;
}

.header__logo{
    height : 5vw;
}

.header__icone{
    fill: $colorTitle;
}

.-icone{
    border-radius: 100%;
    padding: 0.4vw 0 0 0;
    width: 3vw;
    height: 3vw;
    text-align: center;
    &:hover {
        background-color: #6970FF;
        svg {
            fill : white;
        }
        transition: 1s;
    }
}

.header__lien{
    text-decoration: none;
    font-family: $fontFamily; 
    font-weight: 500;
    font-style: normal;
    font-size: 1vw;
}

.-principal{
    background-color: $colorAction;
    height: 41px;
    width: 154px; 
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FAF8FF;
    border-radius: 15px;
    font-size: 1vw;
    &:hover {
        background : $horizontalGradient;
        transition: 0.3s;
        
    }
}

.header__logo {
    width: 80%;
}
</style>