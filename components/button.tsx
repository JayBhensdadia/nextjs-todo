

interface ButtonProp {
    title: string;
    onClickHandler?: () => void;
}

const Button = ({ title, onClickHandler }: ButtonProp) => {
    return (
        <button onClick={onClickHandler} className='bg-yellow-400 text-black font-bold px-6 py-3 border-2 rounded-md border-black transition transition-transform  hover:scale-105 active:scale-95 neobrutalism-shadow'>{title}</button>
    )
}

export default Button;