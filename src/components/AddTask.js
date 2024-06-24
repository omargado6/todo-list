import React, { useState } from 'react'
import CategorySelect from './CategorySelect';
import { useDispatch } from 'react-redux';
import { addTask } from '../rtk/Slices/AddTaskSlice';

function AddTask() {

    const [task, setTask] = useState('');
    const [category, setCategory] = useState('');
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (!task.trim() && !category.trim()) {
            window.alert("You should write the task and select a category");
        } else if (!task.trim()) {
            window.alert("You should write the task");
        } else if (!category.trim()) {
            window.alert("You should select a category");
        } else {
            dispatch(addTask({ title: task, category }));
            setTask('');
            setCategory('');
        }
    };

    return (
        <div className="AddTask">
            <fieldset className="mb-[15px] flex flex-wrap items-center gap-5">
                <input
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    className="text-sky3 inline-flex items-center justify-center h-[40px] w-3/4 max-lg:w-4/6 max-md:w-full px-[10px] text-[15px] rounded-[8px] leading-none outline-none hover:scale-105 duration-300 hover:shadow-sky8 focus:shadow-sky8 shadow-3xl hover:cursor-pointer"
                    placeholder="what is the task today ?"
                />
                <CategorySelect setCategory={setCategory} />
                <div className="w-full text-center">
                    <button
                        onClick={handleAddTask}
                        className="m-auto btn-defult hover:scale-105 transition-all"
                    >
                        Add Task
                    </button>
                </div>
            </fieldset>
        </div>
    )
}

export default AddTask;