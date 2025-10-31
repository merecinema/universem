(function () {
  // Initialize Google Translate widget (hidden)
  window.googleTranslateElementInit = function () {
    try {
      new google.translate.TranslateElement({
        pageLanguage: 'ko',
        includedLanguages: 'en,fr,zh-CN',
        autoDisplay: false,
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
      }, 'google_translate_element');
    } catch (e) {
      // no-op
    }
  };

  // Helper to change language by setting the select value
  function changeLanguage(lang) {
    var combo = document.querySelector('select.goog-te-combo');
    if (!combo) {
      // Retry shortly if widget not ready yet
      setTimeout(function () { changeLanguage(lang); }, 300);
      return;
    }
    combo.value = lang;
    combo.dispatchEvent(new Event('change'));
  }

  // Bind click events for language links
  document.addEventListener('click', function (e) {
    var target = e.target.closest('.lang-switch a[data-lang]');
    if (!target) return;
    e.preventDefault();
    changeLanguage(target.getAttribute('data-lang'));
  });
})();


