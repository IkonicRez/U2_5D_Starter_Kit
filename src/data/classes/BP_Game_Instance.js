const data = {
    function: {
        Load_Game_and_Open: {
            desc: "Attempts to load the save game and opens the main game level to reload the players location.",
            inputs: [
                ["In", "Exec"],
                ["Target", "BP Game Instance Object Reference"]
            ],
            outputs: [
                ["Out", "Exec"]
            ]
        },
        Save_Game: {
            desc: "Saves the current SaveGame_Ref to the \"SaveGame\". Prints true/false whether successfully saved",
            inputs: [
                ["In", "Exec"],
                ["Target", "BP Game Instance Object Reference"]
            ],
            outputs: [
                ["Out", "Exec"]
            ]
        }
    },
    macro: {}

}

export default data