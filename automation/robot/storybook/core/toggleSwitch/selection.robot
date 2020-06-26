*** Setting ***
Resource      ../_keywords.resource
Test Setup    Run Keywords
...           Go To    ${components}selectors-switch--main    AND
...           Wait Until Element Is Enabled    ${switch}


*** Variables ***
${switch}        css:[role=checkbox]
${leftLabel}     css:[class*=leftLabel]
${rightLabel}    css:[class*=rightLabel]


*** Test Cases ***
switch to off,on,off when checkbox is clicked 3 times
    Checkbox Should Be Selected        ${switch} input
    Click Element                      ${switch}
    Checkbox Should not Be Selected    ${switch} input
    Click Element                      ${switch}
    Checkbox Should Be Selected        ${switch} input
    Click Element                      ${switch}
    Checkbox Should not Be Selected    ${switch} input

switch to different state when any label is clicked
    Checkbox Should Be Selected        ${switch} input
    Click Element                      ${leftLabel}
    Checkbox Should not Be Selected    ${switch} input
    Click Element                      ${leftLabel}
    Checkbox Should Be Selected        ${switch} input
    Click Element                      ${rightLabel}
    Checkbox Should not Be Selected    ${switch} input
    Click Element                      ${rightLabel}
    Checkbox Should Be Selected        ${switch} input

does not switch when disabled element is clicked
    [Setup]    NONE
    Go To                               ${components}selectors-switch--disabled
    Wait Until Page Contains Element    ${switch}
    Checkbox Should Be Selected         ${switch} input
    Run Keyword And Ignore Error        Click Element      ${switch}
    Checkbox Should Be Selected         ${switch} input

does not switch when is clicked any label of disabled element
    Go To                               ${components}selectors-switch--disabled
    Wait Until Page Contains Element    ${switch}
    Checkbox Should Be Selected         ${switch} input
    Run Keyword And Ignore Error        Click Element      ${rightLabel}
    Checkbox Should Be Selected         ${switch} input
    Run Keyword And Ignore Error        Click Element      ${leftLabel}
    Checkbox Should Be Selected         ${switch} input

switch to Off when checkbox is focused and is pressed SPACE
    [Tags]    keyboard
    Checkbox Should Be Selected        ${switch} input
    set focus and press keys           ${switch}          SPACE
    Checkbox Should not Be Selected    ${switch} input
    Press keys                         NONE               SPACE
    Checkbox Should Be Selected        ${switch} input

switch state when is controlled by other component
    [Setup]    NONE
    Go To                               ${components}selectors-switch--controlled
    Wait Until Page Contains Element    ${switch}
    Checkbox Should not Be Selected     ${switch} input
    Click Button                        Toggle
    Checkbox Should Be Selected         ${switch} input
    Click Button                        Toggle
    Checkbox Should not Be Selected     ${switch} input