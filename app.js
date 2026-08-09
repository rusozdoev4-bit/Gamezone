const search=document.getElementById('search');
const filters=document.querySelectorAll('.filter');
const games=document.querySelectorAll('.game');
const empty=document.getElementById('empty');
const count=document.getElementById('gameCount');

function updateGames(){
  const q=search.value.toLowerCase().trim();
  const active=document.querySelector('.filter.active').dataset.filter;
  let visible=0;
  games.forEach(g=>{
    const okName=g.dataset.name.toLowerCase().includes(q);
    const okCat=active==='all'||g.dataset.cat===active;
    g.style.display=okName&&okCat?'block':'none';
    if(okName&&okCat) visible++;
  });
  count.textContent=visible+' '+(visible===1?'игра':'игр');
  empty.style.display=visible?'none':'block';
}
search.addEventListener('input',updateGames);
filters.forEach(b=>b.addEventListener('click',()=>{
  filters.forEach(x=>x.classList.remove('active'));
  b.classList.add('active'); updateGames();
}));

const modal=document.getElementById('modal');
document.getElementById('loginBtn').onclick=()=>modal.classList.add('show');
document.getElementById('closeModal').onclick=()=>modal.classList.remove('show');
modal.addEventListener('click',e=>{if(e.target===modal)modal.classList.remove('show')});

let toastTimer;
function showToast(text){
  const t=document.getElementById('toast');
  t.textContent=text;t.classList.add('show');
  clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('show'),2200);
}
