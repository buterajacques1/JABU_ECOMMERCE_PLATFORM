// main.js
window.addEventListener('load', () => {
    const apiUrl = "http://localhost:1337/api/clothes?populate=picture";
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data.data);
        displayClothesData(data.data);
      })
      .catch(error => console.error("Error fetching data:", error));
  });
  
  function displayClothesData(data) {
    const clothesContainer = document.getElementById('clothesContainer');
  
    data.forEach(item => {
      const { category, description, price, picture } = item.attributes;
      const thumbnailUrl = item?.attributes?.picture?.data?.attributes?.formats?.thumbnail?.url;
      const pictureUrl = item?.attributes?.picture?.data?.attributes?.url;
  
      const clothesElement = document.createElement('div');
      clothesElement.classList.add('col-lg-4', 'col-sm-6');
      clothesElement.innerHTML = `
        <a class="portfolio-box" href="${pictureUrl}" style="display: block; max-height: 1232px; overflow: hidden;">
          <img class="img-fluid" src="${pictureUrl}" alt="${category}">
          <div class="portfolio-box-caption">
            <div class="project-category text-white-50">
              ${category}
            </div>
            <div class="project-name">
              ${description} ${price}
            </div>
          </div>
        </a>
      `;
  
      clothesContainer.appendChild(clothesElement);
    });
  }
