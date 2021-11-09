import _ from 'lodash';
import './style.css';

function renderLeaderBoard() {
  const leaderBoardItems = [
    {
      name: 'Nicu',
      score: 100,
    },
    {
      name: 'Amr',
      score: 45,
    },
    {
      name: 'Abel',
      score: 123,
    },
  ];
  const listItemClassName = 'col--leaderboard__list--item';
  const leaderBoardList = _.map(leaderBoardItems, (item) => {
    const { name, score } = item;
    return `<li class="${listItemClassName}">${name}: ${score}</li>`;
  });
  const docLeaderBoardList = document.getElementById('leaderboard');

  docLeaderBoardList.innerHTML = leaderBoardList.join('');
}

renderLeaderBoard();
