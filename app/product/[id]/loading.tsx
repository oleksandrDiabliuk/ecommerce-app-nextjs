export default function Loading() {
	return (
		<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
			<div className="h-12 w-12 rounded-full border-2 border-dotted border-blue-600 animate-spin" />
		</div>
	);
}