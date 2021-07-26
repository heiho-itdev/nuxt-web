<template>
<div>
  <b-card>
    <b-table :hover="hover" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" 
    responsive="sm" :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage">
        <template v-slot:cell(edit)="{ item }">
          <b-button type="button" variant="primary" @click="showModal(item.userId) " class="rounded">edit</b-button>
        </template>
    </b-table>
  </b-card>
</div>
</template>
<script>
import axios from 'axios';
  export default {
    props: {
    },
    data: () => {
      return {
        items: [],
        fields: [
          {key: 'userId', label: '社員番号'},
          {key: 'username', label: '名前'},
          {key: 'registered', label: '登録日時'},
          {key: 'role', label: '役職'},
          {key: 'status', label: 'ステータス'},
          {key: 'edit', label: ''}
        ],
        currentPage: 1,
        perPage: 5,
        totalRows: 0
      }
    },
    methods: {
      getRowCount (items) {
        return items.length
      },
       getEmployeeList () {
        // axios.get('http://127.0.0.1:3104/employee/list/').then(response => {
        //   this.items = response.data.items;
        //   this.totalRows = response.data.totalRows;
        //   console.log("this.totalRows", this.totalRows);
        //   console.log("response", response);
        // });
        this.totalRows = 5;
        this.items = [{userId: '0000',username: 'テスト 太郎', registered: '2012/01/01', role: 'Member', status: 'Active'},{userId: '0111',username: '田村 修平', registered: '2016/09/01', role: 'Member', status: 'Active'},{userId: '0288',username: '藤井 陽慶', registered: '2019/12/01', role: 'Member', status: 'Active'},{userId: '0077',username: '青木 悠二', registered: '2012/01/01', role: 'Member', status: 'Active'},{userId: '0344',username: '松浦 知明', registered: '2020/11/01', role: 'Member', status: 'Active'}];
      },
      showModal : function(userId) {
        console.log("userId", userId);
        this.$emit("userId", userId);
      }
    },
    mounted(){
      this.getEmployeeList();
    }
  }
</script>
