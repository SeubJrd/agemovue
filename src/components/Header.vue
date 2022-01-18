<template>

    <div class="header">
        <router-link to="/" class="header__image"><img class="header__logo" src="@/assets/img/LogoHeader.svg" alt="logo agemo"></router-link>
        <nav class="header__navigation">
            <router-link class="header__lien -principal || primaryBtn " to="/Modeles">
            <span>Personnaliser</span>
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
            <router-link class="header__lien -icone" to="#">
                <svg class="header__icone" width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.44806 1.53606C8.76617 1.1119 8.68021 0.510173 8.25606 0.192057C7.8319 -0.12606 7.23017 -0.0400982 6.91206 0.384057L4.32006 3.84006H2.99048H1.92H0.96C0.429807 3.84006 0 4.26987 0 4.80006C0 5.33025 0.429807 5.76006 0.96 5.76006H1.56952L3.79429 13.0411C4.041 13.8485 4.78621 14.4001 5.63048 14.4001H11.52H18.0281C18.8545 14.4001 19.5882 13.8712 19.8495 13.0872L22.2919 5.76006H23.04C23.5702 5.76006 24 5.33025 24 4.80006C24 4.26987 23.5702 3.84006 23.04 3.84006H22.08H20.9081H19.6801L17.0881 0.384057C16.7699 -0.0400982 16.1682 -0.12606 15.7441 0.192057C15.3199 0.510173 15.2339 1.1119 15.5521 1.53606L17.2801 3.84006H6.72005L8.44806 1.53606ZM4.78906 5.76006C4.7959 5.76013 4.80274 5.76013 4.80958 5.76006H19.1905C19.1974 5.76013 19.2042 5.76013 19.2111 5.76006H20.2681L18.0281 12.4801L11.52 12.4801L5.63048 12.4801L3.57715 5.76006H4.78906Z" />
                </svg>
            </router-link>
        </div>
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
    align-items: center;
}

.header__navigation{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    margin-left: 10%;
    margin-right: 10%;
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
    font-size: 18px;
}

.header__logo {
    width: 80%;
}
</style>