'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/navigation'
import * as yup from 'yup'
import { InferType } from 'yup'

const schema = yup.object({
  firstName: yup.string().required().label('first name'),
  lastName: yup.string().required().label('last name'),
  username: yup.string().required().label('username'),
  email: yup.string().email().required().label('email'),
  password: yup.string().required().label('password'),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .label('confirm password'),
})

type RegisterForm = InferType<typeof schema>

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({ resolver: yupResolver(schema) })
  const router = useRouter()

  const handleRegister: SubmitHandler<RegisterForm> = () => {
    router.push('/admin')
  }

  return (
    <div className="flex items-center justify-center pt-20">
      <form
        className="flex flex-col items-center justify-center mt-10"
        onSubmit={handleSubmit(handleRegister)}
      >
        <h1 className="text-4xl font-bold mb-8">Register</h1>
        <div className="flex items-center justify-between gap-4">
          <div className="mb-4 w-40">
            <input
              type="text"
              placeholder="First Name"
              className="px-4 py-2 border rounded w-full"
              {...register('firstName')}
              aria-invalid={errors.firstName ? 'true' : 'false'}
            />
            {errors.firstName && (
              <p className="text-sm text-red-100 mb-4 mt-4 w-full">
                {errors.firstName?.message}
              </p>
            )}
          </div>
          <div className="mb-4 w-40">
            <input
              type="text"
              placeholder="Last Name"
              className="px-4 py-2 border rounded w-full"
              {...register('lastName')}
              aria-invalid={errors.lastName ? 'true' : 'false'}
            />
            {errors.lastName && (
              <p className="text-sm text-red-100 mb-4 mt-4 w-full">
                {errors.lastName?.message}
              </p>
            )}
          </div>
        </div>
        <input
          type="text"
          placeholder="Username"
          className="mb-4 px-4 py-2 border rounded w-full"
          {...register('username')}
          aria-invalid={errors.username ? 'true' : 'false'}
        />
        {errors.username && (
          <p className="text-sm text-red-100 mb-4 w-full">
            {errors.username?.message}
          </p>
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="mb-4 px-4 py-2 border rounded w-full"
          {...register('email')}
          aria-invalid={errors.email ? 'true' : 'false'}
        />
        {errors.email && (
          <p className="text-sm text-red-100 mb-4 w-full">
            {errors.email?.message}
          </p>
        )}
        <input
          type="password"
          placeholder="Password"
          className="mb-6 px-4 py-2 border rounded w-full"
          {...register('password')}
          aria-invalid={errors.password ? 'true' : 'false'}
        />
        {errors.password && (
          <p className="text-sm text-red-100 mb-4 w-full">
            {errors.password?.message}
          </p>
        )}
        <input
          type="password"
          placeholder="Confirm Password"
          className="mb-6 px-4 py-2 border rounded w-full"
          {...register('confirmPassword')}
          aria-invalid={errors.confirmPassword ? 'true' : 'false'}
        />
        {errors.confirmPassword && (
          <p className="text-sm text-red-100 mb-4 w-full">
            {errors.confirmPassword?.message}
          </p>
        )}
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 cursor-pointer text-white rounded hover:bg-blue-700 transition w-full"
        >
          Register
        </button>
      </form>
    </div>
  )
}
