<template>
  <div class="animated fadeIn">
        <c-table caption="メンバー管理"></c-table>
  </div>
</template>

<script>
  import cTable from './employeeTable.vue'

  export default {
    name: 'tables',
    components: {cTable}
  }
</script>
