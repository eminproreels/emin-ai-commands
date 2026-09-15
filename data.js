const COMMANDS=[
  {
    "command": "/billboard",
    "title": "Рекламный билборд",
    "category": "Реклама",
    "source": "Моя библиотека",
    "visual": 0,
    "abbr": "BILL",
    "index": 1,
    "desc": "Помещает креатив на билборд"
  },
  {
    "command": "/headshot",
    "title": "Деловой портрет",
    "category": "Реклама",
    "source": "Моя библиотека",
    "visual": 10,
    "abbr": "HEAD",
    "index": 2,
    "desc": "Создаёт деловой портрет"
  },
  {
    "command": "/proshot",
    "title": "Профессиональный кадр",
    "category": "Обработка",
    "source": "Моя библиотека",
    "visual": 3,
    "abbr": "PROS",
    "index": 3,
    "desc": "Делает кадр профессиональнее"
  },
  {
    "command": "/colorfix",
    "title": "Коррекция цвета",
    "category": "Обработка",
    "source": "Моя библиотека",
    "visual": 2,
    "abbr": "COLO",
    "index": 4,
    "desc": "Исправляет цвет и баланс"
  },
  {
    "command": "/premiumshowcase",
    "title": "Премиальная витрина",
    "category": "Реклама",
    "source": "Моя библиотека",
    "visual": 0,
    "abbr": "PREM",
    "index": 5,
    "desc": "Премиально показывает продукт"
  },
  {
    "command": "/infographic",
    "title": "Infographic",
    "category": "Продукт",
    "source": "Моя библиотека",
    "visual": 2,
    "abbr": "INFO",
    "index": 6,
    "desc": "Превращает данные в инфографику"
  },
  {
    "command": "/filmposter",
    "title": "Filmposter",
    "category": "Реклама",
    "source": "Моя библиотека",
    "visual": 6,
    "abbr": "FILM",
    "index": 7,
    "desc": "Создаёт постер как для фильма"
  },
  {
    "command": "/hairstyle",
    "title": "Hairstyle",
    "category": "Персонаж",
    "source": "Моя библиотека",
    "visual": 9,
    "abbr": "HAIR",
    "index": 8,
    "desc": "Меняет причёску персонажа"
  },
  {
    "command": "/creativeads",
    "title": "Creativeads",
    "category": "Реклама",
    "source": "Моя библиотека",
    "visual": 9,
    "abbr": "CREA",
    "index": 9,
    "desc": "Создаёт креатив для рекламы"
  },
  {
    "command": "/levitation",
    "title": "Levitation",
    "category": "Продукт",
    "source": "Моя библиотека",
    "visual": 0,
    "abbr": "LEVI",
    "index": 10,
    "desc": "Заставляет объект парить"
  },
  {
    "command": "/splash",
    "title": "Эффектный всплеск",
    "category": "Продукт",
    "source": "Моя библиотека",
    "visual": 7,
    "abbr": "SPLA",
    "index": 11,
    "desc": "Добавляет эффектный всплеск"
  },
  {
    "command": "/goldenhour",
    "title": "Goldenhour",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 4,
    "abbr": "GOLD",
    "index": 12,
    "desc": "Добавляет свет золотого часа"
  },
  {
    "command": "/neon",
    "title": "Neon",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 0,
    "abbr": "NEON",
    "index": 13,
    "desc": "Добавляет неоновое свечение"
  },
  {
    "command": "/minimalist",
    "title": "Minimalist",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 4,
    "abbr": "MINI",
    "index": 14,
    "desc": "Делает визуал минималистичным"
  },
  {
    "command": "/luxury",
    "title": "Luxury",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 11,
    "abbr": "LUXU",
    "index": 15,
    "desc": "Добавляет премиальный стиль"
  },
  {
    "command": "/streetstyle",
    "title": "Streetstyle",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 9,
    "abbr": "STRE",
    "index": 16,
    "desc": "Переносит в уличную эстетику"
  },
  {
    "command": "/cinematic",
    "title": "Кинематографичный кадр",
    "category": "Продукт",
    "source": "Моя библиотека",
    "visual": 2,
    "abbr": "CINE",
    "index": 17,
    "desc": "Создаёт киношную рекламную сцену"
  },
  {
    "command": "/outdoor",
    "title": "Outdoor",
    "category": "Продукт",
    "source": "Моя библиотека",
    "visual": 1,
    "abbr": "OUTD",
    "index": 18,
    "desc": "Переносит продукт на улицу"
  },
  {
    "command": "/flatlay",
    "title": "Flatlay",
    "category": "Продукт",
    "source": "Моя библиотека",
    "visual": 1,
    "abbr": "FLAT",
    "index": 19,
    "desc": "Создаёт раскладку сверху"
  },
  {
    "command": "/unboxing",
    "title": "Unboxing",
    "category": "Видео",
    "source": "Моя библиотека",
    "visual": 11,
    "abbr": "UNBO",
    "index": 20,
    "desc": "Показывает эффект распаковки"
  },
  {
    "command": "/lifestyle",
    "title": "Lifestyle",
    "category": "Продукт",
    "source": "Моя библиотека",
    "visual": 0,
    "abbr": "LIFE",
    "index": 21,
    "desc": "Встраивает продукт в жизнь"
  },
  {
    "command": "/seasonal",
    "title": "Seasonal",
    "category": "Продукт",
    "source": "Моя библиотека",
    "visual": 5,
    "abbr": "SEAS",
    "index": 22,
    "desc": "Адаптирует под сезон"
  },
  {
    "command": "/miniature",
    "title": "Миниатюрный мир",
    "category": "Продукт",
    "source": "Моя библиотека",
    "visual": 11,
    "abbr": "MINI",
    "index": 23,
    "desc": "Создаёт миниатюрный мир"
  },
  {
    "command": "/claymation",
    "title": "Claymation",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 1,
    "abbr": "CLAY",
    "index": 24,
    "desc": "Делает всё пластилиновым"
  },
  {
    "command": "/popart",
    "title": "Popart",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 0,
    "abbr": "POPA",
    "index": 25,
    "desc": "Переводит в поп-арт"
  },
  {
    "command": "/watercolor",
    "title": "Watercolor",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 11,
    "abbr": "WATE",
    "index": 26,
    "desc": "Рисует акварельный эффект"
  },
  {
    "command": "/pixelart",
    "title": "Pixelart",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 8,
    "abbr": "PIXE",
    "index": 27,
    "desc": "Превращает в пиксель-арт"
  },
  {
    "command": "/lowpoly",
    "title": "Lowpoly",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 1,
    "abbr": "LOWP",
    "index": 28,
    "desc": "Создаёт low-poly стиль"
  },
  {
    "command": "/holographic",
    "title": "Holographic",
    "category": "Продукт",
    "source": "Моя библиотека",
    "visual": 3,
    "abbr": "HOLO",
    "index": 29,
    "desc": "Добавляет голографический эффект"
  },
  {
    "command": "/chrome",
    "title": "Chrome",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 0,
    "abbr": "CHRO",
    "index": 30,
    "desc": "Превращает объект в хром"
  },
  {
    "command": "/glass",
    "title": "Glass",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 5,
    "abbr": "GLAS",
    "index": 31,
    "desc": "Делает объект стеклянным"
  },
  {
    "command": "/marble",
    "title": "Marble",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 6,
    "abbr": "MARB",
    "index": 32,
    "desc": "Создаёт эффект мрамора"
  },
  {
    "command": "/icecarved",
    "title": "Icecarved",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 5,
    "abbr": "ICEC",
    "index": 33,
    "desc": "Вырезает объект изо льда"
  },
  {
    "command": "/underwater",
    "title": "Underwater",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 3,
    "abbr": "UNDE",
    "index": 34,
    "desc": "Переносит сцену под воду"
  },
  {
    "command": "/space",
    "title": "Space",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 0,
    "abbr": "SPAC",
    "index": 35,
    "desc": "Переносит объект в космос"
  },
  {
    "command": "/desert",
    "title": "Desert",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 6,
    "abbr": "DESE",
    "index": 36,
    "desc": "Создаёт сцену в пустыне"
  },
  {
    "command": "/jungle",
    "title": "Jungle",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 6,
    "abbr": "JUNG",
    "index": 37,
    "desc": "Переносит сцену в джунгли"
  },
  {
    "command": "/retro80s",
    "title": "Retro80S",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 11,
    "abbr": "RETR",
    "index": 38,
    "desc": "Добавляет эстетику 80-х"
  },
  {
    "command": "/steampunk",
    "title": "Steampunk",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 9,
    "abbr": "STEA",
    "index": 39,
    "desc": "Создаёт стимпанк-стиль"
  },
  {
    "command": "/papercraft",
    "title": "Бумажный стиль",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 3,
    "abbr": "PAPE",
    "index": 40,
    "desc": "Делает объект из бумаги"
  },
  {
    "command": "/anatomy",
    "title": "Анатомия продукта",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 1,
    "abbr": "ANAT",
    "index": 41,
    "desc": "Показывает устройство объекта"
  },
  {
    "command": "/exploded",
    "title": "Разбор по деталям",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 3,
    "abbr": "EXPL",
    "index": 42,
    "desc": "Разбирает объект на детали"
  },
  {
    "command": "/crosssection",
    "title": "Crosssection",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 1,
    "abbr": "CROS",
    "index": 43,
    "desc": "Показывает объект в разрезе"
  },
  {
    "command": "/ingredients",
    "title": "Ingredients",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 1,
    "abbr": "INGR",
    "index": 44,
    "desc": "Показывает состав и ингредиенты"
  },
  {
    "command": "/blueprint",
    "title": "Blueprint",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 4,
    "abbr": "BLUE",
    "index": 45,
    "desc": "Создаёт чертёж объекта"
  },
  {
    "command": "/schematic",
    "title": "Schematic",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 4,
    "abbr": "SCHE",
    "index": 46,
    "desc": "Строит техническую схему"
  },
  {
    "command": "/sizechart",
    "title": "Sizechart",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 5,
    "abbr": "SIZE",
    "index": 47,
    "desc": "Показывает размеры объекта"
  },
  {
    "command": "/comparison",
    "title": "Comparison",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 6,
    "abbr": "COMP",
    "index": 48,
    "desc": "Сравнивает два варианта"
  },
  {
    "command": "/beforeafter",
    "title": "До и после",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 8,
    "abbr": "BEFO",
    "index": 49,
    "desc": "Показывает до и после"
  },
  {
    "command": "/howitworks",
    "title": "Как это работает",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 0,
    "abbr": "HOWI",
    "index": 50,
    "desc": "Объясняет принцип работы"
  },
  {
    "command": "/stepbystep",
    "title": "Stepbystep",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 6,
    "abbr": "STEP",
    "index": 51,
    "desc": "Показывает процесс по шагам"
  },
  {
    "command": "/materials",
    "title": "Materials",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 0,
    "abbr": "MATE",
    "index": 52,
    "desc": "Показывает материалы объекта"
  },
  {
    "command": "/specs",
    "title": "Specs",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 10,
    "abbr": "SPEC",
    "index": 53,
    "desc": "Показывает характеристики продукта"
  },
  {
    "command": "/timeline",
    "title": "Timeline",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 1,
    "abbr": "TIME",
    "index": 54,
    "desc": "Создаёт временную шкалу"
  },
  {
    "command": "/flowchart",
    "title": "Flowchart",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 11,
    "abbr": "FLOW",
    "index": 55,
    "desc": "Строит блок-схему процесса"
  },
  {
    "command": "/xray",
    "title": "Xray",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 6,
    "abbr": "XRAY",
    "index": 56,
    "desc": "Показывает объект насквозь"
  },
  {
    "command": "/teardown",
    "title": "Teardown",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 6,
    "abbr": "TEAR",
    "index": 57,
    "desc": "Разбирает устройство по частям"
  },
  {
    "command": "/components",
    "title": "Components",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 4,
    "abbr": "COMP",
    "index": 58,
    "desc": "Показывает основные компоненты"
  },
  {
    "command": "/features",
    "title": "Features",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 3,
    "abbr": "FEAT",
    "index": 59,
    "desc": "Выделяет ключевые функции"
  },
  {
    "command": "/instructions",
    "title": "Instructions",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 5,
    "abbr": "INST",
    "index": 60,
    "desc": "Создаёт понятную инструкцию"
  },
  {
    "command": "/assembly",
    "title": "Assembly",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 5,
    "abbr": "ASSE",
    "index": 61,
    "desc": "Показывает порядок сборки"
  },
  {
    "command": "/measurements",
    "title": "Measurements",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 3,
    "abbr": "MEAS",
    "index": 62,
    "desc": "Наносит размеры и замеры"
  },
  {
    "command": "/prosandcons",
    "title": "Prosandcons",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 10,
    "abbr": "PROS",
    "index": 63,
    "desc": "Показывает плюсы и минусы"
  },
  {
    "command": "/patentdrawing",
    "title": "Patentdrawing",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 3,
    "abbr": "PATE",
    "index": 64,
    "desc": "Создаёт патентный чертёж"
  },
  {
    "command": "/manual",
    "title": "Manual",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 11,
    "abbr": "MANU",
    "index": 65,
    "desc": "Оформляет как руководство"
  },
  {
    "command": "/techsheet",
    "title": "Techsheet",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 7,
    "abbr": "TECH",
    "index": 66,
    "desc": "Создаёт техническую карточку"
  },
  {
    "command": "/originmap",
    "title": "Originmap",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 1,
    "abbr": "ORIG",
    "index": 67,
    "desc": "Показывает происхождение на карте"
  },
  {
    "command": "/nutrition",
    "title": "Nutrition",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 3,
    "abbr": "NUTR",
    "index": 68,
    "desc": "Оформляет пищевую ценность"
  },
  {
    "command": "/composition",
    "title": "Composition",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 9,
    "abbr": "COMP",
    "index": 69,
    "desc": "Показывает состав объекта"
  },
  {
    "command": "/diagram",
    "title": "Diagram",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 3,
    "abbr": "DIAG",
    "index": 70,
    "desc": "Создаёт наглядную диаграмму"
  },
  {
    "command": "/handwritten",
    "title": "Handwritten",
    "category": "Продукт",
    "source": "Моя библиотека",
    "visual": 10,
    "abbr": "HAND",
    "index": 71,
    "desc": "Добавляет рукописный стиль"
  },
  {
    "command": "/labeled",
    "title": "Labeled",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 8,
    "abbr": "LABE",
    "index": 72,
    "desc": "Добавляет подписи к деталям"
  },
  {
    "command": "/oldify",
    "title": "Oldify",
    "category": "Персонаж",
    "source": "Моя библиотека",
    "visual": 1,
    "abbr": "OLDI",
    "index": 73,
    "desc": "Делает персонажа старше"
  },
  {
    "command": "/youngify",
    "title": "Youngify",
    "category": "Персонаж",
    "source": "Моя библиотека",
    "visual": 4,
    "abbr": "YOUN",
    "index": 74,
    "desc": "Делает персонажа моложе"
  },
  {
    "command": "/cartoon",
    "title": "Cartoon",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 6,
    "abbr": "CART",
    "index": 75,
    "desc": "Превращает в мультяшный стиль"
  },
  {
    "command": "/anime",
    "title": "Anime",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 10,
    "abbr": "ANIM",
    "index": 76,
    "desc": "Переводит персонажа в аниме"
  },
  {
    "command": "/pixarstyle",
    "title": "Pixarstyle",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 9,
    "abbr": "PIXA",
    "index": 77,
    "desc": "Создаёт 3D-мульт стиль"
  },
  {
    "command": "/oilportrait",
    "title": "Oilportrait",
    "category": "Персонаж",
    "source": "Моя библиотека",
    "visual": 9,
    "abbr": "OILP",
    "index": 78,
    "desc": "Рисует портрет маслом"
  },
  {
    "command": "/renaissance",
    "title": "Renaissance",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 0,
    "abbr": "RENA",
    "index": 79,
    "desc": "Переносит в эпоху Ренессанса"
  },
  {
    "command": "/superhero",
    "title": "Superhero",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 11,
    "abbr": "SUPE",
    "index": 80,
    "desc": "Превращает в супергероя"
  },
  {
    "command": "/royal",
    "title": "Royal",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 10,
    "abbr": "ROYA",
    "index": 81,
    "desc": "Создаёт королевский образ"
  },
  {
    "command": "/astronaut",
    "title": "Astronaut",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 10,
    "abbr": "ASTR",
    "index": 82,
    "desc": "Превращает в астронавта"
  },
  {
    "command": "/warrior",
    "title": "Warrior",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 10,
    "abbr": "WARR",
    "index": 83,
    "desc": "Создаёт образ воина"
  },
  {
    "command": "/wizard",
    "title": "Wizard",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 8,
    "abbr": "WIZA",
    "index": 84,
    "desc": "Создаёт образ волшебника"
  },
  {
    "command": "/vintagephoto",
    "title": "Vintagephoto",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 8,
    "abbr": "VINT",
    "index": 85,
    "desc": "Стилизует под старое фото"
  },
  {
    "command": "/polaroid",
    "title": "Polaroid",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 10,
    "abbr": "POLA",
    "index": 86,
    "desc": "Создаёт эффект Polaroid"
  },
  {
    "command": "/blackandwhite",
    "title": "Blackandwhite",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 3,
    "abbr": "BLAC",
    "index": 87,
    "desc": "Делает чёрно-белое фото"
  },
  {
    "command": "/sepia",
    "title": "Sepia",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 2,
    "abbr": "SEPI",
    "index": 88,
    "desc": "Добавляет эффект сепии"
  },
  {
    "command": "/neonportrait",
    "title": "Neonportrait",
    "category": "Персонаж",
    "source": "Моя библиотека",
    "visual": 10,
    "abbr": "NEON",
    "index": 89,
    "desc": "Создаёт неоновый портрет"
  },
  {
    "command": "/popartportrait",
    "title": "Popartportrait",
    "category": "Персонаж",
    "source": "Моя библиотека",
    "visual": 11,
    "abbr": "POPA",
    "index": 90,
    "desc": "Делает поп-арт портрет"
  },
  {
    "command": "/comicportrait",
    "title": "Comicportrait",
    "category": "Персонаж",
    "source": "Моя библиотека",
    "visual": 7,
    "abbr": "COMI",
    "index": 91,
    "desc": "Превращает портрет в комикс"
  },
  {
    "command": "/watercolorportrait",
    "title": "Watercolorportrait",
    "category": "Персонаж",
    "source": "Моя библиотека",
    "visual": 8,
    "abbr": "WATE",
    "index": 92,
    "desc": "Рисует портрет акварелью"
  },
  {
    "command": "/statue",
    "title": "Statue",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 8,
    "abbr": "STAT",
    "index": 93,
    "desc": "Превращает персонажа в статую"
  },
  {
    "command": "/hologram",
    "title": "Hologram",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 3,
    "abbr": "HOLO",
    "index": 94,
    "desc": "Создаёт голограмму персонажа"
  },
  {
    "command": "/cyberpunk",
    "title": "Cyberpunk",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 0,
    "abbr": "CYBE",
    "index": 95,
    "desc": "Добавляет киберпанк-стиль"
  },
  {
    "command": "/fantasyportrait",
    "title": "Fantasyportrait",
    "category": "Персонаж",
    "source": "Моя библиотека",
    "visual": 1,
    "abbr": "FANT",
    "index": 96,
    "desc": "Создаёт фэнтези-портрет"
  },
  {
    "command": "/gamecharacter",
    "title": "Gamecharacter",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 1,
    "abbr": "GAME",
    "index": 97,
    "desc": "Превращает в игрового героя"
  },
  {
    "command": "/avatarstyle",
    "title": "Avatarstyle",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 5,
    "abbr": "AVAT",
    "index": 98,
    "desc": "Создаёт стилизованный аватар"
  },
  {
    "command": "/pixelportrait",
    "title": "Pixelportrait",
    "category": "Персонаж",
    "source": "Моя библиотека",
    "visual": 0,
    "abbr": "PIXE",
    "index": 99,
    "desc": "Делает пиксельный портрет"
  },
  {
    "command": "/sketchportrait",
    "title": "Sketchportrait",
    "category": "Персонаж",
    "source": "Моя библиотека",
    "visual": 11,
    "abbr": "SKET",
    "index": 100,
    "desc": "Рисует портрет карандашом"
  },
  {
    "command": "/magazinecover",
    "title": "Magazinecover",
    "category": "Продукт",
    "source": "Моя библиотека",
    "visual": 3,
    "abbr": "MAGA",
    "index": 101,
    "desc": "Оформляет обложку журнала"
  },
  {
    "command": "/babyversion",
    "title": "Babyversion",
    "category": "Персонаж",
    "source": "Моя библиотека",
    "visual": 4,
    "abbr": "BABY",
    "index": 102,
    "desc": "Создаёт детскую версию"
  },
  {
    "command": "/handwrittennote",
    "title": "Handwrittennote",
    "category": "Продукт",
    "source": "Моя библиотека",
    "visual": 5,
    "abbr": "HAND",
    "index": 103,
    "desc": "Создаёт рукописную записку"
  },
  {
    "command": "/newbg",
    "title": "Новый фон",
    "category": "Обработка",
    "source": "Моя библиотека",
    "visual": 1,
    "abbr": "NEWB",
    "index": 104,
    "desc": "Заменяет фон изображения"
  },
  {
    "command": "/hdreel",
    "title": "Hdreel",
    "category": "Видео",
    "source": "Моя библиотека",
    "visual": 0,
    "abbr": "HDRE",
    "index": 105,
    "desc": "Улучшает качество кадра Reels"
  },
  {
    "command": "/together",
    "title": "Together",
    "category": "Персонаж",
    "source": "Моя библиотека",
    "visual": 9,
    "abbr": "TOGE",
    "index": 106,
    "desc": "Объединяет людей в одном кадре"
  },
  {
    "command": "/sunglasses",
    "title": "Sunglasses",
    "category": "Персонаж",
    "source": "Моя библиотека",
    "visual": 5,
    "abbr": "SUNG",
    "index": 107,
    "desc": "Добавляет солнцезащитные очки"
  },
  {
    "command": "/lightfix",
    "title": "Lightfix",
    "category": "Обработка",
    "source": "Моя библиотека",
    "visual": 10,
    "abbr": "LIGH",
    "index": 108,
    "desc": "Исправляет свет на фото"
  },
  {
    "command": "/sharpclean",
    "title": "Sharpclean",
    "category": "Обработка",
    "source": "Моя библиотека",
    "visual": 4,
    "abbr": "SHAR",
    "index": 109,
    "desc": "Повышает резкость и чистоту"
  },
  {
    "command": "/restorephoto",
    "title": "Restorephoto",
    "category": "Обработка",
    "source": "Моя библиотека",
    "visual": 10,
    "abbr": "REST",
    "index": 110,
    "desc": "Восстанавливает старую фотографию"
  },
  {
    "command": "/cleanbg",
    "title": "Чистый фон",
    "category": "Обработка",
    "source": "Моя библиотека",
    "visual": 7,
    "abbr": "CLEA",
    "index": 111,
    "desc": "Очищает и упрощает фон"
  },
  {
    "command": "/studioify",
    "title": "Studioify",
    "category": "Обработка",
    "source": "Моя библиотека",
    "visual": 7,
    "abbr": "STUD",
    "index": 112,
    "desc": "Создаёт студийный вид"
  },
  {
    "command": "/editorial",
    "title": "Редакционный стиль",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 5,
    "abbr": "EDIT",
    "index": 113,
    "desc": "Добавляет журнальную эстетику"
  },
  {
    "command": "/profilepic",
    "title": "Profilepic",
    "category": "Персонаж",
    "source": "Моя библиотека",
    "visual": 8,
    "abbr": "PROF",
    "index": 114,
    "desc": "Создаёт фото для профиля"
  },
  {
    "command": "/passportplus",
    "title": "Passportplus",
    "category": "Персонаж",
    "source": "Моя библиотека",
    "visual": 7,
    "abbr": "PASS",
    "index": 115,
    "desc": "Улучшает фото для документов"
  },
  {
    "command": "/beardstyle",
    "title": "Beardstyle",
    "category": "Персонаж",
    "source": "Моя библиотека",
    "visual": 4,
    "abbr": "BEAR",
    "index": 116,
    "desc": "Меняет стиль бороды"
  },
  {
    "command": "/glasses",
    "title": "Glasses",
    "category": "Персонаж",
    "source": "Моя библиотека",
    "visual": 11,
    "abbr": "GLAS",
    "index": 117,
    "desc": "Добавляет подходящие очки"
  },
  {
    "command": "/outfitpreview",
    "title": "Outfitpreview",
    "category": "Персонаж",
    "source": "Моя библиотека",
    "visual": 10,
    "abbr": "OUTF",
    "index": 118,
    "desc": "Показывает новую одежду"
  },
  {
    "command": "/skinretouch",
    "title": "Ретушь кожи",
    "category": "Персонаж",
    "source": "Моя библиотека",
    "visual": 10,
    "abbr": "SKIN",
    "index": 119,
    "desc": "Делает натуральную ретушь кожи"
  },
  {
    "command": "/cinereel",
    "title": "Кино-Reels",
    "category": "Видео",
    "source": "Моя библиотека",
    "visual": 1,
    "abbr": "CINE",
    "index": 120,
    "desc": "Делает Reels кинематографичным"
  },
  {
    "command": "/3dbillboard",
    "title": "3D-билборд",
    "category": "Реклама",
    "source": "Дополнительно",
    "visual": 4,
    "abbr": "3DBI",
    "index": 121,
    "desc": "Создаёт эффект 3D-билборда"
  },
  {
    "command": "/citylight",
    "title": "Citylight",
    "category": "Реклама",
    "source": "Дополнительно",
    "visual": 0,
    "abbr": "CITY",
    "index": 122,
    "desc": "Помещает рекламу в ситилайт"
  },
  {
    "command": "/busstopad",
    "title": "Busstopad",
    "category": "Реклама",
    "source": "Дополнительно",
    "visual": 9,
    "abbr": "BUSS",
    "index": 123,
    "desc": "Размещает рекламу на остановке"
  },
  {
    "command": "/airportad",
    "title": "Airportad",
    "category": "Реклама",
    "source": "Дополнительно",
    "visual": 6,
    "abbr": "AIRP",
    "index": 124,
    "desc": "Размещает рекламу в аэропорту"
  },
  {
    "command": "/subwayad",
    "title": "Subwayad",
    "category": "Реклама",
    "source": "Дополнительно",
    "visual": 3,
    "abbr": "SUBW",
    "index": 125,
    "desc": "Размещает рекламу в метро"
  },
  {
    "command": "/buswrap",
    "title": "Buswrap",
    "category": "Реклама",
    "source": "Дополнительно",
    "visual": 5,
    "abbr": "BUSW",
    "index": 126,
    "desc": "Брендирует автобус рекламой"
  },
  {
    "command": "/storefront",
    "title": "Storefront",
    "category": "Реклама",
    "source": "Дополнительно",
    "visual": 5,
    "abbr": "STOR",
    "index": 127,
    "desc": "Оформляет рекламную витрину"
  },
  {
    "command": "/guerrillaad",
    "title": "Guerrillaad",
    "category": "Реклама",
    "source": "Дополнительно",
    "visual": 0,
    "abbr": "GUER",
    "index": 128,
    "desc": "Создаёт необычную уличную рекламу"
  },
  {
    "command": "/phonemockup",
    "title": "Макет на смартфоне",
    "category": "Продукт",
    "source": "Дополнительно",
    "visual": 1,
    "abbr": "PHON",
    "index": 129,
    "desc": "Показывает дизайн на смартфоне"
  },
  {
    "command": "/instagrammockup",
    "title": "Макет Instagram",
    "category": "Продукт",
    "source": "Дополнительно",
    "visual": 11,
    "abbr": "INST",
    "index": 130,
    "desc": "Показывает дизайн в Instagram"
  },
  {
    "command": "/telegrammockup",
    "title": "Макет Telegram",
    "category": "Продукт",
    "source": "Дополнительно",
    "visual": 4,
    "abbr": "TELE",
    "index": 131,
    "desc": "Показывает дизайн в Telegram"
  },
  {
    "command": "/iceberg",
    "title": "Iceberg",
    "category": "Инфографика",
    "source": "Дополнительно",
    "visual": 9,
    "abbr": "ICEB",
    "index": 132,
    "desc": "Создаёт схему-айсберг"
  },
  {
    "command": "/funnel",
    "title": "Funnel",
    "category": "Инфографика",
    "source": "Дополнительно",
    "visual": 10,
    "abbr": "FUNN",
    "index": 133,
    "desc": "Строит визуальную воронку"
  },
  {
    "command": "/matrix",
    "title": "Matrix",
    "category": "Инфографика",
    "source": "Дополнительно",
    "visual": 8,
    "abbr": "MATR",
    "index": 134,
    "desc": "Создаёт сравнительную матрицу"
  },
  {
    "command": "/venndiagram",
    "title": "Venndiagram",
    "category": "Инфографика",
    "source": "Дополнительно",
    "visual": 6,
    "abbr": "VENN",
    "index": 135,
    "desc": "Создаёт диаграмму Венна"
  },
  {
    "command": "/comicstrip",
    "title": "Comicstrip",
    "category": "Продукт",
    "source": "Дополнительно",
    "visual": 6,
    "abbr": "COMI",
    "index": 136,
    "desc": "Создаёт короткий комикс"
  },
  {
    "command": "/herojourney",
    "title": "Herojourney",
    "category": "Продукт",
    "source": "Дополнительно",
    "visual": 6,
    "abbr": "HERO",
    "index": 137,
    "desc": "Визуализирует путь героя"
  },
  {
    "command": "/dayinthelife",
    "title": "Dayinthelife",
    "category": "Видео",
    "source": "Дополнительно",
    "visual": 6,
    "abbr": "DAYI",
    "index": 138,
    "desc": "Показывает день как историю"
  },
  {
    "command": "/pov",
    "title": "Pov",
    "category": "Видео",
    "source": "Дополнительно",
    "visual": 1,
    "abbr": "POV",
    "index": 139,
    "desc": "Создаёт сцену от первого лица"
  },
  {
    "command": "/loopstory",
    "title": "Loopstory",
    "category": "Видео",
    "source": "Дополнительно",
    "visual": 3,
    "abbr": "LOOP",
    "index": 140,
    "desc": "Создаёт зацикленную историю"
  },
  {
    "command": "/surrealconcept",
    "title": "Surrealconcept",
    "category": "Продукт",
    "source": "Дополнительно",
    "visual": 0,
    "abbr": "SURR",
    "index": 141,
    "desc": "Создаёт сюрреалистичную идею"
  },
  {
    "command": "/hybridobject",
    "title": "Hybridobject",
    "category": "Продукт",
    "source": "Дополнительно",
    "visual": 5,
    "abbr": "HYBR",
    "index": 142,
    "desc": "Объединяет два объекта"
  },
  {
    "command": "/impossibleobject",
    "title": "Impossibleobject",
    "category": "Продукт",
    "source": "Дополнительно",
    "visual": 6,
    "abbr": "IMPO",
    "index": 143,
    "desc": "Создаёт невозможный объект"
  },
  {
    "command": "/personification",
    "title": "Personification",
    "category": "Продукт",
    "source": "Дополнительно",
    "visual": 11,
    "abbr": "PERS",
    "index": 144,
    "desc": "Очеловечивает предмет или продукт"
  },
  {
    "command": "/papercut",
    "title": "Papercut",
    "category": "Стили",
    "source": "Дополнительно",
    "visual": 6,
    "abbr": "PAPE",
    "index": 145,
    "desc": "Создаёт стиль бумажной вырезки"
  },
  {
    "command": "/isometric",
    "title": "Isometric",
    "category": "Стили",
    "source": "Дополнительно",
    "visual": 6,
    "abbr": "ISOM",
    "index": 146,
    "desc": "Создаёт изометрическую сцену"
  },
  {
    "command": "/enhance",
    "title": "Улучшить качество",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 2,
    "abbr": "ENHA",
    "index": 147,
    "desc": "Повышает общее качество фото"
  },
  {
    "command": "/deblur",
    "title": "Убрать размытие",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 3,
    "abbr": "DEBL",
    "index": 148,
    "desc": "Убирает размытие и возвращает детали"
  },
  {
    "command": "/sharpen",
    "title": "Повысить резкость",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 4,
    "abbr": "SHAR",
    "index": 149,
    "desc": "Добавляет резкость и чёткость"
  },
  {
    "command": "/upscale",
    "title": "Увеличить разрешение",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 5,
    "abbr": "UPSC",
    "index": 150,
    "desc": "Увеличивает разрешение изображения"
  },
  {
    "command": "/denoise",
    "title": "Убрать шум",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 6,
    "abbr": "DENO",
    "index": 151,
    "desc": "Убирает шум и зернистость"
  },
  {
    "command": "/fixlighting",
    "title": "Исправить свет",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 7,
    "abbr": "FIXL",
    "index": 152,
    "desc": "Улучшает освещение фотографии"
  },
  {
    "command": "/fixexposure",
    "title": "Исправить экспозицию",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 8,
    "abbr": "FIXE",
    "index": 153,
    "desc": "Исправляет слишком светлые и тёмные фото"
  },
  {
    "command": "/fixcolors",
    "title": "Исправить цвета",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 9,
    "abbr": "FIXC",
    "index": 154,
    "desc": "Корректирует и улучшает цвета"
  },
  {
    "command": "/whitebalance",
    "title": "Баланс белого",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 10,
    "abbr": "WHIT",
    "index": 155,
    "desc": "Исправляет баланс белого"
  },
  {
    "command": "/softlight",
    "title": "Мягкий свет",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 11,
    "abbr": "SOFT",
    "index": 156,
    "desc": "Создаёт мягкое освещение"
  },
  {
    "command": "/warmtones",
    "title": "Тёплые тона",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 0,
    "abbr": "WARM",
    "index": 157,
    "desc": "Делает цвета теплее"
  },
  {
    "command": "/cooltones",
    "title": "Холодные тона",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 1,
    "abbr": "COOL",
    "index": 158,
    "desc": "Делает цвета холоднее"
  },
  {
    "command": "/clearskin",
    "title": "Чистая кожа",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 2,
    "abbr": "CLEA",
    "index": 159,
    "desc": "Очищает кожу, сохраняя естественность"
  },
  {
    "command": "/naturalretouch",
    "title": "Естественная ретушь",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 3,
    "abbr": "NATU",
    "index": 160,
    "desc": "Деликатно ретуширует лицо"
  },
  {
    "command": "/removeblemishes",
    "title": "Убрать несовершенства",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 4,
    "abbr": "REMO",
    "index": 161,
    "desc": "Убирает прыщи, пятна и мелкие дефекты"
  },
  {
    "command": "/removeeyebags",
    "title": "Убрать круги под глазами",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 5,
    "abbr": "REMO",
    "index": 162,
    "desc": "Смягчает тёмные круги под глазами"
  },
  {
    "command": "/brighteneyes",
    "title": "Осветлить глаза",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 6,
    "abbr": "BRIG",
    "index": 163,
    "desc": "Делает глаза светлее и выразительнее"
  },
  {
    "command": "/whiteteeth",
    "title": "Отбелить зубы",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 7,
    "abbr": "WHIT",
    "index": 164,
    "desc": "Естественно осветляет зубы"
  },
  {
    "command": "/fixhair",
    "title": "Исправить волосы",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 8,
    "abbr": "FIXH",
    "index": 165,
    "desc": "Убирает выбившиеся волосы"
  },
  {
    "command": "/addvolumehair",
    "title": "Объём волос",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 9,
    "abbr": "ADDV",
    "index": 166,
    "desc": "Добавляет волосам объём"
  },
  {
    "command": "/makeupnatural",
    "title": "Естественный макияж",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 10,
    "abbr": "MAKE",
    "index": 167,
    "desc": "Добавляет лёгкий естественный макияж"
  },
  {
    "command": "/makeupglam",
    "title": "Гламурный макияж",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 11,
    "abbr": "MAKE",
    "index": 168,
    "desc": "Добавляет выразительный макияж"
  },
  {
    "command": "/portraitenhance",
    "title": "Улучшить портрет",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 0,
    "abbr": "PORT",
    "index": 169,
    "desc": "Улучшает портрет целиком"
  },
  {
    "command": "/professionalportrait",
    "title": "Профессиональный портрет",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 1,
    "abbr": "PROF",
    "index": 170,
    "desc": "Превращает фото в профессиональный портрет"
  },
  {
    "command": "/removepeoplebgr",
    "title": "Убрать людей с фона",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 2,
    "abbr": "REMO",
    "index": 171,
    "desc": "Удаляет людей на заднем плане"
  },
  {
    "command": "/removeobject",
    "title": "Удалить объект",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 3,
    "abbr": "REMO",
    "index": 172,
    "desc": "Удаляет ненужный объект с фото"
  },
  {
    "command": "/removebackground",
    "title": "Удалить фон",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 4,
    "abbr": "REMO",
    "index": 173,
    "desc": "Полностью удаляет фон"
  },
  {
    "command": "/cleanbackground",
    "title": "Очистить фон",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 5,
    "abbr": "CLEA",
    "index": 174,
    "desc": "Убирает отвлекающие детали с фона"
  },
  {
    "command": "/removetext",
    "title": "Удалить текст",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 6,
    "abbr": "REMO",
    "index": 175,
    "desc": "Удаляет надписи с изображения"
  },
  {
    "command": "/removeglare",
    "title": "Убрать блики",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 7,
    "abbr": "REMO",
    "index": 176,
    "desc": "Убирает нежелательные блики"
  },
  {
    "command": "/removeshadow",
    "title": "Убрать тени",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 8,
    "abbr": "REMO",
    "index": 177,
    "desc": "Смягчает или удаляет тени"
  },
  {
    "command": "/removewires",
    "title": "Убрать провода",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 9,
    "abbr": "REMO",
    "index": 178,
    "desc": "Удаляет провода и кабели"
  },
  {
    "command": "/removeclutter",
    "title": "Убрать визуальный шум",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 10,
    "abbr": "REMO",
    "index": 179,
    "desc": "Очищает кадр от лишних деталей"
  },
  {
    "command": "/replacebackground",
    "title": "Заменить фон",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 11,
    "abbr": "REPL",
    "index": 180,
    "desc": "Меняет фон изображения"
  },
  {
    "command": "/blurbackground",
    "title": "Размыть фон",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 0,
    "abbr": "BLUR",
    "index": 181,
    "desc": "Создаёт размытие заднего плана"
  },
  {
    "command": "/studiobackground",
    "title": "Студийный фон",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 1,
    "abbr": "STUD",
    "index": 182,
    "desc": "Создаёт профессиональный студийный фон"
  },
  {
    "command": "/whitebackground",
    "title": "Белый фон",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 2,
    "abbr": "WHIT",
    "index": 183,
    "desc": "Делает фон чисто белым"
  },
  {
    "command": "/luxurybackground",
    "title": "Премиальный фон",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 3,
    "abbr": "LUXU",
    "index": 184,
    "desc": "Создаёт более дорогой фон"
  },
  {
    "command": "/outdoorbackground",
    "title": "Уличный фон",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 4,
    "abbr": "OUTD",
    "index": 185,
    "desc": "Переносит сцену на улицу"
  },
  {
    "command": "/extendbackground",
    "title": "Расширить фон",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 5,
    "abbr": "EXTE",
    "index": 186,
    "desc": "Расширяет фон за границы кадра"
  },
  {
    "command": "/instagramlook",
    "title": "Стиль Instagram",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 6,
    "abbr": "INST",
    "index": 187,
    "desc": "Создаёт современную эстетику Instagram"
  },
  {
    "command": "/editoriallook",
    "title": "Редакционный стиль",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 7,
    "abbr": "EDIT",
    "index": 188,
    "desc": "Делает фото как журнальную съёмку"
  },
  {
    "command": "/cinematiclook",
    "title": "Кинематографичный стиль",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 8,
    "abbr": "CINE",
    "index": 189,
    "desc": "Создаёт кинематографичную эстетику"
  },
  {
    "command": "/luxurylook",
    "title": "Премиальный стиль",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 9,
    "abbr": "LUXU",
    "index": 190,
    "desc": "Делает изображение дороже визуально"
  },
  {
    "command": "/brightairy",
    "title": "Светлый стиль",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 10,
    "abbr": "BRIG",
    "index": 191,
    "desc": "Создаёт светлую воздушную эстетику"
  },
  {
    "command": "/moody",
    "title": "Драматичный стиль",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 11,
    "abbr": "MOOD",
    "index": 192,
    "desc": "Создаёт тёмную атмосферную эстетику"
  },
  {
    "command": "/filmlook",
    "title": "Плёночный стиль",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 0,
    "abbr": "FILM",
    "index": 193,
    "desc": "Имитирует аналоговую плёнку"
  },
  {
    "command": "/iphonephoto",
    "title": "Естественное фото",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 1,
    "abbr": "IPHO",
    "index": 194,
    "desc": "Делает фото естественным как с iPhone"
  },
  {
    "command": "/fixclothes",
    "title": "Исправить одежду",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 2,
    "abbr": "FIXC",
    "index": 195,
    "desc": "Исправляет складки и посадку одежды"
  },
  {
    "command": "/fashionretouch",
    "title": "Ретушь одежды",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 3,
    "abbr": "FASH",
    "index": 196,
    "desc": "Делает профессиональную fashion-ретушь"
  },
  {
    "command": "/fashioncampaign",
    "title": "Fashion-кампания",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 4,
    "abbr": "FASH",
    "index": 197,
    "desc": "Превращает фото в модную кампанию"
  },
  {
    "command": "/ecommercefashion",
    "title": "Фото для магазина",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 5,
    "abbr": "ECOM",
    "index": 198,
    "desc": "Создаёт чистое фото одежды для магазина"
  },
  {
    "command": "/ghostmannequin",
    "title": "Невидимый манекен",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 6,
    "abbr": "GHOS",
    "index": 199,
    "desc": "Создаёт эффект невидимого манекена"
  },
  {
    "command": "/fabricmacro",
    "title": "Макро ткани",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 7,
    "abbr": "FABR",
    "index": 200,
    "desc": "Показывает фактуру ткани крупным планом"
  },
  {
    "command": "/productenhance",
    "title": "Улучшить товар",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 8,
    "abbr": "PROD",
    "index": 201,
    "desc": "Улучшает товарную фотографию"
  },
  {
    "command": "/producthero",
    "title": "Hero-кадр товара",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 9,
    "abbr": "PROD",
    "index": 202,
    "desc": "Создаёт премиальный рекламный кадр товара"
  },
  {
    "command": "/packshot",
    "title": "Каталожный кадр",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 10,
    "abbr": "PACK",
    "index": 203,
    "desc": "Создаёт чистый каталожный кадр"
  },
  {
    "command": "/floatingproduct",
    "title": "Парящий товар",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 11,
    "abbr": "FLOA",
    "index": 204,
    "desc": "Создаёт композицию с парящим товаром"
  },
  {
    "command": "/macroproduct",
    "title": "Макро товара",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 0,
    "abbr": "MACR",
    "index": 205,
    "desc": "Показывает детали товара крупно"
  },
  {
    "command": "/topdown",
    "title": "Вид сверху",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 1,
    "abbr": "TOPD",
    "index": 206,
    "desc": "Создаёт композицию сверху"
  },
  {
    "command": "/metaads",
    "title": "Креатив для рекламы",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 2,
    "abbr": "META",
    "index": 207,
    "desc": "Превращает фото в рекламный креатив"
  },
  {
    "command": "/productshootad",
    "title": "Рекламная съёмка товара",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 3,
    "abbr": "PROD",
    "index": 208,
    "desc": "Создаёт рекламную фотографию товара"
  },
  {
    "command": "/declutter",
    "title": "Очистить интерьер",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 4,
    "abbr": "DECL",
    "index": 209,
    "desc": "Убирает лишние предметы из помещения"
  },
  {
    "command": "/virtualstaging",
    "title": "Виртуальная меблировка",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 5,
    "abbr": "VIRT",
    "index": 210,
    "desc": "Добавляет мебель и декор виртуально"
  },
  {
    "command": "/interiormakeover",
    "title": "Обновить интерьер",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 6,
    "abbr": "INTE",
    "index": 211,
    "desc": "Полностью меняет стиль интерьера"
  },
  {
    "command": "/brightenroom",
    "title": "Осветлить комнату",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 7,
    "abbr": "BRIG",
    "index": 212,
    "desc": "Делает помещение светлее"
  },
  {
    "command": "/luxuryinterior",
    "title": "Премиальный интерьер",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 8,
    "abbr": "LUXU",
    "index": 213,
    "desc": "Делает интерьер более дорогим"
  },
  {
    "command": "/modernize",
    "title": "Освежить интерьер",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 9,
    "abbr": "MODE",
    "index": 214,
    "desc": "Современно обновляет мебель и отделку"
  },
  {
    "command": "/removefurniture",
    "title": "Убрать мебель",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 10,
    "abbr": "REMO",
    "index": 215,
    "desc": "Удаляет мебель из помещения"
  },
  {
    "command": "/daylight",
    "title": "Дневной свет",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 11,
    "abbr": "DAYL",
    "index": 216,
    "desc": "Добавляет естественный дневной свет"
  },
  {
    "command": "/fixperspective",
    "title": "Исправить перспективу",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 0,
    "abbr": "FIXP",
    "index": 217,
    "desc": "Исправляет перспективные искажения"
  },
  {
    "command": "/straighten",
    "title": "Выровнять фото",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 1,
    "abbr": "STRA",
    "index": 218,
    "desc": "Выравнивает наклон изображения"
  },
  {
    "command": "/fixhorizon",
    "title": "Исправить горизонт",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 2,
    "abbr": "FIXH",
    "index": 219,
    "desc": "Выравнивает заваленный горизонт"
  },
  {
    "command": "/reframe",
    "title": "Изменить кадрирование",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 3,
    "abbr": "REFR",
    "index": 220,
    "desc": "Улучшает композицию кадра"
  },
  {
    "command": "/centerobject",
    "title": "Центрировать объект",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 4,
    "abbr": "CENT",
    "index": 221,
    "desc": "Ставит главный объект по центру"
  },
  {
    "command": "/extend 9:16",
    "title": "Расширить до 9:16",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 5,
    "abbr": "EXTE",
    "index": 222,
    "desc": "Расширяет фото под Stories и Reels"
  },
  {
    "command": "/extend 4:5",
    "title": "Расширить до 4:5",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 6,
    "abbr": "EXTE",
    "index": 223,
    "desc": "Адаптирует фото под вертикальный пост"
  },
  {
    "command": "/extend 1:1",
    "title": "Расширить до 1:1",
    "category": "Улучшение фото",
    "source": "Моя библиотека",
    "visual": 7,
    "abbr": "EXTE",
    "index": 224,
    "desc": "Адаптирует фото под квадрат"
  }
];
