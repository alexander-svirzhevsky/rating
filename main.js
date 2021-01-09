const ratings = document.querySelectorAll('.rating-js');

if (ratings.length > 0) {
    initRatings(ratings);
};

function initRatings(ratings) {
    let ratingActive, ratingValue;

    for (let index = 0; index < ratings.length; index++) {
        const rating = ratings[index];
        initRating(rating);
    }


    function initRating(rating) {
        initConstRating(rating);

        widthOfActive();

        if (rating.classList.contains('rating__set')) {
            setRating(rating);
        }
    }

    function initConstRating(rating) {
        ratingActive = rating.querySelector('.rating-active');
        ratingValue = rating.querySelector('.rating-js__value');
    }

    function widthOfActive(index = ratingValue.innerHTML) {
        let currentWidth = index / 0.05;
        ratingActive.style.width = `${currentWidth}%`
    }

    function setRating(rating) {
        const items = rating.querySelectorAll('.rating-js__item');
        for (let index = 0; index < items.length; index++) {
            const element = items[index];

            element.addEventListener('mouseenter', () => {
                initConstRating(rating);

                widthOfActive(element.value);
            });

            element.addEventListener('mouseleave', () => {
                widthOfActive();
            })

            element.addEventListener('click', () => {
                initConstRating(rating);

                if (rating.dataset.ajax) {
                    setRatingValue(element.value, rating)
                } else {
                    ratingValue.innerHTML = index + 1;
                    widthOfActive();
                }
            })
        }
    }
}