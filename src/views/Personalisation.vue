<template>
    <div class="perso">

        <ul class="timeline">
            <li class="timeline__item -active">
                <span>milieu</span>
            </li>
            <li class="timeline__item"><span>milieu</span></li>
            <li class="timeline__item"><span>milieu</span></li>
            <li class="timeline__item"><span>milieu</span></li>
            <li class="timeline__item"><span>milieu</span></li>
            <li class="timeline__item"><span>milieu</span></li>
            <li class="timeline__item"><span>milieu</span></li>
            <li class="timeline__item"><span>milieu</span></li>
            <li class="timeline__item"><span>milieu</span></li>
            <li class="timeline__item"><span>milieu</span></li>
        </ul>       

        <div class="jeVeuxDesChaussures canvas">
            <!-- Arrières de chaussures -->
            <img class="default blanc Arriere" src="@/assets/img/vue1/vue1-arriere_blanc.png" alt="Arrière de la chaussure">
            <img class="noir Arriere" src="@/assets/img/vue1/vue1-arriere_noir.png" alt="Arrière de la chaussure">
            <img class="gris Arriere" src="@/assets/img/vue1/vue1-arriere_gris.png" alt="Arrière de la chaussure">
            <img class="rouge Arriere" src="@/assets/img/vue1/vue1-arriere_rouge.png" alt="Arrière de la chaussure">
            <img class="vert Arriere" src="@/assets/img/vue1/vue1-arriere_vert.png" alt="Arrière de la chaussure">
            <img class="lavande Arriere" src="@/assets/img/vue1/vue1-arriere_lavande.png" alt="Arrière de la chaussure">
            <img class="rose Arriere" src="@/assets/img/vue1/vue1-arriere_rose.png" alt="Arrière de la chaussure">
            <img class="bleu Arriere" src="@/assets/img/vue1/vue1-arriere_bleu.png" alt="Arrière de la chaussure">

            <!-- Corps arrières de chaussures -->
            <img class="default blanc Corps_arriere" src="@/assets/img/vue1/vue1-corpsarr_blanc.png" alt="Corps Arrière">
            <img class="noir Corps_arriere" src="@/assets/img/vue1/vue1-corpsarr_noir.png" alt="Corps Arrière">
            <img class="gris Corps_arriere" src="@/assets/img/vue1/vue1-corpsarr_gris.png" alt="Arrière de la chaussure">
            <img class="rouge Corps_arriere" src="@/assets/img/vue1/vue1-corpsarr_rouge.png" alt="Arrière de la chaussure">
            <img class="vert Corps_arriere" src="@/assets/img/vue1/vue1-corpsarr_vert.png" alt="Arrière de la chaussure">
            <img class="lavande Corps_arriere" src="@/assets/img/vue1/vue1-corpsarr_lavande.png" alt="Arrière de la chaussure">
            <img class="rose Corps_arriere" src="@/assets/img/vue1/vue1-corpsarr_rose.png" alt="Arrière de la chaussure">
            <img class="bleu Corps_arriere" src="@/assets/img/vue1/vue1-corpsarr_bleu.png" alt="Arrière de la chaussure">

            <!-- Corps avant de chaussures -->
            <img class="default blanc Corps_avant" src="@/assets/img/vue1/vue1-corpsavant_blanc.png" alt="Corps avant">
            <img class="gris Corps_avant" src="@/assets/img/vue1/vue1-corpsavant_gris.png" alt="Corps avant">
            <img class="noir Corps_avant" src="@/assets/img/vue1/vue1-corpsavant_noir.png" alt="Arrière de la chaussure">
            <img class="rouge Corps_avant" src="@/assets/img/vue1/vue1-corpsavant_rouge.png" alt="Arrière de la chaussure">
            <img class="vert Corps_avant" src="@/assets/img/vue1/vue1-corpsavant_vert.png" alt="Arrière de la chaussure">
            <img class="lavande Corps_avant" src="@/assets/img/vue1/vue1-corpsavant_lavande.png" alt="Arrière de la chaussure">
            <img class="rose Corps_avant" src="@/assets/img/vue1/vue1-corpsavant_rose.png" alt="Arrière de la chaussure">
            <img class="bleu Corps_avant" src="@/assets/img/vue1/vue1-corpsavant_bleu.png" alt="Arrière de la chaussure">

            <!-- Doublures de chaussures -->
            <img class="default blanc Doublure" src="@/assets/img/vue1/vue1-doublure_blanc.png" alt="Doublure">
            <img class="noir Doublure" src="@/assets/img/vue1/vue1-doublure_noir.png" alt="Doublure">
            <img class="gris Doublure" src="@/assets/img/vue1/vue1-doublure_gris.png" alt="Arrière de la chaussure">
            <img class="rouge Doublure" src="@/assets/img/vue1/vue1-doublure_rouge.png" alt="Arrière de la chaussure">
            <img class="vert Doublure" src="@/assets/img/vue1/vue1-doublure_vert.png" alt="Arrière de la chaussure">
            <img class="lavande Doublure" src="@/assets/img/vue1/vue1-doublure_lavande.png" alt="Arrière de la chaussure">
            <img class="rose Doublure" src="@/assets/img/vue1/vue1-doublure_rose.png" alt="Arrière de la chaussure">
            <img class="bleu Doublure" src="@/assets/img/vue1/vue1-doublure_bleu.png" alt="Arrière de la chaussure">

            <!-- Lacets de chaussures -->
            <img class="default blanc Lacet" src="@/assets/img/vue1/vue1-lacet_blanc.png" alt="Lacet">
            <img class="noir Lacet" src="@/assets/img/vue1/vue1-lacet_noir.png" alt="Lacet">
            <img class="gris Lacet" src="@/assets/img/vue1/vue1-lacet_gris.png" alt="Arrière de la chaussure">
            <img class="rouge Lacet" src="@/assets/img/vue1/vue1-lacet_rouge.png" alt="Arrière de la chaussure">
            <img class="vert Lacet" src="@/assets/img/vue1/vue1-lacet_vert.png" alt="Arrière de la chaussure">
            <img class="lavande Lacet" src="@/assets/img/vue1/vue1-lacet_lavande.png" alt="Arrière de la chaussure">
            <img class="rose Lacet" src="@/assets/img/vue1/vue1-lacet_rose.png" alt="Arrière de la chaussure">
            <img class="bleu Lacet" src="@/assets/img/vue1/vue1-lacet_bleu.png" alt="Arrière de la chaussure">

            <!-- languettes de chaussures -->
            <img class="default blanc Languette" src="@/assets/img/vue1/vue1-languette_blanc.png" alt="Languette">
            <img class="Languette noir" src="@/assets/img/vue1/vue1-languette_noir.png" alt="Languette">
            <img class="gris Languette" src="@/assets/img/vue1/vue1-languette_gris.png" alt="Arrière de la chaussure">
            <img class="rouge Languette" src="@/assets/img/vue1/vue1-languette_rouge.png" alt="Arrière de la chaussure">
            <img class="vert Languette" src="@/assets/img/vue1/vue1-languette_vert.png" alt="Arrière de la chaussure">
            <img class="lavande Languette" src="@/assets/img/vue1/vue1-languette_lavande.png" alt="Arrière de la chaussure">
            <img class="rose Languette" src="@/assets/img/vue1/vue1-languette_rose.png" alt="Arrière de la chaussure">
            <img class="bleu Languette" src="@/assets/img/vue1/vue1-languette_bleu.png" alt="Arrière de la chaussure">

            <!-- Milieux de chaussures -->
            <img class="default blanc Milieu" src="@/assets/img/vue1/vue1-milieu_blanc.png" alt="Milieu">
            <img class="noir Milieu" src="@/assets/img/vue1/vue1-milieu_noir.png" alt="Milieu">
            <img class="gris Milieu" src="@/assets/img/vue1/vue1-milieu_gris.png" alt="Arrière de la chaussure">
            <img class="rouge Milieu" src="@/assets/img/vue1/vue1-milieu_rouge.png" alt="Arrière de la chaussure">
            <img class="vert Milieu" src="@/assets/img/vue1/vue1-milieu_vert.png" alt="Arrière de la chaussure">
            <img class="lavande Milieu" src="@/assets/img/vue1/vue1-milieu_lavande.png" alt="Arrière de la chaussure">
            <img class="rose Milieu" src="@/assets/img/vue1/vue1-milieu_rose.png" alt="Arrière de la chaussure">
            <img class="bleu Milieu" src="@/assets/img/vue1/vue1-milieu_bleu.png" alt="Arrière de la chaussure">

            <!-- Renforts de chaussures -->
            <img class="default blanc Renfort" src="@/assets/img/vue1/vue1-renfort_blanc.png" alt="Renfort">
            <img class="noir Renfort" src="@/assets/img/vue1/vue1-renfort_noir.png" alt="Renfort">
            <img class="gris Renfort" src="@/assets/img/vue1/vue1-renfort_gris.png" alt="Arrière de la chaussure">
            <img class="rouge Renfort" src="@/assets/img/vue1/vue1-renfort_rouge.png" alt="Arrière de la chaussure">
            <img class="vert Renfort" src="@/assets/img/vue1/vue1-renfort_vert.png" alt="Arrière de la chaussure">
            <img class="lavande Renfort" src="@/assets/img/vue1/vue1-renfort_lavande.png" alt="Arrière de la chaussure">
            <img class="rose Renfort" src="@/assets/img/vue1/vue1-renfort_rose.png" alt="Arrière de la chaussure">
            <img class="bleu Renfort" src="@/assets/img/vue1/vue1-renfort_bleu.png" alt="Arrière de la chaussure">

            <!-- Semelles de chaussures -->
            <img class="default blanc Semelle" src="@/assets/img/vue1/vue1-semelle_blanc.png" alt="Semelle">
            <img class="noir Semelle" src="@/assets/img/vue1/vue1-semelle_noir.png" alt="Semelle">
            <img class="gris Semelle" src="@/assets/img/vue1/vue1-semelle_gris.png" alt="Arrière de la chaussure">
            <img class="rouge Semelle" src="@/assets/img/vue1/vue1-semelle_rouge.png" alt="Arrière de la chaussure">
            <img class="vert Semelle" src="@/assets/img/vue1/vue1-semelle_vert.png" alt="Arrière de la chaussure">
            <img class="lavande Semelle" src="@/assets/img/vue1/vue1-semelle_lavande.png" alt="Arrière de la chaussure">
            <img class="rose Semelle" src="@/assets/img/vue1/vue1-semelle_rose.png" alt="Arrière de la chaussure">
            <img class="bleu Semelle" src="@/assets/img/vue1/vue1-semelle_bleu.png" alt="Arrière de la chaussure">

            <!-- Toeboxes de chaussures -->
            <img class="default blanc Toe_box" src="@/assets/img/vue1/vue1-toebox_blanc.png" alt="Toe Box">
            <img class="noir Toe_box" src="@/assets/img/vue1/vue1-toebox_noir.png" alt="Toe Box">
            <img class="gris Toe_box" src="@/assets/img/vue1/vue1-toebox_gris.png" alt="Arrière de la chaussure">
            <img class="rouge Toe_box" src="@/assets/img/vue1/vue1-toebox_rouge.png" alt="Arrière de la chaussure">
            <img class="vert Toe_box" src="@/assets/img/vue1/vue1-toebox_vert.png" alt="Arrière de la chaussure">
            <img class="lavande Toe_box" src="@/assets/img/vue1/vue1-toebox_lavande.png" alt="Arrière de la chaussure">
            <img class="rose Toe_box" src="@/assets/img/vue1/vue1-toebox_rose.png" alt="Arrière de la chaussure">
            <img class="bleu Toe_box" src="@/assets/img/vue1/vue1-toebox_bleu.png" alt="Arrière de la chaussure">



        </div>
       
        <div class ="infoPartagePrix">
            <a class="bulle" href="#inspiPerso">
                <div class ="infoPartagePrix_inspiration">
                    <p class ="inspiration_texte">Besoin d'inspiration ?</p>
                </div>
            </a>
            <div class ="infoPartagePrix_informations">
                 <a href=""><svg class ="informations_partage" width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1834 2.23077C15.9864 2.23077 14.9941 3.21732 14.9941 4.46154C14.9941 4.85235 15.092 5.21774 15.2634 5.53512C15.2728 5.54936 15.2819 5.56392 15.2907 5.57879C15.3032 5.6 15.3149 5.62149 15.3257 5.64321C15.7146 6.27601 16.4058 6.69231 17.1834 6.69231C18.3804 6.69231 19.3728 5.70577 19.3728 4.46154C19.3728 3.21732 18.3804 2.23077 17.1834 2.23077ZM14.1714 7.40212C14.9313 8.19643 15.9972 8.69231 17.1834 8.69231C19.5093 8.69231 21.3728 6.78593 21.3728 4.46154C21.3728 2.13716 19.5093 0.230774 17.1834 0.230774C14.8576 0.230774 12.9941 2.13716 12.9941 4.46154C12.9941 4.88153 13.0549 5.28787 13.1683 5.67178L7.43794 9.05934C6.67813 8.26508 5.61221 7.76923 4.42603 7.76923C2.10019 7.76923 0.236679 9.67561 0.236679 12C0.236679 14.3244 2.10019 16.2308 4.42603 16.2308C5.61241 16.2308 6.67851 15.7347 7.43834 14.9402L13.1697 18.3234C13.0554 18.7087 12.9941 19.1167 12.9941 19.5384C12.9941 21.8628 14.8576 23.7692 17.1834 23.7692C19.5093 23.7692 21.3728 21.8628 21.3728 19.5384C21.3728 17.2141 19.5093 15.3077 17.1834 15.3077C15.999 15.3077 14.9345 15.8021 14.1749 16.5943L8.44126 13.2098C8.55459 12.826 8.61538 12.4198 8.61538 12C8.61538 11.58 8.55453 11.1736 8.44109 10.7897L14.1714 7.40212ZM6.28293 10.817C6.29392 10.8392 6.3058 10.8611 6.31858 10.8827C6.32763 10.898 6.33701 10.913 6.34673 10.9276C6.51772 11.2447 6.61538 11.6097 6.61538 12C6.61538 12.3903 6.51771 12.7553 6.3467 13.0724C6.33688 13.0872 6.32739 13.1024 6.31826 13.1178C6.30561 13.1393 6.29384 13.161 6.28296 13.1829C5.89389 13.815 5.20309 14.2308 4.42603 14.2308C3.22901 14.2308 2.23668 13.2442 2.23668 12C2.23668 10.7558 3.22901 9.76923 4.42603 9.76923C5.20307 9.76923 5.89386 10.1849 6.28293 10.817ZM14.9941 19.5384C14.9941 19.1704 15.0809 18.8249 15.2342 18.5208C15.2584 18.4892 15.2809 18.4558 15.3017 18.4206C15.3254 18.3805 15.346 18.3393 15.3635 18.2974C15.7585 17.6981 16.4304 17.3077 17.1834 17.3077C18.3804 17.3077 19.3728 18.2942 19.3728 19.5384C19.3728 20.7827 18.3804 21.7692 17.1834 21.7692C15.9864 21.7692 14.9941 20.7827 14.9941 19.5384Z" fill="#170D42"/>
                    </svg></a>
                <p class ="informations_prix"> Prix : 90€</p>
            </div>
        </div>       
        
        <div class="perso__layer2">
            <span class="perso__menu">
                <a href="">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 1H2C1.44772 1 1 1.44772 1 2V8C1 8.55229 1.44772 9 2 9H8C8.55229 9 9 8.55229 9 8V2C9 1.44772 8.55229 1 8 1ZM2 0C0.895431 0 0 0.89543 0 2V8C0 9.10457 0.89543 10 2 10H8C9.10457 10 10 9.10457 10 8V2C10 0.895431 9.10457 0 8 0H2Z" fill="#170D42"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20 1H14C13.4477 1 13 1.44772 13 2V8C13 8.55229 13.4477 9 14 9H20C20.5523 9 21 8.55229 21 8V2C21 1.44772 20.5523 1 20 1ZM14 0C12.8954 0 12 0.89543 12 2V8C12 9.10457 12.8954 10 14 10H20C21.1046 10 22 9.10457 22 8V2C22 0.895431 21.1046 0 20 0H14Z" fill="#170D42"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20 13H14C13.4477 13 13 13.4477 13 14V20C13 20.5523 13.4477 21 14 21H20C20.5523 21 21 20.5523 21 20V14C21 13.4477 20.5523 13 20 13ZM14 12C12.8954 12 12 12.8954 12 14V20C12 21.1046 12.8954 22 14 22H20C21.1046 22 22 21.1046 22 20V14C22 12.8954 21.1046 12 20 12H14Z" fill="#170D42"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 13H2C1.44772 13 1 13.4477 1 14V20C1 20.5523 1.44772 21 2 21H8C8.55229 21 9 20.5523 9 20V14C9 13.4477 8.55229 13 8 13ZM2 12C0.895431 12 0 12.8954 0 14V20C0 21.1046 0.89543 22 2 22H8C9.10457 22 10 21.1046 10 20V14C10 12.8954 9.10457 12 8 12H2Z" fill="#170D42"/>
                    </svg>
                </a>
                
                <h1 class="nom-etape" id="Nom_etape"> Arrière </h1>
                <h3 class="num-etape" id="Num_etape"> 1/10 </h3>
                
                <div class="fleche-perso" id="previous">
                    <svg  width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg" @click="stepPicked('previous')">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.13885 15.7445C8.55003 16.1132 9.18226 16.0788 9.55097 15.6676C9.91968 15.2564 9.88524 14.6242 9.47406 14.2555L3.6131 8.99999L23 8.99999C23.5523 8.99999 24 8.55228 24 7.99999C24 7.44771 23.5523 6.99999 23 6.99999L3.6131 6.99999L9.47406 1.74451C9.88524 1.3758 9.91968 0.743571 9.55097 0.332386C9.18226 -0.0787996 8.55003 -0.113235 8.13885 0.255473L0.332396 7.25547C0.120862 7.44515 7.24222e-07 7.71586 6.99383e-07 7.99999C6.74544e-07 8.28411 0.120862 8.55482 0.332396 8.74451L8.13885 15.7445Z" fill="#170D42"/>
                    </svg>
                </div>
                <div class="fleche-perso" id="next">
                    <svg  width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg" @click="stepPicked('next')">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.8612 0.255483C15.45 -0.113224 14.8177 -0.078789 14.449 0.332396C14.0803 0.743581 14.1148 1.37581 14.5259 1.74452L20.3869 7H1C0.447715 7 0 7.44772 0 8C0 8.55229 0.447715 9 1 9H20.3869L14.5259 14.2555C14.1148 14.6242 14.0803 15.2564 14.449 15.6676C14.8177 16.0788 15.45 16.1132 15.8612 15.7445L23.6676 8.74452C23.8791 8.55483 24 8.28412 24 8C24 7.71588 23.8791 7.44517 23.6676 7.25548L15.8612 0.255483Z" fill="#170D42"/>
                    </svg>
                </div>
                
            </span>
            <span class="perso__layer2-milieu">
                <span class="menu-choix-custo">
                    <a  class="choix-custo" href="">
                        <img src="@/assets/Icones/couleurs.svg" alt="">
                        <h3>Couleurs</h3>
                    </a>
                    <a  class="choix-custo" href="">
                        <img src="@/assets/Icones/collab.svg" alt="">
                        <h3>Collaborations</h3>
                    </a>
                </span>
            </span>
            
            <span class="perso__btn-terminer">
                
                <a class="perso-reset" href=""><img  src="@/assets/Icones/reset.svg" alt=""></a>

                <button @click="screenShot" class="primaryBtn -fleche" ><span>Terminer</span>
                    <span class="icon-container"><svg class="fleche" version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 42 16.1"
                            enable-background="new 0 0 42 16.1" xml:space="preserve">
                            <path class="fleche__line" fill-rule="evenodd" clip-rule="evenodd" fill="#170D42"
                                d="M24.4,7.1H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h19.4" />
                            <path class="fleche__pointe" fill-rule="evenodd" clip-rule="evenodd" fill="#170D42"
                                d="M24.4,9.1l-5.9,5.3c-0.4,0.4-0.4,1-0.1,1.4s1,0.4,1.4,0.1l7.8-7
                       c0.2-0.2,0.3-0.5,0.3-0.7c0-0.3-0.1-0.6-0.3-0.7l-7.8-7.2c-0.4-0.4-1-0.3-1.4,0.1s-0.3,1,0.1,1.4l5.9,5.3" />
                        </svg>
                    </span>
                </button>
            </span>
        </div>

                <div class="perso__choix">

            

                    <div 
                        v-for="(label, index) in colors"
                        :key="index" class="choix__col"
                        @click="colorPicked($event, label)"
                        >
                            <div :class="`col__img${index + 1}`"></div>
                            <p class="col__txt">{{label}}</p>
                    </div>
        
    
                </div>

                <div id ="inspiPerso">
                    <div class ="inspiPerso_texte">
                        <h2 class ="inspiPerso_titre">Besoin d'inspiration ?</h2>
                        <p class ="inspiPerso_paragraphe"> Besoin d'inspiration pour faire ta customisation ? Penses à regarder les modèles réalisés par les créatifs. N'hésites pas à y partager ta propre création.</p>
                        <a class="inspiPerso_btn primaryBtn -fleche" href="./galerie.html"> <span>Accèdes à la galerie</span>
                            <span class="icon-container"><svg class="fleche" version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 42 16.1"
                                    enable-background="new 0 0 42 16.1" xml:space="preserve">
                                    <path class="fleche__line" fill-rule="evenodd" clip-rule="evenodd" fill="#170D42"
                                        d="M24.4,7.1H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h19.4" />
                                    <path class="fleche__pointe" fill-rule="evenodd" clip-rule="evenodd" fill="#170D42"
                                        d="M24.4,9.1l-5.9,5.3c-0.4,0.4-0.4,1-0.1,1.4s1,0.4,1.4,0.1l7.8-7 c0.2-0.2,0.3-0.5,0.3-0.7c0-0.3-0.1-0.6-0.3-0.7l-7.8-7.2c-0.4-0.4-1-0.3-1.4,0.1s-0.3,1,0.1,1.4l5.9,5.3" />
                                </svg></span>
                        </a>
                    </div>
                        <img class ="inspiPerso_image" src="@/assets/img/img_inspiration.svg" alt="image d'inspiration">
         
                   
                </div>

        
        
    </div>
