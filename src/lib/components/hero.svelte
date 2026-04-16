<script>
	import hero from '$lib/assets/hero.webp';
</script>

<section id="hero" class="!pt-10 sm:!pt-14 lg:!pt-16 !pb-4 sm:!pb-8">
	<div class="flex flex-col-reverse lg:flex-row lg:items-center gap-10 lg:gap-16">
		<div class="flex-1 max-w-xl">
			<h1 class="heading-display mb-6">Outcomes over outputs</h1>
			<p class="text-slate-600 text-lg mb-4">
				We validate before we build, scope ruthlessly, and measure what matters.
			</p>
			<p class="text-slate-400 mb-10">
				Most agencies ship features. We ship outcomes — reduced costs, faster time-to-market,
				and software that solves real problems. Product management, design, and engineering under one roof.
			</p>

			<div class="flex flex-wrap gap-4">
				<a href="#contact-us" class="btn-primary">
					Get in touch
					<svg class="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
					</svg>
				</a>
				<a href="#services" class="btn-ghost">Learn more</a>
			</div>
		</div>

		<div class="flex-1 flex justify-center lg:justify-end">
			<img
				src={hero}
				alt="Systeric team collaborating on software solutions"
				class="rounded-2xl max-w-sm lg:max-w-md w-full"
			/>
		</div>
	</div>
</section>
