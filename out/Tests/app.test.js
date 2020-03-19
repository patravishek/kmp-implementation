"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../app"));
describe('knuthMorrisPratt', () => {
    it('should find word position in given text', () => {
        expect(app_1.default('abcbcglx', 'abca')).toBe(-1);
        expect(app_1.default('abcbcglx', 'bcgl')).toBe(3);
        expect(app_1.default('abcxabcdabxabcdabcdabcy', 'abcdabcy')).toBe(15);
        expect(app_1.default('abcxabcdabxabcdabcdabcy', 'abcdabca')).toBe(-1);
        expect(app_1.default('abcxabcdabxaabcdabcabcdabcdabcy', 'abcdabca')).toBe(12);
        expect(app_1.default('abcxabcdabxaabaabaaaabcdabcdabcy', 'aabaabaaa')).toBe(11);
    });
});
