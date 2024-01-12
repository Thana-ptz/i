document.addEventListener('DOMContentLoaded', function () {
  const content = document.querySelector('ion-content');
  const infiniteScrollContainer = document.createElement('ion-infinite-scroll');
  const infiniteScrollContent = document.createElement('ion-infinite-scroll-content');

  const itemsContainer = document.createElement('div');
  itemsContainer.setAttribute('id', 'infinite-scroll-container');

  infiniteScrollContainer.appendChild(infiniteScrollContent);
  content.appendChild(itemsContainer);
  content.appendChild(infiniteScrollContainer);

  let page = 1; // ตัวแปรเก็บหน้าปัจจุบัน

  infiniteScrollContainer.addEventListener('ionInfinite', async function () {
    try {
      const response = await fetch(`https://65a1a56642ecd7d7f0a6dbfb.mockapi.io/api/demo/user?page=${page}`);
      const data = await response.json();

      if (data.length > 0) {
        data.forEach((item) => {
          const newItem = document.createElement('ion-item');
          newItem.innerText = `User ID: ${item.id}, Name: ${item.name}, Email: ${item.email}`;
          itemsContainer.appendChild(newItem);
        });

        page++; // เพิ่มหน้าเมื่อโหลดข้อมูลเสร็จ
        infiniteScrollContainer.complete(); // จบกิจกรรม infinite scroll
      } else {
        infiniteScrollContainer.disabled = true; // ปิด infinite scroll เมื่อไม่มีข้อมูล
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      infiniteScrollContainer.complete(); // จบกิจกรรม infinite scroll ในกรณีเกิดข้อผิดพลาด
    }
  });
});
