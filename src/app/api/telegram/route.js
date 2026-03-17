import { NextResponse } from "next/server";
import { sendTelegramMessage } from "@/libs/telegram";

export async function POST(request) {
  try {
    const data = await request.json();
    await sendTelegramMessage(data);

    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
