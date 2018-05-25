import Vue from 'vue';
import Router from 'vue-router';
import Custom from '../components/forTransferData/Custom';
import BasePratice from '@/components/basePratice';
import Hello from '@/components/Hello';
import SlotSection from '@/components/slotDemo';

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
        }
    ]
});
