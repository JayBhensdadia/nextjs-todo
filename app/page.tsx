'use client'
import Button from "@/components/button";
import CheckButton from "@/components/check";
import DeleteButton from "@/components/delete";
import TodoForm from "@/components/form";
import TodoList from "@/components/todo-list";

import UnCheckButton from "@/components/uncheck";
import { getTodoList } from "@/services";
import { Todo } from "@prisma/client";
import Image from "next/image";
import { useEffect, useState } from "react";




export default function Home() {

  const [todos, setTodos] = useState<Todo[]>();

  const [reload, setReload] = useState(false);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/todo');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Todo[] = await response.json();
        setTodos(data);
      } catch (error) {
        console.error('Failed to fetch todos:', error);
      }
    };

    fetchTodos();
  }, [reload]);


  return (
    <div className="w-full min-h-screen flex sm:flex-row flex-col gap-3 justify-center items-center p-5">
      <TodoForm handler={setReload} />
      <TodoList list={todos} handler={setReload} />
    </div>
  );
}
