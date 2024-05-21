

import prisma from "@/db";
import { NextRequest, NextResponse } from "next/server";



export async function GET() {
    const todos = await prisma.todo.findMany({
        where: {
            completed: true
        }
    });
    return NextResponse.json(todos);
}
