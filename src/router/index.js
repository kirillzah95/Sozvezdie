import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Catalog",
		component: () =>
		import(/* webpackChunkName: "catalog" */ "../views/Catalog.vue")
	},
	{
		path: "/about",
		name: "About",
		component: () =>
		import(/* webpackChunkName: "about" */ "../views/About.vue")
	},
	{
		path: "/offer/:id",
		name: "Offer",
		component: () =>
		import(/* webpackChunkName: "offer" */ "../views/Offer.vue")
	}
];

const router = new VueRouter({
	mode: 'history',
	routes
});

export default router;
