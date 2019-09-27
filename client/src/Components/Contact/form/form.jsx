import React from 'react';
import useForm from 'react-hook-form';


const Form = () => {
  
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = data => {console.log(data)}
  
  return(
      <div className="">
      <form noValidate action="#" method="POST" name="contact_us" onSubmit = {handleSubmit(onSubmit)}>
        <fieldset>
          <legend id="title">Say Hello!</legend>
          <p>Give us feedback, or just say hello. Send us a message and we'll be glad to see it. Or just drop your email!</p>
  
          <div className="box">
            <label htmlfor="fullName">Full Name: </label> 
            <br />
            <input id="fullName" type="text" name="fullName" required ref={register({ required: true })}/>
            <br />
            {errors.fullName && errors.fullName.type === 'required' && <span className="alert">Please Enter Your Full Name!</span>}
            
          </div>
          
          <div className="box">
            <label htmlfor="email">Email: </label>
            <br />
            <input id="email" type="email" name="email" required ref={register({ required: true })}/>
            <br />
            {errors.fullName && errors.fullName.type === 'required' && <span className="alert">Please Enter Your Email!</span>}
          </div>
  
        
  
          <div className="box comment">
            <label htmlfor="response">Anything you want to tell us?</label> 
            <br />
            <textarea id="response" name="comments" rows="10" cols="30"></textarea>
          </div>
  
          <div className="submit">
            <button className="btn btn-light btn-sm waves-effect waves-light" type="submit">Submit</button>
          </div>

        </fieldset> 
      </form>
      </div>
  )
}




export default Form 