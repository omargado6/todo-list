import React from 'react'
import * as Dialog from '@radix-ui/react-dialog';

function CategorySelect() {
    const categories = [
        { id: 1, name: 'Study', icon: '📘' },
        { id: 2, name: 'Work', icon: '💼' },
        { id: 3, name: 'Sport', icon: '🏋️‍♂️' },
        { id: 4, name: 'Design', icon: '🎨' },
        { id: 5, name: 'Social', icon: '🎉' },
        { id: 6, name: 'Music', icon: '🎵' },
        { id: 7, name: 'Health', icon: '🩺' },
        { id: 8, name: 'Movie', icon: '🎬' },
        { id: 9, name: 'Home', icon: '🏠' }
    ];
    return (
        <div className="m-auto text-center max-md:w-full ">
            <Dialog.Root >
                <Dialog.Trigger className="px-4 py-2 bg-sky5 hover:bg-sky7 text-white rounded-lg hover:scale-105 duration-300">
                    Choose Category
                </Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Overlay className="bg-blackA3 data-[state=open]:animate-overlayShow fixed inset-0" />
                    <Dialog.Content className="bg-whiteA11 data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                        <div className="grid grid-cols-3 gap-5">
                            {categories.map((category) => (
                                <button key={category.id} className="p-4 rounded-lg bg-sky7 text-center shadow-3xl hover:scale-110 duration-200">
                                    <div className="text-2xl">{category.icon}</div>
                                    <div className="mt-2 text-white font-medium">{category.name}</div>
                                </button>
                            ))}
                        </div>
                    </Dialog.Content>
                </Dialog.Portal>

            </Dialog.Root>
        </div>
    )
}

export default CategorySelect;