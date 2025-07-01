// 웹페이지가 완전히 로딩된 후에 실행되는 코드
document.addEventListener('DOMContentLoaded', function() {
    
    // 햄버거 메뉴 버튼과 모바일 메뉴를 찾아서 변수에 저장
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn'); // 햄버거 메뉴 버튼
    const mobileMenu = document.querySelector('.mobile-menu'); // 모바일 메뉴
    const mobileMenuItems = document.querySelectorAll('.mobile-menu-item'); // 모바일 메뉴 항목들
    const mobileLoginBtn = document.querySelector('.mobile-login-btn'); // 모바일 로그인 버튼
    
    // 햄버거 메뉴 버튼을 클릭했을 때 실행되는 함수
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            // 모바일 메뉴가 열려있는지 확인
            const isMenuOpen = mobileMenu.classList.contains('active');
            
            if (isMenuOpen) {
                // 메뉴가 열려있으면 닫기
                mobileMenu.classList.remove('active');
                console.log('모바일 메뉴를 닫았습니다'); // 개발자가 확인할 수 있는 메시지
            } else {
                // 메뉴가 닫혀있으면 열기
                mobileMenu.classList.add('active');
                console.log('모바일 메뉴를 열었습니다'); // 개발자가 확인할 수 있는 메시지
            }
        });
    }
    
    // 모바일 메뉴 항목을 클릭했을 때 해당 섹션으로 이동하고 메뉴 닫기
    mobileMenuItems.forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.preventDefault(); // 링크 이동을 막음
            
            // 클릭한 메뉴 이름 가져오기
            const menuName = item.textContent.trim();
            console.log(`모바일 ${menuName} 메뉴를 클릭했습니다`);
            
            // 메뉴별로 해당 섹션으로 스크롤 이동
            let targetSection = null;
            
            if (menuName === '청춘다움') {
                // 히어로 캐러셀 섹션으로 이동
                targetSection = document.querySelector('.hero-carousel');
            } else if (menuName === '브랜드') {
                // 제품 섹션으로 이동
                targetSection = document.querySelector('.product-section');
            } else if (menuName === '인사말') {
                // CEO 인사말 섹션으로 이동
                targetSection = document.querySelector('.ceo-section');
            }
            
            // 대상 섹션이 존재하면 부드럽게 스크롤 이동
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth', // 부드러운 스크롤
                    block: 'start' // 섹션 맨 위로 이동
                });
                console.log(`${menuName} 섹션으로 이동했습니다`);
            }
            
            // 메뉴 항목을 클릭하면 모바일 메뉴를 자동으로 닫기
            mobileMenu.classList.remove('active');
            console.log('메뉴 항목을 클릭하여 모바일 메뉴를 닫았습니다');
        });
    });
    
    // 모바일 로그인 버튼을 클릭했을 때 메뉴 닫기
    if (mobileLoginBtn) {
        mobileLoginBtn.addEventListener('click', function() {
            // 로그인 버튼을 클릭하면 모바일 메뉴를 자동으로 닫기
            mobileMenu.classList.remove('active');
            
            // 로그인 기능 (여기서는 알림창으로 대체)
            alert('로그인 페이지로 이동합니다!');
            console.log('모바일 로그인 버튼을 클릭했습니다');
        });
    }
    
    // 데스크탑 로그인 버튼 클릭 이벤트
    const loginBtn = document.querySelector('.login-btn');
    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            // 로그인 기능 (여기서는 알림창으로 대체)
            alert('로그인 페이지로 이동합니다!');
            console.log('데스크탑 로그인 버튼을 클릭했습니다');
        });
    }
    
    // 화면 크기가 변경될 때 실행되는 함수
    window.addEventListener('resize', function() {
        // 화면이 큰 크기로 변경되면 모바일 메뉴를 자동으로 닫기
        if (window.innerWidth > 768) {
            mobileMenu.classList.remove('active');
            console.log('화면 크기가 커져서 모바일 메뉴를 닫았습니다');
        }
    });
    
    // 모바일 메뉴 외부를 클릭했을 때 메뉴 닫기
    document.addEventListener('click', function(event) {
        // 클릭한 요소가 햄버거 버튼이나 모바일 메뉴가 아닌 경우
        const isClickInsideMenu = mobileMenu.contains(event.target);
        const isClickOnMenuBtn = mobileMenuBtn.contains(event.target);
        
        // 메뉴 외부를 클릭하고, 메뉴가 열려있으면 닫기
        if (!isClickInsideMenu && !isClickOnMenuBtn && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            console.log('메뉴 외부를 클릭하여 모바일 메뉴를 닫았습니다');
        }
    });
    
    // 메뉴 항목 클릭 이벤트 처리 (각 섹션으로 부드럽게 이동)
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(function(item) {
        // 메뉴 항목을 클릭했을 때
        item.addEventListener('click', function(event) {
            event.preventDefault(); // 링크 이동을 막음
            
            // 클릭한 메뉴 이름 가져오기
            const menuName = item.textContent.trim();
            console.log(`${menuName} 메뉴를 클릭했습니다`);
            
            // 메뉴별로 해당 섹션으로 스크롤 이동
            let targetSection = null;
            
            if (menuName === '청춘다움') {
                // 히어로 캐러셀 섹션으로 이동
                targetSection = document.querySelector('.hero-carousel');
            } else if (menuName === '브랜드') {
                // 제품 섹션으로 이동
                targetSection = document.querySelector('.product-section');
            } else if (menuName === '인사말') {
                // CEO 인사말 섹션으로 이동
                targetSection = document.querySelector('.ceo-section');
            }
            
            // 대상 섹션이 존재하면 부드럽게 스크롤 이동
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth', // 부드러운 스크롤
                    block: 'start' // 섹션 맨 위로 이동
                });
                console.log(`${menuName} 섹션으로 이동했습니다`);
                
                // 모바일 메뉴가 열려있으면 닫기
                if (mobileMenu && mobileMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                    console.log('메뉴 이동 후 모바일 메뉴를 닫았습니다');
                }
            } else {
                console.log(`${menuName}에 해당하는 섹션을 찾을 수 없습니다`);
            }
        });
    });
    
    console.log('헤더 스크립트가 성공적으로 로드되었습니다!'); // 스크립트 로딩 확인
    
    // 히어로 캐러셀 기능 시작
    initializeCarousel();
    
    // 리뷰 섹션 별점 애니메이션 초기화
    initializeReviewAnimations();
    
});

