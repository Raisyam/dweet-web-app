import Account from './Account';

const Tweet = ({
  tweetId,
  imagePhoto,
  userName,
  date,
  text,
  display,
  removeTweet,
  editThisTweet,
}) => {
  // const deleteThisTweet = () => {
  //   console.log('DELETE this tweet!--------------');
  //   console.log(`TWEET ID: ${tweetId}`);
  //   console.log(`USERNAME: ${userName.slice(1)}`);

  //   document.querySelector(`#tweet-${tweetId}`).remove;
  // };

  // const editThisTweet = () => {
  //   console.log('edit this tweet');
  // };

  return (
    <div id={`tweet-${tweetId}`} className="tweet shadow-effect">
      <Account imagePhoto={imagePhoto} userName={userName} />
      <div className="date">{date}</div>

      <button
        id="edit-tweet"
        onClick={() => editThisTweet(text)}
        title="Edit this tweet"
        className="button-effect"
        style={display ? { display: 'block' } : { display: 'none' }}
      >
        <span className="emoji">✍</span>
      </button>

      <button
        id="delete-tweet"
        onClick={removeTweet}
        title="Delete this tweet"
        className="button-effect"
        style={display ? { display: 'block' } : { display: 'none' }}
      >
        <span className="emoji">🗑</span>
      </button>

      <p className="tweet-text">{text}</p>
    </div>
  );
};

export default Tweet;
