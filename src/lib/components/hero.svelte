<script>
	import hero from '$lib/assets/hero.webp';
</script>

<section id="hero" class="!pt-12 sm:!pt-16 lg:!pt-24 !pb-8 sm:!pb-12">
	<div class="card-layout items-center flex-col-reverse">
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

		<div class="flex-1">
			<img src={hero} alt="Systeric team collaborating on software solutions" class="rounded-2xl" />
		</div>
	</div>
</section>
