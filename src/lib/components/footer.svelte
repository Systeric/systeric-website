<script>
	import icon from '$lib/assets/icon.webp';
</script>

<footer class="mx-auto rounded-2xl px-8 sm:px-16 py-14 sm:py-16 mb-6" style="background-color: #003d99;">
	<div class="mx-auto max-w-4xl">
		<div class="sm:flex md:justify-between gap-12">
			<div class="text-blue-100 mb-10 sm:mb-0">
				<p class="text-lg font-semibold text-white mb-4">Systeric</p>
				<div class="text-sm space-y-1 text-blue-200">
					<p>PT Systeric Teknologi Indonesia</p>
					<p>2nd Floor Benoa Square</p>
					<p>Jl. Bypass Ngurah Rai No. 21A</p>
					<p>Kuta Badung - Bali Indonesia 80361</p>
				</div>
			</div>
			<div>
				<p class="text-lg font-semibold text-white mb-4">Company</p>

				<a href="/" class="flex items-center mb-5 group">
					<img src={icon} alt="Systeric icon" loading="lazy" class="w-9 mr-3 transition-transform group-hover:scale-105" />
					<strong class="text-xl font-semibold text-blue-200 group-hover:text-white transition-colors">systeric</strong>
				</a>

				<a class="text-sm text-blue-200 hover:text-white transition-colors" href="mailto:commercial@systeric.com">commercial@systeric.com</a>
			</div>
		</div>
		<hr class="my-8 border-blue-700/50" />
		<div class="sm:flex sm:items-center sm:justify-between">
			<span class="text-sm text-blue-300">
				&copy; 2025 <a href="https://systeric.com" class="hover:text-white transition-colors">Systeric</a>. All Rights Reserved.
			</span>
		</div>
	</div>
</footer>
