const canvas = document.querySelector('.canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const draw = () => {
    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = 'rgb(255, 221, 0)';
    ctx.fillRect(0, 0, 150, 37.5);
    ctx.fillStyle = 'rgb(102, 204, 0)';
    ctx.fillRect(0, 37.5, 150, 37.5);
    ctx.fillStyle = 'rgb(0, 153, 255)';
    ctx.fillRect(0, 75, 150, 37.5);
    ctx.fillStyle = 'rgb(255, 51, 0)';
    ctx.fillRect(0, 112.5, 150, 37.5);

    for(let i = 0; i < 10; i++) {
        ctx.fillStyle = `rgba(255, 255, 255, ${(i + 1) / 10})`; // 점점 흰색을 더함.
        for(let j = 0; j < 4; j++) {
            ctx.fillRect(5 + i * 14, 5 + j * 37.5, 14, 27.5);
        }
    }
}
draw();