import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, nickname, password } = await request.json();

    console.log('Received signup data:', { name, email, nickname, password });

    return NextResponse.json({ message: '사용자가 생성 되었습니다.' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: '사용자 생성에 실패하였습니다.' }, { status: 500 });
  }
}
