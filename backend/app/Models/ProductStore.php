<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ProductStore extends Model
{
    use HasFactory;
    protected $table='db_productstore';
    
    public function product(): BelongsTo{
        return $this->belongsTo(Product::class);
    }
}