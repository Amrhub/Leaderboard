/* eslint-disable comma-dangle */
const gameId = 'KvmpNbDRknvr72mDOdNz';
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`;

export async function addUserScore(userScore = {}) {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userScore),
  });
}

export async function getLeaderBoard() {
  const response = await fetch(url);
  return response.json();
}
