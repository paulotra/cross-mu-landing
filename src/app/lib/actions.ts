'use server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function login(email: string) {
  const cookieStore = await cookies()
  cookieStore.set('email', email, {
    httpOnly: true,
    secure: true,
    path: '/',
  })
}

export async function logout() {
  const cookieStore = await cookies()
  cookieStore.delete('email')
  redirect('/')
}
