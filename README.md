# Monesy · 医疗 AI 工程作品集

一个无需构建工具的静态作品集网站，聚焦两个可验证的医疗 AI 工程案例：

1. 医院制度智能问答系统（RAG / ReAct / Milvus）
2. 患者就医体验多维情感分类（BERT / Flask）

## 本地预览

```powershell
python -m http.server 4173
```

浏览器访问 `http://localhost:4173`。

## 项目结构

```text
personal-website/
├── index.html
├── styles.css
├── script.js
├── projects/
│   ├── policy-rag.html
│   └── patient-sentiment.html
└── PROJECT_SOURCES.md
```

网站为纯 HTML / CSS / JavaScript，可直接部署到 GitHub Pages。

## GitHub Pages 部署

首次发布时，在仓库中打开 `Settings → Pages`：

1. `Source` 选择 `Deploy from a branch`。
2. 分支选择 `main`，目录选择 `/ (root)`。
3. 点击 `Save`，等待 GitHub 完成发布。

发布成功后访问：

<https://monesyv.github.io/personal-website/>

## 内容原则

- 只展示能从代码、README 或项目记录中验证的能力。
- 案例页面不展示真实患者数据、密钥或内网地址。
- 对尚未发现的评测指标明确标注，不用推测值代替。
