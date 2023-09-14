<?php

namespace App\Http\Controllers;

use App\Models\Patient;
use Illuminate\Http\Request;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
class PatientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $patient = Patient::all();
        return response()->json($patient);
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
    public function register(Request $request)
    {
        $validator=Validator::make($request->all(),[
            'fname'=>'required',
            'lname'=>'required',
            'email'=>'required',
            'm_num'=>'required',
            'cnic'=>'required',
            'pass'=>'required'
        ]);
        if($validator->fails()){
            return response()->json($validator->errors()->toJson(),400);
        }
        
        try {
            
            Patient::create([
                'First_Name'=>$request->fname,
                'Last_name'=>$request->lname,
                'email'=>$request->email,
                'password'=>Hash::make($request->pass),
                'Date_of_birth'=>$request->dob,
                'Mobile_number'=>$request->m_num,
                'CNIC'=>$request->cnic,
                'Address'=>$request->add,
                'Gender'=>$request->r1,
            ]);
    
            return response()->json(['message' => 'Patient created successfully']);
        } catch (QueryException $exception) {
            if ($exception instanceof \Illuminate\Database\QueryException && $exception->errorInfo[1] == 1062) {
                // Unique constraint violation (duplicate entry)
                return response()->json(['error' => 'Duplicate entry'], 422);
            }
            else if ($exception->getCode() === '23000') {
                // Integrity constraint violation (column cannot be null)
                return response()->json(['error' => 'Must have to enter complete information'], 422);
            }
    
            // Handle other exceptions or re-throw if necessary
            throw $exception;
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Patient  $patient
     * @return \Illuminate\Http\Response
     */
    public function show(Patient $patient)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Patient  $patient
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return response()->json(Patient::whereId($id)->first());
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Patient  $patient
     * @return \Illuminate\Http\Response
     */
    

        public function update(Request $request, $id)
        {
            $validator = Validator::make($request->all(), [
                'fname' => 'required',
                'lname' => 'required',
                'email' => 'required',
                'dob' => 'required',
                'm_num' => 'required',
                'cnic' => 'required',
                'add' => 'required',
                
            ]);
        
            if ($validator->fails()) {
                return response()->json(['error' => $validator->errors()], 422);
            }
        
            $user = Patient::whereId($id)->first();
        
            $user->update([
                'First_Name' => $request->fname,
                'Last_name' => $request->lname,
                'email' => $request->email,
                'Date_of_birth' => $request->dob,
                'Mobile_number' => $request->m_num,
                'CNIC' => $request->cnic,
                'Address' => $request->add,
               
            ]);
        
            return response()->json('Patient updated successfully');
        }
    

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Patient  $patient
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $patient = Patient::where('id', $id)->first();
        if (!$patient) {
            return response()->json(['error' => 'Patient not found'], 404);
        }
        $patient->delete();
        return response()->json(['message' => 'Patient deleted successfully']);
    }
     /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        Auth::setDefaultDriver('patients-api');
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        
       $validator =Validator::make($request->all(),[
        'email'=>'required',
        'password'=>'required'
       ]);
       if($validator->fails())
       {
        return response()->json($validator->errors(),400);
       }
        if (! $token = auth()->attempt($validator->validated())) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function userProfile()
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user'=>auth()->user()
        ]);
    }
}

