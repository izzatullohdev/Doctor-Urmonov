import { CardTypes, ServiceTypes, PatientTypes, InfoTypes, UsluguTypes, YearsTypes } from '../src/types';

export const CardData: CardTypes[] = [
    {
        id: 1,
        type: "Конференция",
        title: "Участие в международной конференции в Стамбуле",
        description: "Доктор Урмонов выступил с докладом на тему комбинированного лечения рака пищевода на Международной конференции по онкологии в Стамбуле. В докладе были представлены собственные клинические наблюдения и современные подходы в предоперационной терапии.",
        button: "Подробно",
        image: "https://res.cloudinary.com/dmgcfv5f4/image/upload/v1746812341/image_bvyszv.png",
        big_image: "https://res.cloudinary.com/dmgcfv5f4/image/upload/v1746860334/image_1_ql5tm3.png",
        images: [
            "https://res.cloudinary.com/dmgcfv5f4/image/upload/v1746860441/image_2_skgmwt.png",
            "https://res.cloudinary.com/dmgcfv5f4/image/upload/v1746860472/image_3_nkozfk.png",
            "https://res.cloudinary.com/dmgcfv5f4/image/upload/v1746860494/image_4_n4ta4t.png"
        ],
        full_title: "Доктор У.Б. Урмонов принял участие в одном из крупнейших международных событий в области онкологии — Международной конференции в Стамбуле, где собралось более 800 специалистов из 25 стран.",
        full_description: [
            `В рамках конференции доктор Урмонов выступил с научным докладом на тему:`,
            `«Комбинированное лечение рака пищевода с использованием предоперационной химиотерапии: клинический опыт и новые горизонты»`,
            `В докладе были освещены:`

        ],
        full_description_2: [
            `Собственные результаты клинических исследований, проведённых в НИИ онкологии в Томске;`,
            `Эффективность предоперационной химиотерапии при карциноме пищевода;`,
            `Практические рекомендации по выбору схем лечения в зависимости от стадии заболевания;`,
            `Актуальные подходы к послеоперационному наблюдению пациентов.`
        ],
        category: [
            "#онкология",
            "#конфереция"
        ],
        date: "18–20 май 2025 г",
        sub_title: [
            "Успешная операция по удалению опухоли печени",
            "Новая публикация в SCOPUS",
            "Победа на онкологическом конгрессе в Москве",
            "Успешная операция по удалению опухоли печени",
            "Новая публикация в SCOPUS",
            "Победа на онкологическом конгрессе в Москве"
        ],
        sub_description: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum saepe accusamus facilis ipsum et rerum tenetur, vel quasi nobis deleniti praesentium suscipit harum dolorum accusantium? Consectetur officiis praesentium autem ab?",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum saepe accusamus facilis ipsum et rerum tenetur, vel quasi nobis deleniti praesentium suscipit harum dolorum accusantium? Consectetur officiis praesentium autem ab?",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum saepe accusamus facilis ipsum et rerum tenetur, vel quasi nobis deleniti praesentium suscipit harum dolorum accusantium? Consectetur officiis praesentium autem ab?",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum saepe accusamus facilis ipsum et rerum tenetur, vel quasi nobis deleniti praesentium suscipit harum dolorum accusantium? Consectetur officiis praesentium autem ab?",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum saepe accusamus facilis ipsum et rerum tenetur, vel quasi nobis deleniti praesentium suscipit harum dolorum accusantium? Consectetur officiis praesentium autem ab?",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum saepe accusamus facilis ipsum et rerum tenetur, vel quasi nobis deleniti praesentium suscipit harum dolorum accusantium? Consectetur officiis praesentium autem ab?"
        ]
    },
    {
        id: 2,
        type: "Конференция",
        title: "Участие в международной конференции в Стамбуле",
        description: "Доктор Урмонов выступил с докладом на тему комбинированного лечения рака пищевода на Международной конференции по онкологии в Стамбуле. В докладе были представлены собственные клинические наблюдения и современные подходы в предоперационной терапии.",
        button: "Подробно",
        image: "https://res.cloudinary.com/dmgcfv5f4/image/upload/v1746812341/image_bvyszv.png",
        big_image: "https://res.cloudinary.com/dmgcfv5f4/image/upload/v1746860334/image_1_ql5tm3.png",
        images: [
            "https://res.cloudinary.com/dmgcfv5f4/image/upload/v1746860441/image_2_skgmwt.png",
            "https://res.cloudinary.com/dmgcfv5f4/image/upload/v1746860472/image_3_nkozfk.png",
            "https://res.cloudinary.com/dmgcfv5f4/image/upload/v1746860494/image_4_n4ta4t.png"
        ],
        full_title: "Доктор У.Б. Урмонов принял участие в одном из крупнейших международных событий в области онкологии — Международной конференции в Стамбуле, где собралось более 800 специалистов из 25 стран.",
        full_description: [
            `В рамках конференции доктор Урмонов выступил с научным докладом на тему:`,
            `«Комбинированное лечение рака пищевода с использованием предоперационной химиотерапии: клинический опыт и новые горизонты»`,
            `В докладе были освещены:`

        ],
        full_description_2: [
            `Собственные результаты клинических исследований, проведённых в НИИ онкологии в Томске;`,
            `Эффективность предоперационной химиотерапии при карциноме пищевода;`,
            `Практические рекомендации по выбору схем лечения в зависимости от стадии заболевания;`,
            `Актуальные подходы к послеоперационному наблюдению пациентов.`
        ],
        category: [
            "#онкология",
            "#конфереция"
        ],
        date: "18–20 май 2025 г",
        sub_title: [
            "Успешная операция по удалению опухоли печени",
            "Новая публикация в SCOPUS",
            "Победа на онкологическом конгрессе в Москве",
            "Успешная операция по удалению опухоли печени",
            "Новая публикация в SCOPUS",
            "Победа на онкологическом конгрессе в Москве"
        ],
        sub_description: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum saepe accusamus facilis ipsum et rerum tenetur, vel quasi nobis deleniti praesentium suscipit harum dolorum accusantium? Consectetur officiis praesentium autem ab?",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum saepe accusamus facilis ipsum et rerum tenetur, vel quasi nobis deleniti praesentium suscipit harum dolorum accusantium? Consectetur officiis praesentium autem ab?",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum saepe accusamus facilis ipsum et rerum tenetur, vel quasi nobis deleniti praesentium suscipit harum dolorum accusantium? Consectetur officiis praesentium autem ab?",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum saepe accusamus facilis ipsum et rerum tenetur, vel quasi nobis deleniti praesentium suscipit harum dolorum accusantium? Consectetur officiis praesentium autem ab?",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum saepe accusamus facilis ipsum et rerum tenetur, vel quasi nobis deleniti praesentium suscipit harum dolorum accusantium? Consectetur officiis praesentium autem ab?",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum saepe accusamus facilis ipsum et rerum tenetur, vel quasi nobis deleniti praesentium suscipit harum dolorum accusantium? Consectetur officiis praesentium autem ab?"
        ]
    },
    {
        id: 3,
        type: "Конференция",
        title: "Участие в международной конференции в Стамбуле",
        description: "Доктор Урмонов выступил с докладом на тему комбинированного лечения рака пищевода на Международной конференции по онкологии в Стамбуле. В докладе были представлены собственные клинические наблюдения и современные подходы в предоперационной терапии.",
        button: "Подробно",
        image: "https://res.cloudinary.com/dmgcfv5f4/image/upload/v1746812341/image_bvyszv.png",
        big_image: "https://res.cloudinary.com/dmgcfv5f4/image/upload/v1746860334/image_1_ql5tm3.png",
        images: [
            "https://res.cloudinary.com/dmgcfv5f4/image/upload/v1746860441/image_2_skgmwt.png",
            "https://res.cloudinary.com/dmgcfv5f4/image/upload/v1746860472/image_3_nkozfk.png",
            "https://res.cloudinary.com/dmgcfv5f4/image/upload/v1746860494/image_4_n4ta4t.png"
        ],
        full_title: "Доктор У.Б. Урмонов принял участие в одном из крупнейших международных событий в области онкологии — Международной конференции в Стамбуле, где собралось более 800 специалистов из 25 стран.",
        full_description: [
            `В рамках конференции доктор Урмонов выступил с научным докладом на тему:`,
            `«Комбинированное лечение рака пищевода с использованием предоперационной химиотерапии: клинический опыт и новые горизонты»`,
            `В докладе были освещены:`

        ],
        full_description_2: [
            `Собственные результаты клинических исследований, проведённых в НИИ онкологии в Томске;`,
            `Эффективность предоперационной химиотерапии при карциноме пищевода;`,
            `Практические рекомендации по выбору схем лечения в зависимости от стадии заболевания;`,
            `Актуальные подходы к послеоперационному наблюдению пациентов.`
        ],
        category: [
            "#онкология",
            "#конфереция"
        ],
        date: "18–20 май 2025 г",
        sub_title: [
            "Успешная операция по удалению опухоли печени",
            "Новая публикация в SCOPUS",
            "Победа на онкологическом конгрессе в Москве",
            "Успешная операция по удалению опухоли печени",
            "Новая публикация в SCOPUS",
            "Победа на онкологическом конгрессе в Москве"
        ],
        sub_description: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum saepe accusamus facilis ipsum et rerum tenetur, vel quasi nobis deleniti praesentium suscipit harum dolorum accusantium? Consectetur officiis praesentium autem ab?",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum saepe accusamus facilis ipsum et rerum tenetur, vel quasi nobis deleniti praesentium suscipit harum dolorum accusantium? Consectetur officiis praesentium autem ab?",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum saepe accusamus facilis ipsum et rerum tenetur, vel quasi nobis deleniti praesentium suscipit harum dolorum accusantium? Consectetur officiis praesentium autem ab?",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum saepe accusamus facilis ipsum et rerum tenetur, vel quasi nobis deleniti praesentium suscipit harum dolorum accusantium? Consectetur officiis praesentium autem ab?",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum saepe accusamus facilis ipsum et rerum tenetur, vel quasi nobis deleniti praesentium suscipit harum dolorum accusantium? Consectetur officiis praesentium autem ab?",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum saepe accusamus facilis ipsum et rerum tenetur, vel quasi nobis deleniti praesentium suscipit harum dolorum accusantium? Consectetur officiis praesentium autem ab?"
        ]
    },
    {
        id: 4,
        type: "Конференция",
        title: "Участие в международной конференции в Стамбуле",
        description: "Доктор Урмонов выступил с докладом на тему комбинированного лечения рака пищевода на Международной конференции по онкологии в Стамбуле. В докладе были представлены собственные клинические наблюдения и современные подходы в предоперационной терапии.",
        button: "Подробно",
        image: "https://res.cloudinary.com/dmgcfv5f4/image/upload/v1746812341/image_bvyszv.png",
        big_image: "https://res.cloudinary.com/dmgcfv5f4/image/upload/v1746860334/image_1_ql5tm3.png",
        images: [
            "https://res.cloudinary.com/dmgcfv5f4/image/upload/v1746860441/image_2_skgmwt.png",
            "https://res.cloudinary.com/dmgcfv5f4/image/upload/v1746860472/image_3_nkozfk.png",
            "https://res.cloudinary.com/dmgcfv5f4/image/upload/v1746860494/image_4_n4ta4t.png"
        ],
        full_title: "Доктор У.Б. Урмонов принял участие в одном из крупнейших международных событий в области онкологии — Международной конференции в Стамбуле, где собралось более 800 специалистов из 25 стран.",
        full_description: [
            `В рамках конференции доктор Урмонов выступил с научным докладом на тему:`,
            `«Комбинированное лечение рака пищевода с использованием предоперационной химиотерапии: клинический опыт и новые горизонты»`,
            `В докладе были освещены:`

        ],
        full_description_2: [
            `Собственные результаты клинических исследований, проведённых в НИИ онкологии в Томске;`,
            `Эффективность предоперационной химиотерапии при карциноме пищевода;`,
            `Практические рекомендации по выбору схем лечения в зависимости от стадии заболевания;`,
            `Актуальные подходы к послеоперационному наблюдению пациентов.`
        ],
        category: [
            "#онкология",
            "#конфереция"
        ],
        date: "18–20 май 2025 г",
        sub_title: [
            "Успешная операция по удалению опухоли печени",
            "Новая публикация в SCOPUS",
            "Победа на онкологическом конгрессе в Москве",
            "Успешная операция по удалению опухоли печени",
            "Новая публикация в SCOPUS",
            "Победа на онкологическом конгрессе в Москве"
        ],
        sub_description: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum saepe accusamus facilis ipsum et rerum tenetur, vel quasi nobis deleniti praesentium suscipit harum dolorum accusantium? Consectetur officiis praesentium autem ab?",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum saepe accusamus facilis ipsum et rerum tenetur, vel quasi nobis deleniti praesentium suscipit harum dolorum accusantium? Consectetur officiis praesentium autem ab?",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum saepe accusamus facilis ipsum et rerum tenetur, vel quasi nobis deleniti praesentium suscipit harum dolorum accusantium? Consectetur officiis praesentium autem ab?",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum saepe accusamus facilis ipsum et rerum tenetur, vel quasi nobis deleniti praesentium suscipit harum dolorum accusantium? Consectetur officiis praesentium autem ab?",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum saepe accusamus facilis ipsum et rerum tenetur, vel quasi nobis deleniti praesentium suscipit harum dolorum accusantium? Consectetur officiis praesentium autem ab?",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum saepe accusamus facilis ipsum et rerum tenetur, vel quasi nobis deleniti praesentium suscipit harum dolorum accusantium? Consectetur officiis praesentium autem ab?"
        ]
    },
    {
        id: 5,
        type: "Конференция",
        title: "Участие в международной конференции в Стамбуле",
        description: "Доктор Урмонов выступил с докладом на тему комбинированного лечения рака пищевода на Международной конференции по онкологии в Стамбуле. В докладе были представлены собственные клинические наблюдения и современные подходы в предоперационной терапии.",
        button: "Подробно",
        image: "https://res.cloudinary.com/dmgcfv5f4/image/upload/v1746812341/image_bvyszv.png",
        big_image: "https://res.cloudinary.com/dmgcfv5f4/image/upload/v1746860334/image_1_ql5tm3.png",
        images: [
            "https://res.cloudinary.com/dmgcfv5f4/image/upload/v1746860441/image_2_skgmwt.png",
            "https://res.cloudinary.com/dmgcfv5f4/image/upload/v1746860472/image_3_nkozfk.png",
            "https://res.cloudinary.com/dmgcfv5f4/image/upload/v1746860494/image_4_n4ta4t.png"
        ],
        full_title: "Доктор У.Б. Урмонов принял участие в одном из крупнейших международных событий в области онкологии — Международной конференции в Стамбуле, где собралось более 800 специалистов из 25 стран.",
        full_description: [
            `В рамках конференции доктор Урмонов выступил с научным докладом на тему:`,
            `«Комбинированное лечение рака пищевода с использованием предоперационной химиотерапии: клинический опыт и новые горизонты»`,
            `В докладе были освещены:`

        ],
        full_description_2: [
            `Собственные результаты клинических исследований, проведённых в НИИ онкологии в Томске;`,
            `Эффективность предоперационной химиотерапии при карциноме пищевода;`,
            `Практические рекомендации по выбору схем лечения в зависимости от стадии заболевания;`,
            `Актуальные подходы к послеоперационному наблюдению пациентов.`
        ],
        category: [
            "#онкология",
            "#конфереция"
        ],
        date: "18–20 май 2025 г",
        sub_title: [
            "Успешная операция по удалению опухоли печени",
            "Новая публикация в SCOPUS",
            "Победа на онкологическом конгрессе в Москве",
            "Успешная операция по удалению опухоли печени",
            "Новая публикация в SCOPUS",
            "Победа на онкологическом конгрессе в Москве"
        ],
        sub_description: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum saepe accusamus facilis ipsum et rerum tenetur, vel quasi nobis deleniti praesentium suscipit harum dolorum accusantium? Consectetur officiis praesentium autem ab?",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum saepe accusamus facilis ipsum et rerum tenetur, vel quasi nobis deleniti praesentium suscipit harum dolorum accusantium? Consectetur officiis praesentium autem ab?",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum saepe accusamus facilis ipsum et rerum tenetur, vel quasi nobis deleniti praesentium suscipit harum dolorum accusantium? Consectetur officiis praesentium autem ab?",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum saepe accusamus facilis ipsum et rerum tenetur, vel quasi nobis deleniti praesentium suscipit harum dolorum accusantium? Consectetur officiis praesentium autem ab?",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum saepe accusamus facilis ipsum et rerum tenetur, vel quasi nobis deleniti praesentium suscipit harum dolorum accusantium? Consectetur officiis praesentium autem ab?",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum saepe accusamus facilis ipsum et rerum tenetur, vel quasi nobis deleniti praesentium suscipit harum dolorum accusantium? Consectetur officiis praesentium autem ab?"
        ]
    },
    {
        id: 6,
        type: "Конференция",
        title: "Участие в международной конференции в Стамбуле",
        description: "Доктор Урмонов выступил с докладом на тему комбинированного лечения рака пищевода на Международной конференции по онкологии в Стамбуле. В докладе были представлены собственные клинические наблюдения и современные подходы в предоперационной терапии.",
        button: "Подробно",
        image: "https://res.cloudinary.com/dmgcfv5f4/image/upload/v1746812341/image_bvyszv.png",
        big_image: "https://res.cloudinary.com/dmgcfv5f4/image/upload/v1746860334/image_1_ql5tm3.png",
        images: [
            "https://res.cloudinary.com/dmgcfv5f4/image/upload/v1746860441/image_2_skgmwt.png",
            "https://res.cloudinary.com/dmgcfv5f4/image/upload/v1746860472/image_3_nkozfk.png",
            "https://res.cloudinary.com/dmgcfv5f4/image/upload/v1746860494/image_4_n4ta4t.png"
        ],
        full_title: "Доктор У.Б. Урмонов принял участие в одном из крупнейших международных событий в области онкологии — Международной конференции в Стамбуле, где собралось более 800 специалистов из 25 стран.",
        full_description: [
            `В рамках конференции доктор Урмонов выступил с научным докладом на тему:`,
            `«Комбинированное лечение рака пищевода с использованием предоперационной химиотерапии: клинический опыт и новые горизонты»`,
            `В докладе были освещены:`

        ],
        full_description_2: [
            `Собственные результаты клинических исследований, проведённых в НИИ онкологии в Томске;`,
            `Эффективность предоперационной химиотерапии при карциноме пищевода;`,
            `Практические рекомендации по выбору схем лечения в зависимости от стадии заболевания;`,
            `Актуальные подходы к послеоперационному наблюдению пациентов.`
        ],
        category: [
            "#онкология",
            "#конфереция"
        ],
        date: "18–20 май 2025 г",
        sub_title: [
            "Успешная операция по удалению опухоли печени",
            "Новая публикация в SCOPUS",
            "Победа на онкологическом конгрессе в Москве",
            "Успешная операция по удалению опухоли печени",
            "Новая публикация в SCOPUS",
            "Победа на онкологическом конгрессе в Москве"
        ],
        sub_description: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum saepe accusamus facilis ipsum et rerum tenetur, vel quasi nobis deleniti praesentium suscipit harum dolorum accusantium? Consectetur officiis praesentium autem ab?",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum saepe accusamus facilis ipsum et rerum tenetur, vel quasi nobis deleniti praesentium suscipit harum dolorum accusantium? Consectetur officiis praesentium autem ab?",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum saepe accusamus facilis ipsum et rerum tenetur, vel quasi nobis deleniti praesentium suscipit harum dolorum accusantium? Consectetur officiis praesentium autem ab?",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum saepe accusamus facilis ipsum et rerum tenetur, vel quasi nobis deleniti praesentium suscipit harum dolorum accusantium? Consectetur officiis praesentium autem ab?",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum saepe accusamus facilis ipsum et rerum tenetur, vel quasi nobis deleniti praesentium suscipit harum dolorum accusantium? Consectetur officiis praesentium autem ab?",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum saepe accusamus facilis ipsum et rerum tenetur, vel quasi nobis deleniti praesentium suscipit harum dolorum accusantium? Consectetur officiis praesentium autem ab?"
        ]
    }
]

