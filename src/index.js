import _ from 'lodash';
import './style.css';
import { getLeaderBoard } from './leaderboardApi.js';
// eslint-disable-next-line import/no-cycle
import btnsAction from './btnsAction.js';

const renderLeaderBoard = (leaderBoardApiContent) => {
  const leaderBoardItems = leaderBoardApiContent;
  const listItemClassName = 'col--leaderboard__list--item';
  const leaderBoardList = _.map(leaderBoardItems, (item) => {
    const { user, score } = item;
    return `<li class="${listItemClassName}">${user}: ${score}</li>`;
  });
  const docLeaderBoardList = document.getElementById('leaderboard');

  docLeaderBoardList.innerHTML = leaderBoardList.join('');
};

const getLeaderBoardContent = () => {
  getLeaderBoard().then((res) => {
    res.result = _.orderBy(res.result, ['score', 'user'], ['desc', 'asc']);
    renderLeaderBoard(res.result);
  });
};

getLeaderBoardContent();
btnsAction();

export default getLeaderBoardContent;
