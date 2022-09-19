import "./styles/global.css";
import { FormElement, Layout, Content, InputElement, CapitalElement, CapitalContent, ItemElement, ErrorElement } from "./components/Layout";
import { BsSearch } from "react-icons/bs";
import React, { useEffect, useState } from "react";


interface ContentProps {
	current: {
		condition: {
			icon: string,
			text: string
		},
		feelslike_c: number,
		humidity: number,
		temp_c: number,
		wind_kph: number
	},
	location: {
		country: string,
		name: string
	}
}

function App() {

	const [capital, setCapital] = useState("São Paulo");
	const [content, setContent] = useState({} as ContentProps);
	const [searchInput, setSearchInput] = useState(String);
	const [error, setError] = useState(Boolean);

	useEffect(() => {
		async function fetchData() {
			const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=efa42400eee849a293f144825221605&q=${capital}&aqi=no`);
			const data = await res.json();
			if (data.error) {
				setError(true);
			}
			else {
				setContent(data);
				setError(false);
			}
		}

		fetchData();
	}, [capital])

	const checkContent = (content: ContentProps) => {
		if (content.location) {
			return (
				<CapitalElement>
					<h1>{content.location.name} - {content.location.country}</h1>
					<img alt={content.current.condition.text} src={content.current.condition.icon} />
					<CapitalContent>
						<ItemElement>
							<h2>Umidade</h2>
							<p>{content.current.humidity}%</p>
						</ItemElement>
						<ItemElement>
							<h2>Vento</h2>
							<p>{content.current.wind_kph}km/h</p>
						</ItemElement>
						<ItemElement>
							<h2>Sensação</h2>
							<p>{content.current.feelslike_c}ºC</p>
						</ItemElement>
						<ItemElement>
							<h2>Temperatura</h2>
							<p>{content.current.temp_c}ºC</p>
						</ItemElement>
					</CapitalContent>
				</CapitalElement>
			)
		}
	}

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		setCapital(searchInput);
	}

	const checkError = (error: boolean) => {
		if (error) {
			return (
				<ErrorElement>
					<p>A cidade informada não foi localizada em nosso banco de dados.</p>
				</ErrorElement>
			)
		}
	}

	return (
		<Layout>
			<Content>
				<h1>Previsão do tempo</h1>
				<FormElement onSubmit={handleSubmit}>
					{checkError(error)}
					<InputElement>
						<input type="search" name="search" value={searchInput} onChange={(e) => { setSearchInput(e.target.value) }} placeholder="Insira aqui o nome da cidade..." required />
						<button type="submit">
							<BsSearch />
						</button>
					</InputElement>
				</FormElement>
				{checkContent(content)}
			</Content>
		</Layout>
	)
}

export default App
