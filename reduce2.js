const videos = [{
        id: 'p9mqWsPJEY4',
        title: 'Teclado Mecânico é Melhor pra Programação? + Desafio de Youtubers Tech // Vlog #117',
        views: 37208,
        likes: 1000
    },
    {
        id: 'Vxl5jUltHBo',
        title: 'Python na Prática fazendo Web Scraping (de JavaScript dinâmico) // Mão no Código #28',
        views: 22510,
        likes: 5000
    },
    {
        id: 'Xzt7GbQIQTk',
        title: 'As TOP 7 Profissões de Tecnologia do Futuro (O PROGRAMADOR VAI ACABAR?) // Vlog #112',
        views: 34732,
        likes: 5700
    },
]

const totalViews = videos.reduce((sum, video) => {
    sum.views += video.views
    sum.likes += video.likes
    return sum
}, {
    views: 0,
    likes: 0
})

console.log(totalViews)