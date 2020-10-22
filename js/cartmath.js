let cartItem = []
let itemPrices = []

function sum(itemPrices) {
    if (toString.call(itemPrices) !== "[object Array]")
        return false;

        var subTotal = 0
        for (var i=0; i<itemPrices.length; i++)
            {
                if (isNaN(itemPrices[i])){
                    continue;
                }
                subTotal += Number(itemPrices[i]);
            }
}