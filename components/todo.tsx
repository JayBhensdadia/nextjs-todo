import { useRouter } from "next/navigation";
import CheckButton from "./check";
import DeleteButton from "./delete";
import UnCheckButton from "./uncheck";
import { deleteTodo, updateTodo } from "@/services";
import { Todo } from "@prisma/client";
import { Dispatch, SetStateAction } from "react";

interface TodoCompProps {
    id: string;
    title: string;
    completed: boolean;
    handler: Dispatch<SetStateAction<boolean>>;
}

const TodoComp = ({ id, title, completed, handler }: TodoCompProps) => {

    const router = useRouter();

    const handleDelete = async (id: string) => {
        try {
            await deleteTodo(id);
            // router.refresh();
            handler((prev) => !prev);
        } catch (err) {
            console.log(err);

        }
    }

    const handleToggle = async (id: string, completed: boolean) => {
        try {
            await updateTodo(id, completed);
            // router.refresh();
            handler((prev) => !prev);
        } catch (error) {
            console.log(error);

        }
    }

    return (
        <div className={`p-4 mb-4 border-2 rounded-md flex flex-row gap-10 justify-between items-center ${completed ? 'bg-green-200' : 'bg-red-200'} border-black neobrutalism-shadow min-w-[200px] max-w-[450px]`}>
            {completed ? <CheckButton onClickHandler={() => handleToggle(id, false)} /> : <UnCheckButton onClickHandler={() => handleToggle(id, true)} />}
            <h3 className="text-xl font-bold text-black text-ellipsis overflow-hidden">{title}</h3>
            <DeleteButton onClickHandler={() => { handleDelete(id) }} />

        </div>
    );
}


export default TodoComp