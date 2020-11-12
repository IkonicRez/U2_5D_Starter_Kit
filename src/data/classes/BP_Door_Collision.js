const data = {
    function: {
        Move_Actor_To_Location: {
            desc: "Attempt to move the player to the specified location relative to this instance of the bp",
            inputs: [
                ["In", "Exec"],
                ["Target", "BP Door Collision Object"],
                ["Paper Pawn", "BP Paper Pawn Object Reference"]
            ],
            outputs: [
                ["Out", "Exec"]
            ]
        }
    },
    macro: {}

}

export default data