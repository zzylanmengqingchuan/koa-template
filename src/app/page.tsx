import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// 个人信息数据
const personalInfo = {
  name: "zzylanmengqingchuan",
  title: "全栈开发工程师",
  avatar: "/eo-logo-blue.svg",
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
  ]
};

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src="/eo-logo-white.svg"
              alt="Logo"
              width={24}
              height={24}
            />
            <span className="text-xl font-semibold">个人名片</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* 个人介绍区域 */}
          <div className="text-center mb-16">
            <div className="mb-8">
              <Image
                src={personalInfo.avatar}
                alt="Avatar"
                width={120}
                height={120}
                className="mx-auto rounded-full mb-6"
              />
              <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                {personalInfo.name}
              </h1>
              <p className="text-xl text-gray-300 mb-4">{personalInfo.title}</p>
              <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                {personalInfo.bio}
              </p>
            </div>

            {/* 联系信息 */}
            <div className="flex justify-center space-x-6 mb-8 text-sm text-gray-400">
              <span>📍 {personalInfo.location}</span>
              <span>📧 {personalInfo.email}</span>
            </div>
          </div>

          {/* 社交链接 */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">社交链接</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {personalInfo.links.map((link, index) => (
                <Card key={index} className="bg-gray-900 border-gray-700 p-4 hover:bg-gray-800 transition-colors">
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="block text-center">
                    <div className="text-2xl mb-2">{link.icon}</div>
                    <p className="text-white font-medium">{link.name}</p>
                  </a>
                </Card>
              ))}
            </div>
          </div>

          {/* 技能展示 */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">技能标签</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {personalInfo.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-[#1c66e5] text-white px-4 py-2 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* 项目展示 */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">项目展示</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {personalInfo.projects.map((project, index) => (
                <Card key={index} className="bg-gray-900 border-gray-700 p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white">{project.name}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-sm"
                    >
                      查看项目 →
                    </a>
                  )}
                </Card>
              ))}
            </div>
          </div>

          {/* API 测试区域 */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">API 接口测试</h2>
            <Card className="bg-gray-900 border-gray-700 p-6 max-w-2xl mx-auto">
              <p className="text-gray-300 mb-4">
                测试个人信息 API 接口：
              </p>
              <div className="bg-gray-800 p-4 rounded-lg mb-4">
                <code className="text-green-400 text-sm">
                  GET /api/profile
                </code>
              </div>
              <Button 
                className="bg-[#1c66e5] hover:bg-[#1557d1] text-white"
                onClick={async () => {
                  try {
                    const response = await fetch('/api/profile');
                    const data = await response.json();
                    alert(JSON.stringify(data, null, 2));
                  } catch {
                    alert('接口暂未实现，但页面展示功能正常！');
                  }
                }}
              >
                测试 API
              </Button>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 py-8">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2025 {personalInfo.name} • 个人名片网站 • Powered by Next.js & EdgeOne Pages</p>
        </div>
      </footer>
    </div>
  );
}