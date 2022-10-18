const getHSL = (r, g, b) => {
    let rPrime = r / 255;
    let gPrime = g / 255;
    let bPrime = b / 255;

    let max = Math.max(rPrime, gPrime, bPrime);
    let min = Math.min(rPrime, gPrime, bPrime);

    let delta = max - min;

    let h;

    if(Math.abs(delta) < 0.001){
        h = 0;
    }
    else if(rPrime === max){
        h = 60 * (((gPrime - bPrime) / delta) % 6);
    }
    else if(gPrime === max){
        h = 60 * ((bPrime - rPrime) / delta + 2);
    }
    else if(bPrime === max){
        h = 60 * ((rPrime - gPrime) / delta + 4);
    }

    let l = (max + min) / 2;

    let s = 0;

    if(delta !== 0){
        s = delta / (1 - Math.abs(2 * l - 1));
    }

    return [h, s, l];
}