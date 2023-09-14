<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;use Tymon\JWTAuth\Contracts\JWTSubject;

class Patient extends Authenticatable implements JWTSubject
{
  
    use Notifiable;

   // If you have a custom guard for the Doctor model, specify it here

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'First_Name',
        'Last_name',
        'email',
        'password',
        'Date_of_birth',
        'Mobile_number',
        'CNIC',
        'Address',
        'Gender',
        // Add other fillable attributes
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
        // Add other hidden attributes
    ];
      /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return ['role'=>'patients'];
    }
}
