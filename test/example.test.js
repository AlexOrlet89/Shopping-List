// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderItem } from '../render-utils.js';
const test = QUnit.test;

test('renderItem takes an item object and returns a dom element', async (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li>3 test</li>`;
    // const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = await renderItem({ quantity: '3', item: 'test' });
    console.log(actual);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
