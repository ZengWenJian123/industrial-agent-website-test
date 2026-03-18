#!/usr/bin/env python3
"""
工业智能体 AI 官网 - 本地开发服务器
用于在本地预览网站
"""

import http.server
import socketserver
import os
import webbrowser
from pathlib import Path

# 配置
PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    """自定义 HTTP 请求处理器"""
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)
    
    def log_message(self, format, *args):
        """自定义日志格式"""
        print(f"\033[92m[{self.log_date_time_string()}]\033[0m {args[0]}")

def start_server():
    """启动 HTTP 服务器"""
    
    # 创建 socket 服务器
    with socketserver.TCPServer(("", PORT), CustomHandler) as httpd:
        print("=" * 60)
        print(f"🤖 工业智能体 AI 官网 - 本地开发服务器")
        print("=" * 60)
        print(f"\n📁 网站目录：{DIRECTORY}")
        print(f"🌐 访问地址：http://localhost:{PORT}")
        print(f"📄 主页文件：index.html")
        print(f"\n💡 提示：按 Ctrl+C 停止服务器")
        print("=" * 60)
        
        # 自动在浏览器中打开
        try:
            webbrowser.open(f"http://localhost:{PORT}")
            print(f"\n✅ 已自动在浏览器中打开网站")
        except Exception as e:
            print(f"\n⚠️  无法自动打开浏览器，请手动访问：http://localhost:{PORT}")
        
        # 启动服务器
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n\n👋 服务器已停止")

if __name__ == "__main__":
    start_server()
