

import { Todo } from "@prisma/client";
import TodoComp from "./todo";
import { Dispatch, SetStateAction } from "react";

interface TodoListProp {
    list: Todo[] | undefined;
    handler: Dispatch<SetStateAction<boolean>>;
}

const TodoList = ({ list, handler }: TodoListProp) => {
    return (

        <div className="grow-[5] max-h-screen grid grid-cols-1  gap-5 overflow-scroll no-scrollbar  md:grid-cols-3 p-4 border-2 rounded-md border-black bg-gray-50 neobrutalism-shadow">
            {!list ? <p>no todos available</p> : list.map((item) => {
                return <TodoComp key={item.id} id={item.id} title={item.title} completed={item.completed} handler={handler} />
            })}
        </div>
    )
}

export default TodoList