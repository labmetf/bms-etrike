<!doctype html>
<html lang="en">
  <head>
  	<title>BMS</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=yes">
    
    
    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900,1200,1400,1600,1800,1900,2000" rel="stylesheet">

		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
		<link rel="stylesheet" href="{{ asset('/sielis_folder/css/style.css') }}">
    <script type="text/javascript" src="{{ asset('/fusion/js/jquery-3.6.0.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/fusion/js/fusioncharts.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/fusion/js/themes/fusioncharts.theme.fusion.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/fusion/integrations/jquery/js/jquery-fusioncharts.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
    
  </head>
  
  <body style="background-color:white;">
    <h2 class="text1">Battery Monitoring System</h2>
    
		<div class="wrapper d-flex align-items-stretch">
     
      <div id="content" class="pl-1" >
      
        <div class="pos-f-t">
        <div class="card d-flex flex-row mb-3">
              @include('chart.index')
               <div class="pl-2 d-flex flex-grow-1 min-width-zero">
                  
                  <div class="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
                     
                     <div class="mb-1 w-30 w-sm-100 text-center" style="font-size: 14px">
                        <strong>Total Voltage : <span  id="battery_total_voltage_detail"> - V</span></strong><br>
                        
                     </div>
                     <div class="mb-1 w-30 w-sm-100 text-center" style="font-size: 14px">
                        <strong>Max Voltage : <span  id="battery_max_voltage_detail"> - V</span></strong><br>
                        <strong>Avg Voltage : <span  id="battery_avg_voltage_detail"> - V</span></strong><br>
                        <strong>Min Voltage : <span  id="battery_min_voltage_detail"> - V</span></strong>
                     </div>
                     <div class="mb-1 w-30 w-sm-100 text-center" style="font-size: 14px">
                        <strong>Max Temp : <span  id="battery_max_temp_detail"> - &#8451;</span></strong> <br>
                        <strong>Avg Temp : <span  id="battery_avg_temp_detail"> - &#8451;</span></strong> <br>
                        <strong>Min Temp : <span  id="battery_min_temp_detail"> - &#8451;</span></strong> 
                     </div>
                     <div class="mb-1 w-30 w-sm-100 text-center" style="font-size: 14px">
                        <strong>Max <span class="tentative-current-soc">SOC</span> :<span id="battery_max_soc_detail">%</span></strong><br>
                        <strong>Avg <span class="tentative-current-soc">SOC</span> :<span  id="battery_avg_soc_detail">%</span></strong><br>
                        <strong>Min <span class="tentative-current-soc">SOC</span> :<span  id="battery_min_soc_detail">%</span></strong>
                     </div>
                     
                    
                     
                  </div>
               </div>
            <nav id="mainbar">

            </nav>
          </div>
          
          
          <br>

        @include('bms.index')
        
      
      </div>

		</div>
   
   


    
    <script type="text/javascript" src="{{ asset('/fusion/function/bms.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/sielis_folder/js/currency.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/sielis_folder/js/popper.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/sielis_folder/js/bootstrap.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('/sielis_folder/js/main.js') }}"></script>


  </body>
</html>