</template>

<script>

//import axios from "axios";
import domtoimage from "dom-to-image-more";

var i = 0;

export default {
    data() {
        return {
            options: {
                element: "Arriere",
                color: null,
                view: null
            },
            colors: [
                'Blanc',
                'Noir',
                'Gris',
                'Rouge',
                'Vert',
                'Lavande',
                'Rose',
                'Bleu'
            ],
            elements: [
                'Arriere',
                'Corps_arriere',
                'Corps_avant',
                'Doublure',
                'Lacet',
                'Languette',
                'Milieu',
                'Renfort',
                'Semelle',
                'Toe_box'         
            ],
            names: [
                'Arrière',
                'Corps arrière',
                'Corps avant',
                'Doublure',
                'Lacet',
                'Languette',
                'Milieu',
                'Renfort',
                'Semelle',
                'Toe box'         
            ]
        }
    },
    computed: {
        colorActive: function() {
            return this.options.color
        },
        stepActive: function() {
            return this.options.element
        }
    },
    mounted() {
        this.canvas = document.querySelector('.canvas')
    },
    methods: {
        screenShot() {
            domtoimage
            .toJpeg(document.querySelector(".canvas"), { quality: 0.95 })
            .then( (dataUrl) => {
                var link = document.createElement("a");
                link.download = "my-image-name.jpeg";
                link.href = dataUrl;
                link.click();
            })
        },
        stepPicked(stepSelection) {
            var stepNom = document.querySelector("#Nom_etape")
            var stepNum = document.querySelector("#Num_etape")
            console.log(i)

            if (i <= 0 || i >= 9 ) {

                if (i == 0 && stepSelection == "previous") {
                    i = 0
                }
                else if (i == 0 && stepSelection == "next") {
                    i++
                }
                if (i == 9 && stepSelection == "next") {
                    i = 9
                }
                else if (i == 9 && stepSelection == "previous") {
                    i--
                }
            }
            else {
                if (stepSelection == "next") {
                    i++
                }
                else {
                    i--
                }
            }

            console.log(i)

            stepNom.innerHTML = this.names[i]
            stepNum.innerHTML = i+1 + "/10"
            this.options.element = this.elements[i]
        },
        colorPicked(event, label) {
            this.options.color = label.toLowerCase()

            this.canvas.querySelectorAll(`.${this.options.element}`).forEach( (item) => {
                    item.classList.remove('show')
            })

            this.canvas.querySelector(`.${this.options.element}.${this.options.color}`).classList.add('show')
            
        }
    }

}

