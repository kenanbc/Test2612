//ne radi
function pronadjiPrefiks(strings) { 
    const char = [];
    strings.forEach(e => {
        char.push(e.split(""));
    });

    let prefiks = '';
    char.forEach((e, i) => {
        e.forEach((f) => {
            if(e[i] == f[i]){
                prefiks += e[i];
            }
        });
    });
    console.log(prefiks);
 }

 const strings = ["flower", "flow", "flight"];

 pronadjiPrefiks(strings);