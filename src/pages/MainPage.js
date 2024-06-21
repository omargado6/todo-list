import React, { useContext } from 'react';
import { UserName } from '../pages/UserNameProvider';
import AddTask from '../components/AddTask';

function MainPage() {
    const { name } = useContext(UserName);

    return (
        <div className="bg-sky4 w-screen h-screen flex flex-wrap justify-around m-auto p-2 gap-1">
            {/* task label */}
            <div className="w-5/6 h-2/6 flex m-auto">
                <div className="w-full bg-white flex flex-col gap-3 m-auto p-5 max-sm:p-1 rounded-[10px] shadow-3xl">
                    <h1 className="text-sky7 text-xl font-medium">Welcome <span className="font-bold font-serif">{name}...</span></h1>
                    <div className="pl-10 max-sm:px-5">
                        <AddTask />
                    </div>
                </div>
            </div>
            {/* todo label */}
            <div className="w-11/12 h-4/6 max-[900px]:p-5 flex flex-wrap justify-around gap-4">
            {/* to do */}
                <div className="m-auto w-5/12 max-[900px]:w-10/12 h-4/6 max-[900px]:h-3/6 overflow-auto bg-white rounded-[10px] shadow-3xl">
                asdasdadsasdassad
                </div>
                <div className="m-auto w-5/12  max-[900px]:w-10/12 h-4/6 max-[900px]:h-3/6 overflow-auto bg-slate-900 rounded-[10px] shadow-3xl">
                asdadasd
                </div>
            </div>
            {/* <h1>{name}</h1> */}
        </div>
    );
}

export default MainPage;