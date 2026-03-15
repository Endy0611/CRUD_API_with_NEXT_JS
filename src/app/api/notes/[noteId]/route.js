import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";


// Get
export async function GET(request, { params }) {
    const noteId = (await params).noteId;
    const note = await prisma.notes.findUnique({
        where: {
            id: Number(noteId)
        }
    });

    return NextResponse.json(
        { success : true, message : "Detail data note", data: note, }, {status : 200}
    );
}

// Update
export async function PUT(request, { params }) {
    const noteId = (await params).noteId;
    const {content} = await request.json();
    const note = await prisma.notes.update({
        where: {id: Number(noteId)},
        data: {
            content,
            updateAt : new Date()
        }
    });

    return NextResponse.json({
        success: true, message : "Data Note Updated!", data : note }, {status : 200}
    );
}

export async function DELETE (request, { params }) {
    const noteId = (await params).noteId;
    await prisma.notes.delete({
        where: {
            id: Number(noteId)
        }
    });

    return NextResponse.json({
        success: true, message :  "Data Note Deleted"
    }, {status : 200});
}