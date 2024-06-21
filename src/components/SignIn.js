import React, { useContext } from "react";
import * as Dialog from '@radix-ui/react-dialog';
import { useNavigate } from "react-router-dom";
import { UserName } from "../pages/UserNameProvider";

function SignIn() {
    const { name, setName } = useContext(UserName);
    const navigate = useNavigate();

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <button className="text-sky7 shadow-blackA4 hover:text-sky6 inline-flex h-[44px] min-sm:h-[35px] items-center justify-center rounded-[7px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-transparent focus:outline-none hover:scale-150 duration-500">
                    Sign In
                </button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="bg-blackA3 data-[state=open]:animate-overlayShow fixed inset-0" />
                <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                    <Dialog.Title className="text-mauve12 m-0 text-[18px] font-medium">
                        Your Name
                    </Dialog.Title>
                    <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
                        Welcome to ToDo List
                    </Dialog.Description>
                    <fieldset className="mb-[15px] flex items-center gap-5">
                        <label className="text-blackA12 w-[90px] text-center text-[15px] font-medium" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="text-blackA10 shadow-sky6 focus:shadow-sky8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] font-medium leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                            id="name"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </fieldset>
                    <div className="mt-[25px] flex justify-end">
                        <Dialog.Close>
                            <button
                                type="submit"
                                onClick={() => navigate('/main')}
                                className="btn-defult hover:scale-105 transition-all">
                                Submit
                            </button>
                        </Dialog.Close>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}

export default SignIn;
