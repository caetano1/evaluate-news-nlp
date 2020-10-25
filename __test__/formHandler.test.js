import { expect, test } from '@jest/globals';
import { evaluateSentiments } from '../src/client/js/formHandler'
import '@babel/polyfill'

const fetch = require('node-fetch');

// Remember to instantiate the server before running tests!
describe ("Test API connection", () => {
    test("Test API connection", () => {
        return evaluateSentiments('http://localhost:8080/nplApi', { reqBody: "This is an extract text only to perform tests"})
        .then(res => {
            expect(res).toBeDefined();
        })
    });
})