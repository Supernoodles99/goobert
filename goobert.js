const count = document.getElementById("numbercounter");
const leveltext = document.getElementById("level");
const levels = {5:"a Sr. goobert watcher",10:"a Jr. goobert enjoyer",20:"a Sr. goobert enjoyer",50:"a Jr. goobert admirer",75:"a Sr. goobert admirer",100:"a goobert honorer",180:"an Ultimate goobert honorer",360:"a SUPER ULTIMATE goobert honorer",600:"a goobert cherisher",86400:"a total time waster"}

let i = 0;
function goobert() {
  i++;
  count.innerText = i;
  if (levels[i]) {
  leveltext.innerText = levels[i]
  }
};
setInterval(goobert, 1000);
