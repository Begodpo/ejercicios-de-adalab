const getTweets = () => {
  return fetch(
    "https://beta.adalab.es/pw-recursos/apis/twitter-v1/tweets.json"
  ).then((response) => response.json());
};
export default getTweets;
