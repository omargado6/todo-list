import React from 'react'
import CategorySelect from './CategorySelect';

function AddTask() {
    return (
        <div className="AddTask">
            <fieldset className="mb-[15px] flex flex-wrap items-center gap-5">
                <input
                    className="text-blackA10  shadow-sky6 focus:shadow-sky8 inline-flex items-center justify-center h-[40px] w-3/4 max-lg:w-4/6 max-md:w-full px-[10px] text-[15px] rounded-[4px] leading-none outline-none shadow-[0_0_0_1px] focus:shadow-[0_0_0_2px]"
                    placeholder="what is the task today ?"
                />
                <CategorySelect />
                <div className="w-full text-center">
                    <button className="m-auto btn-defult" >
                        Add Task
                    </button>
                </div>
            </fieldset>
        </div>
    )
}

export default AddTask;