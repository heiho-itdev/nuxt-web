<template>
  <div class="animated fadeIn">
        <!--タブ1-->
        <b-card header-tag="header">
        <template #header>
          <h6 class="mb-0"> EPCコード登録</h6>
        </template>
          <b-row>
          <b-col>
              <b-form-group>
                <input type="nubmer" style="float:left"/><b-button type="submit" size="sm" variant="success" class="rounded mr-2 ml-1" >　採番　</b-button>
              </b-form-group>
          </b-col>
          </b-row>
        </b-card>
      <b-card header-tag="header">
      <template #header>
        <h6 class="mb-0">epcコード一覧</h6>
      </template>
      <b-card-text>
    <!--ページャー-->
    <nav>
      <b-pagination :total-rows="5" :per-page="perPage" v-model="currentPage" prev-text="Prev" next-text="Next" hide-goto-end-buttons/>
    </nav>
      <b-card >
      <b-table :hover="hover" :striped="striped" :bordered="bordered" :fixed="fixed" 
    responsive="sm" :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage">
        <template v-slot:cell(edit)="{ item }">
          <b-button type="button" variant="primary" @click="toDetails(item.userId) " class="rounded">詳細</b-button>
          <!--<b-button type="button" variant="primary" @click="toSign(item.userId) " class="rounded">サイン</b-button>-->
        </template>
      </b-table>
    </b-card>
    <!--ページャー-->
    <nav>
      <b-pagination :total-rows="5" :per-page="perPage" v-model="currentPage" prev-text="Prev" next-text="Next" hide-goto-end-buttons/>
    </nav>
    
      </b-card-text>
</b-card >
</div>
</template>

<script>
  export default {
    props: {
    },
    data: () => {
      return {
        items: [],
        fields: [
          {key: 'item1', label: 'epcコード'},
          {key: 'item2', label: 'ステータス'},
          {key: 'item4', label: '管理工場'},
          {key: 'item5', label: '採番日時'},
          {key: 'item6', label: '最終更新日時'},
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
        this.totalRows = 5;
        this.items = [
          {item1: '1234512345',item2: '有効',  item4: '-工場', item5: '2012/01/01 12:00', item6: '2012/01/01 12:00'},
          {item1: '1234512346',item2: '有効',  item4: '-工場', item5: '2012/01/01 12:00', item6: '2012/01/01 12:00'},
          {item1: '1234512346',item2: '有効',  item4: '-工場', item5: '2012/01/01 12:00', item6: '2012/01/01 12:00'},
          {item1: '1234512346',item2: '無効',  item4: '-工場', item5: '2012/01/01 12:00', item6: '2012/01/01 12:00'},
          {item1: '1234512346',item2: '未書込み',  item4: '-工場', item5: '2012/01/01 12:00', item6: '2012/01/01 12:00'},
          {item1: '1234512346',item2: '未書込み',  item4: '-工場', item5: '2012/01/01 12:00', item6: '2012/01/01 12:00'}
        ];
      },
      showModal : function(userId) {
        console.log("userId", userId);
        this.$emit("userId", userId);
      },
      toDetails(userId){
        console.log("userId", userId);
        this.$router.push('/linenMng/order/details')
      },toSign(userId){
        console.log("userId", userId);
        this.$router.push('/linenMng/order/sign')
      }
    },
    mounted(){
      this.getEmployeeList();
    }
  }
</script>