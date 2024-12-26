function duzinaPosljednjeRijeci(string) { 
    let rijeci = string.split(" ");

    console.log(`Posljednja rijec je '${rijeci.at(-1)}' cija je duzina ${rijeci.at(-1).split("").length}.`);
 }

 duzinaPosljednjeRijeci("Danas je divan dan");
 duzinaPosljednjeRijeci("Hello world")