const data = {
    function: {
        Change_Active_Button_Menu: {
            desc: "Change Active Button- Menu",
            inputs: [
                ["In", "Exec"],
                ["Target", "WBP Main Overlay Object Reference"],
                ["Up?", "Boolean"]
            ],
            outputs: [
                ["Out", "Exec"]
            ]
        },
        End_Dialogue: {
            desc: "Resets the visibilty to hide the dialogue box",
            inputs: [
                ["In", "Exec"],
                ["Target", "WBP Main Overlay Object Reference"]
            ],
            outputs: [
                ["Out", "Exec"]
            ]
        },
        Play_Fade: {
            desc: "Plays a fading animation over the players screen, Forward fades in, Reverse fades out",
            inputs: [
                ["In", "Exec"],
                ["Target", "WBP Main Overlay Object Reference"],
                ["Play Mode", "EUMGSequencePlayMode Enum"]
            ],
            outputs: [
                ["Out", "Exec"],
                ["Delay", "Float"]
            ]
        },
        Press_Button_Menu: {
            desc: "Press Button- Menu",
            inputs: [
                ["In", "Exec"],
                ["Target", "WBP Main Overlay Object Reference"]
               ],
            outputs: [
                ["Out", "Exec"]
            ]
        },
        Show_Next_Dialogue: {
            desc: "Tries to show the next piece of dialogue. If there is no dialogue left it runs EndDialogue",
            inputs: [
                ["In", "Exec"],
                ["Target", "WBP Main Overlay Object Reference"]
               ],
            outputs: [
                ["Out", "Exec"],
                ["Success?", "Boolean"]
            ]
        },
        ShowHide_In_Game_Menu: {
            desc: "Flips the visibilty state of the in game menu",
            inputs: [
                ["In", "Exec"],
                ["Target", "WBP Inventory Object Reference"]
            ],
            outputs: [
                ["Out", "Exec"]
            ]
        },
        Start_Dialogue: {
            desc: "Changes the visibility of widgetst to allow dialogue to be seen and sets the dialogue to be shown",
            inputs: [
                ["In", "Exec"],
                ["Target", "WBP Main Overlay Object Reference"],
                ["Current Dialogue", "Array of Texts"],
                ["Inv Dialogue?", "Boolean"]
            ],
            outputs: [
                ["Out", "Exec"]
            ]
        }
    },
    macro: {}
}

export default data