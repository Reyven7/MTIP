let currentLab = 1;

function openLab(labNumber)
{
  currentLab = labNumber;
  document.querySelectorAll(".navBlock a").forEach(link => link.classList.remove("active"));
  document.getElementById(`lab${labNumber}`).classList.add("active");
  showContent("condition");
}

function showContent(type)
{
  const contentDisplay = document.getElementById("contentDisplay");
  let content = "";

  if (type === "condition")
  {
    content = `<iframe src="Сonditions/Лабораторна робота ${currentLab}.pdf" width="100%" height="600px"></iframe>`;
  } else if (type === "result")
  {
    content = getResultLink();
  } else if (type === "code")
  {
    loadCode();
  }

  contentDisplay.innerHTML = content;
}

function getResultLink()
{
  const labLinks = {
    1: '<a href="">Готовий результат для лабораторної №1</a>',
    2: `
      <a href="Pages/Lab2/Lab2_1.html" target="_blank">Завдання 1</a><br>
      <a href="Pages/Lab2/Lab2_2.html" target="_blank">Завдання 2</a>
    `,
    3: '<a href="Pages/Lab3/Lab3.html" target="_blank">Готовий результат для лабораторної №3</a>',
    4: '<a href="Pages/Lab4/Lab4.html" target="_blank">Готовий результат для лабораторної №4</a>',
    5: '<a href="Pages/Lab5/Lab5.html" target="_blank">Готовий результат для лабораторної №5</a>',
    6: '<a href="Pages/Lab6/Lab6.html" target="_blank">Готовий результат для лабораторної №6</a>',
    7: '<a href="Pages/Lab7/Lab7.html" target="_blank">Готовий результат для лабораторної №7</a>',
    8: '<p>Перегляньте код</p>',
    9: '<a href="Pages/Lab9/cookbook.xml" target="_blank">Готовий результат для лабораторної №9</a>',
    10: '<a href="Pages/Lab10/Lab10.html" target="_blank">Готовий результат для лабораторної №10</a>',
  };
  return labLinks[currentLab] || "";
}

function loadCode()
{
  const codeFiles = {
    1: ["JS/script.js"],
    2: ["JS/Lab2_1_script.js", "Pages/Lab2/Lab2_2.html"],
    3: ["JS/Lab3_script.js"],
    4: ["JS/Lab4_script.js"],
    5: ["JS/Lab5_script.js"],
    6: ["JS/Lab6_script.js"],
    7: ["JS/Lab7_script.js"],
    8: ["Pages/Lab8/cookbook.dtd", "Pages/Lab8/cookbook.xsd"],
    9: ["Pages/Lab9/cookbook.xml", "Pages/Lab9/cookbook.xsl"],
    10: ["JS/Lab10_script.js"]
  };

  const files = codeFiles[currentLab];
  if (!files) return;

  Promise.all(files.map(file => fetch(file).then(res => res.text())))
    .then(codeContents =>
    {
      const content = codeContents.map((code, index) =>
      {
        const language = files[index].endsWith(".js") ? "javascript" : "html";
        return `
          <h3>Код з ${files[index].split("/").pop()}:</h3>
          <pre><code class="language-${language}">${escapeHtml(code)}</code></pre>`;
      }).join("");

      document.getElementById("contentDisplay").innerHTML = content;
      document.querySelectorAll("pre code").forEach(block => hljs.highlightElement(block));
    })
    .catch(error => console.error("Помилка завантаження файлів:", error));
}

function escapeHtml(text)
{
  return text.replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}