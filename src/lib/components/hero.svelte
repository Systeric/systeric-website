<script>
	import hero from '$lib/assets/hero.webp';
</script>

<section id="hero" class="mx-auto flex flex-col items-center gap-4 mt-0">
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
		>
			<path
				fill-rule="evenodd"
				d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
				clip-rule="evenodd"
			></path>
		</svg
		>
	</a>

	<div class="flex lg:justify-start lg:items-center gap-4 sm:gap-12 flex-col-reverse lg:flex-row">
		<div class="flex-1">
			<h1 class="h1 font-semibold text-secondary-500 mb-6">Digitizing Ideas into Solutions</h1>
			<div class="text-gray-500  mb-6">
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
				>
					<path
						fill-rule="evenodd"
						d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
						clip-rule="evenodd"
					></path>
				</svg
				>
			</button>
		</div>

		<div class="flex-1">
			<img src={hero} alt="Teamwork" class="rounded-xl mb-4 sm:mb-0" />
		</div>
	</div>
</section>
