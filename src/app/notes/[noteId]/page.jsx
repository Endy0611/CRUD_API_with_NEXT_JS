import prisma from "@/lib/prisma";
import React from "react";

const page = async ({ params }) => {
  const { noteId } = await params;
  //   const note = await prisma.notes.findUnique({
  //     where: {
  //       id: Number(noteId),
  //     },
  //   });

  const res = await fetch(`http://localhost:3000/api/notes/${noteId}`);
  const { data: note } = await res.json();
  return (
    // <div key={note.id}>
    //   <p>{note.content}</p>
    //   <p>{note.createdAt?.toLocaleDateString()}</p>
    //   <p>{note.updatedAt?.toLocaleDateString()}</p>
    // </div>

    <div>
         <h1>Note #{note.id}</h1>
      <p>{note.content}</p>
      <p>Created: {new Date(note.createdAt).toLocaleDateString()}</p>
      <p>Updated: {new Date(note.updatedAt).toLocaleDateString()}</p>
    </div>
  );
};

export default page;
