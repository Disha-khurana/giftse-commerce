<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id(); // Primary key
            $table->string('name'); // Product name
            $table->decimal('price', 8, 2); // Product price
            $table->json('variants')->nullable(); // Product variants (stored as JSON)
            $table->text('direction')->nullable(); // Product direction
            $table->text('description')->nullable(); // Product description
            $table->text('information')->nullable(); // Product information
            $table->text('details')->nullable(); // Product details
            $table->text('manufacture_details')->nullable(); // Product manufacture details
            $table->json('images')->nullable(); // Multiple images (stored as JSON paths)
            $table->timestamps(); // Created at and Updated at timestamps
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
