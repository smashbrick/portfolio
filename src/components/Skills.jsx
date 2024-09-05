import Card from "./Card";
import Section from "./Section";

const skills = {
	Frontend: [
		"JavaScript",
		"Reactjs",
		"TypeScript",
		"SASS/Scss",
		"Tailwind",
		"HTML/CSS",
	],
	Backend: ["Golang", "MongoDB", "Postgress", "Prisma"],
	Tools: ["Git & Github", "Postman", "Figma", "VsCode"],
};
function Skills() {
	return (
		<Section sectionText="Explore my" sectionTitle="Skills" id="skills">
			<div className=" lg:h-[88vh] h-auto p-10 block lg:flex justify-around items-center">
				{/* Card goes here */}
				<Card>
					<h3 className="text-2xl font-semibold text-center">Front-end</h3>
					<div className="relative">
						<ol className="text-xl w-full h-full flex flex-col gap-4">
							{skills.Frontend.map((skill, index) => (
								<li
									key={index}
									className="flex gap-4 hover:text-secondaryBlack"
								>
									<img
										src="/checkmark.png"
										alt="Checkmark"
										className="h-[2rem]"
									/>
									{skill}
								</li>
							))}
						</ol>
						<img
							src="/duck.png"
							alt="Duck icon"
							className="absolute w-[3rem] bottom-[-5%]"
						/>
					</div>
				</Card>
				<Card>
					<h3 className="text-2xl  font-semibold text-center">Back-end</h3>
					<div className="relative">
						<ol className="text-xl w-full h-full flex flex-col gap-4">
							{skills.Backend.map((skill, index) => (
								<li
									key={index}
									className="flex gap-4 hover:text-secondaryBlack"
								>
									<img
										src="/checkmark.png"
										alt="Checkmark"
										className="w-[2rem] "
									/>
									{skill}
								</li>
							))}
						</ol>
						<img
							src="/cat.png"
							alt="cat icon"
							className="absolute w-[4rem] bottom-[-5%]"
						/>
					</div>
				</Card>
				<Card>
					<h3 className="text-2xl  font-semibold text-center">Tools</h3>
					<div>
						<ol className="text-xl w-full h-full flex flex-col gap-4">
							{skills.Tools.map((skill, index) => (
								<li
									key={index}
									className="flex gap-4  hover:text-secondaryBlack"
								>
									<img
										src="checkmark.png"
										alt="Checkmark"
										className="w-[2rem]"
									/>
									{skill}
								</li>
							))}
						</ol>
					</div>
				</Card>
			</div>
		</Section>
	);
}

export default Skills;
