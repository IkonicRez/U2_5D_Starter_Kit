const data = {
    function: {
        Add_Item: {
            desc: "Updates the specific slot to contain the item and amount entered, automatically updates the inventory ui for that item",
            inputs: [
                ["In", "Exec"],
                ["Target", "BP Inventory Component Object Reference"],
                ["Slot", "Integer"],
                ["Item", "E_Items Enum"],
                ["Amount", "Integer"]
            ],
            outputs: [
                ["Out", "Exec"]
            ]
        },
        Attempt_to_Add_Item: {
            desc: "Used to efficiently add items to the inventory, accounts for inventory size and stacks containing that item already. Any items that do not fit in the inventory will be dropped as an item pickup.",
            inputs: [
                ["In", "Exec"],
                ["Target", "BP Inventory Component Object Reference"],
                ["Item", "E_Items Enum"],
                ["Amount", "Integer"]
            ],
            outputs: [
                ["Out", "Exec"]
            ]
        },
        Attempt_to_Add_to_Stack: {
            desc: "Attempts to add an item only to an existing stack. This is designed to be used inside AttemptToAddItem",
            inputs: [
                ["In", "Exec"],
                ["Target", "BP Inventory Component Object Reference"],
                ["Item", "E_Items Enum"],
                ["Amount", "Integer"],
                ["Stack Size", "Integer"]
            ],
            outputs: [
                ["Out", "Exec"]
            ]
        },
        Clear_Item_Slot: {
            desc: "Clears the item slot specified and updates the inventory widget",
            inputs: [
                ["In", "Exec"],
                ["Target", "BP Inventory Component Object Reference"],
                ["Slot", "Integer"]
            ],
            outputs: [
                ["Out", "Exec"]
            ]
        },
        Drop_Item: {
            desc: "Drops a certain amount of the item (Respects stack sizes)",
            inputs: [
                ["In", "Exec"],
                ["Target", "BP Inventory Component Object Reference"],
                ["Item", "E_Items Enum"],
                ["Amount", "Integer"]
            ],
            outputs: [
                ["Out", "Exec"]
            ]
        },
        Drop_Item_at_Slot: {
            desc: "Clears the item slot and drops the item (Respects stack size)",
            inputs: [
                ["In", "Exec"],
                ["Target", "BP Inventory Component Object Reference"],
                ["Slot", "Integer"]
            ],
            outputs: [
                ["Out", "Exec"]
            ]
        },
        Find_First_Empty_Slot: {
            desc: "Attempts to find the first empty slot",
            inputs: [
                ["In", "Exec"],
                ["Target", "BP Inventory Component Object Reference"]
            ],
            outputs: [
                ["Out", "Exec"],
                ["Empty Slot", "Integer"],
                ["No Slots", "Boolean"]
            ]
        },
        Find_Slot_Containing: {
            desc: "Attempts to find a slot containing the specified item (Could be used in a crafting system)",
            inputs: [
                ["In", "Exec"],
                ["Target", "BP Inventory Component Object Reference"],
                ["Item to Find", "E_Items Enum"],
                ["Must Not be Full?", "Boolean"]
            ],
            outputs: [
                ["Out", "Exec"],
                ["Slot", "Integer"],
                ["Slot Found?", "Boolean"]
            ]
        },
        Get_Item_Structure_for_Slot: {
            desc: "Returns the data table structure for the specified slot, this is for getting extra information about an item easily",
            inputs: [
                ["In", "Exec"],
                ["Target", "BP Inventory Component Object Reference"],
                ["Slot", "Integer"]
            ],
            outputs: [
                ["Out", "Exec"],
                ["fItem Struct", "F Item Struct Structure"]
            ]
        },
        Get_Slot: {
            desc: "Gets the item stored in the specified slot",
            inputs: [
                ["In", "Exec"],
                ["Target", "BP Inventory Component Object Reference"],
                ["Slot", "Integer"]
            ],
            outputs: [
                ["Out", "Exec"],
                ["Return Value", "F Inventory Struct Structure"]
            ]
        },
        Load_Inventory: {
            desc: "Used to load the saved inventory or create a new one if there isnt one saved",
            inputs: [
                ["In", "Exec"],
                ["Target", "BP Inventory Component Object Reference"]
            ],
            outputs: [
                ["Out", "Exec"]
            ]
        },
        Modify_Slot_Data: {
            desc: "Sets the specified slot to the specified item and amount",
            inputs: [
                ["In", "Exec"],
                ["Target", "BP Inventory Component Object Reference"],
                ["Slot", "Integer"],
                ["Item", "E_Items Enum"],
                ["Amount", "Integer"]
            ],
            outputs: [
                ["Out", "Exec"],
                ["Modifie Struct", "F Inventory Struct Structure"]
            ]
        },
        Remove_Number_Of_Item: {
            desc: "Removes the specified amount from that slot (DOES NOT CHECK IF THAT AMOUNT IS IN THE STACK)",
            inputs: [
                ["In", "Exec"],
                ["Target", "BP Inventory Component Object Reference"],
                ["Slot", "Integer"],
                ["Amount to Remove", "Integer"]
            ],
            outputs: [
                ["Out", "Exec"]
            ]
        },
        Spawn_Item: {
            desc: "Used to spawn an item pickup of the item and amount specified",
            inputs: [
                ["In", "Exec"],
                ["Target", "BP Inventory Component Object Reference"],
                ["Item", "E_Items Enum"],
                ["Amount", "Integer"]
            ],
            outputs: [
                ["Out", "Exec"]
            ]
        },
        Update_Save_Game: {
            desc: "Used to update the save game reference with the current inventory (DOES NOT SAVE)",
            inputs: [
                ["In", "Exec"],
                ["Target", "BP Inventory Component Object Reference"]
            ],
            outputs: [
                ["Out", "Exec"]
            ]
        },
    },
    macro: {}

}

export default data