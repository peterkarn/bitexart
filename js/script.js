document.addEventListener( 'DOMContentLoaded', function() {


const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.header__menu');

iconMenu.addEventListener('click', () => {
  if(!menuBody.classList.contains('_active')) {
    menuBody.classList.add('_active');
    document.body.classList.add('locked');
  } else {
    menuBody.classList.remove('_active');
    document.body.classList.remove('locked');
  }
})
  
  var splide = new Splide( '.splide', {
    type: 'loop',
    perPage: 3,
    rewind : true,
    gap: '30px',
    autoplay: true,
    arrows: false,
    interval: 5000,
    heightRatio: 0.4,
    breakpoints: {
      1620: {
        perPage: 3,
        perMove: 1,
        gap: '10px'
      },
      1366: {
        gap: '15px'
      },
      1024: {
        perPage: 1,
        perMove: 1,
        focus: 'center',
      }
    }
  } );
  
  splide.mount();


const strokedBlocks = document.querySelectorAll('.stroked');

strokedBlocks.forEach(el => {
  const text = el.querySelector('.stroked__real').innerText;
  el.insertAdjacentHTML('beforeend', `<span class="stroked__phantom">${text}</span>`,);
});

AOS.init();


var splide = new Splide( '.trust-slider', {
  type: 'loop',
  perPage: 5,
  perMove: 1,
  rewind : true,
  gap: '75px',
  autoplay: true,
  arrows: false,
  interval: 5000,
  breakpoints: {
		1366: {
			perPage: 3.5,
		},
    1024: {
			perPage: 2.5,
		},
    425: {
      perPage: 2
    }
  }

} );

splide.mount();

var splide = new Splide( '.introduction__slider', {
  perPage: 3,
  perMove: 1,
  rewind : true,
  gap: '75px',
  arrows: false,
  interval: 5000,
  breakpoints: {
    1620: {
      gap: '45px'
    },
    1366:  {
      gap: '20px'
    },
    1024: {
      gap: '15px',
      perPage: 2, 
    },
    768: {
      perPage: 1,
    },
  } 
} );

splide.mount();

var splide2 = new Splide( '.second__introduction__slider', {
  perPage: 3,
  perMove: 1,
  rewind : true,
  gap: '75px',
  arrows: false,
  interval: 5000,
  breakpoints: {
    1620: {
      gap: '45px'
    },
    1366:  {
      gap: '20px'
    },
    1024: {
      gap: '15px',
      perPage: 2, 
    },
    768: {
      perPage: 1,
    },
  }
} );

splide2.mount();





if (document.querySelector('.offer')) {
  const offerBlock = document.querySelector('.offer');
  const offerOverlay = offerBlock.querySelector('.offer__overlay');
  const highlightAllItems = offerBlock.querySelector('[data-hover="all"]').dataset.hover;
  const listItems = offerBlock.querySelectorAll('[data-highlight]');
  
  offerOverlay.addEventListener('mouseover', (e) => {
    if (e.target.matches('[data-hover]')) {
      const self = e.target;
      self.addEventListener('mouseenter', (e) => {
        const index = e.target.dataset.hover;
        if (index !== highlightAllItems) {
          offerBlock.querySelector(`[data-highlight="${index}"]`).classList.add('active')
        }
        if (index == highlightAllItems) {
          listItems.forEach(element => {
            element.classList.add('active')
          });
        }
      });
      self.addEventListener('mouseleave', () => {
        const index = e.target.dataset.hover;
        if (index !== highlightAllItems) {
          offerBlock.querySelector(`[data-highlight="${index}"]`).classList.remove('active')
        }
        if (index == highlightAllItems) {
          listItems.forEach(element => {
            element.classList.remove('active')
          });
        }
      })
    }
  })
}



// ТАБЫ 



const tabs = document.querySelector('.tabs');
	const tabsBtn = document.querySelectorAll('.tabs__btn');
	const tabsContent = document.querySelectorAll('.tabs__content');

	if (tabs) {
		tabs.addEventListener('click', (e) => {
			if (e.target.classList.contains('tabs__btn')) {
				const tabsPath = e.target.dataset.tabsPath;
				tabsBtn.forEach(el => {el.classList.remove('tabs__btn--active')});
				document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('tabs__btn--active');
				tabsHandler(tabsPath);
			}

			if (e.target.classList.contains('tabs__arrow--prev')) {
				let activeBtn = document.querySelector('.tabs__btn--active');
				let activeParent = activeBtn.closest('.tabs__item');
				let previousParent = activeParent.previousElementSibling;

				if (previousParent) {
					let prevActive = previousParent.querySelector('.tabs__btn')
					tabsBtn.forEach(el => {el.classList.remove('tabs__btn--active')});
					prevActive.classList.add('tabs__btn--active');

					let path = prevActive.dataset.tabsPath;
					tabsHandler(path);
				}
			}

			if (e.target.classList.contains('tabs__arrow--next')) {
				let activeBtn = document.querySelector('.tabs__btn--active');
				let activeParent = activeBtn.closest('.tabs__item');
				let nextParent = activeParent.nextElementSibling;

				if (nextParent) {
					let nextActive = nextParent.querySelector('.tabs__btn');
					tabsBtn.forEach(el => {el.classList.remove('tabs__btn--active')});
					nextActive.classList.add('tabs__btn--active');

					let path = nextActive.dataset.tabsPath;
					tabsHandler(path);
				}
			}
		});
	}

	const tabsHandler = (path) => {
		tabsContent.forEach(el => {el.classList.remove('tabs__content--active')});
		document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs__content--active');
	};


  const loader = document.querySelector('.preloader');
  const gs = document.querySelector('.preloader__gs')
  const col = document.querySelector('.preloader__col')

window.addEventListener('load', function () {
      gs.classList.add('transparent');
      col.classList.remove('transparent');
      setTimeout(() => {
        loader.classList.add('hide');
        document.querySelector('.pic').classList.add('animate');
        document.body.classList.remove('locked')
      }, 1800);
  })

  const myModal = new HystModal({
    linkAttributeName: "data-hystmodal",
});


window.addEventListener('scroll', () => {
  let scrollDistance = window.scrollY;
  let heroHeight = document.querySelector('.hero').offsetHeight;
  let header = document.querySelector('.header');
  let headerHeight =header.offsetHeight;
  let body = document.body;

  if (scrollDistance > heroHeight) {
    header.classList.add('fixed');
    body.style.paddingTop = headerHeight + 'px';
  }

  if (scrollDistance < heroHeight) {
    header.classList.remove('fixed');
    body.style.paddingTop = "";
  }
});




})

