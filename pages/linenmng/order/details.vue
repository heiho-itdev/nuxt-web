<template>
  <div class="" style="align:center">
      <b-col sm="8" >
         <div>
          <b-nav tabs>
            <b-nav-item @click="change('1')" active>受注詳細</b-nav-item>
            <b-nav-item @click="change('2')" active>納品書 / 明細</b-nav-item>
          </b-nav>
        </div>
        <!--タブ1-->
        <b-card v-if="activeTab === '1'">
          <b-row>
            <b-col sm="12">
             <b-button type="submit" size="md" variant="success" class="rounded mr-2">　　編集　　</b-button>
             <b-button type="submit" size="md" variant="danger" class="rounded mr-2">　　削除　　</b-button>
             <b-button type="submit" size="md" variant="warning" class="rounded mr-2">　　検収承認　　</b-button>
             <b-button type="submit" size="md" variant="info " class="rounded mr-2">　　検収依頼　　</b-button>
            </b-col>
          </b-row>
          <br>
          <b-row>
            <b-col sm="2">
              <b-form-group>
                <label for="name">注文ID</label>
                <b-form-input type="text" id="name" placeholder="" class="" disabled value="a-12341234"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
          <b-col sm="2">
              <b-form-group>
                <label for="name">注文ステータス</label>
                <b-form-select v-model="selected001" disabled :options="options001"></b-form-select>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
          <b-col sm="3">
              <b-form-group>
                <label for="name">納品先ホテル</label>
                <b-form-select v-model="selected002" disabled :options="options002"></b-form-select>
                <br> <br>
                <b-form-checkbox-group
                    v-model="selected004"
                    :options="options004"
                    class="mb-3"
                    value-field="item"
                    text-field="name"
                    disabled
                  ></b-form-checkbox-group>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
          <b-col sm="3">
              <b-form-group>
                <label for="name">受注工場</label>
                <b-form-select v-model="selected003" disabled :options="options003"></b-form-select>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="3">
              <b-form-group>
                <label for="name">納品日</label>
                <b-form-input type="date" id="name" disabled placeholder="" class="" value="2021-05-07"></b-form-input>
              </b-form-group>
            </b-col>
           </b-row>
            <b-row>
            <b-col sm="3">
               <b-form-group>
                <label for="name">担当者名</label>
                <b-form-input type="text" id="name" disabled placeholder="" class="" value="テスト太郎"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="12">
              <b-form-group>
                <label for="name">注文内容</label>
                <div>
                  <b-table :items="items" :fields="fields" responsive="sm">
                    <template #cell(show_details)="row">
                      <b-button size="sm" @click="row.toggleDetails" class="mr-2">
                        {{ row.detailsShowing ? '詳細非表示' : '詳細表示'}} 
                      </b-button>
                    </template>

                    <template #row-details="row">
                      <b-card>
                        <b-row class="mb-2">
                          <b-col sm="2" class="text-sm-right"><b>シーツ120:</b></b-col>
                          <b-col>{{ row.item.linen01 }}</b-col>
                        </b-row>
                        <b-row class="mb-2">
                          <b-col sm="2" class="text-sm-right"><b>シーツ240:</b></b-col>
                          <b-col>{{ row.item.linen02 }}</b-col>
                        </b-row>
                      </b-card>
                    </template>
                  </b-table>
                </div>
              </b-form-group>
            </b-col>
          </b-row>
        </b-card>
        <!--タブ2-->
        <b-card v-show="activeTab === '2'">
         <b-row>
            <b-col sm="4">
             <b-button type="submit" size="md" variant="primary" class="rounded mr-2">納品書ダウンロード</b-button>
            </b-col>
          </b-row>
          <br>
          <b-row>
            <b-col sm="12">
              <b-form-group>
                <label for="name">納品内容</label>
                <div>
                  <b-table :items="items" :fields="fields" responsive="sm">
                    <template #cell(show_details)="row">
                      <b-button size="sm" @click="row.toggleDetails" class="mr-2">
                        {{ row.detailsShowing ? '詳細非表示' : '詳細表示'}} 
                      </b-button>
                    </template>

                    <template #row-details="row">
                      <b-card>
                        <b-row class="mb-2">
                          <b-col sm="2" class="text-sm-right"><b>シーツ120:</b></b-col>
                          <b-col>{{ row.item.linen01 }}</b-col>
                        </b-row>
                        <b-row class="mb-2">
                          <b-col sm="2" class="text-sm-right"><b>シーツ240:</b></b-col>
                          <b-col>{{ row.item.linen02 }}</b-col>
                        </b-row>
                      </b-card>
                    </template>
                  </b-table>
                </div>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="6">
              <div id="canvas-area">
                  <div id ="target">
                    <br>
                    <p>電子サインで検収</p>
                    <canvas id="myCanvas" height="100px" @mousedown="dragStart" @mouseup="dragEnd" @mouseout="dragEnd" @mousemove="draw"></canvas>
                  </div>
                  <div id="tool-area">
                    <!--<button id="download-button" @click="download">確定</button>-->
                    <button id="clear-button" @click="clear">クリア</button>
                  </div>
              </div>
            </b-col>
             <b-col sm="6">
              <div id="canvas-area">
                  <div id ="target">
                     <br>
                    <p>画像で検収</p>
                    <div style="height:100px">
                    <input type="file" />
                    </div>
                  </div>
                  <div id="tool-area">
                  </div>
              </div>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="12" style="margin-top:10px; text-align:center;">
             <b-button type="submit" size="md" variant="info " class="rounded mr-2">　　検収　　</b-button>
             <b-button type="submit" size="md" variant="success" class="rounded mr-2">　編集して検収　</b-button>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
  </div>
</template>
<style scoped>
#myCanvas {
 border: 1px solid #cecaca;
}
</style>
<script>
export default {
  
  name: "DrawTool",
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
      this.canvas = document.querySelector('#myCanvas')
      this.context = this.canvas.getContext('2d')
      this.context.lineCap = 'round';
      this.context.lineJoin = 'round';
      this.context.lineWidth = 5;
      this.context.strokeStyle = '#000000';
  },
  methods: {
    change: function(num){
      console.log(num)
      this.activeTab = num

    },
    // 描画
    draw :function(e) {
      var x = e.layerX
      var y = e.layerY
 
      if(!this.isDrag) {
        return;
      }
 
      this.context.lineTo(x, y);
      this.context.stroke();

    },
    // 描画開始（mousedown）
    dragStart:function(e) {
      var x = e.layerX
      var y = e.layerY
 
      this.context.beginPath();
      this.context.lineTo(x, y);
      this.context.stroke();
   
      this.isDrag = true;
    },
    // 描画終了（mouseup, mouseout）
    dragEnd: function() {
      this.context.closePath();
      this.isDrag = false;
    },
    // クリア
    clear: function() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    // 画像ダウンロード
    download: function() {
      let link = document.createElement("a");
      link.href = this.canvas.toDataURL("image/png");
      link.download = 'canvas-' + new Date().getTime() + '.png';
      link.click();
    }
  }
};
</script>