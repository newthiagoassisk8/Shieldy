<template>
    <div class="text-gray-800 dark:text-gray-200">
        <h1>Hello Nuxt {{ version }}!</h1>

        <div class="h-screen overflow-y-auto">
            <template v-for="i in 4" :key="i">
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, mollitia rem illum repellat quas at?
                    Consectetur, alias eius laudantium officia aut possimus iste corporis non aperiam nemo architecto
                    nesciunt accusamus laborum quod ab quam quasi. Omnis laudantium minima dolorem blanditiis obcaecati
                    quis quia aliquam iusto laborum, itaque atque exercitationem in sapiente molestiae natus provident
                    qui officia adipisci voluptatibus sit temporibus similique? Perferendis ipsa delectus eveniet libero
                    quas eius, odio ut inventore, assumenda animi modi aperiam iusto repellat cupiditate consequatur in?
                    Tempora beatae modi delectus neque corrupti, eum alias ex placeat magni necessitatibus amet rerum
                    minima voluptates repellendus debitis quas, aliquam natus facilis aut fugit quod assumenda, veniam
                    totam? Reiciendis molestiae animi praesentium, libero laudantium consequatur adipisci mollitia, qui
                    a veritatis necessitatibus dolor voluptatem corrupti quod, id dolorum laborum rem quam voluptas
                    nobis autem sunt ad est incidunt! Tenetur eligendi blanditiis vitae modi voluptates, recusandae nemo
                    repellat ipsam placeat repellendus ab eius magni deserunt nesciunt quas nihil distinctio
                    consequuntur aliquam. Impedit culpa error minus nulla nam fugiat earum omnis reprehenderit provident
                    repellendus ullam eaque officiis id excepturi, pariatur sint ipsa ab! Deleniti suscipit totam autem
                    dolores dolorum beatae possimus maiores reprehenderit, labore quia, odio dolor? Fuga ullam sint sunt
                    voluptatum ut, consequuntur repellat quisquam dolores id, a pariatur possimus architecto ab, nulla
                    magnam minima est eligendi laboriosam illo velit quia ratione iste consectetur? Vel earum adipisci
                    laborum nam quas! Voluptate ipsam dignissimos error doloribus magnam quia eligendi unde laudantium,
                    reprehenderit, quibusdam odio, incidunt eius soluta optio dolorem. Praesentium quo velit doloremque
                    in dignissimos esse placeat corrupti corporis inventore non dolorem maiores, soluta id sunt dolore
                    voluptate, laudantium ipsum tenetur incidunt. Quam enim fugit quaerat perferendis, officia
                    blanditiis perspiciatis aliquid vitae quas, necessitatibus quos saepe nulla nobis exercitationem?
                    Vero nostrum impedit quos quia pariatur explicabo ipsum repudiandae velit voluptas voluptatum
                    consectetur eos quaerat odit voluptate eius facere nisi placeat earum delectus nihil perspiciatis
                    repellat, officiis corrupti beatae. Nobis similique minima voluptas ea modi expedita eum, suscipit
                    repudiandae nihil quisquam possimus architecto quas eaque tempore perspiciatis libero tenetur neque
                    dolore. Aliquid incidunt molestiae et inventore, deleniti autem ullam. Maiores nobis, aliquam fugiat
                    sint ipsam sit doloremque reiciendis ullam a optio in, natus veniam provident explicabo asperiores,
                    cumque nesciunt minus. Facilis enim omnis non libero? Consequuntur vitae earum repudiandae fugiat
                    itaque corporis reiciendis similique iusto at officiis quidem sed neque necessitatibus sint,
                    quisquam repellendus incidunt a optio adipisci voluptatibus nulla nostrum assumenda blanditiis!
                    Odit?
                </p>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
const version = 4;
</script>

<style scoped>
h1 {
    font-size: 3rem;
}
</style>
