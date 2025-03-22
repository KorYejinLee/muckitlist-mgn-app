import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  const { email, nickname, password } = await request.json();
  try {
    const user = await prisma.user.create({
      data: {
        email,
        nickname,
        password
      }
    });
    return NextResponse.json({ message: '사용자가 생성' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: '사용자 생성 실패' }, { status: 500 });
  }
}
