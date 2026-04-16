<script>
	import kly from '$lib/assets/medias/kly.webp';
	import lip6 from '$lib/assets/medias/lip6.webp';
	import merdeka from '$lib/assets/medias/merdeka.webp';
	import republika from '$lib/assets/medias/republika.webp';
	import ubsi from '$lib/assets/medias/ubsi.webp';
</script>

<section>
	<div class="mx-auto text-center max-w-3xl">
		<p class="font-semibold text-sm uppercase tracking-wider text-slate-400 mb-8">Featured by</p>
		<div
			class="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 sm:gap-x-12 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
		>
			<a href="https://kly.id"><img src={kly} alt="KLY" loading="lazy" class="max-h-6 sm:max-h-8" /></a>
			<a href="https://news.republika.co.id"><img src={republika} alt="Republika" loading="lazy" class="max-h-8 sm:max-h-10" /></a>
			<a href="https://news.bsi.ac.id"><img src={ubsi} alt="UBSI" loading="lazy" class="max-h-8 sm:max-h-10" /></a>
			<a href="https://liputan6.com"><img src={lip6} alt="Liputan 6" loading="lazy" class="max-h-8 sm:max-h-10" /></a>
			<a href="https://merdeka.com"><img src={merdeka} alt="Merdeka" loading="lazy" class="max-h-8 sm:max-h-10" /></a>
		</div>
	</div>
</section>
