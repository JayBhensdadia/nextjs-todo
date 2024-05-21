
import prisma from "@/db";
import { createTodo, deleteTodo, getTodoList, updateTodo } from "@/services";
import { NextRequest, NextResponse } from "next/server";


export async function GET() {
    const todos = await getTodoList();
    return NextResponse.json(todos);
}


export async function POST(req: NextRequest) {
    const { title } = await req.json();
    const todo = await createTodo(title);
    return NextResponse.json(todo);
}


export async function PUT(req: NextRequest) {
    const { id, completed } = await req.json();
    await updateTodo(id, completed);
    return new Response('todo updated successfully');
}


export async function DELETE(req: NextResponse) {
    const { id } = await req.json();
    await deleteTodo(id);
    return new Response('todo deleted successfully');
}