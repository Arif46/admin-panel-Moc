import Vue from 'vue'
import CxltToastr from 'cxlt-vue2-toastr'
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'

// Toastr config
const toastrConfigs = {
  position: 'top right',
  errorColor: '#D6E09B',
  warningColor: '#D6E09B',
  showDuration: 1000
}

Vue.use(CxltToastr, toastrConfigs)
