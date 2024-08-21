document.addEventListener("DOMContentLoaded", (event) => {
    var $hbEl = $('html, body');

    /* 관리자 */

    $('.admin_gnb > li').each(function() {
        var depth2Menu = $(this).find('.depth2');
        if(depth2Menu.find('.depth3').length > 0) {
            $(this).addClass('is_depth');
        }
    });

    $('.admin_gnb > li > a').on('click', function(e) {
        e.preventDefault();
        $(this).parent().addClass('on').siblings().removeClass('on');
        $('.admin_gnb .depth2').stop().slideUp(200);
        if($(this).parent().hasClass('on')) {
            $(this).siblings().stop().slideDown(200);
        }
    });

    $('.admin_gnb .depth2 > li > a').on('click', function(e) {
        e.preventDefault();
        $(this).parent().addClass('on').siblings().removeClass('on');
        $('.admin_gnb .depth3').stop().slideUp(200);
        if ($(this).parent().hasClass('on')) {
            $(this).siblings('.depth3').stop().slideDown(200);
        }
    });

    // 스크롤 시 헤더 이동
    function headerScroll() {
        var headerLeft = - $(this).scrollLeft();

        $('.body_admin #header').css({
            'transform' : 'translate3d(' + headerLeft + 'px, 0, 0)'
        });
    }
    $(window).on('scroll', function() {
        headerScroll();
    }).trigger('scroll');

    // 알림팝업 토글버튼
    $('.btn_noti').on('click', function() {
        $(this).toggleClass('on');
        $('.pop_noti').toggleClass('on').stop().fadeToggle(100);
    });

    // 알림팝업 닫기버튼
    $('.btn_noti_close').on('click', function() {
        $('.btn_noti').removeClass('on');
        $('.pop_noti').removeClass('on').stop().fadeOut(100);
    });

    // 메뉴 카테고리 toggle
    $('.menu_list_box .btn_folder').on('click', function(e) {
        e.stopPropagation();
        $(this).parent().parent().parent().toggleClass('on');
    });
    $('.list_menu1 > li > .menu').on('click', function() {
        $(this).parent().addClass('on');
    });
    $('.list_menu2 > li > .menu').on('click', function() {
        $(this).parent().addClass('on');
    });

    // 미사용 카테고리 toggle
    $('.btn_disable_menu').on('click', function() {
        $('.disable_menu_wrap').toggleClass('on')
    });
    
    // 댓글펼치기
    $('.btn_reply_toggle').on('click', function() {
        $(this).toggleClass('on');
        $(this).siblings().toggleClass('hide');
    });

    // 문자 프리셋 창 열기
    $('.btn_preset_open').on('click', function() {
        $('.pop_group_msg').addClass('on_preset');
    });
    $('.btn_preset_close').on('click', function() {
        $('.pop_group_msg').removeClass('on_preset');
    });








    /* 사용자 */

    // 사용자 헤더
    $('.body_user #header .gnb > li > a').on('mouseenter', function() {
        $(this).siblings('.depth2').stop().fadeIn(200);
        $(this).siblings('.gnb_img').stop().fadeIn(200);

        if(document.querySelector('.sub_page')) {
            header.classList.remove('color_header');
        }
    });
    $('.body_user #header .gnb > li').on('mouseleave', function() {
        $(this).find('.depth2').stop().fadeOut(200);
        $(this).find('.gnb_img').stop().fadeOut(200);

        if(document.querySelector('.sub_page')) {
            header.classList.add('color_header');
        }
    });
    $('.body_user #header .gnb .depth2 > li > a').on('click', function() {
        $(this).parent('.is_depth').toggleClass('on')
        $(this).siblings('.depth3').stop().slideToggle(200);
    });

    // 모바일메뉴
    $('.btn_m').on('click', function() {
        $(this).toggleClass('on');
        $('.m_gnb_wrap').toggleClass('on');
        // $('.m_gnb_wrap').stop().fadeToggle();
    });
    
    // 모바일gnb depth 열고 닫기
    $('.m_gnb > li > a').on('click', function(e) {
        if(!$(this).parent().hasClass('is_depth')) {
            return;
        }
        e.preventDefault();
        $('.m_gnb .depth2 .is_depth').removeClass('on');
        $('.m_gnb .depth2').stop().slideUp(200);
        $('.m_gnb .depth3').stop().slideUp(200);
        
        $(this).parent().toggleClass('on').siblings().removeClass('on');
        if($(this).parent().hasClass('on')) {
            $(this).siblings().stop().slideDown(200);
        }
    });
    $('.m_gnb .depth2 > li > a').on('click', function(e) {
        if(!$(this).parent().hasClass('is_depth')) {
            return;
        }
        e.preventDefault();
        $('.m_gnb .depth2 .is_depth').removeClass('on');
        $('.m_gnb .depth3').stop().slideUp(200);
        
        $(this).parent().toggleClass('on').siblings().removeClass('on');
        if($(this).parent().hasClass('on')) {
            $(this).siblings().stop().slideDown(200);
        }
    });

    // 댓글 모바일에서 수정삭제버튼 토글
    $('.btn_comment_util').on('click', function() {
        $('.comment_util').stop().fadeOut(100);
        $(this).siblings('.comment_util').stop().fadeToggle(100);
    });



    // 사용자
    const header = document.getElementById('header');
    const footer = document.getElementById('footer');
    const mainSection = document.querySelectorAll('.main_section');
    const mainSection1 = document.querySelector('.main_section1');
    const mainSection2 = document.querySelector('.main_section2');
    const mainSection3 = document.querySelector('.main_section3');
    const mainSection4 = document.querySelector('.main_section4');
    const mainSection5 = document.querySelector('.main_section5');
    const mainSection6 = document.querySelector('.main_section6');
    const mainSection7 = document.querySelector('.main_section7');
    const mainSection9 = document.querySelector('.main_section9');
    const mainSection10 = document.querySelector('.main_section10');
    const main3Items = mainSection3.querySelectorAll('.list_item li');
    const main5Items = mainSection5.querySelectorAll('.slide');
    const hoverSections = mainSection2.querySelectorAll('.hover_section');
    const main2linkTabs = mainSection2.querySelectorAll('.link_tab li');
    const main4Items = mainSection4.querySelectorAll('.list_item li');
    const main4ItemsButton = mainSection4.querySelectorAll('.btn_wrap button');
    const main4ItemsImage = mainSection4.querySelectorAll('.img > div');
    const main6ItemsImage = mainSection6.querySelectorAll('.img > div');
    const main6ItemsButton = mainSection6.querySelectorAll('.list_item2 button');
    const main6ItemsPic = mainSection6.querySelectorAll('.img_pic_wrap .pic > div');
    const stickyWrapSection = document.querySelector('.sticky_section');
    const stickySections = stickyWrapSection.querySelectorAll('.main_section');
    const mainSectionGoLink = stickyWrapSection.querySelectorAll('.list_link_pagination button');
    const btnTop = document.querySelector('.btn_top');


    // sticky부분 섹션이동
    const stickySectionHeights = [];
    const calculateSectionHeights = () => {
        stickySectionHeights.length = 0; // 기존 배열 초기화
        stickySections.forEach(section => {
            const sectionHeight = section.clientHeight;
            stickySectionHeights.push(sectionHeight);
        });
    };

    const calculateSectionOffsets = () => {
        return stickySectionHeights.map((height, index) => {
            let offset = stickyWrapSection.offsetTop;
    
            for (let i = 0; i < index; i++) {
                offset += stickySectionHeights[i];
            }
    
            return offset;
        });
    };

    let sectionOffsets = [];

    const updateOffsets = () => {
        calculateSectionHeights();
        sectionOffsets = calculateSectionOffsets();
    };

    // 초기 로드 시 계산
    updateOffsets();

    mainSectionGoLink.forEach((button, index) => {
        button.addEventListener('click', () => {
            let targetSectionIndex;

            if (index % 3 === 0) {
                targetSectionIndex = 0;
            } else if (index % 3 === 1) {
                targetSectionIndex = 1;
            } else {
                targetSectionIndex = 2;
            }

            window.scrollTo({
                top: sectionOffsets[targetSectionIndex],
                behavior: 'smooth'
            });
        });
    });

    // fade애니메이션 함수
    const animateElement = (element, type, callback) => {
        const startOpacity = type === 'fadeIn' ? 0 : 1;
        const endOpacity = type === 'fadeIn' ? 1 : 0;
        const duration = 400;
        let startTime = null;

        const animationStep = (timestamp) => {
            if (!startTime) {
                startTime = timestamp;
            }

            const progress = timestamp - startTime;
            let opacity = startOpacity + (progress / duration) * (endOpacity - startOpacity);

            opacity = Math.min(Math.max(opacity, 0), 1);
            element.style.opacity = opacity.toFixed(2);

            if (progress < duration) {
                requestAnimationFrame(animationStep);
            } else {
                if (typeof callback === 'function') {
                    callback();
                }
            }
        }

        requestAnimationFrame(animationStep);
    }


    // 탑버튼 클릭 이동
    if(btnTop) {
        btnTop.addEventListener('click', () => {
            document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }
    // 탑버튼 애니메이션
    let btnTopFlag = false;
    const topRectFn = () => {
        if(btnTop) {
            const section9rect = mainSection9.getBoundingClientRect();
            const section2rect = mainSection2.getBoundingClientRect();
    
            if (section2rect.top <= 0) {
                if (!btnTopFlag) { 
                    btnTop.classList.add('show');
                    animateElement(btnTop, 'fadeIn');
                    btnTopFlag = !btnTopFlag;
                }
            } else {
                if (btnTopFlag) {
                    animateElement(btnTop, 'fadeOut', () => {
                        btnTop.classList.remove('show');
                    });
                    btnTopFlag = !btnTopFlag;
                }
            }
    
            if(section9rect.top + section9rect.height - window.innerHeight <= 0) {
                btnTop.classList.add('on');
            } else {
                btnTop.classList.remove('on');
            }
        }
    }
    topRectFn();

    // 메인
    if(document.querySelector('.page_user_main')) {
        const swiperMain = new Swiper('.main_slider', {
            speed: 1500,
            loop: true,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            navigation: {
                nextEl: '.main_slider_wrap .swiper-button-next',
                prevEl: '.main_slider_wrap .swiper-button-prev',
            },
            autoplay: {
                delay: 5000,
            },
            pagination: {
                el: '.main_slider_wrap .swiper-pagination',
                type: 'bullets',
            },
            on: {
                slideChange: function () {
                    let activeIndex = this.realIndex;
                    document.querySelectorAll('.list_slide_txt li').forEach((el) => {
                        el.classList.remove('on');
                    });
        
                    document.querySelector(`.list_slide_txt li:nth-child(${activeIndex + 1})`).classList.add('on');
                },
            },
        });
        
        swiperMain.autoplay.pause();
        const swiperMainStart = () => {
            mainSection1.classList.add('on');
            swiperMain.autoplay.start();
            header.classList.add('on');
        }

        if(mainSection1) {
            setTimeout(() => {
                if(!mainSection1.classList.contains('on')) {
                    swiperMainStart();
                }
            }, 13500);
        }

        // 메인섹션1 스킵버튼
        if(document.querySelector('.btn_ani_skip')) {
            document.querySelector('.btn_ani_skip').addEventListener('click', () => {
                swiperMainStart();
            });
        }

        // 메인섹션 on
        const mainSectionOn = () => {
            const windowHeight = document.documentElement.clientHeight;
            mainSection.forEach((element, index) => {
                const currentTop = element.getBoundingClientRect().top;
                if (currentTop < windowHeight * 0.5) {
                    mainSection[index].classList.add('on');
                }
            });
        }

        // 메인 섹션2
        const mainSection2Scroll = () => {
            mainSection2.querySelectorAll('.hover_section').forEach((element, index) => {
                const currentTop = element.getBoundingClientRect().top;
                const windowHeight = document.documentElement.clientHeight;
    
                if (currentTop >= 0 && currentTop < windowHeight * 0.5) {
                    main2linkTabs.forEach(el => el.classList.remove('on'));
                    if (main2linkTabs[index]) {
                        main2linkTabs[index].classList.add('on');
                    }
                }
            });
        }
        mainSection2Scroll();
        main2linkTabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                const targetSection = hoverSections[index];
                const firstTargetSection = mainSection2.offsetTop;

                if(index === 0) {
                    window.scrollTo({
                        top: firstTargetSection,
                        behavior: 'smooth'
                    });
                } else {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        // hoverTxtBox.addEventListener('mouseenter', (e) => {
            //     hoverTxtBox.classList.add('off');
            //     animateElement(hoverTxtBox, 'fadeOut', () => {
                //         hoverTxtBox.style.display = 'none';
                //     });
                // });
                
                // mainSection2.querySelectorAll('.hover_section .box').forEach((element) => {
                    //     element.addEventListener('mouseenter', (e) => {
                        //         alert('.box')
                        //         document.querySelectorAll('.main_section .hover_section .box').forEach((el) => {
                            //             el.classList.remove('on');
                            //         });
                            //         e.currentTarget.classList.add('on');
                            //     });
                            
                            //     element.addEventListener('animationend', (e) => {
                                //         e.currentTarget.closest('.hover_section').classList.add('hover');
        //     });
        // });
        
        
        const hoverTxtBox = mainSection2.querySelector('.hover_txt_box');
        const handleHoverTxtBoxEvent = (e) => {
            hoverTxtBox.classList.add('off');
            animateElement(hoverTxtBox, 'fadeOut', () => {
                hoverTxtBox.style.display = 'none';
            });
        };
    
        const handleBoxMouseEnterEvent = (e) => {
            document.querySelectorAll('.main_section2 .hover_section .box').forEach((el) => {
                el.classList.remove('on');
            });
            e.currentTarget.classList.add('on');
        };
    
        const handleBoxAnimationEndEvent = (e) => {
            e.currentTarget.closest('.hover_section').classList.add('hover');
        };
    
        const setEventListeners = () => {
            const eventType = document.querySelector('body').classList.contains('p_size') ? 'mouseenter' : 'click';
    
            hoverTxtBox.removeEventListener('mouseenter', handleHoverTxtBoxEvent);
            hoverTxtBox.removeEventListener('click', handleHoverTxtBoxEvent);
            mainSection2.querySelectorAll('.hover_section .box').forEach((element) => {
                element.removeEventListener('mouseenter', handleBoxMouseEnterEvent);
                element.removeEventListener('click', handleBoxMouseEnterEvent);
            });
    
            hoverTxtBox.addEventListener(eventType, handleHoverTxtBoxEvent);
            mainSection2.querySelectorAll('.hover_section .box').forEach((element) => {
                element.addEventListener(eventType, handleBoxMouseEnterEvent);
                element.addEventListener('animationend', handleBoxAnimationEndEvent);
            });
        };

        setEventListeners();
        
        mainSection2.querySelector('.intro_wrap').addEventListener('animationend', (e) => {
            e.currentTarget.style.display = 'none';
        });

        // 메인섹션3
        let main3AnimationTimeout;
        let main3currentIndex = 0;
        const main3SectionMap = [
            { index: 0, section: mainSection4 },
            { index: 1, section: mainSection6 },
            { index: 2, section: mainSection5 }
        ];
        
        const main3animateBox = () => {
            main3Items[main3currentIndex].classList.add('on');
        
            main3AnimationTimeout = setTimeout(() => {
                main3Items[main3currentIndex].classList.remove('on');
        
                main3currentIndex = (main3currentIndex + 1) % main3Items.length;
                main3animateBox();
            }, 3000);
        };
        
        const main3HandleAnimationEnd = (e) => {
            main3animateBox();
        
            main3Items.forEach((item, index) => {
                item.addEventListener('mouseenter', () => {
                    clearTimeout(main3AnimationTimeout);
                    main3Items.forEach((item, idx) => {
                        if (idx !== index) {
                            item.classList.remove('on');
                        }
                    });
                    item.classList.add('on');
                });

                // 메인3에서 섹션이동
                item.addEventListener('click', () => {
                    const targetSection = main3SectionMap.find(map => map.index === index)?.section;
                    if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            });
            mainSection3.querySelector('.list_item').addEventListener('mouseleave', () => {
                main3Items.forEach((item, index) => {
                    item.classList.remove('on');
                });
                main3animateBox();
            });
        };
        
        const main3LastItem = main3Items[main3Items.length - 1];
        main3LastItem.addEventListener('animationend', main3HandleAnimationEnd);

        // 메인섹션4
        const addOnClasses = (index) => {
            mainSection4.querySelector('.con').classList.add('on');
            removeAllOnClasses();
        
            main4Items[index].classList.add('on');
            main4ItemsButton[index].classList.add('on');
            main4ItemsImage[index].classList.add('on');

            main4SliderMobile.slideTo(index);
        };
        
        main4Items.forEach((element, index) => {
            element.addEventListener('mouseenter', () => {
                addOnClasses(index);
            });
        });
        
        main4ItemsButton.forEach((element, index) => {
            element.addEventListener('mouseenter', () => {
                addOnClasses(index);
            });
        });

        const removeAllOnClasses = () => {
            main4Items.forEach(item => item.classList.remove('on'));
            main4ItemsButton.forEach(button => button.classList.remove('on'));
            main4ItemsImage.forEach(image => image.classList.remove('on'));
        };

        mainSection4.querySelector('.con').addEventListener('mouseleave', (e) => {
            if(document.body.classList.contains('p_size')) {
                e.target.classList.remove('on');
                removeAllOnClasses();
            }
        });

        // 모바일 섹션4
        const main4SliderMobile = new Swiper(".list_slider", {
            navigation: {
                nextEl: ".list_slider .swiper-button-next",
                prevEl: ".list_slider .swiper-button-prev",
            },
            observer: true,
            observeParents: true,
            on: {
                slideChange: function () {
                    const activeIndex = this.realIndex;
                    addOnClasses(activeIndex);
                },
            },
        });

        // 메인섹션5
        let main5AnimationTimeout;
        let main5currentIndex = 0;

        const main5animateBox = () => {
            clearTimeout(main5AnimationTimeout);
            main5Items[main5currentIndex].classList.add('on');
            
            main5AnimationTimeout = setTimeout(() => {
                main5Items[main5currentIndex].classList.remove('on');
                main5currentIndex = (main5currentIndex + 1) % main5Items.length;
                main5animateBox();
                main5UpdateSlideBarWidth(main5currentIndex);
            }, 7000);
        };

        const main5UpdateSlideBarWidth = (index) => {
            const slideBar = mainSection5.querySelector('.slide_bar span');
            const widthPercentage = ((index + 1) / main5Items.length) * 100;
            slideBar.style.width = widthPercentage >= 100 ? '100%' : widthPercentage.toFixed(3) + '%';
        };

        const main5SlideArrowButton = (moveAmount) => {
            clearTimeout(main5AnimationTimeout);
            main5Items[main5currentIndex].classList.remove('on');
            main5currentIndex = (main5currentIndex + moveAmount + main5Items.length) % main5Items.length;
            main5Items[main5currentIndex].classList.add('on');
            main5UpdateSlideBarWidth(main5currentIndex);
            main5animateBox();
        };

        main5Items.forEach((item, index) => {
            item.addEventListener('mouseenter', () => {
                clearTimeout(main5AnimationTimeout);
                main5Items.forEach((item, idx) => {
                    if (idx !== index) {
                        item.classList.remove('on');
                    }
                });
                item.classList.add('on');
                main5currentIndex = index;
                main5UpdateSlideBarWidth(index);
            });
        });

        mainSection5.querySelector('.con').addEventListener('mouseleave', () => {
            main5Items.forEach((item) => {
                item.classList.remove('on');
            });
            main5animateBox();
        });

        mainSection5.querySelector('.arrow_wrap .btn_next').addEventListener('click', () => {
            main5SlideArrowButton(1);
        });

        mainSection5.querySelector('.arrow_wrap .btn_prev').addEventListener('click', () => {
            main5SlideArrowButton(-1);
        });

        main5UpdateSlideBarWidth(main5currentIndex);
        main5animateBox();

        // 메인섹션6
        main6ItemsButton[0].closest('li').classList.add('on');
        main6ItemsImage[0].classList.add('on');
        main6ItemsPic[0].classList.add('on');
        main6ItemsButton.forEach((button, index) => {
            button.addEventListener('mouseenter', () => {
                main6ItemsButton.forEach(btn => btn.closest('li').classList.remove('on'));
                main6ItemsImage.forEach(img => img.classList.remove('on'));
                main6ItemsPic.forEach(img => img.classList.remove('on'));
                button.closest('li').classList.add('on');
                main6ItemsImage[index].classList.add('on');
                main6ItemsPic[index].classList.add('on');
            });
        });

        // 메인섹션7
        const main7SliderThumb = new Swiper(".main_slider7_thumb", {
            observer: true,
            observeParents: true,
            spaceBetween: 10,
            slidesPerView: 5,
            direction: 'horizontal',
            breakpoints: {
                1417: {
                    direction: 'vertical',
                    spaceBetween: 15,
                    slidesPerView: 5,
                },
                768: {
                    spaceBetween: 20,
                    slidesPerView: 'auto',
                }
            }
        });
        const main7Slider = new Swiper(".main_slider7", {
            observer: true,
            observeParents: true,
            loop: true,
            simulateTouch: false,
            navigation: {
                nextEl: ".main_slider7_arrow .swiper-button-next",
                prevEl: ".main_slider7_arrow .swiper-button-prev",
            },
            thumbs: {
                swiper: main7SliderThumb,
            },
            speed: 800,
            autoplay: {
                delay: 4000,
            }
        });

        // 메인섹션8
        const main8SliderThumb = new Swiper(".main_slider8_thumb", {
            observer: true,
            observeParents: true,
            spaceBetween: 10,
            slidesPerView: 5,
            direction: 'horizontal',
            breakpoints: {
                1417: {
                    direction: 'vertical',
                    spaceBetween: 15,
                    slidesPerView: 5,
                },
                768: {
                    spaceBetween: 20,
                    slidesPerView: 'auto',
                }
            }
        });
        const main8Slider = new Swiper(".main_slider8", {
            observer: true,
            observeParents: true,
            loop: true,
            simulateTouch: false,
            navigation: {
                nextEl: ".main_slider8_arrow .swiper-button-next",
                prevEl: ".main_slider8_arrow .swiper-button-prev",
            },
            thumbs: {
                swiper: main8SliderThumb,
            },
            speed: 800,
            autoplay: {
                delay: 4000,
            }
        });

        // 메인섹션9
        const main9SliderTemp1 = new Swiper(".main_slider_temp1", {
            loop: true,
            speed: 800,
            simulateTouch: false,
            observer: true,
            observeParents: true,
        });
        const main9SliderTemp2 = new Swiper(".main_slider_temp2", {
            loop: true,
            speed: 800,
            simulateTouch: false,
            observer: true,
            observeParents: true,
        });
        const main9SliderThumb = new Swiper(".main_slider9_thumb", {
            observer: true,
            observeParents: true,
            spaceBetween: 10,
            slidesPerView: 5,
            direction: 'horizontal',
            breakpoints: {
                1417: {
                    direction: 'vertical',
                    spaceBetween: 15,
                    slidesPerView: 5,
                },
                768: {
                    spaceBetween: 20,
                    slidesPerView: 'auto',
                }
            }
        });
        const main9Slider = new Swiper(".main_slider9", {
            loop: true,
            simulateTouch: false,
            observer: true,
            observeParents: true,
            navigation: {
                nextEl: ".main_slider9_arrow .swiper-button-next",
                prevEl: ".main_slider9_arrow .swiper-button-prev",
            },
            thumbs: {
                swiper: main9SliderThumb,
            },
            speed: 800,
            autoplay: {
                delay: 4000,
            },
        });

        main9Slider.controller.control = [main9SliderTemp1, main9SliderTemp2];

        // pc gnb 이동
        header.querySelectorAll('.gnb li a').forEach((link, index) => {
            link.addEventListener('click', () => {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetId = `mainGnb${index + 1}`;
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - headerHeight,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // 모바일 메뉴 버튼
        document.querySelector('.btn_m').addEventListener('click', () => {
            const menuWrapper = document.querySelector('.m_gnb_wrap');
            if (menuWrapper) {
                if (menuWrapper.style.display === 'block') {
                    animateElement(menuWrapper, 'fadeOut', () => {
                        menuWrapper.style.display = 'none';
                        document.querySelector('.btn_m').classList.remove('on');
                        menuWrapper.classList.remove('on');
                    });
                } else {
                    menuWrapper.style.display = 'block';
                    animateElement(menuWrapper, 'fadeIn', () => {
                        document.querySelector('.btn_m').classList.add('on');
                        menuWrapper.classList.add('on');
                    });
                }
            }
        });

        // 모바일 gnb 이동
        header.querySelectorAll('.m_gnb li a').forEach((link, index) => {
            link.addEventListener('click', () => {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetId = `mainGnb${index + 1}`;
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - headerHeight,
                        behavior: 'smooth'
                    });
                    animateElement(document.querySelector('.m_gnb_wrap'), 'fadeOut', () => {
                        document.querySelector('.m_gnb_wrap').style.display = 'none';
                        document.querySelector('.btn_m').classList.remove('on');
                        document.querySelector('.m_gnb_wrap').classList.remove('on');
                    });
                }
            });
        });

        // contact 이동
        document.querySelector('.btn_contact').addEventListener('click', (e) => {
            const headerHeight = document.querySelector('header').offsetHeight;
            window.scrollTo({
                top: mainSection10.offsetTop - headerHeight,
                behavior: 'smooth'
            });
        });

        // 헤더
        const toggleHeaderOnScroll = () => {
            window.scrollY >= 50 ? header.classList.add('active') : header.classList.remove('active');
        }

        // 리사이즈 계산 class
        const sizeClass = (width) => {
            let className;
            if (width > 1417) {
                className = 'p_size';
            } else if (width >= 768) {
                className = 't_size';
            } else {
                className = 'm_size';
            }
            if (!document.body.classList.contains(className)) {
                document.body.classList.remove('p_size', 't_size', 'm_size');
                document.body.classList.add(className);
            }
        }
        sizeClass(window.innerWidth);

        // 스크롤 이벤트
        window.addEventListener('scroll', () => {
            mainSectionOn();
            mainSection2Scroll();
            toggleHeaderOnScroll()
            updateOffsets();
            topRectFn();
        });

        window.dispatchEvent(new Event('scroll'));

        // 리사이즈 이벤트
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                const windowWidth = window.innerWidth;

                updateOffsets();
                sizeClass(windowWidth);
                setEventListeners();
            }, 150);
        });

        window.dispatchEvent(new Event('resize'));

    }
});


       
       
       
       
       
       
       
       
       
       
       
       
