const likeURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lCNzVmZgTty5Cce1TAf3/likes/';

async function fetchLikes() {
  const response = await fetch(likeURL);
  return response.json();
}

const displayLikes = () => {
  fetchLikes()
    .then((data) => {
      for (let i = 0; i < 6; i += 1) {
        const parent = document.querySelector(`[data-id="${data[i].item_id}"]`);
        const paragraph = parent.querySelector('.likes');
        paragraph.textContent = `Likes ${data[i].likes}`;
      }
    });
};

async function postLikes(likeObj) {
  const response = await fetch(likeURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(likeObj),
  });
  return response;
}

const updateLikes = (event) => {
  const itemId = event.target.parentElement.parentElement.getAttribute('data-id');
  postLikes({ item_id: itemId })
    .then(() => {
      displayLikes();
    });
};

export default { displayLikes, updateLikes };
