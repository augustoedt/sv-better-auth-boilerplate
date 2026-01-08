import { redirect } from "@sveltejs/kit";

export async function load({ locals }) {

    if(!locals.session) {
        redirect(302, "/auth/signin");
    }
    console.log("User is authenticated, session:", locals.session);
    return {};

}