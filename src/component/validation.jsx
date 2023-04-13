import React from 'react'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

export default function Validation() {
  const validate = {
    name: Yup.string()
      .required('Please enter some value.')
      .min(4, 'Add minimum 4 characters'),
    email: Yup.string().required('Email id is mendatory').email(),
  };
  const yupValidation = Yup.object().shape(validate)
  const formOptions = { resolver: yupResolver(yupValidation) }
  const { register, handleSubmit, reset, formState } = useForm(formOptions)
  const { errors } = formState
//   function onSubmit(data) {
//     console.log(JSON.stringify(data, null, 4))
//     return false
//   }
  return (
    <div className="container mt-4">
      <h2>React Validation Error Messages </h2>
      <form onSubmit={handleSubmit()}>
        <div className="form-group">
          <label>Name</label>
          <input
            name="name"
            type="text"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            {...register('name')}
          />
          <div className="invalid-feedback">{errors.name?.message}</div>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            name="email"
            type="text"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            {...register('email')}
          />
          <div className="invalid-feedback">{errors.email?.message}</div>
        </div>
        <div className="mt-3">
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </div>
      </form>
    </div>
  )
}