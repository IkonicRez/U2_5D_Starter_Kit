const data = {
    function: {
        Use_Item: {
            desc: "This function is designed to be overridden by a child blueprint to add functionality to an item",
            inputs: [
                ["In", "Exec"],
                ["Target", "BP Base Usable Item Object Reference"]
            ],
            outputs: [
                ["Out", "Exec"]
            ]
        }
    },
    macro: {}

}

export default data