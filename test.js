// 簡易 費氏數列 
const Ffun =(number) => {
    if(number < 3) return 1
    else return Ffun(number - 1) + Ffun(number - 2)
}

console.log(Ffun(12))

// 完整
const FfunMemo = (index, cache) => {
    cache = cache || []
    if (cache[index]) return cache[index]
    else {
        if (index < 3) return 1
        else {
            cache[index] = FfunMemo(index - 1, cache) + FfunMemo(index - 2, cache)
        }
    }
    return cache[index]
}

console.log(FfunMemo(4))