export const ServiceData: ServiceTypes[] = [
    {
        id: 1,
        image: "https://res.cloudinary.com/dmgcfv5f4/image/upload/v1746869497/image_5_jwsgfq.png",
        title: "Грудная хирургия",
        description: [
            "Грудная (торакальная) хирургия — это направление хирургии, занимающееся диагностикой и оперативным лечением заболеваний органов грудной клетки: лёгких, плевры, средостения, трахеи, пищевода и грудной стенки.",
            "В нашей клинике проводятся как плановые, так и экстренные операции с применением современных методик: видеоторакоскопия, малоинвазивные вмешательства, а также открытые оперативные вмешательства в сложных случаях.",
            "Когда необходима консультация торакального хирурга?"
        ],
        full_description: [
            "Новообразования в лёгких или плевре",
            "Хронические заболевания органов дыхания",
            "Накопление жидкости в плевральной полости",
            "Подозрение на онкологические процессы в грудной клетке",
            "Травмы груди или рёбер",
            "Врожденные аномалии грудной клетки",
            "Основные виды операций:",
            "Атипичная резекция лёгкого",
            "Лобэктомия (удаление доли лёгкого)",
            "Диагностическая торакоскопия с биопсией",
            "Удаление опухолей средостения",
            "Тимэктомия (удаление вилочковой железы)",
            "Резекция рёбер с пластикой",
            "Лечение плевритов и плевральных выпотов",
            ""
        ],
        big_title: "Почему выбирают нас?",
        full_description_2: [
            "Опытный онкохирург с высшей категорией",
            "Минимально инвазивные и щадящие методы",
            "Современное оборудование",
            "Индивидуальный подход к каждому пациенту"
        ],
        sub_description: "При любых жалобах, связанных с органами грудной клетки, своевременная консультация специалиста мож",
        desc_title: [
            "Абдоминальная хирургия (органов живота)",
            "Колоректальная хирургия",
            "Паллиативная хирургия и поддерживающие процедуры",
            "Абдоминальная хирургия (органов живота)",
            "Колоректальная хирургия",
            "Паллиативная хирургия и поддерживающие процедуры"
        ],
        desc: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum saepe accusamus facilis ipsum et rerum tenetur, vel quasi nobis deleniti praesentium suscipit harum dolorum accusantium? Consectetur officiis praesentium autem ab?",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum saepe accusamus facilis ipsum et rerum tenetur, vel quasi nobis deleniti praesentium suscipit harum dolorum accusantium? Consectetur officiis praesentium autem ab?",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum saepe accusamus facilis ipsum et rerum tenetur, vel quasi nobis deleniti praesentium suscipit harum dolorum accusantium? Consectetur officiis praesentium autem ab?",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum saepe accusamus facilis ipsum et rerum tenetur, vel quasi nobis deleniti praesentium suscipit harum dolorum accusantium? Consectetur officiis praesentium autem ab?",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum saepe accusamus facilis ipsum et rerum tenetur, vel quasi nobis deleniti praesentium suscipit harum dolorum accusantium? Consectetur officiis praesentium autem ab?",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum saepe accusamus facilis ipsum et rerum tenetur, vel quasi nobis deleniti praesentium suscipit harum dolorum accusantium? Consectetur officiis praesentium autem ab?"
        ]
    }
]

