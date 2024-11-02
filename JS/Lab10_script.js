let xmlDoc;

function loadXML()
{
  if (window.ActiveXObject)
  {
    xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
    xmlDoc.async = false;
    xmlDoc.load("cookbook.xml");
    replaceNumbersWithWords(xmlDoc);
  } else if (document.implementation && document.implementation.createDocument)
  {
    fetch("cookbook.xml")
      .then(response => response.text())
      .then(xmlString =>
      {
        const parser = new DOMParser();
        xmlDoc = parser.parseFromString(xmlString, "text/xml");
        replaceNumbersWithWords(xmlDoc);
      });
  }
}

function displayXML(xml)
{
  const serializer = new XMLSerializer();
  const xmlString = serializer.serializeToString(xml);
  document.getElementById("xmlDisplay").innerText = xmlString;
}

function createTable(xml)
{
  const dishes = xml.getElementsByTagName("dish");
  let tableHTML = `<table border="1"><tr><th>Type</th><th>Name</th><th>Ingredients</th><th>Calories</th><th>Recipe</th></tr>`;

  Array.from(dishes).forEach(dish =>
  {
    const type = dish.getElementsByTagName("type")[0].textContent;
    const name = dish.getElementsByTagName("name")[0].textContent;
    const calories = dish.getElementsByTagName("calories")[0].textContent;
    const recipe = dish.getElementsByTagName("recipe")[0].textContent;

    let ingredientsList = "";
    const ingredients = dish.getElementsByTagName("ingredient");
    Array.from(ingredients).forEach(ingredient =>
    {
      const ingredientName = ingredient.getElementsByTagName("name")[0].textContent;
      const amount = ingredient.getElementsByTagName("amount")[0].textContent;
      const measure = ingredient.getElementsByTagName("measure")[0].textContent;
      ingredientsList += `${amount} ${measure} ${ingredientName}, `;
    });

    tableHTML += `<tr><td>${type}</td><td>${name}</td><td>${ingredientsList.slice(0, -2)}</td><td>${calories}</td><td>${recipe}</td></tr>`;
  });

  tableHTML += "</table>";
  document.getElementById("tableDisplay").innerHTML = tableHTML;
}

function numberToWords(num)
{
  const words = {
    0: "нуль",
    1: "один",
    2: "два",
    3: "три",
    4: "чотири",
    5: "п'ять",
    6: "шість",
    7: "сім",
    8: "вісім",
    9: "дев'ять",
    50: "п'ятдесят",
    100: "сто",
    150: "сто п'ятдесят",
    200: "двісті",
    250: "двісті п'ятдесят",
    300: "триста",
    350: "триста п'ятдесят",
    400: "чотириста",
    450: "чотириста п'ятдесят",
    500: "п'ятсот",
    550: "п'ятсот п'ятдесят",
    600: "шістсот"
  };
  return words[num] || num.toString();
}

function replaceNumbersWithWords(xml)
{
  displayXML(xml);
  const amounts = xml.getElementsByTagName("amount");
  Array.from(amounts).forEach(amountNode =>
  {
    const amountValue = parseInt(amountNode.textContent);
    if (!isNaN(amountValue))
    {
      amountNode.textContent = numberToWords(amountValue);
    }
  });
  createTable(xml);
}

document.addEventListener("DOMContentLoaded", loadXML);