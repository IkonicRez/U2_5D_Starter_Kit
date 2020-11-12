const data = {
    function: {
        Update_Save_Game: {
            desc: "Updates the save game reference with the new location, direction and inventory of the player (DOES NOT SAVE)",
            inputs: [
                ["In", "Exec"],
                ["Target", "WBP Player Menu Object Reference"]
            ],
            outputs: [
                ["Out", "Exec"],
                ["Game Instance", "BP Game Instance Object Reference"]
            ]
        }
    },
    macro: {
        
    }
}

export default data