export const PatientData: PatientTypes[] = [
    {
        id: 1,
        title: "Анна Петрова",
        description: "“Поступила на консультацию с тревогой, но доктор Урмонов сразу внушил доверие. После обследования всё подробно объяснил, подобрал оптимальный план лечения. Операция прошла успешно. Сейчас чувствую себя отлично. Благодарю за чуткость и профессионализм!”",
        image: "https://res.cloudinary.com/dmgcfv5f4/image/upload/v1746879110/image_6_tbexpc.png",
    },
    {
        id: 2,
        title: "Анна Петрова",
        description: "“Поступила на консультацию с тревогой, но доктор Урмонов сразу внушил доверие. После обследования всё подробно объяснил, подобрал оптимальный план лечения. Операция прошла успешно. Сейчас чувствую себя отлично. Благодарю за чуткость и профессионализм!”",
        image: "https://res.cloudinary.com/dmgcfv5f4/image/upload/v1746879110/image_6_tbexpc.png",
    },
    {
        id: 3,
        title: "Анна Петрова",
        description: "“Поступила на консультацию с тревогой, но доктор Урмонов сразу внушил доверие. После обследования всё подробно объяснил, подобрал оптимальный план лечения. Операция прошла успешно. Сейчас чувствую себя отлично. Благодарю за чуткость и профессионализм!”",
        image: "https://res.cloudinary.com/dmgcfv5f4/image/upload/v1746879110/image_6_tbexpc.png",
    },
    {
        id: 4,
        title: "Анна Петрова",
        description: "“Поступила на консультацию с тревогой, но доктор Урмонов сразу внушил доверие. После обследования всё подробно объяснил, подобрал оптимальный план лечения. Операция прошла успешно. Сейчас чувствую себя отлично. Благодарю за чуткость и профессионализм!”",
        image: "https://res.cloudinary.com/dmgcfv5f4/image/upload/v1746879110/image_6_tbexpc.png",
    },
];

