var activeQuestionCont = null

function onDropdownButton(button) {
    let questionContainer = button.parentElement

    if (activeQuestionCont != null && activeQuestionCont != questionContainer) {
        switchDropdown(activeQuestionCont.getElementsByTagName("p")[0], "")
    }
    
    switchDropdown(questionContainer.getElementsByTagName("p")[0])
    activeQuestionCont = questionContainer
}

function switchDropdown(dropdownText, forceValue = null) {

    if (forceValue != null)
    {
        dropdownText.className = forceValue
        return
    }

    if (dropdownText.className == "") {
        dropdownText.className = "show"
    }
    else {
        dropdownText.className = ""
    }

}