import { atom, selector } from 'recoil';
import { questions } from '../../data/questions'
import { reviews } from '../../data/reviews'



// Assuming reviews is imported or defined elsewhere


// Selector to get filtered reviews
export const filteredReviewsSelector = selector({
  key: 'filteredReviewsSelector',
  get: ({ get }) => {
    const today = new Date();
    const formattedToday = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
    
    return reviews.filter(review => parseInt(review.date) < formattedToday);
  },
});

// Atom to store the selected index
export const selectedIndexState = atom({
  key: 'selectedIndexState',
  default: selector({
    key: 'selectedIndexDefault',
    get: ({ get }) => {
      const filteredReviews = get(filteredReviewsSelector);
      return filteredReviews.length - 1; // Last index of the filtered reviews
    },
  }),
});


export const questionsState = atom({
  key: "questionsState",
  default: reviews,
})