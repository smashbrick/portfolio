/* eslint-disable react/prop-types */
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
	Backend: ["Golang", "MongoDB", "Postgres", "Prisma"],
	Tools: ["Git & Github", "Postman", "Figma", "VsCode"],
};

const SkillList = ({ category, items, iconSrc }) => (
	<Card>
		<h3 className="text-2xl font-semibold text-center">{category}</h3>
		<div className="relative">
			<ol className="text-xl w-full h-full flex flex-col gap-4">
				{items.map((skill, index) => (
					<li key={index} className="flex gap-4 items-center">
						<img
							src="/arrow-right-solid.svg"
							alt="Arrow"
							className="h-[1rem]"
						/>
						{skill}
					</li>
				))}
			</ol>
			{iconSrc && (
				<img
					src={iconSrc}
					alt={`${category.toLowerCase()} icon`}
					className="absolute w-[3rem] bottom-[-5%]"
				/>
			)}
		</div>
	</Card>
);

function Skills() {
	return (
		<Section sectionText="Explore my" sectionTitle="Skills" id="skills">
			<div className="lg:h-[88vh] h-auto sm:p-10 p-5 block lg:flex justify-around items-center">
				<SkillList
					category="Front-end"
					items={skills.Frontend}
					iconSrc="/duck.png"
				/>
				<SkillList
					category="Back-end"
					items={skills.Backend}
					iconSrc="/cat.png"
				/>
				<SkillList category="Tools" items={skills.Tools} />
			</div>
		</Section>
	);
}

export default Skills;