export const InfoData: InfoTypes[] = [
    {
        id: 1,
        title: "Как записаться на приём к доктору Урмонову?",
        description: "Вы можете записаться через форму обратной связи на сайте, по телефону, или написав нам в Telegram. Все контакты указаны в разделе «Связаться с нами»."
    },
    {
        id: 2,
        title: "Как записаться на приём к доктору Урмонову?",
        description: "Для записи к доктору необходим только ваш паспорт или ID-карта. Если у вас есть направление от другого врача, пожалуйста, возьмите его с собой."
    },
    {
        id: 3,
        title: "Как записаться на приём к доктору Урмонову?",
        description: "Клиника находится по адресу: г. Ташкент, улица Согломавлод, 12. Подробная карта указана в разделе «Контакты»."
    },
    {
        id: 4,
        title: "Как записаться на приём к доктору Урмонову?",
        description: "Вы можете отменить запись, позвонив по номеру клиники или написав нам в Telegram не позднее чем за 12 часов до приёма."
    },
    {
        id: 5,
        title: "Как записаться на приём к доктору Урмонову?",
        description: "Да, доктор Урмонов принимает пациентов и по субботам. Расписание вы можете уточнить у администратора."
    },
    {
        id: 6,
        title: "Как записаться на приём к доктору Урмонову?",
        description: "Да, мы предоставляем онлайн-консультации через Zoom или Telegram. Предварительная запись обязательна."
    }
];

