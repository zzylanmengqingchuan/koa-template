import { NextResponse } from 'next/server';

// 个人信息数据
const personalInfo = {
  name: "zzylanmengqingchuan",
  title: "全栈开发工程师",
  avatar: "https://avatars.githubusercontent.com/u/your-avatar",
  bio: "热爱技术，专注于前后端开发，致力于用代码改变世界",
  location: "中国",
  email: "your-email@example.com",
  links: [
    { name: 'Blog', url: 'https://blog.csdn.net/binhyun?type=blog', icon: '📝' },
    { name: 'GitHub', url: 'https://github.com/zzylanmengqingchuan', icon: '💻' },
    { name: '知识星球', url: 'https://wx.zsxq.com/group/28882558852421', icon: '🌟' },
    { name: '腾讯云社区', url: 'https://cloud.tencent.com/developer/user/11163219', icon: '☁️' }
  ],
  skills: [
    "JavaScript", "TypeScript", "Node.js", "React", "Vue", 
    "Python", "Koa", "Express", "Next.js", "Tailwind CSS"
  ],
  contact: {
    email: "your-email@example.com",
    location: "中国"
  },
  projects: [
    {
      name: "个人名片网站",
      description: "使用 Next.js + Tailwind CSS 开发的响应式个人名片网站",
      tech: ["Next.js", "Tailwind CSS", "EdgeOne Pages"],
      link: "https://github.com/zzylanmengqingchuan/koa-template"
    },
    {
      name: "Koa API 服务", 
      description: "基于 Koa 框架的后端 API 服务，部署在 EdgeOne Pages",
      tech: ["Koa", "Node.js", "云函数"],
      link: "#"
    }
  ],
  timestamp: new Date().toISOString()
};

export async function GET() {
  return NextResponse.json({
    success: true,
    data: personalInfo,
    message: "个人名片 API - 获取成功",
    timestamp: new Date().toISOString()
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  
  return NextResponse.json({
    success: true,
    message: "数据接收成功",
    received: body,
    timestamp: new Date().toISOString()
  });
}
