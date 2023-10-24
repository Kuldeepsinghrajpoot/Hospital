import { Html, Head, Main, NextScript,Script } from 'next/document'
 
export default function Document() {
  <Html lang="en">
      <Head />
      <body>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
        rel="stylesheet"
      />
        <Main />
          <NextScript />
      {/* <!--? Config:  Mandatory theme config file contain global vars & default theme options, Set your preferred theme option in this file.  --> */}
      <Script src="../assets/js/config.js"></Script>
      <Script src="../assets/vendor/libs/jquery/jquery.js"></Script>
   
      {/* <!-- endbuild -->
    <!-- Vendors JS --> */}
      <Script src="../assets/vendor/libs/apex-charts/apexcharts.js"></Script>
      <Script src="../assets/vendor/libs/swiper/swiper.js"></Script>
      <Script src="../assets/vendor/libs/datatables-bs5/datatables-bootstrap5.js"></Script>
      
      {/* <!-- Main JS --> */}
      <Script src="../assets/js/main.js"></Script>
      {/* <!-- Page JS --> */}
      <Script src="../assets/js/dashboards-analytics.js"></Script>
      <Script src="../assets/vendor/js/helpers.js"></Script>
      <Script src="../assets/js/config.js"></Script>
    <Script src="../../assets/vendor/js/template-customizer.js"></Script>


    <Script src="../../assets/vendor/libs/jquery/jquery.js"></Script>
    <Script src="../../assets/vendor/libs/popper/popper.js"></Script>
    <Script src="../../assets/vendor/js/bootstrap.js"></Script>
    <Script src="../../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js"></Script>
    <Script src="../../assets/vendor/libs/node-waves/node-waves.js"></Script>

    <Script src="../../assets/vendor/libs/hammer/hammer.js"></Script>
    <Script src="../../assets/vendor/libs/i18n/i18n.js"></Script>
    <Script src="../../assets/vendor/libs/typeahead-js/typeahead.js"></Script>

    <Script src="../../assets/vendor/js/menu.js"></Script>
    {/* <!-- endbuild --> */}

    {/* <!-- Vendors JS --> */}
    <Script src="../../assets/vendor/libs/apex-charts/apexcharts.js"></Script>
    <Script src="../../assets/vendor/libs/swiper/swiper.js"></Script>
    <Script src="../../assets/vendor/libs/datatables-bs5/datatables-bootstrap5.js"></Script>

    {/* <!-- Main JS --> */}
    <Script src="../../assets/js/main.js"></Script>

    {/* <!-- Page JS --> */}
    <Script src="../../assets/js/dashboards-analytics.js"></Script>
      
    
      </body>
    </Html>
}