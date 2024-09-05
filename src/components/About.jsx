import Section from "./Section";

function About() {
	return (
		<Section sectionText="Get to know more" sectionTitle="About Me" id="about">
			<div className="md:grid grid-cols-[1fr_2fr] items-center h-[88vh] p-10 block gap-5 ">
				<div
					className="sm:w-[350px] w-[300px] lg:w-[400px] m-auto  relative 
        avatar-class
        "
				>
					<img src="/avatartion-about.png" alt="Avatar image of author" />
					<div className="absolute z-[-1] top-[10%]">
						<img src="/blob.gif" alt="Just a blob icon" />
					</div>
				</div>
				<div className="lg:px-[50px]">
					<div className="flex  justify-center md:gap-50 gap-8 text-center mt-[40px] md:mt-0">
						<div className="border border-black  p-6 rounded-3xl flex-1">
							<img
								src="/experience.png"
								alt="Experience icon"
								className="w-[2rem] m-auto"
							/>
							<h3 className="text-2xl font-bold">Experience</h3>
							<p className="text-lg">
								2+ years <br /> Front-end intern at AntStack
							</p>
						</div>
						<div className="border border-black flex flex-col p-6 rounded-3xl flex-1">
							<img
								src="/education.png"
								alt="Education icon "
								className="w-[2rem] m-auto"
							/>
							<h3 className="text-2xl font-bold">Education</h3>
							<p className="text-lg">
								B.E CS
								<br />
								Engineering (8.5 CGPA)
							</p>
						</div>
					</div>
					<p className="text-center mt-[15px] mb-[15px] sm:mt-[50px] text-lg sm:mb-[50px]">
						welcome to my corner of the web! <br /> I&apos;m all about keeping
						things simple and clean, whether it&apos;s in design, code, or
						everyday life. I love taking on new challenges and exploring the
						latest in tech.
					</p>
				</div>
			</div>
		</Section>
	);
}

export default About;
