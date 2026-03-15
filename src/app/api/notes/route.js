import prisma from "@/lib/prisma"; // 👈 add this

export async function GET() {
  const notes = await prisma.notes.findMany();

  return Response.json({
    success: true,
    message: "All available notes",
    data: notes,
  }, { status: 200 });
}


export async function POST(request) {
  try {
    const body =
      typeof request.json === "function" ? await request.json() : request;

    console.log(body);

    const note = await prisma.notes.create({
      data: {
        content: body.content,
        createAt: body.createAt,
      },
    });

    return Response.json(note, { status: 201 });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Failed to create notes" }, { status: 500 });
  }
}