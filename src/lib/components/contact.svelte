<script lang="ts">
	interface IFormData {
		email: string;
		subject: string;
		message: string;
	}

	let formData: IFormData = {
		email: '',
		subject: '',
		message: ''
	};

	async function onSubmit() {
		try {
			const content = `Email: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`;

			await fetch(
				'https://discord.com/api/webhooks/1212339071855366154/26mf1Ji-FEl6ZZXY8f7bUhLmzrWFmsgELTRpYiv_eJ6z70Ws43uiHxgBu2MUM7OXiMgR',
				{
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						content
					})
				}
			);

			// TODO popup
		} catch (error) {
			// TODO popup
		}
	}
</script>

<section id="contact-us">
	<div class="py-8 lg:py-16 mx-auto max-w-screen-md">
		<h2 class="h2 mb-4 tracking-tight font-extrabold sm:text-center text-secondary-500">
			Contact Us
		</h2>
		<p class="mb-8 lg:mb-16 font-light sm:text-center text-gray-500 dark:text-gray-400 sm:text-xl">
			Ready to transform your business with innovative solutions? Let's discuss your project goals.
			We'll strategize, design, and build the solutions you need to achieve success.
		</p>
		<form on:submit|preventDefault={onSubmit} class="space-y-8">
			<label for="email" class="label">
				<span>Your email</span>
				<input
					type="email"
					id="email"
					class="input border-gray-300"
					placeholder="name@systeric.com"
					required
					bind:value={formData.email}
				/>
			</label>
			<label for="subject" class="label">
				<span>Subject</span>
				<input
					type="text"
					id="subject"
					class="input border-gray-300"
					placeholder="Let us know how we can help you"
					required
					bind:value={formData.subject}
				/>
			</label>
			<div class="sm:col-span-2">
				<label for="message" class="label">
					<span>Your message</span>
					<textarea
						id="message"
						rows="6"
						class="input border-gray-300"
						placeholder="Leave a comment..."
						bind:value={formData.message}
					></textarea>
				</label>
			</div>
			<button
				type="submit"
				class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-500 sm:w-fit hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300"
				>Send message</button
			>
		</form>
	</div>
</section>
