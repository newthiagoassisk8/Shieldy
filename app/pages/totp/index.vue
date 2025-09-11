<template>
    <div class="p-6 max-w-5xl mx-auto">
        <div class="flex justify-between items-center mb-4">
            <h1 class="text-2xl font-bold">TOTP Manager</h1>
            <div>
                <button @click="mode = 'list'" :class="btnMode('list')">List</button>
                <button @click="mode = 'grid'" :class="btnMode('grid')">Grid</button>
            </div>
        </div>

        <div v-if="mode === 'list'" class="space-y-4">
            <TOTPItem
                v-for="item in items"
                :key="item.uid"
                :item="item"
                :mode="mode"
                :active="activeUid === item.uid"
                @activate="activeUid = item.uid"
            />
        </div>

        <div v-else class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <TOTPItem
                v-for="item in items"
                :key="item.uid"
                :item="item"
                :mode="mode"
                :active="activeUid === item.uid"
                @activate="activeUid = item.uid"
            />
        </div>
    </div>
    <div>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam odio nulla est ad aut dignissimos voluptas
            aliquam laborum distinctio? Eaque sunt officiis minus vel consequuntur quas nam velit, eligendi accusamus
            eius! Provident necessitatibus et dolorum consequatur maxime corrupti quis debitis accusamus, earum
            voluptatum voluptates vero rem quisquam illum fuga, repellendus libero nam, temporibus deserunt! Maxime
            architecto ducimus accusantium ipsa debitis vero sapiente minima? Perferendis accusamus temporibus nobis sed
            dolor corrupti blanditiis maiores quidem, numquam, ut debitis in, itaque sunt consectetur expedita velit
            consequuntur ratione autem hic non dolore explicabo neque sapiente. Placeat, maiores repudiandae. Beatae,
            earum totam consectetur repudiandae quis vel. Rem fuga fugit commodi debitis iste nam architecto eum quia
            quibusdam enim ipsam totam, praesentium veritatis voluptatem similique magni explicabo distinctio adipisci
            ducimus voluptatibus ipsa tempora dolorem aspernatur? Ex earum doloribus harum quo asperiores recusandae
            suscipit nesciunt expedita. Ea commodi nesciunt aliquam possimus tempora assumenda sapiente libero ipsum
            esse recusandae, repellat vitae delectus fugiat deserunt quis mollitia quae nemo praesentium cupiditate
            dolorum perferendis adipisci quibusdam. Nesciunt illum accusantium vitae natus nisi? Corrupti inventore
            fugit perspiciatis quia natus aspernatur. Officia, tenetur dolore quod, placeat fugiat quis dolores iusto
            recusandae fugit delectus, quo a voluptatem quisquam unde. Ea exercitationem delectus est, esse repellat
            nulla consectetur ducimus magnam eveniet aliquam, dicta corrupti? Sequi, repellat corrupti? At veritatis
            sunt dolorem. Dolorum velit provident necessitatibus quibusdam dolorem aspernatur, debitis id minus
            exercitationem nisi corporis voluptatem, soluta sequi culpa repellat eum deserunt illo itaque molestiae.
            Labore repudiandae alias asperiores necessitatibus quibusdam soluta quos totam obcaecati repellat a,
            laboriosam consequatur ducimus maxime porro dolore at laborum vitae nam illum praesentium? Incidunt corporis
            aperiam facere eveniet explicabo! Sint natus illo minima quidem vel nobis, libero asperiores officiis
            voluptates repudiandae ipsam, fuga odit voluptas quod laudantium et nam debitis magni tenetur voluptatibus!
            Repellendus tenetur non voluptatibus cumque ex quam exercitationem soluta necessitatibus sunt! Dolore fugit
            magni veniam, pariatur est modi provident placeat nam ab minus ratione quos. Aperiam accusamus commodi hic
            earum asperiores quia odio quas mollitia id nesciunt sint expedita ipsa beatae sapiente perferendis magni
            debitis, veritatis recusandae voluptates nam rem. Sed adipisci, magnam cupiditate repellat a nemo quisquam
            fugit necessitatibus ad quae libero nulla, maxime esse impedit, aliquam voluptatem cumque laboriosam?
            Molestiae omnis fugit ab architecto aperiam atque sequi harum ipsa explicabo! Quos iste modi maiores odio
            sunt, nihil, quo, nostrum quam molestias dolor deleniti ea. Odio reprehenderit harum ducimus. Deserunt
            impedit quos architecto delectus soluta?
        </p>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue';
import TOTPItem from '~/components/TOTPItem.vue';
import axios from 'axios';

interface TOTPItemType {
    uid: string;
    label: string;
    otp: string;
    expires: number;
    expiresDate: Date;
    digits: number;
}

const items = ref<TOTPItemType[]>([]);
const activeUid = ref<string>('');
const mode = ref<'list' | 'grid'>('list');

function btnMode(m: 'list' | 'grid') {
    return ['px-4 py-2 rounded-md border', mode.value === m ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'];
}

async function fetchItems() {
    const res = await axios.get('/api/totp');
    items.value = res.data;
    if (!activeUid.value && items.value.length) activeUid.value = items.value[0].uid;
}

onMounted(() => {
    fetchItems();
});
</script>

<style scoped>
button {
    transition: all 0.2s;
}
button:hover {
    opacity: 0.8;
}
</style>
