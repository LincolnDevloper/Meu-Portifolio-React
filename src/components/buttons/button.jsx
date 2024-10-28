export default function Button(props) {
	
	return (
		<a
			href={props.link}
			className="py-3 px-5 bg-white rounded-[10rem] text-black text-[1rem] cursor-pointer shadow-racingRed shadow-presetbtn animate-btnNeon"
		>
			{props.text}
		</a>
	);
}