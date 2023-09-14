<?php

namespace App\Http\Controllers;

use App\Models\Reports;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Validator;
class ReportsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function ReportShow(Request $request)
    {
        
        $patientid = $request->input('p_id');
        $reports = Reports::where('Patient_id', $patientid)->get();
    
        if ( $patientid ) {
            return response()->json($reports);
        } else {
            return response()->json(['message' => 'Report not found'], 404);
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
    public function UploadReport(Request $request)
{
    try {
        $patientId = Auth::guard('patients-api')->id();
        
        $validator = Validator::make($request->all(), [
            'image' => 'required|image',
            'date' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson(), 400);
        }

        if ($request->hasFile('image') && $request->file('image')->isValid()) {
            $image = $request->file('image');
            $name = time() . '.' . $image->getClientOriginalExtension();
            $image->move('images/', $name);

            Reports::create([
                'Report_Date' => $request->date,
                'Patient_id' => $patientId,
                'name' => $name
            ]);

            return response()->json(['success' => 'Uploaded successfully']);
        }
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
     * @param  \App\Models\Reports  $reports
     * @return \Illuminate\Http\Response
     */
    public function show(Reports $reports)
    {
        $patientId = Auth::id();
        $reports = Reports::where('Patient_id', $patientId)
            ->get();
    
        if ($reports->isNotEmpty()) {
            return response()->json($reports);
        } else {
            return response()->json(['message' => 'Report not found'], 404);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Reports  $reports
     * @return \Illuminate\Http\Response
     */
    public function edit(Reports $reports)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Reports  $reports
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Reports $reports)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Reports  $reports
     * @return \Illuminate\Http\Response
     */
    public function destroy(Reports $reports)
    {
        //
    }
}
