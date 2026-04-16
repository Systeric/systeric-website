<script>
	import hero from '$lib/assets/hero.webp';
</script>

<section id="hero" class="mx-auto mt-0 pt-8 sm:pt-12 lg:pt-16">
	<div class="card-layout items-center flex-col-reverse">
		<div class="flex-1 max-w-2xl">
			<h1 class="heading-display mb-6">Outcomes Over Outputs</h1>
			<div class="text-slate-600 mb-8 text-lg leading-relaxed space-y-4">
				<p>
					<strong class="font-semibold text-slate-800">We validate before we build, scope ruthlessly, and measure what matters.</strong>
					Most agencies ship features. We ship outcomes — reduced costs, faster time-to-market, and software that solves real problems.
				</p>
				<p>
					Product management, design, and software engineering under one roof.
					From strategy to production, we're your opinionated engineering partner.
				</p>
			</div>

			<div class="flex flex-wrap gap-4">
				<a href="#contact-us" class="btn-primary">
					Let's talk
					<svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
						<path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
					</svg>
				</a>
				<a href="#services" class="btn-ghost">Learn more</a>
			</div>
		</div>

		<div class="flex-1">
			<img src={hero} alt="Systeric team collaborating on software solutions" class="rounded-2xl shadow-xl shadow-slate-200/50" />
		</div>
	</div>
</section>
