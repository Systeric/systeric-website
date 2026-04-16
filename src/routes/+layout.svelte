<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import icon from '$lib/assets/icon.webp';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	// For toasts https://www.skeleton.dev/utilities/toasts
	import { initializeStores } from '@skeletonlabs/skeleton';
	initializeStores();

	const navLinks = [
		{ href: '#services', label: 'Services' },
		{ href: '#clients', label: 'Clients' },
		{ href: '#fractional-cto', label: 'Fractional CTO' },
		{ href: '#contact-us', label: 'Contact' }
	];

	let mobileMenuOpen = false;
</script>

<svelte:head>
	<title>Systeric — Outcomes Over Outputs</title>
	<meta
		name="description"
		content="Systeric is an opinionated engineering partner. We integrate product management, design, and software engineering to help enterprises ship the right thing — validated, well-architected, and on time."
	/>
	<link rel="canonical" href="https://www.systeric.com" />
	<meta property="og:title" content="Systeric — Outcomes Over Outputs" />
	<meta
		property="og:description"
		content="We don't just build software — we validate problems, ship small, and measure outcomes. Product management, design, and engineering under one roof."
	/>
	<meta property="og:url" content="https://www.systeric.com" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Systeric — Outcomes Over Outputs" />
	<meta
		name="twitter:description"
		content="An opinionated engineering partner. We validate before building, ship small, and measure what matters."
	/>
</svelte:head>
<AppShell>
	<svelte:fragment slot="header">
		<AppBar class="container mx-auto">
			<svelte:fragment slot="lead">
				<a href="/" class="flex items-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 rounded">
					<img src={icon} alt="Systeric icon" class="w-10 mr-3" />
					<strong class="text-2xl font-semibold text-primary-500 -mt-1">systeric</strong>
				</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<nav class="hidden md:flex items-center gap-6" aria-label="Main navigation">
					{#each navLinks as { href, label }}
						<a
							{href}
							class="text-sm font-medium text-gray-600 hover:text-primary-500 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 rounded"
						>
							{label}
						</a>
					{/each}
				</nav>
				<button
					class="md:hidden p-2 rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
					on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
					aria-label="Toggle navigation menu"
					aria-expanded={mobileMenuOpen}
				>
					<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
						{#if mobileMenuOpen}
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
						{:else}
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
						{/if}
					</svg>
				</button>
			</svelte:fragment>
		</AppBar>
		{#if mobileMenuOpen}
			<nav class="md:hidden border-t border-gray-200 bg-white px-4 py-3 space-y-2" aria-label="Mobile navigation">
				{#each navLinks as { href, label }}
					<a
						{href}
						class="block py-2 text-sm font-medium text-gray-600 hover:text-primary-500 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 rounded"
						on:click={() => (mobileMenuOpen = false)}
					>
						{label}
					</a>
				{/each}
			</nav>
		{/if}
	</svelte:fragment>
	<main>
		<slot />
	</main>
</AppShell>
