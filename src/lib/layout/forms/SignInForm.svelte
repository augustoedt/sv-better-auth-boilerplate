<script>
	import { authPasswordSignInForm } from "$lib/remote/auth/auth.remote";

</script>

<form class="space-y-5" {...authPasswordSignInForm}>
    <div class="space-y-2">
        <labels class="text-sm font-medium text-neutral-700">Email</labels>
        <input
            {...authPasswordSignInForm.fields.email.as('text')}
            placeholder="Email"
            class="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-base text-neutral-900 placeholder:text-neutral-500 outline-none transition focus:border-neutral-400 focus:bg-white focus:ring-2 focus:ring-neutral-200"
        />
    </div>

    <div class="space-y-2">
        <label for="password" class="text-sm font-medium text-neutral-700">Password</label>
        <input
            {...authPasswordSignInForm.fields.password.as('password')}
            placeholder="Password"
            class="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-base text-neutral-900 placeholder:text-neutral-500 outline-none transition focus:border-neutral-400 focus:bg-white focus:ring-2 focus:ring-neutral-200"
        />
    </div>

    <div class="pt-2">
        <button
            type="submit"
            class="flex w-full items-center justify-center rounded-xl bg-neutral-900 px-4 py-3 text-base font-semibold text-white transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-700"
        >
            Sign in
        </button>
    </div>
</form>