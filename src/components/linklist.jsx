export default function Linklist(props) {
	return (
		<li className="m-4">
			<a href={props.link}>{props.text}</a>
		</li>
	);
}
