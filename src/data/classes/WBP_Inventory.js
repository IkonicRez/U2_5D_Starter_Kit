const data = {
    function: {
        Flip_Inv_Slot_Highlight: {
            desc: "Flips between the three inventory highlight states depending on if an item is being moved or not (Automatically accounts for different states and movingItems? value)",
            inputs: [
                ["In", "Exec"],
                ["Target", "WBP Inventory Object Reference"],
                ["UI Inv Slot", "UI Inv Slot Object Reference"]
            ],
            outputs: [
                ["Out", "Exec"]
            ]
        },
        Flip_Inventory_Menu: {
            desc: "Attempt to remove the inventory menu from the screen",
            inputs: [
                ["In", "Exec"],
                ["Target", "WBP Inventory Object Reference"],
                ["Current State", "EMenuState Enum"]
            ],
            outputs: [
                ["Out", "Exec"]
            ]
        },
        Generate_Inv_Grid: {
            desc: "Adds the inventory slots to the grid panel for display. Should only be called once when first creating the widget",
            inputs: [
                ["In", "Exec"],
                ["Target", "WBP Inventory Object Reference"],
                ["Row Length", "Integer"],
                ["Inv Size", "Integer"],
                ["Current Inventory", "Array of F Inventory Struct Structures"]
            ],
            outputs: [
                ["Out", "Exec"]
            ]
        },
        Get_Current_Slot: {
            desc: "Adds the inventory slots to the grid panel for display. Should only be called once when first creating the widget",
            inputs: [
                ["In", "Exec"],
                ["Target", "WBP Inventory Object Reference"],
               ],
            outputs: [
                ["Out", "Exec"],
                ["UI Button", "UI Inv Slot Object Reference"]
            ]
        },
        Hide_Inventory: {
            desc: "Attempts to hide either the inventory or inventory menu depending on which is state is active",
            inputs: [
                ["In", "Exec"],
                ["Target", "WBP Inventory Object Reference"],
                ["Paper Player", "BP Paper Player Object Reference"],
                ["Current State", "EMenuState Enum"]
               ],
            outputs: [
                ["Out", "Exec"]
            ]
        },
        Navigate_Inv_Horizontally: {
            desc: "Used to horizontally navigate",
            inputs: [
                ["In", "Exec"],
                ["Target", "WBP Inventory Object Reference"],
                ["Right?", "Boolean"]
            ],
            outputs: [
                ["Out", "Exec"]
            ]
        },
        Navigate_Inv_Vertically: {
            desc: "Used to vertically navigate",
            inputs: [
                ["In", "Exec"],
                ["Target", "WBP Inventory Object Reference"],
                ["Up?", "Boolean"],
                ["New Param", "EMenuStates Enum"]
            ],
            outputs: [
                ["Out", "Exec"]
            ]
        },
        Press_Current_Slot: {
            desc: "Attempts to press the current selected button in the inventory (Accounts for being in the inventory and inventory menu states)",
            inputs: [
                ["In", "Exec"],
                ["Target", "WBP Inventory Object Reference"],
                ["Menu State", "EMenuStates Enum"]
            ],
            outputs: [
                ["Out", "Exec"]
            ]
        },
        Swap_Two_Slots: {
            desc: "Swpas the item and amount between the two specified slots",
            inputs: [
                ["In", "Exec"],
                ["Target", "WBP Inventory Object Reference"],
                ["Slot A", "Integer"],
                ["Slot B", "Integer"]
            ],
            outputs: [
                ["Out", "Exec"]
            ]
        },
    },
    macro: {}
}

export default data