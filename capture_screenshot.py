#!/usr/bin/env python3
"""
使用 Playwright 截取网页截图
"""

import subprocess
import sys

# 检查是否安装了 playwright
try:
    from playwright.sync_api import sync_playwright
except ImportError:
    print("正在安装 playwright...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "playwright", "-q"])
    subprocess.check_call([sys.executable, "-m", "playwright", "install", "chromium"])
    from playwright.sync_api import sync_playwright

def take_screenshot(url, output_path, width=1920, height=1080):
    """截取网页截图"""
    
    with sync_playwright() as p:
        # 启动浏览器
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": width, "height": height})
        
        # 访问页面
        print(f"正在访问：{url}")
        page.goto(url, wait_until="networkidle")
        
        # 等待页面加载
        page.wait_for_timeout(2000)
        
        # 截取完整页面截图
        page.screenshot(path=output_path, full_page=True)
        
        print(f"✅ 截图已保存：{output_path}")
        
        browser.close()

if __name__ == "__main__":
    url = "http://localhost:8080"
    output = "/home/smsd/.openclaw/workspace/industrial-agent-website/screenshot.png"
    
    take_screenshot(url, output)
    print(f"\n📸 截图位置：{output}")