</script>

<style lang="scss">

.timeline {
    list-style: none;
    display: flex;
    justify-content: space-between;
    position: relative;
    &::after{
        content: "";
        width: 95%;
        margin-left: 2%;
        border-top: 1px solid black;
        display: block;
        position: absolute;
        top: math.div($size, 2) + px;
        z-index: -9999;
    }
    &__item {
        &::before {
            content: "";
            width: $size + px;
            height: $size + px;
            display: block;
            margin: 0 auto 0.5rem;
            background-color: white;
            background-image: url(../assets/Icones/eclipse.svg);
            background-repeat: no-repeat;
            background-position: center;
        }
        span {
            opacity: 0;
        }
        &.-active {
            &::before {
                background-image: url(../assets/Icones/Etoile.svg);
            }
            span {
                opacity: 1;
            }
        }
    }
}

/* fin des styles timeline*/

/*styles perso*/


.perso__menu{
    display: flex;
    margin-left: 10%;
    margin-top: 5%;
    line-height: 3vh;
    grid-column: 1;
    align-items: center;
}

.nom-etape{
    margin-left: 5%;
    white-space: nowrap;
}

.num-etape{
    margin-left: 7%;
}

.fleche-perso{
    margin-left: 7%;
}

.choix-custo{
    display: flex;
    text-decoration: none;
    justify-content: center;
    width: 25%;
    align-items: center;
   // margin-left: 10%;
}

