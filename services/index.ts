'use server'

import { Todo } from "@prisma/client";
import prisma from "@/db";


export const getTodoList = async (): Promise<Todo[]> => {
    return await prisma.todo.findMany({
        orderBy: [{
            createdAt: 'desc'
        }]
    });
}


export const getCompletedTodo = async (): Promise<Todo[]> => {
    return await prisma.todo.findMany({ where: { completed: true } });
}


export const createTodo = async (title: string): Promise<Todo> => {
    return await prisma.todo.create({ data: { title } });
}


export const deleteTodo = async (id: string) => {
    await prisma.todo.delete({ where: { id } });
}

export const updateTodo = async (id: string, completed: boolean) => {
    await prisma.todo.update({ where: { id }, data: { completed } });
}