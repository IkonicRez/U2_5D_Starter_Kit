const data = {
    function: {
        Add_Movement_with_Collision: {
            desc: "Add Movement with Collision",
            inputs: [
                ["In", "Exec"],
                ["Target", "BP Paper NPC Object Reference"],
                ["Delta Location", "Vector"]
            ],
            outputs: [
                ["Out", "Exec"]
            ]
        },
        Can_Dialogue_be_Read: {
            desc: "Gets if the dialogue on this NPC is available to be read",
            inputs: [
                ["Target", "BP Paper NPC Object Reference"]
            ],
            outputs: [
                ["Return Value", "Boolean"]
            ]
        },
        Check_NPC_Direction: {
            desc: "Retrieves the direction the BP_PaperPawn is facing",
            inputs: [
                ["In", "Exec"],
                ["Target", "BP Paper NPC Object Reference"]
            ],
            outputs: [
                ["Out", "Exec"],
                ["Direction", "EPawnDirectionState Enum"]
            ]
        },
        Check_for_Dialogue: {
            desc: "Checks if the actor has dialog attached",
            inputs: [
                ["In", "Exec"],
                ["Target", "Interactable Interface Interface"]
            ],
            outputs: [
                ["Out", "Exec"],
                ["Return Value", "Boolean"]
            ]
        },
        Does_Dialogue_Exist: {
            desc: "Checks if the current NPC has dialogue attached",
            inputs: [
                ["Target", "BP Paper NPC Object Reference"]
            ],
            outputs: [
                ["Return Value", "Boolean"]
            ]
        },
        Get_Dialogue: {
            desc: "Checks if the actor has dialog attached",
            inputs: [
                ["In", "Exec"],
                ["Target", "Interactable Interface Interface"]
            ],
            outputs: [
                ["Out", "Exec"],
                ["Dialogue Array", "Array of Texts"]
            ]
        },
        Get_Relative_Movement: {
            desc: "Figures out where the NPC should be by the end of moving to the next point",
            inputs: [
                ["In", "Exec"],
                ["Target", "BP Paper NPC Object Reference"],
                ["Current Index", "Integer"]
            ],
            outputs: [
                ["Out", "Exec"],
                ["Amount to Add", "Vector"]
            ]
        },
        Next_Point_in_List: {
            desc: "Sets the current index to the next index in line depending on if the NPCs bReversing? state. When reversing it will go to the previous index, if not it will move forward an index. Automatically reacts depending on if there are no points left and what action to take",
            inputs: [
                ["In", "Exec"],
                ["Target", "BP Paper NPC Object Reference"]
            ],
            outputs: [
                ["Out", "Exec"],
                ["Return Value", "Integer"]
            ]
        },
        Reset_Path: {
            desc: "Resets the NPCs location to its initial location and resets the path points current index",
            inputs: [
                ["In", "Exec"],
                ["Target", "BP Paper NPC Object Reference"]
            ],
            outputs: [
                ["Out", "Exec"]
            ]
        },
        Set_Can_Dialogue_be_Read: {
            desc: "Resets the NPCs location to its initial location and resets the path points current index",
            inputs: [
                ["In", "Exec"],
                ["Target", "BP Paper NPC Object Reference"],
                ["Can Dialogue be Read?", "Boolean"]
            ],
            outputs: [
                ["Out", "Exec"]
            ]
        },
        Switch_on_End: {
            desc: "Reacts depending on the NPCs EPathCollisionType to either, reset the path, stop movement or reverse the path",
            inputs: [
                ["In", "Exec"],
                ["Target", "BP Paper NPC Object Reference"],
                ["Reversing?", "Boolean"]
            ],
            outputs: [
                ["Out", "Exec"]
            ]
        },
        Update_Direction: {
            desc: "Updates the NPCs direction",
            inputs: [
                ["In", "Exec"],
                ["Target", "BP Paper NPC Object Reference"]
            ],
            outputs: [
                ["Out", "Exec"]
            ]
        },
        Update_Movement_Along_Path: {
            desc: "Update Movement Along Path",
            inputs: [
                ["In", "Exec"],
                ["Target", "BP Paper NPC Object Reference"],
                ["Delta Seconds", "Float"]
            ],
            outputs: [
                ["Out", "Exec"]
            ]
        },
        Update_Playback_Rate: {
            desc: "Update Playback Rate",
            inputs: [
                ["In", "Exec"],
                ["Target", "BP Paper NPC Object Reference"]
            ],
            outputs: [
                ["Out", "Exec"]
            ]
        },
        Update_State: {
            desc: "Update State",
            inputs: [
                ["In", "Exec"],
                ["Target", "BP Paper NPC Object Reference"]
            ],
            outputs: [
                ["Out", "Exec"]
            ]
        },
    },
    macro: {
        Calculate_Velocity: {
            desc: "Calculates the current velocity depending on the current point in the path and returns both positive and negative of the velocity",
            inputs: [
                ["Delta Seconds", "Float"]
            ],
            outputs: [
                ["Negative Velocity", "Vector"],
                ["Positive Velocity", "Vector"]
            ]
        },
        Get_Min_and_Max: {
            desc: "Returns the highest and lowest values in a vector, both values will always be positive as the min value is Absolute, this makes values easier to compare",
            inputs: [
                ["In Vector", "Vector"]
            ],
            outputs: [
                ["Max", "Float"],
                ["Min Pos", "Float"]
            ]
        }
    }

}

export default data