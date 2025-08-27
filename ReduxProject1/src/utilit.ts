import type { ActionFunctionArgs } from "react-router-dom";

export async function action({request}:ActionFunctionArgs){
    const formData = await request.formData();
    const email = formData.get('email');
    const password = formData.get('password');

    return {email:email, password:password}

}