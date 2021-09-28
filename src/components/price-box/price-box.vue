<template>
    <div class="vue-main">

        <div class="whole-box">
            <div class="top-bgc">
                <p>{{toptitr}}</p>
            </div>
            <div class="flex-price">
                <div class="price-box">
                    <div><p class="num">{{price}}</p><p class="toman">میلیون تومان</p></div>
                    <div class="border"></div>
                    </div>
                    <div class="toggle">
                        <div class="toggle-item" @click="slidefunc1"><p> بخش تجربه و طراحی </p><img v-if="plus1" src="https://img.icons8.com/color/48/000000/plus--v1.png"/><img v-if="minus1"  src="https://img.icons8.com/color/48/000000/minus.png"/></div>

                            <slide-up-down :active="active1" :duration="300">
                                <div class="sliding">
                                    <p>۱.اولین تست کار</p>
                                    <p>۲.دومین تست کار</p>
                                    <p>۳.سومین تست کار</p>
                                    <p>۴.چهارمین تست کار</p>

                                </div>
                            </slide-up-down>

                        <div class="toggle-item" @click="slidefunc2"><p>بخش صفحه سازی</p><img v-if="plus2"  src="https://img.icons8.com/color/48/000000/plus--v1.png"/><img v-if="minus2"  src="https://img.icons8.com/color/48/000000/minus.png"/></div>

                            <slide-up-down :active="active2" :duration="300">
                                <div class="sliding">
                                    <p>۱.اولین تست کار</p>
                                    <p>۲.دومین تست کار</p>
                                    <p>۳.سومین تست کار</p>
                                    <p>۴.چهارمین تست کار</p>

                                </div>
                            </slide-up-down>

                        <div class="toggle-item" @click="slidefunc3"><p>بخش سئو و امنیت</p><img v-if="plus3"  src="https://img.icons8.com/color/48/000000/plus--v1.png"/><img v-if="minus3"  src="https://img.icons8.com/color/48/000000/minus.png"/></div>

                            <slide-up-down :active="active3" :duration="300">
                                <div class="sliding">
                                    <p>۱.اولین تست کار</p>
                                    <p>۲.دومین تست کار</p>
                                    <p>۳.سومین تست کار</p>
                                    <p>۴.چهارمین تست کار</p>

                                </div>
                            </slide-up-down>

                        <div class="toggle-item" @click="slidefunc4"><p>بخش مدیریت و پنل ارتباطی</p><img v-if="plus4"  src="https://img.icons8.com/color/48/000000/plus--v1.png"/><img v-if="minus4"  src="https://img.icons8.com/color/48/000000/minus.png"/></div>

                            <slide-up-down :active="active4" :duration="300">
                                <div class="sliding">
                                    <p>۱.اولین تست کار</p>
                                    <p>۲.دومین تست کار</p>
                                    <p>۳.سومین تست کار</p>
                                    <p>۴.چهارمین تست کار</p>
                                </div>
                            </slide-up-down>

                        <div class="toggle-item" @click="slidefunc5"><p>بخش آموزش و پشتیبانی</p><img v-if="plus5"  src="https://img.icons8.com/color/48/000000/plus--v1.png"/><img v-if="minus5"  src="https://img.icons8.com/color/48/000000/minus.png"/></div>

                            <slide-up-down :active="active5" :duration="300">
                                <div class="sliding">
                                    <p>۱.اولین تست کار</p>
                                    <p>۲.دومین تست کار</p>
                                    <p>۳.سومین تست کار</p>
                                    <p>۴.چهارمین تست کار</p>

                                </div>
                            </slide-up-down>

                    </div>

                    <div class="btn-box"><button class="btn">جزییات و ثبت درخواست</button></div>
                
            </div>
        </div>

    </div>
</template>