export const UsluguData: UsluguTypes[] = [
    {
        id: 1,
        image: "https://res.cloudinary.com/dmgcfv5f4/image/upload/v1747049401/image_2025-04-22_23-53-16_qcmt3n.png",
        title: "Торакальные операции:",
        description: [
            "резекция легкого (атипичная резекция, лобэктомия, пульмонэктомия)",
            "диагностическая торакоспия с биопсией.",
            "диагностическая торакоспия с атпичной резекцией легкого,",
            "резекция ребра с пластикой,",
            "тимэктомия,",
            "удаление образований средостения,"
        ],
        button: "Подробно"
    },
    {
        id: 2,
        image: "https://res.cloudinary.com/dmgcfv5f4/image/upload/v1747049444/image_2025-04-22_23-56-11_eqnal8.png",
        title: "Абдоминальные операции:",
        description: [
            "Открытая гастрэктомия с лимфодиссекцией D2",
            "Открытая субтотальная резекция желудка с лимфодиссекцией D2,",
            "Диагностическая лапароскопия.",
            "Лапароскопическая и открытая брюшно-промежностная экстирпация прямой кишки",
            "Лапароскопическая передняя резекция прямой кишки",
            "Лапароскопическая резекция сигмовидной кишки"
        ],
        button: "Подробно"
    },
    {
        id: 3,
        image: "https://res.cloudinary.com/dmgcfv5f4/image/upload/v1747049444/image_2025-04-22_23-56-11_eqnal8.png",
        title: "Абдоминальные операции (2):",
        description: [
            "Открытая гастрэктомия с лимфодиссекцией D2",
            "Открытая субтотальная резекция желудка с лимфодиссекцией D2,",
            "Диагностическая лапароскопия.",
            "Лапароскопическая и открытая брюшно-промежностная экстирпация прямой кишки",
            "Лапароскопическая передняя резекция прямой кишки",
            "Лапароскопическая резекция сигмовидной кишки"
        ],
        button: "Подробно"
    }
]

