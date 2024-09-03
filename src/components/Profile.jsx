function Profile() {
	return (
		<main className="block md:flex items-center justify-center gap-20 h-[88vh] p-20">
			<div className="sm:w-[400px] w-[300px] border-b-4 border-black m-auto md:m-0 avatar-class">
				<img src="src/assets/avatar.png" alt="" />
			</div>
			<div className="text-center flex flex-col gap-4 mt-[60px]">
				<p className="text-secondaryBlack font-semibold text-2xl">
					Hello I&apos;m
				</p>
				<h1 className="text-5xl font-bold whitespace-nowrap ">Ankith Swaraj</h1>
				<p className="font-semibold text-2xl text-secondaryBlack whitespace-nowrap">
					Full-stack Developer
				</p>
				<div className="flex justify-center gap-4">
					<button
						className=" p-4 rounded-[30px] text-1xl border-2 border-black
            font-semibold

          "
					>
						Download CV
					</button>
					<button
						className=" p-4 rounded-[30px] text-1xl border-2 border-black font-semibold  bg-black
            text-white"
					>
						Contact me !
					</button>
				</div>
				<div className="flex justify-center gap-8">
					<button>
						<img src="src/assets/github.png" alt="" className="h-[35px]" />
					</button>
					<button>
						<img src="src/assets/linkedin.png" alt="" className="h-[35px]" />
					</button>
				</div>
			</div>
		</main>
	);
}

export default Profile;
