<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Slider;
use Illuminate\Http\Request;

class SliderController extends Controller
{
    public function index()
    {
        $data = Slider::all();
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'data' => $data],
            200
        );
    }
}