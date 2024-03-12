import { ChangeEvent, FC, useState } from 'react';
import {
    Button, Input, Select, SelectOption,
    // TODO: алиасы
} from '../../../shared/ui';
import { StandupFormProps } from '../model/types.ts';
import { options } from '../model/model.ts';
import styles from './standup-form.module.css';

export const StandupForm: FC<StandupFormProps> = () => {
    const [value, setValue] = useState('');
    const [selectValue, setSelectValue] = useState<SelectOption[]>([]);

    const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleSubmitValue = () => {
        console.log('data from form', { projects: selectValue.map((item) => item.label), name: value });
    };

    return (
        <div className={styles.formWrapper}>
            <Input label="Ваше имя" onChange={handleValueChange} value={value} />
            <Select
                label="Проект на котором вы работаете"
                multiple
                options={options}
                value={selectValue}
                onChange={setSelectValue}
            />
            <Button onClick={handleSubmitValue}>Отправить ответ</Button>
        </div>
    );
};
