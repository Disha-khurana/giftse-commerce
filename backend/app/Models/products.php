<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class products extends Model
{
    // Specify the table name (optional if it follows naming conventions)
    protected $table = 'products';

    // Specify the fields that are mass assignable
    protected $fillable = [
        'name',
        'price',
        'variants',
        'direction',
        'description',
        'information',
        'details',
        'manufacture_details',
        'images',
    ];

    // Cast the JSON fields to arrays automatically
    protected $casts = [
        'variants' => 'array', // JSON field for variants
        'images' => 'array',   // JSON field for images
    ];
}
