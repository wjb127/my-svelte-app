<script>
  import Nav from '$lib/components/Nav.svelte';
</script>

<Nav />

<main>
  <!-- 히어로 섹션 -->
  <section class="hero">
    <div class="container">
      <h1>당신의 비즈니스를 위한<br>최고의 솔루션</h1>
      <p>혁신적인 기술로 비즈니스의 성장을 돕습니다</p>
      <button class="cta-button">시작하기</button>
    </div>
  </section>

  <!-- 특징 섹션 -->
  <section id="features" class="features">
    <div class="container">
      <h2>주요 특징</h2>
      <div class="feature-grid">
        <div class="feature-card">
          <h3>빠른 속도</h3>
          <p>최적화된 성능으로 빠른 서비스를 제공합니다.</p>
        </div>
        <div class="feature-card">
          <h3>안정성</h3>
          <p>신뢰할 수 있는 시스템으로 안정적인 서비스를 제공합니다.</p>
        </div>
        <div class="feature-card">
          <h3>확장성</h3>
          <p>비즈니스 성장에 맞춰 확장 가능한 솔루션을 제공합니다.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 문의하기 섹션 -->
  <section id="contact" class="contact">
    <div class="container">
      <h2>문의하기</h2>
      <form class="contact-form">
        <input type="text" placeholder="이름" required>
        <input type="email" placeholder="이메일" required>
        <textarea placeholder="메시지" rows="5" required></textarea>
        <button type="submit" class="submit-button">보내기</button>
      </form>
    </div>
  </section>
</main>

<style>
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: white;
    padding: 4rem 0;
  }

  .hero h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  .hero p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
  }

  .cta-button {
    padding: 1rem 2rem;
    font-size: 1.1rem;
    background: white;
    color: var(--primary-color);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: transform 0.2s;
  }

  .cta-button:hover {
    transform: translateY(-2px);
  }

  .features {
    padding: 6rem 0;
    background: var(--light-bg);
  }

  .features h2 {
    text-align: center;
    margin-bottom: 3rem;
  }

  .feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .feature-card {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }

  .contact {
    padding: 6rem 0;
  }

  .contact h2 {
    text-align: center;
    margin-bottom: 3rem;
  }

  .contact-form {
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .contact-form input,
  .contact-form textarea {
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  .submit-button {
    padding: 1rem;
    background: var(--primary-color);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.2s;
  }

  .submit-button:hover {
    background: var(--secondary-color);
  }

  @media (max-width: 768px) {
    .hero h1 {
      font-size: 2.5rem;
    }

    .hero p {
      font-size: 1.1rem;
    }

    .feature-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
