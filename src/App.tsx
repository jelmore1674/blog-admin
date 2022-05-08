import React from 'react';
import './App.css';
import { supabase } from './utils/supabase';
import LoginForm from './components/LoginForm/LoginForm';
import MessageList from './components/MessageList/MessageList';

function App() {
	const [loading, setLoading] = React.useState(true);
	const [user, setUser] = React.useState<any>(null);
	const [messages, setMessages] = React.useState<any>([]);
	const [messageUpdate, setMessageUpdate] = React.useState(false);

	const handleMarkRead = async (message: any) => {
		await supabase
			.from('messages')
			.update({ read: !message.read })
			.match({ id: message.id });
		setMessageUpdate(!messageUpdate);
	};

	React.useEffect(() => {
		async function fetchData() {
			const { data, error } = await supabase
				.from('messages')
				.select('*')
				.order('created_at', { ascending: false });
			data ? setMessages(data) : console.log(error);
			const session = await supabase.auth.session();
			session ? setUser(session.user!) : console.error(error);
			setTimeout(() => {
				setLoading(false);
			}, 500);
		}
		fetchData();
	}, [messageUpdate]);

	return (
		<div className=''>
			{loading ? (
				<div className='flex justify-center items-center h-screen'>
					<div
						style={{ borderTopColor: 'transparent' }}
						className='w-16 h-16 border-4 border-blue-400 border-solid rounded-full animate-spin'
					/>
				</div>
			) : user ? (
				<>
					<h3>Welcome {user.email}</h3>
					<MessageList
						messages={messages}
						handleMarkRead={handleMarkRead}
					/>
				</>
			) : (
				<LoginForm />
			)}
		</div>
	);
}

export default App;
