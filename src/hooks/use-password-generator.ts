import {useState} from "react";
import {generate} from "../utils/generate";
import {PasswordOption, PasswordOptions} from "../types";

export const usePasswordGenerator = () => {
    const [password, setPassword] = useState('');
    const [passLength, setPassLength] = useState(4);
    const [options, setOptions] = useState<PasswordOptions>({
        lowercase: true,
        uppercase: false,
        numbers: false,
        symbols: false
    });

    const generatePassword = () => {
        const password = generate({length: passLength, ...options});
        setPassword(password)
    };

    const setOption = (option: PasswordOption, value: boolean) => {
        const newOptions = {...options, [option]: value};
        if (Object.values(newOptions).some(value => value)) {
            setOptions(newOptions)
        }
    }

    return {options, password, passLength, generatePassword, setOption, setPathLength: setPassLength}
}