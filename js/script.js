"use strict";

window.addEventListener('DOMContentLoaded', () => {
    //TIMER
    const deadLine = '2022-02-17';

    function getDateRemaining(endTime) {
        const t = Date.parse(endTime) - Date.parse(new Date()), // получим время в миллисекундах (1000мс = 1сек)
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60)) % 24),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZeroTimer(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setTimer(selector, endTime) {
        const timer = document.querySelector(selector), //'.stock__component'
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateTimer, 1000);
        updateTimer();

        function updateTimer() {
            const t = getDateRemaining(endTime);

            days.innerHTML = getZeroTimer(t.days);
            hours.innerHTML = getZeroTimer(t.hours);
            minutes.innerHTML = getZeroTimer(t.minutes);
            seconds.innerHTML = getZeroTimer(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
    setTimer('.stock__timer', deadLine);

    //SERVISES
    const contentImg = document.querySelectorAll('.tabs__bg'),
        tabsheaderItems = document.querySelector('.tabs__items'),
        tabsheaderItem = document.querySelectorAll('.tabs__item'),
        tabheaderDescr = document.querySelectorAll('.tabs__descr');

    function hideImg() {
        contentImg.forEach(item => {
            // item.style.display = 'none';
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        tabsheaderItem.forEach(item => {
            item.classList.remove('tabs__item_active');
        });
        tabheaderDescr.forEach(item => {
            item.style.display = 'none';
        });
    }

    function showImg(i = 0) {
        // contentImg[i].style.display = 'block';
        contentImg[i].classList.add('show', 'fade');
        contentImg[i].classList.remove('hide');
        tabheaderDescr[i].style.display = 'block';
        tabsheaderItem[i].classList.add('tabs__item_active');
    }
    hideImg();
    showImg();

    function changeContent() {
        tabsheaderItems.addEventListener('click', (e) => {
            const target = e.target;
            if (target && target.classList.contains('tabs__item')) {
                tabsheaderItem.forEach((item, i) => {
                    if (target == item) {
                        hideImg();
                        showImg(i);
                    }
                });
            }
        });
    }
    changeContent();





    //     const tabscontent = document.querySelectorAll('.tabs__img'),
    //         tabsheader = document.querySelector('.tabs__items'),
    //         tabsheaderContent = document.querySelectorAll('.tabs__item');

    //     function hideTabsContent() {
    //         tabscontent.forEach(item => {
    //             item.style.display = 'none';
    //         });
    //         tabsheaderContent.forEach(item => {
    //             item.classList.remove('tabs__item_active');
    //         });
    //     }
    //     function showTabsContent(i = 0) {
    //         tabscontent[i].style.display = 'block';
    //         tabsheaderContent[i].classList.add('tabs__item_active');
    //     }
    //     hideTabsContent();
    //     showTabsContent();

    //     tabsheader.addEventListener('click', (e) => {
    //         const target = e.target;
    //         if (target && target.classList.contains('tabs__item')) {
    //             tabsheaderContent.forEach((item, i) => {
    //                 if (target == item) {
    //                     hideTabsContent();
    //                     showTabsContent(i)
    //                 }
    //             })
    //         }
    //     });
});