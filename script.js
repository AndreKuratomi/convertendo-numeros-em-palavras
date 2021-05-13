//LÓGICA:
const numbersToWordsJR = () => {
    let array = [];
    let unidades = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove'];
    let primeiraDezena = ['onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove'];
    let dezenas = ['dez', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'];
    let centenas = ['cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seicentos', 'setecentos', 'oitocentos', 'novecentos'];
    let avulsos = ['cem', 'mil'];
    let conector = ['e'];
    let pontuação = ['vinte;', 'cem;', 'mil.'];

    for (let j = 0; j < 20; j++) {
        if (j <= 8) {
            array.push(unidades[j]);
        }
        if (j === 9) {
            array.push(dezenas[0]);
        }
        if (j > 9 && j <= 18) {
            array.push(primeiraDezena[j-10]);
        }
        if (j === 19) {
            array.push(pontuação[0]);
        }
    }
    console.log(array);
    return array;
};
numbersToWordsJR();

const numbersToWordsPLENO = () => {
    let array = [];
    let unidades = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove'];
    let primeiraDezena = ['onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezesete', 'dezoito', 'dezenove'];
    let dezenas = ['dez', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'];
    let centenas = ['cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seicentos', 'setecentos', 'oitocentos', 'novecentos'];
    let avulsos = ['cem', 'mil'];
    let conector = ['e'];
    let pontuação = ['vinte;', 'cem;', 'mil.'];

    // array.push(numbersToWordsJR().join(','));
    for (p = 0; p < 100; p++) {
        if (p <= 8) {
            array.push(unidades[p]);
        }
        if (p === 9) {
            array.push(dezenas[0]);
        }
        if (p > 9 && p <= 18) {
            array.push(primeiraDezena[p-10]);
        }
        if (p === 19) {
            array.push(dezenas[1]);
        }
        if (p >= 20 && p <= 28) {
            array.push(dezenas[1] + ' ' + conector[0] + ' ' + unidades[p-20]);
        }
        if (p === 29) {
            array.push(dezenas[2]);
        }
        if (p >= 30 && p <= 38) {
            array.push(dezenas[2] + ' ' + conector[0] + ' ' + unidades[p-30]);
        }
        if (p === 39) {
            array.push(dezenas[3]);
        }
        if (p >= 40 && p <= 48) {
            array.push(dezenas[3] + ' ' + conector[0] + ' ' + unidades[p-40]);
        }
        if (p === 49) {
            array.push(dezenas[4]);
        }
        if (p >= 50 && p <= 58) {
            array.push(dezenas[4] + ' ' + conector[0] + ' ' + unidades[p-50]);
        }
        if (p === 59) {
            array.push(dezenas[5]);
        }
        if (p >= 60 && p <= 68) {
            array.push(dezenas[5] + ' ' + conector[0] + ' ' + unidades[p-60]);
        }
        if (p === 69) {
            array.push(dezenas[6]);
        }
        if (p >= 70 && p <= 78) {
            array.push(dezenas[6] + ' ' + conector[0] + ' ' + unidades[p-70]);
        }
        if (p === 79) {
            array.push(dezenas[7]);
        }
        if (p >= 80 && p <= 88) {
            array.push(dezenas[7] + ' ' + conector[0] + ' ' + unidades[p-80]);
        }
        if (p === 89) {
            array.push(dezenas[8]);
        }
        if (p >= 90 && p <= 98) {
            array.push(dezenas[8] + ' ' + conector[0] + ' ' + unidades[p-90]);
        }
        if (p === 99) {
            array.push(pontuação[1]);
        }
    }
    console.log(array);
    return array;
};
numbersToWordsPLENO();

const numbersToWordsSENIOR = () => {
    let array = [];
    let unidades = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove'];
    let primeiraDezena = ['onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezesete', 'dezoito', 'dezenove'];
    let dezenas = ['dez', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'];
    let centenas = ['', 'cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seicentos', 'setecentos', 'oitocentos', 'novecentos'];
    let avulsos = ['cem', 'mil'];
    let conector = ['e'];
    let pontuação = ['vinte;', 'cem;', 'mil.'];

    // array.push(numbersToWordsPLENO().join(','));

    for (let s0 = 0; s0 < centenas.length; s0++) {
        if (s0 === 0) {
            for (let s1 = 0; s1 < 100; s1++) {
                if (s1 <= 8) {
                    array.push(centenas[s0] + unidades[s1]);
                }
                if (s1 === 9) {
                    array.push(centenas[s0] + dezenas[0]);
                }
                if (s1 > 9 && s1 <= 18) {
                    array.push(centenas[s0] + primeiraDezena[s1-10]);
                }
                if (s1 === 19) {
                    array.push(centenas[s0] + dezenas[1]);
                }
                if (s1 >= 20 && s1 <= 28) {
                    array.push(centenas[s0] + dezenas[1] + ' ' + conector[0] + ' ' + unidades[s1-20]);
                }
                if (s1 === 29) {
                    array.push(centenas[s0] + dezenas[2]);
                }
                if (s1 >= 30 && s1 <= 38) {
                    array.push(centenas[s0] + dezenas[2] + ' ' + conector[0] + ' ' + unidades[s1-30]);
                }
                if (s1 === 39) {
                    array.push(centenas[s0] + dezenas[3]);
                }
                if (s1 >= 40 && s1 <= 48) {
                    array.push(centenas[s0] + dezenas[3] + ' ' + conector[0] + ' ' + unidades[s1-40]);
                }
                if (s1 === 49) {
                    array.push(centenas[s0] + dezenas[4]);
                }
                if (s1 >= 50 && s1 <= 58) {
                    array.push(centenas[s0] + dezenas[4] + ' ' + conector[0] + ' ' + unidades[s1-50]);
                }
                if (s1 === 59) {
                    array.push(centenas[s0] + dezenas[5]);
                }
                if (s1 >= 60 && s1 <= 68) {
                    array.push(centenas[0] + dezenas[5] + ' ' + conector[0] + ' ' + unidades[s1-60]);
                }
                if (s1 === 69) {
                    array.push(centenas[s0] + dezenas[6]);
                }
                if (s1 >= 70 && s1 <= 78) {
                    array.push(centenas[s0] + dezenas[6] + ' ' + conector[0] + ' ' + unidades[s1-70]);
                }
                if (s1 === 79) {
                    array.push(centenas[s0] + dezenas[7]);
                }
                if (s1 >= 80 && s1 <= 88) {
                    array.push(centenas[s0] + dezenas[7] + ' ' + conector[0] + ' ' + unidades[s1-80]);
                }
                if (s1 === 89) {
                    array.push(centenas[s0] + dezenas[8]);
                }
                if (s1 >= 90 && s1 <= 98) {
                    array.push(centenas[s0] + dezenas[8] + ' ' + conector[0] + ' ' + unidades[s1-90]);
                }
                if (s1 === 99) {
                    array.push(centenas[s0] + avulsos[0]);
                }
            }
        }
        if (s0 > 0) {
            for (let s1 = 0; s1 < 100; s1++) {
                if (s1 <= 8) {
                    array.push(centenas[s0] + ' ' + conector[0] + ' ' + unidades[s1]);
                }
                if (s1 === 9) {
                    array.push(centenas[s0] + ' ' + conector[0] + ' ' + dezenas[0]);
                }
                if (s1 > 9 && s1 <= 18) {
                    array.push(centenas[s0] + ' ' + conector[0] + ' ' + primeiraDezena[s1-10]);
                }
                if (s1 === 19) {
                    array.push(centenas[s0] + ' ' + conector[0] + ' ' + dezenas[1]);
                }
                if (s1 >= 20 && s1 <= 28) {
                    array.push(centenas[s0] + ' ' + conector[0] + ' ' + dezenas[1] + ' ' + conector[0] + ' ' + unidades[s1-20]);
                }
                if (s1 === 29) {
                    array.push(centenas[s0] + ' ' + conector[0] + ' ' + dezenas[2]);
                }
                if (s1 >= 30 && s1 <= 38) {
                    array.push(centenas[s0] + ' ' + conector[0] + ' ' + dezenas[2] + ' ' + conector[0] + ' ' + unidades[s1-30]);
                }
                if (s1 === 39) {
                    array.push(centenas[s0] + ' ' + conector[0] + ' ' + dezenas[3]);
                }
                if (s1 >= 40 && s1 <= 48) {
                    array.push(centenas[s0] + ' ' + conector[0] + ' ' + dezenas[3] + ' ' + conector[0] + ' ' + unidades[s1-40]);
                }
                if (s1 === 49) {
                    array.push(centenas[s0] + ' ' + conector[0] + ' ' + dezenas[4]);
                }
                if (s1 >= 50 && s1 <= 58) {
                    array.push(centenas[s0] + ' ' + conector[0] + ' ' + dezenas[4] + ' ' + conector[0] + ' ' + unidades[s1-50]);
                }
                if (s1 === 59) {
                    array.push(centenas[s0] + ' ' + conector[0] + ' ' + dezenas[5]);
                }
                if (s1 >= 60 && s1 <= 68) {
                    array.push(centenas[s0] + ' ' + conector[0] + ' ' + dezenas[5] + ' ' + conector[0] + ' ' + unidades[s1-60]);
                }
                if (s1 === 69) {
                    array.push(centenas[s0] + ' ' + conector[0] + ' ' + dezenas[6]);
                }
                if (s1 >= 70 && s1 <= 78) {
                    array.push(centenas[s0] + ' ' + conector[0] + ' ' + dezenas[6] + ' ' + conector[0] + ' ' + unidades[s1-70]);
                }
                if (s1 === 79) {
                    array.push(centenas[s0] + ' ' + conector[0] + ' ' + dezenas[7]);
                }
                if (s1 >= 80 && s1 <= 88) {
                    array.push(centenas[s0] + ' ' + conector[0] + ' ' + dezenas[7] + ' ' + conector[0] + ' ' + unidades[s1-80]);
                }
                if (s1 === 89) {
                    array.push(centenas[s0] + ' ' + conector[0] + ' ' + dezenas[8]);
                }
                if (s1 >= 90 && s1 <= 98) {
                    array.push(centenas[s0] + ' ' + conector[0] + ' ' + dezenas[8] + ' ' + conector[0] + ' ' + unidades[s1-90]);
                }
                if (s0 === 0) {
                    if (s1 === 99) {
                        array.push(avulsos[0]);
                    }
                }
                if (s0 === 9){
                    if (s1 === 99) {
                        array.push(pontuação[2]);
                    }
                }
                if (s1 === 99 && centenas[s0+1] !== undefined) {
                    array.push(centenas[s0+1]);
                }
            }
        }
    }
    console.log(array);
    return array;

};
numbersToWordsSENIOR();

//DOM:
const titlesOfPictures = (num) => {
    const exibition = window.document.getElementById('promenade');

    const title = window.document.createElement('h3');
    title.className = 'nome';
    if (num === 1) {
        title.innerText = "Array de 1 a 20: ";
    }
    if (num === 2) {
        title.innerText = "Array de 1 a 100: ";
    }
    if (num === 3) {
        title.innerText = "Array de 1 a 1000: ";
    }
    exibition.appendChild(title);
};

const picturesAtAnExibition = (num, functio) => {
    const exibition = window.document.getElementById('promenade');
    
    titlesOfPictures(num);

    const picture = window.document.createElement('div');
    picture.className = 'quadro';

    const textContent = `${functio}`;
    picture.innerText = textContent;

    exibition.appendChild(picture);
}


picturesAtAnExibition(1, numbersToWordsJR());
picturesAtAnExibition(2, numbersToWordsPLENO());
picturesAtAnExibition(3, numbersToWordsSENIOR());

