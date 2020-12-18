(function(){
    // Get slider container
    const sliders = document.body.querySelector('.sliders-img')

    // Get Buttons Slider
    const prevSlide = document.body.querySelector('.previous-slide');
    const nextSlide = document.body.querySelector('.next-slide');

    //Get Liste of Splide
    const listSplide = document.querySelector('.list-splide')

    let count = 0;
    
    // Add click event on button slider
    prevSlide.addEventListener("click", (e) => {
        onChangeIndexSlide(e, 'previous');
    });
    nextSlide.addEventListener("click", (e) => {
        onChangeIndexSlide(e, 'next');
    });

    // Add click event on button splide
    for(let i = 0; i < listSplide.children.length; i++) {
        const li = listSplide.children[i];
        li.addEventListener("click", (e) => {
            e.preventDefault();
            onChangeSlideBySplide(i)
        })
    }

    const onChangeIndexSlide = (e, moveSlide) => {
        e.preventDefault();
        let prevCount = count;
        // Length of slider images
        const nbImg = sliders.children.length 
        if(moveSlide === 'previous') 
            count <= 0 ? (count = nbImg - 1) : count--;
        else if (moveSlide === 'next')
            count < nbImg - 1 ? count++ : count = 0;
        onChangeImgSlide(prevCount, count);
    };

    const onChangeImgSlide = (prevCount, count) => {
        sliders.children[prevCount].classList.remove("slider-active");
        sliders.children[prevCount].classList.add("slider-inactive");
        listSplide.children[prevCount].firstChild.classList.remove("splide-active")
      
        sliders.children[count].classList.remove("slider-inactive");
        sliders.children[count].classList.add("slider-active");
        listSplide.children[count].firstChild.classList.add("splide-active")
    }

    const onChangeSlideBySplide = (i) => {
        const prevCount = count;
        count = i;
        onChangeImgSlide(prevCount, count)
    }
})()


  