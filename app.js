<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GameZone — игровая зона</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="header">
    <a class="logo" href="#">GAME<span>ZONE</span></a>
    <nav class="nav">
      <a href="#games">Игры</a>
      <a href="#shop">Магазин</a>
      <a href="#about">О нас</a>
    </nav>
    <button class="login-btn" id="loginBtn">Войти</button>
  </header>

  <main>
    <section class="hero">
      <div class="hero-text">
        <div class="badge">🔥 GAME OF THE WEEK</div>
        <h1>Твоя игровая<br><span>зона</span></h1>
        <p>Игры, цифровые товары и всё для настоящих геймеров.</p>
        <div class="hero-actions">
          <a class="primary-btn" href="#games">Смотреть игры</a>
          <a class="secondary-btn" href="#shop">Магазин</a>
        </div>
      </div>
      <div class="hero-card">
        <div class="game-icon">🎮</div>
        <h2>Cyber Arena</h2>
        <div class="rating">★★★★★ <b>4.9</b></div>
        <button class="play-btn" onclick="showToast('Игра добавлена в избранное ❤️')">♡ В избранное</button>
      </div>
    </section>

    <section class="section" id="games">
      <div class="section-title">
        <div>
          <p class="red-label">КАТАЛОГ</p>
          <h2>Популярные игры</h2>
        </div>
        <span id="gameCount">6 игр</span>
      </div>

      <div class="controls">
        <input id="search" type="search" placeholder="🔎  Найти игру...">
        <button class="filter active" data-filter="all">Все</button>
        <button class="filter" data-filter="action">Экшен</button>
        <button class="filter" data-filter="online">Онлайн</button>
        <button class="filter" data-filter="strategy">Стратегии</button>
      </div>

      <div class="games" id="gameList">
        <article class="game" data-name="Standoff 2" data-cat="online">
          <div class="game-cover red">S2</div><h3>Standoff 2</h3><p>Онлайн • Шутер</p><button onclick="showToast('Standoff 2 открыта')">Подробнее</button>
        </article>
        <article class="game" data-name="Cyber Arena" data-cat="action">
          <div class="game-cover purple">CA</div><h3>Cyber Arena</h3><p>Экшен • Арена</p><button onclick="showToast('Cyber Arena открыта')">Подробнее</button>
        </article>
        <article class="game" data-name="Dota 2" data-cat="online">
          <div class="game-cover blue">D2</div><h3>Dota 2</h3><p>Онлайн • MOBA</p><button onclick="showToast('Dota 2 открыта')">Подробнее</button>
        </article>
        <article class="game" data-name="Warzone" data-cat="action">
          <div class="game-cover dark">WZ</div><h3>Warzone</h3><p>Экшен • Battle Royale</p><button onclick="showToast('Warzone открыта')">Подробнее</button>
        </article>
        <article class="game" data-name="Civilization" data-cat="strategy">
          <div class="game-cover gold">CIV</div><h3>Civilization</h3><p>Стратегия</p><button onclick="showToast('Civilization открыта')">Подробнее</button>
        </article>
        <article class="game" data-name="Apex Legends" data-cat="online">
          <div class="game-cover orange">APEX</div><h3>Apex Legends</h3><p>Онлайн • Шутер</p><button onclick="showToast('Apex Legends открыта')">Подробнее</button>
        </article>
      </div>
      <p class="empty" id="empty">Ничего не найдено 😕</p>
    </section>

    <section class="shop" id="shop">
      <div>
        <p class="red-label">МАГАЗИН</p>
        <h2>Цифровые товары</h2>
        <p>Пополняй баланс и покупай игровые товары.</p>
      </div>
      <div class="product">
        <span>💎</span><div><b>1000 GameCoins</b><small>Игровая валюта</small></div>
        <button onclick="showToast('Товар добавлен в корзину 🛒')">₸ 1 990</button>
      </div>
      <div class="product">
        <span>🎁</span><div><b>Премиум набор</b><small>Бонусы и предметы</small></div>
        <button onclick="showToast('Товар добавлен в корзину 🛒')">₸ 3 490</button>
      </div>
    </section>

    <section class="about" id="about">
      <p class="red-label">GAMEZONE</p>
      <h2>Игра начинается здесь.</h2>
      <p>Современный игровой каталог с удобным интерфейсом для телефона и ПК.</p>
    </section>
  </main>

  <footer>© 2026 GameZone <span>•</span> Сделано для геймеров</footer>

  <div class="modal" id="modal">
    <div class="modal-box">
      <button class="close" id="closeModal">×</button>
      <h2>Вход в GameZone</h2>
      <input placeholder="Email">
      <input type="password" placeholder="Пароль">
      <button class="primary-btn" onclick="showToast('Форма входа готова')">Войти</button>
    </div>
  </div>
  <div class="toast" id="toast"></div>
  <script src="app.js"></script>
</body>
</html>
