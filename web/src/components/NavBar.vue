<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid  my-navbar">
            <!-- <a class="navbar-brand" href="/home">K · O · B</a> -->
            <RouterLink class="navbar-brand" :to="{ name: 'home' }">K · O · B</RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">

                <!-- 导航栏选项 -->
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <RouterLink class="nav-link" :to="{ name: 'pk_index' }" active-class="active">对战</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" :to="{ name: 'game_record' }" active-class="active">对局记录</RouterLink>
                    </li>
                </ul>

                <!-- 个人登录信息 -->
                <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" active-class="active" href="#" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            {{ username }}
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                </ul>
                <form class="d-flex" role="search" v-if="!is_login">
                    <button class="btn btn-outline-success" type="submit">登录</button>
                    <button class="btn btn-outline-success" type="submit">注册</button>
                </form>
            </div>
        </div>
    </nav>
</template>

<script>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
export default {
    name: "NavBar",
    setup() {
        let is_login = ref("");
        let username = ref("");
        is_login.value = true;
        username.value = "玛莲妮亚";
        return {
            is_login,
            username,
        };
    },
    components: { RouterLink }
}

</script>

<style scoped>
form>button {
    margin-right: 10px;
}

.my-navbar {
    margin-left: 20vh;
    margin-right: 20vh;
}
</style>