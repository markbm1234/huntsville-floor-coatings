// Shared components for Rocket Floor Pros website

function getNavActiveClass(page) {
  return '';
}

function renderHeader(activePage) {
  const pages = [
    { href: 'index.html', label: 'Home', key: 'home' },
    { href: 'index.html#services', label: 'Services', key: 'services' },
    { href: 'index.html#gallery', label: 'Gallery', key: 'gallery' },
    { href: 'index.html#reviews', label: 'Reviews', key: 'reviews' },
    { href: 'blog.html', label: 'Blog', key: 'blog' },
    { href: 'index.html#service-area', label: 'Areas', key: 'areas' },
    { href: 'about.html', label: 'About', key: 'about' },
    { href: 'contact.html', label: 'Contact', key: 'contact' },
  ];

  const navLinks = pages.map(p =>
    `<a href="${p.href}" class="${activePage === p.key ? 'active' : ''}">${p.label}</a>`
  ).join('');

  return `
    <header class="site-header" id="site-header">
      <div class="container">
        <div class="header-inner">
          <a href="index.html" class="logo">
            <span class="logo-name">
              <span class="logo-dot"></span>
              ROCKET FLOOR PROS
            </span>
            <span class="logo-tagline">Huntsville's Garage Floor Specialists</span>
          </a>
          <nav class="main-nav">
            ${navLinks}
          </nav>
          <div class="header-right">
            <a href="index.html#estimate-form" class="btn header-cta">FREE ESTIMATE</a>
            <a href="tel:2567124800" class="header-phone">(256) 712-4800</a>
          </div>
          <button class="hamburger" id="hamburger" aria-label="Open menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
      <nav class="mobile-menu" id="mobile-menu">
        <a href="index.html">Home</a>
        <a href="index.html#services">Services</a>
        <a href="index.html#gallery">Gallery</a>
        <a href="index.html#reviews">Reviews</a>
        <a href="blog.html">Blog</a>
        <a href="about.html">About Us</a>
        <a href="contact.html">Contact</a>
        <a href="tel:2567124800" class="mobile-phone">(256) 712-4800</a>
        <a href="index.html#estimate-form" class="btn" style="text-align:center;">GET FREE ESTIMATE</a>
      </nav>
    </header>
  `;
}

