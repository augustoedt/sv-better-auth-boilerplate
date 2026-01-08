<script>
	import SignUpForm from "$lib/layout/forms/SignUpForm.svelte";

</script>
<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
    <link
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap"
        rel="stylesheet"
    />
</svelte:head>

<div class="flex min-h-screen items-center justify-center bg-neutral-100 px-4 text-neutral-900">
    <div class="w-full max-w-md rounded-2xl border border-neutral-200 bg-white px-8 py-10 shadow-xl" style="font-family: 'Space Grotesk', 'Inter', system-ui, sans-serif">
        <h1 class="mb-8 text-center text-3xl font-semibold">Sign up</h1>

        <SignUpForm />
    </div>
</div>