function brojPonavljanja(niz) { 
    console.log(niz.reduce((acc, e) => {
        if(!acc[e])
            acc[e] = 0;
        
        acc[e] += 1;
        return acc;
    }, {}));
}

const arr = [1, 2, 2, 2, 3, 3, 4];
brojPonavljanja(arr);