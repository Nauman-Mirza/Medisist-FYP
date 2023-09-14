<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDoctorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('doctors', function (Blueprint $table) {
            $table->id();
            $table->string('First_Name');
            $table->string('last_name');
            $table->string('email')->unique();
            $table->string('password');
            $table->date('Date_of_birth');
            $table->string('Mobile_number')->unique();
            $table->string('License_number')->unique();
            $table->string('Address');
            $table->string('Gender');
            $table->string('status')->default('pending');
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
        Schema::dropIfExists('doctors');
    }
}
