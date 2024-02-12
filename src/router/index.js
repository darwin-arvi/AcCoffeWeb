import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// estate
import CreateEstate from "../views/estate/CreateEstate.vue";
import EditEstate from "../views/estate/EditEstate.vue";
import InfoEstate from "../views/estate/InfoEstate.vue";
// planting
import NewPlanting from "../views/planting/NewPlanting.vue";
import InfoPlanting from "../views/planting/InfoPlanting.vue";
import TablePlanting from "../views/planting/TablePlanting.vue";
import EditPlanting from "../views/planting/EditPlanting.vue";
// beaten
import NewBeaten from "../views/beaten/NewBeaten.vue";
import InfoBeaten from "../views/beaten/InfoBeaten.vue";
import TableBeaten from "../views/beaten/TableBeaten.vue";
import EditBeaten from "../views/beaten/EditBeaten.vue";
// drying
import NewDrying from "../views/drying/NewDrying.vue";
import InfoDrying from "../views/drying/InfoDrying.vue";
import TableDrying from "../views/drying/TableDrying.vue";
import EditDrying from "../views/drying/EditDrying.vue";
// harvest
import NewHarvest from "../views/harvest/NewHarvest.vue";
import InfoHarvest from "../views/harvest/InfoHarvest.vue";
import TableHarvest from "../views/harvest/TableHarvest.vue";
import EditHarvest from "../views/harvest/EditHarvest.vue";
// work
import NewWork from "../views/work/NewWork.vue";
import InfoWork from "../views/work/InfoWork.vue";
import EditWork from "../views/work/EditWork.vue";

// auth
import Login1 from "../views/auth/Login-1.vue";
import Register1 from "../views/auth/Register-1.vue";
import { auth } from '@/utlis/comparation/firebaseAuth';

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
            requiresAuth: true
        }
    },
    //auth
    {
        path: '/login',
        name: 'login',
        component: Login1
    },
    {
        path: '/register',
        name: 'register',
        component: Register1
    },
    // estate
    {
        path: '/estate/create',
        name: 'estatecreate',
        component: CreateEstate,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/estate/:editId',
        name: 'estateedit',
        component: EditEstate,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/estate/info/:infoId',
        name: 'estateinfo',
        component: InfoEstate,
        meta: {
            requiresAuth: true
        }
    },
    // planting
    {
        path: '/planting/new/:estateId',
        name: 'newplanting',
        component: NewPlanting,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/planting/info/:estateId',
        name: 'infoplanting',
        component: InfoPlanting,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/planting/table/:infoId',
        name: 'tableplanting',
        component: TablePlanting,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/planting/:editId',
        name: 'editplanting',
        component: EditPlanting,
        meta: {
            requiresAuth: true
        }
    },
    // beaten
    {
        path: '/beaten/new/:estateId',
        name: 'newbeating',
        component: NewBeaten,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/beaten/info/:estateId',
        name: 'infobeating',
        component: InfoBeaten,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/beaten/table/:infoId',
        name: 'tablebeating',
        component: TableBeaten,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/beaten/:editId',
        name: 'editbeaten',
        component: EditBeaten,
        meta: {
            requiresAuth: true
        }
    },
    // drying
    {
        path: '/drying/new/:estateId',
        name: 'newdrying',
        component: NewDrying,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/drying/info/:estateId',
        name: 'infodrying',
        component: InfoDrying,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/drying/table/:infoId',
        name: 'tabledrying',
        component: TableDrying,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/drying/:editId',
        name: 'editdrying',
        component: EditDrying,
        meta: {
            requiresAuth: true
        }
    },
    // harvest
    {
        path: '/harvest/new/:estateId',
        name: 'newharvest',
        component: NewHarvest,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/harvest/info/:estateId',
        name: 'infoharvest',
        component: InfoHarvest,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/harvest/table/:infoId',
        name: 'tableharvest',
        component: TableHarvest,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/harvest/:editId',
        name: 'editharvest',
        component: EditHarvest,
        meta: {
            requiresAuth: true
        }
    },
    // work
    {
        path: '/work/new/:estateId',
        name: 'newwork',
        component: NewWork,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/work/info/:estateId',
        name: 'infowork',
        component: InfoWork,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/work/:editId',
        name: 'editwork',
        component: EditWork,
        meta: {
            requiresAuth: true
        }
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.path === '/login' && auth.currentUser) {
        next('/')
        return;
    }
    if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
        next('/login')
        return;
    }
    next();
})

export default router