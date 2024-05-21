import { Circle, CirclePlus, Trash2 } from "lucide-react";

interface DeleteButton {
    onClickHandler?: () => void;
}

const DeleteButton = ({ onClickHandler }: DeleteButton) => {
    return (
        <button onClick={onClickHandler} className='bg-yellow-400 text-black font-bold px-3 py-2 border-2 rounded-md border-black transition transition-transform  hover:scale-105 active:scale-95 neobrutalism-shadow'>

            <Trash2 />
        </button>
    )
}

export default DeleteButton;