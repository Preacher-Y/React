import type { ActionFunctionArgs } from "react-router-dom";

export async function action({request}:ActionFunctionArgs){
    const formData = await request.formData();
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    return {email, password}

}