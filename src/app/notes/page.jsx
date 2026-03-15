import React from "react";
import prisma from "@/lib/prisma";

const page = async () => {
  const notes = await prisma.notes.findMany();

  return (
    <div>
      {notes.map((note) => (
        <div key={note.id}>
          <p>{note.content}</p>
          <p>{note.createdAt?.toLocaleDateString()}</p>
          <p>{note.updatedAt?.toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
};

export default page;
