let currentLab = 1;

function openLab(labNumber) {
  currentLab = labNumber;
  document.querySelectorAll(".navBlock a").forEach((link) => {
    link.classList.remove("active");
  });

  document.getElementById(`lab${labNumber}`).classList.add("active");

  showContent("condition");
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
        content =
          '<iframe src="Сonditions/Лабораторна робота 2.pdf" width="100%" height="600px"></iframe>';
      } else if (type === "result") {
        content = `
          <a href="Pages/Lab2/Lab2_1.html" target= "_blank">Завдання 1</a><br>
          <a href="Pages/Lab2/Lab2_2.html" target= "_blank">Завдання 2</a>
        `;
      } else if (type === "code") {
        Promise.all([
          fetch("JS/Lab2_1_script.js").then((response) => response.text()),
          fetch("Pages/Lab2/Lab2_2.html").then((response) => response.text()),
        ])
          .then(([code1, code2]) => {
            content = `
            <h3>Код з Lab2_1_script.js:</h3>
            <pre><code class="language-javascript">${escapeHtml(
              code1
            )}</code></pre>
            <h3>Код з Lab2_2.html:</h3>
            <pre><code class="language-html">${escapeHtml(code2)}</code></pre>`;
            contentDisplay.innerHTML = content;
            document.querySelectorAll("pre code").forEach((block) => {
              hljs.highlightElement(block);
            });
          })
          .catch((error) => {
            console.error("Помилка завантаження файлів:", error);
          });
      }
      break;
    case 3:
      if (type === "condition") {
        content =
          '<iframe src="Сonditions/Лабораторна робота 3.pdf" width="100%" height="600px"></iframe>';
      } else if (type === "result") {
        content =
          '<a href="Pages/Lab3/Lab3.html" target= "_blank">Готовий результат для лабораторної №3</a>';
      } else if (type === "code") {
        fetch("JS/Lab3_script.js")
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
    case 4:
      if (type === "condition") {
        content =
          '<iframe src="Сonditions/Лабораторна робота 4.pdf" width="100%" height="600px"></iframe>';
      } else if (type === "result") {
        content =
          '<a href="Pages/Lab4/Lab4.html" target= "_blank">Готовий результат для лабораторної №4</a>';
      } else if (type === "code") {
        fetch("JS/Lab4_script.js")
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
      case 5:
      if (type === "condition") {
        content =
          '<iframe src="Сonditions/Лабораторна робота 5.pdf" width="100%" height="600px"></iframe>';
      } else if (type === "result") {
        content =
          '<a href="Pages/Lab5/Lab5.html" target= "_blank">Готовий результат для лабораторної №5</a>';
      } else if (type === "code") {
        fetch("JS/Lab5_script.js")
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
      case 6:
        if (type === "condition") {
          content =
            '<iframe src="Сonditions/Лабораторна робота 6.pdf" width="100%" height="600px"></iframe>';
        } else if (type === "result") {
          content =
            '<a href="Pages/Lab6/Lab6.html" target= "_blank">Готовий результат для лабораторної №6</a>';
        } else if (type === "code") {
          fetch("JS/Lab6_script.js")
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
