//=============================================================================
// EFJ_Baron_GamepadModification
//=============================================================================
/*:
 * @target MZ
 * @plugindesc A modification of the Game Pad Functionality
 * @author Eric the Funny Baron
 * 
 * @param Gamepad Controls
 * @desc A list of all important buttons and their function
 * 
 * @param A Button
 * @desc Function of the A button
 * @default ok
 * @type select
 * @option Ok
 * @value ok
 * @option Cancel
 * @value cancel
 * @option Shift
 * @value shift
 * @option Menu
 * @value menu
 * @option Pageup
 * @value pageup
 * @option Pagedown
 * @value pagedown
 * @option Escape
 * @value escape
 * @option Up
 * @value up
 * @option Down
 * @value down
 * @option Left
 * @value left
 * @option Right
 * @value right
 * @parent Gamepad Controls
 * 
 * @param B Button
 * @desc Function of the B button
 * @default cancel
 * @type select
 * @option Ok
 * @value ok
 * @option Cancel
 * @value cancel
 * @option Shift
 * @value shift
 * @option Menu
 * @value menu
 * @option Pageup
 * @value pageup
 * @option Pagedown
 * @value pagedown
 * @option Escape
 * @value escape
 * @option Up
 * @value up
 * @option Down
 * @value down
 * @option Left
 * @value left
 * @option Right
 * @value right
 * @parent Gamepad Controls
 * 
 * @param X Button
 * @desc Function of the X button
 * @default shift
 * @type select
 * @option Ok
 * @value ok
 * @option Cancel
 * @value cancel
 * @option Shift
 * @value shift
 * @option Menu
 * @value menu
 * @option Pageup
 * @value pageup
 * @option Pagedown
 * @value pagedown
 * @option Escape
 * @value escape
 * @option Up
 * @value up
 * @option Down
 * @value down
 * @option Left
 * @value left
 * @option Right
 * @value right
 * @parent Gamepad Controls
 * 
 * @param Y Button
 * @desc Function of the Y button
 * @default menu
 * @type select
 * @option Ok
 * @value ok
 * @option Cancel
 * @value cancel
 * @option Shift
 * @value shift
 * @option Menu
 * @value menu
 * @option Pageup
 * @value pageup
 * @option Pagedown
 * @value pagedown
 * @option Escape
 * @value escape
 * @option Up
 * @value up
 * @option Down
 * @value down
 * @option Left
 * @value left
 * @option Right
 * @value right
 * @parent Gamepad Controls
 * 
 * @param LB Button
 * @desc Function of the LB button
 * @default pageup
 * @type select
 * @option Ok
 * @value ok
 * @option Cancel
 * @value cancel
 * @option Shift
 * @value shift
 * @option Menu
 * @value menu
 * @option Pageup
 * @value pageup
 * @option Pagedown
 * @value pagedown
 * @option Escape
 * @value escape
 * @option Up
 * @value up
 * @option Down
 * @value down
 * @option Left
 * @value left
 * @option Right
 * @value right
 * @parent Gamepad Controls
 * 
 * @param RB Button
 * @desc Function of the RB button
 * @default pagedown
 * @type select
 * @option Ok
 * @value ok
 * @option Cancel
 * @value cancel
 * @option Shift
 * @value shift
 * @option Menu
 * @value menu
 * @option Pageup
 * @value pageup
 * @option Pagedown
 * @value pagedown
 * @option Escape
 * @value escape
 * @option Up
 * @value up
 * @option Down
 * @value down
 * @option Left
 * @value left
 * @option Right
 * @value right
 * @parent Gamepad Controls
 * 
 * @param D-Pad up Button
 * @desc Function of the D-Pad up button
 * @default up
 * @type select
 * @option Ok
 * @value ok
 * @option Cancel
 * @value cancel
 * @option Shift
 * @value shift
 * @option Menu
 * @value menu
 * @option Pageup
 * @value pageup
 * @option Pagedown
 * @value pagedown
 * @option Escape
 * @value escape
 * @option Up
 * @value up
 * @option Down
 * @value down
 * @option Left
 * @value left
 * @option Right
 * @value right
 * @parent Gamepad Controls
 * 
 * @param D-Pad down Button
 * @desc Function of the D-Pad down button
 * @default down
 * @type select
 * @option Ok
 * @value ok
 * @option Cancel
 * @value cancel
 * @option Shift
 * @value shift
 * @option Menu
 * @value menu
 * @option Pageup
 * @value pageup
 * @option Pagedown
 * @value pagedown
 * @option Escape
 * @value escape
 * @option Up
 * @value up
 * @option Down
 * @value down
 * @option Left
 * @value left
 * @option Right
 * @value right
 * @parent Gamepad Controls
 * 
 * @param D-Pad left Button
 * @desc Function of the D-Pad left button
 * @default left
 * @type select
 * @option Ok
 * @value ok
 * @option Cancel
 * @value cancel
 * @option Shift
 * @value shift
 * @option Menu
 * @value menu
 * @option Pageup
 * @value pageup
 * @option Pagedown
 * @value pagedown
 * @option Escape
 * @value escape
 * @option Up
 * @value up
 * @option Down
 * @value down
 * @option Left
 * @value left
 * @option Right
 * @value right
 * @parent Gamepad Controls
 * 
 * @param D-Pad right Button
 * @desc Function of the D-Pad right button
 * @default right
 * @type select
 * @option Ok
 * @value ok
 * @option Cancel
 * @value cancel
 * @option Shift
 * @value shift
 * @option Menu
 * @value menu
 * @option Pageup
 * @value pageup
 * @option Pagedown
 * @value pagedown
 * @option Escape
 * @value escape
 * @option Up
 * @value up
 * @option Down
 * @value down
 * @option Left
 * @value left
 * @option Right
 * @value right
 * @parent Gamepad Controls
 * 
 * @param Vibration Option
 * @desc Should vibrations be turned off in the options menu?
 * @type boolean
 * @default true
 * @on yes
 * @off no
 * 
 * @param Vibration Option Name
 * @desc Name of the option entry in the option menu
 * @type text
 * @default Gamepad Vibrations
 * @parent Vibration Option
 * 
 * @param Vibration Option Default Value
 * @desc Default Value in the option menu for the vibration option (important for the
 * first start-up of the game)
 * @type boolean
 * @default false
 * @on ON
 * @off OFF
 * @parent Vibration Option
 * 
 * @param Vibration Feedback in Battle
 * @desc A vibration will be executed, when an actor takes damage in battle
 * @type boolean
 * @default true
 * @on yes
 * @off no
 * 
 * @param Duration
 * @desc The time in milliseconds the vibration will be executed
 * @type number
 * @default 100
 * @parent Vibration Feedback in Battle
 * 
 * @param Delay
 * @desc The amount of delay until the vibration will be executed 
 * @type number
 * @default 0
 * @parent Vibration Feedback in Battle
 * 
 * @param Strength
 * @desc The strength of the vibration.
 * @type number
 * @max 1
 * @min 0
 * @decimals 2
 * @default 0.5
 * @parent Vibration Feedback in Battle
 * 
 * 
 * @help
 * 
 * =============================================================================
 * Terms of Use
 * =============================================================================
 * It is allowed to use this plugin for free and commercial purposes 
 * on the condition of mentioning me with the name 
 * "Eric the Funny Baron" or "EFJ_Baron" in your projects.
 * 
 * 
 * =============================================================================
 * Introduction
 * =============================================================================
 * This plugin makes it possible to change the button functions for
 * gamepads. Added to that you can induce a vibration feedback in gamepads,
 * which have this functionality.
 * 
 * 
 * =============================================================================
 * Change Button Functions via Script Call
 * =============================================================================
 * To change a button function, you can use following Script Call:
 * 
 *   change_gamePad_Map(button, command)
 * 
 * Replace button with one of these String values:
 *      "A_Button"
 *  "B_Button"
 *  "X_Button"
 *  "Y_Button"
 *  "LB_Button"
 *  "RB_Button"
 *  "DPad_Up_Button"
 *  "DPad_Down_Button"
 *  "DPad_Left_Button"
 *  "DPad_Right_Button"
 * This value will decide, which button should be edited
 * 
 * Replace command with one of these String values:
 *   "ok"
 *   "cancel"
 *   "shift"
 *   "menu"
 *   "pageup"
 *   "pagedown"
 *   "escape"
 *   "up"
 *   "down"
 *   "left"
 *   "right"
 * This value decides, which function your selected button will get
 *
 * =============================================================================
 * The Vibration Function
 * =============================================================================
 * You can induce a vibration in some gamepads (for example the Nintendo Switch
 * Joy Cons). To create such a vibration with your game, you can use following
 * Script Call:
 * 
 *  vibrateGamepad(time, delay, strength)
 * 
 * Replace time with a number. This number will stand for the milliseconds,
 * in which the vibration will be executed. Replace delay with the amount
 * of milliseconds until the vibration will be executed. Replace strength
 * with a number between 0 and 1. Be careful with this number. You should not
 * go to high, because in some cases the vibration can be extreme with values
 * near 1.
 * 
 * You can use this function in various moments and events. For example
 * you could make a heavy door open inside your game and there you could
 * insert the Script Call to create an additional feedback.
 * 
 * You can even create a vibration pattern, if you combine this Sript Call
 * with the wait command. If you intend to do this, you have to include
 * the duration of the vibration in the wait command. Otherwise some odd
 * vibration behaviours can occur. Mostly the pattern will not be
 * executed completely.
 * 
 * Additionally you can create an option command in the option menu.
 * There a player has access to activate or deactivate vibrations in the game.
 * If vibrations are deactivated, no vibration occures, even when the
 * script call is executed.
 * 
 * 
 * =============================================================================
 * The Vibration Function in Skills
 * =============================================================================
 * In this new version, it is possible to add vibration to certain skills, which
 * are used in battles. Both enemies and allies can have skills with vibration
 * on their action.
 * 
 * To add vibration to a skill, you have to add following notetag to your skill's
 * note:
 * 
 * <Gamepad Vibration: time delay strength>
 * 
 * Replace time, delay and strength with values similar to a regular call of 
 * vibrateGamepad(). Between each value there must be at least one space so that
 * the plugin can recognize the three different values.
 * 
 * You might have to adjust the vibrations to your liking so that it will vibrate
 * on the right moment.
 * 
 * 
 * Have Fun! :D
 * 
 * =============================================================================
 * Changelog
 * =============================================================================
 * 1.4 - New added feature --> Script Call for changing button function in-game
 * 1.3 - New added feature --> Adding vibration to certain skills
 * 1.2 - Modified feature --> Option config for vibration will be saved now
 * 1.1 - New added feature --> Option window for vibrations added
 * 1.0 - The plugin is completed.
 */

