<template>
<!-- お問い合わせ 編集ページ -->
<div class="contact">

    <div class="contact-title">Edit Page</div>

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
            <button @click="update()">更新</button>
        </div>
    </div>

</div>
</template>


<script>
import { mapActions, mapGetters } from "vuex";

export default {
    data() {
        return {
            box: {},
        };
    },
    
    methods: {
        update() {
                this.updateAction(this.box);
                this.$router.push({ name:"Contact" });
        },
        
        ...mapActions(["updateAction"]),
        },

    created() {
        this.box = this.getBoxes[this.$route.params.id];
        },
    
    computed: {
        ...mapGetters (["getBoxes"]),
    }
    }

</script>