function navSections() {
    const wrapper = document.querySelector('.wrapper');
    const components = document.querySelector('.components');
    const showAllNews = document.querySelector('.show-all-news');
    const showMain = document.querySelector('.show-main');
    const scrollPopular = document.querySelector('.scroll-popular');
    const AllNewsButton = document.querySelector('.all-news__button');
    const sections = document.querySelectorAll('.component');

    showAllNews.addEventListener('click', function () {
        wrapper.style.display = 'block'
        components.style.left = '-100%'
        sections[1].style.display = 'block'
        setTimeout(function () {
            sections[0].style.display = 'none'
        }, 300)

        window.scroll(
            {
                top: 0,
                behavior: 'smooth'
            }
        )
    })
    AllNewsButton.addEventListener('click', function () {
        wrapper.style.display = 'block'
        components.style.left = '-100%'
        sections[1].style.display = 'block'
        setTimeout(function () {
            sections[0].style.display = 'none'
        }, 300)

        window.scroll(
            {
                top: 0,
                behavior: 'smooth'
            }
        )
    })
    showMain.addEventListener('click', function () {
        wrapper.style.display = 'block'
        components.style.left = '0'
        sections[0].style.display = 'block'
        setTimeout(function () {
            sections[1].style.display = 'none'
        }, 300)
        window.scroll(
            {
                top: 0,
                behavior: 'smooth'
            }
        )
    })
}
navSections();
function scrollToPopular() {
    const link = document.querySelector('.scroll-popular');
    const section = document.querySelector('.popular-news')
    link.addEventListener('click', function () {
        window.scroll(
            {
                left: 0,
                top: section.offsetTop,
                behavior: 'smooth'
            }
        )
    })
}
scrollToPopular();
const news = [
    {
        title: 'Глава Башкирии назвал олимпийцев защитниками Родины',
        date: 'Февраль, 27 2022 15:49',
        popular: false,
        text: ''
    },
    {
        url: 'https://aur-vesti.info/articles/turizm/2022-03-02/v-kakih-stranah-mogut-otdohnut-zhiteli-bashkirii-rosturizm-2712293',
        title: 'В каких странах могут отдохнуть жители Башкирии - Ростуризм',
        date: 'Март, 02 2022 16:18',
        popular: false,
        text: ''
    },
    {
        url: 'https://aur-vesti.info/articles/proisshestviya/2022-03-02/ufimets-s-sudimostyu-vspomnil-proshloe-i-vzyalsya-za-nozh-2712344',
        title: 'Уфимец с судимостью вспомнил прошлое и взялся за нож',
        date: 'Март, 02 2022 16:28',
        popular: true,
        text: ''
    },
    {
        url: 'https://aur-vesti.info/articles/obshchestvo/2022-03-02/zhitel-bashkirii-rasskazal-kak-potratit-vyigrannyy-v-lotereyu-million-2712352',
        title: 'Житель Башкирии рассказал, как потратит выигранный в лотерею миллион',
        date: 'Март, 02 2022 16:46',
        popular: false,
        text: ''
    },
    {
        url: 'https://aur-vesti.info/news/sport/2022-03-02/v-aurgazinskom-rayone-proydet-prazdnik-sporta-lyzhnya-shlanly-2022-2712371',
        title: 'В Аургазинском районе пройдет праздник спорта «Лыжня Шланлы 2022»',
        date: 'Март, 02 2022 16:52',
        popular: false,
        text: ''
    },
];
lookNews = function() {
    
}
function content(callback) {
    const allNews = document.querySelector('.allnews__all-news-block');
    const sectionAllNews = document.querySelector('.main__all-news-block');
    const sectionPopularNews = document.querySelector('.popular-news-block');
    const sectionLastNews = document.querySelector('.last-news-block');
    const sectionLastNewsLeft = document.querySelector('.last-news-block__left');
    const sectionLastNewsRight = document.querySelector('.last-news-block__right');
    for (let i = 0; i < news.length; i++) {
        allNews.innerHTML += `
    <div class="default-news all-news-block__news all-news-item">
        <div class="default-news__cover" >
            <div class="default-news__blur" >
                <img src="img/newsPict/${i}.jpg" class="default-news__media-blur">
            </div>
            <img src="img/newsPict/${i}.jpg" class="default-news__media">
        </div>
        <p class="default-news__date">${news[i].date}</p>
        <h2 class="default-news__title">${news[i].title}</h2>
    </div>
    `
        if (i < 16) sectionAllNews.innerHTML += `
     <div class="default-news all-news-block__news default-news-item">
         <div class="default-news__cover">
            <div class="default-news__blur" >
                <img src="img/newsPict/${i}.jpg" class="default-news__media-blur" alt="1">
            </div>
            <img src="img/newsPict/${i}.jpg" class="default-news__media" alt="">
         </div>
         <p class="default-news__date">${news[i].date}</p>
         <h2 class="default-news__title">${news[i].title}</h2>
     </div>
     `;
        if (news[i].popular) {
            sectionPopularNews.innerHTML += `
    <div class="default-news all-news-block__news popular-news-item">
        <div class="default-news__cover popular-news-block__cover">
            <div class="default-news__blur" >
                <img src="img/newsPict/${i}.jpg" class="default-news__media-blur" alt="1">
            </div>
            <img src="img/newsPict/${i}.jpg" class="default-news__media" alt="">
        </div>
        <p class="default-news__date">${news[i].date}</p>
        <h2 class="default-news__title">${news[i].title}</h2>
    </div>
    `
        }

        if (i < 3) {
            const lastNews = document.createElement('div');
            lastNews.classList.add('last-news-block__news');
            lastNews.classList.add('look-last-news');
            const lastNewsTitle = document.createElement('h2');
            const lastNewsDate = document.createElement('p');
            lastNews.style.backgroundImage = `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 65.62%), url(img/newsPict/${i}.jpg)`;
            lastNewsTitle.innerHTML = news[i].title;
            lastNewsDate.innerHTML = news[i].date;
            if (i == 0) {
                lastNews.classList.add('last-news-block__news_left');
                lastNewsTitle.classList.add('last-news-block__title_left');
                lastNewsDate.classList.add('last-news-block__date_left');
                lastNews.appendChild(lastNewsTitle);
                lastNews.appendChild(lastNewsDate);
                sectionLastNewsLeft.appendChild(lastNews);
            }
            else {
                lastNews.classList.add('last-news-block__news_right');
                lastNewsTitle.classList.add('last-news-block__title_right');
                lastNewsDate.classList.add('last-news-block__date_right')
                lastNews.appendChild(lastNewsTitle);
                lastNews.appendChild(lastNewsDate);
                sectionLastNewsRight.appendChild(lastNews);
            }
        }
    }
    
    
    const allNewsItems = document.querySelectorAll('.all-news-item');
    const defaultNewsItems = document.querySelectorAll('.default-news-item');
    const popularNewsItems = document.querySelectorAll('.popular-news-item');
    const lastNewsItems = document.querySelectorAll('.look-last-news');
    const viewWindow = document.querySelector('.news-info');
    for (let i = 0; i < allNewsItems.length; i++) {
        allNewsItems[i].addEventListener('click', function () {
            console.log('click news')
            document.querySelectorAll('.news-info img').forEach((item) => {
                item.src = `img/newsPict/${i}.jpg`
            })
            document.querySelector('.news-info__date').innerHTML = news[i].date;
            document.querySelector('.news-info__title').innerHTML = news[i].title;
        viewWindow.style.display = 'block'
        })
    }
    for (let i = 0; i < defaultNewsItems.length; i++) {
        defaultNewsItems[i].addEventListener('click', function () {
            console.log('click news')
            document.querySelectorAll('.news-info img').forEach((item) => {
                item.src = `img/newsPict/${i}.jpg`
            })
            document.querySelector('.news-info__date').innerHTML = news[i].date;
            document.querySelector('.news-info__title').innerHTML = news[i].title;
        viewWindow.style.display = 'block'
        })
    }
    for (let i = 0; i < popularNewsItems.length; i++) {
        popularNewsItems[i].addEventListener('click', function () {
            console.log('click news')
            document.querySelectorAll('.news-info img').forEach((item) => {
                item.src = `img/newsPict/${i}.jpg`
            })
            document.querySelector('.news-info__date').innerHTML = news[i].date;
            document.querySelector('.news-info__title').innerHTML = news[i].title;
        viewWindow.style.display = 'block'
        })
    }
    for (let i = 0; i < lastNewsItems.length; i++) {
        lastNewsItems[i].addEventListener('click', function () {
            document.querySelectorAll('.news-info img').forEach((item) => {
                item.src = `img/newsPict/${i}.jpg`
            })
            document.querySelector('.news-info__date').innerHTML = news[i].date;
            document.querySelector('.news-info__title').innerHTML = news[i].title;
        viewWindow.style.display = 'block'
        })
    }
    const closeWindow = document.querySelector('.news-info__close');
    closeWindow.addEventListener('click', function() {
        viewWindow.style.display = 'none'
    })
    return callback();
}
content(lookNews);
