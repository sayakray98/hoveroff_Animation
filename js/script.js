const boxes = document.querySelectorAll('.cl');
const para1 = document.querySelectorAll('.para');



boxes.forEach((box) => {
    box.addEventListener('mouseenter', () => {
        box.style.width = '40%';
        boxes.forEach((other) => {
            if (other !== box) {
                other.style.width = `calc((100% - 40%) / ${boxes.length - 1})`;
            }
        });
    });

    box.addEventListener('mouseleave', () => {
        boxes.forEach((other) => {
            other.style.width = '20%';
        });
    });
});


