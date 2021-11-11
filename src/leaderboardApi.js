/* eslint-disable comma-dangle */
const gameId = 'KvmpNbDRknvr72mDOdNz';
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`;

const addUserScore = async (userScore = {}) => {
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userScore),
  });
};

const getLeaderBoard = async () => {
  const response = await fetch(url);
  return response.json();
};

export { addUserScore, getLeaderBoard };
