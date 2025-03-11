/**
 * 
 * @param {*} a 
 * @returns 
 */
function currying(a) {
    return (b) => {
        return (c) => {
            return (e) => {
                return a + b + c + e;
            };
        };
    };
}

const d = currying(1)(2)(3)(4);
console.log(d);
