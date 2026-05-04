'use client'

import { useState } from 'react'
import { login } from '@/app/lib/actions'
import { ADMIN } from '@/lib/constants'
import { useAuth } from '@/app/context/AuthContext'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [load, setLoad] = useState(false)
  const [error, setError] = useState<{ email?: string; password?: string }>({})
  const { setUser } = useAuth()
  const router = useRouter()

  const resetError = () => {
    setError({ email: '', password: '' })
  }

  const validate = () => {
    resetError()
    if (!email) {
      setError((prev) => ({ ...prev, email: 'Email is required' }))
    }

    if (!password) {
      setError((prev) => ({ ...prev, password: 'Password is required' }))
    }

    if (email && email !== ADMIN.email) {
      setError((prev) => ({ ...prev, email: 'User does not exist' }))
    } else if (password && password !== ADMIN.password) {
      setError((prev) => ({ ...prev, password: 'Password is incorrect' }))
    }

    if (email === ADMIN.email && password === ADMIN.password) {
      return true
    }
    return false
  }

  const handleLogin = async () => {
    if (validate()) {
      setLoad(true)
      await login(email)
      router.push('/')
      setUser({
        firstName: 'Paulo',
        lastName: 'Trajano',
        email,
      })
    }
  }
  return (
    <div className="flex items-center justify-center pt-20">
      <form
        className="flex flex-col items-center justify-center mt-10"
        onSubmit={(e) => {
          e.preventDefault()
          handleLogin()
        }}
      >
        <h1 className="text-4xl font-bold mb-8">Login</h1>
        <input
          type="text"
          placeholder="Username"
          className="mb-4 px-4 py-2 border rounded w-64"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error.email && (
          <p className="text-sm text-red-100 mb-4 w-full">{error.email}</p>
        )}
        <input
          type="password"
          placeholder="Password"
          className="mb-6 px-4 py-2 border rounded w-64"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error.password && (
          <p className="text-sm text-red-100 mb-4 w-full">{error.password}</p>
        )}
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 cursor-pointer text-white rounded hover:bg-blue-700 transition w-full"
        >
          {load ? 'Loading...' : 'Login'}
        </button>
      </form>
    </div>
  )
}
