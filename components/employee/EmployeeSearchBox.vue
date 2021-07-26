<template>
<div>
<b-card >
<div>
  <div class="float-sm-left mr-5"><span class="mr-2">社員番号</span><input id="ID" type="text" class=""/></div>
  <div class="float-sm-left mr-5"><span class="mr-2">社員名</span><input id="ID" type="text" class=""/></div>
  <div class="float-sm-left mr-5"><span class="mr-2">入社年月日</span><input id="ID" type="text" class=""/></div>
  <div class="float-sm-left mr-5"><span class="mr-2">部署</span><input id="ID" type="text" class=""/></div>
  <div class="float-sm-left mr-5"><span class="mr-2">スキル</span><input id="ID" type="text" class=""/></div>
</div>
<div class="clearfix mb-4"></div>
<div>
  <div class="float-sm-left mr-5"><span class="mr-2">役職</span><input id="ID" type="text" class=""/></div>
  <div class="float-sm-left mr-5"><span class="mr-2">項目1</span>
<select name="blood">
<option value="A"></option>
<option value="B">bbb</option>
<option value="O">ccc</option>
<option value="AB">ddd</option>
</select>
</div>
  <div class="float-sm-left mr-5"><span class="mr-2">項目2</span><input id="ID" type="checkbox" class=""/></div>
</div>
<div class="clearfix mb-3"></div>
<div class="float-sm-right">
  <b-button type="submit" size="sm" variant="primary" class="rounded mr-2">検索</b-button>
  <b-button type="reset" size="sm" class="rounded">クリア</b-button>
</div>
</b-card>
</div>
</template>

<script>

  export default {
    components: {
    },
    props: {},
    data: () => {
      return {
        items: []
      }
    },
    methods: {
    }
  }
</script>