.choix-custo h3{
    margin-left: 10%;
}

.menu-choix-custo{
    display: flex;
    align-items: center;
    margin-top: 1.5%;
    justify-content: center;
    margin-left: 10%;
}

.perso__btn-terminer a{
    margin-left: 1%;
}

.perso__btn-terminer{
    justify-content: center;
    display: flex;
    margin-left: 16%;
}

.perso__layer2{
    display: grid;
    grid-template-columns: repeat(3);
    grid-auto-columns: 20% 60% 20%;
    margin-bottom: 5%;
}

.perso__layer2-milieu{
    grid-column: 2;
    display: none;
}

.perso__btn-terminer{
    grid-column: 3;
}

.perso__btn-terminer a{
    margin-left: 2%;
}

.perso-reset{
    margin-top: 5%;
    margin-right: 10%;
    width: 7%;
}
.timeline {
    width : 70%;
    margin: auto;
    display: flex;
    align-items:flex-start;
    hr {
        width: 63%;
        position: absolute;
        margin: 0.62% 0 0 4%;
        border: 1px solid black;
        background-color: black;
        z-index: -1;
    }
}

.timeline__point {
    margin: auto;
    margin-top: 0;
    img {
        border-left: 4px solid white;
        border-right: 4px solid white;
        border-radius: 50%;
        background-color: white;
    }
}

