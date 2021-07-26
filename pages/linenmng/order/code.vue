<template>
  <div class="">
      <b-col>
       <b-card header-tag="header">
        <template #header>
          <h6 class="mb-0">バーコード検収</h6>
        </template>
          <b-row>
            <b-col sm="6">
             <b-button type="submit" size="md" variant="success" class="rounded mr-2">バーコード読み取り開始</b-button>
            </b-col>
          </b-row>
          <br>
          <b-row>
          <b-col sm="3">
           </b-col>
          </b-row>
        </b-card>
        <b-card>
          <b-row>
            <b-col sm="6">
             読み取り結果一覧
            </b-col>
          </b-row>
          <br>
          <b-row>
          <b-col sm="3">
           </b-col>
          </b-row>
        </b-card>
     </b-col>
  </div>
</template>

<script>

</script>