function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <div class="footer-logo-name">
              <span class="logo-dot" style="background: var(--blue-300);"></span>
              ROCKET FLOOR PROS
            </div>
            <p class="footer-tagline">North Alabama's #1 Epoxy Floor Coating Specialists</p>
            <p class="footer-service-area">Serving Huntsville and all of North Alabama</p>
            <a href="tel:2567124800" class="footer-phone">(256) 712-4800</a>
            <p class="footer-hours">Mon–Sat 7am–6pm</p>
          </div>
          <div>
            <p class="footer-col-heading">Our Services</p>
            <ul class="footer-links">
              <li><a href="index.html#services">Garage Floor Epoxy</a></li>
              <li><a href="index.html#services">Polyaspartic Coating</a></li>
              <li><a href="index.html#services">Metallic Epoxy</a></li>
              <li><a href="index.html#services">Commercial Coating</a></li>
              <li><a href="index.html#estimate-form">Free Estimate</a></li>
            </ul>
          </div>
          <div>
            <p class="footer-col-heading">Areas We Serve</p>
            <ul class="footer-links">
              <li><a href="index.html">Huntsville</a></li>
              <li><a href="madison-al.html">Madison</a></li>
              <li><a href="decatur-al.html">Decatur</a></li>
              <li><a href="athens-al.html">Athens</a></li>
              <li><a href="index.html#service-area">Harvest</a></li>
              <li><a href="index.html#service-area">Hampton Cove</a></li>
              <li><a href="index.html#service-area">Florence</a></li>
              <li><a href="index.html#service-area">Guntersville</a></li>
            </ul>
          </div>
          <div>
            <p class="footer-col-heading">Resources</p>
            <ul class="footer-links">
              <li><a href="blog.html">Blog</a></li>
              <li><a href="about.html">About Us</a></li>
              <li><a href="contact.html">Contact</a></li>
              <li><a href="privacy.html">Privacy Policy</a></li>
            </ul>
            <div class="footer-reviews mt-16">
              <div>⭐⭐⭐⭐⭐ 4.9 · 127 Reviews</div>
              <a href="https://www.google.com/maps" target="_blank" rel="noopener" class="footer-reviews-link">View on Google</a>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <p>© ${new Date().getFullYear()} Rocket Floor Pros &middot; Huntsville, AL</p>
          <p>This site is operated by an independent lead generation service.</p>
        </div>
      </div>
    </footer>
    <div class="mobile-cta-bar">
      <div class="mobile-cta-bar-inner">
        <a href="tel:2567124800" class="mobile-cta-call">📞 CALL NOW</a>
        <a href="index.html#estimate-form" class="mobile-cta-estimate">GET FREE ESTIMATE</a>
      </div>
    </div>
  `;
}

function renderFAQ() {
  const faqs = [
    {
      q: 'How much does epoxy garage floor coating cost in Huntsville?',
      a: 'Most residential garages in Huntsville run $2,400–$5,500 depending on size, floor condition, and coating type. A standard two-car garage with epoxy flake coating typically costs $2,800–$3,400. We provide a free on-site estimate with exact pricing before any work begins.'
    },
    {
      q: 'How long does epoxy floor installation take?',
      a: 'Most residential garages are completed in a single day. We arrive at 7:30–8am and finish by early afternoon. You can walk on the floor within 6 hours of completion and park your vehicle on it the following morning.'
    },
    {
      q: "What's the difference between epoxy and polyaspartic?",
      a: 'Epoxy is our most affordable system — durable, attractive, and long-lasting. Polyaspartic is our premium offering: it cures 4x faster, is UV-stable (won\'t yellow in sunlight), and is significantly harder and more scratch-resistant. We recommend polyaspartic for garages with sun-facing doors, commercial spaces, or anyone who wants the best possible finish.'
    },
    {
      q: 'Do I need to be home during the installation?',
      a: "You'll need to be home at the start so we can walk through the scope and confirm details. After that, most customers go about their day. We'll send you a photo and text when we're finished."
    },
    {
      q: 'How do I prepare my garage before the install?',
      a: 'Remove everything from the garage floor — vehicles, storage boxes, floor-mounted shelving if possible. We handle all concrete surface preparation including grinding, crack repair, and cleaning. We\'ll confirm specific prep requirements when we schedule your appointment.'
    },
    {
      q: 'What if my concrete has cracks or oil stains?',
      a: "Not a problem. Crack filling and surface prep are included in our standard installation process. We grind the concrete, fill cracks with 100% solid epoxy filler, and remove oils and stains before any coating is applied. The result bonds directly to the concrete."
    },
    {
      q: 'Is there a warranty on the floor coating?',
      a: "Yes — all of our installations come with a lifetime warranty against peeling, flaking, or delamination when the floor is properly maintained per our care guidelines. We'll walk you through maintenance at the end of your installation."
    },
    {
      q: 'Do you serve Madison, Decatur, and Athens, Alabama?',
      a: 'Absolutely. We serve the entire North Alabama region including Huntsville, Madison, Decatur, Athens, Harvest, Hampton Cove, Meridianville, Florence, and everywhere in between. If you\'re within 60 miles of Huntsville, we most likely cover your area. Call us to confirm.'
    }
  ];

  return faqs.map((faq, i) => `
    <div class="faq-item" id="faq-${i}">
      <div class="faq-question" onclick="toggleFAQ(${i})">
        <span>${faq.q}</span>
        <span class="faq-icon">+</span>
      </div>
      <div class="faq-answer">
        <div class="faq-answer-inner">${faq.a}</div>
      </div>
    </div>
  `).join('');
}

function renderMainForm(idSuffix) {
  idSuffix = idSuffix || '';
  return `
    <div class="form-card">
      <h3 class="form-card-title">Request Your Free Estimate</h3>
      <p class="form-card-sub">We'll contact you within 1 hour · Mon–Sat 7am–6pm</p>
      <div id="form-success${idSuffix}" class="form-success">
        <div class="form-success-check" style="color: var(--success);">✅</div>
        <h3 class="form-success-title">We've received your request!</h3>
        <p class="form-success-body">A specialist will call you within the next 60 minutes.<br>Keep your phone nearby — we may call or text.</p>
        <a href="#faq" class="blue-link">While you wait, read our most common questions below →</a>
      </div>
      <form id="main-form${idSuffix}" action="/api/subscribe" method="POST">
        <input type="hidden" name="source" value="main-estimate-form">

        <div class="form-inline-row">
          <div class="form-group">
            <label class="form-label" for="first-name${idSuffix}">First Name *</label>
            <input class="form-input" type="text" id="first-name${idSuffix}" name="first_name" placeholder="First name" required>
          </div>
          <div class="form-group">
            <label class="form-label" for="last-name${idSuffix}">Last Name *</label>
            <input class="form-input" type="text" id="last-name${idSuffix}" name="last_name" placeholder="Last name" required>
          </div>
        </div>

        <div class="form-inline-row">
          <div class="form-group">
            <label class="form-label" for="phone${idSuffix}">Phone *</label>
            <input class="form-input" type="tel" id="phone${idSuffix}" name="phone" placeholder="(256) 555-0000" required>
            <div class="form-error-msg" id="phone-err${idSuffix}">Please enter a valid phone number.</div>
          </div>
          <div class="form-group">
            <label class="form-label" for="email${idSuffix}">Email</label>
            <input class="form-input" type="email" id="email${idSuffix}" name="email" placeholder="your@email.com">
          </div>
        </div>

        <div class="form-group">
          <label class="form-label" for="address${idSuffix}">Street Address *</label>
          <input class="form-input" type="text" id="address${idSuffix}" name="address" placeholder="123 Main St" required>
          <div class="form-error-msg" id="address-err${idSuffix}">Please enter your address.</div>
        </div>

        <div class="form-inline-row-3">
          <div class="form-group">
            <label class="form-label" for="city${idSuffix}">City *</label>
            <input class="form-input" type="text" id="city${idSuffix}" name="city" placeholder="Huntsville" required>
          </div>
          <div class="form-group">
            <label class="form-label" for="state${idSuffix}">State</label>
            <input class="form-input" type="text" id="state${idSuffix}" name="state" placeholder="AL" value="AL">
          </div>
          <div class="form-group">
            <label class="form-label" for="zip${idSuffix}">Zip *</label>
            <input class="form-input" type="text" id="zip${idSuffix}" name="zip" placeholder="35801" required>
          </div>
        </div>

        <div class="form-inline-row">
          <div class="form-group">
            <label class="form-label" for="project-type${idSuffix}">Project Type *</label>
            <select class="form-select" id="project-type${idSuffix}" name="project_type" required>
              <option value="">Select type…</option>
              <option value="garage-1car">1-Car Garage (~200 sq ft)</option>
              <option value="garage-2car">2-Car Garage (~400 sq ft)</option>
              <option value="garage-3car">3-Car+ Garage (600+ sq ft)</option>
              <option value="patio">Patio or Walkway</option>
              <option value="basement">Basement Floor</option>
              <option value="commercial">Commercial / Warehouse</option>
              <option value="other">Other / Not Sure</option>
            </select>
            <div class="form-error-msg" id="project-err${idSuffix}">Please select a type.</div>
          </div>
          <div class="form-group">
            <label class="form-label" for="timeline${idSuffix}">Timeline *</label>
            <select class="form-select" id="timeline${idSuffix}" name="timeline" required>
              <option value="">How soon?</option>
              <option value="asap">As soon as possible</option>
              <option value="month">Within a month</option>
              <option value="1-3months">1–3 months</option>
              <option value="researching">Just researching</option>
            </select>
            <div class="form-error-msg" id="timeline-err${idSuffix}">Please select a timeline.</div>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Property owner? *</label>
          <div class="radio-group">
            <label class="radio-option">
              <input type="radio" name="owner${idSuffix}" value="owner" onchange="handleOwner('owner', '${idSuffix}')"> Yes, I own this property
            </label>
            <label class="radio-option">
              <input type="radio" name="owner${idSuffix}" value="renter" onchange="handleOwner('renter', '${idSuffix}')"> No, I'm renting
            </label>
          </div>
          <div class="renter-warning" id="renter-warning${idSuffix}">
            ⚠️ Our installations require property owner approval.
          </div>
          <div class="form-error-msg" id="owner-err${idSuffix}">Please select an option.</div>
        </div>

        <button type="submit" class="btn btn-full" id="submit-btn${idSuffix}" style="height:52px; font-family:'Montserrat',sans-serif; font-size:16px; border-radius:8px; margin-top:8px;">
          GET MY FREE ESTIMATE →
        </button>
        <p class="form-submit-note">🔒 By submitting, you agree to be contacted by phone, email, or SMS about your estimate. <a href="privacy.html" style="color:var(--blue-700);">Privacy Policy</a>.</p>
      </form>
    </div>
  `;
}

// ===========================
// ANALYTICS HELPERS
// ===========================

function pushEvent(eventName, params) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(Object.assign({ event: eventName }, params || {}));
}

// ===========================
// UTM / TRACKING CAPTURE
// ===========================

function getTrackingData() {
  const params = new URLSearchParams(window.location.search);
  const stored = {};
  try { Object.assign(stored, JSON.parse(sessionStorage.getItem('rfp_utm') || '{}')); } catch(e) {}

  const utm = {
    utm_source:   params.get('utm_source')   || stored.utm_source   || '',
    utm_medium:   params.get('utm_medium')   || stored.utm_medium   || '',
    utm_campaign: params.get('utm_campaign') || stored.utm_campaign || '',
    utm_term:     params.get('utm_term')     || stored.utm_term     || '',
    utm_content:  params.get('utm_content')  || stored.utm_content  || '',
    gclid:        params.get('gclid')        || stored.gclid        || '',
    fbclid:       params.get('fbclid')       || stored.fbclid       || '',
  };

  if (params.get('utm_source')) {
    try { sessionStorage.setItem('rfp_utm', JSON.stringify(utm)); } catch(e) {}
  }

  return Object.assign(utm, {
    landing_page:  sessionStorage.getItem('rfp_landing') || window.location.href,
    referrer:      document.referrer || '',
    page_url:      window.location.href,
    page_title:    document.title,
    device_type:   /Mobi|Android/i.test(navigator.userAgent) ? 'mobile' : 'desktop',
    timestamp:     new Date().toISOString(),
  });
}

function injectTrackingFields(form) {
  const td = getTrackingData();
  const hidden = [
    'utm_source','utm_medium','utm_campaign','utm_term','utm_content',
    'gclid','fbclid','landing_page','referrer','page_url','page_title',
    'device_type','timestamp'
  ];
  hidden.forEach(function(key) {
    if (!form.querySelector('[name="' + key + '"]') && td[key]) {
      const inp = document.createElement('input');
      inp.type = 'hidden';
      inp.name = key;
      inp.value = td[key];
      form.appendChild(inp);
    }
  });
}

function recordLanding() {
  try {
    if (!sessionStorage.getItem('rfp_landing')) {
      sessionStorage.setItem('rfp_landing', window.location.href);
    }
  } catch(e) {}
}

// ===========================
// PHONE INPUT MASKING
// ===========================

function applyPhoneMask(input) {
  if (!input || input.dataset.masked) return;
  input.dataset.masked = '1';
  input.addEventListener('input', function() {
    let v = this.value.replace(/\D/g, '').slice(0, 10);
    if (v.length >= 7) {
      v = '(' + v.slice(0,3) + ') ' + v.slice(3,6) + '-' + v.slice(6);
    } else if (v.length >= 4) {
      v = '(' + v.slice(0,3) + ') ' + v.slice(3);
    } else if (v.length > 0) {
      v = '(' + v;
    }
    this.value = v;
  });
}

// ===========================
// HEADER
// ===========================

function initHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  });

  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });
    document.addEventListener('click', (e) => {
      if (!header.contains(e.target)) {
        mobileMenu.classList.remove('open');
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') mobileMenu.classList.remove('open');
    });
  }
}

// ===========================
// FAQ
// ===========================

function toggleFAQ(index) {
  const item = document.getElementById('faq-' + index);
  if (!item) return;
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

// ===========================
// OWNER RADIO
// ===========================

function handleOwner(value, suffix) {
  suffix = suffix || '';
  const warning = document.getElementById('renter-warning' + suffix);
  const btn = document.getElementById('submit-btn' + suffix);
  if (value === 'renter') {
    warning && warning.classList.add('visible');
    btn && (btn.disabled = true);
    btn && (btn.style.opacity = '0.5');
  } else {
    warning && warning.classList.remove('visible');
    btn && (btn.disabled = false);
    btn && (btn.style.opacity = '1');
  }
}

// ===========================
// VALIDATION
// ===========================

function validatePhone(phone) {
  return /[\d]{7,}/.test(phone.replace(/\D/g, ''));
}

// ===========================
// MAIN FORM (full estimate)
// ===========================

function initMainForm(suffix) {
  suffix = suffix || '';
  const form = document.getElementById('main-form' + suffix);
  if (!form) return;

  // Inject tracking fields
  injectTrackingFields(form);

  // Phone masking
  const phoneEl = document.getElementById('phone' + suffix);
  if (phoneEl) applyPhoneMask(phoneEl);

  // Track form start
  let formStarted = false;
  form.addEventListener('focusin', function() {
    if (!formStarted) {
      formStarted = true;
      pushEvent('form_start', { form_id: 'main-form' + suffix });
    }
  }, { once: false });

  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    let valid = true;

    const phone = document.getElementById('phone' + suffix);
    const address = document.getElementById('address' + suffix);
    const projectType = document.getElementById('project-type' + suffix);
    const timeline = document.getElementById('timeline' + suffix);
    const ownerRadios = form.querySelectorAll('input[name="owner' + suffix + '"]');
    const ownerChecked = [...ownerRadios].some(r => r.checked);

    const fields = [
      { el: phone, err: 'phone-err' + suffix, check: validatePhone },
      { el: address, err: 'address-err' + suffix, check: v => v.trim() !== '' },
      { el: projectType, err: 'project-err' + suffix, check: v => v !== '' },
      { el: timeline, err: 'timeline-err' + suffix, check: v => v !== '' },
    ];

    fields.forEach(f => {
      const errEl = document.getElementById(f.err);
      if (!f.el) return;
      if (!f.check(f.el.value)) {
        valid = false;
        f.el.classList.add('error');
        errEl && errEl.classList.add('visible');
      } else {
        f.el.classList.remove('error');
        errEl && errEl.classList.remove('visible');
      }
    });

    const ownerErrEl = document.getElementById('owner-err' + suffix);
    if (!ownerChecked) {
      valid = false;
      ownerErrEl && ownerErrEl.classList.add('visible');
    } else {
      ownerErrEl && ownerErrEl.classList.remove('visible');
    }

    if (!valid) {
      form.classList.add('shake');
      setTimeout(() => form.classList.remove('shake'), 400);
      const firstError = form.querySelector('.form-input.error, .form-select.error');
      if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    const submitBtn = document.getElementById('submit-btn' + suffix);
    if (submitBtn) {
      submitBtn.textContent = 'Sending…';
      submitBtn.disabled = true;
    }

    try {
      const data = new FormData(form);
      const payload = {};
      data.forEach((val, key) => { payload[key] = val; });
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
      });
      if (response.ok) {
        pushEvent('generate_lead', {
          form_id: 'main-form' + suffix,
          page_url: window.location.href,
          page_title: document.title
        });
        form.style.display = 'none';
        const success = document.getElementById('form-success' + suffix);
        success && success.classList.add('visible');
        success && success.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        throw new Error('Server error');
      }
    } catch (err) {
      if (submitBtn) {
        submitBtn.textContent = 'GET MY FREE ESTIMATE →';
        submitBtn.disabled = false;
      }
      alert('There was an issue submitting the form. Please call us directly at (256) 712-4800.');
    }
  });
}

// ===========================
// MINI HERO FORM
// ===========================

function initMiniForm() {
  const miniForm = document.getElementById('mini-hero-form');
  if (!miniForm) return;
  injectTrackingFields(miniForm);
  miniForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const miniName = document.getElementById('mini-name');
    const miniEmail = document.getElementById('mini-email');
    const mainName = document.getElementById('first-name');
    const mainEmail = document.getElementById('email');
    if (mainName && miniName) mainName.value = miniName.value;
    if (mainEmail && miniEmail) mainEmail.value = miniEmail.value;
    pushEvent('form_start', { form_id: 'main-form-from-mini' });
    const estimateForm = document.getElementById('estimate-form');
    if (estimateForm) estimateForm.scrollIntoView({ behavior: 'smooth' });
  });
}

// ===========================
// SIMPLE FORMS (location pages, blog, CTAs)
// ===========================

function initSimpleForms() {
  document.querySelectorAll('.simple-form').forEach(form => {
    injectTrackingFields(form);

    // Phone masking on any tel input
    form.querySelectorAll('input[type="tel"]').forEach(applyPhoneMask);

    let started = false;
    form.addEventListener('focusin', function() {
      if (!started) {
        started = true;
        pushEvent('form_start', { form_id: form.id || 'simple-form' });
      }
    });

    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const origText = btn ? btn.textContent : '';
      if (btn) { btn.textContent = 'Sending…'; btn.disabled = true; }
      try {
        const data = new FormData(form);
        const payload = {};
        data.forEach((val, key) => { payload[key] = val; });
        const response = await fetch('/api/subscribe', {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
        });
        if (response.ok) {
          pushEvent('generate_lead', {
            form_id: form.id || 'simple-form',
            page_url: window.location.href,
            page_title: document.title
          });
          form.innerHTML = '<p style="color: var(--success); font-family: Inter, sans-serif; font-weight:600; text-align:center; padding:20px 0;">✅ Request received! We\'ll call you within the hour.</p>';
        } else throw new Error();
      } catch {
        if (btn) { btn.textContent = origText; btn.disabled = false; }
        alert('Please call us directly at (256) 712-4800.');
      }
    });
  });
}

// ===========================
// FADE IN
// ===========================

function initFadeIn() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// ===========================
// PHONE CLICK TRACKING
// ===========================

function initPhoneTracking() {
  document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', () => {
      pushEvent('phone_click', {
        phone_number: '(256) 712-4800',
        click_location: link.closest('[id]') ? link.closest('[id]').id : document.title
      });
    });
  });
}

// ===========================
// CTA BUTTON TRACKING
// ===========================

function initCTATracking() {
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const label = btn.textContent.trim().slice(0, 50);
      pushEvent('cta_click', { cta_label: label, page_url: window.location.href });
    });
  });
}

// ===========================
// SCROLL DEPTH
// ===========================

function initScrollDepth() {
  const milestones = [25, 50, 75, 90];
  const fired = {};
  window.addEventListener('scroll', function() {
    const pct = Math.round(
      (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
    );
    milestones.forEach(m => {
      if (!fired[m] && pct >= m) {
        fired[m] = true;
        pushEvent('scroll_depth', { depth_pct: m, page_url: window.location.href });
      }
    });
  }, { passive: true });
}

// ===========================
// INIT ALL
// ===========================

function initAll(options) {
  options = options || {};
  recordLanding();
  initHeader();
  initFadeIn();
  initPhoneTracking();
  initCTATracking();
  initScrollDepth();
  initSimpleForms();
  if (options.miniForm) initMiniForm();
  if (options.mainForm) initMainForm('');
}
