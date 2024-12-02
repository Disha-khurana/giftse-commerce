<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Studet extends Model
{
    // If you want to explicitly specify the table name (optional if it follows naming conventions):
    protected $table = 'studets';

    // Specify which attributes can be mass assigned
    protected $fillable = ['name', 'class', 'roll_number', 'image'];
}
