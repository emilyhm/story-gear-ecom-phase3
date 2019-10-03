import React from 'react';
import useForm from 'react-hook-form';

const Form = () => {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => {console.log(data)}
  
  return(
    <form className="form-style" noValidate action="#" method="POST" name="contact_us" onSubmit = {handleSubmit(onSubmit)}>
      <div className="form-fieldset">
        <fieldset>
          {/* shows the title and directions for the user/client to follow */}
          <legend id="title">Say Hello!</legend>
          <p className="comment">Give us feedback, or just say hello. Send us a message and we'll be glad to see it. Or just drop your email!</p>

          {/* shows the 'full name' part of the form */}
          <div className="box">
            <label htmlFor="fullName">Full Name: </label> 
            <br />
            <input id="fullName" type="text" name="fullName" required ref={register({ required: true })}/>
            <br />
            {errors.fullName && errors.fullName.type === 'required' && <span className="alert">Please Enter Your Full Name!</span>}
          </div>
          
          {/* the email part of the form */}
          <div className="box">
            <label htmlFor="email">Email: </label>
            <br />
            <input id="email" type="email" name="email" required ref={register({ required: true })}/>
            <br />
            {errors.email && errors.email.type === 'required' && <span className="alert">Please Enter Your Email!</span>}
          </div>

          {/* dropdown that can help the user specify what they want to comment on */}
          <div className="box">
            <select className="topic">
              <option value="pick-a-topic">What is the topic of your comment?</option>
              <option value="general-comment">General Comment</option>
              <option value="DSMC2-BRAIN-RED-DRAGON-X-5K-S35">DSMC2 BRAIN RED DRAGON-X 5K S35</option>
              <option value="Canon-EOS-1D-Mark-IV-(Used)">Canon EOS 1D Mark IV (Used)</option>
              <option value="EF-35mm-f/1.4L-USM">EF 35mm f/1.4L USM</option>
              <option value="EF-100mm-f/2.8-Macro-USM">EF 100mm f/2.8 Macro USM</option>
              <option value="Joby-GorillaPod-Tripod">Joby GorillaPod Tripod</option>
              <option value="Travel-Tripod-by-Peak-Design">Travel Tripod by Peak Design</option>
              <option value="Aputure-AL-MX">Aputure AL-MX</option>
              <option value="Aputure-LS-mini20">Aputure-LS-mini20</option>
              <option value="The-Brixton-by-ONA">The Brixton by ONA</option>
              <option value="Waterproof-Waxed-Canvas-Bag-by-Woosir">Waterproof Waxed Canvas Bag by Woosir</option>
              <option value="GNARBOX-2.0-SSD-(1-TB)">GNARBOX 2.0 SSD (1 TB)</option>
              <option value="Seagate-2TB-Portable-External-Hard-Drive">Seagate 2TB Portable External Hard Drive</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* the comment portion of the form */}
          <div className="box comment style-commentbox">
            <div>
              <label htmlFor="response">Anything you want to tell us?</label> 
            </div>
            <br />
            <div>
              <textarea id="response" name="comments" rows="10" cols="30"></textarea>
            </div>
          </div>

          {/* submit button */}
          <div className="submit">
            <button type="submit">Submit</button>
          </div>

        </fieldset> 
      </div>
    </form>
  );
};

export default Form 