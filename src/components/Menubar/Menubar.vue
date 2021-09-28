<template>
          <div class="nav-box">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="../../assets/logo.png" alt="" width="30" height="24">
    </a>
    <a class="navbar-brand" href="#">وبوک</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">نمونه ها</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">برآورد هزینه</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">سفارش</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#" tabindex="-1" aria-disabled="false">درباره ما</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
</template>



<script>
export default {
    
}
</script>



<style scoped>
*{
  box-sizing: border-box;
}

@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lalezar&display=swap');
.nav-link,.navbar-brand{
  font-family: 'IBM Plex Sans Arabic', sans-serif;
}
.nav-item{
  padding-right: 40px;
}

body,.main-box{
  margin:0 !important;
  padding:0 !important;
}
.container-fluid,.container{
    direction: rtl;
}
</style>