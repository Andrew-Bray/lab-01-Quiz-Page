

 - Starting with building the confirming a yes function, and then testing it.
 - 

 1) in the HTML we need:
    - copy and content for the user to study (no id needed).
    - button with and id
        - which will initate the prompts
    - Section with an id that inject the user's score into the content.

 1) WHEN: Adding an event listener listening to the click of the button.

1) WHERE: the Quiz gets launched:
    1) we gotta ask the user's name.
    1) Confirming that the user really wants to take the test, if not `return` from the event listener instruction
    1) 3 yes/no questions, using `prompt` calls, use the `countsAsAYes` function to determine the the user's response, then compare the correst answer. Track the number of correct responses
    1) Alert the user that the quiz in complete and their results will now be written to the webpage.
    1) Write a response to the page with _their name_ and _number correct_ out of the total. For example, "Okay Gerald, you got 2/3 correct. You killed it!"