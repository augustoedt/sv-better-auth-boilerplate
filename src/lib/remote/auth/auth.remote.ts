import { form } from "$app/server";
import z from "zod";
import { auth } from "../../server/auth";
import { redirect } from "@sveltejs/kit";

const AuthSignUpSchema = z.object({
    email: z.email(),
    name: z.string(),
    password: z.string().min(6)
});


export const authPasswordSignUpForm = form(AuthSignUpSchema, async ({ email, name, password }) => {
    try {
        await auth.api.signUpEmail({ body: { name, email, password } });
        console.log("User signed up successfully");
        return { success: true };
    } catch (error) {
        console.error("Error signing up user:", error);
        return { success: false, error: (error as Error).message };
    }
});

export const authPasswordSignInForm = form(AuthSignUpSchema.pick({ email: true, password: true }), async ({ email, password }) => {
    try {
        await auth.api.signInEmail({ body: { email, password } });
        console.log("User signed in successfully");
    } catch (error) {
        console.error("Error signing in user:", error);
        return { success: false, error: (error as Error).message };
    }
    redirect(303, "/app");
});

export const authPasswordSignOutForm = form(async () => {
    try {
        await auth.api.signOut();
        console.log("User signed out successfully");
        return { success: true };
    } catch (error) {
        console.error("Error signing out user:", error);
        return { success: false, error: (error as Error).message };
    }
});