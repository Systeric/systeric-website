<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import icon from '$lib/assets/icon.webp';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	// For toasts https://www.skeleton.dev/utilities/toasts
	import { initializeStores } from '@skeletonlabs/skeleton';
	initializeStores();
</script>

<!-- App Shell -->
<svelte:head>
	<title>Systeric</title>
	<meta property="og:title" content="Systeric: Digitizing Ideas into Solutions" />
	<meta
		property="og:description"
		content="We integrate product management, design, and software engineering to enable enterprises and technology disruptors across the globe to thrive as modern digital businesses."
	/>
	<!-- <meta
		property="og:image"
		content="https://www.systeric.com/images/digital-transformation-thumbnail.jpg"
	/> -->
	<meta property="og:url" content="https://www.systeric.com" />
</svelte:head>
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar class="container mx-auto">
			<svelte:fragment slot="lead">
				<button on:click={() => (window.location.href = '/')} class="flex items-center">
					<img src={icon} alt="Systeric icon" class="w-10 mr-3" />
					<strong class="text-2xl font-semibold text-primary-500 -mt-1">systeric</strong>
				</button>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<!-- <a
					class="btn btn-sm variant-ghost-surface"
					href="https://discord.gg/EXqV7W8MtY"
					target="_blank"
					rel="noreferrer"
				>
					Discord
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://twitter.com/SkeletonUI"
					target="_blank"
					rel="noreferrer"
				>
					Twitter
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://github.com/skeletonlabs/skeleton"
					target="_blank"
					rel="noreferrer"
				>
					GitHub
				</a> -->
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