// 히어로 캐러셀 관련 변수들
let currentSlideIndex = 0; // 현재 보이고 있는 슬라이드 번호 (0부터 시작)
let totalSlides = 3; // 전체 슬라이드 개수
let autoSlideInterval; // 자동 슬라이드 타이머

// 캐러셀 초기화 함수
function initializeCarousel() {
    console.log('히어로 캐러셀을 초기화합니다');
    
    // 자동 슬라이드 시작 (5초마다 다음 슬라이드로 이동)
    startAutoSlide();
    
    // 마우스가 캐러셀 위에 있을 때는 자동 슬라이드 멈춤
    const heroCarousel = document.querySelector('.hero-carousel');
    if (heroCarousel) {
        heroCarousel.addEventListener('mouseenter', stopAutoSlide);
        heroCarousel.addEventListener('mouseleave', startAutoSlide);
    }
}

// 슬라이드 변경 함수 (화살표 버튼에서 사용)
function changeSlide(direction) {
    console.log(`슬라이드를 ${direction > 0 ? '다음으로' : '이전으로'} 이동합니다`);
    
    // 자동 슬라이드를 멈추고 다시 시작 (사용자가 조작한 후)
    stopAutoSlide();
    
    // 현재 슬라이드 인덱스 변경
    currentSlideIndex += direction;
    
    // 슬라이드 인덱스가 범위를 벗어나면 조정
    if (currentSlideIndex >= totalSlides) {
        currentSlideIndex = 0; // 마지막 슬라이드에서 첫 번째 슬라이드로
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = totalSlides - 1; // 첫 번째 슬라이드에서 마지막 슬라이드로
    }
    
    // 슬라이드 표시 업데이트
    updateSlideDisplay();
    
    // 3초 후 자동 슬라이드 다시 시작
    setTimeout(startAutoSlide, 3000);
}

