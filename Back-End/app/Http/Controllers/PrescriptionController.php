<?php

namespace App\Http\Controllers;

// use App\Models\Patient;
use App\Models\Prescription;
use Illuminate\Http\Request;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Auth;
class PrescriptionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $patientid = $request->input('p_id');

    $prescription = Prescription::where('Patient_id', $patientid)->with('doctor')->get();

    if ($patientid ) {
        return response()->json($prescription);
    } else {
        return response()->json(['message' => 'Prescription not found'], 404);
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
            $medicineFields = $request->input('medicineFields');

        $medicines = [];
        if (is_array($medicineFields) && count($medicineFields) > 0) {
            foreach ($medicineFields as $field) {
                $medicineName = $field['med'];
                $timings = implode(',', $field['ch1']);

                $medicines[] = [
                    'Medicine' => $medicineName,
                    'Timing' => $timings,
                ];
            }
        }

        Prescription::create([
            'Patient_Name' => $request->p_name,
            'Prescription_Date' => $request->pre_date,
            'Patient_id' => $request->p_id,
            'Doctor_id' => $doctorId,
            'Diagnose' => $request->dia,
            'Medicines' => json_encode($medicines),
            'Recommendation'=>$request->rec
            
        ]);
            return response()->json(['message' => 'PreScription added successfully']);
            
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
     * @param  \App\Models\Prescription  $prescription
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        $patientId = Auth::id();
        $prescription = Prescription::where('Patient_id', $patientId)
            ->with('doctor')
            ->get();
    
        if ($prescription->isNotEmpty()) {
            return response()->json($prescription);
        } else {
            return response()->json(['message' => 'Appointment not found'], 404);
        }
    }
    
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Prescription  $prescription
     * @return \Illuminate\Http\Response
     */
    public function edit(Prescription $prescription)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Prescription  $prescription
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Prescription $prescription)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Prescription  $prescription
     * @return \Illuminate\Http\Response
     */
    public function destroy(Prescription $prescription)
    {
        //
    }
}
