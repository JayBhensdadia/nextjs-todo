import { Circle, CirclePlus } from "lucide-react";

interface UnCheckButtonProp {
    onClickHandler?: () => void;
}

const UnCheckButton = ({ onClickHandler }: UnCheckButtonProp) => {
    return (
        <button onClick={onClickHandler} className='bg-yellow-400 text-black font-bold px-3 py-2 border-2 rounded-md border-black transition transition-transform  hover:scale-105 active:scale-95 neobrutalism-shadow'>

            <Circle />
        </button>
    )
}

export default UnCheckButton;