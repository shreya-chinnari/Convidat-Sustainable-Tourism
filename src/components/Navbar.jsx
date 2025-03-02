import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/logo-black.png"; // Import the logo

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const dropdownRef = useRef(null);

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setIsDropdownOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<nav className="bg-[#020301] text-white px-6 py-4 shadow-md">
			<div className="max-w-7xl mx-auto flex justify-between items-center">
				{/* Logo */}
				<Link
					to="/"
					className="flex items-center"
				>
					<img
						src={logo}
						alt="Convidat Logo"
						className="h-14 w-auto"
					/>{" "}
					{/* Adjust size if needed */}
				</Link>

				<div className="hidden md:flex space-x-6 items-center">
					<Link
						to="/"
						className="hover:text-[#b2b8d8]"
					>
						Home
					</Link>

					{/* Explore Dropdown */}
					<div
						className="relative"
						ref={dropdownRef}
					>
						<button
							onClick={() => setIsDropdownOpen(!isDropdownOpen)}
							className="flex items-center gap-1 hover:text-[#b2b8d8] focus:outline-none"
						>
							Explore <ChevronDown size={16} />
						</button>

						{isDropdownOpen && (
							<div className="absolute left-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg">
								<Link
									to="/places"
									className="block px-4 py-2 hover:bg-[#b2b8d8]"
									onClick={() => setIsDropdownOpen(false)}
								>
									Places
								</Link>
								<Link
									to="/hotels"
									className="block px-4 py-2 hover:bg-[#b2b8d8]"
									onClick={() => setIsDropdownOpen(false)}
								>
									Hotels
								</Link>
								<Link
									to="/businesses"
									className="block px-4 py-2 hover:bg-[#b2b8d8]"
									onClick={() => setIsDropdownOpen(false)}
								>
									Businesses
								</Link>
							</div>
						)}
					</div>

					<Link
						to="/resources"
						className="hover:text-[#b2b8d8]"
					>
						Resources
					</Link>
					<Link
						to="/volunteerism"
						className="hover:text-[#b2b8d8]"
					>
						Volunteerism
					</Link>
					<Link
						to="/leadership"
						className="hover:text-[#b2b8d8]"
					>
						Leadership
					</Link>
					<Link
						to="/dashboard"
						className="hover:text-[#b2b8d8]"
					>
						Dashboard
					</Link>
					<Link
						to="/login"
						className="hover:text-[#b2b8d8] text-[#b2b8d8]"
					>
						Login
					</Link>
				</div>

				<button
					onClick={() => setIsOpen(!isOpen)}
					className="md:hidden"
				>
					{isOpen ? <X size={28} /> : <Menu size={28} />}
				</button>
			</div>

			{isOpen && (
				<div className="md:hidden flex flex-col space-y-3 mt-4 bg-[#020301] py-4 px-6 rounded-lg">
					<Link
						to="/"
						onClick={() => setIsOpen(false)}
						className="hover:text-[#b2b8d8]"
					>
						Home
					</Link>

					<button
						onClick={() => setIsDropdownOpen(!isDropdownOpen)}
						className="flex justify-between items-center w-full hover:text-[#b2b8d8]"
					>
						Explore <ChevronDown size={16} />
					</button>

					{isDropdownOpen && (
						<div className="flex flex-col space-y-2 bg-[#020301] px-4 py-2 rounded-lg">
							<Link
								to="/places"
								onClick={() => {
									setIsDropdownOpen(false);
									setIsOpen(false);
								}}
								className="hover:text-[#b2b8d8]"
							>
								Places
							</Link>
							<Link
								to="/hotels"
								onClick={() => {
									setIsDropdownOpen(false);
									setIsOpen(false);
								}}
								className="hover:text-[#b2b8d8]"
							>
								Hotels
							</Link>
							<Link
								to="/businesses"
								onClick={() => {
									setIsDropdownOpen(false);
									setIsOpen(false);
								}}
								className="hover:text-[#b2b8d8]"
							>
								Businesses
							</Link>
						</div>
					)}

					<Link
						to="/resources"
						onClick={() => setIsOpen(false)}
						className="hover:text-[#b2b8d8]"
					>
						Resources
					</Link>
					<Link
						to="/volunteerism"
						onClick={() => setIsOpen(false)}
						className="hover:text-[#b2b8d8]"
					>
						Volunteerism
					</Link>
					<Link
						to="/leadership"
						onClick={() => setIsOpen(false)}
						className="hover:text-[#b2b8d8]"
					>
						Leadership
					</Link>
					<Link
						to="/dashboard"
						onClick={() => setIsOpen(false)}
						className="hover:text-[#b2b8d8]"
					>
						Dashboard
					</Link>
					<Link
						to="/login"
						onClick={() => setIsOpen(false)}
						className="hover:text-[#b2b8d8]"
					>
						Login
					</Link>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
