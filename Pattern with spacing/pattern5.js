// Pattern no 5

for(let i = 1; i <= 5; i++) {
    for(let s=i; s<5; s++)
        {
            document.write("_  ")
        }
    for(let j = 1; j <= i; j++) {
        document.write(i + " ");
    }
    document.write('<br>');
}