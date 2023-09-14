<?php

namespace App\Http\Controllers;

use App\Models\Doctor;
use Illuminate\Http\Request;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
class DoctorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $doctors = Doctor::all();
        return response()->json($doctors);
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
        
        
        try {

            $validator=Validator::make($request->all(),[
                'email'=>'required',
                'm_num'=>'required',
                'l_num'=>'required',
                'pass'=>'required',
            ]);
            if($validator->fails()){
                return response()->json($validator->errors()->toJson(),400);
            }
            
            Doctor::create([
                'First_Name'=>$request->fname,
                'Last_name'=>$request->lname,
                'email'=>$request->email,
                'password'=>HASH::make($request->pass),
                'Date_of_birth'=>$request->dob,
                'Mobile_number'=>$request->m_num,
                'License_number'=>$request->l_num,
                'Address'=>$request->add,
                'Gender'=>$request->r1,
            ]);
    
            return response()->json(['message' => 'User created successfully']);
        } catch (QueryException $exception) {
            if ($exception instanceof \Illuminate\Database\QueryException && $exception->errorInfo[1] == 1062) {
                // Unique constraint violation (duplicate entry)
                return response()->json(['error' => 'Duplicate entry'], 422);
            }
            
    
            // Handle other exceptions or re-throw if necessary
            throw $exception;
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Doctor  $doctor
     * @return \Illuminate\Http\Response
     */
    public function show(Doctor $doctor)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Doctor  $doctor
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return response()->json(Doctor::whereId($id)->first());
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Doctor  $doctor
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
            'l_num' => 'required',
            'add' => 'required',
            
        ]);
    
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 422);
        }
    
        $user = Doctor::whereId($id)->first();
    
        $user->update([
            'First_Name' => $request->fname,
            'last_name' => $request->lname,
            'email' => $request->email,
            'Date_of_birth' => $request->dob,
            'Mobile_number' => $request->m_num,
            'License_number' => $request->l_num,
            'Address' => $request->add,
           
        ]);
    
        return response()->json('Doctor updated successfully');
    }
    public function Doctorstatus(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'status' => 'required|in:pending,active,rejected',
        ]);
    
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 422);
        }
    
        $user = Doctor::find($id);
    
        if (!$user) {
            return response()->json(['error' => 'Doctor not found'], 404);
        }
    
        $user->update([
            'status' => $request->status,
        ]);
    
        return response()->json('Doctor updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Doctor  $doctor
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $doctor = Doctor::where('id', $id)->first();
        if (!$doctor) {
            return response()->json(['error' => 'Doctor not found'], 404);
        }
        $doctor->delete();
        return response()->json(['message' => 'Doctor deleted successfully']);
    }
     /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        Auth::setDefaultDriver('doctors-api');
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    // public function login(Request $request)
    // {   
        
    //     $validator =Validator::make($request->all(),[
    //         'email'=>'required',
    //         'password'=>'required',
            
    //        ]);
    //        $user = Doctor::where('email', $validator['email'])->first();
    //        if (!$user::where('pending', $user->status)) {
    //                 return response()->json(['error' => 'Invalid status'], 401);
    //             }
    //             else{
    //                 return response()->json(['message' => 'valid status']);
    //             }
    //        if($validator->fails() )
    //        {
    //         return response()->json($validator->errors(),400);
    //        }
           
            
           
    //        if (! $token = auth()->attempt($validator->validated())) {
                
    //             return response()->json(['error' => 'Unauthorized'], 401);
    //         }
    
    //         return $this->respondWithToken($token);
    // }

    public function login(Request $request)
{
    $validator = Validator::make($request->all(), [
        'email' => 'required|email',
        'password' => 'required',
    ]);

    if ($validator->fails()) {
        return response()->json($validator->errors(), 400);
    }

    $credentials = $request->only('email', 'password');

    // Check if the email exists
    $user = Doctor::where('email', $credentials['email'])->first();
   
    // Check if the status is valid
    if ("pending" === $user->status) {
        return response()->json(['error' => 'Processing: Your verification is in processing'], 401);
    }
    else if("rejected" === $user->status){
        return response()->json(['error' => 'Error: Your accound is not approved by medisist'], 401);
    }
    

   

    
           if (! $token = auth()->attempt($validator->validated())) {
                
                return response()->json(['error' => 'Error: Invalid email or password.'], 401);
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
