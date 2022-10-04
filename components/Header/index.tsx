import * as React from "react";
import Link from "next/link";
import DarkMode from "../DarkMode";

const Header = () => {
	return (
		<header className="h-16 px-5 py-5 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between print:hidden dark:text-gray-100">
			<div className="flex items-center justify-between w-full max-w-screen-xl mx-auto space-x-4">
				<div className="flex items-center">
				</div>
				<div className="flex-grow"></div>
				<div className="text-sm flex-shrink-0">
					<div className="flex items-center justify-center space-x-1">
						<DarkMode />
					</div>
				</div>
			</div>
		</header>
	);
};
export default Header;
