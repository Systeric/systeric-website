<script>
	import Hero from '$lib/components/hero.svelte';
	import Services from '$lib/components/services.svelte';
	import Clients from '$lib/components/clients.svelte';
	import ComplexProjects from '$lib/components/complexProjects.svelte';
	import FractionalCto from '$lib/components/fractionalCto.svelte';
	import Contact from '$lib/components/contact.svelte';
	import Footer from '$lib/components/footer.svelte';
</script>

<div class="container w-full mx-auto">
	<Hero />
	<Services />
	<Clients />
	<ComplexProjects />
	<FractionalCto />
	<Contact />
</div>
<Footer />