.-inactif {
    margin-top: 0.4% ;
}

.-actif img{
    margin-left: 20% ;
    margin-top: 1%;
}
/* partie infoPartagePrix */
.infoPartagePrix{
    display: flex;
    justify-content: space-between;
    margin: 2vmax;
}

.infoPartagePrix_informations{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 20vw;
    padding-left: 5.5%;
}

.informations_prix{
    font-size: 1.25vw;
    font-weight: 700;
    color: $colorTitle;
}

.inspiration_texte{
    font-weight: 500;
    color: white;
    text-align: center;
    margin: auto;
}

/*test bulle */
.infoPartagePrix_inspiration{
    background:$bleuVert;
    border-radius:1.2vw;
    border-bottom-left-radius: initial;
    width:12vw;
    height: 5vh;
    display: flex;
}



/* partie inspiration */
#inspiPerso{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 10%;
}

.bulle{
    text-decoration: none;
}

.inspiPerso_texte{
    flex-direction: column;
    width: 17vw;
}

.inspiPerso_paragraphe{
    margin-bottom: 10%;
    margin-top: 5%;
}

.inspiPerso_btn{
    margin-top: 2%;
    padding: 1rem 0.925rem 1rem 1.8rem;
    transition: width 0.5s ease-in-out;
}

.inspiPerso_btn:hover{
    transition: width 0.5s ease-in-out;
    width: 100%;
}

