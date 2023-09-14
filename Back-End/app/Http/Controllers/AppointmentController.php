<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use Illuminate\Http\Request;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Auth;
class AppointmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $doctorId = Auth::guard('doctors-api')->id();
        $appointments = Appointment::where('Doctor_id', $doctorId)
            ->latest()
            ->get();
            if ($appointments->isNotEmpty()) {
                return response()->json($appointments);
            } else {
                return response()->json(['message' => 'Appointment not found'], 404);
            }
    }
    

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $doctorId = Auth::guard('doctors-api')->id();

        
    
                Appointment::create([
                    'Patient_Name'=>$request->p_name,
                    'Appointment_Date'=>$request->app_date,
                    'Patient_id' => $request->p_id,
                    'Doctor_id' => $doctorId
                    
                ]); 
                return response()->json(['message' => 'Appointment added successfully']);
                
            } catch (QueryException $exception) {
                if ($exception instanceof \Illuminate\Database\QueryException && $exception->errorInfo[1] == 1062) {
                  
                    return response()->json(['error' => 'Duplicate entry'], 422);
                }
                throw $exception;
            }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        $patientId = Auth::id();
        $appointments = Appointment::where('Patient_id', $patientId)
            ->with('doctor')
            ->get();
    
        if ($appointments->isNotEmpty()) {
            return response()->json($appointments);
        } else {
            return response()->json(['message' => 'Appointment not found'], 404);
        }
    }
    

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function edit(Appointment $appointment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Appointment $appointment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $appointment = Appointment::where('id', $id)->first();
    
        if (!$appointment) {
            return response()->json(['error' => 'Appointment not found'], 404);
        }
    
        // Delete the appointment
        $appointment->delete();
    
        return response()->json(['message' => 'Appointment deleted successfully']);
    }
}
