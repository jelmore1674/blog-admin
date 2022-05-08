import DeleteIcon from '../icons/DeleteIcon';
import MarkRead from '../icons/MarkRead';

interface Props {
	messages: any[];
	handleMarkRead: any;
}

const MessageList: React.FC<Props> = ({ messages, handleMarkRead }) => {
	const handleDelete = (id: number) => {
		console.log(id);
	};

	return (
		<>
			{messages.map((message) => (
				<div
					key={message.id}
					className={`relative bg-slate-600 rounded mx-auto p-4 w-10/12 sm:w-2/3 my-8 ${
						!message.read
							? 'border border-green-500'
							: 'border-none'
					}`}>
					<DeleteIcon
						className='absolute  cursor-pointer hover:text-red-500'
						onClick={() => {
							handleDelete(message.id);
						}}
					/>
					<MarkRead
						className='absolute cursor-pointer hover:text-orange-500 top-16'
						onClick={() => {
							handleMarkRead(message);
						}}
					/>
					<div className='flex w-100 justify-between items-center mx-12 mt-4'>
						<div className='flex flex-col'>
							<span>Name: </span>
							{message.name}
						</div>
						<div className='flex flex-col'>
							<span>Email: </span>
							<a href={`mailto:${message.email}`}>
								{message.email}
							</a>
						</div>
					</div>
					<div className='flex flex-col w-100 mx-12 my-4'>
						<span>Message: </span>
						{message.message}
					</div>
				</div>
			))}
		</>
	);
};

export default MessageList;