// 특정 슬라이드로 이동하는 함수 (인디케이터에서 사용)
function currentSlide(slideNumber) {
    console.log(`${slideNumber}번 슬라이드로 이동합니다`);
    
    // 자동 슬라이드를 멈추고 다시 시작
    stopAutoSlide();
    
    // 슬라이드 번호를 배열 인덱스로 변환 (1,2,3 → 0,1,2)
    currentSlideIndex = slideNumber - 1;
    
    // 슬라이드 표시 업데이트
    updateSlideDisplay();
    
    // 3초 후 자동 슬라이드 다시 시작
    setTimeout(startAutoSlide, 3000);
}

// 슬라이드 표시를 업데이트하는 함수
function updateSlideDisplay() {
    // 모든 슬라이드에서 'active' 클래스 제거
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    
    slides.forEach(function(slide, index) {
        if (index === currentSlideIndex) {
            slide.classList.add('active'); // 현재 슬라이드에 'active' 클래스 추가
        } else {
            slide.classList.remove('active'); // 다른 슬라이드에서 'active' 클래스 제거
        }
    });
    
    // 인디케이터 업데이트
    indicators.forEach(function(indicator, index) {
        if (index === currentSlideIndex) {
            indicator.classList.add('active'); // 현재 인디케이터 활성화
        } else {
            indicator.classList.remove('active'); // 다른 인디케이터 비활성화
        }
    });
    
    console.log(`현재 ${currentSlideIndex + 1}번째 슬라이드를 표시합니다`);
}

// 자동 슬라이드 시작 함수
function startAutoSlide() {
    // 이미 실행 중인 타이머가 있으면 제거
    if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
    }
    
    // 5초마다 다음 슬라이드로 자동 이동
    autoSlideInterval = setInterval(function() {
        currentSlideIndex++;
        
        // 마지막 슬라이드에서 첫 번째 슬라이드로 순환
        if (currentSlideIndex >= totalSlides) {
            currentSlideIndex = 0;
        }
        
        updateSlideDisplay();
        console.log('자동으로 다음 슬라이드로 이동했습니다');
    }, 5000); // 5000ms = 5초
    
    console.log('자동 슬라이드가 시작되었습니다');
}

// 자동 슬라이드 중지 함수
function stopAutoSlide() {
    if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
        console.log('자동 슬라이드가 중지되었습니다');
    }
}

// 터치 이벤트 지원 (모바일용)
let touchStartX = 0; // 터치 시작 위치
let touchEndX = 0; // 터치 끝 위치

// 터치 시작 이벤트
document.addEventListener('touchstart', function(event) {
    touchStartX = event.changedTouches[0].screenX;
});

// 터치 끝 이벤트
document.addEventListener('touchend', function(event) {
    touchEndX = event.changedTouches[0].screenX;
    handleSwipe(); // 스와이프 처리
});

// 스와이프 처리 함수
function handleSwipe() {
    const swipeThreshold = 50; // 최소 스와이프 거리 (픽셀)
    const swipeDistance = touchEndX - touchStartX;
    
    // 히어로 영역에서만 스와이프 동작
    const heroCarousel = document.querySelector('.hero-carousel');
    if (heroCarousel && event.target.closest('.hero-carousel')) {
        if (swipeDistance > swipeThreshold) {
            // 오른쪽으로 스와이프 = 이전 슬라이드
            changeSlide(-1);
            console.log('오른쪽 스와이프: 이전 슬라이드로 이동');
        } else if (swipeDistance < -swipeThreshold) {
            // 왼쪽으로 스와이프 = 다음 슬라이드
            changeSlide(1);
            console.log('왼쪽 스와이프: 다음 슬라이드로 이동');
        }
    }
}

