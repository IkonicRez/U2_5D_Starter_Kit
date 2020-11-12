const data = {
    function: {
        Pickup_Item: {
            desc: "Call this to attempt to pickup the item (Handles destroying the item afterwards)",
            inputs: [
                ["In", "Exec"],
                ["Target", "BP Item Pickup Object Reference"],
                ["Paper Player", "BP Paper Player Object Reference"]
            ],
            outputs: [
                ["Out", "Exec"]
            ]
        },
        Vanish: {
            desc: "Causes the item to start scaling till it is invisible and then destroy the actor",
            inputs: [
                ["In", "Exec"],
                ["Target", "BP Item Pickup Object Reference"]
            ],
            outputs: [
                ["Out", "Exec"]
            ]
        }
    },
    macro: {}

}

export default data