<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Practice 4</title>
</head>
<body>

<script>

    function currentDate() {
        console.log(new Date().toLocaleDateString());
    }

    function getPowFive(numb) {
        console.log(Math.pow(numb, 5));
    }

    function getSumAndDivide(a, b) {
        console.log((a + b) / b);
    }

    function finalCalculations(c, d, e, f) {
        getPowFive(c);
        getSumAndDivide(d, e);
        console.log(Math.sqrt(f));
    }

    let bads = prompt('Please gimme your money: ', );
    let price = Math.floor(Math.random() * 10 + 1);

    alert(`You must buy ${bads} with following price: ${price} lei`);

</script>
</body>
</html>
