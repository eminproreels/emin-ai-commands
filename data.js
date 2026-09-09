const COMMANDS=[
  {
    "command": "/billboard",
    "title": "Рекламный билборд",
    "category": "Реклама",
    "source": "Моя библиотека",
    "visual": 0,
    "abbr": "BILL",
    "index": 1
  },
  {
    "command": "/headshot",
    "title": "Деловой портрет",
    "category": "Реклама",
    "source": "Моя библиотека",
    "visual": 10,
    "abbr": "HEAD",
    "index": 2
  },
  {
    "command": "/proshot",
    "title": "Профессиональный кадр",
    "category": "Обработка",
    "source": "Моя библиотека",
    "visual": 3,
    "abbr": "PROS",
    "index": 3
  },
  {
    "command": "/colorfix",
    "title": "Коррекция цвета",
    "category": "Обработка",
    "source": "Моя библиотека",
    "visual": 2,
    "abbr": "COLO",
    "index": 4
  },
  {
    "command": "/premiumshowcase",
    "title": "Премиальная витрина",
    "category": "Реклама",
    "source": "Моя библиотека",
    "visual": 0,
    "abbr": "PREM",
    "index": 5
  },
  {
    "command": "/infographic",
    "title": "Infographic",
    "category": "Продукт",
    "source": "Моя библиотека",
    "visual": 2,
    "abbr": "INFO",
    "index": 6
  },
  {
    "command": "/filmposter",
    "title": "Filmposter",
    "category": "Реклама",
    "source": "Моя библиотека",
    "visual": 6,
    "abbr": "FILM",
    "index": 7
  },
  {
    "command": "/hairstyle",
    "title": "Hairstyle",
    "category": "Персонаж",
    "source": "Моя библиотека",
    "visual": 9,
    "abbr": "HAIR",
    "index": 8
  },
  {
    "command": "/creativeads",
    "title": "Creativeads",
    "category": "Реклама",
    "source": "Моя библиотека",
    "visual": 9,
    "abbr": "CREA",
    "index": 9
  },
  {
    "command": "/levitation",
    "title": "Levitation",
    "category": "Продукт",
    "source": "Моя библиотека",
    "visual": 0,
    "abbr": "LEVI",
    "index": 10
  },
  {
    "command": "/splash",
    "title": "Эффектный всплеск",
    "category": "Продукт",
    "source": "Моя библиотека",
    "visual": 7,
    "abbr": "SPLA",
    "index": 11
  },
  {
    "command": "/goldenhour",
    "title": "Goldenhour",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 4,
    "abbr": "GOLD",
    "index": 12
  },
  {
    "command": "/neon",
    "title": "Neon",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 0,
    "abbr": "NEON",
    "index": 13
  },
  {
    "command": "/minimalist",
    "title": "Minimalist",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 4,
    "abbr": "MINI",
    "index": 14
  },
  {
    "command": "/luxury",
    "title": "Luxury",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 11,
    "abbr": "LUXU",
    "index": 15
  },
  {
    "command": "/streetstyle",
    "title": "Streetstyle",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 9,
    "abbr": "STRE",
    "index": 16
  },
  {
    "command": "/cinematic",
    "title": "Кинематографичный кадр",
    "category": "Продукт",
    "source": "Моя библиотека",
    "visual": 2,
    "abbr": "CINE",
    "index": 17
  },
  {
    "command": "/outdoor",
    "title": "Outdoor",
    "category": "Продукт",
    "source": "Моя библиотека",
    "visual": 1,
    "abbr": "OUTD",
    "index": 18
  },
  {
    "command": "/flatlay",
    "title": "Flatlay",
    "category": "Продукт",
    "source": "Моя библиотека",
    "visual": 1,
    "abbr": "FLAT",
    "index": 19
  },
  {
    "command": "/unboxing",
    "title": "Unboxing",
    "category": "Видео",
    "source": "Моя библиотека",
    "visual": 11,
    "abbr": "UNBO",
    "index": 20
  },
  {
    "command": "/lifestyle",
    "title": "Lifestyle",
    "category": "Продукт",
    "source": "Моя библиотека",
    "visual": 0,
    "abbr": "LIFE",
    "index": 21
  },
  {
    "command": "/seasonal",
    "title": "Seasonal",
    "category": "Продукт",
    "source": "Моя библиотека",
    "visual": 5,
    "abbr": "SEAS",
    "index": 22
  },
  {
    "command": "/miniature",
    "title": "Миниатюрный мир",
    "category": "Продукт",
    "source": "Моя библиотека",
    "visual": 11,
    "abbr": "MINI",
    "index": 23
  },
  {
    "command": "/claymation",
    "title": "Claymation",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 1,
    "abbr": "CLAY",
    "index": 24
  },
  {
    "command": "/popart",
    "title": "Popart",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 0,
    "abbr": "POPA",
    "index": 25
  },
  {
    "command": "/watercolor",
    "title": "Watercolor",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 11,
    "abbr": "WATE",
    "index": 26
  },
  {
    "command": "/pixelart",
    "title": "Pixelart",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 8,
    "abbr": "PIXE",
    "index": 27
  },
  {
    "command": "/lowpoly",
    "title": "Lowpoly",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 1,
    "abbr": "LOWP",
    "index": 28
  },
  {
    "command": "/holographic",
    "title": "Holographic",
    "category": "Продукт",
    "source": "Моя библиотека",
    "visual": 3,
    "abbr": "HOLO",
    "index": 29
  },
  {
    "command": "/chrome",
    "title": "Chrome",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 0,
    "abbr": "CHRO",
    "index": 30
  },
  {
    "command": "/glass",
    "title": "Glass",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 5,
    "abbr": "GLAS",
    "index": 31
  },
  {
    "command": "/marble",
    "title": "Marble",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 6,
    "abbr": "MARB",
    "index": 32
  },
  {
    "command": "/icecarved",
    "title": "Icecarved",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 5,
    "abbr": "ICEC",
    "index": 33
  },
  {
    "command": "/underwater",
    "title": "Underwater",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 3,
    "abbr": "UNDE",
    "index": 34
  },
  {
    "command": "/space",
    "title": "Space",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 0,
    "abbr": "SPAC",
    "index": 35
  },
  {
    "command": "/desert",
    "title": "Desert",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 6,
    "abbr": "DESE",
    "index": 36
  },
  {
    "command": "/jungle",
    "title": "Jungle",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 6,
    "abbr": "JUNG",
    "index": 37
  },
  {
    "command": "/retro80s",
    "title": "Retro80S",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 11,
    "abbr": "RETR",
    "index": 38
  },
  {
    "command": "/steampunk",
    "title": "Steampunk",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 9,
    "abbr": "STEA",
    "index": 39
  },
  {
    "command": "/papercraft",
    "title": "Бумажный стиль",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 3,
    "abbr": "PAPE",
    "index": 40
  },
  {
    "command": "/anatomy",
    "title": "Анатомия продукта",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 1,
    "abbr": "ANAT",
    "index": 41
  },
  {
    "command": "/exploded",
    "title": "Разбор по деталям",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 3,
    "abbr": "EXPL",
    "index": 42
  },
  {
    "command": "/crosssection",
    "title": "Crosssection",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 1,
    "abbr": "CROS",
    "index": 43
  },
  {
    "command": "/ingredients",
    "title": "Ingredients",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 1,
    "abbr": "INGR",
    "index": 44
  },
  {
    "command": "/blueprint",
    "title": "Blueprint",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 4,
    "abbr": "BLUE",
    "index": 45
  },
  {
    "command": "/schematic",
    "title": "Schematic",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 4,
    "abbr": "SCHE",
    "index": 46
  },
  {
    "command": "/sizechart",
    "title": "Sizechart",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 5,
    "abbr": "SIZE",
    "index": 47
  },
  {
    "command": "/comparison",
    "title": "Comparison",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 6,
    "abbr": "COMP",
    "index": 48
  },
  {
    "command": "/beforeafter",
    "title": "До и после",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 8,
    "abbr": "BEFO",
    "index": 49
  },
  {
    "command": "/howitworks",
    "title": "Как это работает",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 0,
    "abbr": "HOWI",
    "index": 50
  },
  {
    "command": "/stepbystep",
    "title": "Stepbystep",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 6,
    "abbr": "STEP",
    "index": 51
  },
  {
    "command": "/materials",
    "title": "Materials",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 0,
    "abbr": "MATE",
    "index": 52
  },
  {
    "command": "/specs",
    "title": "Specs",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 10,
    "abbr": "SPEC",
    "index": 53
  },
  {
    "command": "/timeline",
    "title": "Timeline",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 1,
    "abbr": "TIME",
    "index": 54
  },
  {
    "command": "/flowchart",
    "title": "Flowchart",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 11,
    "abbr": "FLOW",
    "index": 55
  },
  {
    "command": "/xray",
    "title": "Xray",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 6,
    "abbr": "XRAY",
    "index": 56
  },
  {
    "command": "/teardown",
    "title": "Teardown",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 6,
    "abbr": "TEAR",
    "index": 57
  },
  {
    "command": "/components",
    "title": "Components",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 4,
    "abbr": "COMP",
    "index": 58
  },
  {
    "command": "/features",
    "title": "Features",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 3,
    "abbr": "FEAT",
    "index": 59
  },
  {
    "command": "/instructions",
    "title": "Instructions",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 5,
    "abbr": "INST",
    "index": 60
  },
  {
    "command": "/assembly",
    "title": "Assembly",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 5,
    "abbr": "ASSE",
    "index": 61
  },
  {
    "command": "/measurements",
    "title": "Measurements",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 3,
    "abbr": "MEAS",
    "index": 62
  },
  {
    "command": "/prosandcons",
    "title": "Prosandcons",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 10,
    "abbr": "PROS",
    "index": 63
  },
  {
    "command": "/patentdrawing",
    "title": "Patentdrawing",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 3,
    "abbr": "PATE",
    "index": 64
  },
  {
    "command": "/manual",
    "title": "Manual",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 11,
    "abbr": "MANU",
    "index": 65
  },
  {
    "command": "/techsheet",
    "title": "Techsheet",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 7,
    "abbr": "TECH",
    "index": 66
  },
  {
    "command": "/originmap",
    "title": "Originmap",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 1,
    "abbr": "ORIG",
    "index": 67
  },
  {
    "command": "/nutrition",
    "title": "Nutrition",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 3,
    "abbr": "NUTR",
    "index": 68
  },
  {
    "command": "/composition",
    "title": "Composition",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 9,
    "abbr": "COMP",
    "index": 69
  },
  {
    "command": "/diagram",
    "title": "Diagram",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 3,
    "abbr": "DIAG",
    "index": 70
  },
  {
    "command": "/handwritten",
    "title": "Handwritten",
    "category": "Продукт",
    "source": "Моя библиотека",
    "visual": 10,
    "abbr": "HAND",
    "index": 71
  },
  {
    "command": "/labeled",
    "title": "Labeled",
    "category": "Инфографика",
    "source": "Моя библиотека",
    "visual": 8,
    "abbr": "LABE",
    "index": 72
  },
  {
    "command": "/oldify",
    "title": "Oldify",
    "category": "Персонаж",
    "source": "Моя библиотека",
    "visual": 1,
    "abbr": "OLDI",
    "index": 73
  },
  {
    "command": "/youngify",
    "title": "Youngify",
    "category": "Персонаж",
    "source": "Моя библиотека",
    "visual": 4,
    "abbr": "YOUN",
    "index": 74
  },
  {
    "command": "/cartoon",
    "title": "Cartoon",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 6,
    "abbr": "CART",
    "index": 75
  },
  {
    "command": "/anime",
    "title": "Anime",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 10,
    "abbr": "ANIM",
    "index": 76
  },
  {
    "command": "/pixarstyle",
    "title": "Pixarstyle",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 9,
    "abbr": "PIXA",
    "index": 77
  },
  {
    "command": "/oilportrait",
    "title": "Oilportrait",
    "category": "Персонаж",
    "source": "Моя библиотека",
    "visual": 9,
    "abbr": "OILP",
    "index": 78
  },
  {
    "command": "/renaissance",
    "title": "Renaissance",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 0,
    "abbr": "RENA",
    "index": 79
  },
  {
    "command": "/superhero",
    "title": "Superhero",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 11,
    "abbr": "SUPE",
    "index": 80
  },
  {
    "command": "/royal",
    "title": "Royal",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 10,
    "abbr": "ROYA",
    "index": 81
  },
  {
    "command": "/astronaut",
    "title": "Astronaut",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 10,
    "abbr": "ASTR",
    "index": 82
  },
  {
    "command": "/warrior",
    "title": "Warrior",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 10,
    "abbr": "WARR",
    "index": 83
  },
  {
    "command": "/wizard",
    "title": "Wizard",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 8,
    "abbr": "WIZA",
    "index": 84
  },
  {
    "command": "/vintagephoto",
    "title": "Vintagephoto",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 8,
    "abbr": "VINT",
    "index": 85
  },
  {
    "command": "/polaroid",
    "title": "Polaroid",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 10,
    "abbr": "POLA",
    "index": 86
  },
  {
    "command": "/blackandwhite",
    "title": "Blackandwhite",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 3,
    "abbr": "BLAC",
    "index": 87
  },
  {
    "command": "/sepia",
    "title": "Sepia",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 2,
    "abbr": "SEPI",
    "index": 88
  },
  {
    "command": "/neonportrait",
    "title": "Neonportrait",
    "category": "Персонаж",
    "source": "Моя библиотека",
    "visual": 10,
    "abbr": "NEON",
    "index": 89
  },
  {
    "command": "/popartportrait",
    "title": "Popartportrait",
    "category": "Персонаж",
    "source": "Моя библиотека",
    "visual": 11,
    "abbr": "POPA",
    "index": 90
  },
  {
    "command": "/comicportrait",
    "title": "Comicportrait",
    "category": "Персонаж",
    "source": "Моя библиотека",
    "visual": 7,
    "abbr": "COMI",
    "index": 91
  },
  {
    "command": "/watercolorportrait",
    "title": "Watercolorportrait",
    "category": "Персонаж",
    "source": "Моя библиотека",
    "visual": 8,
    "abbr": "WATE",
    "index": 92
  },
  {
    "command": "/statue",
    "title": "Statue",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 8,
    "abbr": "STAT",
    "index": 93
  },
  {
    "command": "/hologram",
    "title": "Hologram",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 3,
    "abbr": "HOLO",
    "index": 94
  },
  {
    "command": "/cyberpunk",
    "title": "Cyberpunk",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 0,
    "abbr": "CYBE",
    "index": 95
  },
  {
    "command": "/fantasyportrait",
    "title": "Fantasyportrait",
    "category": "Персонаж",
    "source": "Моя библиотека",
    "visual": 1,
    "abbr": "FANT",
    "index": 96
  },
  {
    "command": "/gamecharacter",
    "title": "Gamecharacter",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 1,
    "abbr": "GAME",
    "index": 97
  },
  {
    "command": "/avatarstyle",
    "title": "Avatarstyle",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 5,
    "abbr": "AVAT",
    "index": 98
  },
  {
    "command": "/pixelportrait",
    "title": "Pixelportrait",
    "category": "Персонаж",
    "source": "Моя библиотека",
    "visual": 0,
    "abbr": "PIXE",
    "index": 99
  },
  {
    "command": "/sketchportrait",
    "title": "Sketchportrait",
    "category": "Персонаж",
    "source": "Моя библиотека",
    "visual": 11,
    "abbr": "SKET",
    "index": 100
  },
  {
    "command": "/magazinecover",
    "title": "Magazinecover",
    "category": "Продукт",
    "source": "Моя библиотека",
    "visual": 3,
    "abbr": "MAGA",
    "index": 101
  },
  {
    "command": "/babyversion",
    "title": "Babyversion",
    "category": "Персонаж",
    "source": "Моя библиотека",
    "visual": 4,
    "abbr": "BABY",
    "index": 102
  },
  {
    "command": "/handwrittennote",
    "title": "Handwrittennote",
    "category": "Продукт",
    "source": "Моя библиотека",
    "visual": 5,
    "abbr": "HAND",
    "index": 103
  },
  {
    "command": "/newbg",
    "title": "Новый фон",
    "category": "Обработка",
    "source": "Моя библиотека",
    "visual": 1,
    "abbr": "NEWB",
    "index": 104
  },
  {
    "command": "/hdreel",
    "title": "Hdreel",
    "category": "Видео",
    "source": "Моя библиотека",
    "visual": 0,
    "abbr": "HDRE",
    "index": 105
  },
  {
    "command": "/together",
    "title": "Together",
    "category": "Персонаж",
    "source": "Моя библиотека",
    "visual": 9,
    "abbr": "TOGE",
    "index": 106
  },
  {
    "command": "/sunglasses",
    "title": "Sunglasses",
    "category": "Персонаж",
    "source": "Моя библиотека",
    "visual": 5,
    "abbr": "SUNG",
    "index": 107
  },
  {
    "command": "/lightfix",
    "title": "Lightfix",
    "category": "Обработка",
    "source": "Моя библиотека",
    "visual": 10,
    "abbr": "LIGH",
    "index": 108
  },
  {
    "command": "/sharpclean",
    "title": "Sharpclean",
    "category": "Обработка",
    "source": "Моя библиотека",
    "visual": 4,
    "abbr": "SHAR",
    "index": 109
  },
  {
    "command": "/restorephoto",
    "title": "Restorephoto",
    "category": "Обработка",
    "source": "Моя библиотека",
    "visual": 10,
    "abbr": "REST",
    "index": 110
  },
  {
    "command": "/cleanbg",
    "title": "Чистый фон",
    "category": "Обработка",
    "source": "Моя библиотека",
    "visual": 7,
    "abbr": "CLEA",
    "index": 111
  },
  {
    "command": "/studioify",
    "title": "Studioify",
    "category": "Обработка",
    "source": "Моя библиотека",
    "visual": 7,
    "abbr": "STUD",
    "index": 112
  },
  {
    "command": "/editorial",
    "title": "Редакционный стиль",
    "category": "Стили",
    "source": "Моя библиотека",
    "visual": 5,
    "abbr": "EDIT",
    "index": 113
  },
  {
    "command": "/profilepic",
    "title": "Profilepic",
    "category": "Персонаж",
    "source": "Моя библиотека",
    "visual": 8,
    "abbr": "PROF",
    "index": 114
  },
  {
    "command": "/passportplus",
    "title": "Passportplus",
    "category": "Персонаж",
    "source": "Моя библиотека",
    "visual": 7,
    "abbr": "PASS",
    "index": 115
  },
  {
    "command": "/beardstyle",
    "title": "Beardstyle",
    "category": "Персонаж",
    "source": "Моя библиотека",
    "visual": 4,
    "abbr": "BEAR",
    "index": 116
  },
  {
    "command": "/glasses",
    "title": "Glasses",
    "category": "Персонаж",
    "source": "Моя библиотека",
    "visual": 11,
    "abbr": "GLAS",
    "index": 117
  },
  {
    "command": "/outfitpreview",
    "title": "Outfitpreview",
    "category": "Персонаж",
    "source": "Моя библиотека",
    "visual": 10,
    "abbr": "OUTF",
    "index": 118
  },
  {
    "command": "/skinretouch",
    "title": "Ретушь кожи",
    "category": "Персонаж",
    "source": "Моя библиотека",
    "visual": 10,
    "abbr": "SKIN",
    "index": 119
  },
  {
    "command": "/cinereel",
    "title": "Кино-Reels",
    "category": "Видео",
    "source": "Моя библиотека",
    "visual": 1,
    "abbr": "CINE",
    "index": 120
  },
  {
    "command": "/3dbillboard",
    "title": "3D-билборд",
    "category": "Реклама",
    "source": "Дополнительно",
    "visual": 4,
    "abbr": "3DBI",
    "index": 121
  },
  {
    "command": "/citylight",
    "title": "Citylight",
    "category": "Реклама",
    "source": "Дополнительно",
    "visual": 0,
    "abbr": "CITY",
    "index": 122
  },
  {
    "command": "/busstopad",
    "title": "Busstopad",
    "category": "Реклама",
    "source": "Дополнительно",
    "visual": 9,
    "abbr": "BUSS",
    "index": 123
  },
  {
    "command": "/airportad",
    "title": "Airportad",
    "category": "Реклама",
    "source": "Дополнительно",
    "visual": 6,
    "abbr": "AIRP",
    "index": 124
  },
  {
    "command": "/subwayad",
    "title": "Subwayad",
    "category": "Реклама",
    "source": "Дополнительно",
    "visual": 3,
    "abbr": "SUBW",
    "index": 125
  },
  {
    "command": "/buswrap",
    "title": "Buswrap",
    "category": "Реклама",
    "source": "Дополнительно",
    "visual": 5,
    "abbr": "BUSW",
    "index": 126
  },
  {
    "command": "/storefront",
    "title": "Storefront",
    "category": "Реклама",
    "source": "Дополнительно",
    "visual": 5,
    "abbr": "STOR",
    "index": 127
  },
  {
    "command": "/guerrillaad",
    "title": "Guerrillaad",
    "category": "Реклама",
    "source": "Дополнительно",
    "visual": 0,
    "abbr": "GUER",
    "index": 128
  },
  {
    "command": "/phonemockup",
    "title": "Макет на смартфоне",
    "category": "Продукт",
    "source": "Дополнительно",
    "visual": 1,
    "abbr": "PHON",
    "index": 129
  },
  {
    "command": "/instagrammockup",
    "title": "Макет Instagram",
    "category": "Продукт",
    "source": "Дополнительно",
    "visual": 11,
    "abbr": "INST",
    "index": 130
  },
  {
    "command": "/telegrammockup",
    "title": "Макет Telegram",
    "category": "Продукт",
    "source": "Дополнительно",
    "visual": 4,
    "abbr": "TELE",
    "index": 131
  },
  {
    "command": "/iceberg",
    "title": "Iceberg",
    "category": "Инфографика",
    "source": "Дополнительно",
    "visual": 9,
    "abbr": "ICEB",
    "index": 132
  },
  {
    "command": "/funnel",
    "title": "Funnel",
    "category": "Инфографика",
    "source": "Дополнительно",
    "visual": 10,
    "abbr": "FUNN",
    "index": 133
  },
  {
    "command": "/matrix",
    "title": "Matrix",
    "category": "Инфографика",
    "source": "Дополнительно",
    "visual": 8,
    "abbr": "MATR",
    "index": 134
  },
  {
    "command": "/venndiagram",
    "title": "Venndiagram",
    "category": "Инфографика",
    "source": "Дополнительно",
    "visual": 6,
    "abbr": "VENN",
    "index": 135
  },
  {
    "command": "/comicstrip",
    "title": "Comicstrip",
    "category": "Продукт",
    "source": "Дополнительно",
    "visual": 6,
    "abbr": "COMI",
    "index": 136
  },
  {
    "command": "/herojourney",
    "title": "Herojourney",
    "category": "Продукт",
    "source": "Дополнительно",
    "visual": 6,
    "abbr": "HERO",
    "index": 137
  },
  {
    "command": "/dayinthelife",
    "title": "Dayinthelife",
    "category": "Видео",
    "source": "Дополнительно",
    "visual": 6,
    "abbr": "DAYI",
    "index": 138
  },
  {
    "command": "/pov",
    "title": "Pov",
    "category": "Видео",
    "source": "Дополнительно",
    "visual": 1,
    "abbr": "POV",
    "index": 139
  },
  {
    "command": "/loopstory",
    "title": "Loopstory",
    "category": "Видео",
    "source": "Дополнительно",
    "visual": 3,
    "abbr": "LOOP",
    "index": 140
  },
  {
    "command": "/surrealconcept",
    "title": "Surrealconcept",
    "category": "Продукт",
    "source": "Дополнительно",
    "visual": 0,
    "abbr": "SURR",
    "index": 141
  },
  {
    "command": "/hybridobject",
    "title": "Hybridobject",
    "category": "Продукт",
    "source": "Дополнительно",
    "visual": 5,
    "abbr": "HYBR",
    "index": 142
  },
  {
    "command": "/impossibleobject",
    "title": "Impossibleobject",
    "category": "Продукт",
    "source": "Дополнительно",
    "visual": 6,
    "abbr": "IMPO",
    "index": 143
  },
  {
    "command": "/personification",
    "title": "Personification",
    "category": "Продукт",
    "source": "Дополнительно",
    "visual": 11,
    "abbr": "PERS",
    "index": 144
  },
  {
    "command": "/papercut",
    "title": "Papercut",
    "category": "Стили",
    "source": "Дополнительно",
    "visual": 6,
    "abbr": "PAPE",
    "index": 145
  },
  {
    "command": "/isometric",
    "title": "Isometric",
    "category": "Стили",
    "source": "Дополнительно",
    "visual": 6,
    "abbr": "ISOM",
    "index": 146
  }
];