document.addEventListener('DOMContentLoaded', () => {

  // ── AOS ──
  AOS.init({
    offset: 100,
    duration: 800,
    easing: 'ease-in-out',
    once: true,
  });

  // ── PRELOADER ──
  const loader = document.getElementById('loader-wrapper');
  if (loader) {
    window.addEventListener('load', () => {
      loader.style.opacity = '0';
      setTimeout(() => loader.style.display = 'none', 500);
    });
  }

  // ── HAMBURGER ──
  const hamburger = document.querySelector('.hamburger');
  const mainNav   = document.querySelector('.main-nav');

  if (hamburger && mainNav) {
    hamburger.addEventListener('click', () => {
      mainNav.classList.toggle('active');
      hamburger.classList.toggle('active');
      document.body.classList.toggle('no-scroll');
    });

    mainNav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.classList.remove('no-scroll');
      });
    });

    // Close nav on outside click
    document.addEventListener('click', (e) => {
      if (mainNav.classList.contains('active') &&
          !mainNav.contains(e.target) &&
          !hamburger.contains(e.target)) {
        mainNav.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.classList.remove('no-scroll');
      }
    });
  }

  // ── COPYRIGHT YEAR ──
  document.querySelectorAll('.current-year').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  // ── LANGUAGE SWITCHER ──
  // Shared i18n content per page
  const pages = {

    index: {
      en: {
        label:     '1K1 Studios Presents',
        sub:       'Shadows of the Legion',
        tagline:   'Surviving the fall of Rome is only the beginning.<br>Build your fortress. <span>Command your legion.</span> Defy history.',
        steam:     'Wishlist on Steam',
        learn:     'Learn More',
        ea:        '◆ &nbsp;Wishlist — Available Now&nbsp; ◆',
        featTitle: 'The Legion Never Surrenders',
        f1t: 'Build Your Fortress',  f1d: 'From wooden palisades to stone walls. Every structure placed is a decision — build wisely or watch Rome crumble.',
        f2t: 'Command Your Legion',  f2d: 'Train soldiers, forge alliances, lead your forces. Every soldier has a cost — every battle has a consequence.',
        f3t: 'Defend at All Costs',  f3d: 'Each wave brings stronger enemies. Adapt your defenses or watch everything you built fall to dust.',
        f4t: 'Strategic Depth',      f4d: 'Manage resources, expand territory, balance economy and military. Every decision echoes through history.',
        aboutLabel: 'Who We Are',
        aboutTitle: '1K1 Studios',
        aboutDesc:  'A one-person studio forging immersive digital experiences. Every project built with care, shared as a resource for the community, and grown toward something greater.',
        aboutBtn:   'Our Story',
      },
      tr: {
        label:     '1K1 Studıos Sunar',
        sub:       'Lejyonun Gölgesi',
        tagline:   "Roma'nın çöküşünden sağ çıkmak sadece başlangıç.<br>Kalen inşa et. <span>Lejyonunu komuta et.</span> Tarihe meydan oku.",
        steam:     "Steam'de İstek Listesine Ekle",
        learn:     'Daha Fazla',
        ea:        '◆ &nbsp;istek listesi — Şimdi Mevcut&nbsp; ◆',
        featTitle: 'Lejyon Asla Teslim Olmaz',
        f1t: 'Kalen İnşa Et',        f1d: 'Tahta çitlerden taş duvarlara. Her yapı bir karar — doğru inşa et ya da Roma\'nın çöküşünü izle.',
        f2t: 'Lejyonunu Komuta Et',  f2d: 'Asker eğit, ittifaklar kur, ordunu yönet. Her askerin bir bedeli var — her savaşın bir sonucu.',
        f3t: 'Her Bedelle Savun',    f3d: 'Her dalga daha güçlü düşmanlar getirir. Savunmanı adapte et ya da inşa ettiğin her şeyin yıkılışını izle.',
        f4t: 'Stratejik Derinlik',   f4d: 'Kaynakları yönet, toprak genişlet, ekonomi ile orduyu dengele. Her karar tarihe yankılanır.',
        aboutLabel: 'Biz Kimiz',
        aboutTitle: '1K1 Studıos',
        aboutDesc:  'Sürükleyici dijital deneyimler yaratan tek kişilik bir stüdyo. Her proje özenle yapılır, toplulukla paylaşılır ve daha büyük bir hedefe doğru büyür.',
        aboutBtn:   'Hikayemiz',
      }
    },

    spqr: {
      en: {
        label:     '1K1 Studios Presents',
        sub:       'Shadows of the Legion',
        tagline:   'Surviving the fall of Rome is only the beginning.<br>Build your fortress. <span>Command your legion.</span> Defy history.',
        steam:     'Wishlist on Steam',
        ea:        '◆ &nbsp;Wishlist — Available Now&nbsp; ◆',
        featLabel: 'Gameplay',
        featTitle: 'The Legion Never Surrenders',
        f1t: 'Build Your Fortress',  f1d: 'From wooden palisades to stone walls. Every structure placed is a decision — build wisely or watch Rome crumble.',
        f2t: 'Command Your Legion',  f2d: 'Train soldiers, forge alliances, lead your forces. Every soldier has a cost — every battle has a consequence.',
        f3t: 'Defend at All Costs',  f3d: 'Each wave brings stronger enemies. Adapt your defenses or watch everything you built fall to dust.',
        f4t: 'Strategic Depth',      f4d: 'Manage resources, expand territory, balance economy and military. Every decision echoes through history.',
        ctaLabel: 'Wishlist Now',
        ctaTitle: 'Join the Legion',
        ctaSteam: 'Wishlist on Steam ',
        ctaNote:  '◆ &nbsp;Strategy · Colony Sim · Tower Defense · Roma Atmosphere&nbsp; ◆',
      },
      tr: {
        label:     '1K1 Studios Sunar',
        sub:       'Lejyonun Gölgesi',
        tagline:   "Roma'nın çöküşünden sağ çıkmak sadece başlangıç.<br>Kalen inşa et. <span>Lejyonunu komuta et.</span> Tarihe meydan oku.",
        steam:     "Steam'de İstek Listesine Ekle",
        ea:        '◆ &nbsp;İstek Listesi — Şimdi Mevcut&nbsp; ◆',
        featLabel: 'Oynanış',
        featTitle: 'Lejyon Asla Teslim Olmaz',
        f1t: 'Kalen İnşa Et',        f1d: 'Tahta çitlerden taş duvarlara. Her yapı bir karar — doğru inşa et ya da Roma\'nın çöküşünü izle.',
        f2t: 'Lejyonunu Komuta Et',  f2d: 'Asker eğit, ittifaklar kur, ordunu yönet. Her askerin bir bedeli var — her savaşın bir sonucu.',
        f3t: 'Her Bedelle Savun',    f3d: 'Her dalga daha güçlü düşmanlar getirir. Savunmanı adapte et ya da inşa ettiğin her şeyin yıkılışını izle.',
        f4t: 'Stratejik Derinlik',   f4d: 'Kaynakları yönet, toprak genişlet, ekonomi ile orduyu dengele. Her karar tarihe yankılanır.',
        ctaLabel: 'İstek Listesi - Şimdi Mevcut',
        ctaTitle: 'Lejyona Katıl',
        ctaSteam: "Steam'de İstek Listesine Ekle ",
        ctaNote:  '◆ &nbsp;Strateji · Koloni Sim · Kule Savunması · Roma Atmosferi&nbsp; ◆',
      }
    },

    about: {
      en: {
        heroLabel: 'Our Story',
        heroTitle: 'Innovation Through Passion',
        heroDesc:  'From humble beginnings to a growing force in interactive entertainment — this is the story of 1K1 Studios.',
        missionTitle: 'Our Mission',
        missionDesc:  'To create immersive and emotionally resonant digital experiences that captivate players worldwide, pushing the boundaries of creativity and technology.',
        visionTitle:  'Our Vision',
        visionDesc:   'To be recognized as a pioneer in the gaming industry, known for innovation, quality, and a commitment to fostering a vibrant gaming community.',
        valLabel: 'What Drives Us',
        valTitle: 'Core Values',
        v1t: 'Innovation',    v1d: 'Constantly exploring new ideas and technologies.',
        v2t: 'Collaboration', v2d: 'Fostering a supportive and creative environment.',
        v3t: 'Passion',       v3d: 'Driven by a deep love for games and storytelling.',
        v4t: 'Excellence',    v4d: 'Committed to delivering the highest quality in every aspect.',
        teamLabel: 'The Team',
        teamTitle: 'Behind the Studio',
        teamRole:  'Legatus legionis',
      },
      tr: {
        heroLabel: 'Hikayemiz',
        heroTitle: 'Tutku Aracılığıyla Yenilik',
        heroDesc:  'Mütevazı başlangıçlardan interaktif eğlencede büyüyen bir güce — bu 1K1 Studios\'un hikayesi.',
        missionTitle: 'Misyonumuz',
        missionDesc:  'Dünya genelinde oyuncuları büyüleyen, duygusal açıdan yankı uyandıran dijital deneyimler yaratmak; yaratıcılık ve teknolojinin sınırlarını zorlamak.',
        visionTitle:  'Vizyonumuz',
        visionDesc:   'Oyun sektöründe yenilikçiliği, kalitesi ve canlı bir oyun topluluğu oluşturma taahhüdüyle tanınan öncü bir stüdyo olmak.',
        valLabel: 'Bizi Yürüten',
        valTitle: 'Temel Değerler',
        v1t: 'Yenilik',      v1d: 'Sürekli yeni fikirler ve teknolojiler keşfetmek.',
        v2t: 'İş Birliği',   v2d: 'Destekleyici ve yaratıcı bir ortam oluşturmak.',
        v3t: 'Tutku',        v3d: 'Oyunlara ve hikaye anlatımına derin bir sevgiyle yönlendirilen.',
        v4t: 'Mükemmellik',  v4d: 'Her alanda en yüksek kaliteyi sunmaya kararlı.',
        teamLabel: 'Ekip',
        teamTitle: 'Stüdyonun Arkasında',
        teamRole:  'Legatus legionis',
      }
    }
  };

  // Detect which page we're on
  const page = document.body.dataset.page;
  if (!page || !pages[page]) return;

  window.setLang = function(lang) {
    const c = pages[page][lang];
    if (!c) return;

    // Toggle buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update all keyed elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (c[key] !== undefined) el.innerHTML = c[key];
    });

    document.documentElement.lang = lang;

    // Persist choice
    try { localStorage.setItem('1k1_lang', lang); } catch(e) {}
  };

  // Auto-detect saved lang
  let savedLang = 'en';
  try { savedLang = localStorage.getItem('1k1_lang') || 'en'; } catch(e) {}
  window.setLang(savedLang);
});
