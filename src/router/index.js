import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import CategoryPage from '@/components/CategoryPage'
import join from '@/components/login/join'
import JoinSuccess from '@/components/login/JoinSuccess'
import Email from '@/components/login/EmailLogin'
import Login from '@/components/login/LoginPage'
import error from '@/components/error_page'
import Furniture from '@/components/category/Furniture'
import Fabric from '@/components/category/Fabric'
import Digital from '@/components/category/Digital'

Vue.use(Router)

export default new Router({
    mode:'history',
    routes:[
        { 
            path:'/',
            component : Home,
        },
        { 
            path:'/category',
            component : CategoryPage,
            children:[
                {
                    path:'/furniture',
                    name:'furniture',
                    component: Furniture
                },
                {
                    path:'/fabric',
                    name:'fabric',
                    component: Fabric
                },
                {
                    path:'/digital',
                    name:'digital',
                    component: Digital
                },
                {
                    path:'/kitchen',
                    name:'kitchen',
                    component:()=>import('../components/category/Kitchen.vue')
                },
                {
                    path:'/food',
                    name:'food',
                    component:()=>import('../components/category/Food.vue')
                },
                {
                    path:'/deco',
                    name:'deco',
                    component:()=>import('../components/category/Deco.vue')
                },
                {
                    path:'/light',
                    name:'light',
                    component:()=>import('../components/category/Light.vue')
                },
                {
                    path:'/digital',
                    name:'digital',
                    component: Digital
                },
                {
                    path:'/acceptance',
                    name:'acceptance',
                    component:()=>import('../components/category/Acceptance.vue')
                },
                {
                    path:'/life',
                    name:'life',
                    component:()=>import('../components/category/Life.vue')
                },
                {
                    path:'/necessity',
                    name:'necessity',
                    component:()=>import('../components/category/Necessity.vue')
                },
                {
                    path:'/kids',
                    name:'kids',
                    component:()=>import('../components/category/Kids.vue')
                },
                {
                    path:'/animal',
                    name:'animal',
                    component:()=>import('../components/category/Animal.vue')
                },
                {
                    path:'/camping',
                    name:'camping',
                    component:()=>import('../components/category/Camping.vue')
                },
                {
                    path:'/diy',
                    name:'diy',
                    component:()=>import('../components/category/Diy.vue')
                },
                {
                    path:'/interior',
                    name:'interior',
                    component:()=>import('../components/category/Interior.vue')
                },
                {
                    path:'/rental',
                    name:'rental',
                    component:()=>import('../components/category/Rental.vue')
                },
                {
                    path:'/groceries',
                    name:'groceries',
                    component:()=>import('../components/category/Groceries.vue')
                },

            ]
        },
        { 
            path:'/order_list', 
            name:'order_list', 
            component:()=>import('../components/order/OrderList.vue')
        },
        { 
            path:'/join',
            component : join
        },
        { 
            path:'/joinsuccess',
            component : JoinSuccess
        },
        { 
            path:'/email',
            component : Email
        },
        { 
            path:'/login',
            component : Login
        },
        { 
            path:'/loginstatus',
            name:'loginstatus', 
            component:()=>import('../components/login/LoginStatus.vue')
        },
        { 
            path:'*',
            component : error
        },
        { 
            path:'/add_items', 
            name:'add_items', 
            component:()=>import('../components/items/addCategoryItems.vue')
        },
        { 
            path:'/itemlist', 
            name:'itemlist', 
            component:()=>import('../components/items/itemList.vue')
        },
        { 
            path:'/item_info/:title', 
            name:'item_info', 
            component:()=>import('../components/items/itemInfo.vue')
        },
        { 
            path:'/item_view/:title', 
            name:'item_view', 
            component:()=>import('../components/items/itemView.vue')
        },
        { 
            path:'/item_edit/:title', 
            name:'item_edit', 
            component:()=>import('../components/items/editCategoryItems.vue')
        },
        { 
            path:'/searchitems', 
            name:'searchitems', 
            component:()=>import('../components/searchItems.vue')
        },
        { 
            path:'/cart', 
            name:'cart', 
            component:()=>import('../components/cart/CartList.vue')
        },
        { 
            path:'/cart_view/:title', 
            name:'cart_view', 
            component:()=>import('../components/cart/CartView.vue')
        },
        { 
            path:'/order_check', 
            name:'order_check', 
            component:()=>import('../components/order/OrderCheck.vue')
        },
        { 
            path:'/order_view/:title', 
            name:'order_view', 
            component:()=>import('../components/order/OrderView.vue')
        },
        { 
            path:'/order_info/:title', 
            name:'order_info', 
            component:()=>import('../components/order/OrderInfo.vue')
        },
        { 
            path:'/reviewinfo/:title', 
            name:'reviewinfo_page', 
            component:()=>import('../components/itemsReview/itemsReviewInfo.vue')
        },
        { 
            path:'/review_write', 
            name:'review_write', 
            component:()=>import('../components/itemsReview/itemsReviewWrite.vue')
        },
        { 
            path:'/review_list', 
            name:'review_list', 
            component:()=>import('../components/itemsReview/itemsReviewList.vue')
        },
        { 
            path:'/review_select', 
            name:'review_select', 
            component:()=>import('../components/itemsReview/itemsReviewSelect.vue')
        },
        { 
            path:'/review_selectlist', 
            name:'review_selectlist', 
            component:()=>import('../components/itemsReview/selectItemsReviewList.vue')
        },
        { 
            path:'/complete_list', 
            name:'complete_list', 
            component:()=>import('../components/order/Complete.vue')
        },
        { 
            path:'/complete_admin', 
            name:'complete_admin', 
            component:()=>import('../components/order/CompleteAdmin.vue')
        },
    ]
})