<script lang="ts">
	import { resolve } from "$app/paths";
</script>
<div>
    <header class="h-16 w-full bg-gray-100 flex">
        <div class="flex-1">

        </div>
        <div class="flex items-center px-4">
            <a data-sveltekit-reload href={resolve("/auth/signin")} title="Sign In" class="px-4 py-2 bg-gray-300 text-gray-900 rounded font-semibold">
                <span>Sign In</span>
            </a>
            
            <a data-sveltekit-reload href={resolve("/auth/signup")} title="Sign Up" class="ml-4 px-4 py-2 bg-gray-900 text-white rounded font-semibold">
                <span>Sign Up</span>
            </a>
        </div>
    </header>
</div>