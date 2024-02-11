import db from '../content/drinks.json'

export function getAllDrinks() {
    return Object.entries(db).map(drink => {
        return {
            id: drink[0],
            src: drink[1].src,
            desc: drink[1].desc
        }
    })
}

export function getAllIds() {
    return Object.keys(db)
}


export function getDrinkById(id) {
return {
    id,
    src: db[id].src,
    desc: db[id].desc
}
}

