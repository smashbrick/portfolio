function Profile() {
	return (
		<main className="block md:flex items-center justify-center gap-20 md:h-[88vh] h-[94vh] p-10">
			<div className="sm:w-[400px] w-[300px] m-auto md:m-0 avatar-class relative">
				<img src="/avatar.png" alt="Avatar image of author" />
				<div className="absolute z-[-1] top-[10%]">
					<img src="/blob.gif" alt="Just a blob icon" />
				</div>
			</div>
			<div className="text-center flex flex-col gap-4 mt-[60px]">
				<p className="text-secondaryBlack font-semibold text-xl">
					Hello I&apos;m
				</p>
				<h1 className="text-5xl font-bold whitespace-nowrap ">Ankith Swaraj</h1>
				<p className="font-semibold text-2xl text-secondaryBlack whitespace-nowrap">
					Full-stack Developer
				</p>
				<div className="flex justify-center gap-4 py-0 px-5">
					<a
						href=""
						className="p-4 rounded-[30px] text-1xl border-2 font-semibold flex-1 relative  border-black animated-black  overflow-hidden"
					>
						Resume
					</a>
					<a
						href="mailto:smashbrick@yahoo.com"
						className="p-4 rounded-[30px] text-1xl border-2 font-semibold flex-1 relative  border-black bg-black text-white  animated-white overflow-hidden "
					>
						Contact
					</a>
				</div>
				<div className="flex justify-center gap-8">
					<a
						href="https://github.com/smashbrick"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src="src/assets/github.png" alt="" className="h-[35px]" />
					</a>
					<a
						href="https://www.linkedin.com/in/smashbrick/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src="src/assets/linkedin.png" alt="" className="h-[35px]" />
					</a>
				</div>
			</div>
		</main>
	);
}

export default Profile;