//=============================================================================
// Constants
//=============================================================================
const vibrationExp = /<\s*Gamepad\s*Vibration:\s*(\d+\.\d+|\d+)\s+(\d+\.\d+|\d+)\s+(\d+\.\d+|\d+)>/i

//=============================================================================
// Parameters
//=============================================================================
var EFJ_Baron_GamepadModification_parameters = PluginManager.parameters('EFJ_Baron_GamepadModification');
var A_Button = String(EFJ_Baron_GamepadModification_parameters['A Button']);
var B_Button = String(EFJ_Baron_GamepadModification_parameters['B Button']);
var X_Button = String(EFJ_Baron_GamepadModification_parameters['X Button']);
var Y_Button = String(EFJ_Baron_GamepadModification_parameters['Y Button']);
var LB_Button = String(EFJ_Baron_GamepadModification_parameters['LB Button']);
var RB_Button = String(EFJ_Baron_GamepadModification_parameters['RB Button']);
var DPad_Up_Button = String(EFJ_Baron_GamepadModification_parameters['D-Pad up Button']);
var DPad_Down_Button = String(EFJ_Baron_GamepadModification_parameters['D-Pad down Button']);
var DPad_Left_Button = String(EFJ_Baron_GamepadModification_parameters['D-Pad left Button']);
var DPad_Right_Button = String(EFJ_Baron_GamepadModification_parameters['D-Pad right Button']);

