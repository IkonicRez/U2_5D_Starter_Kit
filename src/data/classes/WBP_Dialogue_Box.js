const data = {
    function: {
        Increment_Index: {
            desc: "Increments the CurrentIndex value and returns the new value",
            inputs: [
                ["In", "Exec"],
                ["Target", "WBP Dialogue Box Object Reference"]
            ],
            outputs: [
                ["Out", "Exec"],
                ["New Value", "Integer"]
            ]
        },
        Show_Next_Dialogue: {
            desc: "Attempts to show the next piece of dialogue in the array, returns if this was successful",
            inputs: [
                ["In", "Exec"],
                ["Target", "WBP Dialogue Box Object Reference"]
            ],
            outputs: [
                ["Out", "Exec"],
                ["Success?", "Boolean"]
            ]
        },
        Start_New_Dialogue: {
            desc: "Sets the new dialogue array and resets the dialogue to the first item in the array",
            inputs: [
                ["In", "Exec"],
                ["Target", "WBP Base Menu Object Reference"],
                ["Current Dialogue", "Array of Texts"]
            ],
            outputs: [
                ["Out", "Exec"]
            ]
        }
    },
    macro: {}
}

export default data