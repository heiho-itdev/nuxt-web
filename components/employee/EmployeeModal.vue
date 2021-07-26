<template>
      <b-modal title="社員詳細" size="lg" v-model="largeModal">
        <b-card >
            <b-form-group
            description=""
            label="社員番号"
            label-for="ID"
            :label-cols="3"
            :horizontal="true">
            <b-form-input id="ID" type="text" v-model="items.userId"></b-form-input>
          </b-form-group>
          <b-form-group
            description=""
            label="名前"
            label-for="名前"
            :label-cols="3"
            :horizontal="true">
            <b-form-input id="username" type="text"  v-model="items.username"></b-form-input>
          </b-form-group>
            <b-form-group
            description=""
            label="入社日"
            label-for="registered"
            :label-cols="3"
            :horizontal="true">
            <b-form-input id="registered" type="text"  v-model="items.registered"></b-form-input>
          </b-form-group>
          <b-form-group
            label="関連ファイル"
            label-for="fileInputMulti"
            :label-cols="3"
            :horizontal="true">
              <b-form-file id="fileInputMulti" :plain="true" :multiple="true" style="padding: 0.375rem 0.15rem;"></b-form-file>
          </b-form-group>
          <!--<div slot="footer">
            <b-button type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Submit</b-button>
            <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</b-button>
          </div>-->
        </b-card>
      </b-modal>
</template>

<script>
import axios from 'axios';
  export default {
    data: () => {
      return { items: [],
      largeModal :false
    }
    },
    methods: {
       showModal(userId) {
        console.log("showModal",userId);
       this.getEmployee(userId);
       this.largeModal=true;
      },
      getEmployee(userId){
        axios.get('http://127.0.0.1:3104/employee/'+userId).then(response => {
          this.items = response.data.item;
          console.log("this.items", this.items);
        })
        }
    }
  }
</script>
