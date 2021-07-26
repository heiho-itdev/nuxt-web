<template>
  <div class="">

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