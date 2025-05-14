import { PlayCircleIcon } from "lucide-react"
import { Button } from "../Button"
import { Cycles } from "../Cycles"
import { Input } from "../Input"
import React, { useRef } from "react";

export function MainForm() {

    const taskNameInput = useRef<HTMLInputElement>(null);

    function handleCreateNewTask(
        event: React.FormEvent<HTMLFormElement>
    ) {
        event.preventDefault();
        console.log(taskNameInput.current?.value)
    }

    return (
        <form onSubmit={handleCreateNewTask} className='form' action="">
            <div className='formRow'>
                <Input
                    id='meuImput'
                    type='text'
                    labelText='Tarefa'
                    placeholder='Digite algo'
                    ref={taskNameInput}
                />
            </div>

            <div className='formRow'>
                <p>
                    O próximo intervalo é de 25min
                </p>
            </div>

            <div className='formRow'>
                <Cycles />
            </div>

            <div className='formRow'>
                <Button icon={<PlayCircleIcon />} />
            </div>
        </form>
    )
}