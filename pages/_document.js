import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        
      </Head>
  

      <body>
        <Main />
        <NextScript />
        <Script
          src="https:example-website/script.js"
          onError={() => setHasError(true)}
          onReady={() => setIsReady(true)}
        />
        <Script
          src="https:code.jquery.com/jquery-3.6.0.min.js"
          integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
          crossorigin="anonymous"></Script>
        <Script src="https:cdnjs.cloudflare.com/ajax/libs/jquery.perfect-scrollbar/1.5.5/perfect-scrollbar.min.js" integrity="sha512-X41/A5OSxoi5uqtS6Krhqz8QyyD8E/ZbN7B4IaBSgqPLRbWVuXJXr9UwOujstj71SoVxh5vxgy7kmtd17xrJRw==" crossorigin="anonymous" referrerpolicy="no-referrer"></Script>
        <Script src="https:cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></Script>
        <Script src="https:cdnjs.cloudflare.com/ajax/libs/popper.js/2.9.2/umd/popper.min.js" integrity="sha512-2rNj2KJ+D8s1ceNasTIex6z4HWyOnEYLVC3FigGOmyQCZc2eBXKgOxQmo3oKLHyfcj53uz4QMsRCWNbLd32Q1g==" crossorigin="anonymous" referrerpolicy="no-referrer"></Script>
        <Script src="
https:cdn.jsdelivr.net/npm/hammerjs@2.0.8/hammer.min.js
"></Script>
        <Script src="
https:cdn.jsdelivr.net/npm/node-waves@0.7.6/dist/waves.min.js
"></Script>
        <Script src="https:ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></Script>
        <Script src="https:cdnjs.cloudflare.com/ajax/libs/mmenu-js/9.3.0/mmenu.js" integrity="sha512-D1qgHT+xXRgN9gLLLYHbQ/c8wkrADqfXg1kr1dRbP9nOtNzIKKNDU+hmFqR1fSbsU1YFBkw6TbvfZo+SyI0K6w==" crossorigin="anonymous" referrerpolicy="no-referrer"></Script>
        <Script src='https:cdn.jsdelivr.net/npm/i18n-js@4.3.2/dist/browser/index.min.js'></Script>
        <Script src="https:cdnjs.cloudflare.com/ajax/libs/Swiper/10.3.1/swiper-bundle.js" integrity="sha512-4mlFrp9qno3Tz7HfKNi6hTnBS9Bb+Uzw6frb2U/4Jc0wHdL36LprwQqgDemKNvLVWSfoeQfrgLDDQA0N4oHxgA==" crossorigin="anonymous" referrerpolicy="no-referrer"></Script>
        {/* helper */}
        <Script src='https:cdn.jsdelivr.net/npm/helper-js@3.1.5/dist/index.iife.min.js'></Script>
        <Script src="https:code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></Script>
        <Script src="https:cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></Script>
        <Script src="https:cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></Script>

        <Script src="https:cdnjs.cloudflare.com/ajax/libs/jquery/3.5.0/jquery.min.js" integrity="sha256-xNzN2a4ltkB44Mc/Jz3pT4iU1cmeR0FkXs4pru/JxaQ=" crossorigin="anonymous"></Script>
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
        <Script src="../src/assets/vendor/js/template-customizer.js"></Script>

{/* <Script src="../"></Script> */}
        <Script src="../src/assets/vendor/libs/jquery/jquery.js"></Script>
        <Script src="../src/assets/vendor/libs/popper/popper.js"></Script>
        <Script src="../src/assets/vendor/js/bootstrap.js"></Script>
        <Script src="../src/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js"></Script>
        <Script src="../src/assets/vendor/libs/node-waves/node-waves.js"></Script>

        <Script src="../src/assets/vendor/libs/hammer/hammer.js"></Script>
        <Script src="../src/assets/vendor/libs/i18n/i18n.js"></Script>
        <Script src="../src/assets/vendor/libs/typeahead-js/typeahead.js"></Script>

        <Script src="../src/assets/vendor/js/menu.js"></Script>
        {/* <!-- endbuild --> */}

        {/* <!-- Vendors JS --> */}
        <Script src="../src/assets/vendor/libs/apex-charts/apexcharts.js"></Script>
        <Script src="../src/assets/vendor/libs/swiper/swiper.js"></Script>
        <Script src="../src/assets/vendor/libs/datatables-bs5/datatables-bootstrap5.js"></Script>

        {/* <!-- Main JS --> */}
        <Script src="../src/assets/js/main.js"></Script>

        {/* <!-- Page JS --> */}
        <Script src="../src/assets/js/dashboards-analytics.js"></Script>
      </body>
    </Html>
  );
}