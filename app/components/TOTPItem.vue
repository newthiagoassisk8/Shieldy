<template>
    <div
        @click="$emit('activate')"
        :class="[
            'p-4 border rounded-md cursor-pointer flex flex-col items-center justify-center transition-all duration-500',
            !isValid ? 'opacity-50' : 'opacity-100',
            'border-blue-500 bg-blue-50 dark:border-blue-500 dark:bg-blue-600',
            {
                'shadow-md shadow-blue-50 dark:shadow-blue-200': active,
            },
        ]"
    >
        <span class="font-semibold mb-2">{{ item.label }}</span>

        <div class="flex items-center space-x-2 mb-2">
            <span
                :class="['text-lg font-mono transition-colors duration-500', isValid ? 'text-black' : 'text-gray-400']"
            >
                {{ isValid ? item.otp : '------' }}
            </span>
            <button
                @click.stop="copyOTP"
                :disabled="!isValid"
                class="px-2 py-1 border rounded disabled:opacity-50 transition-opacity duration-300"
            >
                Copy
            </button>
        </div>

        <!-- Barra de progresso -->
        <div class="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div class="h-full bg-blue-500 transition-all duration-500" :style="{ width: progress + '%' }"></div>
        </div>

        <div class="text-sm mt-1 text-gray-800 dark:text-gray-100">{{ countdown }}{{ countdown ? 's' : ' ' }}</div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import axios from 'axios';

interface TOTPItemType {
    uid: string;
    label: string;
    otp: string;
    expires: number;
    expiresDate: Date;
    digits: number;
}

const props = defineProps<{
    item: TOTPItemType;
    mode: string;
    active: boolean;
}>();

const countdown = ref(0);
const isValid = ref(false);
const progress = ref(100);
let interval: number;

async function fetchCode() {
    isValid.value = false;
    const res = await axios.get('/api/totp', { params: { uid: props.item.uid } });
    const data: TOTPItemType = res.data;
    props.item.otp = data.otp;
    props.item.expires = data.expires;
    props.item.expiresDate = new Date(data.expiresDate);
    updateCountdown();
}

function updateCountdown() {
    const now = new Date();
    const expires = new Date(props.item.expiresDate);
    const diff = (expires.getTime() - now.getTime()) / 1000; // segundos restantes
    countdown.value = Math.max(0, Math.floor(diff));
    isValid.value = diff > 0;

    // Calcula o período do TOTP
    const period = props.item.digits === 8 ? 30 : 30; // pode personalizar se tiver period diferente
    const elapsed = period - countdown.value;

    progress.value = Math.max(0, Math.min(100, (countdown.value / period) * 100));
}

function tick() {
    updateCountdown();
    if (countdown.value <= 0) fetchCode();
}

function copyOTP() {
    if (isValid.value) navigator.clipboard.writeText(props.item.otp);
}

onMounted(() => {
    updateCountdown();
    interval = window.setInterval(tick, 500); // atualização mais suave
});

onBeforeUnmount(() => {
    clearInterval(interval);
});
</script>
