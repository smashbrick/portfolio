import Hamburger from "../icons/Hamburger";
import Close from "../icons/Close";
import { useState } from "react";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	//Hamburger function
	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		// Desktop Version
		<>
			<header
				className="
      hidden
      md:flex 
			sticky
			top-0
      justify-center
      p-5
      text-2xl
shadow-light
			bg-white
			z-20
			md:h-[12vh]
			h-[6]


			items-center
      "
			>
				<nav className="flex gap-20">
					<a className="nav-links" href="#skills">
						Skills
					</a>
					<a className="nav-links" href="#about">
						About
					</a>
					<a className="nav-links" href="#projects">
						Projects
					</a>
				</nav>
			</header>
			{/* //Mobile version */}
			<header
				className="md:hidden shadow-light p-3 min-h-[6vh] z-20 bg-white	sticky
			top-0 "
			>
				<div
					className="
						cursor-pointer flex justify-end "
				>
					<div
						onClick={() => {
							toggleMenu();
						}}
					>
						<div className="shadow-custom">
							{isOpen ? <Close /> : <Hamburger />}
						</div>
					</div>
				</div>

				<div
					className={`flex flex-col overflow-hidden transition-all duration-300  ${
						isOpen ? "max-h-screen opacity-100 mt-4" : "max-h-0 opacity-0"
					}`}
				>
					<nav className="flex flex-col gap-4">
						<a href="#skills" onClick={() => toggleMenu()}>
							Skills
						</a>
						<a href="#about" onClick={() => toggleMenu()}>
							About
						</a>
						<a href="#projects " onClick={() => toggleMenu()}>
							Projects
						</a>
					</nav>
				</div>
			</header>
		</>
	);
}

export default Navbar;