var Vibration_Option = EFJ_Baron_GamepadModification_parameters['Vibration Option'] === "true";
var Vibration_Option_name = String(EFJ_Baron_GamepadModification_parameters['Vibration Option Name']);
var Vibration_Option_value = EFJ_Baron_GamepadModification_parameters['Vibration Option Default Value'] === "true";

var Vibration_Feedback = EFJ_Baron_GamepadModification_parameters['Vibration Feedback in Battle'] === "true";
var vibration_duration = Number(EFJ_Baron_GamepadModification_parameters['Duration']);
var vibration_delay = Number(EFJ_Baron_GamepadModification_parameters['Delay']);
var vibration_strength = Number(EFJ_Baron_GamepadModification_parameters['Strength']);

//=============================================================================
// Overwriting of Input.gamepadMapper
//=============================================================================
Input.gamepadMapper = {
    0:  A_Button,           //A    
    1:  B_Button,           //B
    2:  X_Button,           //X
    3:  Y_Button,           //Y
    4:  LB_Button,          //LB
    5:  RB_Button,          //RB
    12: DPad_Up_Button,     //D-pad up 
    13: DPad_Down_Button,   //D-pad down  
    14: DPad_Left_Button,   //D-pad left  
    15: DPad_Right_Button,  //D-pad right
};

//=============================================================================
// Change Function of Input Map
//=============================================================================
function change_gamePad_Map(button, command) {
    let buttonMap = {
        "A_Button" :         0,
        "B_Button" :         1,
        "X_Button" :         2,
        "Y_Button" :         3,
        "LB_Button":         4,
        "RB_Button":         5,
        "DPad_Up_Button" :  12,
        "DPad_Down_Button": 13,
        "DPad_Left_Button": 14,
        "DPad_Right_Button":15
    }

    Input.gamepadMapper[buttonMap[button]] = command;
}

