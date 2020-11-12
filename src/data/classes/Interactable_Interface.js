const data = {
    function: {
        Check_NPC_Direction: {
            desc: "Retrieves the direction the BP_PaperPawn is facing",
            inputs: [
                ["In", "Exec"],
                ["Target", "Interactable Interface Interface"]
            ],
            outputs: [
                ["Out", "Exec"],
                ["Direction", "EPawnDirectionState Enum"]
            ]
        },
        Check_For_Dialogue: {
            desc: "Retrieves the direction the BP_PaperPawn is facing",
            inputs: [
                ["In", "Exec"],
                ["Target", "Interactable Interface Interface"]
            ],
            outputs: [
                ["Out", "Exec"],
                ["Return Value", "Boolean"]
            ]
        },
        Get_Dialogue: {
            desc: "Retrieves dialogue from an actor",
            inputs: [
                ["In", "Exec"],
                ["Target", "Interactable Interface Interface"]
            ],
            outputs: [
                ["Out", "Exec"],
                ["Dialogue Array", "Array of Texts"]
            ]
        }
    },
    macro: {}
}

export default data