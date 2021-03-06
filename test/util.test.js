import { countsAsAYes } from '../counts-as-a-yes.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    const yes = 'yaaasss';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = countsAsAYes(yes);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
