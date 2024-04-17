import {ChangeEvent, memo} from "react";
import {ContentCopy as ContentCopyIcon} from "@mui/icons-material";
import {
    Button,
    Checkbox,
    FormControlLabel,
    IconButton,
    InputAdornment,
    Slider,
    TextField,
    Typography
} from "@mui/material";
import {usePasswordGenerator} from "../../hooks";
import {PasswordOption} from "../../types";
import styles from './password-genaration.module.scss';

export const PasswordGeneration = memo(() => {
    const {options, passLength, setPathLength, setOption, generatePassword, password} = usePasswordGenerator();
    const onSliderChanged = (event: Event, value: number | number[]) => setPathLength(value as number);
    const onOptionChanged = (option: PasswordOption) => (event: ChangeEvent<HTMLInputElement>) => setOption(option, event.target.checked);
    const onCopyClicked = () => navigator.clipboard.writeText(password);

    const renderIconButton = () => (<InputAdornment position="end">
        <IconButton onClick={onCopyClicked}>
            <ContentCopyIcon/>
        </IconButton>
    </InputAdornment>);

    return <div className={styles.wrapper}>
        <TextField
            className={styles.textField}
            variant="outlined"
            value={password}
            InputProps={{endAdornment: renderIconButton()}}
        />
        <Typography mt="12px">{`Character length ${passLength}`}</Typography>
        <Slider min={4}
                max={32}
                value={passLength}
                onChange={onSliderChanged}/>
        <FormControlLabel
            checked={options.lowercase}
            control={<Checkbox onChange={onOptionChanged('lowercase')}/>}
            label="Include Lowercase"
        />
        <FormControlLabel
            checked={options.uppercase}
            control={<Checkbox onChange={onOptionChanged('uppercase')}/>}
            label="Include Uppercase"
        />
        <FormControlLabel
            checked={options.numbers}
            control={<Checkbox onChange={onOptionChanged('numbers')}/>}
            label="Include Numbers"
        />
        <FormControlLabel
            checked={options.symbols}
            control={<Checkbox onChange={onOptionChanged('symbols')}/>}
            label="Include Symbols"
        />
        <Button variant="outlined" onClick={generatePassword}>
            <Typography fontWeight="bold" fontSize="18px">Generate</Typography>
        </Button>
    </div>
});