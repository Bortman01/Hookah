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

## Где живёт сайт

- Адрес: **https://bortman01.github.io/Hookah/**. Он уже прописан в canonical, hreflang, og:image, `sitemap.xml` и `robots.txt`
- Исходники: папка `site/` в ветке `main` репозитория `Bortman01/Hookah`
- Публикация: ветка `gh-pages`. В ней лежит только содержимое `site/`, в корне
- Pages: **Settings → Pages → Deploy from a branch → `gh-pages` / `(root)`**

## Как обновить сайт

1. Правите файлы в `site/` и коммитите в `main`
2. Из корня репозитория выкладываете папку в `gh-pages`:

```bash
git push origin `git subtree split --prefix site main`:gh-pages --force
```

Через 1–2 минуты изменения появятся на сайте. `--force` здесь нормален: `gh-pages` всегда
пересобирается из `site/` и руками не редактируется.

Если адрес когда-нибудь поменяется (свой домен, другой репозиторий), замените
`https://bortman01.github.io/Hookah/` во всех html, `sitemap.xml` и `robots.txt`:

```bash
grep -rl 'https://bortman01.github.io/Hookah/' . | xargs sed -i 's|https://bortman01.github.io/Hookah/|https://НОВЫЙ-АДРЕС/|g'
```

## Свой домен

Settings → Pages → Custom domain: вписать домен, затем у регистратора
добавить CNAME на `bortman01.github.io`. GitHub создаст файл `CNAME` в `gh-pages`,
но следующий force-push его сотрёт. Поэтому положите такой же файл `CNAME`
(одна строка с доменом) в `site/` и закоммитьте в `main`.

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