export const YearsData: YearsTypes[] = [
    {
        id: 1,
        years: 2013,
        title: "Окончил лечебный факультет Таджикского государственного медицинского университета им. Абуали ибни Сино по специальности «лечебное дело». Получил квалификацию врача."
    },
    {
        id: 2, 
        years: 2014,
        title: "Прошел интернатуру по специальности «онкология» на кафедре онкологии ТГМУ на базе Республиканского онкологического научного центра."
    },
    {
        id: 3,
        years: 2015,
        title: "Обучался в клинической ординатуре по онкологии на базе отделения абдоминальной онкологии НИИ онкологии Томского НИМЦ РАН (Россия)."
    },
    {
        id: 4,
        years: 2019,
        title: "Диплом II степени Конкурс научных работ по онкологии г. Владивосток, 22–26 апреля 1-е место за постерный докладXXIII Российский онкологический конгресс г. Москва, 12–14 ноября"
    },
    {
        id: 5,
        years: 2020,
        title: "Досрочно защитил кандидатскую диссертацию на тему:«Комбинированное лечение рака пищевода с использованием предоперационной химиотерапии» Присуждена ученая степень кандидата медицинских наук по специальности 14.01.12 – онкология.Министерство науки и высшего образования Российской Федерации."
    },
    {
        id: 6,
        years: "Членство в профессиональных сообществах:",
        title:`American Society of Clinical Oncology (ASCO) European Society for Medical Oncology (ESMO) Russian Society of Clinical Oncology (RUSSCO) Российское общество колоректальных хирургов (РОКХ) Ассоциация онкологов Узбекистана (АОУз)`
    },
    {
        id: 7,
        years: "Научная деятельность:",
        title: `Автор более 80 оригинальных научных публикаций За последние 2 года — 14 статей, индексируемых в SCOPUS, ядре РИНЦ, ВАК РФ и других научных базах`
    },
    {
        id: 8,
        years: "В настоящее время",
        title: `Ассистент кафедры "Детская онкология и паллиативная помощь" Ташкентский педиатрический медицинский институт, г. Ташкент, Узбекистан`
    },
    {
        id: 9,
        years: "В настоящее время",
        title: "торакоабдоминальный хирург отделения торакоабдоминальной онкологии и рентгенохирургии Ташкентского городского филиала РСНПМЦОиР"
    }
]