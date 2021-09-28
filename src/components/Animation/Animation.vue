<template>
        <div class="main">
<div class="box">
  <div class="innerbox-r"></div>
  <div class="innerbox-l"></div>
  <div class="square-c"></div>

</div>

</div>
</template>


<script>
export default {
    
}
</script>


<style scoped>
.main{
    display: flex;
    justify-content: center;
    padding:30px 0px;
    
}


.box{
    width: 300px;
    height: 5px;
    background: rgb(158, 0, 0);
    position: relative;
}

.innerbox-l{
    width: 5px;
    height: 5px;
    background-color: rgb(158, 0, 0);
    border-radius: 100%;
    position: absolute;
    left:-2.5px ;
}

.innerbox-r{
    width: 5px;
    height: 5px;
    background-color: rgb(158, 0, 0);
    border-radius: 100%;
    position: absolute;
    right: -2.5px;

}

.square-c{
    width: 15px;
    height: 15px;
    background-color: rgb(255, 193, 23);
    transform: rotate(45deg);
    position: absolute;
    right: 142.5px;
    top: -5px;
    animation: mid-ani 5s linear infinite;
}

@keyframes mid-ani {
    0%{
        transform: rotate(45deg);
        right: 142.5px;
    }

    25%{
        right: -7.5px;
        transform: rotate(135deg);
    }
    50%{
        transform: rotate(45deg);
        right: 142.5px;
    }

    75%{
        right: 292.5px;
        transform: rotate(-45deg); 
    }

    100%{
        transform: rotate(45deg);
        right: 142.5px;
    }
}
</style>