import React, { useContext } from 'react';
import { UserName } from '../pages/UserNameProvider';
import AddTask from '../components/AddTask';

function MainPage() {
    const { name } = useContext(UserName);

    return (
        <div className="bg-sky4 w-screen h-screen flex flex-wrap justify-around m-auto pt-10">
            {/* task label */}
            <div className="w-5/6 h-max flex m-auto">
                <div className="w-full bg-white flex flex-col gap-3 m-auto p-5 rounded-[10px] shadow-3xl">
                    <h1 className="text-sky7 text-xl font-medium">Welcome <span className="font-bold font-serif">{name}...</span></h1>
                    <div className="pl-10 max-sm:pl-0 max-sm:p-2">
                       <AddTask />
                    </div>
                </div>
            </div>
            {/* todo label */}
            <div className="w-11/12 h-2/5 flex justify-around">
                <div className="w-5/12 overflow-auto bg-white rounded-[10px] shadow-3xl">

                </div>
                <div className="w-5/12 overflow-auto bg-slate-900 rounded-[10px] shadow-3xl"></div>
            </div>
            {/* <h1>{name}</h1> */}
        </div>
    );
}

export default MainPage;