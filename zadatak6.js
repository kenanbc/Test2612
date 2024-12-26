function veciOdProsjeka(niz) { 
    let prosjek = (niz.reduce((acc, e) => acc + e, 0 )) / niz.length;
    
    console.log(niz.reduce((acc, e) => {
        e > prosjek ? acc.push(e) : false;
        return acc;
    }, []));
 }


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
veciOdProsjeka(arr);