document.addEventListener('DOMContentLoaded', () => {
  const serverURL = 'http://localhost:3000';
  const body = document.querySelector('body');

  const h1 = document.createElement('h1');
  h1.textContent = 'song4'.toUpperCase();

  // 확인
  body.appendChild(h1);

  // input 넣기
  const slackInput = document.createElement('input');
  body.appendChild(slackInput);
  slackInput.focus();

  // slack-message 버튼
  const slackBtn = document.createElement('button');
  slackBtn.textContent = 'slack'.toUpperCase();

  slackBtn.onclick = async () => {
    const body = {
      text: slackInput.value,
    };
    await axios.post(`${serverURL}/slack-message`, body);

    slackInput.value = '';
    slackInput.focus();
  };

  body.append(slackBtn);

  // Exchange rate button
  const exchangeRateBtn = document.createElement('button');
  exchangeRateBtn.textContent = 'exchange rate'.toUpperCase();

  exchangeRateBtn.onclick = async () => {
    const { data } = await axios.get(`${serverURL}/exchange-rate`);

    console.log(data);
  };

  body.append(exchangeRateBtn);
});
