import './styles/theme.css'
import './styles/global.css'
import { Home } from './pages/Home'
import { useState } from 'react';
import { TaskStateModel } from './models/TaskStateModel';

const initialState: TaskStateModel = {
	tasks: [],
	secondsRemaining: 0,
	formattedSecondsRemaining: '10:00',
	activeTask: null,
	currentCycle: 0,
	config: {
		workTime: 25,
		shortBreakTime: 5,
		longBreakTime: 15
	}
}

export default function App() {
	const [state, setState] = useState(initialState);

	return (
		<Home />
	)
}