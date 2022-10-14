<template>

    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Rebook</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <el-scrollbar height=100%>
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
                                                    <star/>
                                                </el-icon>
                                            </el-button>
                                        </el-tooltip>
                                        <el-tooltip class="box-item" effect="light" content="Cart" placement="bottom">
                                            <el-button class="el-icon-four" size="large" circle>
                                                <el-icon size="25px">
                                                    <shopping-cart/>
                                                </el-icon>
                                            </el-button>
                                        </el-tooltip>
                                        <el-tooltip class="box-item" effect="light" content="orders" placement="bottom">
                                            <el-button class="el-icon-four" size="large" circle>
                                                <el-icon size="25px">
                                                    <box/>
                                                </el-icon>
                                            </el-button>
                                        </el-tooltip>
                                        <el-tooltip class="box-item" effect="light" content="My account"
                                                    placement="bottom">
                                            <router-link to='/view/login'>
                                            <el-button class="el-icon-four" size="large" circle>
                                                <el-icon size="25px">
                                                    <avatar/>
                                                </el-icon>
                                            </el-button>
                                            </router-link>
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
                            <el-menu-item index="1">Home
                            </el-menu-item>
                            <el-menu-item index="2">Best Sellers</el-menu-item>
                            <el-sub-menu index="3">
                                <template #title>Books</template>
                                <div class="menu-level2">
                                    <el-menu-item index="2-1">
                                        <a class="color-sub">Medical</a></el-menu-item>
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
        <!-- header-slider-area-->
        <div class="slider-area">
            <div class="container">
                <div class="single-slider bg-img">
                    <el-carousel height="450px" interval="5000" arrow="always">
                        <el-carousel-item v-for="item in images" :key="item">
                            <h3><img :src="item.url"/></h3>
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </div>
        </div>
        <!-- best book -->
        <div class="best-books-area">
            <div class="container">
                <el-divider border-style="double"/>
                <div class="row">
                    <div class="text-center mb-50">
                        <h2>Popular Books</h2>
                        <p>Browse the collection of our best selling and top interresting products.
                            <br/> all definitely find what you are looking for..</p>
                    </div>
                </div>
                <div class="product-wrapper">
                    <el-row :gutter="20">
                        <el-col :span="6">
                            <div class="book-item">
                                <el-card :body-style="{ padding: '0px' }">
                                    <img
                                            src="./assets/books/1.jpg"
                                            class="wrapper-image"
                                    />
                                    <el-rate
                                            v-model="book1"
                                            disabled
                                            show-score
                                            text-color="#ff9900"
                                            score-template="{value}"
                                    />
                                    <div style="padding: 10px">
                                        <span>Yummy hamburger</span>
                                        <p>$50.00</p>
                                        <div class="wrapper-cart">
                                            <a href="" class="btn wrapper-button">Add To Cart</a>
                                        </div>
                                    </div>
                                </el-card>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="book-item">
                                <el-card :body-style="{ padding: '0px' }">
                                    <img
                                            src="./assets/books/1.jpg"
                                            class="wrapper-image"
                                    />
                                    <el-rate
                                            v-model="book2"
                                            disabled
                                            show-score
                                            text-color="#ff9900"
                                            score-template="{value}"
                                    />
                                    <div style="padding: 10px">
                                        <span>Yummy hamburger</span>
                                        <p>$50.00</p>
                                        <div class="wrapper-cart">
                                            <a href="" class="btn wrapper-button">Add To Cart</a>
                                        </div>
                                    </div>
                                </el-card>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="book-item">
                                <el-card :body-style="{ padding: '0px' }">
                                    <img
                                            src="./assets/books/4.jpg"
                                            class="wrapper-image"
                                    />
                                    <el-rate
                                            v-model="book3"
                                            disabled
                                            show-score
                                            text-color="#ff9900"
                                            score-template="{value}"
                                    />
                                    <div style="padding: 10px">
                                        <span>Yummy hamburger</span>
                                        <p>$50.00</p>
                                        <div class="wrapper-cart">
                                            <a href="" class="btn wrapper-button">Add To Cart</a>
                                        </div>
                                    </div>
                                </el-card>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="book-item">
                                <el-card :body-style="{ padding: '0px' }">
                                    <img
                                            src="./assets/books/10.jpg"
                                            class="wrapper-image"
                                    />
                                    <el-rate
                                            v-model="book4"
                                            disabled
                                            show-score
                                            text-color="#ff9900"
                                            score-template="{value}"
                                    />
                                    <div style="padding: 10px">
                                        <span>Yummy hamburger</span>
                                        <p>$50.00</p>
                                        <div class="wrapper-cart">
                                            <a href="" class="btn wrapper-button">Add To Cart</a>
                                        </div>
                                    </div>
                                </el-card>
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <el-divider border-style="double"/>
            </div>
        </div>

        <!-- foot area -->
        <div class="foot-area">
            <div class="foot-top">
                <div class="container">
                    <el-row :gutter="20">
                        <el-col :span="6">
                            <h4 class="foot-title">Company</h4>
                            <ul class="footer-list">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Delivery Information</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms &amp; Conditions</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Support Center</a></li>
                            </ul>
                        </el-col>
                        <el-col :span="6">
                            <h4 class="foot-title">Account</h4>
                            <ul class="footer-list">
                                <li><a href="#">Sign In</a></li>
                                <li><a href="#">View Cart</a></li>
                                <li><a href="#">My favorite</a></li>
                                <li><a href="#">Track My Order</a></li>
                            </ul>
                        </el-col>
                        <el-col :span="6">
                            <h4 class="foot-title">Company</h4>
                            <ul class="footer-list">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Delivery Information</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms &amp; Conditions</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Support Center</a></li>
                            </ul>
                        </el-col>
                        <el-col :span="6">
                            <h4 class="foot-title">Company</h4>
                            <ul class="footer-list">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Delivery Information</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms &amp; Conditions</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Support Center</a></li>
                            </ul>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>
        <!-- foot end-area -->
        <div class="foot-end-area">
            <div class="container">
                <div class="row">
                    <a class="foot-contact text-right">© Rebooks - All rights reserved.</a>
                </div>

            </div>
            <!--div class="foot-top-logo ">
                <a href="" class="mb-15"><img src="./assets/logo.png" alt="logo"></a>
                <p class="font-lg text-heading">Awesome grocery store website template</p>
            </div>
            <ul class="foot-contact">
                <li><img src="" alt=""><strong>Address: </strong> <span>5171 W Campbell Ave undefined Kent, Utah 53127 United States</span>
                </li>
                <li><img src="" alt=""><strong>Call Us:</strong><span>(+91) - 540-025-124553</span></li>
                <li><img src="" alt=""><strong>Email:</strong><span><a href="" class="__cf_email__">[email&#160;protected]</a></span>
                </li>
                <li><img src="" alt=""><strong>Hours:</strong><span>10:00 - 18:00, Mon - Sat</span></li>
            </ul-->

        </div>

    </el-scrollbar>
</template>

<script>
    import {Avatar, Box, ShoppingCart, Star} from "@element-plus/icons";
    import {ref} from 'vue';

    export default {
        name: 'homePage',
        components: {
            Avatar,
            Box,
            ShoppingCart,
            Star,
        },
        data() {
            return {
                images: [
                    {url: require('./assets/slider/1.jpg')},
                    {url: require('./assets/slider/2.jpg')},
                    {url: require('./assets/slider/1.jpg')},
                    {url: require('./assets/slider/2.jpg')}
                ],
                book1: ref(4.5),
                book2: ref(4.3),
                book3: ref(4.2),
                book4: ref(4.3),
            }
        },
    }

</script>
