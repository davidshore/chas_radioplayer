const channelsDiv = document.querySelector('#channels'),
  search = document.querySelector('#search'),
  skeleton = document.querySelector('.skeleton-loader');

async function getApi() {
  const response = await fetch(
    'https://api.sr.se/api/v2/channels/?format=json'
  );

  if (response.ok) {
    const data = await response.json();
    return data.channels;
  } else {
    console.log('error');
  }
}

function createChannel(api) {
  const channelDiv = document.createElement('div');
  channelDiv.classList.add('channel');
  channelDiv.setAttribute('id', api.name.toLowerCase());
  channelDiv.innerHTML = `
  <div class="left-box">
    <img src="${api.image}">
  </div>
  <div class="right-box" style="background: #${api.color}">
  <h1>${api.name}</h1>
  <audio controls>
  <source src="${api.liveaudio.url}" type="audio/mpeg" />
  </audio>
  </div>
  `;

  channelsDiv.appendChild(channelDiv);
}

function addSearchListener() {
  search.addEventListener('keyup', () => {
    const channelsArray = Array.from(document.querySelectorAll('.channel')),
      channels = document.querySelectorAll('.channel');
    let filteredChannels = channelsArray.filter((channel) => {
      return channel.getAttribute('id').includes(search.value.toLowerCase());
    });

    filteredChannels = filteredChannels.map((channel) => {
      return channel.getAttribute('id');
    });

    channels.forEach((channel) => {
      channel.classList.remove('hide');
      if (!filteredChannels.includes(channel.getAttribute('id'))) {
        channel.classList.add('hide');
      }
    });
  });
}

getApi().then((data) => {
  skeleton.innerHTML = '';
  data.forEach((channel) => {
    createChannel(channel);
    addSearchListener();
  });
});
