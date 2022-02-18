// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderItem } from '../render-utils.js';
const test = QUnit.test;

test('renderItem takes an item object and returns a dom element', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li>3 test</li>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderItem({ quantity: 3, item: test });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
