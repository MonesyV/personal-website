# 两个作品的源代码标注

本文档用于维护作品集内容。这里只记录仓库或项目内的相对位置，不公开本机绝对路径。

## 作品 01：医院制度智能问答系统

正式作品来源：

- 公开仓库：`https://github.com/MonesyV/yzyz_policy_demo_v1.0`

重点代码：

- `src/integrated_ref.py`：BM25 / Redis / RAG 三链路调度
- `src/mysql_qa/bm25_retriever.py`：FAQ 关键词检索
- `src/mysql_qa/cache_manager.py`：Redis 热点缓存
- `src/rag_qa/handler.py`：RAG 主流程与意图路由
- `src/rag_qa/react_agent.py`：ReAct 检索质量自检与回退
- `src/rag_qa/vector_store.py`：Milvus 混合向量检索
- `src/rag_qa/reranker.py`：BGE Reranker 精排
- `src/offline_kb/chunker.py`：父子分块
- `src/offline_kb/multimodal_loader.py`：文档多模态识别
- `src/api/qa.py`：问答与 SSE 流式接口
- `frontend/index.html`：问答单页应用

补充原型（不是正式医院制度作品）：

- 项目目录：`code/multimodal_rag`
- 这是通用多模态 RAG 原型，目前已跑通文本查询 → BGE-M3 → Milvus → DeepSeek；视觉、音频与稀疏检索仍有未完成项，因此没有将其当作医院制度系统主体。

可验证项目记录：

- 记录文件：`EduAgent完整代码/tmp/resume_v014/build_resume_v014.py`
- 记录 FAQ / 缓存链路覆盖率 85%+、命中响应低于 100 ms、全量 RAG 约 12 s。网页将这些数字标注为“项目记录”，不表述为独立基准测试。

## 作品 02：患者就医体验多维情感分类

当前可定位的集成代码：

- 根目录：`code/yzyz_2/http_api`
- 标签字典：`word_dict/comment_classifier_bert_model_word_dict.txt`
- 配置与模型路径：`_01_config.py`
- BERT 分类器结构：`_03_bert_classifier_model.py`
- 推理与单接口：`http_api_fun.py`
- 另一份服务实现：`http_api_fun_01.py`
- 独立预测函数：`predict_fun.py`

已核对标签：10 个就医体验维度 × 正面/负面，共 20 个联合类别：

- 医疗技术
- 服务态度
- 就医流程
- 医院环境
- 费用感知
- 沟通解释
- 等待时间
- 设备设施
- 治疗效果
- 隐私保护

能力边界：

- 当前实现通过 `argmax` 输出一个“维度_极性”联合类别，严格来说是 20 类单标签分类，不是一次同时输出多个标签的多标签分类。
- 在所给目录中没有找到该评论分类器的训练脚本、模型权重、数据集或评测报告。
- 因此公开案例只展示标签设计、BERT 推理与 API 集成，不展示无法验证的准确率、F1 或线上效果。
