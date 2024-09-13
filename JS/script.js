let currentLab = 1;

function openLab(labNumber) {
  currentLab = labNumber;
}

function showContent(type) {
  const contentDisplay = document.getElementById("contentDisplay");
  let content = "";

  switch (currentLab) {
    case 1:
      if (type === "condition") {
        content =
          '<iframe src="Сonditions/Лабораторна робота 1.pdf" width="100%" height="600px"></iframe>';
      } else if (type === "result") {
        content = '<a href="">Готовий результат для лабораторної №1</a>';
      } else if (type === "code") {
        fetch("JS/script.js")
          .then((response) => response.text())
          .then((code) => {
            content = `<pre><code class="language-javascript">${escapeHtml(
              code
            )}</code></pre>`;
            contentDisplay.innerHTML = content;
            document.querySelectorAll("pre code").forEach((block) => {
              hljs.highlightElement(block);
            });
          });
      }
      break;
    case 2:
      if (type === "condition") {
        content = "<p>Умова для лабораторної №2: ...</p>";
      } else if (type === "result") {
        content = '<a href="">Готовий результат для лабораторної №2</a>';
      } else if (type === "code") {
        content = '<a href="">Код лабораторної №2</a>';
      }
      break;
    case 3:
      if (type === "condition") {
        content = "<p>Умова для лабораторної №3: ...</p>";
      } else if (type === "result") {
        content =
          '<a href="path/to/lab3/result.pdf" target="_blank">Готовий результат для лабораторної №3</a>';
      } else if (type === "code") {
        content = '<a href="" target="_blank">Код лабораторної №3</a>';
      }
      break;
  }
  contentDisplay.innerHTML = content;
}

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
