import { useState, useRef, useEffect } from "react";
import Button from "./Button";
import TodoItem from "./Todoitem";

const _todoItems = [
    {id: 1, text: 'Text1', completed: true},
    {id: 2, text: 'Text2', completed: false},
    {id: 3, text: 'Text3', completed: true},
    {id: 4, text: 'Text4', completed: false},
];


export default function TodoApp() {
    const [value, setvalue] = useState('');
    const [todoItems, setTodoItems] = useState(_todoItems);
    const inputRef = useRef();
    // console.log(inputRef);

    

    function addNewItem(e) {
        e.preventDefault();
        // alert('Form is submitted');
        let newItem = {
            id: Date.now(),
            text: value,
            completed: false
        }
         setTodoItems([newItem, ...todoItems]);
         setvalue('');

    }


    const handleDelete = (id) => {
        const newTodoItems = todoItems.filter(TodoItems => TodoItems.id !== id);
        setTodoItems(newTodoItems);
            
    }
    function changeItem(id) {
        let changedItems = todoItems.map(item => {
            if (item.id === id) {
                item.completed = !item.completed
            }
            return item;
        });
        setTodoItems(changedItems);
    }
    useEffect(() => {
        inputRef.current.focus();

    }, []);

    


    return (
        <div className="TodoApp">
            <h3>Todo App</h3>
            <form onSubmit={addNewItem} >
                <input 
                ref={inputRef} 
                type='text' 
                value={value} 
                onChange={(e) => setvalue(e.target.value)}
            />
            <Button type='submit' text='Add Item' />
         </form>
         <ul>
                {
                    todoItems.map(item => {
                        return (
                            <TodoItem 
                                key={item.id} 
                                completed={item.completed} 
                                id={item.id} 
                                text={item.text} 
                                passedFunction={changeItem} 
                                handleDelete={handleDelete}
                            />
                            
                        )
                    })
                }
            </ul>
        </div>

    )
}

