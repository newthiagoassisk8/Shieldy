/*
    Usando exemplo encontrado em: https://www.npmjs.com/package/totp-generator
*/

import { TOTP } from 'totp-generator';

// Aqui futuramente irei buscar de um banco de dados a lista de itens cadastrados
const TOTPKeys = {
    item1: {
        label: 'Demo 1 - 6 digitos',
        icon: null,
        key: 'JBSWY3DPEHPK3PXP',
        opts: {
            digits: 6,
        },
    },
    item2: {
        label: 'Demo 2 - 8 digitos',
        icon: null,
        key: 'JBSWY3DPEHPK3PXP',
        opts: {
            digits: 8,
            algorithm: 'SHA-512',
            // period: 60,
        },
    },
};

const getCode = async function (uid: string) {
    if (!uid?.trim() || !(uid in TOTPKeys)) {
        return null;
    }

    const TOTPData = TOTPKeys[uid] || {};

    if (!TOTPData) {
        return null;
    }

    const TOTPKey = TOTPData?.key;

    // const { otp, expires } = await TOTP.generate(TOTPKey);

    const { otp, expires } = await TOTP.generate(TOTPKey, TOTPData?.opts || {});
    /*
    const { otp, expires } = await TOTP.generate('JBSWY3DPEHPK3PXP', {
        digits: 8,
        algorithm: 'SHA-512',
        period: 60,
        // timestamp: 1465324707000,
    }); */

    const expiresDate = new Date(expires);

    // console.log(otp); // prints a 6-digit time-based token based on provided key and current time
    // console.log('Expires in %s', expiresDate.toLocaleString());
    // console.log('Expires in %s', expiresDate.toString());

    return {
        otp,
        expires,
        expiresDate,
        digits: TOTPData?.opts?.digits || String(otp || '')?.trim()?.length,
    };
};

const getCodeFromAll = async function () {
    const toReturn = [];

    for (let item in TOTPKeys) {
        let itemData = await getCode(item);

        if (itemData) {
            toReturn.push(itemData);
        }
    }

    return toReturn.filter((i: any) => i);
};

const allCodes = await getCodeFromAll();
const now = new Date();

console.log({
    allCodes,
    now,
});
