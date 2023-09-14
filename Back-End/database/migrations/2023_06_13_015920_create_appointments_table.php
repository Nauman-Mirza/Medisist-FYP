<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAppointmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('appointments', function (Blueprint $table) {
            $table->id();
            $table->string('Patient_Name');
            $table->bigInteger('Patient_id')->unsigned();
            $table->foreign('Patient_id')->references('id')->on('patients')->onDelete('cascade');;
            $table->bigInteger('Doctor_id')->unsigned();
            $table->foreign('Doctor_id')->references('id')->on('doctors')->onDelete('cascade');;
            $table->dateTime('Appointment_Date');
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
        Schema::dropIfExists('appointments');
    }
}
