<script>
	import kly from '$lib/assets/medias/kly.webp';
	import lip6 from '$lib/assets/medias/lip6.webp';
	import merdeka from '$lib/assets/medias/merdeka.webp';
	import republika from '$lib/assets/medias/republika.webp';
	import ubsi from '$lib/assets/medias/ubsi.webp';
</script>

<section>
	<div class="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
		<span class="font-semibold text-gray-400 uppercase">Featured by</span>
		<div
			class="flex flex-wrap justify-center items-center mt-2 sm:mt-8 text-gray-500 gap-2 sm:gap-6"
		>
			<a href="https://kly.id"><img src={kly} alt="KLY" loading="lazy" class="m-2 max-h-6 sm:max-h-8" /></a>
			<a href="https://news.republika.co.id"
				><img src={republika} alt="Republika" loading="lazy" class="m-2 max-h-8 sm:max-h-12" /></a
			>
			<a href="https://news.bsi.ac.id"
				><img src={ubsi} alt="UBSI" loading="lazy" class="m-2 max-h-8 sm:max-h-12" /></a
			>
			<a href="https://liputan6.com">
				<img src={lip6} alt="Liputan 6" loading="lazy" class="m-2 max-h-8 sm:max-h-12" /></a
			>
			<a href="https://merdeka.com">
				<img src={merdeka} alt="Merdeka" loading="lazy" class="m-2 max-h-8 sm:max-h-12" />
			</a>
		</div>
	</div>
</section>
