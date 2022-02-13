export const getBallotData = () => {
  return fetch('/api/getBallotData').then(res => {
    return res.json();
  });
}