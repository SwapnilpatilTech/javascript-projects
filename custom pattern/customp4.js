for(let i = 1; i <= 5; i++) {
    for(let j = 1; j <= i; j++) {
        document.write(j + " ");
    }
    for(let k = i; k < 5; k++) {
        document.write('_ ');
    }
    for(let k = i; k < 5; k++) {
        document.write('_ ');
    }
    for(let l = i; l >= 1; l--) {
        document.write(l + " ");
    }
    document.write('<br>');
}