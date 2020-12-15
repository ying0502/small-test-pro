<template>
  <div>
    <header id="header">
      <a id="header-nav" href='#/index'>
        Go to MainPage
      </a>
    </header>
    <div id="list">
      <div v-for="i in dataset.length" v-bind:key="dataset[i-1].name" >
        <button v-if="dataset[i-1].isHidden" v-on:click="unfold_list(i)">展开</button>
        <transition name="fade">
          <div class="list-item" v-if="!dataset[i-1].isHidden">
            <div class="name-div">
              <p class="name">
                {{ dataset[i-1].name }}
              </p>
            </div>
            <div id="action">
              <ul>
                <li>
                  <button v-on:click="add_list(i-1)">插入</button>
                </li>
                <li>
                  <button v-on:click="fold_list(i)">折叠</button>
                </li>
                <li>
                  <button v-on:click="delete_data(i)">删除</button>
                </li>
              </ul>
            </div>
          </div>
        </transition>
      </div>
      <div id="operation">
        <button id="add" v-on:click="add_list(dataset.length)">新增</button>
        <button v-on:click="shuffle">随机排序</button>
      </div>
    </div>
  </div>
</template>
<script>
import jsonImport from '../assets/list.json'
export default {
  name: 'List',
  data () {
    return {
      dataset: jsonImport.list
    }
  },
  methods: {
    delete_data: function (i) {
      this.dataset.splice(i - 1, 1)
    },
    fold_list: function (i) {
      this.dataset[i - 1].isHidden = true
    },
    unfold_list: function (i) {
      this.dataset[i - 1].isHidden = false
    },
    add_list: function (i) {
      this.dataset.splice(i, 0, {
        name: 'name',
        id: i,
        isHidden: false
      })
    },
    shuffle: function () {
      for (let i = 0; i < this.dataset.length; i++) {
        const randomIndex = Math.round(Math.random() * (this.dataset.length - 1 - i)) + i;
        [this.dataset[i], this.dataset[randomIndex]] = [this.dataset[randomIndex], this.dataset[i]]
      }
    }
  }
}
</script>
<style scoped>
#header {
  height: 20px;
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
}
#header-nav:hover {
  font-weight: bold;
  color: darkgreen;
}
.name {
  position: relative;
  left:50px
}
.list-item {
  display: flex;
  flex-direction: row;
  margin: 2vh;
  border: solid 2px black;
}
#list {
  margin: 5vh;
  border: solid 2px black;
  padding: 10px;
}
.name-div {
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
}
#action {
  width: 10%;
  display: flex;
  justify-content: flex-end;
}
#operation {
  display: flex;
  justify-content: center;
}
#add {
  margin-right: 30px;
  width: 5em;
}
ul {
  margin-block-start: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
