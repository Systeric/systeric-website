<script>
	import hero from '$lib/assets/hero.webp';
</script>

<section id="hero" class="!pt-10 sm:!pt-14 lg:!pt-16 !pb-4 sm:!pb-8">
	<div class="flex flex-col-reverse lg:flex-row lg:items-center gap-12 lg:gap-20">
		<div class="flex-1 max-w-xl">
			<h1 class="heading-display mb-7">Outcomes over outputs</h1>
			<div class="text-slate-500 mb-10 text-lg space-y-4">
				<p>
					We validate before we build, scope ruthlessly, and measure what matters.
					Most agencies ship features. We ship outcomes — reduced costs, faster time-to-market,
					and software that solves real problems.
				</p>
				<p class="text-slate-400">
					Product management, design, and software engineering under one roof.
				</p>
			</div>

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
				class="rounded-2xl max-w-md lg:max-w-lg w-full"
			/>
		</div>
	</div>
</section>
