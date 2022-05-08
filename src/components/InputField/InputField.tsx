import React from 'react';

interface InputFieldProps {
	label: string;
	type: string;
	id: string;
	value: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputFieldProps> = ({
	label,
	type,
	id,
	value,
	onChange,
}) => {
	return (
		<div className='flex flex-col w-100 my-4'>
			<label className='w-100 mb-2' htmlFor='name'>
				{label}
			</label>
			<input
				className='w-100 shadow-md focus-visible:outline-green-500 bg-slate-300 rounded text-black p-2'
				type={type}
				id={id}
				name={id}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
};

export default Input;
