<script lang="ts">
	import { goto } from "$app/navigation";
	import { authClient } from "$lib/client";

    async function signOut() {
        const result = await authClient.signOut();
        if (result.data?.success) {
            // Successfully signed out, you can redirect or update UI accordingly
            console.log("Signed out successfully");
            goto("/");
        } else {
            console.error("Error signing out:", result.error);
        }
    }
</script>
<div>
    <header class="h-16 w-full bg-gray-300 flex">
        <div class="flex-1">

        </div>
        <div class="flex items-center px-4">
                <button onclick={async () => await signOut()} class="px-4 py-2 bg-gray-800 text-white rounded">
                    <span>Sign out</span>
                </button>
        </div>
    </header>

    <div class="w-full p-8">
        <div class="text-2xl font-bold mx-auto w-fit flex">
            Secret App
        </div>
    </div>  
</div>
