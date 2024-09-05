function Card(props) {
	// eslint-disable-next-line react/prop-types
	const { children } = props;
	return (
		<div className="sm:h-[500px] sm:w-[350px] h-[450px] w-[300px]  rounded-3xl grid  place-items-center  animated-card overflow-hidden relative shadow-dark mb-20 m-auto lg:m-0 ">
			<div className="grid z-10 w-full h-full p-10 grid-rows-[1fr_6fr]">
				{children}
			</div>
		</div>
	);
}

export default Card;
