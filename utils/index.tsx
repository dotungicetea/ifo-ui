export const jsonParse = (value: any) => {
    if (value) {
        const result = JSON?.stringify(value);
        return result ? result : '';
    } else {
        return '';
    }
}

export const stringByJson = (value: any) => {
    if (value) {
        const result = JSON?.parse(value) as string;
        return result ? result : {};
    } else {
        return {};
    }
}

export const getAddressHead = (address: string) => {
    const before = address.substring(0, 6);
    const after = address.substring(address?.length - 3, address?.length);
    return before + '...' + after;
}