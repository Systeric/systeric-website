<script>
	import icon from '$lib/assets/icon.webp';
</script>

<footer class="mx-auto border-t border-slate-100 px-6 sm:px-10 lg:px-16 py-12 sm:py-14">
	<div class="mx-auto max-w-4xl">
		<div class="sm:flex sm:justify-between gap-16">
			<div class="mb-10 sm:mb-0">
				<a href="/" class="flex items-center mb-6 group">
					<img src={icon} alt="Systeric" loading="lazy" class="w-8 mr-3" />
					<strong class="text-lg font-medium text-slate-800">systeric</strong>
				</a>
				<div class="text-sm space-y-0.5 text-slate-400">
					<p>PT Systeric Teknologi Indonesia</p>
					<p>2nd Floor Benoa Square</p>
					<p>Jl. Bypass Ngurah Rai No. 21A</p>
					<p>Kuta Badung, Bali 80361</p>
				</div>
			</div>
			<div class="flex gap-16">
				<div>
					<p class="label-footer">Contact</p>
					<a class="link-footer" href="mailto:commercial@systeric.com">commercial@systeric.com</a>
				</div>
				<div>
					<p class="label-footer">Open Source</p>
					<a class="link-footer" href="https://www.npmjs.com/package/@systeric/pg-queue" target="_blank" rel="noopener noreferrer">@systeric/pg-queue</a>
				</div>
			</div>
		</div>
		<hr class="my-10 border-slate-100" />
		<span class="text-sm text-slate-300">
			&copy; {new Date().getFullYear()} Systeric. All rights reserved.
		</span>
	</div>
</footer>
