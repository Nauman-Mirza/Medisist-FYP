<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\DoctorController;
use App\Http\Controllers\PatientController;
use App\Http\Controllers\PrescriptionController;
use App\Http\Controllers\ReportsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::group(['prefix'=>'admins'],function($router){
    //ADMIN ROUTES
    Route::post('/login',[AdminController::class,'login']); 
    Route::post('/register',[AdminController::class,'register']);
    //DOCTOR ROUTES ADMIN SIDE
    Route::get('/admindoctor', [DoctorController::class, 'index']);
    Route::get('/adminDoctor/{id}/edit', [DoctorController::class, 'edit']);
    Route::put('/adminDoctor/update/{id}', [DoctorController::class, 'update']);
    Route::put('/admindoctorstatusupdate/{id}', [DoctorController::class, 'Doctorstatus']);
    Route::post('/adminDoctordelete/{id}', [DoctorController::class, 'destroy']); 
    
    //PATIENTS ROUTES ADMIN SIDE
    Route::get('/adminpatient', [PatientController::class, 'index']);
    Route::post('/adminPatientdelete/{id}', [PatientController::class, 'destroy']);
    Route::get('/adminPatient/{id}/edit', [PatientController::class, 'edit']);
    Route::put('/adminPatient/update/{id}', [PatientController::class, 'update']);
    
});
Route::group(['middleware'=>['jwt.role:admins','jwt.auth'],'prefix'=>'admins'],function($router){
    //ADMIN ROUTES
    Route::post('/logout',[AdminController::class,'logout']);
    Route::get('/user-profile',[AdminController::class,'userProfile']);
});






Route::group(['prefix'=>'doctors'],function($router){
    //DOCTOR ROUTES
    Route::post('/login',[DoctorController::class,'login']); 
    Route::post('/register',[DoctorController::class,'register']);
   //PRESCRIPTION ROUTES Doctor
   Route::post('/prescriptioncontroller', [PrescriptionController::class, 'store']);
   Route::get('/doctorPrescription',[PrescriptionController::class,'index']);
   //APPOINTMENTS ROUTES Doctor
   Route::post('/Appointments', [AppointmentController::class, 'store']);
   Route::get('/doctorAppointments', [AppointmentController::class, 'index']);
   Route::post('/doctorAppointmentsdelete/{id}', [AppointmentController::class, 'destroy']);
   // REPORTS ROUTE Doctor
   Route::get('/Reportsshowdoctor', [ReportsController::class, 'ReportShow']);
   
    

});
Route::group(['middleware'=>['jwt.role:doctors','jwt.auth'],'prefix'=>'doctors'],function($router){
    //DOCTOR ROUTES
    Route::post('/logout',[DoctorController::class,'logout']);
    Route::get('/user-profile',[DoctorController::class,'userProfile']);
   


});








Route::group(['prefix'=>'patients'],function($router){
    //PATIENT ROUTES
    Route::post('/login',[PatientController::class,'login']); 
    Route::post('/register',[PatientController::class,'register']);
     //PRESCRIPTION ROUTES Doctor
     Route::get('/showprescription', [PrescriptionController::class, 'show']);
     //APPOINTMENTS ROUTES Doctor
    Route::get('/Appointments', [AppointmentController::class, 'show']);
     // REPORTS ROUTE Doctor
    Route::post('/Reports_upload', [ReportsController::class, 'UploadReport']);
    Route::get('/Report_show', [ReportsController::class, 'show']);
                         
    
});
Route::group(['middleware'=>['jwt.role:patients','jwt.auth'],'prefix'=>'patients'],function($router){
    //PATIENT ROUTES
    Route::post('/logout',[PatientController::class,'logout']);
    Route::get('/user-profile-patient',[PatientController::class,'userProfile']);
   
});




