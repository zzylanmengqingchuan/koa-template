import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    success: true,
    status: "healthy",
    timestamp: new Date().toISOString(),
    message: "个人名片 API 服务运行正常",
    version: "1.0.0"
  });
}
