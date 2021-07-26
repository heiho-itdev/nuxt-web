<template>
  <div class="animated fadeIn">
      <b-card header-tag="header">
      <template #header>
        <h6 class="mb-0">受注一覧</h6>
      </template>
      <b-card-text>
  <div>
<b-card >
<div>
  <div class="float-sm-left mr-5"><span class="mr-2">注文ID</span><input id="ID" type="text" class=""/></div>
  <div class="float-sm-left mr-5"><span class="mr-2">注文ステータス</span>
    <select name="blood">
    <option value="A">受注</option>
    <option value="B">出庫</option>
    <option value="O">納品済</option>
    <option value="O">納品承認済</option>
    <option value="AB">検収済</option>
    <option value="AB">検収修正依頼中</option>
    <option value="AB">検収承認済</option>
    </select>
  </div>
  <div class="float-sm-left mr-5"><span class="mr-2">注文ホテル</span>
    <select name="blood">
    <option value="A">-</option>
    <option value="B">-</option>
    <option value="O">-</option>
    <option value="AB">-</option>
    </select>
  </div>
  <div class="float-sm-left mr-5"><span class="mr-2">受注工場</span>
    <select name="blood">
    <option value="A">-工場</option>
    <option value="B">-倉庫</option>
    <option value="O">-工場</option>
    </select>
  </div>
<div class="clearfix mb-3"></div>
  <div class="float-sm-left mr-5"><span class="mr-2">注文日</span><input id="ID" type="date" class=""/> ～　<input id="ID" type="date" class=""/></div>
  <div class="float-sm-left mr-5"><span class="mr-2">納品日</span><input id="ID" type="date" class=""/> ～　<input id="ID" type="date" class=""/></div>
  <div class="float-sm-left mr-5"><span class="mr-2">検収不要</span><input id="ID" type="checkbox" class=""/></div>
</div>

<div class="clearfix mb-3"></div>

</b-card>
<div class="float-sm-right">
  <b-button type="submit" size="sm" variant="primary" class="rounded mr-2">検索</b-button>
  <b-button type="reset" size="sm" class="rounded">クリア</b-button>
</div>
</div>
</b-card-text>
      </b-card>
      <b-card>
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
          {key: 'item1', label: '注文ID'},
          {key: 'item2', label: '注文ステータス'},
          {key: 'item3', label: '注文ホテル'},
          {key: 'item4', label: '受注工場'},
          {key: 'item5', label: '注文日'},
          {key: 'item6', label: '納品日'},
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
          {item1: 'a-0000001',item2: '受注', item3: '-', item4: '-工場', item5: '2012/01/01', item6: '2012/01/01'},
          {item1: 'a-0000002',item2: '受注', item3: '-', item4: '-倉庫', item5: '2012/01/01', item6: '2012/01/01'},
          {item1: 'a-0000003',item2: '出庫', item3: '-', item4: '-倉庫', item5: '2012/01/01', item6: '2012/01/01'},
          {item1: 'b-0000003',item2: '納品済', item3: '-', item4: '-工場', item5: '2012/01/01', item6: '2012/01/01'},
          {item1: 'b-0000003',item2: '検収済', item3: '-', item4: '-工場', item5: '2012/01/01', item6: '2012/01/01'},
          {item1: 'b-0000003',item2: '検収済', item3: '-', item4: '-工場', item5: '2012/01/01', item6: '2012/01/01'}
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