import { ChangeEvent, useState } from 'react';
import { Input, Select, SelectOption } from '../shared/ui';

const options = [
    { label: 'Дон Кихот', value: 1 },
    { label: 'Колесо', value: 2 },
    { label: 'Ортодо', value: 3 },
    { label: 'Платья', value: 4 },
    { label: 'Агенты', value: 5 },
];

export const App = () => {
    const [value, setValue] = useState('');
    const [selectValue, setSelectValue] = useState<SelectOption[]>([]);

    const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return (
        <>
            <Select
                multiple
                options={options}
                value={selectValue}
                onChange={setSelectValue}
            />
            <Input onChange={handleValueChange} value={value} />

        </>
    );
};
