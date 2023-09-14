<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePrescriptionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prescriptions', function (Blueprint $table) {
            $table->id();
            $table->string('Patient_Name');
            $table->date('Prescription_Date');
            $table->bigInteger('Patient_id')->unsigned();
            $table->foreign('Patient_id')->references('id')->on('patients')->onDelete('cascade');
            $table->bigInteger('Doctor_id')->unsigned();
            $table->foreign('Doctor_id')->references('id')->on('doctors');
            $table->string('Diagnose');
            $table->string('Medicines');
            $table->string('Recommendation');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('prescriptions');
    }
}
