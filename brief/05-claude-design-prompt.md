# 05. Промпт для Claude Design

> **Что приложить:**
> - `01-venue-and-brand.md`, `02-menu.md`, `03-references.md`, `04-sitemap-and-requirements.md`
> - Логотипы из `brand/logo/` (все 4 SVG)
> - 10 фото из `brief/assets/photos/` (все `.webp`) и `brief/assets/photos/README.md` с описанием, где какое фото
> - Новой съёмки пока нет. Папка `brief/assets/shoot/` зарезервирована на будущее

---

Design a website for **NUA SMOKE**, a hookah lounge in Batumi, Georgia. The site is multilingual: **English by default, plus Russian and Georgian**. All copy in the mockups should be in English, with one Russian version of the home page to check Cyrillic.

**About the venue.** Hookah lounge known for strong, long-lasting hookah ("Moscow-level"), a collection of ~20 Chinese teas with a tea master, and a signature cocktail bar. Open daily 12:00–04:00. Batumi View residence, Block B, near the sea. Rated 5.0 on Yandex Maps and TripAdvisor. Guests: Russian-speaking expats (lots of IT people who work here during the day) and tourists. Tourists from search are the priority for the English version.

**Site goals, in order:** 1) table bookings, 2) a fast mobile menu for guests who scan the QR code at the table, 3) being found by tourists searching "hookah lounge Batumi".

**Booking is by phone call only.** No booking forms, no WhatsApp or Telegram. The main CTA everywhere is **"Call to book"** linking to `tel:+995595012633`, and the number **+995 595 012 633** is always visible next to it. On desktop, where `tel:` often does nothing, clicking shows the number large with a "Copy" button and a QR code for the phone. Instagram stays in the footer as a social link only.

**Positioning.** Three pillars: **SMOKE / TEA / BAR**. Two modes of one place: **Day** (bright room with floor-to-ceiling windows, quiet, Wi-Fi, a socket at every table, tea) and **Night** (warm low light, hookah, cocktails, PS5, football). Tone: friendly, confident, a little cheeky, never pompous. Slogan: "Your Favorite Lounge".

**Brand, mandatory:**
- Logo: attached SVGs only, use them as they are. Do not invent any other mark or badge. Horizontal wordmark in the header, stacked wordmark ("NUA" above a green plate with "SMOKE", as on the light-cube sign at the entrance) in the hero, footer and age gate, varsity-style green "N" monogram for the favicon and small details
- Colors: background `#161515`, accent **NUA Green `#3DB54A`**, white, grey `#5A5A5A`, warm amber `#E8A54B` as a secondary light accent only. Green is an accent, large surfaces stay dark. Buttons: green fill with dark `#161515` text (white text on this green fails contrast)
- Typography: heavy geometric grotesque for headlines, in the spirit of the logo. Readable grotesque for body. Must support Latin, Cyrillic and Georgian (for Georgian consider Noto Sans Georgian)
- Photography is dark and low-key: cool blue-grey shadows with warm amber spots of light. The design must continue this mood

**Photos: only the 10 attached, no new shoot planned.** Hero candidates: `01-hookahs-lineup` or `08-sign-cube`. There are **no photos of cocktails, tea in a cup, guests or the entrance by day**. Design those blocks without photos: big type, the menu data, green plates, hand-lettered labels, guest review quotes. Build every such block so a photo can be dropped in later without redesign. **No stock photos, no AI-generated food or people.** In `10-hookah-day-smoke` the neon on the wall reads "NUAHULE" (old name): crop it out or keep it small.
- Brand details worth reusing: **hand-lettered marker labels** on the tobacco and tea jars (a color per tobacco line) and the **angry green cat mascot** painting in the hall

**Deliver:**
1. **Home page**, desktop 1440 and mobile 375, following the structure in `04-sitemap-and-requirements.md`
2. **Menu page**, mobile first: sticky category tabs, Wi-Fi block, cards for signature items, a compact list for everything else, flavor badges for teas. Data in `02-menu.md`
3. **Age gate 18+** on first visit: full-screen, logo, "Are you 18 or older?", "Yes, I'm 18+" / "No"
4. **Call to book**: the mobile sticky bottom bar (Call · Menu · Route, with Call highlighted in green) and the desktop "show number" popover (number, Copy, QR)
5. States: menu loading, empty search result, number copied

**Visual direction: A. Night Glow (chosen).** Black, green glowing like the cube sign at night, smoke, big heavy type, dark low-key photos. Optional small touches: hand-lettered marker labels in the menu and tea section, and the cat mascot on the age gate and 404 page. Don't let these touches take over.

**Avoid:** purple or neon gradients, "oriental" ornaments and Arabic-style lettering, stock photos of smoke and models, identical icon-card rows, luxury pathos. The green must not read as soft mint: the "Мята Lounge" chain uses a similar color, and we need to stand apart.

**Requirements:** mobile-first, sticky "Call to book" bar on mobile, WCAG AA contrast, animations respect `prefers-reduced-motion`, 18+ disclaimer in the footer.