// 키보드 이벤트 지원
document.addEventListener('keydown', function(event) {
    // 좌우 화살표 키로 슬라이드 조작
    if (event.key === 'ArrowLeft') {
        changeSlide(-1);
        console.log('왼쪽 화살표 키: 이전 슬라이드로 이동');
    } else if (event.key === 'ArrowRight') {
        changeSlide(1);
        console.log('오른쪽 화살표 키: 다음 슬라이드로 이동');
    }
});

// 제품 설명 더보기/접기 기능
function toggleDescription(button) {
    // 버튼이 속한 제품 아이템 찾기
    const productItem = button.closest('.product-item');
    const preview = productItem.querySelector('.description-preview');
    const full = productItem.querySelector('.description-full');
    
    // 현재 상태 확인 (접혀있는지 펼쳐져있는지)
    const isExpanded = full.style.display === 'block';
    
    if (isExpanded) {
        // 현재 펼쳐져 있으면 접기
        full.style.display = 'none'; // 전체 설명 숨기기
        preview.style.display = 'block'; // 미리보기 보이기
        button.textContent = '더보기'; // 버튼 텍스트 변경
        button.classList.remove('expanded'); // 버튼 스타일 원래대로
        console.log('제품 설명을 접었습니다');
    } else {
        // 현재 접혀있으면 펼치기
        preview.style.display = 'none'; // 미리보기 숨기기
        full.style.display = 'block'; // 전체 설명 보이기
        button.textContent = '접기'; // 버튼 텍스트 변경
        button.classList.add('expanded'); // 버튼 스타일 변경
        console.log('제품 설명을 펼쳤습니다');
    }
    
    // 부드러운 스크롤 효과 (선택사항)
    setTimeout(function() {
        productItem.scrollIntoView({
            behavior: 'smooth', // 부드러운 스크롤
            block: 'nearest' // 가장 가까운 위치로 스크롤
        });
    }, 100); // 0.1초 후 실행
}

// 리뷰 섹션 애니메이션 초기화 함수
function initializeReviewAnimations() {
    console.log('리뷰 섹션 애니메이션을 초기화합니다');
    
    // 스크롤 이벤트로 리뷰 섹션이 화면에 나타날 때 애니메이션 실행
    const reviewSection = document.querySelector('.review-section');
    
    if (reviewSection) {
        // Intersection Observer API를 사용하여 화면에 보일 때 애니메이션 실행
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    // 리뷰 섹션이 화면에 보이면 별점 애니메이션 시작
                    animateStars();
                    // 한 번만 실행하도록 observer 해제
                    observer.unobserve(entry.target);
                    console.log('리뷰 섹션이 화면에 나타나 별점 애니메이션을 시작합니다');
                }
            });
        }, {
            threshold: 0.3 // 30% 보일 때 애니메이션 실행
        });
        
        observer.observe(reviewSection);
    }
}

