interface Props {
    numberOfIncompleteTasks: any
}

const TodoFooter:React.FC<Props> = ({ numberOfIncompleteTasks }) => {

    return(
        <div className="todo-footer">
            <p>{numberOfIncompleteTasks} {numberOfIncompleteTasks === 1 ? "task" : "tasks"} left</p>
        </div>
    )
}

export default TodoFooter;