<script>
	import hero from '$lib/assets/hero.webp';
</script>

<section id="hero" class="mx-auto flex flex-col items-center gap-4 mt-0">
	<div class="flex lg:justify-start lg:items-center gap-4 sm:gap-12 flex-col-reverse lg:flex-row">
		<div class="flex-1">
			<h1 class="h1 font-semibold text-secondary-500 mb-6">Outcomes Over Outputs</h1>
			<div class="text-gray-500 mb-6">
				<p class="mb-3">
					<strong class="font-medium">We validate before we build, scope ruthlessly, and measure what matters.</strong>
					Most agencies ship features. We ship outcomes — reduced costs, faster time-to-market, and software that solves real problems.
				</p>
				<p>
					Product management, design, and software engineering under one roof.
					From strategy to production, we're your opinionated engineering partner.
				</p>
			</div>

			<a
				href="#contact-us"
				class="btn variant-filled bg-primary-500 hover:bg-primary-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 transition-colors"
			>
				Let's talk
				<svg
					class="ml-2 -mr-1 w-5 h-5"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
						clip-rule="evenodd"
					></path>
				</svg>
			</a>
		</div>

		<div class="flex-1">
			<img src={hero} alt="Systeric team collaborating on software solutions" class="rounded-xl mb-4 sm:mb-0" />
		</div>
	</div>
</section>
