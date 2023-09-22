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
        Schema::create('db_post', function (Blueprint $table) {
            $table->id();
            $table->string('title',1000);
            $table->string('slug',1000);
            $table->mediumText('detail');
            $table->string('image',1000);
            $table->string('metakey');
            $table->string('metadesc');
            $table->unsignedInteger('created_by')->default(0);
            $table->timestamps();
            $table->unsignedInteger('updated_by')->nullable();
            $table->tinyInteger('status')->default(2);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('db_post');
    }
};