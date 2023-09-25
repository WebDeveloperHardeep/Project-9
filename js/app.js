const APIURL = "https://api.github.com/users"; // api for geting user data
const main = document.querySelector("#main"); // for target main div
const getUser = async (username) => {
  const response = await fetch(APIURL + username);
  //   console.log(response);
  const data = await response.json(); // respone covernt into json and give value to data variable.
  console.log(data);
  const card = ` 
   <div id="main">
  <div class="card"></div>
  <div>
    <img class="avatar" src="${data.avart}" alt="Florin" />
  </div>

  <div class="user-info">
    <h2>name</h2>
    <p>bio</p>

    <ul class="info">
      <li>###<strong>Followers</strong></li>
      <li>###<strong>Following</strong></li>
      <li>###<strong>Repositories</strong></li>
    </ul>

    <div id="repositories">
      <a class="repositories" href="#" target="_blank">Repositories 1</a>
      <a class="repositories" href="#" target="_blank">Repositories 2</a>
      <a class="repositories" href="#" target="_blank">Repositories 3</a>
    </div>
  </div> `;
  main.innerHTML = card;
};

getUser("i-am-bhaggi");
