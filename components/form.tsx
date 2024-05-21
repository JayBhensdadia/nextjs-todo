import { Dispatch, SetStateAction, useState } from "react";
import Button from "./button"
import { createTodo } from "@/services";
import { useRouter } from "next/navigation";


const TodoForm = ({ handler }: { handler: Dispatch<SetStateAction<boolean>> }) => {

    const router = useRouter();
    const [title, setTitle] = useState("");


    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/todo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, completed: false }),
            });

            if (!response.ok) {
                throw new Error('Failed to create todo');
            }

            // Refresh the page to show the new todo
            // router.refresh();

            handler((prev) => !prev)
        } catch (error) {
            console.error('Error creating todo:', error);
        }
    };

    return (
        <div
            className="flex-1 flex sm:flex-col items-start p-4 border-2 rounded-md border-black bg-gray-50 neobrutalism-shadow"
        >
            <input
                type="text"
                className="mb-4 p-2 border-2 rounded-md border-black bg-white text-black placeholder-gray-700 neobrutalism-shadow focus:outline-none "
                placeholder="Enter todo..."
                onChange={(e) => setTitle(e.target.value)}
            />
            <Button title="Add" onClickHandler={handleSubmit} />
        </div>
    );
}

export default TodoForm