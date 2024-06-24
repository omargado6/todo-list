import { Badge } from '@radix-ui/themes';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../rtk/Slices/AddTaskSlice';

function ToDoList() {

    const Todolists = useSelector((state) => state.addTask);
    const dispatch = useDispatch();

    return (
        <div className="ToDoList">
            <ul className="py-2 max-[355px]:w-max">
                {Todolists.map((ele) => (
                    <li key={Math.random()} className="py-4 px-1 flex gap-1 w-full   shadow-3xl rounded-lg hover:-translate-y-1 duration-300">
                        <text className="text-sky3 font-serif max-sm:text-xs pl-1 text-left w-8/12 ">{ele.title}</text>
                        <Badge color="indigo" size="2" variant="soft" className="rounded-lg text-center font-medium max-sm:text-xs w-max justify-center">{ele.category}</Badge>
                        <div className="grid grid-cols-3 w-max gap-2 m-auto pr-1">
                            <button

                                className="text-green8 hover:text-green11 hover:scale-110 duration-200">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.49991 0.877045C3.84222 0.877045 0.877075 3.84219 0.877075 7.49988C0.877075 11.1575 3.84222 14.1227 7.49991 14.1227C11.1576 14.1227 14.1227 11.1575 14.1227 7.49988C14.1227 3.84219 11.1576 0.877045 7.49991 0.877045ZM1.82708 7.49988C1.82708 4.36686 4.36689 1.82704 7.49991 1.82704C10.6329 1.82704 13.1727 4.36686 13.1727 7.49988C13.1727 10.6329 10.6329 13.1727 7.49991 13.1727C4.36689 13.1727 1.82708 10.6329 1.82708 7.49988ZM10.1589 5.53774C10.3178 5.31191 10.2636 5.00001 10.0378 4.84109C9.81194 4.68217 9.50004 4.73642 9.34112 4.96225L6.51977 8.97154L5.35681 7.78706C5.16334 7.59002 4.84677 7.58711 4.64973 7.78058C4.45268 7.97404 4.44978 8.29061 4.64325 8.48765L6.22658 10.1003C6.33054 10.2062 6.47617 10.2604 6.62407 10.2483C6.77197 10.2363 6.90686 10.1591 6.99226 10.0377L10.1589 5.53774Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                            </button>
                            <button
                                onClick={() => dispatch(deleteTask(ele))}
                                className="text-red9 hover:text-red11 hover:scale-110 duration-200">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 1C5.22386 1 5 1.22386 5 1.5C5 1.77614 5.22386 2 5.5 2H9.5C9.77614 2 10 1.77614 10 1.5C10 1.22386 9.77614 1 9.5 1H5.5ZM3 3.5C3 3.22386 3.22386 3 3.5 3H5H10H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H11V12C11 12.5523 10.5523 13 10 13H5C4.44772 13 4 12.5523 4 12V4L3.5 4C3.22386 4 3 3.77614 3 3.5ZM5 4H10V12H5V4Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ToDoList;