<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePatientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('patients', function (Blueprint $table) {
            $table->id('id');
            $table->string('First_Name');
            $table->string('last_name');
            $table->string('email')->unique();
            $table->string('password');
            $table->date('Date_of_birth');
            $table->string('Mobile_number')->unique();
            $table->string('CNIC')->unique();
            $table->string('Address');
            $table->string('Gender');
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
        Schema::dropIfExists('patients');
    }
}
