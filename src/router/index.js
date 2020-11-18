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
	}
];

const router = new VueRouter({
	routes
});

export default router;
