const scrollReveal = ScrollReveal({reset: true});

const defaultFormAnimation = {
    duration: 1000,
    distance: '60px',
    origin: 'bottom',
    easing: 'ease'
}

scrollReveal.reveal('.form-animation-0', defaultFormAnimation)
scrollReveal.reveal('.form-animation-0', {delay: 500});
scrollReveal.reveal('.form-animation-1', defaultFormAnimation)
scrollReveal.reveal('.form-animation-1', {delay: 1000});
scrollReveal.reveal('.form-animation-2', defaultFormAnimation)
scrollReveal.reveal('.form-animation-2', {delay: 1500});
scrollReveal.reveal('.form-animation-3', defaultFormAnimation)
scrollReveal.reveal('.form-animation-3', {delay: 2000});
scrollReveal.reveal('.form-animation-4', defaultFormAnimation)
scrollReveal.reveal('.form-animation-4', {delay: 2500});