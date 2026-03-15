import prisma from "@/lib/prisma";

export async function POST(request) {
  try {
    // prevent if the resquest is the json object or javascript object
    const body =
      typeof request.json === "function" ? await request.json() : request;

    console.log(body);

    const user = await prisma.userTable.create({
      data: {
        name: body.name,
        email: body.email,
      },
    });

    return Response.json(user, { status: 201 });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Failed to create user" }, { status: 500 });
  }
}

// export async function GET() {
//   const users = await prisma.userTable.findMany();
//   return NextResponse.json({success: true, message: "All available users", data: users}, {status: 201});
// }

// export async function GET(request, {params}) {
//   try {
//     const {id} = await params
    
//     const user = await prisma.userTable.findUnique({
//       where: {id : parseInt(id)},
//     })
//     if (!user) {
//       return Response.json({ error: "User not found" }, { status: 404 });
//     }

//     return Response.json(user, { status: 200 });
//   } catch (error) {
//      console.error(error);
//     return Response.json({ error: "Failed to fetch user" }, { status: 500 });
//   }
// }
