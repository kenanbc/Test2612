//Najgori moguci pristup zadatku, mozda i ne radi!!!

function validnostStringa(string) { 
    let pom = string.split("");
    if(pom[0] == ']' || pom[0] == ")" || pom[0] == '}') return false;
    if(pom.includes('(') && !pom.includes(')')) return false;
    if(pom.includes('[') && !pom.includes(']')) return false;
    if(pom.includes('{') && !pom.includes('}')) return false;

    let validanString = pom.reduce((acc, e, i) => {
        if(e == '(' && !(pom.findIndex(e => e == ')') > i))
            acc.push(false);
        if(e == '[' && !(pom.findIndex(e => e == ']') > i))
            acc.push(false);
        if(e == '{' && !(pom.findIndex(e => e == '}') > i))
            acc.push(false);

        if(e == ')' && !pom.includes('(') && (pom.findIndex(e => e == '(') > i)) 
            acc.push(false);
        if(e == ']' && !pom.includes('[') && (pom.findIndex(e => e == '[') < i)) 
            acc.push(false);
        if(e == '}' && !pom.includes('{') && (pom.findIndex(e => e == '{') < i)) 
            acc.push(false);

        return acc;
    }, []);

    return validanString.includes(false) ? false : true;
}

const znakovi = '([])';
const losiZnakovi = '()]{}';

console.log(validnostStringa(znakovi));
console.log(validnostStringa(losiZnakovi));
