import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react"; // Icons for menu and dropdown

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	return (
		<nav className="bg-green-900 text-white px-6 py-4 shadow-md">
			<div className="max-w-7xl mx-auto flex justify-between items-center">
				{/* Logo */}
				<Link
					to="/"
					className="text-2xl font-bold tracking-wide"
				>
					Convidat 🌿
				</Link>

				{/* Desktop Menu */}
				<div className="hidden md:flex space-x-6 items-center">
					<Link
						to="/"
						className="hover:text-green-300"
					>
						Home
					</Link>

					{/* Explore Dropdown */}
					<div className="relative">
						<button
							onClick={() => setIsDropdownOpen(!isDropdownOpen)}
							className="flex items-center gap-1 hover:text-green-300 focus:outline-none"
						>
							Explore <ChevronDown size={16} />
						</button>

						{isDropdownOpen && (
							<div className="absolute left-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg">
								<Link
									to="/places"
									className="block px-4 py-2 hover:bg-green-200"
									onClick={() => setIsDropdownOpen(false)}
								>
									Places
								</Link>
								<Link
									to="/hotels"
									className="block px-4 py-2 hover:bg-green-200"
									onClick={() => setIsDropdownOpen(false)}
								>
									Hotels
								</Link>
								<Link
									to="/businesses"
									className="block px-4 py-2 hover:bg-green-200"
									onClick={() => setIsDropdownOpen(false)}
								>
									Businesses
								</Link>
							</div>
						)}
					</div>

					<Link
						to="/resources"
						className="hover:text-green-300"
					>
						Resources
					</Link>
					<Link
						to="/volunteerism"
						className="hover:text-green-300"
					>
						Volunteerism
					</Link>
					<Link
						to="/leadership"
						className="hover:text-green-300"
					>
						Leadership
					</Link>
					<Link
						to="/dashboard"
						className="hover:text-green-300"
					>
						Dashboard
					</Link>
					<Link
						to="/login"
						className="hover:text-green-300"
					>
						Login
					</Link>
				</div>

				{/* Mobile Menu Button */}
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="md:hidden"
				>
					{isOpen ? <X size={28} /> : <Menu size={28} />}
				</button>
			</div>

			{/* Mobile Menu Dropdown */}
			{isOpen && (
				<div className="md:hidden flex flex-col space-y-3 mt-4 bg-green-800 py-4 px-6 rounded-lg">
					<Link
						to="/"
						onClick={() => setIsOpen(false)}
						className="hover:text-green-300"
					>
						Home
					</Link>

					{/* Mobile Explore Dropdown */}
					<button
						onClick={() => setIsDropdownOpen(!isDropdownOpen)}
						className="flex justify-between items-center w-full hover:text-green-300"
					>
						Explore <ChevronDown size={16} />
					</button>

					{isDropdownOpen && (
						<div className="flex flex-col space-y-2 bg-green-700 px-4 py-2 rounded-lg">
							<Link
								to="/places"
								onClick={() => {
									setIsDropdownOpen(false);
									setIsOpen(false);
								}}
								className="hover:text-green-300"
							>
								Places
							</Link>
							<Link
								to="/hotels"
								onClick={() => {
									setIsDropdownOpen(false);
									setIsOpen(false);
								}}
								className="hover:text-green-300"
							>
								Hotels
							</Link>
							<Link
								to="/businesses"
								onClick={() => {
									setIsDropdownOpen(false);
									setIsOpen(false);
								}}
								className="hover:text-green-300"
							>
								Businesses
							</Link>
						</div>
					)}

					<Link
						to="/resources"
						onClick={() => setIsOpen(false)}
						className="hover:text-green-300"
					>
						Resources
					</Link>
					<Link
						to="/volunteerism"
						onClick={() => setIsOpen(false)}
						className="hover:text-green-300"
					>
						Volunteerism
					</Link>
					<Link
						to="/leadership"
						onClick={() => setIsOpen(false)}
						className="hover:text-green-300"
					>
						Leadership
					</Link>
					<Link
						to="/dashboard"
						onClick={() => setIsOpen(false)}
						className="hover:text-green-300"
					>
						Dashboard
					</Link>
					<Link
						to="/login"
						onClick={() => setIsOpen(false)}
						className="hover:text-green-300"
					>
						Login
					</Link>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
