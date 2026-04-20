import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

type ContactFormData = {
  name: string;
  company?: string;
  phone: string;
  email: string;
  message: string;
};

export async function POST(req: Request) {
  try {
    const { data }: { data: ContactFormData } = await req.json();
    if (!data) {
      return NextResponse.json(
        { success: false, message: "Дані форми не передані" },
        { status: 400 },
      );
    }

    const name = data.name?.trim();
    const company = data.company?.trim() || "Не вказано";
    const phone = data.phone?.trim();
    const email = data.email?.trim();
    const message = data.message?.trim();

    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Будь ласка, заповніть усі обов’язкові поля",
        },
        { status: 400 },
      );
    }

    await prisma.lead.create({
      data: {
        name,
        company,
        phone,
        email,
        message,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Форму успішно відправлено",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Помилка при обробці форми:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Помилка сервера при відправці форми",
      },
      { status: 500 },
    );
  }
}
