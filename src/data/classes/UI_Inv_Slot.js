const data = {
    function: {
        Update_Button_State: {
            desc: "Updates what type of highlight the slot has",
            inputs: [
                ["In", "Exec"],
                ["Target", "UI Inv Slot Object Reference"],
                ["Highlight State", "EInvSlotHighlightState Enum"]
            ],
            outputs: [
                ["Out", "Exec"]
            ]
        },
        Update_Item: {
            desc: "Updates the struct for this slot and changes the amount and item image accordingly",
            inputs: [
                ["In", "Exec"],
                ["Target", "UI Inv Slot Object Reference"],
                ["FInventory Item", "F Inventory Struct Structure"]
            ],
            outputs: [
                ["Out", "Exec"]
            ]
        }
    },
    macro: {}
}

export default data