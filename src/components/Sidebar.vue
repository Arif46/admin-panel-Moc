<template>
    <div class="sidebar-wrapper">
        <a href="javascript:" class="logo-route">
            <div class="logo-wrapper">
                <img src="../assets/images/logo.png" class="logo-img" alt="">
                <h2 class="title">IDSDP</h2>
            </div>
        </a>
        <div class="sidebar-navigation">
            <CollapseMenu :items="items" :open="true" :horizontal="horizontal" :sidebarGroupTitle="sidebarGroupTitle"/>
            <!-- <ul>
                <li>
                    <a href="#">
                        <div>
                            <svg id="Layer_1" data-name="Layer 1"
                                viewBox="0 0 100 100" style="fill:#fff;">
                                <path class="cls-1" d="M50,21.25l25,22.5V82.8H65v-30H35v30H25v-39l25-22.5M50,7.8,2.87,50.21a1.49,1.49,0,0,0,1,2.59H15v40H45v-30H55v30H85v-40H96.13a1.49,1.49,0,0,0,1-2.59Z"/>
                            </svg>
                        </div>
                        Home
                        <i class="ri-arrow-down-s-line cus-arrow"></i>
                    </a>
                    <ul>
                        <li><a href="#">Mobile <i class="ri-arrow-down-s-line cus-arrow"></i></a>
                        <ul>
                            <li><a href="#">Social media</a></li>
                            <li><a href="#">Security</a></li>
                            <li><a href="#">Project</a></li>
                            <li><a href="#">Hardware</a></li>
                            <li><a href="#">Activity <i class="ri-arrow-down-s-line cus-arrow"></i></a>
                                <ul>
                                    <li><a href="#">Social media</a></li>
                                    <li><a href="#">Security</a></li>
                                    <li><a href="#">Project</a></li>
                                    <li><a href="#">Hardware</a></li>
                                    <li><a href="#">Activity</a></li>
                                </ul>
                            </li>
                        </ul>
                        </li>
                        <li><a href="#">Technology</a></li>
                        <li><a href="#">Game</a></li>
                        <li><a href="#">Software</a></li>
                        <li><a href="#">Internet</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">
                        <div>
                            <svg id="Layer_1" data-name="Layer 1"
                                viewBox="0 0 100 100" style="fill:#232d42;">
                                <path class="cls-1" d="M88.89,0H11.11A11.14,11.14,0,0,0,0,11.11V88.89A11.14,11.14,0,0,0,11.11,100H88.89A11.14,11.14,0,0,0,100,88.89V11.11A11.14,11.14,0,0,0,88.89,0ZM11.11,88.89V11.11H44.44V88.89Zm77.78,0H55.56V50H88.89Zm0-50H55.56V11.11H88.89Z"/>
                            </svg>
                        </div>
                        Dashboard
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div>
                            <svg id="Layer_1" data-name="Layer 1"
                                viewBox="0 0 100 100" style="fill:#232d42;">
                                <path class="cls-1" d="M87.16,54.9a39,39,0,0,0,.35-4.9,39,39,0,0,0-.35-4.9l10.55-8.25a2.52,2.52,0,0,0,.6-3.2l-10-17.3a2.5,2.5,0,0,0-2.2-1.25,2.34,2.34,0,0,0-.85.15l-12.45,5a36.53,36.53,0,0,0-8.45-4.9L62.46,2.1A2.44,2.44,0,0,0,60,0H40a2.44,2.44,0,0,0-2.45,2.1l-1.9,13.25a38.41,38.41,0,0,0-8.45,4.9l-12.45-5a2.83,2.83,0,0,0-.9-.15,2.48,2.48,0,0,0-2.15,1.25l-10,17.3a2.47,2.47,0,0,0,.6,3.2L12.86,45.1a39.65,39.65,0,0,0-.35,4.9,39.65,39.65,0,0,0,.35,4.9L2.31,63.15a2.52,2.52,0,0,0-.6,3.2l10,17.3a2.5,2.5,0,0,0,2.2,1.25,2.34,2.34,0,0,0,.85-.15l12.45-5a36.53,36.53,0,0,0,8.45,4.9l1.9,13.25A2.44,2.44,0,0,0,40,100H60a2.44,2.44,0,0,0,2.45-2.1l1.9-13.25a38.41,38.41,0,0,0,8.45-4.9l12.45,5a2.83,2.83,0,0,0,.9.15,2.48,2.48,0,0,0,2.15-1.25l10-17.3a2.52,2.52,0,0,0-.6-3.2Zm-9.9-8.55A26.71,26.71,0,0,1,77.51,50c0,1-.1,2.15-.25,3.65l-.7,5.65L81,62.8l5.4,4.2-3.5,6L76.56,70.5l-5.2-2.1-4.5,3.4a29.28,29.28,0,0,1-6.25,3.65l-5.3,2.15-.8,5.65-1,6.75h-7l-.95-6.75-.8-5.65-5.3-2.15a28.37,28.37,0,0,1-6.15-3.55l-4.55-3.5-5.3,2.15L17.11,73.1l-3.5-6,5.4-4.2,4.45-3.5-.7-5.65c-.15-1.55-.25-2.7-.25-3.7s.1-2.15.25-3.65l.7-5.65L19,37.2,13.61,33,17.11,27l6.35,2.55,5.2,2.1,4.5-3.4a29.28,29.28,0,0,1,6.25-3.65l5.3-2.15.8-5.65,1-6.75h7l.95,6.75.8,5.65,5.3,2.15a28.37,28.37,0,0,1,6.15,3.55l4.55,3.5,5.3-2.15,6.35-2.55L86.36,33,81,37.2l-4.45,3.5ZM50,30A20,20,0,1,0,70,50,20,20,0,0,0,50,30Zm0,30A10,10,0,1,1,60,50,10,10,0,0,1,50,60Z"/>
                            </svg>
                        </div>
                        Configuration
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div>
                            <svg id="Layer_1" data-name="Layer 1"
                                viewBox="0 0 100 100" style="fill:#232d42;">
                                <path class="cls-1" d="M79.6,80a10,10,0,1,0,10,10A10,10,0,0,0,79.6,80Zm-50,0a10,10,0,1,0,10,10A10,10,0,0,0,29.6,80Zm5.9-25H72.35a10,10,0,0,0,8.75-5.15l19.3-35L91.7,10,72.35,45H37.65L16.35,0H0V10H10L28,48l-6.75,12.2A10,10,0,0,0,30,75H90V65H30ZM39,8.49c.73-.87,2.28-1.3,4.67-1.3A3.33,3.33,0,0,1,46,8.08,4.72,4.72,0,0,1,47.25,11H43v7h4v9.6a12.43,12.43,0,0,0,1.19,4.2,10.84,10.84,0,0,0,5.54,5.29,9.54,9.54,0,0,0,3.72.74,21.9,21.9,0,0,0,3-.21,14.83,14.83,0,0,0,2.93-.75,12.34,12.34,0,0,0,2.74-1.47A11.35,11.35,0,0,0,68.58,33a8.93,8.93,0,0,0,2.22-5.36,9,9,0,0,0-.52-3.06A7.88,7.88,0,0,0,68.78,22a7.44,7.44,0,0,0-2.4-1.83,7.29,7.29,0,0,0-3.28-.7,12.56,12.56,0,0,0-2.35.26,9,9,0,0,0-2.51.92,6,6,0,0,0-2,1.76,4.61,4.61,0,0,0-.8,2.75,2,2,0,0,0,.42,1.26l5.18,1.25-.1-.48a1.26,1.26,0,0,1,.41-1,1.47,1.47,0,0,1,1-.36c1,0,1.45.59,1.45,1.78a3.57,3.57,0,0,1-.21,1.11,2.9,2.9,0,0,1-.85,1.21,5.37,5.37,0,0,1-1.84,1,9.92,9.92,0,0,1-3.11.41,3.51,3.51,0,0,1-2.47-1A5,5,0,0,1,54,27.12V18H65V11H54v-.1a13.14,13.14,0,0,0-1.14-4.19A11,11,0,0,0,50.6,3.5a10.27,10.27,0,0,0-3.08-2.08A8.77,8.77,0,0,0,44,.67a18.12,18.12,0,0,0-5.07.73,10,10,0,0,0-4.47,2.7L39,8.54Z"/>
                            </svg>
                        </div>
                        Commodity Price & Market
                        <i class="ri-arrow-down-s-line cus-arrow"></i>
                    </a>
                    <ul>
                        <li><a href="#">All Reviews</a></li>
                        <li><a href="#">Galleries</a></li>
                        <li class="selected"><a href="#">How To</a></li>
                        <li><a href="#">Mobile</a></li>
                        <li><a href="#">Software</a></li>
                        <li><a href="#">Lists</a></li>
                        <li><a href="#">Game</a></li>
                        <li><a href="#">Technology</a></li>
                        <li><a href="#">Social Media</a></li>
                        <li><a href="#">Internet</a></li>
                        <li><a href="#">Security</a></li>
                        <li><a href="#">Comparison</a></li>
                        <li><a href="#">Campaign</a></li>
                        <li><a href="#">Hardware</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">
                        <div>
                            <svg id="Layer_1" data-name="Layer 1"
                                viewBox="0 0 100 100" style="fill:#232d42;">
                                <path class="cls-1" d="M62.69,0h-39A7.79,7.79,0,0,0,16,7.79l0,36.83,0,47.59A7.79,7.79,0,0,0,23.69,100H78.27a7.82,7.82,0,0,0,7.8-7.79V23.38ZM78.27,92.21H23.73V7.79H58.79V27.27H78.27ZM28.86,50a1.5,1.5,0,0,0,1.5,1.5H61.17a1.5,1.5,0,0,0,0-3H30.36A1.5,1.5,0,0,0,28.86,50Zm0,8a1.5,1.5,0,0,0,1.5,1.5H71.85a1.5,1.5,0,0,0,0-3H30.36A1.5,1.5,0,0,0,28.86,58Zm43,6.5H30.36a1.5,1.5,0,0,0,0,3H71.85a1.5,1.5,0,0,0,0-3Zm0,8H30.36a1.5,1.5,0,0,0,0,3H71.85a1.5,1.5,0,0,0,0-3Z"/>
                            </svg>
                        </div>
                        Report
                    </a>
                </li>
            </ul> -->
        </div>
    </div>
</template>
<script>
import SideBarItems from '../FackApi/json/SideBarAdmin'
import CollapseMenu from './menus/CollapseMenu.vue'
export default {
  Name: 'Sidebar',
  components: {
    CollapseMenu
  },
  mounted () {
    this.items = SideBarItems.common
  },
  data () {
    return {
      items: [],
      homeURL: { type: Object, default: () => ({ path: '/auth/dashboard' }) },
      logo: { type: String, default: require('../assets/images/logo.png') },
      horizontal: true,
      toggleButton: true,
      logoShow: true,
      onlyLogo: true,
      onlyLogoText: true,
      sidebarGroupTitle: true,
      menus: [
        {
          name: 'Module',
          children: [
            {
              name: 'Service',
              children: [
                {
                  name: 'Item One'
                },
                {
                  name: 'Item Two'
                },
                {
                  name: 'Item Three'
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>
