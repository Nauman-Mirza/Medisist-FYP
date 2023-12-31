<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Prescription extends Model
{
    protected $guarded =[];
    public function doctor()
    {
        return $this->belongsTo(Doctor::class,'Doctor_id');
    }

}
