<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import icon from '$lib/assets/icon.webp';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

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
	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@type": "Organization",
		"name": "Systeric",
		"url": "https://www.systeric.com",
		"description": "Opinionated engineering partner integrating product management, design, and software engineering.",
		"email": "commercial@systeric.com",
		"address": {
			"@type": "PostalAddress",
			"streetAddress": "2nd Floor Benoa Square, Jl. Bypass Ngurah Rai No. 21A",
			"addressLocality": "Kuta Badung",
			"addressRegion": "Bali",
			"postalCode": "80361",
			"addressCountry": "ID"
		},
		"sameAs": ["https://www.npmjs.com/package/@systeric/pg-queue"]
	})}</script>`}
</svelte:head>
<AppShell>
	<svelte:fragment slot="header">
		<div class="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-100/80">
			<AppBar class="container mx-auto !bg-transparent" background="">
				<svelte:fragment slot="lead">
					<a href="/" class="flex items-center gap-3 group focus-ring rounded-lg py-1">
						<img src={icon} alt="Systeric" class="w-8" />
						<strong class="text-lg font-medium tracking-tight text-slate-800">systeric</strong>
					</a>
				</svelte:fragment>
				<svelte:fragment slot="trail">
					<nav class="hidden md:flex items-center gap-8" aria-label="Main navigation">
						{#each navLinks as { href, label }}
							<a {href} class="nav-link">{label}</a>
						{/each}
						<a href="#contact-us" class="btn-nav">Get in touch</a>
					</nav>
					<button
						class="md:hidden p-2 rounded-lg hover:bg-slate-50 transition-colors focus-ring"
						on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
						aria-label="Toggle navigation menu"
						aria-expanded={mobileMenuOpen}
					>
						<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
							{#if mobileMenuOpen}
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
							{:else}
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
							{/if}
						</svg>
					</button>
				</svelte:fragment>
			</AppBar>
			{#if mobileMenuOpen}
				<nav class="md:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-1" aria-label="Mobile navigation">
					{#each navLinks as { href, label }}
						<a {href} class="nav-link-mobile" on:click={() => setTimeout(() => (mobileMenuOpen = false), 50)}>{label}</a>
					{/each}
					<a
						href="#contact-us"
						class="block py-3 px-3 text-sm font-medium text-primary-500 hover:bg-primary-50 rounded-lg transition-all duration-300"
						on:click={() => setTimeout(() => (mobileMenuOpen = false), 50)}
					>
						Get in touch
					</a>
				</nav>
			{/if}
		</div>
	</svelte:fragment>
	<main>
		<slot />
	</main>
</AppShell>