.inspiPerso_image{
    width: 40%;
}

.perso__choix {
    display: flex;
    justify-content: center;
    margin-left: 10%;
}

.perso__choix a{
    text-decoration: none;
}

.choix__col {

    margin-right: 3%;
}

.col__img1, .col__img2, .col__img3, .col__img4, .col__img5, .col__img6, .col__img7, .col__img8 {
    width: 5vh;
    height: 5vh;
    border-radius: 100%;
    margin: auto;
}

.col__txt {
    font-weight: 200;
    text-align: center;
    margin-top: 10%;
    font-size: 14px;
}

.col__img1{
    background: #F1E8E8;
    box-shadow: 0vh 0vh 1vh rgba(0, 0, 0, 0.25);
}

.col__img2 {
    background-color: #000000;
}

.col__img3 {
    background: #535356;
}

.col__img4 {
    background: #782020;
}

.col__img5 {
    background: #275f37;
}

.col__img6 {
    background-color:#b494e8;
}

.col__img7 {
    background-color: #ffcdfe;
}

.col__img8 {
    background-color: #5a8cd8;
}


.jeVeuxDesChaussures {
    display: block;
    width: 100%;
    height: 40vh;
    margin-top: 5%;
}

.jeVeuxDesChaussures img {
    position: absolute;
    width: 50%;
    left: 25%;
}

//Début des styles de la Perso//

.canvas {
    img {
        display: none;
    }

    img.show {
        display: block;
    }

    .default{
        display: block;
    }
}




</style>