document.addEventListener('DOMContentLoaded', function () {
  const content = document.querySelector('ion-content');

  // Create Infinite Scroll Container
  const infiniteScrollContainer = document.createElement('ion-infinite-scroll');
  infiniteScrollContainer.setAttribute('id', 'infinite-scroll-id');

  // Create Infinite Scroll Content
  const infiniteScrollContent = document.createElement('ion-infinite-scroll-content');
  infiniteScrollContent.setAttribute('loading-text', 'Loading...');

  // Append Infinite Scroll Content to Infinite Scroll Container
  infiniteScrollContainer.appendChild(infiniteScrollContent);

  // Append Infinite Scroll Container to ion-content
  content.appendChild(infiniteScrollContainer);

  // Add Event Listener for Infinite Scroll
  infiniteScrollContainer.addEventListener('ionInfinite', async function () {
    // Simulate asynchronous data loading
    setTimeout(() => {
      // Add more items to the content
      const itemsContainer = document.getElementById('infinite-scroll-container');
      for (let i = 0; i < 10; i++) {
        const newItem = document.createElement('ion-item');
        newItem.innerText = `Item ${i + 1}`;
        itemsContainer.appendChild(newItem);
      }

      // Complete the infinite scroll event
      infiniteScrollContainer.complete();
    }, 1000);
  });
});
