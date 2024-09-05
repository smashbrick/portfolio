/* eslint-disable react/prop-types */
import Section from "./Section";

const aboutData = {
	experience: {
		icon: "/experience.png",
		title: "Experience",
		details: "2+ years",
		position: "Front-end intern at AntStack",
	},
	education: {
		icon: "/education.png",
		title: "Education",
		degree: "B.E CS",
		additionalInfo: "Engineering (8.5 CGPA)",
	},
	description:
		"Welcome to my corner of the web! I'm all about keeping things simple and clean, whether it's in design, code, or everyday life. I love taking on new challenges and exploring the latest in tech.",
};

const InfoCard = ({ icon, title, details, subtext }) => (
	<div className="shadow-dark p-6 rounded-3xl flex-1 flex flex-col items-center">
		<img src={icon} alt={`${title} icon`} className="w-[2rem] mb-4" />
		<h3 className="text-2xl font-bold">{title}</h3>
		<p className="text-lg text-center">
			{details} <br /> {subtext}
		</p>
	</div>
);

function About() {
	return (
		<Section sectionText="Get to know more" sectionTitle="About Me" id="about">
			<div className="md:grid grid-cols-[1fr_2fr] items-center md:h-[88vh] h-auto p-10 block gap-5">
				<div className="sm:w-[350px] w-[300px] lg:w-[400px] m-auto relative avatar-class">
					<img src="/avatartion-about.png" alt="Avatar image of author" />
					<div className="absolute z-[-1] top-[10%]">
						<img src="/blob.gif" alt="Just a blob icon" />
					</div>
				</div>
				<div className="lg:px-[50px]">
					<div className="flex justify-center md:gap-50 gap-8 text-center mt-[40px] md:mt-0 md:px-12">
						<InfoCard
							icon={aboutData.experience.icon}
							title={aboutData.experience.title}
							details={aboutData.experience.details}
							subtext={aboutData.experience.position}
						/>
						<InfoCard
							icon={aboutData.education.icon}
							title={aboutData.education.title}
							details={aboutData.education.degree}
							subtext={aboutData.education.additionalInfo}
						/>
					</div>
					<p className="text-center mt-[15px] mb-[15px] sm:mt-[50px] text-lg sm:mb-[50px]">
						{aboutData.description}
					</p>
				</div>
			</div>
		</Section>
	);
}

export default About;
