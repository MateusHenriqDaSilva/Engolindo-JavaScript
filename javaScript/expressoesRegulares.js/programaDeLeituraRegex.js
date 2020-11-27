verificar(/ca[rt]/,
    ["my car", "bad cats"],
    ["camper", "high art"]);

verificar(/pr?op/,
    ["pop culture", "mad props"],
    ["plop", "prrrop"]);

verificar(/ferr(et|y|ari)/,
    ["ferret", "ferry", "ferrari"],
    ["ferrum", "transfer A"]);

verificar(/ious\b/,
    ["how delicious", "spacious room"],
    ["ruinous", "consciousness"]);

verificar(/\s[.,:;]/,
    ["bad punctuation ."],
    ["escape the dot"]);

verificar(/\w{7}/,
    ["Siebentausenddreihundertzweiundzwanzig"],
    ["no", "three small words"]);

verificar(/\b[^\We]+\b/i,
    ["red platypus", "wobbling nest"],
    ["earth bed", "learning ape", "BEET"]);

function verificar(regexp, yes, no){
    if (regexp.source == "...") return
    for(let str of yes) if (!regexp.test(str)) {
        console.log(`falha na combinacao '${str}'`)
    }
    for(let str of no) if (regexp.test(str)) {
        console.log(`errado na partida por'${str}'`)
    }
}