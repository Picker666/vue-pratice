import Vue from 'vue';
import Router from 'vue-router';
import {
    Hello,
    BasePratice,
    Custom,
    SlotSection,
    TransitonAnimate
} from '@/components';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'root',
            redirect: '/hello' 
        },
        {
            path: '/hello',
            name: 'hello',
            component: Hello    
        },
        {
            path: '/basePratice',
            name: 'basePratice',
            component: BasePratice
        },
        {
            path: '/transferData',
            name: 'transferData',
            component: Custom
        },{
            path: '/slotSection',
            name: 'slotSection',
            component: SlotSection
        },{
            path: '/transitonAnimate',
            name: 'transitonAnimate',
            component: TransitonAnimate
        }

    ]
});
