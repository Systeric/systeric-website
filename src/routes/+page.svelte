<script>
	import Contact from '$lib/components/contact.svelte';
	import FeaturedOn from '$lib/components/featuredOn.svelte';
	import Footer from '$lib/components/footer.svelte';
	import FractionalCto from '$lib/components/fractionalCto.svelte';
	import Hero from '$lib/components/hero.svelte';
	import Clients from '$lib/components/clients.svelte';
	import Services from '$lib/components/services.svelte';
	import ComplexProjects from '$lib/components/complexProjects.svelte';
</script>

<div class="container w-full mx-auto">
	<Hero />
<!--	<About />-->
	<FeaturedOn />
	<Services />
	<Clients/>
	<ComplexProjects />
	<FractionalCto />
	<Contact />
	<Footer />
</div>
