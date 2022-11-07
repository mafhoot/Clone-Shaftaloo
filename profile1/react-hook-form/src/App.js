import './App.css';
import { useForm } from 'react-hook-form';



const App = () => {
	const { register, handleSubmit } = useForm();

	const onSubmit = data => {
		console.log(data);
	};

	// console.log(errors);
	return (
		// <form className="App" onSubmit={handleSubmit(onSubmit)}>
		// 	{/* <h1>My profile</h1>
		// 	<hr></hr> */}
			
		// 	{/* <div className='Username'>
		// 	   <span>
		// 			<h1 >Username</h1>
		// 	   </span>  */}
		// 	   {/* /// میندازه جلوش */}
		// 	{/* </div> */}


		// 	<div class="col-25">
		// 		<label for="fname">First Name</label>
		// 	</div>

			
		// 	<input
		// 		type="text"
		// 		placeholder="Username"
		// 		name="username"
		// 		ref={register({ required: true })}
		// 	/>
		// 	{/* {errors.username && <p>Username required</p>} */}




		// 	<div className='Email'>
		// 	   <h1>Email</h1>
		// 	</div>
		// 	<input
		// 		type="email"
		// 		placeholder="Email"
		// 		name="email"
		// 		ref={register({ required: true })}
		// 	/>




		//     <div  className='Password'>
		// 	   <h1>Password</h1>
		// 	</div>
		// 	<input
		// 		type="password"
		// 		placeholder="Password"
		// 		name="password"
		// 		ref={register({ required: true })}
		// 	/>




        //     <div className='Firstname'>
		// 	   <h1>Firstname</h1>
		// 	</div>
		// 	<input
		// 		type="text"
		// 		placeholder="Firstname"
		// 		name="Firstname"
		// 		ref={register({ required: true })}
		// 	/>




			
        //     <div className='Lastname'>
		// 	   <h1>Lastname</h1>
		// 	</div>
		// 	<input
		// 		type="text"
		// 		placeholder="Lastname"
		// 		name="Lastname"
		// 		ref={register({ required: true })}
		// 	/>




        //     <div>
		// 	   <h1>Country</h1>
		// 	</div>
		// 	<input
		// 		type="text"
		// 		placeholder="Country"
		// 		name="Country"
		// 		ref={register({ required: true })}
		// 	/>




        //     <div>
		// 	    <h1>Bio</h1>
		// 	</div>
		// 	<input
		// 		type="text"
		// 		placeholder="Bio"
		// 		name="Bio"
		// 		ref={register({ required: true })}
		// 	/>


            


		// 	{/* <input type="submit" /> */}
		// 	<input
		// 		type="submit"
		// 		name="edit"
		// 		// ref={register({ required: true })}
		// 	/>

			
	
		// </form>
















	<div class="container">
	<form>
		<div class="row">
		<div class="col-25">
			<label for="fname">First Name</label>
		</div>
		<div class="col-75">
			<input type="text" id="fname" name="firstname" placeholder="Your name.."/>
		</div>
		</div>
		<div class="row">
		<div class="col-25">
			<label for="lname">Last Name</label>
		</div>
		<div class="col-75">
			<input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
		</div>
		</div>
		<div class="row">
		<div class="col-25">
			<label for="country">Country</label>
		</div>
		<div class="col-75">
			<select id="country" name="country">
			<option value="australia">Australia</option>
			<option value="canada">Canada</option>
			<option value="usa">USA</option>
			</select>
		</div>
		</div>
		<div class="row">
		<div class="col-25">
			<label for="subject">Subject</label>
		</div>
		<div class="col-75">
			<textarea id="subject" name="subject" placeholder="Write something.." ></textarea>
		</div>
		</div>
		<div class="row">
		<input type="submit" value="Submit"/>
		</div>
	</form>
	</div>

		
			
	);
};

export default App;

// import React, { useState } from 'react';

// const App = () => {
// 	const [firstName, setFirstName] = useState('');
// 	return (
// 		<form className="App">
// 			<input
// 				type="text"
// 				placeholder="First name"
// 				name="firstname"
// 				value={firstName}
// 				onChange={e => setFirstName(e.target.value)}
// 			/>
// 			<input type="submit" />
// 		</form>
// 	);
// };

// export default App;




