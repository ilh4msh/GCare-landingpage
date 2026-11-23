/* =====================================================
   GCare, Care for your gear
   js/main.js
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  /* ---------- 1. Menu hamburger ---------- */
  function initNavToggle() {
    var toggle = document.querySelector("[data-nav-toggle]");
    var nav = document.querySelector("[data-nav]");
    if (!toggle || !nav) return;

    // Buka / tutup menu dan sinkronkan atribut aksesibilitas
    function setOpen(isOpen) {
      nav.classList.toggle("is-open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Tutup menu" : "Buka menu");
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

    var DAY_NAMES = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
    var MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
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

    // Format "Hari, D Bulan" tanpa bergantung pada locale browser
    function formatDate(date) {
      return DAY_NAMES[date.getDay()] + ", " + date.getDate() + " " + MONTH_NAMES[date.getMonth()];
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
      var pickup = new Date(PICKUP_YEAR, PICKUP_MONTH, dayOfMonth);
      var back = new Date(PICKUP_YEAR, PICKUP_MONTH, dayOfMonth + RETURN_AFTER_DAYS);
      if (isNaN(pickup.getTime()) || isNaN(back.getTime())) return;

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

    // Nilai awal mengikuti tombol yang sudah terpilih di HTML
    updateReturnDate();
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
        errors.push("Nama wajib diisi.");
        markInvalid(nameInput);
        firstInvalid = firstInvalid || nameInput;
      }

      if (!isPhoneValid(phoneInput.value)) {
        errors.push("Nomor WhatsApp tidak valid.");
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
      showMessage(
        "Terima kasih, " + name + "! Kami akan mengabari lewat WhatsApp saat GCare dibuka.",
        "is-success"
      );
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

  /* ---------- Inisialisasi ---------- */
  initNavToggle();
  initHeaderScroll();
  initScrollSpy();
  initReveal();
  initBookingOptions();
  initChipGroups();
  initNotifyForm();
});