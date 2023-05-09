import { createUrls, EMPTY_URL_ITEM, IUrlItem } from 'react-create-url';

interface IApiUrl {
    api: {
        user: {
            firstName: (id22?: string) => IUrlItem;
        };
    };
}

export const API_URL = createUrls<IApiUrl>({
    api: {
        user: {
            firstName: (id22?: string) => EMPTY_URL_ITEM,
        },
    },
});
