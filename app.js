const games = [
 {name:"Cyber Arena",cat:"action online",price:14990,icon:"🎮"},
 {name:"Night Ops",cat:"action online",price:9990,icon:"🔫"},
 {name:"Kingdoms",cat:"strategy",price:7490,icon:"🏰"},
 {name:"Speed Legends",cat:"online action",price:11990,icon:"🏎️"},
 {name:"Space War",cat:"online",price:8990,icon:"🚀"},
 {name:"Dungeon Quest",cat:"action",price:6490,icon:"⚔️"},
 {name:"Football Stars",cat:"online",price:7990,icon:"⚽"},
 {name:"Pixel World",cat:"strategy",price:4990,icon:"👾"}
];
const shop = [
 {name:"1000 Coins",price:1990,icon:"🪙"},
 {name:"Battle Pass",price:4990,icon:"🎟️"},
 {name:"Rare Skin",price:7990,icon:"🧤"},
 {name:"Premium Pack",price:12990,icon:"💎"}
];
let filter="all", cart=JSON.parse(localStorage.getItem("cart")||"[]");

function money(n){return "₸"+n.toLocaleString("ru-RU")}
function renderGames(){
 const q=(document.getElementById("search").value||"").toLowerCase();
 const list=games.filter(g=>(filter==="all"||g.cat.includes(filter))&&g.name.toLowerCase().includes(q));
 document.getElementById("gameGrid").innerHTML=list.map(g=>`
 <article class="card"><div class="cover">${g.icon}</div><div class="card-body">
 <h3>${g.name}</h3><div class="muted">PC · Онлайн</div><div class="price">${money(g.price)}</div>
 <button class="btn primary" onclick='addCart(${JSON.stringify(g)})'>В корзину</button></div></article>`).join("");
}
function renderShop(){
 document.getElementById("shopGrid").innerHTML=shop.map(g=>`
 <article class="card"><div class="cover">${g.icon}</div><div class="card-body"><h3>${g.name}</h3>
 <div class="price">${money(g.price)}</div><button class="btn primary" onclick='addCart(${JSON.stringify(g)})'>Добавить</button></div></article>`).join("");
}
function setFilter(x,el){filter=x;document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));el.classList.add("active");renderGames()}
function addCart(item){cart.push(item);localStorage.setItem("cart",JSON.stringify(cart));updateCart();toast("Добавлено в корзину")}
function updateCart(){document.getElementById("cartCount").textContent=cart.length}
function showCart(){
 document.getElementById("cartItems").innerHTML=cart.length?cart.map((x,i)=>`<div class="cart-row"><span>${x.icon} ${x.name}</span><b>${money(x.price)}</b><button onclick="removeCart(${i})">×</button></div>`).join(""):"<p class='muted'>Корзина пуста.</p>";
 document.getElementById("cartTotal").textContent=money(cart.reduce((s,x)=>s+x.price,0));
 openModal("cartModal");
}
function removeCart(i){cart.splice(i,1);localStorage.setItem("cart",JSON.stringify(cart));showCart();updateCart()}
function checkout(){
 if(!cart.length)return toast("Сначала добавь товар");
 const total=cart.reduce((s,x)=>s+x.price,0);
 cart=[];localStorage.setItem("cart","[]");updateCart();closeModal("cartModal");
 document.getElementById("ordersStat").textContent="328";
 toast("Заказ оформлен на "+money(total)+" 🎉");
}
function openModal(id){document.getElementById(id).classList.add("show")}
function closeModal(id){document.getElementById(id).classList.remove("show")}
function login(){
 const email=document.getElementById("loginEmail").value;
 if(!email)return toast("Введи email");
 document.getElementById("profileName").textContent=email.split("@")[0];
 closeModal("loginModal");toast("Добро пожаловать!");
}
function addGame(){
 const name=document.getElementById("newGameName").value.trim();
 const price=Number(document.getElementById("newGamePrice").value);
 if(!name||!price)return toast("Заполни название и цену");
 games.push({name,price,cat:"online",icon:"🎮"});renderGames();
 document.getElementById("newGameName").value="";document.getElementById("newGamePrice").value="";
 toast("Игра добавлена в каталог");
}
function toast(text){const t=document.getElementById("toast");t.textContent=text;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2200)}
renderGames();renderShop();updateCart();