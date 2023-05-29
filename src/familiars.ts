export interface familiar {
    name: string
    description: string
    incrementAmount: number
}

export const familiarTypes: Array<familiar> = [
    {
        name: "Ghoul",
        description: "Ghoulish creature",
        incrementAmount: 1,
    },
    {
        name: "Thrall",
        description: "Humble, unwilling, servant",
        incrementAmount: 10,
    },
    {
        name: "Drudge",
        description: "Humble, unwilling, servant",
        incrementAmount: 50,
    },
    {
        name: "Flesh Golem",
        description: "Manufactured servant",
        incrementAmount: 100,
    },
    {
        name: "Dhampir",
        description: "Your own spawn",
        incrementAmount: 200,
    },
    {
        name: "Neophytes",
        description: "Loyal subjects",
        incrementAmount: 350,
    },
    {
        name: "Prophytes",
        description: "Loyal, experienced, subjects",
        incrementAmount: 500,
    },
    {
        name: "Renfield",
        description: "The ultimate familiar",
        incrementAmount: 1000,
    }
]
