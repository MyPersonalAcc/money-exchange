// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var err = {error:"You are rich, my friend! We don't have so much coins for exchange"};
    if(currency < 1)
    {
        return {};
    }
    else if(currency >10000)
    {
       return err;
    }
    else{
        var dict = {"H":50,"Q":25,"D":10,"N":5,"P":1};
        console.log(dict.lenght);
        for (const key in dict) {
            {
                var hqdnp = Math.floor(currency/dict[key]);
                currency -= dict[key]*hqdnp;
                dict[key] = hqdnp;
                if(dict[key] == 0)
                {
                    delete dict[key];
                }
        }
    }return dict;
}
}

