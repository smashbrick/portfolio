import Card from "./Card";
import Section from "./Section";

const projects = [
	{
		name: "Tic-Tac-Toe",
		languages: ["JavaScript", "HTML", "CSS"],
		description:
			"A web application built with JavaScript, HTML, and CSS, showcasing interactive features and responsive design.",
		live: "https://yahoo.com",
		github: "https://github.com/smashbrick/to-do",
		languageIcons: [
			"src/assets/react.png",
			"src/assets/js.png",
			"src/assets/golang.png",
		],
	},
	{
		name: "Not-Tac-Toe",
		languages: ["TypeScript", "React", "TailwindCSS"],
		description:
			"A dynamic React application utilizing TypeScript for type safety and TailwindCSS for modern styling and layout.",
		live: "https://youtube.com",
		github: "https://github.com/smashbrick/random-background-generator",
		languageIcons: [
			"src/assets/react.png",
			"src/assets/sass.png",

			"src/assets/typescript.png",
		],
	},
	{
		name: "Testing-Tac-Toe",
		languages: ["Node.js", "Express", "MongoDB"],
		description:
			"A server-side application using Node.js and Express for building RESTful APIs, with MongoDB for data storage.",
		live: "https://google.com",
		github: "https://github.com/smashbrick/weather-app",
		languageIcons: [
			"src/assets/react.png",
			"src/assets/typescript.png",
			"src/assets/sass.png",
		],
	},
];

function Projects() {
	return (
		<Section sectionText="Browse my" sectionTitle="Projects" id="projects">
			<div className="flex flex-col lg:h-[88vh] justify-between p-10">
				<div className="h-auto p-10 block lg:flex justify-around items-center gap-10">
					{projects.map((project, index) => (
						<Card key={index}>
							<h3 className="text-2xl font-semibold text-center">
								{project.name}
							</h3>
							<div className="relative">
								<p>{project.description}</p>
								<div className="flex gap-5 mt-5">
									{project.languageIcons.map((icon, iconIndex) => (
										<img
											key={iconIndex}
											src={icon}
											alt={`Icon for ${project.languages[iconIndex]}`}
											className="w-8 h-8"
										/>
									))}
								</div>
								<a
									href={project.live}
									rel="noopener noreferrer"
									target="_blank"
									className="absolute w-[2rem] bottom-[-5%]"
								>
									<img src="src/assets/link.svg" alt="Website icon" />
								</a>
								<a
									href={project.github}
									target="_blank"
									rel="noopener noreferrer"
									className="absolute w-[3rem] bottom-[-5%] right-0"
								>
									<img
										src="src/assets/github.png"
										alt="GitHub icon"
										className="h-[35px]"
									/>
								</a>
							</div>
						</Card>
					))}
				</div>

				<footer className="text-center">
					Copyright © 2024 Ankith Swaraj. All Rights Reserved.
				</footer>
			</div>
		</Section>
	);
}

export default Projects;
