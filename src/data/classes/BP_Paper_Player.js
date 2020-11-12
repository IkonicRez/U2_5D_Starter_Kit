const data = {
    function: {
        Add_Movement: {
            desc: "",
            inputs: [
                ["In", "Exec"],
                ["Target", "BP Paper Player Object Reference"],
                ["Axis Value", "Float"],
                ["Right?", "Boolean"]
            ],
            outputs: [
                ["Out", "Exec"]
            ]
        },
        Attempt_to_Pickup_Item: {
            desc: "",
            inputs: [
                ["In", "Exec"],
                ["Target", "BP Paper Player Object Reference"]
            ],
            outputs: [
                ["Out", "Exec"]
            ]
        }
    },
    macro: {
        Get_Opposite_Direction: {
            desc: "Returns the opposite direction to the one that was set",
            inputs: [
                ["Current Direction", "EPawnDirectionState Enum"]
            ],
            outputs: [
                ["Opposite Direction", "EPawnDirectionState Enum"]
            ]
        }
    }
}

export default data