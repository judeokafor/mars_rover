import {add} from '../index';

describe('Should run code successfully', () => {
    it('should add two numbers', () => {
        const addition = add(1,2)
        expect(addition).toEqual(3);
    })
})
