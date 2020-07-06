const rating = document.querySelector('.rating')
const ratingItems = Array.prototype.slice.call(document.querySelectorAll('.rating-item'));

ratingItems.forEach(element => {
  element.addEventListener('click', () => {
    const { ratingItemValue } = element.dataset
    rating.dataset.ratingValue = ratingItemValue
  })
});