// 별점 애니메이션 함수
function animateStars() {
    const reviewItems = document.querySelectorAll('.review-item');
    
    reviewItems.forEach(function(item, itemIndex) {
        const stars = item.querySelectorAll('.star.filled');
        
        // 각 리뷰 아이템마다 다른 시작 시간으로 별점 애니메이션
        setTimeout(function() {
            stars.forEach(function(star, starIndex) {
                // 각 별마다 순차적으로 애니메이션 적용
                setTimeout(function() {
                    // 별을 일시적으로 투명하게 만든 후 다시 나타나게 함
                    star.style.opacity = '0';
                    star.style.transform = 'scale(0.5)';
                    
                    setTimeout(function() {
                        star.style.transition = 'all 0.3s ease';
                        star.style.opacity = '1';
                        star.style.transform = 'scale(1)';
                        
                        // 별이 나타날 때 반짝이는 효과
                        star.style.animation = 'starTwinkle 0.6s ease';
                        
                        console.log(`${itemIndex + 1}번째 리뷰의 ${starIndex + 1}번째 별이 나타났습니다`);
                    }, 50);
                }, starIndex * 100); // 각 별마다 0.1초씩 지연
            });
        }, itemIndex * 200); // 각 리뷰마다 0.2초씩 지연
    });
}

// 리뷰 아이템 호버 효과 강화
document.addEventListener('DOMContentLoaded', function() {
    const reviewItems = document.querySelectorAll('.review-item');
    
    reviewItems.forEach(function(item) {
        // 마우스가 리뷰 아이템 위에 올라갔을 때
        item.addEventListener('mouseenter', function() {
            const stars = this.querySelectorAll('.star.filled');
            
            // 호버시 별들이 순차적으로 반짝이는 효과
            stars.forEach(function(star, index) {
                setTimeout(function() {
                    star.style.animation = 'starTwinkle 0.4s ease';
                }, index * 50); // 각 별마다 0.05초씩 지연
            });
            
            console.log('리뷰 아이템에 마우스를 올렸습니다');
        });
        
        // 마우스가 리뷰 아이템에서 벗어났을 때
        item.addEventListener('mouseleave', function() {
            const stars = this.querySelectorAll('.star.filled');
            
            // 애니메이션 초기화
            stars.forEach(function(star) {
                star.style.animation = '';
            });
            
            console.log('리뷰 아이템에서 마우스가 벗어났습니다');
        });
    });
});

// CEO 인사말 더보기/닫기 기능
function toggleMessage() {
    console.log('더보기/닫기 버튼이 클릭되었습니다');
    
    // HTML 요소들을 찾아서 변수에 저장 (초등학생 설명: 버튼과 텍스트들을 찾아서 이름을 붙임)
    const messagePreview = document.getElementById('messagePreview'); // 미리보기 텍스트
    const messageFull = document.getElementById('messageFull'); // 전체 텍스트
    const toggleBtn = document.getElementById('toggleBtn'); // 더보기/닫기 버튼
    
    // 현재 전체 메시지가 보이는지 확인 (초등학생 설명: 지금 긴 글이 보이는지 확인)
    const isFullVisible = messageFull.style.display === 'block';
    
    if (isFullVisible) {
        // 전체 메시지가 보이고 있으면 미리보기로 바꿈 (초등학생 설명: 긴 글을 짧게 만들기)
        messagePreview.style.display = 'block'; // 미리보기 보이기
        messageFull.style.display = 'none'; // 전체 텍스트 숨기기
        toggleBtn.textContent = '더보기'; // 버튼 텍스트를 "더보기"로 변경
        
        console.log('인사말을 미리보기 모드로 변경했습니다');
        
        // 부드럽게 CEO 섹션 맨 위로 스크롤 (초등학생 설명: 화면을 부드럽게 위로 올림)
        setTimeout(function() {
            document.querySelector('.ceo-section').scrollIntoView({
                behavior: 'smooth', // 부드러운 스크롤
                block: 'start' // 섹션 맨 위로 스크롤
            });
        }, 100); // 0.1초 후 실행
        
    } else {
        // 미리보기가 보이고 있으면 전체 메시지로 바꿈 (초등학생 설명: 짧은 글을 길게 만들기)
        messagePreview.style.display = 'none'; // 미리보기 숨기기
        messageFull.style.display = 'block'; // 전체 텍스트 보이기
        toggleBtn.textContent = '닫기'; // 버튼 텍스트를 "닫기"로 변경
        
        console.log('인사말을 전체보기 모드로 변경했습니다');
        
        // 전체 메시지에 부드러운 나타나는 효과 추가 (초등학생 설명: 긴 글이 예쁘게 나타나게 하기)
        messageFull.style.opacity = '0'; // 처음에는 투명하게
        messageFull.style.transform = 'translateY(20px)'; // 아래쪽에서 시작
        messageFull.style.transition = 'all 0.5s ease'; // 0.5초 동안 부드럽게 변화
        
        // 50밀리초 후에 나타나는 효과 시작 (초등학생 설명: 잠깐 기다린 후 효과 시작)
        setTimeout(function() {
            messageFull.style.opacity = '1'; // 불투명하게 만들기
            messageFull.style.transform = 'translateY(0)'; // 원래 위치로 이동
        }, 50);
    }
}

