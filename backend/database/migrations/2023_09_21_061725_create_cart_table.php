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
        Schema::create('db_cart', function (Blueprint $table) {
            $table->id();
            $table->unsignedTinyInteger('user_id');
            $table->unsignedTinyInteger('product_id');
            $table->unsignedInteger('quantity',1000);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('db_cart');
    }
};