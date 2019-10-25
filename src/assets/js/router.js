import VueRouter from 'vue-router'

import my from '../../component/my.vue'
import index from '../../component/index.vue'
import home from '../../component/home.vue'
import search from '../../component/search.vue'
import lists from '../../component/lists.vue'
import mall from '../../component/mall.vue'
import live from '../../component/live.vue'
import detail from '../../component/detail.vue'
import classdetail from '../../component/classification/classdetail.vue'
import shoppingcar from '../../component/shoppingcar.vue'
export default new VueRouter({
	routes:[
		{
			path:"/",
			component:index,
			children:[
				{
					path:"/home",component:home
				},
				{
					path:"/mall",component:mall,
				},
				{
					path:"/live",
					component:live
				}
			],
			redirect:"/home"
		},
		{
			path:"/home",component:home
		},
		{
			path:"/search",component:search
		},
		{
			path:"/classdetail",component:classdetail
		},
		{
			path:"/lists/:m",component:lists
		},
		{
			path:"/my",component:my
		},
		{
			path:"/detail",component:detail
		},
		{
			path:"/shoppingcar",component:shoppingcar
		},
		{
			path:"/*",redirect:index
		}
	]
})