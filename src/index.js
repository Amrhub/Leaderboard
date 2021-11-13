import _ from 'lodash';
import './style.css';
import { getLeaderBoard } from './leaderboardApi.js';
// eslint-disable-next-line import/no-cycle
import btnsAction from './btnsAction.js';

const docLeaderBoardList = document.getElementById('leaderboard');
const loader = document.getElementById('loader');

const renderLeaderBoard = (leaderBoardApiContent) => {
  const leaderBoardItems = leaderBoardApiContent;
  const listItemClassName = 'col--leaderboard__list--item';
  const leaderBoardList = _.map(leaderBoardItems, (item) => {
    const { user, score } = item;
    return `<li class="${listItemClassName}">${user}: ${score}</li>`;
  });

  docLeaderBoardList.innerHTML = leaderBoardList.join('');
};

const getLeaderBoardContent = () => {
  setTimeout(() => {
    loader.style.display = 'inline-block';
    getLeaderBoard().then((res) => {
      res.result = _.orderBy(res.result, ['score', 'user'], ['desc', 'asc']);
      renderLeaderBoard(res.result);
      loader.style.display = 'none';
      docLeaderBoardList.style.display = 'block';
    });
  }, 1000);
};

getLeaderBoardContent();
btnsAction();

export default getLeaderBoardContent;
