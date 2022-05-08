interface Props {
	className: string;
	onClick: () => void;
}

const MarkRead: React.FC<Props> = ({ className, onClick }) => {
	return (
		<svg
			onClick={onClick}
			xmlns='http://www.w3.org/2000/svg'
			className={`h-6 w-6 ${className}`}
			fill='none'
			viewBox='0 0 24 24'
			stroke='currentColor'
			strokeWidth={2}>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20'
			/>
		</svg>
	);
};
export default MarkRead;
