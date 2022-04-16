<template>
  <div class="section-wrapper">
    <b-breadcrumb class="custom-bread" :items="breadcrumbs"></b-breadcrumb>
    <div class="form-wrapper">
      <b-card title="Bazar Monitoring Details">
        <b-card-text>
          <b-row>
            <b-col sm="12" md="3">
              <div class="mc-report-card p-3 bg-primary text-light">
                <p>Total Market</p>
                <h4>500</h4>
              </div>
            </b-col>
            <b-col sm="12" md="3">
              <div class="mc-report-card p-3 bg-warning text-light">
                <p>Total Cases</p>
                <h4>5,000</h4>
              </div>
            </b-col>
            <b-col sm="12" md="3">
              <div class="mc-report-card p-3 bg-success text-light">
                <p>Total Fine Amount</p>
                <h4>50,000</h4>
              </div>
            </b-col>
            <b-col sm="12" md="3">
              <div class="mc-report-card p-3 bg-info text-light">
                <p>Total Commodity</p>
                <h4>50</h4>
              </div>
            </b-col>
          </b-row>
        </b-card-text>
      </b-card>
    </div>
      <b-card class="mt-3" title="Bazar Monitoring Data Chart">
        <b-card-text>
            <img src="@/assets/images/charts.png" class="img-fluid" alt="">
        </b-card-text>
      </b-card>
  </div>
</template>
<script>
export default {
  data () {
    return {
      // breadcrumb data
      breadcrumbs: [
        {
          text: 'Home',
          href: '#'
        },
        {
          text: 'Bazar Monitoring System',
          href: '/'
        },
        {
          text: 'Report',
          active: true
        }
      ]
    }
  }
}
</script>
<style>
  .mc-report-card{
    border-radius: var(--border-radius-md);
  }
</style>
