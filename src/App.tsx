import './styles/theme.css'
import './styles/global.css'
import Heading from './components/Heading';
import { TimerIcon } from 'lucide-react';

export default function App() {
	return (
		<>
			<Heading>
				Heading
				<button>
					<TimerIcon />
				</button>
			</Heading>
			<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam optio nemo ratione quibusdam asperiores alias est nulla qui nobis non, aspernatur laborum. Excepturi molestiae voluptates dolorum aspernatur! Magni, ipsa nihil!</p>
		</>
	)
}