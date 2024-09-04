function Card(props) {
	// eslint-disable-next-line react/prop-types
	const { children } = props;
	return (
		<div className="h-[500px] w-[350px]  rounded-3xl grid  place-items-center cursor-pointer animated-card overflow-hidden relative shadow-dark mb-20 m-auto lg:m-0">
			<div className="grid z-10 w-full h-full p-10 grid-rows-[1fr_6fr]">
				{children}
			</div>
		</div>
	);
}

export default Card;
