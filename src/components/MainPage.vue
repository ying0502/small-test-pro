<template>
  <div>
    <header id="header">
      <a id="header-nav" href='#/list'>
        Go to List
      </a>
    </header>
    <div id="PageConfig">
      <div>Link Your Dream</div>
    </div>
    <footer id="footer">
      Created by Siying Chen
    </footer>
  </div>
</template>

<script>
export default {
  name: 'MainPage'
}
</script>

<style scoped>
#header {
  height: 30px;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: #eeeeee;
}
#header-nav {
  float: right;
  height: 100%;
  color: black;
  font-weight: normal;
  margin-right: 5px;
}
#header-nav:hover {
  font-weight: bold;
  color: blue;
}
#footer {
  height: 20px;
  width: 100%;
  bottom: 0;
  background: #999999
}
#PageConfig {
  margin-top: 30px;
  font-size: 4em;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, blue, pink);
}
</style>
