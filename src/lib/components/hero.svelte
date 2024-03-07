<script>
	import hero from '$lib/assets/hero.webp';

	import fliesimo from '$lib/assets/clients/fliesimo.webp';
	import maplin from '$lib/assets/clients/maplin.webp';
	import neutralizer from '$lib/assets/clients/neutralizer.webp';
	import teamsimon from '$lib/assets/clients/teamsimon.webp';
	import titippaket from '$lib/assets/clients/titippaket.webp';
	import vocha from '$lib/assets/clients/vocha.webp';
	import ptump from '$lib/assets/clients/ptump.webp';
	import ptml from '$lib/assets/clients/ptml.webp';
	import cvtmp from '$lib/assets/clients/cvtmp.webp';
	import ubsi from '$lib/assets/clients/ubsi.webp';
	// import interwise from '$lib/assets/clients/vocha.webp';
</script>

<section id="hero" class="mx-auto flex flex-col items-center gap-12">
	<a
		href="https://interwise.app"
		class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-8 text-sm text-gray-700 bg-primary-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
	>
		<span class="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">New</span>
		<span class="text-sm font-medium">Interwise is out! See what's new</span>
		<svg
			class="ml-2 w-5 h-5"
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
			><path
				fill-rule="evenodd"
				d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
				clip-rule="evenodd"
			></path></svg
		>
	</a>

	<div class="flex lg:justify-start lg:items-center gap-4 flex-col-reverse lg:flex-row mb-16">
		<div class="flex-1">
			<h1 class="h1 font-semibold text-secondary-500 mb-6">Digitizing Ideas into Solutions</h1>
			<div class="text-lg text-gray-500 lg:text-xl mb-6">
				<p class="mb-3">
					<strong class="font-medium">Systeric is here to bridge the gap.</strong> Technology, process,
					and people set your trajectory.
				</p>
				<p>
					We integrate product management, design, and software engineering to enable enterprises
					and technology disruptors across the globe to thrive as modern digital businesses.
				</p>
			</div>

			<button
				type="button"
				on:click={() => (window.location.href = '#contact-us')}
				class="btn variant-filled bg-primary-500 hover:bg-primary-700"
			>
				Contact us
				<svg
					class="ml-2 -mr-1 w-5 h-5"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						fill-rule="evenodd"
						d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
						clip-rule="evenodd"
					></path></svg
				>
			</button>
		</div>

		<div class="flex-1">
			<img src={hero} alt="Teamwork" class="rounded-xl mb-4 sm:mb-0" />
		</div>
	</div>
	<div class="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
		<span class="font-semibold text-gray-400 uppercase">Trusted by companies around the globe</span>
		<div
			class="flex flex-wrap justify-center items-center mt-2 sm:mt-8 text-gray-500 sm:justify-between gap-2 sm:gap-5"
		>
			<img src={fliesimo} alt="Fliesimo" class="mx-2 max-h-8 sm:max-h-12" />
			<img src={maplin} alt="Maplin" class="mx-2 max-h-12 sm:max-h-16" />
			<img src={neutralizer} alt="Neutralizer" class="mx-2 max-h-12 sm:max-h-16" />
			<img src={teamsimon} alt="Team Simon" class="mx-2 max-h-12 sm:max-h-16" />
			<img src={titippaket} alt="Titip Paket" class="mx-2 max-h-12 sm:max-h-16" />
			<img src={vocha} alt="Vocha" class="mx-2 max-h-12 sm:max-h-16" />
			<img src={ptump} alt="PT UMP" class="mx-2 max-h-12 sm:max-h-16" />
			<img src={ptml} alt="PT ML" class="mx-2 max-h-12 sm:max-h-16" />
			<img src={cvtmp} alt="CV TMP" class="mx-2 max-h-12 sm:max-h-16" />
			<img src={ubsi} alt="UBSI" class="mx-2 max-h-12 sm:max-h-16" />
		</div>
	</div>
</section>
