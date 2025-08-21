import { type ActionFunctionArgs } from "react-router-dom";

export async function loginUser(creds: {
  email: FormDataEntryValue | null,
  password: FormDataEntryValue | null
}) {
  const res = await fetch("/api/login", {
    method: "post", 
    body: JSON.stringify(creds)
  })
  const data = await res.json()

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status
    }
  }

  return data
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');
  
  try {
    const data = await loginUser({ email, password })
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('id', data.user.id)
    localStorage.setItem('img',data.user.imageUrl)
    window.dispatchEvent(new Event('authStateChanged'))
    console.log('login successful')
    
    return { success: true, data };

  } catch (error) {
    return { 
      success: false, 
      error: error instanceof Error ? error.message : "Login failed" 
    };
  }
}