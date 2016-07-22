(function () {

    "use strict";

    window.ribbon1 = new window.AcidJs.Ribbon({
        boundingBox: $("#ribbon-01"),
        width: "1300px",
        ng: { // {Object} support for AngularJs directives
            controller: "myRibbon",
            show: "",
            init: ""
        },
        minwidth: "1200px",
        config: {
            tabs: [{
                label: "Home James",
                hint: "Go home",
                name: "tab-home",
                ng: { // {Object} support for AngularJs directives
                    if: "lang == 'JavaScript' || key == 'HTML5'",
                    show: "",
                    model: "user.name",
                    "model-options": window.JSON.stringify({ "1": "2", "a": [1, 2, 3, 4] }).replace(/"/g, "'")
                },
                ribbons: [{
                    label: "Clipboard",
                    width: "10%",
                    minWidth: "160px",
                    ng: { // {Object} support for AngularJs directives
                        show: "",
                        if: "user == 'free'",
                        pattern: /^\d+$/,
                        model: "user.name",
                        "model-options": window.JSON.stringify({ "1": "2", "a": [1, 2, 3, 4] }).replace(/"/g, "'")
                    },
                    tools: [{
                        type: "split-button",
                        size: "large",
                        commands: [{
                            hint: "Paste Options",
                            name: "paste",
                            label: "Paste",
                            icon: "paste.png"
                        }, {
                            name: "paste-special",
                            label: "Paste Special",
                            icon: "paste-special.png"
                        }, {
                            name: "paste-from-word",
                            label: "Paste Word",
                            icon: "paste-from-word.png"
                        }]
                    }, {
                        type: "buttons",
                        size: "small",
                        items: "break",
                        commands: [{
                            name: "cut",
                            hint: "Cut (Ctrl+X)",
                            label: "Cut",
                            icon: "cut.png"
                        }, {
                            name: "copy",
                            hint: "Copy (Ctrl+C)",
                            label: "Copy",
                            icon: "copy.png"
                        }, {
                            name: "format-painter",
                            hint: "Format painter",
                            label: "Format Painter",
                            icon: "format-painter.png"
                        }]
                    }]
                }, {
                    label: "Font",
                    width: "27%",
                    minWidth: "276px",
                    ng: { // {Object} support for AngularJs directives
                        show: "",
                        if: "user == 'free'",
                        pattern: /^\d+$/,
                        model: "user.name",
                        "model-options": window.JSON.stringify({ "1": "2", "a": [1, 2, 3, 4] }).replace(/"/g, "'")
                    },
                    tools: [{
                        type: "dropdown",
                        name: "font-family",
                        width: 120,
                        items: [{
                            value: "Arial, Helvetica, Sans-serif",
                            label: "Arial"
                        }, {
                            label: "Comic Sans MS",
                            value: "Comic Sans MS"
                        }, {
                            label: "Consolas",
                            value: "Consolas"
                        }]
                    }, {
                        type: "menu",
                        size: "small",
                        commands: [{
                            name: "change-case",
                            hint: "Change case",
                            icon: "change-case.png"
                        }, {
                            name: "sentence-case",
                            label: "Sentence case"
                        }, {
                            name: "lower-case",
                            label: "lowercase"
                        }, {
                            name: "uppercase",
                            label: "UPPERCASE"
                        }, {
                            name: "capitalize-each-word",
                            label: "Capitalize Each Word"
                        }, {
                            name: "toggle-case",
                            label: "tOGGLE cASE"
                        }]
                    }, {
                        type: "separator"
                    }, {
                        type: "color-picker",
                        name: "font-color",
                        hint: "Set font color",
                        icon: "font-color.png",
                        label: "Font Color",
                        dropdownWidth: 96,
                        colors: [
                            "#000000",
                            "#1f497d",
                            "#4f81bd",
                            "#c0504d",
                            "#9bbb59",
                            "#8064a2",
                            "#c6d9f0",
                            "#dbe5f1",
                            "#f2dcdb",
                            "#ebf1dd",
                            "#ebf1dd",
                            "#001e4e",
                            "#004d60",
                            "#004a00",
                            "#15992a",
                            "#e56c19",
                            "#b81b1b",
                            "#1b58b8",
                            "#569ce3",
                            "#00aaaa"
                        ]
                    }, {
                        type: "break"
                    }, {
                        type: "exclusive-buttons",
                        size: "small",
                        commands: [{
                            name: "subscript",
                            hint: "Subscript",
                            icon: "subscript.png"
                        }, {
                            name: "superscript",
                            hint: "Superscript",
                            icon: "superscript.png"
                        }]
                    }, {
                        type: "separator"
                    }, {
                        type: "toggle-buttons",
                        size: "small",
                        commands: [{
                            name: "bold",
                            hint: "Bold (Ctrl+B)",
                            icon: "bold.png"
                        }, {
                            name: "italic",
                            hint: "Italic (Ctrl+I)",
                            icon: "italic.png"
                        }, {
                            name: "underline",
                            hint: "Underline (Ctrl+U)",
                            icon: "underline.png"
                        }, {
                            name: "strikethrough",
                            hint: "Strikethrough",
                            icon: "strikethrough.png"
                        }]
                    }]
                }, {
                    label: "Editing",
                    tools: [],
                    ng: { // {Object} support for AngularJs directives
                        show: "",
                        if: "user == 'free'",
                        pattern: /^\d+$/,
                        model: "user.name",
                        "model-options": window.JSON.stringify({ "1": "2", "a": [1, 2, 3, 4] }).replace(/"/g, "'")
                    }
                }]
            }, {
                label: "More Tools",
                ng: { // {Object} support for AngularJs directives
                    show: "",
                    if: "user == 'free'",
                    pattern: /^\d+$/,
                    model: "user.name",
                    "model-options": window.JSON.stringify({ "1": "2", "a": [1, 2, 3, 4] }).replace(/"/g, "'")
                },
                hint: "We've Got More Tools Here...",
                name: "tab-insert",
                enabled: true,
                visible: true,
                ribbons: [{
                    width: "15%",
                    label: "Checkboxes",
                    tools: [{
                        type: "checkbox",
                        label: "Checkbox 1",
                        name: "checkbox-1",
                        hint: "Hint for Checkbox 1",
                        value: "checkbox-1-value",
                        checked: true
                    }, {
                        type: "break"
                    }, {
                        type: "checkbox",
                        label: "Checkbox 2",
                        name: "checkbox-2",
                        hint: "Hint for Checkbox 2",
                        value: "checkbox-2-value"
                    }, {
                        type: "break"
                    }, {
                        type: "checkbox",
                        label: "Checkbox 3",
                        name: "checkbox-3",
                        hint: "Hint for Checkbox 3",
                        value: "checkbox-3-value"
                    }]
                }, {
                    label: "Toggle, Exclusive and Custom Dropdowns",
                    width: "20%",
                    tools: [{
                        type: "toggle-dropdown",
                        label: "Toggle Dropdown",
                        icon: "checkbox.png",
                        hint: "Toggle dropdown",
                        name: "toggle-dropdown-1",
                        items: [{
                            name: "menu-bar",
                            label: "Menu Bar",
                            selected: true,
                            value: "menu-bar-value"
                        }, {
                            name: "bookmarks-toolbar",
                            label: "Bookmarks Toolbar",
                            value: "bookmarks-toolbar-value"
                        }, {
                            name: "web-developer-toolbar",
                            label: "Web Developer Toolbar",
                            selected: true,
                            value: "web-developer-toolbar-value"
                        }]
                    }, {
                        type: "break"
                    }, {
                        type: "exclusive-dropdown",
                        label: "Exclusive Menu",
                        icon: "radio.png",
                        name: "exclusive-menu-1",
                        hint: "Exclusive menu",
                        defaultSelectedItem: 1,
                        items: [{
                            label: "No Style",
                            value: "no-style"
                        }, {
                            label: "Basic Page Style",
                            value: "basic-page-style"
                        }, {
                            label: "What?",
                            value: "what",
                            props: {
                                what: "what?"
                            }
                        }]
                    }, {
                        type: "break"
                    }]
                }, {
                    label: "Radios",
                    width: "10%",
                    tools: [{
                        type: "radios",
                        defaultSelectedItem: 1,
                        name: "radio-button-group-1",
                        items: [{
                            label: "Radio 1",
                            value: "value for radio 1",
                            hint: "Hint for radio 1"
                        }, {
                            label: "Radio 2",
                            value: "value for radio 2",
                            hint: "Hint for radio 2"
                        }, {
                            label: "Radio 3",
                            value: "value for radio 3",
                            hint: "Hint for radio 3"
                        }]
                    }]
                }]
            }]
        }
    });

    window.ribbon1.getBoundingBox().on("acidjs-ribbon-tool-clicked", function (e, data) {
        window.console.info("acidjs.ribbon event fired", e.type, data);
    });

    window.ribbon1.getBoundingBox().on("acidjs-ribbon-tab-changed", function (e, data) {
        window.console.info("acidjs.ribbon event fired", e.type, data);
    });

    window.ribbon1.getBoundingBox().on("acidjs-ribbon-toggle", function (e, data) {
        window.console.info("acidjs.ribbon event fired", e.type, data);
    });

    window.ribbon1.getBoundingBox().on("acidjs-ribbon-ready", function (e, data) {
        window.console.info("acidjs.ribbon event fired", e.type, data);

        // set some tools as active on ready
        window.ribbon1.setToolsActive([
            "bold",
            "subscript",
            "underline",
            "align-center"
        ]);

    });

    window.ribbon1.init();
})();