const likeURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lCNzVmZgTty5Cce1TAf3/likes/';

const fetchMeals = async (categoryName) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`;
  const response = await fetch(URL);
  return response.json();
};

const fetchLikes = async () => {
  const response = await fetch(likeURL);
  return response.json();
};

const fetchCategories = async () => {
  const URL = 'https://www.themealdb.com/api/json/v1/1/categories.php';
  const response = await fetch(URL);
  return response.json();
};

const getMeal = async (mealID) => {
  const mealURL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`;
  const response = await fetch(mealURL);
  const data = await response.json();
  return data.meals;
};

const postLikes = async (likeObj) => {
  const response = await fetch(likeURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(likeObj),
  });
  return response;
};

const getComments = async (mealID) => {
  const CommentsURL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lCNzVmZgTty5Cce1TAf3/comments?item_id=${mealID}`;
  const response = await fetch(CommentsURL);
  const data = await response.json();
  return data;
};

const postComment = (inputData, onSuccess) => {
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lCNzVmZgTty5Cce1TAf3/comments', {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify(inputData),

  })
    .then(() => onSuccess && onSuccess());
};

export {
  getComments, postComment, postLikes, getMeal, fetchLikes, fetchMeals, fetchCategories,
};