//=============================================================================
// Altering of the ConfigManager and Save Game Modification
//=============================================================================
ConfigManager.gamePadVibration = Vibration_Option_value;

_alias_EFJ_Baron_GamePad_altered_makeData = ConfigManager.makeData;
ConfigManager.makeData = function() {
    config = _alias_EFJ_Baron_GamePad_altered_makeData.call(this);
    config.gamePadVibration = this.gamePadVibration;

    return config;
}

_alias_EFJ_Baron_GamePad_altered_applyData = ConfigManager.applyData;
ConfigManager.applyData = function(config) {
    _alias_EFJ_Baron_GamePad_altered_applyData.call(this, config);
    if(config['gamePadVibration'] === undefined) {
        this.gamePadVibration = Vibration_Option_value;
    } else {
        this.gamePadVibration = this.readFlag(config,'gamePadVibration');
    }
}

_alias_EFJ_Baron_GamePad_makeSaveContents = DataManager.makeSaveContents;
DataManager.makeSaveContents = function() {
    var contents = _alias_EFJ_Baron_GamePad_makeSaveContents.call(this);
    contents.gamePadData = Input.gamepadMapper;
    return contents;
}

_alias_EFJ_Baron_GamePad_extractSaveContents = DataManager.extractSaveContents;
DataManager.extractSaveContents = function(contents) {
    _alias_EFJ_Baron_GamePad_extractSaveContents.call(this, contents);
    Input.gamepadMapper = contents.gamePadData || Input.gamepadMapper;
}

//=============================================================================
// Altering of the Window_Options
//=============================================================================
Window_Options.prototype.addGamepadOptions = function() {
    if(Vibration_Option) {
        this.addCommand(Vibration_Option_name, 'gamePadVibration');
    }
}

_alias_EFJ_Baron_Altered_WindowOptions = Window_Options.prototype.makeCommandList;
Window_Options.prototype.makeCommandList = function() {
    _alias_EFJ_Baron_Altered_WindowOptions.apply(this, arguments);
    this.addGamepadOptions();
}

//=============================================================================
// Altering of Input._pollGamepads
//=============================================================================
var global_gamepads = [];

Input._pollGamepads = function() {
    if (navigator.getGamepads) {
        var gamepads = navigator.getGamepads();
        if (gamepads) {
            for (var i = 0; i < gamepads.length; i++) {
                var gamepad = gamepads[i];
                if (gamepad && gamepad.connected) {
                    global_gamepads = gamepads;//with this changed function the gamepads can be accessed globally
                    this._updateGamepadState(gamepad);
                }
            }
        }
    }
};

//=============================================================================
// Vibration Functions for Gamepads
//=============================================================================
function vibrateGamepad(time, delay, strength){
    if(shouldVibrate()){
        for(i = 0; i < global_gamepads.length; i++){
            if(global_gamepads.item(i) != null){
                if(global_gamepads.item(i).vibrationActuator != null){
                    global_gamepads.item(i).vibrationActuator.playEffect('dual-rumble',
                    {duration: time, 
                     startDelay: delay,
                     strongMagnitude: strength, 
                     weakMagnitude: strength}
                    );
                }
            }
        }
    }
    return shouldVibrate();
}

function shouldVibrate() {
    if(Vibration_Option) {
        return Window_Options.prototype.getConfigValue('gamePadVibration');
    }
    return true;
}

function translate_SkillNotes_to_Vibration(action) {
    skillNotes = $dataSkills[action._item._itemId].note
    if(vibrationExp.test(skillNotes)) {
        vibrationList = vibrationExp.exec(skillNotes)
        vibrationParams = {
            time    : Number(vibrationList[1]),
            delay   : Number(vibrationList[2]),
            strength: Number(vibrationList[3])
        }
        vibrateGamepad(vibrationParams.time, vibrationParams.delay, vibrationParams.strength)
    }
}


//=============================================================================
// Altering of Game_Actor, so Gamepad vibrates, when Actor takes Damage
//=============================================================================
_alias_EFJ_Baron_Altered_Game_Battler_onDamage = Game_Actor.prototype.onDamage;
Game_Actor.prototype.onDamage = function(value) {
    _alias_EFJ_Baron_Altered_Game_Battler_onDamage.call(this, value);
    if(Vibration_Feedback){vibrateGamepad(vibration_duration, vibration_delay, vibration_strength);}
}

_alias_EFJ_Baron_Altered_Game_Battler_performAction = Game_Battler.prototype.performAction;

Game_Battler.prototype.performAction = function(action) {
    _alias_EFJ_Baron_Altered_Game_Battler_performAction.call(this, action)
    translate_SkillNotes_to_Vibration(action)
}