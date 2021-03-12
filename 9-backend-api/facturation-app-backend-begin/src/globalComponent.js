import Vue from 'vue'

// on import les dépendances (les composants)
import NavMenu from '@/components/nav-menu/NavMenu.vue'
import NavMenuItem from '@/components/nav-menu/NavMenuItem.vue'
import customBtn from '@/components/customBtn.vue'

//On déclare l'utilisation des composants globaux dans notre app
Vue.component('NavMenu', NavMenu)
Vue.component('NavMenuItem', NavMenuItem)
Vue.component('customBtn', customBtn)
