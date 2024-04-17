import {PasswordOption, PasswordOptions} from "../types";

type GenerateParams = PasswordOptions & { length: number }

const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const uppercase = lowercase.toUpperCase();
const numbers = '0123456789';
const symbols = '!@#$%^&*()+_-=}{[]|:;"/?.><,`~';

const passwordOptions = {
    lowercase,
    uppercase,
    numbers,
    symbols
}

const getRandomValue = (value: string) => {
    const buffer = window.crypto.getRandomValues(new Uint8Array(1));
    const index = Math.abs(buffer[0] % value.length);

    return value.charAt(index)
}

export const generate = ({length, ...passOptions}: GenerateParams) => {
    const enabledRules = Object.keys(passOptions).filter((ruleKey) => passOptions[ruleKey as PasswordOption]);

    let password = enabledRules.map((ruleKey) => getRandomValue(passwordOptions[ruleKey as PasswordOption])).join('');
    const allChars = enabledRules.reduce((acc, rule) => `${acc}${passwordOptions[rule as PasswordOption]}`, '')

    while (password.length < length) {
        password = `${password}${getRandomValue(allChars)}`
    }

    return password.split('').sort(
        // shuffle password for preventing the same order of the first four characters
        () => 128 - window.crypto.getRandomValues(new Uint8Array(1))[0]
    ).join('');
}