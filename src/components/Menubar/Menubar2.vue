<template>
    <div class="container">
        <div class="menu-container">
        <div class="menu">
                <div class="menu2-item radius1" @click="slidenav"><p>نمونه ها</p><img v-if="downicon1" src="../../../pics/down-fill.svg" alt=""><img v-if="upicon1" src="../../../pics/up-fill.svg" alt="">
                                <transition name="slide">
                <div class="menu-child" v-if="slide1">
                    <div class="item-slide"><p>طراحی سایت</p></div>
                    <div class="item-slide"><p>سئو و بهینه سازی</p></div>
                    <div class="item-slide"><p>وب اپلیکیشن</p></div>
                </div>
                </transition>
                </div>


                    <div class="menu2-item"><p>سفارش</p></div>
                    <div class="menu2-item"><p>برآورد هزینه</p></div>
                    <div class="menu2-item"><p>خدمات</p></div>
                    <div class="menu2-item radius2"><p>درباره ما</p></div>

                
                
            
        </div>

    </div>

<div class="main-mobile">
        <div class="mobile-container">

                        <div class="mob-icn" @click="phonenav"><img src="../../../pics/list.svg" alt=""></div>

                            <slide-up-down :active="active1" :duration="300">
                                <div class="sliding">
                                    <div class="slide-topic"><p>نمونه ها</p></div>
                                    <div class="slide-topic"><p>سفارش</p></div>
                                    <div class="slide-topic"><p>برآورد هزینه</p></div>
                                    <div class="slide-topic"><p>خدمات</p></div>
                                    <div class="slide-topic"><p>درباره ما</p></div>




                                </div>
                            </slide-up-down>

        </div>
</div>


</div>
</template>


<script>
export default {
    data(){
        return{
            slide1:false,
            downicon1:true,
            upicon1:false,


            active1:false,
            active2:false,
            downicon2:false,
            upicon2:false,

        }
    },
    methods:{
        slidenav(){
            this.slide1=!this.slide1
            this.downicon1=!this.downicon1
            this.upicon1=!this.upicon1


        },
                phonenav(){
            this.active1=!this.active1
        },
        exptoggle(){
            // this.active2=!this.active2
            this.downicon1=!this.downicon1
            this.upicon1=!this.upicon1
        }
    }
    }


</script>



<style scoped>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic&display=swap');
    *{
        box-sizing: border-box;
    }
    .menu-container{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80px;
        /* position: relative;
        top: 120px; */
    }
    .menu{
        width: 80%;
        height:80px;
        background-color: rgba(209, 209, 209, 0.8);
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 15px;
        padding: 20px 0;

    }


    .menu2-item{
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'IBM Plex Sans Arabic', sans-serif;
        color: black;
        font-size: 20px;
        width: 100%;
        height:80px;
    }

    .menu2-item p{
        font-family: 'IBM Plex Sans Arabic', sans-serif;
        margin:0 20px;
    }

    .menu2-item:hover{
        background-color: rgb(235, 231, 231);
        cursor: pointer;
    }

    .radius1{
        border-radius: 0 15px 15px 0;
    }

    .radius2{
        border-radius: 15px 0 0 15px;
    }
    .sliding-nav{
        display: flex;
        flex-direction: column;
        width: 200px;
        z-index: 1000;


    }

    .slide-nav-item{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(236, 236, 236);
    }

    .slide-nav-item p{
        font-family: 'IBM Plex Sans Arabic', sans-serif;
        color: black;
        font-size: 15px;
    }

    .slide-enter-active {
   transition-duration: 0.3s;
   transition-timing-function: ease-in;
}

.slide-leave-active {
   transition-duration: 0.3s;
   transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to, .slide-leave {
   max-height: 100px;
   overflow: hidden;
}

.slide-enter, .slide-leave-to {
   overflow: hidden;
   max-height: 0;
}

.menu-child{
    position: absolute;
    top: 138px;
    right: 23.5%;
}
.item-slide{
    background-color: rgb(226, 226, 226);
    padding: 10px 20px;
}
.item-slide:hover{
    background-color: rgb(201, 201, 201);
    cursor: pointer;
}
.item-slide p{
    font-family: 'IBM Plex Sans Arabic', sans-serif;
    font-size: 17px;
    color: black;

}


    .mobile-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 70%;
        /* height: 70px; */
        background-color: rgba(209, 209, 209, 0.952);
        align-items: center;
        border-radius: 15px;
        padding: 20px 0;
        z-index: 1;
    }
    .sliding{
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin-right: 30px;
        width: 100%;

}
.slide-topic{
        padding: auto;
        display: flex;
        justify-content: center;
        width: 360px;
        margin-left: 30px;
        /* background-color: rgba(209, 209, 209, 0.952); */

}
.slide-topic:active{
    background-color: #fff;
}
.slide-topic p{
  font-family: 'IBM Plex Sans Arabic', sans-serif;
    font-size: 20px;
}
.main-mobile{
    display: flex;
    justify-content: center;
}
.mob-icn img{
    width: 40px;
}


@media only screen and (min-width:960px) {
    .mobile-container{
        display:none;
    }
}

@media only screen and (max-width:959px) {
    .menu-container{
        display:none;
    }
}
</style>