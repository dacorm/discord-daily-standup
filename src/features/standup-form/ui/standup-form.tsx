import { ChangeEvent, FC, useState } from 'react';
import {
    Button, Input, Select, SelectOption,
    // TODO: алиасы
} from '../../../shared/ui';
import { StandupFormProps } from '../model/types.ts';
import { options } from '../model/model.ts';
import styles from './standup-form.module.css';
import { api } from '../../../shared/api';

export const StandupForm: FC<StandupFormProps> = () => {
    const [value, setValue] = useState('');
    const [selectValue, setSelectValue] = useState<SelectOption[]>([]);
    const [taskValues, setTaskValues] = useState('');
    const [blockers, setBlockers] = useState('');

    // TODO: вынести в хуки
    const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleBlockersChange = (e: ChangeEvent<HTMLInputElement>) => {
        setBlockers(e.target.value);
    };

    const handleChangeTaskValues = (e: ChangeEvent<HTMLInputElement>) => {
        setTaskValues(e.target.value);
    };

    const handleSubmitValue = () => {
        const formattedTasks = taskValues.split(',');
        const mappedTasks = formattedTasks.map((item, index) => {
            const splittedItem = item.split('/');
            return `${index + 1}: [${splittedItem[splittedItem.length - 1]}](${item})`;
        });
        const finalDescription = `
          На текущий момент я работаю над задачами 
          ${mappedTasks.join('\n')}
          ${selectValue.length > 1 ? 'В проектах' : 'В проекте'} ${selectValue.map((item) => item.label).join(', ')}
          ${blockers ? `Блокеры: ${blockers}` : ''}
        `;
        return api.discordApi.sendMessage(value, finalDescription);
        // TODO: TOAST
    };

    return (
        <div className={styles.formWrapper}>
            <Input label="Ваше имя" onChange={handleValueChange} value={value} />
            <Input label="Задачи" onChange={handleChangeTaskValues} value={taskValues} />
            <Select
                label="Проект на котором вы работаете"
                multiple
                options={options}
                value={selectValue}
                onChange={setSelectValue}
            />
            <Input label="Блокеры" onChange={handleBlockersChange} value={blockers} />
            <Button onClick={handleSubmitValue}>Отправить ответ</Button>
        </div>
    );
};
