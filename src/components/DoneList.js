import { Badge } from '@radix-ui/themes';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteDoneTask } from '../rtk/Slices/DoneTaskSlice';

function DoneList() {
    const donetask = useSelector((state) => state.doneTask);
    const dispatch = useDispatch();

    return (
        <div className="DoneList">
            <ul className="py-2 max-[355px]:w-max">
                {donetask.map((Element) => (
                    <li key={Math.random()} className="py-4 px-1 flex gap-1 w-full   shadow-3xl rounded-lg hover:-translate-y-1 duration-300">
                        <text className="text-sky3 font-serif max-sm:text-xs pl-1 flex gap-1 text-left w-10/12 ">
                            {Element.title}
                        </text>
                        <Badge color="indigo" size="2" variant="soft" className="rounded-lg text-center font-medium max-sm:text-xs w-max justify-center">{Element.category}</Badge>
                        <div className="text-end pr-1">
                            <button
                                onClick={() => dispatch(deleteDoneTask(Element))}
                                className="text-red9 hover:text-red11 hover:scale-110 duration-200">
                                <svg width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 1C5.22386 1 5 1.22386 5 1.5C5 1.77614 5.22386 2 5.5 2H9.5C9.77614 2 10 1.77614 10 1.5C10 1.22386 9.77614 1 9.5 1H5.5ZM3 3.5C3 3.22386 3.22386 3 3.5 3H5H10H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H11V12C11 12.5523 10.5523 13 10 13H5C4.44772 13 4 12.5523 4 12V4L3.5 4C3.22386 4 3 3.77614 3 3.5ZM5 4H10V12H5V4Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>)
}

export default DoneList;