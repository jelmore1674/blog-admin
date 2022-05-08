import React from 'react';
import Input from '../InputField/InputField';
import { supabase } from '../../utils/supabase';

const LoginForm = () => {
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');

	const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		if (name === 'email') {
			setEmail(value);
		} else if (name === 'password') {
			setPassword(value);
		}
	};

	const handleFormSubmit = async (
		event: React.FormEvent<HTMLFormElement>
	) => {
		event.preventDefault();
		const { session, error } = await supabase.auth.signIn({
			email,
			password,
		});
		session ? console.log(session) : console.error(error);
	};

	return (
		<form
			className='flex flex-col w-80 m-auto bg-slate-600 p-4 shadow-2xl my-80 border rounded-lg'
			onSubmit={handleFormSubmit}>
			<h1>Login</h1>
			<Input
				label={'Email'}
				type={'email'}
				id={'email'}
				value={email}
				onChange={handleFormChange}
			/>
			<Input
				label={'Password'}
				type={'password'}
				id={'password'}
				value={password}
				onChange={handleFormChange}
			/>
			<button className='bg-green-400 rounded border-2 border-white my-4'>
				Login
			</button>
		</form>
	);
};

export default LoginForm;
