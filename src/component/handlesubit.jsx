import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"

export default function handlesumbit(props) {
    // const yupValidation = Yup.object().shape({
    //   name: Yup.string()
    //     .required('Please enter some value.')
    //     .min(4, 'Add minimum 4 characters'),
    //   email: Yup.string().required('Email id is mendatory').email(),
    // })
    const formOptions = { resolver: yupResolver(props.yupValidation) }
    // const { register, handleSubmit, reset, formState } = useForm(formOptions)
    // const { errors } = formState
  //   function onSubmit(data) {
  //     console.log(JSON.stringify(data, null, 4))
  //     return false
  //   }
    
}