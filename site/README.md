# NUA SMOKE — сайт

Статическая сборка: главная и меню на трёх языках, без сборщиков и зависимостей.
Открывается как есть, локально и на любом статическом хостинге.

## Структура

```
index.html          главная, EN (по умолчанию)
ru/index.html       главная, RU
ka/index.html       главная, KA
menu/index.html     меню, EN
ru/menu/index.html  меню, RU
ka/menu/index.html  меню, KA
assets/site.css     все стили
assets/site.js      18+ гейт, табы меню, поиск, копирование пароля
assets/photos|logo|video
.nojekyll           чтобы GitHub Pages не прогонял файлы через Jekyll
robots.txt, sitemap.xml
```

## Шаг 0. Впишите адрес сайта

В файлах лежит заглушка `https://REPLACE-WITH-YOUR-PAGES-URL/` — это canonical,
hreflang, og:image и sitemap. Замените её на реальный адрес Pages
(`https://<логин>.github.io/<репозиторий>/`) во всех файлах:

```bash
grep -rl REPLACE-WITH-YOUR-PAGES-URL . | xargs sed -i '' \
  's|https://REPLACE-WITH-YOUR-PAGES-URL/|https://<логин>.github.io/<репозиторий>/|g'
```

Без этого сайт работает, но поисковики будут получать ссылки на несуществующий
адрес. Если правите вручную — это 6 html-файлов, `sitemap.xml` и `robots.txt`.

## Как выложить на GitHub Pages (ветка gh-pages)

1. Создайте репозиторий на github.com (например `nuahule-site`), публичный.
2. На странице пустого репозитория: **uploading an existing file** → перетащите
   **всё содержимое** этой папки (не саму папку, а файлы и папки внутри неё).
   Commit → ветка `main`.
3. Создайте ветку `gh-pages`: вверху слева переключатель ветки → впишите
   `gh-pages` → **Create branch: gh-pages from main**.
4. **Settings → Pages**: Source = *Deploy from a branch*, Branch = `gh-pages`,
   папка `/ (root)` → **Save**.
5. Через 1–2 минуты сайт будет по адресу
   `https://<логин>.github.io/<репозиторий>/`.
   Обновление: коммит в `gh-pages` — деплой идёт автоматически.

Через командную строку то же самое:

```bash
cd путь/к/этой/папке
git init -b main
git add .
git commit -m "NUA SMOKE site"
git remote add origin https://github.com/<логин>/<репозиторий>.git
git push -u origin main
git checkout -b gh-pages
git push -u origin gh-pages
```

Дальше шаг 4 в настройках репозитория.

## Свой домен

Settings → Pages → Custom domain: вписать домен, затем у регистратора
добавить CNAME на `<логин>.github.io`. GitHub сам создаст файл `CNAME`
в ветке; не удаляйте его при следующей загрузке.

## Что менять чаще всего

- **Цены и позиции меню** — в `menu/index.html`, `ru/menu/index.html`,
  `ka/menu/index.html`: блоки `<div class="item">` (название · состав · цена).
  Цены кальяна лежат в двух местах: на главной (`#hookah`) и в меню.
- **Телефон** — поиск по `+995 595 012 633` и `tel:+995595012633`.
- **Часы работы** — строка `12:00–04:00` и блок `openingHoursSpecification`
  в JSON-LD в конце каждой страницы.
- **Фото** — файлы в `assets/photos/`, имена сохраняйте.
- **Отзывы** — блоки `<div class="rev">` на главной.

## Что осталось сделать вне сборки

- Проверить грузинские тексты у носителя языка.
- Заменить встроенную карту Google на точную точку заведения
  (сейчас координаты приблизительные: `41.6412, 41.6216` — правьте
  `src` у `<iframe>` и `geo` в JSON-LD).
- Подтвердить цифры: «~100 вкусов», «9 линеек», «16 настолок», кэшбэк.
- Старый адрес QR `nuahulebatumi.github.io/menu` работает только если
  репозиторий называется так же, как раньше; иначе перепечатать QR
  на новый адрес `/menu/`.
