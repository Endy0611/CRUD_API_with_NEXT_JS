import React from 'react'
import { POST } from '../api/users/route';

 const page = async () => {
    const objUser = {name: "endy", email: "endy18@gmail.com"}
    const res = await POST(objUser);
    const data = await res.json();
    console.log("data response: ", data);

    // const getres = await GET(data);

  return (
    <div>page</div>
  )
}

export default page