import axios from 'axios';

// eslint-disable-next-line max-len
const WEBHOOK_URL = 'https://discord.com/api/webhooks/1217117113869799514/UY02V5ChO0_U75eRimhaqXI0c3JnWkQ9M2VZDbhCmchuU0cHs_OwBDpco7UPuENhudmP';

export const sendMessage = async (username: string, form: string) => {
    try {
        const formContent = {
            title: `Статус от ${username}`,
            description: form,
        };
        const params = {
            username: 'Daily Standup',
            avatar_url: 'https://rusinfo.info/wp-content/uploads/c/4/f/c4f766da294929e48242a2a67606ff3b.jpg',
            content: `Новое сообщение о статусе получено от ${username}`,
            embeds: [
                formContent,
            ],
        };
        const result = await axios.post(WEBHOOK_URL, params);
        return result;
    } catch (e) {
        console.warn(e);
    }
};
