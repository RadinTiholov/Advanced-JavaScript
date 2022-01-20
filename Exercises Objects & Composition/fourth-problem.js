function solve(info){
    let result = [];
    for (const line of info) {
        let [name, level, items] = line.split(' / ');
        items = items ? items.split(', '): [];
        const hero = {
            name,
            level: Number(level),
            items
        };
        result.push(hero);
    }
    console.log(JSON.stringify(result));
}
solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
);