import {useForm} from 'react-hook-form'
export default function Form() {

    let {register,handleSubmit} = useForm()

  return (
    <>
        <form onSubmit={handleSubmit(login)}>
        <div className="mb-3">
            <label  className="form-label">Email address</label>
            <input type="email" {...register('email')} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label  className="form-label">Password</label>
            <input type="password" {...register('password')} className="form-control" id="exampleInputPassword1" />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </>
  )


    function login(data){
        console.log(data)
    }
}
