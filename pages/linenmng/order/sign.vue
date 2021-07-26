<template>
  <div class="animated fadeIn">
      <b-card header-tag="header">
        <template #header>
          <h6 class="mb-0">納品サイン</h6>
        </template>
          <div id="canvas-area">
            <div id ="target">
             <p>納品書</p>
             <p>【納品日付】2021/04/24</p>
             <p>【注文ID】a-12312344</p>
             <p>【担当者】○○太郎</p>
             <p>納品内容</p>
             <div>
               <p>1F</p>
               <p>シーツ240 5セット</p>
               <p>○○240 5セット</p>
               <p>2F</p>
               <p>シーツ240 5セット</p><br>
             </div>
             <p>受け取りサイン</p>
            <canvas id="myCanvas" height="50px" @mousedown="dragStart" @mouseup="dragEnd" @mouseout="dragEnd" @mousemove="draw"></canvas>
          </div>
          <div id="tool-area">
            <button id="download-button" @click="download">ダウンロード</button>
            <button id="clear-button" @click="clear">クリア</button>
            <button @click="onDownloadPDFClickWithJsPDF">PDF</button>
          </div>
        </div>
      </b-card>
  </div>
</template>
<style scoped>
#myCanvas {
 border: 1px solid #cecaca;
}
</style>
<script>
//↓からパクった
//https://tech.pjin.jp/blog/2020/04/16/%E3%80%90vue-js%E3%80%91%E3%81%8A%E7%B5%B5%E6%8F%8F%E3%81%8D%E3%83%84%E3%83%BC%E3%83%AB%E3%82%92vue%E3%81%A7%E5%AE%9F%E8%A3%85%E3%81%97%E3%81%A6%E3%81%BF%E3%82%8B/

import jsPDF from 'jspdf'
import html2canvas from 'html2canvas';

export default {
  
  name: "DrawTool",
  data() {
    return {
        canvas: null,
        context: null,
        isDrag: false,
        pdfCanvas: null
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