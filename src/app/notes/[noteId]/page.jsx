import prisma from "@/lib/prisma";
import React from "react";

const page = async ( { params }) => {
    const { noteId } = await params;
  const note = await prisma.notes.findUnique({
    where : {
        id : Number(noteId) 
    }
  });
  return (
    <div key={note.id}>
      <p>{note.content}</p>
      <p>{note.createdAt?.toLocaleDateString()}</p>
      <p>{note.updatedAt?.toLocaleDateString()}</p>
    </div>
  );
};

export default page;
