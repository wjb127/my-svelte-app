<script>
  let isMenuOpen = false;
</script>

<nav class="nav">
  <div class="nav-container">
    <a href="/" class="logo">로고</a>
    
    <button 
      class="menu-button" 
      aria-label="메뉴 열기"
      on:click={() => isMenuOpen = !isMenuOpen}
    >
      <span class="menu-icon"></span>
    </button>

    <div class="nav-links" class:active={isMenuOpen}>
      <a href="#features">특징</a>
      <a href="#about">소개</a>
      <a href="#contact">문의하기</a>
    </div>
  </div>
</nav>

<style>
  .nav {
    position: fixed;
    width: 100%;
    background: white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    z-index: 1000;
  }

  .nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    color: var(--primary-color);
  }

  .nav-links {
    display: flex;
    gap: 2rem;
  }

  .nav-links a {
    text-decoration: none;
    color: var(--text-color);
    font-weight: 500;
  }

  .menu-button {
    display: none;
  }

  @media (max-width: 768px) {
    .menu-button {
      display: block;
      background: none;
      border: none;
      cursor: pointer;
    }

    .nav-links {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: white;
      padding: 1rem;
      flex-direction: column;
      align-items: center;
    }

    .nav-links.active {
      display: flex;
    }
  }
</style> 