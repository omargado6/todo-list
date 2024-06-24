import React from 'react';
import AddTask from '../components/AddTask';
import ToDoList from '../components/ToDoList';
import DoneList from '../components/DoneList';
import { useSelector } from 'react-redux';

function MainPage() {
    const name = useSelector(state => state.userName)
    return (
        <div className="bg-sky4 w-screen h-screen flex flex-wrap justify-around m-auto p-2 pb-5 gap-1">
            {/* task label */}
            <div className="w-5/6 h-2/6 flex m-auto">
                <div className="w-full bg-white flex flex-col gap-3 m-auto p-5 max-sm:p-3 rounded-[10px] shadow-3xl">
                    <h1 className="text-sky7 text-xl font-medium">Welcome <span className="font-bold font-serif">{name}...</span></h1>
                    <div className="pl-10 max-sm:px-5">
                        <AddTask />
                    </div>
                </div>
            </div>
            {/* todo label */}
            <div className="w-11/12 h-4/6 max-[900px]:p-5 flex flex-wrap justify-around gap-4">
                {/* to do */}
                <div className="m-auto pt-5 pl-5 max-sm:p-1 w-5/12 max-[900px]:w-10/12 h-4/6 max-[900px]:h-3/6 overflow-auto bg-white rounded-[10px] shadow-3xl hover:scale-110 duration-500">
                    <h4 className="text-sky7 pb-3 text-lg font-medium">🎯 To Do</h4>
                    <div className="h-4/5 px-1 pl-3 overflow-auto">
                        <ToDoList />
                    </div>
                </div>
                <div className="m-auto p-5 max-sm:p-1 w-5/12 max-[900px]:w-10/12 h-4/6 max-[900px]:h-3/6 overflow-auto bg-white rounded-[10px] shadow-3xl hover:scale-110 duration-500">
                    <h4 className="text-sky7 pb-3 text-lg font-medium">✅ Done</h4>
                    <div className="h-4/5 px-2 pl-4 overflow-auto">
                        <DoneList />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;