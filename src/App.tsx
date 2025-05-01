import './styles/theme.css'
import './styles/global.css'
import { Container } from './components/Container'
import { Heading } from './components/Heading'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'

export default function App() {
	return (
		<>
			<Container>
				<Logo />
			</Container>
			<Container>
				<Menu />
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