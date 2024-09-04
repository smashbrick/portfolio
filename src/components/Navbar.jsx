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
      shadow
      hidden
      md:flex 
      justify-center
      p-5
      text-2xl
			md:h-[12vh]
			h-[6]
			items-center
      "
			>
				<nav className="flex gap-20">
					<a className="nav-links" href="#">
						About
					</a>
					<a className="nav-links" href="#">
						Skills
					</a>
					<a className="nav-links" href="#">
						Projects
					</a>
					<a className="nav-links" href="#">
						Contact
					</a>
				</nav>
			</header>
			{/* //Mobile version */}
			<header className="md:hidden shadow p-3 min-h-[6vh] ">
				<div
					className="
						cursor-pointer flex justify-end "
				>
					<div
						onClick={() => {
							toggleMenu();
						}}
					>
						<div className="shadow">{isOpen ? <Close /> : <Hamburger />}</div>
					</div>
				</div>

				<div
					className={`flex flex-col overflow-hidden transition-all duration-300  ${
						isOpen ? "max-h-screen opacity-100 mt-4" : "max-h-0 opacity-0"
					}`}
				>
					<nav className="flex flex-col gap-4">
						<a href="#">About</a>
						<a href="#">Experience</a>
						<a href="#">Projects</a>
						<a href="#">Contact</a>
					</nav>
				</div>
			</header>
		</>
	);
}

export default Navbar;
