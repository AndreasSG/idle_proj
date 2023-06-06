export interface familiar {
    name: string
    description: string
    incrementAmount: number
    cost: number
    playerOwnedTotal: number,
}

export const familiarTypes: Array<familiar> = [
    {
        name: "Ghoul",
        description: "Ghoulish creature",
        incrementAmount: 1,
        cost: 10,
        playerOwnedTotal: 0,
    },
    {
        name: "Thrall",
        description: "Humble, unwilling, servant",
        incrementAmount: 10,
        cost: 10,
        playerOwnedTotal: 0,
    },
    {
        name: "Drudge",
        description: "Humble, unwilling, servant",
        incrementAmount: 50,
        cost: 50,
        playerOwnedTotal: 0,
    },
    {
        name: "Flesh Golem",
        description: "Manufactured servant",
        incrementAmount: 100,
        cost: 100,
        playerOwnedTotal: 0,
    },
    {
        name: "Dhampir",
        description: "Your own spawn",
        incrementAmount: 200,
        cost: 200,
        playerOwnedTotal: 0,
    },
    {
        name: "Neophytes",
        description: "Loyal subjects",
        incrementAmount: 350,
        cost: 350,
        playerOwnedTotal: 0,
    },
    {
        name: "Prophytes",
        description: "Loyal, experienced, subjects",
        incrementAmount: 500,
        cost: 500,
        playerOwnedTotal: 0,
    },
    {
        name: "Renfield",
        description: "The ultimate familiar",
        incrementAmount: 1000,
        cost: 1000,
        playerOwnedTotal: 0,
    }
]
