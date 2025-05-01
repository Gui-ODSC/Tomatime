import './styles/theme.css'
import './styles/global.css'
import { Container } from './components/Container'
import { Heading } from './components/Heading'
import { Logo } from './components/Logo'

export default function App() {
	return (
		<>
			<Container>
				<Logo />
			</Container>
			<Container>
				<Heading>Menu</Heading>
			</Container>
			<Container>
				<Heading>Form</Heading>
			</Container>
			<Container>
				<Heading>Footer</Heading>
			</Container>
		</>
	)
}