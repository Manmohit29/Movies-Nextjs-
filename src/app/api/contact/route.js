import Contact from "@/models/contact";
import dbConnect from "@/utils/dbConnect";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const body = await req.json();
    await dbConnect();
    await Contact.create(body);
    return NextResponse.json(
      {
        message: "Message send successfully!",
      },
      {
        status: 200,
      }
    );
  } catch (e) {
    return NextResponse.json(
      {
        message: "Server Error please try again!",
      },
      {
        status: 500,
      }
    );
  }
}
