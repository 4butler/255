document.addEventListener("DOMContentLoaded", () => {
  // 이미지 id → 패널 id 매핑
  const mapping = {
    asia: "asia-panel",
    africa: "africa-panel",
    northamerica: "northamerica-panel",
    southamerica: "southamerica-panel",
    antarctica: "antarctica-panel",
    europe: "europe-panel",
    oceania: "oceania-panel",
  };

  const panels = document.querySelectorAll('aside[role="dialog"]');

  function closeAllPanels() {
    panels.forEach((panel) => panel.classList.remove("show"));
  }

  // 각 대륙 이미지에 클릭 이벤트 연결
  Object.keys(mapping).forEach((key) => {
    const img = document.getElementById(key);
    const panelId = mapping[key];
    const panel = document.getElementById(panelId);

    if (!img || !panel) return;

    img.addEventListener("click", (e) => {
      e.stopPropagation(); // 바깥 클릭 이벤트로 닫히는 것 방지
      closeAllPanels();
      panel.classList.add("show");
    });
  });

  // 패널 안의 닫기 버튼들
  const closeButtons = document.querySelectorAll(
    'aside[role="dialog"] .close, aside[role="dialog"] button#close'
  );

  closeButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      closeAllPanels();
    });
  });

  // 바깥 아무 데나 클릭하면 패널 닫기
  document.addEventListener("click", (e) => {
    const insidePanel = e.target.closest('aside[role="dialog"]');
    const clickedImg = e.target.tagName === "IMG";
    if (!insidePanel && !clickedImg) {
      closeAllPanels();
    }
  });

  // ESC 키로 닫기
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeAllPanels();
    }
  });
});

