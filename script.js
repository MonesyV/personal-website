const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.querySelectorAll('[data-route-demo]').forEach((demo) => {
  const buttons = [...demo.querySelectorAll('[data-route]')];
  const stages = [...demo.querySelectorAll('[data-stage]')];
  const result = demo.querySelector('[data-route-result]');

  const copy = {
    faq: '高频制度问题在 FAQ / Redis 链路中快速返回，避免调用完整 RAG。',
    rag: '专业制度咨询进入 Milvus 混合检索，由 ReAct Agent 自检证据质量。',
    fallback: '非制度类或证据不足的问题进入受控兜底，避免生成无依据结论。'
  };

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const route = button.dataset.route;
      buttons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
      stages.forEach((stage) => stage.classList.toggle('is-active', stage.dataset.stage.includes(route)));
      if (result) result.textContent = copy[route];
    });
  });
});

const revealItems = document.querySelectorAll('[data-reveal]');
if (reduceMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach((item) => item.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
}

document.querySelectorAll('[data-year]').forEach((node) => {
  node.textContent = new Date().getFullYear();
});
