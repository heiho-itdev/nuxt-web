<template>
<div>
  <b-card :header="caption">
    <EmployeeSearchBox ref="modal"/>
    <!--ページャー-->
    <nav>
      <b-pagination :total-rows="getRowCount(items)" :per-page="perPage" v-model="currentPage" prev-text="Prev" next-text="Next" hide-goto-end-buttons/>
    </nav>

    <EmployeeTable @userId='showModal'/>
    <!--ページャー-->
    <nav>
      <b-pagination :total-rows="getRowCount(items)" :per-page="perPage" v-model="currentPage" prev-text="Prev" next-text="Next" hide-goto-end-buttons/>
    </nav>
  </b-card>
  <EmployeeModal ref="modal"/>
</div>
</template>

<script>
import EmployeeTable from '~/components/employee/EmployeeTable'
import EmployeeModal from '~/components/employee/EmployeeModal'
import EmployeeSearchBox from '~/components/employee/EmployeeSearchBox'
  export default {
    components: {
    EmployeeTable,
    EmployeeModal,
    EmployeeSearchBox
  },
    name: 'c-table',
    props: {
      caption: {
        type: String,
        default: 'Table'
      },
      hover: {
        type: Boolean,
        default: false
      },
      striped: {
        type: Boolean,
        default: false
      },
      bordered: {
        type: Boolean,
        default: false
      },
      small: {
        type: Boolean,
        default: false
      },
      fixed: {
        type: Boolean,
        default: false
      }
    },
    data: () => {
      return {
        items: [],
        fields: [
          {key: 'userId', label: 'ID'},
          {key: 'username', label: '名前'},
          {key: 'registered', label: '入社日'},
          {key: 'role', label: '役職'},
          {key: 'status', label: 'ステータス'},
          {key: 'edit', label: ''}
        ],
        currentPage: 1,
        perPage: 5,
        totalRows: 0,
        largeModal: false
      }
    },
    methods: {
      getRowCount (items) {
        return items.length
      },
      showModal(userId) {
        console.log("showModal",userId);
       this.$refs.modal.showModal(userId);
      }
    }
  }
</script>
