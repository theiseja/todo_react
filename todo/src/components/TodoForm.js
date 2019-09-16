const TodoForm = ({addTodo}) => {
    // input tracker
    let input;

    return (
        <div>
            <input ref={node => {
                input = node;
            }} />
        </div>
    )
}