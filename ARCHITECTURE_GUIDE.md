# 系统架构页面 - 图片上传指引

**创建时间**: 2026-03-09 00:30

---

## 📋 已完成工作

### ✅ 页面创建
- **文件**: `architecture.html`
- **位置**: `/home/smsd/.openclaw/workspace/industrial-agent-website/`
- **样式**: `css/architecture.css`
- **状态**: ✅ 完成

### ✅ 导航更新
- 主页导航栏已添加"系统架构"入口
- 页脚链接已更新

---

## 🖼️ 图片上传指引

### 步骤 1: 保存架构图

将您提供的架构图保存到以下位置：

```
/home/smsd/.openclaw/workspace/industrial-agent-website/images/architecture-diagram.jpg
```

### 步骤 2: 上传方法

**方法 A: 直接复制**
```bash
cp /path/to/your/architecture-image.jpg \
   /home/smsd/.openclaw/workspace/industrial-agent-website/images/architecture-diagram.jpg
```

**方法 B: 使用钉钉发送的图片**
您发送的图片位置：
```
/home/smsd/.openclaw/media/dingtalk/inbound/2026-03-09/dingtalk-file-1772986949800-w4rfdv.jpg
```

复制命令：
```bash
cp /home/smsd/.openclaw/media/dingtalk/inbound/2026-03-09/dingtalk-file-1772986949800-w4rfdv.jpg \
   /home/smsd/.openclaw/workspace/industrial-agent-website/images/architecture-diagram.jpg
```

### 步骤 3: 验证

访问页面检查图片是否正常显示：
```
http://192.168.10.231:8080/architecture.html
```

---

## 📄 页面内容

### 核心架构模块 (6 个)

| 模块 | 说明 |
|------|------|
| **LLM 多智能体系统** | 系统大脑 - 管理智能体 + 操作智能体 |
| **数字孪生本体** | 语义中介 - ISA-95 标准虚拟映射 |
| **本体驱动语义映射** | 知识图谱 - 设备 - 部件 - 行动关联 |
| **四阶段智能推理** | 闭环工作流 - 感知→诊断→预测→优化 |
| **人机回环验证** | 安全保障 - HITL 人工审阅 |
| **自动化系统** | 感知与执行 - UNS 统一命名空间 |

### 数据方舱应用 (3 个)

| 应用 | 说明 |
|------|------|
| **预测性维护** | 异常检测 + 根因分析 + 维修建议 |
| **柔性生产计划** | 订单管理 + 动态编排 + 资源优化 |
| **流程模拟优化** | 流程仿真 + 参数优化 + 成本降低 |

### 架构优势 (6 个)

- 🎯 标准化 (ISA-95)
- 🔄 闭环优化
- 🛡️ 安全可控 (HITL)
- 🔗 语义统一
- ⚡ 实时响应 (UNS)
- 🧩 灵活配置

---

## 🌐 访问地址

| 页面 | 地址 |
|------|------|
| **系统架构页** | http://192.168.10.231:8080/architecture.html |
| **主页** | http://192.168.10.231:8080 |

---

## 🎨 设计特点

- ✅ 深色玻璃拟态风格
- ✅ 架构图居中展示
- ✅ 6 个核心模块卡片
- ✅ 3 个数据方舱应用
- ✅ 悬浮渐变边框效果
- ✅ 响应式布局

---

## 📁 文件结构

```
industrial-agent-website/
├── architecture.html           # ✅ 架构页面
├── css/
│   └── architecture.css        # ✅ 架构页面样式
├── images/
│   └── architecture-diagram.jpg # ⚠️ 需要上传
├── index.html                  # ✅ 已更新导航
└── ...
```

---

## 🔧 快速上传命令

```bash
# 复制钉钉图片到网站目录
cp /home/smsd/.openclaw/media/dingtalk/inbound/2026-03-09/dingtalk-file-1772986949800-w4rfdv.jpg \
   /home/smsd/.openclaw/workspace/industrial-agent-website/images/architecture-diagram.jpg

# 验证文件
ls -lh /home/smsd/.openclaw/workspace/industrial-agent-website/images/

# 访问页面
echo "访问：http://192.168.10.231:8080/architecture.html"
```

---

**请执行上述复制命令上传架构图，然后访问页面查看效果！** 🎉
