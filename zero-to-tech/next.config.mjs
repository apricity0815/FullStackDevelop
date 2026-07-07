/** @type {import('next').NextConfig} */
const nextConfig = {
    // 以静态站点的形式部署，将 Next.js 的输出模式设置为静态导出
    // 设置 output: 'export' 后，next build 会把所有页面预渲染为纯 HTML 文件，存放在 out/ 目录中。
    output: 'export',
};

export default nextConfig;
