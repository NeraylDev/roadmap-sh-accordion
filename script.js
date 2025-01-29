var activeQuestionCont = null

function onDropdownButton(button) {
    let questionContainer = button.parentElement

    if (activeQuestionCont != null && activeQuestionCont != questionContainer) {
        activeQuestionCont.getElementsByTagName("p")[0].className = ""
    }
    
    switchDropdown(questionContainer.getElementsByTagName("p")[0])
    activeQuestionCont = questionContainer
}

function switchDropdown(dropdownText) {

    if (dropdownText.className == "") {
        dropdownText.className = "show"
    }
    else {
        dropdownText.className = ""
    }

}