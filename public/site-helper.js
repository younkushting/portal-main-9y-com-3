const siteConfig = {
  portalUrl: "https://portal-main-9y.com",
  keyword: "九游",
  promptSeed: "a2262437df87c6ee"
};

function createCard(title, description, badgeText) {
  const card = document.createElement("div");
  card.className = "info-card";

  const titleEl = document.createElement("h3");
  titleEl.textContent = title;
  card.appendChild(titleEl);

  const descEl = document.createElement("p");
  descEl.textContent = description;
  card.appendChild(descEl);

  if (badgeText) {
    const badge = document.createElement("span");
    badge.className = "keyword-badge";
    badge.textContent = badgeText;
    card.appendChild(badge);
  }

  return card;
}

function buildAccessInstructions() {
  const instructions = [
    "请通过官网入口访问：",
    `1. 在浏览器地址栏键入 ${siteConfig.portalUrl}`,
    `2. 确认页面标题包含“${siteConfig.keyword}”相关字样`,
    `3. 点击“立即体验”或“进入主页”按钮`,
    `4. 登录后可使用全部功能`
  ];

  const list = document.createElement("ul");
  instructions.forEach(text => {
    const item = document.createElement("li");
    item.textContent = text;
    list.appendChild(item);
  });
  return list;
}

function renderKeywordBadge(keyword) {
  const badge = document.createElement("span");
  badge.className = "keyword-badge";
  badge.textContent = `#${keyword}`;
  return badge;
}

function initSiteHelper() {
  const container = document.createElement("div");
  container.id = "site-helper-container";

  const style = document.createElement("style");
  style.textContent = `
    #site-helper-container {
      max-width: 720px;
      margin: 2rem auto;
      padding: 1.5rem;
      background: #f9fafc;
      border: 1px solid #dce1e8;
      border-radius: 12px;
      font-family: system-ui, -apple-system, sans-serif;
      line-height: 1.6;
      color: #1a1e24;
    }
    .info-card {
      background: white;
      border: 1px solid #e4e9f0;
      border-radius: 10px;
      padding: 1rem 1.25rem;
      margin-bottom: 1rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.02);
      transition: box-shadow 0.15s;
    }
    .info-card:hover {
      box-shadow: 0 4px 12px rgba(0,0,0,0.05);
    }
    .info-card h3 {
      margin: 0 0 0.35rem;
      font-size: 1.1rem;
      font-weight: 600;
    }
    .info-card p {
      margin: 0 0 0.65rem;
      color: #3d4552;
    }
    .keyword-badge {
      display: inline-block;
      background: #eef2f7;
      border-radius: 20px;
      padding: 0.2rem 0.9rem;
      font-size: 0.8rem;
      font-weight: 500;
      color: #1f6feb;
      border: 1px solid #d0d8e4;
    }
    ul {
      padding-left: 1.5rem;
    }
    ul li {
      margin-bottom: 0.4rem;
    }
  `;
  container.appendChild(style);

  const card1 = createCard(
    "欢迎使用",
    "本页面提供操作指引与常见问题提示。",
    siteConfig.keyword
  );
  container.appendChild(card1);

  const card2 = createCard(
    "访问说明",
    "请按照以下步骤正常使用："
  );
  const instructionsList = buildAccessInstructions();
  card2.appendChild(instructionsList);
  container.appendChild(card2);

  const badgeContainer = document.createElement("div");
  badgeContainer.style.marginTop = "1rem";
  const badge = renderKeywordBadge(siteConfig.keyword);
  badgeContainer.appendChild(badge);
  container.appendChild(badgeContainer);

  const footerNote = document.createElement("p");
  footerNote.style.marginTop = "1.2rem";
  footerNote.style.fontSize = "0.85rem";
  footerNote.style.color = "#5f6b7a";
  footerNote.textContent = `如需更多帮助，请访问 ${siteConfig.portalUrl} 或联系客服。`;
  container.appendChild(footerNote);

  document.body.appendChild(container);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSiteHelper);
} else {
  initSiteHelper();
}