<script>
export default {
    props:{
        toptitr:String,
        price:String
    },
    data(){
        return{
            active1: true,
            plus1:false,
            minus1:true,

            active2: false,
            plus2:true,
            minus2:false,

            active3: false,
            plus3:true,
            minus3:false,

            active4: false,
            plus4:true,
            minus4:false,

            active5: false,
            plus5:true,
            minus5:false,
        }
    },
    methods:{
        slidefunc1(){
            this.active1 = !this.active1
            this.plus1 = !this.plus1
            this.minus1 = !this.minus1
            
            this.active2=this.active3=this.active4=this.active5=false
            this.minus2=this.minus3=this.minus4=this.minus5=false
            this.plus2=this.plus3=this.plus4=this.plus5=true
        },

                slidefunc2(){
            this.active2 = !this.active2
            this.plus2 = !this.plus2
            this.minus2 = !this.minus2

            this.active1=this.active3=this.active4=this.active5=false
            this.minus1=this.minus3=this.minus4=this.minus5=false
            this.plus1=this.plus3=this.plus4=this.plus5=true
        },

                slidefunc3(){
            this.active3 = !this.active3
            this.plus3 = !this.plus3
            this.minus3 = !this.minus3

            this.active2=this.active1=this.active4=this.active5=false
            this.minus2=this.minus1=this.minus4=this.minus5=false
            this.plus2=this.plus1=this.plus4=this.plus5=true
        },

                slidefunc4(){
            this.active4 = !this.active4
            this.plus4 = !this.plus4
            this.minus4 = !this.minus4 

            this.active2=this.active3=this.active1=this.active5=false
            this.minus2=this.minus3=this.minus1=this.minus5=false
            this.plus2=this.plus3=this.plus1=this.plus5=true
        },

                slidefunc5(){
            this.active5 = !this.active5
            this.plus5 = !this.plus5
            this.minus5 = !this.minus5

            this.active2=this.active3=this.active4=this.active1=false
            this.minus2=this.minus3=this.minus4=this.minus1=false
            this.plus2=this.plus3=this.plus4=this.plus1=true
        },
    }
}

</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lalezar&display=swap');
*{
    box-sizing: border-box;
}

.top-bgc{
    background-color: rgb(0, 89, 255);
    border-radius: 10px 10px 0 0;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.border{
    width: 70%;
    height: 5px;
    background-color: rgb(183, 209, 255);
    border-radius: 5px;
}
.top-bgc p{
    color: #fff;
    font-family: 'Lalezar', cursive;
    font-size: 30px;
}
.price-box div{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
}
.price-box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.num{
    font-family: 'Lalezar', cursive;
    font-size: 80px;
    margin:0 5px;
}

.toman{
    font-family: 'IBM Plex Sans Arabic', sans-serif;
    font-size: 20px;
    margin:0 5px;

}

.btn{
    background-color: rgb(255, 0, 76);
    width: 200px;
    padding: 10px;
    border-radius: 25px;
    color: #fff;
    font-family: 'Lalezar', cursive;
    font-size: 20px;
}
.btn:hover{
    background-color: rgb(255, 0, 34);
    color: #fff;
    transition: 0.3s;
}
.flex-price{
    background-color: rgb(228, 238, 255);
    height: 100%;
    padding: 20px 20px 20px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: space-between;
    border-radius: 0 0 10px 10px;
}

.toggle-item{
    /* border: 3px solid blueviolet; */
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    align-content: center;
    justify-content: flex-end;
    margin-top: 5px;
    width:max-content
}

.toggle-item:hover{
    cursor: pointer;
}
.toggle-item img{
    margin:0 5px 5px 5px;
    width: 30px;
    
}
.toggle-item p{
    font-family: 'IBM Plex Sans Arabic', sans-serif;
    font-size: 20px;}
.btn-box{
        display: flex;
        justify-content: center;
}

.sliding{
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 5px;
    margin-right: 30px;

}

.sliding p{
    font-family: 'IBM Plex Sans Arabic', sans-serif;
    font-size: 18px;
}
</style>