// CEO 이미지 로드 에러 처리 (초등학생 설명: 사진이 안 나오면 다른 걸 보여주기)
document.addEventListener('DOMContentLoaded', function() {
    const ceoImage = document.querySelector('.ceo-image');
    
    if (ceoImage) {
        // 이미지 로드에 실패했을 때 실행되는 함수
        ceoImage.addEventListener('error', function() {
            console.log('CEO 이미지를 불러올 수 없어서 대체 이미지를 사용합니다');
            
            // 대체 이미지 또는 기본 스타일 적용
            this.style.background = 'linear-gradient(135deg, #1f4e79, #2d5a27)'; // 그라데이션 배경
            this.style.display = 'flex'; // 플렉스 레이아웃
            this.style.alignItems = 'center'; // 세로 가운데 정렬
            this.style.justifyContent = 'center'; // 가로 가운데 정렬
            this.style.color = 'white'; // 흰색 글자
            this.style.fontSize = '24px'; // 글자 크기
            this.style.fontWeight = 'bold'; // 굵은 글자
            this.innerHTML = 'CEO'; // 텍스트 표시
            this.alt = 'CEO 대체 이미지'; // 대체 텍스트 변경
        });
        
        // 이미지가 성공적으로 로드되었을 때
        ceoImage.addEventListener('load', function() {
            console.log('CEO 이미지가 성공적으로 로드되었습니다');
        });
    }
    
    // 연락처 전화번호 클릭 이벤트 (초등학생 설명: 전화번호를 누르면 전화걸기)
    const phoneNumbers = document.querySelectorAll('.phone-number');
    
    phoneNumbers.forEach(function(phoneNumber) {
        phoneNumber.addEventListener('click', function(event) {
            const number = this.textContent; // 클릭한 전화번호 가져오기
            console.log(`전화번호 ${number}를 클릭했습니다`);
            
                         // 모바일 기기에서는 전화앱이 자동으로 열림
             // 데스크탑에서는 기본 프로그램으로 열림
         });
     });
});









// 푸터 정책 모달창 관련 기능들 (초등학생 설명: 이용약관, 개인정보처리방침 팝업창 기능)

/**
 * 정책 모달창을 보여주는 함수
 * @param {string} type - 정책 타입 ('terms' 또는 'privacy')
 */
