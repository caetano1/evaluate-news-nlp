import { expect, test } from '@jest/globals'
import { checkForLength } from '../src/client/js/lengthChecker'

describe ("Testing input length", () => {
    test("Evaluation must have at least 20 characters", () => {
        const evaluationTest = "I really liked the dessert, but the service was really bad."
        expect(checkForLength(evaluationTest)).toBe(true);
    })
})