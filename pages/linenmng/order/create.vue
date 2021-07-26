<template>
  <div class="">
      <b-col sm="8" >
         <div>
          <b-nav tabs>
            <b-nav-item @click="change('1')" active>画面入力</b-nav-item>
            <b-nav-item @click="change('2')" active>注文書インポート</b-nav-item>
          </b-nav>
        </div>
        <!--タブ1-->
        <b-card v-if="activeTab === '1'">
          <br>
          <b-row>
          <b-col sm="3">
              <b-form-group>
                <label for="name">納品先ホテル</label>
                <b-form-select v-model="selected002" :options="options002"></b-form-select>
                <br> <br>
                <b-form-checkbox-group
                    v-model="selected004"
                    :options="options004"
                    class="mb-3"
                    value-field="item"
                    text-field="name"
                    disabled-field="notEnabled"
                  ></b-form-checkbox-group>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
          <b-col sm="3">
              <b-form-group>
                <label for="name">受注工場</label>
                <b-form-select v-model="selected003" :options="options003"></b-form-select>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="3">
              <b-form-group>
                <label for="name">納品日</label>
                <b-form-input type="date" id="name" placeholder="" class=""></b-form-input>
              </b-form-group>
            </b-col>
           </b-row>
            <b-row>
            <b-col sm="3">
               <b-form-group>
                <label for="name">担当者名</label>
                <b-form-input type="text" id="name" placeholder="" class=""></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="10">
              <b-form-group>
                <label for="name">注文内容</label>
                <div>
                  <b-table :items="items" :fields="fields" responsive="sm">
                    <template #cell(show_details)="row">
                      <b-button size="sm" @click="row.toggleDetails" class="mr-2">
                        {{ row.detailsShowing ? '詳細非表示' : '詳細表示'}} 
                      </b-button>
                    </template>

                    <template #row-details="">
                      <b-card>
                        <b-row class="mb-2">
                          <b-col sm="2" class="text-sm-right"><b>シーツ120:</b></b-col>
                          <b-col><input type="number" value="{ row.item.linen01 }" /></b-col>
                        </b-row>
                        <b-row class="mb-2">
                          <b-col sm="2" class="text-sm-right"><b>シーツ240:</b></b-col>
                          <b-col><input type="number" value="{ row.item.linen02 }" /></b-col>
                        </b-row>
                      </b-card>
                    </template>
                  </b-table>
                </div>
              </b-form-group>
            </b-col>
          </b-row>
          
          <b-row>
            <b-col sm="12">
             <b-button type="submit" size="md" variant="success" class="rounded mr-2">　　確定　　</b-button>
            </b-col>
          </b-row>
        </b-card>
        <!--タブ2-->
        <b-card v-if="activeTab === '2'">
         <b-row>
            <b-col sm="7">
              <p>注文書(XLSX)をインポートし注文情報を登録します</p>
             <input type="file"/><b-button type="submit" size="sm" variant="success" class="rounded mr-1">インポート</b-button>
            </b-col>
          </b-row>
        </b-card>
    </b-col>
  </div>
</template>

<script>
export default {
  
  
  data() {
    return {
        activeTab: '1',
        canvas: null,
        context: null,
        isDrag: false,
        pdfCanvas: null,
        selected001: 'a',
        options001: [
          { value: null, text: '受注' },
          { value: 'a', text: '出庫' },
          { value: 'b', text: '納品済' },
          { value: 'b', text: '納品承認済' },
          { value: 'b', text: '検収修正依頼中' },
          { value: 'b', text: '検収承認済' },
        ],
        selected002: 'a',
        options002: [
          { value: null, text: '-' },
          { value: 'a', text: '-' },
          { value: 'b', text: '-' },
          { value: 'b', text: '-' }
        ],
        selected003: 'a',
        options003: [
          { value: null, text: '-工場' },
          { value: 'a', text: '-倉庫' },
          { value: 'b', text: '-工場' },
          { value: 'b', text: '-工場' }
        ],
        //テーブル
        fields: ['フロア', '合計', [{key: 'show_details', label: ''}]],
        items: [
          { linen01: 4, linen02: 40, フロア: '1F', 合計: '44' },
          { linen01: 4, linen02: 5, フロア: '2F', 合計: '9' },
          { linen01: 4, linen02: 40, フロア: '4F', 合計: '44' }
        ],
        selected004: [],
        options004: [
          { item: 'A', name: '検収不要' }
        ]
    };
  },
  mounted(){
  },
  methods: {
    change: function(num){
      console.log(num)
      this.activeTab = num
    }
  }
};
</script>