function showPolicy(type) {
    console.log(`${type} 정책 모달을 엽니다`);
    
    const modal = document.getElementById('policyModal'); // 모달 요소 찾기
    const title = document.getElementById('modalTitle'); // 모달 제목 요소 찾기
    const body = document.getElementById('modalBody'); // 모달 내용 요소 찾기
    
    // 모달 요소가 존재하는지 확인
    if (!modal || !title || !body) {
        console.error('모달 요소를 찾을 수 없습니다');
        return;
    }
    
    // 정책 타입에 따라 다른 내용을 보여줌 (초등학생 설명: 클릭한 정책에 맞는 내용 보여주기)
    if (type === 'terms') {
        title.textContent = '이용약관'; // 제목 설정
        body.innerHTML = `
            <h4>제1조 (목적)</h4>
            <p>이 약관은 청춘다움 주식회사(이하 "회사")가 운영하는 웹사이트에서 제공하는 서비스의 이용 조건 및 절차에 관한 사항을 규정함을 목적으로 합니다.</p>
            
            <h4>제2조 (용어의 정의)</h4>
            <p>1. "서비스"란 회사가 제공하는 모든 브랜딩 및 마케팅 솔루션을 의미합니다.</p>
            <p>2. "이용자"란 이 약관에 따라 회사의 서비스를 받는 회원 및 비회원을 말합니다.</p>
            
            <h4>제3조 (약관의 효력 및 변경)</h4>
            <p>1. 이 약관은 서비스 화면에 게시하거나 기타의 방법으로 이용자에게 공지함으로써 효력을 발생합니다.</p>
            <p>2. 회사는 필요하다고 인정되는 경우 이 약관을 변경할 수 있으며, 변경된 약관은 공지 후 효력을 발생합니다.</p>
            
            <h4>제4조 (서비스 제공)</h4>
            <p>회사는 다음과 같은 서비스를 제공합니다:</p>
            <p>• AI 기반 브랜딩 솔루션</p>
            <p>• 웹페이지 기획 및 디자인</p>
            <p>• 영상 제작 서비스</p>
            <p>• 브랜드 네이밍 서비스</p>
            
            <h4>제5조 (이용자의 의무)</h4>
            <p>이용자는 서비스 이용 시 다음 행위를 하여서는 안 됩니다:</p>
            <p>• 타인의 정보 도용</p>
            <p>• 회사의 저작권 침해</p>
            <p>• 기타 관련 법령에 위배되는 행위</p>
            
            <h4>제6조 (면책조항)</h4>
            <p>회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.</p>
        `; // 이용약관 내용
        console.log('이용약관 내용을 로드했습니다');
        
    } else if (type === 'privacy') {
        title.textContent = '개인정보처리방침'; // 제목 설정
        body.innerHTML = `
            <h4>1. 개인정보의 처리 목적</h4>
            <p>청춘다움 주식회사는 다음의 목적을 위하여 개인정보를 처리합니다:</p>
            <p>• 서비스 제공 및 계약의 이행</p>
            <p>• 고객 상담 및 불만처리</p>
            <p>• 마케팅 및 광고에의 활용</p>
            <p>• 서비스 개선을 위한 통계 분석</p>
            
            <h4>2. 처리하는 개인정보의 항목</h4>
            <p><strong>필수항목:</strong> 이름, 연락처, 이메일</p>
            <p><strong>선택항목:</strong> 회사명, 담당업무, 문의내용</p>
            <p><strong>자동수집항목:</strong> IP주소, 쿠키, 방문일시, 서비스 이용 기록</p>
            
            <h4>3. 개인정보의 처리 및 보유기간</h4>
            <p>원칙적으로 개인정보 처리목적이 달성된 후에는 지체없이 해당 정보를 파기합니다.</p>
            <p>단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다:</p>
            <p>• 계약 및 청약철회 등에 관한 기록: 5년</p>
            <p>• 대금결제 및 재화 등의 공급에 관한 기록: 5년</p>
            <p>• 소비자의 불만 또는 분쟁처리에 관한 기록: 3년</p>
            
            <h4>4. 개인정보의 제3자 제공</h4>
            <p>회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다.</p>
            <p>다만, 다음의 경우에는 예외로 합니다:</p>
            <p>• 이용자가 사전에 동의한 경우</p>
            <p>• 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</p>
            
            <h4>5. 개인정보의 파기</h4>
            <p>개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때는 지체없이 해당 개인정보를 파기합니다.</p>
            <p>전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다.</p>
            
            <h4>6. 정보주체의 권리</h4>
            <p>이용자는 개인정보 처리에 관한 다음과 같은 권리를 행사할 수 있습니다:</p>
            <p>• 개인정보 처리현황 통지요구</p>
            <p>• 개인정보 열람요구</p>
            <p>• 개인정보 정정·삭제요구</p>
            <p>• 개인정보 처리정지요구</p>
            
            <h4>7. 개인정보 보호책임자</h4>
            <p><strong>성명:</strong> 윤상민</p>
            <p><strong>직책:</strong> 개인정보보호책임자</p>
            <p><strong>연락처:</strong> sangsamo@naver.com</p>
            <p><strong>전화:</strong> 010-8961-4255</p>
            
            <h4>8. 개인정보 처리방침 변경</h4>
            <p>이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.</p>
        `; // 개인정보처리방침 내용
        console.log('개인정보처리방침 내용을 로드했습니다');
    }
    
    modal.style.display = 'flex'; // 모달 창 보이기
    
    // 모달이 나타날 때 부드러운 페이드인 효과 (초등학생 설명: 팝업창이 예쁘게 나타나게 하기)
    setTimeout(() => {
        modal.style.opacity = '1'; // 투명도 1로 변경
    }, 10);
    
    // 모달 내용을 맨 위로 스크롤 (초등학생 설명: 내용을 처음부터 볼 수 있게 하기)
    body.scrollTop = 0;
}

