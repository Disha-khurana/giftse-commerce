<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('studets', function (Blueprint $table) {
            $table->id(); // Primary key
            $table->string('name'); // Student name
            $table->string('class'); // Student class
            $table->integer('roll_number')->unique(); // Unique roll number
            $table->string('image')->nullable(); // Image path (optional, can be null)
            $table->timestamps(); // Created at and Updated at timestamps
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('studets');
    }
};
