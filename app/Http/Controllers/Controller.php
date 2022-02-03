<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;
use App\Models\Value;
use InfluxDB;
use DB;

date_default_timezone_set("Asia/Jakarta");



class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    
    public function value() {

        
        $value = DB::select("SELECT modul as cell_id,voltage,temperature,soc FROM `datapengukuran` where timestamp between '2022-02-02 10:27:00' and '2022-02-02 10:28:00' order by timestamp desc , modul asc limit 20");
        #$value = DB::select("SELECT modul as cell_id,voltage,temperature,soc FROM `datapengukuran` order by timestamp desc , modul asc limit 20");
        
        #$total_voltage = 0;
        #$soc = 100;
        #$max_temperature = 0;
        
        #if ($value) {
        #      foreach ($value as $val) {
                
        #        $total_voltage = $total_voltage + $val->voltage;
                
        #        if ($val->soc < $soc ) {
        #            $soc = $val->soc;
        #            }
                 
        #        if ($val->temperature > $max_temperature ) {
        #            $max_temperature = $val->temperature;
        #            }    
                     
        #            } 
                    
        #        $total_voltage = floatval(number_format($total_voltage,2)); 
        
        #$general = array("total_voltage"=>$total_voltage, "max_temperature"=>$max_temperature , "soc"=>$soc);
        
        $general = DB::select("SELECT sum(voltage) as total_voltage , max(voltage) as max_voltage , min(voltage) as min_voltage , avg(voltage) as avg_voltage ,
         max(temperature) as max_temperature , min(temperature) as min_temperature , avg(temperature) as avg_temperature ,
         max(soc) as max_soc , min(soc) as min_soc , avg(soc) as avg_soc 
         FROM `datapengukuran` where timestamp between '2022-02-02 10:27:00' and '2022-02-02 10:28:00' order by timestamp desc , modul asc limit 20");
         return response()->json(['value' =>$value , 'general' =>$general] );
        }
        
        
        
}
               
                    
