'use client'
import { useState } from 'react'
import { logout } from '@/app/lib/actions'
import { useAuth } from '@/app/context/AuthContext'

export default function LogoutButton() {
  const [load, setLoad] = useState(false)
  const { user } = useAuth()
  const handleLogout = async () => {
    setLoad(true)
    await logout()
  }
  return (
    <div className="flex items-center gap-x-6">
      {user?.firstName} {user?.lastName}
      <button
        className="px-6 py-2 bg-blue-600 cursor-pointer text-white rounded hover:bg-blue-700 transition"
        onClick={handleLogout}
        disabled={load}
      >
        {load ? 'Loading...' : 'Logout'}
      </button>
    </div>
  )
}
