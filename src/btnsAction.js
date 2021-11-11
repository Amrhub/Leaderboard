/* eslint-disable no-unused-expressions */
import _ from 'lodash';
import { addUserScore, getLeaderBoard } from './leaderboardApi.js';
// eslint-disable-next-line import/no-cycle
import getLeaderBoardContent from './index.js';

const form = document.getElementById('form');
const btnRefresh = document.getElementById('btn-refresh');
const error = document.getElementById('error');

const validateUserExistence = (users, newUser) => {
  error.style.display = 'none';
  const isUserExist = _.find(
    users.result,
    (user) => user.user === newUser.user && user.score === newUser.score,
  );
  return isUserExist !== undefined;
};

const btnsAction = () => {
  form.onsubmit = (e) => {
    e.preventDefault();
    const newUser = {
      user: form.name.value,
      score: parseInt(form.score.value, 10),
    };

    getLeaderBoard().then((users) => {
      validateUserExistence(users, newUser)
        ? ((error.innerHTML = 'User with same score already exist'),
        (error.style.display = 'block'))
        : ((form.name.value = ''),
        (form.score.value = ''),
        addUserScore(newUser));
    });
  };

  btnRefresh.onclick = () => {
    getLeaderBoardContent();
  };
};

export default btnsAction;
