import {generate} from './generate';

Object.defineProperty(window, 'crypto', {
    value: { getRandomValues: () => [1] }
});

describe('App', () => {
    it('should generate password lowercase', () => {
        const password = generate({
            length: 4,
            lowercase: true,
            uppercase: false,
            symbols: false,
            numbers: false
        });
        expect(password.length).toEqual(4);
        expect(password).toEqual('bbbb');
    });

    it('should generate password with all options', () => {
        const password = generate({
            length: 4,
            lowercase: true,
            uppercase: true,
            symbols: true,
            numbers: true
        });
        expect(password.length).toEqual(4);
        expect(password).toEqual('bB@1');
    });
});