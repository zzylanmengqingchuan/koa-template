import { NextResponse } from 'next/server';

const links = [
  { name: 'Blog', url: 'https://blog.csdn.net/binhyun?type=blog', icon: '📝' },
  { name: 'GitHub', url: 'https://github.com/zzylanmengqingchuan', icon: '💻' },
  { name: '知识星球', url: 'https://wx.zsxq.com/group/28882558852421', icon: '🌟' },
  { name: '腾讯云社区', url: 'https://cloud.tencent.com/developer/user/11163219', icon: '☁️' }
];

export async function GET() {
  return NextResponse.json({
    success: true,
    data: links,
    message: "获取社交链接成功",
    timestamp: new Date().toISOString()
  });
}
