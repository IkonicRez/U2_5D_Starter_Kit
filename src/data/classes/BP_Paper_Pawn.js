const data = {
    function: {
        Get_Anim_State: {
            desc: "Gets the animation state of the pawn",
            inputs: [
                ["Target", "BP Paper Pawn Object Reference"]
            ],
            outputs: [
                ["Return Value", "EPawnAnimState Enum"]
            ]
        },
        Get_Direction: {
            desc: "Gets the current direction the pawn is facing",
            inputs: [
                ["Target", "BP Paper Pawn Object Reference"]
            ],
            outputs: [
                ["Return Value", "EPawnDirectionState Enum"]
            ]
        },
        Set_Anim_Based_on_Direction: {
            desc: "Sets the current animation state depending the direction the pawn is facing. Takes an array of EPawnAnimStates with four pins, Up, Down, Left, Right, in that variable",
            inputs: [
                ["In", "Exec"],
                ["Target", "BP Paper Pawn Object Reference"],
                ["Array", "Array of EPawnAnimState Enum"]
            ],
            outputs: [
                ["Out", "Exec"]
            ]
        },
        Set_Anim_State: {
            desc: "Sets a new value for the EAnimState variable",
            inputs: [
                ["In", "Exec"],
                ["Target", "BP Paper Pawn Object Reference"],
                ["Array", "Array of EPawnAnimState Enum"]
            ],
            outputs: [
                ["Out", "Exec"]
            ]
        },
        Set_Direction: {
            desc: "Sets a new value for this pawns EDirection variable",
            inputs: [
                ["In", "Exec"],
                ["Target", "BP Paper Pawn Object Reference"],
                ["New Value", "EPawnDirectionState Enum"]
            ],
            outputs: [
                ["Out", "Exec"]
            ]
        },
        Set_Is_Moving: {
            desc: "Sets a new value for this pawns bIsMoving? value",
            inputs: [
                ["In", "Exec"],
                ["Target", "BP Paper Pawn Object Reference"],
                ["New Value", "Boolean"]
            ],
            outputs: [
                ["Out", "Exec"]
            ]
        },
        Update_Animations: {
            desc: "Update Animation",
            inputs: [
                ["In", "Exec"],
                ["Target", "BP Paper Pawn Object Reference"]
            ],
            outputs: [
                ["Out", "Exec"]
            ]
        }
    },
    macro: {}

}

export default data