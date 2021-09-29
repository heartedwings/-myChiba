<template>
  <div class="contact">
    <div>
      <h2>お問い合わせ一覧</h2>
    </div>

    <div class="contact-table">
    <table border="1">
      <tr>
        <td>名前</td>
        <td>メールアドレス</td>
        <td>要件</td>
        <td>要件内容</td>
      </tr>
      <tr v-for="(box, index) in $store.state.boxes" :key="box.id">
        <td>{{box.name}}</td>
        <td>{{box.mail}}</td>
        <td>{{box.select}}</td>
        <td>{{box.contents}}</td>
        <td>
          <button @click="editButton(index)">編集</button>
        </td>
        <td><button @click="deleteButton(index)">消去</button></td>
      </tr>
    </table>
    </div>

  </div>
</template>


<script>
import {mapActions} from 'vuex'

export default {
  data () {
    return {
      box: {
        name: "",
        mail: "",
        select: "",
        contents: "",
      },
    }
  },

  methods: {
    editButton (index) {
      this.$router.push ( { name:'ContactEdit', params: {id: index } });
    },

    deleteButton (index) {
      if (confirm("消去してもよろしいでしょうか？")) {
        this.deleteAction(index)
      }
    },

    ...mapActions(["deleteAction"])
  },

};
</script>

<style>
.contact-table {
  text-align: center;
}

</style>
