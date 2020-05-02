const videos = [{
        id: 'p9mqWsPJEY4',
        title: 'Teclado Mecânico é Melhor pra Programação? + Desafio de Youtubers Tech // Vlog #117',
        views: 37208
    },
    {
        id: 'Vxl5jUltHBo',
        title: 'Python na Prática fazendo Web Scraping (de JavaScript dinâmico) // Mão no Código #28',
        views: 22510
    },
    {
        id: 'Xzt7GbQIQTk',
        title: 'As TOP 7 Profissões de Tecnologia do Futuro (O PROGRAMADOR VAI ACABAR?) // Vlog #112',
        views: 34732
    },
]

const totalViews = videos.reduce((sum, video) => {
    return sum + video.views
}, 0)

console.log(totalViews)