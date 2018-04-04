// This is the Debian specific preferences file for Firefox ESR
// You can make any change in here, it is the purpose of this file.
// You can, with this file and all files present in the
// /etc/firefox-esr directory, override any preference you can see in
// about:config.
//
// Note that lockPref is allowed in these preferences files if you
// don't want users to be able to override some preferences.

pref("extensions.update.enabled", true);

// Use LANG environment variable to choose locale
pref("intl.locale.matchOS", true);

// Disable default browser checking.
pref("browser.shell.checkDefaultBrowser", false);

// Disable openh264.
pref("media.gmp-gmpopenh264.enabled", false);

// Default to classic view for about:newtab
sticky_pref("browser.newtabpage.enhanced", false);

// Disable health report upload
pref("datareporting.healthreport.uploadEnabled", false);

pref("browser.search.defaultenginename", "DuckDuckGo-mindevenviro");

pref("lightweightThemes.persisted.footerURL", false);
pref("lightweightThemes.persisted.headerURL", false);
pref("lightweightThemes.recommendedThemes", "[]");
pref("lightweightThemes.selectedThemeID", "recommended-3");
pref("lightweightThemes.usedThemes", "[{\"id\":\"recommended-3\",\"name\":\"Linen Light\",\"headerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/3.header.png\",\"footerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/3.footer.png\",\"accentcolor\":\"#ada8a8\",\"iconURL\":\"resource:///chrome/browser/content/browser/defaultthemes/3.icon.png\",\"previewURL\":\"resource:///chrome/browser/content/browser/defaultthemes/3.preview.png\",\"author\":\"DVemer\",\"description\":\"Linen Light is (C) DVemer. Available under CC-BY-SA. No warranty.\",\"homepageURL\":\"https://addons.mozilla.org/firefox/addon/linen-light/\",\"version\":\"1.0\"},{\"id\":\"recommended-4\",\"name\":\"Pastel Gradient\",\"headerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/4.header.png\",\"footerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/4.footer.png\",\"textcolor\":\"#000000\",\"accentcolor\":\"#000000\",\"iconURL\":\"resource:///chrome/browser/content/browser/defaultthemes/4.icon.png\",\"previewURL\":\"resource:///chrome/browser/content/browser/defaultthemes/4.preview.png\",\"author\":\"darrinhenein\",\"description\":\"Pastel Gradient is (C) darrinhenein. Available under CC-BY. No warranty.\",\"homepageURL\":\"https://addons.mozilla.org/firefox/addon/pastel-gradient/\",\"version\":\"1.0\"},{\"id\":\"recommended-5\",\"name\":\"Carbon Light\",\"headerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/5.header.png\",\"footerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/5.footer.png\",\"textcolor\":\"#3b3b3b\",\"accentcolor\":\"#2e2e2e\",\"iconURL\":\"resource:///chrome/browser/content/browser/defaultthemes/5.icon.jpg\",\"previewURL\":\"resource:///chrome/browser/content/browser/defaultthemes/5.preview.jpg\",\"author\":\"Jaxivo\",\"description\":\"Carbon Light is (C) Jaxivo. Available under CC-BY-SA. No warranty.\",\"homepageURL\":\"https://addons.mozilla.org/firefox/addon/carbon-light/\",\"version\":\"1.0\"},{\"id\":\"recommended-1\",\"name\":\"A Web Browser Renaissance\",\"headerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/1.header.jpg\",\"footerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/1.footer.jpg\",\"textcolor\":\"#000000\",\"accentcolor\":\"#f2d9b1\",\"iconURL\":\"resource:///chrome/browser/content/browser/defaultthemes/1.icon.jpg\",\"previewURL\":\"resource:///chrome/browser/content/browser/defaultthemes/1.preview.jpg\",\"author\":\"Sean.Martell\",\"description\":\"A Web Browser Renaissance is (C) Sean.Martell. Available under CC-BY-SA. No warranty.\",\"homepageURL\":\"https://addons.mozilla.org/firefox/addon/a-web-browser-renaissance/\",\"version\":\"0\",\"updateDate\":1521504071324,\"installDate\":1521504071324},{\"id\":\"recommended-2\",\"name\":\"Space Fantasy\",\"headerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/2.header.jpg\",\"footerURL\":\"resource:///chrome/browser/content/browser/defaultthemes/2.footer.jpg\",\"textcolor\":\"#ffffff\",\"accentcolor\":\"#d9d9d9\",\"iconURL\":\"resource:///chrome/browser/content/browser/defaultthemes/2.icon.jpg\",\"previewURL\":\"resource:///chrome/browser/content/browser/defaultthemes/2.preview.jpg\",\"author\":\"fx5800p\",\"description\":\"Space Fantasy is (C) fx5800p. Available under CC-BY-SA. No warranty.\",\"homepageURL\":\"https://addons.mozilla.org/firefox/addon/space-fantasy/\",\"version\":\"1.0\",\"updateDate\":1521503855232,\"installDate\":1521503855232}]");

pref("browser.startup.homepage", "https://check.torproject.org/");