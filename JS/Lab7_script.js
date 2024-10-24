document.querySelector("#fileInput").addEventListener("change", handleFileSelect);

function handleFileSelect(event)
{
  const file = event.target.files[0];
  if (file)
  {
    const reader = new FileReader();
    reader.onload = function (e)
    {
      parseXML(e.target.result);
    };
    reader.readAsText(file);
  }
}

function parseXML(xmlString)
{
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, "text/xml");
  const dishes = xmlDoc.getElementsByTagName("dish");

  if (dishes.length === 0)
  {
    alert("XML-файл не містить даних про страви.");
    return;
  }

  const tbody = document.querySelector("#xmlTable tbody");
  tbody.innerHTML = "";

  Array.from(dishes).forEach(dish =>
  {
    const name = dish.getElementsByTagName("name")[0]?.textContent || "Невідомо";
    const type = dish.getElementsByTagName("type")[0]?.textContent || "Невідомо";
    const calories = dish.getElementsByTagName("calories")[0]?.textContent || "Невідомо";
    const recipe = dish.getElementsByTagName("recipe")[0]?.textContent || "Немає рецепта";

    const ingredients = Array.from(dish.getElementsByTagName("ingredient")).map(ing =>
    {
      const ingName = ing.getElementsByTagName("name")[0]?.textContent || "Невідомий інгредієнт";
      const amount = ing.getElementsByTagName("amount")[0]?.textContent || "Невідомо";
      const measure = ing.getElementsByTagName("measure")[0]?.textContent || "Невідомо";
      return `${ingName} (${amount} ${measure})`;
    }).join(", ");

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${name}</td>
      <td>${type}</td>
      <td>${calories}</td>
      <td>${ingredients}</td>
      <td>${recipe}</td>
    `;
    tbody.appendChild(row);
  });
}
