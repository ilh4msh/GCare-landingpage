/* =====================================================
   GCare, Care for your gear
   js/main.js
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  /* ---------- Kamus teks (EN / ID) ---------- */
  var TRANSLATIONS = {
    en: {
      "meta.title": "GCare, Care for your gear",
      "meta.description": "GCare: martial arts gear cleaning service. We pick up, clean it right, and bring it back before your next training.",

      "nav.home": "GCare, back to top",
      "nav.main": "Main navigation",
      "nav.how": "How it works",
      "nav.price": "Price List",
      "nav.faq": "FAQ",
      "nav.open": "Open menu",
      "nav.close": "Close menu",
      "lang.label": "Language",
      "cta.notify": "Notify us",

      "hero.badge": "COMING SOON · DEPOK & UI AREA",
      "hero.title": "Smelly gloves? Leave them to us!",
      "hero.lead": "We pick up your gear, clean it right, and bring it back before your next training.",
      "hero.chipFrom": "from",
      "hero.chipBack": "back in ~3 days",
      "hero.chipFees": "no hidden fees",

      "phone.received": "RECEIVED",
      "phone.from": "from Rp30.000",
      "phone.days": "3 days",
      "phone.boxing": "Boxing, over 10 oz",
      "phone.handwashed": "Hand-washed",
      "phone.noheat": "No heat",
      "phone.cart": "Add to cart",
      "card.care": "Handwraps · cotton",
      "order.status": "Waiting for pickup",
      "order.time": "Sat, 28 Nov · 10.00–12.00",

      "how.title": "How it works",
      "step.book": "Book",
      "step.bookDesc": "Pick your gear and a pickup time.",
      "step.clean": "We clean",
      "step.cleanDesc": "Washed by hand, the right way for each material.",
      "step.back": "Get it back",
      "step.backDesc": "Track it until it's back with you.",
      "booking.title": "When should we pick up your gear?",
      "booking.timeLabel": "Choose pickup time",
      "booking.return": "Return",
      "clean.1": "Checked and counted on arrival",
      "clean.2": "Hand-washed with pH-neutral soap",
      "clean.3": "Inside deodorized",
      "clean.4": "Dried without heat",
      "tl.received": "Gear received",
      "tl.items": "2 items",
      "tl.receivedMeta": "Sat, 28 Nov · 10.32",
      "tl.caring": "Being cared for",
      "tl.updated": "Updated 10.24",
      "tl.delivering": "On the way back",

      "day.mon": "Mon", "day.tue": "Tue", "day.wed": "Wed", "day.thu": "Thu",
      "day.fri": "Fri", "day.sat": "Sat", "day.sun": "Sun",

      "price.title": "Price List",
      "price.pickup": "Pickup",
      "price.delivery": "Delivery",
      "price.dropoff": "Drop off yourself",
      "price.free": "free",
      "price.note": "Soft-launch prices",
      "product.handwraps": "Hand Wraps",
      "product.gloves": "Gloves",
      "product.pads": "Pads",
      "product.shin": "Shin Guards",
      "product.headgear": "Headgear",
      "product.bodyShield": "Body Shield",
      "product.belly": "Belly Protector",
      "product.elbowKnee": "Elbow & Knee Pads",
      "product.groin": "Groin Guard",
      "v.over3m": "Over 3 m",
      "v.upto3m": "Up to 3 m",
      "v.boxing10": "Boxing, 10 oz+",
      "v.mma": "MMA, karate, TKD",
      "v.boxingPads": "Boxing pads",
      "v.muayThaiPads": "Muay Thai pads",
      "v.any": "Any type",
      "alt.handwraps": "Pair of black hand wraps for boxing",
      "alt.gloves": "Pair of red boxing gloves",
      "alt.pads": "Strike pads for boxing and Muay Thai training",
      "alt.shin": "Pair of dark blue shin guards",
      "alt.headgear": "Black headgear head protector",
      "alt.bodyShield": "Black body shield chest protector",
      "alt.belly": "Red belly protector",
      "alt.elbowKnee": "Blue elbow and knee pads",
      "alt.groin": "White groin guard",

      "faq.title": "FAQ",
      "faq.q1": "Where do you pick up?",
      "faq.a1": "Around Depok and UI. Outside that area, drop off at GCare Point for free.",
      "faq.q2": "Where is GCare Point?",
      "faq.a2": "Near Pusgiwa UI. Open Monday to Saturday, 08.00–20.00.",
      "faq.q3": "How do I pay?",
      "faq.a3": "QRIS or virtual account, right in the app.",
      "faq.q4": "What if my gear can't be cleaned safely?",
      "faq.a4": "We return it untouched and refund that item.",

      "notify.badge": "COMING SOON",
      "notify.title": "Be the first to try GCare!",
      "notify.lead": "Leave your WhatsApp. We'll text you when we open.",
      "form.name": "Name",
      "form.namePlaceholder": "Your name",
      "form.phone": "WhatsApp number",
      "form.cleaning": "What needs cleaning?",
      "form.days": "Training days",
      "form.optional": "(optional)",
      "form.consent": "Text me about GCare.",
      "gear.handwraps": "Handwraps",
      "gear.gloves": "Gloves",
      "gear.pads": "Pads",
      "gear.shin": "Shin guards",
      "gear.headgear": "Headgear",
      "gear.other": "Other",
      "msg.nameRequired": "Name is required.",
      "msg.phoneInvalid": "WhatsApp number is not valid.",
      "msg.success": "Thank you, {name}! We'll message you on WhatsApp when GCare opens.",

      "footer.nav": "Footer navigation",
      "footer.pricing": "Pricing",
      "footer.copy": "© 2026 GCare · Care for your gear",
      "footer.credit": "A PPD project by Group B09, Fasilkom UI"
    },

    id: {
      "meta.title": "GCare, Rawat gearmu",
      "meta.description": "GCare: layanan cuci perlengkapan bela diri. Kami jemput, bersihkan dengan benar, dan antar kembali sebelum latihan berikutnya.",

      "nav.home": "GCare, ke atas halaman",
      "nav.main": "Navigasi utama",
      "nav.how": "Cara kerja",
      "nav.price": "Daftar Harga",
      "nav.faq": "FAQ",
      "nav.open": "Buka menu",
      "nav.close": "Tutup menu",
      "lang.label": "Bahasa",
      "cta.notify": "Kabari kami",

      "hero.badge": "SEGERA HADIR · AREA DEPOK & UI",
      "hero.title": "Gloves bau? Serahkan ke kami!",
      "hero.lead": "Kami jemput perlengkapanmu, bersihkan dengan benar, dan antar kembali sebelum latihan berikutnya.",
      "hero.chipFrom": "mulai",
      "hero.chipBack": "kembali dalam ~3 hari",
      "hero.chipFees": "tanpa biaya tersembunyi",

      "phone.received": "DITERIMA",
      "phone.from": "mulai Rp30.000",
      "phone.days": "3 hari",
      "phone.boxing": "Boxing, di atas 10 oz",
      "phone.handwashed": "Dicuci tangan",
      "phone.noheat": "Tanpa panas",
      "phone.cart": "Tambah ke keranjang",
      "card.care": "Handwraps · katun",
      "order.status": "Menunggu penjemputan",
      "order.time": "Sab, 28 Nov · 10.00–12.00",

      "how.title": "Cara kerja",
      "step.book": "Pesan",
      "step.bookDesc": "Pilih perlengkapan dan waktu penjemputan.",
      "step.clean": "Kami bersihkan",
      "step.cleanDesc": "Dicuci tangan, dengan cara yang tepat untuk tiap bahan.",
      "step.back": "Terima kembali",
      "step.backDesc": "Pantau sampai kembali ke tanganmu.",
      "booking.title": "Kapan gear dijemput?",
      "booking.timeLabel": "Pilih jam penjemputan",
      "booking.return": "Kembali",
      "clean.1": "Dicek dan dihitung saat diterima",
      "clean.2": "Dicuci tangan, sabun pH netral",
      "clean.3": "Bagian dalam dihilangkan baunya",
      "clean.4": "Dikeringkan tanpa panas",
      "tl.received": "Gear diterima",
      "tl.items": "2 item",
      "tl.receivedMeta": "Sab, 28 Nov · 10.32",
      "tl.caring": "Sedang dirawat",
      "tl.updated": "Diperbarui 10.24",
      "tl.delivering": "Sedang diantar",

      "day.mon": "Sen", "day.tue": "Sel", "day.wed": "Rab", "day.thu": "Kam",
      "day.fri": "Jum", "day.sat": "Sab", "day.sun": "Min",

      "price.title": "Daftar Harga",
      "price.pickup": "Jemput",
      "price.delivery": "Antar",
      "price.dropoff": "Antar sendiri",
      "price.free": "gratis",
      "price.note": "Harga soft-launch",
      "product.handwraps": "Hand Wraps",
      "product.gloves": "Gloves",
      "product.pads": "Pads",
      "product.shin": "Shin Guards",
      "product.headgear": "Headgear",
      "product.bodyShield": "Body Shield",
      "product.belly": "Belly Protector",
      "product.elbowKnee": "Elbow & Knee Pads",
      "product.groin": "Groin Guard",
      "v.over3m": "Lebih dari 3 m",
      "v.upto3m": "Hingga 3 m",
      "v.boxing10": "Boxing, 10 oz+",
      "v.mma": "MMA, karate, TKD",
      "v.boxingPads": "Boxing pads",
      "v.muayThaiPads": "Muay Thai pads",
      "v.any": "Semua jenis",
      "alt.handwraps": "Sepasang hand wraps hitam untuk tinju",
      "alt.gloves": "Sepasang gloves tinju merah",
      "alt.pads": "Pads latihan pukulan untuk tinju dan Muay Thai",
      "alt.shin": "Sepasang shin guards berwarna biru gelap",
      "alt.headgear": "Headgear pelindung kepala berwarna hitam",
      "alt.bodyShield": "Body shield pelindung dada dan badan berwarna hitam",
      "alt.belly": "Belly protector berwarna merah",
      "alt.elbowKnee": "Elbow dan knee pads berwarna biru",
      "alt.groin": "Groin guard berwarna putih",

      "faq.title": "FAQ",
      "faq.q1": "Di mana kalian menjemput?",
      "faq.a1": "Di sekitar Depok dan UI. Di luar area itu, antar sendiri ke GCare Point, gratis.",
      "faq.q2": "Di mana GCare Point?",
      "faq.a2": "Dekat Pusgiwa UI. Buka Senin sampai Sabtu, 08.00–20.00.",
      "faq.q3": "Bagaimana cara bayarnya?",
      "faq.a3": "QRIS atau virtual account, langsung di aplikasi.",
      "faq.q4": "Bagaimana kalau gear-ku tidak aman dicuci?",
      "faq.a4": "Kami kembalikan tanpa diproses dan biaya untuk item itu dikembalikan.",

      "notify.badge": "SEGERA HADIR",
      "notify.title": "Jadi yang pertama mencoba GCare!",
      "notify.lead": "Tinggalkan nomor WhatsApp-mu. Kami kabari saat GCare buka.",
      "form.name": "Nama",
      "form.namePlaceholder": "Nama kamu",
      "form.phone": "Nomor WhatsApp",
      "form.cleaning": "Apa yang perlu dicuci?",
      "form.days": "Hari latihan",
      "form.optional": "(opsional)",
      "form.consent": "Kabari aku soal GCare.",
      "gear.handwraps": "Handwraps",
      "gear.gloves": "Gloves",
      "gear.pads": "Pads",
      "gear.shin": "Shin guards",
      "gear.headgear": "Headgear",
      "gear.other": "Lainnya",
      "msg.nameRequired": "Nama wajib diisi.",
      "msg.phoneInvalid": "Nomor WhatsApp tidak valid.",
      "msg.success": "Terima kasih, {name}! Kami akan mengabari lewat WhatsApp saat GCare dibuka.",

      "footer.nav": "Navigasi footer",
      "footer.pricing": "Harga",
      "footer.copy": "© 2026 GCare · Rawat gearmu",
      "footer.credit": "Proyek PPD oleh Kelompok B09, Fasilkom UI"
    }
  };

  /* Nama hari dan bulan untuk tanggal kembali (tanpa locale browser) */
  var DATE_NAMES = {
    en: {
      days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    },
    id: {
      days: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
      months: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"]
    }
  };

  /* ---------- Bahasa: state & helper ---------- */
  var STORAGE_KEY = "gcare-lang";
  var DEFAULT_LANG = "en";
  var currentLang = DEFAULT_LANG;
  var langListeners = [];

  // Ambil teks sesuai bahasa aktif
  function t(key) {
    var dict = TRANSLATIONS[currentLang];
    return dict && dict[key] !== undefined ? dict[key] : key;
  }

  // Daftarkan fungsi yang perlu dijalankan saat bahasa berganti
  function onLangChange(fn) {
    langListeners.push(fn);
  }

  /* ---------- 1. Menu hamburger ---------- */
  function initNavToggle() {
    var toggle = document.querySelector("[data-nav-toggle]");
    var nav = document.querySelector("[data-nav]");
    if (!toggle || !nav) return;

    // Buka / tutup menu dan sinkronkan atribut aksesibilitas
    function setOpen(isOpen) {
      nav.classList.toggle("is-open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", t(isOpen ? "nav.close" : "nav.open"));
    }

    toggle.addEventListener("click", function () {
      setOpen(!nav.classList.contains("is-open"));
    });

    // Tutup saat salah satu link navigasi diklik
    document.querySelectorAll("[data-nav-link]").forEach(function (link) {
      link.addEventListener("click", function () {
        setOpen(false);
      });
    });

    // Tutup saat Escape ditekan
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        setOpen(false);
        toggle.focus();
      }
    });

    // Label tombol mengikuti bahasa
    onLangChange(function () {
      setOpen(nav.classList.contains("is-open"));
    });
  }

  /* ---------- 2. Navbar saat di-scroll ---------- */
  function initHeaderScroll() {
    var header = document.querySelector("[data-site-header]");
    if (!header) return;

    function update() {
      header.classList.toggle("is-scrolled", window.scrollY > 20);
    }

    window.addEventListener("scroll", update, { passive: true });
    update();
  }

  /* ---------- 3. Highlight link navbar sesuai section ---------- */
  function initScrollSpy() {
    if (!("IntersectionObserver" in window)) return;

    var ids = ["how-it-works", "price-list", "faq", "notify"];
    var links = document.querySelectorAll("[data-nav-link]");

    // Tandai link yang href-nya cocok dengan id section aktif
    function setActive(id) {
      links.forEach(function (link) {
        link.classList.toggle("is-active", link.getAttribute("href") === "#" + id);
      });
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      // Garis pemicu di sekitar tengah layar agar hanya satu section aktif
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    ids.forEach(function (id) {
      var section = document.getElementById(id);
      if (section) observer.observe(section);
    });
  }

  /* ---------- 4. Reveal on scroll ---------- */
  function initReveal() {
    var items = document.querySelectorAll("[data-reveal]");
    if (!items.length) return;

    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Tanpa animasi atau tanpa dukungan observer: tampilkan semuanya
    if (reduceMotion || !("IntersectionObserver" in window)) {
      items.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target); // sekali saja
        });
      },
      { threshold: 0.15 }
    );

    items.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ---------- 5. Pilihan tanggal dan jam (booking) ---------- */
  function initBookingOptions() {
    var groups = document.querySelectorAll("[data-date-group], [data-time-group]");

    var PICKUP_YEAR = 2026;
    var PICKUP_MONTH = 10; // November (indeks 0-11)
    var RETURN_AFTER_DAYS = 3;

    var returnText = document.querySelector(".booking__return strong");

    // Set state terpilih pada satu tombol
    function setSelected(button, isSelected) {
      button.classList.toggle("is-selected", isSelected);
      button.setAttribute("aria-checked", String(isSelected));
      if (button.hasAttribute("aria-pressed")) {
        button.setAttribute("aria-pressed", String(isSelected));
      }
    }

    // Ambil tombol tanggal yang sedang terpilih
    function getSelectedDate() {
      return (
        document.querySelector('[data-date-option][aria-checked="true"]') ||
        document.querySelector('[data-date-option][aria-pressed="true"]') ||
        document.querySelector("[data-date-option].is-selected")
      );
    }

    // Format "Hari, D Bulan" sesuai bahasa aktif
    function formatDate(date) {
      var names = DATE_NAMES[currentLang];
      return names.days[date.getDay()] + ", " + date.getDate() + " " + names.months[date.getMonth()];
    }

    // Tanggal kembali = tanggal jemput terpilih + 3 hari
    function updateReturnDate() {
      if (!returnText) return;
      var selected = getSelectedDate();
      if (!selected) return;

      var numEl = selected.querySelector(".date-option__num");
      var dayOfMonth = numEl ? parseInt(numEl.textContent.trim(), 10) : NaN;
      if (isNaN(dayOfMonth)) return;

      // Date otomatis menggeser bulan bila melewati akhir November
      var back = new Date(PICKUP_YEAR, PICKUP_MONTH, dayOfMonth + RETURN_AFTER_DAYS);
      if (isNaN(back.getTime())) return;

      returnText.textContent = formatDate(back);
    }

    groups.forEach(function (group) {
      // Satu listener per grup (event delegation)
      group.addEventListener("click", function (event) {
        var currentGroup = event.currentTarget;
        var target = event.target.closest("[data-date-option], [data-time-option]");
        if (!target || !currentGroup.contains(target) || target.disabled) return;

        currentGroup.querySelectorAll("[data-date-option], [data-time-option]").forEach(function (button) {
          setSelected(button, button === target);
        });

        // Hanya pilihan tanggal yang mengubah tanggal kembali
        if (target.hasAttribute("data-date-option")) updateReturnDate();
      });
    });

    // Nilai awal dan saat bahasa berganti
    updateReturnDate();
    onLangChange(updateReturnDate);
  }

  /* ---------- 6. Chip pilihan di form ---------- */
  function initChipGroups() {
    // Tampilan chip diatur CSS :checked. Grup ini opsional,
    // jadi JS hanya memastikan tidak ada penanda error yang tertinggal.
    document.querySelectorAll("[data-chip-group]").forEach(function (group) {
      group.addEventListener("change", function () {
        group.classList.remove("is-invalid");
      });
    });
  }

  /* ---------- 7. Validasi form notify ---------- */
  function initNotifyForm() {
    var form = document.querySelector("[data-notify-form]");
    if (!form) return;

    var nameInput = form.querySelector('[data-field="name"]');
    var phoneInput = form.querySelector('[data-field="whatsapp"]');
    var message = form.querySelector("[data-form-message]");
    if (!nameInput || !phoneInput || !message) return;

    // Tampilkan pesan sukses / error
    function showMessage(text, type) {
      message.textContent = text;
      message.classList.remove("is-error", "is-success");
      if (type) message.classList.add(type);
    }

    function markInvalid(input) {
      input.setAttribute("aria-invalid", "true");
      input.classList.add("is-invalid");
    }

    function clearInvalid(input) {
      input.removeAttribute("aria-invalid");
      input.classList.remove("is-invalid");
    }

    // Nama tidak boleh kosong setelah di-trim
    function isNameValid(value) {
      return value.trim().length > 0;
    }

    // Buang awalan 0 / 62 / +62, spasi, dan tanda hubung dari nomor
    function normalizePhone(value) {
      return value.trim().replace(/[\s-]/g, "").replace(/^(\+?62|0)/, "");
    }

    // Nomor seluler Indonesia setelah +62: diawali 8, total 9 sampai 12 digit
    function isPhoneValid(value) {
      return /^8[0-9]{8,11}$/.test(normalizePhone(value));
    }

    // Hapus error saat user mulai mengetik ulang
    [nameInput, phoneInput].forEach(function (input) {
      input.addEventListener("input", function () {
        if (!input.classList.contains("is-invalid")) return;
        clearInvalid(input);
        var stillInvalid = form.querySelector(".is-invalid[data-field]");
        if (!stillInvalid && message.classList.contains("is-error")) {
          showMessage("", null);
        }
      });
    });

    // Kalau user mengetik atau menempel 0 / 62 / +62 di depan, langsung dibuang
    phoneInput.addEventListener("input", function () {
      var cleaned = phoneInput.value.replace(/^\s*(\+?62|0)\s*/, "");
      if (cleaned !== phoneInput.value) phoneInput.value = cleaned;
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var errors = [];
      var firstInvalid = null;

      clearInvalid(nameInput);
      clearInvalid(phoneInput);

      if (!isNameValid(nameInput.value)) {
        errors.push(t("msg.nameRequired"));
        markInvalid(nameInput);
        firstInvalid = firstInvalid || nameInput;
      }

      if (!isPhoneValid(phoneInput.value)) {
        errors.push(t("msg.phoneInvalid"));
        markInvalid(phoneInput);
        firstInvalid = firstInvalid || phoneInput;
      }

      if (errors.length) {
        showMessage(errors.join(" "), "is-error");
        firstInvalid.focus();
        return;
      }

      // Valid: tampilkan sukses lalu reset (tanpa kirim ke server)
      var name = nameInput.value.trim();
      form.reset();
      form.querySelectorAll("[data-chip-group]").forEach(function (group) {
        group.classList.remove("is-invalid");
      });
      showMessage(t("msg.success").replace("{name}", name), "is-success");
    });

    // Pesan lama dihapus saat bahasa berganti agar tidak campur bahasa
    onLangChange(function () {
      showMessage("", null);
    });
  }

  /* ---------- 8. FAQ accordion (animasi buka-tutup) ---------- */
  function initFaqAccordion() {
    var items = document.querySelectorAll(".faq__item");
    var DURATION = 280;

    // Animasikan tinggi item dari satu nilai ke nilai lain
    function run(item, from, to, onFinish) {
      item.style.overflow = "hidden";
      var anim = item.animate(
        { height: [from + "px", to + "px"] },
        { duration: DURATION, easing: "ease" }
      );
      item._anim = anim;
      anim.onfinish = function () {
        item._anim = null;
        item.style.overflow = "";
        onFinish();
      };
      anim.oncancel = function () {
        item._anim = null;
        item.style.overflow = "";
      };
    }

    items.forEach(function (item) {
      var summary = item.querySelector(".faq__summary");
      if (!summary) return;

      summary.addEventListener("click", function (event) {
        // Pengguna yang mengurangi animasi: biarkan perilaku bawaan <details>
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        if (!item.animate) return;

        event.preventDefault();

        var from = item.offsetHeight; // tinggi saat ini (juga saat animasi berjalan)
        var isClosing = item.open && !item.classList.contains("is-closing");
        if (item._anim) item._anim.cancel();

        if (isClosing) {
          // Tutup: kecilkan ke tinggi baris pertanyaan, lalu lepas atribut open
          item.classList.add("is-closing");
          var closedHeight = summary.offsetHeight + (item.offsetHeight - item.clientHeight);
          run(item, from, closedHeight, function () {
            item.open = false;
            item.classList.remove("is-closing");
          });
        } else {
          // Buka: set open dulu agar tinggi penuh bisa diukur, lalu besarkan
          item.classList.remove("is-closing");
          item.open = true;
          run(item, from, item.offsetHeight, function () {});
        }
      });
    });
  }

  /* ---------- 9. Toggle bahasa EN / ID ---------- */
  function initLanguageToggle() {
    var buttons = document.querySelectorAll("[data-lang-option]");

    function readSavedLang() {
      try {
        var saved = localStorage.getItem(STORAGE_KEY);
        return TRANSLATIONS[saved] ? saved : null;
      } catch (e) {
        return null;
      }
    }

    function saveLang(lang) {
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch (e) {
        /* penyimpanan tidak tersedia: abaikan */
      }
    }

    // Ganti semua teks dan atribut sesuai kamus
    function applyTranslations() {
      var dict = TRANSLATIONS[currentLang];

      document.documentElement.lang = currentLang;
      document.title = dict["meta.title"];

      var metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute("content", dict["meta.description"]);

      document.querySelectorAll("[data-i18n]").forEach(function (el) {
        var value = dict[el.getAttribute("data-i18n")];
        if (value !== undefined) el.textContent = value;
      });

      ["placeholder", "alt", "aria-label", "title"].forEach(function (attr) {
        document.querySelectorAll("[data-i18n-" + attr + "]").forEach(function (el) {
          var value = dict[el.getAttribute("data-i18n-" + attr)];
          if (value !== undefined) el.setAttribute(attr, value);
        });
      });
    }

    // Tandai tombol bahasa yang aktif
    function updateButtons() {
      buttons.forEach(function (button) {
        var isActive = button.getAttribute("data-lang-option") === currentLang;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
      });
    }

    function setLanguage(lang, persist) {
      if (!TRANSLATIONS[lang]) return;
      currentLang = lang;
      applyTranslations();
      updateButtons();
      if (persist) saveLang(lang);
      langListeners.forEach(function (fn) {
        fn(lang);
      });
    }

    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        setLanguage(button.getAttribute("data-lang-option"), true);
      });
    });

    // Bahasa awal: pilihan tersimpan, atau bawaan
    setLanguage(readSavedLang() || DEFAULT_LANG, false);
  }

  /* ---------- Inisialisasi ---------- */
  initNavToggle();
  initHeaderScroll();
  initScrollSpy();
  initReveal();
  initBookingOptions();
  initChipGroups();
  initNotifyForm();
  initFaqAccordion();
  initLanguageToggle(); // terakhir, supaya semua listener bahasa sudah terdaftar
});