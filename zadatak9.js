function razlikaNajvecegNajmanjeg(niz) { 
    let najveci = niz.reduce((acc, e) => e > acc ? acc = e : acc);
    let najmanji = niz.reduce((acc, e) => e < acc ? acc = e : acc);

    console.log(najveci - najmanji);
 }


 const arr = [7, 3, 10, 15, 2];
 razlikaNajvecegNajmanjeg(arr);