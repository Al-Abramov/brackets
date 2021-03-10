module.exports = function check(str, bracketsConfig) {
    let newConfig = bracketsConfig.map(i => i.join(''));

    for(let i = 0; i < newConfig.length; i++ ) {
       if(str.includes(newConfig[i])) {
           str = str.replace(newConfig[i], '');
           i = -1;
       }
    }
    return (!str) ? true : false;
}
