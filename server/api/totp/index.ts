import { TOTP } from 'totp-generator';
import { defineEventHandler, getQuery } from 'h3';

// Mock database de itens TOTP
const TOTPKeys: Record<string, any> = {
    item1: {
        label: 'Demo 1 - 1 digitos',
        icon: null,
        key: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
        opts: { digits: 6, period: 30 }

    },
    item2: {
        label: 'Demo 2 - 8 digitos',
        icon: null,
        key: 'JBSWY3DPEHPK3PXP',
        opts: { digits: 8, algorithm: 'SHA-256', period: 30 },
    },
};

async function getCode(uid: string) {
    const TOTPData = TOTPKeys[uid];
    if (!TOTPData) return null;

    const { otp, expires } = await TOTP.generate(TOTPData.key, TOTPData.opts);
    return {
        uid,
        label: TOTPData.label,
        otp,
        expires,
        now: (new Date()).getTime(),
        expiresDate: new Date(expires),
        digits: TOTPData.opts.digits,
        secret: TOTPData.key
    };
}

export default defineEventHandler(async (event) => {
    const { uid } = getQuery(event);

    setHeader(event, 'Access-Control-Allow-Origin', '*')
    setHeader(event, 'Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    setHeader(event, 'Access-Control-Allow-Headers', 'Content-Type')

    // Se for uma requisição OPTIONS, apenas responde 204 (pré-flight)
    if (event.node.req.method === 'OPTIONS') {
        event.node.res.statusCode = 204
        return
    }

    if (uid) {
        // Retorna apenas o item solicitado
        const code = await getCode(uid as string);
        return code;
    }

    // Retorna todos os itens
    const codes = await Promise.all(Object.keys(TOTPKeys).map((id) => getCode(id)));
    return codes;
});
