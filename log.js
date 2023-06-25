const keys = document.querySelectorAll('.key');
const checkbox = document.querySelector('.checkbox__keys');
const switcher = document.querySelector('.switcher');
const keysSection = document.querySelector('.piano__keys');

const playNote = (note) => {
    const audio = new Audio(`notes/${note}.mp3`);
    audio.play(); 
}

const handleMouseDown = (key) => {
   playNote(key.getAttribute('data-note'));

    if (key.className.includes('black')) {
        key.classList.add('black--pressed');
        return;
    }

    key.style.background = '#ddd';
}

const handleMouseUp = (key) => {

   if (key.className.includes('black')) {
        key.classList.remove('black--pressed');
        return;
    }

    key.style.background = 'white';
}

keys.forEach((key) => {
    key.addEventListener('mousedown', () => handleMouseDown(key))
    key.addEventListener('mouseup', () => handleMouseUp(key))
});

/*
checkbox.addEventListener('change', ({ target }) => {
    if (target.checked) {
        switcher.classList.add('switcher--active');
        keysSection.classList.add('disabled-keys');
        return;
    }

    switcher.classList.remove('switcher--active');
    keysSection.classList.remove('disabled-keys');
});
*/
const keyDownMapper = {
    "z": () => handleMouseDown(keys[0]),
    "s": () => handleMouseDown(keys[1]),
    "x": () => handleMouseDown(keys[2]),
    "d": () => handleMouseDown(keys[3]),
    "c": () => handleMouseDown(keys[4]),
    "v": () => handleMouseDown(keys[5]),
    "g": () => handleMouseDown(keys[6]),
    "b": () => handleMouseDown(keys[7]),
    "h": () => handleMouseDown(keys[8]),
    "n": () => handleMouseDown(keys[9]),
    "j": () => handleMouseDown(keys[10]),
    "m": () => handleMouseDown(keys[11]),
    ",": () => handleMouseDown(keys[12]),
    "l": () => handleMouseDown(keys[13]),
    ".": () => handleMouseDown(keys[14]),
    "ñ": () => handleMouseDown(keys[15]),
    "-": () => handleMouseDown(keys[16]),
    "q": () => handleMouseDown(keys[17]),
    "2": () => handleMouseDown(keys[18]),
    "w": () => handleMouseDown(keys[19]),
    "3": () => handleMouseDown(keys[20]),
    "e": () => handleMouseDown(keys[21]),
    "4": () => handleMouseDown(keys[22]),
    "r": () => handleMouseDown(keys[23]),
    "t": () => handleMouseDown(keys[24]),
    "6": () => handleMouseDown(keys[25]),
}

const keyUpMapper = {
    "z": () => handleMouseUp(keys[0]),
    "s": () => handleMouseUp(keys[1]),
    "x": () => handleMouseUp(keys[2]),
    "d": () => handleMouseUp(keys[3]),
    "c": () => handleMouseUp(keys[4]),
    "v": () => handleMouseUp(keys[5]),
    "g": () => handleMouseUp(keys[6]),
    "b": () => handleMouseUp(keys[7]),
    "h": () => handleMouseUp(keys[8]),
    "n": () => handleMouseUp(keys[9]),
    "j": () => handleMouseUp(keys[10]),
    "m": () => handleMouseUp(keys[11]),
    ",": () => handleMouseUp(keys[12]),
    "l": () => handleMouseUp(keys[13]),
    ".": () => handleMouseUp(keys[14]),
    "ñ": () => handleMouseUp(keys[15]),
    "-": () => handleMouseUp(keys[16]),
    "q": () => handleMouseUp(keys[17]),
    "2": () => handleMouseUp(keys[18]),
    "w": () => handleMouseUp(keys[19]),
    "3": () => handleMouseUp(keys[20]),
    "e": () => handleMouseUp(keys[21]),
    "4": () => handleMouseUp(keys[22]),
    "r": () => handleMouseUp(keys[23]),
    "t": () => handleMouseUp(keys[24]),
    "6": () => handleMouseUp(keys[25]),
}




document.addEventListener('keydown', (event) => {
    event.preventDefault();
    keyDownMapper[event.key]()


});


document.addEventListener('keyup', (event) => {
    keyUpMapper[event.key]()
    
});
