import './styles/theme.css'
import './styles/global.css'
import { Container } from './components/Container'
import { Heading } from './components/Heading'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'
import { CountDown } from './components/CountDown'

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
				<CountDown />
			</Container>
			<Container>
				<Heading>Footer</Heading>
			</Container>
		</>
	)
}