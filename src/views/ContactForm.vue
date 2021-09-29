<template>
<!-- お問い合わせ 送信ページ -->
<div class="contact">

    <div class="contact-title">Contact</div>

    <div class="contact-contents">
    <div><label for="name">Name</label></div>
    <input type="text" v-model="box.name" id="name">

    <div><label for="mail">Mail address</label></div>
    <input type="text"  v-model="box.mail" id="mail">

    <div><label for="select">Select</label></div>
    <select class="select"  v-model="box.select" id="select">
        <option value="依頼について">依頼について</option>
        <option value="採用について">採用について</option>
    </select>

    <div><label for="contents">Contents</label></div>
    <textarea rows="5" cols="30" v-model="box.contents" id="contents"></textarea>

    <div>
        <button @click="submit()">送信</button>
    </div>
    </div>

</div>
</template>


<script>
import { mapActions } from "vuex";

export default {
    data() {
        return {
            box: {
                name: "",
                mail: "",
                select: "",
                contents: "",
            },
        };
    },
    
    methods: {
        submit() {
            let check = '';
            if (this.box.name === '') { check += ' 名前 ' }
            if (this.box.mail === '') { check += ' メールアドレス ' }
            if (this.box.select === '') { check += ' 要件 ' }
            if (this.box.contents === '') { check += ' 要件内容 ' }
            if ( check === '') {
                this.addAction(this.box);
                this.$router.push({ name:"Contact" });
            } else {
                alert ( `${check}が足りません` )
            }
        },
        
        ...mapActions(["addAction"]),
        },
        
    };
</script>

<style>
.contact-title {
    color: rgb(147, 146, 154);
    width: 100%;
    font-size: 24px;
    font-family: "Zapfino";
    margin: 20px;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
    box-shadow: 0 0 10px #efeeee;
}
.contact-contents {
    color: rgb(147, 146, 154);
    font-size: 16px;
    font-family: "Zapfino";
    text-align: center;
}

</style>