/**
 * 정책 모달창을 닫는 함수 (초등학생 설명: 팝업창을 닫는 함수)
 */
function closePolicy() {
    console.log('정책 모달을 닫습니다');
    
    const modal = document.getElementById('policyModal'); // 모달 요소 찾기
    
    if (!modal) {
        console.error('모달 요소를 찾을 수 없습니다');
        return;
    }
    
    // 부드러운 페이드아웃 효과 (초등학생 설명: 팝업창이 예쁘게 사라지게 하기)
    modal.style.opacity = '0'; // 투명도 0으로 변경
    
    // 애니메이션이 끝나면 모달 숨기기
    setTimeout(() => {
        modal.style.display = 'none'; // 모달 창 숨기기
        console.log('모달이 완전히 닫혔습니다');
    }, 300); // 0.3초 후 실행
}

// 모달 관련 이벤트 리스너 등록 (초등학생 설명: 키보드나 마우스 동작에 반응하는 기능 추가)
document.addEventListener('DOMContentLoaded', function() {
    console.log('푸터 모달 기능을 초기화합니다');
    
    // ESC 키를 누르면 모달 닫기 (초등학생 설명: ESC 키를 누르면 팝업창 닫기)
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') { // ESC 키 확인
            const modal = document.getElementById('policyModal'); // 모달 요소 찾기
            if (modal && modal.style.display === 'flex') { // 모달이 열려있으면
                closePolicy(); // 모달 닫기
                console.log('ESC 키로 모달을 닫았습니다');
            }
        }
    });
    
    // 모달 초기 스타일 설정 (초등학생 설명: 팝업창 기본 설정하기)
    const modal = document.getElementById('policyModal'); // 모달 요소 찾기
    if (modal) {
        modal.style.opacity = '0'; // 초기 투명도 0
        modal.style.transition = 'opacity 0.3s ease'; // 부드러운 변화 효과
        console.log('모달 초기 스타일이 설정되었습니다');
    }
    
    // 소셜 미디어 링크 클릭 이벤트 (초등학생 설명: SNS 버튼 클릭 기능)
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // 기본 링크 동작 막기
            
            const socialName = this.querySelector('.social-name').textContent; // SNS 이름 가져오기
            console.log(`${socialName} 링크를 클릭했습니다`);
            
            // 실제 프로젝트에서는 여기에 각 SNS 링크를 추가합니다
            // 예시: window.open('https://instagram.com/yourpage', '_blank');
            
            alert(`${socialName} 페이지로 이동합니다.\n(실제 운영 시에는 해당 SNS 페이지가 열립니다)`);
        });
    });
    
    console.log('푸터 모달 기능 초기화가 완료되었습니다');
}); 