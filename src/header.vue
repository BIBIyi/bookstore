<template>

    <!-- header-top-area-->
    <div class="header-area">
        <div class="header-style">
            <div class="container">
                <div class="row">
                    <div class="header-wrap">
                        <div class="header-logo">
                            <a><img src="./assets/logo.png" alt="logo"></a>
                        </div>
                        <div class="header-right">
                            <div class="header-search">
                                <form action="#">
                                    <input type="text" placeholder="Search ..."/>
                                    <a href="#"><img src="./assets/icons/search.png" alt="search"/></a>
                                </form>
                            </div>
                            <div class="header-icons">
                                <el-col class="header-icons-rows">
                                    <el-tooltip class="box-item" effect="light" content="Favorites"
                                                placement="bottom">
                                        <el-button class="el-icon-four" size="large" circle>
                                            <el-icon size="25px">
                                                <router-link to="/favorite" custom v-slot="{ navigate }">
                                                    <div @click="navigate" @keypress.enter="navigate" role="link">
                                                        <star/>
                                                    </div>
                                                </router-link>
                                            </el-icon>
                                        </el-button>
                                    </el-tooltip>
                                    <el-tooltip class="box-item" effect="light" content="Cart" placement="bottom">
                                        <el-button class="el-icon-four" size="large" circle>
                                            <el-icon size="25px">
                                                <router-link to="/cart" custom v-slot="{ navigate }">
                                                    <div @click="navigate" @keypress.enter="navigate" role="link">
                                                        <shopping-cart/>
                                                    </div>
                                                </router-link>
                                            </el-icon>
                                        </el-button>
                                    </el-tooltip>
                                    <el-tooltip class="box-item" effect="light" content="orders" placement="bottom">
                                        <el-button class="el-icon-four" size="large" circle>
                                            <el-icon size="25px">
                                                <router-link to="/order" custom v-slot="{ navigate }">
                                                    <div @click="navigate" @keypress.enter="navigate" role="link">
                                                        <box/>
                                                    </div>
                                                </router-link>
                                            </el-icon>
                                        </el-button>
                                    </el-tooltip>
                                    <el-tooltip class="box-item" effect="light" content="My account"
                                                placement="bottom">
                                        <el-button class="el-icon-four" size="large" circle>
                                            <router-link to="/login" custom v-slot="{ navigate }">
                                                <div @click="navigate" @keypress.enter="navigate" role="link">
                                                    <el-icon size="25px">
                                                        <avatar/>
                                                    </el-icon>
                                                </div>
                                            </router-link>
                                        </el-button>

                                    </el-tooltip>
                                </el-col>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- header-menu-area-->
    <el-affix>
        <div class="menu-area">
            <div class="menu-level1">
                <div class="container">
                    <el-menu
                            class="el-menu-demo"
                            mode="horizontal"
                            text-color="#223544"
                            active-text-color="#EF7C29"
                            background-color="transparent"
                    >

                        <el-menu-item index="1">
                            <router-link to='/' custom v-slot="{ navigate }">
                                <div @click="navigate" @keypress.enter="navigate" role="link">
                                    Home
                                </div>
                            </router-link>
                        </el-menu-item>
                        <el-menu-item index="2">Best Sellers</el-menu-item>
                        <el-sub-menu index="3">
                            <template #title>
                                <router-link to='/content' custom v-slot="{ navigate }">
                                    <div @click="navigate" @keypress.enter="navigate" role="link">Books
                                    </div>
                                </router-link>
                            </template>
                            <div class="menu-level2">
                                <el-menu-item index="2-1">
                                    <a class="color-sub">Medical</a>

                                </el-menu-item>

                                <el-menu-item index="2-2">
                                    <a class="color-sub">Computing</a></el-menu-item>
                                <el-menu-item index="2-3">
                                    <a class="color-sub">Sport</a></el-menu-item>
                                <el-menu-item index="2-4">
                                    <a class="color-sub">Health</a></el-menu-item>
                                <el-menu-item index="2-5">
                                    <a class="color-sub">Humour</a></el-menu-item>
                                <el-menu-item index="2-6">
                                    <a class="color-sub">Romance</a></el-menu-item>
                                <el-menu-item index="2-7">
                                    <a class="color-sub">Transport</a></el-menu-item>
                                <el-menu-item index="2-8">
                                    <a class="color-sub">Technology</a></el-menu-item>
                            </div>
                        </el-sub-menu>
                        <el-menu-item index="4">Recycle</el-menu-item>
                        <el-menu-item index="5">Blog</el-menu-item>
                        <el-menu-item index="6">About</el-menu-item>
                        <el-menu-item index="7">Contact</el-menu-item>
                    </el-menu>
                </div>
            </div>
        </div>
    </el-affix>

</template>

<script>
    import {Avatar, Box, ShoppingCart, Star} from "@element-plus/icons";

    export default {
        name: 'ShopHeader',
        components: {
            Avatar,
            Box,
            ShoppingCart,
            Star,
        },

    }

</script>