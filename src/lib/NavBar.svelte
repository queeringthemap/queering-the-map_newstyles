<script>
	import { IconNotifications, IconInfo } from '$lib/icons';
	import { infoOverlayVisible, addOverlayVisible } from '../stores';
	import Logo from './Logo.svelte';

	function openInfoOverlay() {
		infoOverlayVisible.update(() => true);
	}
	function openAddOverlay() {
		addOverlayVisible.update(() => true);
	}
</script>

<nav>
	{#if !$infoOverlayVisible}
		<button
			on:click={openInfoOverlay}
			class="overlay-trigger overlay-trigger--info"
			id="info"
			aria-label="open info overlay"
		>
			<span class="overlay-trigger__title">Info</span>
			<IconInfo />
		</button>
	{/if}

	<div class="float-center">
		<div id="logo">
			<Logo />
		</div>
	</div>

	{#if !$addOverlayVisible}
		<button
			on:click={openAddOverlay}
			class="overlay-trigger overlay-trigger--add"
			id="add"
			aria-label="open add overlay"
		>
			<IconNotifications />
		</button>
	{/if}
</nav>

<style>
	#logo {
		position: absolute;
		top: 1em;
		width: 100%;
		--width: calc(min(22vw, 200px));
		width: var(--width);
		left: calc(50% - (var(--width) / 2));
		max-height: 48px;
		z-index: 1;
	}

	.overlay-trigger {
		border: none;
		background-color: transparent;
		padding: 0;
		top: 0;
		font-size: 2.4em;
		cursor: pointer;
		font-weight: bold;
		position: fixed;
		z-index: var(--overlay-trigger-z-index);
		color: var(--color-dark);
	}

	@media (min-width: 800px) {
		.overlay-trigger {
			top: 0.5em;
		}
	}

	.overlay-trigger.overlay-trigger--info {
		left: 0.25em;
		top: 0.25em;
		text-shadow: 0px 0px 3px white;
	}

	@media (min-width: 800px) {
		.overlay-trigger.overlay-trigger--info {
			left: 0.5em;
		}
	}

	.overlay-trigger.overlay-trigger--info .overlay-trigger__title {
		display: none;
		text-transform: uppercase;
	}

	@media (min-width: 800px) {
		.overlay-trigger.overlay-trigger--info .overlay-trigger__title {
			display: initial;
		}
	}

	.overlay-trigger.overlay-trigger--add {
		right: 0.25em;
		top: 0.25em;
	}

	@media (min-width: 800px) {
		.overlay-trigger.overlay-trigger--add {
			right: 0.5em;
		}
	}
</style>
