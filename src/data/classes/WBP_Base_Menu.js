const data = {
    function: {
        Change_Active_Button: {
            desc: "Navigate to the next button in the list, the direction navigated depends on the Up? value (true is up, down is false)",
            inputs: [
                ["In", "Exec"],
                ["Target", "WBP Base Menu Object Reference"],
                ["Up?", "Boolean"]
            ],
            outputs: [
                ["Out", "Exec"]
            ]
        },
        Flip_Button_Highlight: {
            desc: "Flip the highlight of the input UI_Button",
            inputs: [
                ["In", "Exec"],
                ["Target", "WBP Base Menu Object Reference"],
                ["UI Button", "UI Button Object Reference"]
            ],
            outputs: [
                ["Out", "Exec"]
            ]
        },
        Get_Current_Button: {
            desc: "Get the button that corrosponds with the button index",
            inputs: [
                ["In", "Exec"],
                ["Target", "WBP Base Menu Object Reference"]
            ],
            outputs: [
                ["Out", "Exec"],
                ["Return Value", "UI Button Object Reference"]
            ]
        },
        Press_Current_Button: {
            desc: "Presses the currently selected button",
            inputs: [
                ["In", "Exec"],
                ["Target", "WBP Base Menu Object Reference"]
            ],
            outputs: [
                ["Out", "Exec"]
            ]
        },
        Setup_Button_Array: {
            desc: "Initialize the button array, takes an array of UI_Buttons, the order the buttons are in the array is the order they will be navigated",
            inputs: [
                ["In", "Exec"],
                ["Target", "WBP Base Menu Object Reference"],
                ["Buttons", "Array of UI Button Object References"]
            ],
            outputs: [
                ["Out", "Exec"]
            ]
        }
    },
    macro: {}
}

export default data