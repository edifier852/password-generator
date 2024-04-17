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
    const enabledOptions = Object.keys(passOptions).filter((optionKey) => passOptions[optionKey as PasswordOption]);

    let password = enabledOptions.map((option) => getRandomValue(passwordOptions[option as PasswordOption])).join('');
    const allChars = enabledOptions.reduce((acc, option) => `${acc}${passwordOptions[option as PasswordOption]}`, '')

    while (password.length < length) {
        password = `${password}${getRandomValue(allChars)}`
    }

    return password.split('').sort(
        // shuffle password for preventing the same order of the first four characters
        () => 128 - window.crypto.getRandomValues(new Uint8Array(1))[0]
    ).join('');
}