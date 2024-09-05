/* eslint-disable react/prop-types */

function Section(props) {
	console.log(props);
	const { sectionText, sectionTitle, children, id } = props;
	return (
		<section id={id}>
			<div className="h-[12vh] flex flex-col items-center justify-center shadow gap-2">
				<p
					className="
				text-lg
				 "
				>
					{sectionText}
				</p>
				<h1 className="text-3xl  font-bold" style={{ letterSpacing: "1px" }}>
					{sectionTitle}
				</h1>
			</div>
			{children}
		</section>
	);
}

export default Section;
