<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reports extends Model
{
    use HasFactory;
    protected $fillable =['name','Report_Date','Patient_id'];
    public function patient()
    {
        return $this->belongsTo(Patient::class,'Patient_id');
    }
    
}
