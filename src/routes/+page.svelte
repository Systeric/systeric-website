<script>
	import About from '$lib/components/about.svelte';
	import Contact from '$lib/components/contact.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Hero from '$lib/components/hero.svelte';
	import Services from '$lib/components/services.svelte';
</script>

<div class="container px-8 sm:px-16 w-full mx-auto">
	<Hero />
	<About />
	<Services />
	<Contact />
	<Footer />
</div>
