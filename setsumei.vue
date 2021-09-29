<template>
  <div id="app">
    <table>
        <tr>
            <th>index</th>            
            <th>タイトル</th>                              
            <th>削除／編集</th>
        </tr>
        <tr v-for="(todo, index) in getTodos" :key="todo.id">    
            <td>{{index}}</td>            
            <td>{{todo.title}}</td>                  
            <td>
                <button @click="dltTodo(index)">削除</button>
                <button @click="edtTodo(index)">編集</button>                
            </td>
        </tr>
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'App',
  data(){
    return {
    }
  },
  methods:{
    ...mapActions(['deleteTd']),
    
    dltTodo(index){                     
        var res = confirm("削除しても大丈夫ですか？");
        if( res == true ) { this.deleteTd(index) }
        else { alert("キャンセルしました。") }
    },

    //
    // boxesの中身
    // boxes = [
    //     { title: 'test1' },
    //     { title: 'test2' },
    //     { title: 'test3' } 
    // ]
    //
    //　この boxes を表示させたいとする。
    // こいつは Store の state にあるので、Store の　getters でまず値を持ってくる

    //ストア
    // getters:{
    //  getBoxes: state => state.boxes 
    //  getBoxes(state){ return state.boxes }
    //  getBoxes: function(state) { return state.boxes }
    // }
    //


    //contact.vue
    // templateで書くとこんな感じ
    //　<table>        
    //      <tr>                  
    //          <th>タイトル</th>                              
    //          <th>削除／編集</th>
    //      </tr>
    //      <tr v-for="(box, index) in getBoxes" >
    //          <td>{{box.title}}</td>                  
    //          <td>
    //              <button @click="dltTodo(index)">削除</button>
    //              <button @click="edtTodo(index)">編集</button>                
    //          </td>
    //      </tr>
    //  </table>
    //
    //  タイトル　｜　ボタン　
    //　ーーーーーーーーーーーー
    //　test1　  ｜ 編集　削除 index = 0
    //　test2　  ｜ 編集　削除 index = 1  ⇦　ここの編集を押したとする
    //　test3　  ｜ 編集　削除 index = 2
    //
    //　getBoxes の index + 1 個目の要素の title を更新したい
    // mutation
    //　
    //　this.getBoxes[index].title = "test2new"
    //　
    //　box っていう変数に入れたい
    //　this.box = this.getBoxes[index]
    //　
    // index = 1
    // edtTodo(index){
    //     this.$router.push({ name:"todoEdit", params: { id: index } }); 
    // }
    //


    //contactEdit.vue
    //　受け取る側(todoEdit)
    //  this.$route.params.id = 1
    //
    //　this.box = this.getBoxes[this.$route.params.id]

    edtTodo(index){
        this.$router.push({ name:"todoEdit", params: { index: index } }); 
    }
  },  
  computed:{
      ...mapGetters(['getTodos']),
  }
}
</script>
