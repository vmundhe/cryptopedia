<template>
    <div class="container">
        <nav class="navbar is-black" role="navigation" aria-label="main navigation">
            <router-link class="navbar-item" :to="`/`" tag="h1">Cryptopedia</router-link>
        </nav>
        <router-view></router-view>
    </div>
</template>
