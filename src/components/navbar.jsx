import Contactbtn from "./buttons/button";
import Linklist from "./linklist";
export default function Navbar() {
	return (
		<header className="flex justify-between items-center">
			<div>
				<h1 className="text-[40pt] font-bold">Lincoln</h1>
				<h3 className="text-[17pt] text-gray-500">Front-End Developer</h3>
			</div>
			<nav>
			<ul className="flex">
				<Linklist link="#" text=" Início "/>
				<Linklist link="/sobre" text=" Sobre "/>
				<Linklist link="#" text=" Projetos "/>
				<Linklist link="#" text=" Redes "/>
			</ul>
			</nav>
			<Contactbtn link="#" text="Contate-me" />
		</header>
	);
}
